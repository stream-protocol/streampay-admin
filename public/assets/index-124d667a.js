import{e as f,f as v}from"./index-edbddc4c.js";import{c as b,g as M,l as N}from"./a-13abdd83.js";import"./layout-7b834719.js";import"./use-notification-fd2349f5.js";import"./index-546377c5.js";import"./error-messages-d2d0bb30.js";import"./index.esm-b631137a.js";import"./index-195b1820.js";import"./index-6e57eecc.js";function L(o,w,h){var i;return f(this,void 0,void 0,function(){var s,c,l,d,n,g=this;return v(this,function(m){switch(m.label){case 0:return b()?[2,[]]:(s=M(),c=(i=w.enabledMiddleware)!==null&&i!==void 0?i:{},l=Object.entries(c).filter(function(r){r[0];var e=r[1];return e}).map(function(r){var e=r[0];return e}),d=l.map(function(r){return f(g,void 0,void 0,function(){var e,a,u,p;return v(this,function(t){switch(t.label){case 0:e=r.replace("@segment/",""),a=e,h&&(a=btoa(e).replace(/=/g,"")),u="".concat(s,"/middleware/").concat(a,"/latest/").concat(a,".js.gz"),t.label=1;case 1:return t.trys.push([1,3,,4]),[4,N(u)];case 2:return t.sent(),[2,window["".concat(e,"Middleware")]];case 3:return p=t.sent(),o.log("error",p),o.stats.increment("failed_remote_middleware"),[3,4];case 4:return[2]}})})}),[4,Promise.all(d)]);case 1:return n=m.sent(),n=n.filter(Boolean),[2,n]}})})}export{L as remoteMiddlewares};