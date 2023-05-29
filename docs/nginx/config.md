---
lang: zh-CN
title: 配置
description: 页面的描述
---

#### nginx 配置

```sh
events {
    worker_connections 104800;
}

http {
    log_format main '$remote_addr - $remote_user [$time_local] "$request"'
                    '$status $body_bytes_sent "$http_referer"'
                    '"$http_user_agent" "$http_x_forwarded_for"';
    access_log /var/log/nginx/access.log main;

    sendfile              on;
    tcp_nopush            on;
    tcp_nodelay           on;
    keepalive_timeout     65;
    types_hash_max_size   2048;

    client_max_body_size  20m;

    include               /etc/nginx/mime.types;
    default_type          application/octet-stream;

    include               /etc/nginx/conf.d/*.conf;
    include               /etc/nginx/conf.d/*/*.conf;

    # 如果打包文件本来就有gz文件则用这个就行，不需要服务器再压缩
    gzip_static           on;

    # 如果打包文件没有gz文件，则用下面这一段，由服务器自行压缩后返回给客户端
    gzip                  on;
    gzip_min_length       1k;
    gzip_buffers          4       16k;
    gzip_comp_level       2;
    gzip_types text/plain application/javascript application/css text/css application/xml text/javascript application/x-httpd-php image/jpeg image/gif image/png
    gzip_vary             off;
    gzip_disable          "MSIE [1-6]\."
}
```

#### 静态资源配置

```sh
server {
    listen 80;
    server_name mall.inmvo.com;
    return 301 https://$host$request_uri;
}

server {
        listen  443 ssl http2 backlog=10000;
        server_name mall.inmvo.com;
        keepalive_timeout   70;
        root /usr/share/nginx/html/yimuFrontH5;
        index index.html index.htm index.nginx-debian.html;
        client_max_body_size 50M;

        ssl_certificate      /usr/local/nginx/cert/6314079_mall.inmvo.com.pem;
        ssl_certificate_key  /usr/local/nginx/cert/6314079_mall.inmvo.com.key;
        ssl_session_timeout  10m;
        ssl_protocols   SSLv3 TLSv1 TLSv1.1 TLSv1.2;
        ssl_ciphers  ALL:!ADH:!EXPORT56:RC4+RSA:+HIGH:+MEDIUM:+LOW:+SSLv2:+EXP;
        ssl_prefer_server_ciphers   on;

        add_header Cache-Control private;

        location / {
            index index.html;
            try_files $uri $uri/ /index.html; // 解决history模式下访问没匹配到路径404问题
            if ($request_filename ~* .*.(html|htm)$)
            {
               expires -1s;
            }

            if ($request_filename ~* .*.(gif|jpg|jpeg|png|bmp|swf)$)
            {
               expires 30d;
            }

            if ($request_filename ~ .*.(js|css)$)
            {
              expires 7d;
            }
        }

        location /root/ {
            proxy_pass http://frontserver/;
            proxy_read_timeout 86400;
        }
        location /chat/ {
            proxy_pass http://customerserver/;
            proxy_set_header Host $host;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection "upgrade";
            proxy_read_timeout 86400;
        }
}

upstream frontserver {
    server 192.168.0.178:12009;
}

upstream customerserver {
    server 192.168.0.178:8090;
}
```
