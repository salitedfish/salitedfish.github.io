import{_ as p,r as e,o,c,b as s,d as a,e as l,a as i}from"./app.96ddbfb7.js";const u={},k={href:"http://www.webgl3d.cn/Three.js/",target:"_blank",rel:"noopener noreferrer"};function r(d,n){const t=e("ExternalLinkIcon");return o(),c("div",null,[n[2]||(n[2]=s("h4",{id:"\u7B80\u4ECB",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u7B80\u4ECB","aria-hidden":"true"},"#"),a(" \u7B80\u4ECB")],-1)),s("ul",null,[n[1]||(n[1]=s("li",null,"Three.js\u662F\u57FA\u4E8EWebGL\u548C\u7740\u8272\u5668\u8BED\u8A00GLSL ES\u5C01\u88C5\u76843D\u5F15\u64CE\u5E93",-1)),s("li",null,[s("a",k,[n[0]||(n[0]=a("Three.js\u6559\u7A0B")),l(t)])])]),n[3]||(n[3]=i(`<h4 id="\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B" aria-hidden="true">#</a> \u793A\u4F8B</h4><p>three.js\u5728vue3\u4E2D\u7684\u7B80\u5355\u4F7F\u7528</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> onMounted <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> <span class="token constant">THREE</span> <span class="token keyword">from</span> <span class="token string">&quot;three&quot;</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * \u521B\u5EFA\u573A\u666F\u5BF9\u8C61Scene
 */</span>
<span class="token keyword">let</span> scene <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>Scene</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token doc-comment comment">/**
 * \u521B\u5EFA\u7F51\u683C\u6A21\u578B
 */</span>
<span class="token comment">// let geometry = new THREE.SphereGeometry(60, 40, 40); //\u521B\u5EFA\u4E00\u4E2A\u7403\u4F53\u51E0\u4F55\u5BF9\u8C61</span>
<span class="token keyword">let</span> geometry <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>BoxGeometry</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u521B\u5EFA\u4E00\u4E2A\u7ACB\u65B9\u4F53\u51E0\u4F55\u5BF9\u8C61Geometry</span>
<span class="token keyword">let</span> material <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>MeshLambertMaterial</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token number">0x0000ff</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u6750\u8D28\u5BF9\u8C61Material</span>
<span class="token keyword">let</span> mesh <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>Mesh</span><span class="token punctuation">(</span>geometry<span class="token punctuation">,</span> material<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u7F51\u683C\u6A21\u578B\u5BF9\u8C61Mesh</span>
scene<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>mesh<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u7F51\u683C\u6A21\u578B\u6DFB\u52A0\u5230\u573A\u666F\u4E2D</span>
<span class="token doc-comment comment">/**
 * \u5149\u6E90\u8BBE\u7F6E
 */</span>
<span class="token comment">//\u70B9\u5149\u6E90</span>
<span class="token keyword">let</span> point <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>PointLight</span><span class="token punctuation">(</span><span class="token number">0xffffff</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
point<span class="token punctuation">.</span>position<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token number">400</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">300</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u70B9\u5149\u6E90\u4F4D\u7F6E</span>
scene<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>point<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u70B9\u5149\u6E90\u6DFB\u52A0\u5230\u573A\u666F\u4E2D</span>
<span class="token comment">//\u73AF\u5883\u5149</span>
<span class="token keyword">let</span> ambient <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>AmbientLight</span><span class="token punctuation">(</span><span class="token number">0x444444</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
scene<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>ambient<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// console.log(scene)</span>
<span class="token comment">// console.log(scene.children)</span>
<span class="token doc-comment comment">/**
 * \u76F8\u673A\u8BBE\u7F6E
 */</span>
<span class="token keyword">let</span> width <span class="token operator">=</span> window<span class="token punctuation">.</span>innerWidth<span class="token punctuation">;</span> <span class="token comment">//\u7A97\u53E3\u5BBD\u5EA6</span>
<span class="token keyword">let</span> height <span class="token operator">=</span> window<span class="token punctuation">.</span>innerHeight<span class="token punctuation">;</span> <span class="token comment">//\u7A97\u53E3\u9AD8\u5EA6</span>
<span class="token keyword">let</span> k <span class="token operator">=</span> width <span class="token operator">/</span> height<span class="token punctuation">;</span> <span class="token comment">//\u7A97\u53E3\u5BBD\u9AD8\u6BD4</span>
<span class="token keyword">let</span> s <span class="token operator">=</span> <span class="token number">200</span><span class="token punctuation">;</span> <span class="token comment">//\u4E09\u7EF4\u573A\u666F\u663E\u793A\u8303\u56F4\u63A7\u5236\u7CFB\u6570\uFF0C\u7CFB\u6570\u8D8A\u5927\uFF0C\u663E\u793A\u7684\u8303\u56F4\u8D8A\u5927</span>
<span class="token comment">//\u521B\u5EFA\u76F8\u673A\u5BF9\u8C61</span>
<span class="token keyword">let</span> camera <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>OrthographicCamera</span><span class="token punctuation">(</span><span class="token operator">-</span>s <span class="token operator">*</span> k<span class="token punctuation">,</span> s <span class="token operator">*</span> k<span class="token punctuation">,</span> s<span class="token punctuation">,</span> <span class="token operator">-</span>s<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
camera<span class="token punctuation">.</span>position<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">300</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u8BBE\u7F6E\u76F8\u673A\u4F4D\u7F6E</span>
camera<span class="token punctuation">.</span><span class="token function">lookAt</span><span class="token punctuation">(</span>scene<span class="token punctuation">.</span>position<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u8BBE\u7F6E\u76F8\u673A\u65B9\u5411(\u6307\u5411\u7684\u573A\u666F\u5BF9\u8C61)</span>
<span class="token doc-comment comment">/**
 * \u521B\u5EFA\u6E32\u67D3\u5668\u5BF9\u8C61
 */</span>
<span class="token keyword">let</span> renderer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>WebGLRenderer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
renderer<span class="token punctuation">.</span><span class="token function">setSize</span><span class="token punctuation">(</span>width<span class="token punctuation">,</span> height<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u8BBE\u7F6E\u6E32\u67D3\u533A\u57DF\u5C3A\u5BF8</span>
renderer<span class="token punctuation">.</span><span class="token function">setClearColor</span><span class="token punctuation">(</span><span class="token number">0xb9d3ff</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u8BBE\u7F6E\u80CC\u666F\u989C\u8272</span>
<span class="token comment">//\u6267\u884C\u6E32\u67D3\u64CD\u4F5C   \u6307\u5B9A\u573A\u666F\u3001\u76F8\u673A\u4F5C\u4E3A\u53C2\u6570</span>
renderer<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>scene<span class="token punctuation">,</span> camera<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> threeScene <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;threeScene&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  threeScene<span class="token operator">?.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>renderer<span class="token punctuation">.</span>domElement<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//body\u5143\u7D20\u4E2D\u63D2\u5165canvas\u5BF9\u8C61</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>threeScene<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>less<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token selector">#threeScene</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100vw<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3))])}var v=p(u,[["render",r],["__file","three.js.html.vue"]]);export{v as default};
