import{p as i}from"./app-98f88324.js";import{_ as c,p as s,q as l,Q as e,O as d,P as m,t as f,v as n}from"./framework-344bb0e4.js";const u={computed:{commands(){return i.filter(t=>t.path.includes("/commands/docs/")).filter(t=>t.frontmatter.categories.includes("lazyframe")).sort((t,a)=>t.title>a.title?1:a.title>t.title?-1:0)}}},_=e("h1",{id:"lazyframe",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#lazyframe","aria-hidden":"true"},"#"),f(" Lazyframe")],-1),h=e("tr",null,[e("th",null,"Command"),e("th",null,"Description")],-1),p=["href"],y={style:{"white-space":"pre-wrap"}};function z(t,a,g,x,v,o){return s(),l("div",null,[_,e("table",null,[h,(s(!0),l(d,null,m(o.commands,r=>(s(),l("tr",null,[e("td",null,[e("a",{href:r.path},n(r.title),9,p)]),e("td",y,n(r.frontmatter.usage),1)]))),256))])])}const k=c(u,[["render",z],["__file","lazyframe.html.vue"]]);export{k as default};
