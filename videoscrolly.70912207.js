parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Dvza":[function(require,module,exports) {
var define;
var global = arguments[3];
var e,t=arguments[3];!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof e&&e.amd?e(n):(t=t||self).scrollama=n()}(this,function(){"use strict";function e({id:e,step:t,marginTop:n}){const{index:o,height:r}=t,s=`scrollama__debug-step--${e}-${o}`;let i=document.querySelector(`.${s}`);i||(i=function(e){const t=document.createElement("div");t.className=`scrollama__debug-step ${e}`,t.style.position="fixed",t.style.left="0",t.style.width="100%",t.style.zIndex="9999",t.style.borderTop="2px solid black",t.style.borderBottom="2px solid black";const n=document.createElement("p");return n.style.position="absolute",n.style.left="0",n.style.height="1px",n.style.width="100%",n.style.borderTop="1px dashed black",t.appendChild(n),document.body.appendChild(t),t}(s)),i.style.top=`${-1*n}px`,i.style.height=`${r}px`,i.querySelector("p").style.top=`${r/2}px`}function t(e){console.error(`scrollama error: ${e}`)}function n(e){return+e.getAttribute("data-scrollama-index")}function o(e){if("string"==typeof e&&e.indexOf("px")>0){const t=+e.replace("px","");return isNaN(t)?(err("offset value must be in 'px' format. Fallback to 0.5."),{format:"percent",value:.5}):{format:"pixels",value:t}}return"number"!=typeof e&&isNaN(+e)?null:(e>1&&err("offset value is greater than 1. Fallback to 1."),e<0&&err("offset value is lower than 0. Fallback to 0."),{format:"percent",value:Math.min(Math.max(0,e),1)})}function r(e){const{top:t}=e.getBoundingClientRect();return t+window.pageYOffset-(document.body.clientTop||0)}let s,i,c;function a(e){const t=e?e.scrollTop:window.pageYOffset;s!==t&&((s=t)>i?c="down":s<i&&(c="up"),i=s)}return function(){let f,l,p={},u=function(){const e="abcdefghijklmnopqrstuvwxyz",t=Date.now(),n=[];for(let o=0;o<6;o+=1){const t=e[Math.floor(Math.random()*e.length)];n.push(t)}return`${n.join("")}${t}`}(),d=[],h=0,g=!1,m=!1,x=!1,b=!1,y=[];function v(){p={stepEnter:()=>{},stepExit:()=>{},stepProgress:()=>{}},y=[]}function E(e){e&&!g&&T(),!e&&g&&q(),g=e}function w(e,t){const o=n(e),r=d[o];void 0!==t&&(r.progress=t);const s={element:e,index:o,progress:t,direction:c};"enter"===r.state&&p.stepProgress(s)}function $([e]){const t=n(e.target),o=d[t],r=e.target.offsetHeight;r!==o.height&&(o.height=r,M(o),A(o),O(o))}function S([e]){a(l);const{isIntersecting:t,target:o}=e;t?function(e,t=!0){const o=n(e),r=d[o],s={element:e,index:o,direction:c};r.direction=c,r.state="enter",y[o]||p.stepEnter(s),b&&(y[o]=!0)}(o):function(e,t=!0){const o=n(e),r=d[o];if(!r.state)return!1;const s={element:e,index:o,direction:c};m&&("down"===c&&r.progress<1?w(e,1):"up"===c&&r.progress>0&&w(e,0)),r.direction=c,r.state="exit",p.stepExit(s)}(o)}function k([e]){const t=n(e.target),o=d[t],{isIntersecting:r,intersectionRatio:s,target:i}=e;r&&"enter"===o.state&&w(i,s)}function M({observers:e}){Object.keys(e).map(t=>{e[t].disconnect()})}function q(){d.forEach(M)}function O(e){const t=new ResizeObserver($);t.observe(e.node),e.observers.resize=t}function A(t){const n=window.innerHeight,o=t.offset||f,r="pixels"===o.format?1:n,s=o.value*r,i=t.height/2-s,c=t.height/2-(n-s),a=new IntersectionObserver(S,{rootMargin:`${i}px 0px ${c}px 0px`,threshold:.5});a.observe(t.node),t.observers.step=a,x&&e({id:u,step:t,marginTop:i,marginBottom:c})}function N(e){const t=window.innerHeight,n=e.offset||f,o="pixels"===n.format?1:t,r=n.value*o,s=`${-r+e.height}px 0px ${r-t}px 0px`,i=function(e,t){const n=Math.ceil(e/t),o=[],r=1/n;for(let s=0;s<n+1;s+=1)o.push(s*r);return o}(e.height,h),c=new IntersectionObserver(k,{rootMargin:s,threshold:i});c.observe(e.node),e.observers.progress=c}function T(){q(),d.forEach(O),d.forEach(A),m&&d.forEach(N)}const z={};return z.setup=(({step:e,parent:n,offset:c=.5,threshold:p=4,progress:u=!1,once:g=!1,debug:y=!1,container:w})=>(function(e){s=0,i=0,document.addEventListener("scroll",()=>a(e))}(w),(d=function(e,t=document){return"string"==typeof e?Array.from(t.querySelectorAll(e)):e instanceof Element?[e]:e instanceof NodeList?Array.from(e):e instanceof Array?e:[]}(e,n).map((e,t)=>({index:t,direction:void 0,height:e.offsetHeight,node:e,observers:{},offset:o(e.dataset.offset),top:r(e),progress:0,state:void 0}))).length?(m=u,b=g,x=y,h=Math.max(1,+p),f=o(c),l=w,v(),function(e){e.forEach(e=>e.node.setAttribute("data-scrollama-index",e.index))}(d),E(!0),z):(t("no step elements"),z))),z.enable=(()=>(E(!0),z)),z.disable=(()=>(E(!1),z)),z.destroy=(()=>(E(!1),v(),z)),z.resize=(()=>(T(),z)),z.offset=(e=>null==e?f.value:(f=o(e),T(),z)),z.onStepEnter=(e=>("function"==typeof e?p.stepEnter=e:t("onStepEnter requires a function"),z)),z.onStepExit=(e=>("function"==typeof e?p.stepExit=e:t("onStepExit requires a function"),z)),z.onStepProgress=(e=>("function"==typeof e?p.stepProgress=e:t("onStepProgress requires a function"),z)),z}});
},{}],"PVxO":[function(require,module,exports) {
"use strict";var e=t(require("scrollama"));function t(e){return e&&e.__esModule?e:{default:e}}var r=document.querySelector("main"),o=r.querySelector("#scrolly"),l=o.querySelector(".sticky-thing"),c=o.querySelector("article"),u=c.querySelectorAll(".step"),i=(0,e.default)();function n(e){var t=c.querySelector("video"),r=e.element;(console.log(r),"scroll-video"==r.dataset.id)?t.play():(t=c.querySelector("video")).pause()}function d(e){var t=c.querySelector("video");t.muted?(console.log("fired"),t.muted=!1):t.muted=!0}function s(){i.setup({step:"#scrolly article .step",offset:.4,debug:!1}).onStepEnter(n),window.addEventListener("click",d),window.addEventListener("resize",i.resize)}s();
},{"scrollama":"Dvza"}]},{},["PVxO"], "script")
//# sourceMappingURL=videoscrolly.70912207.js.map