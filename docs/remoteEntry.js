var k={8879:(i,d,l)=>{var s={"./HomeModule":()=>l.e(834).then(()=>()=>l(4834))},b=(f,w)=>(l.R=w,w=l.o(s,f)?s[f]():Promise.resolve().then(()=>{throw new Error('Module "'+f+'" does not exist in container.')}),l.R=void 0,w),c=(f,w)=>{if(l.S){var p="default",y=l.S[p];if(y&&y!==f)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return l.S[p]=f,l.I(p,w)}};l.d(d,{get:()=>b,init:()=>c})}},$={};function a(i){var d=$[i];if(void 0!==d)return d.exports;var l=$[i]={exports:{}};return k[i](l,l.exports,a),l.exports}a.m=k,a.c=$,a.d=(i,d)=>{for(var l in d)a.o(d,l)&&!a.o(i,l)&&Object.defineProperty(i,l,{enumerable:!0,get:d[l]})},a.f={},a.e=i=>Promise.all(Object.keys(a.f).reduce((d,l)=>(a.f[l](i,d),d),[])),a.u=i=>i+"."+{4:"2c5361457197cc32",181:"2062ab58a342d79c",256:"6aecfc9f337db904",356:"50c3e9972b1ee924",383:"3d57d3322768dc99",834:"12d6fc421bf2e59d",895:"c2d284085873d77a"}[i]+".js",a.miniCssF=i=>{},a.o=(i,d)=>Object.prototype.hasOwnProperty.call(i,d),(()=>{var i={},d="angular13:";a.l=(l,s,b,c)=>{if(i[l])i[l].push(s);else{var f,w;if(void 0!==b)for(var p=document.getElementsByTagName("script"),y=0;y<p.length;y++){var g=p[y];if(g.getAttribute("src")==l||g.getAttribute("data-webpack")==d+b){f=g;break}}f||(w=!0,(f=document.createElement("script")).type="module",f.charset="utf-8",f.timeout=120,a.nc&&f.setAttribute("nonce",a.nc),f.setAttribute("data-webpack",d+b),f.src=a.tu(l)),i[l]=[s];var m=(x,E)=>{f.onerror=f.onload=null,clearTimeout(C);var S=i[l];if(delete i[l],f.parentNode&&f.parentNode.removeChild(f),S&&S.forEach(h=>h(E)),x)return x(E)},C=setTimeout(m.bind(null,void 0,{type:"timeout",target:f}),12e4);f.onerror=m.bind(null,f.onerror),f.onload=m.bind(null,f.onload),w&&document.head.appendChild(f)}}})(),a.r=i=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})},(()=>{a.S={};var i={},d={};a.I=(l,s)=>{s||(s=[]);var b=d[l];if(b||(b=d[l]={}),!(s.indexOf(b)>=0)){if(s.push(b),i[l])return i[l];a.o(a.S,l)||(a.S[l]={});var c=a.S[l],w="angular13",p=(m,C,x,E)=>{var S=c[m]=c[m]||{},h=S[C];(!h||!h.loaded&&(!E!=!h.eager?E:w>h.from))&&(S[C]={get:x,from:w,eager:!!E})},g=[];return"default"===l&&(p("@angular/common","13.3.10",()=>a.e(181).then(()=>()=>a(6895))),p("@angular/core","13.3.10",()=>a.e(256).then(()=>()=>a(8256))),p("@angular/router","13.3.10",()=>a.e(4).then(()=>()=>a(4383)))),i[l]=g.length?Promise.all(g).then(()=>i[l]=1):1}}})(),(()=>{var i;a.tt=()=>(void 0===i&&(i={createScriptURL:d=>d},typeof trustedTypes<"u"&&trustedTypes.createPolicy&&(i=trustedTypes.createPolicy("angular#bundler",i))),i)})(),a.tu=i=>a.tt().createScriptURL(i),(()=>{var i;if("string"==typeof import.meta.url&&(i=import.meta.url),!i)throw new Error("Automatic publicPath is not supported in this browser");i=i.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=i})(),(()=>{var i=e=>{var t=o=>o.split(".").map(u=>+u==u?+u:u),r=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=r[1]?t(r[1]):[];return r[2]&&(n.length++,n.push.apply(n,t(r[2]))),r[3]&&(n.push([]),n.push.apply(n,t(r[3]))),n},l=e=>{var t=e[0],r="";if(1===e.length)return"*";if(t+.5){r+=0==t?">=":-1==t?"<":1==t?"^":2==t?"~":t>0?"=":"!=";for(var n=1,o=1;o<e.length;o++)n--,r+="u"==(typeof(v=e[o]))[0]?"-":(n>0?".":"")+(n=2,v);return r}var u=[];for(o=1;o<e.length;o++){var v=e[o];u.push(0===v?"not("+V()+")":1===v?"("+V()+" || "+V()+")":2===v?u.pop()+" "+u.pop():l(v))}return V();function V(){return u.pop().replace(/^\((.+)\)$/,"$1")}},s=(e,t)=>{if(0 in e){t=i(t);var r=e[0],n=r<0;n&&(r=-r-1);for(var o=0,u=1,v=!0;;u++,o++){var V,O,P=u<e.length?(typeof e[u])[0]:"";if(o>=t.length||"o"==(O=(typeof(V=t[o]))[0]))return!v||("u"==P?u>r&&!n:""==P!=n);if("u"==O){if(!v||"u"!=P)return!1}else if(v)if(P==O)if(u<=r){if(V!=e[u])return!1}else{if(n?V>e[u]:V<e[u])return!1;V!=e[u]&&(v=!1)}else if("s"!=P&&"n"!=P){if(n||u<=r)return!1;v=!1,u--}else{if(u<=r||O<P!=n)return!1;v=!1}else"s"!=P&&"n"!=P&&(v=!1,u--)}}var F=[],j=F.pop.bind(F);for(o=1;o<e.length;o++){var T=e[o];F.push(1==T?j()|j():2==T?j()&j():T?s(T,t):!j())}return!!j()},f=(e,t)=>{var r=e[t];return Object.keys(r).reduce((n,o)=>!n||!r[n].loaded&&((e,t)=>{e=i(e),t=i(t);for(var r=0;;){if(r>=e.length)return r<t.length&&"u"!=(typeof t[r])[0];var n=e[r],o=(typeof n)[0];if(r>=t.length)return"u"==o;var u=t[r],v=(typeof u)[0];if(o!=v)return"o"==o&&"n"==v||"s"==v||"u"==o;if("o"!=o&&"u"!=o&&n!=u)return n<u;r++}})(n,o)?o:n,0)},g=(e,t,r,n)=>{var o=f(e,r);if(!s(n,o))throw new Error(((e,t,r,n)=>"Unsatisfied version "+r+" from "+(r&&e[t][r].from)+" of shared singleton module "+t+" (required "+l(n)+")")(e,r,o,n));return S(e[r][o])},S=e=>(e.loaded=1,e.get()),A=(e=>function(t,r,n,o){var u=a.I(t);return u&&u.then?u.then(e.bind(e,t,a.S[t],r,n,o)):e(t,a.S[t],r,n,o)})((e,t,r,n,o)=>t&&a.o(t,r)?g(t,0,r,n):o()),M={},z={8230:()=>A("default","@angular/core",[2,13,3,0],()=>a.e(256).then(()=>()=>a(8256))),4025:()=>A("default","@angular/common",[2,13,3,0],()=>a.e(895).then(()=>()=>a(6895))),8317:()=>A("default","@angular/router",[2,13,3,0],()=>a.e(383).then(()=>()=>a(4383)))},L={4:[4025,8230],181:[8230],834:[4025,8230,8317]};a.f.consumes=(e,t)=>{a.o(L,e)&&L[e].forEach(r=>{if(a.o(M,r))return t.push(M[r]);var n=v=>{M[r]=0,a.m[r]=V=>{delete a.c[r],V.exports=v()}},o=v=>{delete M[r],a.m[r]=V=>{throw delete a.c[r],v}};try{var u=z[r]();u.then?t.push(M[r]=u.then(n).catch(o)):n(u)}catch(v){o(v)}})}})(),(()=>{var i={275:0};a.f.j=(s,b)=>{var c=a.o(i,s)?i[s]:void 0;if(0!==c)if(c)b.push(c[2]);else{var f=new Promise((g,m)=>c=i[s]=[g,m]);b.push(c[2]=f);var w=a.p+a.u(s),p=new Error;a.l(w,g=>{if(a.o(i,s)&&(0!==(c=i[s])&&(i[s]=void 0),c)){var m=g&&("load"===g.type?"missing":g.type),C=g&&g.target&&g.target.src;p.message="Loading chunk "+s+" failed.\n("+m+": "+C+")",p.name="ChunkLoadError",p.type=m,p.request=C,c[1](p)}},"chunk-"+s,s)}};var d=(s,b)=>{var p,y,[c,f,w]=b,g=0;if(c.some(C=>0!==i[C])){for(p in f)a.o(f,p)&&(a.m[p]=f[p]);w&&w(a)}for(s&&s(b);g<c.length;g++)a.o(i,y=c[g])&&i[y]&&i[y][0](),i[y]=0},l=self.webpackChunkangular13=self.webpackChunkangular13||[];l.forEach(d.bind(null,0)),l.push=d.bind(null,l.push.bind(l))})();var U=a(8879),H=U.get,R=U.init;export{H as get,R as init};