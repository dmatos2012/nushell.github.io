import{_ as a,M as l,p as r,q as t,Q as e,t as o,N as s}from"./framework-344bb0e4.js";const u={},c=e("h1",{id:"complementos-plugins",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#complementos-plugins","aria-hidden":"true"},"#"),o(" Complementos (plugins)")],-1),p=e("p",null,"Se puede ampliar la funcionalidad de Nu a través de complementos. Los complementos pueden realizar muchas de las mismas operaciones que los comandos integrados de Nu con el beneficio adicional de que se pueden agregar separado de Nu.",-1),i=e("p",null,[o("Para agregar un complemento simplemente compílalo y colóca el binario en el PATH. Los complementos de Nu empiezan con "),e("code",null,"nu_plugin_"),o(" de manera que Nu pueda encontrarlos entre otros binarios en su PATH.")],-1),m=e("p",null,[e("strong",null,"Nota:"),o(" en el futuro los complementos pueden que tengan un lugar específico que deban ser puestos para Nu encontrarlos.")],-1),d=e("p",null,"Cuándo Nu arranca escanea el sistema y carga los complementos que encuentre.",-1),_={href:"https://github.com/nushell/nushell/tree/master/crates",target:"_blank",rel:"noopener noreferrer"},h={href:"https://github.com/nushell/contributor-book/blob/master/en/plugins.md",target:"_blank",rel:"noopener noreferrer"};function g(b,f){const n=l("ExternalLinkIcon");return r(),t("div",null,[c,p,i,m,d,e("p",null,[o("El protocolo que usan los complementos de Nu está sujetos a cambios mientras Nu está bajo fuerte desarrollo. El mejor lugar para aprender más sobre el protocolo y cómo crear tus propios complementos es leyendo el código fuente de los "),e("a",_,[o("complementos en el repositorio de Nu"),s(n)]),o(". También puedes dirigirte al "),e("a",h,[o("capítulo de plugins en el manual para contribuyentes de Nu"),s(n)])])])}const q=a(u,[["render",g],["__file","plugins.html.vue"]]);export{q as default};
