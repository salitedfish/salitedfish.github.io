---
lang: zh-CN
title: 随笔
description: 页面的描述
---

### nginx配置
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

    gzip                  on;
    gzip_min_length       1k;
    gzip_buffers          4       16k;
    gzip_comp_leval       2;
    gzip_types text/plain application/javascript application/css text/css application/xml text/javascript application/x-httpd-php image/jpeg image/gif image/png
    gzip_vary             off;
    gzip_disable          "MSIE [1-6]\."
}
```

### 静态资源配置
```sh
server {
    gzip on;
    listen 8080 default_server;
    root /usr/share/nginx/html/enterprise-provenance;
    location / {
        try_files $uri $uri/ /index.html;
    }
    location /root/ {
        proxy_pass http://172.16.101.87:46792/;
    }
}
```
