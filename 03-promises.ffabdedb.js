var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var i={id:e,exports:{}};return n[e]=i,o.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){t[e]=n},e.parcelRequired7c6=o);var i=o("iQIUW");const r=document.querySelector(".form"),{delay:l,step:u,amount:s}=r.elements;function a(e,n){const t=Math.random()>.3;return new Promise(((o,i)=>{setTimeout((()=>{t?o({position:e,delay:n}):i({position:e,delay:n})}),n)}))}function d({position:e,delay:n}){i.Notify.success(`✅ Fulfilled promise ${e} in ${n}ms`)}function f({position:e,delay:n}){i.Notify.failure(`❌ Rejected promise ${e} in ${n}ms`)}r.addEventListener("submit",(function(e){e.preventDefault();let n=Number(l.value);const t=Number(u.value),o=Number(s.value);if(n<0||t<0||o<0)return;for(let e=1;e<=o;e++)a(e,n).then(d).catch(f),n+=t}));
//# sourceMappingURL=03-promises.ffabdedb.js.map