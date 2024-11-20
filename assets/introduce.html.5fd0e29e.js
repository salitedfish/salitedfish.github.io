import{_ as n,o as a,c as e,a as i}from"./app.96ddbfb7.js";const l={};function t(r,s){return a(),e("div",null,s[0]||(s[0]=[i(`<h4 id="ssh-\u516C\u79C1\u94A5" tabindex="-1"><a class="header-anchor" href="#ssh-\u516C\u79C1\u94A5" aria-hidden="true">#</a> ssh \u516C\u79C1\u94A5</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> ~/.ssh
<span class="token comment"># \u5982\u679C\u6CA1\u6709ssh\u6587\u4EF6\u5939\uFF0C\u5219mkdir ~/.ssh</span>

<span class="token function">git</span> config <span class="token parameter variable">--global</span> user.name <span class="token string">&quot;gxk&quot;</span>

<span class="token function">git</span> config <span class="token parameter variable">--global</span> user.email <span class="token string">&quot;1525185228@qq.com&quot;</span>

ssh-keygen <span class="token parameter variable">-t</span> rsa <span class="token parameter variable">-C</span> <span class="token string">&quot;1525185228@qq.com&quot;</span>
<span class="token comment"># \u6309\u4E09\u6B21\u56DE\u8F66\uFF0C\u6700\u540E\u5728.ssh\u6587\u4EF6\u5939\u4E0B\u5F97\u5230id_rsa\u548Cid_rsa.pub\u4E24\u4E2A\u6587\u4EF6\u3002</span>
<span class="token comment"># id_rsa\u4E2D\u7684\u5185\u5BB9\u4FBF\u662F\u79C1\u94A5\uFF0Cid_rsa.pub\u4E2D\u7684\u5185\u5BB9\u4FBF\u662F\u516C\u94A5\u3002</span>

<span class="token function">ssh</span> git@github.com
<span class="token comment"># \u628A\u516C\u94A5\u914D\u7F6E\u5230github\u4E2D\u540E\uFF0C\u53EF\u7528\u6B64\u547D\u4EE4\u67E5\u770B\u662F\u5426\u6210\u529F</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u901A\u4FE1" tabindex="-1"><a class="header-anchor" href="#\u901A\u4FE1" aria-hidden="true">#</a> \u901A\u4FE1</h4><ul><li>https\u4F20\u8F93\u8FC7\u7A0B\u540C\u65F6\u7528\u4E86\u4E09\u4E2A\u5BC6\u94A5\uFF0C\u670D\u52A1\u7AEF\u751F\u6210\u7684\u516C\u94A5\u548C\u79C1\u94A5\u7528\u6765\u975E\u5BF9\u79F0\u52A0\u5BC6\uFF0C\u5BA2\u6237\u7AEF\u751F\u6210\u7684\u5BC6\u94A5\u7528\u6765\u5BF9\u79F0\u52A0\u5BC6\u3002</li><li>https\u5BF9\u79F0\u52A0\u5BC6\u6240\u9700\u8981\u7684\u5BC6\u94A5\uFF0C\u662F\u7528https\u975E\u5BF9\u79F0\u52A0\u5BC6\u6765\u4F20\u8F93\u7684\uFF0C\u5185\u5BB9\u6570\u636E\u901A\u8FC7\u5BC6\u94A5\u8FDB\u884C\u5BF9\u79F0\u52A0\u5BC6\u4F20\u8F93\u3002</li></ul>`,4)]))}var d=n(l,[["render",t],["__file","introduce.html.vue"]]);export{d as default};