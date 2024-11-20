import{_ as s,o as a,c as t,a as p}from"./app.96ddbfb7.js";const e={};function o(c,n){return a(),t("div",null,n[0]||(n[0]=[p(`<h4 id="\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u7528\u6CD5" aria-hidden="true">#</a> \u7528\u6CD5</h4><ul><li>react \u7684 hook \u7528\u6CD5\u9700\u8981\u8C28\u614E\uFF0C\u5F88\u591A\u9700\u8981\u5F00\u53D1\u8005\u81EA\u884C\u63A7\u5236</li><li>react \u6570\u636E\u66F4\u65B0\u5F88\u91CD\u8981\u7684\u4E00\u70B9\u662F\uFF0C\u6BCF\u6B21\u66F4\u6539\u6570\u636E\u90FD\u4F1A\u521B\u5EFA\u65B0\u7684\u6307\u9488(\u9664\u975E\u66F4\u6539\u5F15\u7528\u7C7B\u578B\u5185\u90E8\u7684\u503C)\uFF0C\u53EA\u6709\u6307\u9488\u53D8\u4E86\uFF0C\u7EC4\u4EF6\u624D\u4F1A\u66F4\u65B0</li><li>react \u53D8\u91CF\u66F4\u6539\u540E\uFF0C\u5373\u4F7F\u5EF6\u65F6\u4E5F\u53EA\u80FD\u83B7\u53D6\u5230\u8001\u7684\u6307\u9488\uFF0C\u9664\u975E\u5728\u6570\u636E\u66F4\u65B0\u540E\u518D\u83B7\u53D6\u6307\u9488</li><li>\u7EC4\u4EF6\u51FD\u6570\uFF0C\u5185\u90E8\u6570\u636E\u66F4\u6539\u6BCF\u6B21\u90FD\u4F1A\u6267\u884C</li><li>useEffect \u53EA\u6709\u9996\u6B21\u6E32\u67D3\u548C\u4F9D\u8D56\u6539\u53D8\u65F6\u624D\u4F1A\u6267\u884C\uFF0C\u4F9D\u8D56\u9ED8\u8BA4\u4F9D\u8D56\u5185\u90E8\u5168\u90E8\u53D8\u91CF\u3002\u5982\u679C\u4F20\u7A7A\u5219\u65E0\u4F9D\u8D56\uFF0C\u53EA\u6709\u9996\u6B21\u6E32\u67D3\u6267\u884C</li><li>useState \u662F\u5F02\u6B65\u66F4\u65B0\uFF0C\u5982\u679C\u4F20\u6570\u636E\u4F1A\u5408\u5E76\u66F4\u6539\uFF0C\u4F20\u51FD\u6570\u5219\u4F1A\u4F9D\u6B21\u66F4\u6539\uFF0C\u4F46\u66F4\u65B0\u53EA\u4F1A\u89E6\u53D1\u6700\u540E\u4E00\u6B21</li><li>useState \u66F4\u6539\u503C\u5E76\u4E0D\u53EA\u662F\u5355\u5355\u6539\u503C\uFF0C\u8FDE\u6307\u9488\u4E5F\u6539\u4E86</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useEffect<span class="token punctuation">,</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span>
<span class="token keyword">const</span> <span class="token function-variable function">Com</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;update function&quot;</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>list<span class="token punctuation">,</span> setList<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token generic-function"><span class="token function">useState</span><span class="token generic class-name"><span class="token operator">&lt;</span>Number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token comment">//setList([123]) // \u4E0D\u80FD\u5728\u8FD9\u91CC\u66F4\u6539\u6570\u636E\uFF0C\u5426\u5219\u4F1A\u65E0\u9650\u91CD\u65B0\u6E32\u67D3</span>
  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;update effect&quot;</span><span class="token punctuation">)</span>
    <span class="token builtin">Promise</span><span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">// setList((list) =&gt; {</span>
      <span class="token comment">//   list.push(123)</span>
      <span class="token comment">//   return list</span>
      <span class="token comment">// }) //\u8FD9\u6837\u5199\u6307\u9488\u6CA1\u53D8\uFF0C\u6700\u540E\u7ED3\u679C\u662F[123]\uFF0C\u4F46\u662F\u8FD9\u6837\u5199\u7EC4\u4EF6\u51FD\u6570\u4E0D\u4F1A\u66F4\u65B0</span>
      <span class="token comment">// setTimeout(() =&gt; {</span>
      <span class="token comment">//   console.log(&quot;list&quot;,list)</span>
      <span class="token comment">// }, 1000)</span>

      <span class="token function">setList</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">123</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">//\u8FD9\u6837\u5199\u6307\u9488\u53D8\u4E86\uFF0C\u6700\u540E\u7ED3\u679C\u8FD8\u662F[]</span>
      <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;list&quot;</span><span class="token punctuation">,</span> list<span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// \u5982\u679C\u4E0D\u5199\u4F9D\u8D56\uFF0C\u5E76\u4E14useEffect\u5185\u6539\u52A8\u4E86\u6570\u636E\u7684\u6307\u9488\uFF0C\u5219useEffect\u548C\u7EC4\u4EF6\u51FD\u6570\u4F1A\u65E0\u9650\u6267\u884C\uFF0C\u7A7A\u6570\u7EC4\u5219\u53EA\u6709\u9996\u6B21\u6267\u884C</span>

  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span> <span class="token comment">// \u8FD9\u6837\u5199\u5F53list\u6307\u9488\u6539\u53D8\u65F6\uFF0C\u83B7\u53D6\u5230\u7684\u662F[123]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>list<span class="token punctuation">]</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3)]))}var i=s(e,[["render",o],["__file","hook.html.vue"]]);export{i as default};