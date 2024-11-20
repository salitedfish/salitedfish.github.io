import{_ as s,o as a,c as e,a as t}from"./app.96ddbfb7.js";const o={};function p(l,n){return a(),e("div",null,n[0]||(n[0]=[t(`<h4 id="\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#\u7B80\u4ECB" aria-hidden="true">#</a> \u7B80\u4ECB</h4><ul><li>\u8FD0\u884C\u65F6\u52A8\u6001\u5BFC\u5165\uFF0C\u5BFC\u5165\u540E\u53EF\u4FEE\u6539\u5BFC\u5165\u7684\u503C\u3002</li><li>commonjs\u7684\u6A21\u5757\u5316\u5176\u5B9E\u5C31\u662F\u6BCF\u4E2A\u6587\u4EF6\u6709\u4E2A\u72EC\u7ACB\u7684module\u4F5C\u7528\u57DF\uFF0C\u5E76\u5BFC\u51FA\u4E86\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5176\u4ED6\u6587\u4EF6\u5F15\u5165\u8FD9\u4E2A\u5BF9\u8C61\u3002</li><li>exports\u5176\u5B9E\u5C31\u662F\u5BF9module.exports\u7684\u5F15\u7528\uFF0C\u5B9E\u9645\u5BFC\u51FA\u7684\u662Fmodule.exports\u3002\u5982\u679C\u91CD\u65B0\u8D4B\u503C\u4E86module.exports\u4F1A\u5BFC\u81F4\u4E8C\u8005\u7684\u5F15\u7528\u4E0D\u4E00\u6837\uFF0Cexports\u4F1A\u53D8\u6210\u7A7A\u5BF9\u8C61\u3002</li></ul><h4 id="\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B" aria-hidden="true">#</a> \u793A\u4F8B</h4><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">//nameModule.ts</span>
<span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token string">&quot;gxk&quot;</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  name 
<span class="token punctuation">}</span>
exports<span class="token punctuation">.</span>name <span class="token comment">// undefined, \u5185\u90E8\u5176\u5B9E\u4E00\u5F00\u59CB\u662Fexports=module.exports, \u5982\u679C\u91CD\u65B0\u8D4B\u503C\u4E86module.exports\u4F1A\u5BFC\u81F4\u4E8C\u8005\u7684\u5F15\u7528\u4E0D\u4E00\u6837\u4E86</span>

<span class="token comment">// module.exports.name = name</span>
<span class="token comment">// exports.name // gxk</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> nameModule <span class="token operator">=</span> <span class="token keyword">require</span><span class="token punctuation">(</span><span class="token string">&quot;./nameModule.ts&quot;</span><span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>nameModule<span class="token punctuation">.</span>name<span class="token punctuation">)</span> <span class="token comment">// gxk</span>
nameModule<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;gxh&quot;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>nameModule<span class="token punctuation">.</span>name<span class="token punctuation">)</span> <span class="token comment">// gxh</span>
<span class="token keyword">const</span> newNameModule <span class="token operator">=</span> <span class="token keyword">require</span><span class="token punctuation">(</span><span class="token string">&quot;./nameModule.ts&quot;</span><span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newNameModule<span class="token punctuation">.</span>name<span class="token punctuation">)</span> <span class="token comment">// gxh</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5)]))}var i=s(o,[["render",p],["__file","commonjs.html.vue"]]);export{i as default};
