fotoramaVersion="4.6.4",function(t,e,n,o,i){"use strict";function r(t){var e="bez_"+o.makeArray(arguments).join("_").replace(".","p");if("function"!=typeof o.easing[e]){var n=function(t,e){var n=[null,null],o=[null,null],i=[null,null],r=function(r,a){return i[a]=3*t[a],o[a]=3*(e[a]-t[a])-i[a],n[a]=1-i[a]-o[a],r*(i[a]+r*(o[a]+r*n[a]))},a=function(t){return i[0]+t*(2*o[0]+3*n[0]*t)},s=function(t){for(var e,n=t,o=0;++o<14&&(e=r(n,0)-t,!(Math.abs(e)<.001));)n-=e/a(n);return n};return function(t){return r(s(t),1)}};o.easing[e]=function(e,o,i,r,a){return r*n([t[0],t[1]],[t[2],t[3]])(o/a)+i}}return e}function a(){}function s(t,e,n){return Math.max(isNaN(e)?-1/0:e,Math.min(isNaN(n)?1/0:n,t))}function u(t){return t.match(/ma/)&&t.match(/-?\d+(?!d)/g)[t.match(/3d/)?12:4]}function l(t){return Le?+u(t.css("transform")):+t.css("left").replace("px","")}function c(t){var e={};return Le?e.transform="translate3d("+t+"px,0,0)":e.left=t,e}function f(t){return{"transition-duration":t+"ms"}}function d(t,e){return isNaN(t)?e:t}function h(t,e){return d(+String(t).replace(e||"px",""))}function p(t){return/%$/.test(t)?h(t,"%"):i}function m(t,e){return d(p(t)/100*e,h(t))}function v(t){return(!isNaN(h(t))||!isNaN(h(t,"%")))&&t}function w(t,e,n,o){return(t-(o||0))*(e+(n||0))}function g(t,e,n,o){return-Math.round(t/(e+(n||0))-(o||0))}function y(t){var e=t.data();e.tEnd||(V(t[0],{WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",msTransition:"MSTransitionEnd",transition:"transitionend"}[ye.prefixed("transition")],function(t){e.tProp&&t.propertyName.match(e.tProp)&&e.onEndFn()}),e.tEnd=!0)}function b(t,e,n,o){var i,r=t.data();r&&(r.onEndFn=function(){i||(i=!0,clearTimeout(r.tT),n())},r.tProp=e,clearTimeout(r.tT),r.tT=setTimeout(function(){r.onEndFn()},1.5*o),y(t))}function x(t,e){if(t.length){var n=t.data();Le?(t.css(f(0)),n.onEndFn=a,clearTimeout(n.tT)):t.stop();var o=_(e,function(){return l(t)});return t.css(c(o)),o}}function _(){for(var t,e=0,n=arguments.length;n>e&&"number"!=typeof(t=e?arguments[e]():arguments[e]);e++);return t}function C(t,e){return Math.round(t+(e-t)/1.5)}function T(){return T.p=T.p||("https:"===n.protocol?"https://":"http://"),T.p}function k(t){var n=e.createElement("a");return n.href=t,n}function M(t,e){if("string"!=typeof t)return t;var n,o;if((t=k(t)).host.match(/youtube\.com/)&&t.search){if(n=t.search.split("v=")[1]){var i=n.indexOf("&");-1!==i&&(n=n.substring(0,i)),o="youtube"}}else t.host.match(/youtube\.com|youtu\.be/)?(n=t.pathname.replace(/^\/(embed\/|v\/)?/,"").replace(/\/.*/,""),o="youtube"):t.host.match(/vimeo\.com/)&&(o="vimeo",n=t.pathname.replace(/^\/(video\/)?/,"").replace(/\/.*/,""));return n&&o||!e||(n=t.href,o="custom"),!!n&&{id:n,type:o,s:t.search.replace(/^\?/,""),p:T()}}function S(t,e,n){var i,r,a=t.video;return"youtube"===a.type?(i=(r=T()+"img.youtube.com/vi/"+a.id+"/default.jpg").replace(/\/default.jpg$/,"/hqdefault.jpg"),t.thumbsReady=!0):"vimeo"===a.type?o.ajax({url:T()+"vimeo.com/api/v2/video/"+a.id+".json",dataType:"jsonp",success:function(o){t.thumbsReady=!0,F(e,{img:o[0].thumbnail_large,thumb:o[0].thumbnail_small},t.i,n)}}):t.thumbsReady=!0,{img:i,thumb:r}}function F(t,e,n,i){for(var r=0,a=t.length;a>r;r++){var s=t[r];if(s.i===n&&s.thumbsReady){var u={videoReady:!0};u[Je]=u[tn]=u[Ze]=!1,i.splice(r,1,o.extend({},s,u,e));break}}}function E(t){function e(t,e,i){var r=t.children("img").eq(0),a=t.attr("href"),s=t.attr("src"),u=r.attr("src"),l=e.video,c=!!i&&M(a,!0===l);c?a=!1:c=l,n(t,r,o.extend(e,{video:c,img:e.img||a||s||u,thumb:e.thumb||u||s||a}))}function n(t,e,n){var i=n.thumb&&n.img!==n.thumb,r=h(n.width||t.attr("width")),a=h(n.height||t.attr("height"));o.extend(n,{width:r,height:a,thumbratio:K(n.thumbratio||h(n.thumbwidth||e&&e.attr("width")||i||r)/h(n.thumbheight||e&&e.attr("height")||i||a))})}var i=[];return t.children().each(function(){var t=o(this),r=H(o.extend(t.data(),{id:t.attr("id")}));if(t.is("a, img"))e(t,r,!0);else{if(t.is(":empty"))return;n(t,null,o.extend(r,{html:this,_html:t.html()}))}i.push(r)}),i}function P(t){return 0===t.offsetWidth&&0===t.offsetHeight}function j(t){return!o.contains(e.documentElement,t)}function N(t,e,n,o){return N.i||(N.i=1,N.ii=[!0]),o=o||N.i,"undefined"==typeof N.ii[o]&&(N.ii[o]=!0),t()?e():N.ii[o]&&setTimeout(function(){N.ii[o]&&N(t,e,n,o)},n||100),N.i++}function $(t){n.replace(n.protocol+"//"+n.host+n.pathname.replace(/^\/?/,"/")+n.search+"#"+t)}function q(t,e,n,o){var i=t.data(),r=i.measures;if(r&&(!i.l||i.l.W!==r.width||i.l.H!==r.height||i.l.r!==r.ratio||i.l.w!==e.w||i.l.h!==e.h||i.l.m!==n||i.l.p!==o)){var a=r.width,u=r.height,l=e.w/e.h,c=r.ratio>=l,f="scaledown"===n,d="contain"===n,h="cover"===n,p=J(o);c&&(f||d)||!c&&h?u=(a=s(e.w,0,f?a:1/0))/r.ratio:(c&&h||!c&&(f||d))&&(a=(u=s(e.h,0,f?u:1/0))*r.ratio),t.css({width:a,height:u,left:m(p.x,e.w-a),top:m(p.y,e.h-u)}),i.l={W:r.width,H:r.height,r:r.ratio,w:e.w,h:e.h,m:n,p:o}}return!0}function A(t,e){var n=t[0];n.styleSheet?n.styleSheet.cssText=e:t.html(e)}function z(t,e,n){return e!==n&&(e>=t?"left":t>=n?"right":"left right")}function L(t,e,n,o){if(!n)return!1;if(!isNaN(t))return t-(o?0:1);for(var i,r=0,a=e.length;a>r;r++){if(e[r].id===t){i=r;break}}return i}function O(t,e,n){n=n||{},t.each(function(){var t,i=o(this),r=i.data();r.clickOn||(r.clickOn=!0,o.extend(nt(i,{onStart:function(e){t=e,(n.onStart||a).call(this,e)},onMove:n.onMove||a,onTouchEnd:n.onTouchEnd||a,onEnd:function(n){n.moved||e.call(this,t)}}),{noMove:!0}))})}function I(t,e){return'<div class="'+t+'">'+(e||"")+"</div>"}function D(t){for(var e=t.length;e;){var n=Math.floor(Math.random()*e--),o=t[e];t[e]=t[n],t[n]=o}return t}function R(t){return"[object Array]"==Object.prototype.toString.call(t)&&o.map(t,function(t){return o.extend({},t)})}function W(t,e,n){t.scrollLeft(e||0).scrollTop(n||0)}function H(t){if(t){var e={};return o.each(t,function(t,n){e[t.toLowerCase()]=n}),e}}function K(t){if(t){var e=+t;return isNaN(e)?+(e=t.split("/"))[0]/+e[1]||i:e}}function V(t,e,n,o){e&&(t.addEventListener?t.addEventListener(e,n,!!o):t.attachEvent("on"+e,n))}function B(t){return!!t.getAttribute("disabled")}function X(t){return{tabindex:-1*t+"",disabled:t}}function Q(t,e){V(t,"keyup",function(n){B(t)||13==n.keyCode&&e.call(t,n)})}function U(t,e){V(t,"focus",t.onfocusin=function(n){e.call(t,n)},!0)}function Y(t,e){t.preventDefault?t.preventDefault():t.returnValue=!1,e&&t.stopPropagation&&t.stopPropagation()}function G(t){return t?">":"<"}function J(t){return{x:v((t=(t+"").split(/\s+/))[0])||rn,y:v(t[1])||rn}}function Z(t,e){var n=t.data(),i=Math.round(e.pos),r=function(){n.sliding=!1,(e.onEnd||a)()};"undefined"!=typeof e.overPos&&e.overPos!==e.pos&&(i=e.overPos,r=function(){Z(t,o.extend({},e,{overPos:e.pos,time:Math.max(Ve,e.time/2)}))});var s=o.extend(c(i),e.width&&{width:e.width});n.sliding=!0,Le?(t.css(o.extend(f(e.time),s)),e.time>10?b(t,"transform",r,e.time):r()):t.stop().animate(s,e.time,nn,r)}function tt(t,e,n,i,r,s){var u=void 0!==s;if(u||(r.push(arguments),Array.prototype.push.call(arguments,r.length),!(r.length>1))){t=t||o(t),e=e||o(e);var l=t[0],c=e[0],f="crossfade"===i.method,d=function(){if(!d.done){d.done=!0;var t=(u||r.shift())&&r.shift();t&&tt.apply(this,t),(i.onEnd||a)(!!t)}},h=i.time/(s||1);n.removeClass(Ht+" "+Wt),t.stop().addClass(Ht),e.stop().addClass(Wt),f&&c&&t.fadeTo(0,0),t.fadeTo(f?h:0,1,f&&d),e.fadeTo(h,0,d),l&&f||c||d()}}function et(t){var e=(t.touches||[])[0]||t;t._x=e.pageX,t._y=e.clientY,t._now=o.now()}function nt(t,n){function i(t){return d=o(t.target),b.checked=m=v=g=!1,c||b.flow||t.touches&&t.touches.length>1||t.which>1||Ee&&Ee.type!==t.type&&je||(m=n.select&&d.is(n.select,y))?m:(p="touchstart"===t.type,v=d.is("a, a *",y),h=b.control,w=b.noMove||b.noSwipe||h?16:b.snap?0:4,et(t),f=Ee=t,Pe=t.type.replace(/down|start/,"move").replace(/Down/,"Move"),(n.onStart||a).call(y,t,{control:h,$target:d}),c=b.flow=!0,void((!p||b.go)&&Y(t)))}function r(t){if(t.touches&&t.touches.length>1||We&&!t.isPrimary||Pe!==t.type||!c)return c&&s(),void(n.onTouchEnd||a)();et(t);var e=Math.abs(t._x-f._x),o=Math.abs(t._y-f._y),i=e-o,r=(b.go||b.x||i>=0)&&!b.noSwipe,u=0>i;p&&!b.checked?(c=r)&&Y(t):(Y(t),(n.onMove||a).call(y,t,{touch:p})),!g&&Math.sqrt(Math.pow(e,2)+Math.pow(o,2))>w&&(g=!0),b.checked=b.checked||r||u}function s(t){(n.onTouchEnd||a)();var e=c;b.control=c=!1,e&&(b.flow=!1),!e||v&&!b.checked||(t&&Y(t),je=!0,clearTimeout(Ne),Ne=setTimeout(function(){je=!1},1e3),(n.onEnd||a).call(y,{moved:g,$target:d,control:h,touch:p,startEvent:f,aborted:!t||"MSPointerCancel"===t.type}))}function u(){b.flow||setTimeout(function(){b.flow=!0},10)}function l(){b.flow&&setTimeout(function(){b.flow=!1},Ke)}var c,f,d,h,p,m,v,w,g,y=t[0],b={};return We?(V(y,"MSPointerDown",i),V(e,"MSPointerMove",r),V(e,"MSPointerCancel",s),V(e,"MSPointerUp",s)):(V(y,"touchstart",i),V(y,"touchmove",r),V(y,"touchend",s),V(e,"touchstart",u),V(e,"touchend",l),V(e,"touchcancel",l),$e.on("scroll",l),t.on("mousedown",i),qe.on("mousemove",r).on("mouseup",s)),t.on("click","a",function(t){b.checked&&Y(t)}),b}function ot(t,e){function n(n,o){k=!0,l=f=n._x,v=n._now,m=[[v,l]],d=h=F.noMove||o?0:x(t,(e.getPos||a)()),(e.onStart||a).call(M,n)}function i(t,e){g=F.min,y=F.max,b=F.snap,_=t.altKey,k=T=!1,e.control||S.sliding||n(t)}function r(o,i){F.noSwipe||(k||n(o),f=o._x,m.push([o._now,f]),p=z(h=d-(l-f),g,y),g>=h?h=C(h,g):h>=y&&(h=C(h,y)),F.noMove||(t.css(c(h)),T||(T=!0,i.touch||We||t.addClass(oe)),(e.onMove||a).call(M,o,{pos:h,edge:p})))}function u(i){if(!F.noSwipe||!i.moved){k||n(i.startEvent,!0),i.touch||We||t.removeClass(oe);for(var r,u,l,c,p,v,x,C,T,S=(w=o.now())-Ke,E=null,P=Ve,j=e.friction,N=m.length-1;N>=0;N--){if(r=m[N][0],u=Math.abs(r-S),null===E||l>u)E=r,c=m[N][1];else if(E===S||u>l)break;l=u}x=s(h,g,y);var $=c-f,q=$>=0,A=w-E,z=A>Ke,L=!z&&h!==d&&x===h;b&&(x=s(Math[L?q?"floor":"ceil":"round"](h/b)*b,g,y),g=y=x),L&&(b||x===h)&&(T=-$/A,P*=s(Math.abs(T),e.timeLow,e.timeHigh),p=Math.round(h+T*P/j),b||(x=p),(!q&&p>y||q&&g>p)&&(C=p-(v=q?g:y),b||(x=v),C=s(x+.03*C,v-50,v+50),P=Math.abs((h-C)/(T/j)))),P*=_?10:1,(e.onEnd||a).call(M,o.extend(i,{moved:i.moved||z&&b,pos:h,newPos:x,overPos:C,time:P}))}}var l,f,d,h,p,m,v,w,g,y,b,_,T,k,M=t[0],S=t.data(),F={};return F=o.extend(nt(e.$wrap,o.extend({},e,{onStart:i,onMove:r,onEnd:u})),F)}function it(t,e){var n,i,r,s={prevent:{}};return V(t[0],He,function(t){var u=t.wheelDeltaY||-1*t.deltaY||0,l=t.wheelDeltaX||-1*t.deltaX||0,c=Math.abs(l)&&!Math.abs(u),f=G(0>l),d=i===f,h=o.now(),p=Ke>h-r;i=f,r=h,c&&s.ok&&(!s.prevent[f]||n)&&(Y(t,!0),n&&d&&p||(e.shift&&(n=!0,clearTimeout(s.t),s.t=setTimeout(function(){n=!1},Be)),(e.onEnd||a)(t,e.shift?f:l)))}),s}function rt(){o.each(o.Fotorama.instances,function(t,e){e.index=t})}function at(t){o.Fotorama.instances.push(t),rt()}function st(t){o.Fotorama.instances.splice(t.index,1),rt()}var ut="fotorama",lt="fullscreen",ct=ut+"__wrap",ft=ct+"--css2",dt=ct+"--css3",ht=ct+"--video",pt=ct+"--fade",mt=ct+"--slide",vt=ct+"--no-controls",wt=ct+"--no-shadows",gt=ct+"--pan-y",yt=ct+"--rtl",bt=ct+"--only-active",xt=ct+"--no-captions",_t=ct+"--toggle-arrows",Ct=ut+"__stage",Tt=Ct+"__frame",kt=Tt+"--video",Mt=Ct+"__shaft",St=ut+"__grab",Ft=ut+"__pointer",Et=ut+"__arr",Pt=Et+"--disabled",jt=Et+"--prev",Nt=Et+"--next",$t=ut+"__nav",qt=$t+"-wrap",At=$t+"__shaft",zt=$t+"--dots",Lt=$t+"--thumbs",Ot=$t+"__frame",It=Ot+"--dot",Dt=Ot+"--thumb",Rt=ut+"__fade",Wt=Rt+"-front",Ht=Rt+"-rear",Kt=ut+"__shadow"+"s",Vt=Kt+"--left",Bt=Kt+"--right",Xt=ut+"__active",Qt=ut+"__select",Ut=ut+"--hidden",Yt=ut+"--fullscreen",Gt=ut+"__fullscreen-icon",Jt=ut+"__error",Zt=ut+"__loading",te=ut+"__loaded",ee=te+"--full",ne=te+"--img",oe=ut+"__grabbing",ie=ut+"__img",re=ie+"--full",ae=ut+"__dot",se=ut+"__thumb",ue=se+"-border",le=ut+"__html",ce=ut+"__video",fe=ce+"-play",de=ce+"-close",he=ut+"__caption",pe=ut+"__caption__wrap",me=ut+"__spinner",ve='" tabindex="0" role="button',we=o&&o.fn.jquery.split(".");if(!we||we[0]<1||1==we[0]&&we[1]<8)throw"Fotorama requires jQuery 1.8 or later and will not run without it.";var ge={},ye=function(t,e,n){function o(t){v.cssText=t}function i(t,e){return typeof t===e}function r(t,e){return!!~(""+t).indexOf(e)}function a(t,e){for(var o in t){var i=t[o];if(!r(i,"-")&&v[i]!==n)return"pfx"!=e||i}return!1}function s(t,e,o){for(var r in t){var a=e[t[r]];if(a!==n)return!1===o?t[r]:i(a,"function")?a.bind(o||e):a}return!1}function u(t,e,n){var o=t.charAt(0).toUpperCase()+t.slice(1),r=(t+" "+y.join(o+" ")+o).split(" ");return i(e,"string")||i(e,"undefined")?a(r,e):s(r=(t+" "+b.join(o+" ")+o).split(" "),e,n)}var l,c,f="2.6.2",d={},h=e.documentElement,p="modernizr",m=e.createElement(p),v=m.style,w=({}.toString," -webkit- -moz- -o- -ms- ".split(" ")),g="Webkit Moz O ms",y=g.split(" "),b=g.toLowerCase().split(" "),x={},_=[],C=_.slice,T=function(t,n,o,i){var r,a,s,u,l=e.createElement("div"),c=e.body,f=c||e.createElement("body");if(parseInt(o,10))for(;o--;)(s=e.createElement("div")).id=i?i[o]:p+(o+1),l.appendChild(s);return r=["&#173;",'<style id="s',p,'">',t,"</style>"].join(""),l.id=p,(c?l:f).innerHTML+=r,f.appendChild(l),c||(f.style.background="",f.style.overflow="hidden",u=h.style.overflow,h.style.overflow="hidden",h.appendChild(f)),a=n(l,t),c?l.parentNode.removeChild(l):(f.parentNode.removeChild(f),h.style.overflow=u),!!a},k={}.hasOwnProperty;for(var M in c=i(k,"undefined")||i(k.call,"undefined")?function(t,e){return e in t&&i(t.constructor.prototype[e],"undefined")}:function(t,e){return k.call(t,e)},Function.prototype.bind||(Function.prototype.bind=function(t){var e=this;if("function"!=typeof e)throw new TypeError;var n=C.call(arguments,1),o=function(){if(this instanceof o){var i=function(){};i.prototype=e.prototype;var r=new i,a=e.apply(r,n.concat(C.call(arguments)));return Object(a)===a?a:r}return e.apply(t,n.concat(C.call(arguments)))};return o}),x.csstransforms3d=function(){return!!u("perspective")},x)c(x,M)&&(l=M.toLowerCase(),d[l]=x[M](),_.push((d[l]?"":"no-")+l));return d.addTest=function(t,e){if("object"==typeof t)for(var o in t)c(t,o)&&d.addTest(o,t[o]);else{if(t=t.toLowerCase(),d[t]!==n)return d;e="function"==typeof e?e():e,"undefined"!=typeof enableClasses&&enableClasses&&(h.className+=" "+(e?"":"no-")+t),d[t]=e}return d},o(""),m=null,d._version=f,d._prefixes=w,d._domPrefixes=b,d._cssomPrefixes=y,d.testProp=function(t){return a([t])},d.testAllProps=u,d.testStyles=T,d.prefixed=function(t,e,n){return e?u(t,e,n):u(t,"pfx")},d}(0,e),be={ok:!1,is:function(){return!1},request:function(){},cancel:function(){},event:"",prefix:""},xe="webkit moz o ms khtml".split(" ");if("undefined"!=typeof e.cancelFullScreen)be.ok=!0;else for(var _e=0,Ce=xe.length;Ce>_e;_e++)if(be.prefix=xe[_e],"undefined"!=typeof e[be.prefix+"CancelFullScreen"]){be.ok=!0;break}be.ok&&(be.event=be.prefix+"fullscreenchange",be.is=function(){switch(this.prefix){case"":return e.fullScreen;case"webkit":return e.webkitIsFullScreen;default:return e[this.prefix+"FullScreen"]}},be.request=function(t){return""===this.prefix?t.requestFullScreen():t[this.prefix+"RequestFullScreen"]()},be.cancel=function(){return""===this.prefix?e.cancelFullScreen():e[this.prefix+"CancelFullScreen"]()});var Te,ke={lines:12,length:5,width:2,radius:7,corners:1,rotate:15,color:"rgba(128, 128, 128, .75)",hwaccel:!0},Me={top:"auto",left:"auto",className:""};!function(t,e){Te=e()}(0,function(){function t(t,n){var o,i=e.createElement(t||"div");for(o in n)i[o]=n[o];return i}function n(t){for(var e=1,n=arguments.length;n>e;e++)t.appendChild(arguments[e]);return t}function o(t,e,n,o){var i=["opacity",e,~~(100*t),n,o].join("-"),r=.01+n/o*100,a=Math.max(1-(1-t)/e*(100-r),t),s=d.substring(0,d.indexOf("Animation")).toLowerCase(),u=s&&"-"+s+"-"||"";return p[i]||(m.insertRule("@"+u+"keyframes "+i+"{0%{opacity:"+a+"}"+r+"%{opacity:"+t+"}"+(r+.01)+"%{opacity:1}"+(r+e)%100+"%{opacity:"+t+"}100%{opacity:"+a+"}}",m.cssRules.length),p[i]=1),i}function r(t,e){var n,o,r=t.style;for(e=e.charAt(0).toUpperCase()+e.slice(1),o=0;o<h.length;o++)if(r[n=h[o]+e]!==i)return n;return r[e]!==i?e:void 0}function a(t,e){for(var n in e)t.style[r(t,n)||n]=e[n];return t}function s(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)t[o]===i&&(t[o]=n[o])}return t}function u(t){for(var e={x:t.offsetLeft,y:t.offsetTop};t=t.offsetParent;)e.x+=t.offsetLeft,e.y+=t.offsetTop;return e}function l(t,e){return"string"==typeof t?t:t[e%t.length]}function c(t){return void 0===this?new c(t):void(this.opts=s(t||{},c.defaults,v))}function f(){function e(e,n){return t("<"+e+' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">',n)}m.addRule(".spin-vml","behavior:url(#default#VML)"),c.prototype.lines=function(t,o){function i(){return a(e("group",{coordsize:c+" "+c,coordorigin:-u+" "+-u}),{width:c,height:c})}function r(t,r,s){n(d,n(a(i(),{rotation:360/o.lines*t+"deg",left:~~r}),n(a(e("roundrect",{arcsize:o.corners}),{width:u,height:o.width,left:o.radius,top:-o.width>>1,filter:s}),e("fill",{color:l(o.color,t),opacity:o.opacity}),e("stroke",{opacity:0}))))}var s,u=o.length+o.width,c=2*u,f=2*-(o.width+o.length)+"px",d=a(i(),{position:"absolute",top:f,left:f});if(o.shadow)for(s=1;s<=o.lines;s++)r(s,-2,"progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");for(s=1;s<=o.lines;s++)r(s);return n(t,d)},c.prototype.opacity=function(t,e,n,o){var i=t.firstChild;o=o.shadow&&o.lines||0,i&&e+o<i.childNodes.length&&((i=(i=(i=i.childNodes[e+o])&&i.firstChild)&&i.firstChild)&&(i.opacity=n))}}var d,h=["webkit","Moz","ms","O"],p={},m=function(){var o=t("style",{type:"text/css"});return n(e.getElementsByTagName("head")[0],o),o.sheet||o.styleSheet}(),v={lines:12,length:7,width:5,radius:10,rotate:0,corners:1,color:"#000",direction:1,speed:1,trail:100,opacity:.25,fps:20,zIndex:2e9,className:"spinner",top:"auto",left:"auto",position:"relative"};c.defaults={},s(c.prototype,{spin:function(e){this.stop();var n,o,i=this,r=i.opts,s=i.el=a(t(0,{className:r.className}),{position:r.position,width:0,zIndex:r.zIndex}),l=r.radius+r.length+r.width;if(e&&(e.insertBefore(s,e.firstChild||null),o=u(e),n=u(s),a(s,{left:("auto"==r.left?o.x-n.x+(e.offsetWidth>>1):parseInt(r.left,10)+l)+"px",top:("auto"==r.top?o.y-n.y+(e.offsetHeight>>1):parseInt(r.top,10)+l)+"px"})),s.setAttribute("role","progressbar"),i.lines(s,i.opts),!d){var c,f=0,h=(r.lines-1)*(1-r.direction)/2,p=r.fps,m=p/r.speed,v=(1-r.opacity)/(m*r.trail/100),w=m/r.lines;!function t(){f++;for(var e=0;e<r.lines;e++)c=Math.max(1-(f+(r.lines-e)*w)%m*v,r.opacity),i.opacity(s,e*r.direction+h,c,r);i.timeout=i.el&&setTimeout(t,~~(1e3/p))}()}return i},stop:function(){var t=this.el;return t&&(clearTimeout(this.timeout),t.parentNode&&t.parentNode.removeChild(t),this.el=i),this},lines:function(e,i){function r(e,n){return a(t(),{position:"absolute",width:i.length+i.width+"px",height:i.width+"px",background:e,boxShadow:n,transformOrigin:"left",transform:"rotate("+~~(360/i.lines*u+i.rotate)+"deg) translate("+i.radius+"px,0)",borderRadius:(i.corners*i.width>>1)+"px"})}for(var s,u=0,c=(i.lines-1)*(1-i.direction)/2;u<i.lines;u++)s=a(t(),{position:"absolute",top:1+~(i.width/2)+"px",transform:i.hwaccel?"translate3d(0,0,0)":"",opacity:i.opacity,animation:d&&o(i.opacity,i.trail,c+u*i.direction,i.lines)+" "+1/i.speed+"s linear infinite"}),i.shadow&&n(s,a(r("#000","0 0 4px #000"),{top:"2px"})),n(e,n(s,r(l(i.color,u),"0 0 1px rgba(0,0,0,.1)")));return e},opacity:function(t,e,n){e<t.childNodes.length&&(t.childNodes[e].style.opacity=n)}});var w=a(t("group"),{behavior:"url(#default#VML)"});return!r(w,"transform")&&w.adj?f():d=r(w,"animation"),c});var Se,Fe,Ee,Pe,je,Ne,$e=o(t),qe=o(e),Ae="quirks"===n.hash.replace("#",""),ze=ye.csstransforms3d,Le=ze&&!Ae,Oe=ze||"CSS1Compat"===e.compatMode,Ie=be.ok,De=navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i),Re=!Le||De,We=navigator.msPointerEnabled,He="onwheel"in e.createElement("div")?"wheel":e.onmousewheel!==i?"mousewheel":"DOMMouseScroll",Ke=250,Ve=300,Be=1400,Xe=5e3,Qe=2,Ue=64,Ye=500,Ge=333,Je="$stageFrame",Ze="$navDotFrame",tn="$navThumbFrame",en="auto",nn=r([.1,0,.25,1]),on=99999,rn="50%",an={width:null,minwidth:null,maxwidth:"100%",height:null,minheight:null,maxheight:null,ratio:null,margin:Qe,glimpse:0,fit:"contain",position:rn,thumbposition:rn,nav:"dots",navposition:"bottom",navwidth:null,thumbwidth:Ue,thumbheight:Ue,thumbmargin:Qe,thumbborderwidth:Qe,thumbfit:"cover",allowfullscreen:!1,transition:"slide",clicktransition:null,transitionduration:Ve,captions:!0,hash:!1,startindex:0,loop:!1,autoplay:!1,stopautoplayontouch:!0,keyboard:!1,arrows:!0,click:!0,swipe:!0,trackpad:!1,enableifsingleframe:!1,controlsonstart:!0,shuffle:!1,direction:"ltr",shadows:!0,spinner:null},sn={left:!0,right:!0,down:!1,up:!1,space:!1,home:!1,end:!1};N.stop=function(t){N.ii[t]=!1},jQuery.Fotorama=function(t,i){function r(){o.each(kn,function(t,e){if(!e.i){e.i=po++;var n=M(e.video,!0);if(n){var o={};e.video=n,e.img||e.thumb?e.thumbsReady=!0:o=S(e,kn,lo),F(kn,{img:o.img,thumb:o.thumb},e.i,lo)}}})}function a(t){return Jn[t]||lo.fullScreen}function u(t){var e="keydown."+ut,n=ut+co,o="keydown."+n,r="resize."+n+" orientationchange."+n;t?(qe.on(o,function(t){var e,n;En&&27===t.keyCode?(e=!0,hn(En,!0,!0)):(lo.fullScreen||i.keyboard&&!lo.index)&&(27===t.keyCode?(e=!0,lo.cancelFullScreen()):t.shiftKey&&32===t.keyCode&&a("space")||37===t.keyCode&&a("left")||38===t.keyCode&&a("up")?n="<":32===t.keyCode&&a("space")||39===t.keyCode&&a("right")||40===t.keyCode&&a("down")?n=">":36===t.keyCode&&a("home")?n="<<":35===t.keyCode&&a("end")&&(n=">>")),(e||n)&&Y(t),n&&lo.show({index:n,slow:t.altKey,user:!0})}),lo.index||qe.off(e).on(e,"textarea, input, select",function(t){!Fe.hasClass(lt)&&t.stopPropagation()}),$e.on(r,lo.resize)):(qe.off(o),$e.off(r))}function l(e){e!==l.f&&(e?(t.html("").addClass(ut+" "+fo).append(go).before(vo).before(wo),at(lo)):(go.detach(),vo.detach(),wo.detach(),t.html(mo.urtext).removeClass(fo),st(lo)),u(e),l.f=e)}function d(){kn=lo.data=kn||R(i.data)||E(t),Mn=lo.size=kn.length,!Tn.ok&&i.shuffle&&D(kn),r(),zo=T(zo),Mn&&l(!0)}function p(){var t=2>Mn&&!i.enableifsingleframe||En;Oo.noMove=t||Vn,Oo.noSwipe=t||!i.swipe,!Un&&bo.toggleClass(St,!i.click&&!Oo.noMove&&!Oo.noSwipe),We&&go.toggleClass(gt,!Oo.noSwipe)}function y(t){!0===t&&(t=""),i.autoplay=Math.max(+t||Xe,1.5*Qn)}function b(){function t(t,n){e[t?"add":"remove"].push(n)}lo.options=i=H(i),Vn="crossfade"===i.transition||"dissolve"===i.transition,In=i.loop&&(Mn>2||Vn&&(!Un||"slide"!==Un)),Qn=+i.transitionduration||Ve,Gn="rtl"===i.direction,Jn=o.extend({},i.keyboard&&sn,i.keyboard);var e={add:[],remove:[]};Mn>1||i.enableifsingleframe?(Dn=i.nav,Wn="top"===i.navposition,e.remove.push(Qt),To.toggle(!!i.arrows)):(Dn=!1,To.hide()),Ht(),Fn=new Te(o.extend(ke,i.spinner,Me,{direction:Gn?-1:1})),Pe(),je(),i.autoplay&&y(i.autoplay),Bn=h(i.thumbwidth)||Ue,Xn=h(i.thumbheight)||Ue,Io.ok=Ro.ok=i.trackpad&&!Re,p(),nn(i,[Lo]),(Rn="thumbs"===Dn)?(we(Mn,"navThumb"),Sn=Eo,uo=tn,A(vo,o.Fotorama.jst.style({w:Bn,h:Xn,b:i.thumbborderwidth,m:i.thumbmargin,s:co,q:!Oe})),Mo.addClass(Lt).removeClass(zt)):"dots"===Dn?(we(Mn,"navDot"),Sn=Fo,uo=Ze,Mo.addClass(zt).removeClass(Lt)):(Dn=!1,Mo.removeClass(Lt+" "+zt)),Dn&&(Wn?ko.insertBefore(yo):ko.insertAfter(yo),_e.nav=!1,_e(Sn,So,"nav")),(Hn=i.allowfullscreen)?(jo.prependTo(yo),Kn=Ie&&"native"===Hn):(jo.detach(),Kn=!1),t(Vn,pt),t(!Vn,mt),t(!i.captions,xt),t(Gn,yt),t("always"!==i.arrows,_t),t(!(Yn=i.shadows&&!Re),wt),go.addClass(e.add.join(" ")).removeClass(e.remove.join(" ")),o.extend({},i)}function C(t){return 0>t?(Mn+t%Mn)%Mn:t>=Mn?t%Mn:t}function T(t){return s(t,0,Mn-1)}function k(t){return In?C(t):T(t)}function P(t){return!!(t>0||In)&&t-1}function B(t){return!!(Mn-1>t||In)&&t+1}function J(){Oo.min=In?-1/0:-w(Mn-1,Lo.w,i.margin,Nn),Oo.max=In?1/0:-w(0,Lo.w,i.margin,Nn),Oo.snap=Lo.w+i.margin}function et(){Do.min=Math.min(0,Lo.nw-So.width()),Do.max=0,So.toggleClass(St,!(Do.noMove=Do.min===Do.max))}function nt(t,e,n){if("number"==typeof t){t=new Array(t);var i=!0}return o.each(t,function(t,o){if(i&&(o=t),"number"==typeof o){var r=kn[C(o)];if(r){var a="$"+e+"Frame",s=r[a];n.call(this,t,o,r,s,a,s&&s.data())}}})}function rt(t,e,n,o){(!Zn||"*"===Zn&&o===On)&&(t=v(i.width)||v(t)||Ye,e=v(i.height)||v(e)||Ge,lo.resize({width:t,ratio:i.ratio||n||t/e},0,o!==On&&"*"))}function Rt(t,e,n,r,a,s){nt(t,e,function(t,u,l,c,f,d){function h(t){var e=C(u);rn(t,{index:e,src:_,frame:kn[e]})}function p(){y.remove(),o.Fotorama.cache[_]="error",l.html&&"stage"===e||!T||T===_?(!_||l.html||w?"stage"===e&&(c.trigger("f:load").removeClass(Zt+" "+Jt).addClass(te),h("load"),rt()):(c.trigger("f:error").removeClass(Zt).addClass(Jt),h("error")),d.state="error",!(Mn>1&&kn[u]===l)||l.html||l.deleted||l.video||w||(l.deleted=!0,lo.splice(u,1))):(l[x]=_=T,Rt([u],e,n,r,a,!0))}function m(){o.Fotorama.measures[_]=b.measures=o.Fotorama.measures[_]||{width:g.width,height:g.height,ratio:g.width/g.height},rt(b.measures.width,b.measures.height,b.measures.ratio,u),y.off("load error").addClass(ie+(w?" "+re:"")).prependTo(c),q(y,(o.isFunction(n)?n():n)||Lo,r||l.fit||i.fit,a||l.position||i.position),o.Fotorama.cache[_]=d.state="loaded",setTimeout(function(){c.trigger("f:load").removeClass(Zt+" "+Jt).addClass(te+" "+(w?ee:ne)),"stage"===e?h("load"):(l.thumbratio===en||!l.thumbratio&&i.thumbratio===en)&&(l.thumbratio=b.measures.ratio,_n())},0)}function v(){var t=10;N(function(){return!ao||!t--&&!Re},function(){m()})}if(c){var w=lo.fullScreen&&l.full&&l.full!==l.img&&!d.$full&&"stage"===e;if(!d.$img||s||w){var g=new Image,y=o(g),b=y.data();d[w?"$full":"$img"]=y;var x="stage"===e?w?"full":"img":"thumb",_=l[x],T=w?null:l["stage"===e?"thumb":"img"];if("navThumb"===e&&(c=d.$wrap),!_)return void p();o.Fotorama.cache[_]?function t(){"error"===o.Fotorama.cache[_]?p():"loaded"===o.Fotorama.cache[_]?setTimeout(v,0):setTimeout(t,100)}():(o.Fotorama.cache[_]="*",y.on("load",v).on("error",p)),d.state="",g.src=_}}})}function Wt(t){Ao.append(Fn.spin().el).appendTo(t)}function Ht(){Ao.detach(),Fn&&Fn.stop()}function oe(){var t=Pn[Je];t&&!t.data().state&&(Wt(t),t.on("f:load f:error",function(){t.off("f:load f:error"),Ht()}))}function ce(t){Q(t,yn),U(t,function(){setTimeout(function(){W(Mo)},0),ze({time:Qn,guessIndex:o(this).data().eq,minMax:Do})})}function we(t,e){nt(t,e,function(t,n,i,r,a,s){if(!r){r=i[a]=go[a].clone(),(s=r.data()).data=i;var u=r[0];"stage"===e?(i.html&&o('<div class="'+le+'"></div>').append(i._html?o(i.html).removeAttr("id").html(i._html):i.html).appendTo(r),i.caption&&o(I(he,I(pe,i.caption))).appendTo(r),i.video&&r.addClass(kt).append($o.clone()),U(u,function(){setTimeout(function(){W(yo)},0),vn({index:s.eq,user:!0})}),xo=xo.add(r)):"navDot"===e?(ce(u),Fo=Fo.add(r)):"navThumb"===e&&(ce(u),s.$wrap=r.children(":first"),Eo=Eo.add(r),i.video&&s.$wrap.append($o.clone()))}})}function ge(t,e,n,o){return t&&t.length&&q(t,e,n,o)}function ye(t){nt(t,"stage",function(t,e,n,r,a,s){if(r){var u=C(e),l=n.fit||i.fit,c=n.position||i.position;s.eq=u,Ho[Je][u]=r.css(o.extend({left:Vn?0:w(e,Lo.w,i.margin,Nn)},Vn&&f(0))),j(r[0])&&(r.appendTo(bo),hn(n.$video)),ge(s.$img,Lo,l,c),ge(s.$full,Lo,l,c)}})}function xe(t,e){if("thumbs"===Dn&&!isNaN(t)){var n=-t,r=-t+Lo.nw;Eo.each(function(){var t=o(this).data(),a=t.eq,s=function(){return{h:Xn,w:t.w}},u=s(),l=kn[a]||{},c=l.thumbfit||i.thumbfit,f=l.thumbposition||i.thumbposition;u.w=t.w,t.l+t.w<n||t.l>r||ge(t.$img,u,c,f)||e&&Rt([a],"navThumb",s,c,f)})}}function _e(t,e,n){if(!_e[n]){var r="nav"===n&&Rn,a=0;e.append(t.filter(function(){for(var t,e=o(this),n=e.data(),i=0,r=kn.length;r>i;i++)if(n.data===kn[i]){t=!0,n.eq=i;break}return t||e.remove()&&!1}).sort(function(t,e){return o(t).data().eq-o(e).data().eq}).each(function(){if(r){var t=o(this),e=t.data(),n=Math.round(Xn*e.data.thumbratio)||Bn;e.l=a,e.w=n,t.css({width:n}),a+=n+i.thumbmargin}})),_e[n]=!0}}function Ce(t){return t-Ko>Lo.w/3}function Ee(t){return!(In||zo+t&&zo-Mn+t||En)}function Pe(){var t=Ee(0),e=Ee(1);_o.toggleClass(Pt,t).attr(X(t)),Co.toggleClass(Pt,e).attr(X(e))}function je(){Io.ok&&(Io.prevent={"<":Ee(0),">":Ee(1)})}function Ne(t){var e,n,o=t.data();return Rn?(e=o.l,n=o.w):(e=t.position().left,n=t.width()),{c:e+n/2,min:-e+10*i.thumbmargin,max:-e+Lo.w-n-10*i.thumbmargin}}function Ae(t){var e=Pn[uo].data();Z(Po,{time:1.2*t,pos:e.l,width:e.w-2*i.thumbborderwidth})}function ze(t){var e=kn[t.guessIndex][uo];if(e){var n=Do.min!==Do.max,o=t.minMax||n&&Ne(Pn[uo]),i=n&&(t.keep&&ze.l?ze.l:s((t.coo||Lo.nw/2)-Ne(e).c,o.min,o.max)),r=n&&s(i,Do.min,Do.max),a=1.1*t.time;Z(So,{time:a,pos:r||0,onEnd:function(){xe(r,!0)}}),dn(Mo,z(r,Do.min,Do.max)),ze.l=i}}function De(){He(uo),Wo[uo].push(Pn[uo].addClass(Xt))}function He(t){for(var e=Wo[t];e.length;)e.shift().removeClass(Xt)}function Be(t){var e=Ho[t];o.each(jn,function(t,n){delete e[C(n)]}),o.each(e,function(t,n){delete e[t],n.detach()})}function Qe(t){Nn=$n=zo;var e=Pn[Je];e&&(He(Je),Wo[Je].push(e.addClass(Xt)),t||lo.show.onEnd(!0),x(bo,0,!0),Be(Je),ye(jn),J(),et())}function nn(t,e){t&&o.each(e,function(e,n){n&&o.extend(n,{width:t.width||n.width,height:t.height,minwidth:t.minwidth,maxwidth:t.maxwidth,minheight:t.minheight,maxheight:t.maxheight,ratio:K(t.ratio)})})}function rn(e,n){t.trigger(ut+":"+e,[lo,n])}function an(){clearTimeout(un.t),ao=1,i.stopautoplayontouch?lo.stopAutoplay():oo=!0}function un(){ao&&(i.stopautoplayontouch||(ln(),cn()),un.t=setTimeout(function(){ao=0},Ve+Ke))}function ln(){oo=!(!En&&!io)}function cn(){if(clearTimeout(cn.t),N.stop(cn.w),i.autoplay&&!oo){lo.autoplay||(lo.autoplay=!0,rn("startautoplay"));var t=zo,e=Pn[Je].data();cn.w=N(function(){return e.state||t!==zo},function(){cn.t=setTimeout(function(){if(!oo&&t===zo){var e=Ln,n=kn[e][Je].data();cn.w=N(function(){return n.state||e!==Ln},function(){oo||e!==Ln||lo.show(In?G(!Gn):Ln)})}},i.autoplay)})}else lo.autoplay&&(lo.autoplay=!1,rn("stopautoplay"))}function fn(){lo.fullScreen&&(lo.fullScreen=!1,Ie&&be.cancel(ho),Fe.removeClass(lt),Se.removeClass(lt),t.removeClass(Yt).insertAfter(wo),Lo=o.extend({},ro),hn(En,!0,!0),gn("x",!1),lo.resize(),Rt(jn,"stage"),W($e,eo,to),rn("fullscreenexit"))}function dn(t,e){Yn&&(t.removeClass(Vt+" "+Bt),e&&!En&&t.addClass(e.replace(/^|\s/g," "+Kt+"--")))}function hn(t,e,n){e&&(go.removeClass(ht),En=!1,p()),t&&t!==En&&(t.remove(),rn("unloadvideo")),n&&(ln(),cn())}function pn(t){go.toggleClass(vt,t)}function mn(t){if(!Oo.flow){var e=t?t.pageX:mn.x,n=e&&!Ee(Ce(e))&&i.click;mn.p!==n&&yo.toggleClass(Ft,n)&&(mn.p=n,mn.x=e)}}function vn(t){clearTimeout(vn.t),i.clicktransition&&i.clicktransition!==i.transition?setTimeout(function(){var e=i.transition;lo.setOptions({transition:i.clicktransition}),Un=e,vn.t=setTimeout(function(){lo.show(t)},10)},0):lo.show(t)}function wn(t,e){var n=t.target;o(n).hasClass(fe)?lo.playVideo():n===No?lo.toggleFullScreen():En?n===qo&&hn(En,!0,!0):e?pn():i.click&&vn({index:t.shiftKey||G(Ce(t._x)),slow:t.altKey,user:!0})}function gn(t,e){Oo[t]=Do[t]=e}function yn(t){vn({index:o(this).data().eq,slow:t.altKey,user:!0,coo:t._x-Mo.offset().left})}function bn(t){vn({index:To.index(this)?">":"<",slow:t.altKey,user:!0})}function xn(t){U(t,function(){setTimeout(function(){W(yo)},0),pn(!1)})}function _n(){if(d(),b(),!_n.i){_n.i=!0;var t=i.startindex;(t||i.hash&&n.hash)&&(On=L(t||n.hash.replace(/^#/,""),kn,0===lo.index||t,t)),zo=Nn=$n=qn=On=k(On)||0}if(Mn){if(Cn())return;En&&hn(En,!0),jn=[],Be(Je),_n.ok=!0,lo.show({index:zo,time:0}),lo.resize()}else lo.destroy()}function Cn(){return!Cn.f===Gn?(Cn.f=Gn,zo=Mn-1-zo,lo.reverse(),!0):void 0}function Tn(){Tn.ok||(Tn.ok=!0,rn("ready"))}Se=o("html"),Fe=o("body");var kn,Mn,Sn,Fn,En,Pn,jn,Nn,$n,qn,An,zn,Ln,On,In,Dn,Rn,Wn,Hn,Kn,Vn,Bn,Xn,Qn,Un,Yn,Gn,Jn,Zn,to,eo,no,oo,io,ro,ao,so,uo,lo=this,co=o.now(),fo=ut+co,ho=t[0],po=1,mo=t.data(),vo=o("<style></style>"),wo=o(I(Ut)),go=o(I(ct)),yo=o(I(Ct)).appendTo(go),bo=(yo[0],o(I(Mt)).appendTo(yo)),xo=o(),_o=o(I(Et+" "+jt+ve)),Co=o(I(Et+" "+Nt+ve)),To=_o.add(Co).appendTo(yo),ko=o(I(qt)),Mo=o(I($t)).appendTo(ko),So=o(I(At)).appendTo(Mo),Fo=o(),Eo=o(),Po=(bo.data(),So.data(),o(I(ue)).appendTo(So)),jo=o(I(Gt+ve)),No=jo[0],$o=o(I(fe)),qo=o(I(de)).appendTo(yo)[0],Ao=o(I(me)),zo=!1,Lo={},Oo={},Io={},Do={},Ro={},Wo={},Ho={},Ko=0,Vo=[];go[Je]=o(I(Tt)),go[tn]=o(I(Ot+" "+Dt+ve,I(se))),go[Ze]=o(I(Ot+" "+It+ve,I(ae))),Wo[Je]=[],Wo[tn]=[],Wo[Ze]=[],Ho[Je]={},go.addClass(Le?dt:ft).toggleClass(vt,!i.controlsonstart),mo.fotorama=this,lo.startAutoplay=function(t){return lo.autoplay?this:(oo=io=!1,y(t||i.autoplay),cn(),this)},lo.stopAutoplay=function(){return lo.autoplay&&(oo=io=!0,cn()),this},lo.show=function(t){var e;"object"!=typeof t?(e=t,t={}):e=t.index,e=">"===e?$n+1:"<"===e?$n-1:"<<"===e?0:">>"===e?Mn-1:e,e=void 0===(e=isNaN(e)?L(e,kn,!0):e)?zo||0:e,lo.activeIndex=zo=k(e),An=P(zo),zn=B(zo),
Ln=C(zo+(Gn?-1:1)),jn=[zo,An,zn],$n=In?e:zo;var n=Math.abs(qn-$n),o=_(t.time,function(){return Math.min(Qn*(1+(n-1)/12),2*Qn)}),r=t.overPos;t.slow&&(o*=10);var a=Pn;lo.activeFrame=Pn=kn[zo];var u=a===Pn&&!t.user;hn(En,Pn.i!==kn[C(Nn)].i),we(jn,"stage"),ye(Re?[$n]:[$n,P($n),B($n)]),gn("go",!0),u||rn("show",{user:t.user,time:o}),oo=!0;var l=lo.show.onEnd=function(e){if(!l.ok){if(l.ok=!0,e||Qe(!0),u||rn("showend",{user:t.user}),!e&&Un&&Un!==i.transition)return lo.setOptions({transition:Un}),void(Un=!1);oe(),Rt(jn,"stage"),gn("go",!1),je(),mn(),ln(),cn()}};Vn?tt(Pn[Je],zo!==qn?kn[qn][Je]:null,xo,{time:o,method:i.transition,onEnd:l},Vo):Z(bo,{pos:-w($n,Lo.w,i.margin,Nn),overPos:r,time:o,onEnd:l});if(Pe(),Dn){De();var c=T(zo+s($n-qn,-1,1));ze({time:o,coo:c!==zo&&t.coo,guessIndex:"undefined"!=typeof t.coo?c:zo,keep:u}),Rn&&Ae(o)}return no=void 0!==qn&&qn!==zo,qn=zo,i.hash&&no&&!lo.eq&&$(Pn.id||zo+1),this},lo.requestFullScreen=function(){return Hn&&!lo.fullScreen&&(to=$e.scrollTop(),eo=$e.scrollLeft(),W($e),gn("x",!0),ro=o.extend({},Lo),t.addClass(Yt).appendTo(Fe.addClass(lt)),Se.addClass(lt),hn(En,!0,!0),lo.fullScreen=!0,Kn&&be.request(ho),lo.resize(),Rt(jn,"stage"),oe(),rn("fullscreenenter")),this},lo.cancelFullScreen=function(){return Kn&&be.is()?be.cancel(e):fn(),this},lo.toggleFullScreen=function(){return lo[(lo.fullScreen?"cancel":"request")+"FullScreen"]()},V(e,be.event,function(){!kn||be.is()||En||fn()}),lo.resize=function(t){if(!kn)return this;var e=arguments[1]||0,n=arguments[2];nn(lo.fullScreen?{width:"100%",maxwidth:null,minwidth:null,height:"100%",maxheight:null,minheight:null}:H(t),[Lo,n||lo.fullScreen||i]);var o=Lo.width,r=Lo.height,a=Lo.ratio,u=$e.height()-(Dn?Mo.height():0);return v(o)&&(go.addClass(bt).css({width:o,minWidth:Lo.minwidth||0,maxWidth:Lo.maxwidth||on}),o=Lo.W=Lo.w=go.width(),Lo.nw=Dn&&m(i.navwidth,o)||o,i.glimpse&&(Lo.w-=Math.round(2*(m(i.glimpse,o)||0))),bo.css({width:Lo.w,marginLeft:(Lo.W-Lo.w)/2}),(r=(r=m(r,u))||a&&o/a)&&(o=Math.round(o),r=Lo.h=Math.round(s(r,m(Lo.minheight,u),m(Lo.maxheight,u))),yo.stop().animate({width:o,height:r},e,function(){go.removeClass(bt)}),Qe(),Dn&&(Mo.stop().animate({width:Lo.nw},e),ze({guessIndex:zo,time:e,keep:!0}),Rn&&_e.nav&&Ae(e)),Zn=n||!0,Tn())),Ko=yo.offset().left,this},lo.setOptions=function(t){return o.extend(i,t),_n(),this},lo.shuffle=function(){return kn&&D(kn)&&_n(),this},lo.destroy=function(){return lo.cancelFullScreen(),lo.stopAutoplay(),kn=lo.data=null,l(),jn=[],Be(Je),_n.ok=!1,this},lo.playVideo=function(){var t=Pn,e=t.video,n=zo;return"object"==typeof e&&t.videoReady&&(Kn&&lo.fullScreen&&lo.cancelFullScreen(),N(function(){return!be.is()||n!==zo},function(){n===zo&&(t.$video=t.$video||o(o.Fotorama.jst.video(e)),t.$video.appendTo(t[Je]),go.addClass(ht),En=t.$video,p(),To.blur(),jo.blur(),rn("loadvideo"))})),this},lo.stopVideo=function(){return hn(En,!0,!0),this},yo.on("mousemove",mn),Oo=ot(bo,{onStart:an,onMove:function(t,e){dn(yo,e.edge)},onTouchEnd:un,onEnd:function(t){dn(yo);var e=(We&&!so||t.touch)&&i.arrows&&"always"!==i.arrows;if(t.moved||e&&t.pos!==t.newPos&&!t.control){var n=g(t.newPos,Lo.w,i.margin,Nn);lo.show({index:n,time:Vn?Qn:t.time,overPos:t.overPos,user:!0})}else t.aborted||t.control||wn(t.startEvent,e)},timeLow:1,timeHigh:1,friction:2,select:"."+Qt+", ."+Qt+" *",$wrap:yo}),Do=ot(So,{onStart:an,onMove:function(t,e){dn(Mo,e.edge)},onTouchEnd:un,onEnd:function(t){function e(){ze.l=t.newPos,ln(),cn(),xe(t.newPos,!0)}if(t.moved)t.pos!==t.newPos?(oo=!0,Z(So,{time:t.time,pos:t.newPos,overPos:t.overPos,onEnd:e}),xe(t.newPos),Yn&&dn(Mo,z(t.newPos,Do.min,Do.max))):e();else{var n=t.$target.closest("."+Ot,So)[0];n&&yn.call(n,t.startEvent)}},timeLow:.5,timeHigh:2,friction:5,$wrap:Mo}),Io=it(yo,{shift:!0,onEnd:function(t,e){an(),un(),lo.show({index:e,slow:t.altKey})}}),Ro=it(Mo,{onEnd:function(t,e){an(),un();var n=x(So)+.25*e;So.css(c(s(n,Do.min,Do.max))),Yn&&dn(Mo,z(n,Do.min,Do.max)),Ro.prevent={"<":n>=Do.max,">":n<=Do.min},clearTimeout(Ro.t),Ro.t=setTimeout(function(){ze.l=n,xe(n,!0)},Ke),xe(n)}}),go.hover(function(){setTimeout(function(){ao||pn(!(so=!0))},0)},function(){so&&pn(!(so=!1))}),O(To,function(t){Y(t),bn.call(this,t)},{onStart:function(){an(),Oo.control=!0},onTouchEnd:un}),To.each(function(){Q(this,function(t){bn.call(this,t)}),xn(this)}),Q(No,lo.toggleFullScreen),xn(No),o.each("load push pop shift unshift reverse sort splice".split(" "),function(t,e){lo[e]=function(){return kn=kn||[],"load"!==e?Array.prototype[e].apply(kn,arguments):arguments[0]&&"object"==typeof arguments[0]&&arguments[0].length&&(kn=R(arguments[0])),_n(),lo}}),_n()},o.fn.fotorama=function(e){return this.each(function(){var n=this,i=o(this),r=i.data(),a=r.fotorama;a?a.setOptions(e,!0):N(function(){return!P(n)},function(){r.urtext=i.html(),new o.Fotorama(i,o.extend({},an,t.fotoramaDefaults,e,r))})})},o.Fotorama.instances=[],o.Fotorama.cache={},o.Fotorama.measures={},(o=o||{}).Fotorama=o.Fotorama||{},o.Fotorama.jst=o.Fotorama.jst||{},o.Fotorama.jst.style=function(t){var e,n="";return ge.escape,n+".fotorama"+(null==(e=t.s)?"":e)+" .fotorama__nav--thumbs .fotorama__nav__frame{\npadding:"+(null==(e=t.m)?"":e)+"px;\nheight:"+(null==(e=t.h)?"":e)+"px}\n.fotorama"+(null==(e=t.s)?"":e)+" .fotorama__thumb-border{\nheight:"+(null==(e=t.h-t.b*(t.q?0:2))?"":e)+"px;\nborder-width:"+(null==(e=t.b)?"":e)+"px;\nmargin-top:"+(null==(e=t.m)?"":e)+"px}"},o.Fotorama.jst.video=function(t){function e(){n+=o.call(arguments,"")}var n="",o=(ge.escape,Array.prototype.join);return n+='<div class="fotorama__video"><iframe src="',e(("youtube"==t.type?t.p+"youtube.com/embed/"+t.id+"?autoplay=1":"vimeo"==t.type?t.p+"player.vimeo.com/video/"+t.id+"?autoplay=1&badge=0":t.id)+(t.s&&"custom"!=t.type?"&"+t.s:"")),n+='" frameborder="0" allowfullscreen></iframe></div>\n'},o(function(){o("."+ut+':not([data-auto="false"])').fotorama()})}(window,document,location,"undefined"!=typeof jQuery&&jQuery);