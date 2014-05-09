/*! jQuery v1.8.2 jquery.com | jquery.org/license */
(function(a,b){function G(a){var b=F[a]={};return p.each(a.split(s),function(a,c){b[c]=!0}),b}function J(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(I,"-$1").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:+d+""===d?+d:H.test(d)?p.parseJSON(d):d}catch(f){}p.data(a,c,d)}else d=b}return d}function K(a){var b;for(b in a){if(b==="data"&&p.isEmptyObject(a[b]))continue;if(b!=="toJSON")return!1}return!0}function ba(){return!1}function bb(){return!0}function bh(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function bi(a,b){do a=a[b];while(a&&a.nodeType!==1);return a}function bj(a,b,c){b=b||0;if(p.isFunction(b))return p.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return p.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=p.grep(a,function(a){return a.nodeType===1});if(be.test(b))return p.filter(b,d,!c);b=p.filter(b,d)}return p.grep(a,function(a,d){return p.inArray(a,b)>=0===c})}function bk(a){var b=bl.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}function bC(a,b){return a.getElementsByTagName(b)[0]||a.appendChild(a.ownerDocument.createElement(b))}function bD(a,b){if(b.nodeType!==1||!p.hasData(a))return;var c,d,e,f=p._data(a),g=p._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;d<e;d++)p.event.add(b,c,h[c][d])}g.data&&(g.data=p.extend({},g.data))}function bE(a,b){var c;if(b.nodeType!==1)return;b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase(),c==="object"?(b.parentNode&&(b.outerHTML=a.outerHTML),p.support.html5Clone&&a.innerHTML&&!p.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):c==="input"&&bv.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):c==="option"?b.selected=a.defaultSelected:c==="input"||c==="textarea"?b.defaultValue=a.defaultValue:c==="script"&&b.text!==a.text&&(b.text=a.text),b.removeAttribute(p.expando)}function bF(a){return typeof a.getElementsByTagName!="undefined"?a.getElementsByTagName("*"):typeof a.querySelectorAll!="undefined"?a.querySelectorAll("*"):[]}function bG(a){bv.test(a.type)&&(a.defaultChecked=a.checked)}function bY(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=bW.length;while(e--){b=bW[e]+c;if(b in a)return b}return d}function bZ(a,b){return a=b||a,p.css(a,"display")==="none"||!p.contains(a.ownerDocument,a)}function b$(a,b){var c,d,e=[],f=0,g=a.length;for(;f<g;f++){c=a[f];if(!c.style)continue;e[f]=p._data(c,"olddisplay"),b?(!e[f]&&c.style.display==="none"&&(c.style.display=""),c.style.display===""&&bZ(c)&&(e[f]=p._data(c,"olddisplay",cc(c.nodeName)))):(d=bH(c,"display"),!e[f]&&d!=="none"&&p._data(c,"olddisplay",d))}for(f=0;f<g;f++){c=a[f];if(!c.style)continue;if(!b||c.style.display==="none"||c.style.display==="")c.style.display=b?e[f]||"":"none"}return a}function b_(a,b,c){var d=bP.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function ca(a,b,c,d){var e=c===(d?"border":"content")?4:b==="width"?1:0,f=0;for(;e<4;e+=2)c==="margin"&&(f+=p.css(a,c+bV[e],!0)),d?(c==="content"&&(f-=parseFloat(bH(a,"padding"+bV[e]))||0),c!=="margin"&&(f-=parseFloat(bH(a,"border"+bV[e]+"Width"))||0)):(f+=parseFloat(bH(a,"padding"+bV[e]))||0,c!=="padding"&&(f+=parseFloat(bH(a,"border"+bV[e]+"Width"))||0));return f}function cb(a,b,c){var d=b==="width"?a.offsetWidth:a.offsetHeight,e=!0,f=p.support.boxSizing&&p.css(a,"boxSizing")==="border-box";if(d<=0||d==null){d=bH(a,b);if(d<0||d==null)d=a.style[b];if(bQ.test(d))return d;e=f&&(p.support.boxSizingReliable||d===a.style[b]),d=parseFloat(d)||0}return d+ca(a,b,c||(f?"border":"content"),e)+"px"}function cc(a){if(bS[a])return bS[a];var b=p("<"+a+">").appendTo(e.body),c=b.css("display");b.remove();if(c==="none"||c===""){bI=e.body.appendChild(bI||p.extend(e.createElement("iframe"),{frameBorder:0,width:0,height:0}));if(!bJ||!bI.createElement)bJ=(bI.contentWindow||bI.contentDocument).document,bJ.write("<!doctype html><html><body>"),bJ.close();b=bJ.body.appendChild(bJ.createElement(a)),c=bH(b,"display"),e.body.removeChild(bI)}return bS[a]=c,c}function ci(a,b,c,d){var e;if(p.isArray(b))p.each(b,function(b,e){c||ce.test(a)?d(a,e):ci(a+"["+(typeof e=="object"?b:"")+"]",e,c,d)});else if(!c&&p.type(b)==="object")for(e in b)ci(a+"["+e+"]",b[e],c,d);else d(a,b)}function cz(a){return function(b,c){typeof b!="string"&&(c=b,b="*");var d,e,f,g=b.toLowerCase().split(s),h=0,i=g.length;if(p.isFunction(c))for(;h<i;h++)d=g[h],f=/^\+/.test(d),f&&(d=d.substr(1)||"*"),e=a[d]=a[d]||[],e[f?"unshift":"push"](c)}}function cA(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h,i=a[f],j=0,k=i?i.length:0,l=a===cv;for(;j<k&&(l||!h);j++)h=i[j](c,d,e),typeof h=="string"&&(!l||g[h]?h=b:(c.dataTypes.unshift(h),h=cA(a,c,d,e,h,g)));return(l||!h)&&!g["*"]&&(h=cA(a,c,d,e,"*",g)),h}function cB(a,c){var d,e,f=p.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&&((f[d]?a:e||(e={}))[d]=c[d]);e&&p.extend(!0,a,e)}function cC(a,c,d){var e,f,g,h,i=a.contents,j=a.dataTypes,k=a.responseFields;for(f in k)f in d&&(c[k[f]]=d[f]);while(j[0]==="*")j.shift(),e===b&&(e=a.mimeType||c.getResponseHeader("content-type"));if(e)for(f in i)if(i[f]&&i[f].test(e)){j.unshift(f);break}if(j[0]in d)g=j[0];else{for(f in d){if(!j[0]||a.converters[f+" "+j[0]]){g=f;break}h||(h=f)}g=g||h}if(g)return g!==j[0]&&j.unshift(g),d[g]}function cD(a,b){var c,d,e,f,g=a.dataTypes.slice(),h=g[0],i={},j=0;a.dataFilter&&(b=a.dataFilter(b,a.dataType));if(g[1])for(c in a.converters)i[c.toLowerCase()]=a.converters[c];for(;e=g[++j];)if(e!=="*"){if(h!=="*"&&h!==e){c=i[h+" "+e]||i["* "+e];if(!c)for(d in i){f=d.split(" ");if(f[1]===e){c=i[h+" "+f[0]]||i["* "+f[0]];if(c){c===!0?c=i[d]:i[d]!==!0&&(e=f[0],g.splice(j--,0,e));break}}}if(c!==!0)if(c&&a["throws"])b=c(b);else try{b=c(b)}catch(k){return{state:"parsererror",error:c?k:"No conversion from "+h+" to "+e}}}h=e}return{state:"success",data:b}}function cL(){try{return new a.XMLHttpRequest}catch(b){}}function cM(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function cU(){return setTimeout(function(){cN=b},0),cN=p.now()}function cV(a,b){p.each(b,function(b,c){var d=(cT[b]||[]).concat(cT["*"]),e=0,f=d.length;for(;e<f;e++)if(d[e].call(a,b,c))return})}function cW(a,b,c){var d,e=0,f=0,g=cS.length,h=p.Deferred().always(function(){delete i.elem}),i=function(){var b=cN||cU(),c=Math.max(0,j.startTime+j.duration-b),d=1-(c/j.duration||0),e=0,f=j.tweens.length;for(;e<f;e++)j.tweens[e].run(d);return h.notifyWith(a,[j,d,c]),d<1&&f?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:p.extend({},b),opts:p.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:cN||cU(),duration:c.duration,tweens:[],createTween:function(b,c,d){var e=p.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(e),e},stop:function(b){var c=0,d=b?j.tweens.length:0;for(;c<d;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;cX(k,j.opts.specialEasing);for(;e<g;e++){d=cS[e].call(j,a,k,j.opts);if(d)return d}return cV(j,k),p.isFunction(j.opts.start)&&j.opts.start.call(a,j),p.fx.timer(p.extend(i,{anim:j,queue:j.opts.queue,elem:a})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}function cX(a,b){var c,d,e,f,g;for(c in a){d=p.camelCase(c),e=b[d],f=a[c],p.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=p.cssHooks[d];if(g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}}function cY(a,b,c){var d,e,f,g,h,i,j,k,l=this,m=a.style,n={},o=[],q=a.nodeType&&bZ(a);c.queue||(j=p._queueHooks(a,"fx"),j.unqueued==null&&(j.unqueued=0,k=j.empty.fire,j.empty.fire=function(){j.unqueued||k()}),j.unqueued++,l.always(function(){l.always(function(){j.unqueued--,p.queue(a,"fx").length||j.empty.fire()})})),a.nodeType===1&&("height"in b||"width"in b)&&(c.overflow=[m.overflow,m.overflowX,m.overflowY],p.css(a,"display")==="inline"&&p.css(a,"float")==="none"&&(!p.support.inlineBlockNeedsLayout||cc(a.nodeName)==="inline"?m.display="inline-block":m.zoom=1)),c.overflow&&(m.overflow="hidden",p.support.shrinkWrapBlocks||l.done(function(){m.overflow=c.overflow[0],m.overflowX=c.overflow[1],m.overflowY=c.overflow[2]}));for(d in b){f=b[d];if(cP.exec(f)){delete b[d];if(f===(q?"hide":"show"))continue;o.push(d)}}g=o.length;if(g){h=p._data(a,"fxshow")||p._data(a,"fxshow",{}),q?p(a).show():l.done(function(){p(a).hide()}),l.done(function(){var b;p.removeData(a,"fxshow",!0);for(b in n)p.style(a,b,n[b])});for(d=0;d<g;d++)e=o[d],i=l.createTween(e,q?h[e]:0),n[e]=h[e]||p.style(a,e),e in h||(h[e]=i.start,q&&(i.end=i.start,i.start=e==="width"||e==="height"?1:0))}}function cZ(a,b,c,d,e){return new cZ.prototype.init(a,b,c,d,e)}function c$(a,b){var c,d={height:a},e=0;b=b?1:0;for(;e<4;e+=2-b)c=bV[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function da(a){return p.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}var c,d,e=a.document,f=a.location,g=a.navigator,h=a.jQuery,i=a.$,j=Array.prototype.push,k=Array.prototype.slice,l=Array.prototype.indexOf,m=Object.prototype.toString,n=Object.prototype.hasOwnProperty,o=String.prototype.trim,p=function(a,b){return new p.fn.init(a,b,c)},q=/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,r=/\S/,s=/\s+/,t=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,u=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^[\],:{}\s]*$/,x=/(?:^|:|,)(?:\s*\[)+/g,y=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,z=/"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,A=/^-ms-/,B=/-([\da-z])/gi,C=function(a,b){return(b+"").toUpperCase()},D=function(){e.addEventListener?(e.removeEventListener("DOMContentLoaded",D,!1),p.ready()):e.readyState==="complete"&&(e.detachEvent("onreadystatechange",D),p.ready())},E={};p.fn=p.prototype={constructor:p,init:function(a,c,d){var f,g,h,i;if(!a)return this;if(a.nodeType)return this.context=this[0]=a,this.length=1,this;if(typeof a=="string"){a.charAt(0)==="<"&&a.charAt(a.length-1)===">"&&a.length>=3?f=[null,a,null]:f=u.exec(a);if(f&&(f[1]||!c)){if(f[1])return c=c instanceof p?c[0]:c,i=c&&c.nodeType?c.ownerDocument||c:e,a=p.parseHTML(f[1],i,!0),v.test(f[1])&&p.isPlainObject(c)&&this.attr.call(a,c,!0),p.merge(this,a);g=e.getElementById(f[2]);if(g&&g.parentNode){if(g.id!==f[2])return d.find(a);this.length=1,this[0]=g}return this.context=e,this.selector=a,this}return!c||c.jquery?(c||d).find(a):this.constructor(c).find(a)}return p.isFunction(a)?d.ready(a):(a.selector!==b&&(this.selector=a.selector,this.context=a.context),p.makeArray(a,this))},selector:"",jquery:"1.8.2",length:0,size:function(){return this.length},toArray:function(){return k.call(this)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=p.merge(this.constructor(),a);return d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")"),d},each:function(a,b){return p.each(this,a,b)},ready:function(a){return p.ready.promise().done(a),this},eq:function(a){return a=+a,a===-1?this.slice(a):this.slice(a,a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(k.apply(this,arguments),"slice",k.call(arguments).join(","))},map:function(a){return this.pushStack(p.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:j,sort:[].sort,splice:[].splice},p.fn.init.prototype=p.fn,p.extend=p.fn.extend=function(){var a,c,d,e,f,g,h=arguments[0]||{},i=1,j=arguments.length,k=!1;typeof h=="boolean"&&(k=h,h=arguments[1]||{},i=2),typeof h!="object"&&!p.isFunction(h)&&(h={}),j===i&&(h=this,--i);for(;i<j;i++)if((a=arguments[i])!=null)for(c in a){d=h[c],e=a[c];if(h===e)continue;k&&e&&(p.isPlainObject(e)||(f=p.isArray(e)))?(f?(f=!1,g=d&&p.isArray(d)?d:[]):g=d&&p.isPlainObject(d)?d:{},h[c]=p.extend(k,g,e)):e!==b&&(h[c]=e)}return h},p.extend({noConflict:function(b){return a.$===p&&(a.$=i),b&&a.jQuery===p&&(a.jQuery=h),p},isReady:!1,readyWait:1,holdReady:function(a){a?p.readyWait++:p.ready(!0)},ready:function(a){if(a===!0?--p.readyWait:p.isReady)return;if(!e.body)return setTimeout(p.ready,1);p.isReady=!0;if(a!==!0&&--p.readyWait>0)return;d.resolveWith(e,[p]),p.fn.trigger&&p(e).trigger("ready").off("ready")},isFunction:function(a){return p.type(a)==="function"},isArray:Array.isArray||function(a){return p.type(a)==="array"},isWindow:function(a){return a!=null&&a==a.window},isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},type:function(a){return a==null?String(a):E[m.call(a)]||"object"},isPlainObject:function(a){if(!a||p.type(a)!=="object"||a.nodeType||p.isWindow(a))return!1;try{if(a.constructor&&!n.call(a,"constructor")&&!n.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}var d;for(d in a);return d===b||n.call(a,d)},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},error:function(a){throw new Error(a)},parseHTML:function(a,b,c){var d;return!a||typeof a!="string"?null:(typeof b=="boolean"&&(c=b,b=0),b=b||e,(d=v.exec(a))?[b.createElement(d[1])]:(d=p.buildFragment([a],b,c?null:[]),p.merge([],(d.cacheable?p.clone(d.fragment):d.fragment).childNodes)))},parseJSON:function(b){if(!b||typeof b!="string")return null;b=p.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(w.test(b.replace(y,"@").replace(z,"]").replace(x,"")))return(new Function("return "+b))();p.error("Invalid JSON: "+b)},parseXML:function(c){var d,e;if(!c||typeof c!="string")return null;try{a.DOMParser?(e=new DOMParser,d=e.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))}catch(f){d=b}return(!d||!d.documentElement||d.getElementsByTagName("parsererror").length)&&p.error("Invalid XML: "+c),d},noop:function(){},globalEval:function(b){b&&r.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(A,"ms-").replace(B,C)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,c,d){var e,f=0,g=a.length,h=g===b||p.isFunction(a);if(d){if(h){for(e in a)if(c.apply(a[e],d)===!1)break}else for(;f<g;)if(c.apply(a[f++],d)===!1)break}else if(h){for(e in a)if(c.call(a[e],e,a[e])===!1)break}else for(;f<g;)if(c.call(a[f],f,a[f++])===!1)break;return a},trim:o&&!o.call("﻿ ")?function(a){return a==null?"":o.call(a)}:function(a){return a==null?"":(a+"").replace(t,"")},makeArray:function(a,b){var c,d=b||[];return a!=null&&(c=p.type(a),a.length==null||c==="string"||c==="function"||c==="regexp"||p.isWindow(a)?j.call(d,a):p.merge(d,a)),d},inArray:function(a,b,c){var d;if(b){if(l)return l.call(b,a,c);d=b.length,c=c?c<0?Math.max(0,d+c):c:0;for(;c<d;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,c){var d=c.length,e=a.length,f=0;if(typeof d=="number")for(;f<d;f++)a[e++]=c[f];else while(c[f]!==b)a[e++]=c[f++];return a.length=e,a},grep:function(a,b,c){var d,e=[],f=0,g=a.length;c=!!c;for(;f<g;f++)d=!!b(a[f],f),c!==d&&e.push(a[f]);return e},map:function(a,c,d){var e,f,g=[],h=0,i=a.length,j=a instanceof p||i!==b&&typeof i=="number"&&(i>0&&a[0]&&a[i-1]||i===0||p.isArray(a));if(j)for(;h<i;h++)e=c(a[h],h,d),e!=null&&(g[g.length]=e);else for(f in a)e=c(a[f],f,d),e!=null&&(g[g.length]=e);return g.concat.apply([],g)},guid:1,proxy:function(a,c){var d,e,f;return typeof c=="string"&&(d=a[c],c=a,a=d),p.isFunction(a)?(e=k.call(arguments,2),f=function(){return a.apply(c,e.concat(k.call(arguments)))},f.guid=a.guid=a.guid||p.guid++,f):b},access:function(a,c,d,e,f,g,h){var i,j=d==null,k=0,l=a.length;if(d&&typeof d=="object"){for(k in d)p.access(a,c,k,d[k],1,g,e);f=1}else if(e!==b){i=h===b&&p.isFunction(e),j&&(i?(i=c,c=function(a,b,c){return i.call(p(a),c)}):(c.call(a,e),c=null));if(c)for(;k<l;k++)c(a[k],d,i?e.call(a[k],k,c(a[k],d)):e,h);f=1}return f?a:j?c.call(a):l?c(a[0],d):g},now:function(){return(new Date).getTime()}}),p.ready.promise=function(b){if(!d){d=p.Deferred();if(e.readyState==="complete")setTimeout(p.ready,1);else if(e.addEventListener)e.addEventListener("DOMContentLoaded",D,!1),a.addEventListener("load",p.ready,!1);else{e.attachEvent("onreadystatechange",D),a.attachEvent("onload",p.ready);var c=!1;try{c=a.frameElement==null&&e.documentElement}catch(f){}c&&c.doScroll&&function g(){if(!p.isReady){try{c.doScroll("left")}catch(a){return setTimeout(g,50)}p.ready()}}()}}return d.promise(b)},p.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){E["[object "+b+"]"]=b.toLowerCase()}),c=p(e);var F={};p.Callbacks=function(a){a=typeof a=="string"?F[a]||G(a):p.extend({},a);var c,d,e,f,g,h,i=[],j=!a.once&&[],k=function(b){c=a.memory&&b,d=!0,h=f||0,f=0,g=i.length,e=!0;for(;i&&h<g;h++)if(i[h].apply(b[0],b[1])===!1&&a.stopOnFalse){c=!1;break}e=!1,i&&(j?j.length&&k(j.shift()):c?i=[]:l.disable())},l={add:function(){if(i){var b=i.length;(function d(b){p.each(b,function(b,c){var e=p.type(c);e==="function"&&(!a.unique||!l.has(c))?i.push(c):c&&c.length&&e!=="string"&&d(c)})})(arguments),e?g=i.length:c&&(f=b,k(c))}return this},remove:function(){return i&&p.each(arguments,function(a,b){var c;while((c=p.inArray(b,i,c))>-1)i.splice(c,1),e&&(c<=g&&g--,c<=h&&h--)}),this},has:function(a){return p.inArray(a,i)>-1},empty:function(){return i=[],this},disable:function(){return i=j=c=b,this},disabled:function(){return!i},lock:function(){return j=b,c||l.disable(),this},locked:function(){return!j},fireWith:function(a,b){return b=b||[],b=[a,b.slice?b.slice():b],i&&(!d||j)&&(e?j.push(b):k(b)),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!d}};return l},p.extend({Deferred:function(a){var b=[["resolve","done",p.Callbacks("once memory"),"resolved"],["reject","fail",p.Callbacks("once memory"),"rejected"],["notify","progress",p.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return p.Deferred(function(c){p.each(b,function(b,d){var f=d[0],g=a[b];e[d[1]](p.isFunction(g)?function(){var a=g.apply(this,arguments);a&&p.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f+"With"](this===e?c:this,[a])}:c[f])}),a=null}).promise()},promise:function(a){return a!=null?p.extend(a,d):d}},e={};return d.pipe=d.then,p.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[a^1][2].disable,b[2][2].lock),e[f[0]]=g.fire,e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=k.call(arguments),d=c.length,e=d!==1||a&&p.isFunction(a.promise)?d:0,f=e===1?a:p.Deferred(),g=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?k.call(arguments):d,c===h?f.notifyWith(b,c):--e||f.resolveWith(b,c)}},h,i,j;if(d>1){h=new Array(d),i=new Array(d),j=new Array(d);for(;b<d;b++)c[b]&&p.isFunction(c[b].promise)?c[b].promise().done(g(b,j,c)).fail(f.reject).progress(g(b,i,h)):--e}return e||f.resolveWith(j,c),f.promise()}}),p.support=function(){var b,c,d,f,g,h,i,j,k,l,m,n=e.createElement("div");n.setAttribute("className","t"),n.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",c=n.getElementsByTagName("*"),d=n.getElementsByTagName("a")[0],d.style.cssText="top:1px;float:left;opacity:.5";if(!c||!c.length)return{};f=e.createElement("select"),g=f.appendChild(e.createElement("option")),h=n.getElementsByTagName("input")[0],b={leadingWhitespace:n.firstChild.nodeType===3,tbody:!n.getElementsByTagName("tbody").length,htmlSerialize:!!n.getElementsByTagName("link").length,style:/top/.test(d.getAttribute("style")),hrefNormalized:d.getAttribute("href")==="/a",opacity:/^0.5/.test(d.style.opacity),cssFloat:!!d.style.cssFloat,checkOn:h.value==="on",optSelected:g.selected,getSetAttribute:n.className!=="t",enctype:!!e.createElement("form").enctype,html5Clone:e.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",boxModel:e.compatMode==="CSS1Compat",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},h.checked=!0,b.noCloneChecked=h.cloneNode(!0).checked,f.disabled=!0,b.optDisabled=!g.disabled;try{delete n.test}catch(o){b.deleteExpando=!1}!n.addEventListener&&n.attachEvent&&n.fireEvent&&(n.attachEvent("onclick",m=function(){b.noCloneEvent=!1}),n.cloneNode(!0).fireEvent("onclick"),n.detachEvent("onclick",m)),h=e.createElement("input"),h.value="t",h.setAttribute("type","radio"),b.radioValue=h.value==="t",h.setAttribute("checked","checked"),h.setAttribute("name","t"),n.appendChild(h),i=e.createDocumentFragment(),i.appendChild(n.lastChild),b.checkClone=i.cloneNode(!0).cloneNode(!0).lastChild.checked,b.appendChecked=h.checked,i.removeChild(h),i.appendChild(n);if(n.attachEvent)for(k in{submit:!0,change:!0,focusin:!0})j="on"+k,l=j in n,l||(n.setAttribute(j,"return;"),l=typeof n[j]=="function"),b[k+"Bubbles"]=l;return p(function(){var c,d,f,g,h="padding:0;margin:0;border:0;display:block;overflow:hidden;",i=e.getElementsByTagName("body")[0];if(!i)return;c=e.createElement("div"),c.style.cssText="visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px",i.insertBefore(c,i.firstChild),d=e.createElement("div"),c.appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",f=d.getElementsByTagName("td"),f[0].style.cssText="padding:0;margin:0;border:0;display:none",l=f[0].offsetHeight===0,f[0].style.display="",f[1].style.display="none",b.reliableHiddenOffsets=l&&f[0].offsetHeight===0,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",b.boxSizing=d.offsetWidth===4,b.doesNotIncludeMarginInBodyOffset=i.offsetTop!==1,a.getComputedStyle&&(b.pixelPosition=(a.getComputedStyle(d,null)||{}).top!=="1%",b.boxSizingReliable=(a.getComputedStyle(d,null)||{width:"4px"}).width==="4px",g=e.createElement("div"),g.style.cssText=d.style.cssText=h,g.style.marginRight=g.style.width="0",d.style.width="1px",d.appendChild(g),b.reliableMarginRight=!parseFloat((a.getComputedStyle(g,null)||{}).marginRight)),typeof d.style.zoom!="undefined"&&(d.innerHTML="",d.style.cssText=h+"width:1px;padding:1px;display:inline;zoom:1",b.inlineBlockNeedsLayout=d.offsetWidth===3,d.style.display="block",d.style.overflow="visible",d.innerHTML="<div></div>",d.firstChild.style.width="5px",b.shrinkWrapBlocks=d.offsetWidth!==3,c.style.zoom=1),i.removeChild(c),c=d=f=g=null}),i.removeChild(n),c=d=f=g=h=i=n=null,b}();var H=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,I=/([A-Z])/g;p.extend({cache:{},deletedIds:[],uuid:0,expando:"jQuery"+(p.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){return a=a.nodeType?p.cache[a[p.expando]]:a[p.expando],!!a&&!K(a)},data:function(a,c,d,e){if(!p.acceptData(a))return;var f,g,h=p.expando,i=typeof c=="string",j=a.nodeType,k=j?p.cache:a,l=j?a[h]:a[h]&&h;if((!l||!k[l]||!e&&!k[l].data)&&i&&d===b)return;l||(j?a[h]=l=p.deletedIds.pop()||p.guid++:l=h),k[l]||(k[l]={},j||(k[l].toJSON=p.noop));if(typeof c=="object"||typeof c=="function")e?k[l]=p.extend(k[l],c):k[l].data=p.extend(k[l].data,c);return f=k[l],e||(f.data||(f.data={}),f=f.data),d!==b&&(f[p.camelCase(c)]=d),i?(g=f[c],g==null&&(g=f[p.camelCase(c)])):g=f,g},removeData:function(a,b,c){if(!p.acceptData(a))return;var d,e,f,g=a.nodeType,h=g?p.cache:a,i=g?a[p.expando]:p.expando;if(!h[i])return;if(b){d=c?h[i]:h[i].data;if(d){p.isArray(b)||(b in d?b=[b]:(b=p.camelCase(b),b in d?b=[b]:b=b.split(" ")));for(e=0,f=b.length;e<f;e++)delete d[b[e]];if(!(c?K:p.isEmptyObject)(d))return}}if(!c){delete h[i].data;if(!K(h[i]))return}g?p.cleanData([a],!0):p.support.deleteExpando||h!=h.window?delete h[i]:h[i]=null},_data:function(a,b,c){return p.data(a,b,c,!0)},acceptData:function(a){var b=a.nodeName&&p.noData[a.nodeName.toLowerCase()];return!b||b!==!0&&a.getAttribute("classid")===b}}),p.fn.extend({data:function(a,c){var d,e,f,g,h,i=this[0],j=0,k=null;if(a===b){if(this.length){k=p.data(i);if(i.nodeType===1&&!p._data(i,"parsedAttrs")){f=i.attributes;for(h=f.length;j<h;j++)g=f[j].name,g.indexOf("data-")||(g=p.camelCase(g.substring(5)),J(i,g,k[g]));p._data(i,"parsedAttrs",!0)}}return k}return typeof a=="object"?this.each(function(){p.data(this,a)}):(d=a.split(".",2),d[1]=d[1]?"."+d[1]:"",e=d[1]+"!",p.access(this,function(c){if(c===b)return k=this.triggerHandler("getData"+e,[d[0]]),k===b&&i&&(k=p.data(i,a),k=J(i,a,k)),k===b&&d[1]?this.data(d[0]):k;d[1]=c,this.each(function(){var b=p(this);b.triggerHandler("setData"+e,d),p.data(this,a,c),b.triggerHandler("changeData"+e,d)})},null,c,arguments.length>1,null,!1))},removeData:function(a){return this.each(function(){p.removeData(this,a)})}}),p.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=p._data(a,b),c&&(!d||p.isArray(c)?d=p._data(a,b,p.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=p.queue(a,b),d=c.length,e=c.shift(),f=p._queueHooks(a,b),g=function(){p.dequeue(a,b)};e==="inprogress"&&(e=c.shift(),d--),e&&(b==="fx"&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return p._data(a,c)||p._data(a,c,{empty:p.Callbacks("once memory").add(function(){p.removeData(a,b+"queue",!0),p.removeData(a,c,!0)})})}}),p.fn.extend({queue:function(a,c){var d=2;return typeof a!="string"&&(c=a,a="fx",d--),arguments.length<d?p.queue(this[0],a):c===b?this:this.each(function(){var b=p.queue(this,a,c);p._queueHooks(this,a),a==="fx"&&b[0]!=="inprogress"&&p.dequeue(this,a)})},dequeue:function(a){return this.each(function(){p.dequeue(this,a)})},delay:function(a,b){return a=p.fx?p.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){var d,e=1,f=p.Deferred(),g=this,h=this.length,i=function(){--e||f.resolveWith(g,[g])};typeof a!="string"&&(c=a,a=b),a=a||"fx";while(h--)d=p._data(g[h],a+"queueHooks"),d&&d.empty&&(e++,d.empty.add(i));return i(),f.promise(c)}});var L,M,N,O=/[\t\r\n]/g,P=/\r/g,Q=/^(?:button|input)$/i,R=/^(?:button|input|object|select|textarea)$/i,S=/^a(?:rea|)$/i,T=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,U=p.support.getSetAttribute;p.fn.extend({attr:function(a,b){return p.access(this,p.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){p.removeAttr(this,a)})},prop:function(a,b){return p.access(this,p.prop,a,b,arguments.length>1)},removeProp:function(a){return a=p.propFix[a]||a,this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,f,g,h;if(p.isFunction(a))return this.each(function(b){p(this).addClass(a.call(this,b,this.className))});if(a&&typeof a=="string"){b=a.split(s);for(c=0,d=this.length;c<d;c++){e=this[c];if(e.nodeType===1)if(!e.className&&b.length===1)e.className=a;else{f=" "+e.className+" ";for(g=0,h=b.length;g<h;g++)f.indexOf(" "+b[g]+" ")<0&&(f+=b[g]+" ");e.className=p.trim(f)}}}return this},removeClass:function(a){var c,d,e,f,g,h,i;if(p.isFunction(a))return this.each(function(b){p(this).removeClass(a.call(this,b,this.className))});if(a&&typeof a=="string"||a===b){c=(a||"").split(s);for(h=0,i=this.length;h<i;h++){e=this[h];if(e.nodeType===1&&e.className){d=(" "+e.className+" ").replace(O," ");for(f=0,g=c.length;f<g;f++)while(d.indexOf(" "+c[f]+" ")>=0)d=d.replace(" "+c[f]+" "," ");e.className=a?p.trim(d):""}}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";return p.isFunction(a)?this.each(function(c){p(this).toggleClass(a.call(this,c,this.className,b),b)}):this.each(function(){if(c==="string"){var e,f=0,g=p(this),h=b,i=a.split(s);while(e=i[f++])h=d?h:!g.hasClass(e),g[h?"addClass":"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&p._data(this,"__className__",this.className),this.className=this.className||a===!1?"":p._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ",c=0,d=this.length;for(;c<d;c++)if(this[c].nodeType===1&&(" "+this[c].className+" ").replace(O," ").indexOf(b)>=0)return!0;return!1},val:function(a){var c,d,e,f=this[0];if(!arguments.length){if(f)return c=p.valHooks[f.type]||p.valHooks[f.nodeName.toLowerCase()],c&&"get"in c&&(d=c.get(f,"value"))!==b?d:(d=f.value,typeof d=="string"?d.replace(P,""):d==null?"":d);return}return e=p.isFunction(a),this.each(function(d){var f,g=p(this);if(this.nodeType!==1)return;e?f=a.call(this,d,g.val()):f=a,f==null?f="":typeof f=="number"?f+="":p.isArray(f)&&(f=p.map(f,function(a){return a==null?"":a+""})),c=p.valHooks[this.type]||p.valHooks[this.nodeName.toLowerCase()];if(!c||!("set"in c)||c.set(this,f,"value")===b)this.value=f})}}),p.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c,d,e,f=a.selectedIndex,g=[],h=a.options,i=a.type==="select-one";if(f<0)return null;c=i?f:0,d=i?f+1:h.length;for(;c<d;c++){e=h[c];if(e.selected&&(p.support.optDisabled?!e.disabled:e.getAttribute("disabled")===null)&&(!e.parentNode.disabled||!p.nodeName(e.parentNode,"optgroup"))){b=p(e).val();if(i)return b;g.push(b)}}return i&&!g.length&&h.length?p(h[f]).val():g},set:function(a,b){var c=p.makeArray(b);return p(a).find("option").each(function(){this.selected=p.inArray(p(this).val(),c)>=0}),c.length||(a.selectedIndex=-1),c}}},attrFn:{},attr:function(a,c,d,e){var f,g,h,i=a.nodeType;if(!a||i===3||i===8||i===2)return;if(e&&p.isFunction(p.fn[c]))return p(a)[c](d);if(typeof a.getAttribute=="undefined")return p.prop(a,c,d);h=i!==1||!p.isXMLDoc(a),h&&(c=c,g=p.attrHooks[c]||(T.test(c)?M:L));if(d!==b){if(d===null){p.removeAttr(a,c);return}return g&&"set"in g&&h&&(f=g.set(a,d,c))!==b?f:(a.setAttribute(c,d+""),d)}return g&&"get"in g&&h&&(f=g.get(a,c))!==null?f:(f=a.getAttribute(c),f===null?b:f)},removeAttr:function(a,b){var c,d,e,f,g=0;if(b&&a.nodeType===1){d=b.split(s);for(;g<d.length;g++)e=d[g],e&&(c=p.propFix[e]||e,f=T.test(e),f||p.attr(a,e,""),a.removeAttribute(U?e:c),f&&c in a&&(a[c]=!1))}},attrHooks:{type:{set:function(a,b){if(Q.test(a.nodeName)&&a.parentNode)p.error("type property can't be changed");else if(!p.support.radioValue&&b==="radio"&&p.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}},value:{get:function(a,b){return L&&p.nodeName(a,"button")?L.get(a,b):b in a?a.value:null},set:function(a,b,c){if(L&&p.nodeName(a,"button"))return L.set(a,b,c);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e,f,g,h=a.nodeType;if(!a||h===3||h===8||h===2)return;return g=h!==1||!p.isXMLDoc(a),g&&(c=p.propFix[c]||c,f=p.propHooks[c]),d!==b?f&&"set"in f&&(e=f.set(a,d,c))!==b?e:a[c]=d:f&&"get"in f&&(e=f.get(a,c))!==null?e:a[c]},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):R.test(a.nodeName)||S.test(a.nodeName)&&a.href?0:b}}}}),M={get:function(a,c){var d,e=p.prop(a,c);return e===!0||typeof e!="boolean"&&(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b},set:function(a,b,c){var d;return b===!1?p.removeAttr(a,c):(d=p.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase())),c}},U||(N={name:!0,id:!0,coords:!0},L=p.valHooks.button={get:function(a,c){var d;return d=a.getAttributeNode(c),d&&(N[c]?d.value!=="":d.specified)?d.value:b},set:function(a,b,c){var d=a.getAttributeNode(c);return d||(d=e.createAttribute(c),a.setAttributeNode(d)),d.value=b+""}},p.each(["width","height"],function(a,b){p.attrHooks[b]=p.extend(p.attrHooks[b],{set:function(a,c){if(c==="")return a.setAttribute(b,"auto"),c}})}),p.attrHooks.contenteditable={get:L.get,set:function(a,b,c){b===""&&(b="false"),L.set(a,b,c)}}),p.support.hrefNormalized||p.each(["href","src","width","height"],function(a,c){p.attrHooks[c]=p.extend(p.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),p.support.style||(p.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=b+""}}),p.support.optSelected||(p.propHooks.selected=p.extend(p.propHooks.selected,{get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}})),p.support.enctype||(p.propFix.enctype="encoding"),p.support.checkOn||p.each(["radio","checkbox"],function(){p.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),p.each(["radio","checkbox"],function(){p.valHooks[this]=p.extend(p.valHooks[this],{set:function(a,b){if(p.isArray(b))return a.checked=p.inArray(p(a).val(),b)>=0}})});var V=/^(?:textarea|input|select)$/i,W=/^([^\.]*|)(?:\.(.+)|)$/,X=/(?:^|\s)hover(\.\S+|)\b/,Y=/^key/,Z=/^(?:mouse|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=function(a){return p.event.special.hover?a:a.replace(X,"mouseenter$1 mouseleave$1")};p.event={add:function(a,c,d,e,f){var g,h,i,j,k,l,m,n,o,q,r;if(a.nodeType===3||a.nodeType===8||!c||!d||!(g=p._data(a)))return;d.handler&&(o=d,d=o.handler,f=o.selector),d.guid||(d.guid=p.guid++),i=g.events,i||(g.events=i={}),h=g.handle,h||(g.handle=h=function(a){return typeof p!="undefined"&&(!a||p.event.triggered!==a.type)?p.event.dispatch.apply(h.elem,arguments):b},h.elem=a),c=p.trim(_(c)).split(" ");for(j=0;j<c.length;j++){k=W.exec(c[j])||[],l=k[1],m=(k[2]||"").split(".").sort(),r=p.event.special[l]||{},l=(f?r.delegateType:r.bindType)||l,r=p.event.special[l]||{},n=p.extend({type:l,origType:k[1],data:e,handler:d,guid:d.guid,selector:f,needsContext:f&&p.expr.match.needsContext.test(f),namespace:m.join(".")},o),q=i[l];if(!q){q=i[l]=[],q.delegateCount=0;if(!r.setup||r.setup.call(a,e,m,h)===!1)a.addEventListener?a.addEventListener(l,h,!1):a.attachEvent&&a.attachEvent("on"+l,h)}r.add&&(r.add.call(a,n),n.handler.guid||(n.handler.guid=d.guid)),f?q.splice(q.delegateCount++,0,n):q.push(n),p.event.global[l]=!0}a=null},global:{},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,q,r=p.hasData(a)&&p._data(a);if(!r||!(m=r.events))return;b=p.trim(_(b||"")).split(" ");for(f=0;f<b.length;f++){g=W.exec(b[f])||[],h=i=g[1],j=g[2];if(!h){for(h in m)p.event.remove(a,h+b[f],c,d,!0);continue}n=p.event.special[h]||{},h=(d?n.delegateType:n.bindType)||h,o=m[h]||[],k=o.length,j=j?new RegExp("(^|\\.)"+j.split(".").sort().join("\\.(?:.*\\.|)")+"(\\.|$)"):null;for(l=0;l<o.length;l++)q=o[l],(e||i===q.origType)&&(!c||c.guid===q.guid)&&(!j||j.test(q.namespace))&&(!d||d===q.selector||d==="**"&&q.selector)&&(o.splice(l--,1),q.selector&&o.delegateCount--,n.remove&&n.remove.call(a,q));o.length===0&&k!==o.length&&((!n.teardown||n.teardown.call(a,j,r.handle)===!1)&&p.removeEvent(a,h,r.handle),delete m[h])}p.isEmptyObject(m)&&(delete r.handle,p.removeData(a,"events",!0))},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,f,g){if(!f||f.nodeType!==3&&f.nodeType!==8){var h,i,j,k,l,m,n,o,q,r,s=c.type||c,t=[];if($.test(s+p.event.triggered))return;s.indexOf("!")>=0&&(s=s.slice(0,-1),i=!0),s.indexOf(".")>=0&&(t=s.split("."),s=t.shift(),t.sort());if((!f||p.event.customEvent[s])&&!p.event.global[s])return;c=typeof c=="object"?c[p.expando]?c:new p.Event(s,c):new p.Event(s),c.type=s,c.isTrigger=!0,c.exclusive=i,c.namespace=t.join("."),c.namespace_re=c.namespace?new RegExp("(^|\\.)"+t.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,m=s.indexOf(":")<0?"on"+s:"";if(!f){h=p.cache;for(j in h)h[j].events&&h[j].events[s]&&p.event.trigger(c,d,h[j].handle.elem,!0);return}c.result=b,c.target||(c.target=f),d=d!=null?p.makeArray(d):[],d.unshift(c),n=p.event.special[s]||{};if(n.trigger&&n.trigger.apply(f,d)===!1)return;q=[[f,n.bindType||s]];if(!g&&!n.noBubble&&!p.isWindow(f)){r=n.delegateType||s,k=$.test(r+s)?f:f.parentNode;for(l=f;k;k=k.parentNode)q.push([k,r]),l=k;l===(f.ownerDocument||e)&&q.push([l.defaultView||l.parentWindow||a,r])}for(j=0;j<q.length&&!c.isPropagationStopped();j++)k=q[j][0],c.type=q[j][1],o=(p._data(k,"events")||{})[c.type]&&p._data(k,"handle"),o&&o.apply(k,d),o=m&&k[m],o&&p.acceptData(k)&&o.apply&&o.apply(k,d)===!1&&c.preventDefault();return c.type=s,!g&&!c.isDefaultPrevented()&&(!n._default||n._default.apply(f.ownerDocument,d)===!1)&&(s!=="click"||!p.nodeName(f,"a"))&&p.acceptData(f)&&m&&f[s]&&(s!=="focus"&&s!=="blur"||c.target.offsetWidth!==0)&&!p.isWindow(f)&&(l=f[m],l&&(f[m]=null),p.event.triggered=s,f[s](),p.event.triggered=b,l&&(f[m]=l)),c.result}return},dispatch:function(c){c=p.event.fix(c||a.event);var d,e,f,g,h,i,j,l,m,n,o=(p._data(this,"events")||{})[c.type]||[],q=o.delegateCount,r=k.call(arguments),s=!c.exclusive&&!c.namespace,t=p.event.special[c.type]||{},u=[];r[0]=c,c.delegateTarget=this;if(t.preDispatch&&t.preDispatch.call(this,c)===!1)return;if(q&&(!c.button||c.type!=="click"))for(f=c.target;f!=this;f=f.parentNode||this)if(f.disabled!==!0||c.type!=="click"){h={},j=[];for(d=0;d<q;d++)l=o[d],m=l.selector,h[m]===b&&(h[m]=l.needsContext?p(m,this).index(f)>=0:p.find(m,this,null,[f]).length),h[m]&&j.push(l);j.length&&u.push({elem:f,matches:j})}o.length>q&&u.push({elem:this,matches:o.slice(q)});for(d=0;d<u.length&&!c.isPropagationStopped();d++){i=u[d],c.currentTarget=i.elem;for(e=0;e<i.matches.length&&!c.isImmediatePropagationStopped();e++){l=i.matches[e];if(s||!c.namespace&&!l.namespace||c.namespace_re&&c.namespace_re.test(l.namespace))c.data=l.data,c.handleObj=l,g=((p.event.special[l.origType]||{}).handle||l.handler).apply(i.elem,r),g!==b&&(c.result=g,g===!1&&(c.preventDefault(),c.stopPropagation()))}}return t.postDispatch&&t.postDispatch.call(this,c),c.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return a.which==null&&(a.which=b.charCode!=null?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,c){var d,f,g,h=c.button,i=c.fromElement;return a.pageX==null&&c.clientX!=null&&(d=a.target.ownerDocument||e,f=d.documentElement,g=d.body,a.pageX=c.clientX+(f&&f.scrollLeft||g&&g.scrollLeft||0)-(f&&f.clientLeft||g&&g.clientLeft||0),a.pageY=c.clientY+(f&&f.scrollTop||g&&g.scrollTop||0)-(f&&f.clientTop||g&&g.clientTop||0)),!a.relatedTarget&&i&&(a.relatedTarget=i===a.target?c.toElement:i),!a.which&&h!==b&&(a.which=h&1?1:h&2?3:h&4?2:0),a}},fix:function(a){if(a[p.expando])return a;var b,c,d=a,f=p.event.fixHooks[a.type]||{},g=f.props?this.props.concat(f.props):this.props;a=p.Event(d);for(b=g.length;b;)c=g[--b],a[c]=d[c];return a.target||(a.target=d.srcElement||e),a.target.nodeType===3&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,f.filter?f.filter(a,d):a},special:{load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(a,b,c){p.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}},simulate:function(a,b,c,d){var e=p.extend(new p.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?p.event.trigger(e,null,b):p.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},p.event.handle=p.event.dispatch,p.removeEvent=e.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]=="undefined"&&(a[d]=null),a.detachEvent(d,c))},p.Event=function(a,b){if(this instanceof p.Event)a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?bb:ba):this.type=a,b&&p.extend(this,b),this.timeStamp=a&&a.timeStamp||p.now(),this[p.expando]=!0;else return new p.Event(a,b)},p.Event.prototype={preventDefault:function(){this.isDefaultPrevented=bb;var a=this.originalEvent;if(!a)return;a.preventDefault?a.preventDefault():a.returnValue=!1},stopPropagation:function(){this.isPropagationStopped=bb;var a=this.originalEvent;if(!a)return;a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=bb,this.stopPropagation()},isDefaultPrevented:ba,isPropagationStopped:ba,isImmediatePropagationStopped:ba},p.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){p.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj,g=f.selector;if(!e||e!==d&&!p.contains(d,e))a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b;return c}}}),p.support.submitBubbles||(p.event.special.submit={setup:function(){if(p.nodeName(this,"form"))return!1;p.event.add(this,"click._submit keypress._submit",function(a){var c=a.target,d=p.nodeName(c,"input")||p.nodeName(c,"button")?c.form:b;d&&!p._data(d,"_submit_attached")&&(p.event.add(d,"submit._submit",function(a){a._submit_bubble=!0}),p._data(d,"_submit_attached",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&p.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){if(p.nodeName(this,"form"))return!1;p.event.remove(this,"._submit")}}),p.support.changeBubbles||(p.event.special.change={setup:function(){if(V.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")p.event.add(this,"propertychange._change",function(a){a.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),p.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),p.event.simulate("change",this,a,!0)});return!1}p.event.add(this,"beforeactivate._change",function(a){var b=a.target;V.test(b.nodeName)&&!p._data(b,"_change_attached")&&(p.event.add(b,"change._change",function(a){this.parentNode&&!a.isSimulated&&!a.isTrigger&&p.event.simulate("change",this.parentNode,a,!0)}),p._data(b,"_change_attached",!0))})},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||b.type!=="radio"&&b.type!=="checkbox")return a.handleObj.handler.apply(this,arguments)},teardown:function(){return p.event.remove(this,"._change"),!V.test(this.nodeName)}}),p.support.focusinBubbles||p.each({focus:"focusin",blur:"focusout"},function(a,b){var c=0,d=function(a){p.event.simulate(b,a.target,p.event.fix(a),!0)};p.event.special[b]={setup:function(){c++===0&&e.addEventListener(a,d,!0)},teardown:function(){--c===0&&e.removeEventListener(a,d,!0)}}}),p.fn.extend({on:function(a,c,d,e,f){var g,h;if(typeof a=="object"){typeof c!="string"&&(d=d||c,c=b);for(h in a)this.on(h,c,d,a[h],f);return this}d==null&&e==null?(e=c,d=c=b):e==null&&(typeof c=="string"?(e=d,d=b):(e=d,d=c,c=b));if(e===!1)e=ba;else if(!e)return this;return f===1&&(g=e,e=function(a){return p().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=p.guid++)),this.each(function(){p.event.add(this,a,e,d,c)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,c,d){var e,f;if(a&&a.preventDefault&&a.handleObj)return e=a.handleObj,p(a.delegateTarget).off(e.namespace?e.origType+"."+e.namespace:e.origType,e.selector,e.handler),this;if(typeof a=="object"){for(f in a)this.off(f,c,a[f]);return this}if(c===!1||typeof c=="function")d=c,c=b;return d===!1&&(d=ba),this.each(function(){p.event.remove(this,a,d,c)})},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},live:function(a,b,c){return p(this.context).on(a,this.selector,b,c),this},die:function(a,b){return p(this.context).off(a,this.selector||"**",b),this},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return arguments.length===1?this.off(a,"**"):this.off(b,a||"**",c)},trigger:function(a,b){return this.each(function(){p.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return p.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||p.guid++,d=0,e=function(c){var e=(p._data(this,"lastToggle"+a.guid)||0)%d;return p._data(this,"lastToggle"+a.guid,e+1),c.preventDefault(),b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),p.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){p.fn[b]=function(a,c){return c==null&&(c=a,a=null),arguments.length>0?this.on(b,null,a,c):this.trigger(b)},Y.test(b)&&(p.event.fixHooks[b]=p.event.keyHooks),Z.test(b)&&(p.event.fixHooks[b]=p.event.mouseHooks)}),function(a,b){function bc(a,b,c,d){c=c||[],b=b||r;var e,f,i,j,k=b.nodeType;if(!a||typeof a!="string")return c;if(k!==1&&k!==9)return[];i=g(b);if(!i&&!d)if(e=P.exec(a))if(j=e[1]){if(k===9){f=b.getElementById(j);if(!f||!f.parentNode)return c;if(f.id===j)return c.push(f),c}else if(b.ownerDocument&&(f=b.ownerDocument.getElementById(j))&&h(b,f)&&f.id===j)return c.push(f),c}else{if(e[2])return w.apply(c,x.call(b.getElementsByTagName(a),0)),c;if((j=e[3])&&_&&b.getElementsByClassName)return w.apply(c,x.call(b.getElementsByClassName(j),0)),c}return bp(a.replace(L,"$1"),b,c,d,i)}function bd(a){return function(b){var c=b.nodeName.toLowerCase();return c==="input"&&b.type===a}}function be(a){return function(b){var c=b.nodeName.toLowerCase();return(c==="input"||c==="button")&&b.type===a}}function bf(a){return z(function(b){return b=+b,z(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function bg(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}function bh(a,b){var c,d,f,g,h,i,j,k=C[o][a];if(k)return b?0:k.slice(0);h=a,i=[],j=e.preFilter;while(h){if(!c||(d=M.exec(h)))d&&(h=h.slice(d[0].length)),i.push(f=[]);c=!1;if(d=N.exec(h))f.push(c=new q(d.shift())),h=h.slice(c.length),c.type=d[0].replace(L," ");for(g in e.filter)(d=W[g].exec(h))&&(!j[g]||(d=j[g](d,r,!0)))&&(f.push(c=new q(d.shift())),h=h.slice(c.length),c.type=g,c.matches=d);if(!c)break}return b?h.length:h?bc.error(a):C(a,i).slice(0)}function bi(a,b,d){var e=b.dir,f=d&&b.dir==="parentNode",g=u++;return b.first?function(b,c,d){while(b=b[e])if(f||b.nodeType===1)return a(b,c,d)}:function(b,d,h){if(!h){var i,j=t+" "+g+" ",k=j+c;while(b=b[e])if(f||b.nodeType===1){if((i=b[o])===k)return b.sizset;if(typeof i=="string"&&i.indexOf(j)===0){if(b.sizset)return b}else{b[o]=k;if(a(b,d,h))return b.sizset=!0,b;b.sizset=!1}}}else while(b=b[e])if(f||b.nodeType===1)if(a(b,d,h))return b}}function bj(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function bk(a,b,c,d,e){var f,g=[],h=0,i=a.length,j=b!=null;for(;h<i;h++)if(f=a[h])if(!c||c(f,d,e))g.push(f),j&&b.push(h);return g}function bl(a,b,c,d,e,f){return d&&!d[o]&&(d=bl(d)),e&&!e[o]&&(e=bl(e,f)),z(function(f,g,h,i){if(f&&e)return;var j,k,l,m=[],n=[],o=g.length,p=f||bo(b||"*",h.nodeType?[h]:h,[],f),q=a&&(f||!b)?bk(p,m,a,h,i):p,r=c?e||(f?a:o||d)?[]:g:q;c&&c(q,r,h,i);if(d){l=bk(r,n),d(l,[],h,i),j=l.length;while(j--)if(k=l[j])r[n[j]]=!(q[n[j]]=k)}if(f){j=a&&r.length;while(j--)if(k=r[j])f[m[j]]=!(g[m[j]]=k)}else r=bk(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):w.apply(g,r)})}function bm(a){var b,c,d,f=a.length,g=e.relative[a[0].type],h=g||e.relative[" "],i=g?1:0,j=bi(function(a){return a===b},h,!0),k=bi(function(a){return y.call(b,a)>-1},h,!0),m=[function(a,c,d){return!g&&(d||c!==l)||((b=c).nodeType?j(a,c,d):k(a,c,d))}];for(;i<f;i++)if(c=e.relative[a[i].type])m=[bi(bj(m),c)];else{c=e.filter[a[i].type].apply(null,a[i].matches);if(c[o]){d=++i;for(;d<f;d++)if(e.relative[a[d].type])break;return bl(i>1&&bj(m),i>1&&a.slice(0,i-1).join("").replace(L,"$1"),c,i<d&&bm(a.slice(i,d)),d<f&&bm(a=a.slice(d)),d<f&&a.join(""))}m.push(c)}return bj(m)}function bn(a,b){var d=b.length>0,f=a.length>0,g=function(h,i,j,k,m){var n,o,p,q=[],s=0,u="0",x=h&&[],y=m!=null,z=l,A=h||f&&e.find.TAG("*",m&&i.parentNode||i),B=t+=z==null?1:Math.E;y&&(l=i!==r&&i,c=g.el);for(;(n=A[u])!=null;u++){if(f&&n){for(o=0;p=a[o];o++)if(p(n,i,j)){k.push(n);break}y&&(t=B,c=++g.el)}d&&((n=!p&&n)&&s--,h&&x.push(n))}s+=u;if(d&&u!==s){for(o=0;p=b[o];o++)p(x,q,i,j);if(h){if(s>0)while(u--)!x[u]&&!q[u]&&(q[u]=v.call(k));q=bk(q)}w.apply(k,q),y&&!h&&q.length>0&&s+b.length>1&&bc.uniqueSort(k)}return y&&(t=B,l=z),x};return g.el=0,d?z(g):g}function bo(a,b,c,d){var e=0,f=b.length;for(;e<f;e++)bc(a,b[e],c,d);return c}function bp(a,b,c,d,f){var g,h,j,k,l,m=bh(a),n=m.length;if(!d&&m.length===1){h=m[0]=m[0].slice(0);if(h.length>2&&(j=h[0]).type==="ID"&&b.nodeType===9&&!f&&e.relative[h[1].type]){b=e.find.ID(j.matches[0].replace(V,""),b,f)[0];if(!b)return c;a=a.slice(h.shift().length)}for(g=W.POS.test(a)?-1:h.length-1;g>=0;g--){j=h[g];if(e.relative[k=j.type])break;if(l=e.find[k])if(d=l(j.matches[0].replace(V,""),R.test(h[0].type)&&b.parentNode||b,f)){h.splice(g,1),a=d.length&&h.join("");if(!a)return w.apply(c,x.call(d,0)),c;break}}}return i(a,m)(d,b,f,c,R.test(a)),c}function bq(){}var c,d,e,f,g,h,i,j,k,l,m=!0,n="undefined",o=("sizcache"+Math.random()).replace(".",""),q=String,r=a.document,s=r.documentElement,t=0,u=0,v=[].pop,w=[].push,x=[].slice,y=[].indexOf||function(a){var b=0,c=this.length;for(;b<c;b++)if(this[b]===a)return b;return-1},z=function(a,b){return a[o]=b==null||b,a},A=function(){var a={},b=[];return z(function(c,d){return b.push(c)>e.cacheLength&&delete a[b.shift()],a[c]=d},a)},B=A(),C=A(),D=A(),E="[\\x20\\t\\r\\n\\f]",F="(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",G=F.replace("w","w#"),H="([*^$|!~]?=)",I="\\["+E+"*("+F+")"+E+"*(?:"+H+E+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+G+")|)|)"+E+"*\\]",J=":("+F+")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:"+I+")|[^:]|\\\\.)*|.*))\\)|)",K=":(even|odd|eq|gt|lt|nth|first|last)(?:\\("+E+"*((?:-\\d)?\\d*)"+E+"*\\)|)(?=[^-]|$)",L=new RegExp("^"+E+"+|((?:^|[^\\\\])(?:\\\\.)*)"+E+"+$","g"),M=new RegExp("^"+E+"*,"+E+"*"),N=new RegExp("^"+E+"*([\\x20\\t\\r\\n\\f>+~])"+E+"*"),O=new RegExp(J),P=/^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,Q=/^:not/,R=/[\x20\t\r\n\f]*[+~]/,S=/:not\($/,T=/h\d/i,U=/input|select|textarea|button/i,V=/\\(?!\\)/g,W={ID:new RegExp("^#("+F+")"),CLASS:new RegExp("^\\.("+F+")"),NAME:new RegExp("^\\[name=['\"]?("+F+")['\"]?\\]"),TAG:new RegExp("^("+F.replace("w","w*")+")"),ATTR:new RegExp("^"+I),PSEUDO:new RegExp("^"+J),POS:new RegExp(K,"i"),CHILD:new RegExp("^:(only|nth|first|last)-child(?:\\("+E+"*(even|odd|(([+-]|)(\\d*)n|)"+E+"*(?:([+-]|)"+E+"*(\\d+)|))"+E+"*\\)|)","i"),needsContext:new RegExp("^"+E+"*[>+~]|"+K,"i")},X=function(a){var b=r.createElement("div");try{return a(b)}catch(c){return!1}finally{b=null}},Y=X(function(a){return a.appendChild(r.createComment("")),!a.getElementsByTagName("*").length}),Z=X(function(a){return a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!==n&&a.firstChild.getAttribute("href")==="#"}),$=X(function(a){a.innerHTML="<select></select>";var b=typeof a.lastChild.getAttribute("multiple");return b!=="boolean"&&b!=="string"}),_=X(function(a){return a.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",!a.getElementsByClassName||!a.getElementsByClassName("e").length?!1:(a.lastChild.className="e",a.getElementsByClassName("e").length===2)}),ba=X(function(a){a.id=o+0,a.innerHTML="<a name='"+o+"'></a><div name='"+o+"'></div>",s.insertBefore(a,s.firstChild);var b=r.getElementsByName&&r.getElementsByName(o).length===2+r.getElementsByName(o+0).length;return d=!r.getElementById(o),s.removeChild(a),b});try{x.call(s.childNodes,0)[0].nodeType}catch(bb){x=function(a){var b,c=[];for(;b=this[a];a++)c.push(b);return c}}bc.matches=function(a,b){return bc(a,null,null,b)},bc.matchesSelector=function(a,b){return bc(b,null,null,[a]).length>0},f=bc.getText=function(a){var b,c="",d=0,e=a.nodeType;if(e){if(e===1||e===9||e===11){if(typeof a.textContent=="string")return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=f(a)}else if(e===3||e===4)return a.nodeValue}else for(;b=a[d];d++)c+=f(b);return c},g=bc.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?b.nodeName!=="HTML":!1},h=bc.contains=s.contains?function(a,b){var c=a.nodeType===9?a.documentElement:a,d=b&&b.parentNode;return a===d||!!(d&&d.nodeType===1&&c.contains&&c.contains(d))}:s.compareDocumentPosition?function(a,b){return b&&!!(a.compareDocumentPosition(b)&16)}:function(a,b){while(b=b.parentNode)if(b===a)return!0;return!1},bc.attr=function(a,b){var c,d=g(a);return d||(b=b.toLowerCase()),(c=e.attrHandle[b])?c(a):d||$?a.getAttribute(b):(c=a.getAttributeNode(b),c?typeof a[b]=="boolean"?a[b]?b:null:c.specified?c.value:null:null)},e=bc.selectors={cacheLength:50,createPseudo:z,match:W,attrHandle:Z?{}:{href:function(a){return a.getAttribute("href",2)},type:function(a){return a.getAttribute("type")}},find:{ID:d?function(a,b,c){if(typeof b.getElementById!==n&&!c){var d=b.getElementById(a);return d&&d.parentNode?[d]:[]}}:function(a,c,d){if(typeof c.getElementById!==n&&!d){var e=c.getElementById(a);return e?e.id===a||typeof e.getAttributeNode!==n&&e.getAttributeNode("id").value===a?[e]:b:[]}},TAG:Y?function(a,b){if(typeof b.getElementsByTagName!==n)return b.getElementsByTagName(a)}:function(a,b){var c=b.getElementsByTagName(a);if(a==="*"){var d,e=[],f=0;for(;d=c[f];f++)d.nodeType===1&&e.push(d);return e}return c},NAME:ba&&function(a,b){if(typeof b.getElementsByName!==n)return b.getElementsByName(name)},CLASS:_&&function(a,b,c){if(typeof b.getElementsByClassName!==n&&!c)return b.getElementsByClassName(a)}},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(V,""),a[3]=(a[4]||a[5]||"").replace(V,""),a[2]==="~="&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),a[1]==="nth"?(a[2]||bc.error(a[0]),a[3]=+(a[3]?a[4]+(a[5]||1):2*(a[2]==="even"||a[2]==="odd")),a[4]=+(a[6]+a[7]||a[2]==="odd")):a[2]&&bc.error(a[0]),a},PSEUDO:function(a){var b,c;if(W.CHILD.test(a[0]))return null;if(a[3])a[2]=a[3];else if(b=a[4])O.test(b)&&(c=bh(b,!0))&&(c=b.indexOf(")",b.length-c)-b.length)&&(b=b.slice(0,c),a[0]=a[0].slice(0,c)),a[2]=b;return a.slice(0,3)}},filter:{ID:d?function(a){return a=a.replace(V,""),function(b){return b.getAttribute("id")===a}}:function(a){return a=a.replace(V,""),function(b){var c=typeof b.getAttributeNode!==n&&b.getAttributeNode("id");return c&&c.value===a}},TAG:function(a){return a==="*"?function(){return!0}:(a=a.replace(V,"").toLowerCase(),function(b){return b.nodeName&&b.nodeName.toLowerCase()===a})},CLASS:function(a){var b=B[o][a];return b||(b=B(a,new RegExp("(^|"+E+")"+a+"("+E+"|$)"))),function(a){return b.test(a.className||typeof a.getAttribute!==n&&a.getAttribute("class")||"")}},ATTR:function(a,b,c){return function(d,e){var f=bc.attr(d,a);return f==null?b==="!=":b?(f+="",b==="="?f===c:b==="!="?f!==c:b==="^="?c&&f.indexOf(c)===0:b==="*="?c&&f.indexOf(c)>-1:b==="$="?c&&f.substr(f.length-c.length)===c:b==="~="?(" "+f+" ").indexOf(c)>-1:b==="|="?f===c||f.substr(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d){return a==="nth"?function(a){var b,e,f=a.parentNode;if(c===1&&d===0)return!0;if(f){e=0;for(b=f.firstChild;b;b=b.nextSibling)if(b.nodeType===1){e++;if(a===b)break}}return e-=d,e===c||e%c===0&&e/c>=0}:function(b){var c=b;switch(a){case"only":case"first":while(c=c.previousSibling)if(c.nodeType===1)return!1;if(a==="first")return!0;c=b;case"last":while(c=c.nextSibling)if(c.nodeType===1)return!1;return!0}}},PSEUDO:function(a,b){var c,d=e.pseudos[a]||e.setFilters[a.toLowerCase()]||bc.error("unsupported pseudo: "+a);return d[o]?d(b):d.length>1?(c=[a,a,"",b],e.setFilters.hasOwnProperty(a.toLowerCase())?z(function(a,c){var e,f=d(a,b),g=f.length;while(g--)e=y.call(a,f[g]),a[e]=!(c[e]=f[g])}):function(a){return d(a,0,c)}):d}},pseudos:{not:z(function(a){var b=[],c=[],d=i(a.replace(L,"$1"));return d[o]?z(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)if(f=g[h])a[h]=!(b[h]=f)}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:z(function(a){return function(b){return bc(a,b).length>0}}),contains:z(function(a){return function(b){return(b.textContent||b.innerText||f(b)).indexOf(a)>-1}}),enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&!!a.checked||b==="option"&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},parent:function(a){return!e.pseudos.empty(a)},empty:function(a){var b;a=a.firstChild;while(a){if(a.nodeName>"@"||(b=a.nodeType)===3||b===4)return!1;a=a.nextSibling}return!0},header:function(a){return T.test(a.nodeName)},text:function(a){var b,c;return a.nodeName.toLowerCase()==="input"&&(b=a.type)==="text"&&((c=a.getAttribute("type"))==null||c.toLowerCase()===b)},radio:bd("radio"),checkbox:bd("checkbox"),file:bd("file"),password:bd("password"),image:bd("image"),submit:be("submit"),reset:be("reset"),button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&a.type==="button"||b==="button"},input:function(a){return U.test(a.nodeName)},focus:function(a){var b=a.ownerDocument;return a===b.activeElement&&(!b.hasFocus||b.hasFocus())&&(!!a.type||!!a.href)},active:function(a){return a===a.ownerDocument.activeElement},first:bf(function(a,b,c){return[0]}),last:bf(function(a,b,c){return[b-1]}),eq:bf(function(a,b,c){return[c<0?c+b:c]}),even:bf(function(a,b,c){for(var d=0;d<b;d+=2)a.push(d);return a}),odd:bf(function(a,b,c){for(var d=1;d<b;d+=2)a.push(d);return a}),lt:bf(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:bf(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},j=s.compareDocumentPosition?function(a,b){return a===b?(k=!0,0):(!a.compareDocumentPosition||!b.compareDocumentPosition?a.compareDocumentPosition:a.compareDocumentPosition(b)&4)?-1:1}:function(a,b){if(a===b)return k=!0,0;if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[],g=a.parentNode,h=b.parentNode,i=g;if(g===h)return bg(a,b);if(!g)return-1;if(!h)return 1;while(i)e.unshift(i),i=i.parentNode;i=h;while(i)f.unshift(i),i=i.parentNode;c=e.length,d=f.length;for(var j=0;j<c&&j<d;j++)if(e[j]!==f[j])return bg(e[j],f[j]);return j===c?bg(a,f[j],-1):bg(e[j],b,1)},[0,0].sort(j),m=!k,bc.uniqueSort=function(a){var b,c=1;k=m,a.sort(j);if(k)for(;b=a[c];c++)b===a[c-1]&&a.splice(c--,1);return a},bc.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},i=bc.compile=function(a,b){var c,d=[],e=[],f=D[o][a];if(!f){b||(b=bh(a)),c=b.length;while(c--)f=bm(b[c]),f[o]?d.push(f):e.push(f);f=D(a,bn(e,d))}return f},r.querySelectorAll&&function(){var a,b=bp,c=/'|\\/g,d=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,e=[":focus"],f=[":active",":focus"],h=s.matchesSelector||s.mozMatchesSelector||s.webkitMatchesSelector||s.oMatchesSelector||s.msMatchesSelector;X(function(a){a.innerHTML="<select><option selected=''></option></select>",a.querySelectorAll("[selected]").length||e.push("\\["+E+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),a.querySelectorAll(":checked").length||e.push(":checked")}),X(function(a){a.innerHTML="<p test=''></p>",a.querySelectorAll("[test^='']").length&&e.push("[*^$]="+E+"*(?:\"\"|'')"),a.innerHTML="<input type='hidden'/>",a.querySelectorAll(":enabled").length||e.push(":enabled",":disabled")}),e=new RegExp(e.join("|")),bp=function(a,d,f,g,h){if(!g&&!h&&(!e||!e.test(a))){var i,j,k=!0,l=o,m=d,n=d.nodeType===9&&a;if(d.nodeType===1&&d.nodeName.toLowerCase()!=="object"){i=bh(a),(k=d.getAttribute("id"))?l=k.replace(c,"\\$&"):d.setAttribute("id",l),l="[id='"+l+"'] ",j=i.length;while(j--)i[j]=l+i[j].join("");m=R.test(a)&&d.parentNode||d,n=i.join(",")}if(n)try{return w.apply(f,x.call(m.querySelectorAll(n),0)),f}catch(p){}finally{k||d.removeAttribute("id")}}return b(a,d,f,g,h)},h&&(X(function(b){a=h.call(b,"div");try{h.call(b,"[test!='']:sizzle"),f.push("!=",J)}catch(c){}}),f=new RegExp(f.join("|")),bc.matchesSelector=function(b,c){c=c.replace(d,"='$1']");if(!g(b)&&!f.test(c)&&(!e||!e.test(c)))try{var i=h.call(b,c);if(i||a||b.document&&b.document.nodeType!==11)return i}catch(j){}return bc(c,null,null,[b]).length>0})}(),e.pseudos.nth=e.pseudos.eq,e.filters=bq.prototype=e.pseudos,e.setFilters=new bq,bc.attr=p.attr,p.find=bc,p.expr=bc.selectors,p.expr[":"]=p.expr.pseudos,p.unique=bc.uniqueSort,p.text=bc.getText,p.isXMLDoc=bc.isXML,p.contains=bc.contains}(a);var bc=/Until$/,bd=/^(?:parents|prev(?:Until|All))/,be=/^.[^:#\[\.,]*$/,bf=p.expr.match.needsContext,bg={children:!0,contents:!0,next:!0,prev:!0};p.fn.extend({find:function(a){var b,c,d,e,f,g,h=this;if(typeof a!="string")return p(a).filter(function(){for(b=0,c=h.length;b<c;b++)if(p.contains(h[b],this))return!0});g=this.pushStack("","find",a);for(b=0,c=this.length;b<c;b++){d=g.length,p.find(a,this[b],g);if(b>0)for(e=d;e<g.length;e++)for(f=0;f<d;f++)if(g[f]===g[e]){g.splice(e--,1);break}}return g},has:function(a){var b,c=p(a,this),d=c.length;return this.filter(function(){for(b=0;b<d;b++)if(p.contains(this,c[b]))return!0})},not:function(a){return this.pushStack(bj(this,a,!1),"not",a)},filter:function(a){return this.pushStack(bj(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?bf.test(a)?p(a,this.context).index(this[0])>=0:p.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c,d=0,e=this.length,f=[],g=bf.test(a)||typeof a!="string"?p(a,b||this.context):0;for(;d<e;d++){c=this[d];while(c&&c.ownerDocument&&c!==b&&c.nodeType!==11){if(g?g.index(c)>-1:p.find.matchesSelector(c,a)){f.push(c);break}c=c.parentNode}}return f=f.length>1?p.unique(f):f,this.pushStack(f,"closest",a)},index:function(a){return a?typeof a=="string"?p.inArray(this[0],p(a)):p.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.prevAll().length:-1},add:function(a,b){var c=typeof a=="string"?p(a,b):p.makeArray(a&&a.nodeType?[a]:a),d=p.merge(this.get(),c);return this.pushStack(bh(c[0])||bh(d[0])?d:p.unique(d))},addBack:function(a){return this.add(a==null?this.prevObject:this.prevObject.filter(a))}}),p.fn.andSelf=p.fn.addBack,p.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return p.dir(a,"parentNode")},parentsUntil:function(a,b,c){return p.dir(a,"parentNode",c)},next:function(a){return bi(a,"nextSibling")},prev:function(a){return bi(a,"previousSibling")},nextAll:function(a){return p.dir(a,"nextSibling")},prevAll:function(a){return p.dir(a,"previousSibling")},nextUntil:function(a,b,c){return p.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return p.dir(a,"previousSibling",c)},siblings:function(a){return p.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return p.sibling(a.firstChild)},contents:function(a){return p.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:p.merge([],a.childNodes)}},function(a,b){p.fn[a]=function(c,d){var e=p.map(this,b,c);return bc.test(a)||(d=c),d&&typeof d=="string"&&(e=p.filter(d,e)),e=this.length>1&&!bg[a]?p.unique(e):e,this.length>1&&bd.test(a)&&(e=e.reverse()),this.pushStack(e,a,k.call(arguments).join(","))}}),p.extend({filter:function(a,b,c){return c&&(a=":not("+a+")"),b.length===1?p.find.matchesSelector(b[0],a)?[b[0]]:[]:p.find.matches(a,b)},dir:function(a,c,d){var e=[],f=a[c];while(f&&f.nodeType!==9&&(d===b||f.nodeType!==1||!p(f).is(d)))f.nodeType===1&&e.push(f),f=f[c];return e},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var bl="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",bm=/ jQuery\d+="(?:null|\d+)"/g,bn=/^\s+/,bo=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bp=/<([\w:]+)/,bq=/<tbody/i,br=/<|&#?\w+;/,bs=/<(?:script|style|link)/i,bt=/<(?:script|object|embed|option|style)/i,bu=new RegExp("<(?:"+bl+")[\\s/>]","i"),bv=/^(?:checkbox|radio)$/,bw=/checked\s*(?:[^=]|=\s*.checked.)/i,bx=/\/(java|ecma)script/i,by=/^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,bz={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},bA=bk(e),bB=bA.appendChild(e.createElement("div"));bz.optgroup=bz.option,bz.tbody=bz.tfoot=bz.colgroup=bz.caption=bz.thead,bz.th=bz.td,p.support.htmlSerialize||(bz._default=[1,"X<div>","</div>"]),p.fn.extend({text:function(a){return p.access(this,function(a){return a===b?p.text(this):this.empty().append((this[0]&&this[0].ownerDocument||e).createTextNode(a))},null,a,arguments.length)},wrapAll:function(a){if(p.isFunction(a))return this.each(function(b){p(this).wrapAll(a.call(this,b))});if(this[0]){var b=p(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return p.isFunction(a)?this.each(function(b){p(this).wrapInner(a.call(this,b))}):this.each(function(){var b=p(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=p.isFunction(a);return this.each(function(c){p(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){p.nodeName(this,"body")||p(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){(this.nodeType===1||this.nodeType===11)&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){(this.nodeType===1||this.nodeType===11)&&this.insertBefore(a,this.firstChild)})},before:function(){if(!bh(this[0]))return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=p.clean(arguments);return this.pushStack(p.merge(a,this),"before",this.selector)}},after:function(){if(!bh(this[0]))return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=p.clean(arguments);return this.pushStack(p.merge(this,a),"after",this.selector)}},remove:function(a,b){var c,d=0;for(;(c=this[d])!=null;d++)if(!a||p.filter(a,[c]).length)!b&&c.nodeType===1&&(p.cleanData(c.getElementsByTagName("*")),p.cleanData([c])),c.parentNode&&c.parentNode.removeChild(c);return this},empty:function(){var a,b=0;for(;(a=this[b])!=null;b++){a.nodeType===1&&p.cleanData(a.getElementsByTagName("*"));while(a.firstChild)a.removeChild(a.firstChild)}return this},clone:function(a,b){return a=a==null?!1:a,b=b==null?a:b,this.map(function(){return p.clone(this,a,b)})},html:function(a){return p.access(this,function(a){var c=this[0]||{},d=0,e=this.length;if(a===b)return c.nodeType===1?c.innerHTML.replace(bm,""):b;if(typeof a=="string"&&!bs.test(a)&&(p.support.htmlSerialize||!bu.test(a))&&(p.support.leadingWhitespace||!bn.test(a))&&!bz[(bp.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(bo,"<$1></$2>");try{for(;d<e;d++)c=this[d]||{},c.nodeType===1&&(p.cleanData(c.getElementsByTagName("*")),c.innerHTML=a);c=0}catch(f){}}c&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(a){return bh(this[0])?this.length?this.pushStack(p(p.isFunction(a)?a():a),"replaceWith",a):this:p.isFunction(a)?this.each(function(b){var c=p(this),d=c.html();c.replaceWith(a.call(this,b,d))}):(typeof a!="string"&&(a=p(a).detach()),this.each(function(){var b=this.nextSibling,c=this.parentNode;p(this).remove(),b?p(b).before(a):p(c).append(a)}))},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){a=[].concat.apply([],a);var e,f,g,h,i=0,j=a[0],k=[],l=this.length;if(!p.support.checkClone&&l>1&&typeof j=="string"&&bw.test(j))return this.each(function(){p(this).domManip(a,c,d)});if(p.isFunction(j))return this.each(function(e){var f=p(this);a[0]=j.call(this,e,c?f.html():b),f.domManip(a,c,d)});if(this[0]){e=p.buildFragment(a,this,k),g=e.fragment,f=g.firstChild,g.childNodes.length===1&&(g=f);if(f){c=c&&p.nodeName(f,"tr");for(h=e.cacheable||l-1;i<l;i++)d.call(c&&p.nodeName(this[i],"table")?bC(this[i],"tbody"):this[i],i===h?g:p.clone(g,!0,!0))}g=f=null,k.length&&p.each(k,function(a,b){b.src?p.ajax?p.ajax({url:b.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):p.error("no ajax"):p.globalEval((b.text||b.textContent||b.innerHTML||"").replace(by,"")),b.parentNode&&b.parentNode.removeChild(b)})}return this}}),p.buildFragment=function(a,c,d){var f,g,h,i=a[0];return c=c||e,c=!c.nodeType&&c[0]||c,c=c.ownerDocument||c,a.length===1&&typeof i=="string"&&i.length<512&&c===e&&i.charAt(0)==="<"&&!bt.test(i)&&(p.support.checkClone||!bw.test(i))&&(p.support.html5Clone||!bu.test(i))&&(g=!0,f=p.fragments[i],h=f!==b),f||(f=c.createDocumentFragment(),p.clean(a,c,f,d),g&&(p.fragments[i]=h&&f)),{fragment:f,cacheable:g}},p.fragments={},p.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){p.fn[a]=function(c){var d,e=0,f=[],g=p(c),h=g.length,i=this.length===1&&this[0].parentNode;if((i==null||i&&i.nodeType===11&&i.childNodes.length===1)&&h===1)return g[b](this[0]),this;for(;e<h;e++)d=(e>0?this.clone(!0):this).get(),p(g[e])[b](d),f=f.concat(d);return this.pushStack(f,a,g.selector)}}),p.extend({clone:function(a,b,c){var d,e,f,g;p.support.html5Clone||p.isXMLDoc(a)||!bu.test("<"+a.nodeName+">")?g=a.cloneNode(!0):(bB.innerHTML=a.outerHTML,bB.removeChild(g=bB.firstChild));if((!p.support.noCloneEvent||!p.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!p.isXMLDoc(a)){bE(a,g),d=bF(a),e=bF(g);for(f=0;d[f];++f)e[f]&&bE(d[f],e[f])}if(b){bD(a,g);if(c){d=bF(a),e=bF(g);for(f=0;d[f];++f)bD(d[f],e[f])}}return d=e=null,g},clean:function(a,b,c,d){var f,g,h,i,j,k,l,m,n,o,q,r,s=b===e&&bA,t=[];if(!b||typeof b.createDocumentFragment=="undefined")b=e;for(f=0;(h=a[f])!=null;f++){typeof h=="number"&&(h+="");if(!h)continue;if(typeof h=="string")if(!br.test(h))h=b.createTextNode(h);else{s=s||bk(b),l=b.createElement("div"),s.appendChild(l),h=h.replace(bo,"<$1></$2>"),i=(bp.exec(h)||["",""])[1].toLowerCase(),j=bz[i]||bz._default,k=j[0],l.innerHTML=j[1]+h+j[2];while(k--)l=l.lastChild;if(!p.support.tbody){m=bq.test(h),n=i==="table"&&!m?l.firstChild&&l.firstChild.childNodes:j[1]==="<table>"&&!m?l.childNodes:[];for(g=n.length-1;g>=0;--g)p.nodeName(n[g],"tbody")&&!n[g].childNodes.length&&n[g].parentNode.removeChild(n[g])}!p.support.leadingWhitespace&&bn.test(h)&&l.insertBefore(b.createTextNode(bn.exec(h)[0]),l.firstChild),h=l.childNodes,l.parentNode.removeChild(l)}h.nodeType?t.push(h):p.merge(t,h)}l&&(h=l=s=null);if(!p.support.appendChecked)for(f=0;(h=t[f])!=null;f++)p.nodeName(h,"input")?bG(h):typeof h.getElementsByTagName!="undefined"&&p.grep(h.getElementsByTagName("input"),bG);if(c){q=function(a){if(!a.type||bx.test(a.type))return d?d.push(a.parentNode?a.parentNode.removeChild(a):a):c.appendChild(a)};for(f=0;(h=t[f])!=null;f++)if(!p.nodeName(h,"script")||!q(h))c.appendChild(h),typeof h.getElementsByTagName!="undefined"&&(r=p.grep(p.merge([],h.getElementsByTagName("script")),q),t.splice.apply(t,[f+1,0].concat(r)),f+=r.length)}return t},cleanData:function(a,b){var c,d,e,f,g=0,h=p.expando,i=p.cache,j=p.support.deleteExpando,k=p.event.special;for(;(e=a[g])!=null;g++)if(b||p.acceptData(e)){d=e[h],c=d&&i[d];if(c){if(c.events)for(f in c.events)k[f]?p.event.remove(e,f):p.removeEvent(e,f,c.handle);i[d]&&(delete i[d],j?delete e[h]:e.removeAttribute?e.removeAttribute(h):e[h]=null,p.deletedIds.push(d))}}}}),function(){var a,b;p.uaMatch=function(a){a=a.toLowerCase();var b=/(chrome)[ \/]([\w.]+)/.exec(a)||/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||a.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},a=p.uaMatch(g.userAgent),b={},a.browser&&(b[a.browser]=!0,b.version=a.version),b.chrome?b.webkit=!0:b.webkit&&(b.safari=!0),p.browser=b,p.sub=function(){function a(b,c){return new a.fn.init(b,c)}p.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function c(c,d){return d&&d instanceof p&&!(d instanceof a)&&(d=a(d)),p.fn.init.call(this,c,d,b)},a.fn.init.prototype=a.fn;var b=a(e);return a}}();var bH,bI,bJ,bK=/alpha\([^)]*\)/i,bL=/opacity=([^)]*)/,bM=/^(top|right|bottom|left)$/,bN=/^(none|table(?!-c[ea]).+)/,bO=/^margin/,bP=new RegExp("^("+q+")(.*)$","i"),bQ=new RegExp("^("+q+")(?!px)[a-z%]+$","i"),bR=new RegExp("^([-+])=("+q+")","i"),bS={},bT={position:"absolute",visibility:"hidden",display:"block"},bU={letterSpacing:0,fontWeight:400},bV=["Top","Right","Bottom","Left"],bW=["Webkit","O","Moz","ms"],bX=p.fn.toggle;p.fn.extend({css:function(a,c){return p.access(this,function(a,c,d){return d!==b?p.style(a,c,d):p.css(a,c)},a,c,arguments.length>1)},show:function(){return b$(this,!0)},hide:function(){return b$(this)},toggle:function(a,b){var c=typeof a=="boolean";return p.isFunction(a)&&p.isFunction(b)?bX.apply(this,arguments):this.each(function(){(c?a:bZ(this))?p(this).show():p(this).hide()})}}),p.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=bH(a,"opacity");return c===""?"1":c}}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":p.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!a||a.nodeType===3||a.nodeType===8||!a.style)return;var f,g,h,i=p.camelCase(c),j=a.style;c=p.cssProps[i]||(p.cssProps[i]=bY(j,i)),h=p.cssHooks[c]||p.cssHooks[i];if(d===b)return h&&"get"in h&&(f=h.get(a,!1,e))!==b?f:j[c];g=typeof d,g==="string"&&(f=bR.exec(d))&&(d=(f[1]+1)*f[2]+parseFloat(p.css(a,c)),g="number");if(d==null||g==="number"&&isNaN(d))return;g==="number"&&!p.cssNumber[i]&&(d+="px");if(!h||!("set"in h)||(d=h.set(a,d,e))!==b)try{j[c]=d}catch(k){}},css:function(a,c,d,e){var f,g,h,i=p.camelCase(c);return c=p.cssProps[i]||(p.cssProps[i]=bY(a.style,i)),h=p.cssHooks[c]||p.cssHooks[i],h&&"get"in h&&(f=h.get(a,!0,e)),f===b&&(f=bH(a,c)),f==="normal"&&c in bU&&(f=bU[c]),d||e!==b?(g=parseFloat(f),d||p.isNumeric(g)?g||0:f):f},swap:function(a,b,c){var d,e,f={};for(e in b)f[e]=a.style[e],a.style[e]=b[e];d=c.call(a);for(e in b)a.style[e]=f[e];return d}}),a.getComputedStyle?bH=function(b,c){var d,e,f,g,h=a.getComputedStyle(b,null),i=b.style;return h&&(d=h[c],d===""&&!p.contains(b.ownerDocument,b)&&(d=p.style(b,c)),bQ.test(d)&&bO.test(c)&&(e=i.width,f=i.minWidth,g=i.maxWidth,i.minWidth=i.maxWidth=i.width=d,d=h.width,i.width=e,i.minWidth=f,i.maxWidth=g)),d}:e.documentElement.currentStyle&&(bH=function(a,b){var c,d,e=a.currentStyle&&a.currentStyle[b],f=a.style;return e==null&&f&&f[b]&&(e=f[b]),bQ.test(e)&&!bM.test(b)&&(c=f.left,d=a.runtimeStyle&&a.runtimeStyle.left,d&&(a.runtimeStyle.left=a.currentStyle.left),f.left=b==="fontSize"?"1em":e,e=f.pixelLeft+"px",f.left=c,d&&(a.runtimeStyle.left=d)),e===""?"auto":e}),p.each(["height","width"],function(a,b){p.cssHooks[b]={get:function(a,c,d){if(c)return a.offsetWidth===0&&bN.test(bH(a,"display"))?p.swap(a,bT,function(){return cb(a,b,d)}):cb(a,b,d)},set:function(a,c,d){return b_(a,c,d?ca(a,b,d,p.support.boxSizing&&p.css(a,"boxSizing")==="border-box"):0)}}}),p.support.opacity||(p.cssHooks.opacity={get:function(a,b){return bL.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=p.isNumeric(b)?"alpha(opacity="+b*100+")":"",f=d&&d.filter||c.filter||"";c.zoom=1;if(b>=1&&p.trim(f.replace(bK,""))===""&&c.removeAttribute){c.removeAttribute("filter");if(d&&!d.filter)return}c.filter=bK.test(f)?f.replace(bK,e):f+" "+e}}),p(function(){p.support.reliableMarginRight||(p.cssHooks.marginRight={get:function(a,b){return p.swap(a,{display:"inline-block"},function(){if(b)return bH(a,"marginRight")})}}),!p.support.pixelPosition&&p.fn.position&&p.each(["top","left"],function(a,b){p.cssHooks[b]={get:function(a,c){if(c){var d=bH(a,b);return bQ.test(d)?p(a).position()[b]+"px":d}}}})}),p.expr&&p.expr.filters&&(p.expr.filters.hidden=function(a){return a.offsetWidth===0&&a.offsetHeight===0||!p.support.reliableHiddenOffsets&&(a.style&&a.style.display||bH(a,"display"))==="none"},p.expr.filters.visible=function(a){return!p.expr.filters.hidden(a)}),p.each({margin:"",padding:"",border:"Width"},function(a,b){p.cssHooks[a+b]={expand:function(c){var d,e=typeof c=="string"?c.split(" "):[c],f={};for(d=0;d<4;d++)f[a+bV[d]+b]=e[d]||e[d-2]||e[0];return f}},bO.test(a)||(p.cssHooks[a+b].set=b_)});var cd=/%20/g,ce=/\[\]$/,cf=/\r?\n/g,cg=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,ch=/^(?:select|textarea)/i;p.fn.extend({serialize:function(){return p.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?p.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||ch.test(this.nodeName)||cg.test(this.type))}).map(function(a,b){var c=p(this).val();return c==null?null:p.isArray(c)?p.map(c,function(a,c){return{name:b.name,value:a.replace(cf,"\r\n")}}):{name:b.name,value:c.replace(cf,"\r\n")}}).get()}}),p.param=function(a,c){var d,e=[],f=function(a,b){b=p.isFunction(b)?b():b==null?"":b,e[e.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=p.ajaxSettings&&p.ajaxSettings.traditional);if(p.isArray(a)||a.jquery&&!p.isPlainObject(a))p.each(a,function(){f(this.name,this.value)});else for(d in a)ci(d,a[d],c,f);return e.join("&").replace(cd,"+")};var cj,ck,cl=/#.*$/,cm=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,cn=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,co=/^(?:GET|HEAD)$/,cp=/^\/\//,cq=/\?/,cr=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,cs=/([?&])_=[^&]*/,ct=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,cu=p.fn.load,cv={},cw={},cx=["*/"]+["*"];try{ck=f.href}catch(cy){ck=e.createElement("a"),ck.href="",ck=ck.href}cj=ct.exec(ck.toLowerCase())||[],p.fn.load=function(a,c,d){if(typeof a!="string"&&cu)return cu.apply(this,arguments);if(!this.length)return this;var e,f,g,h=this,i=a.indexOf(" ");return i>=0&&(e=a.slice(i,a.length),a=a.slice(0,i)),p.isFunction(c)?(d=c,c=b):c&&typeof c=="object"&&(f="POST"),p.ajax({url:a,type:f,dataType:"html",data:c,complete:function(a,b){d&&h.each(d,g||[a.responseText,b,a])}}).done(function(a){g=arguments,h.html(e?p("<div>").append(a.replace(cr,"")).find(e):a)}),this},p.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){p.fn[b]=function(a){return this.on(b,a)}}),p.each(["get","post"],function(a,c){p[c]=function(a,d,e,f){return p.isFunction(d)&&(f=f||e,e=d,d=b),p.ajax({type:c,url:a,data:d,success:e,dataType:f})}}),p.extend({getScript:function(a,c){return p.get(a,b,c,"script")},getJSON:function(a,b,c){return p.get(a,b,c,"json")},ajaxSetup:function(a,b){return b?cB(a,p.ajaxSettings):(b=a,a=p.ajaxSettings),cB(a,b),a},ajaxSettings:{url:ck,isLocal:cn.test(cj[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":cx},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":p.parseJSON,"text xml":p.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:cz(cv),ajaxTransport:cz(cw),ajax:function(a,c){function y(a,c,f,i){var k,s,t,u,w,y=c;if(v===2)return;v=2,h&&clearTimeout(h),g=b,e=i||"",x.readyState=a>0?4:0,f&&(u=cC(l,x,f));if(a>=200&&a<300||a===304)l.ifModified&&(w=x.getResponseHeader("Last-Modified"),w&&(p.lastModified[d]=w),w=x.getResponseHeader("Etag"),w&&(p.etag[d]=w)),a===304?(y="notmodified",k=!0):(k=cD(l,u),y=k.state,s=k.data,t=k.error,k=!t);else{t=y;if(!y||a)y="error",a<0&&(a=0)}x.status=a,x.statusText=(c||y)+"",k?o.resolveWith(m,[s,y,x]):o.rejectWith(m,[x,y,t]),x.statusCode(r),r=b,j&&n.trigger("ajax"+(k?"Success":"Error"),[x,l,k?s:t]),q.fireWith(m,[x,y]),j&&(n.trigger("ajaxComplete",[x,l]),--p.active||p.event.trigger("ajaxStop"))}typeof a=="object"&&(c=a,a=b),c=c||{};var d,e,f,g,h,i,j,k,l=p.ajaxSetup({},c),m=l.context||l,n=m!==l&&(m.nodeType||m instanceof p)?p(m):p.event,o=p.Deferred(),q=p.Callbacks("once memory"),r=l.statusCode||{},t={},u={},v=0,w="canceled",x={readyState:0,setRequestHeader:function(a,b){if(!v){var c=a.toLowerCase();a=u[c]=u[c]||a,t[a]=b}return this},getAllResponseHeaders:function(){return v===2?e:null},getResponseHeader:function(a){var c;if(v===2){if(!f){f={};while(c=cm.exec(e))f[c[1].toLowerCase()]=c[2]}c=f[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){return v||(l.mimeType=a),this},abort:function(a){return a=a||w,g&&g.abort(a),y(0,a),this}};o.promise(x),x.success=x.done,x.error=x.fail,x.complete=q.add,x.statusCode=function(a){if(a){var b;if(v<2)for(b in a)r[b]=[r[b],a[b]];else b=a[x.status],x.always(b)}return this},l.url=((a||l.url)+"").replace(cl,"").replace(cp,cj[1]+"//"),l.dataTypes=p.trim(l.dataType||"*").toLowerCase().split(s),l.crossDomain==null&&(i=ct.exec(l.url.toLowerCase())||!1,l.crossDomain=i&&i.join(":")+(i[3]?"":i[1]==="http:"?80:443)!==cj.join(":")+(cj[3]?"":cj[1]==="http:"?80:443)),l.data&&l.processData&&typeof l.data!="string"&&(l.data=p.param(l.data,l.traditional)),cA(cv,l,c,x);if(v===2)return x;j=l.global,l.type=l.type.toUpperCase(),l.hasContent=!co.test(l.type),j&&p.active++===0&&p.event.trigger("ajaxStart");if(!l.hasContent){l.data&&(l.url+=(cq.test(l.url)?"&":"?")+l.data,delete l.data),d=l.url;if(l.cache===!1){var z=p.now(),A=l.url.replace(cs,"$1_="+z);l.url=A+(A===l.url?(cq.test(l.url)?"&":"?")+"_="+z:"")}}(l.data&&l.hasContent&&l.contentType!==!1||c.contentType)&&x.setRequestHeader("Content-Type",l.contentType),l.ifModified&&(d=d||l.url,p.lastModified[d]&&x.setRequestHeader("If-Modified-Since",p.lastModified[d]),p.etag[d]&&x.setRequestHeader("If-None-Match",p.etag[d])),x.setRequestHeader("Accept",l.dataTypes[0]&&l.accepts[l.dataTypes[0]]?l.accepts[l.dataTypes[0]]+(l.dataTypes[0]!=="*"?", "+cx+"; q=0.01":""):l.accepts["*"]);for(k in l.headers)x.setRequestHeader(k,l.headers[k]);if(!l.beforeSend||l.beforeSend.call(m,x,l)!==!1&&v!==2){w="abort";for(k in{success:1,error:1,complete:1})x[k](l[k]);g=cA(cw,l,c,x);if(!g)y(-1,"No Transport");else{x.readyState=1,j&&n.trigger("ajaxSend",[x,l]),l.async&&l.timeout>0&&(h=setTimeout(function(){x.abort("timeout")},l.timeout));try{v=1,g.send(t,y)}catch(B){if(v<2)y(-1,B);else throw B}}return x}return x.abort()},active:0,lastModified:{},etag:{}});var cE=[],cF=/\?/,cG=/(=)\?(?=&|$)|\?\?/,cH=p.now();p.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=cE.pop()||p.expando+"_"+cH++;return this[a]=!0,a}}),p.ajaxPrefilter("json jsonp",function(c,d,e){var f,g,h,i=c.data,j=c.url,k=c.jsonp!==!1,l=k&&cG.test(j),m=k&&!l&&typeof i=="string"&&!(c.contentType||"").indexOf("application/x-www-form-urlencoded")&&cG.test(i);if(c.dataTypes[0]==="jsonp"||l||m)return f=c.jsonpCallback=p.isFunction(c.jsonpCallback)?c.jsonpCallback():c.jsonpCallback,g=a[f],l?c.url=j.replace(cG,"$1"+f):m?c.data=i.replace(cG,"$1"+f):k&&(c.url+=(cF.test(j)?"&":"?")+c.jsonp+"="+f),c.converters["script json"]=function(){return h||p.error(f+" was not called"),h[0]},c.dataTypes[0]="json",a[f]=function(){h=arguments},e.always(function(){a[f]=g,c[f]&&(c.jsonpCallback=d.jsonpCallback,cE.push(f)),h&&p.isFunction(g)&&g(h[0]),h=g=b}),"script"}),p.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){return p.globalEval(a),a}}}),p.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),p.ajaxTransport("script",function(a){if(a.crossDomain){var c,d=e.head||e.getElementsByTagName("head")[0]||e.documentElement;return{send:function(f,g){c=e.createElement("script"),c.async="async",a.scriptCharset&&(c.charset=a.scriptCharset),c.src=a.url,c.onload=c.onreadystatechange=function(a,e){if(e||!c.readyState||/loaded|complete/.test(c.readyState))c.onload=c.onreadystatechange=null,d&&c.parentNode&&d.removeChild(c),c=b,e||g(200,"success")},d.insertBefore(c,d.firstChild)},abort:function(){c&&c.onload(0,1)}}}});var cI,cJ=a.ActiveXObject?function(){for(var a in cI)cI[a](0,1)}:!1,cK=0;p.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&cL()||cM()}:cL,function(a){p.extend(p.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(p.ajaxSettings.xhr()),p.support.ajax&&p.ajaxTransport(function(c){if(!c.crossDomain||p.support.cors){var d;return{send:function(e,f){var g,h,i=c.xhr();c.username?i.open(c.type,c.url,c.async,c.username,c.password):i.open(c.type,c.url,c.async);if(c.xhrFields)for(h in c.xhrFields)i[h]=c.xhrFields[h];c.mimeType&&i.overrideMimeType&&i.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(h in e)i.setRequestHeader(h,e[h])}catch(j){}i.send(c.hasContent&&c.data||null),d=function(a,e){var h,j,k,l,m;try{if(d&&(e||i.readyState===4)){d=b,g&&(i.onreadystatechange=p.noop,cJ&&delete cI[g]);if(e)i.readyState!==4&&i.abort();else{h=i.status,k=i.getAllResponseHeaders(),l={},m=i.responseXML,m&&m.documentElement&&(l.xml=m);try{l.text=i.responseText}catch(a){}try{j=i.statusText}catch(n){j=""}!h&&c.isLocal&&!c.crossDomain?h=l.text?200:404:h===1223&&(h=204)}}}catch(o){e||f(-1,o)}l&&f(h,j,l,k)},c.async?i.readyState===4?setTimeout(d,0):(g=++cK,cJ&&(cI||(cI={},p(a).unload(cJ)),cI[g]=d),i.onreadystatechange=d):d()},abort:function(){d&&d(0,1)}}}});var cN,cO,cP=/^(?:toggle|show|hide)$/,cQ=new RegExp("^(?:([-+])=|)("+q+")([a-z%]*)$","i"),cR=/queueHooks$/,cS=[cY],cT={"*":[function(a,b){var c,d,e=this.createTween(a,b),f=cQ.exec(b),g=e.cur(),h=+g||0,i=1,j=20;if(f){c=+f[2],d=f[3]||(p.cssNumber[a]?"":"px");if(d!=="px"&&h){h=p.css(e.elem,a,!0)||c||1;do i=i||".5",h=h/i,p.style(e.elem,a,h+d);while(i!==(i=e.cur()/g)&&i!==1&&--j)}e.unit=d,e.start=h,e.end=f[1]?h+(f[1]+1)*c:c}return e}]};p.Animation=p.extend(cW,{tweener:function(a,b){p.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");var c,d=0,e=a.length;for(;d<e;d++)c=a[d],cT[c]=cT[c]||[],cT[c].unshift(b)},prefilter:function(a,b){b?cS.unshift(a):cS.push(a)}}),p.Tween=cZ,cZ.prototype={constructor:cZ,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(p.cssNumber[c]?"":"px")},cur:function(){var a=cZ.propHooks[this.prop];return a&&a.get?a.get(this):cZ.propHooks._default.get(this)},run:function(a){var b,c=cZ.propHooks[this.prop];return this.options.duration?this.pos=b=p.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):cZ.propHooks._default.set(this),this}},cZ.prototype.init.prototype=cZ.prototype,cZ.propHooks={_default:{get:function(a){var b;return a.elem[a.prop]==null||!!a.elem.style&&a.elem.style[a.prop]!=null?(b=p.css(a.elem,a.prop,!1,""),!b||b==="auto"?0:b):a.elem[a.prop]},set:function(a){p.fx.step[a.prop]?p.fx.step[a.prop](a):a.elem.style&&(a.elem.style[p.cssProps[a.prop]]!=null||p.cssHooks[a.prop])?p.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},cZ.propHooks.scrollTop=cZ.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},p.each(["toggle","show","hide"],function(a,b){var c=p.fn[b];p.fn[b]=function(d,e,f){return d==null||typeof d=="boolean"||!a&&p.isFunction(d)&&p.isFunction(e)?c.apply(this,arguments):this.animate(c$(b,!0),d,e,f)}}),p.fn.extend({fadeTo:function(a,b,c,d){return this.filter(bZ).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=p.isEmptyObject(a),f=p.speed(b,c,d),g=function(){var b=cW(this,p.extend({},a),f);e&&b.stop(!0)};return e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,c,d){var e=function(a){var b=a.stop;delete a.stop,b(d)};return typeof a!="string"&&(d=c,c=a,a=b),c&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,c=a!=null&&a+"queueHooks",f=p.timers,g=p._data(this);if(c)g[c]&&g[c].stop&&e(g[c]);else for(c in g)g[c]&&g[c].stop&&cR.test(c)&&e(g[c]);for(c=f.length;c--;)f[c].elem===this&&(a==null||f[c].queue===a)&&(f[c].anim.stop(d),b=!1,f.splice(c,1));(b||!d)&&p.dequeue(this,a)})}}),p.each({slideDown:c$("show"),slideUp:c$("hide"),slideToggle:c$("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){p.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),p.speed=function(a,b,c){var d=a&&typeof a=="object"?p.extend({},a):{complete:c||!c&&b||p.isFunction(a)&&a,duration:a,easing:c&&b||b&&!p.isFunction(b)&&b};d.duration=p.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in p.fx.speeds?p.fx.speeds[d.duration]:p.fx.speeds._default;if(d.queue==null||d.queue===!0)d.queue="fx";return d.old=d.complete,d.complete=function(){p.isFunction(d.old)&&d.old.call(this),d.queue&&p.dequeue(this,d.queue)},d},p.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},p.timers=[],p.fx=cZ.prototype.init,p.fx.tick=function(){var a,b=p.timers,c=0;for(;c<b.length;c++)a=b[c],!a()&&b[c]===a&&b.splice(c--,1);b.length||p.fx.stop()},p.fx.timer=function(a){a()&&p.timers.push(a)&&!cO&&(cO=setInterval(p.fx.tick,p.fx.interval))},p.fx.interval=13,p.fx.stop=function(){clearInterval(cO),cO=null},p.fx.speeds={slow:600,fast:200,_default:400},p.fx.step={},p.expr&&p.expr.filters&&(p.expr.filters.animated=function(a){return p.grep(p.timers,function(b){return a===b.elem}).length});var c_=/^(?:body|html)$/i;p.fn.offset=function(a){if(arguments.length)return a===b?this:this.each(function(b){p.offset.setOffset(this,a,b)});var c,d,e,f,g,h,i,j={top:0,left:0},k=this[0],l=k&&k.ownerDocument;if(!l)return;return(d=l.body)===k?p.offset.bodyOffset(k):(c=l.documentElement,p.contains(c,k)?(typeof k.getBoundingClientRect!="undefined"&&(j=k.getBoundingClientRect()),e=da(l),f=c.clientTop||d.clientTop||0,g=c.clientLeft||d.clientLeft||0,h=e.pageYOffset||c.scrollTop,i=e.pageXOffset||c.scrollLeft,{top:j.top+h-f,left:j.left+i-g}):j)},p.offset={bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;return p.support.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(p.css(a,"marginTop"))||0,c+=parseFloat(p.css(a,"marginLeft"))||0),{top:b,left:c}},setOffset:function(a,b,c){var d=p.css(a,"position");d==="static"&&(a.style.position="relative");var e=p(a),f=e.offset(),g=p.css(a,"top"),h=p.css(a,"left"),i=(d==="absolute"||d==="fixed")&&p.inArray("auto",[g,h])>-1,j={},k={},l,m;i?(k=e.position(),l=k.top,m=k.left):(l=parseFloat(g)||0,m=parseFloat(h)||0),p.isFunction(b)&&(b=b.call(a,c,f)),b.top!=null&&(j.top=b.top-f.top+l),b.left!=null&&(j.left=b.left-f.left+m),"using"in b?b.using.call(a,j):e.css(j)}},p.fn.extend({position:function(){if(!this[0])return;var a=this[0],b=this.offsetParent(),c=this.offset(),d=c_.test(b[0].nodeName)?{top:0,left:0}:b.offset();return c.top-=parseFloat(p.css(a,"marginTop"))||0,c.left-=parseFloat(p.css(a,"marginLeft"))||0,d.top+=parseFloat(p.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(p.css(b[0],"borderLeftWidth"))||0,{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||e.body;while(a&&!c_.test(a.nodeName)&&p.css(a,"position")==="static")a=a.offsetParent;return a||e.body})}}),p.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,c){var d=/Y/.test(c);p.fn[a]=function(e){return p.access(this,function(a,e,f){var g=da(a);if(f===b)return g?c in g?g[c]:g.document.documentElement[e]:a[e];g?g.scrollTo(d?p(g).scrollLeft():f,d?f:p(g).scrollTop()):a[e]=f},a,e,arguments.length,null)}}),p.each({Height:"height",Width:"width"},function(a,c){p.each({padding:"inner"+a,content:c,"":"outer"+a},function(d,e){p.fn[e]=function(e,f){var g=arguments.length&&(d||typeof e!="boolean"),h=d||(e===!0||f===!0?"margin":"border");return p.access(this,function(c,d,e){var f;return p.isWindow(c)?c.document.documentElement["client"+a]:c.nodeType===9?(f=c.documentElement,Math.max(c.body["scroll"+a],f["scroll"+a],c.body["offset"+a],f["offset"+a],f["client"+a])):e===b?p.css(c,d,e,h):p.style(c,d,e,h)},c,g?e:b,g,null)}})}),a.jQuery=a.$=p,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return p})})(window);

/**
    Head JS     The only script in your <HEAD>
    Copyright   Tero Piirainen (tipiirai)
    License     MIT / http://bit.ly/mit-license
    Version     0.96

    http://headjs.com
*/(function(a){function z(){d||(d=!0,s(e,function(a){p(a)}))}function y(c,d){var e=a.createElement("script");e.type="text/"+(c.type||"javascript"),e.src=c.src||c,e.async=!1,e.onreadystatechange=e.onload=function(){var a=e.readyState;!d.done&&(!a||/loaded|complete/.test(a))&&(d.done=!0,d())},(a.body||b).appendChild(e)}function x(a,b){if(a.state==o)return b&&b();if(a.state==n)return k.ready(a.name,b);if(a.state==m)return a.onpreload.push(function(){x(a,b)});a.state=n,y(a.url,function(){a.state=o,b&&b(),s(g[a.name],function(a){p(a)}),u()&&d&&s(g.ALL,function(a){p(a)})})}function w(a,b){a.state===undefined&&(a.state=m,a.onpreload=[],y({src:a.url,type:"cache"},function(){v(a)}))}function v(a){a.state=l,s(a.onpreload,function(a){a.call()})}function u(a){a=a||h;var b;for(var c in a){if(a.hasOwnProperty(c)&&a[c].state!=o)return!1;b=!0}return b}function t(a){return Object.prototype.toString.call(a)=="[object Function]"}function s(a,b){if(!!a){typeof a=="object"&&(a=[].slice.call(a));for(var c=0;c<a.length;c++)b.call(a,a[c],c)}}function r(a){var b;if(typeof a=="object")for(var c in a)a[c]&&(b={name:c,url:a[c]});else b={name:q(a),url:a};var d=h[b.name];if(d&&d.url===b.url)return d;h[b.name]=b;return b}function q(a){var b=a.split("/"),c=b[b.length-1],d=c.indexOf("?");return d!=-1?c.substring(0,d):c}function p(a){a._done||(a(),a._done=1)}var b=a.documentElement,c,d,e=[],f=[],g={},h={},i=a.createElement("script").async===!0||"MozAppearance"in a.documentElement.style||window.opera,j=window.head_conf&&head_conf.head||"head",k=window[j]=window[j]||function(){k.ready.apply(null,arguments)},l=1,m=2,n=3,o=4;i?k.js=function(){var a=arguments,b=a[a.length-1],c={};t(b)||(b=null),s(a,function(d,e){d!=b&&(d=r(d),c[d.name]=d,x(d,b&&e==a.length-2?function(){u(c)&&p(b)}:null))});return k}:k.js=function(){var a=arguments,b=[].slice.call(a,1),d=b[0];if(!c){f.push(function(){k.js.apply(null,a)});return k}d?(s(b,function(a){t(a)||w(r(a))}),x(r(a[0]),t(d)?d:function(){k.js.apply(null,b)})):x(r(a[0]));return k},k.ready=function(b,c){if(b==a){d?p(c):e.push(c);return k}t(b)&&(c=b,b="ALL");if(typeof b!="string"||!t(c))return k;var f=h[b];if(f&&f.state==o||b=="ALL"&&u()&&d){p(c);return k}var i=g[b];i?i.push(c):i=g[b]=[c];return k},k.ready(a,function(){u()&&s(g.ALL,function(a){p(a)}),k.feature&&k.feature("domloaded",!0)});if(window.addEventListener)a.addEventListener("DOMContentLoaded",z,!1),window.addEventListener("load",z,!1);else if(window.attachEvent){a.attachEvent("onreadystatechange",function(){a.readyState==="complete"&&z()});var A=1;try{A=window.frameElement}catch(B){}!A&&b.doScroll&&function(){try{b.doScroll("left"),z()}catch(a){setTimeout(arguments.callee,1);return}}(),window.attachEvent("onload",z)}!a.readyState&&a.addEventListener&&(a.readyState="loading",a.addEventListener("DOMContentLoaded",handler=function(){a.removeEventListener("DOMContentLoaded",handler,!1),a.readyState="complete"},!1)),setTimeout(function(){c=!0,s(f,function(a){a()})},300)})(document)
/*!
 * reveal.js
 * http://lab.hakim.se/reveal-js
 * MIT licensed
 *
 * Copyright (C) 2013 Hakim El Hattab, http://hakim.se
 */
var Reveal = (function(){

	'use strict';

	var SLIDES_SELECTOR = '.reveal .slides section',
		HORIZONTAL_SLIDES_SELECTOR = '.reveal .slides>section',
		VERTICAL_SLIDES_SELECTOR = '.reveal .slides>section.present>section',
		HOME_SLIDE_SELECTOR = '.reveal .slides>section:first-of-type',

		// Configurations defaults, can be overridden at initialization time
		config = {

			// The "normal" size of the presentation, aspect ratio will be preserved
			// when the presentation is scaled to fit different resolutions
			width: 960,
			height: 700,

			// Factor of the display size that should remain empty around the content
			margin: 0.1,

			// Bounds for smallest/largest possible scale to apply to content
			minScale: 0.2,
			maxScale: 1.0,

			// Display controls in the bottom right corner
			controls: true,

			// Display a presentation progress bar
			progress: true,

			// Display the page number of the current slide
			slideNumber: false,

			// Push each slide change to the browser history
			history: false,

			// Enable keyboard shortcuts for navigation
			keyboard: true,

			// Enable the slide overview mode
			overview: true,

			// Vertical centering of slides
			center: true,

			// Enables touch navigation on devices with touch input
			touch: true,

			// Loop the presentation
			loop: false,

			// Change the presentation direction to be RTL
			rtl: false,

			// Turns fragments on and off globally
			fragments: true,

			// Flags if the presentation is running in an embedded mode,
			// i.e. contained within a limited portion of the screen
			embedded: false,

			// Number of milliseconds between automatically proceeding to the
			// next slide, disabled when set to 0, this value can be overwritten
			// by using a data-autoslide attribute on your slides
			autoSlide: 0,

			// Stop auto-sliding after user input
			autoSlideStoppable: true,

			// Enable slide navigation via mouse wheel
			mouseWheel: false,

			// Apply a 3D roll to links on hover
			rollingLinks: false,

			// Hides the address bar on mobile devices
			hideAddressBar: true,

			// Opens links in an iframe preview overlay
			previewLinks: false,

			// Focuses body when page changes visiblity to ensure keyboard shortcuts work
			focusBodyOnPageVisiblityChange: true,

			// Theme (see /css/theme)
			theme: null,

			// Transition style
			transition: 'default', // default/cube/page/concave/zoom/linear/fade/none

			// Transition speed
			transitionSpeed: 'default', // default/fast/slow

			// Transition style for full page slide backgrounds
			backgroundTransition: 'default', // default/linear/none

			// Parallax background image
			parallaxBackgroundImage: '', // CSS syntax, e.g. "a.jpg"

			// Parallax background size
			parallaxBackgroundSize: '', // CSS syntax, e.g. "3000px 2000px"

			// Number of slides away from the current that are visible
			viewDistance: 3,

			// Script dependencies to load
			dependencies: []

		},

		// Flags if reveal.js is loaded (has dispatched the 'ready' event)
		loaded = false,

		// The horizontal and vertical index of the currently active slide
		indexh,
		indexv,

		// The previous and current slide HTML elements
		previousSlide,
		currentSlide,

		previousBackground,

		// Slides may hold a data-state attribute which we pick up and apply
		// as a class to the body. This list contains the combined state of
		// all current slides.
		state = [],

		// The current scale of the presentation (see width/height config)
		scale = 1,

		// Cached references to DOM elements
		dom = {},

		// Features supported by the browser, see #checkCapabilities()
		features = {},

		// Client is a mobile device, see #checkCapabilities()
		isMobileDevice,

		// Throttles mouse wheel navigation
		lastMouseWheelStep = 0,

		// Delays updates to the URL due to a Chrome thumbnailer bug
		writeURLTimeout = 0,

		// A delay used to activate the overview mode
		activateOverviewTimeout = 0,

		// A delay used to deactivate the overview mode
		deactivateOverviewTimeout = 0,

		// Flags if the interaction event listeners are bound
		eventsAreBound = false,

		// The current auto-slide duration
		autoSlide = 0,

		// Auto slide properties
		autoSlidePlayer,
		autoSlideTimeout = 0,
		autoSlideStartTime = -1,
		autoSlidePaused = false,

		// Holds information about the currently ongoing touch input
		touch = {
			startX: 0,
			startY: 0,
			startSpan: 0,
			startCount: 0,
			captured: false,
			threshold: 40
		};

	/**
	 * Starts up the presentation if the client is capable.
	 */
	function initialize( options ) {

		checkCapabilities();

		if( !features.transforms2d && !features.transforms3d ) {
			document.body.setAttribute( 'class', 'no-transforms' );

			// If the browser doesn't support core features we won't be
			// using JavaScript to control the presentation
			return;
		}

		// Force a layout when the whole page, incl fonts, has loaded
		window.addEventListener( 'load', layout, false );

		var query = Reveal.getQueryHash();

		// Do not accept new dependencies via query config to avoid
		// the potential of malicious script injection
		if( typeof query['dependencies'] !== 'undefined' ) delete query['dependencies'];

		// Copy options over to our config object
		extend( config, options );
		extend( config, query );

		// Hide the address bar in mobile browsers
		hideAddressBar();

		// Loads the dependencies and continues to #start() once done
		load();

	}

	/**
	 * Inspect the client to see what it's capable of, this
	 * should only happens once per runtime.
	 */
	function checkCapabilities() {

		features.transforms3d = 'WebkitPerspective' in document.body.style ||
								'MozPerspective' in document.body.style ||
								'msPerspective' in document.body.style ||
								'OPerspective' in document.body.style ||
								'perspective' in document.body.style;

		features.transforms2d = 'WebkitTransform' in document.body.style ||
								'MozTransform' in document.body.style ||
								'msTransform' in document.body.style ||
								'OTransform' in document.body.style ||
								'transform' in document.body.style;

		features.requestAnimationFrameMethod = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame;
		features.requestAnimationFrame = typeof features.requestAnimationFrameMethod === 'function';

		features.canvas = !!document.createElement( 'canvas' ).getContext;

		isMobileDevice = navigator.userAgent.match( /(iphone|ipod|android)/gi );

	}


    /**
     * Loads the dependencies of reveal.js. Dependencies are
     * defined via the configuration option 'dependencies'
     * and will be loaded prior to starting/binding reveal.js.
     * Some dependencies may have an 'async' flag, if so they
     * will load after reveal.js has been started up.
     */
	function load() {

		var scripts = [],
			scriptsAsync = [],
			scriptsToPreload = 0;

		// Called once synchronous scripts finish loading
		function proceed() {
			if( scriptsAsync.length ) {
				// Load asynchronous scripts
				head.js.apply( null, scriptsAsync );
			}

			start();
		}

		function loadScript( s ) {
			head.ready( s.src.match( /([\w\d_\-]*)\.?js$|[^\\\/]*$/i )[0], function() {
				// Extension may contain callback functions
				if( typeof s.callback === 'function' ) {
					s.callback.apply( this );
				}

				if( --scriptsToPreload === 0 ) {
					proceed();
				}
			});
		}

		for( var i = 0, len = config.dependencies.length; i < len; i++ ) {
			var s = config.dependencies[i];

			// Load if there's no condition or the condition is truthy
			if( !s.condition || s.condition() ) {
				if( s.async ) {
					scriptsAsync.push( s.src );
				}
				else {
					scripts.push( s.src );
				}

				loadScript( s );
			}
		}

		if( scripts.length ) {
			scriptsToPreload = scripts.length;

			// Load synchronous scripts
			head.js.apply( null, scripts );
		}
		else {
			proceed();
		}

	}

	/**
	 * Starts up reveal.js by binding input events and navigating
	 * to the current URL deeplink if there is one.
	 */
	function start() {

		// Make sure we've got all the DOM elements we need
		setupDOM();

		// Resets all vertical slides so that only the first is visible
		resetVerticalSlides();

		// Updates the presentation to match the current configuration values
		configure();

		// Read the initial hash
		readURL();

		// Update all backgrounds
		updateBackground( true );

		// Notify listeners that the presentation is ready but use a 1ms
		// timeout to ensure it's not fired synchronously after #initialize()
		setTimeout( function() {
			// Enable transitions now that we're loaded
			dom.slides.classList.remove( 'no-transition' );

			loaded = true;

			dispatchEvent( 'ready', {
				'indexh': indexh,
				'indexv': indexv,
				'currentSlide': currentSlide
			} );
		}, 1 );

	}

	/**
	 * Finds and stores references to DOM elements which are
	 * required by the presentation. If a required element is
	 * not found, it is created.
	 */
	function setupDOM() {

		// Cache references to key DOM elements
		dom.theme = document.querySelector( '#theme' );
		dom.wrapper = document.querySelector( '.reveal' );
		dom.slides = document.querySelector( '.reveal .slides' );

		// Prevent transitions while we're loading
		dom.slides.classList.add( 'no-transition' );

		// Background element
		dom.background = createSingletonNode( dom.wrapper, 'div', 'backgrounds', null );

		// Progress bar
		dom.progress = createSingletonNode( dom.wrapper, 'div', 'progress', '<span></span>' );
		dom.progressbar = dom.progress.querySelector( 'span' );

		// Arrow controls
		createSingletonNode( dom.wrapper, 'aside', 'controls',
			'<div class="navigate-left"></div>' +
			'<div class="navigate-right"></div>' +
			'<div class="navigate-up"></div>' +
			'<div class="navigate-down"></div>' );

		// Slide number
		dom.slideNumber = createSingletonNode( dom.wrapper, 'div', 'slide-number', '' );

		// State background element [DEPRECATED]
		createSingletonNode( dom.wrapper, 'div', 'state-background', null );

		// Overlay graphic which is displayed during the paused mode
		createSingletonNode( dom.wrapper, 'div', 'pause-overlay', null );

		// Cache references to elements
		dom.controls = document.querySelector( '.reveal .controls' );

		// There can be multiple instances of controls throughout the page
		dom.controlsLeft = toArray( document.querySelectorAll( '.navigate-left' ) );
		dom.controlsRight = toArray( document.querySelectorAll( '.navigate-right' ) );
		dom.controlsUp = toArray( document.querySelectorAll( '.navigate-up' ) );
		dom.controlsDown = toArray( document.querySelectorAll( '.navigate-down' ) );
		dom.controlsPrev = toArray( document.querySelectorAll( '.navigate-prev' ) );
		dom.controlsNext = toArray( document.querySelectorAll( '.navigate-next' ) );

	}

	/**
	 * Creates an HTML element and returns a reference to it.
	 * If the element already exists the existing instance will
	 * be returned.
	 */
	function createSingletonNode( container, tagname, classname, innerHTML ) {

		var node = container.querySelector( '.' + classname );
		if( !node ) {
			node = document.createElement( tagname );
			node.classList.add( classname );
			if( innerHTML !== null ) {
				node.innerHTML = innerHTML;
			}
			container.appendChild( node );
		}
		return node;

	}

	/**
	 * Creates the slide background elements and appends them
	 * to the background container. One element is created per
	 * slide no matter if the given slide has visible background.
	 */
	function createBackgrounds() {

		if( isPrintingPDF() ) {
			document.body.classList.add( 'print-pdf' );
		}

		// Clear prior backgrounds
		dom.background.innerHTML = '';
		dom.background.classList.add( 'no-transition' );

		// Helper method for creating a background element for the
		// given slide
		function _createBackground( slide, container ) {

			var data = {
				background: slide.getAttribute( 'data-background' ),
				backgroundSize: slide.getAttribute( 'data-background-size' ),
				backgroundImage: slide.getAttribute( 'data-background-image' ),
				backgroundColor: slide.getAttribute( 'data-background-color' ),
				backgroundRepeat: slide.getAttribute( 'data-background-repeat' ),
				backgroundPosition: slide.getAttribute( 'data-background-position' ),
				backgroundTransition: slide.getAttribute( 'data-background-transition' )
			};

			var element = document.createElement( 'div' );
			element.className = 'slide-background';

			if( data.background ) {
				// Auto-wrap image urls in url(...)
				if( /^(http|file|\/\/)/gi.test( data.background ) || /\.(svg|png|jpg|jpeg|gif|bmp)$/gi.test( data.background ) ) {
					element.style.backgroundImage = 'url('+ data.background +')';
				}
				else {
					element.style.background = data.background;
				}
			}

			if( data.background || data.backgroundColor || data.backgroundImage ) {
				element.setAttribute( 'data-background-hash', data.background + data.backgroundSize + data.backgroundImage + data.backgroundColor + data.backgroundRepeat + data.backgroundPosition + data.backgroundTransition );
			}

			// Additional and optional background properties
			if( data.backgroundSize ) element.style.backgroundSize = data.backgroundSize;
			if( data.backgroundImage ) element.style.backgroundImage = 'url("' + data.backgroundImage + '")';
			if( data.backgroundColor ) element.style.backgroundColor = data.backgroundColor;
			if( data.backgroundRepeat ) element.style.backgroundRepeat = data.backgroundRepeat;
			if( data.backgroundPosition ) element.style.backgroundPosition = data.backgroundPosition;
			if( data.backgroundTransition ) element.setAttribute( 'data-background-transition', data.backgroundTransition );

			container.appendChild( element );

			return element;

		}

		// Iterate over all horizontal slides
		toArray( document.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR ) ).forEach( function( slideh ) {

			var backgroundStack;

			if( isPrintingPDF() ) {
				backgroundStack = _createBackground( slideh, slideh );
			}
			else {
				backgroundStack = _createBackground( slideh, dom.background );
			}

			// Iterate over all vertical slides
			toArray( slideh.querySelectorAll( 'section' ) ).forEach( function( slidev ) {

				if( isPrintingPDF() ) {
					_createBackground( slidev, slidev );
				}
				else {
					_createBackground( slidev, backgroundStack );
				}

			} );

		} );

		// Add parallax background if specified
		if( config.parallaxBackgroundImage ) {

			dom.background.style.backgroundImage = 'url("' + config.parallaxBackgroundImage + '")';
			dom.background.style.backgroundSize = config.parallaxBackgroundSize;

			// Make sure the below properties are set on the element - these properties are
			// needed for proper transitions to be set on the element via CSS. To remove
			// annoying background slide-in effect when the presentation starts, apply
			// these properties after short time delay
			setTimeout( function() {
				dom.wrapper.classList.add( 'has-parallax-background' );
			}, 1 );

		}
		else {

			dom.background.style.backgroundImage = '';
			dom.wrapper.classList.remove( 'has-parallax-background' );

		}

	}

	/**
	 * Applies the configuration settings from the config
	 * object. May be called multiple times.
	 */
	function configure( options ) {

		var numberOfSlides = document.querySelectorAll( SLIDES_SELECTOR ).length;

		dom.wrapper.classList.remove( config.transition );

		// New config options may be passed when this method
		// is invoked through the API after initialization
		if( typeof options === 'object' ) extend( config, options );

		// Force linear transition based on browser capabilities
		if( features.transforms3d === false ) config.transition = 'linear';

		dom.wrapper.classList.add( config.transition );

		dom.wrapper.setAttribute( 'data-transition-speed', config.transitionSpeed );
		dom.wrapper.setAttribute( 'data-background-transition', config.backgroundTransition );

		dom.controls.style.display = config.controls ? 'block' : 'none';
		dom.progress.style.display = config.progress ? 'block' : 'none';

		if( config.rtl ) {
			dom.wrapper.classList.add( 'rtl' );
		}
		else {
			dom.wrapper.classList.remove( 'rtl' );
		}

		if( config.center ) {
			dom.wrapper.classList.add( 'center' );
		}
		else {
			dom.wrapper.classList.remove( 'center' );
		}

		if( config.mouseWheel ) {
			document.addEventListener( 'DOMMouseScroll', onDocumentMouseScroll, false ); // FF
			document.addEventListener( 'mousewheel', onDocumentMouseScroll, false );
		}
		else {
			document.removeEventListener( 'DOMMouseScroll', onDocumentMouseScroll, false ); // FF
			document.removeEventListener( 'mousewheel', onDocumentMouseScroll, false );
		}

		// Rolling 3D links
		if( config.rollingLinks ) {
			enableRollingLinks();
		}
		else {
			disableRollingLinks();
		}

		// Iframe link previews
		if( config.previewLinks ) {
			enablePreviewLinks();
		}
		else {
			disablePreviewLinks();
			enablePreviewLinks( '[data-preview-link]' );
		}

		// Auto-slide playback controls
		if( numberOfSlides > 1 && config.autoSlide && config.autoSlideStoppable && features.canvas && features.requestAnimationFrame ) {
			autoSlidePlayer = new Playback( dom.wrapper, function() {
				return Math.min( Math.max( ( Date.now() - autoSlideStartTime ) / autoSlide, 0 ), 1 );
			} );

			autoSlidePlayer.on( 'click', onAutoSlidePlayerClick );
			autoSlidePaused = false;
		}
		else if( autoSlidePlayer ) {
			autoSlidePlayer.destroy();
			autoSlidePlayer = null;
		}

		// Load the theme in the config, if it's not already loaded
		if( config.theme && dom.theme ) {
			var themeURL = dom.theme.getAttribute( 'href' );
			var themeFinder = /[^\/]*?(?=\.css)/;
			var themeName = themeURL.match(themeFinder)[0];

			if(  config.theme !== themeName ) {
				themeURL = themeURL.replace(themeFinder, config.theme);
				dom.theme.setAttribute( 'href', themeURL );
			}
		}

		sync();

	}

	/**
	 * Binds all event listeners.
	 */
	function addEventListeners() {

		eventsAreBound = true;

		window.addEventListener( 'hashchange', onWindowHashChange, false );
		window.addEventListener( 'resize', onWindowResize, false );

		if( config.touch ) {
			dom.wrapper.addEventListener( 'touchstart', onTouchStart, false );
			dom.wrapper.addEventListener( 'touchmove', onTouchMove, false );
			dom.wrapper.addEventListener( 'touchend', onTouchEnd, false );

			// Support pointer-style touch interaction as well
			if( window.navigator.msPointerEnabled ) {
				dom.wrapper.addEventListener( 'MSPointerDown', onPointerDown, false );
				dom.wrapper.addEventListener( 'MSPointerMove', onPointerMove, false );
				dom.wrapper.addEventListener( 'MSPointerUp', onPointerUp, false );
			}
		}

		if( config.keyboard ) {
			document.addEventListener( 'keydown', onDocumentKeyDown, false );
		}

		if( config.progress && dom.progress ) {
			dom.progress.addEventListener( 'click', onProgressClicked, false );
		}

		if( config.focusBodyOnPageVisiblityChange ) {
			var visibilityChange;

			if( 'hidden' in document ) {
				visibilityChange = 'visibilitychange';
			}
			else if( 'msHidden' in document ) {
				visibilityChange = 'msvisibilitychange';
			}
			else if( 'webkitHidden' in document ) {
				visibilityChange = 'webkitvisibilitychange';
			}

			if( visibilityChange ) {
				document.addEventListener( visibilityChange, onPageVisibilityChange, false );
			}
		}

		[ 'touchstart', 'click' ].forEach( function( eventName ) {
			dom.controlsLeft.forEach( function( el ) { el.addEventListener( eventName, onNavigateLeftClicked, false ); } );
			dom.controlsRight.forEach( function( el ) { el.addEventListener( eventName, onNavigateRightClicked, false ); } );
			dom.controlsUp.forEach( function( el ) { el.addEventListener( eventName, onNavigateUpClicked, false ); } );
			dom.controlsDown.forEach( function( el ) { el.addEventListener( eventName, onNavigateDownClicked, false ); } );
			dom.controlsPrev.forEach( function( el ) { el.addEventListener( eventName, onNavigatePrevClicked, false ); } );
			dom.controlsNext.forEach( function( el ) { el.addEventListener( eventName, onNavigateNextClicked, false ); } );
		} );

	}

	/**
	 * Unbinds all event listeners.
	 */
	function removeEventListeners() {

		eventsAreBound = false;

		document.removeEventListener( 'keydown', onDocumentKeyDown, false );
		window.removeEventListener( 'hashchange', onWindowHashChange, false );
		window.removeEventListener( 'resize', onWindowResize, false );

		dom.wrapper.removeEventListener( 'touchstart', onTouchStart, false );
		dom.wrapper.removeEventListener( 'touchmove', onTouchMove, false );
		dom.wrapper.removeEventListener( 'touchend', onTouchEnd, false );

		if( window.navigator.msPointerEnabled ) {
			dom.wrapper.removeEventListener( 'MSPointerDown', onPointerDown, false );
			dom.wrapper.removeEventListener( 'MSPointerMove', onPointerMove, false );
			dom.wrapper.removeEventListener( 'MSPointerUp', onPointerUp, false );
		}

		if ( config.progress && dom.progress ) {
			dom.progress.removeEventListener( 'click', onProgressClicked, false );
		}

		[ 'touchstart', 'click' ].forEach( function( eventName ) {
			dom.controlsLeft.forEach( function( el ) { el.removeEventListener( eventName, onNavigateLeftClicked, false ); } );
			dom.controlsRight.forEach( function( el ) { el.removeEventListener( eventName, onNavigateRightClicked, false ); } );
			dom.controlsUp.forEach( function( el ) { el.removeEventListener( eventName, onNavigateUpClicked, false ); } );
			dom.controlsDown.forEach( function( el ) { el.removeEventListener( eventName, onNavigateDownClicked, false ); } );
			dom.controlsPrev.forEach( function( el ) { el.removeEventListener( eventName, onNavigatePrevClicked, false ); } );
			dom.controlsNext.forEach( function( el ) { el.removeEventListener( eventName, onNavigateNextClicked, false ); } );
		} );

	}

	/**
	 * Extend object a with the properties of object b.
	 * If there's a conflict, object b takes precedence.
	 */
	function extend( a, b ) {

		for( var i in b ) {
			a[ i ] = b[ i ];
		}

	}

	/**
	 * Converts the target object to an array.
	 */
	function toArray( o ) {

		return Array.prototype.slice.call( o );

	}

	/**
	 * Measures the distance in pixels between point a
	 * and point b.
	 *
	 * @param {Object} a point with x/y properties
	 * @param {Object} b point with x/y properties
	 */
	function distanceBetween( a, b ) {

		var dx = a.x - b.x,
			dy = a.y - b.y;

		return Math.sqrt( dx*dx + dy*dy );

	}

	/**
	 * Applies a CSS transform to the target element.
	 */
	function transformElement( element, transform ) {

		element.style.WebkitTransform = transform;
		element.style.MozTransform = transform;
		element.style.msTransform = transform;
		element.style.OTransform = transform;
		element.style.transform = transform;

	}

	/**
	 * Retrieves the height of the given element by looking
	 * at the position and height of its immediate children.
	 */
	function getAbsoluteHeight( element ) {

		var height = 0;

		if( element ) {
			var absoluteChildren = 0;

			toArray( element.childNodes ).forEach( function( child ) {

				if( typeof child.offsetTop === 'number' && child.style ) {
					// Count # of abs children
					if( child.style.position === 'absolute' ) {
						absoluteChildren += 1;
					}

					height = Math.max( height, child.offsetTop + child.offsetHeight );
				}

			} );

			// If there are no absolute children, use offsetHeight
			if( absoluteChildren === 0 ) {
				height = element.offsetHeight;
			}

		}

		return height;

	}

	/**
	 * Returns the remaining height within the parent of the
	 * target element after subtracting the height of all
	 * siblings.
	 *
	 * remaining height = [parent height] - [ siblings height]
	 */
	function getRemainingHeight( element, height ) {

		height = height || 0;

		if( element ) {
			var parent = element.parentNode;
			var siblings = parent.childNodes;

			// Subtract the height of each sibling
			toArray( siblings ).forEach( function( sibling ) {

				if( typeof sibling.offsetHeight === 'number' && sibling !== element ) {

					var styles = window.getComputedStyle( sibling ),
						marginTop = parseInt( styles.marginTop, 10 ),
						marginBottom = parseInt( styles.marginBottom, 10 );

					height -= sibling.offsetHeight + marginTop + marginBottom;

				}

			} );

			var elementStyles = window.getComputedStyle( element );

			// Subtract the margins of the target element
			height -= parseInt( elementStyles.marginTop, 10 ) +
						parseInt( elementStyles.marginBottom, 10 );

		}

		return height;

	}

	/**
	 * Checks if this instance is being used to print a PDF.
	 */
	function isPrintingPDF() {

		return ( /print-pdf/gi ).test( window.location.search );

	}

	/**
	 * Hides the address bar if we're on a mobile device.
	 */
	function hideAddressBar() {

		if( config.hideAddressBar && isMobileDevice ) {
			// Events that should trigger the address bar to hide
			window.addEventListener( 'load', removeAddressBar, false );
			window.addEventListener( 'orientationchange', removeAddressBar, false );
		}

	}

	/**
	 * Causes the address bar to hide on mobile devices,
	 * more vertical space ftw.
	 */
	function removeAddressBar() {

		setTimeout( function() {
			window.scrollTo( 0, 1 );
		}, 10 );

	}

	/**
	 * Dispatches an event of the specified type from the
	 * reveal DOM element.
	 */
	function dispatchEvent( type, properties ) {

		var event = document.createEvent( "HTMLEvents", 1, 2 );
		event.initEvent( type, true, true );
		extend( event, properties );
		dom.wrapper.dispatchEvent( event );

	}

	/**
	 * Wrap all links in 3D goodness.
	 */
	function enableRollingLinks() {

		if( features.transforms3d && !( 'msPerspective' in document.body.style ) ) {
			var anchors = document.querySelectorAll( SLIDES_SELECTOR + ' a:not(.image)' );

			for( var i = 0, len = anchors.length; i < len; i++ ) {
				var anchor = anchors[i];

				if( anchor.textContent && !anchor.querySelector( '*' ) && ( !anchor.className || !anchor.classList.contains( anchor, 'roll' ) ) ) {
					var span = document.createElement('span');
					span.setAttribute('data-title', anchor.text);
					span.innerHTML = anchor.innerHTML;

					anchor.classList.add( 'roll' );
					anchor.innerHTML = '';
					anchor.appendChild(span);
				}
			}
		}

	}

	/**
	 * Unwrap all 3D links.
	 */
	function disableRollingLinks() {

		var anchors = document.querySelectorAll( SLIDES_SELECTOR + ' a.roll' );

		for( var i = 0, len = anchors.length; i < len; i++ ) {
			var anchor = anchors[i];
			var span = anchor.querySelector( 'span' );

			if( span ) {
				anchor.classList.remove( 'roll' );
				anchor.innerHTML = span.innerHTML;
			}
		}

	}

	/**
	 * Bind preview frame links.
	 */
	function enablePreviewLinks( selector ) {

		var anchors = toArray( document.querySelectorAll( selector ? selector : 'a' ) );

		anchors.forEach( function( element ) {
			if( /^(http|www)/gi.test( element.getAttribute( 'href' ) ) ) {
				element.addEventListener( 'click', onPreviewLinkClicked, false );
			}
		} );

	}

	/**
	 * Unbind preview frame links.
	 */
	function disablePreviewLinks() {

		var anchors = toArray( document.querySelectorAll( 'a' ) );

		anchors.forEach( function( element ) {
			if( /^(http|www)/gi.test( element.getAttribute( 'href' ) ) ) {
				element.removeEventListener( 'click', onPreviewLinkClicked, false );
			}
		} );

	}

	/**
	 * Opens a preview window for the target URL.
	 */
	function openPreview( url ) {

		closePreview();

		dom.preview = document.createElement( 'div' );
		dom.preview.classList.add( 'preview-link-overlay' );
		dom.wrapper.appendChild( dom.preview );

		dom.preview.innerHTML = [
			'<header>',
				'<a class="close" href="#"><span class="icon"></span></a>',
				'<a class="external" href="'+ url +'" target="_blank"><span class="icon"></span></a>',
			'</header>',
			'<div class="spinner"></div>',
			'<div class="viewport">',
				'<iframe src="'+ url +'"></iframe>',
			'</div>'
		].join('');

		dom.preview.querySelector( 'iframe' ).addEventListener( 'load', function( event ) {
			dom.preview.classList.add( 'loaded' );
		}, false );

		dom.preview.querySelector( '.close' ).addEventListener( 'click', function( event ) {
			closePreview();
			event.preventDefault();
		}, false );

		dom.preview.querySelector( '.external' ).addEventListener( 'click', function( event ) {
			closePreview();
		}, false );

		setTimeout( function() {
			dom.preview.classList.add( 'visible' );
		}, 1 );

	}

	/**
	 * Closes the iframe preview window.
	 */
	function closePreview() {

		if( dom.preview ) {
			dom.preview.setAttribute( 'src', '' );
			dom.preview.parentNode.removeChild( dom.preview );
			dom.preview = null;
		}

	}

	/**
	 * Applies JavaScript-controlled layout rules to the
	 * presentation.
	 */
	function layout() {

		if( dom.wrapper && !isPrintingPDF() ) {

			// Available space to scale within
			var availableWidth = dom.wrapper.offsetWidth,
				availableHeight = dom.wrapper.offsetHeight;

			// Reduce available space by margin
			availableWidth -= ( availableHeight * config.margin );
			availableHeight -= ( availableHeight * config.margin );

			// Dimensions of the content
			var slideWidth = config.width,
				slideHeight = config.height,
				slidePadding = 20; // TODO Dig this out of DOM

			// Layout the contents of the slides
			layoutSlideContents( config.width, config.height, slidePadding );

			// Slide width may be a percentage of available width
			if( typeof slideWidth === 'string' && /%$/.test( slideWidth ) ) {
				slideWidth = parseInt( slideWidth, 10 ) / 100 * availableWidth;
			}

			// Slide height may be a percentage of available height
			if( typeof slideHeight === 'string' && /%$/.test( slideHeight ) ) {
				slideHeight = parseInt( slideHeight, 10 ) / 100 * availableHeight;
			}

			dom.slides.style.width = slideWidth + 'px';
			dom.slides.style.height = slideHeight + 'px';

			// Determine scale of content to fit within available space
			scale = Math.min( availableWidth / slideWidth, availableHeight / slideHeight );

			// Respect max/min scale settings
			scale = Math.max( scale, config.minScale );
			scale = Math.min( scale, config.maxScale );

			// Prefer applying scale via zoom since Chrome blurs scaled content
			// with nested transforms
			if( typeof dom.slides.style.zoom !== 'undefined' && !navigator.userAgent.match( /(iphone|ipod|ipad|android)/gi ) ) {
				dom.slides.style.zoom = scale;
			}
			// Apply scale transform as a fallback
			else {
				transformElement( dom.slides, 'translate(-50%, -50%) scale('+ scale +') translate(50%, 50%)' );
			}

			// Select all slides, vertical and horizontal
			var slides = toArray( document.querySelectorAll( SLIDES_SELECTOR ) );

			for( var i = 0, len = slides.length; i < len; i++ ) {
				var slide = slides[ i ];

				// Don't bother updating invisible slides
				if( slide.style.display === 'none' ) {
					continue;
				}

				if( config.center || slide.classList.contains( 'center' ) ) {
					// Vertical stacks are not centred since their section
					// children will be
					if( slide.classList.contains( 'stack' ) ) {
						slide.style.top = 0;
					}
					else {
						slide.style.top = Math.max( - ( getAbsoluteHeight( slide ) / 2 ) - slidePadding, -slideHeight / 2 ) + 'px';
					}
				}
				else {
					slide.style.top = '';
				}

			}

			updateProgress();
			updateParallax();

		}

	}

	/**
	 * Applies layout logic to the contents of all slides in
	 * the presentation.
	 */
	function layoutSlideContents( width, height, padding ) {

		// Handle sizing of elements with the 'stretch' class
		toArray( dom.slides.querySelectorAll( 'section > .stretch' ) ).forEach( function( element ) {

			// Determine how much vertical space we can use
			var remainingHeight = getRemainingHeight( element, ( height - ( padding * 2 ) ) );

			// Consider the aspect ratio of media elements
			if( /(img|video)/gi.test( element.nodeName ) ) {
				var nw = element.naturalWidth || element.videoWidth,
					nh = element.naturalHeight || element.videoHeight;

				var es = Math.min( width / nw, remainingHeight / nh );

				element.style.width = ( nw * es ) + 'px';
				element.style.height = ( nh * es ) + 'px';

			}
			else {
				element.style.width = width + 'px';
				element.style.height = remainingHeight + 'px';
			}

		} );

	}

	/**
	 * Stores the vertical index of a stack so that the same
	 * vertical slide can be selected when navigating to and
	 * from the stack.
	 *
	 * @param {HTMLElement} stack The vertical stack element
	 * @param {int} v Index to memorize
	 */
	function setPreviousVerticalIndex( stack, v ) {

		if( typeof stack === 'object' && typeof stack.setAttribute === 'function' ) {
			stack.setAttribute( 'data-previous-indexv', v || 0 );
		}

	}

	/**
	 * Retrieves the vertical index which was stored using
	 * #setPreviousVerticalIndex() or 0 if no previous index
	 * exists.
	 *
	 * @param {HTMLElement} stack The vertical stack element
	 */
	function getPreviousVerticalIndex( stack ) {

		if( typeof stack === 'object' && typeof stack.setAttribute === 'function' && stack.classList.contains( 'stack' ) ) {
			// Prefer manually defined start-indexv
			var attributeName = stack.hasAttribute( 'data-start-indexv' ) ? 'data-start-indexv' : 'data-previous-indexv';

			return parseInt( stack.getAttribute( attributeName ) || 0, 10 );
		}

		return 0;

	}

	/**
	 * Displays the overview of slides (quick nav) by
	 * scaling down and arranging all slide elements.
	 *
	 * Experimental feature, might be dropped if perf
	 * can't be improved.
	 */
	function activateOverview() {

		// Only proceed if enabled in config
		if( config.overview ) {

			// Don't auto-slide while in overview mode
			cancelAutoSlide();

			var wasActive = dom.wrapper.classList.contains( 'overview' );

			// Vary the depth of the overview based on screen size
			var depth = window.innerWidth < 400 ? 1000 : 2500;

			dom.wrapper.classList.add( 'overview' );
			dom.wrapper.classList.remove( 'overview-deactivating' );

			clearTimeout( activateOverviewTimeout );
			clearTimeout( deactivateOverviewTimeout );

			// Not the pretties solution, but need to let the overview
			// class apply first so that slides are measured accurately
			// before we can position them
			activateOverviewTimeout = setTimeout( function() {

				var horizontalSlides = document.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR );

				for( var i = 0, len1 = horizontalSlides.length; i < len1; i++ ) {
					var hslide = horizontalSlides[i],
						hoffset = config.rtl ? -105 : 105;

					hslide.setAttribute( 'data-index-h', i );

					// Apply CSS transform
					transformElement( hslide, 'translateZ(-'+ depth +'px) translate(' + ( ( i - indexh ) * hoffset ) + '%, 0%)' );

					if( hslide.classList.contains( 'stack' ) ) {

						var verticalSlides = hslide.querySelectorAll( 'section' );

						for( var j = 0, len2 = verticalSlides.length; j < len2; j++ ) {
							var verticalIndex = i === indexh ? indexv : getPreviousVerticalIndex( hslide );

							var vslide = verticalSlides[j];

							vslide.setAttribute( 'data-index-h', i );
							vslide.setAttribute( 'data-index-v', j );

							// Apply CSS transform
							transformElement( vslide, 'translate(0%, ' + ( ( j - verticalIndex ) * 105 ) + '%)' );

							// Navigate to this slide on click
							vslide.addEventListener( 'click', onOverviewSlideClicked, true );
						}

					}
					else {

						// Navigate to this slide on click
						hslide.addEventListener( 'click', onOverviewSlideClicked, true );

					}
				}

				updateSlidesVisibility();

				layout();

				if( !wasActive ) {
					// Notify observers of the overview showing
					dispatchEvent( 'overviewshown', {
						'indexh': indexh,
						'indexv': indexv,
						'currentSlide': currentSlide
					} );
				}

			}, 10 );

		}

	}

	/**
	 * Exits the slide overview and enters the currently
	 * active slide.
	 */
	function deactivateOverview() {

		// Only proceed if enabled in config
		if( config.overview ) {

			clearTimeout( activateOverviewTimeout );
			clearTimeout( deactivateOverviewTimeout );

			dom.wrapper.classList.remove( 'overview' );

			// Temporarily add a class so that transitions can do different things
			// depending on whether they are exiting/entering overview, or just
			// moving from slide to slide
			dom.wrapper.classList.add( 'overview-deactivating' );

			deactivateOverviewTimeout = setTimeout( function () {
				dom.wrapper.classList.remove( 'overview-deactivating' );
			}, 1 );

			// Select all slides
			toArray( document.querySelectorAll( SLIDES_SELECTOR ) ).forEach( function( slide ) {
				// Resets all transforms to use the external styles
				transformElement( slide, '' );

				slide.removeEventListener( 'click', onOverviewSlideClicked, true );
			} );

			slide( indexh, indexv );

			cueAutoSlide();

			// Notify observers of the overview hiding
			dispatchEvent( 'overviewhidden', {
				'indexh': indexh,
				'indexv': indexv,
				'currentSlide': currentSlide
			} );

		}
	}

	/**
	 * Toggles the slide overview mode on and off.
	 *
	 * @param {Boolean} override Optional flag which overrides the
	 * toggle logic and forcibly sets the desired state. True means
	 * overview is open, false means it's closed.
	 */
	function toggleOverview( override ) {

		if( typeof override === 'boolean' ) {
			override ? activateOverview() : deactivateOverview();
		}
		else {
			isOverview() ? deactivateOverview() : activateOverview();
		}

	}

	/**
	 * Checks if the overview is currently active.
	 *
	 * @return {Boolean} true if the overview is active,
	 * false otherwise
	 */
	function isOverview() {

		return dom.wrapper.classList.contains( 'overview' );

	}

	/**
	 * Checks if the current or specified slide is vertical
	 * (nested within another slide).
	 *
	 * @param {HTMLElement} slide [optional] The slide to check
	 * orientation of
	 */
	function isVerticalSlide( slide ) {

		// Prefer slide argument, otherwise use current slide
		slide = slide ? slide : currentSlide;

		return slide && slide.parentNode && !!slide.parentNode.nodeName.match( /section/i );

	}

	/**
	 * Handling the fullscreen functionality via the fullscreen API
	 *
	 * @see http://fullscreen.spec.whatwg.org/
	 * @see https://developer.mozilla.org/en-US/docs/DOM/Using_fullscreen_mode
	 */
	function enterFullscreen() {

		var element = document.body;

		// Check which implementation is available
		var requestMethod = element.requestFullScreen ||
							element.webkitRequestFullscreen ||
							element.webkitRequestFullScreen ||
							element.mozRequestFullScreen ||
							element.msRequestFullScreen;

		if( requestMethod ) {
			requestMethod.apply( element );
		}

	}

	/**
	 * Enters the paused mode which fades everything on screen to
	 * black.
	 */
	function pause() {

		var wasPaused = dom.wrapper.classList.contains( 'paused' );

		cancelAutoSlide();
		dom.wrapper.classList.add( 'paused' );

		if( wasPaused === false ) {
			dispatchEvent( 'paused' );
		}

	}

	/**
	 * Exits from the paused mode.
	 */
	function resume() {

		var wasPaused = dom.wrapper.classList.contains( 'paused' );
		dom.wrapper.classList.remove( 'paused' );

		cueAutoSlide();

		if( wasPaused ) {
			dispatchEvent( 'resumed' );
		}

	}

	/**
	 * Toggles the paused mode on and off.
	 */
	function togglePause() {

		if( isPaused() ) {
			resume();
		}
		else {
			pause();
		}

	}

	/**
	 * Checks if we are currently in the paused mode.
	 */
	function isPaused() {

		return dom.wrapper.classList.contains( 'paused' );

	}

	/**
	 * Steps from the current point in the presentation to the
	 * slide which matches the specified horizontal and vertical
	 * indices.
	 *
	 * @param {int} h Horizontal index of the target slide
	 * @param {int} v Vertical index of the target slide
	 * @param {int} f Optional index of a fragment within the
	 * target slide to activate
	 * @param {int} o Optional origin for use in multimaster environments
	 */
	function slide( h, v, f, o ) {

		// Remember where we were at before
		previousSlide = currentSlide;

		// Query all horizontal slides in the deck
		var horizontalSlides = document.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR );

		// If no vertical index is specified and the upcoming slide is a
		// stack, resume at its previous vertical index
		if( v === undefined ) {
			v = getPreviousVerticalIndex( horizontalSlides[ h ] );
		}

		// If we were on a vertical stack, remember what vertical index
		// it was on so we can resume at the same position when returning
		if( previousSlide && previousSlide.parentNode && previousSlide.parentNode.classList.contains( 'stack' ) ) {
			setPreviousVerticalIndex( previousSlide.parentNode, indexv );
		}

		// Remember the state before this slide
		var stateBefore = state.concat();

		// Reset the state array
		state.length = 0;

		var indexhBefore = indexh || 0,
			indexvBefore = indexv || 0;

		// Activate and transition to the new slide
		indexh = updateSlides( HORIZONTAL_SLIDES_SELECTOR, h === undefined ? indexh : h );
		indexv = updateSlides( VERTICAL_SLIDES_SELECTOR, v === undefined ? indexv : v );

		// Update the visibility of slides now that the indices have changed
		updateSlidesVisibility();

		layout();

		// Apply the new state
		stateLoop: for( var i = 0, len = state.length; i < len; i++ ) {
			// Check if this state existed on the previous slide. If it
			// did, we will avoid adding it repeatedly
			for( var j = 0; j < stateBefore.length; j++ ) {
				if( stateBefore[j] === state[i] ) {
					stateBefore.splice( j, 1 );
					continue stateLoop;
				}
			}

			document.documentElement.classList.add( state[i] );

			// Dispatch custom event matching the state's name
			dispatchEvent( state[i] );
		}

		// Clean up the remains of the previous state
		while( stateBefore.length ) {
			document.documentElement.classList.remove( stateBefore.pop() );
		}

		// If the overview is active, re-activate it to update positions
		if( isOverview() ) {
			activateOverview();
		}

		// Find the current horizontal slide and any possible vertical slides
		// within it
		var currentHorizontalSlide = horizontalSlides[ indexh ],
			currentVerticalSlides = currentHorizontalSlide.querySelectorAll( 'section' );

		// Store references to the previous and current slides
		currentSlide = currentVerticalSlides[ indexv ] || currentHorizontalSlide;

		// Show fragment, if specified
		if( typeof f !== 'undefined' ) {
			navigateFragment( f );
		}

		// Dispatch an event if the slide changed
		var slideChanged = ( indexh !== indexhBefore || indexv !== indexvBefore );
		if( slideChanged ) {
			dispatchEvent( 'slidechanged', {
				'indexh': indexh,
				'indexv': indexv,
				'previousSlide': previousSlide,
				'currentSlide': currentSlide,
				'origin': o
			} );
		}
		else {
			// Ensure that the previous slide is never the same as the current
			previousSlide = null;
		}

		// Solves an edge case where the previous slide maintains the
		// 'present' class when navigating between adjacent vertical
		// stacks
		if( previousSlide ) {
			previousSlide.classList.remove( 'present' );

			// Reset all slides upon navigate to home
			// Issue: #285
			if ( document.querySelector( HOME_SLIDE_SELECTOR ).classList.contains( 'present' ) ) {
				// Launch async task
				setTimeout( function () {
					var slides = toArray( document.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR + '.stack') ), i;
					for( i in slides ) {
						if( slides[i] ) {
							// Reset stack
							setPreviousVerticalIndex( slides[i], 0 );
						}
					}
				}, 0 );
			}
		}

		// Handle embedded content
		if( slideChanged ) {
			stopEmbeddedContent( previousSlide );
			startEmbeddedContent( currentSlide );
		}

		updateControls();
		updateProgress();
		updateBackground();
		updateParallax();
		updateSlideNumber();

		// Update the URL hash
		writeURL();

		cueAutoSlide();

	}

	/**
	 * Syncs the presentation with the current DOM. Useful
	 * when new slides or control elements are added or when
	 * the configuration has changed.
	 */
	function sync() {

		// Subscribe to input
		removeEventListeners();
		addEventListeners();

		// Force a layout to make sure the current config is accounted for
		layout();

		// Reflect the current autoSlide value
		autoSlide = config.autoSlide;

		// Start auto-sliding if it's enabled
		cueAutoSlide();

		// Re-create the slide backgrounds
		createBackgrounds();

		sortAllFragments();

		updateControls();
		updateProgress();
		updateBackground( true );
		updateSlideNumber();

	}

	/**
	 * Resets all vertical slides so that only the first
	 * is visible.
	 */
	function resetVerticalSlides() {

		var horizontalSlides = toArray( document.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR ) );
		horizontalSlides.forEach( function( horizontalSlide ) {

			var verticalSlides = toArray( horizontalSlide.querySelectorAll( 'section' ) );
			verticalSlides.forEach( function( verticalSlide, y ) {

				if( y > 0 ) {
					verticalSlide.classList.remove( 'present' );
					verticalSlide.classList.remove( 'past' );
					verticalSlide.classList.add( 'future' );
				}

			} );

		} );

	}

	/**
	 * Sorts and formats all of fragments in the
	 * presentation.
	 */
	function sortAllFragments() {

		var horizontalSlides = toArray( document.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR ) );
		horizontalSlides.forEach( function( horizontalSlide ) {

			var verticalSlides = toArray( horizontalSlide.querySelectorAll( 'section' ) );
			verticalSlides.forEach( function( verticalSlide, y ) {

				sortFragments( verticalSlide.querySelectorAll( '.fragment' ) );

			} );

			if( verticalSlides.length === 0 ) sortFragments( horizontalSlide.querySelectorAll( '.fragment' ) );

		} );

	}

	/**
	 * Updates one dimension of slides by showing the slide
	 * with the specified index.
	 *
	 * @param {String} selector A CSS selector that will fetch
	 * the group of slides we are working with
	 * @param {Number} index The index of the slide that should be
	 * shown
	 *
	 * @return {Number} The index of the slide that is now shown,
	 * might differ from the passed in index if it was out of
	 * bounds.
	 */
	function updateSlides( selector, index ) {

		// Select all slides and convert the NodeList result to
		// an array
		var slides = toArray( document.querySelectorAll( selector ) ),
			slidesLength = slides.length;

		if( slidesLength ) {

			// Should the index loop?
			if( config.loop ) {
				index %= slidesLength;

				if( index < 0 ) {
					index = slidesLength + index;
				}
			}

			// Enforce max and minimum index bounds
			index = Math.max( Math.min( index, slidesLength - 1 ), 0 );

			for( var i = 0; i < slidesLength; i++ ) {
				var element = slides[i];

				var reverse = config.rtl && !isVerticalSlide( element );

				element.classList.remove( 'past' );
				element.classList.remove( 'present' );
				element.classList.remove( 'future' );

				// http://www.w3.org/html/wg/drafts/html/master/editing.html#the-hidden-attribute
				element.setAttribute( 'hidden', '' );

				if( i < index ) {
					// Any element previous to index is given the 'past' class
					element.classList.add( reverse ? 'future' : 'past' );

					var pastFragments = toArray( element.querySelectorAll( '.fragment' ) );

					// Show all fragments on prior slides
					while( pastFragments.length ) {
						var pastFragment = pastFragments.pop();
						pastFragment.classList.add( 'visible' );
						pastFragment.classList.remove( 'current-fragment' );
					}
				}
				else if( i > index ) {
					// Any element subsequent to index is given the 'future' class
					element.classList.add( reverse ? 'past' : 'future' );

					var futureFragments = toArray( element.querySelectorAll( '.fragment.visible' ) );

					// No fragments in future slides should be visible ahead of time
					while( futureFragments.length ) {
						var futureFragment = futureFragments.pop();
						futureFragment.classList.remove( 'visible' );
						futureFragment.classList.remove( 'current-fragment' );
					}
				}

				// If this element contains vertical slides
				if( element.querySelector( 'section' ) ) {
					element.classList.add( 'stack' );
				}
			}

			// Mark the current slide as present
			slides[index].classList.add( 'present' );
			slides[index].removeAttribute( 'hidden' );

			// If this slide has a state associated with it, add it
			// onto the current state of the deck
			var slideState = slides[index].getAttribute( 'data-state' );
			if( slideState ) {
				state = state.concat( slideState.split( ' ' ) );
			}

		}
		else {
			// Since there are no slides we can't be anywhere beyond the
			// zeroth index
			index = 0;
		}

		return index;

	}

	/**
	 * Optimization method; hide all slides that are far away
	 * from the present slide.
	 */
	function updateSlidesVisibility() {

		// Select all slides and convert the NodeList result to
		// an array
		var horizontalSlides = toArray( document.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR ) ),
			horizontalSlidesLength = horizontalSlides.length,
			distanceX,
			distanceY;

		if( horizontalSlidesLength ) {

			// The number of steps away from the present slide that will
			// be visible
			var viewDistance = isOverview() ? 10 : config.viewDistance;

			// Limit view distance on weaker devices
			if( isMobileDevice ) {
				viewDistance = isOverview() ? 6 : 1;
			}

			for( var x = 0; x < horizontalSlidesLength; x++ ) {
				var horizontalSlide = horizontalSlides[x];

				var verticalSlides = toArray( horizontalSlide.querySelectorAll( 'section' ) ),
					verticalSlidesLength = verticalSlides.length;

				// Loops so that it measures 1 between the first and last slides
				distanceX = Math.abs( ( indexh - x ) % ( horizontalSlidesLength - viewDistance ) ) || 0;

				// Show the horizontal slide if it's within the view distance
				horizontalSlide.style.display = distanceX > viewDistance ? 'none' : 'block';

				if( verticalSlidesLength ) {

					var oy = getPreviousVerticalIndex( horizontalSlide );

					for( var y = 0; y < verticalSlidesLength; y++ ) {
						var verticalSlide = verticalSlides[y];

						distanceY = x === indexh ? Math.abs( indexv - y ) : Math.abs( y - oy );

						verticalSlide.style.display = ( distanceX + distanceY ) > viewDistance ? 'none' : 'block';
					}

				}
			}

		}

	}

	/**
	 * Updates the progress bar to reflect the current slide.
	 */
	function updateProgress() {

		// Update progress if enabled
		if( config.progress && dom.progress ) {

			var horizontalSlides = toArray( document.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR ) );

			// The number of past and total slides
			var totalCount = document.querySelectorAll( SLIDES_SELECTOR + ':not(.stack)' ).length;
			var pastCount = 0;

			// Step through all slides and count the past ones
			mainLoop: for( var i = 0; i < horizontalSlides.length; i++ ) {

				var horizontalSlide = horizontalSlides[i];
				var verticalSlides = toArray( horizontalSlide.querySelectorAll( 'section' ) );

				for( var j = 0; j < verticalSlides.length; j++ ) {

					// Stop as soon as we arrive at the present
					if( verticalSlides[j].classList.contains( 'present' ) ) {
						break mainLoop;
					}

					pastCount++;

				}

				// Stop as soon as we arrive at the present
				if( horizontalSlide.classList.contains( 'present' ) ) {
					break;
				}

				// Don't count the wrapping section for vertical slides
				if( horizontalSlide.classList.contains( 'stack' ) === false ) {
					pastCount++;
				}

			}

			dom.progressbar.style.width = ( pastCount / ( totalCount - 1 ) ) * window.innerWidth + 'px';

		}

	}

	/**
	 * Updates the slide number div to reflect the current slide.
	 */
	function updateSlideNumber() {

		// Update slide number if enabled
		if( config.slideNumber && dom.slideNumber) {

			// Display the number of the page using 'indexh - indexv' format
			var indexString = indexh;
			if( indexv > 0 ) {
				indexString += ' - ' + indexv;
			}

			dom.slideNumber.innerHTML = indexString;
		}

	}

	/**
	 * Updates the state of all control/navigation arrows.
	 */
	function updateControls() {

		var routes = availableRoutes();
		var fragments = availableFragments();

		// Remove the 'enabled' class from all directions
		dom.controlsLeft.concat( dom.controlsRight )
						.concat( dom.controlsUp )
						.concat( dom.controlsDown )
						.concat( dom.controlsPrev )
						.concat( dom.controlsNext ).forEach( function( node ) {
			node.classList.remove( 'enabled' );
			node.classList.remove( 'fragmented' );
		} );

		// Add the 'enabled' class to the available routes
		if( routes.left ) dom.controlsLeft.forEach( function( el ) { el.classList.add( 'enabled' );	} );
		if( routes.right ) dom.controlsRight.forEach( function( el ) { el.classList.add( 'enabled' ); } );
		if( routes.up ) dom.controlsUp.forEach( function( el ) { el.classList.add( 'enabled' );	} );
		if( routes.down ) dom.controlsDown.forEach( function( el ) { el.classList.add( 'enabled' ); } );

		// Prev/next buttons
		if( routes.left || routes.up ) dom.controlsPrev.forEach( function( el ) { el.classList.add( 'enabled' ); } );
		if( routes.right || routes.down ) dom.controlsNext.forEach( function( el ) { el.classList.add( 'enabled' ); } );

		// Highlight fragment directions
		if( currentSlide ) {

			// Always apply fragment decorator to prev/next buttons
			if( fragments.prev ) dom.controlsPrev.forEach( function( el ) { el.classList.add( 'fragmented', 'enabled' ); } );
			if( fragments.next ) dom.controlsNext.forEach( function( el ) { el.classList.add( 'fragmented', 'enabled' ); } );

			// Apply fragment decorators to directional buttons based on
			// what slide axis they are in
			if( isVerticalSlide( currentSlide ) ) {
				if( fragments.prev ) dom.controlsUp.forEach( function( el ) { el.classList.add( 'fragmented', 'enabled' ); } );
				if( fragments.next ) dom.controlsDown.forEach( function( el ) { el.classList.add( 'fragmented', 'enabled' ); } );
			}
			else {
				if( fragments.prev ) dom.controlsLeft.forEach( function( el ) { el.classList.add( 'fragmented', 'enabled' ); } );
				if( fragments.next ) dom.controlsRight.forEach( function( el ) { el.classList.add( 'fragmented', 'enabled' ); } );
			}

		}

	}

	/**
	 * Updates the background elements to reflect the current
	 * slide.
	 *
	 * @param {Boolean} includeAll If true, the backgrounds of
	 * all vertical slides (not just the present) will be updated.
	 */
	function updateBackground( includeAll ) {

		var currentBackground = null;

		// Reverse past/future classes when in RTL mode
		var horizontalPast = config.rtl ? 'future' : 'past',
			horizontalFuture = config.rtl ? 'past' : 'future';

		// Update the classes of all backgrounds to match the
		// states of their slides (past/present/future)
		toArray( dom.background.childNodes ).forEach( function( backgroundh, h ) {

			if( h < indexh ) {
				backgroundh.className = 'slide-background ' + horizontalPast;
			}
			else if ( h > indexh ) {
				backgroundh.className = 'slide-background ' + horizontalFuture;
			}
			else {
				backgroundh.className = 'slide-background present';

				// Store a reference to the current background element
				currentBackground = backgroundh;
			}

			if( includeAll || h === indexh ) {
				toArray( backgroundh.childNodes ).forEach( function( backgroundv, v ) {

					if( v < indexv ) {
						backgroundv.className = 'slide-background past';
					}
					else if ( v > indexv ) {
						backgroundv.className = 'slide-background future';
					}
					else {
						backgroundv.className = 'slide-background present';

						// Only if this is the present horizontal and vertical slide
						if( h === indexh ) currentBackground = backgroundv;
					}

				} );
			}

		} );

		// Don't transition between identical backgrounds. This
		// prevents unwanted flicker.
		if( currentBackground ) {
			var previousBackgroundHash = previousBackground ? previousBackground.getAttribute( 'data-background-hash' ) : null;
			var currentBackgroundHash = currentBackground.getAttribute( 'data-background-hash' );
			if( currentBackgroundHash && currentBackgroundHash === previousBackgroundHash && currentBackground !== previousBackground ) {
				dom.background.classList.add( 'no-transition' );
			}

			previousBackground = currentBackground;
		}

		// Allow the first background to apply without transition
		setTimeout( function() {
			dom.background.classList.remove( 'no-transition' );
		}, 1 );

	}

	/**
	 * Updates the position of the parallax background based
	 * on the current slide index.
	 */
	function updateParallax() {

		if( config.parallaxBackgroundImage ) {

			var horizontalSlides = document.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR ),
				verticalSlides = document.querySelectorAll( VERTICAL_SLIDES_SELECTOR );

			var backgroundSize = dom.background.style.backgroundSize.split( ' ' ),
				backgroundWidth, backgroundHeight;

			if( backgroundSize.length === 1 ) {
				backgroundWidth = backgroundHeight = parseInt( backgroundSize[0], 10 );
			}
			else {
				backgroundWidth = parseInt( backgroundSize[0], 10 );
				backgroundHeight = parseInt( backgroundSize[1], 10 );
			}

			var slideWidth = dom.background.offsetWidth;
			var horizontalSlideCount = horizontalSlides.length;
			var horizontalOffset = -( backgroundWidth - slideWidth ) / ( horizontalSlideCount-1 ) * indexh;

			var slideHeight = dom.background.offsetHeight;
			var verticalSlideCount = verticalSlides.length;
			var verticalOffset = verticalSlideCount > 0 ? -( backgroundHeight - slideHeight ) / ( verticalSlideCount-1 ) * indexv : 0;

			dom.background.style.backgroundPosition = horizontalOffset + 'px ' + verticalOffset + 'px';

		}

	}

	/**
	 * Determine what available routes there are for navigation.
	 *
	 * @return {Object} containing four booleans: left/right/up/down
	 */
	function availableRoutes() {

		var horizontalSlides = document.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR ),
			verticalSlides = document.querySelectorAll( VERTICAL_SLIDES_SELECTOR );

		var routes = {
			left: indexh > 0 || config.loop,
			right: indexh < horizontalSlides.length - 1 || config.loop,
			up: indexv > 0,
			down: indexv < verticalSlides.length - 1
		};

		// reverse horizontal controls for rtl
		if( config.rtl ) {
			var left = routes.left;
			routes.left = routes.right;
			routes.right = left;
		}

		return routes;

	}

	/**
	 * Returns an object describing the available fragment
	 * directions.
	 *
	 * @return {Object} two boolean properties: prev/next
	 */
	function availableFragments() {

		if( currentSlide && config.fragments ) {
			var fragments = currentSlide.querySelectorAll( '.fragment' );
			var hiddenFragments = currentSlide.querySelectorAll( '.fragment:not(.visible)' );

			return {
				prev: fragments.length - hiddenFragments.length > 0,
				next: !!hiddenFragments.length
			};
		}
		else {
			return { prev: false, next: false };
		}

	}

	/**
	 * Start playback of any embedded content inside of
	 * the targeted slide.
	 */
	function startEmbeddedContent( slide ) {

		if( slide && !isSpeakerNotes() ) {
			// HTML5 media elements
			toArray( slide.querySelectorAll( 'video, audio' ) ).forEach( function( el ) {
				if( el.hasAttribute( 'data-autoplay' ) ) {
					el.play();
				}
			} );

			// iframe embeds
			toArray( slide.querySelectorAll( 'iframe' ) ).forEach( function( el ) {
				el.contentWindow.postMessage( 'slide:start', '*' );
			});

			// YouTube embeds
			toArray( slide.querySelectorAll( 'iframe[src*="youtube.com/embed/"]' ) ).forEach( function( el ) {
				if( el.hasAttribute( 'data-autoplay' ) ) {
					el.contentWindow.postMessage( '{"event":"command","func":"playVideo","args":""}', '*' );
				}
			});
		}

	}

	/**
	 * Stop playback of any embedded content inside of
	 * the targeted slide.
	 */
	function stopEmbeddedContent( slide ) {

		if( slide ) {
			// HTML5 media elements
			toArray( slide.querySelectorAll( 'video, audio' ) ).forEach( function( el ) {
				if( !el.hasAttribute( 'data-ignore' ) ) {
					el.pause();
				}
			} );

			// iframe embeds
			toArray( slide.querySelectorAll( 'iframe' ) ).forEach( function( el ) {
				el.contentWindow.postMessage( 'slide:stop', '*' );
			});

			// YouTube embeds
			toArray( slide.querySelectorAll( 'iframe[src*="youtube.com/embed/"]' ) ).forEach( function( el ) {
				if( !el.hasAttribute( 'data-ignore' ) && typeof el.contentWindow.postMessage === 'function' ) {
					el.contentWindow.postMessage( '{"event":"command","func":"pauseVideo","args":""}', '*' );
				}
			});
		}

	}

	/**
	 * Checks if this presentation is running inside of the
	 * speaker notes window.
	 */
	function isSpeakerNotes() {

		return !!window.location.search.match( /receiver/gi );

	}

	/**
	 * Reads the current URL (hash) and navigates accordingly.
	 */
	function readURL() {

		var hash = window.location.hash;

		// Attempt to parse the hash as either an index or name
		var bits = hash.slice( 2 ).split( '/' ),
			name = hash.replace( /#|\//gi, '' );

		// If the first bit is invalid and there is a name we can
		// assume that this is a named link
		if( isNaN( parseInt( bits[0], 10 ) ) && name.length ) {
			// Find the slide with the specified name
			var element = document.querySelector( '#' + name );

			if( element ) {
				// Find the position of the named slide and navigate to it
				var indices = Reveal.getIndices( element );
				slide( indices.h, indices.v );
			}
			// If the slide doesn't exist, navigate to the current slide
			else {
				slide( indexh || 0, indexv || 0 );
			}
		}
		else {
			// Read the index components of the hash
			var h = parseInt( bits[0], 10 ) || 0,
				v = parseInt( bits[1], 10 ) || 0;

			if( h !== indexh || v !== indexv ) {
				slide( h, v );
			}
		}

	}

	/**
	 * Updates the page URL (hash) to reflect the current
	 * state.
	 *
	 * @param {Number} delay The time in ms to wait before
	 * writing the hash
	 */
	function writeURL( delay ) {

		if( config.history ) {

			// Make sure there's never more than one timeout running
			clearTimeout( writeURLTimeout );

			// If a delay is specified, timeout this call
			if( typeof delay === 'number' ) {
				writeURLTimeout = setTimeout( writeURL, delay );
			}
			else {
				var url = '/';

				// If the current slide has an ID, use that as a named link
				if( currentSlide && typeof currentSlide.getAttribute( 'id' ) === 'string' ) {
					url = '/' + currentSlide.getAttribute( 'id' );
				}
				// Otherwise use the /h/v index
				else {
					if( indexh > 0 || indexv > 0 ) url += indexh;
					if( indexv > 0 ) url += '/' + indexv;
				}

				window.location.hash = url;
			}
		}

	}

	/**
	 * Retrieves the h/v location of the current, or specified,
	 * slide.
	 *
	 * @param {HTMLElement} slide If specified, the returned
	 * index will be for this slide rather than the currently
	 * active one
	 *
	 * @return {Object} { h: <int>, v: <int>, f: <int> }
	 */
	function getIndices( slide ) {

		// By default, return the current indices
		var h = indexh,
			v = indexv,
			f;

		// If a slide is specified, return the indices of that slide
		if( slide ) {
			var isVertical = isVerticalSlide( slide );
			var slideh = isVertical ? slide.parentNode : slide;

			// Select all horizontal slides
			var horizontalSlides = toArray( document.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR ) );

			// Now that we know which the horizontal slide is, get its index
			h = Math.max( horizontalSlides.indexOf( slideh ), 0 );

			// If this is a vertical slide, grab the vertical index
			if( isVertical ) {
				v = Math.max( toArray( slide.parentNode.querySelectorAll( 'section' ) ).indexOf( slide ), 0 );
			}
		}

		if( !slide && currentSlide ) {
			var hasFragments = currentSlide.querySelectorAll( '.fragment' ).length > 0;
			if( hasFragments ) {
				var visibleFragments = currentSlide.querySelectorAll( '.fragment.visible' );
				f = visibleFragments.length - 1;
			}
		}

		return { h: h, v: v, f: f };

	}

	/**
	 * Return a sorted fragments list, ordered by an increasing
	 * "data-fragment-index" attribute.
	 *
	 * Fragments will be revealed in the order that they are returned by
	 * this function, so you can use the index attributes to control the
	 * order of fragment appearance.
	 *
	 * To maintain a sensible default fragment order, fragments are presumed
	 * to be passed in document order. This function adds a "fragment-index"
	 * attribute to each node if such an attribute is not already present,
	 * and sets that attribute to an integer value which is the position of
	 * the fragment within the fragments list.
	 */
	function sortFragments( fragments ) {

		fragments = toArray( fragments );

		var ordered = [],
			unordered = [],
			sorted = [];

		// Group ordered and unordered elements
		fragments.forEach( function( fragment, i ) {
			if( fragment.hasAttribute( 'data-fragment-index' ) ) {
				var index = parseInt( fragment.getAttribute( 'data-fragment-index' ), 10 );

				if( !ordered[index] ) {
					ordered[index] = [];
				}

				ordered[index].push( fragment );
			}
			else {
				unordered.push( [ fragment ] );
			}
		} );

		// Append fragments without explicit indices in their
		// DOM order
		ordered = ordered.concat( unordered );

		// Manually count the index up per group to ensure there
		// are no gaps
		var index = 0;

		// Push all fragments in their sorted order to an array,
		// this flattens the groups
		ordered.forEach( function( group ) {
			group.forEach( function( fragment ) {
				sorted.push( fragment );
				fragment.setAttribute( 'data-fragment-index', index );
			} );

			index ++;
		} );

		return sorted;

	}

	/**
	 * Navigate to the specified slide fragment.
	 *
	 * @param {Number} index The index of the fragment that
	 * should be shown, -1 means all are invisible
	 * @param {Number} offset Integer offset to apply to the
	 * fragment index
	 *
	 * @return {Boolean} true if a change was made in any
	 * fragments visibility as part of this call
	 */
	function navigateFragment( index, offset ) {

		if( currentSlide && config.fragments ) {

			var fragments = sortFragments( currentSlide.querySelectorAll( '.fragment' ) );
			if( fragments.length ) {

				// If no index is specified, find the current
				if( typeof index !== 'number' ) {
					var lastVisibleFragment = sortFragments( currentSlide.querySelectorAll( '.fragment.visible' ) ).pop();

					if( lastVisibleFragment ) {
						index = parseInt( lastVisibleFragment.getAttribute( 'data-fragment-index' ) || 0, 10 );
					}
					else {
						index = -1;
					}
				}

				// If an offset is specified, apply it to the index
				if( typeof offset === 'number' ) {
					index += offset;
				}

				var fragmentsShown = [],
					fragmentsHidden = [];

				toArray( fragments ).forEach( function( element, i ) {

					if( element.hasAttribute( 'data-fragment-index' ) ) {
						i = parseInt( element.getAttribute( 'data-fragment-index' ), 10 );
					}

					// Visible fragments
					if( i <= index ) {
						if( !element.classList.contains( 'visible' ) ) fragmentsShown.push( element );
						element.classList.add( 'visible' );
						element.classList.remove( 'current-fragment' );

						if( i === index ) {
							element.classList.add( 'current-fragment' );
						}
					}
					// Hidden fragments
					else {
						if( element.classList.contains( 'visible' ) ) fragmentsHidden.push( element );
						element.classList.remove( 'visible' );
						element.classList.remove( 'current-fragment' );
					}


				} );

				if( fragmentsHidden.length ) {
					dispatchEvent( 'fragmenthidden', { fragment: fragmentsHidden[0], fragments: fragmentsHidden } );
				}

				if( fragmentsShown.length ) {
					dispatchEvent( 'fragmentshown', { fragment: fragmentsShown[0], fragments: fragmentsShown } );
				}

				updateControls();

				return !!( fragmentsShown.length || fragmentsHidden.length );

			}

		}

		return false;

	}

	/**
	 * Navigate to the next slide fragment.
	 *
	 * @return {Boolean} true if there was a next fragment,
	 * false otherwise
	 */
	function nextFragment() {

		return navigateFragment( null, 1 );

	}

	/**
	 * Navigate to the previous slide fragment.
	 *
	 * @return {Boolean} true if there was a previous fragment,
	 * false otherwise
	 */
	function previousFragment() {

		return navigateFragment( null, -1 );

	}

	/**
	 * Cues a new automated slide if enabled in the config.
	 */
	function cueAutoSlide() {

		cancelAutoSlide();

		if( currentSlide ) {

			var parentAutoSlide = currentSlide.parentNode ? currentSlide.parentNode.getAttribute( 'data-autoslide' ) : null;
			var slideAutoSlide = currentSlide.getAttribute( 'data-autoslide' );

			// Pick value in the following priority order:
			// 1. Current slide's data-autoslide
			// 2. Parent slide's data-autoslide
			// 3. Global autoSlide setting
			if( slideAutoSlide ) {
				autoSlide = parseInt( slideAutoSlide, 10 );
			}
			else if( parentAutoSlide ) {
				autoSlide = parseInt( parentAutoSlide, 10 );
			}
			else {
				autoSlide = config.autoSlide;
			}

			// If there are media elements with data-autoplay,
			// automatically set the autoSlide duration to the
			// length of that media
			toArray( currentSlide.querySelectorAll( 'video, audio' ) ).forEach( function( el ) {
				if( el.hasAttribute( 'data-autoplay' ) ) {
					if( autoSlide && el.duration * 1000 > autoSlide ) {
						autoSlide = ( el.duration * 1000 ) + 1000;
					}
				}
			} );

			// Cue the next auto-slide if:
			// - There is an autoSlide value
			// - Auto-sliding isn't paused by the user
			// - The presentation isn't paused
			// - The overview isn't active
			// - The presentation isn't over
			if( autoSlide && !autoSlidePaused && !isPaused() && !isOverview() && ( !Reveal.isLastSlide() || config.loop === true ) ) {
				autoSlideTimeout = setTimeout( navigateNext, autoSlide );
				autoSlideStartTime = Date.now();
			}

			if( autoSlidePlayer ) {
				autoSlidePlayer.setPlaying( autoSlideTimeout !== -1 );
			}

		}

	}

	/**
	 * Cancels any ongoing request to auto-slide.
	 */
	function cancelAutoSlide() {

		clearTimeout( autoSlideTimeout );
		autoSlideTimeout = -1;

	}

	function pauseAutoSlide() {

		autoSlidePaused = true;
		clearTimeout( autoSlideTimeout );

		if( autoSlidePlayer ) {
			autoSlidePlayer.setPlaying( false );
		}

	}

	function resumeAutoSlide() {

		autoSlidePaused = false;
		cueAutoSlide();

	}

	function navigateLeft() {

		// Reverse for RTL
		if( config.rtl ) {
			if( ( isOverview() || nextFragment() === false ) && availableRoutes().left ) {
				slide( indexh + 1 );
			}
		}
		// Normal navigation
		else if( ( isOverview() || previousFragment() === false ) && availableRoutes().left ) {
			slide( indexh - 1 );
		}

	}

	function navigateRight() {

		// Reverse for RTL
		if( config.rtl ) {
			if( ( isOverview() || previousFragment() === false ) && availableRoutes().right ) {
				slide( indexh - 1 );
			}
		}
		// Normal navigation
		else if( ( isOverview() || nextFragment() === false ) && availableRoutes().right ) {
			slide( indexh + 1 );
		}

	}

	function navigateUp() {

		// Prioritize hiding fragments
		if( ( isOverview() || previousFragment() === false ) && availableRoutes().up ) {
			slide( indexh, indexv - 1 );
		}

	}

	function navigateDown() {

		// Prioritize revealing fragments
		if( ( isOverview() || nextFragment() === false ) && availableRoutes().down ) {
			slide( indexh, indexv + 1 );
		}

	}

	/**
	 * Navigates backwards, prioritized in the following order:
	 * 1) Previous fragment
	 * 2) Previous vertical slide
	 * 3) Previous horizontal slide
	 */
	function navigatePrev() {

		// Prioritize revealing fragments
		if( previousFragment() === false ) {
			if( availableRoutes().up ) {
				navigateUp();
			}
			else {
				// Fetch the previous horizontal slide, if there is one
				var previousSlide = document.querySelector( HORIZONTAL_SLIDES_SELECTOR + '.past:nth-child(' + indexh + ')' );

				if( previousSlide ) {
					var v = ( previousSlide.querySelectorAll( 'section' ).length - 1 ) || undefined;
					var h = indexh - 1;
					slide( h, v );
				}
			}
		}

	}

	/**
	 * Same as #navigatePrev() but navigates forwards.
	 */
	function navigateNext() {

		// Prioritize revealing fragments
		if( nextFragment() === false ) {
			availableRoutes().down ? navigateDown() : navigateRight();
		}

		// If auto-sliding is enabled we need to cue up
		// another timeout
		cueAutoSlide();

	}


	// --------------------------------------------------------------------//
	// ----------------------------- EVENTS -------------------------------//
	// --------------------------------------------------------------------//

	/**
	 * Called by all event handlers that are based on user
	 * input.
	 */
	function onUserInput( event ) {

		if( config.autoSlideStoppable ) {
			pauseAutoSlide();
		}

	}

	/**
	 * Handler for the document level 'keydown' event.
	 */
	function onDocumentKeyDown( event ) {

		onUserInput( event );

		// Check if there's a focused element that could be using
		// the keyboard
		var activeElement = document.activeElement;
		var hasFocus = !!( document.activeElement && ( document.activeElement.type || document.activeElement.href || document.activeElement.contentEditable !== 'inherit' ) );

		// Disregard the event if there's a focused element or a
		// keyboard modifier key is present
		if( hasFocus || (event.shiftKey && event.keyCode !== 32) || event.altKey || event.ctrlKey || event.metaKey ) return;

		// While paused only allow "unpausing" keyboard events (b and .)
		if( isPaused() && [66,190,191].indexOf( event.keyCode ) === -1 ) {
			return false;
		}

		var triggered = false;

		// 1. User defined key bindings
		if( typeof config.keyboard === 'object' ) {

			for( var key in config.keyboard ) {

				// Check if this binding matches the pressed key
				if( parseInt( key, 10 ) === event.keyCode ) {

					var value = config.keyboard[ key ];

					// Callback function
					if( typeof value === 'function' ) {
						value.apply( null, [ event ] );
					}
					// String shortcuts to reveal.js API
					else if( typeof value === 'string' && typeof Reveal[ value ] === 'function' ) {
						Reveal[ value ].call();
					}

					triggered = true;

				}

			}

		}

		// 2. System defined key bindings
		if( triggered === false ) {

			// Assume true and try to prove false
			triggered = true;

			switch( event.keyCode ) {
				// p, page up
				case 80: case 33: navigatePrev(); break;
				// n, page down
				case 78: case 34: navigateNext(); break;
				// h, left
				case 72: case 37: navigateLeft(); break;
				// l, right
				case 76: case 39: navigateRight(); break;
				// k, up
				case 75: case 38: navigateUp(); break;
				// j, down
				case 74: case 40: navigateDown(); break;
				// home
				case 36: slide( 0 ); break;
				// end
				case 35: slide( Number.MAX_VALUE ); break;
				// space
				case 32: isOverview() ? deactivateOverview() : event.shiftKey ? navigatePrev() : navigateNext(); break;
				// return
				case 13: isOverview() ? deactivateOverview() : triggered = false; break;
				// b, period, Logitech presenter tools "black screen" button
				case 66: case 190: case 191: togglePause(); break;
				// f
				case 70: enterFullscreen(); break;
				default:
					triggered = false;
			}

		}

		// If the input resulted in a triggered action we should prevent
		// the browsers default behavior
		if( triggered ) {
			event.preventDefault();
		}
		// ESC or O key
		else if ( ( event.keyCode === 27 || event.keyCode === 79 ) && features.transforms3d ) {
			if( dom.preview ) {
				closePreview();
			}
			else {
				toggleOverview();
			}

			event.preventDefault();
		}

		// If auto-sliding is enabled we need to cue up
		// another timeout
		cueAutoSlide();

	}

	/**
	 * Handler for the 'touchstart' event, enables support for
	 * swipe and pinch gestures.
	 */
	function onTouchStart( event ) {

		touch.startX = event.touches[0].clientX;
		touch.startY = event.touches[0].clientY;
		touch.startCount = event.touches.length;

		// If there's two touches we need to memorize the distance
		// between those two points to detect pinching
		if( event.touches.length === 2 && config.overview ) {
			touch.startSpan = distanceBetween( {
				x: event.touches[1].clientX,
				y: event.touches[1].clientY
			}, {
				x: touch.startX,
				y: touch.startY
			} );
		}

	}

	/**
	 * Handler for the 'touchmove' event.
	 */
	function onTouchMove( event ) {

		// Each touch should only trigger one action
		if( !touch.captured ) {
			onUserInput( event );

			var currentX = event.touches[0].clientX;
			var currentY = event.touches[0].clientY;

			// If the touch started with two points and still has
			// two active touches; test for the pinch gesture
			if( event.touches.length === 2 && touch.startCount === 2 && config.overview ) {

				// The current distance in pixels between the two touch points
				var currentSpan = distanceBetween( {
					x: event.touches[1].clientX,
					y: event.touches[1].clientY
				}, {
					x: touch.startX,
					y: touch.startY
				} );

				// If the span is larger than the desire amount we've got
				// ourselves a pinch
				if( Math.abs( touch.startSpan - currentSpan ) > touch.threshold ) {
					touch.captured = true;

					if( currentSpan < touch.startSpan ) {
						activateOverview();
					}
					else {
						deactivateOverview();
					}
				}

				event.preventDefault();

			}
			// There was only one touch point, look for a swipe
			else if( event.touches.length === 1 && touch.startCount !== 2 ) {

				var deltaX = currentX - touch.startX,
					deltaY = currentY - touch.startY;

				if( deltaX > touch.threshold && Math.abs( deltaX ) > Math.abs( deltaY ) ) {
					touch.captured = true;
					navigateLeft();
				}
				else if( deltaX < -touch.threshold && Math.abs( deltaX ) > Math.abs( deltaY ) ) {
					touch.captured = true;
					navigateRight();
				}
				else if( deltaY > touch.threshold ) {
					touch.captured = true;
					navigateUp();
				}
				else if( deltaY < -touch.threshold ) {
					touch.captured = true;
					navigateDown();
				}

				// If we're embedded, only block touch events if they have
				// triggered an action
				if( config.embedded ) {
					if( touch.captured || isVerticalSlide( currentSlide ) ) {
						event.preventDefault();
					}
				}
				// Not embedded? Block them all to avoid needless tossing
				// around of the viewport in iOS
				else {
					event.preventDefault();
				}

			}
		}
		// There's a bug with swiping on some Android devices unless
		// the default action is always prevented
		else if( navigator.userAgent.match( /android/gi ) ) {
			event.preventDefault();
		}

	}

	/**
	 * Handler for the 'touchend' event.
	 */
	function onTouchEnd( event ) {

		touch.captured = false;

	}

	/**
	 * Convert pointer down to touch start.
	 */
	function onPointerDown( event ) {

		if( event.pointerType === event.MSPOINTER_TYPE_TOUCH ) {
			event.touches = [{ clientX: event.clientX, clientY: event.clientY }];
			onTouchStart( event );
		}

	}

	/**
	 * Convert pointer move to touch move.
	 */
	function onPointerMove( event ) {

		if( event.pointerType === event.MSPOINTER_TYPE_TOUCH ) {
			event.touches = [{ clientX: event.clientX, clientY: event.clientY }];
			onTouchMove( event );
		}

	}

	/**
	 * Convert pointer up to touch end.
	 */
	function onPointerUp( event ) {

		if( event.pointerType === event.MSPOINTER_TYPE_TOUCH ) {
			event.touches = [{ clientX: event.clientX, clientY: event.clientY }];
			onTouchEnd( event );
		}

	}

	/**
	 * Handles mouse wheel scrolling, throttled to avoid skipping
	 * multiple slides.
	 */
	function onDocumentMouseScroll( event ) {

		if( Date.now() - lastMouseWheelStep > 600 ) {

			lastMouseWheelStep = Date.now();

			var delta = event.detail || -event.wheelDelta;
			if( delta > 0 ) {
				navigateNext();
			}
			else {
				navigatePrev();
			}

		}

	}

	/**
	 * Clicking on the progress bar results in a navigation to the
	 * closest approximate horizontal slide using this equation:
	 *
	 * ( clickX / presentationWidth ) * numberOfSlides
	 */
	function onProgressClicked( event ) {

		onUserInput( event );

		event.preventDefault();

		var slidesTotal = toArray( document.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR ) ).length;
		var slideIndex = Math.floor( ( event.clientX / dom.wrapper.offsetWidth ) * slidesTotal );

		slide( slideIndex );

	}

	/**
	 * Event handler for navigation control buttons.
	 */
	function onNavigateLeftClicked( event ) { event.preventDefault(); onUserInput(); navigateLeft(); }
	function onNavigateRightClicked( event ) { event.preventDefault(); onUserInput(); navigateRight(); }
	function onNavigateUpClicked( event ) { event.preventDefault(); onUserInput(); navigateUp(); }
	function onNavigateDownClicked( event ) { event.preventDefault(); onUserInput(); navigateDown(); }
	function onNavigatePrevClicked( event ) { event.preventDefault(); onUserInput(); navigatePrev(); }
	function onNavigateNextClicked( event ) { event.preventDefault(); onUserInput(); navigateNext(); }

	/**
	 * Handler for the window level 'hashchange' event.
	 */
	function onWindowHashChange( event ) {

		readURL();

	}

	/**
	 * Handler for the window level 'resize' event.
	 */
	function onWindowResize( event ) {

		layout();

	}

	/**
	 * Handle for the window level 'visibilitychange' event.
	 */
	function onPageVisibilityChange( event ) {

		var isHidden =  document.webkitHidden ||
						document.msHidden ||
						document.hidden;

		// If, after clicking a link or similar and we're coming back,
		// focus the document.body to ensure we can use keyboard shortcuts
		if( isHidden === false && document.activeElement !== document.body ) {
			document.activeElement.blur();
			document.body.focus();
		}

	}

	/**
	 * Invoked when a slide is and we're in the overview.
	 */
	function onOverviewSlideClicked( event ) {

		// TODO There's a bug here where the event listeners are not
		// removed after deactivating the overview.
		if( eventsAreBound && isOverview() ) {
			event.preventDefault();

			var element = event.target;

			while( element && !element.nodeName.match( /section/gi ) ) {
				element = element.parentNode;
			}

			if( element && !element.classList.contains( 'disabled' ) ) {

				deactivateOverview();

				if( element.nodeName.match( /section/gi ) ) {
					var h = parseInt( element.getAttribute( 'data-index-h' ), 10 ),
						v = parseInt( element.getAttribute( 'data-index-v' ), 10 );

					slide( h, v );
				}

			}
		}

	}

	/**
	 * Handles clicks on links that are set to preview in the
	 * iframe overlay.
	 */
	function onPreviewLinkClicked( event ) {

		var url = event.target.getAttribute( 'href' );
		if( url ) {
			openPreview( url );
			event.preventDefault();
		}

	}

	/**
	 * Handles click on the auto-sliding controls element.
	 */
	function onAutoSlidePlayerClick( event ) {

		// Replay
		if( Reveal.isLastSlide() && config.loop === false ) {
			slide( 0, 0 );
			resumeAutoSlide();
		}
		// Resume
		else if( autoSlidePaused ) {
			resumeAutoSlide();
		}
		// Pause
		else {
			pauseAutoSlide();
		}

	}


	// --------------------------------------------------------------------//
	// ------------------------ PLAYBACK COMPONENT ------------------------//
	// --------------------------------------------------------------------//


	/**
	 * Constructor for the playback component, which displays
	 * play/pause/progress controls.
	 *
	 * @param {HTMLElement} container The component will append
	 * itself to this
	 * @param {Function} progressCheck A method which will be
	 * called frequently to get the current progress on a range
	 * of 0-1
	 */
	function Playback( container, progressCheck ) {

		// Cosmetics
		this.diameter = 50;
		this.thickness = 3;

		// Flags if we are currently playing
		this.playing = false;

		// Current progress on a 0-1 range
		this.progress = 0;

		// Used to loop the animation smoothly
		this.progressOffset = 1;

		this.container = container;
		this.progressCheck = progressCheck;

		this.canvas = document.createElement( 'canvas' );
		this.canvas.className = 'playback';
		this.canvas.width = this.diameter;
		this.canvas.height = this.diameter;
		this.context = this.canvas.getContext( '2d' );

		this.container.appendChild( this.canvas );

		this.render();

	}

	Playback.prototype.setPlaying = function( value ) {

		var wasPlaying = this.playing;

		this.playing = value;

		// Start repainting if we weren't already
		if( !wasPlaying && this.playing ) {
			this.animate();
		}
		else {
			this.render();
		}

	};

	Playback.prototype.animate = function() {

		var progressBefore = this.progress;

		this.progress = this.progressCheck();

		// When we loop, offset the progress so that it eases
		// smoothly rather than immediately resetting
		if( progressBefore > 0.8 && this.progress < 0.2 ) {
			this.progressOffset = this.progress;
		}

		this.render();

		if( this.playing ) {
			features.requestAnimationFrameMethod.call( window, this.animate.bind( this ) );
		}

	};

	/**
	 * Renders the current progress and playback state.
	 */
	Playback.prototype.render = function() {

		var progress = this.playing ? this.progress : 0,
			radius = ( this.diameter / 2 ) - this.thickness,
			x = this.diameter / 2,
			y = this.diameter / 2,
			iconSize = 14;

		// Ease towards 1
		this.progressOffset += ( 1 - this.progressOffset ) * 0.1;

		var endAngle = ( - Math.PI / 2 ) + ( progress * ( Math.PI * 2 ) );
		var startAngle = ( - Math.PI / 2 ) + ( this.progressOffset * ( Math.PI * 2 ) );

		this.context.save();
		this.context.clearRect( 0, 0, this.diameter, this.diameter );

		// Solid background color
		this.context.beginPath();
		this.context.arc( x, y, radius + 2, 0, Math.PI * 2, false );
		this.context.fillStyle = 'rgba( 0, 0, 0, 0.4 )';
		this.context.fill();

		// Draw progress track
		this.context.beginPath();
		this.context.arc( x, y, radius, 0, Math.PI * 2, false );
		this.context.lineWidth = this.thickness;
		this.context.strokeStyle = '#666';
		this.context.stroke();

		if( this.playing ) {
			// Draw progress on top of track
			this.context.beginPath();
			this.context.arc( x, y, radius, startAngle, endAngle, false );
			this.context.lineWidth = this.thickness;
			this.context.strokeStyle = '#fff';
			this.context.stroke();
		}

		this.context.translate( x - ( iconSize / 2 ), y - ( iconSize / 2 ) );

		// Draw play/pause icons
		if( this.playing ) {
			this.context.fillStyle = '#fff';
			this.context.fillRect( 0, 0, iconSize / 2 - 2, iconSize );
			this.context.fillRect( iconSize / 2 + 2, 0, iconSize / 2 - 2, iconSize );
		}
		else {
			this.context.beginPath();
			this.context.translate( 2, 0 );
			this.context.moveTo( 0, 0 );
			this.context.lineTo( iconSize - 2, iconSize / 2 );
			this.context.lineTo( 0, iconSize );
			this.context.fillStyle = '#fff';
			this.context.fill();
		}

		this.context.restore();

	};

	Playback.prototype.on = function( type, listener ) {
		this.canvas.addEventListener( type, listener, false );
	};

	Playback.prototype.off = function( type, listener ) {
		this.canvas.removeEventListener( type, listener, false );
	};

	Playback.prototype.destroy = function() {

		this.playing = false;

		if( this.canvas.parentNode ) {
			this.container.removeChild( this.canvas );
		}

	};


	// --------------------------------------------------------------------//
	// ------------------------------- API --------------------------------//
	// --------------------------------------------------------------------//


	return {
		initialize: initialize,
		configure: configure,
		sync: sync,

		// Navigation methods
		slide: slide,
		left: navigateLeft,
		right: navigateRight,
		up: navigateUp,
		down: navigateDown,
		prev: navigatePrev,
		next: navigateNext,

		// Fragment methods
		navigateFragment: navigateFragment,
		prevFragment: previousFragment,
		nextFragment: nextFragment,

		// Deprecated aliases
		navigateTo: slide,
		navigateLeft: navigateLeft,
		navigateRight: navigateRight,
		navigateUp: navigateUp,
		navigateDown: navigateDown,
		navigatePrev: navigatePrev,
		navigateNext: navigateNext,

		// Forces an update in slide layout
		layout: layout,

		// Returns an object with the available routes as booleans (left/right/top/bottom)
		availableRoutes: availableRoutes,

		// Returns an object with the available fragments as booleans (prev/next)
		availableFragments: availableFragments,

		// Toggles the overview mode on/off
		toggleOverview: toggleOverview,

		// Toggles the "black screen" mode on/off
		togglePause: togglePause,

		// State checks
		isOverview: isOverview,
		isPaused: isPaused,

		// Adds or removes all internal event listeners (such as keyboard)
		addEventListeners: addEventListeners,
		removeEventListeners: removeEventListeners,

		// Returns the indices of the current, or specified, slide
		getIndices: getIndices,

		// Returns the slide at the specified index, y is optional
		getSlide: function( x, y ) {
			var horizontalSlide = document.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR )[ x ];
			var verticalSlides = horizontalSlide && horizontalSlide.querySelectorAll( 'section' );

			if( typeof y !== 'undefined' ) {
				return verticalSlides ? verticalSlides[ y ] : undefined;
			}

			return horizontalSlide;
		},

		// Returns the previous slide element, may be null
		getPreviousSlide: function() {
			return previousSlide;
		},

		// Returns the current slide element
		getCurrentSlide: function() {
			return currentSlide;
		},

		// Returns the current scale of the presentation content
		getScale: function() {
			return scale;
		},

		// Returns the current configuration object
		getConfig: function() {
			return config;
		},

		// Helper method, retrieves query string as a key/value hash
		getQueryHash: function() {
			var query = {};

			location.search.replace( /[A-Z0-9]+?=([\w\.%-]*)/gi, function(a) {
				query[ a.split( '=' ).shift() ] = a.split( '=' ).pop();
			} );

			// Basic deserialization
			for( var i in query ) {
				var value = query[ i ];

				query[ i ] = unescape( value );

				if( value === 'null' ) query[ i ] = null;
				else if( value === 'true' ) query[ i ] = true;
				else if( value === 'false' ) query[ i ] = false;
				else if( value.match( /^\d+$/ ) ) query[ i ] = parseFloat( value );
			}

			return query;
		},

		// Returns true if we're currently on the first slide
		isFirstSlide: function() {
			return document.querySelector( SLIDES_SELECTOR + '.past' ) == null ? true : false;
		},

		// Returns true if we're currently on the last slide
		isLastSlide: function() {
			if( currentSlide ) {
				// Does this slide has next a sibling?
				if( currentSlide.nextElementSibling ) return false;

				// If it's vertical, does its parent have a next sibling?
				if( isVerticalSlide( currentSlide ) && currentSlide.parentNode.nextElementSibling ) return false;

				return true;
			}

			return false;
		},

		// Checks if reveal.js has been loaded and is ready for use
		isReady: function() {
			return loaded;
		},

		// Forward event binding to the reveal DOM element
		addEventListener: function( type, listener, useCapture ) {
			if( 'addEventListener' in window ) {
				( dom.wrapper || document.querySelector( '.reveal' ) ).addEventListener( type, listener, useCapture );
			}
		},
		removeEventListener: function( type, listener, useCapture ) {
			if( 'addEventListener' in window ) {
				( dom.wrapper || document.querySelector( '.reveal' ) ).removeEventListener( type, listener, useCapture );
			}
		}
	};

})();

var f,aa=this;
function ba(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==
b&&"undefined"==typeof a.call)return"object";return b}var ca="closure_uid_"+(1E9*Math.random()>>>0),da=0;function ea(a,b){var c=a.split("."),d=aa;c[0]in d||!d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===b?d=d[e]?d[e]:d[e]={}:d[e]=b};function ga(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c),b%=4294967296;return b};function ia(a,b){for(var c in a)b.call(void 0,a[c],c,a)};function ja(a,b){null!=a&&this.append.apply(this,arguments)}ja.prototype.Fa="";ja.prototype.append=function(a,b,c){this.Fa+=a;if(null!=b)for(var d=1;d<arguments.length;d++)this.Fa+=arguments[d];return this};ja.prototype.toString=function(){return this.Fa};var ka;function la(){throw Error("No *print-fn* fn set for evaluation environment");}var na=null;function oa(){return new pa(null,5,[qa,!0,sa,!0,ta,!1,ua,!1,va,null],null)}function g(a){return null!=a&&!1!==a}function wa(a){return g(a)?!1:!0}function l(a,b){return a[ba(null==b?null:b)]?!0:a._?!0:n?!1:null}function ya(a){return null==a?null:a.constructor}function za(a,b){var c=ya(b),c=g(g(c)?c.Qb:c)?c.Ob:ba(b);return Error(["No protocol method ",a," defined for type ",c,": ",b].join(""))}
function Ba(a){var b=a.Ob;return g(b)?b:""+p(a)}function Ca(a){for(var b=a.length,c=Array(b),d=0;;)if(d<b)c[d]=a[d],d+=1;else break;return c}var Da={},Ea={};function Fa(a){if(a?a.J:a)return a.J(a);var b;b=Fa[ba(null==a?null:a)];if(!b&&(b=Fa._,!b))throw za("ICounted.-count",a);return b.call(null,a)}function Ga(a){if(a?a.I:a)return a.I(a);var b;b=Ga[ba(null==a?null:a)];if(!b&&(b=Ga._,!b))throw za("IEmptyableCollection.-empty",a);return b.call(null,a)}var Ia={};
function Ja(a,b){if(a?a.D:a)return a.D(a,b);var c;c=Ja[ba(null==a?null:a)];if(!c&&(c=Ja._,!c))throw za("ICollection.-conj",a);return c.call(null,a,b)}
var Ka={},q=function(){function a(a,b,c){if(a?a.Z:a)return a.Z(a,b,c);var k;k=q[ba(null==a?null:a)];if(!k&&(k=q._,!k))throw za("IIndexed.-nth",a);return k.call(null,a,b,c)}function b(a,b){if(a?a.r:a)return a.r(a,b);var c;c=q[ba(null==a?null:a)];if(!c&&(c=q._,!c))throw za("IIndexed.-nth",a);return c.call(null,a,b)}var c=null,c=function(c,e,h){switch(arguments.length){case 2:return b.call(this,c,e);case 3:return a.call(this,c,e,h)}throw Error("Invalid arity: "+arguments.length);};c.c=b;c.d=a;return c}(),
La={};function Ma(a){if(a?a.P:a)return a.P(a);var b;b=Ma[ba(null==a?null:a)];if(!b&&(b=Ma._,!b))throw za("ISeq.-first",a);return b.call(null,a)}function Na(a){if(a?a.U:a)return a.U(a);var b;b=Na[ba(null==a?null:a)];if(!b&&(b=Na._,!b))throw za("ISeq.-rest",a);return b.call(null,a)}
var Oa={},Pa={},Qa=function(){function a(a,b,c){if(a?a.A:a)return a.A(a,b,c);var k;k=Qa[ba(null==a?null:a)];if(!k&&(k=Qa._,!k))throw za("ILookup.-lookup",a);return k.call(null,a,b,c)}function b(a,b){if(a?a.w:a)return a.w(a,b);var c;c=Qa[ba(null==a?null:a)];if(!c&&(c=Qa._,!c))throw za("ILookup.-lookup",a);return c.call(null,a,b)}var c=null,c=function(c,e,h){switch(arguments.length){case 2:return b.call(this,c,e);case 3:return a.call(this,c,e,h)}throw Error("Invalid arity: "+arguments.length);};c.c=
b;c.d=a;return c}();function Ra(a,b){if(a?a.Ia:a)return a.Ia(a,b);var c;c=Ra[ba(null==a?null:a)];if(!c&&(c=Ra._,!c))throw za("IAssociative.-contains-key?",a);return c.call(null,a,b)}function Sa(a,b,c){if(a?a.qa:a)return a.qa(a,b,c);var d;d=Sa[ba(null==a?null:a)];if(!d&&(d=Sa._,!d))throw za("IAssociative.-assoc",a);return d.call(null,a,b,c)}var Ta={};function Ua(a,b){if(a?a.Ka:a)return a.Ka(a,b);var c;c=Ua[ba(null==a?null:a)];if(!c&&(c=Ua._,!c))throw za("IMap.-dissoc",a);return c.call(null,a,b)}
var Va={};function Wa(a){if(a?a.La:a)return a.La(a);var b;b=Wa[ba(null==a?null:a)];if(!b&&(b=Wa._,!b))throw za("IMapEntry.-key",a);return b.call(null,a)}function jb(a){if(a?a.ab:a)return a.ab(a);var b;b=jb[ba(null==a?null:a)];if(!b&&(b=jb._,!b))throw za("IMapEntry.-val",a);return b.call(null,a)}var kb={};function lb(a,b){if(a?a.Lb:a)return a.Lb(0,b);var c;c=lb[ba(null==a?null:a)];if(!c&&(c=lb._,!c))throw za("ISet.-disjoin",a);return c.call(null,a,b)}
function mb(a){if(a?a.ra:a)return a.ra(a);var b;b=mb[ba(null==a?null:a)];if(!b&&(b=mb._,!b))throw za("IStack.-peek",a);return b.call(null,a)}function nb(a){if(a?a.sa:a)return a.sa(a);var b;b=nb[ba(null==a?null:a)];if(!b&&(b=nb._,!b))throw za("IStack.-pop",a);return b.call(null,a)}var ob={};function pb(a,b,c){if(a?a.Da:a)return a.Da(a,b,c);var d;d=pb[ba(null==a?null:a)];if(!d&&(d=pb._,!d))throw za("IVector.-assoc-n",a);return d.call(null,a,b,c)}
function qb(a){if(a?a.Gb:a)return a.state;var b;b=qb[ba(null==a?null:a)];if(!b&&(b=qb._,!b))throw za("IDeref.-deref",a);return b.call(null,a)}var ac={};function bc(a){if(a?a.C:a)return a.C(a);var b;b=bc[ba(null==a?null:a)];if(!b&&(b=bc._,!b))throw za("IMeta.-meta",a);return b.call(null,a)}var cc={};function ec(a,b){if(a?a.G:a)return a.G(a,b);var c;c=ec[ba(null==a?null:a)];if(!c&&(c=ec._,!c))throw za("IWithMeta.-with-meta",a);return c.call(null,a,b)}
var fc={},gc=function(){function a(a,b,c){if(a?a.O:a)return a.O(a,b,c);var k;k=gc[ba(null==a?null:a)];if(!k&&(k=gc._,!k))throw za("IReduce.-reduce",a);return k.call(null,a,b,c)}function b(a,b){if(a?a.N:a)return a.N(a,b);var c;c=gc[ba(null==a?null:a)];if(!c&&(c=gc._,!c))throw za("IReduce.-reduce",a);return c.call(null,a,b)}var c=null,c=function(c,e,h){switch(arguments.length){case 2:return b.call(this,c,e);case 3:return a.call(this,c,e,h)}throw Error("Invalid arity: "+arguments.length);};c.c=b;c.d=
a;return c}();function hc(a,b){if(a?a.t:a)return a.t(a,b);var c;c=hc[ba(null==a?null:a)];if(!c&&(c=hc._,!c))throw za("IEquiv.-equiv",a);return c.call(null,a,b)}function ic(a){if(a?a.u:a)return a.u(a);var b;b=ic[ba(null==a?null:a)];if(!b&&(b=ic._,!b))throw za("IHash.-hash",a);return b.call(null,a)}var jc={};function kc(a){if(a?a.F:a)return a.F(a);var b;b=kc[ba(null==a?null:a)];if(!b&&(b=kc._,!b))throw za("ISeqable.-seq",a);return b.call(null,a)}var lc={},uc={};
function Vc(a){if(a?a.Ma:a)return a.Ma(a);var b;b=Vc[ba(null==a?null:a)];if(!b&&(b=Vc._,!b))throw za("IReversible.-rseq",a);return b.call(null,a)}function Wc(a,b){if(a?a.vb:a)return a.vb(a,b);var c;c=Wc[ba(null==a?null:a)];if(!c&&(c=Wc._,!c))throw za("ISorted.-sorted-seq",a);return c.call(null,a,b)}function Xc(a,b,c){if(a?a.wb:a)return a.wb(a,b,c);var d;d=Xc[ba(null==a?null:a)];if(!d&&(d=Xc._,!d))throw za("ISorted.-sorted-seq-from",a);return d.call(null,a,b,c)}
function Yc(a,b){if(a?a.ub:a)return a.ub(a,b);var c;c=Yc[ba(null==a?null:a)];if(!c&&(c=Yc._,!c))throw za("ISorted.-entry-key",a);return c.call(null,a,b)}function Zc(a){if(a?a.tb:a)return a.tb(a);var b;b=Zc[ba(null==a?null:a)];if(!b&&(b=Zc._,!b))throw za("ISorted.-comparator",a);return b.call(null,a)}function $c(a,b){if(a?a.Nb:a)return a.Nb(0,b);var c;c=$c[ba(null==a?null:a)];if(!c&&(c=$c._,!c))throw za("IWriter.-write",a);return c.call(null,a,b)}var ad={};
function bd(a,b,c){if(a?a.s:a)return a.s(a,b,c);var d;d=bd[ba(null==a?null:a)];if(!d&&(d=bd._,!d))throw za("IPrintWithWriter.-pr-writer",a);return d.call(null,a,b,c)}function cd(a,b,c){if(a?a.yb:a)return a.yb(a,b,c);var d;d=cd[ba(null==a?null:a)];if(!d&&(d=cd._,!d))throw za("IWatchable.-notify-watches",a);return d.call(null,a,b,c)}function dd(a,b,c){if(a?a.xb:a)return a.xb(a,b,c);var d;d=dd[ba(null==a?null:a)];if(!d&&(d=dd._,!d))throw za("IWatchable.-add-watch",a);return d.call(null,a,b,c)}
function ed(a){if(a?a.Ja:a)return a.Ja(a);var b;b=ed[ba(null==a?null:a)];if(!b&&(b=ed._,!b))throw za("IEditableCollection.-as-transient",a);return b.call(null,a)}function fd(a,b){if(a?a.Pa:a)return a.Pa(a,b);var c;c=fd[ba(null==a?null:a)];if(!c&&(c=fd._,!c))throw za("ITransientCollection.-conj!",a);return c.call(null,a,b)}function gd(a){if(a?a.Qa:a)return a.Qa(a);var b;b=gd[ba(null==a?null:a)];if(!b&&(b=gd._,!b))throw za("ITransientCollection.-persistent!",a);return b.call(null,a)}
function hd(a,b,c){if(a?a.Oa:a)return a.Oa(a,b,c);var d;d=hd[ba(null==a?null:a)];if(!d&&(d=hd._,!d))throw za("ITransientAssociative.-assoc!",a);return d.call(null,a,b,c)}function id(a,b,c){if(a?a.Mb:a)return a.Mb(0,b,c);var d;d=id[ba(null==a?null:a)];if(!d&&(d=id._,!d))throw za("ITransientVector.-assoc-n!",a);return d.call(null,a,b,c)}function jd(a){if(a?a.Fb:a)return a.Fb();var b;b=jd[ba(null==a?null:a)];if(!b&&(b=jd._,!b))throw za("IChunk.-drop-first",a);return b.call(null,a)}
function kd(a){if(a?a.hb:a)return a.hb(a);var b;b=kd[ba(null==a?null:a)];if(!b&&(b=kd._,!b))throw za("IChunkedSeq.-chunked-first",a);return b.call(null,a)}function ld(a){if(a?a.ib:a)return a.ib(a);var b;b=ld[ba(null==a?null:a)];if(!b&&(b=ld._,!b))throw za("IChunkedSeq.-chunked-rest",a);return b.call(null,a)}function yd(a){if(a?a.gb:a)return a.gb(a);var b;b=yd[ba(null==a?null:a)];if(!b&&(b=yd._,!b))throw za("IChunkedNext.-chunked-next",a);return b.call(null,a)}
function zd(a){this.gc=a;this.p=0;this.l=1073741824}zd.prototype.Nb=function(a,b){return this.gc.append(b)};function Ad(a){var b=new ja;a.s(null,new zd(b),oa());return""+p(b)}function Bd(a,b){if(g(Cd.c?Cd.c(a,b):Cd.call(null,a,b)))return 0;var c=wa(a.X);if(g(c?b.X:c))return-1;if(g(a.X)){if(wa(b.X))return 1;c=Dd.c?Dd.c(a.X,b.X):Dd.call(null,a.X,b.X);return 0===c?Dd.c?Dd.c(a.name,b.name):Dd.call(null,a.name,b.name):c}return Ed?Dd.c?Dd.c(a.name,b.name):Dd.call(null,a.name,b.name):null}
function Fd(a,b,c,d,e){this.X=a;this.name=b;this.Ba=c;this.Ca=d;this.ea=e;this.l=2154168321;this.p=4096}f=Fd.prototype;f.s=function(a,b){return $c(b,this.Ba)};f.u=function(){var a=this.Ca;return null!=a?a:this.Ca=a=Gd.c?Gd.c(Hd.a?Hd.a(this.X):Hd.call(null,this.X),Hd.a?Hd.a(this.name):Hd.call(null,this.name)):Gd.call(null,Hd.a?Hd.a(this.X):Hd.call(null,this.X),Hd.a?Hd.a(this.name):Hd.call(null,this.name))};f.G=function(a,b){return new Fd(this.X,this.name,this.Ba,this.Ca,b)};f.C=function(){return this.ea};
f.call=function(){var a=null;return a=function(a,c,d){switch(arguments.length){case 2:return Qa.d(c,this,null);case 3:return Qa.d(c,this,d)}throw Error("Invalid arity: "+arguments.length);}}();f.apply=function(a,b){return this.call.apply(this,[this].concat(Ca(b)))};f.a=function(a){return Qa.d(a,this,null)};f.c=function(a,b){return Qa.d(a,this,b)};f.t=function(a,b){return b instanceof Fd?this.Ba===b.Ba:!1};f.toString=function(){return this.Ba};
var Id=function(){function a(a,b){var c=null!=a?[p(a),p("/"),p(b)].join(""):b;return new Fd(a,b,c,null,null)}function b(a){return a instanceof Fd?a:c.c(null,a)}var c=null,c=function(c,e){switch(arguments.length){case 1:return b.call(this,c);case 2:return a.call(this,c,e)}throw Error("Invalid arity: "+arguments.length);};c.a=b;c.c=a;return c}();
function s(a){if(null==a)return null;if(a&&(a.l&8388608||a.pc))return a.F(null);if(a instanceof Array||"string"===typeof a)return 0===a.length?null:new Jd(a,0);if(l(jc,a))return kc(a);if(n)throw Error([p(a),p("is not ISeqable")].join(""));return null}function u(a){if(null==a)return null;if(a&&(a.l&64||a.Na))return a.P(null);a=s(a);return null==a?null:Ma(a)}function w(a){return null!=a?a&&(a.l&64||a.Na)?a.U(null):(a=s(a))?Na(a):Kd:Kd}
function x(a){return null==a?null:a&&(a.l&128||a.Kb)?a.aa(null):s(w(a))}
var Cd=function(){function a(a,b){return null==a?null==b:a===b||hc(a,b)}var b=null,c=function(){function a(b,d,m){var r=null;2<arguments.length&&(r=z(Array.prototype.slice.call(arguments,2),0));return c.call(this,b,d,r)}function c(a,d,e){for(;;)if(b.c(a,d))if(x(e))a=d,d=u(e),e=x(e);else return b.c(d,u(e));else return!1}a.j=2;a.g=function(a){var b=u(a);a=x(a);var d=u(a);a=w(a);return c(b,d,a)};a.b=c;return a}(),b=function(b,e,h){switch(arguments.length){case 1:return!0;case 2:return a.call(this,b,
e);default:return c.b(b,e,z(arguments,2))}throw Error("Invalid arity: "+arguments.length);};b.j=2;b.g=c.g;b.a=function(){return!0};b.c=a;b.b=c.b;return b}();Ea["null"]=!0;Fa["null"]=function(){return 0};Date.prototype.t=function(a,b){return b instanceof Date&&this.toString()===b.toString()};hc.number=function(a,b){return a===b};ac["function"]=!0;bc["function"]=function(){return null};Da["function"]=!0;ic._=function(a){return a[ca]||(a[ca]=++da)};function Ld(a){return a+1}
var Md=function(){function a(a,b,c,d){for(var r=Fa(a);;)if(d<r)c=b.c?b.c(c,q.c(a,d)):b.call(null,c,q.c(a,d)),d+=1;else return c}function b(a,b,c){for(var d=Fa(a),r=0;;)if(r<d)c=b.c?b.c(c,q.c(a,r)):b.call(null,c,q.c(a,r)),r+=1;else return c}function c(a,b){var c=Fa(a);if(0===c)return b.q?b.q():b.call(null);for(var d=q.c(a,0),r=1;;)if(r<c)d=b.c?b.c(d,q.c(a,r)):b.call(null,d,q.c(a,r)),r+=1;else return d}var d=null,d=function(d,h,k,m){switch(arguments.length){case 2:return c.call(this,d,h);case 3:return b.call(this,
d,h,k);case 4:return a.call(this,d,h,k,m)}throw Error("Invalid arity: "+arguments.length);};d.c=c;d.d=b;d.e=a;return d}(),Nd=function(){function a(a,b,c,d){for(var r=a.length;;)if(d<r)c=b.c?b.c(c,a[d]):b.call(null,c,a[d]),d+=1;else return c}function b(a,b,c){for(var d=a.length,r=0;;)if(r<d)c=b.c?b.c(c,a[r]):b.call(null,c,a[r]),r+=1;else return c}function c(a,b){var c=a.length;if(0===a.length)return b.q?b.q():b.call(null);for(var d=a[0],r=1;;)if(r<c)d=b.c?b.c(d,a[r]):b.call(null,d,a[r]),r+=1;else return d}
var d=null,d=function(d,h,k,m){switch(arguments.length){case 2:return c.call(this,d,h);case 3:return b.call(this,d,h,k);case 4:return a.call(this,d,h,k,m)}throw Error("Invalid arity: "+arguments.length);};d.c=c;d.d=b;d.e=a;return d}();function Od(a){return a?a.l&2||a.Tb?!0:a.l?!1:l(Ea,a):l(Ea,a)}function Pd(a){return a?a.l&16||a.Hb?!0:a.l?!1:l(Ka,a):l(Ka,a)}function Jd(a,b){this.f=a;this.o=b;this.l=166199550;this.p=8192}f=Jd.prototype;f.u=function(){return Qd.a?Qd.a(this):Qd.call(null,this)};
f.aa=function(){return this.o+1<this.f.length?new Jd(this.f,this.o+1):null};f.D=function(a,b){return A.c?A.c(b,this):A.call(null,b,this)};f.Ma=function(){var a=Fa(this);return 0<a?new Rd(this,a-1,null):null};f.toString=function(){return Ad(this)};f.N=function(a,b){return Nd.e(this.f,b,this.f[this.o],this.o+1)};f.O=function(a,b,c){return Nd.e(this.f,b,c,this.o)};f.F=function(){return this};f.J=function(){return this.f.length-this.o};f.P=function(){return this.f[this.o]};
f.U=function(){return this.o+1<this.f.length?new Jd(this.f,this.o+1):Kd};f.t=function(a,b){return Sd.c?Sd.c(this,b):Sd.call(null,this,b)};f.r=function(a,b){var c=b+this.o;return c<this.f.length?this.f[c]:null};f.Z=function(a,b,c){a=b+this.o;return a<this.f.length?this.f[a]:c};f.I=function(){return Kd};
var Td=function(){function a(a,b){return b<a.length?new Jd(a,b):null}function b(a){return c.c(a,0)}var c=null,c=function(c,e){switch(arguments.length){case 1:return b.call(this,c);case 2:return a.call(this,c,e)}throw Error("Invalid arity: "+arguments.length);};c.a=b;c.c=a;return c}(),z=function(){function a(a,b){return Td.c(a,b)}function b(a){return Td.c(a,0)}var c=null,c=function(c,e){switch(arguments.length){case 1:return b.call(this,c);case 2:return a.call(this,c,e)}throw Error("Invalid arity: "+
arguments.length);};c.a=b;c.c=a;return c}();function Rd(a,b,c){this.fb=a;this.o=b;this.i=c;this.l=32374862;this.p=8192}f=Rd.prototype;f.u=function(){return Qd.a?Qd.a(this):Qd.call(null,this)};f.D=function(a,b){return A.c?A.c(b,this):A.call(null,b,this)};f.toString=function(){return Ad(this)};f.N=function(a,b){return Ud.c?Ud.c(b,this):Ud.call(null,b,this)};f.O=function(a,b,c){return Ud.d?Ud.d(b,c,this):Ud.call(null,b,c,this)};f.F=function(){return this};f.J=function(){return this.o+1};
f.P=function(){return q.c(this.fb,this.o)};f.U=function(){return 0<this.o?new Rd(this.fb,this.o-1,null):null};f.t=function(a,b){return Sd.c?Sd.c(this,b):Sd.call(null,this,b)};f.G=function(a,b){return new Rd(this.fb,this.o,b)};f.C=function(){return this.i};f.I=function(){return Vd.c?Vd.c(Kd,this.i):Vd.call(null,Kd,this.i)};hc._=function(a,b){return a===b};
var Wd=function(){function a(a,b){return null!=a?Ja(a,b):Ja(Kd,b)}var b=null,c=function(){function a(b,d,m){var r=null;2<arguments.length&&(r=z(Array.prototype.slice.call(arguments,2),0));return c.call(this,b,d,r)}function c(a,d,e){for(;;)if(g(e))a=b.c(a,d),d=u(e),e=x(e);else return b.c(a,d)}a.j=2;a.g=function(a){var b=u(a);a=x(a);var d=u(a);a=w(a);return c(b,d,a)};a.b=c;return a}(),b=function(b,e,h){switch(arguments.length){case 2:return a.call(this,b,e);default:return c.b(b,e,z(arguments,2))}throw Error("Invalid arity: "+
arguments.length);};b.j=2;b.g=c.g;b.c=a;b.b=c.b;return b}();function B(a){if(null!=a)if(a&&(a.l&2||a.Tb))a=a.J(null);else if(a instanceof Array)a=a.length;else if("string"===typeof a)a=a.length;else if(l(Ea,a))a=Fa(a);else if(n)a:{a=s(a);for(var b=0;;){if(Od(a)){a=b+Fa(a);break a}a=x(a);b+=1}a=void 0}else a=null;else a=0;return a}
var Xd=function(){function a(a,b,c){for(;;){if(null==a)return c;if(0===b)return s(a)?u(a):c;if(Pd(a))return q.d(a,b,c);if(s(a))a=x(a),b-=1;else return n?c:null}}function b(a,b){for(;;){if(null==a)throw Error("Index out of bounds");if(0===b){if(s(a))return u(a);throw Error("Index out of bounds");}if(Pd(a))return q.c(a,b);if(s(a)){var c=x(a),k=b-1;a=c;b=k}else{if(n)throw Error("Index out of bounds");return null}}}var c=null,c=function(c,e,h){switch(arguments.length){case 2:return b.call(this,c,e);case 3:return a.call(this,
c,e,h)}throw Error("Invalid arity: "+arguments.length);};c.c=b;c.d=a;return c}(),C=function(){function a(a,b,c){if(null!=a){if(a&&(a.l&16||a.Hb))return a.Z(null,b,c);if(a instanceof Array||"string"===typeof a)return b<a.length?a[b]:c;if(l(Ka,a))return q.c(a,b);if(n){if(a?a.l&64||a.Na||(a.l?0:l(La,a)):l(La,a))return Xd.d(a,b,c);throw Error([p("nth not supported on this type "),p(Ba(ya(a)))].join(""));}return null}return c}function b(a,b){if(null==a)return null;if(a&&(a.l&16||a.Hb))return a.r(null,
b);if(a instanceof Array||"string"===typeof a)return b<a.length?a[b]:null;if(l(Ka,a))return q.c(a,b);if(n){if(a?a.l&64||a.Na||(a.l?0:l(La,a)):l(La,a))return Xd.c(a,b);throw Error([p("nth not supported on this type "),p(Ba(ya(a)))].join(""));}return null}var c=null,c=function(c,e,h){switch(arguments.length){case 2:return b.call(this,c,e);case 3:return a.call(this,c,e,h)}throw Error("Invalid arity: "+arguments.length);};c.c=b;c.d=a;return c}(),Yd=function(){function a(a,b,c){return null!=a?a&&(a.l&
256||a.Wb)?a.A(null,b,c):a instanceof Array?b<a.length?a[b]:c:"string"===typeof a?b<a.length?a[b]:c:l(Pa,a)?Qa.d(a,b,c):n?c:null:c}function b(a,b){return null==a?null:a&&(a.l&256||a.Wb)?a.w(null,b):a instanceof Array?b<a.length?a[b]:null:"string"===typeof a?b<a.length?a[b]:null:l(Pa,a)?Qa.c(a,b):null}var c=null,c=function(c,e,h){switch(arguments.length){case 2:return b.call(this,c,e);case 3:return a.call(this,c,e,h)}throw Error("Invalid arity: "+arguments.length);};c.c=b;c.d=a;return c}(),$d=function(){function a(a,
b,c){return null!=a?Sa(a,b,c):Zd.c?Zd.c([b],[c]):Zd.call(null,[b],[c])}var b=null,c=function(){function a(b,d,m,r){var t=null;3<arguments.length&&(t=z(Array.prototype.slice.call(arguments,3),0));return c.call(this,b,d,m,t)}function c(a,d,e,r){for(;;)if(a=b.d(a,d,e),g(r))d=u(r),e=u(x(r)),r=x(x(r));else return a}a.j=3;a.g=function(a){var b=u(a);a=x(a);var d=u(a);a=x(a);var r=u(a);a=w(a);return c(b,d,r,a)};a.b=c;return a}(),b=function(b,e,h,k){switch(arguments.length){case 3:return a.call(this,b,e,h);
default:return c.b(b,e,h,z(arguments,3))}throw Error("Invalid arity: "+arguments.length);};b.j=3;b.g=c.g;b.d=a;b.b=c.b;return b}(),ae=function(){function a(a,b){return null==a?null:Ua(a,b)}var b=null,c=function(){function a(b,d,m){var r=null;2<arguments.length&&(r=z(Array.prototype.slice.call(arguments,2),0));return c.call(this,b,d,r)}function c(a,d,e){for(;;){if(null==a)return null;a=b.c(a,d);if(g(e))d=u(e),e=x(e);else return a}}a.j=2;a.g=function(a){var b=u(a);a=x(a);var d=u(a);a=w(a);return c(b,
d,a)};a.b=c;return a}(),b=function(b,e,h){switch(arguments.length){case 1:return b;case 2:return a.call(this,b,e);default:return c.b(b,e,z(arguments,2))}throw Error("Invalid arity: "+arguments.length);};b.j=2;b.g=c.g;b.a=function(a){return a};b.c=a;b.b=c.b;return b}();function be(a){var b="function"==ba(a);return b?b:a?g(g(null)?null:a.Sb)?!0:a.Pb?!1:l(Da,a):l(Da,a)}
var Vd=function ce(b,c){return be(b)&&!(b?b.l&262144||b.tc||(b.l?0:l(cc,b)):l(cc,b))?ce(function(){"undefined"===typeof ka&&(ka=function(b,c,h,k){this.i=b;this.Ua=c;this.ic=h;this.ec=k;this.p=0;this.l=393217},ka.Qb=!0,ka.Ob="cljs.core/t11717",ka.ac=function(b){return $c(b,"cljs.core/t11717")},ka.prototype.call=function(){function b(d,k){d=this;var m=null;1<arguments.length&&(m=z(Array.prototype.slice.call(arguments,1),0));return c.call(this,d,m)}function c(b,d){return de.c?de.c(b.Ua,d):de.call(null,
b.Ua,d)}b.j=1;b.g=function(b){var d=u(b);b=w(b);return c(d,b)};b.b=c;return b}(),ka.prototype.apply=function(b,c){return this.call.apply(this,[this].concat(Ca(c)))},ka.prototype.c=function(){function b(d){var k=null;0<arguments.length&&(k=z(Array.prototype.slice.call(arguments,0),0));return c.call(this,k)}function c(b){return de.c?de.c(self__.Ua,b):de.call(null,self__.Ua,b)}b.j=0;b.g=function(b){b=s(b);return c(b)};b.b=c;return b}(),ka.prototype.Sb=!0,ka.prototype.C=function(){return this.ec},ka.prototype.G=
function(b,c){return new ka(this.i,this.Ua,this.ic,c)});return new ka(c,b,ce,null)}(),c):null==b?null:ec(b,c)};function ee(a){var b=null!=a;return(b?a?a.l&131072||a.Yb||(a.l?0:l(ac,a)):l(ac,a):b)?bc(a):null}
var fe=function(){function a(a,b){return null==a?null:lb(a,b)}var b=null,c=function(){function a(b,d,m){var r=null;2<arguments.length&&(r=z(Array.prototype.slice.call(arguments,2),0));return c.call(this,b,d,r)}function c(a,d,e){for(;;){if(null==a)return null;a=b.c(a,d);if(g(e))d=u(e),e=x(e);else return a}}a.j=2;a.g=function(a){var b=u(a);a=x(a);var d=u(a);a=w(a);return c(b,d,a)};a.b=c;return a}(),b=function(b,e,h){switch(arguments.length){case 1:return b;case 2:return a.call(this,b,e);default:return c.b(b,
e,z(arguments,2))}throw Error("Invalid arity: "+arguments.length);};b.j=2;b.g=c.g;b.a=function(a){return a};b.c=a;b.b=c.b;return b}(),ge={},he=0;function Hd(a){if(a&&(a.l&4194304||a.mc))a=a.u(null);else if("number"===typeof a)a=Math.floor(a)%2147483647;else if(!0===a)a=1;else if(!1===a)a=0;else if("string"===typeof a){255<he&&(ge={},he=0);var b=ge[a];"number"!==typeof b&&(b=ga(a),ge[a]=b,he+=1);a=b}else a=null==a?0:n?ic(a):null;return a}
function ie(a){return null==a?!1:a?a.l&1024||a.nc?!0:a.l?!1:l(Ta,a):l(Ta,a)}function je(a){return a?a.l&16384||a.sc?!0:a.l?!1:l(ob,a):l(ob,a)}function ke(a){return a?a.p&512||a.jc?!0:!1:!1}function le(a){var b=[];ia(a,function(a,d){return b.push(d)});return b}function me(a,b,c,d,e){for(;0!==e;)c[d]=a[b],d+=1,e-=1,b+=1}var ne={};function oe(a){return null==a?!1:a?a.l&64||a.Na?!0:a.l?!1:l(La,a):l(La,a)}function pe(a){return g(a)?!0:!1}function qe(a,b){return Yd.d(a,b,ne)===ne?!1:!0}
function Dd(a,b){if(a===b)return 0;if(null==a)return-1;if(null==b)return 1;if(ya(a)===ya(b))return a&&(a.p&2048||a.Za)?a.$a(null,b):a>b?1:a<b?-1:0;if(n)throw Error("compare on non-nil objects of different types");return null}
var re=function(){function a(a,b,c,k){for(;;){var m=Dd(C.c(a,k),C.c(b,k));if(0===m&&k+1<c)k+=1;else return m}}function b(a,b){var h=B(a),k=B(b);return h<k?-1:h>k?1:n?c.e(a,b,h,0):null}var c=null,c=function(c,e,h,k){switch(arguments.length){case 2:return b.call(this,c,e);case 4:return a.call(this,c,e,h,k)}throw Error("Invalid arity: "+arguments.length);};c.c=b;c.e=a;return c}(),Ud=function(){function a(a,b,c){for(c=s(c);;)if(c)b=a.c?a.c(b,u(c)):a.call(null,b,u(c)),c=x(c);else return b}function b(a,
b){var c=s(b);return c?se.d?se.d(a,u(c),x(c)):se.call(null,a,u(c),x(c)):a.q?a.q():a.call(null)}var c=null,c=function(c,e,h){switch(arguments.length){case 2:return b.call(this,c,e);case 3:return a.call(this,c,e,h)}throw Error("Invalid arity: "+arguments.length);};c.c=b;c.d=a;return c}(),se=function(){function a(a,b,c){return c&&(c.l&524288||c.$b)?c.O(null,a,b):c instanceof Array?Nd.d(c,a,b):"string"===typeof c?Nd.d(c,a,b):l(fc,c)?gc.d(c,a,b):n?Ud.d(a,b,c):null}function b(a,b){return b&&(b.l&524288||
b.$b)?b.N(null,a):b instanceof Array?Nd.c(b,a):"string"===typeof b?Nd.c(b,a):l(fc,b)?gc.c(b,a):n?Ud.c(a,b):null}var c=null,c=function(c,e,h){switch(arguments.length){case 2:return b.call(this,c,e);case 3:return a.call(this,c,e,h)}throw Error("Invalid arity: "+arguments.length);};c.c=b;c.d=a;return c}(),te=function(){var a=null,b=function(){function a(c,h,k){var m=null;2<arguments.length&&(m=z(Array.prototype.slice.call(arguments,2),0));return b.call(this,c,h,m)}function b(a,c,d){for(;;)if(a<c)if(x(d))a=
c,c=u(d),d=x(d);else return c<u(d);else return!1}a.j=2;a.g=function(a){var c=u(a);a=x(a);var k=u(a);a=w(a);return b(c,k,a)};a.b=b;return a}(),a=function(a,d,e){switch(arguments.length){case 1:return!0;case 2:return a<d;default:return b.b(a,d,z(arguments,2))}throw Error("Invalid arity: "+arguments.length);};a.j=2;a.g=b.g;a.a=function(){return!0};a.c=function(a,b){return a<b};a.b=b.b;return a}(),ue=function(){var a=null,b=function(){function a(c,h,k){var m=null;2<arguments.length&&(m=z(Array.prototype.slice.call(arguments,
2),0));return b.call(this,c,h,m)}function b(a,c,d){for(;;)if(a<=c)if(x(d))a=c,c=u(d),d=x(d);else return c<=u(d);else return!1}a.j=2;a.g=function(a){var c=u(a);a=x(a);var k=u(a);a=w(a);return b(c,k,a)};a.b=b;return a}(),a=function(a,d,e){switch(arguments.length){case 1:return!0;case 2:return a<=d;default:return b.b(a,d,z(arguments,2))}throw Error("Invalid arity: "+arguments.length);};a.j=2;a.g=b.g;a.a=function(){return!0};a.c=function(a,b){return a<=b};a.b=b.b;return a}(),ve=function(){var a=null,
b=function(){function a(c,h,k){var m=null;2<arguments.length&&(m=z(Array.prototype.slice.call(arguments,2),0));return b.call(this,c,h,m)}function b(a,c,d){for(;;)if(a>c)if(x(d))a=c,c=u(d),d=x(d);else return c>u(d);else return!1}a.j=2;a.g=function(a){var c=u(a);a=x(a);var k=u(a);a=w(a);return b(c,k,a)};a.b=b;return a}(),a=function(a,d,e){switch(arguments.length){case 1:return!0;case 2:return a>d;default:return b.b(a,d,z(arguments,2))}throw Error("Invalid arity: "+arguments.length);};a.j=2;a.g=b.g;
a.a=function(){return!0};a.c=function(a,b){return a>b};a.b=b.b;return a}(),ef=function(){var a=null,b=function(){function a(c,h,k){var m=null;2<arguments.length&&(m=z(Array.prototype.slice.call(arguments,2),0));return b.call(this,c,h,m)}function b(a,c,d){for(;;)if(a>=c)if(x(d))a=c,c=u(d),d=x(d);else return c>=u(d);else return!1}a.j=2;a.g=function(a){var c=u(a);a=x(a);var k=u(a);a=w(a);return b(c,k,a)};a.b=b;return a}(),a=function(a,d,e){switch(arguments.length){case 1:return!0;case 2:return a>=d;
default:return b.b(a,d,z(arguments,2))}throw Error("Invalid arity: "+arguments.length);};a.j=2;a.g=b.g;a.a=function(){return!0};a.c=function(a,b){return a>=b};a.b=b.b;return a}();function ff(a){return 0<=a?Math.floor.a?Math.floor.a(a):Math.floor.call(null,a):Math.ceil.a?Math.ceil.a(a):Math.ceil.call(null,a)}function gf(a){a-=a>>1&1431655765;a=(a&858993459)+(a>>2&858993459);return 16843009*(a+(a>>4)&252645135)>>24}function hf(a){var b=1;for(a=s(a);;)if(a&&0<b)b-=1,a=x(a);else return a}
var p=function(){function a(a){return null==a?"":a.toString()}var b=null,c=function(){function a(b,d){var m=null;1<arguments.length&&(m=z(Array.prototype.slice.call(arguments,1),0));return c.call(this,b,m)}function c(a,d){for(var e=new ja(b.a(a)),r=d;;)if(g(r))e=e.append(b.a(u(r))),r=x(r);else return e.toString()}a.j=1;a.g=function(a){var b=u(a);a=w(a);return c(b,a)};a.b=c;return a}(),b=function(b,e){switch(arguments.length){case 0:return"";case 1:return a.call(this,b);default:return c.b(b,z(arguments,
1))}throw Error("Invalid arity: "+arguments.length);};b.j=1;b.g=c.g;b.q=function(){return""};b.a=a;b.b=c.b;return b}(),jf=function(){var a=null,a=function(a,c,d){switch(arguments.length){case 2:return a.substring(c);case 3:return a.substring(c,d)}throw Error("Invalid arity: "+arguments.length);};a.c=function(a,c){return a.substring(c)};a.d=function(a,c,d){return a.substring(c,d)};return a}();
function Sd(a,b){return pe((b?b.l&16777216||b.qc||(b.l?0:l(lc,b)):l(lc,b))?function(){for(var c=s(a),d=s(b);;){if(null==c)return null==d;if(null==d)return!1;if(Cd.c(u(c),u(d)))c=x(c),d=x(d);else return n?!1:null}}():null)}function Gd(a,b){return a^b+2654435769+(a<<6)+(a>>2)}function Qd(a){if(s(a)){var b=Hd(u(a));for(a=x(a);;){if(null==a)return b;b=Gd(b,Hd(u(a)));a=x(a)}}else return 0}
function kf(a){var b=0;for(a=s(a);;)if(a){var c=u(a),b=(b+(Hd(lf.a?lf.a(c):lf.call(null,c))^Hd(mf.a?mf.a(c):mf.call(null,c))))%4503599627370496;a=x(a)}else return b}function nf(a,b,c,d,e){this.i=a;this.first=b;this.va=c;this.count=d;this.m=e;this.l=65937646;this.p=8192}f=nf.prototype;f.u=function(){var a=this.m;return null!=a?a:this.m=a=Qd(this)};f.aa=function(){return 1===this.count?null:this.va};f.D=function(a,b){return new nf(this.i,b,this,this.count+1,null)};f.toString=function(){return Ad(this)};
f.N=function(a,b){return Ud.c(b,this)};f.O=function(a,b,c){return Ud.d(b,c,this)};f.F=function(){return this};f.J=function(){return this.count};f.ra=function(){return this.first};f.sa=function(){return Na(this)};f.P=function(){return this.first};f.U=function(){return 1===this.count?Kd:this.va};f.t=function(a,b){return Sd(this,b)};f.G=function(a,b){return new nf(b,this.first,this.va,this.count,this.m)};f.C=function(){return this.i};f.I=function(){return Kd};
function of(a){this.i=a;this.l=65937614;this.p=8192}f=of.prototype;f.u=function(){return 0};f.aa=function(){return null};f.D=function(a,b){return new nf(this.i,b,null,1,null)};f.toString=function(){return Ad(this)};f.N=function(a,b){return Ud.c(b,this)};f.O=function(a,b,c){return Ud.d(b,c,this)};f.F=function(){return null};f.J=function(){return 0};f.ra=function(){return null};f.sa=function(){throw Error("Can't pop empty list");};f.P=function(){return null};f.U=function(){return Kd};
f.t=function(a,b){return Sd(this,b)};f.G=function(a,b){return new of(b)};f.C=function(){return this.i};f.I=function(){return this};var Kd=new of(null);function pf(a){return Vc(a)}function qf(a){return(a?a.l&134217728||a.oc||(a.l?0:l(uc,a)):l(uc,a))?Vc(a):se.d(Wd,Kd,a)}
var rf=function(){function a(a){var d=null;0<arguments.length&&(d=z(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){var b;if(a instanceof Jd&&0===a.o)b=a.f;else a:{for(b=[];;)if(null!=a)b.push(a.P(null)),a=a.aa(null);else break a;b=void 0}a=b.length;for(var e=Kd;;)if(0<a){var h=a-1,e=e.D(null,b[a-1]);a=h}else return e}a.j=0;a.g=function(a){a=s(a);return b(a)};a.b=b;return a}();
function sf(a,b,c,d){this.i=a;this.first=b;this.va=c;this.m=d;this.l=65929452;this.p=8192}f=sf.prototype;f.u=function(){var a=this.m;return null!=a?a:this.m=a=Qd(this)};f.aa=function(){return null==this.va?null:s(this.va)};f.D=function(a,b){return new sf(null,b,this,this.m)};f.toString=function(){return Ad(this)};f.N=function(a,b){return Ud.c(b,this)};f.O=function(a,b,c){return Ud.d(b,c,this)};f.F=function(){return this};f.P=function(){return this.first};f.U=function(){return null==this.va?Kd:this.va};
f.t=function(a,b){return Sd(this,b)};f.G=function(a,b){return new sf(b,this.first,this.va,this.m)};f.C=function(){return this.i};f.I=function(){return Vd(Kd,this.i)};function A(a,b){var c=null==b;return(c?c:b&&(b.l&64||b.Na))?new sf(null,a,b,null):new sf(null,a,s(b),null)}function D(a,b,c,d){this.X=a;this.name=b;this.ya=c;this.Ca=d;this.l=2153775105;this.p=4096}f=D.prototype;f.s=function(a,b){return $c(b,[p(":"),p(this.ya)].join(""))};
f.u=function(){null==this.Ca&&(this.Ca=Gd(Hd(this.X),Hd(this.name))+2654435769);return this.Ca};f.call=function(){var a=null;return a=function(a,c,d){switch(arguments.length){case 2:return Yd.c(c,this);case 3:return Yd.d(c,this,d)}throw Error("Invalid arity: "+arguments.length);}}();f.apply=function(a,b){return this.call.apply(this,[this].concat(Ca(b)))};f.a=function(a){return Yd.c(a,this)};f.c=function(a,b){return Yd.d(a,this,b)};f.t=function(a,b){return b instanceof D?this.ya===b.ya:!1};
f.toString=function(){return[p(":"),p(this.ya)].join("")};function tf(a){return a instanceof D}function uf(a){if(a&&(a.p&4096||a.Zb))return a.X;throw Error([p("Doesn't support namespace: "),p(a)].join(""));}
var wf=function(){function a(a,b){return new D(a,b,[p(g(a)?[p(a),p("/")].join(""):null),p(b)].join(""),null)}function b(a){if(a instanceof D)return a;if(a instanceof Fd)return new D(uf(a),vf.a?vf.a(a):vf.call(null,a),a.Ba,null);if("string"===typeof a){var b=a.split("/");return 2===b.length?new D(b[0],b[1],a,null):new D(null,b[0],a,null)}return null}var c=null,c=function(c,e){switch(arguments.length){case 1:return b.call(this,c);case 2:return a.call(this,c,e)}throw Error("Invalid arity: "+arguments.length);
};c.a=b;c.c=a;return c}();function xf(a,b,c,d){this.i=a;this.fn=b;this.L=c;this.m=d;this.p=0;this.l=32374988}f=xf.prototype;f.u=function(){var a=this.m;return null!=a?a:this.m=a=Qd(this)};f.aa=function(){kc(this);return null==this.L?null:x(this.L)};f.D=function(a,b){return A(b,this)};f.toString=function(){return Ad(this)};function yf(a){null!=a.fn&&(a.L=a.fn.q?a.fn.q():a.fn.call(null),a.fn=null);return a.L}f.N=function(a,b){return Ud.c(b,this)};f.O=function(a,b,c){return Ud.d(b,c,this)};
f.F=function(){yf(this);if(null==this.L)return null;for(var a=this.L;;)if(a instanceof xf)a=yf(a);else return this.L=a,s(this.L)};f.P=function(){kc(this);return null==this.L?null:u(this.L)};f.U=function(){kc(this);return null!=this.L?w(this.L):Kd};f.t=function(a,b){return Sd(this,b)};f.G=function(a,b){return new xf(b,this.fn,this.L,this.m)};f.C=function(){return this.i};f.I=function(){return Vd(Kd,this.i)};function zf(a,b){this.eb=a;this.end=b;this.p=0;this.l=2}zf.prototype.J=function(){return this.end};
zf.prototype.add=function(a){this.eb[this.end]=a;return this.end+=1};zf.prototype.R=function(){var a=new Af(this.eb,0,this.end);this.eb=null;return a};function Bf(a){return new zf(Array(a),0)}function Af(a,b,c){this.f=a;this.off=b;this.end=c;this.p=0;this.l=524306}f=Af.prototype;f.N=function(a,b){return Nd.e(this.f,b,this.f[this.off],this.off+1)};f.O=function(a,b,c){return Nd.e(this.f,b,c,this.off)};
f.Fb=function(){if(this.off===this.end)throw Error("-drop-first of empty chunk");return new Af(this.f,this.off+1,this.end)};f.r=function(a,b){return this.f[this.off+b]};f.Z=function(a,b,c){return 0<=b&&b<this.end-this.off?this.f[this.off+b]:c};f.J=function(){return this.end-this.off};
var Cf=function(){function a(a,b,c){return new Af(a,b,c)}function b(a,b){return new Af(a,b,a.length)}function c(a){return new Af(a,0,a.length)}var d=null,d=function(d,h,k){switch(arguments.length){case 1:return c.call(this,d);case 2:return b.call(this,d,h);case 3:return a.call(this,d,h,k)}throw Error("Invalid arity: "+arguments.length);};d.a=c;d.c=b;d.d=a;return d}();function Df(a,b,c,d){this.R=a;this.la=b;this.i=c;this.m=d;this.l=31850732;this.p=1536}f=Df.prototype;
f.u=function(){var a=this.m;return null!=a?a:this.m=a=Qd(this)};f.aa=function(){if(1<Fa(this.R))return new Df(jd(this.R),this.la,this.i,null);var a=kc(this.la);return null==a?null:a};f.D=function(a,b){return A(b,this)};f.toString=function(){return Ad(this)};f.F=function(){return this};f.P=function(){return q.c(this.R,0)};f.U=function(){return 1<Fa(this.R)?new Df(jd(this.R),this.la,this.i,null):null==this.la?Kd:this.la};f.gb=function(){return null==this.la?null:this.la};
f.t=function(a,b){return Sd(this,b)};f.G=function(a,b){return new Df(this.R,this.la,b,this.m)};f.C=function(){return this.i};f.I=function(){return Vd(Kd,this.i)};f.hb=function(){return this.R};f.ib=function(){return null==this.la?Kd:this.la};function Ef(a,b){return 0===Fa(a)?b:new Df(a,b,null,null)}function Ff(a){for(var b=[];;)if(s(a))b.push(u(a)),a=x(a);else return b}function Gf(a,b){if(Od(a))return B(a);for(var c=a,d=b,e=0;;)if(0<d&&s(c))c=x(c),d-=1,e+=1;else return e}
var If=function Hf(b){return null==b?null:null==x(b)?s(u(b)):n?A(u(b),Hf(x(b))):null},Jf=function(){function a(a,b){return new xf(null,function(){var c=s(a);return c?ke(c)?Ef(kd(c),d.c(ld(c),b)):A(u(c),d.c(w(c),b)):b},null,null)}function b(a){return new xf(null,function(){return a},null,null)}function c(){return new xf(null,function(){return null},null,null)}var d=null,e=function(){function a(c,d,e){var h=null;2<arguments.length&&(h=z(Array.prototype.slice.call(arguments,2),0));return b.call(this,
c,d,h)}function b(a,c,e){return function y(a,b){return new xf(null,function(){var c=s(a);return c?ke(c)?Ef(kd(c),y(ld(c),b)):A(u(c),y(w(c),b)):g(b)?y(u(b),x(b)):null},null,null)}(d.c(a,c),e)}a.j=2;a.g=function(a){var c=u(a);a=x(a);var d=u(a);a=w(a);return b(c,d,a)};a.b=b;return a}(),d=function(d,k,m){switch(arguments.length){case 0:return c.call(this);case 1:return b.call(this,d);case 2:return a.call(this,d,k);default:return e.b(d,k,z(arguments,2))}throw Error("Invalid arity: "+arguments.length);
};d.j=2;d.g=e.g;d.q=c;d.a=b;d.c=a;d.b=e.b;return d}(),Kf=function(){function a(a,b,c,d){return A(a,A(b,A(c,d)))}function b(a,b,c){return A(a,A(b,c))}var c=null,d=function(){function a(c,d,e,t,v){var y=null;4<arguments.length&&(y=z(Array.prototype.slice.call(arguments,4),0));return b.call(this,c,d,e,t,y)}function b(a,c,d,e,h){return A(a,A(c,A(d,A(e,If(h)))))}a.j=4;a.g=function(a){var c=u(a);a=x(a);var d=u(a);a=x(a);var e=u(a);a=x(a);var v=u(a);a=w(a);return b(c,d,e,v,a)};a.b=b;return a}(),c=function(c,
h,k,m,r){switch(arguments.length){case 1:return s(c);case 2:return A(c,h);case 3:return b.call(this,c,h,k);case 4:return a.call(this,c,h,k,m);default:return d.b(c,h,k,m,z(arguments,4))}throw Error("Invalid arity: "+arguments.length);};c.j=4;c.g=d.g;c.a=function(a){return s(a)};c.c=function(a,b){return A(a,b)};c.d=b;c.e=a;c.b=d.b;return c}(),Lf=function(){var a=null,b=function(){function a(c,h,k,m){var r=null;3<arguments.length&&(r=z(Array.prototype.slice.call(arguments,3),0));return b.call(this,c,
h,k,r)}function b(a,c,d,m){for(;;)if(a=hd(a,c,d),g(m))c=u(m),d=u(x(m)),m=x(x(m));else return a}a.j=3;a.g=function(a){var c=u(a);a=x(a);var k=u(a);a=x(a);var m=u(a);a=w(a);return b(c,k,m,a)};a.b=b;return a}(),a=function(a,d,e,h){switch(arguments.length){case 3:return hd(a,d,e);default:return b.b(a,d,e,z(arguments,3))}throw Error("Invalid arity: "+arguments.length);};a.j=3;a.g=b.g;a.d=function(a,b,e){return hd(a,b,e)};a.b=b.b;return a}();
function Mf(a,b,c){var d=s(c);if(0===b)return a.q?a.q():a.call(null);c=Ma(d);var e=Na(d);if(1===b)return a.a?a.a(c):a.a?a.a(c):a.call(null,c);var d=Ma(e),h=Na(e);if(2===b)return a.c?a.c(c,d):a.c?a.c(c,d):a.call(null,c,d);var e=Ma(h),k=Na(h);if(3===b)return a.d?a.d(c,d,e):a.d?a.d(c,d,e):a.call(null,c,d,e);var h=Ma(k),m=Na(k);if(4===b)return a.e?a.e(c,d,e,h):a.e?a.e(c,d,e,h):a.call(null,c,d,e,h);k=Ma(m);m=Na(m);if(5===b)return a.k?a.k(c,d,e,h,k):a.k?a.k(c,d,e,h,k):a.call(null,c,d,e,h,k);a=Ma(m);var r=
Na(m);if(6===b)return a.n?a.n(c,d,e,h,k,a):a.n?a.n(c,d,e,h,k,a):a.call(null,c,d,e,h,k,a);var m=Ma(r),t=Na(r);if(7===b)return a.B?a.B(c,d,e,h,k,a,m):a.B?a.B(c,d,e,h,k,a,m):a.call(null,c,d,e,h,k,a,m);var r=Ma(t),v=Na(t);if(8===b)return a.fa?a.fa(c,d,e,h,k,a,m,r):a.fa?a.fa(c,d,e,h,k,a,m,r):a.call(null,c,d,e,h,k,a,m,r);var t=Ma(v),y=Na(v);if(9===b)return a.ga?a.ga(c,d,e,h,k,a,m,r,t):a.ga?a.ga(c,d,e,h,k,a,m,r,t):a.call(null,c,d,e,h,k,a,m,r,t);var v=Ma(y),I=Na(y);if(10===b)return a.S?a.S(c,d,e,h,k,a,m,
r,t,v):a.S?a.S(c,d,e,h,k,a,m,r,t,v):a.call(null,c,d,e,h,k,a,m,r,t,v);var y=Ma(I),R=Na(I);if(11===b)return a.jb?a.jb(c,d,e,h,k,a,m,r,t,v,y):a.jb?a.jb(c,d,e,h,k,a,m,r,t,v,y):a.call(null,c,d,e,h,k,a,m,r,t,v,y);var I=Ma(R),X=Na(R);if(12===b)return a.kb?a.kb(c,d,e,h,k,a,m,r,t,v,y,I):a.kb?a.kb(c,d,e,h,k,a,m,r,t,v,y,I):a.call(null,c,d,e,h,k,a,m,r,t,v,y,I);var R=Ma(X),fa=Na(X);if(13===b)return a.lb?a.lb(c,d,e,h,k,a,m,r,t,v,y,I,R):a.lb?a.lb(c,d,e,h,k,a,m,r,t,v,y,I,R):a.call(null,c,d,e,h,k,a,m,r,t,v,y,I,R);
var X=Ma(fa),ha=Na(fa);if(14===b)return a.mb?a.mb(c,d,e,h,k,a,m,r,t,v,y,I,R,X):a.mb?a.mb(c,d,e,h,k,a,m,r,t,v,y,I,R,X):a.call(null,c,d,e,h,k,a,m,r,t,v,y,I,R,X);var fa=Ma(ha),ma=Na(ha);if(15===b)return a.nb?a.nb(c,d,e,h,k,a,m,r,t,v,y,I,R,X,fa):a.nb?a.nb(c,d,e,h,k,a,m,r,t,v,y,I,R,X,fa):a.call(null,c,d,e,h,k,a,m,r,t,v,y,I,R,X,fa);var ha=Ma(ma),xa=Na(ma);if(16===b)return a.ob?a.ob(c,d,e,h,k,a,m,r,t,v,y,I,R,X,fa,ha):a.ob?a.ob(c,d,e,h,k,a,m,r,t,v,y,I,R,X,fa,ha):a.call(null,c,d,e,h,k,a,m,r,t,v,y,I,R,X,fa,
ha);var ma=Ma(xa),ra=Na(xa);if(17===b)return a.pb?a.pb(c,d,e,h,k,a,m,r,t,v,y,I,R,X,fa,ha,ma):a.pb?a.pb(c,d,e,h,k,a,m,r,t,v,y,I,R,X,fa,ha,ma):a.call(null,c,d,e,h,k,a,m,r,t,v,y,I,R,X,fa,ha,ma);var xa=Ma(ra),Ha=Na(ra);if(18===b)return a.qb?a.qb(c,d,e,h,k,a,m,r,t,v,y,I,R,X,fa,ha,ma,xa):a.qb?a.qb(c,d,e,h,k,a,m,r,t,v,y,I,R,X,fa,ha,ma,xa):a.call(null,c,d,e,h,k,a,m,r,t,v,y,I,R,X,fa,ha,ma,xa);ra=Ma(Ha);Ha=Na(Ha);if(19===b)return a.rb?a.rb(c,d,e,h,k,a,m,r,t,v,y,I,R,X,fa,ha,ma,xa,ra):a.rb?a.rb(c,d,e,h,k,a,m,
r,t,v,y,I,R,X,fa,ha,ma,xa,ra):a.call(null,c,d,e,h,k,a,m,r,t,v,y,I,R,X,fa,ha,ma,xa,ra);var Aa=Ma(Ha);Na(Ha);if(20===b)return a.sb?a.sb(c,d,e,h,k,a,m,r,t,v,y,I,R,X,fa,ha,ma,xa,ra,Aa):a.sb?a.sb(c,d,e,h,k,a,m,r,t,v,y,I,R,X,fa,ha,ma,xa,ra,Aa):a.call(null,c,d,e,h,k,a,m,r,t,v,y,I,R,X,fa,ha,ma,xa,ra,Aa);throw Error("Only up to 20 arguments supported on functions");}
var de=function(){function a(a,b,c,d,e){b=Kf.e(b,c,d,e);c=a.j;return a.g?(d=Gf(b,c+1),d<=c?Mf(a,d,b):a.g(b)):a.apply(a,Ff(b))}function b(a,b,c,d){b=Kf.d(b,c,d);c=a.j;return a.g?(d=Gf(b,c+1),d<=c?Mf(a,d,b):a.g(b)):a.apply(a,Ff(b))}function c(a,b,c){b=Kf.c(b,c);c=a.j;if(a.g){var d=Gf(b,c+1);return d<=c?Mf(a,d,b):a.g(b)}return a.apply(a,Ff(b))}function d(a,b){var c=a.j;if(a.g){var d=Gf(b,c+1);return d<=c?Mf(a,d,b):a.g(b)}return a.apply(a,Ff(b))}var e=null,h=function(){function a(c,d,e,h,k,R){var X=null;
5<arguments.length&&(X=z(Array.prototype.slice.call(arguments,5),0));return b.call(this,c,d,e,h,k,X)}function b(a,c,d,e,h,k){c=A(c,A(d,A(e,A(h,If(k)))));d=a.j;return a.g?(e=Gf(c,d+1),e<=d?Mf(a,e,c):a.g(c)):a.apply(a,Ff(c))}a.j=5;a.g=function(a){var c=u(a);a=x(a);var d=u(a);a=x(a);var e=u(a);a=x(a);var h=u(a);a=x(a);var k=u(a);a=w(a);return b(c,d,e,h,k,a)};a.b=b;return a}(),e=function(e,m,r,t,v,y){switch(arguments.length){case 2:return d.call(this,e,m);case 3:return c.call(this,e,m,r);case 4:return b.call(this,
e,m,r,t);case 5:return a.call(this,e,m,r,t,v);default:return h.b(e,m,r,t,v,z(arguments,5))}throw Error("Invalid arity: "+arguments.length);};e.j=5;e.g=h.g;e.c=d;e.d=c;e.e=b;e.k=a;e.b=h.b;return e}(),Nf=function(){function a(a,b){return!Cd.c(a,b)}var b=null,c=function(){function a(c,d,m){var r=null;2<arguments.length&&(r=z(Array.prototype.slice.call(arguments,2),0));return b.call(this,c,d,r)}function b(a,c,d){return wa(de.e(Cd,a,c,d))}a.j=2;a.g=function(a){var c=u(a);a=x(a);var d=u(a);a=w(a);return b(c,
d,a)};a.b=b;return a}(),b=function(b,e,h){switch(arguments.length){case 1:return!1;case 2:return a.call(this,b,e);default:return c.b(b,e,z(arguments,2))}throw Error("Invalid arity: "+arguments.length);};b.j=2;b.g=c.g;b.a=function(){return!1};b.c=a;b.b=c.b;return b}();function Of(a,b){for(;;){if(null==s(b))return!0;if(g(a.a?a.a(u(b)):a.call(null,u(b)))){var c=a,d=x(b);a=c;b=d}else return n?!1:null}}
function Pf(a){for(var b=Qf;;)if(s(a)){var c=b.a?b.a(u(a)):b.call(null,u(a));if(g(c))return c;a=x(a)}else return null}function Qf(a){return a}
var Rf=function(){function a(a,b,c){return function(){var d=null,r=function(){function d(a,b,c,e){var h=null;3<arguments.length&&(h=z(Array.prototype.slice.call(arguments,3),0));return m.call(this,a,b,c,h)}function m(d,r,t,v){return a.a?a.a(b.a?b.a(de.k(c,d,r,t,v)):b.call(null,de.k(c,d,r,t,v))):a.call(null,b.a?b.a(de.k(c,d,r,t,v)):b.call(null,de.k(c,d,r,t,v)))}d.j=3;d.g=function(a){var b=u(a);a=x(a);var c=u(a);a=x(a);var d=u(a);a=w(a);return m(b,c,d,a)};d.b=m;return d}(),d=function(d,m,y,I){switch(arguments.length){case 0:return a.a?
a.a(b.a?b.a(c.q?c.q():c.call(null)):b.call(null,c.q?c.q():c.call(null))):a.call(null,b.a?b.a(c.q?c.q():c.call(null)):b.call(null,c.q?c.q():c.call(null)));case 1:return a.a?a.a(b.a?b.a(c.a?c.a(d):c.call(null,d)):b.call(null,c.a?c.a(d):c.call(null,d))):a.call(null,b.a?b.a(c.a?c.a(d):c.call(null,d)):b.call(null,c.a?c.a(d):c.call(null,d)));case 2:return a.a?a.a(b.a?b.a(c.c?c.c(d,m):c.call(null,d,m)):b.call(null,c.c?c.c(d,m):c.call(null,d,m))):a.call(null,b.a?b.a(c.c?c.c(d,m):c.call(null,d,m)):b.call(null,
c.c?c.c(d,m):c.call(null,d,m)));case 3:return a.a?a.a(b.a?b.a(c.d?c.d(d,m,y):c.call(null,d,m,y)):b.call(null,c.d?c.d(d,m,y):c.call(null,d,m,y))):a.call(null,b.a?b.a(c.d?c.d(d,m,y):c.call(null,d,m,y)):b.call(null,c.d?c.d(d,m,y):c.call(null,d,m,y)));default:return r.b(d,m,y,z(arguments,3))}throw Error("Invalid arity: "+arguments.length);};d.j=3;d.g=r.g;return d}()}function b(a,b){return function(){var c=null,d=function(){function c(a,b,e,h){var k=null;3<arguments.length&&(k=z(Array.prototype.slice.call(arguments,
3),0));return d.call(this,a,b,e,k)}function d(c,k,m,r){return a.a?a.a(de.k(b,c,k,m,r)):a.call(null,de.k(b,c,k,m,r))}c.j=3;c.g=function(a){var b=u(a);a=x(a);var c=u(a);a=x(a);var e=u(a);a=w(a);return d(b,c,e,a)};c.b=d;return c}(),c=function(c,k,v,y){switch(arguments.length){case 0:return a.a?a.a(b.q?b.q():b.call(null)):a.call(null,b.q?b.q():b.call(null));case 1:return a.a?a.a(b.a?b.a(c):b.call(null,c)):a.call(null,b.a?b.a(c):b.call(null,c));case 2:return a.a?a.a(b.c?b.c(c,k):b.call(null,c,k)):a.call(null,
b.c?b.c(c,k):b.call(null,c,k));case 3:return a.a?a.a(b.d?b.d(c,k,v):b.call(null,c,k,v)):a.call(null,b.d?b.d(c,k,v):b.call(null,c,k,v));default:return d.b(c,k,v,z(arguments,3))}throw Error("Invalid arity: "+arguments.length);};c.j=3;c.g=d.g;return c}()}var c=null,d=function(){function a(c,d,e,t){var v=null;3<arguments.length&&(v=z(Array.prototype.slice.call(arguments,3),0));return b.call(this,c,d,e,v)}function b(a,c,d,e){var h=qf(Kf.e(a,c,d,e));return function(){function a(c){var d=null;0<arguments.length&&
(d=z(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){a=de.c(u(h),a);for(var c=x(h);;)if(c)a=u(c).call(null,a),c=x(c);else return a}a.j=0;a.g=function(a){a=s(a);return b(a)};a.b=b;return a}()}a.j=3;a.g=function(a){var c=u(a);a=x(a);var d=u(a);a=x(a);var e=u(a);a=w(a);return b(c,d,e,a)};a.b=b;return a}(),c=function(c,h,k,m){switch(arguments.length){case 0:return Qf;case 1:return c;case 2:return b.call(this,c,h);case 3:return a.call(this,c,h,k);default:return d.b(c,h,
k,z(arguments,3))}throw Error("Invalid arity: "+arguments.length);};c.j=3;c.g=d.g;c.q=function(){return Qf};c.a=function(a){return a};c.c=b;c.d=a;c.b=d.b;return c}(),Sf=function(){function a(a,b,c,d){return function(){function e(a){var b=null;0<arguments.length&&(b=z(Array.prototype.slice.call(arguments,0),0));return v.call(this,b)}function v(e){return de.k(a,b,c,d,e)}e.j=0;e.g=function(a){a=s(a);return v(a)};e.b=v;return e}()}function b(a,b,c){return function(){function d(a){var b=null;0<arguments.length&&
(b=z(Array.prototype.slice.call(arguments,0),0));return e.call(this,b)}function e(d){return de.e(a,b,c,d)}d.j=0;d.g=function(a){a=s(a);return e(a)};d.b=e;return d}()}function c(a,b){return function(){function c(a){var b=null;0<arguments.length&&(b=z(Array.prototype.slice.call(arguments,0),0));return d.call(this,b)}function d(c){return de.d(a,b,c)}c.j=0;c.g=function(a){a=s(a);return d(a)};c.b=d;return c}()}var d=null,e=function(){function a(c,d,e,h,y){var I=null;4<arguments.length&&(I=z(Array.prototype.slice.call(arguments,
4),0));return b.call(this,c,d,e,h,I)}function b(a,c,d,e,h){return function(){function b(a){var c=null;0<arguments.length&&(c=z(Array.prototype.slice.call(arguments,0),0));return k.call(this,c)}function k(b){return de.k(a,c,d,e,Jf.c(h,b))}b.j=0;b.g=function(a){a=s(a);return k(a)};b.b=k;return b}()}a.j=4;a.g=function(a){var c=u(a);a=x(a);var d=u(a);a=x(a);var e=u(a);a=x(a);var h=u(a);a=w(a);return b(c,d,e,h,a)};a.b=b;return a}(),d=function(d,k,m,r,t){switch(arguments.length){case 1:return d;case 2:return c.call(this,
d,k);case 3:return b.call(this,d,k,m);case 4:return a.call(this,d,k,m,r);default:return e.b(d,k,m,r,z(arguments,4))}throw Error("Invalid arity: "+arguments.length);};d.j=4;d.g=e.g;d.a=function(a){return a};d.c=c;d.d=b;d.e=a;d.b=e.b;return d}(),Uf=function Tf(b,c){return new xf(null,function(){var d=s(c);if(d){if(ke(d)){for(var e=kd(d),h=B(e),k=Bf(h),m=0;;)if(m<h){var r=b.a?b.a(q.c(e,m)):b.call(null,q.c(e,m));null!=r&&k.add(r);m+=1}else break;return Ef(k.R(),Tf(b,ld(d)))}e=b.a?b.a(u(d)):b.call(null,
u(d));return null==e?Tf(b,w(d)):A(e,Tf(b,w(d)))}return null},null,null)},Vf=function(){function a(a,b,c,e){return new xf(null,function(){var t=s(b),v=s(c),y=s(e);return t&&v&&y?A(a.d?a.d(u(t),u(v),u(y)):a.call(null,u(t),u(v),u(y)),d.e(a,w(t),w(v),w(y))):null},null,null)}function b(a,b,c){return new xf(null,function(){var e=s(b),t=s(c);return e&&t?A(a.c?a.c(u(e),u(t)):a.call(null,u(e),u(t)),d.d(a,w(e),w(t))):null},null,null)}function c(a,b){return new xf(null,function(){var c=s(b);if(c){if(ke(c)){for(var e=
kd(c),t=B(e),v=Bf(t),y=0;;)if(y<t){var I=a.a?a.a(q.c(e,y)):a.call(null,q.c(e,y));v.add(I);y+=1}else break;return Ef(v.R(),d.c(a,ld(c)))}return A(a.a?a.a(u(c)):a.call(null,u(c)),d.c(a,w(c)))}return null},null,null)}var d=null,e=function(){function a(c,d,e,h,y){var I=null;4<arguments.length&&(I=z(Array.prototype.slice.call(arguments,4),0));return b.call(this,c,d,e,h,I)}function b(a,c,e,h,k){return d.c(function(b){return de.c(a,b)},function R(a){return new xf(null,function(){var b=d.c(s,a);return Of(Qf,
b)?A(d.c(u,b),R(d.c(w,b))):null},null,null)}(Wd.b(k,h,z([e,c],0))))}a.j=4;a.g=function(a){var c=u(a);a=x(a);var d=u(a);a=x(a);var e=u(a);a=x(a);var h=u(a);a=w(a);return b(c,d,e,h,a)};a.b=b;return a}(),d=function(d,k,m,r,t){switch(arguments.length){case 2:return c.call(this,d,k);case 3:return b.call(this,d,k,m);case 4:return a.call(this,d,k,m,r);default:return e.b(d,k,m,r,z(arguments,4))}throw Error("Invalid arity: "+arguments.length);};d.j=4;d.g=e.g;d.c=c;d.d=b;d.e=a;d.b=e.b;return d}(),Xf=function Wf(b,
c){return new xf(null,function(){if(0<b){var d=s(c);return d?A(u(d),Wf(b-1,w(d))):null}return null},null,null)};function Yf(a,b){return new xf(null,function(){var c;a:{c=a;for(var d=b;;)if(d=s(d),0<c&&d)c-=1,d=w(d);else{c=d;break a}c=void 0}return c},null,null)}function Zf(a,b){return new xf(null,function(){var c;a:{c=a;for(var d=b;;){var d=s(d),e;e=(e=d)?c.a?c.a(u(d)):c.call(null,u(d)):e;if(g(e))d=w(d);else{c=d;break a}}c=void 0}return c},null,null)}
var $f=function(){function a(a,b){return Xf(a,c.a(b))}function b(a){return new xf(null,function(){return A(a,c.a(a))},null,null)}var c=null,c=function(c,e){switch(arguments.length){case 1:return b.call(this,c);case 2:return a.call(this,c,e)}throw Error("Invalid arity: "+arguments.length);};c.a=b;c.c=a;return c}(),ag=function(){function a(a,c){return new xf(null,function(){var h=s(a),k=s(c);return h&&k?A(u(h),A(u(k),b.c(w(h),w(k)))):null},null,null)}var b=null,c=function(){function a(b,d,m){var r=
null;2<arguments.length&&(r=z(Array.prototype.slice.call(arguments,2),0));return c.call(this,b,d,r)}function c(a,d,e){return new xf(null,function(){var c=Vf.c(s,Wd.b(e,d,z([a],0)));return Of(Qf,c)?Jf.c(Vf.c(u,c),de.c(b,Vf.c(w,c))):null},null,null)}a.j=2;a.g=function(a){var b=u(a);a=x(a);var d=u(a);a=w(a);return c(b,d,a)};a.b=c;return a}(),b=function(b,e,h){switch(arguments.length){case 2:return a.call(this,b,e);default:return c.b(b,e,z(arguments,2))}throw Error("Invalid arity: "+arguments.length);
};b.j=2;b.g=c.g;b.c=a;b.b=c.b;return b}();function bg(a){return function c(a,e){return new xf(null,function(){var h=s(a);return h?A(u(h),c(w(h),e)):s(e)?c(u(e),w(e)):null},null,null)}(null,a)}
var cg=function(){function a(a,b){return bg(Vf.c(a,b))}var b=null,c=function(){function a(c,d,m){var r=null;2<arguments.length&&(r=z(Array.prototype.slice.call(arguments,2),0));return b.call(this,c,d,r)}function b(a,c,d){return bg(de.e(Vf,a,c,d))}a.j=2;a.g=function(a){var c=u(a);a=x(a);var d=u(a);a=w(a);return b(c,d,a)};a.b=b;return a}(),b=function(b,e,h){switch(arguments.length){case 2:return a.call(this,b,e);default:return c.b(b,e,z(arguments,2))}throw Error("Invalid arity: "+arguments.length);
};b.j=2;b.g=c.g;b.c=a;b.b=c.b;return b}(),eg=function dg(b,c){return new xf(null,function(){var d=s(c);if(d){if(ke(d)){for(var e=kd(d),h=B(e),k=Bf(h),m=0;;)if(m<h){if(g(b.a?b.a(q.c(e,m)):b.call(null,q.c(e,m)))){var r=q.c(e,m);k.add(r)}m+=1}else break;return Ef(k.R(),dg(b,ld(d)))}e=u(d);d=w(d);return g(b.a?b.a(e):b.call(null,e))?A(e,dg(b,d)):dg(b,d)}return null},null,null)};function fg(a,b){var c;null!=a?a&&(a.p&4||a.lc)?(c=se.d(fd,ed(a),b),c=gd(c)):c=se.d(Ja,a,b):c=se.d(Wd,Kd,b);return c}
var gg=function(){function a(a,b,c,m){return new xf(null,function(){var r=s(m);if(r){var t=Xf(a,r);return a===B(t)?A(t,d.e(a,b,c,Yf(b,r))):Ja(Kd,Xf(a,Jf.c(t,c)))}return null},null,null)}function b(a,b,c){return new xf(null,function(){var m=s(c);if(m){var r=Xf(a,m);return a===B(r)?A(r,d.d(a,b,Yf(b,m))):null}return null},null,null)}function c(a,b){return d.d(a,a,b)}var d=null,d=function(d,h,k,m){switch(arguments.length){case 2:return c.call(this,d,h);case 3:return b.call(this,d,h,k);case 4:return a.call(this,
d,h,k,m)}throw Error("Invalid arity: "+arguments.length);};d.c=c;d.d=b;d.e=a;return d}();function hg(a,b){this.v=a;this.f=b}function ig(a){return new hg(a,[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null])}function jg(a){return new hg(a.v,Ca(a.f))}function kg(a){a=a.h;return 32>a?0:a-1>>>5<<5}function lg(a,b,c){for(;;){if(0===b)return c;var d=ig(a);d.f[0]=c;c=d;b-=5}}
var ng=function mg(b,c,d,e){var h=jg(d),k=b.h-1>>>c&31;5===c?h.f[k]=e:(d=d.f[k],b=null!=d?mg(b,c-5,d,e):lg(null,c-5,e),h.f[k]=b);return h};function og(a,b){throw Error([p("No item "),p(a),p(" in vector of length "),p(b)].join(""));}function pg(a,b){if(0<=b&&b<a.h){if(b>=kg(a))return a.V;for(var c=a.root,d=a.shift;;)if(0<d)var e=d-5,c=c.f[b>>>d&31],d=e;else return c.f}else return og(b,a.h)}
var rg=function qg(b,c,d,e,h){var k=jg(d);if(0===c)k.f[e&31]=h;else{var m=e>>>c&31;b=qg(b,c-5,d.f[m],e,h);k.f[m]=b}return k},tg=function sg(b,c,d){var e=b.h-2>>>c&31;if(5<c){b=sg(b,c-5,d.f[e]);if(null==b&&0===e)return null;d=jg(d);d.f[e]=b;return d}return 0===e?null:n?(d=jg(d),d.f[e]=null,d):null};function E(a,b,c,d,e,h){this.i=a;this.h=b;this.shift=c;this.root=d;this.V=e;this.m=h;this.p=8196;this.l=167668511}f=E.prototype;
f.Ja=function(){return new ug(this.h,this.shift,vg.a?vg.a(this.root):vg.call(null,this.root),wg.a?wg.a(this.V):wg.call(null,this.V))};f.u=function(){var a=this.m;return null!=a?a:this.m=a=Qd(this)};f.w=function(a,b){return q.d(this,b,null)};f.A=function(a,b,c){return q.d(this,b,c)};
f.qa=function(a,b,c){if(0<=b&&b<this.h)return kg(this)<=b?(a=Ca(this.V),a[b&31]=c,new E(this.i,this.h,this.shift,this.root,a,null)):new E(this.i,this.h,this.shift,rg(this,this.shift,this.root,b,c),this.V,null);if(b===this.h)return Ja(this,c);if(n)throw Error([p("Index "),p(b),p(" out of bounds  [0,"),p(this.h),p("]")].join(""));return null};
f.call=function(){var a=null;return a=function(a,c,d){switch(arguments.length){case 2:return this.r(null,c);case 3:return this.Z(null,c,d)}throw Error("Invalid arity: "+arguments.length);}}();f.apply=function(a,b){return this.call.apply(this,[this].concat(Ca(b)))};f.a=function(a){return this.r(null,a)};f.c=function(a,b){return this.Z(null,a,b)};
f.D=function(a,b){if(32>this.h-kg(this)){for(var c=this.V.length,d=Array(c+1),e=0;;)if(e<c)d[e]=this.V[e],e+=1;else break;d[c]=b;return new E(this.i,this.h+1,this.shift,this.root,d,null)}c=(d=this.h>>>5>1<<this.shift)?this.shift+5:this.shift;d?(d=ig(null),d.f[0]=this.root,e=lg(null,this.shift,new hg(null,this.V)),d.f[1]=e):d=ng(this,this.shift,this.root,new hg(null,this.V));return new E(this.i,this.h+1,c,d,[b],null)};f.Ma=function(){return 0<this.h?new Rd(this,this.h-1,null):null};
f.La=function(){return q.c(this,0)};f.ab=function(){return q.c(this,1)};f.toString=function(){return Ad(this)};f.N=function(a,b){return Md.c(this,b)};f.O=function(a,b,c){return Md.d(this,b,c)};f.F=function(){return 0===this.h?null:32>this.h?z.a(this.V):n?xg.d?xg.d(this,0,0):xg.call(null,this,0,0):null};f.J=function(){return this.h};f.ra=function(){return 0<this.h?q.c(this,this.h-1):null};
f.sa=function(){if(0===this.h)throw Error("Can't pop empty vector");if(1===this.h)return ec(yg,this.i);if(1<this.h-kg(this))return new E(this.i,this.h-1,this.shift,this.root,this.V.slice(0,-1),null);if(n){var a=pg(this,this.h-2),b=tg(this,this.shift,this.root),b=null==b?zg:b,c=this.h-1;return 5<this.shift&&null==b.f[1]?new E(this.i,c,this.shift-5,b.f[0],a,null):new E(this.i,c,this.shift,b,a,null)}return null};f.Da=function(a,b,c){return Sa(this,b,c)};f.t=function(a,b){return Sd(this,b)};
f.G=function(a,b){return new E(b,this.h,this.shift,this.root,this.V,this.m)};f.C=function(){return this.i};f.r=function(a,b){return pg(this,b)[b&31]};f.Z=function(a,b,c){return 0<=b&&b<this.h?q.c(this,b):c};f.I=function(){return Vd(yg,this.i)};var zg=new hg(null,[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]),yg=new E(null,0,5,zg,[],0);function Ag(a){return gd(se.d(fd,ed(yg),a))}
function Bg(a,b,c,d,e,h){this.Q=a;this.da=b;this.o=c;this.off=d;this.i=e;this.m=h;this.l=32243948;this.p=1536}f=Bg.prototype;f.u=function(){var a=this.m;return null!=a?a:this.m=a=Qd(this)};f.aa=function(){if(this.off+1<this.da.length){var a=xg.e?xg.e(this.Q,this.da,this.o,this.off+1):xg.call(null,this.Q,this.da,this.o,this.off+1);return null==a?null:a}return yd(this)};f.D=function(a,b){return A(b,this)};f.toString=function(){return Ad(this)};
f.N=function(a,b){return Md.c(Cg.d?Cg.d(this.Q,this.o+this.off,B(this.Q)):Cg.call(null,this.Q,this.o+this.off,B(this.Q)),b)};f.O=function(a,b,c){return Md.d(Cg.d?Cg.d(this.Q,this.o+this.off,B(this.Q)):Cg.call(null,this.Q,this.o+this.off,B(this.Q)),b,c)};f.F=function(){return this};f.P=function(){return this.da[this.off]};f.U=function(){if(this.off+1<this.da.length){var a=xg.e?xg.e(this.Q,this.da,this.o,this.off+1):xg.call(null,this.Q,this.da,this.o,this.off+1);return null==a?Kd:a}return ld(this)};
f.gb=function(){var a=this.da.length,a=this.o+a<Fa(this.Q)?xg.d?xg.d(this.Q,this.o+a,0):xg.call(null,this.Q,this.o+a,0):null;return null==a?null:a};f.t=function(a,b){return Sd(this,b)};f.G=function(a,b){return xg.k?xg.k(this.Q,this.da,this.o,this.off,b):xg.call(null,this.Q,this.da,this.o,this.off,b)};f.I=function(){return Vd(yg,this.i)};f.hb=function(){return Cf.c(this.da,this.off)};
f.ib=function(){var a=this.da.length,a=this.o+a<Fa(this.Q)?xg.d?xg.d(this.Q,this.o+a,0):xg.call(null,this.Q,this.o+a,0):null;return null==a?Kd:a};
var xg=function(){function a(a,b,c,d,r){return new Bg(a,b,c,d,r,null)}function b(a,b,c,d){return new Bg(a,b,c,d,null,null)}function c(a,b,c){return new Bg(a,pg(a,b),b,c,null,null)}var d=null,d=function(d,h,k,m,r){switch(arguments.length){case 3:return c.call(this,d,h,k);case 4:return b.call(this,d,h,k,m);case 5:return a.call(this,d,h,k,m,r)}throw Error("Invalid arity: "+arguments.length);};d.d=c;d.e=b;d.k=a;return d}();
function Dg(a,b,c,d,e){this.i=a;this.ca=b;this.start=c;this.end=d;this.m=e;this.l=32400159;this.p=8192}f=Dg.prototype;f.u=function(){var a=this.m;return null!=a?a:this.m=a=Qd(this)};f.w=function(a,b){return q.d(this,b,null)};f.A=function(a,b,c){return q.d(this,b,c)};f.qa=function(a,b,c){var d=this,e=d.start+b;return Eg.k?Eg.k(d.i,$d.d(d.ca,e,c),d.start,function(){var a=d.end,b=e+1;return a>b?a:b}(),null):Eg.call(null,d.i,$d.d(d.ca,e,c),d.start,function(){var a=d.end,b=e+1;return a>b?a:b}(),null)};
f.call=function(){var a=null;return a=function(a,c,d){switch(arguments.length){case 2:return this.r(null,c);case 3:return this.Z(null,c,d)}throw Error("Invalid arity: "+arguments.length);}}();f.apply=function(a,b){return this.call.apply(this,[this].concat(Ca(b)))};f.a=function(a){return this.r(null,a)};f.c=function(a,b){return this.Z(null,a,b)};
f.D=function(a,b){return Eg.k?Eg.k(this.i,pb(this.ca,this.end,b),this.start,this.end+1,null):Eg.call(null,this.i,pb(this.ca,this.end,b),this.start,this.end+1,null)};f.toString=function(){return Ad(this)};f.N=function(a,b){return Md.c(this,b)};f.O=function(a,b,c){return Md.d(this,b,c)};f.F=function(){var a=this;return function c(d){return d===a.end?null:A(q.c(a.ca,d),new xf(null,function(){return c(d+1)},null,null))}(a.start)};f.J=function(){return this.end-this.start};
f.ra=function(){return q.c(this.ca,this.end-1)};f.sa=function(){if(this.start===this.end)throw Error("Can't pop empty vector");return Eg.k?Eg.k(this.i,this.ca,this.start,this.end-1,null):Eg.call(null,this.i,this.ca,this.start,this.end-1,null)};f.Da=function(a,b,c){return Sa(this,b,c)};f.t=function(a,b){return Sd(this,b)};f.G=function(a,b){return Eg.k?Eg.k(b,this.ca,this.start,this.end,this.m):Eg.call(null,b,this.ca,this.start,this.end,this.m)};f.C=function(){return this.i};
f.r=function(a,b){return 0>b||this.end<=this.start+b?og(b,this.end-this.start):q.c(this.ca,this.start+b)};f.Z=function(a,b,c){return 0>b||this.end<=this.start+b?c:q.d(this.ca,this.start+b,c)};f.I=function(){return Vd(yg,this.i)};function Eg(a,b,c,d,e){for(;;)if(b instanceof Dg)c=b.start+c,d=b.start+d,b=b.ca;else{var h=B(b);if(0>c||0>d||c>h||d>h)throw Error("Index out of bounds");return new Dg(a,b,c,d,e)}}
var Cg=function(){function a(a,b,c){return Eg(null,a,b,c,null)}function b(a,b){return c.d(a,b,B(a))}var c=null,c=function(c,e,h){switch(arguments.length){case 2:return b.call(this,c,e);case 3:return a.call(this,c,e,h)}throw Error("Invalid arity: "+arguments.length);};c.c=b;c.d=a;return c}();function vg(a){return new hg({},Ca(a.f))}
function wg(a){var b=[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];me(a,0,b,0,a.length);return b}var Gg=function Fg(b,c,d,e){d=b.root.v===d.v?d:new hg(b.root.v,Ca(d.f));var h=b.h-1>>>c&31;if(5===c)b=e;else{var k=d.f[h];b=null!=k?Fg(b,c-5,k,e):lg(b.root.v,c-5,e)}d.f[h]=b;return d};function ug(a,b,c,d){this.h=a;this.shift=b;this.root=c;this.V=d;this.l=275;this.p=88}f=ug.prototype;
f.call=function(){var a=null;return a=function(a,c,d){switch(arguments.length){case 2:return this.w(null,c);case 3:return this.A(null,c,d)}throw Error("Invalid arity: "+arguments.length);}}();f.apply=function(a,b){return this.call.apply(this,[this].concat(Ca(b)))};f.a=function(a){return this.w(null,a)};f.c=function(a,b){return this.A(null,a,b)};f.w=function(a,b){return q.d(this,b,null)};f.A=function(a,b,c){return q.d(this,b,c)};
f.r=function(a,b){if(this.root.v)return pg(this,b)[b&31];throw Error("nth after persistent!");};f.Z=function(a,b,c){return 0<=b&&b<this.h?q.c(this,b):c};f.J=function(){if(this.root.v)return this.h;throw Error("count after persistent!");};
f.Mb=function(a,b,c){var d=this;if(d.root.v){if(0<=b&&b<d.h)return kg(this)<=b?d.V[b&31]=c:(a=function h(a,m){var r=d.root.v===m.v?m:new hg(d.root.v,Ca(m.f));if(0===a)r.f[b&31]=c;else{var t=b>>>a&31,v=h(a-5,r.f[t]);r.f[t]=v}return r}.call(null,d.shift,d.root),d.root=a),this;if(b===d.h)return fd(this,c);if(n)throw Error([p("Index "),p(b),p(" out of bounds for TransientVector of length"),p(d.h)].join(""));return null}throw Error("assoc! after persistent!");};f.Oa=function(a,b,c){return id(this,b,c)};
f.Pa=function(a,b){if(this.root.v){if(32>this.h-kg(this))this.V[this.h&31]=b;else{var c=new hg(this.root.v,this.V),d=[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];d[0]=b;this.V=d;if(this.h>>>5>1<<this.shift){var d=[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],e=this.shift+
5;d[0]=this.root;d[1]=lg(this.root.v,this.shift,c);this.root=new hg(this.root.v,d);this.shift=e}else this.root=Gg(this,this.shift,this.root,c)}this.h+=1;return this}throw Error("conj! after persistent!");};f.Qa=function(){if(this.root.v){this.root.v=null;var a=this.h-kg(this),b=Array(a);me(this.V,0,b,0,a);return new E(null,this.h,this.shift,this.root,b,null)}throw Error("persistent! called twice");};function Hg(a,b,c,d){this.i=a;this.$=b;this.na=c;this.m=d;this.p=0;this.l=31850572}f=Hg.prototype;
f.u=function(){var a=this.m;return null!=a?a:this.m=a=Qd(this)};f.D=function(a,b){return A(b,this)};f.toString=function(){return Ad(this)};f.F=function(){return this};f.P=function(){return u(this.$)};f.U=function(){var a=x(this.$);return a?new Hg(this.i,a,this.na,null):null==this.na?Ga(this):new Hg(this.i,this.na,null,null)};f.t=function(a,b){return Sd(this,b)};f.G=function(a,b){return new Hg(b,this.$,this.na,this.m)};f.C=function(){return this.i};f.I=function(){return Vd(Kd,this.i)};
function Ig(a,b,c,d,e){this.i=a;this.count=b;this.$=c;this.na=d;this.m=e;this.l=31858766;this.p=8192}f=Ig.prototype;f.u=function(){var a=this.m;return null!=a?a:this.m=a=Qd(this)};f.D=function(a,b){var c;g(this.$)?(c=this.na,c=new Ig(this.i,this.count+1,this.$,Wd.c(g(c)?c:yg,b),null)):c=new Ig(this.i,this.count+1,Wd.c(this.$,b),yg,null);return c};f.toString=function(){return Ad(this)};f.F=function(){var a=s(this.na),b=this.$;return g(g(b)?b:a)?new Hg(null,this.$,s(a),null):null};f.J=function(){return this.count};
f.ra=function(){return u(this.$)};f.sa=function(){if(g(this.$)){var a=x(this.$);return a?new Ig(this.i,this.count-1,a,this.na,null):new Ig(this.i,this.count-1,s(this.na),yg,null)}return this};f.P=function(){return u(this.$)};f.U=function(){return w(s(this))};f.t=function(a,b){return Sd(this,b)};f.G=function(a,b){return new Ig(b,this.count,this.$,this.na,this.m)};f.C=function(){return this.i};f.I=function(){return Jg};var Jg=new Ig(null,0,null,yg,0);function Kg(){this.p=0;this.l=2097152}
Kg.prototype.t=function(){return!1};var Lg=new Kg;function Mg(a,b){return pe(ie(b)?B(a)===B(b)?Of(Qf,Vf.c(function(a){return Cd.c(Yd.d(b,u(a),Lg),u(x(a)))},a)):null:null)}
function Ng(a,b){var c=a.f;if(b instanceof D)a:{for(var d=c.length,e=b.ya,h=0;;){if(d<=h){c=-1;break a}var k=c[h];if(k instanceof D&&e===k.ya){c=h;break a}if(n)h+=2;else{c=null;break a}}c=void 0}else if("string"==typeof b||"number"===typeof b)a:{d=c.length;for(e=0;;){if(d<=e){c=-1;break a}if(b===c[e]){c=e;break a}if(n)e+=2;else{c=null;break a}}c=void 0}else if(b instanceof Fd)a:{d=c.length;e=b.Ba;for(h=0;;){if(d<=h){c=-1;break a}k=c[h];if(k instanceof Fd&&e===k.Ba){c=h;break a}if(n)h+=2;else{c=null;
break a}}c=void 0}else if(null==b)a:{d=c.length;for(e=0;;){if(d<=e){c=-1;break a}if(null==c[e]){c=e;break a}if(n)e+=2;else{c=null;break a}}c=void 0}else if(n)a:{d=c.length;for(e=0;;){if(d<=e){c=-1;break a}if(Cd.c(b,c[e])){c=e;break a}if(n)e+=2;else{c=null;break a}}c=void 0}else c=null;return c}function Og(a,b,c){this.f=a;this.o=b;this.ea=c;this.p=0;this.l=32374990}f=Og.prototype;f.u=function(){return Qd(this)};f.aa=function(){return this.o<this.f.length-2?new Og(this.f,this.o+2,this.ea):null};
f.D=function(a,b){return A(b,this)};f.toString=function(){return Ad(this)};f.N=function(a,b){return Ud.c(b,this)};f.O=function(a,b,c){return Ud.d(b,c,this)};f.F=function(){return this};f.J=function(){return(this.f.length-this.o)/2};f.P=function(){return new E(null,2,5,zg,[this.f[this.o],this.f[this.o+1]],null)};f.U=function(){return this.o<this.f.length-2?new Og(this.f,this.o+2,this.ea):Kd};f.t=function(a,b){return Sd(this,b)};f.G=function(a,b){return new Og(this.f,this.o,b)};f.C=function(){return this.ea};
f.I=function(){return Vd(Kd,this.ea)};function pa(a,b,c,d){this.i=a;this.h=b;this.f=c;this.m=d;this.p=8196;this.l=16123663}f=pa.prototype;f.Ja=function(){return new Pg({},this.f.length,Ca(this.f))};f.u=function(){var a=this.m;return null!=a?a:this.m=a=kf(this)};f.w=function(a,b){return Qa.d(this,b,null)};f.A=function(a,b,c){a=Ng(this,b);return-1===a?c:this.f[a+1]};
f.qa=function(a,b,c){a=Ng(this,b);if(-1===a){if(this.h<Qg){a=this.f;for(var d=a.length,e=Array(d+2),h=0;;)if(h<d)e[h]=a[h],h+=1;else break;e[d]=b;e[d+1]=c;return new pa(this.i,this.h+1,e,null)}return ec(Sa(fg(Rg,this),b,c),this.i)}return c===this.f[a+1]?this:n?(b=Ca(this.f),b[a+1]=c,new pa(this.i,this.h,b,null)):null};f.Ia=function(a,b){return-1!==Ng(this,b)};
f.call=function(){var a=null;return a=function(a,c,d){switch(arguments.length){case 2:return this.w(null,c);case 3:return this.A(null,c,d)}throw Error("Invalid arity: "+arguments.length);}}();f.apply=function(a,b){return this.call.apply(this,[this].concat(Ca(b)))};f.a=function(a){return this.w(null,a)};f.c=function(a,b){return this.A(null,a,b)};f.D=function(a,b){return je(b)?Sa(this,q.c(b,0),q.c(b,1)):se.d(Ja,this,b)};f.toString=function(){return Ad(this)};
f.F=function(){return 0<=this.f.length-2?new Og(this.f,0,null):null};f.J=function(){return this.h};f.t=function(a,b){return Mg(this,b)};f.G=function(a,b){return new pa(b,this.h,this.f,this.m)};f.C=function(){return this.i};f.I=function(){return ec(F,this.i)};
f.Ka=function(a,b){if(0<=Ng(this,b)){var c=this.f.length,d=c-2;if(0===d)return Ga(this);for(var d=Array(d),e=0,h=0;;){if(e>=c)return new pa(this.i,this.h-1,d,null);if(Cd.c(b,this.f[e]))e+=2;else if(n)d[h]=this.f[e],d[h+1]=this.f[e+1],h+=2,e+=2;else return null}}else return this};var F=new pa(null,0,[],null),Qg=8;function Sg(a){for(var b=a.length,c=0,d=ed(F);;)if(c<b)var e=c+2,d=hd(d,a[c],a[c+1]),c=e;else return gd(d)}function Pg(a,b,c){this.Ga=a;this.ua=b;this.f=c;this.p=56;this.l=258}f=Pg.prototype;
f.Oa=function(a,b,c){if(g(this.Ga)){a=Ng(this,b);if(-1===a)return this.ua+2<=2*Qg?(this.ua+=2,this.f.push(b),this.f.push(c),this):Lf.d(Tg.c?Tg.c(this.ua,this.f):Tg.call(null,this.ua,this.f),b,c);c!==this.f[a+1]&&(this.f[a+1]=c);return this}throw Error("assoc! after persistent!");};
f.Pa=function(a,b){if(g(this.Ga)){if(b?b.l&2048||b.Xb||(b.l?0:l(Va,b)):l(Va,b))return hd(this,lf.a?lf.a(b):lf.call(null,b),mf.a?mf.a(b):mf.call(null,b));for(var c=s(b),d=this;;){var e=u(c);if(g(e))c=x(c),d=hd(d,lf.a?lf.a(e):lf.call(null,e),mf.a?mf.a(e):mf.call(null,e));else return d}}else throw Error("conj! after persistent!");};f.Qa=function(){if(g(this.Ga))return this.Ga=!1,new pa(null,ff((this.ua-this.ua%2)/2),this.f,null);throw Error("persistent! called twice");};
f.w=function(a,b){return Qa.d(this,b,null)};f.A=function(a,b,c){if(g(this.Ga))return a=Ng(this,b),-1===a?c:this.f[a+1];throw Error("lookup after persistent!");};f.J=function(){if(g(this.Ga))return ff((this.ua-this.ua%2)/2);throw Error("count after persistent!");};function Tg(a,b){for(var c=ed(Rg),d=0;;)if(d<a)c=Lf.d(c,b[d],b[d+1]),d+=2;else return c}function Ug(){this.val=!1}function Vg(a,b){return a===b?!0:a===b||a instanceof D&&b instanceof D&&a.ya===b.ya?!0:n?Cd.c(a,b):null}
var Wg=function(){function a(a,b,c,k,m){a=Ca(a);a[b]=c;a[k]=m;return a}function b(a,b,c){a=Ca(a);a[b]=c;return a}var c=null,c=function(c,e,h,k,m){switch(arguments.length){case 3:return b.call(this,c,e,h);case 5:return a.call(this,c,e,h,k,m)}throw Error("Invalid arity: "+arguments.length);};c.d=b;c.k=a;return c}();function Xg(a,b){var c=Array(a.length-2);me(a,0,c,0,2*b);me(a,2*(b+1),c,2*b,c.length-2*b);return c}
var Yg=function(){function a(a,b,c,k,m,r){a=a.Ha(b);a.f[c]=k;a.f[m]=r;return a}function b(a,b,c,k){a=a.Ha(b);a.f[c]=k;return a}var c=null,c=function(c,e,h,k,m,r){switch(arguments.length){case 4:return b.call(this,c,e,h,k);case 6:return a.call(this,c,e,h,k,m,r)}throw Error("Invalid arity: "+arguments.length);};c.e=b;c.n=a;return c}();function Zg(a,b,c){this.v=a;this.H=b;this.f=c}f=Zg.prototype;
f.ia=function(a,b,c,d,e,h){var k=1<<(c>>>b&31),m=gf(this.H&k-1);if(0===(this.H&k)){var r=gf(this.H);if(2*r<this.f.length){a=this.Ha(a);b=a.f;h.val=!0;a:for(c=2*(r-m),h=2*m+(c-1),r=2*(m+1)+(c-1);;){if(0===c)break a;b[r]=b[h];r-=1;c-=1;h-=1}b[2*m]=d;b[2*m+1]=e;a.H|=k;return a}if(16<=r){m=[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];m[c>>>b&31]=$g.ia(a,b+5,c,d,e,h);for(e=d=0;;)if(32>d)0!==
(this.H>>>d&1)&&(m[d]=null!=this.f[e]?$g.ia(a,b+5,Hd(this.f[e]),this.f[e],this.f[e+1],h):this.f[e+1],e+=2),d+=1;else break;return new ah(a,r+1,m)}return n?(b=Array(2*(r+4)),me(this.f,0,b,0,2*m),b[2*m]=d,b[2*m+1]=e,me(this.f,2*m,b,2*(m+1),2*(r-m)),h.val=!0,a=this.Ha(a),a.f=b,a.H|=k,a):null}r=this.f[2*m];k=this.f[2*m+1];return null==r?(r=k.ia(a,b+5,c,d,e,h),r===k?this:Yg.e(this,a,2*m+1,r)):Vg(d,r)?e===k?this:Yg.e(this,a,2*m+1,e):n?(h.val=!0,Yg.n(this,a,2*m,null,2*m+1,bh.B?bh.B(a,b+5,r,k,c,d,e):bh.call(null,
a,b+5,r,k,c,d,e))):null};f.Ra=function(){return ch.a?ch.a(this.f):ch.call(null,this.f)};f.Ha=function(a){if(a===this.v)return this;var b=gf(this.H),c=Array(0>b?4:2*(b+1));me(this.f,0,c,0,2*b);return new Zg(a,this.H,c)};
f.Sa=function(a,b,c){var d=1<<(b>>>a&31);if(0===(this.H&d))return this;var e=gf(this.H&d-1),h=this.f[2*e],k=this.f[2*e+1];return null==h?(a=k.Sa(a+5,b,c),a===k?this:null!=a?new Zg(null,this.H,Wg.d(this.f,2*e+1,a)):this.H===d?null:n?new Zg(null,this.H^d,Xg(this.f,e)):null):Vg(c,h)?new Zg(null,this.H^d,Xg(this.f,e)):n?this:null};
f.ha=function(a,b,c,d,e){var h=1<<(b>>>a&31),k=gf(this.H&h-1);if(0===(this.H&h)){var m=gf(this.H);if(16<=m){k=[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];k[b>>>a&31]=$g.ha(a+5,b,c,d,e);for(d=c=0;;)if(32>c)0!==(this.H>>>c&1)&&(k[c]=null!=this.f[d]?$g.ha(a+5,Hd(this.f[d]),this.f[d],this.f[d+1],e):this.f[d+1],d+=2),c+=1;else break;return new ah(null,m+1,k)}a=Array(2*(m+1));me(this.f,
0,a,0,2*k);a[2*k]=c;a[2*k+1]=d;me(this.f,2*k,a,2*(k+1),2*(m-k));e.val=!0;return new Zg(null,this.H|h,a)}m=this.f[2*k];h=this.f[2*k+1];return null==m?(m=h.ha(a+5,b,c,d,e),m===h?this:new Zg(null,this.H,Wg.d(this.f,2*k+1,m))):Vg(c,m)?d===h?this:new Zg(null,this.H,Wg.d(this.f,2*k+1,d)):n?(e.val=!0,new Zg(null,this.H,Wg.k(this.f,2*k,null,2*k+1,bh.n?bh.n(a+5,m,h,b,c,d):bh.call(null,a+5,m,h,b,c,d)))):null};
f.za=function(a,b,c,d){var e=1<<(b>>>a&31);if(0===(this.H&e))return d;var h=gf(this.H&e-1),e=this.f[2*h],h=this.f[2*h+1];return null==e?h.za(a+5,b,c,d):Vg(c,e)?h:n?d:null};var $g=new Zg(null,0,[]);function ah(a,b,c){this.v=a;this.h=b;this.f=c}f=ah.prototype;f.ia=function(a,b,c,d,e,h){var k=c>>>b&31,m=this.f[k];if(null==m)return a=Yg.e(this,a,k,$g.ia(a,b+5,c,d,e,h)),a.h+=1,a;b=m.ia(a,b+5,c,d,e,h);return b===m?this:Yg.e(this,a,k,b)};f.Ra=function(){return dh.a?dh.a(this.f):dh.call(null,this.f)};
f.Ha=function(a){return a===this.v?this:new ah(a,this.h,Ca(this.f))};f.Sa=function(a,b,c){var d=b>>>a&31,e=this.f[d];if(null!=e){a=e.Sa(a+5,b,c);if(a===e)d=this;else if(null==a)if(8>=this.h)a:{e=this.f;a=2*(this.h-1);b=Array(a);c=0;for(var h=1,k=0;;)if(c<a)c!==d&&null!=e[c]&&(b[h]=e[c],h+=2,k|=1<<c),c+=1;else{d=new Zg(null,k,b);break a}d=void 0}else d=new ah(null,this.h-1,Wg.d(this.f,d,a));else d=n?new ah(null,this.h,Wg.d(this.f,d,a)):null;return d}return this};
f.ha=function(a,b,c,d,e){var h=b>>>a&31,k=this.f[h];if(null==k)return new ah(null,this.h+1,Wg.d(this.f,h,$g.ha(a+5,b,c,d,e)));a=k.ha(a+5,b,c,d,e);return a===k?this:new ah(null,this.h,Wg.d(this.f,h,a))};f.za=function(a,b,c,d){var e=this.f[b>>>a&31];return null!=e?e.za(a+5,b,c,d):d};function eh(a,b,c){b*=2;for(var d=0;;)if(d<b){if(Vg(c,a[d]))return d;d+=2}else return-1}function fh(a,b,c,d){this.v=a;this.ta=b;this.h=c;this.f=d}f=fh.prototype;
f.ia=function(a,b,c,d,e,h){if(c===this.ta){b=eh(this.f,this.h,d);if(-1===b){if(this.f.length>2*this.h)return a=Yg.n(this,a,2*this.h,d,2*this.h+1,e),h.val=!0,a.h+=1,a;c=this.f.length;b=Array(c+2);me(this.f,0,b,0,c);b[c]=d;b[c+1]=e;h.val=!0;h=this.h+1;a===this.v?(this.f=b,this.h=h,a=this):a=new fh(this.v,this.ta,h,b);return a}return this.f[b+1]===e?this:Yg.e(this,a,b+1,e)}return(new Zg(a,1<<(this.ta>>>b&31),[null,this,null,null])).ia(a,b,c,d,e,h)};
f.Ra=function(){return ch.a?ch.a(this.f):ch.call(null,this.f)};f.Ha=function(a){if(a===this.v)return this;var b=Array(2*(this.h+1));me(this.f,0,b,0,2*this.h);return new fh(a,this.ta,this.h,b)};f.Sa=function(a,b,c){a=eh(this.f,this.h,c);return-1===a?this:1===this.h?null:n?new fh(null,this.ta,this.h-1,Xg(this.f,ff((a-a%2)/2))):null};
f.ha=function(a,b,c,d,e){return b===this.ta?(a=eh(this.f,this.h,c),-1===a?(a=2*this.h,b=Array(a+2),me(this.f,0,b,0,a),b[a]=c,b[a+1]=d,e.val=!0,new fh(null,this.ta,this.h+1,b)):Cd.c(this.f[a],d)?this:new fh(null,this.ta,this.h,Wg.d(this.f,a+1,d))):(new Zg(null,1<<(this.ta>>>a&31),[null,this])).ha(a,b,c,d,e)};f.za=function(a,b,c,d){a=eh(this.f,this.h,c);return 0>a?d:Vg(c,this.f[a])?this.f[a+1]:n?d:null};
var bh=function(){function a(a,b,c,k,m,r,t){var v=Hd(c);if(v===m)return new fh(null,v,2,[c,k,r,t]);var y=new Ug;return $g.ia(a,b,v,c,k,y).ia(a,b,m,r,t,y)}function b(a,b,c,k,m,r){var t=Hd(b);if(t===k)return new fh(null,t,2,[b,c,m,r]);var v=new Ug;return $g.ha(a,t,b,c,v).ha(a,k,m,r,v)}var c=null,c=function(c,e,h,k,m,r,t){switch(arguments.length){case 6:return b.call(this,c,e,h,k,m,r);case 7:return a.call(this,c,e,h,k,m,r,t)}throw Error("Invalid arity: "+arguments.length);};c.n=b;c.B=a;return c}();
function gh(a,b,c,d,e){this.i=a;this.ja=b;this.o=c;this.L=d;this.m=e;this.p=0;this.l=32374860}f=gh.prototype;f.u=function(){var a=this.m;return null!=a?a:this.m=a=Qd(this)};f.D=function(a,b){return A(b,this)};f.toString=function(){return Ad(this)};f.N=function(a,b){return Ud.c(b,this)};f.O=function(a,b,c){return Ud.d(b,c,this)};f.F=function(){return this};f.P=function(){return null==this.L?new E(null,2,5,zg,[this.ja[this.o],this.ja[this.o+1]],null):u(this.L)};
f.U=function(){return null==this.L?ch.d?ch.d(this.ja,this.o+2,null):ch.call(null,this.ja,this.o+2,null):ch.d?ch.d(this.ja,this.o,x(this.L)):ch.call(null,this.ja,this.o,x(this.L))};f.t=function(a,b){return Sd(this,b)};f.G=function(a,b){return new gh(b,this.ja,this.o,this.L,this.m)};f.C=function(){return this.i};f.I=function(){return Vd(Kd,this.i)};
var ch=function(){function a(a,b,c){if(null==c)for(c=a.length;;)if(b<c){if(null!=a[b])return new gh(null,a,b,null,null);var k=a[b+1];if(g(k)&&(k=k.Ra(),g(k)))return new gh(null,a,b+2,k,null);b+=2}else return null;else return new gh(null,a,b,c,null)}function b(a){return c.d(a,0,null)}var c=null,c=function(c,e,h){switch(arguments.length){case 1:return b.call(this,c);case 3:return a.call(this,c,e,h)}throw Error("Invalid arity: "+arguments.length);};c.a=b;c.d=a;return c}();
function hh(a,b,c,d,e){this.i=a;this.ja=b;this.o=c;this.L=d;this.m=e;this.p=0;this.l=32374860}f=hh.prototype;f.u=function(){var a=this.m;return null!=a?a:this.m=a=Qd(this)};f.D=function(a,b){return A(b,this)};f.toString=function(){return Ad(this)};f.N=function(a,b){return Ud.c(b,this)};f.O=function(a,b,c){return Ud.d(b,c,this)};f.F=function(){return this};f.P=function(){return u(this.L)};f.U=function(){return dh.e?dh.e(null,this.ja,this.o,x(this.L)):dh.call(null,null,this.ja,this.o,x(this.L))};
f.t=function(a,b){return Sd(this,b)};f.G=function(a,b){return new hh(b,this.ja,this.o,this.L,this.m)};f.C=function(){return this.i};f.I=function(){return Vd(Kd,this.i)};
var dh=function(){function a(a,b,c,k){if(null==k)for(k=b.length;;)if(c<k){var m=b[c];if(g(m)&&(m=m.Ra(),g(m)))return new hh(a,b,c+1,m,null);c+=1}else return null;else return new hh(a,b,c,k,null)}function b(a){return c.e(null,a,0,null)}var c=null,c=function(c,e,h,k){switch(arguments.length){case 1:return b.call(this,c);case 4:return a.call(this,c,e,h,k)}throw Error("Invalid arity: "+arguments.length);};c.a=b;c.e=a;return c}();
function ih(a,b,c,d,e,h){this.i=a;this.h=b;this.root=c;this.W=d;this.ba=e;this.m=h;this.p=8196;this.l=16123663}f=ih.prototype;f.Ja=function(){return new jh({},this.root,this.h,this.W,this.ba)};f.u=function(){var a=this.m;return null!=a?a:this.m=a=kf(this)};f.w=function(a,b){return Qa.d(this,b,null)};f.A=function(a,b,c){return null==b?this.W?this.ba:c:null==this.root?c:n?this.root.za(0,Hd(b),b,c):null};
f.qa=function(a,b,c){if(null==b)return this.W&&c===this.ba?this:new ih(this.i,this.W?this.h:this.h+1,this.root,!0,c,null);a=new Ug;b=(null==this.root?$g:this.root).ha(0,Hd(b),b,c,a);return b===this.root?this:new ih(this.i,a.val?this.h+1:this.h,b,this.W,this.ba,null)};f.Ia=function(a,b){return null==b?this.W:null==this.root?!1:n?this.root.za(0,Hd(b),b,ne)!==ne:null};
f.call=function(){var a=null;return a=function(a,c,d){switch(arguments.length){case 2:return this.w(null,c);case 3:return this.A(null,c,d)}throw Error("Invalid arity: "+arguments.length);}}();f.apply=function(a,b){return this.call.apply(this,[this].concat(Ca(b)))};f.a=function(a){return this.w(null,a)};f.c=function(a,b){return this.A(null,a,b)};f.D=function(a,b){return je(b)?Sa(this,q.c(b,0),q.c(b,1)):se.d(Ja,this,b)};f.toString=function(){return Ad(this)};
f.F=function(){if(0<this.h){var a=null!=this.root?this.root.Ra():null;return this.W?A(new E(null,2,5,zg,[null,this.ba],null),a):a}return null};f.J=function(){return this.h};f.t=function(a,b){return Mg(this,b)};f.G=function(a,b){return new ih(b,this.h,this.root,this.W,this.ba,this.m)};f.C=function(){return this.i};f.I=function(){return ec(Rg,this.i)};
f.Ka=function(a,b){if(null==b)return this.W?new ih(this.i,this.h-1,this.root,!1,null,null):this;if(null==this.root)return this;if(n){var c=this.root.Sa(0,Hd(b),b);return c===this.root?this:new ih(this.i,this.h-1,c,this.W,this.ba,null)}return null};var Rg=new ih(null,0,null,!1,null,0);function Zd(a,b){for(var c=a.length,d=0,e=ed(Rg);;)if(d<c)var h=d+1,e=e.Oa(null,a[d],b[d]),d=h;else return gd(e)}function jh(a,b,c,d,e){this.v=a;this.root=b;this.count=c;this.W=d;this.ba=e;this.p=56;this.l=258}f=jh.prototype;
f.Oa=function(a,b,c){return kh(this,b,c)};f.Pa=function(a,b){var c;a:{if(this.v){if(b?b.l&2048||b.Xb||(b.l?0:l(Va,b)):l(Va,b)){c=kh(this,lf.a?lf.a(b):lf.call(null,b),mf.a?mf.a(b):mf.call(null,b));break a}c=s(b);for(var d=this;;){var e=u(c);if(g(e))c=x(c),d=kh(d,lf.a?lf.a(e):lf.call(null,e),mf.a?mf.a(e):mf.call(null,e));else{c=d;break a}}}else throw Error("conj! after persistent");c=void 0}return c};
f.Qa=function(){var a;if(this.v)this.v=null,a=new ih(null,this.count,this.root,this.W,this.ba,null);else throw Error("persistent! called twice");return a};f.w=function(a,b){return null==b?this.W?this.ba:null:null==this.root?null:this.root.za(0,Hd(b),b)};f.A=function(a,b,c){return null==b?this.W?this.ba:c:null==this.root?c:this.root.za(0,Hd(b),b,c)};f.J=function(){if(this.v)return this.count;throw Error("count after persistent!");};
function kh(a,b,c){if(a.v){if(null==b)a.ba!==c&&(a.ba=c),a.W||(a.count+=1,a.W=!0);else{var d=new Ug;b=(null==a.root?$g:a.root).ia(a.v,0,Hd(b),b,c,d);b!==a.root&&(a.root=b);d.val&&(a.count+=1)}return a}throw Error("assoc! after persistent!");}function lh(a,b,c){for(var d=b;;)if(null!=a)b=c?a.left:a.right,d=Wd.c(d,a),a=b;else return d}function mh(a,b,c,d,e){this.i=a;this.stack=b;this.Xa=c;this.h=d;this.m=e;this.p=0;this.l=32374862}f=mh.prototype;
f.u=function(){var a=this.m;return null!=a?a:this.m=a=Qd(this)};f.D=function(a,b){return A(b,this)};f.toString=function(){return Ad(this)};f.N=function(a,b){return Ud.c(b,this)};f.O=function(a,b,c){return Ud.d(b,c,this)};f.F=function(){return this};f.J=function(){return 0>this.h?B(x(this))+1:this.h};f.P=function(){return null==this.stack?null:mb(this.stack)};f.U=function(){var a=u(this.stack),a=lh(this.Xa?a.right:a.left,x(this.stack),this.Xa);return null!=a?new mh(null,a,this.Xa,this.h-1,null):Kd};
f.t=function(a,b){return Sd(this,b)};f.G=function(a,b){return new mh(b,this.stack,this.Xa,this.h,this.m)};f.C=function(){return this.i};f.I=function(){return Vd(Kd,this.i)};function nh(a,b,c,d){return c instanceof oh?c.left instanceof oh?new oh(c.key,c.val,c.left.pa(),new ph(a,b,c.right,d,null),null):c.right instanceof oh?new oh(c.right.key,c.right.val,new ph(c.key,c.val,c.left,c.right.left,null),new ph(a,b,c.right.right,d,null),null):n?new ph(a,b,c,d,null):null:new ph(a,b,c,d,null)}
function qh(a,b,c,d){return d instanceof oh?d.right instanceof oh?new oh(d.key,d.val,new ph(a,b,c,d.left,null),d.right.pa(),null):d.left instanceof oh?new oh(d.left.key,d.left.val,new ph(a,b,c,d.left.left,null),new ph(d.key,d.val,d.left.right,d.right,null),null):n?new ph(a,b,c,d,null):null:new ph(a,b,c,d,null)}
function rh(a,b,c,d){if(c instanceof oh)return new oh(a,b,c.pa(),d,null);if(d instanceof ph)return qh(a,b,c,d.Va());if(d instanceof oh&&d.left instanceof ph)return new oh(d.left.key,d.left.val,new ph(a,b,c,d.left.left,null),qh(d.key,d.val,d.left.right,d.right.Va()),null);if(n)throw Error("red-black tree invariant violation");return null}function ph(a,b,c,d,e){this.key=a;this.val=b;this.left=c;this.right=d;this.m=e;this.p=0;this.l=32402207}f=ph.prototype;
f.u=function(){var a=this.m;return null!=a?a:this.m=a=Qd(this)};f.w=function(a,b){return q.d(this,b,null)};f.A=function(a,b,c){return q.d(this,b,c)};f.qa=function(a,b,c){return $d.d(new E(null,2,5,zg,[this.key,this.val],null),b,c)};f.call=function(){var a=null;return a=function(a,c,d){switch(arguments.length){case 2:return this.w(null,c);case 3:return this.A(null,c,d)}throw Error("Invalid arity: "+arguments.length);}}();f.apply=function(a,b){return this.call.apply(this,[this].concat(Ca(b)))};
f.a=function(a){return this.w(null,a)};f.c=function(a,b){return this.A(null,a,b)};f.D=function(a,b){return new E(null,3,5,zg,[this.key,this.val,b],null)};f.La=function(){return this.key};f.ab=function(){return this.val};f.Cb=function(a){return a.Eb(this)};f.Va=function(){return new oh(this.key,this.val,this.left,this.right,null)};f.replace=function(a,b,c,d){return new ph(a,b,c,d,null)};f.Bb=function(a){return a.Db(this)};f.Db=function(a){return new ph(a.key,a.val,this,a.right,null)};
f.Eb=function(a){return new ph(a.key,a.val,a.left,this,null)};f.pa=function(){return this};f.N=function(a,b){return Md.c(this,b)};f.O=function(a,b,c){return Md.d(this,b,c)};f.F=function(){return Ja(Ja(Kd,this.val),this.key)};f.J=function(){return 2};f.ra=function(){return this.val};f.sa=function(){return new E(null,1,5,zg,[this.key],null)};f.Da=function(a,b,c){return(new E(null,2,5,zg,[this.key,this.val],null)).Da(null,b,c)};f.t=function(a,b){return Sd(this,b)};
f.G=function(a,b){return Vd(new E(null,2,5,zg,[this.key,this.val],null),b)};f.C=function(){return null};f.r=function(a,b){return 0===b?this.key:1===b?this.val:null};f.Z=function(a,b,c){return 0===b?this.key:1===b?this.val:n?c:null};f.I=function(){return yg};function oh(a,b,c,d,e){this.key=a;this.val=b;this.left=c;this.right=d;this.m=e;this.p=0;this.l=32402207}f=oh.prototype;f.u=function(){var a=this.m;return null!=a?a:this.m=a=Qd(this)};f.w=function(a,b){return q.d(this,b,null)};
f.A=function(a,b,c){return q.d(this,b,c)};f.qa=function(a,b,c){return $d.d(new E(null,2,5,zg,[this.key,this.val],null),b,c)};f.call=function(){var a=null;return a=function(a,c,d){switch(arguments.length){case 2:return this.w(null,c);case 3:return this.A(null,c,d)}throw Error("Invalid arity: "+arguments.length);}}();f.apply=function(a,b){return this.call.apply(this,[this].concat(Ca(b)))};f.a=function(a){return this.w(null,a)};f.c=function(a,b){return this.A(null,a,b)};
f.D=function(a,b){return new E(null,3,5,zg,[this.key,this.val,b],null)};f.La=function(){return this.key};f.ab=function(){return this.val};f.Cb=function(a){return new oh(this.key,this.val,this.left,a,null)};f.Va=function(){throw Error("red-black tree invariant violation");};f.replace=function(a,b,c,d){return new oh(a,b,c,d,null)};f.Bb=function(a){return new oh(this.key,this.val,a,this.right,null)};
f.Db=function(a){return this.left instanceof oh?new oh(this.key,this.val,this.left.pa(),new ph(a.key,a.val,this.right,a.right,null),null):this.right instanceof oh?new oh(this.right.key,this.right.val,new ph(this.key,this.val,this.left,this.right.left,null),new ph(a.key,a.val,this.right.right,a.right,null),null):n?new ph(a.key,a.val,this,a.right,null):null};
f.Eb=function(a){return this.right instanceof oh?new oh(this.key,this.val,new ph(a.key,a.val,a.left,this.left,null),this.right.pa(),null):this.left instanceof oh?new oh(this.left.key,this.left.val,new ph(a.key,a.val,a.left,this.left.left,null),new ph(this.key,this.val,this.left.right,this.right,null),null):n?new ph(a.key,a.val,a.left,this,null):null};f.pa=function(){return new ph(this.key,this.val,this.left,this.right,null)};f.N=function(a,b){return Md.c(this,b)};
f.O=function(a,b,c){return Md.d(this,b,c)};f.F=function(){return Ja(Ja(Kd,this.val),this.key)};f.J=function(){return 2};f.ra=function(){return this.val};f.sa=function(){return new E(null,1,5,zg,[this.key],null)};f.Da=function(a,b,c){return(new E(null,2,5,zg,[this.key,this.val],null)).Da(null,b,c)};f.t=function(a,b){return Sd(this,b)};f.G=function(a,b){return Vd(new E(null,2,5,zg,[this.key,this.val],null),b)};f.C=function(){return null};f.r=function(a,b){return 0===b?this.key:1===b?this.val:null};
f.Z=function(a,b,c){return 0===b?this.key:1===b?this.val:n?c:null};f.I=function(){return yg};
var th=function sh(b,c,d,e,h){if(null==c)return new oh(d,e,null,null,null);var k=b.c?b.c(d,c.key):b.call(null,d,c.key);return 0===k?(h[0]=c,null):0>k?(b=sh(b,c.left,d,e,h),null!=b?c.Bb(b):null):n?(b=sh(b,c.right,d,e,h),null!=b?c.Cb(b):null):null},vh=function uh(b,c){if(null==b)return c;if(null==c)return b;if(b instanceof oh){if(c instanceof oh){var d=uh(b.right,c.left);return d instanceof oh?new oh(d.key,d.val,new oh(b.key,b.val,b.left,d.left,null),new oh(c.key,c.val,d.right,c.right,null),null):new oh(b.key,
b.val,b.left,new oh(c.key,c.val,d,c.right,null),null)}return new oh(b.key,b.val,b.left,uh(b.right,c),null)}return c instanceof oh?new oh(c.key,c.val,uh(b,c.left),c.right,null):n?(d=uh(b.right,c.left),d instanceof oh?new oh(d.key,d.val,new ph(b.key,b.val,b.left,d.left,null),new ph(c.key,c.val,d.right,c.right,null),null):rh(b.key,b.val,b.left,new ph(c.key,c.val,d,c.right,null))):null},xh=function wh(b,c,d,e){if(null!=c){var h=b.c?b.c(d,c.key):b.call(null,d,c.key);if(0===h)return e[0]=c,vh(c.left,c.right);
if(0>h)return b=wh(b,c.left,d,e),null!=b||null!=e[0]?c.left instanceof ph?rh(c.key,c.val,b,c.right):new oh(c.key,c.val,b,c.right,null):null;if(n){b=wh(b,c.right,d,e);if(null!=b||null!=e[0])if(c.right instanceof ph)if(e=c.key,d=c.val,c=c.left,b instanceof oh)c=new oh(e,d,c,b.pa(),null);else if(c instanceof ph)c=nh(e,d,c.Va(),b);else if(c instanceof oh&&c.right instanceof ph)c=new oh(c.right.key,c.right.val,nh(c.key,c.val,c.left.Va(),c.right.left),new ph(e,d,c.right.right,b,null),null);else{if(n)throw Error("red-black tree invariant violation");
c=null}else c=new oh(c.key,c.val,c.left,b,null);else c=null;return c}}return null},zh=function yh(b,c,d,e){var h=c.key,k=b.c?b.c(d,h):b.call(null,d,h);return 0===k?c.replace(h,e,c.left,c.right):0>k?c.replace(h,c.val,yh(b,c.left,d,e),c.right):n?c.replace(h,c.val,c.left,yh(b,c.right,d,e)):null};function Ah(a,b,c,d,e){this.Y=a;this.xa=b;this.h=c;this.i=d;this.m=e;this.l=418776847;this.p=8192}f=Ah.prototype;f.u=function(){var a=this.m;return null!=a?a:this.m=a=kf(this)};
f.w=function(a,b){return Qa.d(this,b,null)};f.A=function(a,b,c){a=Bh(this,b);return null!=a?a.val:c};f.qa=function(a,b,c){a=[null];var d=th(this.Y,this.xa,b,c,a);return null==d?(a=C.c(a,0),Cd.c(c,a.val)?this:new Ah(this.Y,zh(this.Y,this.xa,b,c),this.h,this.i,null)):new Ah(this.Y,d.pa(),this.h+1,this.i,null)};f.Ia=function(a,b){return null!=Bh(this,b)};
f.call=function(){var a=null;return a=function(a,c,d){switch(arguments.length){case 2:return this.w(null,c);case 3:return this.A(null,c,d)}throw Error("Invalid arity: "+arguments.length);}}();f.apply=function(a,b){return this.call.apply(this,[this].concat(Ca(b)))};f.a=function(a){return this.w(null,a)};f.c=function(a,b){return this.A(null,a,b)};f.D=function(a,b){return je(b)?Sa(this,q.c(b,0),q.c(b,1)):se.d(Ja,this,b)};
f.Ma=function(){return 0<this.h?new mh(null,lh(this.xa,null,!1),!1,this.h,null):null};f.toString=function(){return Ad(this)};function Bh(a,b){for(var c=a.xa;;)if(null!=c){var d=a.Y.c?a.Y.c(b,c.key):a.Y.call(null,b,c.key);if(0===d)return c;if(0>d)c=c.left;else if(n)c=c.right;else return null}else return null}f.vb=function(a,b){return 0<this.h?new mh(null,lh(this.xa,null,b),b,this.h,null):null};
f.wb=function(a,b,c){if(0<this.h){a=null;for(var d=this.xa;;)if(null!=d){var e=this.Y.c?this.Y.c(b,d.key):this.Y.call(null,b,d.key);if(0===e)return new mh(null,Wd.c(a,d),c,-1,null);if(g(c))0>e?(a=Wd.c(a,d),d=d.left):d=d.right;else if(n)0<e?(a=Wd.c(a,d),d=d.right):d=d.left;else return null}else return null==a?null:new mh(null,a,c,-1,null)}else return null};f.ub=function(a,b){return lf.a?lf.a(b):lf.call(null,b)};f.tb=function(){return this.Y};
f.F=function(){return 0<this.h?new mh(null,lh(this.xa,null,!0),!0,this.h,null):null};f.J=function(){return this.h};f.t=function(a,b){return Mg(this,b)};f.G=function(a,b){return new Ah(this.Y,this.xa,this.h,b,this.m)};f.C=function(){return this.i};f.I=function(){return Vd(Ch,this.i)};f.Ka=function(a,b){var c=[null],d=xh(this.Y,this.xa,b,c);return null==d?null==C.c(c,0)?this:new Ah(this.Y,null,0,this.i,null):new Ah(this.Y,d.pa(),this.h-1,this.i,null)};
var Ch=new Ah(Dd,null,0,null,0),Dh=function(){function a(a){var d=null;0<arguments.length&&(d=z(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){a=s(a);for(var b=ed(Rg);;)if(a){var e=x(x(a)),b=Lf.d(b,u(a),u(x(a)));a=e}else return gd(b)}a.j=0;a.g=function(a){a=s(a);return b(a)};a.b=b;return a}(),Eh=function(){function a(a){var d=null;0<arguments.length&&(d=z(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){a=s(a);for(var b=Ch;;)if(a){var e=
x(x(a)),b=$d.d(b,u(a),u(x(a)));a=e}else return b}a.j=0;a.g=function(a){a=s(a);return b(a)};a.b=b;return a}();function Fh(a,b){this.Aa=a;this.ea=b;this.p=0;this.l=32374988}f=Fh.prototype;f.u=function(){return Qd(this)};f.aa=function(){var a=this.Aa,a=(a?a.l&128||a.Kb||(a.l?0:l(Oa,a)):l(Oa,a))?this.Aa.aa(null):x(this.Aa);return null==a?null:new Fh(a,this.ea)};f.D=function(a,b){return A(b,this)};f.toString=function(){return Ad(this)};f.N=function(a,b){return Ud.c(b,this)};
f.O=function(a,b,c){return Ud.d(b,c,this)};f.F=function(){return this};f.P=function(){return this.Aa.P(null).La(null)};f.U=function(){var a=this.Aa,a=(a?a.l&128||a.Kb||(a.l?0:l(Oa,a)):l(Oa,a))?this.Aa.aa(null):x(this.Aa);return null!=a?new Fh(a,this.ea):Kd};f.t=function(a,b){return Sd(this,b)};f.G=function(a,b){return new Fh(this.Aa,b)};f.C=function(){return this.ea};f.I=function(){return Vd(Kd,this.ea)};function lf(a){return Wa(a)}function mf(a){return jb(a)}
var Gh=function(){function a(a){var d=null;0<arguments.length&&(d=z(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){return g(Pf(a))?se.c(function(a,b){return Wd.c(g(a)?a:F,b)},a):null}a.j=0;a.g=function(a){a=s(a);return b(a)};a.b=b;return a}();function Hh(a,b,c){this.i=a;this.Ea=b;this.m=c;this.p=8196;this.l=15077647}f=Hh.prototype;f.Ja=function(){return new Ih(ed(this.Ea))};
f.u=function(){var a=this.m;if(null!=a)return a;a:{for(var a=0,b=s(this);;)if(b)var c=u(b),a=(a+Hd(c))%4503599627370496,b=x(b);else break a;a=void 0}return this.m=a};f.w=function(a,b){return Qa.d(this,b,null)};f.A=function(a,b,c){return Ra(this.Ea,b)?b:c};f.call=function(){var a=null;return a=function(a,c,d){switch(arguments.length){case 2:return this.w(null,c);case 3:return this.A(null,c,d)}throw Error("Invalid arity: "+arguments.length);}}();f.apply=function(a,b){return this.call.apply(this,[this].concat(Ca(b)))};
f.a=function(a){return this.w(null,a)};f.c=function(a,b){return this.A(null,a,b)};f.D=function(a,b){return new Hh(this.i,$d.d(this.Ea,b,null),null)};f.toString=function(){return Ad(this)};f.F=function(){var a=s(this.Ea);return a?new Fh(a,null):null};f.Lb=function(a,b){return new Hh(this.i,Ua(this.Ea,b),null)};f.J=function(){return Fa(this.Ea)};f.t=function(a,b){var c=this;return(null==b?!1:b?b.l&4096||b.rc?!0:b.l?!1:l(kb,b):l(kb,b))&&B(c)===B(b)&&Of(function(a){return qe(c,a)},b)};
f.G=function(a,b){return new Hh(b,this.Ea,this.m)};f.C=function(){return this.i};f.I=function(){return Vd(Jh,this.i)};var Jh=new Hh(null,F,0);function Kh(a){var b=a.length;if(b<=Qg)for(var c=0,d=ed(F);;)if(c<b)var e=c+1,d=hd(d,a[c],null),c=e;else return new Hh(null,gd(d),null);else for(c=0,d=ed(Jh);;)if(c<b)e=c+1,d=fd(d,a[c]),c=e;else return gd(d)}function Ih(a){this.wa=a;this.l=259;this.p=136}f=Ih.prototype;
f.call=function(){var a=null;return a=function(a,c,d){switch(arguments.length){case 2:return Qa.d(this.wa,c,ne)===ne?null:c;case 3:return Qa.d(this.wa,c,ne)===ne?d:c}throw Error("Invalid arity: "+arguments.length);}}();f.apply=function(a,b){return this.call.apply(this,[this].concat(Ca(b)))};f.a=function(a){return Qa.d(this.wa,a,ne)===ne?null:a};f.c=function(a,b){return Qa.d(this.wa,a,ne)===ne?b:a};f.w=function(a,b){return Qa.d(this,b,null)};f.A=function(a,b,c){return Qa.d(this.wa,b,ne)===ne?c:b};
f.J=function(){return B(this.wa)};f.Pa=function(a,b){this.wa=Lf.d(this.wa,b,null);return this};f.Qa=function(){return new Hh(null,gd(this.wa),null)};function vf(a){if(a&&(a.p&4096||a.Zb))return a.name;if("string"===typeof a)return a;throw Error([p("Doesn't support name: "),p(a)].join(""));}var Mh=function Lh(b,c){return new xf(null,function(){var d=s(c);return d?g(b.a?b.a(u(d)):b.call(null,u(d)))?A(u(d),Lh(b,w(d))):null:null},null,null)};
function Nh(a,b,c){return function(d){var e=Zc(a);return b.c?b.c(e.c?e.c(Yc(a,d),c):e.call(null,Yc(a,d),c),0):b.call(null,e.c?e.c(Yc(a,d),c):e.call(null,Yc(a,d),c),0)}}
var Oh=function(){function a(a,b,c,k,m){var r=Xc(a,c,!0);if(g(r)){var t=C.d(r,0,null);return Mh(Nh(a,k,m),g(Nh(a,b,c).call(null,t))?r:x(r))}return null}function b(a,b,c){var k=Nh(a,b,c);return g(Kh([ve,ef]).call(null,b))?(a=Xc(a,c,!0),g(a)?(b=C.d(a,0,null),g(k.a?k.a(b):k.call(null,b))?a:x(a)):null):Mh(k,Wc(a,!0))}var c=null,c=function(c,e,h,k,m){switch(arguments.length){case 3:return b.call(this,c,e,h);case 5:return a.call(this,c,e,h,k,m)}throw Error("Invalid arity: "+arguments.length);};c.d=b;c.k=
a;return c}(),Ph=function(){function a(a,b,c,k,m){var r=Xc(a,m,!1);if(g(r)){var t=C.d(r,0,null);return Mh(Nh(a,b,c),g(Nh(a,k,m).call(null,t))?r:x(r))}return null}function b(a,b,c){var k=Nh(a,b,c);return g(Kh([te,ue]).call(null,b))?(a=Xc(a,c,!1),g(a)?(b=C.d(a,0,null),g(k.a?k.a(b):k.call(null,b))?a:x(a)):null):Mh(k,Wc(a,!1))}var c=null,c=function(c,e,h,k,m){switch(arguments.length){case 3:return b.call(this,c,e,h);case 5:return a.call(this,c,e,h,k,m)}throw Error("Invalid arity: "+arguments.length);
};c.d=b;c.k=a;return c}();function Qh(a,b,c,d,e){this.i=a;this.start=b;this.end=c;this.step=d;this.m=e;this.l=32375006;this.p=8192}f=Qh.prototype;f.u=function(){var a=this.m;return null!=a?a:this.m=a=Qd(this)};f.aa=function(){return 0<this.step?this.start+this.step<this.end?new Qh(this.i,this.start+this.step,this.end,this.step,null):null:this.start+this.step>this.end?new Qh(this.i,this.start+this.step,this.end,this.step,null):null};f.D=function(a,b){return A(b,this)};f.toString=function(){return Ad(this)};
f.N=function(a,b){return Md.c(this,b)};f.O=function(a,b,c){return Md.d(this,b,c)};f.F=function(){return 0<this.step?this.start<this.end?this:null:this.start>this.end?this:null};f.J=function(){return wa(kc(this))?0:Math.ceil((this.end-this.start)/this.step)};f.P=function(){return null==kc(this)?null:this.start};f.U=function(){return null!=kc(this)?new Qh(this.i,this.start+this.step,this.end,this.step,null):Kd};f.t=function(a,b){return Sd(this,b)};
f.G=function(a,b){return new Qh(b,this.start,this.end,this.step,this.m)};f.C=function(){return this.i};f.r=function(a,b){if(b<Fa(this))return this.start+b*this.step;if(this.start>this.end&&0===this.step)return this.start;throw Error("Index out of bounds");};f.Z=function(a,b,c){return b<Fa(this)?this.start+b*this.step:this.start>this.end&&0===this.step?this.start:c};f.I=function(){return Vd(Kd,this.i)};
var Rh=function(){function a(a,b,c){return new Qh(null,a,b,c,null)}function b(a,b){return e.d(a,b,1)}function c(a){return e.d(0,a,1)}function d(){return e.d(0,Number.MAX_VALUE,1)}var e=null,e=function(e,k,m){switch(arguments.length){case 0:return d.call(this);case 1:return c.call(this,e);case 2:return b.call(this,e,k);case 3:return a.call(this,e,k,m)}throw Error("Invalid arity: "+arguments.length);};e.q=d;e.a=c;e.c=b;e.d=a;return e}();
function Sh(a){var b=Th.exec(a);return Cd.c(u(b),a)?1===B(b)?u(b):Ag(b):null}function Uh(a,b){var c=a.exec(b);return null==c?null:1===B(c)?u(c):Ag(c)}function Vh(a){var b=Uh(/^(?:\(\?([idmsux]*)\))?(.*)/,a);C.d(b,0,null);a=C.d(b,1,null);b=C.d(b,2,null);return RegExp(b,a)}
function Wh(a,b,c,d,e,h,k){var m=na;try{na=null==na?null:na-1;if(null!=na&&0>na)return $c(a,"#");$c(a,c);s(k)&&(b.d?b.d(u(k),a,h):b.call(null,u(k),a,h));for(var r=x(k),t=va.a(h);r&&(null==t||0!==t);){$c(a,d);b.d?b.d(u(r),a,h):b.call(null,u(r),a,h);var v=x(r);c=t-1;r=v;t=c}g(va.a(h))&&($c(a,d),b.d?b.d("...",a,h):b.call(null,"...",a,h));return $c(a,e)}finally{na=m}}
var Xh=function(){function a(a,d){var e=null;1<arguments.length&&(e=z(Array.prototype.slice.call(arguments,1),0));return b.call(this,a,e)}function b(a,b){for(var e=s(b),h=null,k=0,m=0;;)if(m<k){var r=h.r(null,m);$c(a,r);m+=1}else if(e=s(e))h=e,ke(h)?(e=kd(h),k=ld(h),h=e,r=B(e),e=k,k=r):(r=u(h),$c(a,r),e=x(h),h=null,k=0),m=0;else return null}a.j=1;a.g=function(a){var d=u(a);a=w(a);return b(d,a)};a.b=b;return a}(),Yh={'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t"};
function Zh(a){return[p('"'),p(a.replace(RegExp('[\\\\"\b\f\n\r\t]',"g"),function(a){return Yh[a]})),p('"')].join("")}
var bi=function $h(b,c,d){if(null==b)return $c(c,"nil");if(void 0===b)return $c(c,"#\x3cundefined\x3e");if(n){g(function(){var c=Yd.c(d,ta);return g(c)?(c=b?b.l&131072||b.Yb?!0:b.l?!1:l(ac,b):l(ac,b))?ee(b):c:c}())&&($c(c,"^"),$h(ee(b),c,d),$c(c," "));if(null==b)return $c(c,"nil");if(b.Qb)return b.ac(c);if(b&&(b.l&2147483648||b.K))return b.s(null,c,d);if(ya(b)===Boolean||"number"===typeof b)return $c(c,""+p(b));if(null!=b&&b.constructor===Object)return $c(c,"#js "),ai.e?ai.e(Vf.c(function(c){return new E(null,
2,5,zg,[wf.a(c),b[c]],null)},le(b)),$h,c,d):ai.call(null,Vf.c(function(c){return new E(null,2,5,zg,[wf.a(c),b[c]],null)},le(b)),$h,c,d);if(b instanceof Array)return Wh(c,$h,"#js ["," ","]",d,b);if("string"==typeof b)return g(sa.a(d))?$c(c,Zh(b)):$c(c,b);if(be(b))return Xh.b(c,z(["#\x3c",""+p(b),"\x3e"],0));if(b instanceof Date){var e=function(b,c){for(var d=""+p(b);;)if(B(d)<c)d=[p("0"),p(d)].join("");else return d};return Xh.b(c,z(['#inst "',""+p(b.getUTCFullYear()),"-",e(b.getUTCMonth()+1,2),"-",
e(b.getUTCDate(),2),"T",e(b.getUTCHours(),2),":",e(b.getUTCMinutes(),2),":",e(b.getUTCSeconds(),2),".",e(b.getUTCMilliseconds(),3),"-",'00:00"'],0))}return b instanceof RegExp?Xh.b(c,z(['#"',b.source,'"'],0)):(b?b.l&2147483648||b.K||(b.l?0:l(ad,b)):l(ad,b))?bd(b,c,d):n?Xh.b(c,z(["#\x3c",""+p(b),"\x3e"],0)):null}return null};
function ci(a,b){var c;if(null==a||wa(s(a)))c="";else{c=p;var d=new ja;a:{var e=new zd(d);bi(u(a),e,b);for(var h=s(x(a)),k=null,m=0,r=0;;)if(r<m){var t=k.r(null,r);$c(e," ");bi(t,e,b);r+=1}else if(h=s(h))k=h,ke(k)?(h=kd(k),m=ld(k),k=h,t=B(h),h=m,m=t):(t=u(k),$c(e," "),bi(t,e,b),h=x(k),k=null,m=0),r=0;else break a}c=""+c(d)}return c}
var di=function(){function a(a){var d=null;0<arguments.length&&(d=z(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){return ci(a,oa())}a.j=0;a.g=function(a){a=s(a);return b(a)};a.b=b;return a}(),ei=function(){function a(a){var d=null;0<arguments.length&&(d=z(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){var b=$d.d(oa(),sa,!1);a=ci(a,b);la.a?la.a(a):la.call(null,a);return null}a.j=0;a.g=function(a){a=s(a);return b(a)};a.b=b;return a}();
function ai(a,b,c,d){return Wh(c,function(a,c,d){b.d?b.d(Wa(a),c,d):b.call(null,Wa(a),c,d);$c(c," ");return b.d?b.d(jb(a),c,d):b.call(null,jb(a),c,d)},"{",", ","}",d,s(a))}Fh.prototype.K=!0;Fh.prototype.s=function(a,b,c){return Wh(b,bi,"("," ",")",c,this)};Jd.prototype.K=!0;Jd.prototype.s=function(a,b,c){return Wh(b,bi,"("," ",")",c,this)};Dg.prototype.K=!0;Dg.prototype.s=function(a,b,c){return Wh(b,bi,"["," ","]",c,this)};Df.prototype.K=!0;
Df.prototype.s=function(a,b,c){return Wh(b,bi,"("," ",")",c,this)};Ah.prototype.K=!0;Ah.prototype.s=function(a,b,c){return ai(this,bi,b,c)};pa.prototype.K=!0;pa.prototype.s=function(a,b,c){return ai(this,bi,b,c)};Ig.prototype.K=!0;Ig.prototype.s=function(a,b,c){return Wh(b,bi,"#queue ["," ","]",c,s(this))};xf.prototype.K=!0;xf.prototype.s=function(a,b,c){return Wh(b,bi,"("," ",")",c,this)};Rd.prototype.K=!0;Rd.prototype.s=function(a,b,c){return Wh(b,bi,"("," ",")",c,this)};gh.prototype.K=!0;
gh.prototype.s=function(a,b,c){return Wh(b,bi,"("," ",")",c,this)};oh.prototype.K=!0;oh.prototype.s=function(a,b,c){return Wh(b,bi,"["," ","]",c,this)};Bg.prototype.K=!0;Bg.prototype.s=function(a,b,c){return Wh(b,bi,"("," ",")",c,this)};ih.prototype.K=!0;ih.prototype.s=function(a,b,c){return ai(this,bi,b,c)};Hh.prototype.K=!0;Hh.prototype.s=function(a,b,c){return Wh(b,bi,"#{"," ","}",c,this)};E.prototype.K=!0;E.prototype.s=function(a,b,c){return Wh(b,bi,"["," ","]",c,this)};nf.prototype.K=!0;
nf.prototype.s=function(a,b,c){return Wh(b,bi,"("," ",")",c,this)};Og.prototype.K=!0;Og.prototype.s=function(a,b,c){return Wh(b,bi,"("," ",")",c,this)};of.prototype.K=!0;of.prototype.s=function(a,b){return $c(b,"()")};ph.prototype.K=!0;ph.prototype.s=function(a,b,c){return Wh(b,bi,"["," ","]",c,this)};sf.prototype.K=!0;sf.prototype.s=function(a,b,c){return Wh(b,bi,"("," ",")",c,this)};Qh.prototype.K=!0;Qh.prototype.s=function(a,b,c){return Wh(b,bi,"("," ",")",c,this)};hh.prototype.K=!0;
hh.prototype.s=function(a,b,c){return Wh(b,bi,"("," ",")",c,this)};mh.prototype.K=!0;mh.prototype.s=function(a,b,c){return Wh(b,bi,"("," ",")",c,this)};E.prototype.Za=!0;E.prototype.$a=function(a,b){return re.c(this,b)};Dg.prototype.Za=!0;Dg.prototype.$a=function(a,b){return re.c(this,b)};D.prototype.Za=!0;D.prototype.$a=function(a,b){return Bd(this,b)};Fd.prototype.Za=!0;Fd.prototype.$a=function(a,b){return Bd(this,b)};
function fi(a,b,c,d){this.state=a;this.i=b;this.hc=c;this.oa=d;this.l=2153938944;this.p=2}f=fi.prototype;f.u=function(){return this[ca]||(this[ca]=++da)};f.yb=function(a,b,c){a=s(this.oa);for(var d=null,e=0,h=0;;)if(h<e){var k=d.r(null,h),m=C.d(k,0,null),k=C.d(k,1,null);k.e?k.e(m,this,b,c):k.call(null,m,this,b,c);h+=1}else if(a=s(a))ke(a)?(d=kd(a),a=ld(a),m=d,e=B(d),d=m):(d=u(a),m=C.d(d,0,null),k=C.d(d,1,null),k.e?k.e(m,this,b,c):k.call(null,m,this,b,c),a=x(a),d=null,e=0),h=0;else return null};
f.xb=function(a,b,c){return this.oa=$d.d(this.oa,b,c)};f.s=function(a,b,c){$c(b,"#\x3cAtom: ");bi(this.state,b,c);return $c(b,"\x3e")};f.C=function(){return this.i};f.Gb=function(){return this.state};f.t=function(a,b){return this===b};
var hi=function(){function a(a){return new fi(a,null,null,null)}var b=null,c=function(){function a(c,d){var m=null;1<arguments.length&&(m=z(Array.prototype.slice.call(arguments,1),0));return b.call(this,c,m)}function b(a,c){var d=oe(c)?de.c(Dh,c):c,e=Yd.c(d,gi),d=Yd.c(d,ta);return new fi(a,d,e,null)}a.j=1;a.g=function(a){var c=u(a);a=w(a);return b(c,a)};a.b=b;return a}(),b=function(b,e){switch(arguments.length){case 1:return a.call(this,b);default:return c.b(b,z(arguments,1))}throw Error("Invalid arity: "+
arguments.length);};b.j=1;b.g=c.g;b.a=a;b.b=c.b;return b}();function ii(a,b){var c=a.hc;if(null!=c&&!g(c.a?c.a(b):c.call(null,b)))throw Error([p("Assert failed: "),p("Validator rejected reference state"),p("\n"),p(di.b(z([rf(new Fd(null,"validate","validate",1233162959,null),new Fd(null,"new-value","new-value",972165309,null))],0)))].join(""));c=a.state;a.state=b;null!=a.oa&&cd(a,c,b);return b}
var ji=function(){function a(a,b,c,d,e){return ii(a,b.e?b.e(a.state,c,d,e):b.call(null,a.state,c,d,e))}function b(a,b,c,d){return ii(a,b.d?b.d(a.state,c,d):b.call(null,a.state,c,d))}function c(a,b,c){return ii(a,b.c?b.c(a.state,c):b.call(null,a.state,c))}function d(a,b){return ii(a,b.a?b.a(a.state):b.call(null,a.state))}var e=null,h=function(){function a(c,d,e,h,k,R){var X=null;5<arguments.length&&(X=z(Array.prototype.slice.call(arguments,5),0));return b.call(this,c,d,e,h,k,X)}function b(a,c,d,e,
h,k){return ii(a,de.b(c,a.state,d,e,h,z([k],0)))}a.j=5;a.g=function(a){var c=u(a);a=x(a);var d=u(a);a=x(a);var e=u(a);a=x(a);var h=u(a);a=x(a);var k=u(a);a=w(a);return b(c,d,e,h,k,a)};a.b=b;return a}(),e=function(e,m,r,t,v,y){switch(arguments.length){case 2:return d.call(this,e,m);case 3:return c.call(this,e,m,r);case 4:return b.call(this,e,m,r,t);case 5:return a.call(this,e,m,r,t,v);default:return h.b(e,m,r,t,v,z(arguments,5))}throw Error("Invalid arity: "+arguments.length);};e.j=5;e.g=h.g;e.c=d;
e.d=c;e.e=b;e.k=a;e.b=h.b;return e}();function ki(){var a=li();return qb(a)}function mi(a,b,c){return dd(a,b,c)}var ni=null,oi=function(){function a(a){null==ni&&(ni=hi.a(0));return Id.a([p(a),p(ji.c(ni,Ld))].join(""))}function b(){return c.a("G__")}var c=null,c=function(c){switch(arguments.length){case 0:return b.call(this);case 1:return a.call(this,c)}throw Error("Invalid arity: "+arguments.length);};c.q=b;c.a=a;return c}(),pi={};
function qi(a){if(a?a.Vb:a)return a.Vb(a);var b;b=qi[ba(null==a?null:a)];if(!b&&(b=qi._,!b))throw za("IEncodeJS.-clj-\x3ejs",a);return b.call(null,a)}function ri(a){return(a?g(g(null)?null:a.Ub)||(a.Pb?0:l(pi,a)):l(pi,a))?qi(a):"string"===typeof a||"number"===typeof a||a instanceof D||a instanceof Fd?si.a?si.a(a):si.call(null,a):di.b(z([a],0))}
var si=function ti(b){if(null==b)return null;if(b?g(g(null)?null:b.Ub)||(b.Pb?0:l(pi,b)):l(pi,b))return qi(b);if(b instanceof D)return vf(b);if(b instanceof Fd)return""+p(b);if(ie(b)){var c={};b=s(b);for(var d=null,e=0,h=0;;)if(h<e){var k=d.r(null,h),m=C.d(k,0,null),k=C.d(k,1,null);c[ri(m)]=ti(k);h+=1}else if(b=s(b))ke(b)?(e=kd(b),b=ld(b),d=e,e=B(e)):(e=u(b),d=C.d(e,0,null),e=C.d(e,1,null),c[ri(d)]=ti(e),b=x(b),d=null,e=0),h=0;else break;return c}if(null==b?0:b?b.l&8||b.kc||(b.l?0:l(Ia,b)):l(Ia,b)){c=
[];b=s(Vf.c(ti,b));d=null;for(h=e=0;;)if(h<e)m=d.r(null,h),c.push(m),h+=1;else if(b=s(b))d=b,ke(d)?(b=kd(d),h=ld(d),d=b,e=B(b),b=h):(b=u(d),c.push(b),b=x(d),d=null,e=0),h=0;else break;return c}return n?b:null},ui=null;function li(){null==ui&&(ui=hi.a(new pa(null,3,[vi,F,wi,F,xi,F],null)));return ui}
var yi=function(){function a(a,b,h){var k=Cd.c(b,h);if(!k&&!(k=qe(xi.a(a).call(null,b),h))&&(k=je(h))&&(k=je(b)))if(k=B(h)===B(b))for(var k=!0,m=0;;)if(k&&m!==B(h))k=c.d(a,b.a?b.a(m):b.call(null,m),h.a?h.a(m):h.call(null,m)),m+=1;else return k;else return k;else return k}function b(a,b){return c.d(ki(),a,b)}var c=null,c=function(c,e,h){switch(arguments.length){case 2:return b.call(this,c,e);case 3:return a.call(this,c,e,h)}throw Error("Invalid arity: "+arguments.length);};c.c=b;c.d=a;return c}(),
zi=function(){function a(a,b){var c=Yd.c(vi.a(a),b);return s(c)?c:null}function b(a){return c.c(ki(),a)}var c=null,c=function(c,e){switch(arguments.length){case 1:return b.call(this,c);case 2:return a.call(this,c,e)}throw Error("Invalid arity: "+arguments.length);};c.a=b;c.c=a;return c}();function Ai(a,b,c,d){ji.c(a,function(){return qb(b)});ji.c(c,function(){return qb(d)})}
var Ci=function Bi(b,c,d){var e=qb(d).call(null,b),e=g(g(e)?e.a?e.a(c):e.call(null,c):e)?!0:null;if(g(e))return e;e=function(){for(var e=zi.a(c);;)if(0<B(e))Bi(b,u(e),d),e=w(e);else return null}();if(g(e))return e;e=function(){for(var e=zi.a(b);;)if(0<B(e))Bi(u(e),c,d),e=w(e);else return null}();return g(e)?e:!1};function Di(a,b,c){c=Ci(a,b,c);return g(c)?c:yi.c(a,b)}
var Fi=function Ei(b,c,d,e,h,k,m){var r=se.d(function(e,k){var m=C.d(k,0,null);C.d(k,1,null);if(yi.d(qb(d),c,m)){var r;r=(r=null==e)?r:Di(m,u(e),h);r=g(r)?k:e;if(!g(Di(u(r),m,h)))throw Error([p("Multiple methods in multimethod '"),p(b),p("' match dispatch value: "),p(c),p(" -\x3e "),p(m),p(" and "),p(u(r)),p(", and neither is preferred")].join(""));return r}return e},null,qb(e));if(g(r)){if(Cd.c(qb(m),qb(d)))return ji.e(k,$d,c,u(x(r))),u(x(r));Ai(k,e,m,d);return Ei(b,c,d,e,h,k,m)}return null};
function Gi(a,b){if(a?a.Jb:a)return a.Jb(0,b);var c;c=Gi[ba(null==a?null:a)];if(!c&&(c=Gi._,!c))throw za("IMultiFn.-get-method",a);return c.call(null,a,b)}function Hi(a,b){if(a?a.Ib:a)return a.Ib(0,b);var c;c=Hi[ba(null==a?null:a)];if(!c&&(c=Hi._,!c))throw za("IMultiFn.-dispatch",a);return c.call(null,a,b)}function Ii(a,b,c,d,e,h,k,m){this.name=a;this.cc=b;this.bc=c;this.bb=d;this.Ta=e;this.fc=h;this.cb=k;this.Ya=m;this.l=4194304;this.p=256}f=Ii.prototype;
f.u=function(){return this[ca]||(this[ca]=++da)};function Ji(a,b,c){ji.e(a.Ta,$d,b,c);Ai(a.cb,a.Ta,a.Ya,a.bb)}f.Jb=function(a,b){Cd.c(qb(this.Ya),qb(this.bb))||Ai(this.cb,this.Ta,this.Ya,this.bb);var c=qb(this.cb).call(null,b);if(g(c))return c;c=Fi(this.name,b,this.bb,this.Ta,this.fc,this.cb,this.Ya);return g(c)?c:qb(this.Ta).call(null,this.bc)};
f.Ib=function(a,b){var c=this.name,d=de.c(this.cc,b),e=Gi(this,d);if(!g(e))throw Error([p("No method in multimethod '"),p(c),p("' for dispatch value: "),p(d)].join(""));return de.c(e,b)};f.call=function(){function a(a,b){var e=null;1<arguments.length&&(e=z(Array.prototype.slice.call(arguments,1),0));return Hi(this,e)}function b(a,b){return Hi(this,b)}a.j=1;a.g=function(a){u(a);a=w(a);return b(0,a)};a.b=b;return a}();f.apply=function(a,b){return Hi(this,b)};
function Ki(a){this.Ab=a;this.p=0;this.l=2153775104}Ki.prototype.u=function(){return ga(di.b(z([this],0)))};Ki.prototype.s=function(a,b){return $c(b,[p('#uuid "'),p(this.Ab),p('"')].join(""))};Ki.prototype.t=function(a,b){return b instanceof Ki&&this.Ab===b.Ab};var ua=new D(null,"dup","dup"),Li=new D(null,"href","href"),wi=new D(null,"descendants","descendants"),Mi=new D(null,"html","html"),Ed=new D(null,"default","default"),Ni=new D(null,"text","text"),Oi=new D(null,"dependencies","dependencies"),Pi=new D(null,"history","history"),Qi=new D(null,"background","background"),Ri=new D(null,"alt","alt"),Si=new D(null,"focus-select","focus-select"),Ti=new D(null,"scroll-to","scroll-to"),Ui=new D("tailrecursion.javelin","none","tailrecursion.javelin/none"),Vi=
new D(null,"callback","callback"),Wi=new D(null,"class","class"),Xi=new D(null,"percent","percent"),Yi=new D(null,"fade-toggle","fade-toggle"),vi=new D(null,"parents","parents"),qa=new D(null,"flush-on-newline","flush-on-newline"),Zi=new D(null,"hierarchy","hierarchy"),$i=new D(null,"style","style"),aj=new D(null,"data-background","data-background"),G=new D(null,"src","src"),bj=new D(null,"focus","focus"),cj=new D(null,"data-markdown","data-markdown"),dj=new D(null,"data-transition","data-transition"),
H=new D(null,"title","title"),ej=new D(null,"do-toggle","do-toggle"),xi=new D(null,"ancestors","ancestors"),fj=new D(null,"success","success"),gj=new D(null,"toggle","toggle"),hj=new D(null,"css","css"),ij=new D(null,"transition","transition"),jj=new D(null,"url","url"),kj=new D(null,"markdown","markdown"),va=new D(null,"print-length","print-length"),lj=new D(null,"type","type"),n=new D(null,"else","else"),sa=new D(null,"readably","readably"),mj=new D(null,"dataType","dataType"),gi=new D(null,"validator",
"validator"),ta=new D(null,"meta","meta"),nj=new D("tailrecursion.javelin","cell","tailrecursion.javelin/cell"),oj=new D("tailrecursion.priority-map","not-found","tailrecursion.priority-map/not-found"),pj=new D(null,"theme","theme"),qj=new D(null,"scrollTop","scrollTop"),rj=new D(null,"id","id"),sj=new D(null,"async","async"),tj=new D(null,"value","value"),uj=new D(null,"select","select"),vj=new D(null,"attr","attr"),wj=new D(null,"slide-toggle","slide-toggle"),xj=new D(null,"rel","rel"),yj=new D("tailrecursion.hoplon",
"default","tailrecursion.hoplon/default");var zj=function(){function a(a,d){var e=null;1<arguments.length&&(e=z(Array.prototype.slice.call(arguments,1),0));return b.call(this,0,e)}function b(a,b){throw Error(de.c(p,b));}a.j=1;a.g=function(a){u(a);a=w(a);return b(0,a)};a.b=b;return a}();Vh("([-+]?)(?:(0)|([1-9][0-9]*)|0[xX]([0-9A-Fa-f]+)|0([0-7]+)|([1-9][0-9]?)[rR]([0-9A-Za-z]+)|0[0-9]+)(N)?");Vh("([-+]?[0-9]+)/([0-9]+)");Vh("([-+]?[0-9]+(\\.[0-9]*)?([eE][-+]?[0-9]+)?)(M)?");Vh("[:]?([^0-9/].*/)?([^0-9/][^/]*)");Vh("[0-9A-Fa-f]{2}");Vh("[0-9A-Fa-f]{4}");
function Aj(a){if(Cd.c(3,B(a)))return a;if(3<B(a))return jf.d(a,0,3);if(n)for(a=new ja(a);;)if(3>a.Fa.length)a=a.append("0");else return a.toString();else return null}var Bj=function(){var a=new E(null,13,5,zg,[null,31,28,31,30,31,30,31,31,30,31,30,31],null),b=new E(null,13,5,zg,[null,31,29,31,30,31,30,31,31,30,31,30,31],null);return function(c,d){return Yd.c(g(d)?b:a,c)}}(),Th=/(\d\d\d\d)(?:-(\d\d)(?:-(\d\d)(?:[T](\d\d)(?::(\d\d)(?::(\d\d)(?:[.](\d+))?)?)?)?)?)?(?:[Z]|([-+])(\d\d):(\d\d))?/;
function Cj(a){a=parseInt(a);return wa(isNaN(a))?a:null}function Dj(a,b,c,d){a<=b&&b<=c||zj.b(null,z([[p(d),p(" Failed:  "),p(a),p("\x3c\x3d"),p(b),p("\x3c\x3d"),p(c)].join("")],0));return b}
function Ej(a){var b=Sh(a);C.d(b,0,null);var c=C.d(b,1,null),d=C.d(b,2,null),e=C.d(b,3,null),h=C.d(b,4,null),k=C.d(b,5,null),m=C.d(b,6,null),r=C.d(b,7,null),t=C.d(b,8,null),v=C.d(b,9,null),y=C.d(b,10,null);if(wa(b))return zj.b(null,z([[p("Unrecognized date/time syntax: "),p(a)].join("")],0));a=Cj(c);var b=function(){var a=Cj(d);return g(a)?a:1}(),c=function(){var a=Cj(e);return g(a)?a:1}(),I=function(){var a=Cj(h);return g(a)?a:0}(),R=function(){var a=Cj(k);return g(a)?a:0}(),X=function(){var a=Cj(m);
return g(a)?a:0}(),fa=function(){var a=Cj(Aj(r));return g(a)?a:0}(),t=(Cd.c(t,"-")?-1:1)*(60*function(){var a=Cj(v);return g(a)?a:0}()+function(){var a=Cj(y);return g(a)?a:0}());return new E(null,8,5,zg,[a,Dj(1,b,12,"timestamp month field must be in range 1..12"),Dj(1,c,Bj.c?Bj.c(b,0===(a%4+4)%4&&(0!==(a%100+100)%100||0===(a%400+400)%400)):Bj.call(null,b,0===(a%4+4)%4&&(0!==(a%100+100)%100||0===(a%400+400)%400)),"timestamp day field must be in range 1..last day in month"),Dj(0,I,23,"timestamp hour field must be in range 0..23"),
Dj(0,R,59,"timestamp minute field must be in range 0..59"),Dj(0,X,Cd.c(R,59)?60:59,"timestamp second field must be in range 0..60"),Dj(0,fa,999,"timestamp millisecond field must be in range 0..999"),t],null)}
var Fj=hi.a(new pa(null,4,["inst",function(a){var b;if("string"===typeof a)if(b=Ej(a),g(b)){a=C.d(b,0,null);var c=C.d(b,1,null),d=C.d(b,2,null),e=C.d(b,3,null),h=C.d(b,4,null),k=C.d(b,5,null),m=C.d(b,6,null);b=C.d(b,7,null);b=new Date(Date.UTC(a,c-1,d,e,h,k,m)-6E4*b)}else b=zj.b(null,z([[p("Unrecognized date/time syntax: "),p(a)].join("")],0));else b=zj.b(null,z(["Instance literal expects a string for its timestamp."],0));return b},"uuid",function(a){return"string"===typeof a?new Ki(a):zj.b(null,
z(["UUID literal expects a string as its representation."],0))},"queue",function(a){return je(a)?fg(Jg,a):zj.b(null,z(["Queue literal expects a vector for its elements."],0))},"js",function(a){if(je(a)){var b=[];a=s(a);for(var c=null,d=0,e=0;;)if(e<d){var h=c.r(null,e);b.push(h);e+=1}else if(a=s(a))c=a,ke(c)?(a=kd(c),e=ld(c),c=a,d=B(a),a=e):(a=u(c),b.push(a),a=x(c),c=null,d=0),e=0;else break;return b}if(ie(a)){b={};a=s(a);c=null;for(e=d=0;;)if(e<d){var k=c.r(null,e),h=C.d(k,0,null),k=C.d(k,1,null);
b[vf(h)]=k;e+=1}else if(a=s(a))ke(a)?(d=kd(a),a=ld(a),c=d,d=B(d)):(d=u(a),c=C.d(d,0,null),d=C.d(d,1,null),b[vf(c)]=d,a=x(a),c=null,d=0),e=0;else break;return b}return n?zj.b(null,z([[p("JS literal expects a vector or map containing "),p("only string or unqualified keyword keys")].join("")],0)):null}],null));hi.a(null);function Gj(a,b,c,d){this.M=a;this.T=b;this.i=c;this.m=d;this.p=0;this.l=2565220111}f=Gj.prototype;f.u=function(){var a=this.m;return null!=a?a:this.m=a=kf(this)};f.w=function(a,b){return Yd.c(this.T,b)};f.A=function(a,b,c){return Yd.d(this.T,b,c)};
f.qa=function(a,b,c){a=Yd.d(this.T,b,null);if(g(a)){if(Cd.c(a,c))return this;var d=Yd.c(this.M,a);return Cd.c(B(d),1)?new Gj($d.d(ae.c(this.M,a),c,Wd.c(Yd.d(this.M,c,Jh),b)),$d.d(this.T,b,c),this.i,null):new Gj($d.b(this.M,a,fe.c(Yd.c(this.M,a),b),z([c,Wd.c(Yd.d(this.M,c,Jh),b)],0)),$d.d(this.T,b,c),this.i,null)}return new Gj($d.d(this.M,c,Wd.c(Yd.d(this.M,c,Jh),b)),$d.d(this.T,b,c),this.i,null)};f.Ia=function(a,b){return qe(this.T,b)};
f.call=function(){var a=null;return a=function(a,c,d){switch(arguments.length){case 2:return this.w(null,c);case 3:return this.A(null,c,d)}throw Error("Invalid arity: "+arguments.length);}}();f.apply=function(a,b){return this.call.apply(this,[this].concat(Ca(b)))};f.a=function(a){return this.w(null,a)};f.c=function(a,b){return this.A(null,a,b)};f.s=function(a,b,c){return Wh(b,function(a){return Wh(b,bi,""," ","",c,a)},"#tailrecursion.priority-map {",", ","}",c,this)};
f.D=function(a,b){return je(b)?Sa(this,q.c(b,0),q.c(b,1)):se.d(Ja,this,b)};
f.Ma=function(){var a=this;return s(function(){return function c(a){return new xf(null,function(){for(var e=a;;){var h=s(e);if(h){var k=h,m=u(k),r=C.d(m,0,null),t=C.d(m,1,null);if(h=s(function(a,c,d,e,h,k){return function ma(m){return new xf(null,function(a,c,d){return function(){for(;;){var a=s(m);if(a){if(ke(a)){var c=kd(a),e=B(c),h=Bf(e);a:{for(var k=0;;)if(k<e){var r=q.c(c,k);h.add(new E(null,2,5,zg,[r,d],null));k+=1}else{c=!0;break a}c=void 0}return c?Ef(h.R(),ma(ld(a))):Ef(h.R(),null)}h=u(a);
return A(new E(null,2,5,zg,[h,d],null),ma(w(a)))}return null}}}(a,c,d,e,h,k),null,null)}}(e,m,r,t,k,h)(t)))return Jf.c(h,c(w(e)));e=w(e)}else return null}},null,null)}(Vc(a.M))}())};f.vb=function(a,b){return(g(b)?s:pf).call(null,this)};
f.wb=function(a,b,c){var d=g(c)?Oh.d(this.M,ef,b):Ph.d(this.M,ue,b);return s(function(){return function h(a){return new xf(null,function(){for(var b=a;;){var c=s(b);if(c){var d=c,v=u(d),y=C.d(v,0,null),I=C.d(v,1,null);if(c=s(function(a,b,c,d,h,k){return function Ha(m){return new xf(null,function(a,b,c){return function(){for(;;){var a=s(m);if(a){if(ke(a)){var b=kd(a),d=B(b),h=Bf(d);a:{for(var k=0;;)if(k<d){var r=q.c(b,k);h.add(new E(null,2,5,zg,[r,c],null));k+=1}else{b=!0;break a}b=void 0}return b?
Ef(h.R(),Ha(ld(a))):Ef(h.R(),null)}h=u(a);return A(new E(null,2,5,zg,[h,c],null),Ha(w(a)))}return null}}}(a,b,c,d,h,k),null,null)}}(b,v,y,I,d,c)(I)))return Jf.c(c,h(w(b)));b=w(b)}else return null}},null,null)}(d)}())};f.ub=function(a,b){return jb(b)};f.tb=function(){return Dd};
f.F=function(){var a=this;return s(function(){return function c(a){return new xf(null,function(){for(var e=a;;){var h=s(e);if(h){var k=h,m=u(k),r=C.d(m,0,null),t=C.d(m,1,null);if(h=s(function(a,c,d,e,h,k){return function ma(m){return new xf(null,function(a,c,d){return function(){for(;;){var a=s(m);if(a){if(ke(a)){var c=kd(a),e=B(c),h=Bf(e);a:{for(var k=0;;)if(k<e){var r=q.c(c,k);h.add(new E(null,2,5,zg,[r,d],null));k+=1}else{c=!0;break a}c=void 0}return c?Ef(h.R(),ma(ld(a))):Ef(h.R(),null)}h=u(a);
return A(new E(null,2,5,zg,[h,d],null),ma(w(a)))}return null}}}(a,c,d,e,h,k),null,null)}}(e,m,r,t,k,h)(t)))return Jf.c(h,c(w(e)));e=w(e)}else return null}},null,null)}(a.M)}())};f.J=function(){return B(this.T)};f.ra=function(){if(0===B(this.T))return null;var a=u(this.M);return new E(null,2,5,zg,[u(jb(a)),Wa(a)],null)};
f.sa=function(){if(0===B(this.T))throw Error("Can't pop empty priority map");var a=u(this.M),b=jb(a),c=u(b),a=Wa(a);return Cd.c(B(b),1)?new Gj(ae.c(this.M,a),ae.c(this.T,c),this.i,null):new Gj($d.d(this.M,a,fe.c(b,c)),ae.c(this.T,c),this.i,null)};f.t=function(a,b){return hc(this.T,b)};f.G=function(a,b){return new Gj(this.M,this.T,b,this.m)};f.C=function(){return this.i};f.I=function(){return Vd(Hj,this.i)};
f.Ka=function(a,b){var c=this.T.c?this.T.c(b,oj):this.T.call(null,b,oj);if(Cd.c(c,oj))return this;var d=this.M.a?this.M.a(c):this.M.call(null,c);return Cd.c(B(d),1)?new Gj(ae.c(this.M,c),ae.c(this.T,b),this.i,null):new Gj($d.d(this.M,c,fe.c(d,b)),ae.c(this.T,b),this.i,null)};var Hj=new Gj(Eh(),F,F,null),Ij=""+p("tailrecursion.priority-map");Yd.c(qb(Fj),Ij);ji.e(Fj,$d,Ij,function(a){return ie(a)?fg(Hj,a):zj.b(null,z(["Priority map literal expects a map for its elements."],0))});
var Jj=function(){function a(a){var d=null;0<arguments.length&&(d=z(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){a=s(a);for(var b=Hj;;)if(a){var e=x(x(a)),b=$d.d(b,u(a),u(x(a)));a=e}else return b}a.j=0;a.g=function(a){a=s(a);return b(a)};a.b=b;return a}();function Kj(a,b){var c=Qf;return function e(b){var k=null==b?null:mb(b);return g(k)?new xf(null,function(){return A(k,e(fg(null==b?null:nb(b),g(c.a?c.a(k):c.call(null,k))?a.a?a.a(k):a.call(null,k):null)))},null,null):null}(Wd.c(Jg,b))}var Lj=hi.a(0);function Mj(){return ji.c(Lj,Ld)}function Nj(a){return g(Oj.a?Oj.a(a):Oj.call(null,a))?qb(a):a}
function Pj(a){for(var b=Jj.b(z([a,a.ma],0));;)if(s(b)){a=lf(null==b?null:mb(b));var c=a.Rb.call(null),d=Nf.c(c,a.prev),e=function(){return function(a,b){return $d.d(a,b,b.ma)}}(b,a,c,d),b=null==b?null:nb(b),h=a.ka;d&&(a.prev=c);b=d?se.d(e,b,h):b}else return null}
function Qj(a){var b=a.Wa;a.Wa=yg;a.oa=F;for(var b=s(eg(Oj,b)),c=null,d=0,e=0;;)if(e<d){var h=c.r(null,e);h.ka=fe.c(h.ka,a);e+=1}else if(b=s(b))c=b,ke(c)?(b=kd(c),d=ld(c),c=b,h=B(b),b=d,d=h):(h=u(c),h.ka=fe.c(h.ka,a),b=x(c),c=null,d=0),e=0;else break}
var Rj=function(){function a(a,d){var e=null;1<arguments.length&&(e=z(Array.prototype.slice.call(arguments,1),0));return b.call(this,a,e)}function b(a,b){var e=C.d(b,0,null),h=C.d(b,1,null);Qj(a);a.Wa=g(e)?Wd.c(Ag(h),e):Ag(h);for(var h=s(eg(Oj,a.Wa)),k=null,m=0,r=0;;)if(r<m){var t=k.r(null,r);t.ka=Wd.c(t.ka,a);if(t.ma>a.ma)for(var t=s(Kj(function(){return function(a){return a.ka}}(h,k,m,r,t),t)),v=null,y=0,I=0;;)if(I<y)v.r(null,I).ma=Mj(),I+=1;else if(t=s(t))v=t,ke(v)?(t=kd(v),I=ld(v),v=t,y=B(t),
t=I):(u(v).ma=Mj(),t=x(v),v=null,y=0),I=0;else break;r+=1}else if(v=s(h)){t=v;if(ke(t))h=kd(t),r=ld(t),k=h,m=B(h),h=r;else{y=u(t);y.ka=Wd.c(y.ka,a);if(y.ma>a.ma)for(h=s(Kj(function(){return function(a){return a.ka}}(h,k,m,r,y,t,v),y)),k=null,r=m=0;;)if(r<m)k.r(null,r).ma=Mj(),r+=1;else if(h=s(h))k=h,ke(k)?(h=kd(k),r=ld(k),k=h,m=B(h),h=r):(u(k).ma=Mj(),h=x(k),k=null,m=0),r=0;else break;h=x(t);k=null;m=0}r=0}else break;h=function(b){return function(){for(var d=a.state,e=b(a.Wa),h=s(ae.c(a.oa,nj)),k=
null,m=0,r=0;;)if(r<m){var t=k.r(null,r),v=C.d(t,0,null),t=C.d(t,1,null);t.e?t.e(v,a,d,e):t.call(null,v,a,d,e);r+=1}else if(h=s(h))ke(h)?(m=kd(h),h=ld(h),k=m,m=B(m)):(m=u(h),k=C.d(m,0,null),m=C.d(m,1,null),m.e?m.e(k,a,d,e):m.call(null,k,a,d,e),h=x(h),k=null,m=0),r=0;else break;return a.state=e}}(function(a){return de.c(Nj(null==a?null:mb(a)),Vf.c(Nj,null==a?null:nb(a)))});dd(a,nj,g(e)?function(){throw Error("formula cell can't be updated via swap! or reset!");}:function(a,b){return Pj(b)});a.dc=g(e)?
!1:!0;a.Rb=g(e)?h:function(){return qb(a)};Pj(a);return a}a.j=1;a.g=function(a){var d=u(a);a=w(a);return b(d,a)};a.b=b;return a}();function Sj(a,b,c,d,e,h,k,m,r){this.i=a;this.state=b;this.ma=c;this.prev=d;this.Wa=e;this.ka=h;this.Rb=k;this.oa=m;this.dc=r;this.p=2;this.l=2147647488}f=Sj.prototype;
f.yb=function(a,b,c){a=s(this.oa);for(var d=null,e=0,h=0;;)if(h<e){var k=d.r(null,h),m=C.d(k,0,null),k=C.d(k,1,null);k.e?k.e(m,this,b,c):k.call(null,m,this,b,c);h+=1}else if(a=s(a))ke(a)?(d=kd(a),a=ld(a),m=d,e=B(d),d=m):(d=u(a),m=C.d(d,0,null),k=C.d(d,1,null),k.e?k.e(m,this,b,c):k.call(null,m,this,b,c),a=x(a),d=null,e=0),h=0;else return null};f.xb=function(a,b,c){return this.oa=$d.d(this.oa,b,c)};f.Gb=function(){return this.state};f.C=function(){return this.i};
f.s=function(a,b){return Xh.b(b,z(["#\x3cCell: ",di.b(z([this.state],0)),"\x3e"],0))};function Tj(a){return function(){function b(a){var b=null;0<arguments.length&&(b=z(Array.prototype.slice.call(arguments,0),0));return c.call(this,b)}function c(b){return Rj.b(Uj.a?Uj.a(Ui):Uj.call(null,Ui),z([a,b],0))}b.j=0;b.g=function(a){a=s(a);return c(a)};b.b=c;return b}()}function Uj(a){return Rj(new Sj(F,a,Mj(),a,yg,Jh,null,F,null))}function Oj(a){return Cd.c(ya(a),Sj)?a:null}
function Vj(a,b){var c=Tj(s).call(null,b),d=function(){return function(a,b){try{return C.c(a,b)}catch(c){if(c instanceof Error)return null;if(n)throw c;return null}}}(c);return Vf.c(function(b){return Tj(Rf.c(a,d)).call(null,c,b)},Rh.c(0,B(qb(c))))};var Wj=wa(window.Node),Xj=wa(Wj)?function(a){return a instanceof Node}:function(a){try{return a.nodeType}catch(b){if(b instanceof Error)return null;if(n)throw b;return null}},Yj=wa(Wj)?je:function(a){try{return je(a)}catch(b){if(b instanceof Error)return null;if(n)throw b;return null}},Zj=wa(Wj)?oe:function(a){try{return oe(a)}catch(b){if(b instanceof Error)return null;if(n)throw b;return null}},la=function(a){var b=console;return g(g(b)?console.log:b)?console.log(a):null},ak=function(){function a(a,
b,c){try{return C.d(a,b,c)}catch(k){if(k instanceof Error)return c;if(n)throw k;return null}}function b(a,b){return c.d(a,b,null)}var c=null,c=function(c,e,h){switch(arguments.length){case 2:return b.call(this,c,e);case 3:return a.call(this,c,e,h)}throw Error("Invalid arity: "+arguments.length);};c.c=b;c.d=a;return c}(),bk=function(){function a(a,b){return window.setTimeout(a,b)}function b(a){return c.c(a,0)}var c=null,c=function(c,e){switch(arguments.length){case 1:return b.call(this,c);case 2:return a.call(this,
c,e)}throw Error("Invalid arity: "+arguments.length);};c.a=b;c.c=a;return c}(),dk=function ck(b){return cg.c(function(b){var d;d=Zj.a?Zj.a(b):Zj.call(null,b);d=g(d)?d:Yj.a?Yj.a(b):Yj.call(null,b);return g(d)?ck(b):new E(null,1,5,zg,[b],null)},b)};function ek(a,b){return bk.a(function d(){return g(document.documentElement.contains(a))?b.q?b.q():b.call(null):bk.c(d,20)})}
function fk(a){var b=C.d(a,0,null),c=hf(a),d=Rf.c(tf,u),e=function(a){return function(b){return Vf.c(Ag,Mh(a,gg.c(2,b)))}}(d),d=function(a){return function(b){return cg.c(Qf,Zf(a,gg.e(2,2,yg,b)))}}(d,e);return ie(b)?new E(null,2,5,zg,[b,c],null):b instanceof D?new E(null,2,5,zg,[fg(F,e(a)),d(a)],null):n?new E(null,2,5,zg,[F,a],null):null}
function gk(a,b){function c(a,b){var c;c=vf(b);var d;a:{for(d=c;;){var e=x(d);if(null!=e)d=e;else{d=u(d);break a}}d=void 0}c=Cd.c("\x3d",d)?c.slice(0,-1):c;d=c.substr(0,3);return wf.c(uf(b),Cd.c(a,d)?c.substr(3):c)}for(var d=Sf.c(c,"do-"),e=Sf.c(c,"on-"),h=hi.a(F),k=hi.a(F),m=s(b),r=null,t=0,v=0;;)if(v<t){var y=r.r(null,v),I=C.d(y,0,null),y=C.d(y,1,null);g(Oj(y))?ji.e(h,$d,d.a?d.a(I):d.call(null,I),y):be(y)?ji.e(k,$d,e.a?e.a(I):e.call(null,I),y):n&&(hk.d?hk.d(a,d.a?d.a(I):d.call(null,I),y):hk.call(null,
a,d.a?d.a(I):d.call(null,I),y));v+=1}else if(m=s(m))ke(m)?(t=kd(m),m=ld(m),r=t,t=B(t)):(t=u(m),r=C.d(t,0,null),t=C.d(t,1,null),g(Oj(t))?ji.e(h,$d,d.a?d.a(r):d.call(null,r),t):be(t)?ji.e(k,$d,e.a?e.a(r):e.call(null,r),t):n&&(hk.d?hk.d(a,d.a?d.a(r):d.call(null,r),t):hk.call(null,a,d.a?d.a(r):d.call(null,r),t)),m=x(m),r=null,t=0),v=0;else break;s(qb(h))&&setTimeout(function(){for(var b=s(qb(h)),c=null,d=0,e=0;;)if(e<d){var k=c.r(null,e),m=C.d(k,0,null),r=C.d(k,1,null);hk.d?hk.d(a,m,qb(r)):hk.call(null,
a,m,qb(r));mi(r,oi.q(),function(b,c,d,e,h,k){return function(b,c,d,e){return hk.d?hk.d(a,k,e):hk.call(null,a,k,e)}}(b,c,d,e,k,m,r));e+=1}else{var t=s(b);if(t){k=t;if(ke(k))b=kd(k),e=ld(k),c=b,d=B(b),b=e;else{var v=u(k),m=C.d(v,0,null),r=C.d(v,1,null);hk.d?hk.d(a,m,qb(r)):hk.call(null,a,m,qb(r));mi(r,oi.q(),function(b,c,d,e,h,k){return function(b,c,d,e){return hk.d?hk.d(a,k,e):hk.call(null,a,k,e)}}(b,c,d,e,v,m,r,k,t));b=x(k);c=null;d=0}e=0}else return null}},0);s(qb(k))&&setTimeout(function(){for(var b=
s(qb(k)),c=null,d=0,e=0;;)if(e<d){var h=c.r(null,e),m=C.d(h,0,null),h=C.d(h,1,null);ik.d?ik.d(a,m,h):ik.call(null,a,m,h);e+=1}else if(b=s(b))ke(b)?(c=kd(b),b=ld(b),m=c,d=B(c),c=m):(c=u(b),m=C.d(c,0,null),h=C.d(c,1,null),ik.d?ik.d(a,m,h):ik.call(null,a,m,h),b=x(b),c=null,d=0),e=0;else return null},0);return a}var jk=wa(Wj)?function(a,b){return a.appendChild(b)}:function(a,b){try{return a.appendChild(b)}catch(c){if(c instanceof Error)return null;if(n)throw c;return null}};
function kk(a,b){function c(b){var c=jQuery(a);c.empty();c.append(b);return c}var d=C.d(b,0,null);hf(b);if(g(Oj(d)))c(qb(d)),mi(d,oi.q(),function(a,b,d,e){return c(e)});else for(var d=s(Uf(function(a){return"string"===typeof a?lk.a?lk.a(a):lk.call(null,a):g(Xj.a?Xj.a(a):Xj.call(null,a))?a:null},dk(b))),e=null,h=0,k=0;;)if(k<h){var m=e.r(null,k);jk.c?jk.c(a,m):jk.call(null,a,m);k+=1}else if(d=s(d))e=d,ke(e)?(d=kd(e),k=ld(e),e=d,h=B(d),d=k):(d=u(e),jk.c?jk.c(a,d):jk.call(null,a,d),d=x(e),e=null,h=0),
k=0;else break}f=Element.prototype;f.call=function(){function a(a,d){var e=null;1<arguments.length&&(e=z(Array.prototype.slice.call(arguments,1),0));return b.call(this,0,e)}function b(a,b){var e=fk(b),h=C.d(e,0,null),e=C.d(e,1,null);g(this.zb)?this.zb(h,e):(gk(this,h),kk(this,e));return this}a.j=1;a.g=function(a){u(a);a=w(a);return b(0,a)};a.b=b;return a}();f.apply=function(a,b){return this.call.apply(this,[this].concat(Ca(b)))};
f.c=function(){function a(a){var d=null;0<arguments.length&&(d=z(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){var b=fk(a);a=C.d(b,0,null);b=C.d(b,1,null);g(this.zb)?this.zb(a,b):(gk(this,a),kk(this,b));return this}a.j=0;a.g=function(a){a=s(a);return b(a)};a.b=b;return a}();f.K=!0;f.s=function(a,b){return Xh.b(b,z(["#\x3cElement: ",this.tagName,"\x3e"],0))};
function mk(a){return function(){function b(a){var b=null;0<arguments.length&&(b=z(Array.prototype.slice.call(arguments,0),0));return c.call(this,b)}function c(b){var c=document.getElementsByTagName(a)[0],h=document.createElement(a);g(c)&&c.parentNode.replaceChild(h,c);return de.c(h,b)}b.j=0;b.g=function(a){a=s(a);return c(a)};b.b=c;return b}()}
function nk(a){return function(){function b(a){var b=null;0<arguments.length&&(b=z(Array.prototype.slice.call(arguments,0),0));return c.call(this,b)}function c(b){return de.c(document.createElement(a),b)}b.j=0;b.g=function(a){a=s(a);return c(a)};b.b=c;return b}()}
var ok=mk("body"),pk=mk("head"),qk=mk("html"),J=nk("a"),K=nk("b"),L=nk("code"),rk=nk("div"),sk=nk("em"),tk=nk("h1"),uk=nk("h2"),M=nk("h3"),N=nk("img"),O=nk("li"),vk=nk("link"),wk=nk("ol"),P=nk("p"),xk=nk("pre"),yk=nk("script"),zk=nk("section"),Ak=nk("span"),Bk=nk("table"),Q=nk("td"),S=nk("th"),T=nk("tr"),U=nk("ul");function lk(a){return document.createTextNode(a)}var Ck=hi.a(!1),Dk=hi.a(yg);function Ek(a){g(qb(Ck))?a.q?a.q():a.call(null):ji.d(Dk,Wd,a)}
function Fk(){return setTimeout(function(){jQuery("body").on("submit",function(a){return a.preventDefault()});ii(Ck,!0);for(var a=s(qb(Dk)),b=null,c=0,d=0;;)if(d<c){var e=b.r(null,d);e.q?e.q():e.call(null);d+=1}else if(a=s(a))b=a,ke(b)?(a=kd(b),c=ld(b),b=a,e=B(a),a=c,c=e):(e=u(b),e.q?e.q():e.call(null),a=x(b),b=null,c=0),d=0;else return null},0)}
var Gk=function(){function a(a,b){return a.val(""+p(b))}function b(a){return a.val()}var c=null,c=function(c,e){switch(arguments.length){case 1:return b.call(this,c);case 2:return a.call(this,c,e)}throw Error("Invalid arity: "+arguments.length);};c.a=b;c.c=a;return c}(),Hk=function(){function a(a,b){return a.prop("checked",pe(b))}function b(a){return a.is(":checked")}var c=null,c=function(c,e){switch(arguments.length){case 1:return b.call(this,c);case 2:return a.call(this,c,e)}throw Error("Invalid arity: "+
arguments.length);};c.a=b;c.c=a;return c}(),hk=function(){var a=hi.a(F),b=hi.a(F),c=hi.a(F),d=hi.a(F),e=Yd.d(new pa(null,1,[Ed,yj],null),Zi,li());return new Ii("do!",function(a,b){return b},yj,e,a,b,c,d)}();Ji(hk,yj,function(a,b,c){return hk.d?hk.d(a,vj,new Sg([b,c])):hk.call(null,a,vj,new Sg([b,c]))});
Ji(hk,tj,function(){function a(a,d,e){var h=null;2<arguments.length&&(h=z(Array.prototype.slice.call(arguments,2),0));return b.call(this,a,0,h)}function b(a,b,e){a=jQuery(a);return de.d(Cd.c("checkbox",a.attr("type"))?Hk:Gk,a,e)}a.j=2;a.g=function(a){var d=u(a);a=x(a);u(a);a=w(a);return b(d,0,a)};a.b=b;return a}());
Ji(hk,vj,function(a,b,c){a=jQuery(a);c=s(c);b=null;for(var d=0,e=0;;)if(e<d){var h=b.r(null,e),k=C.d(h,0,null),h=C.d(h,1,null),k=vf(k);Cd.c(!1,h)?a.removeAttr(k):a.attr(k,Cd.c(!0,h)?k:h);e+=1}else if(c=s(c))ke(c)?(k=kd(c),c=ld(c),b=k,d=k=B(k)):(b=u(c),k=C.d(b,0,null),h=C.d(b,1,null),b=vf(k),Cd.c(!1,h)?a.removeAttr(b):a.attr(b,Cd.c(!0,h)?b:h),c=x(c),b=null,d=0),e=0;else return null});
Ji(hk,Wi,function(a,b,c){a=jQuery(a);b=function(){return function(a){var b;a:{var c=$f.a(!0);b=ed(F);a=s(a);for(c=s(c);;)if(a&&c)b=Lf.d(b,u(a),u(c)),a=x(a),c=x(c);else{b=gd(b);break a}b=void 0}return b}}(a);c=ie(c)?c:b("string"===typeof c?c.split(/\s+/):s(c));c=s(c);for(var d=null,e=0,h=0;;)if(h<e){var k=d.r(null,h);b=C.d(k,0,null);k=C.d(k,1,null);a.toggleClass(vf(b),pe(k));h+=1}else if(c=s(c))ke(c)?(d=kd(c),c=ld(c),b=d,e=B(d),d=b):(d=u(c),b=C.d(d,0,null),k=C.d(d,1,null),a.toggleClass(vf(b),pe(k)),
c=x(c),d=null,e=0),h=0;else return null});Ji(hk,hj,function(a,b,c){a=jQuery(a);c=s(c);for(var d=null,e=0,h=0;;)if(h<e){var k=d.r(null,h);b=C.d(k,0,null);k=C.d(k,1,null);a.css(vf(b),""+p(k));h+=1}else if(c=s(c))ke(c)?(d=kd(c),c=ld(c),b=d,e=B(d),d=b):(d=u(c),b=C.d(d,0,null),k=C.d(d,1,null),a.css(vf(b),""+p(k)),c=x(c),d=null,e=0),h=0;else return null});Ji(hk,gj,function(a,b,c){return jQuery(a).toggle(pe(c))});Ji(hk,wj,function(a,b,c){return g(c)?jQuery(a).hide().slideDown("fast"):jQuery(a).slideUp("fast")});
Ji(hk,Yi,function(a,b,c){return g(c)?jQuery(a).hide().fadeIn("fast"):jQuery(a).fadeOut("fast")});Ji(hk,bj,function(a,b,c){return setTimeout(function(){return g(c)?jQuery(a).focus():jQuery(a).focusout()},0)});Ji(hk,uj,function(a){return jQuery(a).select()});Ji(hk,Si,function(a,b,c){return g(c)?(hk.d?hk.d(a,bj,c):hk.call(null,a,bj,c),hk.d?hk.d(a,uj,c):hk.call(null,a,uj,c)):null});Ji(hk,Ni,function(a,b,c){return jQuery(a).text(""+p(c))});Ji(hk,Mi,function(a,b,c){return jQuery(a).html(c)});
Ji(hk,Ti,function(a,b,c){return g(c)?(b=jQuery("body"),a=jQuery(a),b.animate(si(new pa(null,1,[qj,a.offset().top],null)))):null});var ik=function(){var a=hi.a(F),b=hi.a(F),c=hi.a(F),d=hi.a(F),e=Yd.d(new pa(null,1,[Ed,yj],null),Zi,li());return new Ii("on!",function(a,b){return b},yj,e,a,b,c,d)}();Ji(ik,yj,function(a,b,c){return ek(a,function(){return jQuery(a).on(vf(b),c)})});
function Ik(a,b){var c=Uj(0),d=Tj(function(){return function(a,b){return b.a?b.a(a):b.call(null,a)}}(c)).call(null,a,s),e=Tj(function(){return function(a,b){return a.a?a.a(b):a.call(null,b)}}(c,d)).call(null,B,d),h=function(a,b,c){return function(d){return Tj(function(){return function(a,b){return b<a}}(a,b,c)).call(null,c,d)}}(c,d,e),k=function(a,b,c,d){return function(e){return Tj(function(){return function(a,b,c){return a.c?a.c(c,b):a.call(null,c,b)}}(a,b,c,d)).call(null,ak,e,b)}}(c,d,e,h),m=Ak.q?
Ak.q():Ak.call(null);ek(m,function(){var a=m.parentNode;a.removeChild(m);return Tj(function(a,b,c,d,e,h,k,m,r,xa){if(g(k<e)){k=s(m.c?m.c(k,e):m.call(null,k,e));m=null;for(var ra=0,Ha=0;;)if(g(Ha<ra)){var Aa=m.r(null,Ha),Aa=(c.a?c.a(d.a?d.a(Aa):d.call(null,Aa)):c.call(null,d.a?d.a(Aa):d.call(null,Aa))).call(null,ej,h.a?h.a(Aa):h.call(null,Aa));wa(xa)?b.appendChild(Aa):b.insertBefore(Aa,b.firstChild);Ha+=1}else if(k=s(k))ke(k)?(ra=kd(k),k=ld(k),m=ra,ra=B(ra)):(m=u(k),m=(c.a?c.a(d.a?d.a(m):d.call(null,
m)):c.call(null,d.a?d.a(m):d.call(null,m))).call(null,ej,h.a?h.a(m):h.call(null,m)),wa(xa)?b.appendChild(m):b.insertBefore(m,b.firstChild),k=x(k),m=null,ra=0),Ha=0;else break;return r.c?r.c(a,e):r.call(null,a,e)}return null}).call(null,Uj(c),a,b,k,e,h,c,Rh,ii,null)});return m};function Jk(a){return Cd.c(B(a),1)&&!Cd.c(u(a).nodeType,1)};var Kk=function(){function a(a){var d=null;0<arguments.length&&(d=z(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){var b=fk(a);a=C.d(b,0,null);b=C.d(b,1,null);return zk.c?zk.c(Gh.b(z([a,new pa(null,1,[cj,""],null)],0)),yk.d?yk.d(lj,"text/template",b):yk.call(null,lj,"text/template",b)):zk.call(null,Gh.b(z([a,new pa(null,1,[cj,""],null)],0)),yk.d?yk.d(lj,"text/template",b):yk.call(null,lj,"text/template",b))}a.j=0;a.g=function(a){a=s(a);return b(a)};a.b=b;return a}(),
Lk=function(){function a(a){var d=null;0<arguments.length&&(d=z(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){a=fk(a);C.d(a,0,null);a=C.d(a,1,null);return g(Jk.a?Jk.a(a):Jk.call(null,a))?gk(tk.a?tk.a(u(a)):tk.call(null,u(a)),new pa(null,1,[Wi,"slide-title intro"],null)):a}a.j=0;a.g=function(a){a=s(a);return b(a)};a.b=b;return a}(),Mk=function(){function a(a){var d=null;0<arguments.length&&(d=z(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){a=
fk(a);C.d(a,0,null);a=C.d(a,1,null);return g(Jk.a?Jk.a(a):Jk.call(null,a))?gk(uk.a?uk.a(u(a)):uk.call(null,u(a)),new pa(null,1,[Wi,"slide-title chapter"],null)):a}a.j=0;a.g=function(a){a=s(a);return b(a)};a.b=b;return a}(),Nk=function(){function a(a){var d=null;0<arguments.length&&(d=z(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){a=fk(a);C.d(a,0,null);a=C.d(a,1,null);return g(Jk.a?Jk.a(a):Jk.call(null,a))?gk(M.a?M.a(u(a)):M.call(null,u(a)),new pa(null,1,[Wi,"slide-title slide"],
null)):a}a.j=0;a.g=function(a){a=s(a);return b(a)};a.b=b;return a}(),V=function(){function a(a){var d=null;0<arguments.length&&(d=z(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){var b=fk(a);a=C.d(b,0,null);var e=oe(a)?de.c(Dh,a):a,h=Yd.c(e,ij),k=Yd.c(e,Qi),m=Yd.c(e,H);a=Yd.c(e,kj);b=C.d(b,1,null);e=ae.b(e,kj,z([H,Qi,ij],0));k=g(k)?$d.d(e,aj,k):e;h=g(h)?$d.d(k,dj,h):k;m=g(m)?Jf.c(new E(null,1,5,zg,[Nk.b(z([m],0))],null),b):b;return g(a)?Kk.b(z([h,m],0)):zk.c?zk.c(h,
m):zk.call(null,h,m)}a.j=0;a.g=function(a){a=s(a);return b(a)};a.b=b;return a}(),W=function(){function a(a){var d=null;0<arguments.length&&(d=z(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){a=fk(a);var b=C.d(a,0,null),b=oe(b)?de.c(Dh,b):b,b=Yd.c(b,H);a=C.d(a,1,null);return null==b||wa(s(b))?V.b(z([F,a],0)):V.b(z([F,Jf.c(new E(null,1,5,zg,[V.b(z([Mk.b(z([b],0))],0))],null),a)],0))}a.j=0;a.g=function(a){a=s(a);return b(a)};a.b=b;return a}(),Ok=function(){function a(a){var d=
null;0<arguments.length&&(d=z(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){a=fk(a);var b=C.d(a,0,null),b=oe(b)?de.c(Dh,b):b,b=Yd.c(b,H);a=C.d(a,1,null);return null==b||wa(s(b))?V.b(z([F,a],0)):V.b(z([F,Jf.c(new E(null,1,5,zg,[Lk.b(z([b],0))],null),a)],0))}a.j=0;a.g=function(a){a=s(a);return b(a)};a.b=b;return a}(),Pk=function(){function a(a){var d=null;0<arguments.length&&(d=z(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){a=fk(a);
var b=C.d(a,0,null),b=oe(b)?de.c(Dh,b):b,e=Yd.d(b,pj,"default");a=C.d(a,1,null);Ek(function(){return Reveal.vc(si(new pa(null,2,[Pi,!0,Oi,new E(null,4,5,zg,[new pa(null,1,[G,"reveal.js/plugin/markdown/marked.js"],null),new pa(null,1,[G,"reveal.js/plugin/markdown/markdown.js"],null),new pa(null,3,[G,"reveal.js/plugin/highlight/highlight.js",sj,!0,Vi,function(){return hljs.uc()}],null),new pa(null,2,[G,"reveal.js/plugin/notes/notes.js",sj,!0],null)],null)],null)))});return rk.k?rk.k(Gh.b(z([ae.c(b,
pj),new pa(null,1,[Wi,"reveal"],null)],0)),vk.e?vk.e(xj,"stylesheet",Li,"reveal.js/css/reveal.css"):vk.call(null,xj,"stylesheet",Li,"reveal.js/css/reveal.css"),vk.n?vk.n(xj,"stylesheet",Li,g(Uh(/\.css$/,e))?e:[p("reveal.js/css/theme/"),p(e),p(".css")].join(""),rj,"theme"):vk.call(null,xj,"stylesheet",Li,g(Uh(/\.css$/,e))?e:[p("reveal.js/css/theme/"),p(e),p(".css")].join(""),rj,"theme"),vk.e?vk.e(xj,"stylesheet",Li,"reveal.js/plugin/highlight/github.min.css"):vk.call(null,xj,"stylesheet",Li,"reveal.js/plugin/highlight/github.min.css"),
rk.d?rk.d(Wi,"slides",a):rk.call(null,Wi,"slides",a)):rk.call(null,Gh.b(z([ae.c(b,pj),new pa(null,1,[Wi,"reveal"],null)],0)),vk.e?vk.e(xj,"stylesheet",Li,"reveal.js/css/reveal.css"):vk.call(null,xj,"stylesheet",Li,"reveal.js/css/reveal.css"),vk.n?vk.n(xj,"stylesheet",Li,g(Uh(/\.css$/,e))?e:[p("reveal.js/css/theme/"),p(e),p(".css")].join(""),rj,"theme"):vk.call(null,xj,"stylesheet",Li,g(Uh(/\.css$/,e))?e:[p("reveal.js/css/theme/"),p(e),p(".css")].join(""),rj,"theme"),vk.e?vk.e(xj,"stylesheet",Li,"reveal.js/plugin/highlight/github.min.css"):
vk.call(null,xj,"stylesheet",Li,"reveal.js/plugin/highlight/github.min.css"),rk.d?rk.d(Wi,"slides",a):rk.call(null,Wi,"slides",a))}a.j=0;a.g=function(a){a=s(a);return b(a)};a.b=b;return a}(),Qk=rk,Qk=function(){function a(a){var d=null;0<arguments.length&&(d=z(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){var b=fk(a);a=C.d(b,0,null);b=C.d(b,1,null);return rk.c?rk.c($d.d(a,$i,"text-align: left"),b):rk.call(null,$d.d(a,$i,"text-align: left"),b)}a.j=0;a.g=function(a){a=
s(a);return b(a)};a.b=b;return a}(),Rk=function(){function a(a){var d=null;0<arguments.length&&(d=z(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){return U.a?U.a(Ik(a,function(a){a=Vj(Qf,Tj(function(a){return new E(null,1,5,zg,[a],null)}).call(null,a));a=C.d(a,0,null);return O.a?O.a(qb(a)):O.call(null,qb(a))})):U.call(null,Ik(a,function(a){a=Vj(Qf,Tj(function(a){return new E(null,1,5,zg,[a],null)}).call(null,a));a=C.d(a,0,null);return O.a?O.a(qb(a)):O.call(null,qb(a))}))}
a.j=0;a.g=function(a){a=s(a);return b(a)};a.b=b;return a}(),Sk=function(){function a(a){var d=null;0<arguments.length&&(d=z(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){var b=fk(a);a=C.d(b,0,null);b=C.d(b,1,null);return xk.a?xk.a(L.c?L.c(a,b):L.call(null,a,b)):xk.call(null,L.c?L.c(a,b):L.call(null,a,b))}a.j=0;a.g=function(a){a=s(a);return b(a)};a.b=b;return a}(),Tk=function(){function a(a){var d=null;0<arguments.length&&(d=z(Array.prototype.slice.call(arguments,
0),0));return b.call(this,d)}function b(a){var b=fk(a);a=C.d(b,0,null);var e=oe(a)?de.c(Dh,a):a;a=Yd.c(e,Xi);b=C.d(b,1,null);e=ae.c(e,Xi);a=g(a)?$d.d(e,$i,[p("float: left; width: "),p(a),p("%;")].join("")):$d.d(e,$i,""+p("float: left;"));return rk.c?rk.c(a,b):rk.call(null,a,b)}a.j=0;a.g=function(a){a=s(a);return b(a)};a.b=b;return a}();ea("tailrecursion.hoplon.app_pages._training_DOT_html.hoploninit",function(){qk.c?qk.c(pk.c?pk.c(F,yg):pk.call(null,F,yg),ok.c?ok.c(F,function(){var a=P.a?P.a("Durham, NC"):P.call(null,"Durham, NC"),b=P.a?P.a("March 18, 2014"):P.call(null,"March 18, 2014"),a=Ok.b(z([H,"ClojureBridge Teacher Training",a,b],0)),b=Rk.b(z(["What is the goal of the curriculum?","Who is the curriculum aimed at?","What is in the curriculum?","What is the Global Growth app?","What do I need to do before April 4?"],0)),b=
V.b(z([H,"Agenda",b],0)),c=P.a?P.a("To leave students with enough knowledge that they could go on to learn Clojure on their own."):P.call(null,"To leave students with enough knowledge that they could go on to learn Clojure on their own."),c=V.b(z([H,"Goal",c],0)),d=Rk.b(z(["Smart","Motivated","No development experience"],0)),d=V.b(z([H,"Audience assumptions",d],0)),e=O.a?O.a("Numbers, strings, booleans"):O.call(null,"Numbers, strings, booleans"),h=O.a?O.a("Vectors and maps"):O.call(null,"Vectors and maps"),
k=O.a?O.a("Functions"):O.call(null,"Functions"),m=L.a?L.a("if"):L.call(null,"if"),m=O.c?O.c(m," and boolean logic"):O.call(null,m," and boolean logic"),r=O.a?O.a("Setting up a Clojure project"):O.call(null,"Setting up a Clojure project"),t=O.a?O.a("Web development basics with Ring"):O.call(null,"Web development basics with Ring"),v=O.a?O.a("Deploying to Heroku"):O.call(null,"Deploying to Heroku"),e=U.B?U.B(e,h,k,m,r,t,v):U.call(null,e,h,k,m,r,t,v),e=V.b(z([H,"Curriculum contents",e],0)),h=K.a?K.a("YUP"):
K.call(null,"YUP"),h=P.a?P.a(h):P.call(null,h),h=V.b(z([H,"Is this ambitious?",h],0)),k=Qk.b(z(["A web application that uses the World Bank API to show lists of countries by economic/development factor."],0)),m=Qk.b(z(["This application will be 80% baked, with 20% for students to fill in."],0)),k=V.b(z([H,"The Global Growth app",k,m],0)),m=uk.a?uk.a("Global Growth demo"):uk.call(null,"Global Growth demo"),m=V.b(z([m],0)),r=O.a?O.a("Read the curriculum"):O.call(null,"Read the curriculum"),t=O.a?O.a("Set up Light Table and get familiar with it"):
O.call(null,"Set up Light Table and get familiar with it"),v=O.a?O.a("Try downloading and filling in the Global Growth app"):O.call(null,"Try downloading and filling in the Global Growth app"),y=O.a?O.a("Try deploying the app to Heroku"):O.call(null,"Try deploying the app to Heroku"),r=U.e?U.e(r,t,v,y):U.call(null,r,t,v,y),r=V.b(z([H,"How to prepare",r],0));return Pk.b(z([pj,"mozilla-theme.css",a,b,c,d,e,h,k,m,r],0))}()):ok.call(null,F,function(){var a=P.a?P.a("Durham, NC"):P.call(null,"Durham, NC"),
b=P.a?P.a("March 18, 2014"):P.call(null,"March 18, 2014"),a=Ok.b(z([H,"ClojureBridge Teacher Training",a,b],0)),b=Rk.b(z(["What is the goal of the curriculum?","Who is the curriculum aimed at?","What is in the curriculum?","What is the Global Growth app?","What do I need to do before April 4?"],0)),b=V.b(z([H,"Agenda",b],0)),c=P.a?P.a("To leave students with enough knowledge that they could go on to learn Clojure on their own."):P.call(null,"To leave students with enough knowledge that they could go on to learn Clojure on their own."),
c=V.b(z([H,"Goal",c],0)),d=Rk.b(z(["Smart","Motivated","No development experience"],0)),d=V.b(z([H,"Audience assumptions",d],0)),e=O.a?O.a("Numbers, strings, booleans"):O.call(null,"Numbers, strings, booleans"),h=O.a?O.a("Vectors and maps"):O.call(null,"Vectors and maps"),k=O.a?O.a("Functions"):O.call(null,"Functions"),m=L.a?L.a("if"):L.call(null,"if"),m=O.c?O.c(m," and boolean logic"):O.call(null,m," and boolean logic"),r=O.a?O.a("Setting up a Clojure project"):O.call(null,"Setting up a Clojure project"),
t=O.a?O.a("Web development basics with Ring"):O.call(null,"Web development basics with Ring"),v=O.a?O.a("Deploying to Heroku"):O.call(null,"Deploying to Heroku"),e=U.B?U.B(e,h,k,m,r,t,v):U.call(null,e,h,k,m,r,t,v),e=V.b(z([H,"Curriculum contents",e],0)),h=K.a?K.a("YUP"):K.call(null,"YUP"),h=P.a?P.a(h):P.call(null,h),h=V.b(z([H,"Is this ambitious?",h],0)),k=Qk.b(z(["A web application that uses the World Bank API to show lists of countries by economic/development factor."],0)),m=Qk.b(z(["This application will be 80% baked, with 20% for students to fill in."],
0)),k=V.b(z([H,"The Global Growth app",k,m],0)),m=uk.a?uk.a("Global Growth demo"):uk.call(null,"Global Growth demo"),m=V.b(z([m],0)),r=O.a?O.a("Read the curriculum"):O.call(null,"Read the curriculum"),t=O.a?O.a("Set up Light Table and get familiar with it"):O.call(null,"Set up Light Table and get familiar with it"),v=O.a?O.a("Try downloading and filling in the Global Growth app"):O.call(null,"Try downloading and filling in the Global Growth app"),y=O.a?O.a("Try deploying the app to Heroku"):O.call(null,
"Try deploying the app to Heroku"),r=U.e?U.e(r,t,v,y):U.call(null,r,t,v,y),r=V.b(z([H,"How to prepare",r],0));return Pk.b(z([pj,"mozilla-theme.css",a,b,c,d,e,h,k,m,r],0))}())):qk.call(null,pk.c?pk.c(F,yg):pk.call(null,F,yg),ok.c?ok.c(F,function(){var a=P.a?P.a("Durham, NC"):P.call(null,"Durham, NC"),b=P.a?P.a("March 18, 2014"):P.call(null,"March 18, 2014"),a=Ok.b(z([H,"ClojureBridge Teacher Training",a,b],0)),b=Rk.b(z(["What is the goal of the curriculum?","Who is the curriculum aimed at?","What is in the curriculum?",
"What is the Global Growth app?","What do I need to do before April 4?"],0)),b=V.b(z([H,"Agenda",b],0)),c=P.a?P.a("To leave students with enough knowledge that they could go on to learn Clojure on their own."):P.call(null,"To leave students with enough knowledge that they could go on to learn Clojure on their own."),c=V.b(z([H,"Goal",c],0)),d=Rk.b(z(["Smart","Motivated","No development experience"],0)),d=V.b(z([H,"Audience assumptions",d],0)),e=O.a?O.a("Numbers, strings, booleans"):O.call(null,"Numbers, strings, booleans"),
h=O.a?O.a("Vectors and maps"):O.call(null,"Vectors and maps"),k=O.a?O.a("Functions"):O.call(null,"Functions"),m=L.a?L.a("if"):L.call(null,"if"),m=O.c?O.c(m," and boolean logic"):O.call(null,m," and boolean logic"),r=O.a?O.a("Setting up a Clojure project"):O.call(null,"Setting up a Clojure project"),t=O.a?O.a("Web development basics with Ring"):O.call(null,"Web development basics with Ring"),v=O.a?O.a("Deploying to Heroku"):O.call(null,"Deploying to Heroku"),e=U.B?U.B(e,h,k,m,r,t,v):U.call(null,e,
h,k,m,r,t,v),e=V.b(z([H,"Curriculum contents",e],0)),h=K.a?K.a("YUP"):K.call(null,"YUP"),h=P.a?P.a(h):P.call(null,h),h=V.b(z([H,"Is this ambitious?",h],0)),k=Qk.b(z(["A web application that uses the World Bank API to show lists of countries by economic/development factor."],0)),m=Qk.b(z(["This application will be 80% baked, with 20% for students to fill in."],0)),k=V.b(z([H,"The Global Growth app",k,m],0)),m=uk.a?uk.a("Global Growth demo"):uk.call(null,"Global Growth demo"),m=V.b(z([m],0)),r=O.a?
O.a("Read the curriculum"):O.call(null,"Read the curriculum"),t=O.a?O.a("Set up Light Table and get familiar with it"):O.call(null,"Set up Light Table and get familiar with it"),v=O.a?O.a("Try downloading and filling in the Global Growth app"):O.call(null,"Try downloading and filling in the Global Growth app"),y=O.a?O.a("Try deploying the app to Heroku"):O.call(null,"Try deploying the app to Heroku"),r=U.e?U.e(r,t,v,y):U.call(null,r,t,v,y),r=V.b(z([H,"How to prepare",r],0));return Pk.b(z([pj,"mozilla-theme.css",
a,b,c,d,e,h,k,m,r],0))}()):ok.call(null,F,function(){var a=P.a?P.a("Durham, NC"):P.call(null,"Durham, NC"),b=P.a?P.a("March 18, 2014"):P.call(null,"March 18, 2014"),a=Ok.b(z([H,"ClojureBridge Teacher Training",a,b],0)),b=Rk.b(z(["What is the goal of the curriculum?","Who is the curriculum aimed at?","What is in the curriculum?","What is the Global Growth app?","What do I need to do before April 4?"],0)),b=V.b(z([H,"Agenda",b],0)),c=P.a?P.a("To leave students with enough knowledge that they could go on to learn Clojure on their own."):
P.call(null,"To leave students with enough knowledge that they could go on to learn Clojure on their own."),c=V.b(z([H,"Goal",c],0)),d=Rk.b(z(["Smart","Motivated","No development experience"],0)),d=V.b(z([H,"Audience assumptions",d],0)),e=O.a?O.a("Numbers, strings, booleans"):O.call(null,"Numbers, strings, booleans"),h=O.a?O.a("Vectors and maps"):O.call(null,"Vectors and maps"),k=O.a?O.a("Functions"):O.call(null,"Functions"),m=L.a?L.a("if"):L.call(null,"if"),m=O.c?O.c(m," and boolean logic"):O.call(null,
m," and boolean logic"),r=O.a?O.a("Setting up a Clojure project"):O.call(null,"Setting up a Clojure project"),t=O.a?O.a("Web development basics with Ring"):O.call(null,"Web development basics with Ring"),v=O.a?O.a("Deploying to Heroku"):O.call(null,"Deploying to Heroku"),e=U.B?U.B(e,h,k,m,r,t,v):U.call(null,e,h,k,m,r,t,v),e=V.b(z([H,"Curriculum contents",e],0)),h=K.a?K.a("YUP"):K.call(null,"YUP"),h=P.a?P.a(h):P.call(null,h),h=V.b(z([H,"Is this ambitious?",h],0)),k=Qk.b(z(["A web application that uses the World Bank API to show lists of countries by economic/development factor."],
0)),m=Qk.b(z(["This application will be 80% baked, with 20% for students to fill in."],0)),k=V.b(z([H,"The Global Growth app",k,m],0)),m=uk.a?uk.a("Global Growth demo"):uk.call(null,"Global Growth demo"),m=V.b(z([m],0)),r=O.a?O.a("Read the curriculum"):O.call(null,"Read the curriculum"),t=O.a?O.a("Set up Light Table and get familiar with it"):O.call(null,"Set up Light Table and get familiar with it"),v=O.a?O.a("Try downloading and filling in the Global Growth app"):O.call(null,"Try downloading and filling in the Global Growth app"),
y=O.a?O.a("Try deploying the app to Heroku"):O.call(null,"Try deploying the app to Heroku"),r=U.e?U.e(r,t,v,y):U.call(null,r,t,v,y),r=V.b(z([H,"How to prepare",r],0));return Pk.b(z([pj,"mozilla-theme.css",a,b,c,d,e,h,k,m,r],0))}()));return Fk()});function Uk(a){var b=a.href;if(g(b)){var c=[p("___tailrecursion_hoplon_reload___\x3d"),p((new Date).getTime())].join("");a=a.ownerNode;if(0>b.indexOf("?"))b=[p(b),p("?"),p(c)].join("");else if(0>b.indexOf("___tailrecursion_hoplon_reload___\x3d"))b=[p(b),p("\x26"),p(c)].join("");else if(n){var d=Vh([p("___tailrecursion_hoplon_reload___\x3d"),p("\\d+")].join(""));if("string"===typeof d)b=b.replace(RegExp(String(d).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08"),"g"),c);else if(g(d.hasOwnProperty("source")))b=
b.replace(RegExp(d.source,"g"),c);else{if(n)throw[p("Invalid match arg: "),p(d)].join("");b=null}}else b=null;return a.href=b}return null}
function Vk(a,b){var c=hi.a(null),d=new pa(null,3,[jj,a,lj,"HEAD",mj,"text"],null),e=function(){return function(a){return Cd.c("true",a.getResponseHeader("X-Dev-Mode"))}}(c,d),h=function(){return function(a,b){return jQuery.ajax(si($d.d(a,fj,b)))}}(c,d,e),k=function(){return function(a){return Date.parse(a.getResponseHeader("Last-Modified"))}}(c,d,e,h);(function(){function a(b){var c=null;0<arguments.length&&(c=z(Array.prototype.slice.call(arguments,0),0));return r.call(this,c)}function r(r){C.d(r,
0,null);C.d(r,1,null);r=C.d(r,2,null);g(r)&&ii(c,k(r));return wa(r)||e(r)?setTimeout(function(){return h(d,a)},b):null}a.j=0;a.g=function(a){a=s(a);return r(a)};a.b=r;return a})().call(null);return c}function Wk(a,b,c){return mi(Vk(a,g(b)?b:100),null,function(a,b,h,k){return g(g(h)?Nf.c(h,k):h)?c.q?c.q():c.call(null):null})}
var Xk=function(){function a(a){var d=null;0<arguments.length&&(d=z(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){a=C.d(a,0,null);return Wk("main.js",a,function(){return window.location.reload()})}a.j=0;a.g=function(a){a=s(a);return b(a)};a.b=b;return a}(),Yk=function(){function a(a){var d=null;0<arguments.length&&(d=z(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){var b=C.d(a,0,null);return function h(){var a=document.styleSheets,
c=Rh.c(0,a.length),r=Uf(function(){return function(a){return a.href}}(a,c),function(){return function(a,b){return function dc(c){return new xf(null,function(a){return function(){for(;;){var b=s(c);if(b){if(ke(b)){var d=kd(b),h=B(d),k=Bf(h);a:{for(var m=0;;)if(m<h){var r=q.c(d,m);k.add(a[r]);m+=1}else{d=!0;break a}d=void 0}return d?Ef(k.R(),dc(ld(b))):Ef(k.R(),null)}k=u(b);return A(a[k],dc(w(b)))}return null}}}(a,b),null,null)}}(a,c)(c)}());if(wa(s(r)))return setTimeout(h,g(b)?b:100);for(var r=s(Rh.c(0,
a.length)),t=null,v=0,y=0;;)if(y<v){var I=t.r(null,y),R=a[I];if(g(R)){var X=R,fa=X.href;if(g(fa)){var ha=fa;Wk(ha,b,function(b,c,d,h,m,r,t,v,y){return function(){return Uk(a[y])}}(r,t,v,y,ha,fa,X,R,I))}}y+=1}else if(X=s(r)){R=X;if(ke(R))r=kd(R),y=ld(R),t=r,v=B(r),r=y;else{I=u(R);fa=a[I];if(g(fa)){var ha=fa,ma=ha.href;if(g(ma)){var xa=ma;Wk(xa,b,function(b,c,d,h,m,r,t,v,y){return function(){return Uk(a[y])}}(r,t,v,y,xa,ma,ha,fa,I,R,X))}}r=x(R);t=null;v=0}y=0}else return null}.call(null)}a.j=0;a.g=
function(a){a=s(a);return b(a)};a.b=b;return a}(),Zk=function(){function a(a){var d=null;0<arguments.length&&(d=z(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){a=C.d(a,0,null);Xk.b(z([a],0));return Yk.b(z([a],0))}a.j=0;a.g=function(a){a=s(a);return b(a)};a.b=b;return a}();ea("tailrecursion.hoplon.app_pages._index_DOT_html.hoploninit",function(){Cd.c(window.location.search,"?dev")&&(ei.b(z(["Autoreloading"],0)),Zk());qk.c?qk.c(pk.c?pk.c(F,yg):pk.call(null,F,yg),ok.c?ok.c(F,function(){var a=P.a?P.a("Durham, NC"):P.call(null,"Durham, NC"),b=P.a?P.a("April 5, 2014"):P.call(null,"April 5, 2014"),a=Ok.b(z([H,"ClojureBridge",a,b],0)),b=J.d?J.d(Li,"module1.html","Introduction to Clojure"):J.call(null,Li,"module1.html","Introduction to Clojure"),b=O.a?O.a(b):O.call(null,b),
c=J.d?J.d(Li,"module2.html","Data Structures and Functions"):J.call(null,Li,"module2.html","Data Structures and Functions"),c=O.a?O.a(c):O.call(null,c),d=J.d?J.d(Li,"module3.html","Flow Control and Logic"):J.call(null,Li,"module3.html","Flow Control and Logic"),d=O.a?O.a(d):O.call(null,d),e=J.d?J.d(Li,"module4.html","Making a Program"):J.call(null,Li,"module4.html","Making a Program"),e=O.a?O.a(e):O.call(null,e),h=J.d?J.d(Li,"module5.html","Making a Web Application"):J.call(null,Li,"module5.html",
"Making a Web Application"),h=O.a?O.a(h):O.call(null,h),b=U.k?U.k(b,c,d,e,h):U.call(null,b,c,d,e,h),b=V.b(z([H,"Table of Contents",b],0));return Pk.b(z([pj,"mozilla-theme.css",a,b],0))}()):ok.call(null,F,function(){var a=P.a?P.a("Durham, NC"):P.call(null,"Durham, NC"),b=P.a?P.a("April 5, 2014"):P.call(null,"April 5, 2014"),a=Ok.b(z([H,"ClojureBridge",a,b],0)),b=J.d?J.d(Li,"module1.html","Introduction to Clojure"):J.call(null,Li,"module1.html","Introduction to Clojure"),b=O.a?O.a(b):O.call(null,b),
c=J.d?J.d(Li,"module2.html","Data Structures and Functions"):J.call(null,Li,"module2.html","Data Structures and Functions"),c=O.a?O.a(c):O.call(null,c),d=J.d?J.d(Li,"module3.html","Flow Control and Logic"):J.call(null,Li,"module3.html","Flow Control and Logic"),d=O.a?O.a(d):O.call(null,d),e=J.d?J.d(Li,"module4.html","Making a Program"):J.call(null,Li,"module4.html","Making a Program"),e=O.a?O.a(e):O.call(null,e),h=J.d?J.d(Li,"module5.html","Making a Web Application"):J.call(null,Li,"module5.html",
"Making a Web Application"),h=O.a?O.a(h):O.call(null,h),b=U.k?U.k(b,c,d,e,h):U.call(null,b,c,d,e,h),b=V.b(z([H,"Table of Contents",b],0));return Pk.b(z([pj,"mozilla-theme.css",a,b],0))}())):qk.call(null,pk.c?pk.c(F,yg):pk.call(null,F,yg),ok.c?ok.c(F,function(){var a=P.a?P.a("Durham, NC"):P.call(null,"Durham, NC"),b=P.a?P.a("April 5, 2014"):P.call(null,"April 5, 2014"),a=Ok.b(z([H,"ClojureBridge",a,b],0)),b=J.d?J.d(Li,"module1.html","Introduction to Clojure"):J.call(null,Li,"module1.html","Introduction to Clojure"),
b=O.a?O.a(b):O.call(null,b),c=J.d?J.d(Li,"module2.html","Data Structures and Functions"):J.call(null,Li,"module2.html","Data Structures and Functions"),c=O.a?O.a(c):O.call(null,c),d=J.d?J.d(Li,"module3.html","Flow Control and Logic"):J.call(null,Li,"module3.html","Flow Control and Logic"),d=O.a?O.a(d):O.call(null,d),e=J.d?J.d(Li,"module4.html","Making a Program"):J.call(null,Li,"module4.html","Making a Program"),e=O.a?O.a(e):O.call(null,e),h=J.d?J.d(Li,"module5.html","Making a Web Application"):J.call(null,
Li,"module5.html","Making a Web Application"),h=O.a?O.a(h):O.call(null,h),b=U.k?U.k(b,c,d,e,h):U.call(null,b,c,d,e,h),b=V.b(z([H,"Table of Contents",b],0));return Pk.b(z([pj,"mozilla-theme.css",a,b],0))}()):ok.call(null,F,function(){var a=P.a?P.a("Durham, NC"):P.call(null,"Durham, NC"),b=P.a?P.a("April 5, 2014"):P.call(null,"April 5, 2014"),a=Ok.b(z([H,"ClojureBridge",a,b],0)),b=J.d?J.d(Li,"module1.html","Introduction to Clojure"):J.call(null,Li,"module1.html","Introduction to Clojure"),b=O.a?O.a(b):
O.call(null,b),c=J.d?J.d(Li,"module2.html","Data Structures and Functions"):J.call(null,Li,"module2.html","Data Structures and Functions"),c=O.a?O.a(c):O.call(null,c),d=J.d?J.d(Li,"module3.html","Flow Control and Logic"):J.call(null,Li,"module3.html","Flow Control and Logic"),d=O.a?O.a(d):O.call(null,d),e=J.d?J.d(Li,"module4.html","Making a Program"):J.call(null,Li,"module4.html","Making a Program"),e=O.a?O.a(e):O.call(null,e),h=J.d?J.d(Li,"module5.html","Making a Web Application"):J.call(null,Li,
"module5.html","Making a Web Application"),h=O.a?O.a(h):O.call(null,h),b=U.k?U.k(b,c,d,e,h):U.call(null,b,c,d,e,h),b=V.b(z([H,"Table of Contents",b],0));return Pk.b(z([pj,"mozilla-theme.css",a,b],0))}()));return Fk()});var $k;
ea("tailrecursion.hoplon.app_pages._module5_DOT_html.hoploninit",function(){Cd.c(window.location.search,"?dev")&&(ei.b(z(["Autoreloading"],0)),Zk());$k=function(){function a(a){var d=null;0<arguments.length&&(d=z(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){var b=fk(a);a=C.d(b,0,null);b=C.d(b,1,null);return Sk.b(z([$d.d(a,Wi,"clojure"),b],0))}a.j=0;a.g=function(a){a=s(a);return b(a)};a.b=b;return a}();qk.c?qk.c(pk.c?pk.c(F,yg):pk.call(null,F,yg),ok.c?ok.c(F,function(){var a=
Ok.b(z([H,"Module 5"],0)),b=N.c?N.c(G,"img/web1.png"):N.call(null,G,"img/web1.png"),b=V.b(z([H,"How does the web work?",b],0)),c=N.c?N.c(G,"img/web2.png"):N.call(null,G,"img/web2.png"),c=V.b(z([H,"Requesting index.html",c],0)),d=N.c?N.c(G,"img/web3.png"):N.call(null,G,"img/web3.png"),d=V.b(z([H,"Web server \x3d a function",d],0)),e=$k.b(z(['(defn app\n  [request]\n  {:status 200\n   :body "Hello world!"})'],0)),e=V.b(z([H,"A simple Clojure web application",e],0)),h=P.a?P.a("Go to clojurebridge.org in your web browser and view the source."):
P.call(null,"Go to clojurebridge.org in your web browser and view the source."),h=V.b(z([H,"What is HTML?",h],0)),b=W.b(z([H,"Web Applications",b,c,d,e,h],0)),c=K.a?K.a("Ring:"):K.call(null,"Ring:"),c=O.c?O.c(c," handles taking in web requests and returning responses"):O.call(null,c," handles taking in web requests and returning responses"),d=K.a?K.a("Compojure:"):K.call(null,"Compojure:"),d=O.c?O.c(d," reads URLs and decides how to handle them"):O.call(null,d," reads URLs and decides how to handle them"),
e=K.a?K.a("Hiccup:"):K.call(null,"Hiccup:"),e=O.c?O.c(e," takes Clojure data and turns it into HTML"):O.call(null,e," takes Clojure data and turns it into HTML"),c=U.d?U.d(c,d,e):U.call(null,c,d,e),c=V.b(z([H,"Libraries we are going to use",c],0)),d=$k.b(z(["(ns global-growth.web\n  (:require [global-growth.core :as api]\n            [compojure.core :refer [defroutes GET]]\n            [compojure.handler :refer [site]]\n            [hiccup.core :as hiccup]\n            [hiccup.page :as page]\n            [hiccup.form :as form]))"],
0)),d=V.b(z([H,"global-growth.web",d],0)),e=P.a?P.a("Uncomment everything under the MODULE 5 line in core.clj and everything in web.clj."):P.call(null,"Uncomment everything under the MODULE 5 line in core.clj and everything in web.clj."),e=V.b(z([H,"Getting set up for this module",e],0)),h=$k.b(z(['(defroutes main-routes\n  (GET "/" [] (main-page))\n  (GET "/indicators" [indicator1 indicator2 year]\n       (view-indicators indicator1 indicator2 year)))'],0)),h=V.b(z([H,"Routing requests",h],0)),k=
$k.b(z(['(hiccup/html [:header\n              [:h1 "Hello world!"]\n              [:h2 "I am an awesome subheader"]])\n;;\x3d\x3e "\x3cheader\x3e\x3ch1\x3eHello world!\x3c/h1\x3e\n;;    \x3ch2\x3eI am an awesome subheader\x3c/h2\x3e\x3c/header\x3e"'],0)),k=V.b(z([H,"Generating HTML",k],0)),m=L.a?L.a("main-page"):L.call(null,"main-page"),m=P.d?P.d("Take a look at ",m,"."):P.call(null,"Take a look at ",m,"."),r=$k.b(z(['(form/form-to {:role "form"} [:get "/indicators"]\n              [:div.row\n               [:div.form-group.col-md-5\n                (form/label "indicator1" "Indicator 1:  ")\n                (form/drop-down {:class "form-control"}\n                                "indicator1"\n                                (api/get-indicators))]]\n              ;; ...\n              (form/submit-button "Submit"))'],
0)),m=V.b(z([H,"HTML forms",m,r],0)),r=L.a?L.a("project.clj"):L.call(null,"project.clj"),r=P.d?P.d("Open ",r,"."):P.call(null,"Open ",r,"."),t=P.a?P.a("Make sure the following is in the project:"):P.call(null,"Make sure the following is in the project:"),v=$k.b(z([":ring {:handler global-growth.web/handler}"],0)),r=V.b(z([H,"Running a web application",r,t,v],0)),t=Sk.b(z([Wi,"no-highlight","\x3e lein ring server\n\n2014-04-02 21:30:06.303:INFO:oejs.Server:jetty-7.6.8.v20121106\n2014-04-02 21:30:06.378:INFO:oejs.AbstractConnector:Started SelectChannelConnector@0.0.0.0:3000\nStarted server on port 3000"],
0)),v=P.a?P.a("Go to http://localhost:3000/."):P.call(null,"Go to http://localhost:3000/."),t=V.b(z([H,"Starting the web server",t,v],0)),c=W.b(z([H,"Clojure web applications",c,d,e,h,k,m,r,t],0));return Pk.b(z([pj,"mozilla-theme.css",a,b,c],0))}()):ok.call(null,F,function(){var a=Ok.b(z([H,"Module 5"],0)),b=N.c?N.c(G,"img/web1.png"):N.call(null,G,"img/web1.png"),b=V.b(z([H,"How does the web work?",b],0)),c=N.c?N.c(G,"img/web2.png"):N.call(null,G,"img/web2.png"),c=V.b(z([H,"Requesting index.html",
c],0)),d=N.c?N.c(G,"img/web3.png"):N.call(null,G,"img/web3.png"),d=V.b(z([H,"Web server \x3d a function",d],0)),e=$k.b(z(['(defn app\n  [request]\n  {:status 200\n   :body "Hello world!"})'],0)),e=V.b(z([H,"A simple Clojure web application",e],0)),h=P.a?P.a("Go to clojurebridge.org in your web browser and view the source."):P.call(null,"Go to clojurebridge.org in your web browser and view the source."),h=V.b(z([H,"What is HTML?",h],0)),b=W.b(z([H,"Web Applications",b,c,d,e,h],0)),c=K.a?K.a("Ring:"):
K.call(null,"Ring:"),c=O.c?O.c(c," handles taking in web requests and returning responses"):O.call(null,c," handles taking in web requests and returning responses"),d=K.a?K.a("Compojure:"):K.call(null,"Compojure:"),d=O.c?O.c(d," reads URLs and decides how to handle them"):O.call(null,d," reads URLs and decides how to handle them"),e=K.a?K.a("Hiccup:"):K.call(null,"Hiccup:"),e=O.c?O.c(e," takes Clojure data and turns it into HTML"):O.call(null,e," takes Clojure data and turns it into HTML"),c=U.d?
U.d(c,d,e):U.call(null,c,d,e),c=V.b(z([H,"Libraries we are going to use",c],0)),d=$k.b(z(["(ns global-growth.web\n  (:require [global-growth.core :as api]\n            [compojure.core :refer [defroutes GET]]\n            [compojure.handler :refer [site]]\n            [hiccup.core :as hiccup]\n            [hiccup.page :as page]\n            [hiccup.form :as form]))"],0)),d=V.b(z([H,"global-growth.web",d],0)),e=P.a?P.a("Uncomment everything under the MODULE 5 line in core.clj and everything in web.clj."):
P.call(null,"Uncomment everything under the MODULE 5 line in core.clj and everything in web.clj."),e=V.b(z([H,"Getting set up for this module",e],0)),h=$k.b(z(['(defroutes main-routes\n  (GET "/" [] (main-page))\n  (GET "/indicators" [indicator1 indicator2 year]\n       (view-indicators indicator1 indicator2 year)))'],0)),h=V.b(z([H,"Routing requests",h],0)),k=$k.b(z(['(hiccup/html [:header\n              [:h1 "Hello world!"]\n              [:h2 "I am an awesome subheader"]])\n;;\x3d\x3e "\x3cheader\x3e\x3ch1\x3eHello world!\x3c/h1\x3e\n;;    \x3ch2\x3eI am an awesome subheader\x3c/h2\x3e\x3c/header\x3e"'],
0)),k=V.b(z([H,"Generating HTML",k],0)),m=L.a?L.a("main-page"):L.call(null,"main-page"),m=P.d?P.d("Take a look at ",m,"."):P.call(null,"Take a look at ",m,"."),r=$k.b(z(['(form/form-to {:role "form"} [:get "/indicators"]\n              [:div.row\n               [:div.form-group.col-md-5\n                (form/label "indicator1" "Indicator 1:  ")\n                (form/drop-down {:class "form-control"}\n                                "indicator1"\n                                (api/get-indicators))]]\n              ;; ...\n              (form/submit-button "Submit"))'],
0)),m=V.b(z([H,"HTML forms",m,r],0)),r=L.a?L.a("project.clj"):L.call(null,"project.clj"),r=P.d?P.d("Open ",r,"."):P.call(null,"Open ",r,"."),t=P.a?P.a("Make sure the following is in the project:"):P.call(null,"Make sure the following is in the project:"),v=$k.b(z([":ring {:handler global-growth.web/handler}"],0)),r=V.b(z([H,"Running a web application",r,t,v],0)),t=Sk.b(z([Wi,"no-highlight","\x3e lein ring server\n\n2014-04-02 21:30:06.303:INFO:oejs.Server:jetty-7.6.8.v20121106\n2014-04-02 21:30:06.378:INFO:oejs.AbstractConnector:Started SelectChannelConnector@0.0.0.0:3000\nStarted server on port 3000"],
0)),v=P.a?P.a("Go to http://localhost:3000/."):P.call(null,"Go to http://localhost:3000/."),t=V.b(z([H,"Starting the web server",t,v],0)),c=W.b(z([H,"Clojure web applications",c,d,e,h,k,m,r,t],0));return Pk.b(z([pj,"mozilla-theme.css",a,b,c],0))}())):qk.call(null,pk.c?pk.c(F,yg):pk.call(null,F,yg),ok.c?ok.c(F,function(){var a=Ok.b(z([H,"Module 5"],0)),b=N.c?N.c(G,"img/web1.png"):N.call(null,G,"img/web1.png"),b=V.b(z([H,"How does the web work?",b],0)),c=N.c?N.c(G,"img/web2.png"):N.call(null,G,"img/web2.png"),
c=V.b(z([H,"Requesting index.html",c],0)),d=N.c?N.c(G,"img/web3.png"):N.call(null,G,"img/web3.png"),d=V.b(z([H,"Web server \x3d a function",d],0)),e=$k.b(z(['(defn app\n  [request]\n  {:status 200\n   :body "Hello world!"})'],0)),e=V.b(z([H,"A simple Clojure web application",e],0)),h=P.a?P.a("Go to clojurebridge.org in your web browser and view the source."):P.call(null,"Go to clojurebridge.org in your web browser and view the source."),h=V.b(z([H,"What is HTML?",h],0)),b=W.b(z([H,"Web Applications",
b,c,d,e,h],0)),c=K.a?K.a("Ring:"):K.call(null,"Ring:"),c=O.c?O.c(c," handles taking in web requests and returning responses"):O.call(null,c," handles taking in web requests and returning responses"),d=K.a?K.a("Compojure:"):K.call(null,"Compojure:"),d=O.c?O.c(d," reads URLs and decides how to handle them"):O.call(null,d," reads URLs and decides how to handle them"),e=K.a?K.a("Hiccup:"):K.call(null,"Hiccup:"),e=O.c?O.c(e," takes Clojure data and turns it into HTML"):O.call(null,e," takes Clojure data and turns it into HTML"),
c=U.d?U.d(c,d,e):U.call(null,c,d,e),c=V.b(z([H,"Libraries we are going to use",c],0)),d=$k.b(z(["(ns global-growth.web\n  (:require [global-growth.core :as api]\n            [compojure.core :refer [defroutes GET]]\n            [compojure.handler :refer [site]]\n            [hiccup.core :as hiccup]\n            [hiccup.page :as page]\n            [hiccup.form :as form]))"],0)),d=V.b(z([H,"global-growth.web",d],0)),e=P.a?P.a("Uncomment everything under the MODULE 5 line in core.clj and everything in web.clj."):
P.call(null,"Uncomment everything under the MODULE 5 line in core.clj and everything in web.clj."),e=V.b(z([H,"Getting set up for this module",e],0)),h=$k.b(z(['(defroutes main-routes\n  (GET "/" [] (main-page))\n  (GET "/indicators" [indicator1 indicator2 year]\n       (view-indicators indicator1 indicator2 year)))'],0)),h=V.b(z([H,"Routing requests",h],0)),k=$k.b(z(['(hiccup/html [:header\n              [:h1 "Hello world!"]\n              [:h2 "I am an awesome subheader"]])\n;;\x3d\x3e "\x3cheader\x3e\x3ch1\x3eHello world!\x3c/h1\x3e\n;;    \x3ch2\x3eI am an awesome subheader\x3c/h2\x3e\x3c/header\x3e"'],
0)),k=V.b(z([H,"Generating HTML",k],0)),m=L.a?L.a("main-page"):L.call(null,"main-page"),m=P.d?P.d("Take a look at ",m,"."):P.call(null,"Take a look at ",m,"."),r=$k.b(z(['(form/form-to {:role "form"} [:get "/indicators"]\n              [:div.row\n               [:div.form-group.col-md-5\n                (form/label "indicator1" "Indicator 1:  ")\n                (form/drop-down {:class "form-control"}\n                                "indicator1"\n                                (api/get-indicators))]]\n              ;; ...\n              (form/submit-button "Submit"))'],
0)),m=V.b(z([H,"HTML forms",m,r],0)),r=L.a?L.a("project.clj"):L.call(null,"project.clj"),r=P.d?P.d("Open ",r,"."):P.call(null,"Open ",r,"."),t=P.a?P.a("Make sure the following is in the project:"):P.call(null,"Make sure the following is in the project:"),v=$k.b(z([":ring {:handler global-growth.web/handler}"],0)),r=V.b(z([H,"Running a web application",r,t,v],0)),t=Sk.b(z([Wi,"no-highlight","\x3e lein ring server\n\n2014-04-02 21:30:06.303:INFO:oejs.Server:jetty-7.6.8.v20121106\n2014-04-02 21:30:06.378:INFO:oejs.AbstractConnector:Started SelectChannelConnector@0.0.0.0:3000\nStarted server on port 3000"],
0)),v=P.a?P.a("Go to http://localhost:3000/."):P.call(null,"Go to http://localhost:3000/."),t=V.b(z([H,"Starting the web server",t,v],0)),c=W.b(z([H,"Clojure web applications",c,d,e,h,k,m,r,t],0));return Pk.b(z([pj,"mozilla-theme.css",a,b,c],0))}()):ok.call(null,F,function(){var a=Ok.b(z([H,"Module 5"],0)),b=N.c?N.c(G,"img/web1.png"):N.call(null,G,"img/web1.png"),b=V.b(z([H,"How does the web work?",b],0)),c=N.c?N.c(G,"img/web2.png"):N.call(null,G,"img/web2.png"),c=V.b(z([H,"Requesting index.html",
c],0)),d=N.c?N.c(G,"img/web3.png"):N.call(null,G,"img/web3.png"),d=V.b(z([H,"Web server \x3d a function",d],0)),e=$k.b(z(['(defn app\n  [request]\n  {:status 200\n   :body "Hello world!"})'],0)),e=V.b(z([H,"A simple Clojure web application",e],0)),h=P.a?P.a("Go to clojurebridge.org in your web browser and view the source."):P.call(null,"Go to clojurebridge.org in your web browser and view the source."),h=V.b(z([H,"What is HTML?",h],0)),b=W.b(z([H,"Web Applications",b,c,d,e,h],0)),c=K.a?K.a("Ring:"):
K.call(null,"Ring:"),c=O.c?O.c(c," handles taking in web requests and returning responses"):O.call(null,c," handles taking in web requests and returning responses"),d=K.a?K.a("Compojure:"):K.call(null,"Compojure:"),d=O.c?O.c(d," reads URLs and decides how to handle them"):O.call(null,d," reads URLs and decides how to handle them"),e=K.a?K.a("Hiccup:"):K.call(null,"Hiccup:"),e=O.c?O.c(e," takes Clojure data and turns it into HTML"):O.call(null,e," takes Clojure data and turns it into HTML"),c=U.d?
U.d(c,d,e):U.call(null,c,d,e),c=V.b(z([H,"Libraries we are going to use",c],0)),d=$k.b(z(["(ns global-growth.web\n  (:require [global-growth.core :as api]\n            [compojure.core :refer [defroutes GET]]\n            [compojure.handler :refer [site]]\n            [hiccup.core :as hiccup]\n            [hiccup.page :as page]\n            [hiccup.form :as form]))"],0)),d=V.b(z([H,"global-growth.web",d],0)),e=P.a?P.a("Uncomment everything under the MODULE 5 line in core.clj and everything in web.clj."):
P.call(null,"Uncomment everything under the MODULE 5 line in core.clj and everything in web.clj."),e=V.b(z([H,"Getting set up for this module",e],0)),h=$k.b(z(['(defroutes main-routes\n  (GET "/" [] (main-page))\n  (GET "/indicators" [indicator1 indicator2 year]\n       (view-indicators indicator1 indicator2 year)))'],0)),h=V.b(z([H,"Routing requests",h],0)),k=$k.b(z(['(hiccup/html [:header\n              [:h1 "Hello world!"]\n              [:h2 "I am an awesome subheader"]])\n;;\x3d\x3e "\x3cheader\x3e\x3ch1\x3eHello world!\x3c/h1\x3e\n;;    \x3ch2\x3eI am an awesome subheader\x3c/h2\x3e\x3c/header\x3e"'],
0)),k=V.b(z([H,"Generating HTML",k],0)),m=L.a?L.a("main-page"):L.call(null,"main-page"),m=P.d?P.d("Take a look at ",m,"."):P.call(null,"Take a look at ",m,"."),r=$k.b(z(['(form/form-to {:role "form"} [:get "/indicators"]\n              [:div.row\n               [:div.form-group.col-md-5\n                (form/label "indicator1" "Indicator 1:  ")\n                (form/drop-down {:class "form-control"}\n                                "indicator1"\n                                (api/get-indicators))]]\n              ;; ...\n              (form/submit-button "Submit"))'],
0)),m=V.b(z([H,"HTML forms",m,r],0)),r=L.a?L.a("project.clj"):L.call(null,"project.clj"),r=P.d?P.d("Open ",r,"."):P.call(null,"Open ",r,"."),t=P.a?P.a("Make sure the following is in the project:"):P.call(null,"Make sure the following is in the project:"),v=$k.b(z([":ring {:handler global-growth.web/handler}"],0)),r=V.b(z([H,"Running a web application",r,t,v],0)),t=Sk.b(z([Wi,"no-highlight","\x3e lein ring server\n\n2014-04-02 21:30:06.303:INFO:oejs.Server:jetty-7.6.8.v20121106\n2014-04-02 21:30:06.378:INFO:oejs.AbstractConnector:Started SelectChannelConnector@0.0.0.0:3000\nStarted server on port 3000"],
0)),v=P.a?P.a("Go to http://localhost:3000/."):P.call(null,"Go to http://localhost:3000/."),t=V.b(z([H,"Starting the web server",t,v],0)),c=W.b(z([H,"Clojure web applications",c,d,e,h,k,m,r,t],0));return Pk.b(z([pj,"mozilla-theme.css",a,b,c],0))}()));return Fk()});var Y;
ea("tailrecursion.hoplon.app_pages._module4_DOT_html.hoploninit",function(){Cd.c(window.location.search,"?dev")&&(ei.b(z(["Autoreloading"],0)),Zk());Y=function(){function a(a){var d=null;0<arguments.length&&(d=z(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){var b=fk(a);a=C.d(b,0,null);b=C.d(b,1,null);return Sk.b(z([$d.d(a,Wi,"clojure"),b],0))}a.j=0;a.g=function(a){a=s(a);return b(a)};a.b=b;return a}();qk.c?qk.c(pk.c?pk.c(F,yg):pk.call(null,F,yg),ok.c?ok.c(F,function(){var a=
Ok.b(z([H,"Module 4"],0)),b=P.a?P.a("Type the following in your terminal:"):P.call(null,"Type the following in your terminal:"),c=Sk.b(z([Wi,"bash","lein new clojurebridge global-growth "],0)),d=V.b(z([H,"Creating a project",b,c],0)),e=Rk.b(z(["manages Clojure projects","tool you run in your terminal","silly name"],0)),h=V.b(z([H,"Leiningen",e],0)),k=K.a?K.a("project.clj"):K.call(null,"project.clj"),m=K.a?K.a("src/global_growth/core.clj"):K.call(null,"src/global_growth/core.clj"),r=Rk.b(z([".gitignore",
"doc/intro.md",k,"resources/","README.md",m,"test/global_growth/core_test.clj"],0)),t=V.b(z([H,"Project structure",r],0)),v=Rk.b(z(["configuration file for Leiningen","lists dependencies","contains information about program author, description and more"],0)),y=V.b(z([H,"project.clj",v],0)),I=P.a?P.a("This is where we will be writing much of our code."):P.call(null,"This is where we will be writing much of our code."),R=P.c?P.c("Clojure programs can be made up of multiple files, but we are ","going to use just this one for now."):
P.call(null,"Clojure programs can be made up of multiple files, but we are ","going to use just this one for now."),X=V.b(z([H,"src/global_growth/core.clj",I,R],0)),fa=P.a?P.a("Go to the command line and enter:"):P.call(null,"Go to the command line and enter:"),ha=Sk.b(z([Wi,"bash","cd global_growth\nlein run"],0)),ma=V.b(z([H,"Try it out",fa,ha],0)),xa=W.b(z([H,"Projects",d,h,t,y,X,ma],0)),ra=L.a?L.a("src/global_growth/core.clj"):L.call(null,"src/global_growth/core.clj"),Ha=P.d?P.d("Open ",ra,"."):
P.call(null,"Open ",ra,"."),Aa=L.a?L.a("-main"):L.call(null,"-main"),dc=P.d?P.d("What is in the ",Aa," function?"):P.call(null,"What is in the ",Aa," function?"),mc=V.b(z([H,"What happens when I run my program?",Ha,dc],0)),nc=Rk.b(z(["Just an ordinary function with an odd name","The function called first when you run your program","Can call other functions"],0)),oc=V.b(z([H,"The -main function",nc],0)),pc=Y.b(z(['(defn quotify\n  [quote author]\n  (str quote "\\n\\n-- " author))\n\n(defn -main\n  [\x26 args]\n  (println\n   (quotify (str "A man who carries a cat by the tail learns "\n                 "something he can learn in no other way.")\n            "Mark Twain")))'],
0)),qc=V.b(z([H,"Using other functions from -main",pc],0)),rc=P.a?P.a("Namespaces let you organize your code into logical sections."):P.call(null,"Namespaces let you organize your code into logical sections."),sc=Y.b(z([";; in src/global_growth/core.clj\n(ns global-growth.core)"],0)),tc=V.b(z([H,"Namespaces and organization",rc,sc],0)),rb=P.a?P.a("Dependencies are code libraries others have written you can reuse in your project."):P.call(null,"Dependencies are code libraries others have written you can reuse in your project."),
Xa=L.a?L.a("project.clj"):L.call(null,"project.clj"),sb=L.a?L.a(":dependencies"):L.call(null,":dependencies"),vc=P.k?P.k("Open ",Xa," and look for the ",sb," key."):P.call(null,"Open ",Xa," and look for the ",sb," key."),wc=Y.b(z([':dependencies [[org.clojure/clojure "1.5.1"]\n               [clj-http "0.9.0"]\n               [cheshire "5.3.1"]]'],0)),xc=V.b(z([H,"Dependencies",rb,vc,wc],0)),yc=Y.b(z([";; in src/global_growth/core.clj\n(ns global-growth.core\n  (:require [clj-http.client :as client]\n            [cheshire.core :as json]))"],
0)),zc=V.b(z([H,"Requiring dependencies",yc],0)),Ac=W.b(z([H,"Modifying a project",mc,oc,qc,tc,xc,zc],0)),Bc=Rk.b(z(["collection of world development indicators data","provided as JSON documents"],0)),Cc=V.b(z([H,"The World Bank API",Bc],0)),Ya=O.a?O.a("Application Programming Interface"):O.call(null,"Application Programming Interface"),Za=O.a?O.a("web pages for computers"):O.call(null,"web pages for computers"),$a=O.a?O.a("one popular format: JSON"):O.call(null,"one popular format: JSON"),tb=U.d?
U.d(Ya,Za,$a):U.call(null,Ya,Za,$a),ub=V.b(z([H,"What is an API?",tb],0)),vb=P.a?P.a("http://api.worldbank.org/countries/all/indicators/EN.POP.DNST?format\x3djson\x26date\x3d2010"):P.call(null,"http://api.worldbank.org/countries/all/indicators/EN.POP.DNST?format\x3djson\x26date\x3d2010"),wb=V.b(z([H,"API in action",vb],0)),xb=Sk.b(z([Wi,"json",'[\n  {\n    "page": 1,\n    "pages": 6,\n    "per_page": "50",\n    "total": 252\n  },\n  [\n    {\n      "indicator": {\n        "id": "EN.POP.DNST",\n        "value": "Population density (people per sq. km of land area)"\n      },\n      "country": {\n        "id": "1A",\n        "value": "Arab World"\n      },\n      "value": "25.5287276250072",\n      "decimal": "0",\n      "date": "2010"\n    },\n    {\n      "indicator": {\n        "id": "EN.POP.DNST",\n        "value": "Population density (people per sq. km of land area)"\n      },\n      "country": {\n        "id": "S3",\n        "value": "Caribbean small states"\n      },\n      "value": "17.0236186241818",\n      "decimal": "0",\n      "date": "2010"\n    }\n  ]\n]'],
0)),yb=V.b(z([H,"Sample API response",xb],0)),zb=Y.b(z(['(client/get "http://api.worldbank.org/countries/all/indicators/EN.POP.DNST?format\x3djson\x26date\x3d2010")\n\n;; elided and formatted\n;;\x3d\x3e {:orig-content-encoding nil,\n;;    :request-time 109, :status 200,\n;;    :headers {"content-length" "10340",\n;;              "content-type" "application/json;charset\x3dutf-8"},\n;;    :body "[{\\"page\\":1,\\"pages\\":6}]"}'],0)),Dc=V.b(z([H,"Accessing APIs with Clojure",zb],0)),Ec=Y.b(z(['(json/parse-string "[{\\"page\\":1,\\"pages\\":6}]" true)\n;;\x3d\x3e ({:page 1, :pages 6})'],
0)),Fc=V.b(z([H,"Converting JSON",Ec],0)),Ab=L.a?L.a("get-population-density"):L.call(null,"get-population-density"),Bb=P.d?P.d("Write a function called ",Ab," that takes no arguments, and returns Clojure data from the World Bank API on population density."):P.call(null,"Write a function called ",Ab," that takes no arguments, and returns Clojure data from the World Bank API on population density."),ab=L.a?L.a(":body"):L.call(null,":body"),Cb=P.d?P.d("You will need to make the web request, pull the ",
ab," value out of the response, and then parse the JSON."):P.call(null,"You will need to make the web request, pull the ",ab," value out of the response, and then parse the JSON."),Db=Y.b(z(['(get-population-density)\n;;\x3d\x3e ({:page 1, :pages 6, :per_page "50", :total 252}\n;;    [{:indicator {:id "EN.POP.DNST", :value "Population density (people per sq. km of land area)"},\n;;    :country {:id "1A", :value "Arab World"}, :value "25.5287276250072", :decimal "0", :date "2010"},\n;;    ...])'],
0)),Gc=V.b(z([H,"Exercise: Get the results from API call",Bb,Cb,Db],0)),Hc=Y.b(z(['(defn get-api\n  "Returns map representing API response."\n  [path params]\n  (let [url (str "http://api.worldbank.org" path)\n        query-params (merge params {:format "json" :per_page 10000})\n        response (json/parse-string\n                  (:body\n                   (client/get url {:query-params query-params})) true)\n        metadata (first response)\n        results (second response)]\n    {:metadata metadata\n     :results results}))'],
0)),Ic=V.b(z([H,"Getting more information from the API",Hc],0)),Eb=Y.b(z(['(get-api "/countries/all/indicators/EN.POP.DNST" {:date 2010})\n;;\x3d\x3e {:metadata {:page 1, :pages 1, :per_page "10000", :total 252},\n;;    :results [{:indicator {:id "EN.POP.DNST",\n;;    :value "Population density (people per sq. km of land area)"},\n;;    :country {:id "1A", :value "Arab World"}, :value "25.5287276250072",\n;;    :decimal "0", :date "2010"} ...]}'],0)),Fb=V.b(z([H,"get-api",Eb],0)),bb=L.a?L.a("get-country-and-value"):
L.call(null,"get-country-and-value"),cb=L.a?L.a("get-api"):L.call(null,"get-api"),db=L.a?L.a("get-country-and-value"):L.call(null,"get-country-and-value"),Jc=P.ga?P.ga("Write a function ",bb," that can take ","the return value of ",cb," and get the country names ","and values out of that value. ",db," should return a vector of vectors."):P.call(null,"Write a function ",bb," that can take ","the return value of ",cb," and get the country names ","and values out of that value. ",db," should return a vector of vectors."),
Kc=Y.b(z(['(get-country-and-value\n  (get-api "/countries/all/indicators/EN.POP.DNST" {:date 2010}))\n;;\x3d\x3e [["Arab World" "25.5287276250072"]\n;;    ["Caribbean small states" "17.0236186241818"]\n;;    ...]'],0)),Lc=V.b(z([H,"Exercise: extracting the data we want",Jc,Kc],0)),Gb=L.a?L.a("remove-aggregrate-countries"):L.call(null,"remove-aggregrate-countries"),Hb=L.a?L.a("countries"):L.call(null,"countries"),Ib=L.a?L.a("get-indicator-values"):L.call(null,"get-indicator-values"),Mc=P.B?P.B("Uncomment the definitions for ",
Gb,", ",Hb,", and ",Ib,"."):P.call(null,"Uncomment the definitions for ",Gb,", ",Hb,", and ",Ib,"."),Nc=V.b(z([H,"Removing unwanted data",Mc],0)),Jb=Y.b(z(['(defn get-indicator-values\n  "Returns indicator values for a specified year for all countries."\n  [indicator-code year]\n  (let [response (get-api (str "/countries/all/indicators/"\n                               indicator-code)\n                          {:date (str year)})\n        values (get-country-and-value response)]\n    (for [[country value] values\n          :when (and (not (nil? value))\n                     (contains? @countries country))]\n      [country (read-string value)])))'],
0)),Oc=V.b(z([H,"get-indicator-values",Jb],0)),Kb=Y.b(z(['(get-indicator-values "EN.POP.DNST" 2010)'],0)),Lb=P.a?P.a("What do you get?"):P.call(null,"What do you get?"),Mb=V.b(z([H,"Get a list of countries and population density",Kb,Lb],0)),Pc=W.b(z([H,"Your first real program",Cc,ub,wb,yb,Dc,Fc,Gc,Ic,Fb,Lc,Nc,Oc,Mb],0)),Nb=O.a?O.a("Let's make our program print out a list of all countries and their population density."):O.call(null,"Let's make our program print out a list of all countries and their population density."),
eb=L.a?L.a("-main"):L.call(null,"-main"),fb=O.d?O.d("Make sure ",eb," is the last function in your file."):O.call(null,"Make sure ",eb," is the last function in your file."),Ob=U.c?U.c(Nb,fb):U.call(null,Nb,fb),Pb=V.b(z([H,"Updating -main",Ob],0)),gb=L.a?L.a("doseq"):L.call(null,"doseq"),Qb=P.d?P.d("In order to print out all the countries and population densities, you will need a new statement, ",gb,"."):P.call(null,"In order to print out all the countries and population densities, you will need a new statement, ",
gb,"."),hb=L.a?L.a("doseq"):L.call(null,"doseq"),ib=L.a?L.a("for"):L.call(null,"for"),Rb=P.e?P.e(hb," works like ",ib," but executes its body and returns nothing."):P.call(null,hb," works like ",ib," but executes its body and returns nothing."),Sb=Y.b(z(['(doseq [name ["Akeelah" "Bhamini" "Cierra"]]\n  (println name))'],0)),Tb=V.b(z([H,"doseq",Qb,Rb,Sb],0)),Ub=L.a?L.a("doseq"):L.call(null,"doseq"),Vb=L.a?L.a("println"):L.call(null,"println"),Wb=L.a?L.a("-main"):L.call(null,"-main"),Qc=P.B?P.B("Using ",
Ub," and ",Vb,", write a ",Wb," function that prints out all the countries and their population densities from the World Bank API."):P.call(null,"Using ",Ub," and ",Vb,", write a ",Wb," function that prints out all the countries and their population densities from the World Bank API."),Xb=L.a?L.a('(get-indicator-values "EN.POP.DNST" 2010)'):L.call(null,'(get-indicator-values "EN.POP.DNST" 2010)'),Rc=P.d?P.d("Use ",Xb," to get the values you need."):P.call(null,"Use ",Xb," to get the values you need."),
Sc=V.b(z([H,"Exercise: Finish -main",Qc,Rc],0)),Yb=L.a?L.a("-main"):L.call(null,"-main"),Zb=L.a?L.a("sort-by"):L.call(null,"sort-by"),Tc=P.k?P.k("Change your ",Yb," function to only print out the top 10 countries and their population densities. You will need the ",Zb," function to make this work."):P.call(null,"Change your ",Yb," function to only print out the top 10 countries and their population densities. You will need the ",Zb," function to make this work."),$b=V.b(z([H,"Bonus exercise: Only show the top 10 countries",
Tc],0)),Uc=W.b(z([H,"Revisiting -main",Pb,Tb,Sc,$b],0));return Pk.b(z([pj,"mozilla-theme.css",a,xa,Ac,Pc,Uc],0))}()):ok.call(null,F,function(){var a=Ok.b(z([H,"Module 4"],0)),b=P.a?P.a("Type the following in your terminal:"):P.call(null,"Type the following in your terminal:"),c=Sk.b(z([Wi,"bash","lein new clojurebridge global-growth "],0)),d=V.b(z([H,"Creating a project",b,c],0)),e=Rk.b(z(["manages Clojure projects","tool you run in your terminal","silly name"],0)),h=V.b(z([H,"Leiningen",e],0)),k=
K.a?K.a("project.clj"):K.call(null,"project.clj"),m=K.a?K.a("src/global_growth/core.clj"):K.call(null,"src/global_growth/core.clj"),r=Rk.b(z([".gitignore","doc/intro.md",k,"resources/","README.md",m,"test/global_growth/core_test.clj"],0)),t=V.b(z([H,"Project structure",r],0)),v=Rk.b(z(["configuration file for Leiningen","lists dependencies","contains information about program author, description and more"],0)),y=V.b(z([H,"project.clj",v],0)),I=P.a?P.a("This is where we will be writing much of our code."):
P.call(null,"This is where we will be writing much of our code."),R=P.c?P.c("Clojure programs can be made up of multiple files, but we are ","going to use just this one for now."):P.call(null,"Clojure programs can be made up of multiple files, but we are ","going to use just this one for now."),X=V.b(z([H,"src/global_growth/core.clj",I,R],0)),fa=P.a?P.a("Go to the command line and enter:"):P.call(null,"Go to the command line and enter:"),ha=Sk.b(z([Wi,"bash","cd global_growth\nlein run"],0)),ma=V.b(z([H,
"Try it out",fa,ha],0)),xa=W.b(z([H,"Projects",d,h,t,y,X,ma],0)),ra=L.a?L.a("src/global_growth/core.clj"):L.call(null,"src/global_growth/core.clj"),Ha=P.d?P.d("Open ",ra,"."):P.call(null,"Open ",ra,"."),Aa=L.a?L.a("-main"):L.call(null,"-main"),dc=P.d?P.d("What is in the ",Aa," function?"):P.call(null,"What is in the ",Aa," function?"),mc=V.b(z([H,"What happens when I run my program?",Ha,dc],0)),nc=Rk.b(z(["Just an ordinary function with an odd name","The function called first when you run your program",
"Can call other functions"],0)),oc=V.b(z([H,"The -main function",nc],0)),pc=Y.b(z(['(defn quotify\n  [quote author]\n  (str quote "\\n\\n-- " author))\n\n(defn -main\n  [\x26 args]\n  (println\n   (quotify (str "A man who carries a cat by the tail learns "\n                 "something he can learn in no other way.")\n            "Mark Twain")))'],0)),qc=V.b(z([H,"Using other functions from -main",pc],0)),rc=P.a?P.a("Namespaces let you organize your code into logical sections."):P.call(null,"Namespaces let you organize your code into logical sections."),
sc=Y.b(z([";; in src/global_growth/core.clj\n(ns global-growth.core)"],0)),tc=V.b(z([H,"Namespaces and organization",rc,sc],0)),rb=P.a?P.a("Dependencies are code libraries others have written you can reuse in your project."):P.call(null,"Dependencies are code libraries others have written you can reuse in your project."),Xa=L.a?L.a("project.clj"):L.call(null,"project.clj"),sb=L.a?L.a(":dependencies"):L.call(null,":dependencies"),vc=P.k?P.k("Open ",Xa," and look for the ",sb," key."):P.call(null,"Open ",
Xa," and look for the ",sb," key."),wc=Y.b(z([':dependencies [[org.clojure/clojure "1.5.1"]\n               [clj-http "0.9.0"]\n               [cheshire "5.3.1"]]'],0)),xc=V.b(z([H,"Dependencies",rb,vc,wc],0)),yc=Y.b(z([";; in src/global_growth/core.clj\n(ns global-growth.core\n  (:require [clj-http.client :as client]\n            [cheshire.core :as json]))"],0)),zc=V.b(z([H,"Requiring dependencies",yc],0)),Ac=W.b(z([H,"Modifying a project",mc,oc,qc,tc,xc,zc],0)),Bc=Rk.b(z(["collection of world development indicators data",
"provided as JSON documents"],0)),Cc=V.b(z([H,"The World Bank API",Bc],0)),Ya=O.a?O.a("Application Programming Interface"):O.call(null,"Application Programming Interface"),Za=O.a?O.a("web pages for computers"):O.call(null,"web pages for computers"),$a=O.a?O.a("one popular format: JSON"):O.call(null,"one popular format: JSON"),tb=U.d?U.d(Ya,Za,$a):U.call(null,Ya,Za,$a),ub=V.b(z([H,"What is an API?",tb],0)),vb=P.a?P.a("http://api.worldbank.org/countries/all/indicators/EN.POP.DNST?format\x3djson\x26date\x3d2010"):
P.call(null,"http://api.worldbank.org/countries/all/indicators/EN.POP.DNST?format\x3djson\x26date\x3d2010"),wb=V.b(z([H,"API in action",vb],0)),xb=Sk.b(z([Wi,"json",'[\n  {\n    "page": 1,\n    "pages": 6,\n    "per_page": "50",\n    "total": 252\n  },\n  [\n    {\n      "indicator": {\n        "id": "EN.POP.DNST",\n        "value": "Population density (people per sq. km of land area)"\n      },\n      "country": {\n        "id": "1A",\n        "value": "Arab World"\n      },\n      "value": "25.5287276250072",\n      "decimal": "0",\n      "date": "2010"\n    },\n    {\n      "indicator": {\n        "id": "EN.POP.DNST",\n        "value": "Population density (people per sq. km of land area)"\n      },\n      "country": {\n        "id": "S3",\n        "value": "Caribbean small states"\n      },\n      "value": "17.0236186241818",\n      "decimal": "0",\n      "date": "2010"\n    }\n  ]\n]'],
0)),yb=V.b(z([H,"Sample API response",xb],0)),zb=Y.b(z(['(client/get "http://api.worldbank.org/countries/all/indicators/EN.POP.DNST?format\x3djson\x26date\x3d2010")\n\n;; elided and formatted\n;;\x3d\x3e {:orig-content-encoding nil,\n;;    :request-time 109, :status 200,\n;;    :headers {"content-length" "10340",\n;;              "content-type" "application/json;charset\x3dutf-8"},\n;;    :body "[{\\"page\\":1,\\"pages\\":6}]"}'],0)),Dc=V.b(z([H,"Accessing APIs with Clojure",zb],0)),Ec=Y.b(z(['(json/parse-string "[{\\"page\\":1,\\"pages\\":6}]" true)\n;;\x3d\x3e ({:page 1, :pages 6})'],
0)),Fc=V.b(z([H,"Converting JSON",Ec],0)),Ab=L.a?L.a("get-population-density"):L.call(null,"get-population-density"),Bb=P.d?P.d("Write a function called ",Ab," that takes no arguments, and returns Clojure data from the World Bank API on population density."):P.call(null,"Write a function called ",Ab," that takes no arguments, and returns Clojure data from the World Bank API on population density."),ab=L.a?L.a(":body"):L.call(null,":body"),Cb=P.d?P.d("You will need to make the web request, pull the ",
ab," value out of the response, and then parse the JSON."):P.call(null,"You will need to make the web request, pull the ",ab," value out of the response, and then parse the JSON."),Db=Y.b(z(['(get-population-density)\n;;\x3d\x3e ({:page 1, :pages 6, :per_page "50", :total 252}\n;;    [{:indicator {:id "EN.POP.DNST", :value "Population density (people per sq. km of land area)"},\n;;    :country {:id "1A", :value "Arab World"}, :value "25.5287276250072", :decimal "0", :date "2010"},\n;;    ...])'],
0)),Gc=V.b(z([H,"Exercise: Get the results from API call",Bb,Cb,Db],0)),Hc=Y.b(z(['(defn get-api\n  "Returns map representing API response."\n  [path params]\n  (let [url (str "http://api.worldbank.org" path)\n        query-params (merge params {:format "json" :per_page 10000})\n        response (json/parse-string\n                  (:body\n                   (client/get url {:query-params query-params})) true)\n        metadata (first response)\n        results (second response)]\n    {:metadata metadata\n     :results results}))'],
0)),Ic=V.b(z([H,"Getting more information from the API",Hc],0)),Eb=Y.b(z(['(get-api "/countries/all/indicators/EN.POP.DNST" {:date 2010})\n;;\x3d\x3e {:metadata {:page 1, :pages 1, :per_page "10000", :total 252},\n;;    :results [{:indicator {:id "EN.POP.DNST",\n;;    :value "Population density (people per sq. km of land area)"},\n;;    :country {:id "1A", :value "Arab World"}, :value "25.5287276250072",\n;;    :decimal "0", :date "2010"} ...]}'],0)),Fb=V.b(z([H,"get-api",Eb],0)),bb=L.a?L.a("get-country-and-value"):
L.call(null,"get-country-and-value"),cb=L.a?L.a("get-api"):L.call(null,"get-api"),db=L.a?L.a("get-country-and-value"):L.call(null,"get-country-and-value"),Jc=P.ga?P.ga("Write a function ",bb," that can take ","the return value of ",cb," and get the country names ","and values out of that value. ",db," should return a vector of vectors."):P.call(null,"Write a function ",bb," that can take ","the return value of ",cb," and get the country names ","and values out of that value. ",db," should return a vector of vectors."),
Kc=Y.b(z(['(get-country-and-value\n  (get-api "/countries/all/indicators/EN.POP.DNST" {:date 2010}))\n;;\x3d\x3e [["Arab World" "25.5287276250072"]\n;;    ["Caribbean small states" "17.0236186241818"]\n;;    ...]'],0)),Lc=V.b(z([H,"Exercise: extracting the data we want",Jc,Kc],0)),Gb=L.a?L.a("remove-aggregrate-countries"):L.call(null,"remove-aggregrate-countries"),Hb=L.a?L.a("countries"):L.call(null,"countries"),Ib=L.a?L.a("get-indicator-values"):L.call(null,"get-indicator-values"),Mc=P.B?P.B("Uncomment the definitions for ",
Gb,", ",Hb,", and ",Ib,"."):P.call(null,"Uncomment the definitions for ",Gb,", ",Hb,", and ",Ib,"."),Nc=V.b(z([H,"Removing unwanted data",Mc],0)),Jb=Y.b(z(['(defn get-indicator-values\n  "Returns indicator values for a specified year for all countries."\n  [indicator-code year]\n  (let [response (get-api (str "/countries/all/indicators/"\n                               indicator-code)\n                          {:date (str year)})\n        values (get-country-and-value response)]\n    (for [[country value] values\n          :when (and (not (nil? value))\n                     (contains? @countries country))]\n      [country (read-string value)])))'],
0)),Oc=V.b(z([H,"get-indicator-values",Jb],0)),Kb=Y.b(z(['(get-indicator-values "EN.POP.DNST" 2010)'],0)),Lb=P.a?P.a("What do you get?"):P.call(null,"What do you get?"),Mb=V.b(z([H,"Get a list of countries and population density",Kb,Lb],0)),Pc=W.b(z([H,"Your first real program",Cc,ub,wb,yb,Dc,Fc,Gc,Ic,Fb,Lc,Nc,Oc,Mb],0)),Nb=O.a?O.a("Let's make our program print out a list of all countries and their population density."):O.call(null,"Let's make our program print out a list of all countries and their population density."),
eb=L.a?L.a("-main"):L.call(null,"-main"),fb=O.d?O.d("Make sure ",eb," is the last function in your file."):O.call(null,"Make sure ",eb," is the last function in your file."),Ob=U.c?U.c(Nb,fb):U.call(null,Nb,fb),Pb=V.b(z([H,"Updating -main",Ob],0)),gb=L.a?L.a("doseq"):L.call(null,"doseq"),Qb=P.d?P.d("In order to print out all the countries and population densities, you will need a new statement, ",gb,"."):P.call(null,"In order to print out all the countries and population densities, you will need a new statement, ",
gb,"."),hb=L.a?L.a("doseq"):L.call(null,"doseq"),ib=L.a?L.a("for"):L.call(null,"for"),Rb=P.e?P.e(hb," works like ",ib," but executes its body and returns nothing."):P.call(null,hb," works like ",ib," but executes its body and returns nothing."),Sb=Y.b(z(['(doseq [name ["Akeelah" "Bhamini" "Cierra"]]\n  (println name))'],0)),Tb=V.b(z([H,"doseq",Qb,Rb,Sb],0)),Ub=L.a?L.a("doseq"):L.call(null,"doseq"),Vb=L.a?L.a("println"):L.call(null,"println"),Wb=L.a?L.a("-main"):L.call(null,"-main"),Qc=P.B?P.B("Using ",
Ub," and ",Vb,", write a ",Wb," function that prints out all the countries and their population densities from the World Bank API."):P.call(null,"Using ",Ub," and ",Vb,", write a ",Wb," function that prints out all the countries and their population densities from the World Bank API."),Xb=L.a?L.a('(get-indicator-values "EN.POP.DNST" 2010)'):L.call(null,'(get-indicator-values "EN.POP.DNST" 2010)'),Rc=P.d?P.d("Use ",Xb," to get the values you need."):P.call(null,"Use ",Xb," to get the values you need."),
Sc=V.b(z([H,"Exercise: Finish -main",Qc,Rc],0)),Yb=L.a?L.a("-main"):L.call(null,"-main"),Zb=L.a?L.a("sort-by"):L.call(null,"sort-by"),Tc=P.k?P.k("Change your ",Yb," function to only print out the top 10 countries and their population densities. You will need the ",Zb," function to make this work."):P.call(null,"Change your ",Yb," function to only print out the top 10 countries and their population densities. You will need the ",Zb," function to make this work."),$b=V.b(z([H,"Bonus exercise: Only show the top 10 countries",
Tc],0)),Uc=W.b(z([H,"Revisiting -main",Pb,Tb,Sc,$b],0));return Pk.b(z([pj,"mozilla-theme.css",a,xa,Ac,Pc,Uc],0))}())):qk.call(null,pk.c?pk.c(F,yg):pk.call(null,F,yg),ok.c?ok.c(F,function(){var a=Ok.b(z([H,"Module 4"],0)),b=P.a?P.a("Type the following in your terminal:"):P.call(null,"Type the following in your terminal:"),c=Sk.b(z([Wi,"bash","lein new clojurebridge global-growth "],0)),d=V.b(z([H,"Creating a project",b,c],0)),e=Rk.b(z(["manages Clojure projects","tool you run in your terminal","silly name"],
0)),h=V.b(z([H,"Leiningen",e],0)),k=K.a?K.a("project.clj"):K.call(null,"project.clj"),m=K.a?K.a("src/global_growth/core.clj"):K.call(null,"src/global_growth/core.clj"),r=Rk.b(z([".gitignore","doc/intro.md",k,"resources/","README.md",m,"test/global_growth/core_test.clj"],0)),t=V.b(z([H,"Project structure",r],0)),v=Rk.b(z(["configuration file for Leiningen","lists dependencies","contains information about program author, description and more"],0)),y=V.b(z([H,"project.clj",v],0)),I=P.a?P.a("This is where we will be writing much of our code."):
P.call(null,"This is where we will be writing much of our code."),R=P.c?P.c("Clojure programs can be made up of multiple files, but we are ","going to use just this one for now."):P.call(null,"Clojure programs can be made up of multiple files, but we are ","going to use just this one for now."),X=V.b(z([H,"src/global_growth/core.clj",I,R],0)),fa=P.a?P.a("Go to the command line and enter:"):P.call(null,"Go to the command line and enter:"),ha=Sk.b(z([Wi,"bash","cd global_growth\nlein run"],0)),ma=V.b(z([H,
"Try it out",fa,ha],0)),xa=W.b(z([H,"Projects",d,h,t,y,X,ma],0)),ra=L.a?L.a("src/global_growth/core.clj"):L.call(null,"src/global_growth/core.clj"),Ha=P.d?P.d("Open ",ra,"."):P.call(null,"Open ",ra,"."),Aa=L.a?L.a("-main"):L.call(null,"-main"),dc=P.d?P.d("What is in the ",Aa," function?"):P.call(null,"What is in the ",Aa," function?"),mc=V.b(z([H,"What happens when I run my program?",Ha,dc],0)),nc=Rk.b(z(["Just an ordinary function with an odd name","The function called first when you run your program",
"Can call other functions"],0)),oc=V.b(z([H,"The -main function",nc],0)),pc=Y.b(z(['(defn quotify\n  [quote author]\n  (str quote "\\n\\n-- " author))\n\n(defn -main\n  [\x26 args]\n  (println\n   (quotify (str "A man who carries a cat by the tail learns "\n                 "something he can learn in no other way.")\n            "Mark Twain")))'],0)),qc=V.b(z([H,"Using other functions from -main",pc],0)),rc=P.a?P.a("Namespaces let you organize your code into logical sections."):P.call(null,"Namespaces let you organize your code into logical sections."),
sc=Y.b(z([";; in src/global_growth/core.clj\n(ns global-growth.core)"],0)),tc=V.b(z([H,"Namespaces and organization",rc,sc],0)),rb=P.a?P.a("Dependencies are code libraries others have written you can reuse in your project."):P.call(null,"Dependencies are code libraries others have written you can reuse in your project."),Xa=L.a?L.a("project.clj"):L.call(null,"project.clj"),sb=L.a?L.a(":dependencies"):L.call(null,":dependencies"),vc=P.k?P.k("Open ",Xa," and look for the ",sb," key."):P.call(null,"Open ",
Xa," and look for the ",sb," key."),wc=Y.b(z([':dependencies [[org.clojure/clojure "1.5.1"]\n               [clj-http "0.9.0"]\n               [cheshire "5.3.1"]]'],0)),xc=V.b(z([H,"Dependencies",rb,vc,wc],0)),yc=Y.b(z([";; in src/global_growth/core.clj\n(ns global-growth.core\n  (:require [clj-http.client :as client]\n            [cheshire.core :as json]))"],0)),zc=V.b(z([H,"Requiring dependencies",yc],0)),Ac=W.b(z([H,"Modifying a project",mc,oc,qc,tc,xc,zc],0)),Bc=Rk.b(z(["collection of world development indicators data",
"provided as JSON documents"],0)),Cc=V.b(z([H,"The World Bank API",Bc],0)),Ya=O.a?O.a("Application Programming Interface"):O.call(null,"Application Programming Interface"),Za=O.a?O.a("web pages for computers"):O.call(null,"web pages for computers"),$a=O.a?O.a("one popular format: JSON"):O.call(null,"one popular format: JSON"),tb=U.d?U.d(Ya,Za,$a):U.call(null,Ya,Za,$a),ub=V.b(z([H,"What is an API?",tb],0)),vb=P.a?P.a("http://api.worldbank.org/countries/all/indicators/EN.POP.DNST?format\x3djson\x26date\x3d2010"):
P.call(null,"http://api.worldbank.org/countries/all/indicators/EN.POP.DNST?format\x3djson\x26date\x3d2010"),wb=V.b(z([H,"API in action",vb],0)),xb=Sk.b(z([Wi,"json",'[\n  {\n    "page": 1,\n    "pages": 6,\n    "per_page": "50",\n    "total": 252\n  },\n  [\n    {\n      "indicator": {\n        "id": "EN.POP.DNST",\n        "value": "Population density (people per sq. km of land area)"\n      },\n      "country": {\n        "id": "1A",\n        "value": "Arab World"\n      },\n      "value": "25.5287276250072",\n      "decimal": "0",\n      "date": "2010"\n    },\n    {\n      "indicator": {\n        "id": "EN.POP.DNST",\n        "value": "Population density (people per sq. km of land area)"\n      },\n      "country": {\n        "id": "S3",\n        "value": "Caribbean small states"\n      },\n      "value": "17.0236186241818",\n      "decimal": "0",\n      "date": "2010"\n    }\n  ]\n]'],
0)),yb=V.b(z([H,"Sample API response",xb],0)),zb=Y.b(z(['(client/get "http://api.worldbank.org/countries/all/indicators/EN.POP.DNST?format\x3djson\x26date\x3d2010")\n\n;; elided and formatted\n;;\x3d\x3e {:orig-content-encoding nil,\n;;    :request-time 109, :status 200,\n;;    :headers {"content-length" "10340",\n;;              "content-type" "application/json;charset\x3dutf-8"},\n;;    :body "[{\\"page\\":1,\\"pages\\":6}]"}'],0)),Dc=V.b(z([H,"Accessing APIs with Clojure",zb],0)),Ec=Y.b(z(['(json/parse-string "[{\\"page\\":1,\\"pages\\":6}]" true)\n;;\x3d\x3e ({:page 1, :pages 6})'],
0)),Fc=V.b(z([H,"Converting JSON",Ec],0)),Ab=L.a?L.a("get-population-density"):L.call(null,"get-population-density"),Bb=P.d?P.d("Write a function called ",Ab," that takes no arguments, and returns Clojure data from the World Bank API on population density."):P.call(null,"Write a function called ",Ab," that takes no arguments, and returns Clojure data from the World Bank API on population density."),ab=L.a?L.a(":body"):L.call(null,":body"),Cb=P.d?P.d("You will need to make the web request, pull the ",
ab," value out of the response, and then parse the JSON."):P.call(null,"You will need to make the web request, pull the ",ab," value out of the response, and then parse the JSON."),Db=Y.b(z(['(get-population-density)\n;;\x3d\x3e ({:page 1, :pages 6, :per_page "50", :total 252}\n;;    [{:indicator {:id "EN.POP.DNST", :value "Population density (people per sq. km of land area)"},\n;;    :country {:id "1A", :value "Arab World"}, :value "25.5287276250072", :decimal "0", :date "2010"},\n;;    ...])'],
0)),Gc=V.b(z([H,"Exercise: Get the results from API call",Bb,Cb,Db],0)),Hc=Y.b(z(['(defn get-api\n  "Returns map representing API response."\n  [path params]\n  (let [url (str "http://api.worldbank.org" path)\n        query-params (merge params {:format "json" :per_page 10000})\n        response (json/parse-string\n                  (:body\n                   (client/get url {:query-params query-params})) true)\n        metadata (first response)\n        results (second response)]\n    {:metadata metadata\n     :results results}))'],
0)),Ic=V.b(z([H,"Getting more information from the API",Hc],0)),Eb=Y.b(z(['(get-api "/countries/all/indicators/EN.POP.DNST" {:date 2010})\n;;\x3d\x3e {:metadata {:page 1, :pages 1, :per_page "10000", :total 252},\n;;    :results [{:indicator {:id "EN.POP.DNST",\n;;    :value "Population density (people per sq. km of land area)"},\n;;    :country {:id "1A", :value "Arab World"}, :value "25.5287276250072",\n;;    :decimal "0", :date "2010"} ...]}'],0)),Fb=V.b(z([H,"get-api",Eb],0)),bb=L.a?L.a("get-country-and-value"):
L.call(null,"get-country-and-value"),cb=L.a?L.a("get-api"):L.call(null,"get-api"),db=L.a?L.a("get-country-and-value"):L.call(null,"get-country-and-value"),Jc=P.ga?P.ga("Write a function ",bb," that can take ","the return value of ",cb," and get the country names ","and values out of that value. ",db," should return a vector of vectors."):P.call(null,"Write a function ",bb," that can take ","the return value of ",cb," and get the country names ","and values out of that value. ",db," should return a vector of vectors."),
Kc=Y.b(z(['(get-country-and-value\n  (get-api "/countries/all/indicators/EN.POP.DNST" {:date 2010}))\n;;\x3d\x3e [["Arab World" "25.5287276250072"]\n;;    ["Caribbean small states" "17.0236186241818"]\n;;    ...]'],0)),Lc=V.b(z([H,"Exercise: extracting the data we want",Jc,Kc],0)),Gb=L.a?L.a("remove-aggregrate-countries"):L.call(null,"remove-aggregrate-countries"),Hb=L.a?L.a("countries"):L.call(null,"countries"),Ib=L.a?L.a("get-indicator-values"):L.call(null,"get-indicator-values"),Mc=P.B?P.B("Uncomment the definitions for ",
Gb,", ",Hb,", and ",Ib,"."):P.call(null,"Uncomment the definitions for ",Gb,", ",Hb,", and ",Ib,"."),Nc=V.b(z([H,"Removing unwanted data",Mc],0)),Jb=Y.b(z(['(defn get-indicator-values\n  "Returns indicator values for a specified year for all countries."\n  [indicator-code year]\n  (let [response (get-api (str "/countries/all/indicators/"\n                               indicator-code)\n                          {:date (str year)})\n        values (get-country-and-value response)]\n    (for [[country value] values\n          :when (and (not (nil? value))\n                     (contains? @countries country))]\n      [country (read-string value)])))'],
0)),Oc=V.b(z([H,"get-indicator-values",Jb],0)),Kb=Y.b(z(['(get-indicator-values "EN.POP.DNST" 2010)'],0)),Lb=P.a?P.a("What do you get?"):P.call(null,"What do you get?"),Mb=V.b(z([H,"Get a list of countries and population density",Kb,Lb],0)),Pc=W.b(z([H,"Your first real program",Cc,ub,wb,yb,Dc,Fc,Gc,Ic,Fb,Lc,Nc,Oc,Mb],0)),Nb=O.a?O.a("Let's make our program print out a list of all countries and their population density."):O.call(null,"Let's make our program print out a list of all countries and their population density."),
eb=L.a?L.a("-main"):L.call(null,"-main"),fb=O.d?O.d("Make sure ",eb," is the last function in your file."):O.call(null,"Make sure ",eb," is the last function in your file."),Ob=U.c?U.c(Nb,fb):U.call(null,Nb,fb),Pb=V.b(z([H,"Updating -main",Ob],0)),gb=L.a?L.a("doseq"):L.call(null,"doseq"),Qb=P.d?P.d("In order to print out all the countries and population densities, you will need a new statement, ",gb,"."):P.call(null,"In order to print out all the countries and population densities, you will need a new statement, ",
gb,"."),hb=L.a?L.a("doseq"):L.call(null,"doseq"),ib=L.a?L.a("for"):L.call(null,"for"),Rb=P.e?P.e(hb," works like ",ib," but executes its body and returns nothing."):P.call(null,hb," works like ",ib," but executes its body and returns nothing."),Sb=Y.b(z(['(doseq [name ["Akeelah" "Bhamini" "Cierra"]]\n  (println name))'],0)),Tb=V.b(z([H,"doseq",Qb,Rb,Sb],0)),Ub=L.a?L.a("doseq"):L.call(null,"doseq"),Vb=L.a?L.a("println"):L.call(null,"println"),Wb=L.a?L.a("-main"):L.call(null,"-main"),Qc=P.B?P.B("Using ",
Ub," and ",Vb,", write a ",Wb," function that prints out all the countries and their population densities from the World Bank API."):P.call(null,"Using ",Ub," and ",Vb,", write a ",Wb," function that prints out all the countries and their population densities from the World Bank API."),Xb=L.a?L.a('(get-indicator-values "EN.POP.DNST" 2010)'):L.call(null,'(get-indicator-values "EN.POP.DNST" 2010)'),Rc=P.d?P.d("Use ",Xb," to get the values you need."):P.call(null,"Use ",Xb," to get the values you need."),
Sc=V.b(z([H,"Exercise: Finish -main",Qc,Rc],0)),Yb=L.a?L.a("-main"):L.call(null,"-main"),Zb=L.a?L.a("sort-by"):L.call(null,"sort-by"),Tc=P.k?P.k("Change your ",Yb," function to only print out the top 10 countries and their population densities. You will need the ",Zb," function to make this work."):P.call(null,"Change your ",Yb," function to only print out the top 10 countries and their population densities. You will need the ",Zb," function to make this work."),$b=V.b(z([H,"Bonus exercise: Only show the top 10 countries",
Tc],0)),Uc=W.b(z([H,"Revisiting -main",Pb,Tb,Sc,$b],0));return Pk.b(z([pj,"mozilla-theme.css",a,xa,Ac,Pc,Uc],0))}()):ok.call(null,F,function(){var a=Ok.b(z([H,"Module 4"],0)),b=P.a?P.a("Type the following in your terminal:"):P.call(null,"Type the following in your terminal:"),c=Sk.b(z([Wi,"bash","lein new clojurebridge global-growth "],0)),d=V.b(z([H,"Creating a project",b,c],0)),e=Rk.b(z(["manages Clojure projects","tool you run in your terminal","silly name"],0)),h=V.b(z([H,"Leiningen",e],0)),k=
K.a?K.a("project.clj"):K.call(null,"project.clj"),m=K.a?K.a("src/global_growth/core.clj"):K.call(null,"src/global_growth/core.clj"),r=Rk.b(z([".gitignore","doc/intro.md",k,"resources/","README.md",m,"test/global_growth/core_test.clj"],0)),t=V.b(z([H,"Project structure",r],0)),v=Rk.b(z(["configuration file for Leiningen","lists dependencies","contains information about program author, description and more"],0)),y=V.b(z([H,"project.clj",v],0)),I=P.a?P.a("This is where we will be writing much of our code."):
P.call(null,"This is where we will be writing much of our code."),R=P.c?P.c("Clojure programs can be made up of multiple files, but we are ","going to use just this one for now."):P.call(null,"Clojure programs can be made up of multiple files, but we are ","going to use just this one for now."),X=V.b(z([H,"src/global_growth/core.clj",I,R],0)),fa=P.a?P.a("Go to the command line and enter:"):P.call(null,"Go to the command line and enter:"),ha=Sk.b(z([Wi,"bash","cd global_growth\nlein run"],0)),ma=V.b(z([H,
"Try it out",fa,ha],0)),xa=W.b(z([H,"Projects",d,h,t,y,X,ma],0)),ra=L.a?L.a("src/global_growth/core.clj"):L.call(null,"src/global_growth/core.clj"),Ha=P.d?P.d("Open ",ra,"."):P.call(null,"Open ",ra,"."),Aa=L.a?L.a("-main"):L.call(null,"-main"),dc=P.d?P.d("What is in the ",Aa," function?"):P.call(null,"What is in the ",Aa," function?"),mc=V.b(z([H,"What happens when I run my program?",Ha,dc],0)),nc=Rk.b(z(["Just an ordinary function with an odd name","The function called first when you run your program",
"Can call other functions"],0)),oc=V.b(z([H,"The -main function",nc],0)),pc=Y.b(z(['(defn quotify\n  [quote author]\n  (str quote "\\n\\n-- " author))\n\n(defn -main\n  [\x26 args]\n  (println\n   (quotify (str "A man who carries a cat by the tail learns "\n                 "something he can learn in no other way.")\n            "Mark Twain")))'],0)),qc=V.b(z([H,"Using other functions from -main",pc],0)),rc=P.a?P.a("Namespaces let you organize your code into logical sections."):P.call(null,"Namespaces let you organize your code into logical sections."),
sc=Y.b(z([";; in src/global_growth/core.clj\n(ns global-growth.core)"],0)),tc=V.b(z([H,"Namespaces and organization",rc,sc],0)),rb=P.a?P.a("Dependencies are code libraries others have written you can reuse in your project."):P.call(null,"Dependencies are code libraries others have written you can reuse in your project."),Xa=L.a?L.a("project.clj"):L.call(null,"project.clj"),sb=L.a?L.a(":dependencies"):L.call(null,":dependencies"),vc=P.k?P.k("Open ",Xa," and look for the ",sb," key."):P.call(null,"Open ",
Xa," and look for the ",sb," key."),wc=Y.b(z([':dependencies [[org.clojure/clojure "1.5.1"]\n               [clj-http "0.9.0"]\n               [cheshire "5.3.1"]]'],0)),xc=V.b(z([H,"Dependencies",rb,vc,wc],0)),yc=Y.b(z([";; in src/global_growth/core.clj\n(ns global-growth.core\n  (:require [clj-http.client :as client]\n            [cheshire.core :as json]))"],0)),zc=V.b(z([H,"Requiring dependencies",yc],0)),Ac=W.b(z([H,"Modifying a project",mc,oc,qc,tc,xc,zc],0)),Bc=Rk.b(z(["collection of world development indicators data",
"provided as JSON documents"],0)),Cc=V.b(z([H,"The World Bank API",Bc],0)),Ya=O.a?O.a("Application Programming Interface"):O.call(null,"Application Programming Interface"),Za=O.a?O.a("web pages for computers"):O.call(null,"web pages for computers"),$a=O.a?O.a("one popular format: JSON"):O.call(null,"one popular format: JSON"),tb=U.d?U.d(Ya,Za,$a):U.call(null,Ya,Za,$a),ub=V.b(z([H,"What is an API?",tb],0)),vb=P.a?P.a("http://api.worldbank.org/countries/all/indicators/EN.POP.DNST?format\x3djson\x26date\x3d2010"):
P.call(null,"http://api.worldbank.org/countries/all/indicators/EN.POP.DNST?format\x3djson\x26date\x3d2010"),wb=V.b(z([H,"API in action",vb],0)),xb=Sk.b(z([Wi,"json",'[\n  {\n    "page": 1,\n    "pages": 6,\n    "per_page": "50",\n    "total": 252\n  },\n  [\n    {\n      "indicator": {\n        "id": "EN.POP.DNST",\n        "value": "Population density (people per sq. km of land area)"\n      },\n      "country": {\n        "id": "1A",\n        "value": "Arab World"\n      },\n      "value": "25.5287276250072",\n      "decimal": "0",\n      "date": "2010"\n    },\n    {\n      "indicator": {\n        "id": "EN.POP.DNST",\n        "value": "Population density (people per sq. km of land area)"\n      },\n      "country": {\n        "id": "S3",\n        "value": "Caribbean small states"\n      },\n      "value": "17.0236186241818",\n      "decimal": "0",\n      "date": "2010"\n    }\n  ]\n]'],
0)),yb=V.b(z([H,"Sample API response",xb],0)),zb=Y.b(z(['(client/get "http://api.worldbank.org/countries/all/indicators/EN.POP.DNST?format\x3djson\x26date\x3d2010")\n\n;; elided and formatted\n;;\x3d\x3e {:orig-content-encoding nil,\n;;    :request-time 109, :status 200,\n;;    :headers {"content-length" "10340",\n;;              "content-type" "application/json;charset\x3dutf-8"},\n;;    :body "[{\\"page\\":1,\\"pages\\":6}]"}'],0)),Dc=V.b(z([H,"Accessing APIs with Clojure",zb],0)),Ec=Y.b(z(['(json/parse-string "[{\\"page\\":1,\\"pages\\":6}]" true)\n;;\x3d\x3e ({:page 1, :pages 6})'],
0)),Fc=V.b(z([H,"Converting JSON",Ec],0)),Ab=L.a?L.a("get-population-density"):L.call(null,"get-population-density"),Bb=P.d?P.d("Write a function called ",Ab," that takes no arguments, and returns Clojure data from the World Bank API on population density."):P.call(null,"Write a function called ",Ab," that takes no arguments, and returns Clojure data from the World Bank API on population density."),ab=L.a?L.a(":body"):L.call(null,":body"),Cb=P.d?P.d("You will need to make the web request, pull the ",
ab," value out of the response, and then parse the JSON."):P.call(null,"You will need to make the web request, pull the ",ab," value out of the response, and then parse the JSON."),Db=Y.b(z(['(get-population-density)\n;;\x3d\x3e ({:page 1, :pages 6, :per_page "50", :total 252}\n;;    [{:indicator {:id "EN.POP.DNST", :value "Population density (people per sq. km of land area)"},\n;;    :country {:id "1A", :value "Arab World"}, :value "25.5287276250072", :decimal "0", :date "2010"},\n;;    ...])'],
0)),Gc=V.b(z([H,"Exercise: Get the results from API call",Bb,Cb,Db],0)),Hc=Y.b(z(['(defn get-api\n  "Returns map representing API response."\n  [path params]\n  (let [url (str "http://api.worldbank.org" path)\n        query-params (merge params {:format "json" :per_page 10000})\n        response (json/parse-string\n                  (:body\n                   (client/get url {:query-params query-params})) true)\n        metadata (first response)\n        results (second response)]\n    {:metadata metadata\n     :results results}))'],
0)),Ic=V.b(z([H,"Getting more information from the API",Hc],0)),Eb=Y.b(z(['(get-api "/countries/all/indicators/EN.POP.DNST" {:date 2010})\n;;\x3d\x3e {:metadata {:page 1, :pages 1, :per_page "10000", :total 252},\n;;    :results [{:indicator {:id "EN.POP.DNST",\n;;    :value "Population density (people per sq. km of land area)"},\n;;    :country {:id "1A", :value "Arab World"}, :value "25.5287276250072",\n;;    :decimal "0", :date "2010"} ...]}'],0)),Fb=V.b(z([H,"get-api",Eb],0)),bb=L.a?L.a("get-country-and-value"):
L.call(null,"get-country-and-value"),cb=L.a?L.a("get-api"):L.call(null,"get-api"),db=L.a?L.a("get-country-and-value"):L.call(null,"get-country-and-value"),Jc=P.ga?P.ga("Write a function ",bb," that can take ","the return value of ",cb," and get the country names ","and values out of that value. ",db," should return a vector of vectors."):P.call(null,"Write a function ",bb," that can take ","the return value of ",cb," and get the country names ","and values out of that value. ",db," should return a vector of vectors."),
Kc=Y.b(z(['(get-country-and-value\n  (get-api "/countries/all/indicators/EN.POP.DNST" {:date 2010}))\n;;\x3d\x3e [["Arab World" "25.5287276250072"]\n;;    ["Caribbean small states" "17.0236186241818"]\n;;    ...]'],0)),Lc=V.b(z([H,"Exercise: extracting the data we want",Jc,Kc],0)),Gb=L.a?L.a("remove-aggregrate-countries"):L.call(null,"remove-aggregrate-countries"),Hb=L.a?L.a("countries"):L.call(null,"countries"),Ib=L.a?L.a("get-indicator-values"):L.call(null,"get-indicator-values"),Mc=P.B?P.B("Uncomment the definitions for ",
Gb,", ",Hb,", and ",Ib,"."):P.call(null,"Uncomment the definitions for ",Gb,", ",Hb,", and ",Ib,"."),Nc=V.b(z([H,"Removing unwanted data",Mc],0)),Jb=Y.b(z(['(defn get-indicator-values\n  "Returns indicator values for a specified year for all countries."\n  [indicator-code year]\n  (let [response (get-api (str "/countries/all/indicators/"\n                               indicator-code)\n                          {:date (str year)})\n        values (get-country-and-value response)]\n    (for [[country value] values\n          :when (and (not (nil? value))\n                     (contains? @countries country))]\n      [country (read-string value)])))'],
0)),Oc=V.b(z([H,"get-indicator-values",Jb],0)),Kb=Y.b(z(['(get-indicator-values "EN.POP.DNST" 2010)'],0)),Lb=P.a?P.a("What do you get?"):P.call(null,"What do you get?"),Mb=V.b(z([H,"Get a list of countries and population density",Kb,Lb],0)),Pc=W.b(z([H,"Your first real program",Cc,ub,wb,yb,Dc,Fc,Gc,Ic,Fb,Lc,Nc,Oc,Mb],0)),Nb=O.a?O.a("Let's make our program print out a list of all countries and their population density."):O.call(null,"Let's make our program print out a list of all countries and their population density."),
eb=L.a?L.a("-main"):L.call(null,"-main"),fb=O.d?O.d("Make sure ",eb," is the last function in your file."):O.call(null,"Make sure ",eb," is the last function in your file."),Ob=U.c?U.c(Nb,fb):U.call(null,Nb,fb),Pb=V.b(z([H,"Updating -main",Ob],0)),gb=L.a?L.a("doseq"):L.call(null,"doseq"),Qb=P.d?P.d("In order to print out all the countries and population densities, you will need a new statement, ",gb,"."):P.call(null,"In order to print out all the countries and population densities, you will need a new statement, ",
gb,"."),hb=L.a?L.a("doseq"):L.call(null,"doseq"),ib=L.a?L.a("for"):L.call(null,"for"),Rb=P.e?P.e(hb," works like ",ib," but executes its body and returns nothing."):P.call(null,hb," works like ",ib," but executes its body and returns nothing."),Sb=Y.b(z(['(doseq [name ["Akeelah" "Bhamini" "Cierra"]]\n  (println name))'],0)),Tb=V.b(z([H,"doseq",Qb,Rb,Sb],0)),Ub=L.a?L.a("doseq"):L.call(null,"doseq"),Vb=L.a?L.a("println"):L.call(null,"println"),Wb=L.a?L.a("-main"):L.call(null,"-main"),Qc=P.B?P.B("Using ",
Ub," and ",Vb,", write a ",Wb," function that prints out all the countries and their population densities from the World Bank API."):P.call(null,"Using ",Ub," and ",Vb,", write a ",Wb," function that prints out all the countries and their population densities from the World Bank API."),Xb=L.a?L.a('(get-indicator-values "EN.POP.DNST" 2010)'):L.call(null,'(get-indicator-values "EN.POP.DNST" 2010)'),Rc=P.d?P.d("Use ",Xb," to get the values you need."):P.call(null,"Use ",Xb," to get the values you need."),
Sc=V.b(z([H,"Exercise: Finish -main",Qc,Rc],0)),Yb=L.a?L.a("-main"):L.call(null,"-main"),Zb=L.a?L.a("sort-by"):L.call(null,"sort-by"),Tc=P.k?P.k("Change your ",Yb," function to only print out the top 10 countries and their population densities. You will need the ",Zb," function to make this work."):P.call(null,"Change your ",Yb," function to only print out the top 10 countries and their population densities. You will need the ",Zb," function to make this work."),$b=V.b(z([H,"Bonus exercise: Only show the top 10 countries",
Tc],0)),Uc=W.b(z([H,"Revisiting -main",Pb,Tb,Sc,$b],0));return Pk.b(z([pj,"mozilla-theme.css",a,xa,Ac,Pc,Uc],0))}()));return Fk()});var al;
ea("tailrecursion.hoplon.app_pages._module3_DOT_html.hoploninit",function(){Cd.c(window.location.search,"?dev")&&(ei.b(z(["Autoreloading"],0)),Zk());al=function(){function a(a){var d=null;0<arguments.length&&(d=z(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){var b=fk(a);a=C.d(b,0,null);b=C.d(b,1,null);return Sk.b(z([$d.d(a,Wi,"clojure"),b],0))}a.j=0;a.g=function(a){a=s(a);return b(a)};a.b=b;return a}();qk.c?qk.c(pk.c?pk.c(F,yg):pk.call(null,F,yg),ok.c?ok.c(F,function(){var a=
Ok.b(z([H,"Module 3"],0)),b=P.a?P.a("If the user's input is valid, then save their data; otherwise, show an error message."):P.call(null,"If the user's input is valid, then save their data; otherwise, show an error message."),c=al.b(z(['(if (valid? data)\n  (save! data)\n  (error "Your data was invalid"))'],0)),b=V.b(z([H,"Example: validating data",b,c],0)),c=L.a?L.a("if"):L.call(null,"if"),c=M.a?M.a(c):M.call(null,c),d=al.b(z(["(if conditional-expression\n  expression-to-evaluate-when-true\n  expression-to-evaluate-when-false)"],
0)),c=V.b(z([H,c,d],0)),d=L.a?L.a("if"):L.call(null,"if"),d=M.c?M.c(d," examples"):M.call(null,d," examples"),e=al.b(z(['(if (\x3e 3 1)\n  "3 is greater than 1"\n  "3 is not greater than 1")\n;;\x3d\x3e "3 is greater than 1"\n\n(if (\x3e 1 3)\n  "1 is greater than 3"\n  "1 is not greater than 3")\n;;\x3d\x3e "1 is not greater than 3"'],0)),d=V.b(z([H,d,e],0)),e=L.a?L.a("false"):L.call(null,"false"),h=L.a?L.a("nil"):L.call(null,"nil"),e=P.k?P.k("Everything except",e," or ",h,"."):P.call(null,"Everything except",
e," or ",h,"."),e=V.b(z([H,"What is truth?",e],0)),h=al.b(z(['(if "anything other than nil or false is considered true"\n  "A string is considered true"\n  "A string is not considered true")\n;;\x3d\x3e "A string is considered true"\n\n(if nil\n  "nil is considered true"\n  "nil is not considered true")\n;;\x3d\x3e "nil is not considered true"\n\n(if (get {:a 1} :b)\n  "expressions which evaluate to nil are considered true"\n  "expressions which evaluate to nil are not considered true")\n;;\x3d\x3e "expressions which evaluate to nil are not considered true"'],
0)),h=V.b(z([H,"Truth examples",h],0)),k=L.a?L.a("format-name"):L.call(null,"format-name"),m=L.a?L.a(":first"):L.call(null,":first"),r=L.a?L.a(":last"):L.call(null,":last"),t=L.a?L.a(":middle"):L.call(null,":middle"),k=P.S?P.S("Write a function ",k," that takes a map ","representing a user, with keys ",m,", ",r,", and possibly ",t,". It should return their name as a string, like so:"):P.call(null,"Write a function ",k," that takes a map ","representing a user, with keys ",m,", ",r,", and possibly ",
t,". It should return their name as a string, like so:"),m=al.b(z(['(format-name {:first "Margaret" :last "Atwood"})\n;;\x3d\x3e "Margaret Atwood"\n\n(format-name {:first "Ursula" :last "Le Guin" :middle "K."})\n;;\x3d\x3e "Ursula K. Le Guin"'],0)),k=V.b(z([H,"Exercise: more name formatting",k,m],0)),m=L.a?L.a("format-name"):L.call(null,"format-name"),r=L.a?L.a("order"):L.call(null,"order"),t=L.a?L.a("order"):L.call(null,"order"),v=L.a?L.a(":last"):L.call(null,":last"),m=P.S?P.S("Change ",m," to take a second argument, ",
r,". If ",t," equals ",v,', then the format should be "Last, First Middle"; otherwise, ','it should be "First Middle Last."'):P.call(null,"Change ",m," to take a second argument, ",r,". If ",t," equals ",v,', then the format should be "Last, First Middle"; otherwise, ','it should be "First Middle Last."'),m=V.b(z([H,"BONUS: Flexible name formatting",m],0)),b=W.b(z([H,"Flow control",b,c,d,e,h,k,m],0)),c=L.a?L.a("and"):L.call(null,"and"),d=L.a?L.a("or"):L.call(null,"or"),e=L.a?L.a("not"):L.call(null,
"not"),c=M.k?M.k(c,", ",d,", and ",e):M.call(null,c,", ",d,", and ",e),d=S.a?S.a("x"):S.call(null,"x"),e=S.a?S.a("y"):S.call(null,"y"),h=S.a?S.a("(and x y)"):S.call(null,"(and x y)"),k=S.a?S.a("(or x y)"):S.call(null,"(or x y)"),m=S.a?S.a("(not x)"):S.call(null,"(not x)"),r=S.a?S.a("(not y)"):S.call(null,"(not y)"),d=T.n?T.n(d,e,h,k,m,r):T.call(null,d,e,h,k,m,r),e=Q.a?Q.a("false"):Q.call(null,"false"),h=Q.a?Q.a("false"):Q.call(null,"false"),k=Q.a?Q.a("false"):Q.call(null,"false"),m=Q.a?Q.a("false"):
Q.call(null,"false"),r=Q.a?Q.a("true"):Q.call(null,"true"),t=Q.a?Q.a("true"):Q.call(null,"true"),e=T.n?T.n(e,h,k,m,r,t):T.call(null,e,h,k,m,r,t),h=Q.a?Q.a("true"):Q.call(null,"true"),k=Q.a?Q.a("false"):Q.call(null,"false"),m=Q.a?Q.a("false"):Q.call(null,"false"),r=Q.a?Q.a("true"):Q.call(null,"true"),t=Q.a?Q.a("false"):Q.call(null,"false"),v=Q.a?Q.a("true"):Q.call(null,"true"),h=T.n?T.n(h,k,m,r,t,v):T.call(null,h,k,m,r,t,v),k=Q.a?Q.a("true"):Q.call(null,"true"),m=Q.a?Q.a("true"):Q.call(null,"true"),
r=Q.a?Q.a("true"):Q.call(null,"true"),t=Q.a?Q.a("true"):Q.call(null,"true"),v=Q.a?Q.a("false"):Q.call(null,"false"),y=Q.a?Q.a("false"):Q.call(null,"false"),k=T.n?T.n(k,m,r,t,v,y):T.call(null,k,m,r,t,v,y),m=Q.a?Q.a("false"):Q.call(null,"false"),r=Q.a?Q.a("true"):Q.call(null,"true"),t=Q.a?Q.a("false"):Q.call(null,"false"),v=Q.a?Q.a("true"):Q.call(null,"true"),y=Q.a?Q.a("true"):Q.call(null,"true"),I=Q.a?Q.a("false"):Q.call(null,"false"),m=T.n?T.n(m,r,t,v,y,I):T.call(null,m,r,t,v,y,I),d=Bk.k?Bk.k(d,e,
h,k,m):Bk.call(null,d,e,h,k,m),c=V.b(z([H,c,d],0)),c=W.b(z([H,"Boolean logic",c],0)),d=L.a?L.a("for"):L.call(null,"for"),d=M.a?M.a(d):M.call(null,d),e=L.a?L.a("for"):L.call(null,"for"),e=P.c?P.c(e," iterates over the sequences it is given and returns a new sequence."):P.call(null,e," iterates over the sequences it is given and returns a new sequence."),h=al.b(z(["(for [x [1 2 3]]\n  (* x x))\n;;\x3d\x3e (1 4 9)"],0)),d=V.b(z([H,d,e,h],0)),e=L.a?L.a("for"):L.call(null,"for"),e=M.c?M.c("Combining sequences with ",
e):M.call(null,"Combining sequences with ",e),h=L.a?L.a("for"):L.call(null,"for"),h=P.c?P.c(h," can take multiple sequences. In that case, it iterates over their combinations."):P.call(null,h," can take multiple sequences. In that case, it iterates over their combinations."),k=al.b(z(['(for [x [1 2 3]\n      y ["a" "b" "c"]]\n  (str x y))\n;;\x3d\x3e ("1a" "1b" "1c" "2a" "2b" "2c" "3a" "3b" "3c")'],0)),e=V.b(z([H,e,h,k],0)),h=L.a?L.a("for"):L.call(null,"for"),h=M.c?M.c(h," and comparison functions"):
M.call(null,h," and comparison functions"),k=al.b(z(['(for [x [1 2 3]\n      y ["a" "b" "c"]\n      :when (\x3e x 2)]\n  (str x y))\n;;\x3d\x3e ("3a" "3b" "3c")\n\n(for [x [1 2 3]\n      y ["a" "b" "c"]\n      :when (and (\x3e x 2) (not\x3d y "a"))]\n  (str x y))\n;;\x3d\x3e ("3b" "3c")'],0)),h=V.b(z([H,h,k],0)),d=W.b(z([H,"Sequence comprehensions",d,e,h],0));return Pk.b(z([pj,"mozilla-theme.css",a,b,c,d],0))}()):ok.call(null,F,function(){var a=Ok.b(z([H,"Module 3"],0)),b=P.a?P.a("If the user's input is valid, then save their data; otherwise, show an error message."):
P.call(null,"If the user's input is valid, then save their data; otherwise, show an error message."),c=al.b(z(['(if (valid? data)\n  (save! data)\n  (error "Your data was invalid"))'],0)),b=V.b(z([H,"Example: validating data",b,c],0)),c=L.a?L.a("if"):L.call(null,"if"),c=M.a?M.a(c):M.call(null,c),d=al.b(z(["(if conditional-expression\n  expression-to-evaluate-when-true\n  expression-to-evaluate-when-false)"],0)),c=V.b(z([H,c,d],0)),d=L.a?L.a("if"):L.call(null,"if"),d=M.c?M.c(d," examples"):M.call(null,
d," examples"),e=al.b(z(['(if (\x3e 3 1)\n  "3 is greater than 1"\n  "3 is not greater than 1")\n;;\x3d\x3e "3 is greater than 1"\n\n(if (\x3e 1 3)\n  "1 is greater than 3"\n  "1 is not greater than 3")\n;;\x3d\x3e "1 is not greater than 3"'],0)),d=V.b(z([H,d,e],0)),e=L.a?L.a("false"):L.call(null,"false"),h=L.a?L.a("nil"):L.call(null,"nil"),e=P.k?P.k("Everything except",e," or ",h,"."):P.call(null,"Everything except",e," or ",h,"."),e=V.b(z([H,"What is truth?",e],0)),h=al.b(z(['(if "anything other than nil or false is considered true"\n  "A string is considered true"\n  "A string is not considered true")\n;;\x3d\x3e "A string is considered true"\n\n(if nil\n  "nil is considered true"\n  "nil is not considered true")\n;;\x3d\x3e "nil is not considered true"\n\n(if (get {:a 1} :b)\n  "expressions which evaluate to nil are considered true"\n  "expressions which evaluate to nil are not considered true")\n;;\x3d\x3e "expressions which evaluate to nil are not considered true"'],
0)),h=V.b(z([H,"Truth examples",h],0)),k=L.a?L.a("format-name"):L.call(null,"format-name"),m=L.a?L.a(":first"):L.call(null,":first"),r=L.a?L.a(":last"):L.call(null,":last"),t=L.a?L.a(":middle"):L.call(null,":middle"),k=P.S?P.S("Write a function ",k," that takes a map ","representing a user, with keys ",m,", ",r,", and possibly ",t,". It should return their name as a string, like so:"):P.call(null,"Write a function ",k," that takes a map ","representing a user, with keys ",m,", ",r,", and possibly ",
t,". It should return their name as a string, like so:"),m=al.b(z(['(format-name {:first "Margaret" :last "Atwood"})\n;;\x3d\x3e "Margaret Atwood"\n\n(format-name {:first "Ursula" :last "Le Guin" :middle "K."})\n;;\x3d\x3e "Ursula K. Le Guin"'],0)),k=V.b(z([H,"Exercise: more name formatting",k,m],0)),m=L.a?L.a("format-name"):L.call(null,"format-name"),r=L.a?L.a("order"):L.call(null,"order"),t=L.a?L.a("order"):L.call(null,"order"),v=L.a?L.a(":last"):L.call(null,":last"),m=P.S?P.S("Change ",m," to take a second argument, ",
r,". If ",t," equals ",v,', then the format should be "Last, First Middle"; otherwise, ','it should be "First Middle Last."'):P.call(null,"Change ",m," to take a second argument, ",r,". If ",t," equals ",v,', then the format should be "Last, First Middle"; otherwise, ','it should be "First Middle Last."'),m=V.b(z([H,"BONUS: Flexible name formatting",m],0)),b=W.b(z([H,"Flow control",b,c,d,e,h,k,m],0)),c=L.a?L.a("and"):L.call(null,"and"),d=L.a?L.a("or"):L.call(null,"or"),e=L.a?L.a("not"):L.call(null,
"not"),c=M.k?M.k(c,", ",d,", and ",e):M.call(null,c,", ",d,", and ",e),d=S.a?S.a("x"):S.call(null,"x"),e=S.a?S.a("y"):S.call(null,"y"),h=S.a?S.a("(and x y)"):S.call(null,"(and x y)"),k=S.a?S.a("(or x y)"):S.call(null,"(or x y)"),m=S.a?S.a("(not x)"):S.call(null,"(not x)"),r=S.a?S.a("(not y)"):S.call(null,"(not y)"),d=T.n?T.n(d,e,h,k,m,r):T.call(null,d,e,h,k,m,r),e=Q.a?Q.a("false"):Q.call(null,"false"),h=Q.a?Q.a("false"):Q.call(null,"false"),k=Q.a?Q.a("false"):Q.call(null,"false"),m=Q.a?Q.a("false"):
Q.call(null,"false"),r=Q.a?Q.a("true"):Q.call(null,"true"),t=Q.a?Q.a("true"):Q.call(null,"true"),e=T.n?T.n(e,h,k,m,r,t):T.call(null,e,h,k,m,r,t),h=Q.a?Q.a("true"):Q.call(null,"true"),k=Q.a?Q.a("false"):Q.call(null,"false"),m=Q.a?Q.a("false"):Q.call(null,"false"),r=Q.a?Q.a("true"):Q.call(null,"true"),t=Q.a?Q.a("false"):Q.call(null,"false"),v=Q.a?Q.a("true"):Q.call(null,"true"),h=T.n?T.n(h,k,m,r,t,v):T.call(null,h,k,m,r,t,v),k=Q.a?Q.a("true"):Q.call(null,"true"),m=Q.a?Q.a("true"):Q.call(null,"true"),
r=Q.a?Q.a("true"):Q.call(null,"true"),t=Q.a?Q.a("true"):Q.call(null,"true"),v=Q.a?Q.a("false"):Q.call(null,"false"),y=Q.a?Q.a("false"):Q.call(null,"false"),k=T.n?T.n(k,m,r,t,v,y):T.call(null,k,m,r,t,v,y),m=Q.a?Q.a("false"):Q.call(null,"false"),r=Q.a?Q.a("true"):Q.call(null,"true"),t=Q.a?Q.a("false"):Q.call(null,"false"),v=Q.a?Q.a("true"):Q.call(null,"true"),y=Q.a?Q.a("true"):Q.call(null,"true"),I=Q.a?Q.a("false"):Q.call(null,"false"),m=T.n?T.n(m,r,t,v,y,I):T.call(null,m,r,t,v,y,I),d=Bk.k?Bk.k(d,e,
h,k,m):Bk.call(null,d,e,h,k,m),c=V.b(z([H,c,d],0)),c=W.b(z([H,"Boolean logic",c],0)),d=L.a?L.a("for"):L.call(null,"for"),d=M.a?M.a(d):M.call(null,d),e=L.a?L.a("for"):L.call(null,"for"),e=P.c?P.c(e," iterates over the sequences it is given and returns a new sequence."):P.call(null,e," iterates over the sequences it is given and returns a new sequence."),h=al.b(z(["(for [x [1 2 3]]\n  (* x x))\n;;\x3d\x3e (1 4 9)"],0)),d=V.b(z([H,d,e,h],0)),e=L.a?L.a("for"):L.call(null,"for"),e=M.c?M.c("Combining sequences with ",
e):M.call(null,"Combining sequences with ",e),h=L.a?L.a("for"):L.call(null,"for"),h=P.c?P.c(h," can take multiple sequences. In that case, it iterates over their combinations."):P.call(null,h," can take multiple sequences. In that case, it iterates over their combinations."),k=al.b(z(['(for [x [1 2 3]\n      y ["a" "b" "c"]]\n  (str x y))\n;;\x3d\x3e ("1a" "1b" "1c" "2a" "2b" "2c" "3a" "3b" "3c")'],0)),e=V.b(z([H,e,h,k],0)),h=L.a?L.a("for"):L.call(null,"for"),h=M.c?M.c(h," and comparison functions"):
M.call(null,h," and comparison functions"),k=al.b(z(['(for [x [1 2 3]\n      y ["a" "b" "c"]\n      :when (\x3e x 2)]\n  (str x y))\n;;\x3d\x3e ("3a" "3b" "3c")\n\n(for [x [1 2 3]\n      y ["a" "b" "c"]\n      :when (and (\x3e x 2) (not\x3d y "a"))]\n  (str x y))\n;;\x3d\x3e ("3b" "3c")'],0)),h=V.b(z([H,h,k],0)),d=W.b(z([H,"Sequence comprehensions",d,e,h],0));return Pk.b(z([pj,"mozilla-theme.css",a,b,c,d],0))}())):qk.call(null,pk.c?pk.c(F,yg):pk.call(null,F,yg),ok.c?ok.c(F,function(){var a=Ok.b(z([H,
"Module 3"],0)),b=P.a?P.a("If the user's input is valid, then save their data; otherwise, show an error message."):P.call(null,"If the user's input is valid, then save their data; otherwise, show an error message."),c=al.b(z(['(if (valid? data)\n  (save! data)\n  (error "Your data was invalid"))'],0)),b=V.b(z([H,"Example: validating data",b,c],0)),c=L.a?L.a("if"):L.call(null,"if"),c=M.a?M.a(c):M.call(null,c),d=al.b(z(["(if conditional-expression\n  expression-to-evaluate-when-true\n  expression-to-evaluate-when-false)"],
0)),c=V.b(z([H,c,d],0)),d=L.a?L.a("if"):L.call(null,"if"),d=M.c?M.c(d," examples"):M.call(null,d," examples"),e=al.b(z(['(if (\x3e 3 1)\n  "3 is greater than 1"\n  "3 is not greater than 1")\n;;\x3d\x3e "3 is greater than 1"\n\n(if (\x3e 1 3)\n  "1 is greater than 3"\n  "1 is not greater than 3")\n;;\x3d\x3e "1 is not greater than 3"'],0)),d=V.b(z([H,d,e],0)),e=L.a?L.a("false"):L.call(null,"false"),h=L.a?L.a("nil"):L.call(null,"nil"),e=P.k?P.k("Everything except",e," or ",h,"."):P.call(null,"Everything except",
e," or ",h,"."),e=V.b(z([H,"What is truth?",e],0)),h=al.b(z(['(if "anything other than nil or false is considered true"\n  "A string is considered true"\n  "A string is not considered true")\n;;\x3d\x3e "A string is considered true"\n\n(if nil\n  "nil is considered true"\n  "nil is not considered true")\n;;\x3d\x3e "nil is not considered true"\n\n(if (get {:a 1} :b)\n  "expressions which evaluate to nil are considered true"\n  "expressions which evaluate to nil are not considered true")\n;;\x3d\x3e "expressions which evaluate to nil are not considered true"'],
0)),h=V.b(z([H,"Truth examples",h],0)),k=L.a?L.a("format-name"):L.call(null,"format-name"),m=L.a?L.a(":first"):L.call(null,":first"),r=L.a?L.a(":last"):L.call(null,":last"),t=L.a?L.a(":middle"):L.call(null,":middle"),k=P.S?P.S("Write a function ",k," that takes a map ","representing a user, with keys ",m,", ",r,", and possibly ",t,". It should return their name as a string, like so:"):P.call(null,"Write a function ",k," that takes a map ","representing a user, with keys ",m,", ",r,", and possibly ",
t,". It should return their name as a string, like so:"),m=al.b(z(['(format-name {:first "Margaret" :last "Atwood"})\n;;\x3d\x3e "Margaret Atwood"\n\n(format-name {:first "Ursula" :last "Le Guin" :middle "K."})\n;;\x3d\x3e "Ursula K. Le Guin"'],0)),k=V.b(z([H,"Exercise: more name formatting",k,m],0)),m=L.a?L.a("format-name"):L.call(null,"format-name"),r=L.a?L.a("order"):L.call(null,"order"),t=L.a?L.a("order"):L.call(null,"order"),v=L.a?L.a(":last"):L.call(null,":last"),m=P.S?P.S("Change ",m," to take a second argument, ",
r,". If ",t," equals ",v,', then the format should be "Last, First Middle"; otherwise, ','it should be "First Middle Last."'):P.call(null,"Change ",m," to take a second argument, ",r,". If ",t," equals ",v,', then the format should be "Last, First Middle"; otherwise, ','it should be "First Middle Last."'),m=V.b(z([H,"BONUS: Flexible name formatting",m],0)),b=W.b(z([H,"Flow control",b,c,d,e,h,k,m],0)),c=L.a?L.a("and"):L.call(null,"and"),d=L.a?L.a("or"):L.call(null,"or"),e=L.a?L.a("not"):L.call(null,
"not"),c=M.k?M.k(c,", ",d,", and ",e):M.call(null,c,", ",d,", and ",e),d=S.a?S.a("x"):S.call(null,"x"),e=S.a?S.a("y"):S.call(null,"y"),h=S.a?S.a("(and x y)"):S.call(null,"(and x y)"),k=S.a?S.a("(or x y)"):S.call(null,"(or x y)"),m=S.a?S.a("(not x)"):S.call(null,"(not x)"),r=S.a?S.a("(not y)"):S.call(null,"(not y)"),d=T.n?T.n(d,e,h,k,m,r):T.call(null,d,e,h,k,m,r),e=Q.a?Q.a("false"):Q.call(null,"false"),h=Q.a?Q.a("false"):Q.call(null,"false"),k=Q.a?Q.a("false"):Q.call(null,"false"),m=Q.a?Q.a("false"):
Q.call(null,"false"),r=Q.a?Q.a("true"):Q.call(null,"true"),t=Q.a?Q.a("true"):Q.call(null,"true"),e=T.n?T.n(e,h,k,m,r,t):T.call(null,e,h,k,m,r,t),h=Q.a?Q.a("true"):Q.call(null,"true"),k=Q.a?Q.a("false"):Q.call(null,"false"),m=Q.a?Q.a("false"):Q.call(null,"false"),r=Q.a?Q.a("true"):Q.call(null,"true"),t=Q.a?Q.a("false"):Q.call(null,"false"),v=Q.a?Q.a("true"):Q.call(null,"true"),h=T.n?T.n(h,k,m,r,t,v):T.call(null,h,k,m,r,t,v),k=Q.a?Q.a("true"):Q.call(null,"true"),m=Q.a?Q.a("true"):Q.call(null,"true"),
r=Q.a?Q.a("true"):Q.call(null,"true"),t=Q.a?Q.a("true"):Q.call(null,"true"),v=Q.a?Q.a("false"):Q.call(null,"false"),y=Q.a?Q.a("false"):Q.call(null,"false"),k=T.n?T.n(k,m,r,t,v,y):T.call(null,k,m,r,t,v,y),m=Q.a?Q.a("false"):Q.call(null,"false"),r=Q.a?Q.a("true"):Q.call(null,"true"),t=Q.a?Q.a("false"):Q.call(null,"false"),v=Q.a?Q.a("true"):Q.call(null,"true"),y=Q.a?Q.a("true"):Q.call(null,"true"),I=Q.a?Q.a("false"):Q.call(null,"false"),m=T.n?T.n(m,r,t,v,y,I):T.call(null,m,r,t,v,y,I),d=Bk.k?Bk.k(d,e,
h,k,m):Bk.call(null,d,e,h,k,m),c=V.b(z([H,c,d],0)),c=W.b(z([H,"Boolean logic",c],0)),d=L.a?L.a("for"):L.call(null,"for"),d=M.a?M.a(d):M.call(null,d),e=L.a?L.a("for"):L.call(null,"for"),e=P.c?P.c(e," iterates over the sequences it is given and returns a new sequence."):P.call(null,e," iterates over the sequences it is given and returns a new sequence."),h=al.b(z(["(for [x [1 2 3]]\n  (* x x))\n;;\x3d\x3e (1 4 9)"],0)),d=V.b(z([H,d,e,h],0)),e=L.a?L.a("for"):L.call(null,"for"),e=M.c?M.c("Combining sequences with ",
e):M.call(null,"Combining sequences with ",e),h=L.a?L.a("for"):L.call(null,"for"),h=P.c?P.c(h," can take multiple sequences. In that case, it iterates over their combinations."):P.call(null,h," can take multiple sequences. In that case, it iterates over their combinations."),k=al.b(z(['(for [x [1 2 3]\n      y ["a" "b" "c"]]\n  (str x y))\n;;\x3d\x3e ("1a" "1b" "1c" "2a" "2b" "2c" "3a" "3b" "3c")'],0)),e=V.b(z([H,e,h,k],0)),h=L.a?L.a("for"):L.call(null,"for"),h=M.c?M.c(h," and comparison functions"):
M.call(null,h," and comparison functions"),k=al.b(z(['(for [x [1 2 3]\n      y ["a" "b" "c"]\n      :when (\x3e x 2)]\n  (str x y))\n;;\x3d\x3e ("3a" "3b" "3c")\n\n(for [x [1 2 3]\n      y ["a" "b" "c"]\n      :when (and (\x3e x 2) (not\x3d y "a"))]\n  (str x y))\n;;\x3d\x3e ("3b" "3c")'],0)),h=V.b(z([H,h,k],0)),d=W.b(z([H,"Sequence comprehensions",d,e,h],0));return Pk.b(z([pj,"mozilla-theme.css",a,b,c,d],0))}()):ok.call(null,F,function(){var a=Ok.b(z([H,"Module 3"],0)),b=P.a?P.a("If the user's input is valid, then save their data; otherwise, show an error message."):
P.call(null,"If the user's input is valid, then save their data; otherwise, show an error message."),c=al.b(z(['(if (valid? data)\n  (save! data)\n  (error "Your data was invalid"))'],0)),b=V.b(z([H,"Example: validating data",b,c],0)),c=L.a?L.a("if"):L.call(null,"if"),c=M.a?M.a(c):M.call(null,c),d=al.b(z(["(if conditional-expression\n  expression-to-evaluate-when-true\n  expression-to-evaluate-when-false)"],0)),c=V.b(z([H,c,d],0)),d=L.a?L.a("if"):L.call(null,"if"),d=M.c?M.c(d," examples"):M.call(null,
d," examples"),e=al.b(z(['(if (\x3e 3 1)\n  "3 is greater than 1"\n  "3 is not greater than 1")\n;;\x3d\x3e "3 is greater than 1"\n\n(if (\x3e 1 3)\n  "1 is greater than 3"\n  "1 is not greater than 3")\n;;\x3d\x3e "1 is not greater than 3"'],0)),d=V.b(z([H,d,e],0)),e=L.a?L.a("false"):L.call(null,"false"),h=L.a?L.a("nil"):L.call(null,"nil"),e=P.k?P.k("Everything except",e," or ",h,"."):P.call(null,"Everything except",e," or ",h,"."),e=V.b(z([H,"What is truth?",e],0)),h=al.b(z(['(if "anything other than nil or false is considered true"\n  "A string is considered true"\n  "A string is not considered true")\n;;\x3d\x3e "A string is considered true"\n\n(if nil\n  "nil is considered true"\n  "nil is not considered true")\n;;\x3d\x3e "nil is not considered true"\n\n(if (get {:a 1} :b)\n  "expressions which evaluate to nil are considered true"\n  "expressions which evaluate to nil are not considered true")\n;;\x3d\x3e "expressions which evaluate to nil are not considered true"'],
0)),h=V.b(z([H,"Truth examples",h],0)),k=L.a?L.a("format-name"):L.call(null,"format-name"),m=L.a?L.a(":first"):L.call(null,":first"),r=L.a?L.a(":last"):L.call(null,":last"),t=L.a?L.a(":middle"):L.call(null,":middle"),k=P.S?P.S("Write a function ",k," that takes a map ","representing a user, with keys ",m,", ",r,", and possibly ",t,". It should return their name as a string, like so:"):P.call(null,"Write a function ",k," that takes a map ","representing a user, with keys ",m,", ",r,", and possibly ",
t,". It should return their name as a string, like so:"),m=al.b(z(['(format-name {:first "Margaret" :last "Atwood"})\n;;\x3d\x3e "Margaret Atwood"\n\n(format-name {:first "Ursula" :last "Le Guin" :middle "K."})\n;;\x3d\x3e "Ursula K. Le Guin"'],0)),k=V.b(z([H,"Exercise: more name formatting",k,m],0)),m=L.a?L.a("format-name"):L.call(null,"format-name"),r=L.a?L.a("order"):L.call(null,"order"),t=L.a?L.a("order"):L.call(null,"order"),v=L.a?L.a(":last"):L.call(null,":last"),m=P.S?P.S("Change ",m," to take a second argument, ",
r,". If ",t," equals ",v,', then the format should be "Last, First Middle"; otherwise, ','it should be "First Middle Last."'):P.call(null,"Change ",m," to take a second argument, ",r,". If ",t," equals ",v,', then the format should be "Last, First Middle"; otherwise, ','it should be "First Middle Last."'),m=V.b(z([H,"BONUS: Flexible name formatting",m],0)),b=W.b(z([H,"Flow control",b,c,d,e,h,k,m],0)),c=L.a?L.a("and"):L.call(null,"and"),d=L.a?L.a("or"):L.call(null,"or"),e=L.a?L.a("not"):L.call(null,
"not"),c=M.k?M.k(c,", ",d,", and ",e):M.call(null,c,", ",d,", and ",e),d=S.a?S.a("x"):S.call(null,"x"),e=S.a?S.a("y"):S.call(null,"y"),h=S.a?S.a("(and x y)"):S.call(null,"(and x y)"),k=S.a?S.a("(or x y)"):S.call(null,"(or x y)"),m=S.a?S.a("(not x)"):S.call(null,"(not x)"),r=S.a?S.a("(not y)"):S.call(null,"(not y)"),d=T.n?T.n(d,e,h,k,m,r):T.call(null,d,e,h,k,m,r),e=Q.a?Q.a("false"):Q.call(null,"false"),h=Q.a?Q.a("false"):Q.call(null,"false"),k=Q.a?Q.a("false"):Q.call(null,"false"),m=Q.a?Q.a("false"):
Q.call(null,"false"),r=Q.a?Q.a("true"):Q.call(null,"true"),t=Q.a?Q.a("true"):Q.call(null,"true"),e=T.n?T.n(e,h,k,m,r,t):T.call(null,e,h,k,m,r,t),h=Q.a?Q.a("true"):Q.call(null,"true"),k=Q.a?Q.a("false"):Q.call(null,"false"),m=Q.a?Q.a("false"):Q.call(null,"false"),r=Q.a?Q.a("true"):Q.call(null,"true"),t=Q.a?Q.a("false"):Q.call(null,"false"),v=Q.a?Q.a("true"):Q.call(null,"true"),h=T.n?T.n(h,k,m,r,t,v):T.call(null,h,k,m,r,t,v),k=Q.a?Q.a("true"):Q.call(null,"true"),m=Q.a?Q.a("true"):Q.call(null,"true"),
r=Q.a?Q.a("true"):Q.call(null,"true"),t=Q.a?Q.a("true"):Q.call(null,"true"),v=Q.a?Q.a("false"):Q.call(null,"false"),y=Q.a?Q.a("false"):Q.call(null,"false"),k=T.n?T.n(k,m,r,t,v,y):T.call(null,k,m,r,t,v,y),m=Q.a?Q.a("false"):Q.call(null,"false"),r=Q.a?Q.a("true"):Q.call(null,"true"),t=Q.a?Q.a("false"):Q.call(null,"false"),v=Q.a?Q.a("true"):Q.call(null,"true"),y=Q.a?Q.a("true"):Q.call(null,"true"),I=Q.a?Q.a("false"):Q.call(null,"false"),m=T.n?T.n(m,r,t,v,y,I):T.call(null,m,r,t,v,y,I),d=Bk.k?Bk.k(d,e,
h,k,m):Bk.call(null,d,e,h,k,m),c=V.b(z([H,c,d],0)),c=W.b(z([H,"Boolean logic",c],0)),d=L.a?L.a("for"):L.call(null,"for"),d=M.a?M.a(d):M.call(null,d),e=L.a?L.a("for"):L.call(null,"for"),e=P.c?P.c(e," iterates over the sequences it is given and returns a new sequence."):P.call(null,e," iterates over the sequences it is given and returns a new sequence."),h=al.b(z(["(for [x [1 2 3]]\n  (* x x))\n;;\x3d\x3e (1 4 9)"],0)),d=V.b(z([H,d,e,h],0)),e=L.a?L.a("for"):L.call(null,"for"),e=M.c?M.c("Combining sequences with ",
e):M.call(null,"Combining sequences with ",e),h=L.a?L.a("for"):L.call(null,"for"),h=P.c?P.c(h," can take multiple sequences. In that case, it iterates over their combinations."):P.call(null,h," can take multiple sequences. In that case, it iterates over their combinations."),k=al.b(z(['(for [x [1 2 3]\n      y ["a" "b" "c"]]\n  (str x y))\n;;\x3d\x3e ("1a" "1b" "1c" "2a" "2b" "2c" "3a" "3b" "3c")'],0)),e=V.b(z([H,e,h,k],0)),h=L.a?L.a("for"):L.call(null,"for"),h=M.c?M.c(h," and comparison functions"):
M.call(null,h," and comparison functions"),k=al.b(z(['(for [x [1 2 3]\n      y ["a" "b" "c"]\n      :when (\x3e x 2)]\n  (str x y))\n;;\x3d\x3e ("3a" "3b" "3c")\n\n(for [x [1 2 3]\n      y ["a" "b" "c"]\n      :when (and (\x3e x 2) (not\x3d y "a"))]\n  (str x y))\n;;\x3d\x3e ("3b" "3c")'],0)),h=V.b(z([H,h,k],0)),d=W.b(z([H,"Sequence comprehensions",d,e,h],0));return Pk.b(z([pj,"mozilla-theme.css",a,b,c,d],0))}()));return Fk()});var bl,Z;
ea("tailrecursion.hoplon.app_pages._module2_DOT_html.hoploninit",function(){Cd.c(window.location.search,"?dev")&&(ei.b(z(["Autoreloading"],0)),Zk());bl=function(){function a(a){var d=null;0<arguments.length&&(d=z(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){a=Vf.c(L,a);return Yf(1,ag.c($f.a(", "),a))}a.j=0;a.g=function(a){a=s(a);return b(a)};a.b=b;return a}();Z=function(){function a(a){var d=null;0<arguments.length&&(d=z(Array.prototype.slice.call(arguments,0),0));
return b.call(this,d)}function b(a){var b=fk(a);a=C.d(b,0,null);b=C.d(b,1,null);return Sk.b(z([$d.d(a,Wi,"clojure"),b],0))}a.j=0;a.g=function(a){a=s(a);return b(a)};a.b=b;return a}();qk.c?qk.c(pk.c?pk.c(F,yg):pk.call(null,F,yg),ok.c?ok.c(F,function(){var a=Ok.b(z([H,"Module 2"],0)),b=O.a?O.a("Vectors"):O.call(null,"Vectors"),c=O.a?O.a("Maps"):O.call(null,"Maps"),d=O.a?O.a("Lists"):O.call(null,"Lists"),e=O.a?O.a("Sets"):O.call(null,"Sets"),h=O.a?O.a("Sequences"):O.call(null,"Sequences"),k=U.k?U.k(b,
c,d,e,h):U.call(null,b,c,d,e,h),m=V.b(z([H,"Data structures",k],0)),r=N.e?N.e(G,"img/vector.png",Ri,"vector"):N.call(null,G,"img/vector.png",Ri,"vector"),t=V.b(z([H,"Vectors",r],0)),v=Z.b(z(['[1 2 3 4 5]\n["a" 1 2 "b"]\n[]'],0)),y=V.b(z([H,"Vectors",v],0)),I=Z.b(z(["(vector? [:a :b :c])\n;;\x3d\x3e true\n\n(vector :a :b :c)\n;;\x3d\x3e [:a :b :c]\n\n(conj [:a :b] :c)\n;;\x3d\x3e [:a :b :c]"],0)),R=V.b(z([H,"Vector functions",I],0)),X=Z.b(z(["(count [:a :b :c])\n;;\x3d\x3e 3\n\n(nth [:a :b :c] 1)\n;;\x3d\x3e :b\n\n(first [:a :b :c])\n;;\x3d\x3e :a"],
0)),fa=V.b(z([H,"Vector functions",X],0)),ha=L.a?L.a("nth"):L.call(null,"nth"),ma=P.d?P.d("Make a vector of all the places you've ever lived. Then use the ",ha," function to get the current place you live from the vector."):P.call(null,"Make a vector of all the places you've ever lived. Then use the ",ha," function to get the current place you live from the vector."),xa=V.b(z([H,"Exercise: Make a vector",ma],0)),ra=N.e?N.e(G,"img/map.png",Ri,"map"):N.call(null,G,"img/map.png",Ri,"map"),Ha=V.b(z([H,
"Maps",ra],0)),Aa=Z.b(z(['{:first "Sally", :last "Brown", :occupation "programmer"}\n{:a 1, :b "two"}\n{}'],0)),dc=V.b(z([H,"Maps",Aa],0)),mc=Z.b(z(['(map? {:first "Sally" :last "Brown"})\n;;\x3d\x3e true\n\n(get {:first "Sally" :last "Brown"} :first)\n;;\x3d\x3e "Sally"\n\n(get {:first "Sally"} :last :MISS)\n;;\x3d\x3e :MISS'],0)),nc=V.b(z([H,"Map functions",mc],0)),oc=Z.b(z(['(assoc {:first "Sally"} :last "Brown")\n;;\x3d\x3e {:first "Sally", :last "Brown"}\n\n(dissoc {:first "Sally" :last "Brown"} :last)\n;;\x3d\x3e {:first "Sally"}\n\n(merge {:first "Sally"} {:last "Brown"})\n;;\x3d\x3e {:first "Sally", :last "Brown"}\n\n(count {:first "Sally" :last "Brown"})\n;;\x3d\x3e 2'],
0)),pc=V.b(z([H,"More map functions",oc],0)),qc=Z.b(z(['(keys {:first "Sally" :last "Brown"})\n;;\x3d\x3e (:first :last)\n\n(vals {:first "Sally" :last "Brown"})\n;;\x3d\x3e ("Sally" "Brown")\n\n(into {} [[1 2] [3 4]])\n;;\x3d\x3e {1 2, 3 4}'],0)),rc=V.b(z([H,"Even more map functions",qc],0)),sc=Z.b(z(['(:first {:first "Sally" :last "Brown"})\n;;\x3d\x3e "Sally"\n\n(:last {:first "Sally"})\n;;\x3d\x3e nil\n\n(:last {:first "Sally"} :MISS)\n;;\x3d\x3e :MISS'],0)),tc=V.b(z([H,"Maps and keywords",sc],
0)),rb=L.a?L.a("assoc"):L.call(null,"assoc"),Xa=L.a?L.a("merge"):L.call(null,"merge"),sb=P.n?P.n("Make a map representing yourself. Make sure it contains your first"," name and last name. Then, add your hometown to the map using ",rb," or ",Xa,"."):P.call(null,"Make a map representing yourself. Make sure it contains your first"," name and last name. Then, add your hometown to the map using ",rb," or ",Xa,"."),vc=V.b(z([H,"Exercise: Modeling yourself",sb],0)),wc=Qk.b(z(["Lists"],0)),xc=N.c?N.c(G,"img/list.png"):
N.call(null,G,"img/list.png"),yc=Qk.b(z(["Sets"],0)),zc=N.c?N.c(G,"img/set.png"):N.call(null,G,"img/set.png"),Ac=V.b(z([H,"Other data structures",wc,xc,yc,zc],0)),Bc=Z.b(z([';; Lists\n(list 1 2 3)\n(list "Sally" "Brown" :programmer)\n\n;; Sets\n#{"red" "green" "blue" "yellow"}\n#{98 67 82 12 77}'],0)),Cc=V.b(z([H,"Other data structures",Bc],0)),Ya=sk.a?sk.a("abstraction"):sk.call(null,"abstraction"),Za=O.c?O.c("Sequences are an ",Ya):O.call(null,"Sequences are an ",Ya),$a=O.a?O.a("All the data structures are sequences"):
O.call(null,"All the data structures are sequences"),tb=O.a?O.a("Many functions work on all sequences"):O.call(null,"Many functions work on all sequences"),ub=P.a?P.a("Other things that are sequences"):P.call(null,"Other things that are sequences"),vb=O.a?O.a("lines in a file"):O.call(null,"lines in a file"),wb=O.a?O.a("files in a directory"):O.call(null,"files in a directory"),xb=O.a?O.a("records in a database"):O.call(null,"records in a database"),yb=U.d?U.d(vb,wb,xb):U.call(null,vb,wb,xb),zb=O.c?
O.c(ub,yb):O.call(null,ub,yb),Dc=U.e?U.e(Za,$a,tb,zb):U.call(null,Za,$a,tb,zb),Ec=V.b(z([H,"Sequences",Dc],0)),Fc=Z.b(z(['[{:name "Mercury"}\n {:name "Venus"}\n {:name "Earth" :moons ["The Moon"]}\n {:name "Mars" :moons ["Phobos" "Deimos"]}\n {:name "Jupiter"\n  :moons ["Ganymede" "Callisto" "Io" "Europa"]}]'],0)),Ab=V.b(z([H,"Collections of collections",Fc],0)),Bb=O.a?O.a("Take the map from the last exercise -- the one about you."):O.call(null,"Take the map from the last exercise -- the one about you."),
ab=O.c?O.c("Find two or three classmates. Ask their name and hometown. "," Make a vector of maps with their information."):O.call(null,"Find two or three classmates. Ask their name and hometown. "," Make a vector of maps with their information."),Cb=L.a?L.a("conj"):L.call(null,"conj"),Db=O.d?O.d("Then, add your information to their information using ",Cb,"."):O.call(null,"Then, add your information to their information using ",Cb,"."),Gc=wk.d?wk.d(Bb,ab,Db):wk.call(null,Bb,ab,Db),Hc=V.b(z([H,"Exercise: Modeling your classmates",
Gc],0)),Ic=W.b(z([H,"Data Structures",m,t,y,R,fa,xa,Ha,dc,nc,pc,rc,tc,vc,Ac,Cc,Ec,Ab,Hc],0)),Eb=bl.b(z(["count","conj","first"],0)),Fb=O.a?O.a(Eb):O.call(null,Eb),bb=bl.b(z(["+","-","*","/"],0)),cb=O.a?O.a(bb):O.call(null,bb),db=O.a?O.a("A piece of code that takes values and returns a value"):O.call(null,"A piece of code that takes values and returns a value"),Jc=U.d?U.d(Fb,cb,db):U.call(null,Fb,cb,db),Kc=V.b(z([H,"What are functions?",Jc],0)),Lc=Z.b(z(['(defn triple\n  "Given a number, return 3 times that number."\n  [x]\n  (+ x x x))\n\n(triple 2)    ;\x3d\x3e 6\n(triple 3/2)  ;\x3d\x3e 9/2\n(triple 30.3) ;\x3d\x3e 90.9'],
0)),Gb=V.b(z([H,"An example function",Lc],0)),Hb=Z.b(z(['(defn ; specifies that we are defining a function\n  triple ; the name of this function\n  \n  ;; documentation, optional\n  "Given a number, return 3 times that number."\n  \n  [x] ; list of arguments\n\n  ;; body of function\n  (+ x x x))'],0)),Ib=V.b(z([H,"An example function",Hb],0)),Mc=Z.b(z(["(defn average\n  [x y] ; Functions can take multiple arguments.\n  (/ (+ x y) 2))\n\n(average 2 3) ;\x3d\x3e 5/2"],0)),Nc=V.b(z([H,"A function with multiple arguments.",
Mc],0)),Jb=L.a?L.a("str"):L.call(null,"str"),Oc=P.e?P.e("The ",Jb," function can take any number of arguments, and it ","concatenates them together to make a string."):P.call(null,"The ",Jb," function can take any number of arguments, and it ","concatenates them together to make a string."),Kb=L.a?L.a("format-name"):L.call(null,"format-name"),Lb=L.a?L.a("first-name"):L.call(null,"first-name"),Mb=L.a?L.a("last-name"):L.call(null,"last-name"),Pc=P.fa?P.fa("Write a function called ",Kb," that takes two arguments, ",
Lb," and ",Mb,". This function should output the name ","like so: Last, First."):P.call(null,"Write a function called ",Kb," that takes two arguments, ",Lb," and ",Mb,". This function should output the name ","like so: Last, First."),Nb=V.b(z([H,"Exercise: make a function to format names",Oc,Pc],0)),eb=O.a?O.a("Functions are named like any other value"):O.call(null,"Functions are named like any other value"),fb=L.a?L.a("?"):L.call(null,"?"),Ob=P.c?P.c("Predicate functions usually end in ",fb):P.call(null,
"Predicate functions usually end in ",fb),Pb=L.a?L.a("zero?"):L.call(null,"zero?"),gb=O.a?O.a(Pb):O.call(null,Pb),Qb=L.a?L.a("vector?"):L.call(null,"vector?"),hb=O.a?O.a(Qb):O.call(null,Qb),ib=L.a?L.a("empty?"):L.call(null,"empty?"),Rb=O.a?O.a(ib):O.call(null,ib),Sb=U.d?U.d(gb,hb,Rb):U.call(null,gb,hb,Rb),Tb=O.c?O.c(Ob,Sb):O.call(null,Ob,Sb),Ub=U.c?U.c(eb,Tb):U.call(null,eb,Tb),Vb=V.b(z([H,"Naming functions",Ub],0)),Wb=W.b(z([H,"Functions",Kc,Gb,Ib,Nc,Nb,Vb],0)),Qc=Z.b(z(["(\x3d 1 2)    ;\x3d\x3e false\n(\x3e 4 3)    ;\x3d\x3e true\n(\x3e\x3d 4 5)   ;\x3d\x3e false\n(\x3c -1 1)   ;\x3d\x3e true\n(\x3c\x3d -1 -2) ;\x3d\x3e false"],
0)),Xb=V.b(z([H,"Comparison functions",Qc],0)),Rc=Z.b(z(["(defn vegetarian?\n  [person]\n  (\x3d :vegetarian (get person :dietary-restrictions)))"],0)),Sc=V.b(z([H,"Using comparison functions",Rc],0)),Yb=Z.b(z(['(str "Chocolate" ", " "strawberry" ", and " "vanilla")\n;;\x3d\x3e "Chocolate, strawberry, and vanilla"'],0)),Zb=V.b(z([H,"String functions",Yb],0)),Tc=Rf.c(O,L),$b=Vf.c(Tc,new E(null,3,5,zg,["assoc","dissoc","merge"],null)),Uc=U.a?U.a($b):U.call(null,$b),we=V.b(z([H,"Map functions",Uc],0)),
xe=Rf.c(O,L),md=Vf.c(xe,new E(null,5,5,zg,["count","conj","first","rest","get"],null)),ye=U.a?U.a(md):U.call(null,md),ze=V.b(z([H,"Sequence functions",ye],0)),Ae=W.b(z([H,"Function library",Xb,Sc,Zb,we,ze],0)),nd=L.a?L.a("map"):L.call(null,"map"),Be=M.a?M.a(nd):M.call(null,nd),Ce=Z.b(z(["(defn triple\n  [x]\n  (+ x x x))\n\n(map triple [1 2 3]) ;\x3d\x3e [3 6 9]"],0)),De=V.b(z([H,Be,Ce],0)),od=L.a?L.a("reduce"):L.call(null,"reduce"),Ee=M.a?M.a(od):M.call(null,od),Fe=Z.b(z(["(defn add\n  [x y]\n  (+ x y))\n\n(reduce add [1 2 3]) ;\x3d\x3e 6"],
0)),Ge=V.b(z([H,Ee,Fe],0)),pd=L.a?L.a("reduce"):L.call(null,"reduce"),He=M.c?M.c(pd," in action"):M.call(null,pd," in action"),Ie=Z.b(z(['(defn join-with-space\n  [string1 string2]\n  (str string1 " " string2))\n\n(reduce join-with-space\n        ["i" "like" "peanut" "butter" "and" "jelly"])\n;;\x3d\x3e "i like peanut butter and jelly"'],0)),Je=V.b(z([H,He,Ie],0)),qd=L.a?L.a("reduce"):L.call(null,"reduce"),Ke=M.c?M.c(qd," in action"):M.call(null,qd," in action"),Le=Z.b(z(['(reduce join-with-space\n        ["i" "like" "peanut" "butter" "and" "jelly"])\n;;\x3d\x3e "i like peanut butter and jelly"\n\n(join-with-space "i" "like")\n(join-with-space "i like" "peanut")\n(join-with-space "i like peanut" "butter")\n(join-with-space "i like peanut butter" "and")\n(join-with-space "i like peanut butter and" "jelly")'],
0)),Me=V.b(z([H,Ke,Le],0)),rd=L.a?L.a("sort-by"):L.call(null,"sort-by"),Ne=M.a?M.a(rd):M.call(null,rd),Oe=Z.b(z(["(sort-by val \x3e {:amy 3, :renee 5, :isabella 4})\n;;\x3d\x3e ([:renee 5] [:isabella 4] [:amy 3])"],0)),Pe=V.b(z([H,Ne,Oe],0)),Qe=Z.b(z(['(map (fn [x] (+ x x x)) [1 2 3]) ;\x3d\x3e [3 6 9]\n\n(reduce (fn [x y] (+ x y)) [1 2 3]) ;\x3d\x3e 6\n\n(reduce\n  (fn [s1 s2] (str s1 " " s2))\n  ["i" "like" "peanut" "butter" "and" "jelly"])\n  ;\x3d\x3e "i like peanut butter and jelly"'],0)),Re=
V.b(z([H,"Anonymous functions",Qe],0)),sd=L.a?L.a("average"):L.call(null,"average"),Se=P.e?P.e("Create a function called ",sd," that takes a vector of ","numbers and returns the average of those numbers."):P.call(null,"Create a function called ",sd," that takes a vector of ","numbers and returns the average of those numbers."),td=L.a?L.a("reduce"):L.call(null,"reduce"),ud=L.a?L.a("count"):L.call(null,"count"),Te=P.k?P.k("Hint: you will need to use ",td," and ",ud,"."):P.call(null,"Hint: you will need to use ",
td," and ",ud,"."),Ue=V.b(z([H,"Exercise: Find the average",Se,Te],0)),Ve=L.a?L.a("get-names"):L.call(null,"get-names"),We=Qk.b(z(["Create a function called ",Ve," that takes a ","vector of maps of people and returns a vector of their names."],0)),Xe=Z.b(z(['(get-names [{:first "Margaret" :last "Atwood"}\n            {:first "Doris" :last "Lessing"}\n            {:first "Ursula" :last "Le Guin"}\n            {:first "Alice" :last "Munro"}])\n\n;;\x3d\x3e ["Margaret Atwood" "Doris Lessing"\n;;    "Ursula Le Guin" "Alice Munro"]'],
0)),Ye=V.b(z([H,"Exercise: Get the names of people",We,Xe],0)),vd=L.a?L.a("let"):L.call(null,"let"),Ze=M.a?M.a(vd):M.call(null,vd),$e=Z.b(z(['(defn spread\n  "Given a collection of numbers, return the difference between the largest and smallest number."\n  [numbers]\n    (let [largest (reduce max numbers)\n          smallest (reduce min numbers)]\n      (- largest smallest)))\n\n(spread [10 7 3 -3 8]) ;\x3d\x3e 13'],0)),af=V.b(z([H,Ze,$e],0)),wd=L.a?L.a("average"):L.call(null,"average"),xd=L.a?L.a("let"):
L.call(null,"let"),bf=P.n?P.n("Go back to the ",wd," function you created before and ","use ",xd," to make it easier to read."):P.call(null,"Go back to the ",wd," function you created before and ","use ",xd," to make it easier to read."),cf=V.b(z([H,"Exercise: Rewrite average",bf],0)),df=W.b(z([H,"Functions that take other functions",De,Ge,Je,Me,Pe,Re,Ue,Ye,af,cf],0));return Pk.b(z([pj,"mozilla-theme.css",a,Ic,Wb,Ae,df],0))}()):ok.call(null,F,function(){var a=Ok.b(z([H,"Module 2"],0)),b=O.a?O.a("Vectors"):
O.call(null,"Vectors"),c=O.a?O.a("Maps"):O.call(null,"Maps"),d=O.a?O.a("Lists"):O.call(null,"Lists"),e=O.a?O.a("Sets"):O.call(null,"Sets"),h=O.a?O.a("Sequences"):O.call(null,"Sequences"),k=U.k?U.k(b,c,d,e,h):U.call(null,b,c,d,e,h),m=V.b(z([H,"Data structures",k],0)),r=N.e?N.e(G,"img/vector.png",Ri,"vector"):N.call(null,G,"img/vector.png",Ri,"vector"),t=V.b(z([H,"Vectors",r],0)),v=Z.b(z(['[1 2 3 4 5]\n["a" 1 2 "b"]\n[]'],0)),y=V.b(z([H,"Vectors",v],0)),I=Z.b(z(["(vector? [:a :b :c])\n;;\x3d\x3e true\n\n(vector :a :b :c)\n;;\x3d\x3e [:a :b :c]\n\n(conj [:a :b] :c)\n;;\x3d\x3e [:a :b :c]"],
0)),R=V.b(z([H,"Vector functions",I],0)),X=Z.b(z(["(count [:a :b :c])\n;;\x3d\x3e 3\n\n(nth [:a :b :c] 1)\n;;\x3d\x3e :b\n\n(first [:a :b :c])\n;;\x3d\x3e :a"],0)),fa=V.b(z([H,"Vector functions",X],0)),ha=L.a?L.a("nth"):L.call(null,"nth"),ma=P.d?P.d("Make a vector of all the places you've ever lived. Then use the ",ha," function to get the current place you live from the vector."):P.call(null,"Make a vector of all the places you've ever lived. Then use the ",ha," function to get the current place you live from the vector."),
xa=V.b(z([H,"Exercise: Make a vector",ma],0)),ra=N.e?N.e(G,"img/map.png",Ri,"map"):N.call(null,G,"img/map.png",Ri,"map"),Ha=V.b(z([H,"Maps",ra],0)),Aa=Z.b(z(['{:first "Sally", :last "Brown", :occupation "programmer"}\n{:a 1, :b "two"}\n{}'],0)),dc=V.b(z([H,"Maps",Aa],0)),mc=Z.b(z(['(map? {:first "Sally" :last "Brown"})\n;;\x3d\x3e true\n\n(get {:first "Sally" :last "Brown"} :first)\n;;\x3d\x3e "Sally"\n\n(get {:first "Sally"} :last :MISS)\n;;\x3d\x3e :MISS'],0)),nc=V.b(z([H,"Map functions",mc],0)),
oc=Z.b(z(['(assoc {:first "Sally"} :last "Brown")\n;;\x3d\x3e {:first "Sally", :last "Brown"}\n\n(dissoc {:first "Sally" :last "Brown"} :last)\n;;\x3d\x3e {:first "Sally"}\n\n(merge {:first "Sally"} {:last "Brown"})\n;;\x3d\x3e {:first "Sally", :last "Brown"}\n\n(count {:first "Sally" :last "Brown"})\n;;\x3d\x3e 2'],0)),pc=V.b(z([H,"More map functions",oc],0)),qc=Z.b(z(['(keys {:first "Sally" :last "Brown"})\n;;\x3d\x3e (:first :last)\n\n(vals {:first "Sally" :last "Brown"})\n;;\x3d\x3e ("Sally" "Brown")\n\n(into {} [[1 2] [3 4]])\n;;\x3d\x3e {1 2, 3 4}'],
0)),rc=V.b(z([H,"Even more map functions",qc],0)),sc=Z.b(z(['(:first {:first "Sally" :last "Brown"})\n;;\x3d\x3e "Sally"\n\n(:last {:first "Sally"})\n;;\x3d\x3e nil\n\n(:last {:first "Sally"} :MISS)\n;;\x3d\x3e :MISS'],0)),tc=V.b(z([H,"Maps and keywords",sc],0)),rb=L.a?L.a("assoc"):L.call(null,"assoc"),Xa=L.a?L.a("merge"):L.call(null,"merge"),sb=P.n?P.n("Make a map representing yourself. Make sure it contains your first"," name and last name. Then, add your hometown to the map using ",rb," or ",Xa,
"."):P.call(null,"Make a map representing yourself. Make sure it contains your first"," name and last name. Then, add your hometown to the map using ",rb," or ",Xa,"."),vc=V.b(z([H,"Exercise: Modeling yourself",sb],0)),wc=Qk.b(z(["Lists"],0)),xc=N.c?N.c(G,"img/list.png"):N.call(null,G,"img/list.png"),yc=Qk.b(z(["Sets"],0)),zc=N.c?N.c(G,"img/set.png"):N.call(null,G,"img/set.png"),Ac=V.b(z([H,"Other data structures",wc,xc,yc,zc],0)),Bc=Z.b(z([';; Lists\n(list 1 2 3)\n(list "Sally" "Brown" :programmer)\n\n;; Sets\n#{"red" "green" "blue" "yellow"}\n#{98 67 82 12 77}'],
0)),Cc=V.b(z([H,"Other data structures",Bc],0)),Ya=sk.a?sk.a("abstraction"):sk.call(null,"abstraction"),Za=O.c?O.c("Sequences are an ",Ya):O.call(null,"Sequences are an ",Ya),$a=O.a?O.a("All the data structures are sequences"):O.call(null,"All the data structures are sequences"),tb=O.a?O.a("Many functions work on all sequences"):O.call(null,"Many functions work on all sequences"),ub=P.a?P.a("Other things that are sequences"):P.call(null,"Other things that are sequences"),vb=O.a?O.a("lines in a file"):
O.call(null,"lines in a file"),wb=O.a?O.a("files in a directory"):O.call(null,"files in a directory"),xb=O.a?O.a("records in a database"):O.call(null,"records in a database"),yb=U.d?U.d(vb,wb,xb):U.call(null,vb,wb,xb),zb=O.c?O.c(ub,yb):O.call(null,ub,yb),Dc=U.e?U.e(Za,$a,tb,zb):U.call(null,Za,$a,tb,zb),Ec=V.b(z([H,"Sequences",Dc],0)),Fc=Z.b(z(['[{:name "Mercury"}\n {:name "Venus"}\n {:name "Earth" :moons ["The Moon"]}\n {:name "Mars" :moons ["Phobos" "Deimos"]}\n {:name "Jupiter"\n  :moons ["Ganymede" "Callisto" "Io" "Europa"]}]'],
0)),Ab=V.b(z([H,"Collections of collections",Fc],0)),Bb=O.a?O.a("Take the map from the last exercise -- the one about you."):O.call(null,"Take the map from the last exercise -- the one about you."),ab=O.c?O.c("Find two or three classmates. Ask their name and hometown. "," Make a vector of maps with their information."):O.call(null,"Find two or three classmates. Ask their name and hometown. "," Make a vector of maps with their information."),Cb=L.a?L.a("conj"):L.call(null,"conj"),Db=O.d?O.d("Then, add your information to their information using ",
Cb,"."):O.call(null,"Then, add your information to their information using ",Cb,"."),Gc=wk.d?wk.d(Bb,ab,Db):wk.call(null,Bb,ab,Db),Hc=V.b(z([H,"Exercise: Modeling your classmates",Gc],0)),Ic=W.b(z([H,"Data Structures",m,t,y,R,fa,xa,Ha,dc,nc,pc,rc,tc,vc,Ac,Cc,Ec,Ab,Hc],0)),Eb=bl.b(z(["count","conj","first"],0)),Fb=O.a?O.a(Eb):O.call(null,Eb),bb=bl.b(z(["+","-","*","/"],0)),cb=O.a?O.a(bb):O.call(null,bb),db=O.a?O.a("A piece of code that takes values and returns a value"):O.call(null,"A piece of code that takes values and returns a value"),
Jc=U.d?U.d(Fb,cb,db):U.call(null,Fb,cb,db),Kc=V.b(z([H,"What are functions?",Jc],0)),Lc=Z.b(z(['(defn triple\n  "Given a number, return 3 times that number."\n  [x]\n  (+ x x x))\n\n(triple 2)    ;\x3d\x3e 6\n(triple 3/2)  ;\x3d\x3e 9/2\n(triple 30.3) ;\x3d\x3e 90.9'],0)),Gb=V.b(z([H,"An example function",Lc],0)),Hb=Z.b(z(['(defn ; specifies that we are defining a function\n  triple ; the name of this function\n  \n  ;; documentation, optional\n  "Given a number, return 3 times that number."\n  \n  [x] ; list of arguments\n\n  ;; body of function\n  (+ x x x))'],
0)),Ib=V.b(z([H,"An example function",Hb],0)),Mc=Z.b(z(["(defn average\n  [x y] ; Functions can take multiple arguments.\n  (/ (+ x y) 2))\n\n(average 2 3) ;\x3d\x3e 5/2"],0)),Nc=V.b(z([H,"A function with multiple arguments.",Mc],0)),Jb=L.a?L.a("str"):L.call(null,"str"),Oc=P.e?P.e("The ",Jb," function can take any number of arguments, and it ","concatenates them together to make a string."):P.call(null,"The ",Jb," function can take any number of arguments, and it ","concatenates them together to make a string."),
Kb=L.a?L.a("format-name"):L.call(null,"format-name"),Lb=L.a?L.a("first-name"):L.call(null,"first-name"),Mb=L.a?L.a("last-name"):L.call(null,"last-name"),Pc=P.fa?P.fa("Write a function called ",Kb," that takes two arguments, ",Lb," and ",Mb,". This function should output the name ","like so: Last, First."):P.call(null,"Write a function called ",Kb," that takes two arguments, ",Lb," and ",Mb,". This function should output the name ","like so: Last, First."),Nb=V.b(z([H,"Exercise: make a function to format names",
Oc,Pc],0)),eb=O.a?O.a("Functions are named like any other value"):O.call(null,"Functions are named like any other value"),fb=L.a?L.a("?"):L.call(null,"?"),Ob=P.c?P.c("Predicate functions usually end in ",fb):P.call(null,"Predicate functions usually end in ",fb),Pb=L.a?L.a("zero?"):L.call(null,"zero?"),gb=O.a?O.a(Pb):O.call(null,Pb),Qb=L.a?L.a("vector?"):L.call(null,"vector?"),hb=O.a?O.a(Qb):O.call(null,Qb),ib=L.a?L.a("empty?"):L.call(null,"empty?"),Rb=O.a?O.a(ib):O.call(null,ib),Sb=U.d?U.d(gb,hb,
Rb):U.call(null,gb,hb,Rb),Tb=O.c?O.c(Ob,Sb):O.call(null,Ob,Sb),Ub=U.c?U.c(eb,Tb):U.call(null,eb,Tb),Vb=V.b(z([H,"Naming functions",Ub],0)),Wb=W.b(z([H,"Functions",Kc,Gb,Ib,Nc,Nb,Vb],0)),Qc=Z.b(z(["(\x3d 1 2)    ;\x3d\x3e false\n(\x3e 4 3)    ;\x3d\x3e true\n(\x3e\x3d 4 5)   ;\x3d\x3e false\n(\x3c -1 1)   ;\x3d\x3e true\n(\x3c\x3d -1 -2) ;\x3d\x3e false"],0)),Xb=V.b(z([H,"Comparison functions",Qc],0)),Rc=Z.b(z(["(defn vegetarian?\n  [person]\n  (\x3d :vegetarian (get person :dietary-restrictions)))"],
0)),Sc=V.b(z([H,"Using comparison functions",Rc],0)),Yb=Z.b(z(['(str "Chocolate" ", " "strawberry" ", and " "vanilla")\n;;\x3d\x3e "Chocolate, strawberry, and vanilla"'],0)),Zb=V.b(z([H,"String functions",Yb],0)),Tc=Rf.c(O,L),$b=Vf.c(Tc,new E(null,3,5,zg,["assoc","dissoc","merge"],null)),Uc=U.a?U.a($b):U.call(null,$b),we=V.b(z([H,"Map functions",Uc],0)),xe=Rf.c(O,L),md=Vf.c(xe,new E(null,5,5,zg,["count","conj","first","rest","get"],null)),ye=U.a?U.a(md):U.call(null,md),ze=V.b(z([H,"Sequence functions",
ye],0)),Ae=W.b(z([H,"Function library",Xb,Sc,Zb,we,ze],0)),nd=L.a?L.a("map"):L.call(null,"map"),Be=M.a?M.a(nd):M.call(null,nd),Ce=Z.b(z(["(defn triple\n  [x]\n  (+ x x x))\n\n(map triple [1 2 3]) ;\x3d\x3e [3 6 9]"],0)),De=V.b(z([H,Be,Ce],0)),od=L.a?L.a("reduce"):L.call(null,"reduce"),Ee=M.a?M.a(od):M.call(null,od),Fe=Z.b(z(["(defn add\n  [x y]\n  (+ x y))\n\n(reduce add [1 2 3]) ;\x3d\x3e 6"],0)),Ge=V.b(z([H,Ee,Fe],0)),pd=L.a?L.a("reduce"):L.call(null,"reduce"),He=M.c?M.c(pd," in action"):M.call(null,
pd," in action"),Ie=Z.b(z(['(defn join-with-space\n  [string1 string2]\n  (str string1 " " string2))\n\n(reduce join-with-space\n        ["i" "like" "peanut" "butter" "and" "jelly"])\n;;\x3d\x3e "i like peanut butter and jelly"'],0)),Je=V.b(z([H,He,Ie],0)),qd=L.a?L.a("reduce"):L.call(null,"reduce"),Ke=M.c?M.c(qd," in action"):M.call(null,qd," in action"),Le=Z.b(z(['(reduce join-with-space\n        ["i" "like" "peanut" "butter" "and" "jelly"])\n;;\x3d\x3e "i like peanut butter and jelly"\n\n(join-with-space "i" "like")\n(join-with-space "i like" "peanut")\n(join-with-space "i like peanut" "butter")\n(join-with-space "i like peanut butter" "and")\n(join-with-space "i like peanut butter and" "jelly")'],
0)),Me=V.b(z([H,Ke,Le],0)),rd=L.a?L.a("sort-by"):L.call(null,"sort-by"),Ne=M.a?M.a(rd):M.call(null,rd),Oe=Z.b(z(["(sort-by val \x3e {:amy 3, :renee 5, :isabella 4})\n;;\x3d\x3e ([:renee 5] [:isabella 4] [:amy 3])"],0)),Pe=V.b(z([H,Ne,Oe],0)),Qe=Z.b(z(['(map (fn [x] (+ x x x)) [1 2 3]) ;\x3d\x3e [3 6 9]\n\n(reduce (fn [x y] (+ x y)) [1 2 3]) ;\x3d\x3e 6\n\n(reduce\n  (fn [s1 s2] (str s1 " " s2))\n  ["i" "like" "peanut" "butter" "and" "jelly"])\n  ;\x3d\x3e "i like peanut butter and jelly"'],0)),Re=
V.b(z([H,"Anonymous functions",Qe],0)),sd=L.a?L.a("average"):L.call(null,"average"),Se=P.e?P.e("Create a function called ",sd," that takes a vector of ","numbers and returns the average of those numbers."):P.call(null,"Create a function called ",sd," that takes a vector of ","numbers and returns the average of those numbers."),td=L.a?L.a("reduce"):L.call(null,"reduce"),ud=L.a?L.a("count"):L.call(null,"count"),Te=P.k?P.k("Hint: you will need to use ",td," and ",ud,"."):P.call(null,"Hint: you will need to use ",
td," and ",ud,"."),Ue=V.b(z([H,"Exercise: Find the average",Se,Te],0)),Ve=L.a?L.a("get-names"):L.call(null,"get-names"),We=Qk.b(z(["Create a function called ",Ve," that takes a ","vector of maps of people and returns a vector of their names."],0)),Xe=Z.b(z(['(get-names [{:first "Margaret" :last "Atwood"}\n            {:first "Doris" :last "Lessing"}\n            {:first "Ursula" :last "Le Guin"}\n            {:first "Alice" :last "Munro"}])\n\n;;\x3d\x3e ["Margaret Atwood" "Doris Lessing"\n;;    "Ursula Le Guin" "Alice Munro"]'],
0)),Ye=V.b(z([H,"Exercise: Get the names of people",We,Xe],0)),vd=L.a?L.a("let"):L.call(null,"let"),Ze=M.a?M.a(vd):M.call(null,vd),$e=Z.b(z(['(defn spread\n  "Given a collection of numbers, return the difference between the largest and smallest number."\n  [numbers]\n    (let [largest (reduce max numbers)\n          smallest (reduce min numbers)]\n      (- largest smallest)))\n\n(spread [10 7 3 -3 8]) ;\x3d\x3e 13'],0)),af=V.b(z([H,Ze,$e],0)),wd=L.a?L.a("average"):L.call(null,"average"),xd=L.a?L.a("let"):
L.call(null,"let"),bf=P.n?P.n("Go back to the ",wd," function you created before and ","use ",xd," to make it easier to read."):P.call(null,"Go back to the ",wd," function you created before and ","use ",xd," to make it easier to read."),cf=V.b(z([H,"Exercise: Rewrite average",bf],0)),df=W.b(z([H,"Functions that take other functions",De,Ge,Je,Me,Pe,Re,Ue,Ye,af,cf],0));return Pk.b(z([pj,"mozilla-theme.css",a,Ic,Wb,Ae,df],0))}())):qk.call(null,pk.c?pk.c(F,yg):pk.call(null,F,yg),ok.c?ok.c(F,function(){var a=
Ok.b(z([H,"Module 2"],0)),b=O.a?O.a("Vectors"):O.call(null,"Vectors"),c=O.a?O.a("Maps"):O.call(null,"Maps"),d=O.a?O.a("Lists"):O.call(null,"Lists"),e=O.a?O.a("Sets"):O.call(null,"Sets"),h=O.a?O.a("Sequences"):O.call(null,"Sequences"),k=U.k?U.k(b,c,d,e,h):U.call(null,b,c,d,e,h),m=V.b(z([H,"Data structures",k],0)),r=N.e?N.e(G,"img/vector.png",Ri,"vector"):N.call(null,G,"img/vector.png",Ri,"vector"),t=V.b(z([H,"Vectors",r],0)),v=Z.b(z(['[1 2 3 4 5]\n["a" 1 2 "b"]\n[]'],0)),y=V.b(z([H,"Vectors",v],0)),
I=Z.b(z(["(vector? [:a :b :c])\n;;\x3d\x3e true\n\n(vector :a :b :c)\n;;\x3d\x3e [:a :b :c]\n\n(conj [:a :b] :c)\n;;\x3d\x3e [:a :b :c]"],0)),R=V.b(z([H,"Vector functions",I],0)),X=Z.b(z(["(count [:a :b :c])\n;;\x3d\x3e 3\n\n(nth [:a :b :c] 1)\n;;\x3d\x3e :b\n\n(first [:a :b :c])\n;;\x3d\x3e :a"],0)),fa=V.b(z([H,"Vector functions",X],0)),ha=L.a?L.a("nth"):L.call(null,"nth"),ma=P.d?P.d("Make a vector of all the places you've ever lived. Then use the ",ha," function to get the current place you live from the vector."):
P.call(null,"Make a vector of all the places you've ever lived. Then use the ",ha," function to get the current place you live from the vector."),xa=V.b(z([H,"Exercise: Make a vector",ma],0)),ra=N.e?N.e(G,"img/map.png",Ri,"map"):N.call(null,G,"img/map.png",Ri,"map"),Ha=V.b(z([H,"Maps",ra],0)),Aa=Z.b(z(['{:first "Sally", :last "Brown", :occupation "programmer"}\n{:a 1, :b "two"}\n{}'],0)),dc=V.b(z([H,"Maps",Aa],0)),mc=Z.b(z(['(map? {:first "Sally" :last "Brown"})\n;;\x3d\x3e true\n\n(get {:first "Sally" :last "Brown"} :first)\n;;\x3d\x3e "Sally"\n\n(get {:first "Sally"} :last :MISS)\n;;\x3d\x3e :MISS'],
0)),nc=V.b(z([H,"Map functions",mc],0)),oc=Z.b(z(['(assoc {:first "Sally"} :last "Brown")\n;;\x3d\x3e {:first "Sally", :last "Brown"}\n\n(dissoc {:first "Sally" :last "Brown"} :last)\n;;\x3d\x3e {:first "Sally"}\n\n(merge {:first "Sally"} {:last "Brown"})\n;;\x3d\x3e {:first "Sally", :last "Brown"}\n\n(count {:first "Sally" :last "Brown"})\n;;\x3d\x3e 2'],0)),pc=V.b(z([H,"More map functions",oc],0)),qc=Z.b(z(['(keys {:first "Sally" :last "Brown"})\n;;\x3d\x3e (:first :last)\n\n(vals {:first "Sally" :last "Brown"})\n;;\x3d\x3e ("Sally" "Brown")\n\n(into {} [[1 2] [3 4]])\n;;\x3d\x3e {1 2, 3 4}'],
0)),rc=V.b(z([H,"Even more map functions",qc],0)),sc=Z.b(z(['(:first {:first "Sally" :last "Brown"})\n;;\x3d\x3e "Sally"\n\n(:last {:first "Sally"})\n;;\x3d\x3e nil\n\n(:last {:first "Sally"} :MISS)\n;;\x3d\x3e :MISS'],0)),tc=V.b(z([H,"Maps and keywords",sc],0)),rb=L.a?L.a("assoc"):L.call(null,"assoc"),Xa=L.a?L.a("merge"):L.call(null,"merge"),sb=P.n?P.n("Make a map representing yourself. Make sure it contains your first"," name and last name. Then, add your hometown to the map using ",rb," or ",Xa,
"."):P.call(null,"Make a map representing yourself. Make sure it contains your first"," name and last name. Then, add your hometown to the map using ",rb," or ",Xa,"."),vc=V.b(z([H,"Exercise: Modeling yourself",sb],0)),wc=Qk.b(z(["Lists"],0)),xc=N.c?N.c(G,"img/list.png"):N.call(null,G,"img/list.png"),yc=Qk.b(z(["Sets"],0)),zc=N.c?N.c(G,"img/set.png"):N.call(null,G,"img/set.png"),Ac=V.b(z([H,"Other data structures",wc,xc,yc,zc],0)),Bc=Z.b(z([';; Lists\n(list 1 2 3)\n(list "Sally" "Brown" :programmer)\n\n;; Sets\n#{"red" "green" "blue" "yellow"}\n#{98 67 82 12 77}'],
0)),Cc=V.b(z([H,"Other data structures",Bc],0)),Ya=sk.a?sk.a("abstraction"):sk.call(null,"abstraction"),Za=O.c?O.c("Sequences are an ",Ya):O.call(null,"Sequences are an ",Ya),$a=O.a?O.a("All the data structures are sequences"):O.call(null,"All the data structures are sequences"),tb=O.a?O.a("Many functions work on all sequences"):O.call(null,"Many functions work on all sequences"),ub=P.a?P.a("Other things that are sequences"):P.call(null,"Other things that are sequences"),vb=O.a?O.a("lines in a file"):
O.call(null,"lines in a file"),wb=O.a?O.a("files in a directory"):O.call(null,"files in a directory"),xb=O.a?O.a("records in a database"):O.call(null,"records in a database"),yb=U.d?U.d(vb,wb,xb):U.call(null,vb,wb,xb),zb=O.c?O.c(ub,yb):O.call(null,ub,yb),Dc=U.e?U.e(Za,$a,tb,zb):U.call(null,Za,$a,tb,zb),Ec=V.b(z([H,"Sequences",Dc],0)),Fc=Z.b(z(['[{:name "Mercury"}\n {:name "Venus"}\n {:name "Earth" :moons ["The Moon"]}\n {:name "Mars" :moons ["Phobos" "Deimos"]}\n {:name "Jupiter"\n  :moons ["Ganymede" "Callisto" "Io" "Europa"]}]'],
0)),Ab=V.b(z([H,"Collections of collections",Fc],0)),Bb=O.a?O.a("Take the map from the last exercise -- the one about you."):O.call(null,"Take the map from the last exercise -- the one about you."),ab=O.c?O.c("Find two or three classmates. Ask their name and hometown. "," Make a vector of maps with their information."):O.call(null,"Find two or three classmates. Ask their name and hometown. "," Make a vector of maps with their information."),Cb=L.a?L.a("conj"):L.call(null,"conj"),Db=O.d?O.d("Then, add your information to their information using ",
Cb,"."):O.call(null,"Then, add your information to their information using ",Cb,"."),Gc=wk.d?wk.d(Bb,ab,Db):wk.call(null,Bb,ab,Db),Hc=V.b(z([H,"Exercise: Modeling your classmates",Gc],0)),Ic=W.b(z([H,"Data Structures",m,t,y,R,fa,xa,Ha,dc,nc,pc,rc,tc,vc,Ac,Cc,Ec,Ab,Hc],0)),Eb=bl.b(z(["count","conj","first"],0)),Fb=O.a?O.a(Eb):O.call(null,Eb),bb=bl.b(z(["+","-","*","/"],0)),cb=O.a?O.a(bb):O.call(null,bb),db=O.a?O.a("A piece of code that takes values and returns a value"):O.call(null,"A piece of code that takes values and returns a value"),
Jc=U.d?U.d(Fb,cb,db):U.call(null,Fb,cb,db),Kc=V.b(z([H,"What are functions?",Jc],0)),Lc=Z.b(z(['(defn triple\n  "Given a number, return 3 times that number."\n  [x]\n  (+ x x x))\n\n(triple 2)    ;\x3d\x3e 6\n(triple 3/2)  ;\x3d\x3e 9/2\n(triple 30.3) ;\x3d\x3e 90.9'],0)),Gb=V.b(z([H,"An example function",Lc],0)),Hb=Z.b(z(['(defn ; specifies that we are defining a function\n  triple ; the name of this function\n  \n  ;; documentation, optional\n  "Given a number, return 3 times that number."\n  \n  [x] ; list of arguments\n\n  ;; body of function\n  (+ x x x))'],
0)),Ib=V.b(z([H,"An example function",Hb],0)),Mc=Z.b(z(["(defn average\n  [x y] ; Functions can take multiple arguments.\n  (/ (+ x y) 2))\n\n(average 2 3) ;\x3d\x3e 5/2"],0)),Nc=V.b(z([H,"A function with multiple arguments.",Mc],0)),Jb=L.a?L.a("str"):L.call(null,"str"),Oc=P.e?P.e("The ",Jb," function can take any number of arguments, and it ","concatenates them together to make a string."):P.call(null,"The ",Jb," function can take any number of arguments, and it ","concatenates them together to make a string."),
Kb=L.a?L.a("format-name"):L.call(null,"format-name"),Lb=L.a?L.a("first-name"):L.call(null,"first-name"),Mb=L.a?L.a("last-name"):L.call(null,"last-name"),Pc=P.fa?P.fa("Write a function called ",Kb," that takes two arguments, ",Lb," and ",Mb,". This function should output the name ","like so: Last, First."):P.call(null,"Write a function called ",Kb," that takes two arguments, ",Lb," and ",Mb,". This function should output the name ","like so: Last, First."),Nb=V.b(z([H,"Exercise: make a function to format names",
Oc,Pc],0)),eb=O.a?O.a("Functions are named like any other value"):O.call(null,"Functions are named like any other value"),fb=L.a?L.a("?"):L.call(null,"?"),Ob=P.c?P.c("Predicate functions usually end in ",fb):P.call(null,"Predicate functions usually end in ",fb),Pb=L.a?L.a("zero?"):L.call(null,"zero?"),gb=O.a?O.a(Pb):O.call(null,Pb),Qb=L.a?L.a("vector?"):L.call(null,"vector?"),hb=O.a?O.a(Qb):O.call(null,Qb),ib=L.a?L.a("empty?"):L.call(null,"empty?"),Rb=O.a?O.a(ib):O.call(null,ib),Sb=U.d?U.d(gb,hb,
Rb):U.call(null,gb,hb,Rb),Tb=O.c?O.c(Ob,Sb):O.call(null,Ob,Sb),Ub=U.c?U.c(eb,Tb):U.call(null,eb,Tb),Vb=V.b(z([H,"Naming functions",Ub],0)),Wb=W.b(z([H,"Functions",Kc,Gb,Ib,Nc,Nb,Vb],0)),Qc=Z.b(z(["(\x3d 1 2)    ;\x3d\x3e false\n(\x3e 4 3)    ;\x3d\x3e true\n(\x3e\x3d 4 5)   ;\x3d\x3e false\n(\x3c -1 1)   ;\x3d\x3e true\n(\x3c\x3d -1 -2) ;\x3d\x3e false"],0)),Xb=V.b(z([H,"Comparison functions",Qc],0)),Rc=Z.b(z(["(defn vegetarian?\n  [person]\n  (\x3d :vegetarian (get person :dietary-restrictions)))"],
0)),Sc=V.b(z([H,"Using comparison functions",Rc],0)),Yb=Z.b(z(['(str "Chocolate" ", " "strawberry" ", and " "vanilla")\n;;\x3d\x3e "Chocolate, strawberry, and vanilla"'],0)),Zb=V.b(z([H,"String functions",Yb],0)),Tc=Rf.c(O,L),$b=Vf.c(Tc,new E(null,3,5,zg,["assoc","dissoc","merge"],null)),Uc=U.a?U.a($b):U.call(null,$b),we=V.b(z([H,"Map functions",Uc],0)),xe=Rf.c(O,L),md=Vf.c(xe,new E(null,5,5,zg,["count","conj","first","rest","get"],null)),ye=U.a?U.a(md):U.call(null,md),ze=V.b(z([H,"Sequence functions",
ye],0)),Ae=W.b(z([H,"Function library",Xb,Sc,Zb,we,ze],0)),nd=L.a?L.a("map"):L.call(null,"map"),Be=M.a?M.a(nd):M.call(null,nd),Ce=Z.b(z(["(defn triple\n  [x]\n  (+ x x x))\n\n(map triple [1 2 3]) ;\x3d\x3e [3 6 9]"],0)),De=V.b(z([H,Be,Ce],0)),od=L.a?L.a("reduce"):L.call(null,"reduce"),Ee=M.a?M.a(od):M.call(null,od),Fe=Z.b(z(["(defn add\n  [x y]\n  (+ x y))\n\n(reduce add [1 2 3]) ;\x3d\x3e 6"],0)),Ge=V.b(z([H,Ee,Fe],0)),pd=L.a?L.a("reduce"):L.call(null,"reduce"),He=M.c?M.c(pd," in action"):M.call(null,
pd," in action"),Ie=Z.b(z(['(defn join-with-space\n  [string1 string2]\n  (str string1 " " string2))\n\n(reduce join-with-space\n        ["i" "like" "peanut" "butter" "and" "jelly"])\n;;\x3d\x3e "i like peanut butter and jelly"'],0)),Je=V.b(z([H,He,Ie],0)),qd=L.a?L.a("reduce"):L.call(null,"reduce"),Ke=M.c?M.c(qd," in action"):M.call(null,qd," in action"),Le=Z.b(z(['(reduce join-with-space\n        ["i" "like" "peanut" "butter" "and" "jelly"])\n;;\x3d\x3e "i like peanut butter and jelly"\n\n(join-with-space "i" "like")\n(join-with-space "i like" "peanut")\n(join-with-space "i like peanut" "butter")\n(join-with-space "i like peanut butter" "and")\n(join-with-space "i like peanut butter and" "jelly")'],
0)),Me=V.b(z([H,Ke,Le],0)),rd=L.a?L.a("sort-by"):L.call(null,"sort-by"),Ne=M.a?M.a(rd):M.call(null,rd),Oe=Z.b(z(["(sort-by val \x3e {:amy 3, :renee 5, :isabella 4})\n;;\x3d\x3e ([:renee 5] [:isabella 4] [:amy 3])"],0)),Pe=V.b(z([H,Ne,Oe],0)),Qe=Z.b(z(['(map (fn [x] (+ x x x)) [1 2 3]) ;\x3d\x3e [3 6 9]\n\n(reduce (fn [x y] (+ x y)) [1 2 3]) ;\x3d\x3e 6\n\n(reduce\n  (fn [s1 s2] (str s1 " " s2))\n  ["i" "like" "peanut" "butter" "and" "jelly"])\n  ;\x3d\x3e "i like peanut butter and jelly"'],0)),Re=
V.b(z([H,"Anonymous functions",Qe],0)),sd=L.a?L.a("average"):L.call(null,"average"),Se=P.e?P.e("Create a function called ",sd," that takes a vector of ","numbers and returns the average of those numbers."):P.call(null,"Create a function called ",sd," that takes a vector of ","numbers and returns the average of those numbers."),td=L.a?L.a("reduce"):L.call(null,"reduce"),ud=L.a?L.a("count"):L.call(null,"count"),Te=P.k?P.k("Hint: you will need to use ",td," and ",ud,"."):P.call(null,"Hint: you will need to use ",
td," and ",ud,"."),Ue=V.b(z([H,"Exercise: Find the average",Se,Te],0)),Ve=L.a?L.a("get-names"):L.call(null,"get-names"),We=Qk.b(z(["Create a function called ",Ve," that takes a ","vector of maps of people and returns a vector of their names."],0)),Xe=Z.b(z(['(get-names [{:first "Margaret" :last "Atwood"}\n            {:first "Doris" :last "Lessing"}\n            {:first "Ursula" :last "Le Guin"}\n            {:first "Alice" :last "Munro"}])\n\n;;\x3d\x3e ["Margaret Atwood" "Doris Lessing"\n;;    "Ursula Le Guin" "Alice Munro"]'],
0)),Ye=V.b(z([H,"Exercise: Get the names of people",We,Xe],0)),vd=L.a?L.a("let"):L.call(null,"let"),Ze=M.a?M.a(vd):M.call(null,vd),$e=Z.b(z(['(defn spread\n  "Given a collection of numbers, return the difference between the largest and smallest number."\n  [numbers]\n    (let [largest (reduce max numbers)\n          smallest (reduce min numbers)]\n      (- largest smallest)))\n\n(spread [10 7 3 -3 8]) ;\x3d\x3e 13'],0)),af=V.b(z([H,Ze,$e],0)),wd=L.a?L.a("average"):L.call(null,"average"),xd=L.a?L.a("let"):
L.call(null,"let"),bf=P.n?P.n("Go back to the ",wd," function you created before and ","use ",xd," to make it easier to read."):P.call(null,"Go back to the ",wd," function you created before and ","use ",xd," to make it easier to read."),cf=V.b(z([H,"Exercise: Rewrite average",bf],0)),df=W.b(z([H,"Functions that take other functions",De,Ge,Je,Me,Pe,Re,Ue,Ye,af,cf],0));return Pk.b(z([pj,"mozilla-theme.css",a,Ic,Wb,Ae,df],0))}()):ok.call(null,F,function(){var a=Ok.b(z([H,"Module 2"],0)),b=O.a?O.a("Vectors"):
O.call(null,"Vectors"),c=O.a?O.a("Maps"):O.call(null,"Maps"),d=O.a?O.a("Lists"):O.call(null,"Lists"),e=O.a?O.a("Sets"):O.call(null,"Sets"),h=O.a?O.a("Sequences"):O.call(null,"Sequences"),k=U.k?U.k(b,c,d,e,h):U.call(null,b,c,d,e,h),m=V.b(z([H,"Data structures",k],0)),r=N.e?N.e(G,"img/vector.png",Ri,"vector"):N.call(null,G,"img/vector.png",Ri,"vector"),t=V.b(z([H,"Vectors",r],0)),v=Z.b(z(['[1 2 3 4 5]\n["a" 1 2 "b"]\n[]'],0)),y=V.b(z([H,"Vectors",v],0)),I=Z.b(z(["(vector? [:a :b :c])\n;;\x3d\x3e true\n\n(vector :a :b :c)\n;;\x3d\x3e [:a :b :c]\n\n(conj [:a :b] :c)\n;;\x3d\x3e [:a :b :c]"],
0)),R=V.b(z([H,"Vector functions",I],0)),X=Z.b(z(["(count [:a :b :c])\n;;\x3d\x3e 3\n\n(nth [:a :b :c] 1)\n;;\x3d\x3e :b\n\n(first [:a :b :c])\n;;\x3d\x3e :a"],0)),fa=V.b(z([H,"Vector functions",X],0)),ha=L.a?L.a("nth"):L.call(null,"nth"),ma=P.d?P.d("Make a vector of all the places you've ever lived. Then use the ",ha," function to get the current place you live from the vector."):P.call(null,"Make a vector of all the places you've ever lived. Then use the ",ha," function to get the current place you live from the vector."),
xa=V.b(z([H,"Exercise: Make a vector",ma],0)),ra=N.e?N.e(G,"img/map.png",Ri,"map"):N.call(null,G,"img/map.png",Ri,"map"),Ha=V.b(z([H,"Maps",ra],0)),Aa=Z.b(z(['{:first "Sally", :last "Brown", :occupation "programmer"}\n{:a 1, :b "two"}\n{}'],0)),dc=V.b(z([H,"Maps",Aa],0)),mc=Z.b(z(['(map? {:first "Sally" :last "Brown"})\n;;\x3d\x3e true\n\n(get {:first "Sally" :last "Brown"} :first)\n;;\x3d\x3e "Sally"\n\n(get {:first "Sally"} :last :MISS)\n;;\x3d\x3e :MISS'],0)),nc=V.b(z([H,"Map functions",mc],0)),
oc=Z.b(z(['(assoc {:first "Sally"} :last "Brown")\n;;\x3d\x3e {:first "Sally", :last "Brown"}\n\n(dissoc {:first "Sally" :last "Brown"} :last)\n;;\x3d\x3e {:first "Sally"}\n\n(merge {:first "Sally"} {:last "Brown"})\n;;\x3d\x3e {:first "Sally", :last "Brown"}\n\n(count {:first "Sally" :last "Brown"})\n;;\x3d\x3e 2'],0)),pc=V.b(z([H,"More map functions",oc],0)),qc=Z.b(z(['(keys {:first "Sally" :last "Brown"})\n;;\x3d\x3e (:first :last)\n\n(vals {:first "Sally" :last "Brown"})\n;;\x3d\x3e ("Sally" "Brown")\n\n(into {} [[1 2] [3 4]])\n;;\x3d\x3e {1 2, 3 4}'],
0)),rc=V.b(z([H,"Even more map functions",qc],0)),sc=Z.b(z(['(:first {:first "Sally" :last "Brown"})\n;;\x3d\x3e "Sally"\n\n(:last {:first "Sally"})\n;;\x3d\x3e nil\n\n(:last {:first "Sally"} :MISS)\n;;\x3d\x3e :MISS'],0)),tc=V.b(z([H,"Maps and keywords",sc],0)),rb=L.a?L.a("assoc"):L.call(null,"assoc"),Xa=L.a?L.a("merge"):L.call(null,"merge"),sb=P.n?P.n("Make a map representing yourself. Make sure it contains your first"," name and last name. Then, add your hometown to the map using ",rb," or ",Xa,
"."):P.call(null,"Make a map representing yourself. Make sure it contains your first"," name and last name. Then, add your hometown to the map using ",rb," or ",Xa,"."),vc=V.b(z([H,"Exercise: Modeling yourself",sb],0)),wc=Qk.b(z(["Lists"],0)),xc=N.c?N.c(G,"img/list.png"):N.call(null,G,"img/list.png"),yc=Qk.b(z(["Sets"],0)),zc=N.c?N.c(G,"img/set.png"):N.call(null,G,"img/set.png"),Ac=V.b(z([H,"Other data structures",wc,xc,yc,zc],0)),Bc=Z.b(z([';; Lists\n(list 1 2 3)\n(list "Sally" "Brown" :programmer)\n\n;; Sets\n#{"red" "green" "blue" "yellow"}\n#{98 67 82 12 77}'],
0)),Cc=V.b(z([H,"Other data structures",Bc],0)),Ya=sk.a?sk.a("abstraction"):sk.call(null,"abstraction"),Za=O.c?O.c("Sequences are an ",Ya):O.call(null,"Sequences are an ",Ya),$a=O.a?O.a("All the data structures are sequences"):O.call(null,"All the data structures are sequences"),tb=O.a?O.a("Many functions work on all sequences"):O.call(null,"Many functions work on all sequences"),ub=P.a?P.a("Other things that are sequences"):P.call(null,"Other things that are sequences"),vb=O.a?O.a("lines in a file"):
O.call(null,"lines in a file"),wb=O.a?O.a("files in a directory"):O.call(null,"files in a directory"),xb=O.a?O.a("records in a database"):O.call(null,"records in a database"),yb=U.d?U.d(vb,wb,xb):U.call(null,vb,wb,xb),zb=O.c?O.c(ub,yb):O.call(null,ub,yb),Dc=U.e?U.e(Za,$a,tb,zb):U.call(null,Za,$a,tb,zb),Ec=V.b(z([H,"Sequences",Dc],0)),Fc=Z.b(z(['[{:name "Mercury"}\n {:name "Venus"}\n {:name "Earth" :moons ["The Moon"]}\n {:name "Mars" :moons ["Phobos" "Deimos"]}\n {:name "Jupiter"\n  :moons ["Ganymede" "Callisto" "Io" "Europa"]}]'],
0)),Ab=V.b(z([H,"Collections of collections",Fc],0)),Bb=O.a?O.a("Take the map from the last exercise -- the one about you."):O.call(null,"Take the map from the last exercise -- the one about you."),ab=O.c?O.c("Find two or three classmates. Ask their name and hometown. "," Make a vector of maps with their information."):O.call(null,"Find two or three classmates. Ask their name and hometown. "," Make a vector of maps with their information."),Cb=L.a?L.a("conj"):L.call(null,"conj"),Db=O.d?O.d("Then, add your information to their information using ",
Cb,"."):O.call(null,"Then, add your information to their information using ",Cb,"."),Gc=wk.d?wk.d(Bb,ab,Db):wk.call(null,Bb,ab,Db),Hc=V.b(z([H,"Exercise: Modeling your classmates",Gc],0)),Ic=W.b(z([H,"Data Structures",m,t,y,R,fa,xa,Ha,dc,nc,pc,rc,tc,vc,Ac,Cc,Ec,Ab,Hc],0)),Eb=bl.b(z(["count","conj","first"],0)),Fb=O.a?O.a(Eb):O.call(null,Eb),bb=bl.b(z(["+","-","*","/"],0)),cb=O.a?O.a(bb):O.call(null,bb),db=O.a?O.a("A piece of code that takes values and returns a value"):O.call(null,"A piece of code that takes values and returns a value"),
Jc=U.d?U.d(Fb,cb,db):U.call(null,Fb,cb,db),Kc=V.b(z([H,"What are functions?",Jc],0)),Lc=Z.b(z(['(defn triple\n  "Given a number, return 3 times that number."\n  [x]\n  (+ x x x))\n\n(triple 2)    ;\x3d\x3e 6\n(triple 3/2)  ;\x3d\x3e 9/2\n(triple 30.3) ;\x3d\x3e 90.9'],0)),Gb=V.b(z([H,"An example function",Lc],0)),Hb=Z.b(z(['(defn ; specifies that we are defining a function\n  triple ; the name of this function\n  \n  ;; documentation, optional\n  "Given a number, return 3 times that number."\n  \n  [x] ; list of arguments\n\n  ;; body of function\n  (+ x x x))'],
0)),Ib=V.b(z([H,"An example function",Hb],0)),Mc=Z.b(z(["(defn average\n  [x y] ; Functions can take multiple arguments.\n  (/ (+ x y) 2))\n\n(average 2 3) ;\x3d\x3e 5/2"],0)),Nc=V.b(z([H,"A function with multiple arguments.",Mc],0)),Jb=L.a?L.a("str"):L.call(null,"str"),Oc=P.e?P.e("The ",Jb," function can take any number of arguments, and it ","concatenates them together to make a string."):P.call(null,"The ",Jb," function can take any number of arguments, and it ","concatenates them together to make a string."),
Kb=L.a?L.a("format-name"):L.call(null,"format-name"),Lb=L.a?L.a("first-name"):L.call(null,"first-name"),Mb=L.a?L.a("last-name"):L.call(null,"last-name"),Pc=P.fa?P.fa("Write a function called ",Kb," that takes two arguments, ",Lb," and ",Mb,". This function should output the name ","like so: Last, First."):P.call(null,"Write a function called ",Kb," that takes two arguments, ",Lb," and ",Mb,". This function should output the name ","like so: Last, First."),Nb=V.b(z([H,"Exercise: make a function to format names",
Oc,Pc],0)),eb=O.a?O.a("Functions are named like any other value"):O.call(null,"Functions are named like any other value"),fb=L.a?L.a("?"):L.call(null,"?"),Ob=P.c?P.c("Predicate functions usually end in ",fb):P.call(null,"Predicate functions usually end in ",fb),Pb=L.a?L.a("zero?"):L.call(null,"zero?"),gb=O.a?O.a(Pb):O.call(null,Pb),Qb=L.a?L.a("vector?"):L.call(null,"vector?"),hb=O.a?O.a(Qb):O.call(null,Qb),ib=L.a?L.a("empty?"):L.call(null,"empty?"),Rb=O.a?O.a(ib):O.call(null,ib),Sb=U.d?U.d(gb,hb,
Rb):U.call(null,gb,hb,Rb),Tb=O.c?O.c(Ob,Sb):O.call(null,Ob,Sb),Ub=U.c?U.c(eb,Tb):U.call(null,eb,Tb),Vb=V.b(z([H,"Naming functions",Ub],0)),Wb=W.b(z([H,"Functions",Kc,Gb,Ib,Nc,Nb,Vb],0)),Qc=Z.b(z(["(\x3d 1 2)    ;\x3d\x3e false\n(\x3e 4 3)    ;\x3d\x3e true\n(\x3e\x3d 4 5)   ;\x3d\x3e false\n(\x3c -1 1)   ;\x3d\x3e true\n(\x3c\x3d -1 -2) ;\x3d\x3e false"],0)),Xb=V.b(z([H,"Comparison functions",Qc],0)),Rc=Z.b(z(["(defn vegetarian?\n  [person]\n  (\x3d :vegetarian (get person :dietary-restrictions)))"],
0)),Sc=V.b(z([H,"Using comparison functions",Rc],0)),Yb=Z.b(z(['(str "Chocolate" ", " "strawberry" ", and " "vanilla")\n;;\x3d\x3e "Chocolate, strawberry, and vanilla"'],0)),Zb=V.b(z([H,"String functions",Yb],0)),Tc=Rf.c(O,L),$b=Vf.c(Tc,new E(null,3,5,zg,["assoc","dissoc","merge"],null)),Uc=U.a?U.a($b):U.call(null,$b),we=V.b(z([H,"Map functions",Uc],0)),xe=Rf.c(O,L),md=Vf.c(xe,new E(null,5,5,zg,["count","conj","first","rest","get"],null)),ye=U.a?U.a(md):U.call(null,md),ze=V.b(z([H,"Sequence functions",
ye],0)),Ae=W.b(z([H,"Function library",Xb,Sc,Zb,we,ze],0)),nd=L.a?L.a("map"):L.call(null,"map"),Be=M.a?M.a(nd):M.call(null,nd),Ce=Z.b(z(["(defn triple\n  [x]\n  (+ x x x))\n\n(map triple [1 2 3]) ;\x3d\x3e [3 6 9]"],0)),De=V.b(z([H,Be,Ce],0)),od=L.a?L.a("reduce"):L.call(null,"reduce"),Ee=M.a?M.a(od):M.call(null,od),Fe=Z.b(z(["(defn add\n  [x y]\n  (+ x y))\n\n(reduce add [1 2 3]) ;\x3d\x3e 6"],0)),Ge=V.b(z([H,Ee,Fe],0)),pd=L.a?L.a("reduce"):L.call(null,"reduce"),He=M.c?M.c(pd," in action"):M.call(null,
pd," in action"),Ie=Z.b(z(['(defn join-with-space\n  [string1 string2]\n  (str string1 " " string2))\n\n(reduce join-with-space\n        ["i" "like" "peanut" "butter" "and" "jelly"])\n;;\x3d\x3e "i like peanut butter and jelly"'],0)),Je=V.b(z([H,He,Ie],0)),qd=L.a?L.a("reduce"):L.call(null,"reduce"),Ke=M.c?M.c(qd," in action"):M.call(null,qd," in action"),Le=Z.b(z(['(reduce join-with-space\n        ["i" "like" "peanut" "butter" "and" "jelly"])\n;;\x3d\x3e "i like peanut butter and jelly"\n\n(join-with-space "i" "like")\n(join-with-space "i like" "peanut")\n(join-with-space "i like peanut" "butter")\n(join-with-space "i like peanut butter" "and")\n(join-with-space "i like peanut butter and" "jelly")'],
0)),Me=V.b(z([H,Ke,Le],0)),rd=L.a?L.a("sort-by"):L.call(null,"sort-by"),Ne=M.a?M.a(rd):M.call(null,rd),Oe=Z.b(z(["(sort-by val \x3e {:amy 3, :renee 5, :isabella 4})\n;;\x3d\x3e ([:renee 5] [:isabella 4] [:amy 3])"],0)),Pe=V.b(z([H,Ne,Oe],0)),Qe=Z.b(z(['(map (fn [x] (+ x x x)) [1 2 3]) ;\x3d\x3e [3 6 9]\n\n(reduce (fn [x y] (+ x y)) [1 2 3]) ;\x3d\x3e 6\n\n(reduce\n  (fn [s1 s2] (str s1 " " s2))\n  ["i" "like" "peanut" "butter" "and" "jelly"])\n  ;\x3d\x3e "i like peanut butter and jelly"'],0)),Re=
V.b(z([H,"Anonymous functions",Qe],0)),sd=L.a?L.a("average"):L.call(null,"average"),Se=P.e?P.e("Create a function called ",sd," that takes a vector of ","numbers and returns the average of those numbers."):P.call(null,"Create a function called ",sd," that takes a vector of ","numbers and returns the average of those numbers."),td=L.a?L.a("reduce"):L.call(null,"reduce"),ud=L.a?L.a("count"):L.call(null,"count"),Te=P.k?P.k("Hint: you will need to use ",td," and ",ud,"."):P.call(null,"Hint: you will need to use ",
td," and ",ud,"."),Ue=V.b(z([H,"Exercise: Find the average",Se,Te],0)),Ve=L.a?L.a("get-names"):L.call(null,"get-names"),We=Qk.b(z(["Create a function called ",Ve," that takes a ","vector of maps of people and returns a vector of their names."],0)),Xe=Z.b(z(['(get-names [{:first "Margaret" :last "Atwood"}\n            {:first "Doris" :last "Lessing"}\n            {:first "Ursula" :last "Le Guin"}\n            {:first "Alice" :last "Munro"}])\n\n;;\x3d\x3e ["Margaret Atwood" "Doris Lessing"\n;;    "Ursula Le Guin" "Alice Munro"]'],
0)),Ye=V.b(z([H,"Exercise: Get the names of people",We,Xe],0)),vd=L.a?L.a("let"):L.call(null,"let"),Ze=M.a?M.a(vd):M.call(null,vd),$e=Z.b(z(['(defn spread\n  "Given a collection of numbers, return the difference between the largest and smallest number."\n  [numbers]\n    (let [largest (reduce max numbers)\n          smallest (reduce min numbers)]\n      (- largest smallest)))\n\n(spread [10 7 3 -3 8]) ;\x3d\x3e 13'],0)),af=V.b(z([H,Ze,$e],0)),wd=L.a?L.a("average"):L.call(null,"average"),xd=L.a?L.a("let"):
L.call(null,"let"),bf=P.n?P.n("Go back to the ",wd," function you created before and ","use ",xd," to make it easier to read."):P.call(null,"Go back to the ",wd," function you created before and ","use ",xd," to make it easier to read."),cf=V.b(z([H,"Exercise: Rewrite average",bf],0)),df=W.b(z([H,"Functions that take other functions",De,Ge,Je,Me,Pe,Re,Ue,Ye,af,cf],0));return Pk.b(z([pj,"mozilla-theme.css",a,Ic,Wb,Ae,df],0))}()));return Fk()});ea("tailrecursion.hoplon.app_pages._module1_DOT_html.hoploninit",function(){Cd.c(window.location.search,"?dev")&&(ei.b(z(["Autoreloading"],0)),Zk());qk.c?qk.c(pk.c?pk.c(F,yg):pk.call(null,F,yg),ok.c?ok.c(F,function(){var a=Ok.b(z([H,"Module 1"],0)),b=P.a?P.a("Clojure is simple and powerful."):P.call(null,"Clojure is simple and powerful."),c=P.a?P.a("Clojure is all-purpose."):P.call(null,"Clojure is all-purpose."),d=sk.a?sk.a("fun"):sk.call(null,"fun"),d=P.d?P.d("Clojure is ",d,"."):P.call(null,"Clojure is ",
d,"."),b=V.b(z([H,"Why Clojure?",b,c,d],0)),c=O.a?O.a("data processing"):O.call(null,"data processing"),d=O.a?O.a("concurrent applications"):O.call(null,"concurrent applications"),e=O.a?O.a("web applications"):O.call(null,"web applications"),h=O.a?O.a("everything!"):O.call(null,"everything!"),c=U.e?U.e(c,d,e,h):U.call(null,c,d,e,h),c=V.b(z([H,"What is Clojure good at?",c],0)),d=Sk.b(z(['(+ 3 4)\n(max 8 17 2)\n(eat "sandwich")'],0)),d=V.b(z([H,"What does Clojure look like?",d],0)),e=K.a?K.a("R"):K.call(null,
"R"),e=O.c?O.c(e,"ead"):O.call(null,e,"ead"),h=K.a?K.a("E"):K.call(null,"E"),h=O.c?O.c(h,"val"):O.call(null,h,"val"),k=K.a?K.a("P"):K.call(null,"P"),k=O.c?O.c(k,"rint"):O.call(null,k,"rint"),m=K.a?K.a("L"):K.call(null,"L"),m=O.c?O.c(m,"oop"):O.call(null,m,"oop"),e=U.e?U.e(e,h,k,m):U.call(null,e,h,k,m),e=Tk.b(z([Xi,40,e],0)),h=N.c?N.c(G,"img/instarepl.png"):N.call(null,G,"img/instarepl.png"),h=Tk.b(z([h],0)),e=rk.c?rk.c(e,h):rk.call(null,e,h),e=V.b(z([H,"What is a REPL?",e],0)),b=W.b(z([H,"Introduction to Programming with Clojure",
b,c,d,e],0)),c=Rk.b(z(["numbers","strings","booleans","keywords"],0)),c=V.b(z([H,"Value types",c],0)),d=Sk.b(z([";; integers\n12\n-42\n\n;; floats\n10.5\n0.00000072725\n\n;; ratios\n1/2\n-7/3"],0)),d=V.b(z([H,"Numbers",d],0)),e=Sk.b(z(["(+ 1 1)  ;\x3d\x3e 1 + 1 \x3d 2\n(- 12 4) ;\x3d\x3e 12 - 4 \x3d 8\n(* 13 2) ;\x3d\x3e 13 * 2 \x3d 26\n(/ 27 9) ;\x3d\x3e 27 / 9 \x3d 3"],0)),e=V.b(z([H,"Arithmetic",e],0)),h=L.a?L.a("1 + 2 * 3 / 4 - 5"):L.call(null,"1 + 2 * 3 / 4 - 5"),h=Qk.b(z(["Infix: ",h],0)),k=
L.a?L.a("(- (+ 1 (/ (* 2 3) 4)) 5)"):L.call(null,"(- (+ 1 (/ (* 2 3) 4)) 5)"),k=Qk.b(z(["Prefix: ",k],0)),h=P.c?P.c(h,k):P.call(null,h,k),k=L.a?L.a("1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9"):L.call(null,"1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9"),k=Qk.b(z(["Infix: ",k],0)),m=L.a?L.a("(+ 1 2 3 4 5 6 7 8 9)"):L.call(null,"(+ 1 2 3 4 5 6 7 8 9)"),m=Qk.b(z(["Prefix: ",m],0)),k=P.c?P.c(k,m):P.call(null,k,m),h=V.b(z([H,"Infix vs. prefix notation",h,k],0)),k=Sk.b(z(["(+ 4/3 7/8)    ;\x3d\x3e 53/24\n(- 9 4.2 1/2)  ;\x3d\x3e 4.3\n(* 8 1/4)      ;\x3d\x3e 2\n(/ 27/2 1.5)   ;\x3d\x3e 3.0"],
0)),k=V.b(z([H,"Arithmetic with all number types",k],0)),m=O.a?O.a("Take your height in feet and inches and convert it to inches using arithmetic in Clojure."):O.call(null,"Take your height in feet and inches and convert it to inches using arithmetic in Clojure."),r=O.a?O.a("Then convert that to centimeters. There are 2.54 centimeters in an inch."):O.call(null,"Then convert that to centimeters. There are 2.54 centimeters in an inch."),t=O.a?O.a("Lastly, ask two people near you for their height in centimeters. Find the average of your heights."):
O.call(null,"Lastly, ask two people near you for their height in centimeters. Find the average of your heights."),v=P.a?P.a("Bonus: convert that average back to feet and inches."):P.call(null,"Bonus: convert that average back to feet and inches."),y=L.a?L.a("(mod x y)"):L.call(null,"(mod x y)"),y=P.c?P.c(y," will give you the remainder when dividing two numbers."):P.call(null,y," will give you the remainder when dividing two numbers."),v=O.c?O.c(v,y):O.call(null,v,y),m=U.e?U.e(m,r,t,v):U.call(null,
m,r,t,v),m=V.b(z([H,"Exercise: Basic arithmetic",m],0)),r=Sk.b(z([Wi,"language-clojure",'"Hello world"\n"This is a longer string that I wrote for purposes of an example."\n"Aubrey said, \\"I think we should go to the Orange Julius.\\""'],0)),r=V.b(z([H,"Strings",r],0)),t=P.a?P.a("Answers to questions"):P.call(null,"Answers to questions"),v=Sk.b(z(["true\nfalse\nnil"],0)),t=V.b(z([H,"Booleans and nil",t,v],0)),c=W.b(z([H,"Simple values",c,d,e,h,k,m,r,t],0)),d=Sk.b(z(["(def apples 3)\n(def oranges 5)\n(+ apples oranges)"],
0)),d=V.b(z([H,"def",d],0)),e=L.a?L.a("my-hometown"):L.call(null,"my-hometown"),e=P.d?P.d("Write the name of your hometown as a string and then assign that string to the symbol ",e,"."):P.call(null,"Write the name of your hometown as a string and then assign that string to the symbol ",e,"."),e=V.b(z([H,"Exercise: Store the name of your hometown",e],0)),d=W.b(z([H,"Assigning names to values",d,e],0));return Pk.b(z([pj,"mozilla-theme.css",a,b,c,d],0))}()):ok.call(null,F,function(){var a=Ok.b(z([H,
"Module 1"],0)),b=P.a?P.a("Clojure is simple and powerful."):P.call(null,"Clojure is simple and powerful."),c=P.a?P.a("Clojure is all-purpose."):P.call(null,"Clojure is all-purpose."),d=sk.a?sk.a("fun"):sk.call(null,"fun"),d=P.d?P.d("Clojure is ",d,"."):P.call(null,"Clojure is ",d,"."),b=V.b(z([H,"Why Clojure?",b,c,d],0)),c=O.a?O.a("data processing"):O.call(null,"data processing"),d=O.a?O.a("concurrent applications"):O.call(null,"concurrent applications"),e=O.a?O.a("web applications"):O.call(null,
"web applications"),h=O.a?O.a("everything!"):O.call(null,"everything!"),c=U.e?U.e(c,d,e,h):U.call(null,c,d,e,h),c=V.b(z([H,"What is Clojure good at?",c],0)),d=Sk.b(z(['(+ 3 4)\n(max 8 17 2)\n(eat "sandwich")'],0)),d=V.b(z([H,"What does Clojure look like?",d],0)),e=K.a?K.a("R"):K.call(null,"R"),e=O.c?O.c(e,"ead"):O.call(null,e,"ead"),h=K.a?K.a("E"):K.call(null,"E"),h=O.c?O.c(h,"val"):O.call(null,h,"val"),k=K.a?K.a("P"):K.call(null,"P"),k=O.c?O.c(k,"rint"):O.call(null,k,"rint"),m=K.a?K.a("L"):K.call(null,
"L"),m=O.c?O.c(m,"oop"):O.call(null,m,"oop"),e=U.e?U.e(e,h,k,m):U.call(null,e,h,k,m),e=Tk.b(z([Xi,40,e],0)),h=N.c?N.c(G,"img/instarepl.png"):N.call(null,G,"img/instarepl.png"),h=Tk.b(z([h],0)),e=rk.c?rk.c(e,h):rk.call(null,e,h),e=V.b(z([H,"What is a REPL?",e],0)),b=W.b(z([H,"Introduction to Programming with Clojure",b,c,d,e],0)),c=Rk.b(z(["numbers","strings","booleans","keywords"],0)),c=V.b(z([H,"Value types",c],0)),d=Sk.b(z([";; integers\n12\n-42\n\n;; floats\n10.5\n0.00000072725\n\n;; ratios\n1/2\n-7/3"],
0)),d=V.b(z([H,"Numbers",d],0)),e=Sk.b(z(["(+ 1 1)  ;\x3d\x3e 1 + 1 \x3d 2\n(- 12 4) ;\x3d\x3e 12 - 4 \x3d 8\n(* 13 2) ;\x3d\x3e 13 * 2 \x3d 26\n(/ 27 9) ;\x3d\x3e 27 / 9 \x3d 3"],0)),e=V.b(z([H,"Arithmetic",e],0)),h=L.a?L.a("1 + 2 * 3 / 4 - 5"):L.call(null,"1 + 2 * 3 / 4 - 5"),h=Qk.b(z(["Infix: ",h],0)),k=L.a?L.a("(- (+ 1 (/ (* 2 3) 4)) 5)"):L.call(null,"(- (+ 1 (/ (* 2 3) 4)) 5)"),k=Qk.b(z(["Prefix: ",k],0)),h=P.c?P.c(h,k):P.call(null,h,k),k=L.a?L.a("1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9"):L.call(null,
"1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9"),k=Qk.b(z(["Infix: ",k],0)),m=L.a?L.a("(+ 1 2 3 4 5 6 7 8 9)"):L.call(null,"(+ 1 2 3 4 5 6 7 8 9)"),m=Qk.b(z(["Prefix: ",m],0)),k=P.c?P.c(k,m):P.call(null,k,m),h=V.b(z([H,"Infix vs. prefix notation",h,k],0)),k=Sk.b(z(["(+ 4/3 7/8)    ;\x3d\x3e 53/24\n(- 9 4.2 1/2)  ;\x3d\x3e 4.3\n(* 8 1/4)      ;\x3d\x3e 2\n(/ 27/2 1.5)   ;\x3d\x3e 3.0"],0)),k=V.b(z([H,"Arithmetic with all number types",k],0)),m=O.a?O.a("Take your height in feet and inches and convert it to inches using arithmetic in Clojure."):
O.call(null,"Take your height in feet and inches and convert it to inches using arithmetic in Clojure."),r=O.a?O.a("Then convert that to centimeters. There are 2.54 centimeters in an inch."):O.call(null,"Then convert that to centimeters. There are 2.54 centimeters in an inch."),t=O.a?O.a("Lastly, ask two people near you for their height in centimeters. Find the average of your heights."):O.call(null,"Lastly, ask two people near you for their height in centimeters. Find the average of your heights."),
v=P.a?P.a("Bonus: convert that average back to feet and inches."):P.call(null,"Bonus: convert that average back to feet and inches."),y=L.a?L.a("(mod x y)"):L.call(null,"(mod x y)"),y=P.c?P.c(y," will give you the remainder when dividing two numbers."):P.call(null,y," will give you the remainder when dividing two numbers."),v=O.c?O.c(v,y):O.call(null,v,y),m=U.e?U.e(m,r,t,v):U.call(null,m,r,t,v),m=V.b(z([H,"Exercise: Basic arithmetic",m],0)),r=Sk.b(z([Wi,"language-clojure",'"Hello world"\n"This is a longer string that I wrote for purposes of an example."\n"Aubrey said, \\"I think we should go to the Orange Julius.\\""'],
0)),r=V.b(z([H,"Strings",r],0)),t=P.a?P.a("Answers to questions"):P.call(null,"Answers to questions"),v=Sk.b(z(["true\nfalse\nnil"],0)),t=V.b(z([H,"Booleans and nil",t,v],0)),c=W.b(z([H,"Simple values",c,d,e,h,k,m,r,t],0)),d=Sk.b(z(["(def apples 3)\n(def oranges 5)\n(+ apples oranges)"],0)),d=V.b(z([H,"def",d],0)),e=L.a?L.a("my-hometown"):L.call(null,"my-hometown"),e=P.d?P.d("Write the name of your hometown as a string and then assign that string to the symbol ",e,"."):P.call(null,"Write the name of your hometown as a string and then assign that string to the symbol ",
e,"."),e=V.b(z([H,"Exercise: Store the name of your hometown",e],0)),d=W.b(z([H,"Assigning names to values",d,e],0));return Pk.b(z([pj,"mozilla-theme.css",a,b,c,d],0))}())):qk.call(null,pk.c?pk.c(F,yg):pk.call(null,F,yg),ok.c?ok.c(F,function(){var a=Ok.b(z([H,"Module 1"],0)),b=P.a?P.a("Clojure is simple and powerful."):P.call(null,"Clojure is simple and powerful."),c=P.a?P.a("Clojure is all-purpose."):P.call(null,"Clojure is all-purpose."),d=sk.a?sk.a("fun"):sk.call(null,"fun"),d=P.d?P.d("Clojure is ",
d,"."):P.call(null,"Clojure is ",d,"."),b=V.b(z([H,"Why Clojure?",b,c,d],0)),c=O.a?O.a("data processing"):O.call(null,"data processing"),d=O.a?O.a("concurrent applications"):O.call(null,"concurrent applications"),e=O.a?O.a("web applications"):O.call(null,"web applications"),h=O.a?O.a("everything!"):O.call(null,"everything!"),c=U.e?U.e(c,d,e,h):U.call(null,c,d,e,h),c=V.b(z([H,"What is Clojure good at?",c],0)),d=Sk.b(z(['(+ 3 4)\n(max 8 17 2)\n(eat "sandwich")'],0)),d=V.b(z([H,"What does Clojure look like?",
d],0)),e=K.a?K.a("R"):K.call(null,"R"),e=O.c?O.c(e,"ead"):O.call(null,e,"ead"),h=K.a?K.a("E"):K.call(null,"E"),h=O.c?O.c(h,"val"):O.call(null,h,"val"),k=K.a?K.a("P"):K.call(null,"P"),k=O.c?O.c(k,"rint"):O.call(null,k,"rint"),m=K.a?K.a("L"):K.call(null,"L"),m=O.c?O.c(m,"oop"):O.call(null,m,"oop"),e=U.e?U.e(e,h,k,m):U.call(null,e,h,k,m),e=Tk.b(z([Xi,40,e],0)),h=N.c?N.c(G,"img/instarepl.png"):N.call(null,G,"img/instarepl.png"),h=Tk.b(z([h],0)),e=rk.c?rk.c(e,h):rk.call(null,e,h),e=V.b(z([H,"What is a REPL?",
e],0)),b=W.b(z([H,"Introduction to Programming with Clojure",b,c,d,e],0)),c=Rk.b(z(["numbers","strings","booleans","keywords"],0)),c=V.b(z([H,"Value types",c],0)),d=Sk.b(z([";; integers\n12\n-42\n\n;; floats\n10.5\n0.00000072725\n\n;; ratios\n1/2\n-7/3"],0)),d=V.b(z([H,"Numbers",d],0)),e=Sk.b(z(["(+ 1 1)  ;\x3d\x3e 1 + 1 \x3d 2\n(- 12 4) ;\x3d\x3e 12 - 4 \x3d 8\n(* 13 2) ;\x3d\x3e 13 * 2 \x3d 26\n(/ 27 9) ;\x3d\x3e 27 / 9 \x3d 3"],0)),e=V.b(z([H,"Arithmetic",e],0)),h=L.a?L.a("1 + 2 * 3 / 4 - 5"):
L.call(null,"1 + 2 * 3 / 4 - 5"),h=Qk.b(z(["Infix: ",h],0)),k=L.a?L.a("(- (+ 1 (/ (* 2 3) 4)) 5)"):L.call(null,"(- (+ 1 (/ (* 2 3) 4)) 5)"),k=Qk.b(z(["Prefix: ",k],0)),h=P.c?P.c(h,k):P.call(null,h,k),k=L.a?L.a("1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9"):L.call(null,"1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9"),k=Qk.b(z(["Infix: ",k],0)),m=L.a?L.a("(+ 1 2 3 4 5 6 7 8 9)"):L.call(null,"(+ 1 2 3 4 5 6 7 8 9)"),m=Qk.b(z(["Prefix: ",m],0)),k=P.c?P.c(k,m):P.call(null,k,m),h=V.b(z([H,"Infix vs. prefix notation",h,k],0)),
k=Sk.b(z(["(+ 4/3 7/8)    ;\x3d\x3e 53/24\n(- 9 4.2 1/2)  ;\x3d\x3e 4.3\n(* 8 1/4)      ;\x3d\x3e 2\n(/ 27/2 1.5)   ;\x3d\x3e 3.0"],0)),k=V.b(z([H,"Arithmetic with all number types",k],0)),m=O.a?O.a("Take your height in feet and inches and convert it to inches using arithmetic in Clojure."):O.call(null,"Take your height in feet and inches and convert it to inches using arithmetic in Clojure."),r=O.a?O.a("Then convert that to centimeters. There are 2.54 centimeters in an inch."):O.call(null,"Then convert that to centimeters. There are 2.54 centimeters in an inch."),
t=O.a?O.a("Lastly, ask two people near you for their height in centimeters. Find the average of your heights."):O.call(null,"Lastly, ask two people near you for their height in centimeters. Find the average of your heights."),v=P.a?P.a("Bonus: convert that average back to feet and inches."):P.call(null,"Bonus: convert that average back to feet and inches."),y=L.a?L.a("(mod x y)"):L.call(null,"(mod x y)"),y=P.c?P.c(y," will give you the remainder when dividing two numbers."):P.call(null,y," will give you the remainder when dividing two numbers."),
v=O.c?O.c(v,y):O.call(null,v,y),m=U.e?U.e(m,r,t,v):U.call(null,m,r,t,v),m=V.b(z([H,"Exercise: Basic arithmetic",m],0)),r=Sk.b(z([Wi,"language-clojure",'"Hello world"\n"This is a longer string that I wrote for purposes of an example."\n"Aubrey said, \\"I think we should go to the Orange Julius.\\""'],0)),r=V.b(z([H,"Strings",r],0)),t=P.a?P.a("Answers to questions"):P.call(null,"Answers to questions"),v=Sk.b(z(["true\nfalse\nnil"],0)),t=V.b(z([H,"Booleans and nil",t,v],0)),c=W.b(z([H,"Simple values",
c,d,e,h,k,m,r,t],0)),d=Sk.b(z(["(def apples 3)\n(def oranges 5)\n(+ apples oranges)"],0)),d=V.b(z([H,"def",d],0)),e=L.a?L.a("my-hometown"):L.call(null,"my-hometown"),e=P.d?P.d("Write the name of your hometown as a string and then assign that string to the symbol ",e,"."):P.call(null,"Write the name of your hometown as a string and then assign that string to the symbol ",e,"."),e=V.b(z([H,"Exercise: Store the name of your hometown",e],0)),d=W.b(z([H,"Assigning names to values",d,e],0));return Pk.b(z([pj,
"mozilla-theme.css",a,b,c,d],0))}()):ok.call(null,F,function(){var a=Ok.b(z([H,"Module 1"],0)),b=P.a?P.a("Clojure is simple and powerful."):P.call(null,"Clojure is simple and powerful."),c=P.a?P.a("Clojure is all-purpose."):P.call(null,"Clojure is all-purpose."),d=sk.a?sk.a("fun"):sk.call(null,"fun"),d=P.d?P.d("Clojure is ",d,"."):P.call(null,"Clojure is ",d,"."),b=V.b(z([H,"Why Clojure?",b,c,d],0)),c=O.a?O.a("data processing"):O.call(null,"data processing"),d=O.a?O.a("concurrent applications"):O.call(null,
"concurrent applications"),e=O.a?O.a("web applications"):O.call(null,"web applications"),h=O.a?O.a("everything!"):O.call(null,"everything!"),c=U.e?U.e(c,d,e,h):U.call(null,c,d,e,h),c=V.b(z([H,"What is Clojure good at?",c],0)),d=Sk.b(z(['(+ 3 4)\n(max 8 17 2)\n(eat "sandwich")'],0)),d=V.b(z([H,"What does Clojure look like?",d],0)),e=K.a?K.a("R"):K.call(null,"R"),e=O.c?O.c(e,"ead"):O.call(null,e,"ead"),h=K.a?K.a("E"):K.call(null,"E"),h=O.c?O.c(h,"val"):O.call(null,h,"val"),k=K.a?K.a("P"):K.call(null,
"P"),k=O.c?O.c(k,"rint"):O.call(null,k,"rint"),m=K.a?K.a("L"):K.call(null,"L"),m=O.c?O.c(m,"oop"):O.call(null,m,"oop"),e=U.e?U.e(e,h,k,m):U.call(null,e,h,k,m),e=Tk.b(z([Xi,40,e],0)),h=N.c?N.c(G,"img/instarepl.png"):N.call(null,G,"img/instarepl.png"),h=Tk.b(z([h],0)),e=rk.c?rk.c(e,h):rk.call(null,e,h),e=V.b(z([H,"What is a REPL?",e],0)),b=W.b(z([H,"Introduction to Programming with Clojure",b,c,d,e],0)),c=Rk.b(z(["numbers","strings","booleans","keywords"],0)),c=V.b(z([H,"Value types",c],0)),d=Sk.b(z([";; integers\n12\n-42\n\n;; floats\n10.5\n0.00000072725\n\n;; ratios\n1/2\n-7/3"],
0)),d=V.b(z([H,"Numbers",d],0)),e=Sk.b(z(["(+ 1 1)  ;\x3d\x3e 1 + 1 \x3d 2\n(- 12 4) ;\x3d\x3e 12 - 4 \x3d 8\n(* 13 2) ;\x3d\x3e 13 * 2 \x3d 26\n(/ 27 9) ;\x3d\x3e 27 / 9 \x3d 3"],0)),e=V.b(z([H,"Arithmetic",e],0)),h=L.a?L.a("1 + 2 * 3 / 4 - 5"):L.call(null,"1 + 2 * 3 / 4 - 5"),h=Qk.b(z(["Infix: ",h],0)),k=L.a?L.a("(- (+ 1 (/ (* 2 3) 4)) 5)"):L.call(null,"(- (+ 1 (/ (* 2 3) 4)) 5)"),k=Qk.b(z(["Prefix: ",k],0)),h=P.c?P.c(h,k):P.call(null,h,k),k=L.a?L.a("1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9"):L.call(null,
"1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9"),k=Qk.b(z(["Infix: ",k],0)),m=L.a?L.a("(+ 1 2 3 4 5 6 7 8 9)"):L.call(null,"(+ 1 2 3 4 5 6 7 8 9)"),m=Qk.b(z(["Prefix: ",m],0)),k=P.c?P.c(k,m):P.call(null,k,m),h=V.b(z([H,"Infix vs. prefix notation",h,k],0)),k=Sk.b(z(["(+ 4/3 7/8)    ;\x3d\x3e 53/24\n(- 9 4.2 1/2)  ;\x3d\x3e 4.3\n(* 8 1/4)      ;\x3d\x3e 2\n(/ 27/2 1.5)   ;\x3d\x3e 3.0"],0)),k=V.b(z([H,"Arithmetic with all number types",k],0)),m=O.a?O.a("Take your height in feet and inches and convert it to inches using arithmetic in Clojure."):
O.call(null,"Take your height in feet and inches and convert it to inches using arithmetic in Clojure."),r=O.a?O.a("Then convert that to centimeters. There are 2.54 centimeters in an inch."):O.call(null,"Then convert that to centimeters. There are 2.54 centimeters in an inch."),t=O.a?O.a("Lastly, ask two people near you for their height in centimeters. Find the average of your heights."):O.call(null,"Lastly, ask two people near you for their height in centimeters. Find the average of your heights."),
v=P.a?P.a("Bonus: convert that average back to feet and inches."):P.call(null,"Bonus: convert that average back to feet and inches."),y=L.a?L.a("(mod x y)"):L.call(null,"(mod x y)"),y=P.c?P.c(y," will give you the remainder when dividing two numbers."):P.call(null,y," will give you the remainder when dividing two numbers."),v=O.c?O.c(v,y):O.call(null,v,y),m=U.e?U.e(m,r,t,v):U.call(null,m,r,t,v),m=V.b(z([H,"Exercise: Basic arithmetic",m],0)),r=Sk.b(z([Wi,"language-clojure",'"Hello world"\n"This is a longer string that I wrote for purposes of an example."\n"Aubrey said, \\"I think we should go to the Orange Julius.\\""'],
0)),r=V.b(z([H,"Strings",r],0)),t=P.a?P.a("Answers to questions"):P.call(null,"Answers to questions"),v=Sk.b(z(["true\nfalse\nnil"],0)),t=V.b(z([H,"Booleans and nil",t,v],0)),c=W.b(z([H,"Simple values",c,d,e,h,k,m,r,t],0)),d=Sk.b(z(["(def apples 3)\n(def oranges 5)\n(+ apples oranges)"],0)),d=V.b(z([H,"def",d],0)),e=L.a?L.a("my-hometown"):L.call(null,"my-hometown"),e=P.d?P.d("Write the name of your hometown as a string and then assign that string to the symbol ",e,"."):P.call(null,"Write the name of your hometown as a string and then assign that string to the symbol ",
e,"."),e=V.b(z([H,"Exercise: Store the name of your hometown",e],0)),d=W.b(z([H,"Assigning names to values",d,e],0));return Pk.b(z([pj,"mozilla-theme.css",a,b,c,d],0))}()));return Fk()});