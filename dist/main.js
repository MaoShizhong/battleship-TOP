(()=>{"use strict";var e={934:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(81),o=n.n(r),a=n(645),i=n.n(a),s=n(667),c=n.n(s),l=new URL(n(371),n.b),d=new URL(n(412),n.b),u=i()(o()),h=c()(l),p=c()(d);u.push([e.id,`[data-cell~='head'][data-cell~='vertical'],\n[data-cell~='head'][data-cell~='horizontal'],\n[data-cell~='middle'][data-cell~='vertical'],\n[data-cell~='middle'][data-cell~='horizontal'],\n[data-cell~='end'][data-cell~='vertical'],\n[data-cell~='end'][data-cell~='horizontal'],\n[data-cell~='ship'] {\n    background-color: var(--c-red);\n    border-width: 2px;\n}\n\n[data-cell~='head'][data-cell~='vertical'] {\n    border-bottom: none;\n}\n\n[data-cell~='head'][data-cell~='horizontal'] {\n    border-right: none;\n}\n\n[data-cell~='middle'][data-cell~='vertical'] {\n    border-block: none;\n}\n\n[data-cell~='middle'][data-cell~='horizontal'] {\n    border-inline: none;\n}\n\n[data-cell~='end'][data-cell~='vertical'] {\n    border-top: none;\n}\n\n[data-cell~='end'][data-cell~='horizontal'] {\n    border-left: none;\n}\n\n[data-cell~='hits'] {\n    background-color: var(--c-red) !important;\n    background-image: url(${h});\n    background-size: cover;\n}\n\n[data-cell~='miss'] {\n    background-image: url(${p});\n    background-size: cover;\n}\n`,""]);const m=u},664:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(81),o=n.n(r),a=n(645),i=n.n(a),s=n(667),c=n.n(s),l=new URL(n(100),n.b),d=new URL(n(989),n.b),u=i()(o());u.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Sora:wght@300;500;800&display=swap);"]);var h=c()(l),p=c()(d);u.push([e.id,`@font-face {\n    font-family: 'Shanghai';\n    src: url(${h}) format('woff2'),\n        url(${p}) format('truetype');\n}\n\n:root {\n    --columns: 10;\n    --rows: 10;\n    --c-red: #aa381e;\n    --oob: #dbba9a;\n}\n\n* {\n    margin: 0;\n    user-select: none;\n}\n\nbody {\n    background-color: #fce7cb;\n    background-image: url('https://www.transparenttextures.com/patterns/paper-1.png');\n    font-family: 'Sora', sans-serif;\n    height: calc(100svh - 8px);\n}\n\n.logo {\n    margin-top: 0.5rem;\n    flex-shrink: 1;\n    height: clamp(3rem, 15svh, 7.8rem);\n    text-align: center;\n}\n\n.logo #logo {\n        margin: 0;\n        height: 46%;\n    }\n\n.logo h1 {\n        font-family: 'Shanghai';\n        font-size: min(2.8rem, 5svh);\n    }\n\nmain {\n    flex: 1;\n    /* margin, logo, title, margin bottom */\n    position: relative;\n}\n\nmain > div {\n        width: 95vw;\n    }\n\n.stretch {\n    align-self: stretch;\n}\n\n#start-game {\n    background-color: transparent;\n    font: bold 2rem 'Shanghai';\n    position: absolute;\n    top: 0;\n}\n\n#boards {\n    align-items: center;\n    gap: 1rem;\n    height: 100%;\n    width: 100%;\n}\n\n#boards *:not(button) {\n        transition: all 500ms ease-in;\n    }\n\n#boards > div {\n        overflow: hidden;\n    }\n\n#boards > div:not(.player-one) {\n            flex: 0.00001;\n        }\n\n.js-has-pseudo [csstools-has-z-2q-33-2p-36-2s-37-w-1q-w-2s-2x-3a-1m-32-33-38-14-1a-34-30-2p-3d-2t-36-19-33-32-2t-15-1m-2w-2p-37-14-1q-w-2x-31-2v-15]:not(#does-not-exist):not(does-not-exist):not(does-not-exist) {\n                animation: flexGrowMid 500ms ease-in forwards;\n            }\n\n#boards > div:not(.player-one):has(> img) {\n                animation: flexGrowMid 500ms ease-in forwards;\n            }\n\n@keyframes flexGrowMid {\n                    to {\n                        flex: 1 0 0;\n                    }\n                }\n\n.js-has-pseudo [csstools-has-z-2q-33-2p-36-2s-37-w-1q-w-2s-2x-3a-1m-32-33-38-14-1a-34-30-2p-3d-2t-36-19-33-32-2t-15-1m-2w-2p-37-14-1q-w-1a-2q-33-2p-36-2s-15]:not(#does-not-exist):not(.does-not-exist):not(does-not-exist) {\n                animation: flexGrowBoard 500ms ease-in forwards;\n            }\n\n#boards > div:not(.player-one):has(> .board) {\n                animation: flexGrowBoard 500ms ease-in forwards;\n            }\n\n@keyframes flexGrowBoard {\n                    to {\n                        flex: 3 0 0;\n                    }\n                }\n\n.js-has-pseudo [csstools-has-z-2q-33-2p-36-2s-37-w-1q-w-2s-2x-3a-1m-2w-2p-37-14-1q-w-1a-2q-33-2p-36-2s-15]:not(#does-not-exist):not(does-not-exist) {\n        flex: 3 0 0;\n        position: relative;\n    }\n\n#boards > div:has(> .board) {\n        flex: 3 0 0;\n        position: relative;\n    }\n\n#boards .small {\n        transform: scale(0.001);\n    }\n\n.cannon {\n    font-family: 'Shanghai';\n    text-align: center;\n}\n\n@keyframes blink {\n            to {\n                opacity: 1;\n            }\n        }\n\n.cannon > img {\n        width: 85%;\n    }\n\n.attack-result {\n    position: fixed;\n    opacity: 0;\n    font: bold 3rem 'Shanghai';\n    animation: 1800ms cubic-bezier(0.35, 0.02, 0.27, 1) bounce;\n}\n\n@keyframes bounce {\n        50% {\n            transform: translateY(-3rem);\n            opacity: 1;\n        }\n    }\n\n.board {\n    aspect-ratio: 1 / 1;\n    border: 1rem double black;\n    display: grid;\n    grid-template-columns: repeat(var(--columns), 1fr);\n    grid-template-rows: repeat(var(--rows), 1fr);\n    width: min(58vw, 30rem, 50svh);\n}\n\n.board.placement {\n        width: min(75vw, 30rem, 47svh);\n    }\n\n.board.player-two > button:hover:not(:disabled) {\n        background-color: var(--oob);\n    }\n\n.board button {\n        border: 1px solid black;\n        background-color: #fdead2;\n        cursor: crosshair;\n    }\n\n.ships {\n    margin-bottom: min(2svh, 2rem);\n    text-align: center;\n    height: 15svh;\n    width: min(95vw, 900px);\n    font-size: clamp(0.8rem, 2vmin, 1.2rem);\n}\n\n.ships > .ship-placement {\n        flex: 3;\n        height: 100%;\n    }\n\n.ships > .ship-placement > button {\n            margin-block: min(1svh, 0.8rem);\n            min-height: 33%;\n        }\n\n.ships > .ship-placement > button > img {\n                width: 17vmin;\n            }\n\n.js-has-pseudo [csstools-has-1a-37-2w-2x-34-37-w-1q-w-2s-2x-3a-1m-2w-2p-37-14-z-2s-2t-30-2t-38-2t-18-w-z-36-33-38-2p-38-2t-15]:not(#does-not-exist):not(does-not-exist) {\n        flex: 1;\n    }\n\n.ships > div:has(#delete, #rotate) {\n        flex: 1;\n    }\n\n.js-has-pseudo [csstools-has-1a-37-2w-2x-34-37-w-1q-w-2s-2x-3a-1m-2w-2p-37-14-z-2s-2t-30-2t-38-2t-18-w-z-36-33-38-2p-38-2t-15-w-2x-31-2v]:not(#does-not-exist):not(does-not-exist):not(does-not-exist) {\n            margin-block: 0.1rem;\n            width: min(2.5rem, 140%, 6vmin);\n        }\n\n.ships > div:has(#delete, #rotate) img {\n            margin-block: 0.1rem;\n            width: min(2.5rem, 140%, 6vmin);\n        }\n\n.ball {\n    background-color: black;\n    border-radius: 50%;\n    height: 7rem;\n    width: 7rem;\n    position: absolute;\n    top: -8rem;\n    z-index: 100;\n}\n\nbutton {\n    border: none;\n    cursor: pointer;\n}\n\n#winner {\n    cursor: pointer;\n    font: bold 5rem 'Shanghai';\n    text-align: center;\n}\n\n.current {\n    transform: scale(1.2);\n}\n\n.current + p {\n        text-decoration: underline;\n        text-decoration-thickness: 2px;\n        text-underline-offset: 0.3rem;\n    }\n\n.disable:not(.square) {\n    transform: scale(0.8);\n    filter: contrast(0.5);\n}\n\n.transparent {\n    background-color: transparent;\n    border: none;\n}\n\n.grow {\n    transition: 200ms ease;\n}\n\n.grow:hover:not(:disabled) {\n        transform: scale(1.2);\n    }\n\n.invisible {\n    transition: none !important;\n    visibility: hidden;\n}\n\n.flex {\n    display: flex;\n}\n\n.vert {\n    flex-direction: column;\n}\n\n.center {\n    justify-content: center;\n    align-items: center;\n}\n\n.flex-start {\n    justify-content: flex-start;\n}\n\n.even {\n    justify-content: space-evenly;\n    align-items: center;\n}\n\n.breathe {\n    animation: breathe 2.4s linear infinite;\n}\n\n@keyframes breathe {\n        0% {\n            opacity: 0.5;\n        }\n        50% {\n            opacity: 1;\n        }\n        100% {\n            opacity: 0.5;\n        }\n    }\n\n@media (max-width: 740px) {\n    #logo {\n        margin: 1rem 0 0;\n        height: 3.5rem;\n    }\n\n    #logo + h1 {\n        font-family: 'Shanghai';\n        font-size: 2rem;\n    }\n\n    #boards.mob-vert {\n        flex-direction: column;\n        padding-top: 1.4rem;\n    }\n\n        #boards.mob-vert > div {\n            overflow: unset;\n        }\n\n        #boards.mob-vert img {\n            max-height: 100px;\n        }\n\n    .invisible {\n        display: none;\n    }\n\n    @keyframes bounce {\n        50% {\n            transform: translateY(-2rem);\n            opacity: 1;\n        }\n    }\n}\n\n@media (max-height: 630px) {\n    #start-game {\n        position: fixed;\n        top: 50%;\n        left: 74%;\n        transform: translateY(-50%);\n        font-size: 2.8rem;\n    }\n}\n`,""]);const m=u},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),t.push(d))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],s=0;s<e.length;s++){var c=e[s],l=r.base?c[0]+r.base:c[0],d=a[l]||0,u="".concat(l," ").concat(d);a[l]=d+1;var h=n(u),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==h)t[h].references++,t[h].updater(p);else{var m=o(p,r);r.byIndex=s,t.splice(s,0,{identifier:u,updater:m,references:1})}i.push(u)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=n(a[i]);t[s].references--}for(var c=r(e,o),l=0;l<a.length;l++){var d=n(a[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}a=c}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},989:(e,t,n)=>{e.exports=n.p+"fonts/shanghai-746b0209564f4d6ac6b2.ttf"},100:(e,t,n)=>{e.exports=n.p+"fonts/shanghai-5547ec47ba4c1419778b.woff2"},371:(e,t,n)=>{e.exports=n.p+"images/hits-52d708ed1ab4562ed837.png"},412:(e,t,n)=>{e.exports=n.p+"images/miss-8918ba0f1791fce7ac00.png"}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!e;)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0;var r={};(()=>{n.d(r,{H:()=>D});var e=n(379),t=n.n(e),o=n(795),a=n.n(o),i=n(569),s=n.n(i),c=n(565),l=n.n(c),d=n(216),u=n.n(d),h=n(589),p=n.n(h),m=n(664),f={};f.styleTagTransform=p(),f.setAttributes=l(),f.insert=s().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=u(),t()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;var g=n(934),y={};function v(e){if("csstools-has-"!==e.slice(0,13))return"";for(var t=(e=e.slice(13)).split("-"),n="",r=0;r<t.length;r++)n+=String.fromCharCode(parseInt(t[r],36));return n}function b(e){if(""===e)return"";for(var t,n="",r=0;r<e.length;r++)t=e.charCodeAt(r).toString(36),n+=0===r?t:"-"+t;return"csstools-has-"+n}y.styleTagTransform=p(),y.setAttributes=l(),y.insert=s().bind(null,"head"),y.domAPI=a(),y.insertStyleElement=u(),t()(g.Z,y),g.Z&&g.Z.locals&&g.Z.locals,function(e){try{if(e.document.querySelector(":has(*, :does-not-exist, > *)"),!e.document.querySelector(":has(:scope *)")&&CSS.supports("selector(:has(div))"))return}catch(e){}var t=p(e.Element.prototype.querySelector);e.Element.prototype.querySelector=function(e){return t.apply(this,arguments)};var n=p(e.Element.prototype.querySelectorAll);if(e.Element.prototype.querySelectorAll=function(e){return n.apply(this,arguments)},e.Element.prototype.matches){var r=p(e.Element.prototype.matches);e.Element.prototype.matches=function(e){return r.apply(this,arguments)}}if(e.Element.prototype.closest){var o=p(e.Element.prototype.closest);e.Element.prototype.closest=function(e){return o.apply(this,arguments)}}if("Document"in e&&"prototype"in e.Document){var a=p(e.Document.prototype.querySelector);e.Document.prototype.querySelector=function(e){return a.apply(this,arguments)};var i=p(e.Document.prototype.querySelectorAll);if(e.Document.prototype.querySelectorAll=function(e){return i.apply(this,arguments)},e.Document.prototype.matches){var s=p(e.Document.prototype.matches);e.Document.prototype.matches=function(e){return s.apply(this,arguments)}}if(e.Document.prototype.closest){var c=p(e.Document.prototype.closest);e.Document.prototype.closest=function(e){return c.apply(this,arguments)}}}function l(e){for(var t="",n=0,r=0,o=!1,a=!1,i=!1,s=!1,c=0;c<e.length;c++){var l=e[c];if(o)t+=l,o=!1;else if(a)l===i&&(a=!1),t+=l;else switch(":has("!==t.toLowerCase()||s||(s=!0,n=c,t=""),l){case":":s||(t=""),t+=l;continue;case"(":s&&r++,t+=l;continue;case")":if(s){if(0===r)return{innerQuery:t,start:n,end:c-1};r--}t+=l;continue;case"\\":t+=l,o=!0;continue;case'"':case"'":t+=l,a=!0,i=l;continue;default:t+=l;continue}}return!1}function d(e){for(var t,n,r=[],o="",a=!1,i=!1,s=!1,c=!1,l=0,d=0;d<e.length;d++){var u=e[d];if(a)o+=u,a=!1;else switch(u){case",":if(i){o+=u;continue}if(l>0){o+=u;continue}r.push(o),o="";continue;case"\\":o+=u,a=!0;continue;case'"':case"'":if(i&&u===s){o+=u,i=!1;continue}o+=u,i=!0,s=u;continue;case"(":case")":case"[":case"]":if(i){o+=u;continue}if(t=u,"("===(n=c)&&")"===t||"["===n&&"]"===t){o+=u,0==--l&&(c=!1);continue}if(u===c){o+=u,l++;continue}o+=u,l++,c=u;continue;default:o+=u;continue}}return r.push(o),r}function u(e,t,n){var r=l(e);if(!r)return e;if(t)return!1;var o=r.innerQuery,a="q-has"+(Math.floor(9e6*Math.random())+1e6),i="["+a+"]",s=e;if(r.innerQuery.toLowerCase().indexOf(":has(")>-1){for(var c=d(r.innerQuery),h=[],p=0;p<c.length;p++){var m=c[p];if(!u(m,!0,(function(){})))throw new Error("Nested :has() is not supported");h.push(m)}var f=s.substring(0,r.start-5),g=s.substring(r.end+2);return f+h.join(", ")+g}if(f=s.substring(0,r.start-5),g=s.substring(r.end+2),s=f+i+g,n(o,a),s.toLowerCase().indexOf(":has(")>-1){var y=u(s,!1,n);if(y)return y}return s}function h(e,t){if("setAttribute"in e&&"querySelector"in e&&t(e),e.hasChildNodes())for(var n=e.childNodes,r=0;r<n.length;++r)h(n[r],t)}function p(t){return function(n){if(-1===n.toLowerCase().indexOf(":has(")||!l(n))return t.apply(this,arguments);var r;if("getRootNode"in this)r=this.getRootNode();else for(var o=this;o;)r=o,o=o.parentNode;var a=this;a===e.document&&(a=e.document.documentElement);var i="q-has-scope"+(Math.floor(9e6*Math.random())+1e6);a.setAttribute(i,"");try{n=function(e,t){for(var n=[],r="",o=!1,a=!1,i=!1,s=0,c=0;c<e.length;c++){var l=e[c];if(o)r+=l,o=!1;else if(a)l===i&&(a=!1),r+=l;else switch(":scope"===r.toLowerCase()&&!s&&/^[\[\.\:\\"\s|+>~#&,)]/.test(l||"")&&(n.push(r.slice(0,r.length-6)),n.push("["+t+"]"),r=""),l){case":":n.push(r),r="",r+=l;continue;case"\\":r+=l,o=!0;continue;case'"':case"'":r+=l,a=!0,i=l;continue;case"[":r+=l,s++;continue;case"]":r+=l,s>0&&s--;continue;default:r+=l;continue}}return":scope"===r.toLowerCase()&&(n.push(r.slice(0,r.length-6)),n.push("["+t+"]"),r=""),0===n.length?e:n.join("")+r}(n,i);var s=[i],c=u(n,!1,(function(e,t){s.push(t);for(var n=d(e),o=0;o<n.length;o++){var a,i=n[o].trim();a=">"===i[0]||"+"===i[0]||"~"===i[0]?i.slice(1).trim():":scope "+i,h(r,(function(e){if(e.querySelector(a))switch(i[0]){case"~":case"+":for(var n=e.childNodes,r=0;r<n.length;r++){var o=n[r];if("setAttribute"in o){var s="q-has-id"+(Math.floor(9e6*Math.random())+1e6);o.setAttribute(s,""),e.querySelector(":scope ["+s+"] "+i)&&o.setAttribute(t,""),o.removeAttribute(s)}}break;case">":s="q-has-id"+(Math.floor(9e6*Math.random())+1e6),e.setAttribute(s,""),e.querySelector(":scope["+s+"] "+i)&&e.setAttribute(t,""),e.removeAttribute(s);break;default:e.setAttribute(t,"")}}))}}));arguments[0]=c;var p=t.apply(this,arguments);if(a.removeAttribute(i),s.length>0){for(var m=[],f=0;f<s.length;f++)m.push("["+s[f]+"]");for(var g=e.document.querySelectorAll(m.join(",")),y=0;y<g.length;y++)for(var v=g[y],b=0;b<s.length;b++)v.removeAttribute(s[b])}return p}catch(r){if(a.removeAttribute(i),s.length>0){for(m=[],f=0;f<s.length;f++)m.push("["+s[f]+"]");for(g=e.document.querySelectorAll(m.join(",")),y=0;y<g.length;y++)for(v=g[y],b=0;b<s.length;b++)v.removeAttribute(s[b])}var w="";try{t.apply(this,[":core-web-does-not-exist"])}catch(e){(w=e.message)&&(w=w.replace(":core-web-does-not-exist",n))}w||(w="Failed to execute 'querySelector' on 'Document': '"+n+"' is not a valid selector.");try{throw new DOMException(w)}catch(e){throw new Error(w)}}}}}(self);class w{constructor(e,t){this.isAI=e,this.selector=t,this.name=this.isAI?"CPU":"You",this.remainingAttacks=this.getAllPossibleAttacks()}attackOpponent(e){e.board.some((e=>e.some((e=>/^hits(?!.*sunk$)/.test(e)))))?this.honeInAttack(e):this.sendRandomAttack(e)}sendRandomAttack(e){const t=~~(Math.random()*this.remainingAttacks.length),n=this.remainingAttacks[t];e.receiveAttack(n[0],n[1]),this.removeAttackFromRemainingAttacks(n)}honeInAttack(e){const t=[...document.querySelectorAll(`${e.player.selector} > button`)].filter((e=>/^hits(?!.*sunk$)/.test(e.dataset.cell)));let n,r,o,a;do{n=t[~~(Math.random()*t.length)],r=+n.dataset.y,o=+n.dataset.x,a=this.getHoneAttackOptions(r,o)}while(!a.length);const i=a[~~(Math.random()*a.length)];return this.removeAttackFromRemainingAttacks([i[0],i[1]]),e.receiveAttack(i[0],i[1])}removeAttackFromRemainingAttacks(e){const t=this.remainingAttacks.findIndex((t=>t[0]===e[0]&&t[1]===e[1]));this.remainingAttacks.splice(t,1)}getAllPossibleAttacks(){const e=[];for(let t=0;t<M.HEIGHT;t++)for(let n=0;n<M.WIDTH;n++)e.push([t,n]);return e}getHoneAttackOptions(e,t){const n=[];for(let r=e-1;r<=e+1;r++)for(let o=t-1;o<=t+1;o++){const a=r>=0&&r<M.HEIGHT&&o>=0&&o<M.WIDTH,i=r===e&&(o===t-1||o===t+1)||o===t&&(r===e-1||r===e+1),s=!this.remainingAttacks.some((e=>e[0]===r&&e[1]===o));a&&i&&!s&&n.push([r,o])}return n}}class S{constructor(e){this.coordinates=e,this.name=S.shipName(this.coordinates.length)}hit(e,t){const n=this.coordinates.findIndex((([n,r])=>n===e&&r===t));this.coordinates[n].push("hit")}get isSunk(){return this.coordinates.every((e=>3===e.length))}static shipName(e){switch(e){case 5:return"Zhanxian";case 4:return"Haihu";case 3:return"Mengchong";case 2:return"Yuting"}}}class x{static changeShipSize(e){const t=e.currentTarget;x.currentShipSize=+t.value,document.querySelector(".current").classList.remove("current"),t.classList.add("current")}static changeDirection(){x.currentShipOrientation="horizontal"===x.currentShipOrientation?"vertical":"horizontal",document.querySelector("#rotate > h2").textContent="horizontal"===x.currentShipOrientation?"H":"V"}static highlightSquares(e){const t=e.target;if("BUTTON"===t.tagName&&!x.inDeleteMode){const n=x.getSquaresToEdge(t),r=x.currentShipSize<=n;t.dataset.cell.includes("ship")||(t.style.backgroundColor=r?"var(--c-red)":"var(--oob)"),x.applyBackgroundToAdjacentSquares(e.currentTarget,t,n,!1,r)}}static removeHighlightOnMouseout(e){const t=e.target;if("BUTTON"===t.tagName&&!x.inDeleteMode){const n=x.getSquaresToEdge(t);t.style.backgroundColor=null,x.applyBackgroundToAdjacentSquares(e.currentTarget,t,n,!0)}}static applyBackgroundToAdjacentSquares(e,t,n,r,o=!1){const a=x.getNextSquareOffset();for(let i=1;i<Math.min(x.currentShipSize,n);i++){const n=[...t.parentNode.children].indexOf(t);(t=e.querySelector(`button:nth-child(${n+a+1})`)).dataset.cell.includes("ship")||(t.style.backgroundColor=r?null:o?"var(--c-red)":"var(--oob)")}}static getNextSquareOffset(){return"horizontal"===x.currentShipOrientation?1:M.WIDTH}static getSquaresToEdge(e){return"horizontal"===x.currentShipOrientation?M.WIDTH-+e.dataset.x:M.HEIGHT-+e.dataset.y}static placeShip(e){const t=e.target;if("BUTTON"===t.tagName){const e=+t.dataset.y,n=+t.dataset.x;x.inDeleteMode?D.playerOne.deleteShip(e,n):D.playerOne.placeShip(e,n)}}static toggleDeleteMode(){x.inDeleteMode=!x.inDeleteMode,document.querySelector("#delete").classList.toggle("current"),document.querySelectorAll(".ships button:not(#delete)").forEach((e=>{e.disabled=!e.disabled,e.classList.toggle("disable")}))}}x.inDeleteMode=!1,x.currentShipOrientation="horizontal",x.currentShipSize=5;const A=n.p+"images/cannon-8f4851be3c26010357d8.png";class E{static renderBoard(e,t=null,n=!0){e.replaceChildren(),e.style.setProperty("--rows",M.HEIGHT.toString()),e.style.setProperty("--columns",M.WIDTH.toString());for(let r=0;r<M.HEIGHT;r++)for(let o=0;o<M.WIDTH;o++){const a=document.createElement("button");n?(a.dataset.cell=t&&t[r][o].includes("sunk")?t[r][o]:t&&/^hits|miss/.test(t[r][o])?t[r][o].slice(0,4):"none",a.addEventListener("click",(()=>D.playerTwo.receiveAttack(r,o)))):a.dataset.cell=t[r][o],a.dataset.y=r.toString(),a.dataset.x=o.toString(),e.appendChild(a)}}static renderPlayerTwoBoard(){const e=document.createElement("div");E.addClasses([e],"flex","even","small");const t=document.createElement("div");E.addClasses([t],"board","player-two");const n=document.createElement("div");E.addClasses([n],"small","cannon"),n.appendChild(E.createCentralDiv());const r=document.querySelector("#boards");E.addClasses([r],"mob-vert"),r.appendChild(n),r.appendChild(e).appendChild(t),E.renderBoard(t),setTimeout((()=>E.removeClasses([e,n],"small")),1)}static createCentralDiv(){const e=document.createDocumentFragment(),t=new Image,n=document.createElement("h2");return n.textContent="Your move",t.src=A,[n,t].forEach((t=>e.appendChild(t))),e}static reduceShipCount(e,t){document.querySelector(`h4:has(+ button[value="${x.currentShipSize}"])`).innerHTML=`${e}<br>(${t})`}static increaseShipCount(e,t,n){document.querySelector(`h4:has(+ button[value="${t}"])`).innerHTML=`${e}<br>(${n})`}static showGameStartBtn(){const e=document.createElement("button");e.id="start-game",E.addClasses([e],"grow","breathe"),e.textContent="START",e.addEventListener("click",(()=>D.startGame()));const t=document.querySelector("main");t.insertBefore(e,t.firstChild)}static toggleShipBtns(){const e=document.querySelector(".ships");e.classList.toggle("invisible"),e.querySelectorAll("button").forEach((e=>e.classList.toggle("grow")))}static toDualBoardView(){document.querySelector("#start-game").remove(),E.renderPlayerTwoBoard(),E.renderBoard(D.playerOne.UIBoard,D.playerOne.board,!1)}static disablePlacementMode(){const e=document.querySelector(".board.placement");E.removeClasses([e],"placement");const t={mouseover:x.highlightSquares,mouseout:x.removeHighlightOnMouseout,click:x.placeShip};for(const[n,r]of Object.entries(t))e.removeEventListener(n,r)}static clearMain(){document.querySelector("main").replaceChildren()}static switchCurrentPlayerIndicator(e){const t=document.querySelector(".cannon"),n=t.firstElementChild,r=t.lastElementChild;n.style.opacity=e?"0.4":"1",n.style.animation=e?"600ms linear alternate infinite blink":null,n.textContent=e?"CPU's move":"Your move",r.style.transform=`scaleX(${e?-1:1})`}static disableAllButtons(e){document.querySelectorAll("button").forEach((t=>t.disabled=e))}static addClasses(e,...t){e.forEach((e=>{t.forEach((t=>e.classList.add(t)))}))}static removeClasses(e,...t){e.forEach((e=>{t.forEach((t=>e.classList.remove(t)))}))}}class T{static createCannonball(e){const t=document.createElement("div");E.addClasses([t],"ball");const n=e.isAI?10:55;return t.style.left=`${Math.floor(35*Math.random())+n}%`,t}static fireCannonball(e,t,n,r){const o=T.createCannonball(e);document.querySelector("body").appendChild(o);const a=T.getSquarePosition(t,n,r);o.animate([{height:"1rem",width:"1rem",top:`${a.top}%`,left:`${a.left}%`}],{duration:T.CANNONBALL_DURATION,easing:"cubic-bezier(.88,-0.03,.82,.61)"}),setTimeout((()=>o.remove()),T.CANNONBALL_DURATION)}static getSquarePosition(e,t,n){const r=e.querySelector(`[data-y="${t}"][data-x="${n}"]`);return{top:(r.getBoundingClientRect().top+window.scrollY)/window.innerHeight*100,left:(r.getBoundingClientRect().left+window.scrollX)/window.innerWidth*100}}static showAttackText(e,t){const n=document.createElement("h1");n.textContent=t,n.style.top=`calc(${e.getBoundingClientRect().top/window.innerHeight*100}% - 1rem)`,E.addClasses([n],"attack-result"),e.appendChild(n),setTimeout((()=>n.remove()),T.RESULT_DURATION)}}T.RESULT_DURATION=1700,T.CANNONBALL_DURATION=1e3;var k,q,C,L=function(e,t,n,r){if("a"===n&&!r)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===n?r:"a"===n?r.call(e):r?r.value:t.get(e)};class M{static get HEIGHT(){return L(M,k,"f",q)}static get WIDTH(){return L(M,k,"f",C)}constructor(e,t){this.UIBoard=document.querySelector(t),this.player=new w(e,t),this.board=Array.from({length:M.HEIGHT},(()=>Array(M.WIDTH).fill("none"))),console.log(this.board),this.ships=[],this.shipLimits={Zhanxian:1,Haihu:1,Mengchong:2,Yuting:3}}canFitShip(e,t,n,r){if(!("vertical"===r&&e+n<=M.HEIGHT||"horizontal"===r&&t+n<=M.WIDTH))return!1;for(let o=0;o<n;o++){if(this.board[e][t].includes("ship"))return!1;"vertical"===r?e++:t++}return!0}placeShip(e,t,n=x.currentShipSize,r=x.currentShipOrientation){if(!this.shipsOfTypeRemaining(n)||!this.canFitShip(e,t,n,r))return;const o=[];for(let a=0;a<n;a++){const i=0===a?"head":a===n-1?"end":"middle";this.board[e][t]=`ship ${i} ${r}`,o.push([e,t]),"vertical"===r?e++:t++}this.ships.push(new S(o)),this.reduceShipCount(this.ships.at(-1).name),this.player.isAI||this.renderPlacement()}renderPlacement(){E.renderBoard(this.UIBoard,this.board,!1),this.allShipsPlaced()&&E.showGameStartBtn()}deleteShip(e,t){const n=this.findShip(e,t);if(n){n.coordinates.forEach((e=>{this.board[e[0]][e[1]]="none"})),this.increaseShipCount(n.name,n.coordinates.length),this.ships.splice(this.ships.indexOf(n),1),E.renderBoard(this.UIBoard,this.board,this.player.isAI),x.toggleDeleteMode();const e=document.querySelector("#start-game");e&&e.remove()}}reduceShipCount(e){this.shipLimits[e]--,this.player.isAI||E.reduceShipCount(e,this.shipLimits[e])}increaseShipCount(e,t){this.shipLimits[e]++,E.increaseShipCount(e,t,this.shipLimits[e])}receiveAttack(e,t){if(this.board[e][t].includes("hits")||"miss"===this.board[e][t])return alert("You have already targeted this square!\nPlease pick another.");E.disableAllButtons(!0),T.fireCannonball(this.player,this.UIBoard,e,t),setTimeout((()=>this.executeAttackAfterAnimationDelay(e,t)),T.CANNONBALL_DURATION)}executeAttackAfterAnimationDelay(e,t){this.board[e][t]=this.board[e][t].includes("ship")?`hits ${this.board[e][t].slice(5)}`:"miss",this.board[e][t].includes("hits")?this.hitShip(e,t):T.showAttackText(this.UIBoard.parentElement,"Miss!"),E.renderBoard(this.UIBoard,this.board,this.player.isAI),E.disableAllButtons(!0),setTimeout((()=>{if(!this.ships.length)return D.showWinner(D.activePlayer.player.name);D.switchActivePlayer()}),T.RESULT_DURATION)}hitShip(e,t){const n=this.findShip(e,t);if(n.hit(e,t),n.isSunk){T.showAttackText(this.UIBoard.parentElement,`${n.name} sunk!`),this.updateAIShipSunkStatus(n.coordinates);const e=this.ships.indexOf(n);this.ships.splice(e,1)}else T.showAttackText(this.UIBoard.parentElement,"Hit!")}updateAIShipSunkStatus(e){e.forEach((e=>this.board[e[0]][e[1]]+=" sunk"))}allShipsPlaced(){return Object.values(this.shipLimits).every((e=>0==e))}shipsOfTypeRemaining(e){return this.shipLimits[S.shipName(e)]}findShip(e,t){return this.ships.find((n=>n.coordinates.find((([n,r])=>n===e&&r===t))))}generateAIBoard(){if(this.player.isAI)for(;!this.allShipsPlaced();){const e=Math.floor(10*Math.random()),t=Math.floor(10*Math.random()),n=Math.floor(4*Math.random())+2,r=["horizontal","vertical"][Math.floor(2*Math.random())];this.placeShip(e,t,n,r)}}}k=M,q={value:10},C={value:10},function(e,t){t||(t={}),(t={hover:!!t.hover||!1,debug:!!t.debug||!1,observedAttributes:t.observedAttributes||[],forcePolyfill:!!t.forcePolyfill||!1}).mustPolyfill=t.forcePolyfill||!function(){try{if(!("CSS"in self)||!("supports"in self.CSS)||!self.CSS.supports("selector(:has(div))"))return!1}catch(e){return!1}return!0}(),Array.isArray(t.observedAttributes)||(t.observedAttributes=[]),t.observedAttributes=t.observedAttributes.filter((function(e){return"string"==typeof e})),t.observedAttributes=t.observedAttributes.concat(["accept","accept-charset","accesskey","action","align","allow","alt","async","autocapitalize","autocomplete","autofocus","autoplay","buffered","capture","challenge","charset","checked","cite","class","code","codebase","cols","colspan","content","contenteditable","contextmenu","controls","coords","crossorigin","csp","data","datetime","decoding","default","defer","dir","dirname","disabled","download","draggable","enctype","enterkeyhint","for","form","formaction","formenctype","formmethod","formnovalidate","formtarget","headers","hidden","high","href","hreflang","http-equiv","icon","id","importance","integrity","intrinsicsize","inputmode","ismap","itemprop","keytype","kind","label","lang","language","list","loop","low","manifest","max","maxlength","minlength","media","method","min","multiple","muted","name","novalidate","open","optimum","pattern","ping","placeholder","poster","preload","radiogroup","readonly","referrerpolicy","rel","required","reversed","rows","rowspan","sandbox","scope","scoped","selected","shape","size","sizes","slot","span","spellcheck","src","srcdoc","srclang","srcset","start","step","summary","tabindex","target","title","translate","type","usemap","value","width","wrap"]);var n=[],r=e.createElement("x");if([].forEach.call(e.styleSheets,s),t.mustPolyfill){if(i(),"MutationObserver"in self&&new MutationObserver((function(t){t.forEach((function(t){[].forEach.call(t.addedNodes||[],(function(e){1===e.nodeType&&e.sheet&&s(e.sheet)})),[].push.apply(n,n.splice(0).filter((function(t){return t.rule.parentStyleSheet&&t.rule.parentStyleSheet.ownerNode&&e.documentElement.contains(t.rule.parentStyleSheet.ownerNode)}))),i()}))})).observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:t.observedAttributes}),e.addEventListener("focus",i,!0),e.addEventListener("blur",i,!0),e.addEventListener("input",i),e.addEventListener("change",i,!0),t.hover&&("onpointerenter"in e?(e.addEventListener("pointerenter",i,!0),e.addEventListener("pointerleave",i,!0)):(e.addEventListener("mouseover",i,!0),e.addEventListener("mouseout",i,!0))),"defineProperty"in Object&&"getOwnPropertyDescriptor"in Object&&"hasOwnProperty"in Object)try{var o=function(e,t){if(e.hasOwnProperty(t)){var n=Object.getOwnPropertyDescriptor(e,t);n&&n.configurable&&"set"in n&&Object.defineProperty(e,t,{configurable:n.configurable,enumerable:n.enumerable,get:function(){return n.get.apply(this,arguments)},set:function(){n.set.apply(this,arguments);try{i()}catch(e){}}})}};"HTMLElement"in self&&HTMLElement.prototype&&o(HTMLElement.prototype,"disabled"),["checked","selected","readOnly","required"].forEach((function(e){["HTMLButtonElement","HTMLFieldSetElement","HTMLInputElement","HTMLMeterElement","HTMLOptGroupElement","HTMLOptionElement","HTMLOutputElement","HTMLProgressElement","HTMLSelectElement","HTMLTextAreaElement"].forEach((function(t){t in self&&self[t].prototype&&o(self[t].prototype,e)}))}))}catch(e){t.debug&&console.error(e)}var a=!1}function i(){a&&cancelAnimationFrame(a),a=requestAnimationFrame((function(){n.forEach((function(n){var o=[],a=[];try{a=e.querySelectorAll(n.selector)}catch(e){return void(t.debug&&console.error(e))}[].forEach.call(a,(function(t){o.push(t),r.innerHTML="<x "+n.attributeName+">",t.setAttributeNode(r.children[0].attributes[0].cloneNode()),e.documentElement.style.zoom=1,e.documentElement.style.zoom=null})),n.nodes.forEach((function(t){-1===o.indexOf(t)&&(t.removeAttribute(n.attributeName),e.documentElement.style.zoom=1,e.documentElement.style.zoom=null)})),n.nodes=o}))}))}function s(e){try{[].forEach.call(e.cssRules||[],(function(r,o){if(r.selectorText){r.selectorText=r.selectorText.replace(/\.js-has-pseudo\s/g,"");try{var a=function(e){for(var t,n,r=[],o=0,a=!1,i=!1,s=0;s<e.length;s++){var c=e[s];switch(c){case"[":if(a){t+=c;continue}0===o?t="":t+=c,o++;continue;case"]":if(a){t+=c;continue}if(0==--o){var l=v(t);i&&r.push(l)}else t+=c;continue;case"\\":t+=e[s],t+=e[s+1],s++;continue;case'"':case"'":if(a&&c===n){a=!1;continue}if(a){t+=c;continue}a=!0,n=c;continue;default:""===t&&1===o&&"csstools-has-"===e.slice(s,s+13)&&(i=!0),t+=c;continue}}for(var d=[],u=0;u<r.length;u++)-1===d.indexOf(r[u])&&d.push(r[u]);return d}(r.selectorText.toString());if(0===a.length)return;if(!t.mustPolyfill)return void e.deleteRule(o);for(var i=0;i<a.length;i++){var c=a[i];n.push({rule:r,selector:c,attributeName:b(c),nodes:[]})}}catch(e){t.debug&&console.error(e)}}else s(r)}))}catch(e){t.debug&&console.error(e)}}}(document,{hover:!0});const O=document.querySelector(".board.placement"),I=document.querySelector("#delete"),H=document.querySelector("#rotate"),P=document.querySelectorAll(".ship-placement > button");let D=new class{constructor(){this.playerOne=new M(!1,".player-one"),this.playerTwo,this.activePlayer=this.playerOne,this.otherPlayer,E.renderBoard(document.querySelector(".board.placement"),this.playerOne.board,!1)}startGame(){E.disablePlacementMode(),E.toggleShipBtns(),E.toDualBoardView(),this.playerTwo=new M(!0,".player-two"),this.playerTwo.generateAIBoard(),this.otherPlayer=this.playerTwo}switchActivePlayer(){[this.activePlayer,this.otherPlayer]=[this.otherPlayer,this.activePlayer],E.switchCurrentPlayerIndicator(this.activePlayer.player.isAI),this.activePlayer.player.isAI?this.activePlayer.player.attackOpponent(this.otherPlayer):E.disableAllButtons(!1)}showWinner(e){E.clearMain();const t=document.createElement("h1");t.innerText=`${e} ${"You"===e?"win":"wins"}!\nClick to play again`,t.id="winner",t.addEventListener("click",(()=>location.reload())),document.querySelector("main").appendChild(t)}};I.addEventListener("click",x.toggleDeleteMode),H.addEventListener("click",x.changeDirection),P.forEach((e=>e.addEventListener("click",x.changeShipSize))),O.addEventListener("mouseover",x.highlightSquares),O.addEventListener("mouseout",x.removeHighlightOnMouseout),O.addEventListener("click",x.placeShip)})()})();