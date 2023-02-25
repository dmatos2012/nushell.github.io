import{_ as r,p as o,q as i,Q as a,t,v as s,a1 as n}from"./framework-344bb0e4.js";const c={},l={id:"frontmatter-title-for-misc",tabindex:"-1"},d=a("a",{class:"header-anchor",href:"#frontmatter-title-for-misc","aria-hidden":"true"},"#",-1),h={class:"command-title"},p=n(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; tutor (search) --find</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>search</code>: item to search for, or &#39;list&#39; to list available tutorials</li><li><code>--find {string}</code>: Search tutorial for a phrase</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Begin the tutorial</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> tutor begin
</code></pre></div><p>Search a tutorial by phrase</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> tutor <span class="token parameter variable">-f</span> <span class="token string">&quot;<span class="token variable">$in</span>&quot;</span>
</code></pre></div>`,9);function u(e,m){return o(),i("div",null,[a("h1",l,[d,t(),a("code",null,s(e.$frontmatter.title),1),t(" for misc")]),a("div",h,s(e.$frontmatter.misc),1),p])}const g=r(c,[["render",u],["__file","tutor.html.vue"]]);export{g as default};
