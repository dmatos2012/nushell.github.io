import{p as i}from"./app-98f88324.js";import{_ as c,p as a,q as n,Q as e,O as d,P as u,t as _,v as o}from"./framework-344bb0e4.js";const h={computed:{commands(){return i.filter(t=>t.path.includes("/commands/docs/")).filter(t=>t.frontmatter.categories.includes("generators")).sort((t,r)=>t.title>r.title?1:r.title>t.title?-1:0)}}},p=e("h1",{id:"generators",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#generators","aria-hidden":"true"},"#"),_(" Generators")],-1),m=e("tr",null,[e("th",null,"Command"),e("th",null,"Description")],-1),f=["href"],g={style:{"white-space":"pre-wrap"}};function x(t,r,v,B,$,l){return a(),n("div",null,[p,e("table",null,[m,(a(!0),n(d,null,u(l.commands,s=>(a(),n("tr",null,[e("td",null,[e("a",{href:s.path},o(s.title),9,f)]),e("td",g,o(s.frontmatter.usage),1)]))),256))])])}const y=c(h,[["render",x],["__file","generators.html.vue"]]);export{y as default};
