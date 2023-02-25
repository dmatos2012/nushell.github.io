import{_ as n,p as r,q as c,Q as a,t as s,v as t,a1 as o}from"./framework-344bb0e4.js";const p={},i={id:"frontmatter-title-for-strings",tabindex:"-1"},l=a("a",{class:"header-anchor",href:"#frontmatter-title-for-strings","aria-hidden":"true"},"#",-1),d={class:"command-title"},u=o(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; char (character) ...rest --list --unicode --integer</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>character</code>: the name of the character to output</li><li><code>...rest</code>: multiple Unicode bytes</li><li><code>--list</code> <code>(-l)</code>: List all supported character names</li><li><code>--unicode</code> <code>(-u)</code>: Unicode string i.e. 1f378</li><li><code>--integer</code> <code>(-i)</code>: Create a codepoint from an integer</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Output newline</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> char newline
</code></pre></div><p>Output prompt character, newline and a hamburger menu character</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">(</span>char prompt<span class="token punctuation">)</span> + <span class="token punctuation">(</span>char newline<span class="token punctuation">)</span> + <span class="token punctuation">(</span>char hamburger<span class="token punctuation">)</span>
</code></pre></div><p>Output Unicode character</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> char <span class="token parameter variable">-u</span> 1f378
</code></pre></div><p>Create Unicode from integer codepoint values</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> char <span class="token parameter variable">-i</span> <span class="token punctuation">(</span>0x60 + <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>0x60 + <span class="token number">2</span><span class="token punctuation">)</span>
</code></pre></div><p>Output multi-byte Unicode character</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> char <span class="token parameter variable">-u</span> 1F468 200D 1F466 200D 1F466
</code></pre></div>`,15);function h(e,g){return r(),c("div",null,[a("h1",i,[l,s(),a("code",null,t(e.$frontmatter.title),1),s(" for strings")]),a("div",d,t(e.$frontmatter.strings),1),u])}const b=n(p,[["render",h],["__file","char.html.vue"]]);export{b as default};
