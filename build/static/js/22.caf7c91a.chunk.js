"use strict";(self.webpackChunkexercise_app=self.webpackChunkexercise_app||[]).push([[22],{5022:function(e,t,n){n.r(t),n.d(t,{createSwipeBackGesture:function(){return u}});var r=n(1811),i=n(9507),a=n(7909),u=function(e,t,n,u,c){var o=e.ownerDocument.defaultView,s=(0,i.i)(e),f=function(e){return s?-e.deltaX:e.deltaX};return(0,a.createGesture)({el:e,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:function(e){return function(e){var t=e.startX;return s?t>=o.innerWidth-50:t<=50}(e)&&t()},onStart:n,onMove:function(e){var t=f(e)/o.innerWidth;u(t)},onEnd:function(e){var t=f(e),n=o.innerWidth,i=t/n,a=function(e){return s?-e.velocityX:e.velocityX}(e),u=a>=0&&(a>.2||t>n/2),h=(u?1-i:i)*n,d=0;if(h>5){var l=h/Math.abs(a);d=Math.min(l,540)}c(u,i<=0?.01:(0,r.j)(0,i,.9999),d)}})}}}]);
//# sourceMappingURL=22.caf7c91a.chunk.js.map