(function(t){function e(e){for(var n,o,s=e[0],c=e[1],i=e[2],l=0,p=[];l<s.length;l++)o=s[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);f&&f(e);while(p.length)p.shift()();return u.push.apply(u,i||[]),r()}function r(){for(var t,e=0;e<u.length;e++){for(var r=u[e],n=!0,o=1;o<r.length;o++){var s=r[o];0!==a[s]&&(n=!1)}n&&(u.splice(e--,1),t=c(c.s=r[0]))}return t}var n={},o={index:0},a={index:0},u=[];function s(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-4749e79f":"27191763","chunk-92e3395a":"14c91491"}[t]+".js"}function c(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(t){var e=[],r={"chunk-4749e79f":1,"chunk-92e3395a":1};o[t]?e.push(o[t]):0!==o[t]&&r[t]&&e.push(o[t]=new Promise((function(e,r){for(var n="css/"+({}[t]||t)+"."+{"chunk-4749e79f":"eea7f943","chunk-92e3395a":"4b199922"}[t]+".css",a=c.p+n,u=document.getElementsByTagName("link"),s=0;s<u.length;s++){var i=u[s],l=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(l===n||l===a))return e()}var p=document.getElementsByTagName("style");for(s=0;s<p.length;s++){i=p[s],l=i.getAttribute("data-href");if(l===n||l===a)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var n=e&&e.target&&e.target.src||a,u=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=n,delete o[t],f.parentNode.removeChild(f),r(u)},f.href=a;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){o[t]=0})));var n=a[t];if(0!==n)if(n)e.push(n[2]);else{var u=new Promise((function(e,r){n=a[t]=[e,r]}));e.push(n[2]=u);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(t);var p=new Error;i=function(e){l.onerror=l.onload=null,clearTimeout(f);var r=a[t];if(0!==r){if(r){var n=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;p.message="Loading chunk "+t+" failed.\n("+n+": "+o+")",p.name="ChunkLoadError",p.type=n,p.request=o,r[1](p)}a[t]=void 0}};var f=setTimeout((function(){i({type:"timeout",target:l})}),12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=n,c.d=function(t,e,r){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(r,n,function(e){return t[e]}.bind(null,n));return r},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="https://cdn.jsdelivr.net/gh/btswap/btswap.github.io/",c.oe=function(t){throw console.error(t),t};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var p=0;p<i.length;p++)e(i[p]);var f=l;u.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"4ffd":function(t,e){t.exports="data:image/png;base64,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"},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("Nav"),r("router-view")],1)},a=[],u=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"nav-container"},[r("header",[t._m(0),r("div",{staticClass:"right"},[r("a",{staticClass:"text",attrs:{href:"http://btswap.com/whitepaper.pdf",target:"_blank"}},[t._v("Whitepaper")]),r("a",{staticClass:"text",attrs:{href:"https://github.com/btswap",target:"_blank"}},[t._v("Github")]),r("a",{staticClass:"text",attrs:{href:"#guide"}},[t._v("Guidelines")]),r("a",{staticClass:"text",attrs:{href:"javascript:;"},on:{click:t.goToPool}},[t._v(t._s(t.poolRouter))]),r("a",{staticClass:"btn",attrs:{href:"https://ex.btswap.com/",target:"_blank"}},[t._v("Trade Now")])])])])},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"left"},[n("img",{attrs:{src:r("4ffd"),alt:""}}),n("span",{staticClass:"text"},[t._v("BTswap")])])}],c=(r("c975"),{name:"Nav",data:function(){return{poolRouter:"Mining Pool"}},mounted:function(){var t=this;this.$router.onReady((function(){t.$router.history.current.path.indexOf("pool")>-1?t.poolRouter="Home":t.poolRouter="Mining Pool"}))},methods:{goToPool:function(){this.$router.history.current.path.indexOf("pool")>-1?(this.$router.push({path:"/"}),this.poolRouter="Mining Pool"):(this.$router.push({path:"/pool"}),this.poolRouter="Home")}}}),i=c,l=(r("f776"),r("2877")),p=Object(l["a"])(i,u,s,!1,null,"ed689c66",null),f=p.exports,h={name:"App",components:{Nav:f}},d=h,m=(r("5c0b"),Object(l["a"])(d,o,a,!1,null,null,null)),v=m.exports,g=(r("d3b7"),r("8c4f"));n["a"].use(g["a"]);var b=[{path:"/",component:function(){return r.e("chunk-92e3395a").then(r.bind(null,"5148"))}},{path:"/pool",component:function(){return r.e("chunk-4749e79f").then(r.bind(null,"cfbd"))}},{path:"*",component:function(){return r.e("chunk-92e3395a").then(r.bind(null,"5148"))}}],y=new g["a"]({mode:"hash",routes:b});r("77ed"),r("b20f");n["a"].config.productionTip=!1,new n["a"]({router:y,render:function(t){return t(v)}}).$mount("#app")},"5c0b":function(t,e,r){"use strict";var n=r("9c0c"),o=r.n(n);o.a},"9c0c":function(t,e,r){},b20f:function(t,e,r){},cc16:function(t,e,r){},f776:function(t,e,r){"use strict";var n=r("cc16"),o=r.n(n);o.a}});