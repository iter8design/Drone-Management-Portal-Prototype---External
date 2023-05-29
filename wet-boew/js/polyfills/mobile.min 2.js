/*!
 * Web Experience Toolkit (WET) / Boîte à outils de l'expérience Web (BOEW)
 * wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 * v4.0.30 - 2019-02-23
 *
 */
!function(a,b,c){"function"==typeof define&&define.amd?define(["jquery"],function(d){return c(d,a,b),d.mobile}):c(a.jQuery,a,b)}(this,document,function(a,b,c,d){!function(a){a.event.special.throttledresize={setup:function(){a(this).bind("resize",f)},teardown:function(){a(this).unbind("resize",f)}};var b,c,d,e=250,f=function(){c=(new Date).getTime(),d=c-g,d>=e?(g=c,a(this).trigger("throttledresize")):(b&&clearTimeout(b),b=setTimeout(f,e-d))},g=0}(a),function(a,b,c,d){function e(a){for(;a&&"undefined"!=typeof a.originalEvent;)a=a.originalEvent;return a}function f(b,c){var f,g,h,i,j,k,l,m,n,o=b.type;if(b=a.Event(b),b.type=c,f=b.originalEvent,g=a.event.props,o.search(/^(mouse|click)/)>-1&&(g=D),f)for(l=g.length,i;l;)i=g[--l],b[i]=f[i];if(o.search(/mouse(down|up)|click/)>-1&&!b.which&&(b.which=1),-1!==o.search(/^touch/)&&(h=e(f),o=h.touches,j=h.changedTouches,k=o&&o.length?o[0]:j&&j.length?j[0]:d))for(m=0,n=B.length;n>m;m++)i=B[m],b[i]=k[i];return b}function g(b){for(var c,d,e={};b;){c=a.data(b,y);for(d in c)c[d]&&(e[d]=e.hasVirtualBinding=!0);b=b.parentNode}return e}function h(b,c){for(var d;b;){if(d=a.data(b,y),d&&(!c||d[c]))return b;b=b.parentNode}return null}function i(){L=!1}function j(){L=!0}function k(){P=0,J.length=0,K=!1,j()}function l(){i()}function m(){n(),F=setTimeout(function(){F=0,k()},a.vmouse.resetTimerDuration)}function n(){F&&(clearTimeout(F),F=0)}function o(b,c,d){var e;return(d&&d[b]||!d&&h(c.target,b))&&(e=f(c,b),a(c.target).trigger(e)),e}function p(b){var c=a.data(b.target,z);if(!(K||P&&P===c)){var d=o("v"+b.type,b);d&&(d.isDefaultPrevented()&&b.preventDefault(),d.isPropagationStopped()&&b.stopPropagation(),d.isImmediatePropagationStopped()&&b.stopImmediatePropagation())}}function q(b){var c,d,f=e(b).touches;if(f&&1===f.length&&(c=b.target,d=g(c),d.hasVirtualBinding)){P=O++,a.data(c,z,P),n(),l(),I=!1;var h=e(b).touches[0];G=h.pageX,H=h.pageY,o("vmouseover",b,d),o("vmousedown",b,d)}}function r(a){L||(I||o("vmousecancel",a,g(a.target)),I=!0,m())}function s(b){if(!L){var c=e(b).touches[0],d=I,f=a.vmouse.moveDistanceThreshold,h=g(b.target);I=I||Math.abs(c.pageX-G)>f||Math.abs(c.pageY-H)>f,I&&!d&&o("vmousecancel",b,h),o("vmousemove",b,h),m()}}function t(a){if(!L){j();var b,c=g(a.target);if(o("vmouseup",a,c),!I){var d=o("vclick",a,c);d&&d.isDefaultPrevented()&&(b=e(a).changedTouches[0],J.push({touchID:P,x:b.clientX,y:b.clientY}),K=!0)}o("vmouseout",a,c),I=!1,m()}}function u(b){var c,d=a.data(b,y);if(d)for(c in d)if(d[c])return!0;return!1}function v(){}function w(b){var c=b.substr(1);return{setup:function(d,e){u(this)||a.data(this,y,{});var f=a.data(this,y);f[b]=!0,E[b]=(E[b]||0)+1,1===E[b]&&N.bind(c,p),a(this).bind(c,v),M&&(E.touchstart=(E.touchstart||0)+1,1===E.touchstart&&N.bind("touchstart",q).bind("touchend",t).bind("touchmove",s).bind("scroll",r))},teardown:function(d,e){--E[b],E[b]||N.unbind(c,p),M&&(--E.touchstart,E.touchstart||N.unbind("touchstart",q).unbind("touchmove",s).unbind("touchend",t).unbind("scroll",r));var f=a(this),g=a.data(this,y);g&&(g[b]=!1),f.unbind(c,v),u(this)||f.removeData(y)}}}var x,y="virtualMouseBindings",z="virtualTouchID",A="vmouseover vmousedown vmousemove vmouseup vclick vmouseout vmousecancel".split(" "),B="clientX clientY pageX pageY screenX screenY".split(" "),C=a.event.mouseHooks?a.event.mouseHooks.props:[],D=a.event.props.concat(C),E={},F=0,G=0,H=0,I=!1,J=[],K=!1,L=!1,M="addEventListener"in c,N=a(c),O=1,P=0;a.vmouse={moveDistanceThreshold:10,clickDistanceThreshold:10,resetTimerDuration:1500};for(var Q=0;Q<A.length;Q++)a.event.special[A[Q]]=w(A[Q]);M&&c.addEventListener("click",function(b){var c,d,e,f,g,h,i=J.length,j=b.target;if(i)for(c=b.clientX,d=b.clientY,x=a.vmouse.clickDistanceThreshold,e=j;e;){for(f=0;i>f;f++)if(g=J[f],h=0,e===j&&Math.abs(g.x-c)<x&&Math.abs(g.y-d)<x||a.data(e,z)===g.touchID)return b.preventDefault(),void b.stopPropagation();e=e.parentNode}},!0)}(a,b,c),function(a){a.mobile={}}(a),function(a,b){var d={touch:"ontouchend"in c};a.mobile.support=a.mobile.support||{},a.extend(a.support,d),a.extend(a.mobile.support,d)}(a),function(a,b,d){function e(b,c,d){var e=d.type;d.type=c,a.event.dispatch.call(b,d),d.type=e}var f=a(c);a.each("touchstart touchmove touchend tap taphold swipe swipeleft swiperight scrollstart scrollstop".split(" "),function(b,c){a.fn[c]=function(a){return a?this.bind(c,a):this.trigger(c)},a.attrFn&&(a.attrFn[c]=!0)});var g=a.mobile.support.touch,h="touchmove scroll",i=g?"touchstart":"mousedown",j=g?"touchend":"mouseup",k=g?"touchmove":"mousemove";a.event.special.scrollstart={enabled:!0,setup:function(){function b(a,b){c=b,e(f,c?"scrollstart":"scrollstop",a)}var c,d,f=this,g=a(f);g.bind(h,function(e){a.event.special.scrollstart.enabled&&(c||b(e,!0),clearTimeout(d),d=setTimeout(function(){b(e,!1)},50))})}},a.event.special.tap={tapholdThreshold:750,setup:function(){var b=this,c=a(b);c.bind("vmousedown",function(d){function g(){clearTimeout(j)}function h(){g(),c.unbind("vclick",i).unbind("vmouseup",g),f.unbind("vmousecancel",h)}function i(a){h(),k===a.target&&e(b,"tap",a)}if(d.which&&1!==d.which)return!1;var j,k=d.target;d.originalEvent;c.bind("vmouseup",g).bind("vclick",i),f.bind("vmousecancel",h),j=setTimeout(function(){e(b,"taphold",a.Event("taphold",{target:k}))},a.event.special.tap.tapholdThreshold)})}},a.event.special.swipe={scrollSupressionThreshold:30,durationThreshold:1e3,horizontalDistanceThreshold:30,verticalDistanceThreshold:75,start:function(b){var c=b.originalEvent.touches?b.originalEvent.touches[0]:b;return{time:(new Date).getTime(),coords:[c.pageX,c.pageY],origin:a(b.target)}},stop:function(a){var b=a.originalEvent.touches?a.originalEvent.touches[0]:a;return{time:(new Date).getTime(),coords:[b.pageX,b.pageY]}},handleSwipe:function(b,c){c.time-b.time<a.event.special.swipe.durationThreshold&&Math.abs(b.coords[0]-c.coords[0])>a.event.special.swipe.horizontalDistanceThreshold&&Math.abs(b.coords[1]-c.coords[1])<a.event.special.swipe.verticalDistanceThreshold&&b.origin.trigger("swipe").trigger(b.coords[0]>c.coords[0]?"swipeleft":"swiperight")},setup:function(){var b=this,c=a(b);c.bind(i,function(b){function e(b){g&&(f=a.event.special.swipe.stop(b),Math.abs(g.coords[0]-f.coords[0])>a.event.special.swipe.scrollSupressionThreshold&&b.preventDefault())}var f,g=a.event.special.swipe.start(b);c.bind(k,e).one(j,function(){c.unbind(k,e),g&&f&&a.event.special.swipe.handleSwipe(g,f),g=f=d})})}},a.each({scrollstop:"scrollstart",taphold:"tap",swipeleft:"swipe",swiperight:"swipe"},function(b,c){a.event.special[b]={setup:function(){a(this).bind(c,a.noop)}}})}(a,this)});
//# sourceMappingURL=mobile.min.js.map