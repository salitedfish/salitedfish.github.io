import{_ as n,o as s,c as a,b as e}from"./app.07e95a8e.js";const i={},t=e(`<h4 id="nginx\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#nginx\u914D\u7F6E" aria-hidden="true">#</a> nginx\u914D\u7F6E</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>events <span class="token punctuation">{</span>
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

    <span class="token function">gzip</span>                  on<span class="token punctuation">;</span>
    gzip_min_length       1k<span class="token punctuation">;</span>
    gzip_buffers          <span class="token number">4</span>       16k<span class="token punctuation">;</span>
    gzip_comp_leval       <span class="token number">2</span><span class="token punctuation">;</span>
    gzip_types text/plain application/javascript application/css text/css application/xml text/javascript application/x-httpd-php image/jpeg image/gif image/png
    gzip_vary             off<span class="token punctuation">;</span>
    gzip_disable          <span class="token string">&quot;MSIE [1-6]\\.&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u9759\u6001\u8D44\u6E90\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u9759\u6001\u8D44\u6E90\u914D\u7F6E" aria-hidden="true">#</a> \u9759\u6001\u8D44\u6E90\u914D\u7F6E</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>server <span class="token punctuation">{</span>
    <span class="token function">gzip</span> on<span class="token punctuation">;</span>
    listen <span class="token number">8080</span> default_server<span class="token punctuation">;</span>
    root /usr/share/nginx/html/enterprise-provenance<span class="token punctuation">;</span>
    location / <span class="token punctuation">{</span>
        try_files <span class="token variable">$uri</span> <span class="token variable">$uri</span>/ /index.html<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    location /root/ <span class="token punctuation">{</span>
        proxy_pass http://172.16.101.87:46792/<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u901A\u4FE1" tabindex="-1"><a class="header-anchor" href="#\u901A\u4FE1" aria-hidden="true">#</a> \u901A\u4FE1</h4><p>https\u4F20\u8F93\u8FC7\u7A0B\u540C\u65F6\u7528\u4E86\u4E09\u4E2A\u5BC6\u94A5\uFF0C\u670D\u52A1\u7AEF\u751F\u6210\u7684\u516C\u94A5\u548C\u79C1\u94A5\u7528\u6765\u975E\u5BF9\u79F0\u52A0\u5BC6\uFF0C\u5BA2\u6237\u7AEF\u751F\u6210\u7684\u5BC6\u94A5\u7528\u6765\u5BF9\u79F0\u52A0\u5BC6 https\u5BF9\u79F0\u52A0\u5BC6\u6240\u9700\u8981\u7684\u5BC6\u94A5\uFF0C\u662F\u7528https\u975E\u5BF9\u79F0\u52A0\u5BC6\u6765\u4F20\u8F93\u7684\uFF0C\u5185\u5BB9\u6570\u636E\u901A\u8FC7\u5BC6\u94A5\u8FDB\u884C\u5BF9\u79F0\u52A0\u5BC6\u4F20\u8F93</p>`,6),l=[t];function c(p,o){return s(),a("div",null,l)}var d=n(i,[["render",c],["__file","\u968F\u7B14.html.vue"]]);export{d as default};
