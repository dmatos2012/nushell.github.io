import{_ as t,p,q as o,Q as a,t as n,v as e,a1 as c}from"./framework-344bb0e4.js";const r={},l={id:"frontmatter-title-for-dataframe",tabindex:"-1"},u=a("a",{class:"header-anchor",href:"#frontmatter-title-for-dataframe","aria-hidden":"true"},"#",-1),i={class:"command-title"},d=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; dfr sample </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Sample rows from dataframe</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>a b<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">3</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> dfr into-df <span class="token operator">|</span> dfr sample <span class="token parameter variable">-n</span> <span class="token number">1</span>
</code></pre></div><p>Shows sample row using fraction and replace</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>a b<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">3</span> <span class="token number">4</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">5</span> <span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> dfr into-df <span class="token operator">|</span> dfr sample <span class="token parameter variable">-f</span> <span class="token number">0.5</span> <span class="token parameter variable">-e</span>
</code></pre></div>`,7);function k(s,m){return p(),o("div",null,[a("h1",l,[u,n(),a("code",null,e(s.$frontmatter.title),1),n(" for dataframe")]),a("div",i,e(s.$frontmatter.dataframe),1),d])}const h=t(r,[["render",k],["__file","dfr_sample.html.vue"]]);export{h as default};
