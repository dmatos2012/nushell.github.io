import{_ as n,p as o,q as r,Q as a,t,v as s,a1 as d}from"./framework-344bb0e4.js";const c={},p={id:"frontmatter-title-for-date",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title-for-date","aria-hidden":"true"},"#",-1),l={class:"command-title"},h=d(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; date to-record </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Convert the current date into a record.</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">date</span> to-record
</code></pre></div><p>Convert the current date into a record.</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">date</span> now <span class="token operator">|</span> <span class="token function">date</span> to-record
</code></pre></div><p>Convert a date string into a record.</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;2020-04-12 22:10:57 +0200&#39;</span> <span class="token operator">|</span> <span class="token function">date</span> to-record
</code></pre></div>`,9);function u(e,g){return o(),r("div",null,[a("h1",p,[i,t(),a("code",null,s(e.$frontmatter.title),1),t(" for date")]),a("div",l,s(e.$frontmatter.date),1),h])}const _=n(c,[["render",u],["__file","date_to-record.html.vue"]]);export{_ as default};
