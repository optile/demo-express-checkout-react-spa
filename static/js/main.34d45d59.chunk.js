(this["webpackJsonpdemo-express-checkout-react-spa"]=this["webpackJsonpdemo-express-checkout-react-spa"]||[]).push([[0],{101:function(e,t,n){},215:function(e,t,n){},216:function(e,t,n){},217:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(12),c=n.n(o),i=(n(101),n(19)),s=n(13),l="localhost"===window.location.hostname?"":"/demo-express-checkout-react-spa",u=n(230);var d=function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"My Single Page Shop"),r.a.createElement("img",{src:"assets/demoshopusb.jpg",width:"300",alt:"Ledger Nano S"}),r.a.createElement("h2",null,"Ledger Nano S: 20\u20ac"),r.a.createElement(u.a,{variant:"contained"},r.a.createElement(i.b,{to:l+"/checkout"},r.a.createElement("strong",null,"Go To Checkout Page"))))},m=n(39),p={local:{configuration:{baseURL:"https://api.integration.oscato.com/pci/v1/express",clientId:"v1.opt-div-app.5a3eb96a10b94efb9d19f2ff7137e7e5",country:"DE",language:"de_DE",translation:[{language:"en",resource:{confirm:"confirm"}},{language:"de",resource:{confirm:"best\xe4tigen"}}],paymentMethodsConfiguration:[{code:"PAYPAL",style:{size:"small",color:"gold",shape:"rect",label:"checkout"}}]},createTransactionDetails:function(e){return{transactionId:"tr-"+(new Date).getTime(),country:"DE",providerRequest:e,payment:{amount:20,currency:"EUR",reference:"Payment #1",longReference:{essential:"Thank you for your purchase!"}},products:[{name:"Ledger Nano S",amount:20}]}},customFunctions:{}},integration:{configuration:{baseURL:"https://api.integration.oscato.com/pci/v1/express",clientId:"v1.opt-div-app.51d30325cb0d4b5bb9cce2e7e6b15b1f",country:"DE",language:"de_DE",translation:[{language:"en",resource:{confirm:"confirm"}},{language:"de",resource:{confirm:"best\xe4tigen"}}],paymentMethodsConfiguration:[{code:"PAYPAL",style:{size:"small",color:"gold",shape:"rect",label:"checkout"}}]},createTransactionDetails:function(e){return{transactionId:"tr-"+(new Date).getTime(),country:"DE",providerRequest:e,payment:{amount:20,currency:"EUR",reference:"Payment #1",longReference:{essential:"Thank you for your purchase!"}},products:[{name:"Ledger Nano S",amount:20}]}},customFunctions:{}}};function v(){var e=new URLSearchParams(window.location.search),t=e.get("env")||("localhost"===window.location.hostname?"local":"integration");return p[t]||null}var f={MERCHANT:{USER:"555",TOKEN:"b348k9ho52e57lmksjl3um438k1e50cde1tbmlekrd"}},h={MERCHANT:{USER:"555",TOKEN:"b348k9ho52e57lmksjl3um438k1e50cde1tbmlekrd"}},E=function(e){return e.reduce((function(e,t){return"".concat(e).concat(encodeURIComponent(t.name),"=").concat(encodeURIComponent(t.value),"&")}),"").slice(0,-1)},g=function(){return new URLSearchParams(window.location.search).get("longId")},b=function(){var e="localhost"===window.location.hostname?f.MERCHANT:h.MERCHANT;return"Basic ".concat(btoa("".concat(e.USER,":").concat(e.TOKEN)))};var y=function(){var e=Object(s.f)(),t=v();return r.a.createElement(m.a,{configuration:t.configuration,createTransactionDetails:t.createTransactionDetails,customFunctions:{onProceed:function(t){var n=t.step,a=(t.dispatch,t.preset);if("update"===n){var r=a.redirect.parameters;e.push(l+"/summary?"+E(r))}if("cancel"===n){var o=a.redirect.parameters;e.push(l+"/checkout?"+E(o))}},onAbort:function(t){t.step,t.dispatch;var n=t.preset.redirect.parameters;e.push(l+"/checkout?"+E(n))},onCustomerAbort:function(t){t.step,t.dispatch;var n=t.preset.redirect.parameters;e.push(l+"/checkout?"+E(n))}},mode:null,longId:null})},k=n(26),w=n(2),R=n.n(w),T=n(51),x=(n(52),function(e,t){var n,a;return R.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,R.a.awrap(fetch(e,t));case 3:return n=r.sent,r.next=6,R.a.awrap(j(n));case 6:return a=r.sent,r.abrupt("return",{response:{ok:!0},data:a});case 10:return r.prev=10,r.t0=r.catch(0),r.abrupt("return",{response:{ok:!1},error:{message:r.t0.message,status:r.t0.status,statusText:r.t0.statusText}});case 13:case"end":return r.stop()}}),null,null,[[0,10]])});function j(e){var t=e.headers.get("content-type");if((null===t||void 0===t?void 0:t.includes("application/json"))||(null===t||void 0===t?void 0:t.includes("application/vnd.optile.payment.enterprise-v1-extensible+json;charset=UTF-8")))return function(e){return R.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e.json().then((function(t){return e.ok?t:Promise.reject({message:t,status:e.status,statusText:e.statusText})})));case 1:case"end":return t.stop()}}))}(e);if((null===t||void 0===t?void 0:t.includes("text/plain"))||(null===t||void 0===t?void 0:t.includes("text/html")))return function(e){return e.text().then((function(t){return e.ok?t:Promise.reject({message:t,status:e.status,statusText:e.statusText})}))}(e);throw new Error("Sorry, content-type ".concat(t," not supported"))}var O=function(e){var t=e.url,n=e.method,a=e.body,r=e.headers;return x(t,{method:n,mode:"cors",cache:"default",redirect:"follow",headers:Object(T.a)({"Content-Type":"application/json",Accept:"application/json"},r),body:a?JSON.stringify(a):null})},P=function(e){var t,n,a=null===(t=v())||void 0===t?void 0:null===(n=t.configuration)||void 0===n?void 0:n.baseURL;return"".concat(null===a||void 0===a?void 0:a.replace("pci/v1/express","api/presets"),"/").concat(e)},N=function(e,t){var n,a,r,o,c,i,s,l,u,d;return R.a.async((function(m){for(;;)switch(m.prev=m.next){case 0:return a=g(),r=P(a),o=b(),c={method:"GET",headers:{"Content-Type":"application/json",Authorization:o}},m.next=6,R.a.awrap(x(r,c));case 6:if(i=m.sent,s=i.response,l=i.data,!t){m.next=12;break}return e({address:null===l||void 0===l?void 0:null===(u=l.customerCollectedDetails)||void 0===u?void 0:null===(d=u.addresses)||void 0===d?void 0:d.shipping,network:null===l||void 0===l?void 0:l.network}),m.abrupt("return");case 12:(null===s||void 0===s?void 0:s.ok)&&(null===l||void 0===l?void 0:null===(n=l.links)||void 0===n?void 0:n.charge)?e(l.links.charge):e("ERROR");case 13:case"end":return m.stop()}}))};n(215);var S=function(){var e,t=Object(s.f)(),n=v(),o=Object(a.useState)({}),c=Object(k.a)(o,2),i=c[0],u=c[1],d=g();Object(a.useEffect)((function(){N(u,!0)}),[]);var p=null===i||void 0===i?void 0:i.address,f=null===i||void 0===i?void 0:null===(e=i.address)||void 0===e?void 0:e.name,h=null===i||void 0===i?void 0:i.network;return r.a.createElement("div",{className:"summaryContainer"},r.a.createElement("div",{className:"detailsContainer"},!!p&&r.a.createElement("div",{className:"details"},r.a.createElement("div",{className:"label"},"Shipping Address:"),r.a.createElement("div",null,"".concat(null===f||void 0===f?void 0:f.firstName," ").concat(null===f||void 0===f?void 0:f.lastName)),r.a.createElement("div",null,null===p||void 0===p?void 0:p.street),r.a.createElement("div",null,"".concat(null===p||void 0===p?void 0:p.city," ").concat(null===p||void 0===p?void 0:p.country)),r.a.createElement("div",null,null===p||void 0===p?void 0:p.zip)),!!h&&r.a.createElement("div",{className:"details"},r.a.createElement("div",{className:"label"},"Billing Information:"),null===i||void 0===i?void 0:i.network)),r.a.createElement(m.a,Object.assign({},n,{mode:"Summary",longId:d,customFunctions:{onProceed:function(e){var n=e.step,a=(e.dispatch,e.preset);if("confirm"===n){var r=a.redirect.parameters;t.push(l+"/thankyou?"+E(r))}},onAbort:function(e){var n=e.step,a=(e.dispatch,e.preset);if("confirm"===n){var r=a.redirect.parameters;t.push(l+"/cancel?"+E(r))}}}})))};var C=Object(s.g)((function(e){return e.location,r.a.createElement("div",null,"Payment failed, please retry again!")})),A=function(){var e=Object(a.useState)("PROCESSING"),t=Object(k.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)(""),i=Object(k.a)(c,2),s=i[0],l=i[1];return Object(a.useEffect)((function(){N(l)}),[]),Object(a.useEffect)((function(){s&&("EXPIRED"===s||"ERROR"===s?o(s):function(e,t){var n,a,r;R.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,R.a.awrap(O({url:e,method:"POST",body:{},headers:{Authorization:b()}}));case 2:"charged"===(null===(r=o.sent)||void 0===r?void 0:null===(n=r.data)||void 0===n?void 0:null===(a=n.status)||void 0===a?void 0:a.code)?t("CHARGED"):t("ERROR");case 4:case"end":return o.stop()}}))}(s,o))}),[s]),r.a.createElement("div",null,function(e){switch(e){case"CHARGED":return r.a.createElement("div",null,"Payment is successfull");case"EXPIRED":return r.a.createElement("div",null,"The session is expired");case"ERROR":return r.a.createElement("div",null,"Payment failed!");default:return r.a.createElement("div",null,"Processing...")}}(n))};n(216);var D=function(){return r.a.createElement(i.a,null,r.a.createElement("div",null,r.a.createElement(i.b,{to:l+"/"},"Home")),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{align:"center"},r.a.createElement(s.c,null,r.a.createElement(s.a,{path:l+"/checkout"},r.a.createElement(y,null)),r.a.createElement(s.a,{path:l+"/summary"},r.a.createElement(S,null)),r.a.createElement(s.a,{path:l+"/thankyou"},r.a.createElement(A,null)),r.a.createElement(s.a,{path:l+"/cancel"},r.a.createElement(C,null)),r.a.createElement(s.a,{path:l+"/"},r.a.createElement(d,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},96:function(e,t,n){e.exports=n(217)}},[[96,1,2]]]);
//# sourceMappingURL=main.34d45d59.chunk.js.map