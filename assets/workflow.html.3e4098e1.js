import{_ as s,o as a,c as e,a as t}from"./app.96ddbfb7.js";const p={};function l(c,n){return a(),e("div",null,n[0]||(n[0]=[t(`<h4 id="\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#\u7B80\u4ECB" aria-hidden="true">#</a> \u7B80\u4ECB</h4><ul><li>git workflow\u662F\u7531git action\u7EC4\u6210\u7684\u5DE5\u4F5C\u6D41\u7A0B\u3002</li><li>\u672C\u5730\u4ED3\u5E93\u521B\u5EFA\u914D\u7F6E\u6587\u4EF6\u540E\uFF0C\u63A8\u9001\u5230\u8FDC\u7A0B\u4ED3\u5E93\uFF0C\u8FDC\u7A0B\u4ED3\u5E93\u5C31\u80FD\u76D1\u542C\u6307\u5B9A\u7684\u89E6\u53D1\u5668\uFF0C\u4ECE\u800C\u6267\u884C\u4E00\u7CFB\u5217action\u3002</li><li>\u901A\u8FC7workflow\u53EF\u5B9E\u73B0\u4E00\u7CFB\u5217\u81EA\u52A8\u5316\u64CD\u4F5C\uFF0C\u5982\u672C\u5730\u66F4\u65B0\u8FDC\u7A0B\u4EE3\u7801\u65F6\uFF0C\u5B9E\u73B0\u81EA\u52A8\u90E8\u7F72\u3002</li></ul><h4 id="\u914D\u7F6E\u5B58\u653E\u8DEF\u5F84" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u5B58\u653E\u8DEF\u5F84" aria-hidden="true">#</a> \u914D\u7F6E\u5B58\u653E\u8DEF\u5F84</h4><p>\u914D\u7F6E\u6587\u4EF6\u8DEF\u5F84\u4E00\u822C\u5728\u672C\u5730\u4ED3\u5E93\u6839\u76EE\u5F55\u521B\u5EFA\uFF0C\u518D\u63A8\u9001\u5230\u8FDC\u7A0B\u4ED3\u5E93\uFF08\u5F53\u7136\u4E5F\u53EF\u5728\u8FDC\u7A0B\u76F4\u63A5\u521B\u5EFA\uFF09\u3002</p><ul><li>./github/workflow/xxx.yml</li><li>./github/workflow/xxx.yaml</li></ul><h4 id="\u914D\u7F6E\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u793A\u4F8B" aria-hidden="true">#</a> \u914D\u7F6E\u793A\u4F8B</h4><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token comment"># \u5C06\u51FA\u73B0\u5728 GitHub \u4ED3\u5E93\u7684 Actions\uFF08\u64CD\u4F5C\uFF09\u9009\u9879\u5361\u4E2D\u7684\u5DE5\u4F5C\u6D41\u7A0B\u540D\u79F0</span>
<span class="token key atrule">name</span><span class="token punctuation">:</span> docs 

<span class="token comment"># \u6307\u5B9A\u6B64\u5DE5\u4F5C\u6D41\u7A0B\u7684\u89E6\u53D1\u5668</span>
<span class="token key atrule">on</span><span class="token punctuation">:</span>
  <span class="token comment"># \u6BCF\u5F53 push \u5230 main \u5206\u652F\u65F6\u89E6\u53D1\u90E8\u7F72</span>
  <span class="token key atrule">push</span><span class="token punctuation">:</span>
    <span class="token key atrule">branches</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>main<span class="token punctuation">]</span>
  <span class="token comment"># \u624B\u52A8\u89E6\u53D1\u90E8\u7F72</span>
  <span class="token key atrule">workflow_dispatch</span><span class="token punctuation">:</span>

<span class="token comment"># \u5DE5\u4F5C\u6D41\u7A0B\u4E2D\u8FD0\u884C\u7684\u6240\u6709\u4F5C\u4E1A\u7EC4\u5408\u5728\u4E00\u8D77</span>
<span class="token key atrule">jobs</span><span class="token punctuation">:</span>
  <span class="token comment"># \u5B9A\u4E49\u540D\u4E3Adocs\u7684\u5DE5\u4F5C</span>
  <span class="token key atrule">docs</span><span class="token punctuation">:</span> 
    <span class="token comment"># \u5C06\u4F5C\u4E1A\u914D\u7F6E\u4E3A\u5728\u6700\u65B0\u7248\u672C\u7684 Ubuntu Linux \u8FD0\u884C\u5668\u4E0A\u8FD0\u884C</span>
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest
    <span class="token comment"># \u5C06docs\u4F5C\u4E1A\u4E2D\u8FD0\u884C\u7684\u6240\u6709\u6B65\u9AA4\u7EC4\u5408\u5728\u4E00\u8D77</span>
    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v2
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token comment"># \u201C\u6700\u8FD1\u66F4\u65B0\u65F6\u95F4\u201D \u7B49 git \u65E5\u5FD7\u76F8\u5173\u4FE1\u606F\uFF0C\u9700\u8981\u62C9\u53D6\u5168\u90E8\u63D0\u4EA4\u8BB0\u5F55</span>
          <span class="token key atrule">fetch-depth</span><span class="token punctuation">:</span> <span class="token number">0</span>

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Setup Node.js
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/setup<span class="token punctuation">-</span>node@v1
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token comment"># \u9009\u62E9\u8981\u4F7F\u7528\u7684 node \u7248\u672C</span>
          <span class="token key atrule">node-version</span><span class="token punctuation">:</span> <span class="token string">&quot;14&quot;</span>

      <span class="token comment"># \u7F13\u5B58 node_modules</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Cache dependencies
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/cache@v2
        <span class="token key atrule">id</span><span class="token punctuation">:</span> yarn<span class="token punctuation">-</span>cache
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">path</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
            **/node_modules</span>
          <span class="token key atrule">key</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> runner.os <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">-</span>yarn<span class="token punctuation">-</span>$<span class="token punctuation">{</span><span class="token punctuation">{</span> hashFiles(&#39;<span class="token important">**/yarn.lock&#39;)</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>
          <span class="token key atrule">restore-keys</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
            \${{ runner.os }}-yarn-</span>

      <span class="token comment"># \u5982\u679C\u7F13\u5B58\u6CA1\u6709\u547D\u4E2D\uFF0C\u5B89\u88C5\u4F9D\u8D56</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Install dependencies
        <span class="token key atrule">if</span><span class="token punctuation">:</span> steps.yarn<span class="token punctuation">-</span>cache.outputs.cache<span class="token punctuation">-</span>hit <span class="token tag">!=</span> &#39;true&#39;
        <span class="token key atrule">run</span><span class="token punctuation">:</span> yarn <span class="token punctuation">-</span><span class="token punctuation">-</span>frozen<span class="token punctuation">-</span>lockfile

      <span class="token comment"># \u8FD0\u884C\u6784\u5EFA\u811A\u672C</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Build VuePress site
        <span class="token key atrule">run</span><span class="token punctuation">:</span> yarn docs<span class="token punctuation">:</span>build

      <span class="token comment"># \u67E5\u770B workflow \u7684\u6587\u6863\u6765\u83B7\u53D6\u66F4\u591A\u4FE1\u606F</span>
      <span class="token comment"># @see https://github.com/crazy-max/ghaction-github-pages</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Deploy to GitHub Pages
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> crazy<span class="token punctuation">-</span>max/ghaction<span class="token punctuation">-</span>github<span class="token punctuation">-</span>pages@v2
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token comment"># \u90E8\u7F72\u5230 gh-pages \u5206\u652F</span>
          <span class="token key atrule">target_branch</span><span class="token punctuation">:</span> gh<span class="token punctuation">-</span>pages
          <span class="token comment"># \u90E8\u7F72\u76EE\u5F55\u4E3A VuePress \u7684\u9ED8\u8BA4\u8F93\u51FA\u76EE\u5F55</span>
          <span class="token key atrule">build_dir</span><span class="token punctuation">:</span> docs/.vuepress/dist
        <span class="token key atrule">env</span><span class="token punctuation">:</span>
          <span class="token comment"># @see https://docs.github.com/cn/actions/reference/authentication-in-a-workflow#about-the-github_token-secret</span>
          <span class="token key atrule">GITHUB_TOKEN</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.GITHUB_TOKEN <span class="token punctuation">}</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7)]))}var u=s(p,[["render",l],["__file","workflow.html.vue"]]);export{u as default};
