/*! For license information please see 215.70d3f220.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkexercise_app=self.webpackChunkexercise_app||[]).push([[215],{5215:function(e,t,n){n.r(t),n.d(t,{startTapClick:function(){return o}});var i=n(1811),o=function(e){var t,n,o,v,l=10*-f,p=0,m=e.getBoolean("animated",!0)&&e.getBoolean("rippleEffect",!0),L=new WeakMap,h=function(e){l=(0,i.u)(e),g(e)},E=function(){clearTimeout(v),v=void 0,n&&(b(!1),n=void 0)},w=function(e){n||void 0!==t&&null!==t.parentElement||(t=void 0,k(a(e),e))},g=function(e){k(void 0,e)},k=function(e,t){if(!e||e!==n){clearTimeout(v),v=void 0;var o=(0,i.q)(t),a=o.x,c=o.y;if(n){if(L.has(n))throw new Error("internal error");n.classList.contains(s)||S(n,a,c),b(!0)}if(e){var d=L.get(e);d&&(clearTimeout(d),L.delete(e));var f=r(e)?0:u;e.classList.remove(s),v=setTimeout((function(){S(e,a,c),v=void 0}),f)}n=e}},S=function(e,t,n){p=Date.now(),e.classList.add(s);var i=m&&c(e);i&&i.addRipple&&(T(),o=i.addRipple(t,n))},T=function(){void 0!==o&&(o.then((function(e){return e()})),o=void 0)},b=function(e){T();var t=n;if(t){var i=d-Date.now()+p;if(e&&i>0&&!r(t)){var o=setTimeout((function(){t.classList.remove(s),L.delete(t)}),d);L.set(t,o)}else t.classList.remove(s)}},R=document;R.addEventListener("ionScrollStart",(function(e){t=e.target,E()})),R.addEventListener("ionScrollEnd",(function(){t=void 0})),R.addEventListener("ionGestureCaptured",E),R.addEventListener("touchstart",(function(e){l=(0,i.u)(e),w(e)}),!0),R.addEventListener("touchcancel",h,!0),R.addEventListener("touchend",h,!0),R.addEventListener("mousedown",(function(e){var t=(0,i.u)(e)-f;l<t&&w(e)}),!0),R.addEventListener("mouseup",(function(e){var t=(0,i.u)(e)-f;l<t&&g(e)}),!0),R.addEventListener("contextmenu",(function(e){g(e)}),!0)},a=function(e){if(!e.composedPath)return e.target.closest(".ion-activatable");for(var t=e.composedPath(),n=0;n<t.length-2;n++){var i=t[n];if(!(i instanceof ShadowRoot)&&i.classList.contains("ion-activatable"))return i}},r=function(e){return e.classList.contains("ion-activatable-instant")},c=function(e){if(e.shadowRoot){var t=e.shadowRoot.querySelector("ion-ripple-effect");if(t)return t}return e.querySelector("ion-ripple-effect")},s="ion-activated",u=200,d=200,f=2500}}]);
//# sourceMappingURL=215.70d3f220.chunk.js.map