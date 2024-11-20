import{_ as s,o as a,c as e,a as i}from"./app.96ddbfb7.js";const t={};function l(c,n){return a(),e("div",null,n[0]||(n[0]=[i(`<h4 id="nginx-\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#nginx-\u914D\u7F6E" aria-hidden="true">#</a> nginx \u914D\u7F6E</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>events <span class="token punctuation">{</span>
    worker_connections <span class="token number">104800</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

http <span class="token punctuation">{</span>
    log_format main <span class="token string">&#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot;&#39;</span>
                    <span class="token string">&#39;$status $body_bytes_sent &quot;$http_referer&quot;&#39;</span>
                    <span class="token string">&#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;</span><span class="token punctuation">;</span>
    access_log /var/log/nginx/access.log main<span class="token punctuation">;</span>

    sendfile              on<span class="token punctuation">;</span>
    tcp_nopush            on<span class="token punctuation">;</span>
    tcp_nodelay           on<span class="token punctuation">;</span>
    keepalive_timeout     <span class="token number">65</span><span class="token punctuation">;</span>
    types_hash_max_size   <span class="token number">2048</span><span class="token punctuation">;</span>

    client_max_body_size  20m<span class="token punctuation">;</span>

    include               /etc/nginx/mime.types<span class="token punctuation">;</span>
    default_type          application/octet-stream<span class="token punctuation">;</span>

    include               /etc/nginx/conf.d/*.conf<span class="token punctuation">;</span>
    include               /etc/nginx/conf.d/*/*.conf<span class="token punctuation">;</span>

    <span class="token comment"># \u5982\u679C\u6253\u5305\u6587\u4EF6\u672C\u6765\u5C31\u6709gz\u6587\u4EF6\u5219\u7528\u8FD9\u4E2A\u5C31\u884C\uFF0C\u4E0D\u9700\u8981\u670D\u52A1\u5668\u518D\u538B\u7F29</span>
    gzip_static           on<span class="token punctuation">;</span>

    <span class="token comment"># \u5982\u679C\u6253\u5305\u6587\u4EF6\u6CA1\u6709gz\u6587\u4EF6\uFF0C\u5219\u7528\u4E0B\u9762\u8FD9\u4E00\u6BB5\uFF0C\u7531\u670D\u52A1\u5668\u81EA\u884C\u538B\u7F29\u540E\u8FD4\u56DE\u7ED9\u5BA2\u6237\u7AEF</span>
    <span class="token function">gzip</span>                  on<span class="token punctuation">;</span>
    gzip_min_length       1k<span class="token punctuation">;</span>
    gzip_buffers          <span class="token number">4</span>       16k<span class="token punctuation">;</span>
    gzip_comp_level       <span class="token number">2</span><span class="token punctuation">;</span>
    gzip_types text/plain application/javascript application/css text/css application/xml text/javascript application/x-httpd-php image/jpeg image/gif image/png
    gzip_vary             off<span class="token punctuation">;</span>
    gzip_disable          <span class="token string">&quot;MSIE [1-6]\\.&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u9759\u6001\u8D44\u6E90\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u9759\u6001\u8D44\u6E90\u914D\u7F6E" aria-hidden="true">#</a> \u9759\u6001\u8D44\u6E90\u914D\u7F6E</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>server <span class="token punctuation">{</span>
    listen <span class="token number">80</span><span class="token punctuation">;</span>
    server_name mall.inmvo.com<span class="token punctuation">;</span>
    <span class="token builtin class-name">return</span> <span class="token number">301</span> https://<span class="token variable">$host</span><span class="token variable">$request_uri</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

server <span class="token punctuation">{</span>
        listen  <span class="token number">443</span> ssl http2 <span class="token assign-left variable">backlog</span><span class="token operator">=</span><span class="token number">10000</span><span class="token punctuation">;</span>
        server_name mall.inmvo.com<span class="token punctuation">;</span>
        keepalive_timeout   <span class="token number">70</span><span class="token punctuation">;</span>
        client_max_body_size 50M<span class="token punctuation">;</span>

        ssl_certificate      /usr/local/nginx/cert/6314079_mall.inmvo.com.pem<span class="token punctuation">;</span>
        ssl_certificate_key  /usr/local/nginx/cert/6314079_mall.inmvo.com.key<span class="token punctuation">;</span>
        ssl_session_timeout  10m<span class="token punctuation">;</span>
        ssl_protocols   SSLv3 TLSv1 TLSv1.1 TLSv1.2<span class="token punctuation">;</span>
        ssl_ciphers  ALL:<span class="token operator">!</span>ADH:<span class="token operator">!</span>EXPORT56:RC4+RSA:+HIGH:+MEDIUM:+LOW:+SSLv2:+EXP<span class="token punctuation">;</span>
        ssl_prefer_server_ciphers   on<span class="token punctuation">;</span>

        add_header Cache-Control private<span class="token punctuation">;</span>

        // \u6839\u8DEF\u5F84\u8BBF\u95EE\u9879\u76EE
        location / <span class="token punctuation">{</span>
            root /usr/share/nginx/html/base<span class="token punctuation">;</span>
            try_files <span class="token variable">$uri</span> <span class="token variable">$uri</span>/ /index.html<span class="token punctuation">;</span> // \u89E3\u51B3history\u6A21\u5F0F\u4E0B\u8BBF\u95EE\u6CA1\u5339\u914D\u5230\u8DEF\u5F84404\u95EE\u9898
        <span class="token punctuation">}</span>
        // \u5B50\u8DEF\u5F84\u8BBF\u95EE\u9879\u76EE
        // \u524D\u7AEF\u8BBE\u7F6EpublicPath\u4E3A/child/\uFF0C\u5E76\u4E14router\u4E5F\u8981\u8FDB\u884C\u76F8\u5173\u8BBE\u7F6E
        location /child <span class="token punctuation">{</span>
            root /usr/share/nginx/html<span class="token punctuation">;</span> // \u7ED3\u5C3E\u52A0\u4E0D\u52A0<span class="token string">&quot;/&quot;</span>\u770B\u5B9E\u9645\u6D4B\u8BD5
            try_files <span class="token variable">$uri</span> <span class="token variable">$uri</span>/ /child/index.html<span class="token punctuation">;</span> // \u89E3\u51B3history\u6A21\u5F0F\u4E0B\u8BBF\u95EE\u6CA1\u5339\u914D\u5230\u8DEF\u5F84404\u95EE\u9898
        <span class="token punctuation">}</span>

        // \u5B50\u8DEF\u5F84\u8BBF\u95EE\u9879\u76EE1
        // \u524D\u7AEF\u8BBE\u7F6EpublicPath\u4E3A/web/\uFF0C\u5E76\u4E14router\u4E5F\u8981\u8FDB\u884C\u76F8\u5173\u8BBE\u7F6E
        location /web <span class="token punctuation">{</span>
            <span class="token builtin class-name">alias</span> /usr/share/nginx/html/web<span class="token punctuation">;</span> // \u7ED3\u5C3E\u52A0\u4E0D\u52A0<span class="token string">&quot;/&quot;</span>\u770B\u5B9E\u9645\u6D4B\u8BD5
            try_files <span class="token variable">$uri</span> <span class="token variable">$uri</span>/ /web/index.html<span class="token punctuation">;</span> // \u89E3\u51B3history\u6A21\u5F0F\u4E0B\u8BBF\u95EE\u6CA1\u5339\u914D\u5230\u8DEF\u5F84404\u95EE\u9898
        <span class="token punctuation">}</span>

        // \u5B50\u8DEF\u5F84\u8BBF\u95EE\u9879\u76EE2
        // \u524D\u7AEF\u8BBE\u7F6EpublicPath\u4E3A/h5/\uFF0C\u5E76\u4E14router\u4E5F\u8981\u8FDB\u884C\u76F8\u5173\u8BBE\u7F6E
        location /h5 <span class="token punctuation">{</span>
            <span class="token builtin class-name">alias</span> /usr/share/nginx/html/h5<span class="token punctuation">;</span> // \u7ED3\u5C3E\u52A0\u4E0D\u52A0<span class="token string">&quot;/&quot;</span>\u770B\u5B9E\u9645\u6D4B\u8BD5
            try_files <span class="token variable">$uri</span> <span class="token variable">$uri</span>/ /h5/index.html<span class="token punctuation">;</span> // \u89E3\u51B3history\u6A21\u5F0F\u4E0B\u8BBF\u95EE\u6CA1\u5339\u914D\u5230\u8DEF\u5F84404\u95EE\u9898
        <span class="token punctuation">}</span>

        location /root/ <span class="token punctuation">{</span>
            proxy_pass http://frontserver/<span class="token punctuation">;</span>
            proxy_read_timeout <span class="token number">86400</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        location /chat/ <span class="token punctuation">{</span>
            proxy_pass http://customerserver/<span class="token punctuation">;</span>
            proxy_set_header Host <span class="token variable">$host</span><span class="token punctuation">;</span>
            proxy_http_version <span class="token number">1.1</span><span class="token punctuation">;</span>
            proxy_set_header Upgrade <span class="token variable">$http_upgrade</span><span class="token punctuation">;</span>
            proxy_set_header Connection <span class="token string">&quot;upgrade&quot;</span><span class="token punctuation">;</span>
            proxy_read_timeout <span class="token number">86400</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

upstream frontserver <span class="token punctuation">{</span>
    server <span class="token number">192.168</span>.0.178:12009<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

upstream customerserver <span class="token punctuation">{</span>
    server <span class="token number">192.168</span>.0.178:8090<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4)]))}var u=s(t,[["render",l],["__file","config.html.vue"]]);export{u as default};
