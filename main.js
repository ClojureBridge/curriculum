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

var g,aa=this;
function l(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==
b&&"undefined"==typeof a.call)return"object";return b}var ba="closure_uid_"+(1E9*Math.random()>>>0),ca=0;function ea(a,b){var c=a.split("."),d=aa;c[0]in d||!d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===b?d=d[e]?d[e]:d[e]={}:d[e]=b};function fa(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c),b%=4294967296;return b};function ga(a,b){for(var c in a)b.call(void 0,a[c],c,a)};function ha(a,b){null!=a&&this.append.apply(this,arguments)}ha.prototype.Ea="";ha.prototype.append=function(a,b,c){this.Ea+=a;if(null!=b)for(var d=1;d<arguments.length;d++)this.Ea+=arguments[d];return this};ha.prototype.toString=function(){return this.Ea};var ia;function ja(){throw Error("No *print-fn* fn set for evaluation environment");}var la=null;function ma(){return new na(null,5,[oa,!0,pa,!0,qa,!1,ra,!1,sa,null],null)}function m(a){return null!=a&&!1!==a}function ta(a){return m(a)?!1:!0}function n(a,b){return a[l(null==b?null:b)]?!0:a._?!0:q?!1:null}function ua(a){return null==a?null:a.constructor}function wa(a,b){var c=ua(b),c=m(m(c)?c.Qb:c)?c.Ob:l(b);return Error(["No protocol method ",a," defined for type ",c,": ",b].join(""))}
function xa(a){var b=a.Ob;return m(b)?b:""+r(a)}function ya(a){for(var b=a.length,c=Array(b),d=0;;)if(d<b)c[d]=a[d],d+=1;else break;return c}var za={},Aa={};function Ba(a){if(a?a.I:a)return a.I(a);var b;b=Ba[l(null==a?null:a)];if(!b&&(b=Ba._,!b))throw wa("ICounted.-count",a);return b.call(null,a)}function Ca(a){if(a?a.H:a)return a.H(a);var b;b=Ca[l(null==a?null:a)];if(!b&&(b=Ca._,!b))throw wa("IEmptyableCollection.-empty",a);return b.call(null,a)}var Da={};
function Ea(a,b){if(a?a.C:a)return a.C(a,b);var c;c=Ea[l(null==a?null:a)];if(!c&&(c=Ea._,!c))throw wa("ICollection.-conj",a);return c.call(null,a,b)}
var Fa={},s=function(){function a(a,b,c){if(a?a.Z:a)return a.Z(a,b,c);var h;h=s[l(null==a?null:a)];if(!h&&(h=s._,!h))throw wa("IIndexed.-nth",a);return h.call(null,a,b,c)}function b(a,b){if(a?a.r:a)return a.r(a,b);var c;c=s[l(null==a?null:a)];if(!c&&(c=s._,!c))throw wa("IIndexed.-nth",a);return c.call(null,a,b)}var c=null,c=function(c,e,f){switch(arguments.length){case 2:return b.call(this,c,e);case 3:return a.call(this,c,e,f)}throw Error("Invalid arity: "+arguments.length);};c.c=b;c.d=a;return c}(),
Ga={};function Ha(a){if(a?a.O:a)return a.O(a);var b;b=Ha[l(null==a?null:a)];if(!b&&(b=Ha._,!b))throw wa("ISeq.-first",a);return b.call(null,a)}function Ia(a){if(a?a.T:a)return a.T(a);var b;b=Ia[l(null==a?null:a)];if(!b&&(b=Ia._,!b))throw wa("ISeq.-rest",a);return b.call(null,a)}
var Ka={},La={},Ma=function(){function a(a,b,c){if(a?a.A:a)return a.A(a,b,c);var h;h=Ma[l(null==a?null:a)];if(!h&&(h=Ma._,!h))throw wa("ILookup.-lookup",a);return h.call(null,a,b,c)}function b(a,b){if(a?a.w:a)return a.w(a,b);var c;c=Ma[l(null==a?null:a)];if(!c&&(c=Ma._,!c))throw wa("ILookup.-lookup",a);return c.call(null,a,b)}var c=null,c=function(c,e,f){switch(arguments.length){case 2:return b.call(this,c,e);case 3:return a.call(this,c,e,f)}throw Error("Invalid arity: "+arguments.length);};c.c=b;
c.d=a;return c}();function Na(a,b){if(a?a.Ha:a)return a.Ha(a,b);var c;c=Na[l(null==a?null:a)];if(!c&&(c=Na._,!c))throw wa("IAssociative.-contains-key?",a);return c.call(null,a,b)}function Oa(a,b,c){if(a?a.pa:a)return a.pa(a,b,c);var d;d=Oa[l(null==a?null:a)];if(!d&&(d=Oa._,!d))throw wa("IAssociative.-assoc",a);return d.call(null,a,b,c)}var Qa={};function Ra(a,b){if(a?a.Ja:a)return a.Ja(a,b);var c;c=Ra[l(null==a?null:a)];if(!c&&(c=Ra._,!c))throw wa("IMap.-dissoc",a);return c.call(null,a,b)}
var Sa={};function Ta(a){if(a?a.Ka:a)return a.Ka(a);var b;b=Ta[l(null==a?null:a)];if(!b&&(b=Ta._,!b))throw wa("IMapEntry.-key",a);return b.call(null,a)}function Ua(a){if(a?a.$a:a)return a.$a(a);var b;b=Ua[l(null==a?null:a)];if(!b&&(b=Ua._,!b))throw wa("IMapEntry.-val",a);return b.call(null,a)}var Va={};function Xa(a,b){if(a?a.Lb:a)return a.Lb(0,b);var c;c=Xa[l(null==a?null:a)];if(!c&&(c=Xa._,!c))throw wa("ISet.-disjoin",a);return c.call(null,a,b)}
function Ya(a){if(a?a.qa:a)return a.qa(a);var b;b=Ya[l(null==a?null:a)];if(!b&&(b=Ya._,!b))throw wa("IStack.-peek",a);return b.call(null,a)}function Za(a){if(a?a.ra:a)return a.ra(a);var b;b=Za[l(null==a?null:a)];if(!b&&(b=Za._,!b))throw wa("IStack.-pop",a);return b.call(null,a)}var ab={};function bb(a,b,c){if(a?a.Ca:a)return a.Ca(a,b,c);var d;d=bb[l(null==a?null:a)];if(!d&&(d=bb._,!d))throw wa("IVector.-assoc-n",a);return d.call(null,a,b,c)}
function cb(a){if(a?a.Gb:a)return a.state;var b;b=cb[l(null==a?null:a)];if(!b&&(b=cb._,!b))throw wa("IDeref.-deref",a);return b.call(null,a)}var db={};function eb(a){if(a?a.B:a)return a.B(a);var b;b=eb[l(null==a?null:a)];if(!b&&(b=eb._,!b))throw wa("IMeta.-meta",a);return b.call(null,a)}var fb={};function gb(a,b){if(a?a.F:a)return a.F(a,b);var c;c=gb[l(null==a?null:a)];if(!c&&(c=gb._,!c))throw wa("IWithMeta.-with-meta",a);return c.call(null,a,b)}
var hb={},ib=function(){function a(a,b,c){if(a?a.N:a)return a.N(a,b,c);var h;h=ib[l(null==a?null:a)];if(!h&&(h=ib._,!h))throw wa("IReduce.-reduce",a);return h.call(null,a,b,c)}function b(a,b){if(a?a.M:a)return a.M(a,b);var c;c=ib[l(null==a?null:a)];if(!c&&(c=ib._,!c))throw wa("IReduce.-reduce",a);return c.call(null,a,b)}var c=null,c=function(c,e,f){switch(arguments.length){case 2:return b.call(this,c,e);case 3:return a.call(this,c,e,f)}throw Error("Invalid arity: "+arguments.length);};c.c=b;c.d=a;
return c}();function jb(a,b){if(a?a.t:a)return a.t(a,b);var c;c=jb[l(null==a?null:a)];if(!c&&(c=jb._,!c))throw wa("IEquiv.-equiv",a);return c.call(null,a,b)}function kb(a){if(a?a.u:a)return a.u(a);var b;b=kb[l(null==a?null:a)];if(!b&&(b=kb._,!b))throw wa("IHash.-hash",a);return b.call(null,a)}var lb={};function mb(a){if(a?a.D:a)return a.D(a);var b;b=mb[l(null==a?null:a)];if(!b&&(b=mb._,!b))throw wa("ISeqable.-seq",a);return b.call(null,a)}var nb={},ob={};
function pb(a){if(a?a.La:a)return a.La(a);var b;b=pb[l(null==a?null:a)];if(!b&&(b=pb._,!b))throw wa("IReversible.-rseq",a);return b.call(null,a)}function qb(a,b){if(a?a.vb:a)return a.vb(a,b);var c;c=qb[l(null==a?null:a)];if(!c&&(c=qb._,!c))throw wa("ISorted.-sorted-seq",a);return c.call(null,a,b)}function rb(a,b,c){if(a?a.wb:a)return a.wb(a,b,c);var d;d=rb[l(null==a?null:a)];if(!d&&(d=rb._,!d))throw wa("ISorted.-sorted-seq-from",a);return d.call(null,a,b,c)}
function sb(a,b){if(a?a.ub:a)return a.ub(a,b);var c;c=sb[l(null==a?null:a)];if(!c&&(c=sb._,!c))throw wa("ISorted.-entry-key",a);return c.call(null,a,b)}function tb(a){if(a?a.tb:a)return a.tb(a);var b;b=tb[l(null==a?null:a)];if(!b&&(b=tb._,!b))throw wa("ISorted.-comparator",a);return b.call(null,a)}function ub(a,b){if(a?a.Nb:a)return a.Nb(0,b);var c;c=ub[l(null==a?null:a)];if(!c&&(c=ub._,!c))throw wa("IWriter.-write",a);return c.call(null,a,b)}var vb={};
function wb(a,b,c){if(a?a.s:a)return a.s(a,b,c);var d;d=wb[l(null==a?null:a)];if(!d&&(d=wb._,!d))throw wa("IPrintWithWriter.-pr-writer",a);return d.call(null,a,b,c)}function xb(a,b,c){if(a?a.yb:a)return a.yb(a,b,c);var d;d=xb[l(null==a?null:a)];if(!d&&(d=xb._,!d))throw wa("IWatchable.-notify-watches",a);return d.call(null,a,b,c)}function yb(a,b,c){if(a?a.xb:a)return a.xb(a,b,c);var d;d=yb[l(null==a?null:a)];if(!d&&(d=yb._,!d))throw wa("IWatchable.-add-watch",a);return d.call(null,a,b,c)}
function zb(a){if(a?a.Ia:a)return a.Ia(a);var b;b=zb[l(null==a?null:a)];if(!b&&(b=zb._,!b))throw wa("IEditableCollection.-as-transient",a);return b.call(null,a)}function Ab(a,b){if(a?a.Oa:a)return a.Oa(a,b);var c;c=Ab[l(null==a?null:a)];if(!c&&(c=Ab._,!c))throw wa("ITransientCollection.-conj!",a);return c.call(null,a,b)}function Bb(a){if(a?a.Pa:a)return a.Pa(a);var b;b=Bb[l(null==a?null:a)];if(!b&&(b=Bb._,!b))throw wa("ITransientCollection.-persistent!",a);return b.call(null,a)}
function Cb(a,b,c){if(a?a.Na:a)return a.Na(a,b,c);var d;d=Cb[l(null==a?null:a)];if(!d&&(d=Cb._,!d))throw wa("ITransientAssociative.-assoc!",a);return d.call(null,a,b,c)}function Db(a,b,c){if(a?a.Mb:a)return a.Mb(0,b,c);var d;d=Db[l(null==a?null:a)];if(!d&&(d=Db._,!d))throw wa("ITransientVector.-assoc-n!",a);return d.call(null,a,b,c)}function Eb(a){if(a?a.Fb:a)return a.Fb();var b;b=Eb[l(null==a?null:a)];if(!b&&(b=Eb._,!b))throw wa("IChunk.-drop-first",a);return b.call(null,a)}
function Fb(a){if(a?a.gb:a)return a.gb(a);var b;b=Fb[l(null==a?null:a)];if(!b&&(b=Fb._,!b))throw wa("IChunkedSeq.-chunked-first",a);return b.call(null,a)}function Cc(a){if(a?a.hb:a)return a.hb(a);var b;b=Cc[l(null==a?null:a)];if(!b&&(b=Cc._,!b))throw wa("IChunkedSeq.-chunked-rest",a);return b.call(null,a)}function Dc(a){if(a?a.fb:a)return a.fb(a);var b;b=Dc[l(null==a?null:a)];if(!b&&(b=Dc._,!b))throw wa("IChunkedNext.-chunked-next",a);return b.call(null,a)}
function Ec(a){this.gc=a;this.p=0;this.k=1073741824}Ec.prototype.Nb=function(a,b){return this.gc.append(b)};function Fc(a){var b=new ha;a.s(null,new Ec(b),ma());return""+r(b)}function Gc(a,b){if(m(u.c?u.c(a,b):u.call(null,a,b)))return 0;var c=ta(a.W);if(m(c?b.W:c))return-1;if(m(a.W)){if(ta(b.W))return 1;c=Hc.c?Hc.c(a.W,b.W):Hc.call(null,a.W,b.W);return 0===c?Hc.c?Hc.c(a.name,b.name):Hc.call(null,a.name,b.name):c}return Ic?Hc.c?Hc.c(a.name,b.name):Hc.call(null,a.name,b.name):null}
function Jc(a,b,c,d,e){this.W=a;this.name=b;this.Aa=c;this.Ba=d;this.ea=e;this.k=2154168321;this.p=4096}g=Jc.prototype;g.s=function(a,b){return ub(b,this.Aa)};g.u=function(){var a=this.Ba;return null!=a?a:this.Ba=a=Kc.c?Kc.c(Lc.a?Lc.a(this.W):Lc.call(null,this.W),Lc.a?Lc.a(this.name):Lc.call(null,this.name)):Kc.call(null,Lc.a?Lc.a(this.W):Lc.call(null,this.W),Lc.a?Lc.a(this.name):Lc.call(null,this.name))};g.F=function(a,b){return new Jc(this.W,this.name,this.Aa,this.Ba,b)};g.B=function(){return this.ea};
g.call=function(){var a=null;return a=function(a,c,d){switch(arguments.length){case 2:return Ma.d(c,this,null);case 3:return Ma.d(c,this,d)}throw Error("Invalid arity: "+arguments.length);}}();g.apply=function(a,b){return this.call.apply(this,[this].concat(ya(b)))};g.a=function(a){return Ma.d(a,this,null)};g.c=function(a,b){return Ma.d(a,this,b)};g.t=function(a,b){return b instanceof Jc?this.Aa===b.Aa:!1};g.toString=function(){return this.Aa};
var Mc=function(){function a(a,b){var c=null!=a?[r(a),r("/"),r(b)].join(""):b;return new Jc(a,b,c,null,null)}function b(a){return a instanceof Jc?a:c.c(null,a)}var c=null,c=function(c,e){switch(arguments.length){case 1:return b.call(this,c);case 2:return a.call(this,c,e)}throw Error("Invalid arity: "+arguments.length);};c.a=b;c.c=a;return c}();
function w(a){if(null==a)return null;if(a&&(a.k&8388608||a.pc))return a.D(null);if(a instanceof Array||"string"===typeof a)return 0===a.length?null:new Oc(a,0);if(n(lb,a))return mb(a);if(q)throw Error([r(a),r("is not ISeqable")].join(""));return null}function y(a){if(null==a)return null;if(a&&(a.k&64||a.Ma))return a.O(null);a=w(a);return null==a?null:Ha(a)}function z(a){return null!=a?a&&(a.k&64||a.Ma)?a.T(null):(a=w(a))?Ia(a):Pc:Pc}
function A(a){return null==a?null:a&&(a.k&128||a.Kb)?a.aa(null):w(z(a))}
var u=function(){function a(a,b){return null==a?null==b:a===b||jb(a,b)}var b=null,c=function(){function a(b,d,k){var p=null;2<arguments.length&&(p=B(Array.prototype.slice.call(arguments,2),0));return c.call(this,b,d,p)}function c(a,d,e){for(;;)if(b.c(a,d))if(A(e))a=d,d=y(e),e=A(e);else return b.c(d,y(e));else return!1}a.j=2;a.g=function(a){var b=y(a);a=A(a);var d=y(a);a=z(a);return c(b,d,a)};a.b=c;return a}(),b=function(b,e,f){switch(arguments.length){case 1:return!0;case 2:return a.call(this,b,e);
default:return c.b(b,e,B(arguments,2))}throw Error("Invalid arity: "+arguments.length);};b.j=2;b.g=c.g;b.a=function(){return!0};b.c=a;b.b=c.b;return b}();Aa["null"]=!0;Ba["null"]=function(){return 0};Date.prototype.t=function(a,b){return b instanceof Date&&this.toString()===b.toString()};jb.number=function(a,b){return a===b};db["function"]=!0;eb["function"]=function(){return null};za["function"]=!0;kb._=function(a){return a[ba]||(a[ba]=++ca)};function Qc(a){return a+1}
var Rc=function(){function a(a,b,c,d){for(var p=Ba(a);;)if(d<p)c=b.c?b.c(c,s.c(a,d)):b.call(null,c,s.c(a,d)),d+=1;else return c}function b(a,b,c){for(var d=Ba(a),p=0;;)if(p<d)c=b.c?b.c(c,s.c(a,p)):b.call(null,c,s.c(a,p)),p+=1;else return c}function c(a,b){var c=Ba(a);if(0===c)return b.q?b.q():b.call(null);for(var d=s.c(a,0),p=1;;)if(p<c)d=b.c?b.c(d,s.c(a,p)):b.call(null,d,s.c(a,p)),p+=1;else return d}var d=null,d=function(d,f,h,k){switch(arguments.length){case 2:return c.call(this,d,f);case 3:return b.call(this,
d,f,h);case 4:return a.call(this,d,f,h,k)}throw Error("Invalid arity: "+arguments.length);};d.c=c;d.d=b;d.f=a;return d}(),Sc=function(){function a(a,b,c,d){for(var p=a.length;;)if(d<p)c=b.c?b.c(c,a[d]):b.call(null,c,a[d]),d+=1;else return c}function b(a,b,c){for(var d=a.length,p=0;;)if(p<d)c=b.c?b.c(c,a[p]):b.call(null,c,a[p]),p+=1;else return c}function c(a,b){var c=a.length;if(0===a.length)return b.q?b.q():b.call(null);for(var d=a[0],p=1;;)if(p<c)d=b.c?b.c(d,a[p]):b.call(null,d,a[p]),p+=1;else return d}
var d=null,d=function(d,f,h,k){switch(arguments.length){case 2:return c.call(this,d,f);case 3:return b.call(this,d,f,h);case 4:return a.call(this,d,f,h,k)}throw Error("Invalid arity: "+arguments.length);};d.c=c;d.d=b;d.f=a;return d}();function Tc(a){return a?a.k&2||a.Tb?!0:a.k?!1:n(Aa,a):n(Aa,a)}function Uc(a){return a?a.k&16||a.Hb?!0:a.k?!1:n(Fa,a):n(Fa,a)}function Oc(a,b){this.e=a;this.o=b;this.k=166199550;this.p=8192}g=Oc.prototype;g.u=function(){return Vc.a?Vc.a(this):Vc.call(null,this)};
g.aa=function(){return this.o+1<this.e.length?new Oc(this.e,this.o+1):null};g.C=function(a,b){return C.c?C.c(b,this):C.call(null,b,this)};g.La=function(){var a=Ba(this);return 0<a?new Wc(this,a-1,null):null};g.toString=function(){return Fc(this)};g.M=function(a,b){return Sc.f(this.e,b,this.e[this.o],this.o+1)};g.N=function(a,b,c){return Sc.f(this.e,b,c,this.o)};g.D=function(){return this};g.I=function(){return this.e.length-this.o};g.O=function(){return this.e[this.o]};
g.T=function(){return this.o+1<this.e.length?new Oc(this.e,this.o+1):Pc};g.t=function(a,b){return Xc.c?Xc.c(this,b):Xc.call(null,this,b)};g.r=function(a,b){var c=b+this.o;return c<this.e.length?this.e[c]:null};g.Z=function(a,b,c){a=b+this.o;return a<this.e.length?this.e[a]:c};g.H=function(){return Pc};
var Yc=function(){function a(a,b){return b<a.length?new Oc(a,b):null}function b(a){return c.c(a,0)}var c=null,c=function(c,e){switch(arguments.length){case 1:return b.call(this,c);case 2:return a.call(this,c,e)}throw Error("Invalid arity: "+arguments.length);};c.a=b;c.c=a;return c}(),B=function(){function a(a,b){return Yc.c(a,b)}function b(a){return Yc.c(a,0)}var c=null,c=function(c,e){switch(arguments.length){case 1:return b.call(this,c);case 2:return a.call(this,c,e)}throw Error("Invalid arity: "+
arguments.length);};c.a=b;c.c=a;return c}();function Wc(a,b,c){this.eb=a;this.o=b;this.i=c;this.k=32374862;this.p=8192}g=Wc.prototype;g.u=function(){return Vc.a?Vc.a(this):Vc.call(null,this)};g.C=function(a,b){return C.c?C.c(b,this):C.call(null,b,this)};g.toString=function(){return Fc(this)};g.M=function(a,b){return Zc.c?Zc.c(b,this):Zc.call(null,b,this)};g.N=function(a,b,c){return Zc.d?Zc.d(b,c,this):Zc.call(null,b,c,this)};g.D=function(){return this};g.I=function(){return this.o+1};
g.O=function(){return s.c(this.eb,this.o)};g.T=function(){return 0<this.o?new Wc(this.eb,this.o-1,null):null};g.t=function(a,b){return Xc.c?Xc.c(this,b):Xc.call(null,this,b)};g.F=function(a,b){return new Wc(this.eb,this.o,b)};g.B=function(){return this.i};g.H=function(){return $c.c?$c.c(Pc,this.i):$c.call(null,Pc,this.i)};jb._=function(a,b){return a===b};
var ad=function(){function a(a,b){return null!=a?Ea(a,b):Ea(Pc,b)}var b=null,c=function(){function a(b,d,k){var p=null;2<arguments.length&&(p=B(Array.prototype.slice.call(arguments,2),0));return c.call(this,b,d,p)}function c(a,d,e){for(;;)if(m(e))a=b.c(a,d),d=y(e),e=A(e);else return b.c(a,d)}a.j=2;a.g=function(a){var b=y(a);a=A(a);var d=y(a);a=z(a);return c(b,d,a)};a.b=c;return a}(),b=function(b,e,f){switch(arguments.length){case 2:return a.call(this,b,e);default:return c.b(b,e,B(arguments,2))}throw Error("Invalid arity: "+
arguments.length);};b.j=2;b.g=c.g;b.c=a;b.b=c.b;return b}();function D(a){if(null!=a)if(a&&(a.k&2||a.Tb))a=a.I(null);else if(a instanceof Array)a=a.length;else if("string"===typeof a)a=a.length;else if(n(Aa,a))a=Ba(a);else if(q)a:{a=w(a);for(var b=0;;){if(Tc(a)){a=b+Ba(a);break a}a=A(a);b+=1}a=void 0}else a=null;else a=0;return a}
var bd=function(){function a(a,b,c){for(;;){if(null==a)return c;if(0===b)return w(a)?y(a):c;if(Uc(a))return s.d(a,b,c);if(w(a))a=A(a),b-=1;else return q?c:null}}function b(a,b){for(;;){if(null==a)throw Error("Index out of bounds");if(0===b){if(w(a))return y(a);throw Error("Index out of bounds");}if(Uc(a))return s.c(a,b);if(w(a)){var c=A(a),h=b-1;a=c;b=h}else{if(q)throw Error("Index out of bounds");return null}}}var c=null,c=function(c,e,f){switch(arguments.length){case 2:return b.call(this,c,e);case 3:return a.call(this,
c,e,f)}throw Error("Invalid arity: "+arguments.length);};c.c=b;c.d=a;return c}(),E=function(){function a(a,b,c){if(null!=a){if(a&&(a.k&16||a.Hb))return a.Z(null,b,c);if(a instanceof Array||"string"===typeof a)return b<a.length?a[b]:c;if(n(Fa,a))return s.c(a,b);if(q){if(a?a.k&64||a.Ma||(a.k?0:n(Ga,a)):n(Ga,a))return bd.d(a,b,c);throw Error([r("nth not supported on this type "),r(xa(ua(a)))].join(""));}return null}return c}function b(a,b){if(null==a)return null;if(a&&(a.k&16||a.Hb))return a.r(null,
b);if(a instanceof Array||"string"===typeof a)return b<a.length?a[b]:null;if(n(Fa,a))return s.c(a,b);if(q){if(a?a.k&64||a.Ma||(a.k?0:n(Ga,a)):n(Ga,a))return bd.c(a,b);throw Error([r("nth not supported on this type "),r(xa(ua(a)))].join(""));}return null}var c=null,c=function(c,e,f){switch(arguments.length){case 2:return b.call(this,c,e);case 3:return a.call(this,c,e,f)}throw Error("Invalid arity: "+arguments.length);};c.c=b;c.d=a;return c}(),cd=function(){function a(a,b,c){return null!=a?a&&(a.k&
256||a.Wb)?a.A(null,b,c):a instanceof Array?b<a.length?a[b]:c:"string"===typeof a?b<a.length?a[b]:c:n(La,a)?Ma.d(a,b,c):q?c:null:c}function b(a,b){return null==a?null:a&&(a.k&256||a.Wb)?a.w(null,b):a instanceof Array?b<a.length?a[b]:null:"string"===typeof a?b<a.length?a[b]:null:n(La,a)?Ma.c(a,b):null}var c=null,c=function(c,e,f){switch(arguments.length){case 2:return b.call(this,c,e);case 3:return a.call(this,c,e,f)}throw Error("Invalid arity: "+arguments.length);};c.c=b;c.d=a;return c}(),ed=function(){function a(a,
b,c){return null!=a?Oa(a,b,c):dd.c?dd.c([b],[c]):dd.call(null,[b],[c])}var b=null,c=function(){function a(b,d,k,p){var t=null;3<arguments.length&&(t=B(Array.prototype.slice.call(arguments,3),0));return c.call(this,b,d,k,t)}function c(a,d,e,p){for(;;)if(a=b.d(a,d,e),m(p))d=y(p),e=y(A(p)),p=A(A(p));else return a}a.j=3;a.g=function(a){var b=y(a);a=A(a);var d=y(a);a=A(a);var p=y(a);a=z(a);return c(b,d,p,a)};a.b=c;return a}(),b=function(b,e,f,h){switch(arguments.length){case 3:return a.call(this,b,e,f);
default:return c.b(b,e,f,B(arguments,3))}throw Error("Invalid arity: "+arguments.length);};b.j=3;b.g=c.g;b.d=a;b.b=c.b;return b}(),fd=function(){function a(a,b){return null==a?null:Ra(a,b)}var b=null,c=function(){function a(b,d,k){var p=null;2<arguments.length&&(p=B(Array.prototype.slice.call(arguments,2),0));return c.call(this,b,d,p)}function c(a,d,e){for(;;){if(null==a)return null;a=b.c(a,d);if(m(e))d=y(e),e=A(e);else return a}}a.j=2;a.g=function(a){var b=y(a);a=A(a);var d=y(a);a=z(a);return c(b,
d,a)};a.b=c;return a}(),b=function(b,e,f){switch(arguments.length){case 1:return b;case 2:return a.call(this,b,e);default:return c.b(b,e,B(arguments,2))}throw Error("Invalid arity: "+arguments.length);};b.j=2;b.g=c.g;b.a=function(a){return a};b.c=a;b.b=c.b;return b}();function gd(a){var b="function"==l(a);return b?b:a?m(m(null)?null:a.Sb)?!0:a.Pb?!1:n(za,a):n(za,a)}
var $c=function hd(b,c){return gd(b)&&!(b?b.k&262144||b.tc||(b.k?0:n(fb,b)):n(fb,b))?hd(function(){"undefined"===typeof ia&&(ia=function(b,c,f,h){this.i=b;this.Ta=c;this.ic=f;this.ec=h;this.p=0;this.k=393217},ia.Qb=!0,ia.Ob="cljs.core/t10901",ia.ac=function(b){return ub(b,"cljs.core/t10901")},ia.prototype.call=function(){function b(d,h){d=this;var k=null;1<arguments.length&&(k=B(Array.prototype.slice.call(arguments,1),0));return c.call(this,d,k)}function c(b,d){return id.c?id.c(b.Ta,d):id.call(null,
b.Ta,d)}b.j=1;b.g=function(b){var d=y(b);b=z(b);return c(d,b)};b.b=c;return b}(),ia.prototype.apply=function(b,c){return this.call.apply(this,[this].concat(ya(c)))},ia.prototype.c=function(){function b(d){var h=null;0<arguments.length&&(h=B(Array.prototype.slice.call(arguments,0),0));return c.call(this,h)}function c(b){return id.c?id.c(self__.Ta,b):id.call(null,self__.Ta,b)}b.j=0;b.g=function(b){b=w(b);return c(b)};b.b=c;return b}(),ia.prototype.Sb=!0,ia.prototype.B=function(){return this.ec},ia.prototype.F=
function(b,c){return new ia(this.i,this.Ta,this.ic,c)});return new ia(c,b,hd,null)}(),c):null==b?null:gb(b,c)};function jd(a){var b=null!=a;return(b?a?a.k&131072||a.Yb||(a.k?0:n(db,a)):n(db,a):b)?eb(a):null}function kd(a){return null==a?null:Ya(a)}
var ld=function(){function a(a,b){return null==a?null:Xa(a,b)}var b=null,c=function(){function a(b,d,k){var p=null;2<arguments.length&&(p=B(Array.prototype.slice.call(arguments,2),0));return c.call(this,b,d,p)}function c(a,d,e){for(;;){if(null==a)return null;a=b.c(a,d);if(m(e))d=y(e),e=A(e);else return a}}a.j=2;a.g=function(a){var b=y(a);a=A(a);var d=y(a);a=z(a);return c(b,d,a)};a.b=c;return a}(),b=function(b,e,f){switch(arguments.length){case 1:return b;case 2:return a.call(this,b,e);default:return c.b(b,
e,B(arguments,2))}throw Error("Invalid arity: "+arguments.length);};b.j=2;b.g=c.g;b.a=function(a){return a};b.c=a;b.b=c.b;return b}(),md={},nd=0;function Lc(a){if(a&&(a.k&4194304||a.mc))a=a.u(null);else if("number"===typeof a)a=Math.floor(a)%2147483647;else if(!0===a)a=1;else if(!1===a)a=0;else if("string"===typeof a){255<nd&&(md={},nd=0);var b=md[a];"number"!==typeof b&&(b=fa(a),md[a]=b,nd+=1);a=b}else a=null==a?0:q?kb(a):null;return a}
function od(a){return null==a?!1:a?a.k&1024||a.nc?!0:a.k?!1:n(Qa,a):n(Qa,a)}function pd(a){return a?a.k&16384||a.sc?!0:a.k?!1:n(ab,a):n(ab,a)}function qd(a){return a?a.p&512||a.jc?!0:!1:!1}function rd(a){var b=[];ga(a,function(a,d){return b.push(d)});return b}function sd(a,b,c,d,e){for(;0!==e;)c[d]=a[b],d+=1,e-=1,b+=1}var td={};function ud(a){return null==a?!1:a?a.k&64||a.Ma?!0:a.k?!1:n(Ga,a):n(Ga,a)}function vd(a){return m(a)?!0:!1}function wd(a,b){return cd.d(a,b,td)===td?!1:!0}
function Hc(a,b){if(a===b)return 0;if(null==a)return-1;if(null==b)return 1;if(ua(a)===ua(b))return a&&(a.p&2048||a.Ya)?a.Za(null,b):a>b?1:a<b?-1:0;if(q)throw Error("compare on non-nil objects of different types");return null}
var xd=function(){function a(a,b,c,h){for(;;){var k=Hc(E.c(a,h),E.c(b,h));if(0===k&&h+1<c)h+=1;else return k}}function b(a,b){var f=D(a),h=D(b);return f<h?-1:f>h?1:q?c.f(a,b,f,0):null}var c=null,c=function(c,e,f,h){switch(arguments.length){case 2:return b.call(this,c,e);case 4:return a.call(this,c,e,f,h)}throw Error("Invalid arity: "+arguments.length);};c.c=b;c.f=a;return c}(),Zc=function(){function a(a,b,c){for(c=w(c);;)if(c)b=a.c?a.c(b,y(c)):a.call(null,b,y(c)),c=A(c);else return b}function b(a,
b){var c=w(b);return c?yd.d?yd.d(a,y(c),A(c)):yd.call(null,a,y(c),A(c)):a.q?a.q():a.call(null)}var c=null,c=function(c,e,f){switch(arguments.length){case 2:return b.call(this,c,e);case 3:return a.call(this,c,e,f)}throw Error("Invalid arity: "+arguments.length);};c.c=b;c.d=a;return c}(),yd=function(){function a(a,b,c){return c&&(c.k&524288||c.$b)?c.N(null,a,b):c instanceof Array?Sc.d(c,a,b):"string"===typeof c?Sc.d(c,a,b):n(hb,c)?ib.d(c,a,b):q?Zc.d(a,b,c):null}function b(a,b){return b&&(b.k&524288||
b.$b)?b.M(null,a):b instanceof Array?Sc.c(b,a):"string"===typeof b?Sc.c(b,a):n(hb,b)?ib.c(b,a):q?Zc.c(a,b):null}var c=null,c=function(c,e,f){switch(arguments.length){case 2:return b.call(this,c,e);case 3:return a.call(this,c,e,f)}throw Error("Invalid arity: "+arguments.length);};c.c=b;c.d=a;return c}(),zd=function(){var a=null,b=function(){function a(c,f,h){var k=null;2<arguments.length&&(k=B(Array.prototype.slice.call(arguments,2),0));return b.call(this,c,f,k)}function b(a,c,d){for(;;)if(a<c)if(A(d))a=
c,c=y(d),d=A(d);else return c<y(d);else return!1}a.j=2;a.g=function(a){var c=y(a);a=A(a);var h=y(a);a=z(a);return b(c,h,a)};a.b=b;return a}(),a=function(a,d,e){switch(arguments.length){case 1:return!0;case 2:return a<d;default:return b.b(a,d,B(arguments,2))}throw Error("Invalid arity: "+arguments.length);};a.j=2;a.g=b.g;a.a=function(){return!0};a.c=function(a,b){return a<b};a.b=b.b;return a}(),Ad=function(){var a=null,b=function(){function a(c,f,h){var k=null;2<arguments.length&&(k=B(Array.prototype.slice.call(arguments,
2),0));return b.call(this,c,f,k)}function b(a,c,d){for(;;)if(a<=c)if(A(d))a=c,c=y(d),d=A(d);else return c<=y(d);else return!1}a.j=2;a.g=function(a){var c=y(a);a=A(a);var h=y(a);a=z(a);return b(c,h,a)};a.b=b;return a}(),a=function(a,d,e){switch(arguments.length){case 1:return!0;case 2:return a<=d;default:return b.b(a,d,B(arguments,2))}throw Error("Invalid arity: "+arguments.length);};a.j=2;a.g=b.g;a.a=function(){return!0};a.c=function(a,b){return a<=b};a.b=b.b;return a}(),Bd=function(){var a=null,
b=function(){function a(c,f,h){var k=null;2<arguments.length&&(k=B(Array.prototype.slice.call(arguments,2),0));return b.call(this,c,f,k)}function b(a,c,d){for(;;)if(a>c)if(A(d))a=c,c=y(d),d=A(d);else return c>y(d);else return!1}a.j=2;a.g=function(a){var c=y(a);a=A(a);var h=y(a);a=z(a);return b(c,h,a)};a.b=b;return a}(),a=function(a,d,e){switch(arguments.length){case 1:return!0;case 2:return a>d;default:return b.b(a,d,B(arguments,2))}throw Error("Invalid arity: "+arguments.length);};a.j=2;a.g=b.g;
a.a=function(){return!0};a.c=function(a,b){return a>b};a.b=b.b;return a}(),Kd=function(){var a=null,b=function(){function a(c,f,h){var k=null;2<arguments.length&&(k=B(Array.prototype.slice.call(arguments,2),0));return b.call(this,c,f,k)}function b(a,c,d){for(;;)if(a>=c)if(A(d))a=c,c=y(d),d=A(d);else return c>=y(d);else return!1}a.j=2;a.g=function(a){var c=y(a);a=A(a);var h=y(a);a=z(a);return b(c,h,a)};a.b=b;return a}(),a=function(a,d,e){switch(arguments.length){case 1:return!0;case 2:return a>=d;
default:return b.b(a,d,B(arguments,2))}throw Error("Invalid arity: "+arguments.length);};a.j=2;a.g=b.g;a.a=function(){return!0};a.c=function(a,b){return a>=b};a.b=b.b;return a}();function Od(a){return 0<=a?Math.floor.a?Math.floor.a(a):Math.floor.call(null,a):Math.ceil.a?Math.ceil.a(a):Math.ceil.call(null,a)}function Pd(a){a-=a>>1&1431655765;a=(a&858993459)+(a>>2&858993459);return 16843009*(a+(a>>4)&252645135)>>24}function gf(a){var b=1;for(a=w(a);;)if(a&&0<b)b-=1,a=A(a);else return a}
var r=function(){function a(a){return null==a?"":a.toString()}var b=null,c=function(){function a(b,d){var k=null;1<arguments.length&&(k=B(Array.prototype.slice.call(arguments,1),0));return c.call(this,b,k)}function c(a,d){for(var e=new ha(b.a(a)),p=d;;)if(m(p))e=e.append(b.a(y(p))),p=A(p);else return e.toString()}a.j=1;a.g=function(a){var b=y(a);a=z(a);return c(b,a)};a.b=c;return a}(),b=function(b,e){switch(arguments.length){case 0:return"";case 1:return a.call(this,b);default:return c.b(b,B(arguments,
1))}throw Error("Invalid arity: "+arguments.length);};b.j=1;b.g=c.g;b.q=function(){return""};b.a=a;b.b=c.b;return b}(),hf=function(){var a=null,a=function(a,c,d){switch(arguments.length){case 2:return a.substring(c);case 3:return a.substring(c,d)}throw Error("Invalid arity: "+arguments.length);};a.c=function(a,c){return a.substring(c)};a.d=function(a,c,d){return a.substring(c,d)};return a}();
function Xc(a,b){return vd((b?b.k&16777216||b.qc||(b.k?0:n(nb,b)):n(nb,b))?function(){for(var c=w(a),d=w(b);;){if(null==c)return null==d;if(null==d)return!1;if(u.c(y(c),y(d)))c=A(c),d=A(d);else return q?!1:null}}():null)}function Kc(a,b){return a^b+2654435769+(a<<6)+(a>>2)}function Vc(a){if(w(a)){var b=Lc(y(a));for(a=A(a);;){if(null==a)return b;b=Kc(b,Lc(y(a)));a=A(a)}}else return 0}
function jf(a){var b=0;for(a=w(a);;)if(a){var c=y(a),b=(b+(Lc(kf.a?kf.a(c):kf.call(null,c))^Lc(lf.a?lf.a(c):lf.call(null,c))))%4503599627370496;a=A(a)}else return b}function mf(a,b,c,d,e){this.i=a;this.first=b;this.ua=c;this.count=d;this.m=e;this.k=65937646;this.p=8192}g=mf.prototype;g.u=function(){var a=this.m;return null!=a?a:this.m=a=Vc(this)};g.aa=function(){return 1===this.count?null:this.ua};g.C=function(a,b){return new mf(this.i,b,this,this.count+1,null)};g.toString=function(){return Fc(this)};
g.M=function(a,b){return Zc.c(b,this)};g.N=function(a,b,c){return Zc.d(b,c,this)};g.D=function(){return this};g.I=function(){return this.count};g.qa=function(){return this.first};g.ra=function(){return Ia(this)};g.O=function(){return this.first};g.T=function(){return 1===this.count?Pc:this.ua};g.t=function(a,b){return Xc(this,b)};g.F=function(a,b){return new mf(b,this.first,this.ua,this.count,this.m)};g.B=function(){return this.i};g.H=function(){return Pc};
function nf(a){this.i=a;this.k=65937614;this.p=8192}g=nf.prototype;g.u=function(){return 0};g.aa=function(){return null};g.C=function(a,b){return new mf(this.i,b,null,1,null)};g.toString=function(){return Fc(this)};g.M=function(a,b){return Zc.c(b,this)};g.N=function(a,b,c){return Zc.d(b,c,this)};g.D=function(){return null};g.I=function(){return 0};g.qa=function(){return null};g.ra=function(){throw Error("Can't pop empty list");};g.O=function(){return null};g.T=function(){return Pc};
g.t=function(a,b){return Xc(this,b)};g.F=function(a,b){return new nf(b)};g.B=function(){return this.i};g.H=function(){return this};var Pc=new nf(null);function of(a){return pb(a)}function pf(a){return(a?a.k&134217728||a.oc||(a.k?0:n(ob,a)):n(ob,a))?pb(a):yd.d(ad,Pc,a)}
var qf=function(){function a(a){var d=null;0<arguments.length&&(d=B(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){var b;if(a instanceof Oc&&0===a.o)b=a.e;else a:{for(b=[];;)if(null!=a)b.push(a.O(null)),a=a.aa(null);else break a;b=void 0}a=b.length;for(var e=Pc;;)if(0<a){var f=a-1,e=e.C(null,b[a-1]);a=f}else return e}a.j=0;a.g=function(a){a=w(a);return b(a)};a.b=b;return a}();
function rf(a,b,c,d){this.i=a;this.first=b;this.ua=c;this.m=d;this.k=65929452;this.p=8192}g=rf.prototype;g.u=function(){var a=this.m;return null!=a?a:this.m=a=Vc(this)};g.aa=function(){return null==this.ua?null:w(this.ua)};g.C=function(a,b){return new rf(null,b,this,this.m)};g.toString=function(){return Fc(this)};g.M=function(a,b){return Zc.c(b,this)};g.N=function(a,b,c){return Zc.d(b,c,this)};g.D=function(){return this};g.O=function(){return this.first};g.T=function(){return null==this.ua?Pc:this.ua};
g.t=function(a,b){return Xc(this,b)};g.F=function(a,b){return new rf(b,this.first,this.ua,this.m)};g.B=function(){return this.i};g.H=function(){return $c(Pc,this.i)};function C(a,b){var c=null==b;return(c?c:b&&(b.k&64||b.Ma))?new rf(null,a,b,null):new rf(null,a,w(b),null)}function F(a,b,c,d){this.W=a;this.name=b;this.xa=c;this.Ba=d;this.k=2153775105;this.p=4096}g=F.prototype;g.s=function(a,b){return ub(b,[r(":"),r(this.xa)].join(""))};
g.u=function(){null==this.Ba&&(this.Ba=Kc(Lc(this.W),Lc(this.name))+2654435769);return this.Ba};g.call=function(){var a=null;return a=function(a,c,d){switch(arguments.length){case 2:return cd.c(c,this);case 3:return cd.d(c,this,d)}throw Error("Invalid arity: "+arguments.length);}}();g.apply=function(a,b){return this.call.apply(this,[this].concat(ya(b)))};g.a=function(a){return cd.c(a,this)};g.c=function(a,b){return cd.d(a,this,b)};g.t=function(a,b){return b instanceof F?this.xa===b.xa:!1};
g.toString=function(){return[r(":"),r(this.xa)].join("")};function sf(a){return a instanceof F}
var uf=function(){function a(a,b){return new F(a,b,[r(m(a)?[r(a),r("/")].join(""):null),r(b)].join(""),null)}function b(a){if(a instanceof F)return a;if(a instanceof Jc){var b;if(a&&(a.p&4096||a.Zb))b=a.W;else throw Error([r("Doesn't support namespace: "),r(a)].join(""));return new F(b,tf.a?tf.a(a):tf.call(null,a),a.Aa,null)}return"string"===typeof a?(b=a.split("/"),2===b.length?new F(b[0],b[1],a,null):new F(null,b[0],a,null)):null}var c=null,c=function(c,e){switch(arguments.length){case 1:return b.call(this,
c);case 2:return a.call(this,c,e)}throw Error("Invalid arity: "+arguments.length);};c.a=b;c.c=a;return c}();function vf(a,b,c,d){this.i=a;this.fn=b;this.K=c;this.m=d;this.p=0;this.k=32374988}g=vf.prototype;g.u=function(){var a=this.m;return null!=a?a:this.m=a=Vc(this)};g.aa=function(){mb(this);return null==this.K?null:A(this.K)};g.C=function(a,b){return C(b,this)};g.toString=function(){return Fc(this)};function wf(a){null!=a.fn&&(a.K=a.fn.q?a.fn.q():a.fn.call(null),a.fn=null);return a.K}
g.M=function(a,b){return Zc.c(b,this)};g.N=function(a,b,c){return Zc.d(b,c,this)};g.D=function(){wf(this);if(null==this.K)return null;for(var a=this.K;;)if(a instanceof vf)a=wf(a);else return this.K=a,w(this.K)};g.O=function(){mb(this);return null==this.K?null:y(this.K)};g.T=function(){mb(this);return null!=this.K?z(this.K):Pc};g.t=function(a,b){return Xc(this,b)};g.F=function(a,b){return new vf(b,this.fn,this.K,this.m)};g.B=function(){return this.i};g.H=function(){return $c(Pc,this.i)};
function xf(a,b){this.cb=a;this.end=b;this.p=0;this.k=2}xf.prototype.I=function(){return this.end};xf.prototype.add=function(a){this.cb[this.end]=a;return this.end+=1};xf.prototype.Q=function(){var a=new yf(this.cb,0,this.end);this.cb=null;return a};function zf(a){return new xf(Array(a),0)}function yf(a,b,c){this.e=a;this.off=b;this.end=c;this.p=0;this.k=524306}g=yf.prototype;g.M=function(a,b){return Sc.f(this.e,b,this.e[this.off],this.off+1)};g.N=function(a,b,c){return Sc.f(this.e,b,c,this.off)};
g.Fb=function(){if(this.off===this.end)throw Error("-drop-first of empty chunk");return new yf(this.e,this.off+1,this.end)};g.r=function(a,b){return this.e[this.off+b]};g.Z=function(a,b,c){return 0<=b&&b<this.end-this.off?this.e[this.off+b]:c};g.I=function(){return this.end-this.off};
var Af=function(){function a(a,b,c){return new yf(a,b,c)}function b(a,b){return new yf(a,b,a.length)}function c(a){return new yf(a,0,a.length)}var d=null,d=function(d,f,h){switch(arguments.length){case 1:return c.call(this,d);case 2:return b.call(this,d,f);case 3:return a.call(this,d,f,h)}throw Error("Invalid arity: "+arguments.length);};d.a=c;d.c=b;d.d=a;return d}();function Bf(a,b,c,d){this.Q=a;this.ka=b;this.i=c;this.m=d;this.k=31850732;this.p=1536}g=Bf.prototype;
g.u=function(){var a=this.m;return null!=a?a:this.m=a=Vc(this)};g.aa=function(){if(1<Ba(this.Q))return new Bf(Eb(this.Q),this.ka,this.i,null);var a=mb(this.ka);return null==a?null:a};g.C=function(a,b){return C(b,this)};g.toString=function(){return Fc(this)};g.D=function(){return this};g.O=function(){return s.c(this.Q,0)};g.T=function(){return 1<Ba(this.Q)?new Bf(Eb(this.Q),this.ka,this.i,null):null==this.ka?Pc:this.ka};g.fb=function(){return null==this.ka?null:this.ka};
g.t=function(a,b){return Xc(this,b)};g.F=function(a,b){return new Bf(this.Q,this.ka,b,this.m)};g.B=function(){return this.i};g.H=function(){return $c(Pc,this.i)};g.gb=function(){return this.Q};g.hb=function(){return null==this.ka?Pc:this.ka};function Cf(a,b){return 0===Ba(a)?b:new Bf(a,b,null,null)}function Df(a){for(var b=[];;)if(w(a))b.push(y(a)),a=A(a);else return b}function Ef(a,b){if(Tc(a))return D(a);for(var c=a,d=b,e=0;;)if(0<d&&w(c))c=A(c),d-=1,e+=1;else return e}
var Gf=function Ff(b){return null==b?null:null==A(b)?w(y(b)):q?C(y(b),Ff(A(b))):null},Hf=function(){function a(a,b){return new vf(null,function(){var c=w(a);return c?qd(c)?Cf(Fb(c),d.c(Cc(c),b)):C(y(c),d.c(z(c),b)):b},null,null)}function b(a){return new vf(null,function(){return a},null,null)}function c(){return new vf(null,function(){return null},null,null)}var d=null,e=function(){function a(c,d,e){var f=null;2<arguments.length&&(f=B(Array.prototype.slice.call(arguments,2),0));return b.call(this,
c,d,f)}function b(a,c,e){return function x(a,b){return new vf(null,function(){var c=w(a);return c?qd(c)?Cf(Fb(c),x(Cc(c),b)):C(y(c),x(z(c),b)):m(b)?x(y(b),A(b)):null},null,null)}(d.c(a,c),e)}a.j=2;a.g=function(a){var c=y(a);a=A(a);var d=y(a);a=z(a);return b(c,d,a)};a.b=b;return a}(),d=function(d,h,k){switch(arguments.length){case 0:return c.call(this);case 1:return b.call(this,d);case 2:return a.call(this,d,h);default:return e.b(d,h,B(arguments,2))}throw Error("Invalid arity: "+arguments.length);
};d.j=2;d.g=e.g;d.q=c;d.a=b;d.c=a;d.b=e.b;return d}(),If=function(){function a(a,b,c,d){return C(a,C(b,C(c,d)))}function b(a,b,c){return C(a,C(b,c))}var c=null,d=function(){function a(c,d,e,t,v){var x=null;4<arguments.length&&(x=B(Array.prototype.slice.call(arguments,4),0));return b.call(this,c,d,e,t,x)}function b(a,c,d,e,f){return C(a,C(c,C(d,C(e,Gf(f)))))}a.j=4;a.g=function(a){var c=y(a);a=A(a);var d=y(a);a=A(a);var e=y(a);a=A(a);var v=y(a);a=z(a);return b(c,d,e,v,a)};a.b=b;return a}(),c=function(c,
f,h,k,p){switch(arguments.length){case 1:return w(c);case 2:return C(c,f);case 3:return b.call(this,c,f,h);case 4:return a.call(this,c,f,h,k);default:return d.b(c,f,h,k,B(arguments,4))}throw Error("Invalid arity: "+arguments.length);};c.j=4;c.g=d.g;c.a=function(a){return w(a)};c.c=function(a,b){return C(a,b)};c.d=b;c.f=a;c.b=d.b;return c}(),Jf=function(){var a=null,b=function(){function a(c,f,h,k){var p=null;3<arguments.length&&(p=B(Array.prototype.slice.call(arguments,3),0));return b.call(this,c,
f,h,p)}function b(a,c,d,k){for(;;)if(a=Cb(a,c,d),m(k))c=y(k),d=y(A(k)),k=A(A(k));else return a}a.j=3;a.g=function(a){var c=y(a);a=A(a);var h=y(a);a=A(a);var k=y(a);a=z(a);return b(c,h,k,a)};a.b=b;return a}(),a=function(a,d,e,f){switch(arguments.length){case 3:return Cb(a,d,e);default:return b.b(a,d,e,B(arguments,3))}throw Error("Invalid arity: "+arguments.length);};a.j=3;a.g=b.g;a.d=function(a,b,e){return Cb(a,b,e)};a.b=b.b;return a}();
function Kf(a,b,c){var d=w(c);if(0===b)return a.q?a.q():a.call(null);c=Ha(d);var e=Ia(d);if(1===b)return a.a?a.a(c):a.a?a.a(c):a.call(null,c);var d=Ha(e),f=Ia(e);if(2===b)return a.c?a.c(c,d):a.c?a.c(c,d):a.call(null,c,d);var e=Ha(f),h=Ia(f);if(3===b)return a.d?a.d(c,d,e):a.d?a.d(c,d,e):a.call(null,c,d,e);var f=Ha(h),k=Ia(h);if(4===b)return a.f?a.f(c,d,e,f):a.f?a.f(c,d,e,f):a.call(null,c,d,e,f);h=Ha(k);k=Ia(k);if(5===b)return a.l?a.l(c,d,e,f,h):a.l?a.l(c,d,e,f,h):a.call(null,c,d,e,f,h);a=Ha(k);var p=
Ia(k);if(6===b)return a.n?a.n(c,d,e,f,h,a):a.n?a.n(c,d,e,f,h,a):a.call(null,c,d,e,f,h,a);var k=Ha(p),t=Ia(p);if(7===b)return a.Y?a.Y(c,d,e,f,h,a,k):a.Y?a.Y(c,d,e,f,h,a,k):a.call(null,c,d,e,f,h,a,k);var p=Ha(t),v=Ia(t);if(8===b)return a.fa?a.fa(c,d,e,f,h,a,k,p):a.fa?a.fa(c,d,e,f,h,a,k,p):a.call(null,c,d,e,f,h,a,k,p);var t=Ha(v),x=Ia(v);if(9===b)return a.sb?a.sb(c,d,e,f,h,a,k,p,t):a.sb?a.sb(c,d,e,f,h,a,k,p,t):a.call(null,c,d,e,f,h,a,k,p,t);var v=Ha(x),G=Ia(x);if(10===b)return a.R?a.R(c,d,e,f,h,a,k,
p,t,v):a.R?a.R(c,d,e,f,h,a,k,p,t,v):a.call(null,c,d,e,f,h,a,k,p,t,v);var x=Ha(G),J=Ia(G);if(11===b)return a.ib?a.ib(c,d,e,f,h,a,k,p,t,v,x):a.ib?a.ib(c,d,e,f,h,a,k,p,t,v,x):a.call(null,c,d,e,f,h,a,k,p,t,v,x);var G=Ha(J),Z=Ia(J);if(12===b)return a.jb?a.jb(c,d,e,f,h,a,k,p,t,v,x,G):a.jb?a.jb(c,d,e,f,h,a,k,p,t,v,x,G):a.call(null,c,d,e,f,h,a,k,p,t,v,x,G);var J=Ha(Z),da=Ia(Z);if(13===b)return a.kb?a.kb(c,d,e,f,h,a,k,p,t,v,x,G,J):a.kb?a.kb(c,d,e,f,h,a,k,p,t,v,x,G,J):a.call(null,c,d,e,f,h,a,k,p,t,v,x,G,J);
var Z=Ha(da),ka=Ia(da);if(14===b)return a.lb?a.lb(c,d,e,f,h,a,k,p,t,v,x,G,J,Z):a.lb?a.lb(c,d,e,f,h,a,k,p,t,v,x,G,J,Z):a.call(null,c,d,e,f,h,a,k,p,t,v,x,G,J,Z);var da=Ha(ka),va=Ia(ka);if(15===b)return a.mb?a.mb(c,d,e,f,h,a,k,p,t,v,x,G,J,Z,da):a.mb?a.mb(c,d,e,f,h,a,k,p,t,v,x,G,J,Z,da):a.call(null,c,d,e,f,h,a,k,p,t,v,x,G,J,Z,da);var ka=Ha(va),Ja=Ia(va);if(16===b)return a.nb?a.nb(c,d,e,f,h,a,k,p,t,v,x,G,J,Z,da,ka):a.nb?a.nb(c,d,e,f,h,a,k,p,t,v,x,G,J,Z,da,ka):a.call(null,c,d,e,f,h,a,k,p,t,v,x,G,J,Z,da,
ka);var va=Ha(Ja),Pa=Ia(Ja);if(17===b)return a.ob?a.ob(c,d,e,f,h,a,k,p,t,v,x,G,J,Z,da,ka,va):a.ob?a.ob(c,d,e,f,h,a,k,p,t,v,x,G,J,Z,da,ka,va):a.call(null,c,d,e,f,h,a,k,p,t,v,x,G,J,Z,da,ka,va);var Ja=Ha(Pa),Wa=Ia(Pa);if(18===b)return a.pb?a.pb(c,d,e,f,h,a,k,p,t,v,x,G,J,Z,da,ka,va,Ja):a.pb?a.pb(c,d,e,f,h,a,k,p,t,v,x,G,J,Z,da,ka,va,Ja):a.call(null,c,d,e,f,h,a,k,p,t,v,x,G,J,Z,da,ka,va,Ja);Pa=Ha(Wa);Wa=Ia(Wa);if(19===b)return a.qb?a.qb(c,d,e,f,h,a,k,p,t,v,x,G,J,Z,da,ka,va,Ja,Pa):a.qb?a.qb(c,d,e,f,h,a,k,
p,t,v,x,G,J,Z,da,ka,va,Ja,Pa):a.call(null,c,d,e,f,h,a,k,p,t,v,x,G,J,Z,da,ka,va,Ja,Pa);var $a=Ha(Wa);Ia(Wa);if(20===b)return a.rb?a.rb(c,d,e,f,h,a,k,p,t,v,x,G,J,Z,da,ka,va,Ja,Pa,$a):a.rb?a.rb(c,d,e,f,h,a,k,p,t,v,x,G,J,Z,da,ka,va,Ja,Pa,$a):a.call(null,c,d,e,f,h,a,k,p,t,v,x,G,J,Z,da,ka,va,Ja,Pa,$a);throw Error("Only up to 20 arguments supported on functions");}
var id=function(){function a(a,b,c,d,e){b=If.f(b,c,d,e);c=a.j;return a.g?(d=Ef(b,c+1),d<=c?Kf(a,d,b):a.g(b)):a.apply(a,Df(b))}function b(a,b,c,d){b=If.d(b,c,d);c=a.j;return a.g?(d=Ef(b,c+1),d<=c?Kf(a,d,b):a.g(b)):a.apply(a,Df(b))}function c(a,b,c){b=If.c(b,c);c=a.j;if(a.g){var d=Ef(b,c+1);return d<=c?Kf(a,d,b):a.g(b)}return a.apply(a,Df(b))}function d(a,b){var c=a.j;if(a.g){var d=Ef(b,c+1);return d<=c?Kf(a,d,b):a.g(b)}return a.apply(a,Df(b))}var e=null,f=function(){function a(c,d,e,f,h,J){var Z=null;
5<arguments.length&&(Z=B(Array.prototype.slice.call(arguments,5),0));return b.call(this,c,d,e,f,h,Z)}function b(a,c,d,e,f,h){c=C(c,C(d,C(e,C(f,Gf(h)))));d=a.j;return a.g?(e=Ef(c,d+1),e<=d?Kf(a,e,c):a.g(c)):a.apply(a,Df(c))}a.j=5;a.g=function(a){var c=y(a);a=A(a);var d=y(a);a=A(a);var e=y(a);a=A(a);var f=y(a);a=A(a);var h=y(a);a=z(a);return b(c,d,e,f,h,a)};a.b=b;return a}(),e=function(e,k,p,t,v,x){switch(arguments.length){case 2:return d.call(this,e,k);case 3:return c.call(this,e,k,p);case 4:return b.call(this,
e,k,p,t);case 5:return a.call(this,e,k,p,t,v);default:return f.b(e,k,p,t,v,B(arguments,5))}throw Error("Invalid arity: "+arguments.length);};e.j=5;e.g=f.g;e.c=d;e.d=c;e.f=b;e.l=a;e.b=f.b;return e}(),Lf=function(){function a(a,b){return!u.c(a,b)}var b=null,c=function(){function a(c,d,k){var p=null;2<arguments.length&&(p=B(Array.prototype.slice.call(arguments,2),0));return b.call(this,c,d,p)}function b(a,c,d){return ta(id.f(u,a,c,d))}a.j=2;a.g=function(a){var c=y(a);a=A(a);var d=y(a);a=z(a);return b(c,
d,a)};a.b=b;return a}(),b=function(b,e,f){switch(arguments.length){case 1:return!1;case 2:return a.call(this,b,e);default:return c.b(b,e,B(arguments,2))}throw Error("Invalid arity: "+arguments.length);};b.j=2;b.g=c.g;b.a=function(){return!1};b.c=a;b.b=c.b;return b}();function Mf(a,b){for(;;){if(null==w(b))return!0;if(m(a.a?a.a(y(b)):a.call(null,y(b)))){var c=a,d=A(b);a=c;b=d}else return q?!1:null}}
function Nf(a){for(var b=Of;;)if(w(a)){var c=b.a?b.a(y(a)):b.call(null,y(a));if(m(c))return c;a=A(a)}else return null}function Of(a){return a}
var Pf=function(){function a(a,b,c){return function(){var d=null,p=function(){function d(a,b,c,e){var f=null;3<arguments.length&&(f=B(Array.prototype.slice.call(arguments,3),0));return k.call(this,a,b,c,f)}function k(d,p,t,v){return a.a?a.a(b.a?b.a(id.l(c,d,p,t,v)):b.call(null,id.l(c,d,p,t,v))):a.call(null,b.a?b.a(id.l(c,d,p,t,v)):b.call(null,id.l(c,d,p,t,v)))}d.j=3;d.g=function(a){var b=y(a);a=A(a);var c=y(a);a=A(a);var d=y(a);a=z(a);return k(b,c,d,a)};d.b=k;return d}(),d=function(d,k,x,G){switch(arguments.length){case 0:return a.a?
a.a(b.a?b.a(c.q?c.q():c.call(null)):b.call(null,c.q?c.q():c.call(null))):a.call(null,b.a?b.a(c.q?c.q():c.call(null)):b.call(null,c.q?c.q():c.call(null)));case 1:return a.a?a.a(b.a?b.a(c.a?c.a(d):c.call(null,d)):b.call(null,c.a?c.a(d):c.call(null,d))):a.call(null,b.a?b.a(c.a?c.a(d):c.call(null,d)):b.call(null,c.a?c.a(d):c.call(null,d)));case 2:return a.a?a.a(b.a?b.a(c.c?c.c(d,k):c.call(null,d,k)):b.call(null,c.c?c.c(d,k):c.call(null,d,k))):a.call(null,b.a?b.a(c.c?c.c(d,k):c.call(null,d,k)):b.call(null,
c.c?c.c(d,k):c.call(null,d,k)));case 3:return a.a?a.a(b.a?b.a(c.d?c.d(d,k,x):c.call(null,d,k,x)):b.call(null,c.d?c.d(d,k,x):c.call(null,d,k,x))):a.call(null,b.a?b.a(c.d?c.d(d,k,x):c.call(null,d,k,x)):b.call(null,c.d?c.d(d,k,x):c.call(null,d,k,x)));default:return p.b(d,k,x,B(arguments,3))}throw Error("Invalid arity: "+arguments.length);};d.j=3;d.g=p.g;return d}()}function b(a,b){return function(){var c=null,d=function(){function c(a,b,e,f){var h=null;3<arguments.length&&(h=B(Array.prototype.slice.call(arguments,
3),0));return d.call(this,a,b,e,h)}function d(c,h,k,p){return a.a?a.a(id.l(b,c,h,k,p)):a.call(null,id.l(b,c,h,k,p))}c.j=3;c.g=function(a){var b=y(a);a=A(a);var c=y(a);a=A(a);var e=y(a);a=z(a);return d(b,c,e,a)};c.b=d;return c}(),c=function(c,h,v,x){switch(arguments.length){case 0:return a.a?a.a(b.q?b.q():b.call(null)):a.call(null,b.q?b.q():b.call(null));case 1:return a.a?a.a(b.a?b.a(c):b.call(null,c)):a.call(null,b.a?b.a(c):b.call(null,c));case 2:return a.a?a.a(b.c?b.c(c,h):b.call(null,c,h)):a.call(null,
b.c?b.c(c,h):b.call(null,c,h));case 3:return a.a?a.a(b.d?b.d(c,h,v):b.call(null,c,h,v)):a.call(null,b.d?b.d(c,h,v):b.call(null,c,h,v));default:return d.b(c,h,v,B(arguments,3))}throw Error("Invalid arity: "+arguments.length);};c.j=3;c.g=d.g;return c}()}var c=null,d=function(){function a(c,d,e,t){var v=null;3<arguments.length&&(v=B(Array.prototype.slice.call(arguments,3),0));return b.call(this,c,d,e,v)}function b(a,c,d,e){var f=pf(If.f(a,c,d,e));return function(){function a(c){var d=null;0<arguments.length&&
(d=B(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){a=id.c(y(f),a);for(var c=A(f);;)if(c)a=y(c).call(null,a),c=A(c);else return a}a.j=0;a.g=function(a){a=w(a);return b(a)};a.b=b;return a}()}a.j=3;a.g=function(a){var c=y(a);a=A(a);var d=y(a);a=A(a);var e=y(a);a=z(a);return b(c,d,e,a)};a.b=b;return a}(),c=function(c,f,h,k){switch(arguments.length){case 0:return Of;case 1:return c;case 2:return b.call(this,c,f);case 3:return a.call(this,c,f,h);default:return d.b(c,f,
h,B(arguments,3))}throw Error("Invalid arity: "+arguments.length);};c.j=3;c.g=d.g;c.q=function(){return Of};c.a=function(a){return a};c.c=b;c.d=a;c.b=d.b;return c}(),Qf=function(){function a(a,b,c,d){return function(){function e(a){var b=null;0<arguments.length&&(b=B(Array.prototype.slice.call(arguments,0),0));return v.call(this,b)}function v(e){return id.l(a,b,c,d,e)}e.j=0;e.g=function(a){a=w(a);return v(a)};e.b=v;return e}()}function b(a,b,c){return function(){function d(a){var b=null;0<arguments.length&&
(b=B(Array.prototype.slice.call(arguments,0),0));return e.call(this,b)}function e(d){return id.f(a,b,c,d)}d.j=0;d.g=function(a){a=w(a);return e(a)};d.b=e;return d}()}function c(a,b){return function(){function c(a){var b=null;0<arguments.length&&(b=B(Array.prototype.slice.call(arguments,0),0));return d.call(this,b)}function d(c){return id.d(a,b,c)}c.j=0;c.g=function(a){a=w(a);return d(a)};c.b=d;return c}()}var d=null,e=function(){function a(c,d,e,f,x){var G=null;4<arguments.length&&(G=B(Array.prototype.slice.call(arguments,
4),0));return b.call(this,c,d,e,f,G)}function b(a,c,d,e,f){return function(){function b(a){var c=null;0<arguments.length&&(c=B(Array.prototype.slice.call(arguments,0),0));return h.call(this,c)}function h(b){return id.l(a,c,d,e,Hf.c(f,b))}b.j=0;b.g=function(a){a=w(a);return h(a)};b.b=h;return b}()}a.j=4;a.g=function(a){var c=y(a);a=A(a);var d=y(a);a=A(a);var e=y(a);a=A(a);var f=y(a);a=z(a);return b(c,d,e,f,a)};a.b=b;return a}(),d=function(d,h,k,p,t){switch(arguments.length){case 1:return d;case 2:return c.call(this,
d,h);case 3:return b.call(this,d,h,k);case 4:return a.call(this,d,h,k,p);default:return e.b(d,h,k,p,B(arguments,4))}throw Error("Invalid arity: "+arguments.length);};d.j=4;d.g=e.g;d.a=function(a){return a};d.c=c;d.d=b;d.f=a;d.b=e.b;return d}(),Sf=function Rf(b,c){return new vf(null,function(){var d=w(c);if(d){if(qd(d)){for(var e=Fb(d),f=D(e),h=zf(f),k=0;;)if(k<f){var p=b.a?b.a(s.c(e,k)):b.call(null,s.c(e,k));null!=p&&h.add(p);k+=1}else break;return Cf(h.Q(),Rf(b,Cc(d)))}e=b.a?b.a(y(d)):b.call(null,
y(d));return null==e?Rf(b,z(d)):C(e,Rf(b,z(d)))}return null},null,null)},Tf=function(){function a(a,b,c,e){return new vf(null,function(){var t=w(b),v=w(c),x=w(e);return t&&v&&x?C(a.d?a.d(y(t),y(v),y(x)):a.call(null,y(t),y(v),y(x)),d.f(a,z(t),z(v),z(x))):null},null,null)}function b(a,b,c){return new vf(null,function(){var e=w(b),t=w(c);return e&&t?C(a.c?a.c(y(e),y(t)):a.call(null,y(e),y(t)),d.d(a,z(e),z(t))):null},null,null)}function c(a,b){return new vf(null,function(){var c=w(b);if(c){if(qd(c)){for(var e=
Fb(c),t=D(e),v=zf(t),x=0;;)if(x<t){var G=a.a?a.a(s.c(e,x)):a.call(null,s.c(e,x));v.add(G);x+=1}else break;return Cf(v.Q(),d.c(a,Cc(c)))}return C(a.a?a.a(y(c)):a.call(null,y(c)),d.c(a,z(c)))}return null},null,null)}var d=null,e=function(){function a(c,d,e,f,x){var G=null;4<arguments.length&&(G=B(Array.prototype.slice.call(arguments,4),0));return b.call(this,c,d,e,f,G)}function b(a,c,e,f,h){return d.c(function(b){return id.c(a,b)},function J(a){return new vf(null,function(){var b=d.c(w,a);return Mf(Of,
b)?C(d.c(y,b),J(d.c(z,b))):null},null,null)}(ad.b(h,f,B([e,c],0))))}a.j=4;a.g=function(a){var c=y(a);a=A(a);var d=y(a);a=A(a);var e=y(a);a=A(a);var f=y(a);a=z(a);return b(c,d,e,f,a)};a.b=b;return a}(),d=function(d,h,k,p,t){switch(arguments.length){case 2:return c.call(this,d,h);case 3:return b.call(this,d,h,k);case 4:return a.call(this,d,h,k,p);default:return e.b(d,h,k,p,B(arguments,4))}throw Error("Invalid arity: "+arguments.length);};d.j=4;d.g=e.g;d.c=c;d.d=b;d.f=a;d.b=e.b;return d}(),Vf=function Uf(b,
c){return new vf(null,function(){if(0<b){var d=w(c);return d?C(y(d),Uf(b-1,z(d))):null}return null},null,null)};function Wf(a,b){return new vf(null,function(){var c;a:{c=a;for(var d=b;;)if(d=w(d),0<c&&d)c-=1,d=z(d);else{c=d;break a}c=void 0}return c},null,null)}function Xf(a,b){return new vf(null,function(){var c;a:{c=a;for(var d=b;;){var d=w(d),e;e=(e=d)?c.a?c.a(y(d)):c.call(null,y(d)):e;if(m(e))d=z(d);else{c=d;break a}}c=void 0}return c},null,null)}
var Yf=function(){function a(a,b){return Vf(a,c.a(b))}function b(a){return new vf(null,function(){return C(a,c.a(a))},null,null)}var c=null,c=function(c,e){switch(arguments.length){case 1:return b.call(this,c);case 2:return a.call(this,c,e)}throw Error("Invalid arity: "+arguments.length);};c.a=b;c.c=a;return c}(),Zf=function(){function a(a,c){return new vf(null,function(){var f=w(a),h=w(c);return f&&h?C(y(f),C(y(h),b.c(z(f),z(h)))):null},null,null)}var b=null,c=function(){function a(b,d,k){var p=
null;2<arguments.length&&(p=B(Array.prototype.slice.call(arguments,2),0));return c.call(this,b,d,p)}function c(a,d,e){return new vf(null,function(){var c=Tf.c(w,ad.b(e,d,B([a],0)));return Mf(Of,c)?Hf.c(Tf.c(y,c),id.c(b,Tf.c(z,c))):null},null,null)}a.j=2;a.g=function(a){var b=y(a);a=A(a);var d=y(a);a=z(a);return c(b,d,a)};a.b=c;return a}(),b=function(b,e,f){switch(arguments.length){case 2:return a.call(this,b,e);default:return c.b(b,e,B(arguments,2))}throw Error("Invalid arity: "+arguments.length);
};b.j=2;b.g=c.g;b.c=a;b.b=c.b;return b}();function $f(a){return function c(a,e){return new vf(null,function(){var f=w(a);return f?C(y(f),c(z(f),e)):w(e)?c(y(e),z(e)):null},null,null)}(null,a)}
var ag=function(){function a(a,b){return $f(Tf.c(a,b))}var b=null,c=function(){function a(c,d,k){var p=null;2<arguments.length&&(p=B(Array.prototype.slice.call(arguments,2),0));return b.call(this,c,d,p)}function b(a,c,d){return $f(id.f(Tf,a,c,d))}a.j=2;a.g=function(a){var c=y(a);a=A(a);var d=y(a);a=z(a);return b(c,d,a)};a.b=b;return a}(),b=function(b,e,f){switch(arguments.length){case 2:return a.call(this,b,e);default:return c.b(b,e,B(arguments,2))}throw Error("Invalid arity: "+arguments.length);
};b.j=2;b.g=c.g;b.c=a;b.b=c.b;return b}(),cg=function bg(b,c){return new vf(null,function(){var d=w(c);if(d){if(qd(d)){for(var e=Fb(d),f=D(e),h=zf(f),k=0;;)if(k<f){if(m(b.a?b.a(s.c(e,k)):b.call(null,s.c(e,k)))){var p=s.c(e,k);h.add(p)}k+=1}else break;return Cf(h.Q(),bg(b,Cc(d)))}e=y(d);d=z(d);return m(b.a?b.a(e):b.call(null,e))?C(e,bg(b,d)):bg(b,d)}return null},null,null)};function dg(a,b){var c;null!=a?a&&(a.p&4||a.lc)?(c=yd.d(Ab,zb(a),b),c=Bb(c)):c=yd.d(Ea,a,b):c=yd.d(ad,Pc,b);return c}
var eg=function(){function a(a,b,c,k){return new vf(null,function(){var p=w(k);if(p){var t=Vf(a,p);return a===D(t)?C(t,d.f(a,b,c,Wf(b,p))):Ea(Pc,Vf(a,Hf.c(t,c)))}return null},null,null)}function b(a,b,c){return new vf(null,function(){var k=w(c);if(k){var p=Vf(a,k);return a===D(p)?C(p,d.d(a,b,Wf(b,k))):null}return null},null,null)}function c(a,b){return d.d(a,a,b)}var d=null,d=function(d,f,h,k){switch(arguments.length){case 2:return c.call(this,d,f);case 3:return b.call(this,d,f,h);case 4:return a.call(this,
d,f,h,k)}throw Error("Invalid arity: "+arguments.length);};d.c=c;d.d=b;d.f=a;return d}();function fg(a,b){this.v=a;this.e=b}function gg(a){return new fg(a,[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null])}function hg(a){return new fg(a.v,ya(a.e))}function ig(a){a=a.h;return 32>a?0:a-1>>>5<<5}function jg(a,b,c){for(;;){if(0===b)return c;var d=gg(a);d.e[0]=c;c=d;b-=5}}
var lg=function kg(b,c,d,e){var f=hg(d),h=b.h-1>>>c&31;5===c?f.e[h]=e:(d=d.e[h],b=null!=d?kg(b,c-5,d,e):jg(null,c-5,e),f.e[h]=b);return f};function mg(a,b){throw Error([r("No item "),r(a),r(" in vector of length "),r(b)].join(""));}function ng(a,b){if(0<=b&&b<a.h){if(b>=ig(a))return a.U;for(var c=a.root,d=a.shift;;)if(0<d)var e=d-5,c=c.e[b>>>d&31],d=e;else return c.e}else return mg(b,a.h)}
var pg=function og(b,c,d,e,f){var h=hg(d);if(0===c)h.e[e&31]=f;else{var k=e>>>c&31;b=og(b,c-5,d.e[k],e,f);h.e[k]=b}return h},rg=function qg(b,c,d){var e=b.h-2>>>c&31;if(5<c){b=qg(b,c-5,d.e[e]);if(null==b&&0===e)return null;d=hg(d);d.e[e]=b;return d}return 0===e?null:q?(d=hg(d),d.e[e]=null,d):null};function H(a,b,c,d,e,f){this.i=a;this.h=b;this.shift=c;this.root=d;this.U=e;this.m=f;this.p=8196;this.k=167668511}g=H.prototype;
g.Ia=function(){return new sg(this.h,this.shift,tg.a?tg.a(this.root):tg.call(null,this.root),ug.a?ug.a(this.U):ug.call(null,this.U))};g.u=function(){var a=this.m;return null!=a?a:this.m=a=Vc(this)};g.w=function(a,b){return s.d(this,b,null)};g.A=function(a,b,c){return s.d(this,b,c)};
g.pa=function(a,b,c){if(0<=b&&b<this.h)return ig(this)<=b?(a=ya(this.U),a[b&31]=c,new H(this.i,this.h,this.shift,this.root,a,null)):new H(this.i,this.h,this.shift,pg(this,this.shift,this.root,b,c),this.U,null);if(b===this.h)return Ea(this,c);if(q)throw Error([r("Index "),r(b),r(" out of bounds  [0,"),r(this.h),r("]")].join(""));return null};
g.call=function(){var a=null;return a=function(a,c,d){switch(arguments.length){case 2:return this.r(null,c);case 3:return this.Z(null,c,d)}throw Error("Invalid arity: "+arguments.length);}}();g.apply=function(a,b){return this.call.apply(this,[this].concat(ya(b)))};g.a=function(a){return this.r(null,a)};g.c=function(a,b){return this.Z(null,a,b)};
g.C=function(a,b){if(32>this.h-ig(this)){for(var c=this.U.length,d=Array(c+1),e=0;;)if(e<c)d[e]=this.U[e],e+=1;else break;d[c]=b;return new H(this.i,this.h+1,this.shift,this.root,d,null)}c=(d=this.h>>>5>1<<this.shift)?this.shift+5:this.shift;d?(d=gg(null),d.e[0]=this.root,e=jg(null,this.shift,new fg(null,this.U)),d.e[1]=e):d=lg(this,this.shift,this.root,new fg(null,this.U));return new H(this.i,this.h+1,c,d,[b],null)};g.La=function(){return 0<this.h?new Wc(this,this.h-1,null):null};
g.Ka=function(){return s.c(this,0)};g.$a=function(){return s.c(this,1)};g.toString=function(){return Fc(this)};g.M=function(a,b){return Rc.c(this,b)};g.N=function(a,b,c){return Rc.d(this,b,c)};g.D=function(){return 0===this.h?null:32>this.h?B.a(this.U):q?vg.d?vg.d(this,0,0):vg.call(null,this,0,0):null};g.I=function(){return this.h};g.qa=function(){return 0<this.h?s.c(this,this.h-1):null};
g.ra=function(){if(0===this.h)throw Error("Can't pop empty vector");if(1===this.h)return gb(wg,this.i);if(1<this.h-ig(this))return new H(this.i,this.h-1,this.shift,this.root,this.U.slice(0,-1),null);if(q){var a=ng(this,this.h-2),b=rg(this,this.shift,this.root),b=null==b?xg:b,c=this.h-1;return 5<this.shift&&null==b.e[1]?new H(this.i,c,this.shift-5,b.e[0],a,null):new H(this.i,c,this.shift,b,a,null)}return null};g.Ca=function(a,b,c){return Oa(this,b,c)};g.t=function(a,b){return Xc(this,b)};
g.F=function(a,b){return new H(b,this.h,this.shift,this.root,this.U,this.m)};g.B=function(){return this.i};g.r=function(a,b){return ng(this,b)[b&31]};g.Z=function(a,b,c){return 0<=b&&b<this.h?s.c(this,b):c};g.H=function(){return $c(wg,this.i)};var xg=new fg(null,[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]),wg=new H(null,0,5,xg,[],0);function yg(a){return Bb(yd.d(Ab,zb(wg),a))}
function zg(a,b,c,d,e,f){this.P=a;this.da=b;this.o=c;this.off=d;this.i=e;this.m=f;this.k=32243948;this.p=1536}g=zg.prototype;g.u=function(){var a=this.m;return null!=a?a:this.m=a=Vc(this)};g.aa=function(){if(this.off+1<this.da.length){var a=vg.f?vg.f(this.P,this.da,this.o,this.off+1):vg.call(null,this.P,this.da,this.o,this.off+1);return null==a?null:a}return Dc(this)};g.C=function(a,b){return C(b,this)};g.toString=function(){return Fc(this)};
g.M=function(a,b){return Rc.c(Ag.d?Ag.d(this.P,this.o+this.off,D(this.P)):Ag.call(null,this.P,this.o+this.off,D(this.P)),b)};g.N=function(a,b,c){return Rc.d(Ag.d?Ag.d(this.P,this.o+this.off,D(this.P)):Ag.call(null,this.P,this.o+this.off,D(this.P)),b,c)};g.D=function(){return this};g.O=function(){return this.da[this.off]};g.T=function(){if(this.off+1<this.da.length){var a=vg.f?vg.f(this.P,this.da,this.o,this.off+1):vg.call(null,this.P,this.da,this.o,this.off+1);return null==a?Pc:a}return Cc(this)};
g.fb=function(){var a=this.da.length,a=this.o+a<Ba(this.P)?vg.d?vg.d(this.P,this.o+a,0):vg.call(null,this.P,this.o+a,0):null;return null==a?null:a};g.t=function(a,b){return Xc(this,b)};g.F=function(a,b){return vg.l?vg.l(this.P,this.da,this.o,this.off,b):vg.call(null,this.P,this.da,this.o,this.off,b)};g.H=function(){return $c(wg,this.i)};g.gb=function(){return Af.c(this.da,this.off)};
g.hb=function(){var a=this.da.length,a=this.o+a<Ba(this.P)?vg.d?vg.d(this.P,this.o+a,0):vg.call(null,this.P,this.o+a,0):null;return null==a?Pc:a};
var vg=function(){function a(a,b,c,d,p){return new zg(a,b,c,d,p,null)}function b(a,b,c,d){return new zg(a,b,c,d,null,null)}function c(a,b,c){return new zg(a,ng(a,b),b,c,null,null)}var d=null,d=function(d,f,h,k,p){switch(arguments.length){case 3:return c.call(this,d,f,h);case 4:return b.call(this,d,f,h,k);case 5:return a.call(this,d,f,h,k,p)}throw Error("Invalid arity: "+arguments.length);};d.d=c;d.f=b;d.l=a;return d}();
function Bg(a,b,c,d,e){this.i=a;this.ca=b;this.start=c;this.end=d;this.m=e;this.k=32400159;this.p=8192}g=Bg.prototype;g.u=function(){var a=this.m;return null!=a?a:this.m=a=Vc(this)};g.w=function(a,b){return s.d(this,b,null)};g.A=function(a,b,c){return s.d(this,b,c)};g.pa=function(a,b,c){var d=this,e=d.start+b;return Cg.l?Cg.l(d.i,ed.d(d.ca,e,c),d.start,function(){var a=d.end,b=e+1;return a>b?a:b}(),null):Cg.call(null,d.i,ed.d(d.ca,e,c),d.start,function(){var a=d.end,b=e+1;return a>b?a:b}(),null)};
g.call=function(){var a=null;return a=function(a,c,d){switch(arguments.length){case 2:return this.r(null,c);case 3:return this.Z(null,c,d)}throw Error("Invalid arity: "+arguments.length);}}();g.apply=function(a,b){return this.call.apply(this,[this].concat(ya(b)))};g.a=function(a){return this.r(null,a)};g.c=function(a,b){return this.Z(null,a,b)};
g.C=function(a,b){return Cg.l?Cg.l(this.i,bb(this.ca,this.end,b),this.start,this.end+1,null):Cg.call(null,this.i,bb(this.ca,this.end,b),this.start,this.end+1,null)};g.toString=function(){return Fc(this)};g.M=function(a,b){return Rc.c(this,b)};g.N=function(a,b,c){return Rc.d(this,b,c)};g.D=function(){var a=this;return function c(d){return d===a.end?null:C(s.c(a.ca,d),new vf(null,function(){return c(d+1)},null,null))}(a.start)};g.I=function(){return this.end-this.start};
g.qa=function(){return s.c(this.ca,this.end-1)};g.ra=function(){if(this.start===this.end)throw Error("Can't pop empty vector");return Cg.l?Cg.l(this.i,this.ca,this.start,this.end-1,null):Cg.call(null,this.i,this.ca,this.start,this.end-1,null)};g.Ca=function(a,b,c){return Oa(this,b,c)};g.t=function(a,b){return Xc(this,b)};g.F=function(a,b){return Cg.l?Cg.l(b,this.ca,this.start,this.end,this.m):Cg.call(null,b,this.ca,this.start,this.end,this.m)};g.B=function(){return this.i};
g.r=function(a,b){return 0>b||this.end<=this.start+b?mg(b,this.end-this.start):s.c(this.ca,this.start+b)};g.Z=function(a,b,c){return 0>b||this.end<=this.start+b?c:s.d(this.ca,this.start+b,c)};g.H=function(){return $c(wg,this.i)};function Cg(a,b,c,d,e){for(;;)if(b instanceof Bg)c=b.start+c,d=b.start+d,b=b.ca;else{var f=D(b);if(0>c||0>d||c>f||d>f)throw Error("Index out of bounds");return new Bg(a,b,c,d,e)}}
var Ag=function(){function a(a,b,c){return Cg(null,a,b,c,null)}function b(a,b){return c.d(a,b,D(a))}var c=null,c=function(c,e,f){switch(arguments.length){case 2:return b.call(this,c,e);case 3:return a.call(this,c,e,f)}throw Error("Invalid arity: "+arguments.length);};c.c=b;c.d=a;return c}();function tg(a){return new fg({},ya(a.e))}
function ug(a){var b=[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];sd(a,0,b,0,a.length);return b}var Eg=function Dg(b,c,d,e){d=b.root.v===d.v?d:new fg(b.root.v,ya(d.e));var f=b.h-1>>>c&31;if(5===c)b=e;else{var h=d.e[f];b=null!=h?Dg(b,c-5,h,e):jg(b.root.v,c-5,e)}d.e[f]=b;return d};function sg(a,b,c,d){this.h=a;this.shift=b;this.root=c;this.U=d;this.k=275;this.p=88}g=sg.prototype;
g.call=function(){var a=null;return a=function(a,c,d){switch(arguments.length){case 2:return this.w(null,c);case 3:return this.A(null,c,d)}throw Error("Invalid arity: "+arguments.length);}}();g.apply=function(a,b){return this.call.apply(this,[this].concat(ya(b)))};g.a=function(a){return this.w(null,a)};g.c=function(a,b){return this.A(null,a,b)};g.w=function(a,b){return s.d(this,b,null)};g.A=function(a,b,c){return s.d(this,b,c)};
g.r=function(a,b){if(this.root.v)return ng(this,b)[b&31];throw Error("nth after persistent!");};g.Z=function(a,b,c){return 0<=b&&b<this.h?s.c(this,b):c};g.I=function(){if(this.root.v)return this.h;throw Error("count after persistent!");};
g.Mb=function(a,b,c){var d=this;if(d.root.v){if(0<=b&&b<d.h)return ig(this)<=b?d.U[b&31]=c:(a=function f(a,k){var p=d.root.v===k.v?k:new fg(d.root.v,ya(k.e));if(0===a)p.e[b&31]=c;else{var t=b>>>a&31,v=f(a-5,p.e[t]);p.e[t]=v}return p}.call(null,d.shift,d.root),d.root=a),this;if(b===d.h)return Ab(this,c);if(q)throw Error([r("Index "),r(b),r(" out of bounds for TransientVector of length"),r(d.h)].join(""));return null}throw Error("assoc! after persistent!");};g.Na=function(a,b,c){return Db(this,b,c)};
g.Oa=function(a,b){if(this.root.v){if(32>this.h-ig(this))this.U[this.h&31]=b;else{var c=new fg(this.root.v,this.U),d=[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];d[0]=b;this.U=d;if(this.h>>>5>1<<this.shift){var d=[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],e=this.shift+
5;d[0]=this.root;d[1]=jg(this.root.v,this.shift,c);this.root=new fg(this.root.v,d);this.shift=e}else this.root=Eg(this,this.shift,this.root,c)}this.h+=1;return this}throw Error("conj! after persistent!");};g.Pa=function(){if(this.root.v){this.root.v=null;var a=this.h-ig(this),b=Array(a);sd(this.U,0,b,0,a);return new H(null,this.h,this.shift,this.root,b,null)}throw Error("persistent! called twice");};function Fg(a,b,c,d){this.i=a;this.$=b;this.ma=c;this.m=d;this.p=0;this.k=31850572}g=Fg.prototype;
g.u=function(){var a=this.m;return null!=a?a:this.m=a=Vc(this)};g.C=function(a,b){return C(b,this)};g.toString=function(){return Fc(this)};g.D=function(){return this};g.O=function(){return y(this.$)};g.T=function(){var a=A(this.$);return a?new Fg(this.i,a,this.ma,null):null==this.ma?Ca(this):new Fg(this.i,this.ma,null,null)};g.t=function(a,b){return Xc(this,b)};g.F=function(a,b){return new Fg(b,this.$,this.ma,this.m)};g.B=function(){return this.i};g.H=function(){return $c(Pc,this.i)};
function Gg(a,b,c,d,e){this.i=a;this.count=b;this.$=c;this.ma=d;this.m=e;this.k=31858766;this.p=8192}g=Gg.prototype;g.u=function(){var a=this.m;return null!=a?a:this.m=a=Vc(this)};g.C=function(a,b){var c;m(this.$)?(c=this.ma,c=new Gg(this.i,this.count+1,this.$,ad.c(m(c)?c:wg,b),null)):c=new Gg(this.i,this.count+1,ad.c(this.$,b),wg,null);return c};g.toString=function(){return Fc(this)};g.D=function(){var a=w(this.ma),b=this.$;return m(m(b)?b:a)?new Fg(null,this.$,w(a),null):null};g.I=function(){return this.count};
g.qa=function(){return y(this.$)};g.ra=function(){if(m(this.$)){var a=A(this.$);return a?new Gg(this.i,this.count-1,a,this.ma,null):new Gg(this.i,this.count-1,w(this.ma),wg,null)}return this};g.O=function(){return y(this.$)};g.T=function(){return z(w(this))};g.t=function(a,b){return Xc(this,b)};g.F=function(a,b){return new Gg(b,this.count,this.$,this.ma,this.m)};g.B=function(){return this.i};g.H=function(){return Hg};var Hg=new Gg(null,0,null,wg,0);function Ig(){this.p=0;this.k=2097152}
Ig.prototype.t=function(){return!1};var Jg=new Ig;function Kg(a,b){return vd(od(b)?D(a)===D(b)?Mf(Of,Tf.c(function(a){return u.c(cd.d(b,y(a),Jg),y(A(a)))},a)):null:null)}
function Lg(a,b){var c=a.e;if(b instanceof F)a:{for(var d=c.length,e=b.xa,f=0;;){if(d<=f){c=-1;break a}var h=c[f];if(h instanceof F&&e===h.xa){c=f;break a}if(q)f+=2;else{c=null;break a}}c=void 0}else if("string"==typeof b||"number"===typeof b)a:{d=c.length;for(e=0;;){if(d<=e){c=-1;break a}if(b===c[e]){c=e;break a}if(q)e+=2;else{c=null;break a}}c=void 0}else if(b instanceof Jc)a:{d=c.length;e=b.Aa;for(f=0;;){if(d<=f){c=-1;break a}h=c[f];if(h instanceof Jc&&e===h.Aa){c=f;break a}if(q)f+=2;else{c=null;
break a}}c=void 0}else if(null==b)a:{d=c.length;for(e=0;;){if(d<=e){c=-1;break a}if(null==c[e]){c=e;break a}if(q)e+=2;else{c=null;break a}}c=void 0}else if(q)a:{d=c.length;for(e=0;;){if(d<=e){c=-1;break a}if(u.c(b,c[e])){c=e;break a}if(q)e+=2;else{c=null;break a}}c=void 0}else c=null;return c}function Mg(a,b,c){this.e=a;this.o=b;this.ea=c;this.p=0;this.k=32374990}g=Mg.prototype;g.u=function(){return Vc(this)};g.aa=function(){return this.o<this.e.length-2?new Mg(this.e,this.o+2,this.ea):null};
g.C=function(a,b){return C(b,this)};g.toString=function(){return Fc(this)};g.M=function(a,b){return Zc.c(b,this)};g.N=function(a,b,c){return Zc.d(b,c,this)};g.D=function(){return this};g.I=function(){return(this.e.length-this.o)/2};g.O=function(){return new H(null,2,5,xg,[this.e[this.o],this.e[this.o+1]],null)};g.T=function(){return this.o<this.e.length-2?new Mg(this.e,this.o+2,this.ea):Pc};g.t=function(a,b){return Xc(this,b)};g.F=function(a,b){return new Mg(this.e,this.o,b)};g.B=function(){return this.ea};
g.H=function(){return $c(Pc,this.ea)};function na(a,b,c,d){this.i=a;this.h=b;this.e=c;this.m=d;this.p=8196;this.k=16123663}g=na.prototype;g.Ia=function(){return new Ng({},this.e.length,ya(this.e))};g.u=function(){var a=this.m;return null!=a?a:this.m=a=jf(this)};g.w=function(a,b){return Ma.d(this,b,null)};g.A=function(a,b,c){a=Lg(this,b);return-1===a?c:this.e[a+1]};
g.pa=function(a,b,c){a=Lg(this,b);if(-1===a){if(this.h<Og){a=this.e;for(var d=a.length,e=Array(d+2),f=0;;)if(f<d)e[f]=a[f],f+=1;else break;e[d]=b;e[d+1]=c;return new na(this.i,this.h+1,e,null)}return gb(Oa(dg(Pg,this),b,c),this.i)}return c===this.e[a+1]?this:q?(b=ya(this.e),b[a+1]=c,new na(this.i,this.h,b,null)):null};g.Ha=function(a,b){return-1!==Lg(this,b)};
g.call=function(){var a=null;return a=function(a,c,d){switch(arguments.length){case 2:return this.w(null,c);case 3:return this.A(null,c,d)}throw Error("Invalid arity: "+arguments.length);}}();g.apply=function(a,b){return this.call.apply(this,[this].concat(ya(b)))};g.a=function(a){return this.w(null,a)};g.c=function(a,b){return this.A(null,a,b)};g.C=function(a,b){return pd(b)?Oa(this,s.c(b,0),s.c(b,1)):yd.d(Ea,this,b)};g.toString=function(){return Fc(this)};
g.D=function(){return 0<=this.e.length-2?new Mg(this.e,0,null):null};g.I=function(){return this.h};g.t=function(a,b){return Kg(this,b)};g.F=function(a,b){return new na(b,this.h,this.e,this.m)};g.B=function(){return this.i};g.H=function(){return gb(I,this.i)};
g.Ja=function(a,b){if(0<=Lg(this,b)){var c=this.e.length,d=c-2;if(0===d)return Ca(this);for(var d=Array(d),e=0,f=0;;){if(e>=c)return new na(this.i,this.h-1,d,null);if(u.c(b,this.e[e]))e+=2;else if(q)d[f]=this.e[e],d[f+1]=this.e[e+1],f+=2,e+=2;else return null}}else return this};var I=new na(null,0,[],null),Og=8;function Qg(a){for(var b=a.length,c=0,d=zb(I);;)if(c<b)var e=c+2,d=Cb(d,a[c],a[c+1]),c=e;else return Bb(d)}function Ng(a,b,c){this.Fa=a;this.ta=b;this.e=c;this.p=56;this.k=258}g=Ng.prototype;
g.Na=function(a,b,c){if(m(this.Fa)){a=Lg(this,b);if(-1===a)return this.ta+2<=2*Og?(this.ta+=2,this.e.push(b),this.e.push(c),this):Jf.d(Rg.c?Rg.c(this.ta,this.e):Rg.call(null,this.ta,this.e),b,c);c!==this.e[a+1]&&(this.e[a+1]=c);return this}throw Error("assoc! after persistent!");};
g.Oa=function(a,b){if(m(this.Fa)){if(b?b.k&2048||b.Xb||(b.k?0:n(Sa,b)):n(Sa,b))return Cb(this,kf.a?kf.a(b):kf.call(null,b),lf.a?lf.a(b):lf.call(null,b));for(var c=w(b),d=this;;){var e=y(c);if(m(e))c=A(c),d=Cb(d,kf.a?kf.a(e):kf.call(null,e),lf.a?lf.a(e):lf.call(null,e));else return d}}else throw Error("conj! after persistent!");};g.Pa=function(){if(m(this.Fa))return this.Fa=!1,new na(null,Od((this.ta-this.ta%2)/2),this.e,null);throw Error("persistent! called twice");};
g.w=function(a,b){return Ma.d(this,b,null)};g.A=function(a,b,c){if(m(this.Fa))return a=Lg(this,b),-1===a?c:this.e[a+1];throw Error("lookup after persistent!");};g.I=function(){if(m(this.Fa))return Od((this.ta-this.ta%2)/2);throw Error("count after persistent!");};function Rg(a,b){for(var c=zb(Pg),d=0;;)if(d<a)c=Jf.d(c,b[d],b[d+1]),d+=2;else return c}function Sg(){this.val=!1}function Tg(a,b){return a===b?!0:a===b||a instanceof F&&b instanceof F&&a.xa===b.xa?!0:q?u.c(a,b):null}
var Ug=function(){function a(a,b,c,h,k){a=ya(a);a[b]=c;a[h]=k;return a}function b(a,b,c){a=ya(a);a[b]=c;return a}var c=null,c=function(c,e,f,h,k){switch(arguments.length){case 3:return b.call(this,c,e,f);case 5:return a.call(this,c,e,f,h,k)}throw Error("Invalid arity: "+arguments.length);};c.d=b;c.l=a;return c}();function Vg(a,b){var c=Array(a.length-2);sd(a,0,c,0,2*b);sd(a,2*(b+1),c,2*b,c.length-2*b);return c}
var Wg=function(){function a(a,b,c,h,k,p){a=a.Ga(b);a.e[c]=h;a.e[k]=p;return a}function b(a,b,c,h){a=a.Ga(b);a.e[c]=h;return a}var c=null,c=function(c,e,f,h,k,p){switch(arguments.length){case 4:return b.call(this,c,e,f,h);case 6:return a.call(this,c,e,f,h,k,p)}throw Error("Invalid arity: "+arguments.length);};c.f=b;c.n=a;return c}();function Xg(a,b,c){this.v=a;this.G=b;this.e=c}g=Xg.prototype;
g.ha=function(a,b,c,d,e,f){var h=1<<(c>>>b&31),k=Pd(this.G&h-1);if(0===(this.G&h)){var p=Pd(this.G);if(2*p<this.e.length){a=this.Ga(a);b=a.e;f.val=!0;a:for(c=2*(p-k),f=2*k+(c-1),p=2*(k+1)+(c-1);;){if(0===c)break a;b[p]=b[f];p-=1;c-=1;f-=1}b[2*k]=d;b[2*k+1]=e;a.G|=h;return a}if(16<=p){k=[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];k[c>>>b&31]=Yg.ha(a,b+5,c,d,e,f);for(e=d=0;;)if(32>d)0!==
(this.G>>>d&1)&&(k[d]=null!=this.e[e]?Yg.ha(a,b+5,Lc(this.e[e]),this.e[e],this.e[e+1],f):this.e[e+1],e+=2),d+=1;else break;return new Zg(a,p+1,k)}return q?(b=Array(2*(p+4)),sd(this.e,0,b,0,2*k),b[2*k]=d,b[2*k+1]=e,sd(this.e,2*k,b,2*(k+1),2*(p-k)),f.val=!0,a=this.Ga(a),a.e=b,a.G|=h,a):null}p=this.e[2*k];h=this.e[2*k+1];return null==p?(p=h.ha(a,b+5,c,d,e,f),p===h?this:Wg.f(this,a,2*k+1,p)):Tg(d,p)?e===h?this:Wg.f(this,a,2*k+1,e):q?(f.val=!0,Wg.n(this,a,2*k,null,2*k+1,$g.Y?$g.Y(a,b+5,p,h,c,d,e):$g.call(null,
a,b+5,p,h,c,d,e))):null};g.Qa=function(){return ah.a?ah.a(this.e):ah.call(null,this.e)};g.Ga=function(a){if(a===this.v)return this;var b=Pd(this.G),c=Array(0>b?4:2*(b+1));sd(this.e,0,c,0,2*b);return new Xg(a,this.G,c)};
g.Ra=function(a,b,c){var d=1<<(b>>>a&31);if(0===(this.G&d))return this;var e=Pd(this.G&d-1),f=this.e[2*e],h=this.e[2*e+1];return null==f?(a=h.Ra(a+5,b,c),a===h?this:null!=a?new Xg(null,this.G,Ug.d(this.e,2*e+1,a)):this.G===d?null:q?new Xg(null,this.G^d,Vg(this.e,e)):null):Tg(c,f)?new Xg(null,this.G^d,Vg(this.e,e)):q?this:null};
g.ga=function(a,b,c,d,e){var f=1<<(b>>>a&31),h=Pd(this.G&f-1);if(0===(this.G&f)){var k=Pd(this.G);if(16<=k){h=[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];h[b>>>a&31]=Yg.ga(a+5,b,c,d,e);for(d=c=0;;)if(32>c)0!==(this.G>>>c&1)&&(h[c]=null!=this.e[d]?Yg.ga(a+5,Lc(this.e[d]),this.e[d],this.e[d+1],e):this.e[d+1],d+=2),c+=1;else break;return new Zg(null,k+1,h)}a=Array(2*(k+1));sd(this.e,
0,a,0,2*h);a[2*h]=c;a[2*h+1]=d;sd(this.e,2*h,a,2*(h+1),2*(k-h));e.val=!0;return new Xg(null,this.G|f,a)}k=this.e[2*h];f=this.e[2*h+1];return null==k?(k=f.ga(a+5,b,c,d,e),k===f?this:new Xg(null,this.G,Ug.d(this.e,2*h+1,k))):Tg(c,k)?d===f?this:new Xg(null,this.G,Ug.d(this.e,2*h+1,d)):q?(e.val=!0,new Xg(null,this.G,Ug.l(this.e,2*h,null,2*h+1,$g.n?$g.n(a+5,k,f,b,c,d):$g.call(null,a+5,k,f,b,c,d)))):null};
g.ya=function(a,b,c,d){var e=1<<(b>>>a&31);if(0===(this.G&e))return d;var f=Pd(this.G&e-1),e=this.e[2*f],f=this.e[2*f+1];return null==e?f.ya(a+5,b,c,d):Tg(c,e)?f:q?d:null};var Yg=new Xg(null,0,[]);function Zg(a,b,c){this.v=a;this.h=b;this.e=c}g=Zg.prototype;g.ha=function(a,b,c,d,e,f){var h=c>>>b&31,k=this.e[h];if(null==k)return a=Wg.f(this,a,h,Yg.ha(a,b+5,c,d,e,f)),a.h+=1,a;b=k.ha(a,b+5,c,d,e,f);return b===k?this:Wg.f(this,a,h,b)};g.Qa=function(){return bh.a?bh.a(this.e):bh.call(null,this.e)};
g.Ga=function(a){return a===this.v?this:new Zg(a,this.h,ya(this.e))};g.Ra=function(a,b,c){var d=b>>>a&31,e=this.e[d];if(null!=e){a=e.Ra(a+5,b,c);if(a===e)d=this;else if(null==a)if(8>=this.h)a:{e=this.e;a=2*(this.h-1);b=Array(a);c=0;for(var f=1,h=0;;)if(c<a)c!==d&&null!=e[c]&&(b[f]=e[c],f+=2,h|=1<<c),c+=1;else{d=new Xg(null,h,b);break a}d=void 0}else d=new Zg(null,this.h-1,Ug.d(this.e,d,a));else d=q?new Zg(null,this.h,Ug.d(this.e,d,a)):null;return d}return this};
g.ga=function(a,b,c,d,e){var f=b>>>a&31,h=this.e[f];if(null==h)return new Zg(null,this.h+1,Ug.d(this.e,f,Yg.ga(a+5,b,c,d,e)));a=h.ga(a+5,b,c,d,e);return a===h?this:new Zg(null,this.h,Ug.d(this.e,f,a))};g.ya=function(a,b,c,d){var e=this.e[b>>>a&31];return null!=e?e.ya(a+5,b,c,d):d};function ch(a,b,c){b*=2;for(var d=0;;)if(d<b){if(Tg(c,a[d]))return d;d+=2}else return-1}function dh(a,b,c,d){this.v=a;this.sa=b;this.h=c;this.e=d}g=dh.prototype;
g.ha=function(a,b,c,d,e,f){if(c===this.sa){b=ch(this.e,this.h,d);if(-1===b){if(this.e.length>2*this.h)return a=Wg.n(this,a,2*this.h,d,2*this.h+1,e),f.val=!0,a.h+=1,a;c=this.e.length;b=Array(c+2);sd(this.e,0,b,0,c);b[c]=d;b[c+1]=e;f.val=!0;f=this.h+1;a===this.v?(this.e=b,this.h=f,a=this):a=new dh(this.v,this.sa,f,b);return a}return this.e[b+1]===e?this:Wg.f(this,a,b+1,e)}return(new Xg(a,1<<(this.sa>>>b&31),[null,this,null,null])).ha(a,b,c,d,e,f)};
g.Qa=function(){return ah.a?ah.a(this.e):ah.call(null,this.e)};g.Ga=function(a){if(a===this.v)return this;var b=Array(2*(this.h+1));sd(this.e,0,b,0,2*this.h);return new dh(a,this.sa,this.h,b)};g.Ra=function(a,b,c){a=ch(this.e,this.h,c);return-1===a?this:1===this.h?null:q?new dh(null,this.sa,this.h-1,Vg(this.e,Od((a-a%2)/2))):null};
g.ga=function(a,b,c,d,e){return b===this.sa?(a=ch(this.e,this.h,c),-1===a?(a=2*this.h,b=Array(a+2),sd(this.e,0,b,0,a),b[a]=c,b[a+1]=d,e.val=!0,new dh(null,this.sa,this.h+1,b)):u.c(this.e[a],d)?this:new dh(null,this.sa,this.h,Ug.d(this.e,a+1,d))):(new Xg(null,1<<(this.sa>>>a&31),[null,this])).ga(a,b,c,d,e)};g.ya=function(a,b,c,d){a=ch(this.e,this.h,c);return 0>a?d:Tg(c,this.e[a])?this.e[a+1]:q?d:null};
var $g=function(){function a(a,b,c,h,k,p,t){var v=Lc(c);if(v===k)return new dh(null,v,2,[c,h,p,t]);var x=new Sg;return Yg.ha(a,b,v,c,h,x).ha(a,b,k,p,t,x)}function b(a,b,c,h,k,p){var t=Lc(b);if(t===h)return new dh(null,t,2,[b,c,k,p]);var v=new Sg;return Yg.ga(a,t,b,c,v).ga(a,h,k,p,v)}var c=null,c=function(c,e,f,h,k,p,t){switch(arguments.length){case 6:return b.call(this,c,e,f,h,k,p);case 7:return a.call(this,c,e,f,h,k,p,t)}throw Error("Invalid arity: "+arguments.length);};c.n=b;c.Y=a;return c}();
function eh(a,b,c,d,e){this.i=a;this.ia=b;this.o=c;this.K=d;this.m=e;this.p=0;this.k=32374860}g=eh.prototype;g.u=function(){var a=this.m;return null!=a?a:this.m=a=Vc(this)};g.C=function(a,b){return C(b,this)};g.toString=function(){return Fc(this)};g.M=function(a,b){return Zc.c(b,this)};g.N=function(a,b,c){return Zc.d(b,c,this)};g.D=function(){return this};g.O=function(){return null==this.K?new H(null,2,5,xg,[this.ia[this.o],this.ia[this.o+1]],null):y(this.K)};
g.T=function(){return null==this.K?ah.d?ah.d(this.ia,this.o+2,null):ah.call(null,this.ia,this.o+2,null):ah.d?ah.d(this.ia,this.o,A(this.K)):ah.call(null,this.ia,this.o,A(this.K))};g.t=function(a,b){return Xc(this,b)};g.F=function(a,b){return new eh(b,this.ia,this.o,this.K,this.m)};g.B=function(){return this.i};g.H=function(){return $c(Pc,this.i)};
var ah=function(){function a(a,b,c){if(null==c)for(c=a.length;;)if(b<c){if(null!=a[b])return new eh(null,a,b,null,null);var h=a[b+1];if(m(h)&&(h=h.Qa(),m(h)))return new eh(null,a,b+2,h,null);b+=2}else return null;else return new eh(null,a,b,c,null)}function b(a){return c.d(a,0,null)}var c=null,c=function(c,e,f){switch(arguments.length){case 1:return b.call(this,c);case 3:return a.call(this,c,e,f)}throw Error("Invalid arity: "+arguments.length);};c.a=b;c.d=a;return c}();
function fh(a,b,c,d,e){this.i=a;this.ia=b;this.o=c;this.K=d;this.m=e;this.p=0;this.k=32374860}g=fh.prototype;g.u=function(){var a=this.m;return null!=a?a:this.m=a=Vc(this)};g.C=function(a,b){return C(b,this)};g.toString=function(){return Fc(this)};g.M=function(a,b){return Zc.c(b,this)};g.N=function(a,b,c){return Zc.d(b,c,this)};g.D=function(){return this};g.O=function(){return y(this.K)};g.T=function(){return bh.f?bh.f(null,this.ia,this.o,A(this.K)):bh.call(null,null,this.ia,this.o,A(this.K))};
g.t=function(a,b){return Xc(this,b)};g.F=function(a,b){return new fh(b,this.ia,this.o,this.K,this.m)};g.B=function(){return this.i};g.H=function(){return $c(Pc,this.i)};
var bh=function(){function a(a,b,c,h){if(null==h)for(h=b.length;;)if(c<h){var k=b[c];if(m(k)&&(k=k.Qa(),m(k)))return new fh(a,b,c+1,k,null);c+=1}else return null;else return new fh(a,b,c,h,null)}function b(a){return c.f(null,a,0,null)}var c=null,c=function(c,e,f,h){switch(arguments.length){case 1:return b.call(this,c);case 4:return a.call(this,c,e,f,h)}throw Error("Invalid arity: "+arguments.length);};c.a=b;c.f=a;return c}();
function gh(a,b,c,d,e,f){this.i=a;this.h=b;this.root=c;this.V=d;this.ba=e;this.m=f;this.p=8196;this.k=16123663}g=gh.prototype;g.Ia=function(){return new hh({},this.root,this.h,this.V,this.ba)};g.u=function(){var a=this.m;return null!=a?a:this.m=a=jf(this)};g.w=function(a,b){return Ma.d(this,b,null)};g.A=function(a,b,c){return null==b?this.V?this.ba:c:null==this.root?c:q?this.root.ya(0,Lc(b),b,c):null};
g.pa=function(a,b,c){if(null==b)return this.V&&c===this.ba?this:new gh(this.i,this.V?this.h:this.h+1,this.root,!0,c,null);a=new Sg;b=(null==this.root?Yg:this.root).ga(0,Lc(b),b,c,a);return b===this.root?this:new gh(this.i,a.val?this.h+1:this.h,b,this.V,this.ba,null)};g.Ha=function(a,b){return null==b?this.V:null==this.root?!1:q?this.root.ya(0,Lc(b),b,td)!==td:null};
g.call=function(){var a=null;return a=function(a,c,d){switch(arguments.length){case 2:return this.w(null,c);case 3:return this.A(null,c,d)}throw Error("Invalid arity: "+arguments.length);}}();g.apply=function(a,b){return this.call.apply(this,[this].concat(ya(b)))};g.a=function(a){return this.w(null,a)};g.c=function(a,b){return this.A(null,a,b)};g.C=function(a,b){return pd(b)?Oa(this,s.c(b,0),s.c(b,1)):yd.d(Ea,this,b)};g.toString=function(){return Fc(this)};
g.D=function(){if(0<this.h){var a=null!=this.root?this.root.Qa():null;return this.V?C(new H(null,2,5,xg,[null,this.ba],null),a):a}return null};g.I=function(){return this.h};g.t=function(a,b){return Kg(this,b)};g.F=function(a,b){return new gh(b,this.h,this.root,this.V,this.ba,this.m)};g.B=function(){return this.i};g.H=function(){return gb(Pg,this.i)};
g.Ja=function(a,b){if(null==b)return this.V?new gh(this.i,this.h-1,this.root,!1,null,null):this;if(null==this.root)return this;if(q){var c=this.root.Ra(0,Lc(b),b);return c===this.root?this:new gh(this.i,this.h-1,c,this.V,this.ba,null)}return null};var Pg=new gh(null,0,null,!1,null,0);function dd(a,b){for(var c=a.length,d=0,e=zb(Pg);;)if(d<c)var f=d+1,e=e.Na(null,a[d],b[d]),d=f;else return Bb(e)}function hh(a,b,c,d,e){this.v=a;this.root=b;this.count=c;this.V=d;this.ba=e;this.p=56;this.k=258}g=hh.prototype;
g.Na=function(a,b,c){return ih(this,b,c)};g.Oa=function(a,b){var c;a:{if(this.v){if(b?b.k&2048||b.Xb||(b.k?0:n(Sa,b)):n(Sa,b)){c=ih(this,kf.a?kf.a(b):kf.call(null,b),lf.a?lf.a(b):lf.call(null,b));break a}c=w(b);for(var d=this;;){var e=y(c);if(m(e))c=A(c),d=ih(d,kf.a?kf.a(e):kf.call(null,e),lf.a?lf.a(e):lf.call(null,e));else{c=d;break a}}}else throw Error("conj! after persistent");c=void 0}return c};
g.Pa=function(){var a;if(this.v)this.v=null,a=new gh(null,this.count,this.root,this.V,this.ba,null);else throw Error("persistent! called twice");return a};g.w=function(a,b){return null==b?this.V?this.ba:null:null==this.root?null:this.root.ya(0,Lc(b),b)};g.A=function(a,b,c){return null==b?this.V?this.ba:c:null==this.root?c:this.root.ya(0,Lc(b),b,c)};g.I=function(){if(this.v)return this.count;throw Error("count after persistent!");};
function ih(a,b,c){if(a.v){if(null==b)a.ba!==c&&(a.ba=c),a.V||(a.count+=1,a.V=!0);else{var d=new Sg;b=(null==a.root?Yg:a.root).ha(a.v,0,Lc(b),b,c,d);b!==a.root&&(a.root=b);d.val&&(a.count+=1)}return a}throw Error("assoc! after persistent!");}function jh(a,b,c){for(var d=b;;)if(null!=a)b=c?a.left:a.right,d=ad.c(d,a),a=b;else return d}function kh(a,b,c,d,e){this.i=a;this.stack=b;this.Wa=c;this.h=d;this.m=e;this.p=0;this.k=32374862}g=kh.prototype;
g.u=function(){var a=this.m;return null!=a?a:this.m=a=Vc(this)};g.C=function(a,b){return C(b,this)};g.toString=function(){return Fc(this)};g.M=function(a,b){return Zc.c(b,this)};g.N=function(a,b,c){return Zc.d(b,c,this)};g.D=function(){return this};g.I=function(){return 0>this.h?D(A(this))+1:this.h};g.O=function(){return kd(this.stack)};g.T=function(){var a=y(this.stack),a=jh(this.Wa?a.right:a.left,A(this.stack),this.Wa);return null!=a?new kh(null,a,this.Wa,this.h-1,null):Pc};
g.t=function(a,b){return Xc(this,b)};g.F=function(a,b){return new kh(b,this.stack,this.Wa,this.h,this.m)};g.B=function(){return this.i};g.H=function(){return $c(Pc,this.i)};function lh(a,b,c,d){return c instanceof mh?c.left instanceof mh?new mh(c.key,c.val,c.left.oa(),new nh(a,b,c.right,d,null),null):c.right instanceof mh?new mh(c.right.key,c.right.val,new nh(c.key,c.val,c.left,c.right.left,null),new nh(a,b,c.right.right,d,null),null):q?new nh(a,b,c,d,null):null:new nh(a,b,c,d,null)}
function oh(a,b,c,d){return d instanceof mh?d.right instanceof mh?new mh(d.key,d.val,new nh(a,b,c,d.left,null),d.right.oa(),null):d.left instanceof mh?new mh(d.left.key,d.left.val,new nh(a,b,c,d.left.left,null),new nh(d.key,d.val,d.left.right,d.right,null),null):q?new nh(a,b,c,d,null):null:new nh(a,b,c,d,null)}
function ph(a,b,c,d){if(c instanceof mh)return new mh(a,b,c.oa(),d,null);if(d instanceof nh)return oh(a,b,c,d.Ua());if(d instanceof mh&&d.left instanceof nh)return new mh(d.left.key,d.left.val,new nh(a,b,c,d.left.left,null),oh(d.key,d.val,d.left.right,d.right.Ua()),null);if(q)throw Error("red-black tree invariant violation");return null}function nh(a,b,c,d,e){this.key=a;this.val=b;this.left=c;this.right=d;this.m=e;this.p=0;this.k=32402207}g=nh.prototype;
g.u=function(){var a=this.m;return null!=a?a:this.m=a=Vc(this)};g.w=function(a,b){return s.d(this,b,null)};g.A=function(a,b,c){return s.d(this,b,c)};g.pa=function(a,b,c){return ed.d(new H(null,2,5,xg,[this.key,this.val],null),b,c)};g.call=function(){var a=null;return a=function(a,c,d){switch(arguments.length){case 2:return this.w(null,c);case 3:return this.A(null,c,d)}throw Error("Invalid arity: "+arguments.length);}}();g.apply=function(a,b){return this.call.apply(this,[this].concat(ya(b)))};
g.a=function(a){return this.w(null,a)};g.c=function(a,b){return this.A(null,a,b)};g.C=function(a,b){return new H(null,3,5,xg,[this.key,this.val,b],null)};g.Ka=function(){return this.key};g.$a=function(){return this.val};g.Cb=function(a){return a.Eb(this)};g.Ua=function(){return new mh(this.key,this.val,this.left,this.right,null)};g.replace=function(a,b,c,d){return new nh(a,b,c,d,null)};g.Bb=function(a){return a.Db(this)};g.Db=function(a){return new nh(a.key,a.val,this,a.right,null)};
g.Eb=function(a){return new nh(a.key,a.val,a.left,this,null)};g.oa=function(){return this};g.M=function(a,b){return Rc.c(this,b)};g.N=function(a,b,c){return Rc.d(this,b,c)};g.D=function(){return Ea(Ea(Pc,this.val),this.key)};g.I=function(){return 2};g.qa=function(){return this.val};g.ra=function(){return new H(null,1,5,xg,[this.key],null)};g.Ca=function(a,b,c){return(new H(null,2,5,xg,[this.key,this.val],null)).Ca(null,b,c)};g.t=function(a,b){return Xc(this,b)};
g.F=function(a,b){return $c(new H(null,2,5,xg,[this.key,this.val],null),b)};g.B=function(){return null};g.r=function(a,b){return 0===b?this.key:1===b?this.val:null};g.Z=function(a,b,c){return 0===b?this.key:1===b?this.val:q?c:null};g.H=function(){return wg};function mh(a,b,c,d,e){this.key=a;this.val=b;this.left=c;this.right=d;this.m=e;this.p=0;this.k=32402207}g=mh.prototype;g.u=function(){var a=this.m;return null!=a?a:this.m=a=Vc(this)};g.w=function(a,b){return s.d(this,b,null)};
g.A=function(a,b,c){return s.d(this,b,c)};g.pa=function(a,b,c){return ed.d(new H(null,2,5,xg,[this.key,this.val],null),b,c)};g.call=function(){var a=null;return a=function(a,c,d){switch(arguments.length){case 2:return this.w(null,c);case 3:return this.A(null,c,d)}throw Error("Invalid arity: "+arguments.length);}}();g.apply=function(a,b){return this.call.apply(this,[this].concat(ya(b)))};g.a=function(a){return this.w(null,a)};g.c=function(a,b){return this.A(null,a,b)};
g.C=function(a,b){return new H(null,3,5,xg,[this.key,this.val,b],null)};g.Ka=function(){return this.key};g.$a=function(){return this.val};g.Cb=function(a){return new mh(this.key,this.val,this.left,a,null)};g.Ua=function(){throw Error("red-black tree invariant violation");};g.replace=function(a,b,c,d){return new mh(a,b,c,d,null)};g.Bb=function(a){return new mh(this.key,this.val,a,this.right,null)};
g.Db=function(a){return this.left instanceof mh?new mh(this.key,this.val,this.left.oa(),new nh(a.key,a.val,this.right,a.right,null),null):this.right instanceof mh?new mh(this.right.key,this.right.val,new nh(this.key,this.val,this.left,this.right.left,null),new nh(a.key,a.val,this.right.right,a.right,null),null):q?new nh(a.key,a.val,this,a.right,null):null};
g.Eb=function(a){return this.right instanceof mh?new mh(this.key,this.val,new nh(a.key,a.val,a.left,this.left,null),this.right.oa(),null):this.left instanceof mh?new mh(this.left.key,this.left.val,new nh(a.key,a.val,a.left,this.left.left,null),new nh(this.key,this.val,this.left.right,this.right,null),null):q?new nh(a.key,a.val,a.left,this,null):null};g.oa=function(){return new nh(this.key,this.val,this.left,this.right,null)};g.M=function(a,b){return Rc.c(this,b)};
g.N=function(a,b,c){return Rc.d(this,b,c)};g.D=function(){return Ea(Ea(Pc,this.val),this.key)};g.I=function(){return 2};g.qa=function(){return this.val};g.ra=function(){return new H(null,1,5,xg,[this.key],null)};g.Ca=function(a,b,c){return(new H(null,2,5,xg,[this.key,this.val],null)).Ca(null,b,c)};g.t=function(a,b){return Xc(this,b)};g.F=function(a,b){return $c(new H(null,2,5,xg,[this.key,this.val],null),b)};g.B=function(){return null};g.r=function(a,b){return 0===b?this.key:1===b?this.val:null};
g.Z=function(a,b,c){return 0===b?this.key:1===b?this.val:q?c:null};g.H=function(){return wg};
var rh=function qh(b,c,d,e,f){if(null==c)return new mh(d,e,null,null,null);var h=b.c?b.c(d,c.key):b.call(null,d,c.key);return 0===h?(f[0]=c,null):0>h?(b=qh(b,c.left,d,e,f),null!=b?c.Bb(b):null):q?(b=qh(b,c.right,d,e,f),null!=b?c.Cb(b):null):null},th=function sh(b,c){if(null==b)return c;if(null==c)return b;if(b instanceof mh){if(c instanceof mh){var d=sh(b.right,c.left);return d instanceof mh?new mh(d.key,d.val,new mh(b.key,b.val,b.left,d.left,null),new mh(c.key,c.val,d.right,c.right,null),null):new mh(b.key,
b.val,b.left,new mh(c.key,c.val,d,c.right,null),null)}return new mh(b.key,b.val,b.left,sh(b.right,c),null)}return c instanceof mh?new mh(c.key,c.val,sh(b,c.left),c.right,null):q?(d=sh(b.right,c.left),d instanceof mh?new mh(d.key,d.val,new nh(b.key,b.val,b.left,d.left,null),new nh(c.key,c.val,d.right,c.right,null),null):ph(b.key,b.val,b.left,new nh(c.key,c.val,d,c.right,null))):null},vh=function uh(b,c,d,e){if(null!=c){var f=b.c?b.c(d,c.key):b.call(null,d,c.key);if(0===f)return e[0]=c,th(c.left,c.right);
if(0>f)return b=uh(b,c.left,d,e),null!=b||null!=e[0]?c.left instanceof nh?ph(c.key,c.val,b,c.right):new mh(c.key,c.val,b,c.right,null):null;if(q){b=uh(b,c.right,d,e);if(null!=b||null!=e[0])if(c.right instanceof nh)if(e=c.key,d=c.val,c=c.left,b instanceof mh)c=new mh(e,d,c,b.oa(),null);else if(c instanceof nh)c=lh(e,d,c.Ua(),b);else if(c instanceof mh&&c.right instanceof nh)c=new mh(c.right.key,c.right.val,lh(c.key,c.val,c.left.Ua(),c.right.left),new nh(e,d,c.right.right,b,null),null);else{if(q)throw Error("red-black tree invariant violation");
c=null}else c=new mh(c.key,c.val,c.left,b,null);else c=null;return c}}return null},xh=function wh(b,c,d,e){var f=c.key,h=b.c?b.c(d,f):b.call(null,d,f);return 0===h?c.replace(f,e,c.left,c.right):0>h?c.replace(f,c.val,wh(b,c.left,d,e),c.right):q?c.replace(f,c.val,c.left,wh(b,c.right,d,e)):null};function yh(a,b,c,d,e){this.X=a;this.wa=b;this.h=c;this.i=d;this.m=e;this.k=418776847;this.p=8192}g=yh.prototype;g.u=function(){var a=this.m;return null!=a?a:this.m=a=jf(this)};
g.w=function(a,b){return Ma.d(this,b,null)};g.A=function(a,b,c){a=zh(this,b);return null!=a?a.val:c};g.pa=function(a,b,c){a=[null];var d=rh(this.X,this.wa,b,c,a);return null==d?(a=E.c(a,0),u.c(c,a.val)?this:new yh(this.X,xh(this.X,this.wa,b,c),this.h,this.i,null)):new yh(this.X,d.oa(),this.h+1,this.i,null)};g.Ha=function(a,b){return null!=zh(this,b)};
g.call=function(){var a=null;return a=function(a,c,d){switch(arguments.length){case 2:return this.w(null,c);case 3:return this.A(null,c,d)}throw Error("Invalid arity: "+arguments.length);}}();g.apply=function(a,b){return this.call.apply(this,[this].concat(ya(b)))};g.a=function(a){return this.w(null,a)};g.c=function(a,b){return this.A(null,a,b)};g.C=function(a,b){return pd(b)?Oa(this,s.c(b,0),s.c(b,1)):yd.d(Ea,this,b)};
g.La=function(){return 0<this.h?new kh(null,jh(this.wa,null,!1),!1,this.h,null):null};g.toString=function(){return Fc(this)};function zh(a,b){for(var c=a.wa;;)if(null!=c){var d=a.X.c?a.X.c(b,c.key):a.X.call(null,b,c.key);if(0===d)return c;if(0>d)c=c.left;else if(q)c=c.right;else return null}else return null}g.vb=function(a,b){return 0<this.h?new kh(null,jh(this.wa,null,b),b,this.h,null):null};
g.wb=function(a,b,c){if(0<this.h){a=null;for(var d=this.wa;;)if(null!=d){var e=this.X.c?this.X.c(b,d.key):this.X.call(null,b,d.key);if(0===e)return new kh(null,ad.c(a,d),c,-1,null);if(m(c))0>e?(a=ad.c(a,d),d=d.left):d=d.right;else if(q)0<e?(a=ad.c(a,d),d=d.right):d=d.left;else return null}else return null==a?null:new kh(null,a,c,-1,null)}else return null};g.ub=function(a,b){return kf.a?kf.a(b):kf.call(null,b)};g.tb=function(){return this.X};
g.D=function(){return 0<this.h?new kh(null,jh(this.wa,null,!0),!0,this.h,null):null};g.I=function(){return this.h};g.t=function(a,b){return Kg(this,b)};g.F=function(a,b){return new yh(this.X,this.wa,this.h,b,this.m)};g.B=function(){return this.i};g.H=function(){return $c(Ah,this.i)};g.Ja=function(a,b){var c=[null],d=vh(this.X,this.wa,b,c);return null==d?null==E.c(c,0)?this:new yh(this.X,null,0,this.i,null):new yh(this.X,d.oa(),this.h-1,this.i,null)};
var Ah=new yh(Hc,null,0,null,0),Bh=function(){function a(a){var d=null;0<arguments.length&&(d=B(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){a=w(a);for(var b=zb(Pg);;)if(a){var e=A(A(a)),b=Jf.d(b,y(a),y(A(a)));a=e}else return Bb(b)}a.j=0;a.g=function(a){a=w(a);return b(a)};a.b=b;return a}(),Ch=function(){function a(a){var d=null;0<arguments.length&&(d=B(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){a=w(a);for(var b=Ah;;)if(a){var e=
A(A(a)),b=ed.d(b,y(a),y(A(a)));a=e}else return b}a.j=0;a.g=function(a){a=w(a);return b(a)};a.b=b;return a}();function Dh(a,b){this.za=a;this.ea=b;this.p=0;this.k=32374988}g=Dh.prototype;g.u=function(){return Vc(this)};g.aa=function(){var a=this.za,a=(a?a.k&128||a.Kb||(a.k?0:n(Ka,a)):n(Ka,a))?this.za.aa(null):A(this.za);return null==a?null:new Dh(a,this.ea)};g.C=function(a,b){return C(b,this)};g.toString=function(){return Fc(this)};g.M=function(a,b){return Zc.c(b,this)};
g.N=function(a,b,c){return Zc.d(b,c,this)};g.D=function(){return this};g.O=function(){return this.za.O(null).Ka(null)};g.T=function(){var a=this.za,a=(a?a.k&128||a.Kb||(a.k?0:n(Ka,a)):n(Ka,a))?this.za.aa(null):A(this.za);return null!=a?new Dh(a,this.ea):Pc};g.t=function(a,b){return Xc(this,b)};g.F=function(a,b){return new Dh(this.za,b)};g.B=function(){return this.ea};g.H=function(){return $c(Pc,this.ea)};function kf(a){return Ta(a)}function lf(a){return Ua(a)}
var Eh=function(){function a(a){var d=null;0<arguments.length&&(d=B(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){return m(Nf(a))?yd.c(function(a,b){return ad.c(m(a)?a:I,b)},a):null}a.j=0;a.g=function(a){a=w(a);return b(a)};a.b=b;return a}();function Fh(a,b,c){this.i=a;this.Da=b;this.m=c;this.p=8196;this.k=15077647}g=Fh.prototype;g.Ia=function(){return new Gh(zb(this.Da))};
g.u=function(){var a=this.m;if(null!=a)return a;a:{for(var a=0,b=w(this);;)if(b)var c=y(b),a=(a+Lc(c))%4503599627370496,b=A(b);else break a;a=void 0}return this.m=a};g.w=function(a,b){return Ma.d(this,b,null)};g.A=function(a,b,c){return Na(this.Da,b)?b:c};g.call=function(){var a=null;return a=function(a,c,d){switch(arguments.length){case 2:return this.w(null,c);case 3:return this.A(null,c,d)}throw Error("Invalid arity: "+arguments.length);}}();g.apply=function(a,b){return this.call.apply(this,[this].concat(ya(b)))};
g.a=function(a){return this.w(null,a)};g.c=function(a,b){return this.A(null,a,b)};g.C=function(a,b){return new Fh(this.i,ed.d(this.Da,b,null),null)};g.toString=function(){return Fc(this)};g.D=function(){var a=w(this.Da);return a?new Dh(a,null):null};g.Lb=function(a,b){return new Fh(this.i,Ra(this.Da,b),null)};g.I=function(){return Ba(this.Da)};g.t=function(a,b){var c=this;return(null==b?!1:b?b.k&4096||b.rc?!0:b.k?!1:n(Va,b):n(Va,b))&&D(c)===D(b)&&Mf(function(a){return wd(c,a)},b)};
g.F=function(a,b){return new Fh(b,this.Da,this.m)};g.B=function(){return this.i};g.H=function(){return $c(Hh,this.i)};var Hh=new Fh(null,I,0);function Ih(a){var b=a.length;if(b<=Og)for(var c=0,d=zb(I);;)if(c<b)var e=c+1,d=Cb(d,a[c],null),c=e;else return new Fh(null,Bb(d),null);else for(c=0,d=zb(Hh);;)if(c<b)e=c+1,d=Ab(d,a[c]),c=e;else return Bb(d)}function Gh(a){this.va=a;this.k=259;this.p=136}g=Gh.prototype;
g.call=function(){var a=null;return a=function(a,c,d){switch(arguments.length){case 2:return Ma.d(this.va,c,td)===td?null:c;case 3:return Ma.d(this.va,c,td)===td?d:c}throw Error("Invalid arity: "+arguments.length);}}();g.apply=function(a,b){return this.call.apply(this,[this].concat(ya(b)))};g.a=function(a){return Ma.d(this.va,a,td)===td?null:a};g.c=function(a,b){return Ma.d(this.va,a,td)===td?b:a};g.w=function(a,b){return Ma.d(this,b,null)};g.A=function(a,b,c){return Ma.d(this.va,b,td)===td?c:b};
g.I=function(){return D(this.va)};g.Oa=function(a,b){this.va=Jf.d(this.va,b,null);return this};g.Pa=function(){return new Fh(null,Bb(this.va),null)};function tf(a){if(a&&(a.p&4096||a.Zb))return a.name;if("string"===typeof a)return a;throw Error([r("Doesn't support name: "),r(a)].join(""));}var Kh=function Jh(b,c){return new vf(null,function(){var d=w(c);return d?m(b.a?b.a(y(d)):b.call(null,y(d)))?C(y(d),Jh(b,z(d))):null:null},null,null)};
function Lh(a,b,c){return function(d){var e=tb(a);return b.c?b.c(e.c?e.c(sb(a,d),c):e.call(null,sb(a,d),c),0):b.call(null,e.c?e.c(sb(a,d),c):e.call(null,sb(a,d),c),0)}}
var Mh=function(){function a(a,b,c,h,k){var p=rb(a,c,!0);if(m(p)){var t=E.d(p,0,null);return Kh(Lh(a,h,k),m(Lh(a,b,c).call(null,t))?p:A(p))}return null}function b(a,b,c){var h=Lh(a,b,c);return m(Ih([Bd,Kd]).call(null,b))?(a=rb(a,c,!0),m(a)?(b=E.d(a,0,null),m(h.a?h.a(b):h.call(null,b))?a:A(a)):null):Kh(h,qb(a,!0))}var c=null,c=function(c,e,f,h,k){switch(arguments.length){case 3:return b.call(this,c,e,f);case 5:return a.call(this,c,e,f,h,k)}throw Error("Invalid arity: "+arguments.length);};c.d=b;c.l=
a;return c}(),Nh=function(){function a(a,b,c,h,k){var p=rb(a,k,!1);if(m(p)){var t=E.d(p,0,null);return Kh(Lh(a,b,c),m(Lh(a,h,k).call(null,t))?p:A(p))}return null}function b(a,b,c){var h=Lh(a,b,c);return m(Ih([zd,Ad]).call(null,b))?(a=rb(a,c,!1),m(a)?(b=E.d(a,0,null),m(h.a?h.a(b):h.call(null,b))?a:A(a)):null):Kh(h,qb(a,!1))}var c=null,c=function(c,e,f,h,k){switch(arguments.length){case 3:return b.call(this,c,e,f);case 5:return a.call(this,c,e,f,h,k)}throw Error("Invalid arity: "+arguments.length);
};c.d=b;c.l=a;return c}();function Oh(a,b,c,d,e){this.i=a;this.start=b;this.end=c;this.step=d;this.m=e;this.k=32375006;this.p=8192}g=Oh.prototype;g.u=function(){var a=this.m;return null!=a?a:this.m=a=Vc(this)};g.aa=function(){return 0<this.step?this.start+this.step<this.end?new Oh(this.i,this.start+this.step,this.end,this.step,null):null:this.start+this.step>this.end?new Oh(this.i,this.start+this.step,this.end,this.step,null):null};g.C=function(a,b){return C(b,this)};g.toString=function(){return Fc(this)};
g.M=function(a,b){return Rc.c(this,b)};g.N=function(a,b,c){return Rc.d(this,b,c)};g.D=function(){return 0<this.step?this.start<this.end?this:null:this.start>this.end?this:null};g.I=function(){return ta(mb(this))?0:Math.ceil((this.end-this.start)/this.step)};g.O=function(){return null==mb(this)?null:this.start};g.T=function(){return null!=mb(this)?new Oh(this.i,this.start+this.step,this.end,this.step,null):Pc};g.t=function(a,b){return Xc(this,b)};
g.F=function(a,b){return new Oh(b,this.start,this.end,this.step,this.m)};g.B=function(){return this.i};g.r=function(a,b){if(b<Ba(this))return this.start+b*this.step;if(this.start>this.end&&0===this.step)return this.start;throw Error("Index out of bounds");};g.Z=function(a,b,c){return b<Ba(this)?this.start+b*this.step:this.start>this.end&&0===this.step?this.start:c};g.H=function(){return $c(Pc,this.i)};
var Ph=function(){function a(a,b,c){return new Oh(null,a,b,c,null)}function b(a,b){return e.d(a,b,1)}function c(a){return e.d(0,a,1)}function d(){return e.d(0,Number.MAX_VALUE,1)}var e=null,e=function(e,h,k){switch(arguments.length){case 0:return d.call(this);case 1:return c.call(this,e);case 2:return b.call(this,e,h);case 3:return a.call(this,e,h,k)}throw Error("Invalid arity: "+arguments.length);};e.q=d;e.a=c;e.c=b;e.d=a;return e}();
function Qh(a){var b=Rh.exec(a);return u.c(y(b),a)?1===D(b)?y(b):yg(b):null}function Sh(a,b){var c=a.exec(b);return null==c?null:1===D(c)?y(c):yg(c)}function Th(a){var b=Sh(/^(?:\(\?([idmsux]*)\))?(.*)/,a);E.d(b,0,null);a=E.d(b,1,null);b=E.d(b,2,null);return RegExp(b,a)}
function Uh(a,b,c,d,e,f,h){var k=la;try{la=null==la?null:la-1;if(null!=la&&0>la)return ub(a,"#");ub(a,c);w(h)&&(b.d?b.d(y(h),a,f):b.call(null,y(h),a,f));for(var p=A(h),t=sa.a(f);p&&(null==t||0!==t);){ub(a,d);b.d?b.d(y(p),a,f):b.call(null,y(p),a,f);var v=A(p);c=t-1;p=v;t=c}m(sa.a(f))&&(ub(a,d),b.d?b.d("...",a,f):b.call(null,"...",a,f));return ub(a,e)}finally{la=k}}
var Vh=function(){function a(a,d){var e=null;1<arguments.length&&(e=B(Array.prototype.slice.call(arguments,1),0));return b.call(this,a,e)}function b(a,b){for(var e=w(b),f=null,h=0,k=0;;)if(k<h){var p=f.r(null,k);ub(a,p);k+=1}else if(e=w(e))f=e,qd(f)?(e=Fb(f),h=Cc(f),f=e,p=D(e),e=h,h=p):(p=y(f),ub(a,p),e=A(f),f=null,h=0),k=0;else return null}a.j=1;a.g=function(a){var d=y(a);a=z(a);return b(d,a)};a.b=b;return a}(),Wh={'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t"};
function Xh(a){return[r('"'),r(a.replace(RegExp('[\\\\"\b\f\n\r\t]',"g"),function(a){return Wh[a]})),r('"')].join("")}
var $h=function Yh(b,c,d){if(null==b)return ub(c,"nil");if(void 0===b)return ub(c,"#\x3cundefined\x3e");if(q){m(function(){var c=cd.c(d,qa);return m(c)?(c=b?b.k&131072||b.Yb?!0:b.k?!1:n(db,b):n(db,b))?jd(b):c:c}())&&(ub(c,"^"),Yh(jd(b),c,d),ub(c," "));if(null==b)return ub(c,"nil");if(b.Qb)return b.ac(c);if(b&&(b.k&2147483648||b.J))return b.s(null,c,d);if(ua(b)===Boolean||"number"===typeof b)return ub(c,""+r(b));if(null!=b&&b.constructor===Object)return ub(c,"#js "),Zh.f?Zh.f(Tf.c(function(c){return new H(null,
2,5,xg,[uf.a(c),b[c]],null)},rd(b)),Yh,c,d):Zh.call(null,Tf.c(function(c){return new H(null,2,5,xg,[uf.a(c),b[c]],null)},rd(b)),Yh,c,d);if(b instanceof Array)return Uh(c,Yh,"#js ["," ","]",d,b);if("string"==typeof b)return m(pa.a(d))?ub(c,Xh(b)):ub(c,b);if(gd(b))return Vh.b(c,B(["#\x3c",""+r(b),"\x3e"],0));if(b instanceof Date){var e=function(b,c){for(var d=""+r(b);;)if(D(d)<c)d=[r("0"),r(d)].join("");else return d};return Vh.b(c,B(['#inst "',""+r(b.getUTCFullYear()),"-",e(b.getUTCMonth()+1,2),"-",
e(b.getUTCDate(),2),"T",e(b.getUTCHours(),2),":",e(b.getUTCMinutes(),2),":",e(b.getUTCSeconds(),2),".",e(b.getUTCMilliseconds(),3),"-",'00:00"'],0))}return b instanceof RegExp?Vh.b(c,B(['#"',b.source,'"'],0)):(b?b.k&2147483648||b.J||(b.k?0:n(vb,b)):n(vb,b))?wb(b,c,d):q?Vh.b(c,B(["#\x3c",""+r(b),"\x3e"],0)):null}return null};
function ai(a,b){var c;if(null==a||ta(w(a)))c="";else{c=r;var d=new ha;a:{var e=new Ec(d);$h(y(a),e,b);for(var f=w(A(a)),h=null,k=0,p=0;;)if(p<k){var t=h.r(null,p);ub(e," ");$h(t,e,b);p+=1}else if(f=w(f))h=f,qd(h)?(f=Fb(h),k=Cc(h),h=f,t=D(f),f=k,k=t):(t=y(h),ub(e," "),$h(t,e,b),f=A(h),h=null,k=0),p=0;else break a}c=""+c(d)}return c}
var bi=function(){function a(a){var d=null;0<arguments.length&&(d=B(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){return ai(a,ma())}a.j=0;a.g=function(a){a=w(a);return b(a)};a.b=b;return a}(),ci=function(){function a(a){var d=null;0<arguments.length&&(d=B(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){var b=ed.d(ma(),pa,!1);a=ai(a,b);ja.a?ja.a(a):ja.call(null,a);return null}a.j=0;a.g=function(a){a=w(a);return b(a)};a.b=b;return a}();
function Zh(a,b,c,d){return Uh(c,function(a,c,d){b.d?b.d(Ta(a),c,d):b.call(null,Ta(a),c,d);ub(c," ");return b.d?b.d(Ua(a),c,d):b.call(null,Ua(a),c,d)},"{",", ","}",d,w(a))}Dh.prototype.J=!0;Dh.prototype.s=function(a,b,c){return Uh(b,$h,"("," ",")",c,this)};Oc.prototype.J=!0;Oc.prototype.s=function(a,b,c){return Uh(b,$h,"("," ",")",c,this)};Bg.prototype.J=!0;Bg.prototype.s=function(a,b,c){return Uh(b,$h,"["," ","]",c,this)};Bf.prototype.J=!0;
Bf.prototype.s=function(a,b,c){return Uh(b,$h,"("," ",")",c,this)};yh.prototype.J=!0;yh.prototype.s=function(a,b,c){return Zh(this,$h,b,c)};na.prototype.J=!0;na.prototype.s=function(a,b,c){return Zh(this,$h,b,c)};Gg.prototype.J=!0;Gg.prototype.s=function(a,b,c){return Uh(b,$h,"#queue ["," ","]",c,w(this))};vf.prototype.J=!0;vf.prototype.s=function(a,b,c){return Uh(b,$h,"("," ",")",c,this)};Wc.prototype.J=!0;Wc.prototype.s=function(a,b,c){return Uh(b,$h,"("," ",")",c,this)};eh.prototype.J=!0;
eh.prototype.s=function(a,b,c){return Uh(b,$h,"("," ",")",c,this)};mh.prototype.J=!0;mh.prototype.s=function(a,b,c){return Uh(b,$h,"["," ","]",c,this)};zg.prototype.J=!0;zg.prototype.s=function(a,b,c){return Uh(b,$h,"("," ",")",c,this)};gh.prototype.J=!0;gh.prototype.s=function(a,b,c){return Zh(this,$h,b,c)};Fh.prototype.J=!0;Fh.prototype.s=function(a,b,c){return Uh(b,$h,"#{"," ","}",c,this)};H.prototype.J=!0;H.prototype.s=function(a,b,c){return Uh(b,$h,"["," ","]",c,this)};mf.prototype.J=!0;
mf.prototype.s=function(a,b,c){return Uh(b,$h,"("," ",")",c,this)};Mg.prototype.J=!0;Mg.prototype.s=function(a,b,c){return Uh(b,$h,"("," ",")",c,this)};nf.prototype.J=!0;nf.prototype.s=function(a,b){return ub(b,"()")};nh.prototype.J=!0;nh.prototype.s=function(a,b,c){return Uh(b,$h,"["," ","]",c,this)};rf.prototype.J=!0;rf.prototype.s=function(a,b,c){return Uh(b,$h,"("," ",")",c,this)};Oh.prototype.J=!0;Oh.prototype.s=function(a,b,c){return Uh(b,$h,"("," ",")",c,this)};fh.prototype.J=!0;
fh.prototype.s=function(a,b,c){return Uh(b,$h,"("," ",")",c,this)};kh.prototype.J=!0;kh.prototype.s=function(a,b,c){return Uh(b,$h,"("," ",")",c,this)};H.prototype.Ya=!0;H.prototype.Za=function(a,b){return xd.c(this,b)};Bg.prototype.Ya=!0;Bg.prototype.Za=function(a,b){return xd.c(this,b)};F.prototype.Ya=!0;F.prototype.Za=function(a,b){return Gc(this,b)};Jc.prototype.Ya=!0;Jc.prototype.Za=function(a,b){return Gc(this,b)};
function di(a,b,c,d){this.state=a;this.i=b;this.hc=c;this.na=d;this.k=2153938944;this.p=2}g=di.prototype;g.u=function(){return this[ba]||(this[ba]=++ca)};g.yb=function(a,b,c){a=w(this.na);for(var d=null,e=0,f=0;;)if(f<e){var h=d.r(null,f),k=E.d(h,0,null),h=E.d(h,1,null);h.f?h.f(k,this,b,c):h.call(null,k,this,b,c);f+=1}else if(a=w(a))qd(a)?(d=Fb(a),a=Cc(a),k=d,e=D(d),d=k):(d=y(a),k=E.d(d,0,null),h=E.d(d,1,null),h.f?h.f(k,this,b,c):h.call(null,k,this,b,c),a=A(a),d=null,e=0),f=0;else return null};
g.xb=function(a,b,c){return this.na=ed.d(this.na,b,c)};g.s=function(a,b,c){ub(b,"#\x3cAtom: ");$h(this.state,b,c);return ub(b,"\x3e")};g.B=function(){return this.i};g.Gb=function(){return this.state};g.t=function(a,b){return this===b};
var fi=function(){function a(a){return new di(a,null,null,null)}var b=null,c=function(){function a(c,d){var k=null;1<arguments.length&&(k=B(Array.prototype.slice.call(arguments,1),0));return b.call(this,c,k)}function b(a,c){var d=ud(c)?id.c(Bh,c):c,e=cd.c(d,ei),d=cd.c(d,qa);return new di(a,d,e,null)}a.j=1;a.g=function(a){var c=y(a);a=z(a);return b(c,a)};a.b=b;return a}(),b=function(b,e){switch(arguments.length){case 1:return a.call(this,b);default:return c.b(b,B(arguments,1))}throw Error("Invalid arity: "+
arguments.length);};b.j=1;b.g=c.g;b.a=a;b.b=c.b;return b}();function gi(a,b){var c=a.hc;if(null!=c&&!m(c.a?c.a(b):c.call(null,b)))throw Error([r("Assert failed: "),r("Validator rejected reference state"),r("\n"),r(bi.b(B([qf(new Jc(null,"validate","validate",1233162959,null),new Jc(null,"new-value","new-value",972165309,null))],0)))].join(""));c=a.state;a.state=b;null!=a.na&&xb(a,c,b);return b}
var hi=function(){function a(a,b,c,d,e){return gi(a,b.f?b.f(a.state,c,d,e):b.call(null,a.state,c,d,e))}function b(a,b,c,d){return gi(a,b.d?b.d(a.state,c,d):b.call(null,a.state,c,d))}function c(a,b,c){return gi(a,b.c?b.c(a.state,c):b.call(null,a.state,c))}function d(a,b){return gi(a,b.a?b.a(a.state):b.call(null,a.state))}var e=null,f=function(){function a(c,d,e,f,h,J){var Z=null;5<arguments.length&&(Z=B(Array.prototype.slice.call(arguments,5),0));return b.call(this,c,d,e,f,h,Z)}function b(a,c,d,e,
f,h){return gi(a,id.b(c,a.state,d,e,f,B([h],0)))}a.j=5;a.g=function(a){var c=y(a);a=A(a);var d=y(a);a=A(a);var e=y(a);a=A(a);var f=y(a);a=A(a);var h=y(a);a=z(a);return b(c,d,e,f,h,a)};a.b=b;return a}(),e=function(e,k,p,t,v,x){switch(arguments.length){case 2:return d.call(this,e,k);case 3:return c.call(this,e,k,p);case 4:return b.call(this,e,k,p,t);case 5:return a.call(this,e,k,p,t,v);default:return f.b(e,k,p,t,v,B(arguments,5))}throw Error("Invalid arity: "+arguments.length);};e.j=5;e.g=f.g;e.c=d;
e.d=c;e.f=b;e.l=a;e.b=f.b;return e}();function ii(){var a=ji();return cb(a)}function ki(a,b,c){return yb(a,b,c)}var li=null,mi=function(){function a(a){null==li&&(li=fi.a(0));return Mc.a([r(a),r(hi.c(li,Qc))].join(""))}function b(){return c.a("G__")}var c=null,c=function(c){switch(arguments.length){case 0:return b.call(this);case 1:return a.call(this,c)}throw Error("Invalid arity: "+arguments.length);};c.q=b;c.a=a;return c}(),ni={};
function oi(a){if(a?a.Vb:a)return a.Vb(a);var b;b=oi[l(null==a?null:a)];if(!b&&(b=oi._,!b))throw wa("IEncodeJS.-clj-\x3ejs",a);return b.call(null,a)}function pi(a){return(a?m(m(null)?null:a.Ub)||(a.Pb?0:n(ni,a)):n(ni,a))?oi(a):"string"===typeof a||"number"===typeof a||a instanceof F||a instanceof Jc?qi.a?qi.a(a):qi.call(null,a):bi.b(B([a],0))}
var qi=function ri(b){if(null==b)return null;if(b?m(m(null)?null:b.Ub)||(b.Pb?0:n(ni,b)):n(ni,b))return oi(b);if(b instanceof F)return tf(b);if(b instanceof Jc)return""+r(b);if(od(b)){var c={};b=w(b);for(var d=null,e=0,f=0;;)if(f<e){var h=d.r(null,f),k=E.d(h,0,null),h=E.d(h,1,null);c[pi(k)]=ri(h);f+=1}else if(b=w(b))qd(b)?(e=Fb(b),b=Cc(b),d=e,e=D(e)):(e=y(b),d=E.d(e,0,null),e=E.d(e,1,null),c[pi(d)]=ri(e),b=A(b),d=null,e=0),f=0;else break;return c}if(null==b?0:b?b.k&8||b.kc||(b.k?0:n(Da,b)):n(Da,b)){c=
[];b=w(Tf.c(ri,b));d=null;for(f=e=0;;)if(f<e)k=d.r(null,f),c.push(k),f+=1;else if(b=w(b))d=b,qd(d)?(b=Fb(d),f=Cc(d),d=b,e=D(b),b=f):(b=y(d),c.push(b),b=A(d),d=null,e=0),f=0;else break;return c}return q?b:null},si=null;function ji(){null==si&&(si=fi.a(new na(null,3,[ti,I,ui,I,vi,I],null)));return si}
var wi=function(){function a(a,b,f){var h=u.c(b,f);if(!h&&!(h=wd(vi.a(a).call(null,b),f))&&(h=pd(f))&&(h=pd(b)))if(h=D(f)===D(b))for(var h=!0,k=0;;)if(h&&k!==D(f))h=c.d(a,b.a?b.a(k):b.call(null,k),f.a?f.a(k):f.call(null,k)),k+=1;else return h;else return h;else return h}function b(a,b){return c.d(ii(),a,b)}var c=null,c=function(c,e,f){switch(arguments.length){case 2:return b.call(this,c,e);case 3:return a.call(this,c,e,f)}throw Error("Invalid arity: "+arguments.length);};c.c=b;c.d=a;return c}(),xi=
function(){function a(a,b){var c=cd.c(ti.a(a),b);return w(c)?c:null}function b(a){return c.c(ii(),a)}var c=null,c=function(c,e){switch(arguments.length){case 1:return b.call(this,c);case 2:return a.call(this,c,e)}throw Error("Invalid arity: "+arguments.length);};c.a=b;c.c=a;return c}();function yi(a,b,c,d){hi.c(a,function(){return cb(b)});hi.c(c,function(){return cb(d)})}
var Ai=function zi(b,c,d){var e=cb(d).call(null,b),e=m(m(e)?e.a?e.a(c):e.call(null,c):e)?!0:null;if(m(e))return e;e=function(){for(var e=xi.a(c);;)if(0<D(e))zi(b,y(e),d),e=z(e);else return null}();if(m(e))return e;e=function(){for(var e=xi.a(b);;)if(0<D(e))zi(y(e),c,d),e=z(e);else return null}();return m(e)?e:!1};function Bi(a,b,c){c=Ai(a,b,c);return m(c)?c:wi.c(a,b)}
var Di=function Ci(b,c,d,e,f,h,k){var p=yd.d(function(e,h){var k=E.d(h,0,null);E.d(h,1,null);if(wi.d(cb(d),c,k)){var p;p=(p=null==e)?p:Bi(k,y(e),f);p=m(p)?h:e;if(!m(Bi(y(p),k,f)))throw Error([r("Multiple methods in multimethod '"),r(b),r("' match dispatch value: "),r(c),r(" -\x3e "),r(k),r(" and "),r(y(p)),r(", and neither is preferred")].join(""));return p}return e},null,cb(e));if(m(p)){if(u.c(cb(k),cb(d)))return hi.f(h,ed,c,y(A(p))),y(A(p));yi(h,e,k,d);return Ci(b,c,d,e,f,h,k)}return null};
function Ei(a,b){if(a?a.Jb:a)return a.Jb(0,b);var c;c=Ei[l(null==a?null:a)];if(!c&&(c=Ei._,!c))throw wa("IMultiFn.-get-method",a);return c.call(null,a,b)}function Fi(a,b){if(a?a.Ib:a)return a.Ib(0,b);var c;c=Fi[l(null==a?null:a)];if(!c&&(c=Fi._,!c))throw wa("IMultiFn.-dispatch",a);return c.call(null,a,b)}function Gi(a,b,c,d,e,f,h,k){this.name=a;this.cc=b;this.bc=c;this.ab=d;this.Sa=e;this.fc=f;this.bb=h;this.Xa=k;this.k=4194304;this.p=256}g=Gi.prototype;g.u=function(){return this[ba]||(this[ba]=++ca)};
function Hi(a,b,c){hi.f(a.Sa,ed,b,c);yi(a.bb,a.Sa,a.Xa,a.ab)}g.Jb=function(a,b){u.c(cb(this.Xa),cb(this.ab))||yi(this.bb,this.Sa,this.Xa,this.ab);var c=cb(this.bb).call(null,b);if(m(c))return c;c=Di(this.name,b,this.ab,this.Sa,this.fc,this.bb,this.Xa);return m(c)?c:cb(this.Sa).call(null,this.bc)};g.Ib=function(a,b){var c=this.name,d=id.c(this.cc,b),e=Ei(this,d);if(!m(e))throw Error([r("No method in multimethod '"),r(c),r("' for dispatch value: "),r(d)].join(""));return id.c(e,b)};
g.call=function(){function a(a,b){var e=null;1<arguments.length&&(e=B(Array.prototype.slice.call(arguments,1),0));return Fi(this,e)}function b(a,b){return Fi(this,b)}a.j=1;a.g=function(a){y(a);a=z(a);return b(0,a)};a.b=b;return a}();g.apply=function(a,b){return Fi(this,b)};function Ii(a){this.Ab=a;this.p=0;this.k=2153775104}Ii.prototype.u=function(){return fa(bi.b(B([this],0)))};Ii.prototype.s=function(a,b){return ub(b,[r('#uuid "'),r(this.Ab),r('"')].join(""))};
Ii.prototype.t=function(a,b){return b instanceof Ii&&this.Ab===b.Ab};var ra=new F(null,"dup","dup"),K=new F(null,"href","href"),ui=new F(null,"descendants","descendants"),Ic=new F(null,"default","default"),Ji=new F(null,"text","text"),Ki=new F(null,"dependencies","dependencies"),Li=new F(null,"history","history"),Mi=new F(null,"background","background"),Ni=new F(null,"alt","alt"),Oi=new F(null,"focus-select","focus-select"),Pi=new F(null,"scroll-to","scroll-to"),Qi=new F("tailrecursion.javelin","none","tailrecursion.javelin/none"),Ri=new F(null,"callback","callback"),
Si=new F(null,"class","class"),Ti=new F(null,"percent","percent"),Ui=new F(null,"fade-toggle","fade-toggle"),ti=new F(null,"parents","parents"),oa=new F(null,"flush-on-newline","flush-on-newline"),Vi=new F(null,"hierarchy","hierarchy"),Wi=new F(null,"style","style"),Xi=new F(null,"data-background","data-background"),Yi=new F(null,"src","src"),Zi=new F(null,"focus","focus"),$i=new F(null,"data-markdown","data-markdown"),aj=new F(null,"data-transition","data-transition"),L=new F(null,"title","title"),
bj=new F(null,"do-toggle","do-toggle"),vi=new F(null,"ancestors","ancestors"),cj=new F(null,"success","success"),dj=new F(null,"toggle","toggle"),ej=new F(null,"css","css"),fj=new F(null,"transition","transition"),gj=new F(null,"url","url"),hj=new F(null,"markdown","markdown"),sa=new F(null,"print-length","print-length"),ij=new F(null,"type","type"),q=new F(null,"else","else"),pa=new F(null,"readably","readably"),jj=new F(null,"dataType","dataType"),ei=new F(null,"validator","validator"),qa=new F(null,
"meta","meta"),kj=new F("tailrecursion.javelin","cell","tailrecursion.javelin/cell"),lj=new F("tailrecursion.priority-map","not-found","tailrecursion.priority-map/not-found"),mj=new F(null,"theme","theme"),nj=new F(null,"scrollTop","scrollTop"),oj=new F(null,"id","id"),pj=new F(null,"async","async"),qj=new F(null,"value","value"),rj=new F(null,"select","select"),sj=new F(null,"attr","attr"),tj=new F(null,"slide-toggle","slide-toggle"),uj=new F(null,"rel","rel"),vj=new F("tailrecursion.hoplon","default",
"tailrecursion.hoplon/default");var wj=function(){function a(a,d){var e=null;1<arguments.length&&(e=B(Array.prototype.slice.call(arguments,1),0));return b.call(this,0,e)}function b(a,b){throw Error(id.c(r,b));}a.j=1;a.g=function(a){y(a);a=z(a);return b(0,a)};a.b=b;return a}();Th("([-+]?)(?:(0)|([1-9][0-9]*)|0[xX]([0-9A-Fa-f]+)|0([0-7]+)|([1-9][0-9]?)[rR]([0-9A-Za-z]+)|0[0-9]+)(N)?");Th("([-+]?[0-9]+)/([0-9]+)");Th("([-+]?[0-9]+(\\.[0-9]*)?([eE][-+]?[0-9]+)?)(M)?");Th("[:]?([^0-9/].*/)?([^0-9/][^/]*)");Th("[0-9A-Fa-f]{2}");Th("[0-9A-Fa-f]{4}");
function xj(a){if(u.c(3,D(a)))return a;if(3<D(a))return hf.d(a,0,3);if(q)for(a=new ha(a);;)if(3>a.Ea.length)a=a.append("0");else return a.toString();else return null}var yj=function(){var a=new H(null,13,5,xg,[null,31,28,31,30,31,30,31,31,30,31,30,31],null),b=new H(null,13,5,xg,[null,31,29,31,30,31,30,31,31,30,31,30,31],null);return function(c,d){return cd.c(m(d)?b:a,c)}}(),Rh=/(\d\d\d\d)(?:-(\d\d)(?:-(\d\d)(?:[T](\d\d)(?::(\d\d)(?::(\d\d)(?:[.](\d+))?)?)?)?)?)?(?:[Z]|([-+])(\d\d):(\d\d))?/;
function zj(a){a=parseInt(a);return ta(isNaN(a))?a:null}function Aj(a,b,c,d){a<=b&&b<=c||wj.b(null,B([[r(d),r(" Failed:  "),r(a),r("\x3c\x3d"),r(b),r("\x3c\x3d"),r(c)].join("")],0));return b}
function Bj(a){var b=Qh(a);E.d(b,0,null);var c=E.d(b,1,null),d=E.d(b,2,null),e=E.d(b,3,null),f=E.d(b,4,null),h=E.d(b,5,null),k=E.d(b,6,null),p=E.d(b,7,null),t=E.d(b,8,null),v=E.d(b,9,null),x=E.d(b,10,null);if(ta(b))return wj.b(null,B([[r("Unrecognized date/time syntax: "),r(a)].join("")],0));a=zj(c);var b=function(){var a=zj(d);return m(a)?a:1}(),c=function(){var a=zj(e);return m(a)?a:1}(),G=function(){var a=zj(f);return m(a)?a:0}(),J=function(){var a=zj(h);return m(a)?a:0}(),Z=function(){var a=zj(k);
return m(a)?a:0}(),da=function(){var a=zj(xj(p));return m(a)?a:0}(),t=(u.c(t,"-")?-1:1)*(60*function(){var a=zj(v);return m(a)?a:0}()+function(){var a=zj(x);return m(a)?a:0}());return new H(null,8,5,xg,[a,Aj(1,b,12,"timestamp month field must be in range 1..12"),Aj(1,c,yj.c?yj.c(b,0===(a%4+4)%4&&(0!==(a%100+100)%100||0===(a%400+400)%400)):yj.call(null,b,0===(a%4+4)%4&&(0!==(a%100+100)%100||0===(a%400+400)%400)),"timestamp day field must be in range 1..last day in month"),Aj(0,G,23,"timestamp hour field must be in range 0..23"),
Aj(0,J,59,"timestamp minute field must be in range 0..59"),Aj(0,Z,u.c(J,59)?60:59,"timestamp second field must be in range 0..60"),Aj(0,da,999,"timestamp millisecond field must be in range 0..999"),t],null)}
var Cj=fi.a(new na(null,4,["inst",function(a){var b;if("string"===typeof a)if(b=Bj(a),m(b)){a=E.d(b,0,null);var c=E.d(b,1,null),d=E.d(b,2,null),e=E.d(b,3,null),f=E.d(b,4,null),h=E.d(b,5,null),k=E.d(b,6,null);b=E.d(b,7,null);b=new Date(Date.UTC(a,c-1,d,e,f,h,k)-6E4*b)}else b=wj.b(null,B([[r("Unrecognized date/time syntax: "),r(a)].join("")],0));else b=wj.b(null,B(["Instance literal expects a string for its timestamp."],0));return b},"uuid",function(a){return"string"===typeof a?new Ii(a):wj.b(null,
B(["UUID literal expects a string as its representation."],0))},"queue",function(a){return pd(a)?dg(Hg,a):wj.b(null,B(["Queue literal expects a vector for its elements."],0))},"js",function(a){if(pd(a)){var b=[];a=w(a);for(var c=null,d=0,e=0;;)if(e<d){var f=c.r(null,e);b.push(f);e+=1}else if(a=w(a))c=a,qd(c)?(a=Fb(c),e=Cc(c),c=a,d=D(a),a=e):(a=y(c),b.push(a),a=A(c),c=null,d=0),e=0;else break;return b}if(od(a)){b={};a=w(a);c=null;for(e=d=0;;)if(e<d){var h=c.r(null,e),f=E.d(h,0,null),h=E.d(h,1,null);
b[tf(f)]=h;e+=1}else if(a=w(a))qd(a)?(d=Fb(a),a=Cc(a),c=d,d=D(d)):(d=y(a),c=E.d(d,0,null),d=E.d(d,1,null),b[tf(c)]=d,a=A(a),c=null,d=0),e=0;else break;return b}return q?wj.b(null,B([[r("JS literal expects a vector or map containing "),r("only string or unqualified keyword keys")].join("")],0)):null}],null));fi.a(null);function Dj(a,b,c,d){this.L=a;this.S=b;this.i=c;this.m=d;this.p=0;this.k=2565220111}g=Dj.prototype;g.u=function(){var a=this.m;return null!=a?a:this.m=a=jf(this)};g.w=function(a,b){return cd.c(this.S,b)};g.A=function(a,b,c){return cd.d(this.S,b,c)};
g.pa=function(a,b,c){a=cd.d(this.S,b,null);if(m(a)){if(u.c(a,c))return this;var d=cd.c(this.L,a);return u.c(D(d),1)?new Dj(ed.d(fd.c(this.L,a),c,ad.c(cd.d(this.L,c,Hh),b)),ed.d(this.S,b,c),this.i,null):new Dj(ed.b(this.L,a,ld.c(cd.c(this.L,a),b),B([c,ad.c(cd.d(this.L,c,Hh),b)],0)),ed.d(this.S,b,c),this.i,null)}return new Dj(ed.d(this.L,c,ad.c(cd.d(this.L,c,Hh),b)),ed.d(this.S,b,c),this.i,null)};g.Ha=function(a,b){return wd(this.S,b)};
g.call=function(){var a=null;return a=function(a,c,d){switch(arguments.length){case 2:return this.w(null,c);case 3:return this.A(null,c,d)}throw Error("Invalid arity: "+arguments.length);}}();g.apply=function(a,b){return this.call.apply(this,[this].concat(ya(b)))};g.a=function(a){return this.w(null,a)};g.c=function(a,b){return this.A(null,a,b)};g.s=function(a,b,c){return Uh(b,function(a){return Uh(b,$h,""," ","",c,a)},"#tailrecursion.priority-map {",", ","}",c,this)};
g.C=function(a,b){return pd(b)?Oa(this,s.c(b,0),s.c(b,1)):yd.d(Ea,this,b)};
g.La=function(){var a=this;return w(function(){return function c(a){return new vf(null,function(){for(var e=a;;){var f=w(e);if(f){var h=f,k=y(h),p=E.d(k,0,null),t=E.d(k,1,null);if(f=w(function(a,c,d,e,f,h){return function va(k){return new vf(null,function(a,c,d){return function(){for(;;){var a=w(k);if(a){if(qd(a)){var c=Fb(a),e=D(c),f=zf(e);a:{for(var h=0;;)if(h<e){var p=s.c(c,h);f.add(new H(null,2,5,xg,[p,d],null));h+=1}else{c=!0;break a}c=void 0}return c?Cf(f.Q(),va(Cc(a))):Cf(f.Q(),null)}f=y(a);
return C(new H(null,2,5,xg,[f,d],null),va(z(a)))}return null}}}(a,c,d,e,f,h),null,null)}}(e,k,p,t,h,f)(t)))return Hf.c(f,c(z(e)));e=z(e)}else return null}},null,null)}(pb(a.L))}())};g.vb=function(a,b){return(m(b)?w:of).call(null,this)};
g.wb=function(a,b,c){var d=m(c)?Mh.d(this.L,Kd,b):Nh.d(this.L,Ad,b);return w(function(){return function f(a){return new vf(null,function(){for(var b=a;;){var c=w(b);if(c){var d=c,v=y(d),x=E.d(v,0,null),G=E.d(v,1,null);if(c=w(function(a,b,c,d,f,h){return function Wa(k){return new vf(null,function(a,b,c){return function(){for(;;){var a=w(k);if(a){if(qd(a)){var b=Fb(a),d=D(b),f=zf(d);a:{for(var h=0;;)if(h<d){var p=s.c(b,h);f.add(new H(null,2,5,xg,[p,c],null));h+=1}else{b=!0;break a}b=void 0}return b?
Cf(f.Q(),Wa(Cc(a))):Cf(f.Q(),null)}f=y(a);return C(new H(null,2,5,xg,[f,c],null),Wa(z(a)))}return null}}}(a,b,c,d,f,h),null,null)}}(b,v,x,G,d,c)(G)))return Hf.c(c,f(z(b)));b=z(b)}else return null}},null,null)}(d)}())};g.ub=function(a,b){return Ua(b)};g.tb=function(){return Hc};
g.D=function(){var a=this;return w(function(){return function c(a){return new vf(null,function(){for(var e=a;;){var f=w(e);if(f){var h=f,k=y(h),p=E.d(k,0,null),t=E.d(k,1,null);if(f=w(function(a,c,d,e,f,h){return function va(k){return new vf(null,function(a,c,d){return function(){for(;;){var a=w(k);if(a){if(qd(a)){var c=Fb(a),e=D(c),f=zf(e);a:{for(var h=0;;)if(h<e){var p=s.c(c,h);f.add(new H(null,2,5,xg,[p,d],null));h+=1}else{c=!0;break a}c=void 0}return c?Cf(f.Q(),va(Cc(a))):Cf(f.Q(),null)}f=y(a);
return C(new H(null,2,5,xg,[f,d],null),va(z(a)))}return null}}}(a,c,d,e,f,h),null,null)}}(e,k,p,t,h,f)(t)))return Hf.c(f,c(z(e)));e=z(e)}else return null}},null,null)}(a.L)}())};g.I=function(){return D(this.S)};g.qa=function(){if(0===D(this.S))return null;var a=y(this.L);return new H(null,2,5,xg,[y(Ua(a)),Ta(a)],null)};
g.ra=function(){if(0===D(this.S))throw Error("Can't pop empty priority map");var a=y(this.L),b=Ua(a),c=y(b),a=Ta(a);return u.c(D(b),1)?new Dj(fd.c(this.L,a),fd.c(this.S,c),this.i,null):new Dj(ed.d(this.L,a,ld.c(b,c)),fd.c(this.S,c),this.i,null)};g.t=function(a,b){return jb(this.S,b)};g.F=function(a,b){return new Dj(this.L,this.S,b,this.m)};g.B=function(){return this.i};g.H=function(){return $c(Ej,this.i)};
g.Ja=function(a,b){var c=this.S.c?this.S.c(b,lj):this.S.call(null,b,lj);if(u.c(c,lj))return this;var d=this.L.a?this.L.a(c):this.L.call(null,c);return u.c(D(d),1)?new Dj(fd.c(this.L,c),fd.c(this.S,b),this.i,null):new Dj(ed.d(this.L,c,ld.c(d,b)),fd.c(this.S,b),this.i,null)};var Ej=new Dj(Ch(),I,I,null),Fj=""+r("tailrecursion.priority-map");cd.c(cb(Cj),Fj);hi.f(Cj,ed,Fj,function(a){return od(a)?dg(Ej,a):wj.b(null,B(["Priority map literal expects a map for its elements."],0))});
var Gj=function(){function a(a){var d=null;0<arguments.length&&(d=B(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){a=w(a);for(var b=Ej;;)if(a){var e=A(A(a)),b=ed.d(b,y(a),y(A(a)));a=e}else return b}a.j=0;a.g=function(a){a=w(a);return b(a)};a.b=b;return a}();function Hj(a,b){var c=Of;return function e(b){var h=kd(b);return m(h)?new vf(null,function(){return C(h,e(dg(null==b?null:Za(b),m(c.a?c.a(h):c.call(null,h))?a.a?a.a(h):a.call(null,h):null)))},null,null):null}(ad.c(Hg,b))}var Ij=fi.a(0);function Jj(){return hi.c(Ij,Qc)}function Kj(a){return m(Lj.a?Lj.a(a):Lj.call(null,a))?cb(a):a}
function Mj(a){for(var b=Gj.b(B([a,a.la],0));;)if(w(b)){a=kf(kd(b));var c=a.Rb.call(null),d=Lf.c(c,a.prev),e=function(){return function(a,b){return ed.d(a,b,b.la)}}(b,a,c,d),b=null==b?null:Za(b),f=a.ja;d&&(a.prev=c);b=d?yd.d(e,b,f):b}else return null}
function Nj(a){var b=a.Va;a.Va=wg;a.na=I;for(var b=w(cg(Lj,b)),c=null,d=0,e=0;;)if(e<d){var f=c.r(null,e);f.ja=ld.c(f.ja,a);e+=1}else if(b=w(b))c=b,qd(c)?(b=Fb(c),d=Cc(c),c=b,f=D(b),b=d,d=f):(f=y(c),f.ja=ld.c(f.ja,a),b=A(c),c=null,d=0),e=0;else break}
var Oj=function(){function a(a,d){var e=null;1<arguments.length&&(e=B(Array.prototype.slice.call(arguments,1),0));return b.call(this,a,e)}function b(a,b){var e=E.d(b,0,null),f=E.d(b,1,null);Nj(a);a.Va=m(e)?ad.c(yg(f),e):yg(f);for(var f=w(cg(Lj,a.Va)),h=null,k=0,p=0;;)if(p<k){var t=h.r(null,p);t.ja=ad.c(t.ja,a);if(t.la>a.la)for(var t=w(Hj(function(){return function(a){return a.ja}}(f,h,k,p,t),t)),v=null,x=0,G=0;;)if(G<x)v.r(null,G).la=Jj(),G+=1;else if(t=w(t))v=t,qd(v)?(t=Fb(v),G=Cc(v),v=t,x=D(t),
t=G):(y(v).la=Jj(),t=A(v),v=null,x=0),G=0;else break;p+=1}else if(v=w(f)){t=v;if(qd(t))f=Fb(t),p=Cc(t),h=f,k=D(f),f=p;else{x=y(t);x.ja=ad.c(x.ja,a);if(x.la>a.la)for(f=w(Hj(function(){return function(a){return a.ja}}(f,h,k,p,x,t,v),x)),h=null,p=k=0;;)if(p<k)h.r(null,p).la=Jj(),p+=1;else if(f=w(f))h=f,qd(h)?(f=Fb(h),p=Cc(h),h=f,k=D(f),f=p):(y(h).la=Jj(),f=A(h),h=null,k=0),p=0;else break;f=A(t);h=null;k=0}p=0}else break;f=function(b){return function(){for(var d=a.state,e=b(a.Va),f=w(fd.c(a.na,kj)),h=
null,k=0,p=0;;)if(p<k){var t=h.r(null,p),v=E.d(t,0,null),t=E.d(t,1,null);t.f?t.f(v,a,d,e):t.call(null,v,a,d,e);p+=1}else if(f=w(f))qd(f)?(k=Fb(f),f=Cc(f),h=k,k=D(k)):(k=y(f),h=E.d(k,0,null),k=E.d(k,1,null),k.f?k.f(h,a,d,e):k.call(null,h,a,d,e),f=A(f),h=null,k=0),p=0;else break;return a.state=e}}(function(a){return id.c(Kj(kd(a)),Tf.c(Kj,null==a?null:Za(a)))});yb(a,kj,m(e)?function(){throw Error("formula cell can't be updated via swap! or reset!");}:function(a,b){return Mj(b)});a.dc=m(e)?!1:!0;a.Rb=
m(e)?f:function(){return cb(a)};Mj(a);return a}a.j=1;a.g=function(a){var d=y(a);a=z(a);return b(d,a)};a.b=b;return a}();function Pj(a,b,c,d,e,f,h,k,p){this.i=a;this.state=b;this.la=c;this.prev=d;this.Va=e;this.ja=f;this.Rb=h;this.na=k;this.dc=p;this.p=2;this.k=2147647488}g=Pj.prototype;
g.yb=function(a,b,c){a=w(this.na);for(var d=null,e=0,f=0;;)if(f<e){var h=d.r(null,f),k=E.d(h,0,null),h=E.d(h,1,null);h.f?h.f(k,this,b,c):h.call(null,k,this,b,c);f+=1}else if(a=w(a))qd(a)?(d=Fb(a),a=Cc(a),k=d,e=D(d),d=k):(d=y(a),k=E.d(d,0,null),h=E.d(d,1,null),h.f?h.f(k,this,b,c):h.call(null,k,this,b,c),a=A(a),d=null,e=0),f=0;else return null};g.xb=function(a,b,c){return this.na=ed.d(this.na,b,c)};g.Gb=function(){return this.state};g.B=function(){return this.i};
g.s=function(a,b){return Vh.b(b,B(["#\x3cCell: ",bi.b(B([this.state],0)),"\x3e"],0))};function Qj(a){return function(){function b(a){var b=null;0<arguments.length&&(b=B(Array.prototype.slice.call(arguments,0),0));return c.call(this,b)}function c(b){return Oj.b(Rj.a?Rj.a(Qi):Rj.call(null,Qi),B([a,b],0))}b.j=0;b.g=function(a){a=w(a);return c(a)};b.b=c;return b}()}function Rj(a){return Oj(new Pj(I,a,Jj(),a,wg,Hh,null,I,null))}function Lj(a){return u.c(ua(a),Pj)?a:null}
function Sj(a,b){var c=Qj(w).call(null,b),d=function(){return function(a,b){try{return E.c(a,b)}catch(c){if(c instanceof Error)return null;if(q)throw c;return null}}}(c);return Tf.c(function(b){return Qj(Pf.c(a,d)).call(null,c,b)},Ph.c(0,D(cb(c))))};function Tj(a,b){if(0>=b||b>=2+D(a))return ad.c(yg(C("",Tf.c(r,w(a)))),"");if(m(u.c?u.c(1,b):u.call(null,1,b)))return new H(null,1,5,xg,[a],null);if(m(u.c?u.c(2,b):u.call(null,2,b)))return new H(null,2,5,xg,["",a],null);var c=b-2;return ad.c(yg(C("",Ag.d(yg(Tf.c(r,w(a))),0,c))),hf.c(a,c))}
var Uj=function(){function a(a,b,c){if(u.c(""+r(b),"/(?:)/"))b=Tj(a,c);else if(1>c)b=yg((""+r(a)).split(b));else a:{for(var h=c,k=wg;;){if(u.c(h,1)){b=ad.c(k,a);break a}var p=Sh(b,a);if(m(p)){var t=p,p=a.indexOf(t),t=a.substring(p+D(t)),h=h-1,k=ad.c(k,a.substring(0,p));a=t}else{b=ad.c(k,a);break a}}b=void 0}if(u.c(0,c))a:{for(c=b;;)if(u.c("",kd(c)))c=null==c?null:Za(c);else break a;c=void 0}else c=b;return c}function b(a,b){return c.d(a,b,0)}var c=null,c=function(c,e,f){switch(arguments.length){case 2:return b.call(this,
c,e);case 3:return a.call(this,c,e,f)}throw Error("Invalid arity: "+arguments.length);};c.c=b;c.d=a;return c}();var Vj=ta(window.Node),Wj=ta(Vj)?function(a){return a instanceof Node}:function(a){try{return a.nodeType}catch(b){if(b instanceof Error)return null;if(q)throw b;return null}},Xj=ta(Vj)?pd:function(a){try{return pd(a)}catch(b){if(b instanceof Error)return null;if(q)throw b;return null}},Yj=ta(Vj)?ud:function(a){try{return ud(a)}catch(b){if(b instanceof Error)return null;if(q)throw b;return null}},ja=function(a){var b=console;return m(m(b)?console.log:b)?console.log(a):null},Zj=function(){function a(a,
b,c){try{return E.d(a,b,c)}catch(h){if(h instanceof Error)return c;if(q)throw h;return null}}function b(a,b){return c.d(a,b,null)}var c=null,c=function(c,e,f){switch(arguments.length){case 2:return b.call(this,c,e);case 3:return a.call(this,c,e,f)}throw Error("Invalid arity: "+arguments.length);};c.c=b;c.d=a;return c}(),ak=function(){function a(a,b){return window.setTimeout(a,b)}function b(a){return c.c(a,0)}var c=null,c=function(c,e){switch(arguments.length){case 1:return b.call(this,c);case 2:return a.call(this,
c,e)}throw Error("Invalid arity: "+arguments.length);};c.a=b;c.c=a;return c}(),ck=function bk(b){return ag.c(function(b){var d;d=Yj.a?Yj.a(b):Yj.call(null,b);d=m(d)?d:Xj.a?Xj.a(b):Xj.call(null,b);return m(d)?bk(b):new H(null,1,5,xg,[b],null)},b)};function dk(a,b){return ak.a(function d(){return m(document.documentElement.contains(a))?b.q?b.q():b.call(null):ak.c(d,20)})}
function ek(a){var b=E.d(a,0,null),c=gf(a),d=Pf.c(sf,y),e=function(a){return function(b){return Tf.c(yg,Kh(a,eg.c(2,b)))}}(d),d=function(a){return function(b){return ag.c(Of,Xf(a,eg.f(2,2,wg,b)))}}(d,e);return od(b)?new H(null,2,5,xg,[b,c],null):b instanceof F?new H(null,2,5,xg,[dg(I,e(a)),d(a)],null):q?new H(null,2,5,xg,[I,a],null):null}
function fk(a,b){function c(a,b){return uf.a(u.c(a,b.substr(0,3))?b.substr(3):b)}for(var d=Qf.c(c,"do-"),e=Qf.c(c,"on-"),f=fi.a(I),h=fi.a(I),k=w(b),p=null,t=0,v=0;;)if(v<t){var x=p.r(null,v),G=E.d(x,0,null),x=E.d(x,1,null),J=tf(G),G=jQuery(a);if(m(Lj(x)))hi.f(f,ed,d.a?d.a(J):d.call(null,J),x);else if(gd(x))hi.f(h,ed,e.a?e.a(J):e.call(null,J),x);else if(u.c(J,"class"))for(var x=w(Uj.c(x,/ /)),J=null,Z=0,da=0;;)if(da<Z){var ka=J.r(null,da);G.addClass(ka);da+=1}else if(x=w(x))J=x,qd(J)?(x=Fb(J),da=Cc(J),
J=x,Z=D(x),x=da):(x=y(J),G.addClass(x),x=A(J),J=null,Z=0),da=0;else break;else u.c(J,"css")?G.css(qi(x)):q&&(u.c(!1,x)?G.removeAttr(J):u.c(!0,x)?G.attr(J,J):q&&G.attr(J,""+r(x)));v+=1}else if(k=w(k)){if(qd(k))t=Fb(k),k=Cc(k),p=t,t=D(t);else{t=y(k);p=E.d(t,0,null);t=E.d(t,1,null);v=tf(p);p=jQuery(a);if(m(Lj(t)))hi.f(f,ed,d.a?d.a(v):d.call(null,v),t);else if(gd(t))hi.f(h,ed,e.a?e.a(v):e.call(null,v),t);else if(u.c(v,"class"))for(t=w(Uj.c(t,/ /)),v=null,x=G=0;;)if(x<G)J=v.r(null,x),p.addClass(J),x+=
1;else if(t=w(t))v=t,qd(v)?(t=Fb(v),x=Cc(v),v=t,G=D(t),t=x):(t=y(v),p.addClass(t),t=A(v),v=null,G=0),x=0;else break;else u.c(v,"css")?p.css(qi(t)):q&&(u.c(!1,t)?p.removeAttr(v):u.c(!0,t)?p.attr(v,v):q&&p.attr(v,""+r(t)));k=A(k);p=null;t=0}v=0}else break;w(cb(f))&&setTimeout(function(){for(var b=w(cb(f)),c=null,d=0,e=0;;)if(e<d){var h=c.r(null,e),k=E.d(h,0,null),p=E.d(h,1,null);gk.d?gk.d(a,k,cb(p)):gk.call(null,a,k,cb(p));ki(p,mi.q(),function(b,c,d,e,f,h){return function(b,c,d,e){return gk.d?gk.d(a,
h,e):gk.call(null,a,h,e)}}(b,c,d,e,h,k,p));e+=1}else{var t=w(b);if(t){h=t;if(qd(h))b=Fb(h),e=Cc(h),c=b,d=D(b),b=e;else{var v=y(h),k=E.d(v,0,null),p=E.d(v,1,null);gk.d?gk.d(a,k,cb(p)):gk.call(null,a,k,cb(p));ki(p,mi.q(),function(b,c,d,e,f,h){return function(b,c,d,e){return gk.d?gk.d(a,h,e):gk.call(null,a,h,e)}}(b,c,d,e,v,k,p,h,t));b=A(h);c=null;d=0}e=0}else return null}},0);w(cb(h))&&setTimeout(function(){for(var b=w(cb(h)),c=null,d=0,e=0;;)if(e<d){var f=c.r(null,e),k=E.d(f,0,null),f=E.d(f,1,null);
hk.d?hk.d(a,k,f):hk.call(null,a,k,f);e+=1}else if(b=w(b))qd(b)?(c=Fb(b),b=Cc(b),k=c,d=D(c),c=k):(c=y(b),k=E.d(c,0,null),f=E.d(c,1,null),hk.d?hk.d(a,k,f):hk.call(null,a,k,f),b=A(b),c=null,d=0),e=0;else return null},0);return a}var ik=ta(Vj)?function(a,b){return a.appendChild(b)}:function(a,b){try{return a.appendChild(b)}catch(c){if(c instanceof Error)return null;if(q)throw c;return null}};
function jk(a,b){for(var c=w(Sf(function(a){return"string"===typeof a?kk.a?kk.a(a):kk.call(null,a):m(Wj.a?Wj.a(a):Wj.call(null,a))?a:null},ck(b))),d=null,e=0,f=0;;)if(f<e){var h=d.r(null,f);ik.c?ik.c(a,h):ik.call(null,a,h);f+=1}else if(c=w(c))d=c,qd(d)?(c=Fb(d),f=Cc(d),d=c,e=D(c),c=f):(c=y(d),ik.c?ik.c(a,c):ik.call(null,a,c),c=A(d),d=null,e=0),f=0;else break}g=Element.prototype;
g.call=function(){function a(a,d){var e=null;1<arguments.length&&(e=B(Array.prototype.slice.call(arguments,1),0));return b.call(this,0,e)}function b(a,b){var e=ek(b),f=E.d(e,0,null),e=E.d(e,1,null);m(this.zb)?this.zb(f,e):(fk(this,f),jk(this,e));return this}a.j=1;a.g=function(a){y(a);a=z(a);return b(0,a)};a.b=b;return a}();g.apply=function(a,b){return this.call.apply(this,[this].concat(ya(b)))};
g.c=function(){function a(a){var d=null;0<arguments.length&&(d=B(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){var b=ek(a);a=E.d(b,0,null);b=E.d(b,1,null);m(this.zb)?this.zb(a,b):(fk(this,a),jk(this,b));return this}a.j=0;a.g=function(a){a=w(a);return b(a)};a.b=b;return a}();g.J=!0;g.s=function(a,b){return Vh.b(b,B(["#\x3cElement: ",this.tagName,"\x3e"],0))};
function lk(a){return function(){function b(a){var b=null;0<arguments.length&&(b=B(Array.prototype.slice.call(arguments,0),0));return c.call(this,b)}function c(b){var c=document.getElementsByTagName(a)[0],f=document.createElement(a);m(c)&&c.parentNode.replaceChild(f,c);return id.c(f,b)}b.j=0;b.g=function(a){a=w(a);return c(a)};b.b=c;return b}()}
function mk(a){return function(){function b(a){var b=null;0<arguments.length&&(b=B(Array.prototype.slice.call(arguments,0),0));return c.call(this,b)}function c(b){return id.c(document.createElement(a),b)}b.j=0;b.g=function(a){a=w(a);return c(a)};b.b=c;return b}()}
var nk=lk("body"),ok=lk("head"),pk=lk("html"),M=mk("a"),N=mk("b"),O=mk("code"),qk=mk("div"),rk=mk("em"),sk=mk("h1"),tk=mk("h2"),P=mk("h3"),Q=mk("img"),R=mk("li"),uk=mk("link"),vk=mk("ol"),S=mk("p"),wk=mk("pre"),xk=mk("script"),yk=mk("section"),zk=mk("span"),Ak=mk("table"),T=mk("td"),U=mk("th"),V=mk("tr"),W=mk("ul");function kk(a){return document.createTextNode(a)}var Bk=fi.a(!1),Ck=fi.a(wg);function Dk(a){m(cb(Bk))?a.q?a.q():a.call(null):hi.d(Ck,ad,a)}
function Ek(){return setTimeout(function(){jQuery("body").on("submit",function(a){return a.preventDefault()});gi(Bk,!0);for(var a=w(cb(Ck)),b=null,c=0,d=0;;)if(d<c){var e=b.r(null,d);e.q?e.q():e.call(null);d+=1}else if(a=w(a))b=a,qd(b)?(a=Fb(b),c=Cc(b),b=a,e=D(a),a=c,c=e):(e=y(b),e.q?e.q():e.call(null),a=A(b),b=null,c=0),d=0;else return null},0)}
var Fk=function(){function a(a,b){return a.val(""+r(b))}function b(a){return a.val()}var c=null,c=function(c,e){switch(arguments.length){case 1:return b.call(this,c);case 2:return a.call(this,c,e)}throw Error("Invalid arity: "+arguments.length);};c.a=b;c.c=a;return c}(),Gk=function(){function a(a,b){return a.prop("checked",vd(b))}function b(a){return a.is(":checked")}var c=null,c=function(c,e){switch(arguments.length){case 1:return b.call(this,c);case 2:return a.call(this,c,e)}throw Error("Invalid arity: "+
arguments.length);};c.a=b;c.c=a;return c}(),gk=function(){var a=fi.a(I),b=fi.a(I),c=fi.a(I),d=fi.a(I),e=cd.d(new na(null,1,[Ic,vj],null),Vi,ji());return new Gi("do!",function(a,b){return b},vj,e,a,b,c,d)}();Hi(gk,vj,function(a,b,c){return gk.d?gk.d(a,sj,new Qg([b,c])):gk.call(null,a,sj,new Qg([b,c]))});
Hi(gk,qj,function(){function a(a,d,e){var f=null;2<arguments.length&&(f=B(Array.prototype.slice.call(arguments,2),0));return b.call(this,a,0,f)}function b(a,b,e){a=jQuery(a);return id.d(u.c("checkbox",a.attr("type"))?Gk:Fk,a,e)}a.j=2;a.g=function(a){var d=y(a);a=A(a);y(a);a=z(a);return b(d,0,a)};a.b=b;return a}());Hi(gk,sj,function(a,b,c){return a.a?a.a(c):a.call(null,c)});
Hi(gk,Si,function(a,b,c){a=jQuery(a);c=w(c);for(var d=null,e=0,f=0;;)if(f<e){var h=d.r(null,f);b=E.d(h,0,null);h=E.d(h,1,null);a.toggleClass(tf(b),vd(h));f+=1}else if(c=w(c))qd(c)?(d=Fb(c),c=Cc(c),b=d,e=D(d),d=b):(d=y(c),b=E.d(d,0,null),h=E.d(d,1,null),a.toggleClass(tf(b),vd(h)),c=A(c),d=null,e=0),f=0;else return null});
Hi(gk,ej,function(a,b,c){a=jQuery(a);c=w(c);for(var d=null,e=0,f=0;;)if(f<e){var h=d.r(null,f);b=E.d(h,0,null);h=E.d(h,1,null);a.css(tf(b),""+r(h));f+=1}else if(c=w(c))qd(c)?(d=Fb(c),c=Cc(c),b=d,e=D(d),d=b):(d=y(c),b=E.d(d,0,null),h=E.d(d,1,null),a.css(tf(b),""+r(h)),c=A(c),d=null,e=0),f=0;else return null});Hi(gk,dj,function(a,b,c){return jQuery(a).toggle(vd(c))});Hi(gk,tj,function(a,b,c){return m(c)?jQuery(a).hide().slideDown("fast"):jQuery(a).slideUp("fast")});
Hi(gk,Ui,function(a,b,c){return m(c)?jQuery(a).hide().fadeIn("fast"):jQuery(a).fadeOut("fast")});Hi(gk,Zi,function(a,b,c){return setTimeout(function(){return m(c)?jQuery(a).focus(jQuery(a).focusout()):null},0)});Hi(gk,rj,function(a){return jQuery(a).select()});Hi(gk,Oi,function(a,b,c){return m(c)?(gk.d?gk.d(a,Zi,c):gk.call(null,a,Zi,c),gk.d?gk.d(a,rj,c):gk.call(null,a,rj,c)):null});Hi(gk,Ji,function(a,b,c){return jQuery(a).text(""+r(c))});
Hi(gk,Pi,function(a,b,c){return m(c)?(b=jQuery("body"),a=jQuery(a),b.animate(qi(new na(null,1,[nj,a.offset().top],null)))):null});var hk=function(){var a=fi.a(I),b=fi.a(I),c=fi.a(I),d=fi.a(I),e=cd.d(new na(null,1,[Ic,vj],null),Vi,ji());return new Gi("on!",function(a,b){return b},vj,e,a,b,c,d)}();Hi(hk,vj,function(a,b,c){return dk(a,function(){return jQuery(a).on(tf(b),c)})});
function Hk(a,b){var c=Rj(0),d=Qj(function(){return function(a,b){return b.a?b.a(a):b.call(null,a)}}(c)).call(null,a,w),e=Qj(function(){return function(a,b){return a.a?a.a(b):a.call(null,b)}}(c,d)).call(null,D,d),f=function(a,b,c){return function(d){return Qj(function(){return function(a,b){return a<b}}(a,b,c)).call(null,d,c)}}(c,d,e),h=function(a,b,c,d){return function(e){return Qj(function(){return function(a,b,c){return a.c?a.c(c,b):a.call(null,c,b)}}(a,b,c,d)).call(null,Zj,e,b)}}(c,d,e,f),k=zk.q?
zk.q():zk.call(null);dk(k,function(){var a=k.parentNode;a.removeChild(k);return Qj(function(a,b,c,d,e,f,h,k,p,Ja){if(m(h<e)){h=w(k.c?k.c(h,e):k.call(null,h,e));k=null;for(var Pa=0,Wa=0;;)if(m(Wa<Pa)){var $a=k.r(null,Wa),$a=(c.a?c.a(d.a?d.a($a):d.call(null,$a)):c.call(null,d.a?d.a($a):d.call(null,$a))).call(null,bj,f.a?f.a($a):f.call(null,$a));ta(Ja)?b.appendChild($a):b.insertBefore($a,b.firstChild);Wa+=1}else if(h=w(h))qd(h)?(Pa=Fb(h),h=Cc(h),k=Pa,Pa=D(Pa)):(k=y(h),k=(c.a?c.a(d.a?d.a(k):d.call(null,
k)):c.call(null,d.a?d.a(k):d.call(null,k))).call(null,bj,f.a?f.a(k):f.call(null,k)),ta(Ja)?b.appendChild(k):b.insertBefore(k,b.firstChild),h=A(h),k=null,Pa=0),Wa=0;else break;return p.c?p.c(a,e):p.call(null,a,e)}return null}).call(null,Rj(c),a,b,h,e,f,c,Ph,gi,null)});return k};function Ik(a){return u.c(D(a),1)&&!u.c(y(a).nodeType,1)};var Jk=function(){function a(a){var d=null;0<arguments.length&&(d=B(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){var b=ek(a);a=E.d(b,0,null);b=E.d(b,1,null);return yk.c?yk.c(Eh.b(B([a,new na(null,1,[$i,""],null)],0)),xk.d?xk.d(ij,"text/template",b):xk.call(null,ij,"text/template",b)):yk.call(null,Eh.b(B([a,new na(null,1,[$i,""],null)],0)),xk.d?xk.d(ij,"text/template",b):xk.call(null,ij,"text/template",b))}a.j=0;a.g=function(a){a=w(a);return b(a)};a.b=b;return a}(),
Kk=function(){function a(a){var d=null;0<arguments.length&&(d=B(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){a=ek(a);E.d(a,0,null);a=E.d(a,1,null);return m(Ik.a?Ik.a(a):Ik.call(null,a))?fk(sk.a?sk.a(y(a)):sk.call(null,y(a)),new na(null,1,[Si,"slide-title intro"],null)):a}a.j=0;a.g=function(a){a=w(a);return b(a)};a.b=b;return a}(),Lk=function(){function a(a){var d=null;0<arguments.length&&(d=B(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){a=
ek(a);E.d(a,0,null);a=E.d(a,1,null);return m(Ik.a?Ik.a(a):Ik.call(null,a))?fk(tk.a?tk.a(y(a)):tk.call(null,y(a)),new na(null,1,[Si,"slide-title chapter"],null)):a}a.j=0;a.g=function(a){a=w(a);return b(a)};a.b=b;return a}(),Mk=function(){function a(a){var d=null;0<arguments.length&&(d=B(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){a=ek(a);E.d(a,0,null);a=E.d(a,1,null);return m(Ik.a?Ik.a(a):Ik.call(null,a))?fk(P.a?P.a(y(a)):P.call(null,y(a)),new na(null,1,[Si,"slide-title slide"],
null)):a}a.j=0;a.g=function(a){a=w(a);return b(a)};a.b=b;return a}(),X=function(){function a(a){var d=null;0<arguments.length&&(d=B(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){var b=ek(a);a=E.d(b,0,null);var e=ud(a)?id.c(Bh,a):a,f=cd.c(e,fj),h=cd.c(e,Mi),k=cd.c(e,L);a=cd.c(e,hj);b=E.d(b,1,null);e=fd.b(e,hj,B([L,Mi,fj],0));h=m(h)?ed.d(e,Xi,h):e;f=m(f)?ed.d(h,aj,f):h;k=m(k)?Hf.c(new H(null,1,5,xg,[Mk.b(B([k],0))],null),b):b;return m(a)?Jk.b(B([f,k],0)):yk.c?yk.c(f,
k):yk.call(null,f,k)}a.j=0;a.g=function(a){a=w(a);return b(a)};a.b=b;return a}(),Nk=function(){function a(a){var d=null;0<arguments.length&&(d=B(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){a=ek(a);var b=E.d(a,0,null),b=ud(b)?id.c(Bh,b):b,b=cd.c(b,L);a=E.d(a,1,null);return null==b||ta(w(b))?X.b(B([I,a],0)):X.b(B([I,Hf.c(new H(null,1,5,xg,[X.b(B([Lk.b(B([b],0))],0))],null),a)],0))}a.j=0;a.g=function(a){a=w(a);return b(a)};a.b=b;return a}(),Ok=function(){function a(a){var d=
null;0<arguments.length&&(d=B(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){a=ek(a);var b=E.d(a,0,null),b=ud(b)?id.c(Bh,b):b,b=cd.c(b,L);a=E.d(a,1,null);return null==b||ta(w(b))?X.b(B([I,a],0)):X.b(B([I,Hf.c(new H(null,1,5,xg,[Kk.b(B([b],0))],null),a)],0))}a.j=0;a.g=function(a){a=w(a);return b(a)};a.b=b;return a}(),Pk=function(){function a(a){var d=null;0<arguments.length&&(d=B(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){a=ek(a);
var b=E.d(a,0,null),b=ud(b)?id.c(Bh,b):b,e=cd.d(b,mj,"default");a=E.d(a,1,null);Dk(function(){return Reveal.vc(qi(new na(null,2,[Li,!0,Ki,new H(null,4,5,xg,[new na(null,1,[Yi,"reveal.js/plugin/markdown/marked.js"],null),new na(null,1,[Yi,"reveal.js/plugin/markdown/markdown.js"],null),new na(null,3,[Yi,"reveal.js/plugin/highlight/highlight.js",pj,!0,Ri,function(){return hljs.uc()}],null),new na(null,2,[Yi,"reveal.js/plugin/notes/notes.js",pj,!0],null)],null)],null)))});return qk.l?qk.l(Eh.b(B([fd.c(b,
mj),new na(null,1,[Si,"reveal"],null)],0)),uk.f?uk.f(uj,"stylesheet",K,"reveal.js/css/reveal.css"):uk.call(null,uj,"stylesheet",K,"reveal.js/css/reveal.css"),uk.n?uk.n(uj,"stylesheet",K,m(Sh(/\.css$/,e))?e:[r("reveal.js/css/theme/"),r(e),r(".css")].join(""),oj,"theme"):uk.call(null,uj,"stylesheet",K,m(Sh(/\.css$/,e))?e:[r("reveal.js/css/theme/"),r(e),r(".css")].join(""),oj,"theme"),uk.f?uk.f(uj,"stylesheet",K,"reveal.js/plugin/highlight/github.min.css"):uk.call(null,uj,"stylesheet",K,"reveal.js/plugin/highlight/github.min.css"),
qk.d?qk.d(Si,"slides",a):qk.call(null,Si,"slides",a)):qk.call(null,Eh.b(B([fd.c(b,mj),new na(null,1,[Si,"reveal"],null)],0)),uk.f?uk.f(uj,"stylesheet",K,"reveal.js/css/reveal.css"):uk.call(null,uj,"stylesheet",K,"reveal.js/css/reveal.css"),uk.n?uk.n(uj,"stylesheet",K,m(Sh(/\.css$/,e))?e:[r("reveal.js/css/theme/"),r(e),r(".css")].join(""),oj,"theme"):uk.call(null,uj,"stylesheet",K,m(Sh(/\.css$/,e))?e:[r("reveal.js/css/theme/"),r(e),r(".css")].join(""),oj,"theme"),uk.f?uk.f(uj,"stylesheet",K,"reveal.js/plugin/highlight/github.min.css"):
uk.call(null,uj,"stylesheet",K,"reveal.js/plugin/highlight/github.min.css"),qk.d?qk.d(Si,"slides",a):qk.call(null,Si,"slides",a))}a.j=0;a.g=function(a){a=w(a);return b(a)};a.b=b;return a}(),Qk=qk,Qk=function(){function a(a){var d=null;0<arguments.length&&(d=B(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){var b=ek(a);a=E.d(b,0,null);b=E.d(b,1,null);return qk.c?qk.c(ed.d(a,Wi,"text-align: left"),b):qk.call(null,ed.d(a,Wi,"text-align: left"),b)}a.j=0;a.g=function(a){a=
w(a);return b(a)};a.b=b;return a}(),Rk=function(){function a(a){var d=null;0<arguments.length&&(d=B(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){return W.a?W.a(Hk(a,function(a){a=Sj(Of,Qj(function(a){return new H(null,1,5,xg,[a],null)}).call(null,a));a=E.d(a,0,null);return R.a?R.a(cb(a)):R.call(null,cb(a))})):W.call(null,Hk(a,function(a){a=Sj(Of,Qj(function(a){return new H(null,1,5,xg,[a],null)}).call(null,a));a=E.d(a,0,null);return R.a?R.a(cb(a)):R.call(null,cb(a))}))}
a.j=0;a.g=function(a){a=w(a);return b(a)};a.b=b;return a}(),Sk=function(){function a(a){var d=null;0<arguments.length&&(d=B(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){var b=ek(a);a=E.d(b,0,null);b=E.d(b,1,null);return wk.a?wk.a(O.c?O.c(a,b):O.call(null,a,b)):wk.call(null,O.c?O.c(a,b):O.call(null,a,b))}a.j=0;a.g=function(a){a=w(a);return b(a)};a.b=b;return a}(),Tk=function(){function a(a){var d=null;0<arguments.length&&(d=B(Array.prototype.slice.call(arguments,
0),0));return b.call(this,d)}function b(a){var b=ek(a);a=E.d(b,0,null);var e=ud(a)?id.c(Bh,a):a;a=cd.c(e,Ti);b=E.d(b,1,null);e=fd.c(e,Ti);a=m(a)?ed.d(e,Wi,[r("float: left; width: "),r(a),r("%;")].join("")):ed.d(e,Wi,""+r("float: left;"));return qk.c?qk.c(a,b):qk.call(null,a,b)}a.j=0;a.g=function(a){a=w(a);return b(a)};a.b=b;return a}();ea("tailrecursion.hoplon.app_pages._training_DOT_html.hoploninit",function(){pk.c?pk.c(ok.c?ok.c(I,wg):ok.call(null,I,wg),nk.c?nk.c(I,function(){var a=S.a?S.a("Durham, NC"):S.call(null,"Durham, NC"),b=S.a?S.a("March 18, 2014"):S.call(null,"March 18, 2014"),a=Ok.b(B([L,"ClojureBridge Teacher Training",a,b],0)),b=Rk.b(B(["What is the goal of the curriculum?","Who is the curriculum aimed at?","What is in the curriculum?","What is the Global Growth app?","What do I need to do before April 4?"],0)),b=
X.b(B([L,"Agenda",b],0)),c=S.a?S.a("To leave students with enough knowledge that they could go on to learn Clojure on their own."):S.call(null,"To leave students with enough knowledge that they could go on to learn Clojure on their own."),c=X.b(B([L,"Goal",c],0)),d=Rk.b(B(["Smart","Motivated","No development experience"],0)),d=X.b(B([L,"Audience assumptions",d],0)),e=R.a?R.a("Numbers, strings, booleans"):R.call(null,"Numbers, strings, booleans"),f=R.a?R.a("Vectors and maps"):R.call(null,"Vectors and maps"),
h=R.a?R.a("Functions"):R.call(null,"Functions"),k=O.a?O.a("if"):O.call(null,"if"),k=R.c?R.c(k," and boolean logic"):R.call(null,k," and boolean logic"),p=R.a?R.a("Setting up a Clojure project"):R.call(null,"Setting up a Clojure project"),t=R.a?R.a("Web development basics with Ring"):R.call(null,"Web development basics with Ring"),v=R.a?R.a("Deploying to Heroku"):R.call(null,"Deploying to Heroku"),e=W.Y?W.Y(e,f,h,k,p,t,v):W.call(null,e,f,h,k,p,t,v),e=X.b(B([L,"Curriculum contents",e],0)),f=N.a?N.a("YUP"):
N.call(null,"YUP"),f=S.a?S.a(f):S.call(null,f),f=X.b(B([L,"Is this ambitious?",f],0)),h=Qk.b(B(["A web application that uses the World Bank API to show lists of countries by economic/development factor."],0)),k=Qk.b(B(["This application will be 80% baked, with 20% for students to fill in."],0)),h=X.b(B([L,"The Global Growth app",h,k],0)),k=tk.a?tk.a("Global Growth demo"):tk.call(null,"Global Growth demo"),k=X.b(B([k],0)),p=R.a?R.a("Read the curriculum"):R.call(null,"Read the curriculum"),t=R.a?R.a("Set up Light Table and get familiar with it"):
R.call(null,"Set up Light Table and get familiar with it"),v=R.a?R.a("Try downloading and filling in the Global Growth app"):R.call(null,"Try downloading and filling in the Global Growth app"),x=R.a?R.a("Try deploying the app to Heroku"):R.call(null,"Try deploying the app to Heroku"),p=W.f?W.f(p,t,v,x):W.call(null,p,t,v,x),p=X.b(B([L,"How to prepare",p],0));return Pk.b(B([mj,"mozilla-theme.css",a,b,c,d,e,f,h,k,p],0))}()):nk.call(null,I,function(){var a=S.a?S.a("Durham, NC"):S.call(null,"Durham, NC"),
b=S.a?S.a("March 18, 2014"):S.call(null,"March 18, 2014"),a=Ok.b(B([L,"ClojureBridge Teacher Training",a,b],0)),b=Rk.b(B(["What is the goal of the curriculum?","Who is the curriculum aimed at?","What is in the curriculum?","What is the Global Growth app?","What do I need to do before April 4?"],0)),b=X.b(B([L,"Agenda",b],0)),c=S.a?S.a("To leave students with enough knowledge that they could go on to learn Clojure on their own."):S.call(null,"To leave students with enough knowledge that they could go on to learn Clojure on their own."),
c=X.b(B([L,"Goal",c],0)),d=Rk.b(B(["Smart","Motivated","No development experience"],0)),d=X.b(B([L,"Audience assumptions",d],0)),e=R.a?R.a("Numbers, strings, booleans"):R.call(null,"Numbers, strings, booleans"),f=R.a?R.a("Vectors and maps"):R.call(null,"Vectors and maps"),h=R.a?R.a("Functions"):R.call(null,"Functions"),k=O.a?O.a("if"):O.call(null,"if"),k=R.c?R.c(k," and boolean logic"):R.call(null,k," and boolean logic"),p=R.a?R.a("Setting up a Clojure project"):R.call(null,"Setting up a Clojure project"),
t=R.a?R.a("Web development basics with Ring"):R.call(null,"Web development basics with Ring"),v=R.a?R.a("Deploying to Heroku"):R.call(null,"Deploying to Heroku"),e=W.Y?W.Y(e,f,h,k,p,t,v):W.call(null,e,f,h,k,p,t,v),e=X.b(B([L,"Curriculum contents",e],0)),f=N.a?N.a("YUP"):N.call(null,"YUP"),f=S.a?S.a(f):S.call(null,f),f=X.b(B([L,"Is this ambitious?",f],0)),h=Qk.b(B(["A web application that uses the World Bank API to show lists of countries by economic/development factor."],0)),k=Qk.b(B(["This application will be 80% baked, with 20% for students to fill in."],
0)),h=X.b(B([L,"The Global Growth app",h,k],0)),k=tk.a?tk.a("Global Growth demo"):tk.call(null,"Global Growth demo"),k=X.b(B([k],0)),p=R.a?R.a("Read the curriculum"):R.call(null,"Read the curriculum"),t=R.a?R.a("Set up Light Table and get familiar with it"):R.call(null,"Set up Light Table and get familiar with it"),v=R.a?R.a("Try downloading and filling in the Global Growth app"):R.call(null,"Try downloading and filling in the Global Growth app"),x=R.a?R.a("Try deploying the app to Heroku"):R.call(null,
"Try deploying the app to Heroku"),p=W.f?W.f(p,t,v,x):W.call(null,p,t,v,x),p=X.b(B([L,"How to prepare",p],0));return Pk.b(B([mj,"mozilla-theme.css",a,b,c,d,e,f,h,k,p],0))}())):pk.call(null,ok.c?ok.c(I,wg):ok.call(null,I,wg),nk.c?nk.c(I,function(){var a=S.a?S.a("Durham, NC"):S.call(null,"Durham, NC"),b=S.a?S.a("March 18, 2014"):S.call(null,"March 18, 2014"),a=Ok.b(B([L,"ClojureBridge Teacher Training",a,b],0)),b=Rk.b(B(["What is the goal of the curriculum?","Who is the curriculum aimed at?","What is in the curriculum?",
"What is the Global Growth app?","What do I need to do before April 4?"],0)),b=X.b(B([L,"Agenda",b],0)),c=S.a?S.a("To leave students with enough knowledge that they could go on to learn Clojure on their own."):S.call(null,"To leave students with enough knowledge that they could go on to learn Clojure on their own."),c=X.b(B([L,"Goal",c],0)),d=Rk.b(B(["Smart","Motivated","No development experience"],0)),d=X.b(B([L,"Audience assumptions",d],0)),e=R.a?R.a("Numbers, strings, booleans"):R.call(null,"Numbers, strings, booleans"),
f=R.a?R.a("Vectors and maps"):R.call(null,"Vectors and maps"),h=R.a?R.a("Functions"):R.call(null,"Functions"),k=O.a?O.a("if"):O.call(null,"if"),k=R.c?R.c(k," and boolean logic"):R.call(null,k," and boolean logic"),p=R.a?R.a("Setting up a Clojure project"):R.call(null,"Setting up a Clojure project"),t=R.a?R.a("Web development basics with Ring"):R.call(null,"Web development basics with Ring"),v=R.a?R.a("Deploying to Heroku"):R.call(null,"Deploying to Heroku"),e=W.Y?W.Y(e,f,h,k,p,t,v):W.call(null,e,
f,h,k,p,t,v),e=X.b(B([L,"Curriculum contents",e],0)),f=N.a?N.a("YUP"):N.call(null,"YUP"),f=S.a?S.a(f):S.call(null,f),f=X.b(B([L,"Is this ambitious?",f],0)),h=Qk.b(B(["A web application that uses the World Bank API to show lists of countries by economic/development factor."],0)),k=Qk.b(B(["This application will be 80% baked, with 20% for students to fill in."],0)),h=X.b(B([L,"The Global Growth app",h,k],0)),k=tk.a?tk.a("Global Growth demo"):tk.call(null,"Global Growth demo"),k=X.b(B([k],0)),p=R.a?
R.a("Read the curriculum"):R.call(null,"Read the curriculum"),t=R.a?R.a("Set up Light Table and get familiar with it"):R.call(null,"Set up Light Table and get familiar with it"),v=R.a?R.a("Try downloading and filling in the Global Growth app"):R.call(null,"Try downloading and filling in the Global Growth app"),x=R.a?R.a("Try deploying the app to Heroku"):R.call(null,"Try deploying the app to Heroku"),p=W.f?W.f(p,t,v,x):W.call(null,p,t,v,x),p=X.b(B([L,"How to prepare",p],0));return Pk.b(B([mj,"mozilla-theme.css",
a,b,c,d,e,f,h,k,p],0))}()):nk.call(null,I,function(){var a=S.a?S.a("Durham, NC"):S.call(null,"Durham, NC"),b=S.a?S.a("March 18, 2014"):S.call(null,"March 18, 2014"),a=Ok.b(B([L,"ClojureBridge Teacher Training",a,b],0)),b=Rk.b(B(["What is the goal of the curriculum?","Who is the curriculum aimed at?","What is in the curriculum?","What is the Global Growth app?","What do I need to do before April 4?"],0)),b=X.b(B([L,"Agenda",b],0)),c=S.a?S.a("To leave students with enough knowledge that they could go on to learn Clojure on their own."):
S.call(null,"To leave students with enough knowledge that they could go on to learn Clojure on their own."),c=X.b(B([L,"Goal",c],0)),d=Rk.b(B(["Smart","Motivated","No development experience"],0)),d=X.b(B([L,"Audience assumptions",d],0)),e=R.a?R.a("Numbers, strings, booleans"):R.call(null,"Numbers, strings, booleans"),f=R.a?R.a("Vectors and maps"):R.call(null,"Vectors and maps"),h=R.a?R.a("Functions"):R.call(null,"Functions"),k=O.a?O.a("if"):O.call(null,"if"),k=R.c?R.c(k," and boolean logic"):R.call(null,
k," and boolean logic"),p=R.a?R.a("Setting up a Clojure project"):R.call(null,"Setting up a Clojure project"),t=R.a?R.a("Web development basics with Ring"):R.call(null,"Web development basics with Ring"),v=R.a?R.a("Deploying to Heroku"):R.call(null,"Deploying to Heroku"),e=W.Y?W.Y(e,f,h,k,p,t,v):W.call(null,e,f,h,k,p,t,v),e=X.b(B([L,"Curriculum contents",e],0)),f=N.a?N.a("YUP"):N.call(null,"YUP"),f=S.a?S.a(f):S.call(null,f),f=X.b(B([L,"Is this ambitious?",f],0)),h=Qk.b(B(["A web application that uses the World Bank API to show lists of countries by economic/development factor."],
0)),k=Qk.b(B(["This application will be 80% baked, with 20% for students to fill in."],0)),h=X.b(B([L,"The Global Growth app",h,k],0)),k=tk.a?tk.a("Global Growth demo"):tk.call(null,"Global Growth demo"),k=X.b(B([k],0)),p=R.a?R.a("Read the curriculum"):R.call(null,"Read the curriculum"),t=R.a?R.a("Set up Light Table and get familiar with it"):R.call(null,"Set up Light Table and get familiar with it"),v=R.a?R.a("Try downloading and filling in the Global Growth app"):R.call(null,"Try downloading and filling in the Global Growth app"),
x=R.a?R.a("Try deploying the app to Heroku"):R.call(null,"Try deploying the app to Heroku"),p=W.f?W.f(p,t,v,x):W.call(null,p,t,v,x),p=X.b(B([L,"How to prepare",p],0));return Pk.b(B([mj,"mozilla-theme.css",a,b,c,d,e,f,h,k,p],0))}()));return Ek()});function Uk(a){var b=a.href;if(m(b)){var c=[r("___tailrecursion_hoplon_reload___\x3d"),r((new Date).getTime())].join("");a=a.ownerNode;if(0>b.indexOf("?"))b=[r(b),r("?"),r(c)].join("");else if(0>b.indexOf("___tailrecursion_hoplon_reload___\x3d"))b=[r(b),r("\x26"),r(c)].join("");else if(q){var d=Th([r("___tailrecursion_hoplon_reload___\x3d"),r("\\d+")].join(""));if("string"===typeof d)b=b.replace(RegExp(String(d).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08"),"g"),c);else if(m(d.hasOwnProperty("source")))b=
b.replace(RegExp(d.source,"g"),c);else{if(q)throw[r("Invalid match arg: "),r(d)].join("");b=null}}else b=null;return a.href=b}return null}
function Vk(a,b){var c=fi.a(null),d=new na(null,3,[gj,a,ij,"HEAD",jj,"text"],null),e=function(){return function(a){return u.c("true",a.getResponseHeader("X-Dev-Mode"))}}(c,d),f=function(){return function(a,b){return jQuery.ajax(qi(ed.d(a,cj,b)))}}(c,d,e),h=function(){return function(a){return Date.parse(a.getResponseHeader("Last-Modified"))}}(c,d,e,f);(function(){function a(b){var c=null;0<arguments.length&&(c=B(Array.prototype.slice.call(arguments,0),0));return p.call(this,c)}function p(p){E.d(p,
0,null);E.d(p,1,null);p=E.d(p,2,null);m(p)&&gi(c,h(p));return ta(p)||e(p)?setTimeout(function(){return f(d,a)},b):null}a.j=0;a.g=function(a){a=w(a);return p(a)};a.b=p;return a})().call(null);return c}function Wk(a,b,c){return ki(Vk(a,m(b)?b:100),null,function(a,b,f,h){return m(m(f)?Lf.c(f,h):f)?c.q?c.q():c.call(null):null})}
var Xk=function(){function a(a){var d=null;0<arguments.length&&(d=B(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){a=E.d(a,0,null);return Wk("main.js",a,function(){return window.location.reload()})}a.j=0;a.g=function(a){a=w(a);return b(a)};a.b=b;return a}(),Yk=function(){function a(a){var d=null;0<arguments.length&&(d=B(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){var b=E.d(a,0,null);return function f(){var a=document.styleSheets,
c=Ph.c(0,a.length),p=Sf(function(){return function(a){return a.href}}(a,c),function(){return function(a,b){return function Nc(c){return new vf(null,function(a){return function(){for(;;){var b=w(c);if(b){if(qd(b)){var d=Fb(b),f=D(d),h=zf(f);a:{for(var k=0;;)if(k<f){var p=s.c(d,k);h.add(a[p]);k+=1}else{d=!0;break a}d=void 0}return d?Cf(h.Q(),Nc(Cc(b))):Cf(h.Q(),null)}h=y(b);return C(a[h],Nc(z(b)))}return null}}}(a,b),null,null)}}(a,c)(c)}());if(ta(w(p)))return setTimeout(f,m(b)?b:100);for(var p=w(Ph.c(0,
a.length)),t=null,v=0,x=0;;)if(x<v){var G=t.r(null,x),J=a[G];if(m(J)){var Z=J,da=Z.href;if(m(da)){var ka=da;Wk(ka,b,function(b,c,d,f,k,p,t,v,x){return function(){return Uk(a[x])}}(p,t,v,x,ka,da,Z,J,G))}}x+=1}else if(Z=w(p)){J=Z;if(qd(J))p=Fb(J),x=Cc(J),t=p,v=D(p),p=x;else{G=y(J);da=a[G];if(m(da)){var ka=da,va=ka.href;if(m(va)){var Ja=va;Wk(Ja,b,function(b,c,d,f,k,p,t,v,x){return function(){return Uk(a[x])}}(p,t,v,x,Ja,va,ka,da,G,J,Z))}}p=A(J);t=null;v=0}x=0}else return null}.call(null)}a.j=0;a.g=
function(a){a=w(a);return b(a)};a.b=b;return a}(),Zk=function(){function a(a){var d=null;0<arguments.length&&(d=B(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){a=E.d(a,0,null);Xk.b(B([a],0));return Yk.b(B([a],0))}a.j=0;a.g=function(a){a=w(a);return b(a)};a.b=b;return a}();ea("tailrecursion.hoplon.app_pages._index_DOT_html.hoploninit",function(){u.c(window.location.search,"?dev")&&(ci.b(B(["Autoreloading"],0)),Zk());pk.c?pk.c(ok.c?ok.c(I,wg):ok.call(null,I,wg),nk.c?nk.c(I,function(){var a=S.a?S.a("Durham, NC"):S.call(null,"Durham, NC"),b=S.a?S.a("April 5, 2014"):S.call(null,"April 5, 2014"),a=Ok.b(B([L,"ClojureBridge",a,b],0)),b=M.d?M.d(K,"module1.html","Introduction to Clojure"):M.call(null,K,"module1.html","Introduction to Clojure"),b=R.a?R.a(b):R.call(null,b),c=
M.d?M.d(K,"module2.html","Data Structures and Functions"):M.call(null,K,"module2.html","Data Structures and Functions"),c=R.a?R.a(c):R.call(null,c),d=M.d?M.d(K,"module3.html","Flow Control and Logic"):M.call(null,K,"module3.html","Flow Control and Logic"),d=R.a?R.a(d):R.call(null,d),e=M.d?M.d(K,"module4.html","Making a Program"):M.call(null,K,"module4.html","Making a Program"),e=R.a?R.a(e):R.call(null,e),f=M.d?M.d(K,"module4.html","Making a Web Application"):M.call(null,K,"module4.html","Making a Web Application"),
f=R.a?R.a(f):R.call(null,f),b=W.l?W.l(b,c,d,e,f):W.call(null,b,c,d,e,f),b=X.b(B([L,"Table of Contents",b],0));return Pk.b(B([mj,"mozilla-theme.css",a,b],0))}()):nk.call(null,I,function(){var a=S.a?S.a("Durham, NC"):S.call(null,"Durham, NC"),b=S.a?S.a("April 5, 2014"):S.call(null,"April 5, 2014"),a=Ok.b(B([L,"ClojureBridge",a,b],0)),b=M.d?M.d(K,"module1.html","Introduction to Clojure"):M.call(null,K,"module1.html","Introduction to Clojure"),b=R.a?R.a(b):R.call(null,b),c=M.d?M.d(K,"module2.html","Data Structures and Functions"):
M.call(null,K,"module2.html","Data Structures and Functions"),c=R.a?R.a(c):R.call(null,c),d=M.d?M.d(K,"module3.html","Flow Control and Logic"):M.call(null,K,"module3.html","Flow Control and Logic"),d=R.a?R.a(d):R.call(null,d),e=M.d?M.d(K,"module4.html","Making a Program"):M.call(null,K,"module4.html","Making a Program"),e=R.a?R.a(e):R.call(null,e),f=M.d?M.d(K,"module4.html","Making a Web Application"):M.call(null,K,"module4.html","Making a Web Application"),f=R.a?R.a(f):R.call(null,f),b=W.l?W.l(b,
c,d,e,f):W.call(null,b,c,d,e,f),b=X.b(B([L,"Table of Contents",b],0));return Pk.b(B([mj,"mozilla-theme.css",a,b],0))}())):pk.call(null,ok.c?ok.c(I,wg):ok.call(null,I,wg),nk.c?nk.c(I,function(){var a=S.a?S.a("Durham, NC"):S.call(null,"Durham, NC"),b=S.a?S.a("April 5, 2014"):S.call(null,"April 5, 2014"),a=Ok.b(B([L,"ClojureBridge",a,b],0)),b=M.d?M.d(K,"module1.html","Introduction to Clojure"):M.call(null,K,"module1.html","Introduction to Clojure"),b=R.a?R.a(b):R.call(null,b),c=M.d?M.d(K,"module2.html",
"Data Structures and Functions"):M.call(null,K,"module2.html","Data Structures and Functions"),c=R.a?R.a(c):R.call(null,c),d=M.d?M.d(K,"module3.html","Flow Control and Logic"):M.call(null,K,"module3.html","Flow Control and Logic"),d=R.a?R.a(d):R.call(null,d),e=M.d?M.d(K,"module4.html","Making a Program"):M.call(null,K,"module4.html","Making a Program"),e=R.a?R.a(e):R.call(null,e),f=M.d?M.d(K,"module4.html","Making a Web Application"):M.call(null,K,"module4.html","Making a Web Application"),f=R.a?
R.a(f):R.call(null,f),b=W.l?W.l(b,c,d,e,f):W.call(null,b,c,d,e,f),b=X.b(B([L,"Table of Contents",b],0));return Pk.b(B([mj,"mozilla-theme.css",a,b],0))}()):nk.call(null,I,function(){var a=S.a?S.a("Durham, NC"):S.call(null,"Durham, NC"),b=S.a?S.a("April 5, 2014"):S.call(null,"April 5, 2014"),a=Ok.b(B([L,"ClojureBridge",a,b],0)),b=M.d?M.d(K,"module1.html","Introduction to Clojure"):M.call(null,K,"module1.html","Introduction to Clojure"),b=R.a?R.a(b):R.call(null,b),c=M.d?M.d(K,"module2.html","Data Structures and Functions"):
M.call(null,K,"module2.html","Data Structures and Functions"),c=R.a?R.a(c):R.call(null,c),d=M.d?M.d(K,"module3.html","Flow Control and Logic"):M.call(null,K,"module3.html","Flow Control and Logic"),d=R.a?R.a(d):R.call(null,d),e=M.d?M.d(K,"module4.html","Making a Program"):M.call(null,K,"module4.html","Making a Program"),e=R.a?R.a(e):R.call(null,e),f=M.d?M.d(K,"module4.html","Making a Web Application"):M.call(null,K,"module4.html","Making a Web Application"),f=R.a?R.a(f):R.call(null,f),b=W.l?W.l(b,
c,d,e,f):W.call(null,b,c,d,e,f),b=X.b(B([L,"Table of Contents",b],0));return Pk.b(B([mj,"mozilla-theme.css",a,b],0))}()));return Ek()});ea("tailrecursion.hoplon.app_pages._module5_DOT_html.hoploninit",function(){u.c(window.location.search,"?dev")&&(ci.b(B(["Autoreloading"],0)),Zk());pk.c?pk.c(ok.c?ok.c(I,wg):ok.call(null,I,wg),nk.c?nk.c(I,function(){var a=Ok.b(B([L,"Module 5"],0));return Pk.b(B([mj,"mozilla-theme.css",a],0))}()):nk.call(null,I,function(){var a=Ok.b(B([L,"Module 5"],0));return Pk.b(B([mj,"mozilla-theme.css",a],0))}())):pk.call(null,ok.c?ok.c(I,wg):ok.call(null,I,wg),nk.c?nk.c(I,function(){var a=Ok.b(B([L,"Module 5"],
0));return Pk.b(B([mj,"mozilla-theme.css",a],0))}()):nk.call(null,I,function(){var a=Ok.b(B([L,"Module 5"],0));return Pk.b(B([mj,"mozilla-theme.css",a],0))}()));return Ek()});var $k;
ea("tailrecursion.hoplon.app_pages._module4_DOT_html.hoploninit",function(){u.c(window.location.search,"?dev")&&(ci.b(B(["Autoreloading"],0)),Zk());$k=function(){function a(a){var d=null;0<arguments.length&&(d=B(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){var b=ek(a);a=E.d(b,0,null);b=E.d(b,1,null);return Sk.b(B([ed.d(a,Si,"clojure"),b],0))}a.j=0;a.g=function(a){a=w(a);return b(a)};a.b=b;return a}();pk.c?pk.c(ok.c?ok.c(I,wg):ok.call(null,I,wg),nk.c?nk.c(I,function(){var a=
Ok.b(B([L,"Module 4"],0)),b=S.a?S.a("Type the following in your terminal:"):S.call(null,"Type the following in your terminal:"),c=Sk.b(B([Si,"bash","lein new app global-growth"],0)),b=X.b(B([L,"Creating a project",b,c],0)),c=Rk.b(B(["manages Clojure projects","tool you run in your terminal","silly name"],0)),c=X.b(B([L,"Leiningen",c],0)),d=N.a?N.a("project.clj"):N.call(null,"project.clj"),e=N.a?N.a("src/global_growth/core.clj"):N.call(null,"src/global_growth/core.clj"),d=Rk.b(B([".gitignore","doc/intro.md",
d,"resources/","README.md",e,"test/global_growth/core_test.clj"],0)),d=X.b(B([L,"Project structure",d],0)),e=Rk.b(B(["configuration file for Leiningen","lists dependencies","contains information about program author, description and more"],0)),e=X.b(B([L,"project.clj",e],0)),f=S.a?S.a("This is where we will be writing all our code."):S.call(null,"This is where we will be writing all our code."),h=S.c?S.c("Clojure programs can be made up of multiple files, but we are ","going to use just this one today."):
S.call(null,"Clojure programs can be made up of multiple files, but we are ","going to use just this one today."),f=X.b(B([L,"src/global_growth/core.clj",f,h],0)),h=S.a?S.a("Go to the command line and enter:"):S.call(null,"Go to the command line and enter:"),k=Sk.b(B([Si,"bash","cd global_growth\nlein run"],0)),h=X.b(B([L,"Try it out",h,k],0)),b=Nk.b(B([L,"Projects",b,c,d,e,f,h],0)),c=O.a?O.a("src/global_growth/core.clj"):O.call(null,"src/global_growth/core.clj"),c=S.d?S.d("Open ",c,"."):S.call(null,
"Open ",c,"."),d=O.a?O.a("-main"):O.call(null,"-main"),d=S.d?S.d("What is in the ",d," function?"):S.call(null,"What is in the ",d," function?"),c=X.b(B([L,"What happens when I run my program?",c,d],0)),d=Rk.b(B(["Just an ordinary function with an odd name","The function called first when you run your program","Can call other functions"],0)),d=X.b(B([L,"The -main function",d],0)),e=$k.b(B(['(defn quotify\n  [quote author]\n  (str quote "\\n\\n-- " author))\n\n(defn -main\n  [\x26 args]\n  (println\n   (quotify (str "A man who carries a cat by the tail learns "\n                 "something he can learn in no other way.")\n            "Mark Twain")))'],
0)),e=X.b(B([L,"Using other functions from -main",e],0)),f=S.a?S.a("Namespaces let you organize your code into logical sections."):S.call(null,"Namespaces let you organize your code into logical sections."),h=$k.b(B([";; in src/global_growth/core.clj\n(ns global-growth.core)"],0)),f=X.b(B([L,"Namespaces and organization",f,h],0)),h=S.a?S.a("Dependencies are code libraries others have written you can reuse in your project."):S.call(null,"Dependencies are code libraries others have written you can reuse in your project."),
k=O.a?O.a("project.clj"):O.call(null,"project.clj"),p=O.a?O.a(":dependencies"):O.call(null,":dependencies"),k=S.l?S.l("Open ",k," and look for the ",p," key."):S.call(null,"Open ",k," and look for the ",p," key."),p=$k.b(B([':dependencies [[org.clojure/clojure "1.5.1"]\n               [clj-http "0.9.0"]\n               [cheshire "5.3.1"]]'],0)),h=X.b(B([L,"Dependencies",h,k,p],0)),k=$k.b(B([";; in src/global_growth/core.clj\n(ns global-growth.core)\n(require '[clj-http.client :as client])"],0)),k=
X.b(B([L,"Requiring dependencies",k],0)),p=$k.b(B(['(ns global-growth.core)\n(require \'[clj-http.client :as client])\n(require \'[cheshire.core :as json])\n\n(def base-uri "http://api.worldbank.org")\n(def default-query-params {:format "json" :per_page 10000})\n\n(defn parse-json [str]\n  (json/parse-string str true))\n\n(defn get-api\n  "Returns map representing API response."\n  [path params]\n  (let [base-path (str base-uri path)\n        query-params (merge default-query-params params)\n        response (parse-json (:body (client/get base-path {:query-params query-params})))\n        metadata (first response)\n        results (second response)]\n    {:metadata metadata\n     :results results}))'],
0)),p=X.b(B([L,"Exercise: Add the following core to core.clj",p],0)),c=Nk.b(B([L,"Modifying a project",c,d,e,f,h,k,p],0));return Pk.b(B([mj,"mozilla-theme.css",a,b,c],0))}()):nk.call(null,I,function(){var a=Ok.b(B([L,"Module 4"],0)),b=S.a?S.a("Type the following in your terminal:"):S.call(null,"Type the following in your terminal:"),c=Sk.b(B([Si,"bash","lein new app global-growth"],0)),b=X.b(B([L,"Creating a project",b,c],0)),c=Rk.b(B(["manages Clojure projects","tool you run in your terminal","silly name"],
0)),c=X.b(B([L,"Leiningen",c],0)),d=N.a?N.a("project.clj"):N.call(null,"project.clj"),e=N.a?N.a("src/global_growth/core.clj"):N.call(null,"src/global_growth/core.clj"),d=Rk.b(B([".gitignore","doc/intro.md",d,"resources/","README.md",e,"test/global_growth/core_test.clj"],0)),d=X.b(B([L,"Project structure",d],0)),e=Rk.b(B(["configuration file for Leiningen","lists dependencies","contains information about program author, description and more"],0)),e=X.b(B([L,"project.clj",e],0)),f=S.a?S.a("This is where we will be writing all our code."):
S.call(null,"This is where we will be writing all our code."),h=S.c?S.c("Clojure programs can be made up of multiple files, but we are ","going to use just this one today."):S.call(null,"Clojure programs can be made up of multiple files, but we are ","going to use just this one today."),f=X.b(B([L,"src/global_growth/core.clj",f,h],0)),h=S.a?S.a("Go to the command line and enter:"):S.call(null,"Go to the command line and enter:"),k=Sk.b(B([Si,"bash","cd global_growth\nlein run"],0)),h=X.b(B([L,"Try it out",
h,k],0)),b=Nk.b(B([L,"Projects",b,c,d,e,f,h],0)),c=O.a?O.a("src/global_growth/core.clj"):O.call(null,"src/global_growth/core.clj"),c=S.d?S.d("Open ",c,"."):S.call(null,"Open ",c,"."),d=O.a?O.a("-main"):O.call(null,"-main"),d=S.d?S.d("What is in the ",d," function?"):S.call(null,"What is in the ",d," function?"),c=X.b(B([L,"What happens when I run my program?",c,d],0)),d=Rk.b(B(["Just an ordinary function with an odd name","The function called first when you run your program","Can call other functions"],
0)),d=X.b(B([L,"The -main function",d],0)),e=$k.b(B(['(defn quotify\n  [quote author]\n  (str quote "\\n\\n-- " author))\n\n(defn -main\n  [\x26 args]\n  (println\n   (quotify (str "A man who carries a cat by the tail learns "\n                 "something he can learn in no other way.")\n            "Mark Twain")))'],0)),e=X.b(B([L,"Using other functions from -main",e],0)),f=S.a?S.a("Namespaces let you organize your code into logical sections."):S.call(null,"Namespaces let you organize your code into logical sections."),
h=$k.b(B([";; in src/global_growth/core.clj\n(ns global-growth.core)"],0)),f=X.b(B([L,"Namespaces and organization",f,h],0)),h=S.a?S.a("Dependencies are code libraries others have written you can reuse in your project."):S.call(null,"Dependencies are code libraries others have written you can reuse in your project."),k=O.a?O.a("project.clj"):O.call(null,"project.clj"),p=O.a?O.a(":dependencies"):O.call(null,":dependencies"),k=S.l?S.l("Open ",k," and look for the ",p," key."):S.call(null,"Open ",k,
" and look for the ",p," key."),p=$k.b(B([':dependencies [[org.clojure/clojure "1.5.1"]\n               [clj-http "0.9.0"]\n               [cheshire "5.3.1"]]'],0)),h=X.b(B([L,"Dependencies",h,k,p],0)),k=$k.b(B([";; in src/global_growth/core.clj\n(ns global-growth.core)\n(require '[clj-http.client :as client])"],0)),k=X.b(B([L,"Requiring dependencies",k],0)),p=$k.b(B(['(ns global-growth.core)\n(require \'[clj-http.client :as client])\n(require \'[cheshire.core :as json])\n\n(def base-uri "http://api.worldbank.org")\n(def default-query-params {:format "json" :per_page 10000})\n\n(defn parse-json [str]\n  (json/parse-string str true))\n\n(defn get-api\n  "Returns map representing API response."\n  [path params]\n  (let [base-path (str base-uri path)\n        query-params (merge default-query-params params)\n        response (parse-json (:body (client/get base-path {:query-params query-params})))\n        metadata (first response)\n        results (second response)]\n    {:metadata metadata\n     :results results}))'],
0)),p=X.b(B([L,"Exercise: Add the following core to core.clj",p],0)),c=Nk.b(B([L,"Modifying a project",c,d,e,f,h,k,p],0));return Pk.b(B([mj,"mozilla-theme.css",a,b,c],0))}())):pk.call(null,ok.c?ok.c(I,wg):ok.call(null,I,wg),nk.c?nk.c(I,function(){var a=Ok.b(B([L,"Module 4"],0)),b=S.a?S.a("Type the following in your terminal:"):S.call(null,"Type the following in your terminal:"),c=Sk.b(B([Si,"bash","lein new app global-growth"],0)),b=X.b(B([L,"Creating a project",b,c],0)),c=Rk.b(B(["manages Clojure projects",
"tool you run in your terminal","silly name"],0)),c=X.b(B([L,"Leiningen",c],0)),d=N.a?N.a("project.clj"):N.call(null,"project.clj"),e=N.a?N.a("src/global_growth/core.clj"):N.call(null,"src/global_growth/core.clj"),d=Rk.b(B([".gitignore","doc/intro.md",d,"resources/","README.md",e,"test/global_growth/core_test.clj"],0)),d=X.b(B([L,"Project structure",d],0)),e=Rk.b(B(["configuration file for Leiningen","lists dependencies","contains information about program author, description and more"],0)),e=X.b(B([L,
"project.clj",e],0)),f=S.a?S.a("This is where we will be writing all our code."):S.call(null,"This is where we will be writing all our code."),h=S.c?S.c("Clojure programs can be made up of multiple files, but we are ","going to use just this one today."):S.call(null,"Clojure programs can be made up of multiple files, but we are ","going to use just this one today."),f=X.b(B([L,"src/global_growth/core.clj",f,h],0)),h=S.a?S.a("Go to the command line and enter:"):S.call(null,"Go to the command line and enter:"),
k=Sk.b(B([Si,"bash","cd global_growth\nlein run"],0)),h=X.b(B([L,"Try it out",h,k],0)),b=Nk.b(B([L,"Projects",b,c,d,e,f,h],0)),c=O.a?O.a("src/global_growth/core.clj"):O.call(null,"src/global_growth/core.clj"),c=S.d?S.d("Open ",c,"."):S.call(null,"Open ",c,"."),d=O.a?O.a("-main"):O.call(null,"-main"),d=S.d?S.d("What is in the ",d," function?"):S.call(null,"What is in the ",d," function?"),c=X.b(B([L,"What happens when I run my program?",c,d],0)),d=Rk.b(B(["Just an ordinary function with an odd name",
"The function called first when you run your program","Can call other functions"],0)),d=X.b(B([L,"The -main function",d],0)),e=$k.b(B(['(defn quotify\n  [quote author]\n  (str quote "\\n\\n-- " author))\n\n(defn -main\n  [\x26 args]\n  (println\n   (quotify (str "A man who carries a cat by the tail learns "\n                 "something he can learn in no other way.")\n            "Mark Twain")))'],0)),e=X.b(B([L,"Using other functions from -main",e],0)),f=S.a?S.a("Namespaces let you organize your code into logical sections."):
S.call(null,"Namespaces let you organize your code into logical sections."),h=$k.b(B([";; in src/global_growth/core.clj\n(ns global-growth.core)"],0)),f=X.b(B([L,"Namespaces and organization",f,h],0)),h=S.a?S.a("Dependencies are code libraries others have written you can reuse in your project."):S.call(null,"Dependencies are code libraries others have written you can reuse in your project."),k=O.a?O.a("project.clj"):O.call(null,"project.clj"),p=O.a?O.a(":dependencies"):O.call(null,":dependencies"),
k=S.l?S.l("Open ",k," and look for the ",p," key."):S.call(null,"Open ",k," and look for the ",p," key."),p=$k.b(B([':dependencies [[org.clojure/clojure "1.5.1"]\n               [clj-http "0.9.0"]\n               [cheshire "5.3.1"]]'],0)),h=X.b(B([L,"Dependencies",h,k,p],0)),k=$k.b(B([";; in src/global_growth/core.clj\n(ns global-growth.core)\n(require '[clj-http.client :as client])"],0)),k=X.b(B([L,"Requiring dependencies",k],0)),p=$k.b(B(['(ns global-growth.core)\n(require \'[clj-http.client :as client])\n(require \'[cheshire.core :as json])\n\n(def base-uri "http://api.worldbank.org")\n(def default-query-params {:format "json" :per_page 10000})\n\n(defn parse-json [str]\n  (json/parse-string str true))\n\n(defn get-api\n  "Returns map representing API response."\n  [path params]\n  (let [base-path (str base-uri path)\n        query-params (merge default-query-params params)\n        response (parse-json (:body (client/get base-path {:query-params query-params})))\n        metadata (first response)\n        results (second response)]\n    {:metadata metadata\n     :results results}))'],
0)),p=X.b(B([L,"Exercise: Add the following core to core.clj",p],0)),c=Nk.b(B([L,"Modifying a project",c,d,e,f,h,k,p],0));return Pk.b(B([mj,"mozilla-theme.css",a,b,c],0))}()):nk.call(null,I,function(){var a=Ok.b(B([L,"Module 4"],0)),b=S.a?S.a("Type the following in your terminal:"):S.call(null,"Type the following in your terminal:"),c=Sk.b(B([Si,"bash","lein new app global-growth"],0)),b=X.b(B([L,"Creating a project",b,c],0)),c=Rk.b(B(["manages Clojure projects","tool you run in your terminal","silly name"],
0)),c=X.b(B([L,"Leiningen",c],0)),d=N.a?N.a("project.clj"):N.call(null,"project.clj"),e=N.a?N.a("src/global_growth/core.clj"):N.call(null,"src/global_growth/core.clj"),d=Rk.b(B([".gitignore","doc/intro.md",d,"resources/","README.md",e,"test/global_growth/core_test.clj"],0)),d=X.b(B([L,"Project structure",d],0)),e=Rk.b(B(["configuration file for Leiningen","lists dependencies","contains information about program author, description and more"],0)),e=X.b(B([L,"project.clj",e],0)),f=S.a?S.a("This is where we will be writing all our code."):
S.call(null,"This is where we will be writing all our code."),h=S.c?S.c("Clojure programs can be made up of multiple files, but we are ","going to use just this one today."):S.call(null,"Clojure programs can be made up of multiple files, but we are ","going to use just this one today."),f=X.b(B([L,"src/global_growth/core.clj",f,h],0)),h=S.a?S.a("Go to the command line and enter:"):S.call(null,"Go to the command line and enter:"),k=Sk.b(B([Si,"bash","cd global_growth\nlein run"],0)),h=X.b(B([L,"Try it out",
h,k],0)),b=Nk.b(B([L,"Projects",b,c,d,e,f,h],0)),c=O.a?O.a("src/global_growth/core.clj"):O.call(null,"src/global_growth/core.clj"),c=S.d?S.d("Open ",c,"."):S.call(null,"Open ",c,"."),d=O.a?O.a("-main"):O.call(null,"-main"),d=S.d?S.d("What is in the ",d," function?"):S.call(null,"What is in the ",d," function?"),c=X.b(B([L,"What happens when I run my program?",c,d],0)),d=Rk.b(B(["Just an ordinary function with an odd name","The function called first when you run your program","Can call other functions"],
0)),d=X.b(B([L,"The -main function",d],0)),e=$k.b(B(['(defn quotify\n  [quote author]\n  (str quote "\\n\\n-- " author))\n\n(defn -main\n  [\x26 args]\n  (println\n   (quotify (str "A man who carries a cat by the tail learns "\n                 "something he can learn in no other way.")\n            "Mark Twain")))'],0)),e=X.b(B([L,"Using other functions from -main",e],0)),f=S.a?S.a("Namespaces let you organize your code into logical sections."):S.call(null,"Namespaces let you organize your code into logical sections."),
h=$k.b(B([";; in src/global_growth/core.clj\n(ns global-growth.core)"],0)),f=X.b(B([L,"Namespaces and organization",f,h],0)),h=S.a?S.a("Dependencies are code libraries others have written you can reuse in your project."):S.call(null,"Dependencies are code libraries others have written you can reuse in your project."),k=O.a?O.a("project.clj"):O.call(null,"project.clj"),p=O.a?O.a(":dependencies"):O.call(null,":dependencies"),k=S.l?S.l("Open ",k," and look for the ",p," key."):S.call(null,"Open ",k,
" and look for the ",p," key."),p=$k.b(B([':dependencies [[org.clojure/clojure "1.5.1"]\n               [clj-http "0.9.0"]\n               [cheshire "5.3.1"]]'],0)),h=X.b(B([L,"Dependencies",h,k,p],0)),k=$k.b(B([";; in src/global_growth/core.clj\n(ns global-growth.core)\n(require '[clj-http.client :as client])"],0)),k=X.b(B([L,"Requiring dependencies",k],0)),p=$k.b(B(['(ns global-growth.core)\n(require \'[clj-http.client :as client])\n(require \'[cheshire.core :as json])\n\n(def base-uri "http://api.worldbank.org")\n(def default-query-params {:format "json" :per_page 10000})\n\n(defn parse-json [str]\n  (json/parse-string str true))\n\n(defn get-api\n  "Returns map representing API response."\n  [path params]\n  (let [base-path (str base-uri path)\n        query-params (merge default-query-params params)\n        response (parse-json (:body (client/get base-path {:query-params query-params})))\n        metadata (first response)\n        results (second response)]\n    {:metadata metadata\n     :results results}))'],
0)),p=X.b(B([L,"Exercise: Add the following core to core.clj",p],0)),c=Nk.b(B([L,"Modifying a project",c,d,e,f,h,k,p],0));return Pk.b(B([mj,"mozilla-theme.css",a,b,c],0))}()));return Ek()});var al;
ea("tailrecursion.hoplon.app_pages._module3_DOT_html.hoploninit",function(){u.c(window.location.search,"?dev")&&(ci.b(B(["Autoreloading"],0)),Zk());al=function(){function a(a){var d=null;0<arguments.length&&(d=B(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){var b=ek(a);a=E.d(b,0,null);b=E.d(b,1,null);return Sk.b(B([ed.d(a,Si,"clojure"),b],0))}a.j=0;a.g=function(a){a=w(a);return b(a)};a.b=b;return a}();pk.c?pk.c(ok.c?ok.c(I,wg):ok.call(null,I,wg),nk.c?nk.c(I,function(){var a=
Ok.b(B([L,"Module 3"],0)),b=S.a?S.a("If the user's input is valid, then save their data; otherwise, show an error message."):S.call(null,"If the user's input is valid, then save their data; otherwise, show an error message."),c=al.b(B(['(if (valid? data)\n  (save! data)\n  (error "Your data was invalid"))'],0)),b=X.b(B([L,"Example: validating data",b,c],0)),c=O.a?O.a("if"):O.call(null,"if"),c=P.a?P.a(c):P.call(null,c),d=al.b(B(["(if conditional-expression\n  expression-to-evaluate-when-true\n  expression-to-evaluate-when-false)"],
0)),c=X.b(B([L,c,d],0)),d=O.a?O.a("if"):O.call(null,"if"),d=P.c?P.c(d," examples"):P.call(null,d," examples"),e=al.b(B(['(if (\x3e 3 1)\n  "3 is greater than 1"\n  "3 is not greater than 1")\n;;\x3d\x3e "3 is greater than 1"\n\n(if (\x3e 1 3)\n  "1 is greater than 3"\n  "1 is not greater than 3")\n;;\x3d\x3e "1 is not greater than 3"'],0)),d=X.b(B([L,d,e],0)),e=O.a?O.a("false"):O.call(null,"false"),f=O.a?O.a("nil"):O.call(null,"nil"),e=S.l?S.l("Everything except",e," or ",f,"."):S.call(null,"Everything except",
e," or ",f,"."),e=X.b(B([L,"What is truth?",e],0)),f=al.b(B(['(if "anything other than nil or false is considered true"\n  "A string is considered true"\n  "A string is not considered true")\n;;\x3d\x3e "A string is considered true"\n\n(if nil\n  "nil is considered true"\n  "nil is not considered true")\n;;\x3d\x3e "nil is not considered true"\n\n(if (get {:a 1} :b)\n  "expressions which evaluate to nil are considered true"\n  "expressions which evaluate to nil are not considered true")\n;;\x3d\x3e "expressions which evaluate to nil are not considered true"'],
0)),f=X.b(B([L,"Truth examples",f],0)),h=O.a?O.a("format-name"):O.call(null,"format-name"),k=O.a?O.a(":first"):O.call(null,":first"),p=O.a?O.a(":last"):O.call(null,":last"),t=O.a?O.a(":middle"):O.call(null,":middle"),h=S.R?S.R("Write a function ",h," that takes a map ","representing a user, with keys ",k,", ",p,", and possibly ",t,". It should return their name as a string, like so:"):S.call(null,"Write a function ",h," that takes a map ","representing a user, with keys ",k,", ",p,", and possibly ",
t,". It should return their name as a string, like so:"),k=al.b(B(['(format-name {:first "Margaret" :last "Atwood"})\n;;\x3d\x3e "Margaret Atwood"\n\n(format-name {:first "Ursula" :last "Le Guin" :middle "K."})\n;;\x3d\x3e "Ursula K. Le Guin"'],0)),h=X.b(B([L,"Exercise: more name formatting",h,k],0)),k=O.a?O.a("format-name"):O.call(null,"format-name"),p=O.a?O.a("order"):O.call(null,"order"),t=O.a?O.a("order"):O.call(null,"order"),v=O.a?O.a(":last"):O.call(null,":last"),k=S.R?S.R("Change ",k," to take a second argument, ",
p,". If ",t," equals ",v,', then the format should be "Last, First Middle"; otherwise, ','it should be "First Middle Last."'):S.call(null,"Change ",k," to take a second argument, ",p,". If ",t," equals ",v,', then the format should be "Last, First Middle"; otherwise, ','it should be "First Middle Last."'),k=X.b(B([L,"BONUS: Flexible name formatting",k],0)),b=Nk.b(B([L,"Flow control",b,c,d,e,f,h,k],0)),c=O.a?O.a("and"):O.call(null,"and"),d=O.a?O.a("or"):O.call(null,"or"),e=O.a?O.a("not"):O.call(null,
"not"),c=P.l?P.l(c,", ",d,", and ",e):P.call(null,c,", ",d,", and ",e),d=U.a?U.a("x"):U.call(null,"x"),e=U.a?U.a("y"):U.call(null,"y"),f=U.a?U.a("(and x y)"):U.call(null,"(and x y)"),h=U.a?U.a("(or x y)"):U.call(null,"(or x y)"),k=U.a?U.a("(not x)"):U.call(null,"(not x)"),p=U.a?U.a("(not y)"):U.call(null,"(not y)"),d=V.n?V.n(d,e,f,h,k,p):V.call(null,d,e,f,h,k,p),e=T.a?T.a("false"):T.call(null,"false"),f=T.a?T.a("false"):T.call(null,"false"),h=T.a?T.a("false"):T.call(null,"false"),k=T.a?T.a("false"):
T.call(null,"false"),p=T.a?T.a("true"):T.call(null,"true"),t=T.a?T.a("true"):T.call(null,"true"),e=V.n?V.n(e,f,h,k,p,t):V.call(null,e,f,h,k,p,t),f=T.a?T.a("true"):T.call(null,"true"),h=T.a?T.a("false"):T.call(null,"false"),k=T.a?T.a("false"):T.call(null,"false"),p=T.a?T.a("true"):T.call(null,"true"),t=T.a?T.a("false"):T.call(null,"false"),v=T.a?T.a("true"):T.call(null,"true"),f=V.n?V.n(f,h,k,p,t,v):V.call(null,f,h,k,p,t,v),h=T.a?T.a("true"):T.call(null,"true"),k=T.a?T.a("true"):T.call(null,"true"),
p=T.a?T.a("true"):T.call(null,"true"),t=T.a?T.a("true"):T.call(null,"true"),v=T.a?T.a("false"):T.call(null,"false"),x=T.a?T.a("false"):T.call(null,"false"),h=V.n?V.n(h,k,p,t,v,x):V.call(null,h,k,p,t,v,x),k=T.a?T.a("false"):T.call(null,"false"),p=T.a?T.a("true"):T.call(null,"true"),t=T.a?T.a("false"):T.call(null,"false"),v=T.a?T.a("true"):T.call(null,"true"),x=T.a?T.a("true"):T.call(null,"true"),G=T.a?T.a("false"):T.call(null,"false"),k=V.n?V.n(k,p,t,v,x,G):V.call(null,k,p,t,v,x,G),d=Ak.l?Ak.l(d,e,
f,h,k):Ak.call(null,d,e,f,h,k),c=X.b(B([L,c,d],0)),c=Nk.b(B([L,"Boolean logic",c],0)),d=O.a?O.a("for"):O.call(null,"for"),d=P.a?P.a(d):P.call(null,d),e=O.a?O.a("for"):O.call(null,"for"),e=S.c?S.c(e," iterates over the sequences it is given and returns a new sequence."):S.call(null,e," iterates over the sequences it is given and returns a new sequence."),f=al.b(B(["(for [x [1 2 3]]\n  (* x x))\n;;\x3d\x3e (1 4 9)"],0)),d=X.b(B([L,d,e,f],0)),e=O.a?O.a("for"):O.call(null,"for"),e=P.c?P.c("Combining sequences with ",
e):P.call(null,"Combining sequences with ",e),f=O.a?O.a("for"):O.call(null,"for"),f=S.c?S.c(f," can take multiple sequences. In that case, it iterates over their combinations."):S.call(null,f," can take multiple sequences. In that case, it iterates over their combinations."),h=al.b(B(['(for [x [1 2 3]\n      y ["a" "b" "c"]]\n  (str x y))\n;;\x3d\x3e ("1a" "1b" "1c" "2a" "2b" "2c" "3a" "3b" "3c")'],0)),e=X.b(B([L,e,f,h],0)),f=O.a?O.a("for"):O.call(null,"for"),f=P.c?P.c(f," and comparison functions"):
P.call(null,f," and comparison functions"),h=al.b(B(['(for [x [1 2 3]\n      y ["a" "b" "c"]\n      :when (\x3e x 2)]\n  (str x y))\n;;\x3d\x3e ("3a" "3b" "3c")\n\n(for [x [1 2 3]\n      y ["a" "b" "c"]\n      :when (and (\x3e x 2) (not\x3d y "a"))]\n  (str x y))\n;;\x3d\x3e ("3b" "3c")'],0)),f=X.b(B([L,f,h],0)),d=Nk.b(B([L,"Sequence comprehensions",d,e,f],0));return Pk.b(B([mj,"mozilla-theme.css",a,b,c,d],0))}()):nk.call(null,I,function(){var a=Ok.b(B([L,"Module 3"],0)),b=S.a?S.a("If the user's input is valid, then save their data; otherwise, show an error message."):
S.call(null,"If the user's input is valid, then save their data; otherwise, show an error message."),c=al.b(B(['(if (valid? data)\n  (save! data)\n  (error "Your data was invalid"))'],0)),b=X.b(B([L,"Example: validating data",b,c],0)),c=O.a?O.a("if"):O.call(null,"if"),c=P.a?P.a(c):P.call(null,c),d=al.b(B(["(if conditional-expression\n  expression-to-evaluate-when-true\n  expression-to-evaluate-when-false)"],0)),c=X.b(B([L,c,d],0)),d=O.a?O.a("if"):O.call(null,"if"),d=P.c?P.c(d," examples"):P.call(null,
d," examples"),e=al.b(B(['(if (\x3e 3 1)\n  "3 is greater than 1"\n  "3 is not greater than 1")\n;;\x3d\x3e "3 is greater than 1"\n\n(if (\x3e 1 3)\n  "1 is greater than 3"\n  "1 is not greater than 3")\n;;\x3d\x3e "1 is not greater than 3"'],0)),d=X.b(B([L,d,e],0)),e=O.a?O.a("false"):O.call(null,"false"),f=O.a?O.a("nil"):O.call(null,"nil"),e=S.l?S.l("Everything except",e," or ",f,"."):S.call(null,"Everything except",e," or ",f,"."),e=X.b(B([L,"What is truth?",e],0)),f=al.b(B(['(if "anything other than nil or false is considered true"\n  "A string is considered true"\n  "A string is not considered true")\n;;\x3d\x3e "A string is considered true"\n\n(if nil\n  "nil is considered true"\n  "nil is not considered true")\n;;\x3d\x3e "nil is not considered true"\n\n(if (get {:a 1} :b)\n  "expressions which evaluate to nil are considered true"\n  "expressions which evaluate to nil are not considered true")\n;;\x3d\x3e "expressions which evaluate to nil are not considered true"'],
0)),f=X.b(B([L,"Truth examples",f],0)),h=O.a?O.a("format-name"):O.call(null,"format-name"),k=O.a?O.a(":first"):O.call(null,":first"),p=O.a?O.a(":last"):O.call(null,":last"),t=O.a?O.a(":middle"):O.call(null,":middle"),h=S.R?S.R("Write a function ",h," that takes a map ","representing a user, with keys ",k,", ",p,", and possibly ",t,". It should return their name as a string, like so:"):S.call(null,"Write a function ",h," that takes a map ","representing a user, with keys ",k,", ",p,", and possibly ",
t,". It should return their name as a string, like so:"),k=al.b(B(['(format-name {:first "Margaret" :last "Atwood"})\n;;\x3d\x3e "Margaret Atwood"\n\n(format-name {:first "Ursula" :last "Le Guin" :middle "K."})\n;;\x3d\x3e "Ursula K. Le Guin"'],0)),h=X.b(B([L,"Exercise: more name formatting",h,k],0)),k=O.a?O.a("format-name"):O.call(null,"format-name"),p=O.a?O.a("order"):O.call(null,"order"),t=O.a?O.a("order"):O.call(null,"order"),v=O.a?O.a(":last"):O.call(null,":last"),k=S.R?S.R("Change ",k," to take a second argument, ",
p,". If ",t," equals ",v,', then the format should be "Last, First Middle"; otherwise, ','it should be "First Middle Last."'):S.call(null,"Change ",k," to take a second argument, ",p,". If ",t," equals ",v,', then the format should be "Last, First Middle"; otherwise, ','it should be "First Middle Last."'),k=X.b(B([L,"BONUS: Flexible name formatting",k],0)),b=Nk.b(B([L,"Flow control",b,c,d,e,f,h,k],0)),c=O.a?O.a("and"):O.call(null,"and"),d=O.a?O.a("or"):O.call(null,"or"),e=O.a?O.a("not"):O.call(null,
"not"),c=P.l?P.l(c,", ",d,", and ",e):P.call(null,c,", ",d,", and ",e),d=U.a?U.a("x"):U.call(null,"x"),e=U.a?U.a("y"):U.call(null,"y"),f=U.a?U.a("(and x y)"):U.call(null,"(and x y)"),h=U.a?U.a("(or x y)"):U.call(null,"(or x y)"),k=U.a?U.a("(not x)"):U.call(null,"(not x)"),p=U.a?U.a("(not y)"):U.call(null,"(not y)"),d=V.n?V.n(d,e,f,h,k,p):V.call(null,d,e,f,h,k,p),e=T.a?T.a("false"):T.call(null,"false"),f=T.a?T.a("false"):T.call(null,"false"),h=T.a?T.a("false"):T.call(null,"false"),k=T.a?T.a("false"):
T.call(null,"false"),p=T.a?T.a("true"):T.call(null,"true"),t=T.a?T.a("true"):T.call(null,"true"),e=V.n?V.n(e,f,h,k,p,t):V.call(null,e,f,h,k,p,t),f=T.a?T.a("true"):T.call(null,"true"),h=T.a?T.a("false"):T.call(null,"false"),k=T.a?T.a("false"):T.call(null,"false"),p=T.a?T.a("true"):T.call(null,"true"),t=T.a?T.a("false"):T.call(null,"false"),v=T.a?T.a("true"):T.call(null,"true"),f=V.n?V.n(f,h,k,p,t,v):V.call(null,f,h,k,p,t,v),h=T.a?T.a("true"):T.call(null,"true"),k=T.a?T.a("true"):T.call(null,"true"),
p=T.a?T.a("true"):T.call(null,"true"),t=T.a?T.a("true"):T.call(null,"true"),v=T.a?T.a("false"):T.call(null,"false"),x=T.a?T.a("false"):T.call(null,"false"),h=V.n?V.n(h,k,p,t,v,x):V.call(null,h,k,p,t,v,x),k=T.a?T.a("false"):T.call(null,"false"),p=T.a?T.a("true"):T.call(null,"true"),t=T.a?T.a("false"):T.call(null,"false"),v=T.a?T.a("true"):T.call(null,"true"),x=T.a?T.a("true"):T.call(null,"true"),G=T.a?T.a("false"):T.call(null,"false"),k=V.n?V.n(k,p,t,v,x,G):V.call(null,k,p,t,v,x,G),d=Ak.l?Ak.l(d,e,
f,h,k):Ak.call(null,d,e,f,h,k),c=X.b(B([L,c,d],0)),c=Nk.b(B([L,"Boolean logic",c],0)),d=O.a?O.a("for"):O.call(null,"for"),d=P.a?P.a(d):P.call(null,d),e=O.a?O.a("for"):O.call(null,"for"),e=S.c?S.c(e," iterates over the sequences it is given and returns a new sequence."):S.call(null,e," iterates over the sequences it is given and returns a new sequence."),f=al.b(B(["(for [x [1 2 3]]\n  (* x x))\n;;\x3d\x3e (1 4 9)"],0)),d=X.b(B([L,d,e,f],0)),e=O.a?O.a("for"):O.call(null,"for"),e=P.c?P.c("Combining sequences with ",
e):P.call(null,"Combining sequences with ",e),f=O.a?O.a("for"):O.call(null,"for"),f=S.c?S.c(f," can take multiple sequences. In that case, it iterates over their combinations."):S.call(null,f," can take multiple sequences. In that case, it iterates over their combinations."),h=al.b(B(['(for [x [1 2 3]\n      y ["a" "b" "c"]]\n  (str x y))\n;;\x3d\x3e ("1a" "1b" "1c" "2a" "2b" "2c" "3a" "3b" "3c")'],0)),e=X.b(B([L,e,f,h],0)),f=O.a?O.a("for"):O.call(null,"for"),f=P.c?P.c(f," and comparison functions"):
P.call(null,f," and comparison functions"),h=al.b(B(['(for [x [1 2 3]\n      y ["a" "b" "c"]\n      :when (\x3e x 2)]\n  (str x y))\n;;\x3d\x3e ("3a" "3b" "3c")\n\n(for [x [1 2 3]\n      y ["a" "b" "c"]\n      :when (and (\x3e x 2) (not\x3d y "a"))]\n  (str x y))\n;;\x3d\x3e ("3b" "3c")'],0)),f=X.b(B([L,f,h],0)),d=Nk.b(B([L,"Sequence comprehensions",d,e,f],0));return Pk.b(B([mj,"mozilla-theme.css",a,b,c,d],0))}())):pk.call(null,ok.c?ok.c(I,wg):ok.call(null,I,wg),nk.c?nk.c(I,function(){var a=Ok.b(B([L,
"Module 3"],0)),b=S.a?S.a("If the user's input is valid, then save their data; otherwise, show an error message."):S.call(null,"If the user's input is valid, then save their data; otherwise, show an error message."),c=al.b(B(['(if (valid? data)\n  (save! data)\n  (error "Your data was invalid"))'],0)),b=X.b(B([L,"Example: validating data",b,c],0)),c=O.a?O.a("if"):O.call(null,"if"),c=P.a?P.a(c):P.call(null,c),d=al.b(B(["(if conditional-expression\n  expression-to-evaluate-when-true\n  expression-to-evaluate-when-false)"],
0)),c=X.b(B([L,c,d],0)),d=O.a?O.a("if"):O.call(null,"if"),d=P.c?P.c(d," examples"):P.call(null,d," examples"),e=al.b(B(['(if (\x3e 3 1)\n  "3 is greater than 1"\n  "3 is not greater than 1")\n;;\x3d\x3e "3 is greater than 1"\n\n(if (\x3e 1 3)\n  "1 is greater than 3"\n  "1 is not greater than 3")\n;;\x3d\x3e "1 is not greater than 3"'],0)),d=X.b(B([L,d,e],0)),e=O.a?O.a("false"):O.call(null,"false"),f=O.a?O.a("nil"):O.call(null,"nil"),e=S.l?S.l("Everything except",e," or ",f,"."):S.call(null,"Everything except",
e," or ",f,"."),e=X.b(B([L,"What is truth?",e],0)),f=al.b(B(['(if "anything other than nil or false is considered true"\n  "A string is considered true"\n  "A string is not considered true")\n;;\x3d\x3e "A string is considered true"\n\n(if nil\n  "nil is considered true"\n  "nil is not considered true")\n;;\x3d\x3e "nil is not considered true"\n\n(if (get {:a 1} :b)\n  "expressions which evaluate to nil are considered true"\n  "expressions which evaluate to nil are not considered true")\n;;\x3d\x3e "expressions which evaluate to nil are not considered true"'],
0)),f=X.b(B([L,"Truth examples",f],0)),h=O.a?O.a("format-name"):O.call(null,"format-name"),k=O.a?O.a(":first"):O.call(null,":first"),p=O.a?O.a(":last"):O.call(null,":last"),t=O.a?O.a(":middle"):O.call(null,":middle"),h=S.R?S.R("Write a function ",h," that takes a map ","representing a user, with keys ",k,", ",p,", and possibly ",t,". It should return their name as a string, like so:"):S.call(null,"Write a function ",h," that takes a map ","representing a user, with keys ",k,", ",p,", and possibly ",
t,". It should return their name as a string, like so:"),k=al.b(B(['(format-name {:first "Margaret" :last "Atwood"})\n;;\x3d\x3e "Margaret Atwood"\n\n(format-name {:first "Ursula" :last "Le Guin" :middle "K."})\n;;\x3d\x3e "Ursula K. Le Guin"'],0)),h=X.b(B([L,"Exercise: more name formatting",h,k],0)),k=O.a?O.a("format-name"):O.call(null,"format-name"),p=O.a?O.a("order"):O.call(null,"order"),t=O.a?O.a("order"):O.call(null,"order"),v=O.a?O.a(":last"):O.call(null,":last"),k=S.R?S.R("Change ",k," to take a second argument, ",
p,". If ",t," equals ",v,', then the format should be "Last, First Middle"; otherwise, ','it should be "First Middle Last."'):S.call(null,"Change ",k," to take a second argument, ",p,". If ",t," equals ",v,', then the format should be "Last, First Middle"; otherwise, ','it should be "First Middle Last."'),k=X.b(B([L,"BONUS: Flexible name formatting",k],0)),b=Nk.b(B([L,"Flow control",b,c,d,e,f,h,k],0)),c=O.a?O.a("and"):O.call(null,"and"),d=O.a?O.a("or"):O.call(null,"or"),e=O.a?O.a("not"):O.call(null,
"not"),c=P.l?P.l(c,", ",d,", and ",e):P.call(null,c,", ",d,", and ",e),d=U.a?U.a("x"):U.call(null,"x"),e=U.a?U.a("y"):U.call(null,"y"),f=U.a?U.a("(and x y)"):U.call(null,"(and x y)"),h=U.a?U.a("(or x y)"):U.call(null,"(or x y)"),k=U.a?U.a("(not x)"):U.call(null,"(not x)"),p=U.a?U.a("(not y)"):U.call(null,"(not y)"),d=V.n?V.n(d,e,f,h,k,p):V.call(null,d,e,f,h,k,p),e=T.a?T.a("false"):T.call(null,"false"),f=T.a?T.a("false"):T.call(null,"false"),h=T.a?T.a("false"):T.call(null,"false"),k=T.a?T.a("false"):
T.call(null,"false"),p=T.a?T.a("true"):T.call(null,"true"),t=T.a?T.a("true"):T.call(null,"true"),e=V.n?V.n(e,f,h,k,p,t):V.call(null,e,f,h,k,p,t),f=T.a?T.a("true"):T.call(null,"true"),h=T.a?T.a("false"):T.call(null,"false"),k=T.a?T.a("false"):T.call(null,"false"),p=T.a?T.a("true"):T.call(null,"true"),t=T.a?T.a("false"):T.call(null,"false"),v=T.a?T.a("true"):T.call(null,"true"),f=V.n?V.n(f,h,k,p,t,v):V.call(null,f,h,k,p,t,v),h=T.a?T.a("true"):T.call(null,"true"),k=T.a?T.a("true"):T.call(null,"true"),
p=T.a?T.a("true"):T.call(null,"true"),t=T.a?T.a("true"):T.call(null,"true"),v=T.a?T.a("false"):T.call(null,"false"),x=T.a?T.a("false"):T.call(null,"false"),h=V.n?V.n(h,k,p,t,v,x):V.call(null,h,k,p,t,v,x),k=T.a?T.a("false"):T.call(null,"false"),p=T.a?T.a("true"):T.call(null,"true"),t=T.a?T.a("false"):T.call(null,"false"),v=T.a?T.a("true"):T.call(null,"true"),x=T.a?T.a("true"):T.call(null,"true"),G=T.a?T.a("false"):T.call(null,"false"),k=V.n?V.n(k,p,t,v,x,G):V.call(null,k,p,t,v,x,G),d=Ak.l?Ak.l(d,e,
f,h,k):Ak.call(null,d,e,f,h,k),c=X.b(B([L,c,d],0)),c=Nk.b(B([L,"Boolean logic",c],0)),d=O.a?O.a("for"):O.call(null,"for"),d=P.a?P.a(d):P.call(null,d),e=O.a?O.a("for"):O.call(null,"for"),e=S.c?S.c(e," iterates over the sequences it is given and returns a new sequence."):S.call(null,e," iterates over the sequences it is given and returns a new sequence."),f=al.b(B(["(for [x [1 2 3]]\n  (* x x))\n;;\x3d\x3e (1 4 9)"],0)),d=X.b(B([L,d,e,f],0)),e=O.a?O.a("for"):O.call(null,"for"),e=P.c?P.c("Combining sequences with ",
e):P.call(null,"Combining sequences with ",e),f=O.a?O.a("for"):O.call(null,"for"),f=S.c?S.c(f," can take multiple sequences. In that case, it iterates over their combinations."):S.call(null,f," can take multiple sequences. In that case, it iterates over their combinations."),h=al.b(B(['(for [x [1 2 3]\n      y ["a" "b" "c"]]\n  (str x y))\n;;\x3d\x3e ("1a" "1b" "1c" "2a" "2b" "2c" "3a" "3b" "3c")'],0)),e=X.b(B([L,e,f,h],0)),f=O.a?O.a("for"):O.call(null,"for"),f=P.c?P.c(f," and comparison functions"):
P.call(null,f," and comparison functions"),h=al.b(B(['(for [x [1 2 3]\n      y ["a" "b" "c"]\n      :when (\x3e x 2)]\n  (str x y))\n;;\x3d\x3e ("3a" "3b" "3c")\n\n(for [x [1 2 3]\n      y ["a" "b" "c"]\n      :when (and (\x3e x 2) (not\x3d y "a"))]\n  (str x y))\n;;\x3d\x3e ("3b" "3c")'],0)),f=X.b(B([L,f,h],0)),d=Nk.b(B([L,"Sequence comprehensions",d,e,f],0));return Pk.b(B([mj,"mozilla-theme.css",a,b,c,d],0))}()):nk.call(null,I,function(){var a=Ok.b(B([L,"Module 3"],0)),b=S.a?S.a("If the user's input is valid, then save their data; otherwise, show an error message."):
S.call(null,"If the user's input is valid, then save their data; otherwise, show an error message."),c=al.b(B(['(if (valid? data)\n  (save! data)\n  (error "Your data was invalid"))'],0)),b=X.b(B([L,"Example: validating data",b,c],0)),c=O.a?O.a("if"):O.call(null,"if"),c=P.a?P.a(c):P.call(null,c),d=al.b(B(["(if conditional-expression\n  expression-to-evaluate-when-true\n  expression-to-evaluate-when-false)"],0)),c=X.b(B([L,c,d],0)),d=O.a?O.a("if"):O.call(null,"if"),d=P.c?P.c(d," examples"):P.call(null,
d," examples"),e=al.b(B(['(if (\x3e 3 1)\n  "3 is greater than 1"\n  "3 is not greater than 1")\n;;\x3d\x3e "3 is greater than 1"\n\n(if (\x3e 1 3)\n  "1 is greater than 3"\n  "1 is not greater than 3")\n;;\x3d\x3e "1 is not greater than 3"'],0)),d=X.b(B([L,d,e],0)),e=O.a?O.a("false"):O.call(null,"false"),f=O.a?O.a("nil"):O.call(null,"nil"),e=S.l?S.l("Everything except",e," or ",f,"."):S.call(null,"Everything except",e," or ",f,"."),e=X.b(B([L,"What is truth?",e],0)),f=al.b(B(['(if "anything other than nil or false is considered true"\n  "A string is considered true"\n  "A string is not considered true")\n;;\x3d\x3e "A string is considered true"\n\n(if nil\n  "nil is considered true"\n  "nil is not considered true")\n;;\x3d\x3e "nil is not considered true"\n\n(if (get {:a 1} :b)\n  "expressions which evaluate to nil are considered true"\n  "expressions which evaluate to nil are not considered true")\n;;\x3d\x3e "expressions which evaluate to nil are not considered true"'],
0)),f=X.b(B([L,"Truth examples",f],0)),h=O.a?O.a("format-name"):O.call(null,"format-name"),k=O.a?O.a(":first"):O.call(null,":first"),p=O.a?O.a(":last"):O.call(null,":last"),t=O.a?O.a(":middle"):O.call(null,":middle"),h=S.R?S.R("Write a function ",h," that takes a map ","representing a user, with keys ",k,", ",p,", and possibly ",t,". It should return their name as a string, like so:"):S.call(null,"Write a function ",h," that takes a map ","representing a user, with keys ",k,", ",p,", and possibly ",
t,". It should return their name as a string, like so:"),k=al.b(B(['(format-name {:first "Margaret" :last "Atwood"})\n;;\x3d\x3e "Margaret Atwood"\n\n(format-name {:first "Ursula" :last "Le Guin" :middle "K."})\n;;\x3d\x3e "Ursula K. Le Guin"'],0)),h=X.b(B([L,"Exercise: more name formatting",h,k],0)),k=O.a?O.a("format-name"):O.call(null,"format-name"),p=O.a?O.a("order"):O.call(null,"order"),t=O.a?O.a("order"):O.call(null,"order"),v=O.a?O.a(":last"):O.call(null,":last"),k=S.R?S.R("Change ",k," to take a second argument, ",
p,". If ",t," equals ",v,', then the format should be "Last, First Middle"; otherwise, ','it should be "First Middle Last."'):S.call(null,"Change ",k," to take a second argument, ",p,". If ",t," equals ",v,', then the format should be "Last, First Middle"; otherwise, ','it should be "First Middle Last."'),k=X.b(B([L,"BONUS: Flexible name formatting",k],0)),b=Nk.b(B([L,"Flow control",b,c,d,e,f,h,k],0)),c=O.a?O.a("and"):O.call(null,"and"),d=O.a?O.a("or"):O.call(null,"or"),e=O.a?O.a("not"):O.call(null,
"not"),c=P.l?P.l(c,", ",d,", and ",e):P.call(null,c,", ",d,", and ",e),d=U.a?U.a("x"):U.call(null,"x"),e=U.a?U.a("y"):U.call(null,"y"),f=U.a?U.a("(and x y)"):U.call(null,"(and x y)"),h=U.a?U.a("(or x y)"):U.call(null,"(or x y)"),k=U.a?U.a("(not x)"):U.call(null,"(not x)"),p=U.a?U.a("(not y)"):U.call(null,"(not y)"),d=V.n?V.n(d,e,f,h,k,p):V.call(null,d,e,f,h,k,p),e=T.a?T.a("false"):T.call(null,"false"),f=T.a?T.a("false"):T.call(null,"false"),h=T.a?T.a("false"):T.call(null,"false"),k=T.a?T.a("false"):
T.call(null,"false"),p=T.a?T.a("true"):T.call(null,"true"),t=T.a?T.a("true"):T.call(null,"true"),e=V.n?V.n(e,f,h,k,p,t):V.call(null,e,f,h,k,p,t),f=T.a?T.a("true"):T.call(null,"true"),h=T.a?T.a("false"):T.call(null,"false"),k=T.a?T.a("false"):T.call(null,"false"),p=T.a?T.a("true"):T.call(null,"true"),t=T.a?T.a("false"):T.call(null,"false"),v=T.a?T.a("true"):T.call(null,"true"),f=V.n?V.n(f,h,k,p,t,v):V.call(null,f,h,k,p,t,v),h=T.a?T.a("true"):T.call(null,"true"),k=T.a?T.a("true"):T.call(null,"true"),
p=T.a?T.a("true"):T.call(null,"true"),t=T.a?T.a("true"):T.call(null,"true"),v=T.a?T.a("false"):T.call(null,"false"),x=T.a?T.a("false"):T.call(null,"false"),h=V.n?V.n(h,k,p,t,v,x):V.call(null,h,k,p,t,v,x),k=T.a?T.a("false"):T.call(null,"false"),p=T.a?T.a("true"):T.call(null,"true"),t=T.a?T.a("false"):T.call(null,"false"),v=T.a?T.a("true"):T.call(null,"true"),x=T.a?T.a("true"):T.call(null,"true"),G=T.a?T.a("false"):T.call(null,"false"),k=V.n?V.n(k,p,t,v,x,G):V.call(null,k,p,t,v,x,G),d=Ak.l?Ak.l(d,e,
f,h,k):Ak.call(null,d,e,f,h,k),c=X.b(B([L,c,d],0)),c=Nk.b(B([L,"Boolean logic",c],0)),d=O.a?O.a("for"):O.call(null,"for"),d=P.a?P.a(d):P.call(null,d),e=O.a?O.a("for"):O.call(null,"for"),e=S.c?S.c(e," iterates over the sequences it is given and returns a new sequence."):S.call(null,e," iterates over the sequences it is given and returns a new sequence."),f=al.b(B(["(for [x [1 2 3]]\n  (* x x))\n;;\x3d\x3e (1 4 9)"],0)),d=X.b(B([L,d,e,f],0)),e=O.a?O.a("for"):O.call(null,"for"),e=P.c?P.c("Combining sequences with ",
e):P.call(null,"Combining sequences with ",e),f=O.a?O.a("for"):O.call(null,"for"),f=S.c?S.c(f," can take multiple sequences. In that case, it iterates over their combinations."):S.call(null,f," can take multiple sequences. In that case, it iterates over their combinations."),h=al.b(B(['(for [x [1 2 3]\n      y ["a" "b" "c"]]\n  (str x y))\n;;\x3d\x3e ("1a" "1b" "1c" "2a" "2b" "2c" "3a" "3b" "3c")'],0)),e=X.b(B([L,e,f,h],0)),f=O.a?O.a("for"):O.call(null,"for"),f=P.c?P.c(f," and comparison functions"):
P.call(null,f," and comparison functions"),h=al.b(B(['(for [x [1 2 3]\n      y ["a" "b" "c"]\n      :when (\x3e x 2)]\n  (str x y))\n;;\x3d\x3e ("3a" "3b" "3c")\n\n(for [x [1 2 3]\n      y ["a" "b" "c"]\n      :when (and (\x3e x 2) (not\x3d y "a"))]\n  (str x y))\n;;\x3d\x3e ("3b" "3c")'],0)),f=X.b(B([L,f,h],0)),d=Nk.b(B([L,"Sequence comprehensions",d,e,f],0));return Pk.b(B([mj,"mozilla-theme.css",a,b,c,d],0))}()));return Ek()});var bl,Y;
ea("tailrecursion.hoplon.app_pages._module2_DOT_html.hoploninit",function(){u.c(window.location.search,"?dev")&&(ci.b(B(["Autoreloading"],0)),Zk());bl=function(){function a(a){var d=null;0<arguments.length&&(d=B(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){a=Tf.c(O,a);return Wf(1,Zf.c(Yf.a(", "),a))}a.j=0;a.g=function(a){a=w(a);return b(a)};a.b=b;return a}();Y=function(){function a(a){var d=null;0<arguments.length&&(d=B(Array.prototype.slice.call(arguments,0),0));
return b.call(this,d)}function b(a){var b=ek(a);a=E.d(b,0,null);b=E.d(b,1,null);return Sk.b(B([ed.d(a,Si,"clojure"),b],0))}a.j=0;a.g=function(a){a=w(a);return b(a)};a.b=b;return a}();pk.c?pk.c(ok.c?ok.c(I,wg):ok.call(null,I,wg),nk.c?nk.c(I,function(){var a=Ok.b(B([L,"Module 2"],0)),b=R.a?R.a("Vectors"):R.call(null,"Vectors"),c=R.a?R.a("Maps"):R.call(null,"Maps"),d=R.a?R.a("Lists"):R.call(null,"Lists"),e=R.a?R.a("Sets"):R.call(null,"Sets"),f=R.a?R.a("Sequences"):R.call(null,"Sequences"),h=W.l?W.l(b,
c,d,e,f):W.call(null,b,c,d,e,f),k=X.b(B([L,"Data structures",h],0)),p=Q.f?Q.f(Yi,"img/vector.png",Ni,"vector"):Q.call(null,Yi,"img/vector.png",Ni,"vector"),t=X.b(B([L,"Vectors",p],0)),v=Y.b(B(['[1 2 3 4 5]\n["a" 1 2 "b"]\n[]'],0)),x=X.b(B([L,"Vectors",v],0)),G=Y.b(B(["(vector? [:a :b :c])\n;;\x3d\x3e true\n\n(vector :a :b :c)\n;;\x3d\x3e [:a :b :c]\n\n(conj [:a :b] :c)\n;;\x3d\x3e [:a :b :c]"],0)),J=X.b(B([L,"Vector functions",G],0)),Z=Y.b(B(["(count [:a :b :c])\n;;\x3d\x3e 3\n\n(nth [:a :b :c] 1)\n;;\x3d\x3e :b\n\n(first [:a :b :c])\n;;\x3d\x3e :a"],
0)),da=X.b(B([L,"Vector functions",Z],0)),ka=O.a?O.a("nth"):O.call(null,"nth"),va=S.d?S.d("Make a vector of all the places you've ever lived. Then use the ",ka," function to get the current place you live from the vector."):S.call(null,"Make a vector of all the places you've ever lived. Then use the ",ka," function to get the current place you live from the vector."),Ja=X.b(B([L,"Exercise: Make a vector",va],0)),Pa=Q.f?Q.f(Yi,"img/map.png",Ni,"map"):Q.call(null,Yi,"img/map.png",Ni,"map"),Wa=X.b(B([L,
"Maps",Pa],0)),$a=Y.b(B(['{:first "Sally", :last "Brown", :occupation "programmer"}\n{:a 1, :b "two"}\n{}'],0)),Nc=X.b(B([L,"Maps",$a],0)),Cd=Y.b(B(['(map? {:first "Sally" :last "Brown"})\n;;\x3d\x3e true\n\n(get {:first "Sally" :last "Brown"} :first)\n;;\x3d\x3e "Sally"\n\n(get {:first "Sally"} :last :MISS)\n;;\x3d\x3e :MISS'],0)),Dd=X.b(B([L,"Map functions",Cd],0)),Ed=Y.b(B(['(assoc {:first "Sally"} :last "Brown")\n;;\x3d\x3e {:first "Sally", :last "Brown"}\n\n(dissoc {:first "Sally" :last "Brown"} :last)\n;;\x3d\x3e {:first "Sally"}\n\n(merge {:first "Sally"} {:last "Brown"})\n;;\x3d\x3e {:first "Sally", :last "Brown"}\n\n(count {:first "Sally" :last "Brown"})\n;;\x3d\x3e 2'],
0)),Fd=X.b(B([L,"More map functions",Ed],0)),Gd=Y.b(B(['(keys {:first "Sally" :last "Brown"})\n;;\x3d\x3e (:first :last)\n\n(vals {:first "Sally" :last "Brown"})\n;;\x3d\x3e ("Sally" "Brown")\n\n(into {} [[1 2] [3 4]])\n;;\x3d\x3e {1 2, 3 4}'],0)),Hd=X.b(B([L,"Even more map functions",Gd],0)),Id=Y.b(B(['(:first {:first "Sally" :last "Brown"})\n;;\x3d\x3e "Sally"\n\n(:last {:first "Sally"})\n;;\x3d\x3e nil\n\n(:last {:first "Sally"} :MISS)\n;;\x3d\x3e :MISS'],0)),Jd=X.b(B([L,"Maps and keywords",Id],
0)),Gb=O.a?O.a("assoc"):O.call(null,"assoc"),Hb=O.a?O.a("merge"):O.call(null,"merge"),Ld=S.n?S.n("Make a map representing yourself. Make sure it contains your first"," name and last name. Then, add your hometown to the map using ",Gb," or ",Hb,"."):S.call(null,"Make a map representing yourself. Make sure it contains your first"," name and last name. Then, add your hometown to the map using ",Gb," or ",Hb,"."),Md=X.b(B([L,"Exercise: Modeling yourself",Ld],0)),Nd=Qk.b(B(["Lists"],0)),Qd=Q.c?Q.c(Yi,
"img/list.png"):Q.call(null,Yi,"img/list.png"),Rd=Qk.b(B(["Sets"],0)),Sd=Q.c?Q.c(Yi,"img/set.png"):Q.call(null,Yi,"img/set.png"),Td=X.b(B([L,"Other data structures",Nd,Qd,Rd,Sd],0)),Ud=Y.b(B([';; Lists\n(list 1 2 3)\n(list "Sally" "Brown" :programmer)\n\n;; Sets\n#{"red" "green" "blue" "yellow"}\n#{98 67 82 12 77}'],0)),Vd=X.b(B([L,"Other data structures",Ud],0)),Ib=rk.a?rk.a("abstraction"):rk.call(null,"abstraction"),Jb=R.c?R.c("Sequences are an ",Ib):R.call(null,"Sequences are an ",Ib),Kb=R.a?R.a("All the data structures are sequences"):
R.call(null,"All the data structures are sequences"),Lb=R.a?R.a("Many functions work on all sequences"):R.call(null,"Many functions work on all sequences"),Mb=S.a?S.a("Other things that are sequences"):S.call(null,"Other things that are sequences"),Nb=R.a?R.a("lines in a file"):R.call(null,"lines in a file"),Ob=R.a?R.a("files in a directory"):R.call(null,"files in a directory"),Pb=R.a?R.a("records in a database"):R.call(null,"records in a database"),Qb=W.d?W.d(Nb,Ob,Pb):W.call(null,Nb,Ob,Pb),Rb=R.c?
R.c(Mb,Qb):R.call(null,Mb,Qb),Wd=W.f?W.f(Jb,Kb,Lb,Rb):W.call(null,Jb,Kb,Lb,Rb),Xd=X.b(B([L,"Sequences",Wd],0)),Yd=Y.b(B(['[{:name "Mercury"}\n {:name "Venus"}\n {:name "Earth" :moons ["The Moon"]}\n {:name "Mars" :moons ["Phobos" "Deimos"]}\n {:name "Jupiter"\n  :moons ["Ganymede" "Callisto" "Io" "Europa"]}]'],0)),Zd=X.b(B([L,"Collections of collections",Yd],0)),Sb=R.a?R.a("Take the map from the last exercise -- the one about you."):R.call(null,"Take the map from the last exercise -- the one about you."),
Tb=R.c?R.c("Find two or three classmates. Ask their name and hometown. "," Make a vector of maps with their information."):R.call(null,"Find two or three classmates. Ask their name and hometown. "," Make a vector of maps with their information."),Ub=O.a?O.a("conj"):O.call(null,"conj"),Vb=R.d?R.d("Then, add your information to their information using ",Ub,"."):R.call(null,"Then, add your information to their information using ",Ub,"."),$d=vk.d?vk.d(Sb,Tb,Vb):vk.call(null,Sb,Tb,Vb),ae=X.b(B([L,"Exercise: Modeling your classmates",
$d],0)),be=Nk.b(B([L,"Data Structures",k,t,x,J,da,Ja,Wa,Nc,Dd,Fd,Hd,Jd,Md,Td,Vd,Xd,Zd,ae],0)),Wb=bl.b(B(["count","conj","first"],0)),Xb=R.a?R.a(Wb):R.call(null,Wb),Yb=bl.b(B(["+","-","*","/"],0)),Zb=R.a?R.a(Yb):R.call(null,Yb),$b=R.a?R.a("A piece of code that takes values and returns a value"):R.call(null,"A piece of code that takes values and returns a value"),ce=W.d?W.d(Xb,Zb,$b):W.call(null,Xb,Zb,$b),de=X.b(B([L,"What are functions?",ce],0)),ee=Y.b(B(['(defn triple\n  "Given a number, return 3 times that number."\n  [x]\n  (+ x x x))\n\n(triple 2)    ;\x3d\x3e 6\n(triple 3/2)  ;\x3d\x3e 9/2\n(triple 30.3) ;\x3d\x3e 90.9'],
0)),fe=X.b(B([L,"An example function",ee],0)),ge=Y.b(B(['(defn ; specifies that we are defining a function\n  triple ; the name of this function\n  \n  ;; documentation, optional\n  "Given a number, return 3 times that number."\n  \n  [x] ; list of arguments\n\n  ;; body of function\n  (+ x x x))'],0)),he=X.b(B([L,"An example function",ge],0)),ie=Y.b(B(["(defn average\n  [x y] ; Functions can take multiple arguments.\n  (/ (+ x y) 2))\n\n(average 2 3) ;\x3d\x3e 5/2"],0)),je=X.b(B([L,"A function with multiple arguments.",
ie],0)),ac=O.a?O.a("str"):O.call(null,"str"),ke=S.f?S.f("The ",ac," function can take any number of arguments, and it ","concatenates them together to make a string."):S.call(null,"The ",ac," function can take any number of arguments, and it ","concatenates them together to make a string."),bc=O.a?O.a("format-name"):O.call(null,"format-name"),cc=O.a?O.a("first-name"):O.call(null,"first-name"),dc=O.a?O.a("last-name"):O.call(null,"last-name"),le=S.fa?S.fa("Write a function called ",bc," that takes two arguments, ",
cc," and ",dc,". This function should output the name ","like so: Last, First."):S.call(null,"Write a function called ",bc," that takes two arguments, ",cc," and ",dc,". This function should output the name ","like so: Last, First."),me=X.b(B([L,"Exercise: make a function to format names",ke,le],0)),ec=R.a?R.a("Functions are named like any other value"):R.call(null,"Functions are named like any other value"),fc=O.a?O.a("?"):O.call(null,"?"),gc=S.c?S.c("Predicate functions usually end in ",fc):S.call(null,
"Predicate functions usually end in ",fc),hc=O.a?O.a("zero?"):O.call(null,"zero?"),ic=R.a?R.a(hc):R.call(null,hc),jc=O.a?O.a("vector?"):O.call(null,"vector?"),kc=R.a?R.a(jc):R.call(null,jc),lc=O.a?O.a("empty?"):O.call(null,"empty?"),mc=R.a?R.a(lc):R.call(null,lc),nc=W.d?W.d(ic,kc,mc):W.call(null,ic,kc,mc),oc=R.c?R.c(gc,nc):R.call(null,gc,nc),ne=W.c?W.c(ec,oc):W.call(null,ec,oc),oe=X.b(B([L,"Naming functions",ne],0)),pe=Nk.b(B([L,"Functions",de,fe,he,je,me,oe],0)),qe=Y.b(B(["(\x3d 1 2)    ;\x3d\x3e false\n(\x3e 4 3)    ;\x3d\x3e true\n(\x3e\x3d 4 5)   ;\x3d\x3e false\n(\x3c -1 1)   ;\x3d\x3e true\n(\x3c\x3d -1 -2) ;\x3d\x3e false"],
0)),re=X.b(B([L,"Comparison functions",qe],0)),se=Y.b(B(["(defn vegetarian?\n  [person]\n  (\x3d :vegetarian (get person :dietary-restrictions)))"],0)),te=X.b(B([L,"Using comparison functions",se],0)),ue=Y.b(B(['(str "Chocolate" ", " "strawberry" ", and " "vanilla")\n;;\x3d\x3e "Chocolate, strawberry, and vanilla"'],0)),ve=X.b(B([L,"String functions",ue],0)),we=Pf.c(R,O),pc=Tf.c(we,new H(null,3,5,xg,["assoc","dissoc","merge"],null)),xe=W.a?W.a(pc):W.call(null,pc),ye=X.b(B([L,"Map functions",xe],0)),
ze=Pf.c(R,O),qc=Tf.c(ze,new H(null,5,5,xg,["count","conj","first","rest","get"],null)),Ae=W.a?W.a(qc):W.call(null,qc),Be=X.b(B([L,"Sequence functions",Ae],0)),Ce=Nk.b(B([L,"Function library",re,te,ve,ye,Be],0)),rc=O.a?O.a("map"):O.call(null,"map"),De=P.a?P.a(rc):P.call(null,rc),Ee=Y.b(B(["(defn triple\n  [x]\n  (+ x x x))\n\n(map triple [1 2 3]) ;\x3d\x3e [3 6 9]"],0)),Fe=X.b(B([L,De,Ee],0)),sc=O.a?O.a("reduce"):O.call(null,"reduce"),Ge=P.a?P.a(sc):P.call(null,sc),He=Y.b(B(["(defn add\n  [x y]\n  (+ x y))\n\n(reduce add [1 2 3]) ;\x3d\x3e 6"],
0)),Ie=X.b(B([L,Ge,He],0)),tc=O.a?O.a("reduce"):O.call(null,"reduce"),Je=P.c?P.c(tc," in action"):P.call(null,tc," in action"),Ke=Y.b(B(['(defn join-with-space\n  [string1 string2]\n  (str string1 " " string2))\n\n(reduce join-with-space\n        ["i" "like" "peanut" "butter" "and" "jelly"])\n;;\x3d\x3e "i like peanut butter and jelly"'],0)),Le=X.b(B([L,Je,Ke],0)),uc=O.a?O.a("reduce"):O.call(null,"reduce"),Me=P.c?P.c(uc," in action"):P.call(null,uc," in action"),Ne=Y.b(B(['(reduce join-with-space\n        ["i" "like" "peanut" "butter" "and" "jelly"])\n;;\x3d\x3e "i like peanut butter and jelly"\n\n(join-with-space "i" "like")\n(join-with-space "i like" "peanut")\n(join-with-space "i like peanut" "butter")\n(join-with-space "i like peanut butter" "and")\n(join-with-space "i like peanut butter and" "jelly")'],
0)),Oe=X.b(B([L,Me,Ne],0)),vc=O.a?O.a("sort-by"):O.call(null,"sort-by"),Pe=P.a?P.a(vc):P.call(null,vc),Qe=Y.b(B(["(sort-by val \x3e {:amy 3, :renee 5, :isabella 4})\n;;\x3d\x3e ([:renee 5] [:isabella 4] [:amy 3])"],0)),Re=X.b(B([L,Pe,Qe],0)),Se=Y.b(B(['(map (fn [x] (+ x x x)) [1 2 3]) ;\x3d\x3e [3 6 9]\n\n(reduce (fn [x y] (+ x y)) [1 2 3]) ;\x3d\x3e 6\n\n(reduce\n  (fn [s1 s2] (str s1 " " s2))\n  ["i" "like" "peanut" "butter" "and" "jelly"])\n  ;\x3d\x3e "i like peanut butter and jelly"'],0)),Te=
X.b(B([L,"Anonymous functions",Se],0)),wc=O.a?O.a("average"):O.call(null,"average"),Ue=S.f?S.f("Create a function called ",wc," that takes a vector of ","numbers and returns the average of those numbers."):S.call(null,"Create a function called ",wc," that takes a vector of ","numbers and returns the average of those numbers."),xc=O.a?O.a("reduce"):O.call(null,"reduce"),yc=O.a?O.a("count"):O.call(null,"count"),Ve=S.l?S.l("Hint: you will need to use ",xc," and ",yc,"."):S.call(null,"Hint: you will need to use ",
xc," and ",yc,"."),We=X.b(B([L,"Exercise: Find the average",Ue,Ve],0)),Xe=O.a?O.a("get-names"):O.call(null,"get-names"),Ye=Qk.b(B(["Create a function called ",Xe," that takes a ","vector of maps of people and returns a vector of their names."],0)),Ze=Y.b(B(['(get-names [{:first "Margaret" :last "Atwood"}\n            {:first "Doris" :last "Lessing"}\n            {:first "Ursula" :last "Le Guin"}\n            {:first "Alice" :last "Munro"}])\n\n;;\x3d\x3e ["Margaret Atwood" "Doris Lessing"\n;;    "Ursula Le Guin" "Alice Munro"]'],
0)),$e=X.b(B([L,"Exercise: Get the names of people",Ye,Ze],0)),zc=O.a?O.a("let"):O.call(null,"let"),af=P.a?P.a(zc):P.call(null,zc),bf=Y.b(B(['(defn spread\n  "Given a collection of numbers, return the difference between the largest and smallest number."\n  [numbers]\n    (let [largest (reduce max numbers)\n          smallest (reduce min numbers)]\n      (- largest smallest)))\n\n(spread [10 7 3 -3 8]) ;\x3d\x3e 13'],0)),cf=X.b(B([L,af,bf],0)),Ac=O.a?O.a("average"):O.call(null,"average"),Bc=O.a?O.a("let"):
O.call(null,"let"),df=S.n?S.n("Go back to the ",Ac," function you created before and ","use ",Bc," to make it easier to read."):S.call(null,"Go back to the ",Ac," function you created before and ","use ",Bc," to make it easier to read."),ef=X.b(B([L,"Exercise: Rewrite average",df],0)),ff=Nk.b(B([L,"Functions that take other functions",Fe,Ie,Le,Oe,Re,Te,We,$e,cf,ef],0));return Pk.b(B([mj,"mozilla-theme.css",a,be,pe,Ce,ff],0))}()):nk.call(null,I,function(){var a=Ok.b(B([L,"Module 2"],0)),b=R.a?R.a("Vectors"):
R.call(null,"Vectors"),c=R.a?R.a("Maps"):R.call(null,"Maps"),d=R.a?R.a("Lists"):R.call(null,"Lists"),e=R.a?R.a("Sets"):R.call(null,"Sets"),f=R.a?R.a("Sequences"):R.call(null,"Sequences"),h=W.l?W.l(b,c,d,e,f):W.call(null,b,c,d,e,f),k=X.b(B([L,"Data structures",h],0)),p=Q.f?Q.f(Yi,"img/vector.png",Ni,"vector"):Q.call(null,Yi,"img/vector.png",Ni,"vector"),t=X.b(B([L,"Vectors",p],0)),v=Y.b(B(['[1 2 3 4 5]\n["a" 1 2 "b"]\n[]'],0)),x=X.b(B([L,"Vectors",v],0)),G=Y.b(B(["(vector? [:a :b :c])\n;;\x3d\x3e true\n\n(vector :a :b :c)\n;;\x3d\x3e [:a :b :c]\n\n(conj [:a :b] :c)\n;;\x3d\x3e [:a :b :c]"],
0)),J=X.b(B([L,"Vector functions",G],0)),Z=Y.b(B(["(count [:a :b :c])\n;;\x3d\x3e 3\n\n(nth [:a :b :c] 1)\n;;\x3d\x3e :b\n\n(first [:a :b :c])\n;;\x3d\x3e :a"],0)),da=X.b(B([L,"Vector functions",Z],0)),ka=O.a?O.a("nth"):O.call(null,"nth"),va=S.d?S.d("Make a vector of all the places you've ever lived. Then use the ",ka," function to get the current place you live from the vector."):S.call(null,"Make a vector of all the places you've ever lived. Then use the ",ka," function to get the current place you live from the vector."),
Ja=X.b(B([L,"Exercise: Make a vector",va],0)),Pa=Q.f?Q.f(Yi,"img/map.png",Ni,"map"):Q.call(null,Yi,"img/map.png",Ni,"map"),Wa=X.b(B([L,"Maps",Pa],0)),$a=Y.b(B(['{:first "Sally", :last "Brown", :occupation "programmer"}\n{:a 1, :b "two"}\n{}'],0)),Nc=X.b(B([L,"Maps",$a],0)),Cd=Y.b(B(['(map? {:first "Sally" :last "Brown"})\n;;\x3d\x3e true\n\n(get {:first "Sally" :last "Brown"} :first)\n;;\x3d\x3e "Sally"\n\n(get {:first "Sally"} :last :MISS)\n;;\x3d\x3e :MISS'],0)),Dd=X.b(B([L,"Map functions",Cd],
0)),Ed=Y.b(B(['(assoc {:first "Sally"} :last "Brown")\n;;\x3d\x3e {:first "Sally", :last "Brown"}\n\n(dissoc {:first "Sally" :last "Brown"} :last)\n;;\x3d\x3e {:first "Sally"}\n\n(merge {:first "Sally"} {:last "Brown"})\n;;\x3d\x3e {:first "Sally", :last "Brown"}\n\n(count {:first "Sally" :last "Brown"})\n;;\x3d\x3e 2'],0)),Fd=X.b(B([L,"More map functions",Ed],0)),Gd=Y.b(B(['(keys {:first "Sally" :last "Brown"})\n;;\x3d\x3e (:first :last)\n\n(vals {:first "Sally" :last "Brown"})\n;;\x3d\x3e ("Sally" "Brown")\n\n(into {} [[1 2] [3 4]])\n;;\x3d\x3e {1 2, 3 4}'],
0)),Hd=X.b(B([L,"Even more map functions",Gd],0)),Id=Y.b(B(['(:first {:first "Sally" :last "Brown"})\n;;\x3d\x3e "Sally"\n\n(:last {:first "Sally"})\n;;\x3d\x3e nil\n\n(:last {:first "Sally"} :MISS)\n;;\x3d\x3e :MISS'],0)),Jd=X.b(B([L,"Maps and keywords",Id],0)),Gb=O.a?O.a("assoc"):O.call(null,"assoc"),Hb=O.a?O.a("merge"):O.call(null,"merge"),Ld=S.n?S.n("Make a map representing yourself. Make sure it contains your first"," name and last name. Then, add your hometown to the map using ",Gb," or ",Hb,
"."):S.call(null,"Make a map representing yourself. Make sure it contains your first"," name and last name. Then, add your hometown to the map using ",Gb," or ",Hb,"."),Md=X.b(B([L,"Exercise: Modeling yourself",Ld],0)),Nd=Qk.b(B(["Lists"],0)),Qd=Q.c?Q.c(Yi,"img/list.png"):Q.call(null,Yi,"img/list.png"),Rd=Qk.b(B(["Sets"],0)),Sd=Q.c?Q.c(Yi,"img/set.png"):Q.call(null,Yi,"img/set.png"),Td=X.b(B([L,"Other data structures",Nd,Qd,Rd,Sd],0)),Ud=Y.b(B([';; Lists\n(list 1 2 3)\n(list "Sally" "Brown" :programmer)\n\n;; Sets\n#{"red" "green" "blue" "yellow"}\n#{98 67 82 12 77}'],
0)),Vd=X.b(B([L,"Other data structures",Ud],0)),Ib=rk.a?rk.a("abstraction"):rk.call(null,"abstraction"),Jb=R.c?R.c("Sequences are an ",Ib):R.call(null,"Sequences are an ",Ib),Kb=R.a?R.a("All the data structures are sequences"):R.call(null,"All the data structures are sequences"),Lb=R.a?R.a("Many functions work on all sequences"):R.call(null,"Many functions work on all sequences"),Mb=S.a?S.a("Other things that are sequences"):S.call(null,"Other things that are sequences"),Nb=R.a?R.a("lines in a file"):
R.call(null,"lines in a file"),Ob=R.a?R.a("files in a directory"):R.call(null,"files in a directory"),Pb=R.a?R.a("records in a database"):R.call(null,"records in a database"),Qb=W.d?W.d(Nb,Ob,Pb):W.call(null,Nb,Ob,Pb),Rb=R.c?R.c(Mb,Qb):R.call(null,Mb,Qb),Wd=W.f?W.f(Jb,Kb,Lb,Rb):W.call(null,Jb,Kb,Lb,Rb),Xd=X.b(B([L,"Sequences",Wd],0)),Yd=Y.b(B(['[{:name "Mercury"}\n {:name "Venus"}\n {:name "Earth" :moons ["The Moon"]}\n {:name "Mars" :moons ["Phobos" "Deimos"]}\n {:name "Jupiter"\n  :moons ["Ganymede" "Callisto" "Io" "Europa"]}]'],
0)),Zd=X.b(B([L,"Collections of collections",Yd],0)),Sb=R.a?R.a("Take the map from the last exercise -- the one about you."):R.call(null,"Take the map from the last exercise -- the one about you."),Tb=R.c?R.c("Find two or three classmates. Ask their name and hometown. "," Make a vector of maps with their information."):R.call(null,"Find two or three classmates. Ask their name and hometown. "," Make a vector of maps with their information."),Ub=O.a?O.a("conj"):O.call(null,"conj"),Vb=R.d?R.d("Then, add your information to their information using ",
Ub,"."):R.call(null,"Then, add your information to their information using ",Ub,"."),$d=vk.d?vk.d(Sb,Tb,Vb):vk.call(null,Sb,Tb,Vb),ae=X.b(B([L,"Exercise: Modeling your classmates",$d],0)),be=Nk.b(B([L,"Data Structures",k,t,x,J,da,Ja,Wa,Nc,Dd,Fd,Hd,Jd,Md,Td,Vd,Xd,Zd,ae],0)),Wb=bl.b(B(["count","conj","first"],0)),Xb=R.a?R.a(Wb):R.call(null,Wb),Yb=bl.b(B(["+","-","*","/"],0)),Zb=R.a?R.a(Yb):R.call(null,Yb),$b=R.a?R.a("A piece of code that takes values and returns a value"):R.call(null,"A piece of code that takes values and returns a value"),
ce=W.d?W.d(Xb,Zb,$b):W.call(null,Xb,Zb,$b),de=X.b(B([L,"What are functions?",ce],0)),ee=Y.b(B(['(defn triple\n  "Given a number, return 3 times that number."\n  [x]\n  (+ x x x))\n\n(triple 2)    ;\x3d\x3e 6\n(triple 3/2)  ;\x3d\x3e 9/2\n(triple 30.3) ;\x3d\x3e 90.9'],0)),fe=X.b(B([L,"An example function",ee],0)),ge=Y.b(B(['(defn ; specifies that we are defining a function\n  triple ; the name of this function\n  \n  ;; documentation, optional\n  "Given a number, return 3 times that number."\n  \n  [x] ; list of arguments\n\n  ;; body of function\n  (+ x x x))'],
0)),he=X.b(B([L,"An example function",ge],0)),ie=Y.b(B(["(defn average\n  [x y] ; Functions can take multiple arguments.\n  (/ (+ x y) 2))\n\n(average 2 3) ;\x3d\x3e 5/2"],0)),je=X.b(B([L,"A function with multiple arguments.",ie],0)),ac=O.a?O.a("str"):O.call(null,"str"),ke=S.f?S.f("The ",ac," function can take any number of arguments, and it ","concatenates them together to make a string."):S.call(null,"The ",ac," function can take any number of arguments, and it ","concatenates them together to make a string."),
bc=O.a?O.a("format-name"):O.call(null,"format-name"),cc=O.a?O.a("first-name"):O.call(null,"first-name"),dc=O.a?O.a("last-name"):O.call(null,"last-name"),le=S.fa?S.fa("Write a function called ",bc," that takes two arguments, ",cc," and ",dc,". This function should output the name ","like so: Last, First."):S.call(null,"Write a function called ",bc," that takes two arguments, ",cc," and ",dc,". This function should output the name ","like so: Last, First."),me=X.b(B([L,"Exercise: make a function to format names",
ke,le],0)),ec=R.a?R.a("Functions are named like any other value"):R.call(null,"Functions are named like any other value"),fc=O.a?O.a("?"):O.call(null,"?"),gc=S.c?S.c("Predicate functions usually end in ",fc):S.call(null,"Predicate functions usually end in ",fc),hc=O.a?O.a("zero?"):O.call(null,"zero?"),ic=R.a?R.a(hc):R.call(null,hc),jc=O.a?O.a("vector?"):O.call(null,"vector?"),kc=R.a?R.a(jc):R.call(null,jc),lc=O.a?O.a("empty?"):O.call(null,"empty?"),mc=R.a?R.a(lc):R.call(null,lc),nc=W.d?W.d(ic,kc,
mc):W.call(null,ic,kc,mc),oc=R.c?R.c(gc,nc):R.call(null,gc,nc),ne=W.c?W.c(ec,oc):W.call(null,ec,oc),oe=X.b(B([L,"Naming functions",ne],0)),pe=Nk.b(B([L,"Functions",de,fe,he,je,me,oe],0)),qe=Y.b(B(["(\x3d 1 2)    ;\x3d\x3e false\n(\x3e 4 3)    ;\x3d\x3e true\n(\x3e\x3d 4 5)   ;\x3d\x3e false\n(\x3c -1 1)   ;\x3d\x3e true\n(\x3c\x3d -1 -2) ;\x3d\x3e false"],0)),re=X.b(B([L,"Comparison functions",qe],0)),se=Y.b(B(["(defn vegetarian?\n  [person]\n  (\x3d :vegetarian (get person :dietary-restrictions)))"],
0)),te=X.b(B([L,"Using comparison functions",se],0)),ue=Y.b(B(['(str "Chocolate" ", " "strawberry" ", and " "vanilla")\n;;\x3d\x3e "Chocolate, strawberry, and vanilla"'],0)),ve=X.b(B([L,"String functions",ue],0)),we=Pf.c(R,O),pc=Tf.c(we,new H(null,3,5,xg,["assoc","dissoc","merge"],null)),xe=W.a?W.a(pc):W.call(null,pc),ye=X.b(B([L,"Map functions",xe],0)),ze=Pf.c(R,O),qc=Tf.c(ze,new H(null,5,5,xg,["count","conj","first","rest","get"],null)),Ae=W.a?W.a(qc):W.call(null,qc),Be=X.b(B([L,"Sequence functions",
Ae],0)),Ce=Nk.b(B([L,"Function library",re,te,ve,ye,Be],0)),rc=O.a?O.a("map"):O.call(null,"map"),De=P.a?P.a(rc):P.call(null,rc),Ee=Y.b(B(["(defn triple\n  [x]\n  (+ x x x))\n\n(map triple [1 2 3]) ;\x3d\x3e [3 6 9]"],0)),Fe=X.b(B([L,De,Ee],0)),sc=O.a?O.a("reduce"):O.call(null,"reduce"),Ge=P.a?P.a(sc):P.call(null,sc),He=Y.b(B(["(defn add\n  [x y]\n  (+ x y))\n\n(reduce add [1 2 3]) ;\x3d\x3e 6"],0)),Ie=X.b(B([L,Ge,He],0)),tc=O.a?O.a("reduce"):O.call(null,"reduce"),Je=P.c?P.c(tc," in action"):P.call(null,
tc," in action"),Ke=Y.b(B(['(defn join-with-space\n  [string1 string2]\n  (str string1 " " string2))\n\n(reduce join-with-space\n        ["i" "like" "peanut" "butter" "and" "jelly"])\n;;\x3d\x3e "i like peanut butter and jelly"'],0)),Le=X.b(B([L,Je,Ke],0)),uc=O.a?O.a("reduce"):O.call(null,"reduce"),Me=P.c?P.c(uc," in action"):P.call(null,uc," in action"),Ne=Y.b(B(['(reduce join-with-space\n        ["i" "like" "peanut" "butter" "and" "jelly"])\n;;\x3d\x3e "i like peanut butter and jelly"\n\n(join-with-space "i" "like")\n(join-with-space "i like" "peanut")\n(join-with-space "i like peanut" "butter")\n(join-with-space "i like peanut butter" "and")\n(join-with-space "i like peanut butter and" "jelly")'],
0)),Oe=X.b(B([L,Me,Ne],0)),vc=O.a?O.a("sort-by"):O.call(null,"sort-by"),Pe=P.a?P.a(vc):P.call(null,vc),Qe=Y.b(B(["(sort-by val \x3e {:amy 3, :renee 5, :isabella 4})\n;;\x3d\x3e ([:renee 5] [:isabella 4] [:amy 3])"],0)),Re=X.b(B([L,Pe,Qe],0)),Se=Y.b(B(['(map (fn [x] (+ x x x)) [1 2 3]) ;\x3d\x3e [3 6 9]\n\n(reduce (fn [x y] (+ x y)) [1 2 3]) ;\x3d\x3e 6\n\n(reduce\n  (fn [s1 s2] (str s1 " " s2))\n  ["i" "like" "peanut" "butter" "and" "jelly"])\n  ;\x3d\x3e "i like peanut butter and jelly"'],0)),Te=
X.b(B([L,"Anonymous functions",Se],0)),wc=O.a?O.a("average"):O.call(null,"average"),Ue=S.f?S.f("Create a function called ",wc," that takes a vector of ","numbers and returns the average of those numbers."):S.call(null,"Create a function called ",wc," that takes a vector of ","numbers and returns the average of those numbers."),xc=O.a?O.a("reduce"):O.call(null,"reduce"),yc=O.a?O.a("count"):O.call(null,"count"),Ve=S.l?S.l("Hint: you will need to use ",xc," and ",yc,"."):S.call(null,"Hint: you will need to use ",
xc," and ",yc,"."),We=X.b(B([L,"Exercise: Find the average",Ue,Ve],0)),Xe=O.a?O.a("get-names"):O.call(null,"get-names"),Ye=Qk.b(B(["Create a function called ",Xe," that takes a ","vector of maps of people and returns a vector of their names."],0)),Ze=Y.b(B(['(get-names [{:first "Margaret" :last "Atwood"}\n            {:first "Doris" :last "Lessing"}\n            {:first "Ursula" :last "Le Guin"}\n            {:first "Alice" :last "Munro"}])\n\n;;\x3d\x3e ["Margaret Atwood" "Doris Lessing"\n;;    "Ursula Le Guin" "Alice Munro"]'],
0)),$e=X.b(B([L,"Exercise: Get the names of people",Ye,Ze],0)),zc=O.a?O.a("let"):O.call(null,"let"),af=P.a?P.a(zc):P.call(null,zc),bf=Y.b(B(['(defn spread\n  "Given a collection of numbers, return the difference between the largest and smallest number."\n  [numbers]\n    (let [largest (reduce max numbers)\n          smallest (reduce min numbers)]\n      (- largest smallest)))\n\n(spread [10 7 3 -3 8]) ;\x3d\x3e 13'],0)),cf=X.b(B([L,af,bf],0)),Ac=O.a?O.a("average"):O.call(null,"average"),Bc=O.a?O.a("let"):
O.call(null,"let"),df=S.n?S.n("Go back to the ",Ac," function you created before and ","use ",Bc," to make it easier to read."):S.call(null,"Go back to the ",Ac," function you created before and ","use ",Bc," to make it easier to read."),ef=X.b(B([L,"Exercise: Rewrite average",df],0)),ff=Nk.b(B([L,"Functions that take other functions",Fe,Ie,Le,Oe,Re,Te,We,$e,cf,ef],0));return Pk.b(B([mj,"mozilla-theme.css",a,be,pe,Ce,ff],0))}())):pk.call(null,ok.c?ok.c(I,wg):ok.call(null,I,wg),nk.c?nk.c(I,function(){var a=
Ok.b(B([L,"Module 2"],0)),b=R.a?R.a("Vectors"):R.call(null,"Vectors"),c=R.a?R.a("Maps"):R.call(null,"Maps"),d=R.a?R.a("Lists"):R.call(null,"Lists"),e=R.a?R.a("Sets"):R.call(null,"Sets"),f=R.a?R.a("Sequences"):R.call(null,"Sequences"),h=W.l?W.l(b,c,d,e,f):W.call(null,b,c,d,e,f),k=X.b(B([L,"Data structures",h],0)),p=Q.f?Q.f(Yi,"img/vector.png",Ni,"vector"):Q.call(null,Yi,"img/vector.png",Ni,"vector"),t=X.b(B([L,"Vectors",p],0)),v=Y.b(B(['[1 2 3 4 5]\n["a" 1 2 "b"]\n[]'],0)),x=X.b(B([L,"Vectors",v],
0)),G=Y.b(B(["(vector? [:a :b :c])\n;;\x3d\x3e true\n\n(vector :a :b :c)\n;;\x3d\x3e [:a :b :c]\n\n(conj [:a :b] :c)\n;;\x3d\x3e [:a :b :c]"],0)),J=X.b(B([L,"Vector functions",G],0)),Z=Y.b(B(["(count [:a :b :c])\n;;\x3d\x3e 3\n\n(nth [:a :b :c] 1)\n;;\x3d\x3e :b\n\n(first [:a :b :c])\n;;\x3d\x3e :a"],0)),da=X.b(B([L,"Vector functions",Z],0)),ka=O.a?O.a("nth"):O.call(null,"nth"),va=S.d?S.d("Make a vector of all the places you've ever lived. Then use the ",ka," function to get the current place you live from the vector."):
S.call(null,"Make a vector of all the places you've ever lived. Then use the ",ka," function to get the current place you live from the vector."),Ja=X.b(B([L,"Exercise: Make a vector",va],0)),Pa=Q.f?Q.f(Yi,"img/map.png",Ni,"map"):Q.call(null,Yi,"img/map.png",Ni,"map"),Wa=X.b(B([L,"Maps",Pa],0)),$a=Y.b(B(['{:first "Sally", :last "Brown", :occupation "programmer"}\n{:a 1, :b "two"}\n{}'],0)),Nc=X.b(B([L,"Maps",$a],0)),Cd=Y.b(B(['(map? {:first "Sally" :last "Brown"})\n;;\x3d\x3e true\n\n(get {:first "Sally" :last "Brown"} :first)\n;;\x3d\x3e "Sally"\n\n(get {:first "Sally"} :last :MISS)\n;;\x3d\x3e :MISS'],
0)),Dd=X.b(B([L,"Map functions",Cd],0)),Ed=Y.b(B(['(assoc {:first "Sally"} :last "Brown")\n;;\x3d\x3e {:first "Sally", :last "Brown"}\n\n(dissoc {:first "Sally" :last "Brown"} :last)\n;;\x3d\x3e {:first "Sally"}\n\n(merge {:first "Sally"} {:last "Brown"})\n;;\x3d\x3e {:first "Sally", :last "Brown"}\n\n(count {:first "Sally" :last "Brown"})\n;;\x3d\x3e 2'],0)),Fd=X.b(B([L,"More map functions",Ed],0)),Gd=Y.b(B(['(keys {:first "Sally" :last "Brown"})\n;;\x3d\x3e (:first :last)\n\n(vals {:first "Sally" :last "Brown"})\n;;\x3d\x3e ("Sally" "Brown")\n\n(into {} [[1 2] [3 4]])\n;;\x3d\x3e {1 2, 3 4}'],
0)),Hd=X.b(B([L,"Even more map functions",Gd],0)),Id=Y.b(B(['(:first {:first "Sally" :last "Brown"})\n;;\x3d\x3e "Sally"\n\n(:last {:first "Sally"})\n;;\x3d\x3e nil\n\n(:last {:first "Sally"} :MISS)\n;;\x3d\x3e :MISS'],0)),Jd=X.b(B([L,"Maps and keywords",Id],0)),Gb=O.a?O.a("assoc"):O.call(null,"assoc"),Hb=O.a?O.a("merge"):O.call(null,"merge"),Ld=S.n?S.n("Make a map representing yourself. Make sure it contains your first"," name and last name. Then, add your hometown to the map using ",Gb," or ",Hb,
"."):S.call(null,"Make a map representing yourself. Make sure it contains your first"," name and last name. Then, add your hometown to the map using ",Gb," or ",Hb,"."),Md=X.b(B([L,"Exercise: Modeling yourself",Ld],0)),Nd=Qk.b(B(["Lists"],0)),Qd=Q.c?Q.c(Yi,"img/list.png"):Q.call(null,Yi,"img/list.png"),Rd=Qk.b(B(["Sets"],0)),Sd=Q.c?Q.c(Yi,"img/set.png"):Q.call(null,Yi,"img/set.png"),Td=X.b(B([L,"Other data structures",Nd,Qd,Rd,Sd],0)),Ud=Y.b(B([';; Lists\n(list 1 2 3)\n(list "Sally" "Brown" :programmer)\n\n;; Sets\n#{"red" "green" "blue" "yellow"}\n#{98 67 82 12 77}'],
0)),Vd=X.b(B([L,"Other data structures",Ud],0)),Ib=rk.a?rk.a("abstraction"):rk.call(null,"abstraction"),Jb=R.c?R.c("Sequences are an ",Ib):R.call(null,"Sequences are an ",Ib),Kb=R.a?R.a("All the data structures are sequences"):R.call(null,"All the data structures are sequences"),Lb=R.a?R.a("Many functions work on all sequences"):R.call(null,"Many functions work on all sequences"),Mb=S.a?S.a("Other things that are sequences"):S.call(null,"Other things that are sequences"),Nb=R.a?R.a("lines in a file"):
R.call(null,"lines in a file"),Ob=R.a?R.a("files in a directory"):R.call(null,"files in a directory"),Pb=R.a?R.a("records in a database"):R.call(null,"records in a database"),Qb=W.d?W.d(Nb,Ob,Pb):W.call(null,Nb,Ob,Pb),Rb=R.c?R.c(Mb,Qb):R.call(null,Mb,Qb),Wd=W.f?W.f(Jb,Kb,Lb,Rb):W.call(null,Jb,Kb,Lb,Rb),Xd=X.b(B([L,"Sequences",Wd],0)),Yd=Y.b(B(['[{:name "Mercury"}\n {:name "Venus"}\n {:name "Earth" :moons ["The Moon"]}\n {:name "Mars" :moons ["Phobos" "Deimos"]}\n {:name "Jupiter"\n  :moons ["Ganymede" "Callisto" "Io" "Europa"]}]'],
0)),Zd=X.b(B([L,"Collections of collections",Yd],0)),Sb=R.a?R.a("Take the map from the last exercise -- the one about you."):R.call(null,"Take the map from the last exercise -- the one about you."),Tb=R.c?R.c("Find two or three classmates. Ask their name and hometown. "," Make a vector of maps with their information."):R.call(null,"Find two or three classmates. Ask their name and hometown. "," Make a vector of maps with their information."),Ub=O.a?O.a("conj"):O.call(null,"conj"),Vb=R.d?R.d("Then, add your information to their information using ",
Ub,"."):R.call(null,"Then, add your information to their information using ",Ub,"."),$d=vk.d?vk.d(Sb,Tb,Vb):vk.call(null,Sb,Tb,Vb),ae=X.b(B([L,"Exercise: Modeling your classmates",$d],0)),be=Nk.b(B([L,"Data Structures",k,t,x,J,da,Ja,Wa,Nc,Dd,Fd,Hd,Jd,Md,Td,Vd,Xd,Zd,ae],0)),Wb=bl.b(B(["count","conj","first"],0)),Xb=R.a?R.a(Wb):R.call(null,Wb),Yb=bl.b(B(["+","-","*","/"],0)),Zb=R.a?R.a(Yb):R.call(null,Yb),$b=R.a?R.a("A piece of code that takes values and returns a value"):R.call(null,"A piece of code that takes values and returns a value"),
ce=W.d?W.d(Xb,Zb,$b):W.call(null,Xb,Zb,$b),de=X.b(B([L,"What are functions?",ce],0)),ee=Y.b(B(['(defn triple\n  "Given a number, return 3 times that number."\n  [x]\n  (+ x x x))\n\n(triple 2)    ;\x3d\x3e 6\n(triple 3/2)  ;\x3d\x3e 9/2\n(triple 30.3) ;\x3d\x3e 90.9'],0)),fe=X.b(B([L,"An example function",ee],0)),ge=Y.b(B(['(defn ; specifies that we are defining a function\n  triple ; the name of this function\n  \n  ;; documentation, optional\n  "Given a number, return 3 times that number."\n  \n  [x] ; list of arguments\n\n  ;; body of function\n  (+ x x x))'],
0)),he=X.b(B([L,"An example function",ge],0)),ie=Y.b(B(["(defn average\n  [x y] ; Functions can take multiple arguments.\n  (/ (+ x y) 2))\n\n(average 2 3) ;\x3d\x3e 5/2"],0)),je=X.b(B([L,"A function with multiple arguments.",ie],0)),ac=O.a?O.a("str"):O.call(null,"str"),ke=S.f?S.f("The ",ac," function can take any number of arguments, and it ","concatenates them together to make a string."):S.call(null,"The ",ac," function can take any number of arguments, and it ","concatenates them together to make a string."),
bc=O.a?O.a("format-name"):O.call(null,"format-name"),cc=O.a?O.a("first-name"):O.call(null,"first-name"),dc=O.a?O.a("last-name"):O.call(null,"last-name"),le=S.fa?S.fa("Write a function called ",bc," that takes two arguments, ",cc," and ",dc,". This function should output the name ","like so: Last, First."):S.call(null,"Write a function called ",bc," that takes two arguments, ",cc," and ",dc,". This function should output the name ","like so: Last, First."),me=X.b(B([L,"Exercise: make a function to format names",
ke,le],0)),ec=R.a?R.a("Functions are named like any other value"):R.call(null,"Functions are named like any other value"),fc=O.a?O.a("?"):O.call(null,"?"),gc=S.c?S.c("Predicate functions usually end in ",fc):S.call(null,"Predicate functions usually end in ",fc),hc=O.a?O.a("zero?"):O.call(null,"zero?"),ic=R.a?R.a(hc):R.call(null,hc),jc=O.a?O.a("vector?"):O.call(null,"vector?"),kc=R.a?R.a(jc):R.call(null,jc),lc=O.a?O.a("empty?"):O.call(null,"empty?"),mc=R.a?R.a(lc):R.call(null,lc),nc=W.d?W.d(ic,kc,
mc):W.call(null,ic,kc,mc),oc=R.c?R.c(gc,nc):R.call(null,gc,nc),ne=W.c?W.c(ec,oc):W.call(null,ec,oc),oe=X.b(B([L,"Naming functions",ne],0)),pe=Nk.b(B([L,"Functions",de,fe,he,je,me,oe],0)),qe=Y.b(B(["(\x3d 1 2)    ;\x3d\x3e false\n(\x3e 4 3)    ;\x3d\x3e true\n(\x3e\x3d 4 5)   ;\x3d\x3e false\n(\x3c -1 1)   ;\x3d\x3e true\n(\x3c\x3d -1 -2) ;\x3d\x3e false"],0)),re=X.b(B([L,"Comparison functions",qe],0)),se=Y.b(B(["(defn vegetarian?\n  [person]\n  (\x3d :vegetarian (get person :dietary-restrictions)))"],
0)),te=X.b(B([L,"Using comparison functions",se],0)),ue=Y.b(B(['(str "Chocolate" ", " "strawberry" ", and " "vanilla")\n;;\x3d\x3e "Chocolate, strawberry, and vanilla"'],0)),ve=X.b(B([L,"String functions",ue],0)),we=Pf.c(R,O),pc=Tf.c(we,new H(null,3,5,xg,["assoc","dissoc","merge"],null)),xe=W.a?W.a(pc):W.call(null,pc),ye=X.b(B([L,"Map functions",xe],0)),ze=Pf.c(R,O),qc=Tf.c(ze,new H(null,5,5,xg,["count","conj","first","rest","get"],null)),Ae=W.a?W.a(qc):W.call(null,qc),Be=X.b(B([L,"Sequence functions",
Ae],0)),Ce=Nk.b(B([L,"Function library",re,te,ve,ye,Be],0)),rc=O.a?O.a("map"):O.call(null,"map"),De=P.a?P.a(rc):P.call(null,rc),Ee=Y.b(B(["(defn triple\n  [x]\n  (+ x x x))\n\n(map triple [1 2 3]) ;\x3d\x3e [3 6 9]"],0)),Fe=X.b(B([L,De,Ee],0)),sc=O.a?O.a("reduce"):O.call(null,"reduce"),Ge=P.a?P.a(sc):P.call(null,sc),He=Y.b(B(["(defn add\n  [x y]\n  (+ x y))\n\n(reduce add [1 2 3]) ;\x3d\x3e 6"],0)),Ie=X.b(B([L,Ge,He],0)),tc=O.a?O.a("reduce"):O.call(null,"reduce"),Je=P.c?P.c(tc," in action"):P.call(null,
tc," in action"),Ke=Y.b(B(['(defn join-with-space\n  [string1 string2]\n  (str string1 " " string2))\n\n(reduce join-with-space\n        ["i" "like" "peanut" "butter" "and" "jelly"])\n;;\x3d\x3e "i like peanut butter and jelly"'],0)),Le=X.b(B([L,Je,Ke],0)),uc=O.a?O.a("reduce"):O.call(null,"reduce"),Me=P.c?P.c(uc," in action"):P.call(null,uc," in action"),Ne=Y.b(B(['(reduce join-with-space\n        ["i" "like" "peanut" "butter" "and" "jelly"])\n;;\x3d\x3e "i like peanut butter and jelly"\n\n(join-with-space "i" "like")\n(join-with-space "i like" "peanut")\n(join-with-space "i like peanut" "butter")\n(join-with-space "i like peanut butter" "and")\n(join-with-space "i like peanut butter and" "jelly")'],
0)),Oe=X.b(B([L,Me,Ne],0)),vc=O.a?O.a("sort-by"):O.call(null,"sort-by"),Pe=P.a?P.a(vc):P.call(null,vc),Qe=Y.b(B(["(sort-by val \x3e {:amy 3, :renee 5, :isabella 4})\n;;\x3d\x3e ([:renee 5] [:isabella 4] [:amy 3])"],0)),Re=X.b(B([L,Pe,Qe],0)),Se=Y.b(B(['(map (fn [x] (+ x x x)) [1 2 3]) ;\x3d\x3e [3 6 9]\n\n(reduce (fn [x y] (+ x y)) [1 2 3]) ;\x3d\x3e 6\n\n(reduce\n  (fn [s1 s2] (str s1 " " s2))\n  ["i" "like" "peanut" "butter" "and" "jelly"])\n  ;\x3d\x3e "i like peanut butter and jelly"'],0)),Te=
X.b(B([L,"Anonymous functions",Se],0)),wc=O.a?O.a("average"):O.call(null,"average"),Ue=S.f?S.f("Create a function called ",wc," that takes a vector of ","numbers and returns the average of those numbers."):S.call(null,"Create a function called ",wc," that takes a vector of ","numbers and returns the average of those numbers."),xc=O.a?O.a("reduce"):O.call(null,"reduce"),yc=O.a?O.a("count"):O.call(null,"count"),Ve=S.l?S.l("Hint: you will need to use ",xc," and ",yc,"."):S.call(null,"Hint: you will need to use ",
xc," and ",yc,"."),We=X.b(B([L,"Exercise: Find the average",Ue,Ve],0)),Xe=O.a?O.a("get-names"):O.call(null,"get-names"),Ye=Qk.b(B(["Create a function called ",Xe," that takes a ","vector of maps of people and returns a vector of their names."],0)),Ze=Y.b(B(['(get-names [{:first "Margaret" :last "Atwood"}\n            {:first "Doris" :last "Lessing"}\n            {:first "Ursula" :last "Le Guin"}\n            {:first "Alice" :last "Munro"}])\n\n;;\x3d\x3e ["Margaret Atwood" "Doris Lessing"\n;;    "Ursula Le Guin" "Alice Munro"]'],
0)),$e=X.b(B([L,"Exercise: Get the names of people",Ye,Ze],0)),zc=O.a?O.a("let"):O.call(null,"let"),af=P.a?P.a(zc):P.call(null,zc),bf=Y.b(B(['(defn spread\n  "Given a collection of numbers, return the difference between the largest and smallest number."\n  [numbers]\n    (let [largest (reduce max numbers)\n          smallest (reduce min numbers)]\n      (- largest smallest)))\n\n(spread [10 7 3 -3 8]) ;\x3d\x3e 13'],0)),cf=X.b(B([L,af,bf],0)),Ac=O.a?O.a("average"):O.call(null,"average"),Bc=O.a?O.a("let"):
O.call(null,"let"),df=S.n?S.n("Go back to the ",Ac," function you created before and ","use ",Bc," to make it easier to read."):S.call(null,"Go back to the ",Ac," function you created before and ","use ",Bc," to make it easier to read."),ef=X.b(B([L,"Exercise: Rewrite average",df],0)),ff=Nk.b(B([L,"Functions that take other functions",Fe,Ie,Le,Oe,Re,Te,We,$e,cf,ef],0));return Pk.b(B([mj,"mozilla-theme.css",a,be,pe,Ce,ff],0))}()):nk.call(null,I,function(){var a=Ok.b(B([L,"Module 2"],0)),b=R.a?R.a("Vectors"):
R.call(null,"Vectors"),c=R.a?R.a("Maps"):R.call(null,"Maps"),d=R.a?R.a("Lists"):R.call(null,"Lists"),e=R.a?R.a("Sets"):R.call(null,"Sets"),f=R.a?R.a("Sequences"):R.call(null,"Sequences"),h=W.l?W.l(b,c,d,e,f):W.call(null,b,c,d,e,f),k=X.b(B([L,"Data structures",h],0)),p=Q.f?Q.f(Yi,"img/vector.png",Ni,"vector"):Q.call(null,Yi,"img/vector.png",Ni,"vector"),t=X.b(B([L,"Vectors",p],0)),v=Y.b(B(['[1 2 3 4 5]\n["a" 1 2 "b"]\n[]'],0)),x=X.b(B([L,"Vectors",v],0)),G=Y.b(B(["(vector? [:a :b :c])\n;;\x3d\x3e true\n\n(vector :a :b :c)\n;;\x3d\x3e [:a :b :c]\n\n(conj [:a :b] :c)\n;;\x3d\x3e [:a :b :c]"],
0)),J=X.b(B([L,"Vector functions",G],0)),Z=Y.b(B(["(count [:a :b :c])\n;;\x3d\x3e 3\n\n(nth [:a :b :c] 1)\n;;\x3d\x3e :b\n\n(first [:a :b :c])\n;;\x3d\x3e :a"],0)),da=X.b(B([L,"Vector functions",Z],0)),ka=O.a?O.a("nth"):O.call(null,"nth"),va=S.d?S.d("Make a vector of all the places you've ever lived. Then use the ",ka," function to get the current place you live from the vector."):S.call(null,"Make a vector of all the places you've ever lived. Then use the ",ka," function to get the current place you live from the vector."),
Ja=X.b(B([L,"Exercise: Make a vector",va],0)),Pa=Q.f?Q.f(Yi,"img/map.png",Ni,"map"):Q.call(null,Yi,"img/map.png",Ni,"map"),Wa=X.b(B([L,"Maps",Pa],0)),$a=Y.b(B(['{:first "Sally", :last "Brown", :occupation "programmer"}\n{:a 1, :b "two"}\n{}'],0)),Nc=X.b(B([L,"Maps",$a],0)),Cd=Y.b(B(['(map? {:first "Sally" :last "Brown"})\n;;\x3d\x3e true\n\n(get {:first "Sally" :last "Brown"} :first)\n;;\x3d\x3e "Sally"\n\n(get {:first "Sally"} :last :MISS)\n;;\x3d\x3e :MISS'],0)),Dd=X.b(B([L,"Map functions",Cd],
0)),Ed=Y.b(B(['(assoc {:first "Sally"} :last "Brown")\n;;\x3d\x3e {:first "Sally", :last "Brown"}\n\n(dissoc {:first "Sally" :last "Brown"} :last)\n;;\x3d\x3e {:first "Sally"}\n\n(merge {:first "Sally"} {:last "Brown"})\n;;\x3d\x3e {:first "Sally", :last "Brown"}\n\n(count {:first "Sally" :last "Brown"})\n;;\x3d\x3e 2'],0)),Fd=X.b(B([L,"More map functions",Ed],0)),Gd=Y.b(B(['(keys {:first "Sally" :last "Brown"})\n;;\x3d\x3e (:first :last)\n\n(vals {:first "Sally" :last "Brown"})\n;;\x3d\x3e ("Sally" "Brown")\n\n(into {} [[1 2] [3 4]])\n;;\x3d\x3e {1 2, 3 4}'],
0)),Hd=X.b(B([L,"Even more map functions",Gd],0)),Id=Y.b(B(['(:first {:first "Sally" :last "Brown"})\n;;\x3d\x3e "Sally"\n\n(:last {:first "Sally"})\n;;\x3d\x3e nil\n\n(:last {:first "Sally"} :MISS)\n;;\x3d\x3e :MISS'],0)),Jd=X.b(B([L,"Maps and keywords",Id],0)),Gb=O.a?O.a("assoc"):O.call(null,"assoc"),Hb=O.a?O.a("merge"):O.call(null,"merge"),Ld=S.n?S.n("Make a map representing yourself. Make sure it contains your first"," name and last name. Then, add your hometown to the map using ",Gb," or ",Hb,
"."):S.call(null,"Make a map representing yourself. Make sure it contains your first"," name and last name. Then, add your hometown to the map using ",Gb," or ",Hb,"."),Md=X.b(B([L,"Exercise: Modeling yourself",Ld],0)),Nd=Qk.b(B(["Lists"],0)),Qd=Q.c?Q.c(Yi,"img/list.png"):Q.call(null,Yi,"img/list.png"),Rd=Qk.b(B(["Sets"],0)),Sd=Q.c?Q.c(Yi,"img/set.png"):Q.call(null,Yi,"img/set.png"),Td=X.b(B([L,"Other data structures",Nd,Qd,Rd,Sd],0)),Ud=Y.b(B([';; Lists\n(list 1 2 3)\n(list "Sally" "Brown" :programmer)\n\n;; Sets\n#{"red" "green" "blue" "yellow"}\n#{98 67 82 12 77}'],
0)),Vd=X.b(B([L,"Other data structures",Ud],0)),Ib=rk.a?rk.a("abstraction"):rk.call(null,"abstraction"),Jb=R.c?R.c("Sequences are an ",Ib):R.call(null,"Sequences are an ",Ib),Kb=R.a?R.a("All the data structures are sequences"):R.call(null,"All the data structures are sequences"),Lb=R.a?R.a("Many functions work on all sequences"):R.call(null,"Many functions work on all sequences"),Mb=S.a?S.a("Other things that are sequences"):S.call(null,"Other things that are sequences"),Nb=R.a?R.a("lines in a file"):
R.call(null,"lines in a file"),Ob=R.a?R.a("files in a directory"):R.call(null,"files in a directory"),Pb=R.a?R.a("records in a database"):R.call(null,"records in a database"),Qb=W.d?W.d(Nb,Ob,Pb):W.call(null,Nb,Ob,Pb),Rb=R.c?R.c(Mb,Qb):R.call(null,Mb,Qb),Wd=W.f?W.f(Jb,Kb,Lb,Rb):W.call(null,Jb,Kb,Lb,Rb),Xd=X.b(B([L,"Sequences",Wd],0)),Yd=Y.b(B(['[{:name "Mercury"}\n {:name "Venus"}\n {:name "Earth" :moons ["The Moon"]}\n {:name "Mars" :moons ["Phobos" "Deimos"]}\n {:name "Jupiter"\n  :moons ["Ganymede" "Callisto" "Io" "Europa"]}]'],
0)),Zd=X.b(B([L,"Collections of collections",Yd],0)),Sb=R.a?R.a("Take the map from the last exercise -- the one about you."):R.call(null,"Take the map from the last exercise -- the one about you."),Tb=R.c?R.c("Find two or three classmates. Ask their name and hometown. "," Make a vector of maps with their information."):R.call(null,"Find two or three classmates. Ask their name and hometown. "," Make a vector of maps with their information."),Ub=O.a?O.a("conj"):O.call(null,"conj"),Vb=R.d?R.d("Then, add your information to their information using ",
Ub,"."):R.call(null,"Then, add your information to their information using ",Ub,"."),$d=vk.d?vk.d(Sb,Tb,Vb):vk.call(null,Sb,Tb,Vb),ae=X.b(B([L,"Exercise: Modeling your classmates",$d],0)),be=Nk.b(B([L,"Data Structures",k,t,x,J,da,Ja,Wa,Nc,Dd,Fd,Hd,Jd,Md,Td,Vd,Xd,Zd,ae],0)),Wb=bl.b(B(["count","conj","first"],0)),Xb=R.a?R.a(Wb):R.call(null,Wb),Yb=bl.b(B(["+","-","*","/"],0)),Zb=R.a?R.a(Yb):R.call(null,Yb),$b=R.a?R.a("A piece of code that takes values and returns a value"):R.call(null,"A piece of code that takes values and returns a value"),
ce=W.d?W.d(Xb,Zb,$b):W.call(null,Xb,Zb,$b),de=X.b(B([L,"What are functions?",ce],0)),ee=Y.b(B(['(defn triple\n  "Given a number, return 3 times that number."\n  [x]\n  (+ x x x))\n\n(triple 2)    ;\x3d\x3e 6\n(triple 3/2)  ;\x3d\x3e 9/2\n(triple 30.3) ;\x3d\x3e 90.9'],0)),fe=X.b(B([L,"An example function",ee],0)),ge=Y.b(B(['(defn ; specifies that we are defining a function\n  triple ; the name of this function\n  \n  ;; documentation, optional\n  "Given a number, return 3 times that number."\n  \n  [x] ; list of arguments\n\n  ;; body of function\n  (+ x x x))'],
0)),he=X.b(B([L,"An example function",ge],0)),ie=Y.b(B(["(defn average\n  [x y] ; Functions can take multiple arguments.\n  (/ (+ x y) 2))\n\n(average 2 3) ;\x3d\x3e 5/2"],0)),je=X.b(B([L,"A function with multiple arguments.",ie],0)),ac=O.a?O.a("str"):O.call(null,"str"),ke=S.f?S.f("The ",ac," function can take any number of arguments, and it ","concatenates them together to make a string."):S.call(null,"The ",ac," function can take any number of arguments, and it ","concatenates them together to make a string."),
bc=O.a?O.a("format-name"):O.call(null,"format-name"),cc=O.a?O.a("first-name"):O.call(null,"first-name"),dc=O.a?O.a("last-name"):O.call(null,"last-name"),le=S.fa?S.fa("Write a function called ",bc," that takes two arguments, ",cc," and ",dc,". This function should output the name ","like so: Last, First."):S.call(null,"Write a function called ",bc," that takes two arguments, ",cc," and ",dc,". This function should output the name ","like so: Last, First."),me=X.b(B([L,"Exercise: make a function to format names",
ke,le],0)),ec=R.a?R.a("Functions are named like any other value"):R.call(null,"Functions are named like any other value"),fc=O.a?O.a("?"):O.call(null,"?"),gc=S.c?S.c("Predicate functions usually end in ",fc):S.call(null,"Predicate functions usually end in ",fc),hc=O.a?O.a("zero?"):O.call(null,"zero?"),ic=R.a?R.a(hc):R.call(null,hc),jc=O.a?O.a("vector?"):O.call(null,"vector?"),kc=R.a?R.a(jc):R.call(null,jc),lc=O.a?O.a("empty?"):O.call(null,"empty?"),mc=R.a?R.a(lc):R.call(null,lc),nc=W.d?W.d(ic,kc,
mc):W.call(null,ic,kc,mc),oc=R.c?R.c(gc,nc):R.call(null,gc,nc),ne=W.c?W.c(ec,oc):W.call(null,ec,oc),oe=X.b(B([L,"Naming functions",ne],0)),pe=Nk.b(B([L,"Functions",de,fe,he,je,me,oe],0)),qe=Y.b(B(["(\x3d 1 2)    ;\x3d\x3e false\n(\x3e 4 3)    ;\x3d\x3e true\n(\x3e\x3d 4 5)   ;\x3d\x3e false\n(\x3c -1 1)   ;\x3d\x3e true\n(\x3c\x3d -1 -2) ;\x3d\x3e false"],0)),re=X.b(B([L,"Comparison functions",qe],0)),se=Y.b(B(["(defn vegetarian?\n  [person]\n  (\x3d :vegetarian (get person :dietary-restrictions)))"],
0)),te=X.b(B([L,"Using comparison functions",se],0)),ue=Y.b(B(['(str "Chocolate" ", " "strawberry" ", and " "vanilla")\n;;\x3d\x3e "Chocolate, strawberry, and vanilla"'],0)),ve=X.b(B([L,"String functions",ue],0)),we=Pf.c(R,O),pc=Tf.c(we,new H(null,3,5,xg,["assoc","dissoc","merge"],null)),xe=W.a?W.a(pc):W.call(null,pc),ye=X.b(B([L,"Map functions",xe],0)),ze=Pf.c(R,O),qc=Tf.c(ze,new H(null,5,5,xg,["count","conj","first","rest","get"],null)),Ae=W.a?W.a(qc):W.call(null,qc),Be=X.b(B([L,"Sequence functions",
Ae],0)),Ce=Nk.b(B([L,"Function library",re,te,ve,ye,Be],0)),rc=O.a?O.a("map"):O.call(null,"map"),De=P.a?P.a(rc):P.call(null,rc),Ee=Y.b(B(["(defn triple\n  [x]\n  (+ x x x))\n\n(map triple [1 2 3]) ;\x3d\x3e [3 6 9]"],0)),Fe=X.b(B([L,De,Ee],0)),sc=O.a?O.a("reduce"):O.call(null,"reduce"),Ge=P.a?P.a(sc):P.call(null,sc),He=Y.b(B(["(defn add\n  [x y]\n  (+ x y))\n\n(reduce add [1 2 3]) ;\x3d\x3e 6"],0)),Ie=X.b(B([L,Ge,He],0)),tc=O.a?O.a("reduce"):O.call(null,"reduce"),Je=P.c?P.c(tc," in action"):P.call(null,
tc," in action"),Ke=Y.b(B(['(defn join-with-space\n  [string1 string2]\n  (str string1 " " string2))\n\n(reduce join-with-space\n        ["i" "like" "peanut" "butter" "and" "jelly"])\n;;\x3d\x3e "i like peanut butter and jelly"'],0)),Le=X.b(B([L,Je,Ke],0)),uc=O.a?O.a("reduce"):O.call(null,"reduce"),Me=P.c?P.c(uc," in action"):P.call(null,uc," in action"),Ne=Y.b(B(['(reduce join-with-space\n        ["i" "like" "peanut" "butter" "and" "jelly"])\n;;\x3d\x3e "i like peanut butter and jelly"\n\n(join-with-space "i" "like")\n(join-with-space "i like" "peanut")\n(join-with-space "i like peanut" "butter")\n(join-with-space "i like peanut butter" "and")\n(join-with-space "i like peanut butter and" "jelly")'],
0)),Oe=X.b(B([L,Me,Ne],0)),vc=O.a?O.a("sort-by"):O.call(null,"sort-by"),Pe=P.a?P.a(vc):P.call(null,vc),Qe=Y.b(B(["(sort-by val \x3e {:amy 3, :renee 5, :isabella 4})\n;;\x3d\x3e ([:renee 5] [:isabella 4] [:amy 3])"],0)),Re=X.b(B([L,Pe,Qe],0)),Se=Y.b(B(['(map (fn [x] (+ x x x)) [1 2 3]) ;\x3d\x3e [3 6 9]\n\n(reduce (fn [x y] (+ x y)) [1 2 3]) ;\x3d\x3e 6\n\n(reduce\n  (fn [s1 s2] (str s1 " " s2))\n  ["i" "like" "peanut" "butter" "and" "jelly"])\n  ;\x3d\x3e "i like peanut butter and jelly"'],0)),Te=
X.b(B([L,"Anonymous functions",Se],0)),wc=O.a?O.a("average"):O.call(null,"average"),Ue=S.f?S.f("Create a function called ",wc," that takes a vector of ","numbers and returns the average of those numbers."):S.call(null,"Create a function called ",wc," that takes a vector of ","numbers and returns the average of those numbers."),xc=O.a?O.a("reduce"):O.call(null,"reduce"),yc=O.a?O.a("count"):O.call(null,"count"),Ve=S.l?S.l("Hint: you will need to use ",xc," and ",yc,"."):S.call(null,"Hint: you will need to use ",
xc," and ",yc,"."),We=X.b(B([L,"Exercise: Find the average",Ue,Ve],0)),Xe=O.a?O.a("get-names"):O.call(null,"get-names"),Ye=Qk.b(B(["Create a function called ",Xe," that takes a ","vector of maps of people and returns a vector of their names."],0)),Ze=Y.b(B(['(get-names [{:first "Margaret" :last "Atwood"}\n            {:first "Doris" :last "Lessing"}\n            {:first "Ursula" :last "Le Guin"}\n            {:first "Alice" :last "Munro"}])\n\n;;\x3d\x3e ["Margaret Atwood" "Doris Lessing"\n;;    "Ursula Le Guin" "Alice Munro"]'],
0)),$e=X.b(B([L,"Exercise: Get the names of people",Ye,Ze],0)),zc=O.a?O.a("let"):O.call(null,"let"),af=P.a?P.a(zc):P.call(null,zc),bf=Y.b(B(['(defn spread\n  "Given a collection of numbers, return the difference between the largest and smallest number."\n  [numbers]\n    (let [largest (reduce max numbers)\n          smallest (reduce min numbers)]\n      (- largest smallest)))\n\n(spread [10 7 3 -3 8]) ;\x3d\x3e 13'],0)),cf=X.b(B([L,af,bf],0)),Ac=O.a?O.a("average"):O.call(null,"average"),Bc=O.a?O.a("let"):
O.call(null,"let"),df=S.n?S.n("Go back to the ",Ac," function you created before and ","use ",Bc," to make it easier to read."):S.call(null,"Go back to the ",Ac," function you created before and ","use ",Bc," to make it easier to read."),ef=X.b(B([L,"Exercise: Rewrite average",df],0)),ff=Nk.b(B([L,"Functions that take other functions",Fe,Ie,Le,Oe,Re,Te,We,$e,cf,ef],0));return Pk.b(B([mj,"mozilla-theme.css",a,be,pe,Ce,ff],0))}()));return Ek()});ea("tailrecursion.hoplon.app_pages._module1_DOT_html.hoploninit",function(){u.c(window.location.search,"?dev")&&(ci.b(B(["Autoreloading"],0)),Zk());pk.c?pk.c(ok.c?ok.c(I,wg):ok.call(null,I,wg),nk.c?nk.c(I,function(){var a=Ok.b(B([L,"Module 1"],0)),b=S.a?S.a("Clojure is simple and powerful."):S.call(null,"Clojure is simple and powerful."),c=S.a?S.a("Clojure is all-purpose."):S.call(null,"Clojure is all-purpose."),d=rk.a?rk.a("fun"):rk.call(null,"fun"),d=S.d?S.d("Clojure is ",d,"."):S.call(null,"Clojure is ",
d,"."),b=X.b(B([L,"Why Clojure?",b,c,d],0)),c=R.a?R.a("data processing"):R.call(null,"data processing"),d=R.a?R.a("concurrent applications"):R.call(null,"concurrent applications"),e=R.a?R.a("web applications"):R.call(null,"web applications"),f=R.a?R.a("everything!"):R.call(null,"everything!"),c=W.f?W.f(c,d,e,f):W.call(null,c,d,e,f),c=X.b(B([L,"What is Clojure good at?",c],0)),d=Sk.b(B(['(+ 3 4)\n(max 8 17 2)\n(eat "sandwich")'],0)),d=X.b(B([L,"What does Clojure look like?",d],0)),e=N.a?N.a("R"):N.call(null,
"R"),e=R.c?R.c(e,"ead"):R.call(null,e,"ead"),f=N.a?N.a("E"):N.call(null,"E"),f=R.c?R.c(f,"val"):R.call(null,f,"val"),h=N.a?N.a("P"):N.call(null,"P"),h=R.c?R.c(h,"rint"):R.call(null,h,"rint"),k=N.a?N.a("L"):N.call(null,"L"),k=R.c?R.c(k,"oop"):R.call(null,k,"oop"),e=W.f?W.f(e,f,h,k):W.call(null,e,f,h,k),e=Tk.b(B([Ti,40,e],0)),f=Q.c?Q.c(Yi,"img/instarepl.png"):Q.call(null,Yi,"img/instarepl.png"),f=Tk.b(B([f],0)),e=qk.c?qk.c(e,f):qk.call(null,e,f),e=X.b(B([L,"What is a REPL?",e],0)),b=Nk.b(B([L,"Introduction to Programming with Clojure",
b,c,d,e],0)),c=Rk.b(B(["numbers","strings","booleans","keywords"],0)),c=X.b(B([L,"Value types",c],0)),d=Sk.b(B([";; integers\n12\n-42\n\n;; floats\n10.5\n0.00000072725\n\n;; ratios\n1/2\n-7/3"],0)),d=X.b(B([L,"Numbers",d],0)),e=Sk.b(B(["(+ 1 1)  ;\x3d\x3e 1 + 1 \x3d 2\n(- 12 4) ;\x3d\x3e 12 - 4 \x3d 8\n(* 13 2) ;\x3d\x3e 13 * 2 \x3d 26\n(/ 27 9) ;\x3d\x3e 27 / 9 \x3d 3"],0)),e=X.b(B([L,"Arithmetic",e],0)),f=O.a?O.a("1 + 2 * 3 / 4 - 5"):O.call(null,"1 + 2 * 3 / 4 - 5"),f=Qk.b(B(["Infix: ",f],0)),h=
O.a?O.a("(- (+ 1 (/ (* 2 3) 4)) 5)"):O.call(null,"(- (+ 1 (/ (* 2 3) 4)) 5)"),h=Qk.b(B(["Prefix: ",h],0)),f=S.c?S.c(f,h):S.call(null,f,h),h=O.a?O.a("1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9"):O.call(null,"1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9"),h=Qk.b(B(["Infix: ",h],0)),k=O.a?O.a("(+ 1 2 3 4 5 6 7 8 9)"):O.call(null,"(+ 1 2 3 4 5 6 7 8 9)"),k=Qk.b(B(["Prefix: ",k],0)),h=S.c?S.c(h,k):S.call(null,h,k),f=X.b(B([L,"Infix vs. prefix notation",f,h],0)),h=Sk.b(B(["(+ 4/3 7/8)    ;\x3d\x3e 53/24\n(- 9 4.2 1/2)  ;\x3d\x3e 4.3\n(* 8 1/4)      ;\x3d\x3e 2\n(/ 27/2 1.5)   ;\x3d\x3e 3.0"],
0)),h=X.b(B([L,"Arithmetic with all number types",h],0)),k=R.a?R.a("Take your height in feet and inches and convert it to inches using arithmetic in Clojure."):R.call(null,"Take your height in feet and inches and convert it to inches using arithmetic in Clojure."),p=R.a?R.a("Then convert that to meters. There are 39.3701 inches in a meter."):R.call(null,"Then convert that to meters. There are 39.3701 inches in a meter."),t=R.a?R.a("Lastly, ask two people near you for their height in meters. Find the average of your heights."):
R.call(null,"Lastly, ask two people near you for their height in meters. Find the average of your heights."),v=S.a?S.a("Bonus: convert that average back to feet and inches."):S.call(null,"Bonus: convert that average back to feet and inches."),x=O.a?O.a("(mod x y)"):O.call(null,"(mod x y)"),x=S.c?S.c(x," will give you the remainder when dividing two numbers."):S.call(null,x," will give you the remainder when dividing two numbers."),v=R.c?R.c(v,x):R.call(null,v,x),k=W.f?W.f(k,p,t,v):W.call(null,k,p,
t,v),k=X.b(B([L,"Exercise: Basic arithmetic",k],0)),p=Sk.b(B([Si,"language-clojure",'"Hello world"\n"This is a longer string that I wrote for purposes of an example."\n"Aubrey said, \\"I think we should go to the Orange Julius.\\""'],0)),p=X.b(B([L,"Strings",p],0)),t=S.a?S.a("Answers to questions"):S.call(null,"Answers to questions"),v=Sk.b(B(["true\nfalse\nnil"],0)),t=X.b(B([L,"Booleans and nil",t,v],0)),c=Nk.b(B([L,"Simple values",c,d,e,f,h,k,p,t],0)),d=Sk.b(B(["(def apples 3)\n(def oranges 5)\n(+ apples oranges)"],
0)),d=X.b(B([L,"def",d],0)),e=O.a?O.a("my-hometown"):O.call(null,"my-hometown"),e=S.d?S.d("Write the name of your hometown as a string and then assign that string to the symbol ",e,"."):S.call(null,"Write the name of your hometown as a string and then assign that string to the symbol ",e,"."),e=X.b(B([L,"Exercise: Store the name of your hometown",e],0)),d=Nk.b(B([L,"Assigning names to values",d,e],0));return Pk.b(B([mj,"mozilla-theme.css",a,b,c,d],0))}()):nk.call(null,I,function(){var a=Ok.b(B([L,
"Module 1"],0)),b=S.a?S.a("Clojure is simple and powerful."):S.call(null,"Clojure is simple and powerful."),c=S.a?S.a("Clojure is all-purpose."):S.call(null,"Clojure is all-purpose."),d=rk.a?rk.a("fun"):rk.call(null,"fun"),d=S.d?S.d("Clojure is ",d,"."):S.call(null,"Clojure is ",d,"."),b=X.b(B([L,"Why Clojure?",b,c,d],0)),c=R.a?R.a("data processing"):R.call(null,"data processing"),d=R.a?R.a("concurrent applications"):R.call(null,"concurrent applications"),e=R.a?R.a("web applications"):R.call(null,
"web applications"),f=R.a?R.a("everything!"):R.call(null,"everything!"),c=W.f?W.f(c,d,e,f):W.call(null,c,d,e,f),c=X.b(B([L,"What is Clojure good at?",c],0)),d=Sk.b(B(['(+ 3 4)\n(max 8 17 2)\n(eat "sandwich")'],0)),d=X.b(B([L,"What does Clojure look like?",d],0)),e=N.a?N.a("R"):N.call(null,"R"),e=R.c?R.c(e,"ead"):R.call(null,e,"ead"),f=N.a?N.a("E"):N.call(null,"E"),f=R.c?R.c(f,"val"):R.call(null,f,"val"),h=N.a?N.a("P"):N.call(null,"P"),h=R.c?R.c(h,"rint"):R.call(null,h,"rint"),k=N.a?N.a("L"):N.call(null,
"L"),k=R.c?R.c(k,"oop"):R.call(null,k,"oop"),e=W.f?W.f(e,f,h,k):W.call(null,e,f,h,k),e=Tk.b(B([Ti,40,e],0)),f=Q.c?Q.c(Yi,"img/instarepl.png"):Q.call(null,Yi,"img/instarepl.png"),f=Tk.b(B([f],0)),e=qk.c?qk.c(e,f):qk.call(null,e,f),e=X.b(B([L,"What is a REPL?",e],0)),b=Nk.b(B([L,"Introduction to Programming with Clojure",b,c,d,e],0)),c=Rk.b(B(["numbers","strings","booleans","keywords"],0)),c=X.b(B([L,"Value types",c],0)),d=Sk.b(B([";; integers\n12\n-42\n\n;; floats\n10.5\n0.00000072725\n\n;; ratios\n1/2\n-7/3"],
0)),d=X.b(B([L,"Numbers",d],0)),e=Sk.b(B(["(+ 1 1)  ;\x3d\x3e 1 + 1 \x3d 2\n(- 12 4) ;\x3d\x3e 12 - 4 \x3d 8\n(* 13 2) ;\x3d\x3e 13 * 2 \x3d 26\n(/ 27 9) ;\x3d\x3e 27 / 9 \x3d 3"],0)),e=X.b(B([L,"Arithmetic",e],0)),f=O.a?O.a("1 + 2 * 3 / 4 - 5"):O.call(null,"1 + 2 * 3 / 4 - 5"),f=Qk.b(B(["Infix: ",f],0)),h=O.a?O.a("(- (+ 1 (/ (* 2 3) 4)) 5)"):O.call(null,"(- (+ 1 (/ (* 2 3) 4)) 5)"),h=Qk.b(B(["Prefix: ",h],0)),f=S.c?S.c(f,h):S.call(null,f,h),h=O.a?O.a("1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9"):O.call(null,
"1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9"),h=Qk.b(B(["Infix: ",h],0)),k=O.a?O.a("(+ 1 2 3 4 5 6 7 8 9)"):O.call(null,"(+ 1 2 3 4 5 6 7 8 9)"),k=Qk.b(B(["Prefix: ",k],0)),h=S.c?S.c(h,k):S.call(null,h,k),f=X.b(B([L,"Infix vs. prefix notation",f,h],0)),h=Sk.b(B(["(+ 4/3 7/8)    ;\x3d\x3e 53/24\n(- 9 4.2 1/2)  ;\x3d\x3e 4.3\n(* 8 1/4)      ;\x3d\x3e 2\n(/ 27/2 1.5)   ;\x3d\x3e 3.0"],0)),h=X.b(B([L,"Arithmetic with all number types",h],0)),k=R.a?R.a("Take your height in feet and inches and convert it to inches using arithmetic in Clojure."):
R.call(null,"Take your height in feet and inches and convert it to inches using arithmetic in Clojure."),p=R.a?R.a("Then convert that to meters. There are 39.3701 inches in a meter."):R.call(null,"Then convert that to meters. There are 39.3701 inches in a meter."),t=R.a?R.a("Lastly, ask two people near you for their height in meters. Find the average of your heights."):R.call(null,"Lastly, ask two people near you for their height in meters. Find the average of your heights."),v=S.a?S.a("Bonus: convert that average back to feet and inches."):
S.call(null,"Bonus: convert that average back to feet and inches."),x=O.a?O.a("(mod x y)"):O.call(null,"(mod x y)"),x=S.c?S.c(x," will give you the remainder when dividing two numbers."):S.call(null,x," will give you the remainder when dividing two numbers."),v=R.c?R.c(v,x):R.call(null,v,x),k=W.f?W.f(k,p,t,v):W.call(null,k,p,t,v),k=X.b(B([L,"Exercise: Basic arithmetic",k],0)),p=Sk.b(B([Si,"language-clojure",'"Hello world"\n"This is a longer string that I wrote for purposes of an example."\n"Aubrey said, \\"I think we should go to the Orange Julius.\\""'],
0)),p=X.b(B([L,"Strings",p],0)),t=S.a?S.a("Answers to questions"):S.call(null,"Answers to questions"),v=Sk.b(B(["true\nfalse\nnil"],0)),t=X.b(B([L,"Booleans and nil",t,v],0)),c=Nk.b(B([L,"Simple values",c,d,e,f,h,k,p,t],0)),d=Sk.b(B(["(def apples 3)\n(def oranges 5)\n(+ apples oranges)"],0)),d=X.b(B([L,"def",d],0)),e=O.a?O.a("my-hometown"):O.call(null,"my-hometown"),e=S.d?S.d("Write the name of your hometown as a string and then assign that string to the symbol ",e,"."):S.call(null,"Write the name of your hometown as a string and then assign that string to the symbol ",
e,"."),e=X.b(B([L,"Exercise: Store the name of your hometown",e],0)),d=Nk.b(B([L,"Assigning names to values",d,e],0));return Pk.b(B([mj,"mozilla-theme.css",a,b,c,d],0))}())):pk.call(null,ok.c?ok.c(I,wg):ok.call(null,I,wg),nk.c?nk.c(I,function(){var a=Ok.b(B([L,"Module 1"],0)),b=S.a?S.a("Clojure is simple and powerful."):S.call(null,"Clojure is simple and powerful."),c=S.a?S.a("Clojure is all-purpose."):S.call(null,"Clojure is all-purpose."),d=rk.a?rk.a("fun"):rk.call(null,"fun"),d=S.d?S.d("Clojure is ",
d,"."):S.call(null,"Clojure is ",d,"."),b=X.b(B([L,"Why Clojure?",b,c,d],0)),c=R.a?R.a("data processing"):R.call(null,"data processing"),d=R.a?R.a("concurrent applications"):R.call(null,"concurrent applications"),e=R.a?R.a("web applications"):R.call(null,"web applications"),f=R.a?R.a("everything!"):R.call(null,"everything!"),c=W.f?W.f(c,d,e,f):W.call(null,c,d,e,f),c=X.b(B([L,"What is Clojure good at?",c],0)),d=Sk.b(B(['(+ 3 4)\n(max 8 17 2)\n(eat "sandwich")'],0)),d=X.b(B([L,"What does Clojure look like?",
d],0)),e=N.a?N.a("R"):N.call(null,"R"),e=R.c?R.c(e,"ead"):R.call(null,e,"ead"),f=N.a?N.a("E"):N.call(null,"E"),f=R.c?R.c(f,"val"):R.call(null,f,"val"),h=N.a?N.a("P"):N.call(null,"P"),h=R.c?R.c(h,"rint"):R.call(null,h,"rint"),k=N.a?N.a("L"):N.call(null,"L"),k=R.c?R.c(k,"oop"):R.call(null,k,"oop"),e=W.f?W.f(e,f,h,k):W.call(null,e,f,h,k),e=Tk.b(B([Ti,40,e],0)),f=Q.c?Q.c(Yi,"img/instarepl.png"):Q.call(null,Yi,"img/instarepl.png"),f=Tk.b(B([f],0)),e=qk.c?qk.c(e,f):qk.call(null,e,f),e=X.b(B([L,"What is a REPL?",
e],0)),b=Nk.b(B([L,"Introduction to Programming with Clojure",b,c,d,e],0)),c=Rk.b(B(["numbers","strings","booleans","keywords"],0)),c=X.b(B([L,"Value types",c],0)),d=Sk.b(B([";; integers\n12\n-42\n\n;; floats\n10.5\n0.00000072725\n\n;; ratios\n1/2\n-7/3"],0)),d=X.b(B([L,"Numbers",d],0)),e=Sk.b(B(["(+ 1 1)  ;\x3d\x3e 1 + 1 \x3d 2\n(- 12 4) ;\x3d\x3e 12 - 4 \x3d 8\n(* 13 2) ;\x3d\x3e 13 * 2 \x3d 26\n(/ 27 9) ;\x3d\x3e 27 / 9 \x3d 3"],0)),e=X.b(B([L,"Arithmetic",e],0)),f=O.a?O.a("1 + 2 * 3 / 4 - 5"):
O.call(null,"1 + 2 * 3 / 4 - 5"),f=Qk.b(B(["Infix: ",f],0)),h=O.a?O.a("(- (+ 1 (/ (* 2 3) 4)) 5)"):O.call(null,"(- (+ 1 (/ (* 2 3) 4)) 5)"),h=Qk.b(B(["Prefix: ",h],0)),f=S.c?S.c(f,h):S.call(null,f,h),h=O.a?O.a("1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9"):O.call(null,"1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9"),h=Qk.b(B(["Infix: ",h],0)),k=O.a?O.a("(+ 1 2 3 4 5 6 7 8 9)"):O.call(null,"(+ 1 2 3 4 5 6 7 8 9)"),k=Qk.b(B(["Prefix: ",k],0)),h=S.c?S.c(h,k):S.call(null,h,k),f=X.b(B([L,"Infix vs. prefix notation",f,h],0)),
h=Sk.b(B(["(+ 4/3 7/8)    ;\x3d\x3e 53/24\n(- 9 4.2 1/2)  ;\x3d\x3e 4.3\n(* 8 1/4)      ;\x3d\x3e 2\n(/ 27/2 1.5)   ;\x3d\x3e 3.0"],0)),h=X.b(B([L,"Arithmetic with all number types",h],0)),k=R.a?R.a("Take your height in feet and inches and convert it to inches using arithmetic in Clojure."):R.call(null,"Take your height in feet and inches and convert it to inches using arithmetic in Clojure."),p=R.a?R.a("Then convert that to meters. There are 39.3701 inches in a meter."):R.call(null,"Then convert that to meters. There are 39.3701 inches in a meter."),
t=R.a?R.a("Lastly, ask two people near you for their height in meters. Find the average of your heights."):R.call(null,"Lastly, ask two people near you for their height in meters. Find the average of your heights."),v=S.a?S.a("Bonus: convert that average back to feet and inches."):S.call(null,"Bonus: convert that average back to feet and inches."),x=O.a?O.a("(mod x y)"):O.call(null,"(mod x y)"),x=S.c?S.c(x," will give you the remainder when dividing two numbers."):S.call(null,x," will give you the remainder when dividing two numbers."),
v=R.c?R.c(v,x):R.call(null,v,x),k=W.f?W.f(k,p,t,v):W.call(null,k,p,t,v),k=X.b(B([L,"Exercise: Basic arithmetic",k],0)),p=Sk.b(B([Si,"language-clojure",'"Hello world"\n"This is a longer string that I wrote for purposes of an example."\n"Aubrey said, \\"I think we should go to the Orange Julius.\\""'],0)),p=X.b(B([L,"Strings",p],0)),t=S.a?S.a("Answers to questions"):S.call(null,"Answers to questions"),v=Sk.b(B(["true\nfalse\nnil"],0)),t=X.b(B([L,"Booleans and nil",t,v],0)),c=Nk.b(B([L,"Simple values",
c,d,e,f,h,k,p,t],0)),d=Sk.b(B(["(def apples 3)\n(def oranges 5)\n(+ apples oranges)"],0)),d=X.b(B([L,"def",d],0)),e=O.a?O.a("my-hometown"):O.call(null,"my-hometown"),e=S.d?S.d("Write the name of your hometown as a string and then assign that string to the symbol ",e,"."):S.call(null,"Write the name of your hometown as a string and then assign that string to the symbol ",e,"."),e=X.b(B([L,"Exercise: Store the name of your hometown",e],0)),d=Nk.b(B([L,"Assigning names to values",d,e],0));return Pk.b(B([mj,
"mozilla-theme.css",a,b,c,d],0))}()):nk.call(null,I,function(){var a=Ok.b(B([L,"Module 1"],0)),b=S.a?S.a("Clojure is simple and powerful."):S.call(null,"Clojure is simple and powerful."),c=S.a?S.a("Clojure is all-purpose."):S.call(null,"Clojure is all-purpose."),d=rk.a?rk.a("fun"):rk.call(null,"fun"),d=S.d?S.d("Clojure is ",d,"."):S.call(null,"Clojure is ",d,"."),b=X.b(B([L,"Why Clojure?",b,c,d],0)),c=R.a?R.a("data processing"):R.call(null,"data processing"),d=R.a?R.a("concurrent applications"):R.call(null,
"concurrent applications"),e=R.a?R.a("web applications"):R.call(null,"web applications"),f=R.a?R.a("everything!"):R.call(null,"everything!"),c=W.f?W.f(c,d,e,f):W.call(null,c,d,e,f),c=X.b(B([L,"What is Clojure good at?",c],0)),d=Sk.b(B(['(+ 3 4)\n(max 8 17 2)\n(eat "sandwich")'],0)),d=X.b(B([L,"What does Clojure look like?",d],0)),e=N.a?N.a("R"):N.call(null,"R"),e=R.c?R.c(e,"ead"):R.call(null,e,"ead"),f=N.a?N.a("E"):N.call(null,"E"),f=R.c?R.c(f,"val"):R.call(null,f,"val"),h=N.a?N.a("P"):N.call(null,
"P"),h=R.c?R.c(h,"rint"):R.call(null,h,"rint"),k=N.a?N.a("L"):N.call(null,"L"),k=R.c?R.c(k,"oop"):R.call(null,k,"oop"),e=W.f?W.f(e,f,h,k):W.call(null,e,f,h,k),e=Tk.b(B([Ti,40,e],0)),f=Q.c?Q.c(Yi,"img/instarepl.png"):Q.call(null,Yi,"img/instarepl.png"),f=Tk.b(B([f],0)),e=qk.c?qk.c(e,f):qk.call(null,e,f),e=X.b(B([L,"What is a REPL?",e],0)),b=Nk.b(B([L,"Introduction to Programming with Clojure",b,c,d,e],0)),c=Rk.b(B(["numbers","strings","booleans","keywords"],0)),c=X.b(B([L,"Value types",c],0)),d=Sk.b(B([";; integers\n12\n-42\n\n;; floats\n10.5\n0.00000072725\n\n;; ratios\n1/2\n-7/3"],
0)),d=X.b(B([L,"Numbers",d],0)),e=Sk.b(B(["(+ 1 1)  ;\x3d\x3e 1 + 1 \x3d 2\n(- 12 4) ;\x3d\x3e 12 - 4 \x3d 8\n(* 13 2) ;\x3d\x3e 13 * 2 \x3d 26\n(/ 27 9) ;\x3d\x3e 27 / 9 \x3d 3"],0)),e=X.b(B([L,"Arithmetic",e],0)),f=O.a?O.a("1 + 2 * 3 / 4 - 5"):O.call(null,"1 + 2 * 3 / 4 - 5"),f=Qk.b(B(["Infix: ",f],0)),h=O.a?O.a("(- (+ 1 (/ (* 2 3) 4)) 5)"):O.call(null,"(- (+ 1 (/ (* 2 3) 4)) 5)"),h=Qk.b(B(["Prefix: ",h],0)),f=S.c?S.c(f,h):S.call(null,f,h),h=O.a?O.a("1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9"):O.call(null,
"1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9"),h=Qk.b(B(["Infix: ",h],0)),k=O.a?O.a("(+ 1 2 3 4 5 6 7 8 9)"):O.call(null,"(+ 1 2 3 4 5 6 7 8 9)"),k=Qk.b(B(["Prefix: ",k],0)),h=S.c?S.c(h,k):S.call(null,h,k),f=X.b(B([L,"Infix vs. prefix notation",f,h],0)),h=Sk.b(B(["(+ 4/3 7/8)    ;\x3d\x3e 53/24\n(- 9 4.2 1/2)  ;\x3d\x3e 4.3\n(* 8 1/4)      ;\x3d\x3e 2\n(/ 27/2 1.5)   ;\x3d\x3e 3.0"],0)),h=X.b(B([L,"Arithmetic with all number types",h],0)),k=R.a?R.a("Take your height in feet and inches and convert it to inches using arithmetic in Clojure."):
R.call(null,"Take your height in feet and inches and convert it to inches using arithmetic in Clojure."),p=R.a?R.a("Then convert that to meters. There are 39.3701 inches in a meter."):R.call(null,"Then convert that to meters. There are 39.3701 inches in a meter."),t=R.a?R.a("Lastly, ask two people near you for their height in meters. Find the average of your heights."):R.call(null,"Lastly, ask two people near you for their height in meters. Find the average of your heights."),v=S.a?S.a("Bonus: convert that average back to feet and inches."):
S.call(null,"Bonus: convert that average back to feet and inches."),x=O.a?O.a("(mod x y)"):O.call(null,"(mod x y)"),x=S.c?S.c(x," will give you the remainder when dividing two numbers."):S.call(null,x," will give you the remainder when dividing two numbers."),v=R.c?R.c(v,x):R.call(null,v,x),k=W.f?W.f(k,p,t,v):W.call(null,k,p,t,v),k=X.b(B([L,"Exercise: Basic arithmetic",k],0)),p=Sk.b(B([Si,"language-clojure",'"Hello world"\n"This is a longer string that I wrote for purposes of an example."\n"Aubrey said, \\"I think we should go to the Orange Julius.\\""'],
0)),p=X.b(B([L,"Strings",p],0)),t=S.a?S.a("Answers to questions"):S.call(null,"Answers to questions"),v=Sk.b(B(["true\nfalse\nnil"],0)),t=X.b(B([L,"Booleans and nil",t,v],0)),c=Nk.b(B([L,"Simple values",c,d,e,f,h,k,p,t],0)),d=Sk.b(B(["(def apples 3)\n(def oranges 5)\n(+ apples oranges)"],0)),d=X.b(B([L,"def",d],0)),e=O.a?O.a("my-hometown"):O.call(null,"my-hometown"),e=S.d?S.d("Write the name of your hometown as a string and then assign that string to the symbol ",e,"."):S.call(null,"Write the name of your hometown as a string and then assign that string to the symbol ",
e,"."),e=X.b(B([L,"Exercise: Store the name of your hometown",e],0)),d=Nk.b(B([L,"Assigning names to values",d,e],0));return Pk.b(B([mj,"mozilla-theme.css",a,b,c,d],0))}()));return Ek()});