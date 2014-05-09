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
b&&"undefined"==typeof a.call)return"object";return b}var ca="closure_uid_"+(1E9*Math.random()>>>0),da=0;function ea(a,b){var c=a.split("."),d=aa;c[0]in d||!d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===b?d=d[e]?d[e]:d[e]={}:d[e]=b};function fa(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c),b%=4294967296;return b};function ga(a,b){for(var c in a)b.call(void 0,a[c],c,a)};function ha(a,b){null!=a&&this.append.apply(this,arguments)}ha.prototype.Fa="";ha.prototype.append=function(a,b,c){this.Fa+=a;if(null!=b)for(var d=1;d<arguments.length;d++)this.Fa+=arguments[d];return this};ha.prototype.toString=function(){return this.Fa};var ja;function ka(){throw Error("No *print-fn* fn set for evaluation environment");}var la=null;function ma(){return new na(null,5,[pa,!0,qa,!0,ra,!1,sa,!1,ta,null],null)}function k(a){return null!=a&&!1!==a}function ua(a){return k(a)?!1:!0}function va(a,b){return a[ba(null==b?null:b)]?!0:a._?!0:m?!1:null}function wa(a){return null==a?null:a.constructor}function ya(a,b){var c=wa(b),c=k(k(c)?c.Qb:c)?c.Ob:ba(b);return Error(["No protocol method ",a," defined for type ",c,": ",b].join(""))}
function za(a){var b=a.Ob;return k(b)?b:""+p(a)}function Aa(a){for(var b=a.length,c=Array(b),d=0;;)if(d<b)c[d]=a[d],d+=1;else break;return c}var Ca={},Da={};function Ea(a){if(a?a.J:a)return a.J(a);var b;b=Ea[ba(null==a?null:a)];if(!b&&(b=Ea._,!b))throw ya("ICounted.-count",a);return b.call(null,a)}function Fa(a){if(a?a.I:a)return a.I(a);var b;b=Fa[ba(null==a?null:a)];if(!b&&(b=Fa._,!b))throw ya("IEmptyableCollection.-empty",a);return b.call(null,a)}var Ga={};
function Ha(a,b){if(a?a.D:a)return a.D(a,b);var c;c=Ha[ba(null==a?null:a)];if(!c&&(c=Ha._,!c))throw ya("ICollection.-conj",a);return c.call(null,a,b)}
var Ia={},q=function(){function a(a,b,c){if(a?a.$:a)return a.$(a,b,c);var h;h=q[ba(null==a?null:a)];if(!h&&(h=q._,!h))throw ya("IIndexed.-nth",a);return h.call(null,a,b,c)}function b(a,b){if(a?a.s:a)return a.s(a,b);var c;c=q[ba(null==a?null:a)];if(!c&&(c=q._,!c))throw ya("IIndexed.-nth",a);return c.call(null,a,b)}var c=null,c=function(c,e,g){switch(arguments.length){case 2:return b.call(this,c,e);case 3:return a.call(this,c,e,g)}throw Error("Invalid arity: "+arguments.length);};c.c=b;c.d=a;return c}(),
Ja={};function La(a){if(a?a.P:a)return a.P(a);var b;b=La[ba(null==a?null:a)];if(!b&&(b=La._,!b))throw ya("ISeq.-first",a);return b.call(null,a)}function Ma(a){if(a?a.V:a)return a.V(a);var b;b=Ma[ba(null==a?null:a)];if(!b&&(b=Ma._,!b))throw ya("ISeq.-rest",a);return b.call(null,a)}
var Na={},Pa={},Ra=function(){function a(a,b,c){if(a?a.B:a)return a.B(a,b,c);var h;h=Ra[ba(null==a?null:a)];if(!h&&(h=Ra._,!h))throw ya("ILookup.-lookup",a);return h.call(null,a,b,c)}function b(a,b){if(a?a.A:a)return a.A(a,b);var c;c=Ra[ba(null==a?null:a)];if(!c&&(c=Ra._,!c))throw ya("ILookup.-lookup",a);return c.call(null,a,b)}var c=null,c=function(c,e,g){switch(arguments.length){case 2:return b.call(this,c,e);case 3:return a.call(this,c,e,g)}throw Error("Invalid arity: "+arguments.length);};c.c=
b;c.d=a;return c}();function Sa(a,b){if(a?a.Ia:a)return a.Ia(a,b);var c;c=Sa[ba(null==a?null:a)];if(!c&&(c=Sa._,!c))throw ya("IAssociative.-contains-key?",a);return c.call(null,a,b)}function Ta(a,b,c){if(a?a.qa:a)return a.qa(a,b,c);var d;d=Ta[ba(null==a?null:a)];if(!d&&(d=Ta._,!d))throw ya("IAssociative.-assoc",a);return d.call(null,a,b,c)}var Ua={};function Va(a,b){if(a?a.Ka:a)return a.Ka(a,b);var c;c=Va[ba(null==a?null:a)];if(!c&&(c=Va._,!c))throw ya("IMap.-dissoc",a);return c.call(null,a,b)}
var Wa={};function Xa(a){if(a?a.La:a)return a.La(a);var b;b=Xa[ba(null==a?null:a)];if(!b&&(b=Xa._,!b))throw ya("IMapEntry.-key",a);return b.call(null,a)}function Ya(a){if(a?a.ab:a)return a.ab(a);var b;b=Ya[ba(null==a?null:a)];if(!b&&(b=Ya._,!b))throw ya("IMapEntry.-val",a);return b.call(null,a)}var $a={};function ab(a,b){if(a?a.Lb:a)return a.Lb(0,b);var c;c=ab[ba(null==a?null:a)];if(!c&&(c=ab._,!c))throw ya("ISet.-disjoin",a);return c.call(null,a,b)}
function bb(a){if(a?a.ra:a)return a.ra(a);var b;b=bb[ba(null==a?null:a)];if(!b&&(b=bb._,!b))throw ya("IStack.-peek",a);return b.call(null,a)}function cb(a){if(a?a.sa:a)return a.sa(a);var b;b=cb[ba(null==a?null:a)];if(!b&&(b=cb._,!b))throw ya("IStack.-pop",a);return b.call(null,a)}var db={};function eb(a,b,c){if(a?a.Da:a)return a.Da(a,b,c);var d;d=eb[ba(null==a?null:a)];if(!d&&(d=eb._,!d))throw ya("IVector.-assoc-n",a);return d.call(null,a,b,c)}
function fb(a){if(a?a.Gb:a)return a.state;var b;b=fb[ba(null==a?null:a)];if(!b&&(b=fb._,!b))throw ya("IDeref.-deref",a);return b.call(null,a)}var gb={};function hb(a){if(a?a.C:a)return a.C(a);var b;b=hb[ba(null==a?null:a)];if(!b&&(b=hb._,!b))throw ya("IMeta.-meta",a);return b.call(null,a)}var ib={};function jb(a,b){if(a?a.G:a)return a.G(a,b);var c;c=jb[ba(null==a?null:a)];if(!c&&(c=jb._,!c))throw ya("IWithMeta.-with-meta",a);return c.call(null,a,b)}
var kb={},lb=function(){function a(a,b,c){if(a?a.O:a)return a.O(a,b,c);var h;h=lb[ba(null==a?null:a)];if(!h&&(h=lb._,!h))throw ya("IReduce.-reduce",a);return h.call(null,a,b,c)}function b(a,b){if(a?a.N:a)return a.N(a,b);var c;c=lb[ba(null==a?null:a)];if(!c&&(c=lb._,!c))throw ya("IReduce.-reduce",a);return c.call(null,a,b)}var c=null,c=function(c,e,g){switch(arguments.length){case 2:return b.call(this,c,e);case 3:return a.call(this,c,e,g)}throw Error("Invalid arity: "+arguments.length);};c.c=b;c.d=
a;return c}();function mb(a,b){if(a?a.u:a)return a.u(a,b);var c;c=mb[ba(null==a?null:a)];if(!c&&(c=mb._,!c))throw ya("IEquiv.-equiv",a);return c.call(null,a,b)}function nb(a){if(a?a.v:a)return a.v(a);var b;b=nb[ba(null==a?null:a)];if(!b&&(b=nb._,!b))throw ya("IHash.-hash",a);return b.call(null,a)}var ob={};function pb(a){if(a?a.F:a)return a.F(a);var b;b=pb[ba(null==a?null:a)];if(!b&&(b=pb._,!b))throw ya("ISeqable.-seq",a);return b.call(null,a)}var qb={},rb={};
function sb(a){if(a?a.Ma:a)return a.Ma(a);var b;b=sb[ba(null==a?null:a)];if(!b&&(b=sb._,!b))throw ya("IReversible.-rseq",a);return b.call(null,a)}function tb(a,b){if(a?a.vb:a)return a.vb(a,b);var c;c=tb[ba(null==a?null:a)];if(!c&&(c=tb._,!c))throw ya("ISorted.-sorted-seq",a);return c.call(null,a,b)}function ub(a,b,c){if(a?a.wb:a)return a.wb(a,b,c);var d;d=ub[ba(null==a?null:a)];if(!d&&(d=ub._,!d))throw ya("ISorted.-sorted-seq-from",a);return d.call(null,a,b,c)}
function vb(a,b){if(a?a.ub:a)return a.ub(a,b);var c;c=vb[ba(null==a?null:a)];if(!c&&(c=vb._,!c))throw ya("ISorted.-entry-key",a);return c.call(null,a,b)}function wb(a){if(a?a.tb:a)return a.tb(a);var b;b=wb[ba(null==a?null:a)];if(!b&&(b=wb._,!b))throw ya("ISorted.-comparator",a);return b.call(null,a)}function xb(a,b){if(a?a.Nb:a)return a.Nb(0,b);var c;c=xb[ba(null==a?null:a)];if(!c&&(c=xb._,!c))throw ya("IWriter.-write",a);return c.call(null,a,b)}var yb={};
function zb(a,b,c){if(a?a.t:a)return a.t(a,b,c);var d;d=zb[ba(null==a?null:a)];if(!d&&(d=zb._,!d))throw ya("IPrintWithWriter.-pr-writer",a);return d.call(null,a,b,c)}function Ab(a,b,c){if(a?a.yb:a)return a.yb(a,b,c);var d;d=Ab[ba(null==a?null:a)];if(!d&&(d=Ab._,!d))throw ya("IWatchable.-notify-watches",a);return d.call(null,a,b,c)}function Bb(a,b,c){if(a?a.xb:a)return a.xb(a,b,c);var d;d=Bb[ba(null==a?null:a)];if(!d&&(d=Bb._,!d))throw ya("IWatchable.-add-watch",a);return d.call(null,a,b,c)}
function Cb(a){if(a?a.Ja:a)return a.Ja(a);var b;b=Cb[ba(null==a?null:a)];if(!b&&(b=Cb._,!b))throw ya("IEditableCollection.-as-transient",a);return b.call(null,a)}function Db(a,b){if(a?a.Pa:a)return a.Pa(a,b);var c;c=Db[ba(null==a?null:a)];if(!c&&(c=Db._,!c))throw ya("ITransientCollection.-conj!",a);return c.call(null,a,b)}function Eb(a){if(a?a.Qa:a)return a.Qa(a);var b;b=Eb[ba(null==a?null:a)];if(!b&&(b=Eb._,!b))throw ya("ITransientCollection.-persistent!",a);return b.call(null,a)}
function Fb(a,b,c){if(a?a.Oa:a)return a.Oa(a,b,c);var d;d=Fb[ba(null==a?null:a)];if(!d&&(d=Fb._,!d))throw ya("ITransientAssociative.-assoc!",a);return d.call(null,a,b,c)}function Gb(a,b,c){if(a?a.Mb:a)return a.Mb(0,b,c);var d;d=Gb[ba(null==a?null:a)];if(!d&&(d=Gb._,!d))throw ya("ITransientVector.-assoc-n!",a);return d.call(null,a,b,c)}function Hb(a){if(a?a.Fb:a)return a.Fb();var b;b=Hb[ba(null==a?null:a)];if(!b&&(b=Hb._,!b))throw ya("IChunk.-drop-first",a);return b.call(null,a)}
function Ib(a){if(a?a.hb:a)return a.hb(a);var b;b=Ib[ba(null==a?null:a)];if(!b&&(b=Ib._,!b))throw ya("IChunkedSeq.-chunked-first",a);return b.call(null,a)}function Jb(a){if(a?a.ib:a)return a.ib(a);var b;b=Jb[ba(null==a?null:a)];if(!b&&(b=Jb._,!b))throw ya("IChunkedSeq.-chunked-rest",a);return b.call(null,a)}function Kb(a){if(a?a.gb:a)return a.gb(a);var b;b=Kb[ba(null==a?null:a)];if(!b&&(b=Kb._,!b))throw ya("IChunkedNext.-chunked-next",a);return b.call(null,a)}
function Lb(a){this.gc=a;this.p=0;this.l=1073741824}Lb.prototype.Nb=function(a,b){return this.gc.append(b)};function Mb(a){var b=new ha;a.t(null,new Lb(b),ma());return""+p(b)}function lc(a,b){if(k(mc.c?mc.c(a,b):mc.call(null,a,b)))return 0;var c=ua(a.Y);if(k(c?b.Y:c))return-1;if(k(a.Y)){if(ua(b.Y))return 1;c=nc.c?nc.c(a.Y,b.Y):nc.call(null,a.Y,b.Y);return 0===c?nc.c?nc.c(a.name,b.name):nc.call(null,a.name,b.name):c}return oc?nc.c?nc.c(a.name,b.name):nc.call(null,a.name,b.name):null}
function pc(a,b,c,d,e){this.Y=a;this.name=b;this.Ba=c;this.Ca=d;this.fa=e;this.l=2154168321;this.p=4096}f=pc.prototype;f.t=function(a,b){return xb(b,this.Ba)};f.v=function(){var a=this.Ca;return null!=a?a:this.Ca=a=qc.c?qc.c(rc.a?rc.a(this.Y):rc.call(null,this.Y),rc.a?rc.a(this.name):rc.call(null,this.name)):qc.call(null,rc.a?rc.a(this.Y):rc.call(null,this.Y),rc.a?rc.a(this.name):rc.call(null,this.name))};f.G=function(a,b){return new pc(this.Y,this.name,this.Ba,this.Ca,b)};f.C=function(){return this.fa};
f.call=function(){var a=null;return a=function(a,c,d){switch(arguments.length){case 2:return Ra.d(c,this,null);case 3:return Ra.d(c,this,d)}throw Error("Invalid arity: "+arguments.length);}}();f.apply=function(a,b){return this.call.apply(this,[this].concat(Aa(b)))};f.a=function(a){return Ra.d(a,this,null)};f.c=function(a,b){return Ra.d(a,this,b)};f.u=function(a,b){return b instanceof pc?this.Ba===b.Ba:!1};f.toString=function(){return this.Ba};
var sc=function(){function a(a,b){var c=null!=a?[p(a),p("/"),p(b)].join(""):b;return new pc(a,b,c,null,null)}function b(a){return a instanceof pc?a:c.c(null,a)}var c=null,c=function(c,e){switch(arguments.length){case 1:return b.call(this,c);case 2:return a.call(this,c,e)}throw Error("Invalid arity: "+arguments.length);};c.a=b;c.c=a;return c}();
function r(a){if(null==a)return null;if(a&&(a.l&8388608||a.pc))return a.F(null);if(a instanceof Array||"string"===typeof a)return 0===a.length?null:new tc(a,0);if(va(ob,a))return pb(a);if(m)throw Error([p(a),p("is not ISeqable")].join(""));return null}function s(a){if(null==a)return null;if(a&&(a.l&64||a.Na))return a.P(null);a=r(a);return null==a?null:La(a)}function v(a){return null!=a?a&&(a.l&64||a.Na)?a.V(null):(a=r(a))?Ma(a):uc:uc}
function w(a){return null==a?null:a&&(a.l&128||a.Kb)?a.ba(null):r(v(a))}
var mc=function(){function a(a,b){return null==a?null==b:a===b||mb(a,b)}var b=null,c=function(){function a(b,d,l){var n=null;2<arguments.length&&(n=x(Array.prototype.slice.call(arguments,2),0));return c.call(this,b,d,n)}function c(a,d,e){for(;;)if(b.c(a,d))if(w(e))a=d,d=s(e),e=w(e);else return b.c(d,s(e));else return!1}a.j=2;a.g=function(a){var b=s(a);a=w(a);var d=s(a);a=v(a);return c(b,d,a)};a.b=c;return a}(),b=function(b,e,g){switch(arguments.length){case 1:return!0;case 2:return a.call(this,b,
e);default:return c.b(b,e,x(arguments,2))}throw Error("Invalid arity: "+arguments.length);};b.j=2;b.g=c.g;b.a=function(){return!0};b.c=a;b.b=c.b;return b}();Da["null"]=!0;Ea["null"]=function(){return 0};Date.prototype.u=function(a,b){return b instanceof Date&&this.toString()===b.toString()};mb.number=function(a,b){return a===b};gb["function"]=!0;hb["function"]=function(){return null};Ca["function"]=!0;nb._=function(a){return a[ca]||(a[ca]=++da)};function wc(a){return a+1}
var xc=function(){function a(a,b,c,d){for(var n=Ea(a);;)if(d<n)c=b.c?b.c(c,q.c(a,d)):b.call(null,c,q.c(a,d)),d+=1;else return c}function b(a,b,c){for(var d=Ea(a),n=0;;)if(n<d)c=b.c?b.c(c,q.c(a,n)):b.call(null,c,q.c(a,n)),n+=1;else return c}function c(a,b){var c=Ea(a);if(0===c)return b.q?b.q():b.call(null);for(var d=q.c(a,0),n=1;;)if(n<c)d=b.c?b.c(d,q.c(a,n)):b.call(null,d,q.c(a,n)),n+=1;else return d}var d=null,d=function(d,g,h,l){switch(arguments.length){case 2:return c.call(this,d,g);case 3:return b.call(this,
d,g,h);case 4:return a.call(this,d,g,h,l)}throw Error("Invalid arity: "+arguments.length);};d.c=c;d.d=b;d.e=a;return d}(),yc=function(){function a(a,b,c,d){for(var n=a.length;;)if(d<n)c=b.c?b.c(c,a[d]):b.call(null,c,a[d]),d+=1;else return c}function b(a,b,c){for(var d=a.length,n=0;;)if(n<d)c=b.c?b.c(c,a[n]):b.call(null,c,a[n]),n+=1;else return c}function c(a,b){var c=a.length;if(0===a.length)return b.q?b.q():b.call(null);for(var d=a[0],n=1;;)if(n<c)d=b.c?b.c(d,a[n]):b.call(null,d,a[n]),n+=1;else return d}
var d=null,d=function(d,g,h,l){switch(arguments.length){case 2:return c.call(this,d,g);case 3:return b.call(this,d,g,h);case 4:return a.call(this,d,g,h,l)}throw Error("Invalid arity: "+arguments.length);};d.c=c;d.d=b;d.e=a;return d}();function zc(a){return a?a.l&2||a.Tb?!0:a.l?!1:va(Da,a):va(Da,a)}function Ac(a){return a?a.l&16||a.Hb?!0:a.l?!1:va(Ia,a):va(Ia,a)}function tc(a,b){this.f=a;this.o=b;this.l=166199550;this.p=8192}f=tc.prototype;f.v=function(){return Bc.a?Bc.a(this):Bc.call(null,this)};
f.ba=function(){return this.o+1<this.f.length?new tc(this.f,this.o+1):null};f.D=function(a,b){return z.c?z.c(b,this):z.call(null,b,this)};f.Ma=function(){var a=Ea(this);return 0<a?new Cc(this,a-1,null):null};f.toString=function(){return Mb(this)};f.N=function(a,b){return yc.e(this.f,b,this.f[this.o],this.o+1)};f.O=function(a,b,c){return yc.e(this.f,b,c,this.o)};f.F=function(){return this};f.J=function(){return this.f.length-this.o};f.P=function(){return this.f[this.o]};
f.V=function(){return this.o+1<this.f.length?new tc(this.f,this.o+1):uc};f.u=function(a,b){return Dc.c?Dc.c(this,b):Dc.call(null,this,b)};f.s=function(a,b){var c=b+this.o;return c<this.f.length?this.f[c]:null};f.$=function(a,b,c){a=b+this.o;return a<this.f.length?this.f[a]:c};f.I=function(){return uc};
var Ec=function(){function a(a,b){return b<a.length?new tc(a,b):null}function b(a){return c.c(a,0)}var c=null,c=function(c,e){switch(arguments.length){case 1:return b.call(this,c);case 2:return a.call(this,c,e)}throw Error("Invalid arity: "+arguments.length);};c.a=b;c.c=a;return c}(),x=function(){function a(a,b){return Ec.c(a,b)}function b(a){return Ec.c(a,0)}var c=null,c=function(c,e){switch(arguments.length){case 1:return b.call(this,c);case 2:return a.call(this,c,e)}throw Error("Invalid arity: "+
arguments.length);};c.a=b;c.c=a;return c}();function Cc(a,b,c){this.fb=a;this.o=b;this.i=c;this.l=32374862;this.p=8192}f=Cc.prototype;f.v=function(){return Bc.a?Bc.a(this):Bc.call(null,this)};f.D=function(a,b){return z.c?z.c(b,this):z.call(null,b,this)};f.toString=function(){return Mb(this)};f.N=function(a,b){return Fc.c?Fc.c(b,this):Fc.call(null,b,this)};f.O=function(a,b,c){return Fc.d?Fc.d(b,c,this):Fc.call(null,b,c,this)};f.F=function(){return this};f.J=function(){return this.o+1};
f.P=function(){return q.c(this.fb,this.o)};f.V=function(){return 0<this.o?new Cc(this.fb,this.o-1,null):null};f.u=function(a,b){return Dc.c?Dc.c(this,b):Dc.call(null,this,b)};f.G=function(a,b){return new Cc(this.fb,this.o,b)};f.C=function(){return this.i};f.I=function(){return Gc.c?Gc.c(uc,this.i):Gc.call(null,uc,this.i)};mb._=function(a,b){return a===b};
var Hc=function(){function a(a,b){return null!=a?Ha(a,b):Ha(uc,b)}var b=null,c=function(){function a(b,d,l){var n=null;2<arguments.length&&(n=x(Array.prototype.slice.call(arguments,2),0));return c.call(this,b,d,n)}function c(a,d,e){for(;;)if(k(e))a=b.c(a,d),d=s(e),e=w(e);else return b.c(a,d)}a.j=2;a.g=function(a){var b=s(a);a=w(a);var d=s(a);a=v(a);return c(b,d,a)};a.b=c;return a}(),b=function(b,e,g){switch(arguments.length){case 2:return a.call(this,b,e);default:return c.b(b,e,x(arguments,2))}throw Error("Invalid arity: "+
arguments.length);};b.j=2;b.g=c.g;b.c=a;b.b=c.b;return b}();function A(a){if(null!=a)if(a&&(a.l&2||a.Tb))a=a.J(null);else if(a instanceof Array)a=a.length;else if("string"===typeof a)a=a.length;else if(va(Da,a))a=Ea(a);else if(m)a:{a=r(a);for(var b=0;;){if(zc(a)){a=b+Ea(a);break a}a=w(a);b+=1}a=void 0}else a=null;else a=0;return a}
var Ic=function(){function a(a,b,c){for(;;){if(null==a)return c;if(0===b)return r(a)?s(a):c;if(Ac(a))return q.d(a,b,c);if(r(a))a=w(a),b-=1;else return m?c:null}}function b(a,b){for(;;){if(null==a)throw Error("Index out of bounds");if(0===b){if(r(a))return s(a);throw Error("Index out of bounds");}if(Ac(a))return q.c(a,b);if(r(a)){var c=w(a),h=b-1;a=c;b=h}else{if(m)throw Error("Index out of bounds");return null}}}var c=null,c=function(c,e,g){switch(arguments.length){case 2:return b.call(this,c,e);case 3:return a.call(this,
c,e,g)}throw Error("Invalid arity: "+arguments.length);};c.c=b;c.d=a;return c}(),B=function(){function a(a,b,c){if(null!=a){if(a&&(a.l&16||a.Hb))return a.$(null,b,c);if(a instanceof Array||"string"===typeof a)return b<a.length?a[b]:c;if(va(Ia,a))return q.c(a,b);if(m){if(a?a.l&64||a.Na||(a.l?0:va(Ja,a)):va(Ja,a))return Ic.d(a,b,c);throw Error([p("nth not supported on this type "),p(za(wa(a)))].join(""));}return null}return c}function b(a,b){if(null==a)return null;if(a&&(a.l&16||a.Hb))return a.s(null,
b);if(a instanceof Array||"string"===typeof a)return b<a.length?a[b]:null;if(va(Ia,a))return q.c(a,b);if(m){if(a?a.l&64||a.Na||(a.l?0:va(Ja,a)):va(Ja,a))return Ic.c(a,b);throw Error([p("nth not supported on this type "),p(za(wa(a)))].join(""));}return null}var c=null,c=function(c,e,g){switch(arguments.length){case 2:return b.call(this,c,e);case 3:return a.call(this,c,e,g)}throw Error("Invalid arity: "+arguments.length);};c.c=b;c.d=a;return c}(),Jc=function(){function a(a,b,c){return null!=a?a&&(a.l&
256||a.Wb)?a.B(null,b,c):a instanceof Array?b<a.length?a[b]:c:"string"===typeof a?b<a.length?a[b]:c:va(Pa,a)?Ra.d(a,b,c):m?c:null:c}function b(a,b){return null==a?null:a&&(a.l&256||a.Wb)?a.A(null,b):a instanceof Array?b<a.length?a[b]:null:"string"===typeof a?b<a.length?a[b]:null:va(Pa,a)?Ra.c(a,b):null}var c=null,c=function(c,e,g){switch(arguments.length){case 2:return b.call(this,c,e);case 3:return a.call(this,c,e,g)}throw Error("Invalid arity: "+arguments.length);};c.c=b;c.d=a;return c}(),Lc=function(){function a(a,
b,c){return null!=a?Ta(a,b,c):Kc.c?Kc.c([b],[c]):Kc.call(null,[b],[c])}var b=null,c=function(){function a(b,d,l,n){var t=null;3<arguments.length&&(t=x(Array.prototype.slice.call(arguments,3),0));return c.call(this,b,d,l,t)}function c(a,d,e,n){for(;;)if(a=b.d(a,d,e),k(n))d=s(n),e=s(w(n)),n=w(w(n));else return a}a.j=3;a.g=function(a){var b=s(a);a=w(a);var d=s(a);a=w(a);var n=s(a);a=v(a);return c(b,d,n,a)};a.b=c;return a}(),b=function(b,e,g,h){switch(arguments.length){case 3:return a.call(this,b,e,g);
default:return c.b(b,e,g,x(arguments,3))}throw Error("Invalid arity: "+arguments.length);};b.j=3;b.g=c.g;b.d=a;b.b=c.b;return b}(),Mc=function(){function a(a,b){return null==a?null:Va(a,b)}var b=null,c=function(){function a(b,d,l){var n=null;2<arguments.length&&(n=x(Array.prototype.slice.call(arguments,2),0));return c.call(this,b,d,n)}function c(a,d,e){for(;;){if(null==a)return null;a=b.c(a,d);if(k(e))d=s(e),e=w(e);else return a}}a.j=2;a.g=function(a){var b=s(a);a=w(a);var d=s(a);a=v(a);return c(b,
d,a)};a.b=c;return a}(),b=function(b,e,g){switch(arguments.length){case 1:return b;case 2:return a.call(this,b,e);default:return c.b(b,e,x(arguments,2))}throw Error("Invalid arity: "+arguments.length);};b.j=2;b.g=c.g;b.a=function(a){return a};b.c=a;b.b=c.b;return b}();function Nc(a){var b="function"==ba(a);return b?b:a?k(k(null)?null:a.Sb)?!0:a.Pb?!1:va(Ca,a):va(Ca,a)}
var Gc=function Oc(b,c){return Nc(b)&&!(b?b.l&262144||b.tc||(b.l?0:va(ib,b)):va(ib,b))?Oc(function(){"undefined"===typeof ja&&(ja=function(b,c,g,h){this.i=b;this.Ua=c;this.ic=g;this.ec=h;this.p=0;this.l=393217},ja.Qb=!0,ja.Ob="cljs.core/t12517",ja.ac=function(b){return xb(b,"cljs.core/t12517")},ja.prototype.call=function(){function b(d,h){d=this;var l=null;1<arguments.length&&(l=x(Array.prototype.slice.call(arguments,1),0));return c.call(this,d,l)}function c(b,d){return Pc.c?Pc.c(b.Ua,d):Pc.call(null,
b.Ua,d)}b.j=1;b.g=function(b){var d=s(b);b=v(b);return c(d,b)};b.b=c;return b}(),ja.prototype.apply=function(b,c){return this.call.apply(this,[this].concat(Aa(c)))},ja.prototype.c=function(){function b(d){var h=null;0<arguments.length&&(h=x(Array.prototype.slice.call(arguments,0),0));return c.call(this,h)}function c(b){return Pc.c?Pc.c(self__.Ua,b):Pc.call(null,self__.Ua,b)}b.j=0;b.g=function(b){b=r(b);return c(b)};b.b=c;return b}(),ja.prototype.Sb=!0,ja.prototype.C=function(){return this.ec},ja.prototype.G=
function(b,c){return new ja(this.i,this.Ua,this.ic,c)});return new ja(c,b,Oc,null)}(),c):null==b?null:jb(b,c)};function Qc(a){var b=null!=a;return(b?a?a.l&131072||a.Yb||(a.l?0:va(gb,a)):va(gb,a):b)?hb(a):null}
var Rc=function(){function a(a,b){return null==a?null:ab(a,b)}var b=null,c=function(){function a(b,d,l){var n=null;2<arguments.length&&(n=x(Array.prototype.slice.call(arguments,2),0));return c.call(this,b,d,n)}function c(a,d,e){for(;;){if(null==a)return null;a=b.c(a,d);if(k(e))d=s(e),e=w(e);else return a}}a.j=2;a.g=function(a){var b=s(a);a=w(a);var d=s(a);a=v(a);return c(b,d,a)};a.b=c;return a}(),b=function(b,e,g){switch(arguments.length){case 1:return b;case 2:return a.call(this,b,e);default:return c.b(b,
e,x(arguments,2))}throw Error("Invalid arity: "+arguments.length);};b.j=2;b.g=c.g;b.a=function(a){return a};b.c=a;b.b=c.b;return b}(),Sc={},Tc=0;function rc(a){if(a&&(a.l&4194304||a.mc))a=a.v(null);else if("number"===typeof a)a=Math.floor(a)%2147483647;else if(!0===a)a=1;else if(!1===a)a=0;else if("string"===typeof a){255<Tc&&(Sc={},Tc=0);var b=Sc[a];"number"!==typeof b&&(b=fa(a),Sc[a]=b,Tc+=1);a=b}else a=null==a?0:m?nb(a):null;return a}
function Uc(a){return null==a?!1:a?a.l&1024||a.nc?!0:a.l?!1:va(Ua,a):va(Ua,a)}function Vc(a){return a?a.l&16384||a.sc?!0:a.l?!1:va(db,a):va(db,a)}function Wc(a){return a?a.p&512||a.jc?!0:!1:!1}function Xc(a){var b=[];ga(a,function(a,d){return b.push(d)});return b}function Yc(a,b,c,d,e){for(;0!==e;)c[d]=a[b],d+=1,e-=1,b+=1}var Zc={};function $c(a){return null==a?!1:a?a.l&64||a.Na?!0:a.l?!1:va(Ja,a):va(Ja,a)}function ad(a){return k(a)?!0:!1}function bd(a,b){return Jc.d(a,b,Zc)===Zc?!1:!0}
function nc(a,b){if(a===b)return 0;if(null==a)return-1;if(null==b)return 1;if(wa(a)===wa(b))return a&&(a.p&2048||a.Za)?a.$a(null,b):a>b?1:a<b?-1:0;if(m)throw Error("compare on non-nil objects of different types");return null}
var cd=function(){function a(a,b,c,h){for(;;){var l=nc(B.c(a,h),B.c(b,h));if(0===l&&h+1<c)h+=1;else return l}}function b(a,b){var g=A(a),h=A(b);return g<h?-1:g>h?1:m?c.e(a,b,g,0):null}var c=null,c=function(c,e,g,h){switch(arguments.length){case 2:return b.call(this,c,e);case 4:return a.call(this,c,e,g,h)}throw Error("Invalid arity: "+arguments.length);};c.c=b;c.e=a;return c}(),Fc=function(){function a(a,b,c){for(c=r(c);;)if(c)b=a.c?a.c(b,s(c)):a.call(null,b,s(c)),c=w(c);else return b}function b(a,
b){var c=r(b);return c?dd.d?dd.d(a,s(c),w(c)):dd.call(null,a,s(c),w(c)):a.q?a.q():a.call(null)}var c=null,c=function(c,e,g){switch(arguments.length){case 2:return b.call(this,c,e);case 3:return a.call(this,c,e,g)}throw Error("Invalid arity: "+arguments.length);};c.c=b;c.d=a;return c}(),dd=function(){function a(a,b,c){return c&&(c.l&524288||c.$b)?c.O(null,a,b):c instanceof Array?yc.d(c,a,b):"string"===typeof c?yc.d(c,a,b):va(kb,c)?lb.d(c,a,b):m?Fc.d(a,b,c):null}function b(a,b){return b&&(b.l&524288||
b.$b)?b.N(null,a):b instanceof Array?yc.c(b,a):"string"===typeof b?yc.c(b,a):va(kb,b)?lb.c(b,a):m?Fc.c(a,b):null}var c=null,c=function(c,e,g){switch(arguments.length){case 2:return b.call(this,c,e);case 3:return a.call(this,c,e,g)}throw Error("Invalid arity: "+arguments.length);};c.c=b;c.d=a;return c}(),ed=function(){var a=null,b=function(){function a(c,g,h){var l=null;2<arguments.length&&(l=x(Array.prototype.slice.call(arguments,2),0));return b.call(this,c,g,l)}function b(a,c,d){for(;;)if(a<c)if(w(d))a=
c,c=s(d),d=w(d);else return c<s(d);else return!1}a.j=2;a.g=function(a){var c=s(a);a=w(a);var h=s(a);a=v(a);return b(c,h,a)};a.b=b;return a}(),a=function(a,d,e){switch(arguments.length){case 1:return!0;case 2:return a<d;default:return b.b(a,d,x(arguments,2))}throw Error("Invalid arity: "+arguments.length);};a.j=2;a.g=b.g;a.a=function(){return!0};a.c=function(a,b){return a<b};a.b=b.b;return a}(),fd=function(){var a=null,b=function(){function a(c,g,h){var l=null;2<arguments.length&&(l=x(Array.prototype.slice.call(arguments,
2),0));return b.call(this,c,g,l)}function b(a,c,d){for(;;)if(a<=c)if(w(d))a=c,c=s(d),d=w(d);else return c<=s(d);else return!1}a.j=2;a.g=function(a){var c=s(a);a=w(a);var h=s(a);a=v(a);return b(c,h,a)};a.b=b;return a}(),a=function(a,d,e){switch(arguments.length){case 1:return!0;case 2:return a<=d;default:return b.b(a,d,x(arguments,2))}throw Error("Invalid arity: "+arguments.length);};a.j=2;a.g=b.g;a.a=function(){return!0};a.c=function(a,b){return a<=b};a.b=b.b;return a}(),gd=function(){var a=null,
b=function(){function a(c,g,h){var l=null;2<arguments.length&&(l=x(Array.prototype.slice.call(arguments,2),0));return b.call(this,c,g,l)}function b(a,c,d){for(;;)if(a>c)if(w(d))a=c,c=s(d),d=w(d);else return c>s(d);else return!1}a.j=2;a.g=function(a){var c=s(a);a=w(a);var h=s(a);a=v(a);return b(c,h,a)};a.b=b;return a}(),a=function(a,d,e){switch(arguments.length){case 1:return!0;case 2:return a>d;default:return b.b(a,d,x(arguments,2))}throw Error("Invalid arity: "+arguments.length);};a.j=2;a.g=b.g;
a.a=function(){return!0};a.c=function(a,b){return a>b};a.b=b.b;return a}(),hd=function(){var a=null,b=function(){function a(c,g,h){var l=null;2<arguments.length&&(l=x(Array.prototype.slice.call(arguments,2),0));return b.call(this,c,g,l)}function b(a,c,d){for(;;)if(a>=c)if(w(d))a=c,c=s(d),d=w(d);else return c>=s(d);else return!1}a.j=2;a.g=function(a){var c=s(a);a=w(a);var h=s(a);a=v(a);return b(c,h,a)};a.b=b;return a}(),a=function(a,d,e){switch(arguments.length){case 1:return!0;case 2:return a>=d;
default:return b.b(a,d,x(arguments,2))}throw Error("Invalid arity: "+arguments.length);};a.j=2;a.g=b.g;a.a=function(){return!0};a.c=function(a,b){return a>=b};a.b=b.b;return a}();function rd(a){return 0<=a?Math.floor.a?Math.floor.a(a):Math.floor.call(null,a):Math.ceil.a?Math.ceil.a(a):Math.ceil.call(null,a)}function oe(a){a-=a>>1&1431655765;a=(a&858993459)+(a>>2&858993459);return 16843009*(a+(a>>4)&252645135)>>24}function pe(a){var b=1;for(a=r(a);;)if(a&&0<b)b-=1,a=w(a);else return a}
var p=function(){function a(a){return null==a?"":a.toString()}var b=null,c=function(){function a(b,d){var l=null;1<arguments.length&&(l=x(Array.prototype.slice.call(arguments,1),0));return c.call(this,b,l)}function c(a,d){for(var e=new ha(b.a(a)),n=d;;)if(k(n))e=e.append(b.a(s(n))),n=w(n);else return e.toString()}a.j=1;a.g=function(a){var b=s(a);a=v(a);return c(b,a)};a.b=c;return a}(),b=function(b,e){switch(arguments.length){case 0:return"";case 1:return a.call(this,b);default:return c.b(b,x(arguments,
1))}throw Error("Invalid arity: "+arguments.length);};b.j=1;b.g=c.g;b.q=function(){return""};b.a=a;b.b=c.b;return b}(),qe=function(){var a=null,a=function(a,c,d){switch(arguments.length){case 2:return a.substring(c);case 3:return a.substring(c,d)}throw Error("Invalid arity: "+arguments.length);};a.c=function(a,c){return a.substring(c)};a.d=function(a,c,d){return a.substring(c,d)};return a}();
function Dc(a,b){return ad((b?b.l&16777216||b.qc||(b.l?0:va(qb,b)):va(qb,b))?function(){for(var c=r(a),d=r(b);;){if(null==c)return null==d;if(null==d)return!1;if(mc.c(s(c),s(d)))c=w(c),d=w(d);else return m?!1:null}}():null)}function qc(a,b){return a^b+2654435769+(a<<6)+(a>>2)}function Bc(a){if(r(a)){var b=rc(s(a));for(a=w(a);;){if(null==a)return b;b=qc(b,rc(s(a)));a=w(a)}}else return 0}
function re(a){var b=0;for(a=r(a);;)if(a){var c=s(a),b=(b+(rc(se.a?se.a(c):se.call(null,c))^rc(te.a?te.a(c):te.call(null,c))))%4503599627370496;a=w(a)}else return b}function ue(a,b,c,d,e){this.i=a;this.first=b;this.va=c;this.count=d;this.m=e;this.l=65937646;this.p=8192}f=ue.prototype;f.v=function(){var a=this.m;return null!=a?a:this.m=a=Bc(this)};f.ba=function(){return 1===this.count?null:this.va};f.D=function(a,b){return new ue(this.i,b,this,this.count+1,null)};f.toString=function(){return Mb(this)};
f.N=function(a,b){return Fc.c(b,this)};f.O=function(a,b,c){return Fc.d(b,c,this)};f.F=function(){return this};f.J=function(){return this.count};f.ra=function(){return this.first};f.sa=function(){return Ma(this)};f.P=function(){return this.first};f.V=function(){return 1===this.count?uc:this.va};f.u=function(a,b){return Dc(this,b)};f.G=function(a,b){return new ue(b,this.first,this.va,this.count,this.m)};f.C=function(){return this.i};f.I=function(){return uc};
function ve(a){this.i=a;this.l=65937614;this.p=8192}f=ve.prototype;f.v=function(){return 0};f.ba=function(){return null};f.D=function(a,b){return new ue(this.i,b,null,1,null)};f.toString=function(){return Mb(this)};f.N=function(a,b){return Fc.c(b,this)};f.O=function(a,b,c){return Fc.d(b,c,this)};f.F=function(){return null};f.J=function(){return 0};f.ra=function(){return null};f.sa=function(){throw Error("Can't pop empty list");};f.P=function(){return null};f.V=function(){return uc};
f.u=function(a,b){return Dc(this,b)};f.G=function(a,b){return new ve(b)};f.C=function(){return this.i};f.I=function(){return this};var uc=new ve(null);function we(a){return sb(a)}function xe(a){return(a?a.l&134217728||a.oc||(a.l?0:va(rb,a)):va(rb,a))?sb(a):dd.d(Hc,uc,a)}
var ye=function(){function a(a){var d=null;0<arguments.length&&(d=x(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){var b;if(a instanceof tc&&0===a.o)b=a.f;else a:{for(b=[];;)if(null!=a)b.push(a.P(null)),a=a.ba(null);else break a;b=void 0}a=b.length;for(var e=uc;;)if(0<a){var g=a-1,e=e.D(null,b[a-1]);a=g}else return e}a.j=0;a.g=function(a){a=r(a);return b(a)};a.b=b;return a}();
function ze(a,b,c,d){this.i=a;this.first=b;this.va=c;this.m=d;this.l=65929452;this.p=8192}f=ze.prototype;f.v=function(){var a=this.m;return null!=a?a:this.m=a=Bc(this)};f.ba=function(){return null==this.va?null:r(this.va)};f.D=function(a,b){return new ze(null,b,this,this.m)};f.toString=function(){return Mb(this)};f.N=function(a,b){return Fc.c(b,this)};f.O=function(a,b,c){return Fc.d(b,c,this)};f.F=function(){return this};f.P=function(){return this.first};f.V=function(){return null==this.va?uc:this.va};
f.u=function(a,b){return Dc(this,b)};f.G=function(a,b){return new ze(b,this.first,this.va,this.m)};f.C=function(){return this.i};f.I=function(){return Gc(uc,this.i)};function z(a,b){var c=null==b;return(c?c:b&&(b.l&64||b.Na))?new ze(null,a,b,null):new ze(null,a,r(b),null)}function C(a,b,c,d){this.Y=a;this.name=b;this.ya=c;this.Ca=d;this.l=2153775105;this.p=4096}f=C.prototype;f.t=function(a,b){return xb(b,[p(":"),p(this.ya)].join(""))};
f.v=function(){null==this.Ca&&(this.Ca=qc(rc(this.Y),rc(this.name))+2654435769);return this.Ca};f.call=function(){var a=null;return a=function(a,c,d){switch(arguments.length){case 2:return Jc.c(c,this);case 3:return Jc.d(c,this,d)}throw Error("Invalid arity: "+arguments.length);}}();f.apply=function(a,b){return this.call.apply(this,[this].concat(Aa(b)))};f.a=function(a){return Jc.c(a,this)};f.c=function(a,b){return Jc.d(a,this,b)};f.u=function(a,b){return b instanceof C?this.ya===b.ya:!1};
f.toString=function(){return[p(":"),p(this.ya)].join("")};function Ae(a){return a instanceof C}function Be(a){if(a&&(a.p&4096||a.Zb))return a.Y;throw Error([p("Doesn't support namespace: "),p(a)].join(""));}
var De=function(){function a(a,b){return new C(a,b,[p(k(a)?[p(a),p("/")].join(""):null),p(b)].join(""),null)}function b(a){if(a instanceof C)return a;if(a instanceof pc)return new C(Be(a),Ce.a?Ce.a(a):Ce.call(null,a),a.Ba,null);if("string"===typeof a){var b=a.split("/");return 2===b.length?new C(b[0],b[1],a,null):new C(null,b[0],a,null)}return null}var c=null,c=function(c,e){switch(arguments.length){case 1:return b.call(this,c);case 2:return a.call(this,c,e)}throw Error("Invalid arity: "+arguments.length);
};c.a=b;c.c=a;return c}();function Ee(a,b,c,d){this.i=a;this.fn=b;this.L=c;this.m=d;this.p=0;this.l=32374988}f=Ee.prototype;f.v=function(){var a=this.m;return null!=a?a:this.m=a=Bc(this)};f.ba=function(){pb(this);return null==this.L?null:w(this.L)};f.D=function(a,b){return z(b,this)};f.toString=function(){return Mb(this)};function Fe(a){null!=a.fn&&(a.L=a.fn.q?a.fn.q():a.fn.call(null),a.fn=null);return a.L}f.N=function(a,b){return Fc.c(b,this)};f.O=function(a,b,c){return Fc.d(b,c,this)};
f.F=function(){Fe(this);if(null==this.L)return null;for(var a=this.L;;)if(a instanceof Ee)a=Fe(a);else return this.L=a,r(this.L)};f.P=function(){pb(this);return null==this.L?null:s(this.L)};f.V=function(){pb(this);return null!=this.L?v(this.L):uc};f.u=function(a,b){return Dc(this,b)};f.G=function(a,b){return new Ee(b,this.fn,this.L,this.m)};f.C=function(){return this.i};f.I=function(){return Gc(uc,this.i)};function Ge(a,b){this.eb=a;this.end=b;this.p=0;this.l=2}Ge.prototype.J=function(){return this.end};
Ge.prototype.add=function(a){this.eb[this.end]=a;return this.end+=1};Ge.prototype.R=function(){var a=new He(this.eb,0,this.end);this.eb=null;return a};function Ie(a){return new Ge(Array(a),0)}function He(a,b,c){this.f=a;this.off=b;this.end=c;this.p=0;this.l=524306}f=He.prototype;f.N=function(a,b){return yc.e(this.f,b,this.f[this.off],this.off+1)};f.O=function(a,b,c){return yc.e(this.f,b,c,this.off)};
f.Fb=function(){if(this.off===this.end)throw Error("-drop-first of empty chunk");return new He(this.f,this.off+1,this.end)};f.s=function(a,b){return this.f[this.off+b]};f.$=function(a,b,c){return 0<=b&&b<this.end-this.off?this.f[this.off+b]:c};f.J=function(){return this.end-this.off};
var Je=function(){function a(a,b,c){return new He(a,b,c)}function b(a,b){return new He(a,b,a.length)}function c(a){return new He(a,0,a.length)}var d=null,d=function(d,g,h){switch(arguments.length){case 1:return c.call(this,d);case 2:return b.call(this,d,g);case 3:return a.call(this,d,g,h)}throw Error("Invalid arity: "+arguments.length);};d.a=c;d.c=b;d.d=a;return d}();function Ke(a,b,c,d){this.R=a;this.la=b;this.i=c;this.m=d;this.l=31850732;this.p=1536}f=Ke.prototype;
f.v=function(){var a=this.m;return null!=a?a:this.m=a=Bc(this)};f.ba=function(){if(1<Ea(this.R))return new Ke(Hb(this.R),this.la,this.i,null);var a=pb(this.la);return null==a?null:a};f.D=function(a,b){return z(b,this)};f.toString=function(){return Mb(this)};f.F=function(){return this};f.P=function(){return q.c(this.R,0)};f.V=function(){return 1<Ea(this.R)?new Ke(Hb(this.R),this.la,this.i,null):null==this.la?uc:this.la};f.gb=function(){return null==this.la?null:this.la};
f.u=function(a,b){return Dc(this,b)};f.G=function(a,b){return new Ke(this.R,this.la,b,this.m)};f.C=function(){return this.i};f.I=function(){return Gc(uc,this.i)};f.hb=function(){return this.R};f.ib=function(){return null==this.la?uc:this.la};function Le(a,b){return 0===Ea(a)?b:new Ke(a,b,null,null)}function Me(a){for(var b=[];;)if(r(a))b.push(s(a)),a=w(a);else return b}function Ne(a,b){if(zc(a))return A(a);for(var c=a,d=b,e=0;;)if(0<d&&r(c))c=w(c),d-=1,e+=1;else return e}
var Pe=function Oe(b){return null==b?null:null==w(b)?r(s(b)):m?z(s(b),Oe(w(b))):null},Qe=function(){function a(a,b){return new Ee(null,function(){var c=r(a);return c?Wc(c)?Le(Ib(c),d.c(Jb(c),b)):z(s(c),d.c(v(c),b)):b},null,null)}function b(a){return new Ee(null,function(){return a},null,null)}function c(){return new Ee(null,function(){return null},null,null)}var d=null,e=function(){function a(c,d,e){var g=null;2<arguments.length&&(g=x(Array.prototype.slice.call(arguments,2),0));return b.call(this,
c,d,g)}function b(a,c,e){return function y(a,b){return new Ee(null,function(){var c=r(a);return c?Wc(c)?Le(Ib(c),y(Jb(c),b)):z(s(c),y(v(c),b)):k(b)?y(s(b),w(b)):null},null,null)}(d.c(a,c),e)}a.j=2;a.g=function(a){var c=s(a);a=w(a);var d=s(a);a=v(a);return b(c,d,a)};a.b=b;return a}(),d=function(d,h,l){switch(arguments.length){case 0:return c.call(this);case 1:return b.call(this,d);case 2:return a.call(this,d,h);default:return e.b(d,h,x(arguments,2))}throw Error("Invalid arity: "+arguments.length);
};d.j=2;d.g=e.g;d.q=c;d.a=b;d.c=a;d.b=e.b;return d}(),Re=function(){function a(a,b,c,d){return z(a,z(b,z(c,d)))}function b(a,b,c){return z(a,z(b,c))}var c=null,d=function(){function a(c,d,e,t,u){var y=null;4<arguments.length&&(y=x(Array.prototype.slice.call(arguments,4),0));return b.call(this,c,d,e,t,y)}function b(a,c,d,e,g){return z(a,z(c,z(d,z(e,Pe(g)))))}a.j=4;a.g=function(a){var c=s(a);a=w(a);var d=s(a);a=w(a);var e=s(a);a=w(a);var u=s(a);a=v(a);return b(c,d,e,u,a)};a.b=b;return a}(),c=function(c,
g,h,l,n){switch(arguments.length){case 1:return r(c);case 2:return z(c,g);case 3:return b.call(this,c,g,h);case 4:return a.call(this,c,g,h,l);default:return d.b(c,g,h,l,x(arguments,4))}throw Error("Invalid arity: "+arguments.length);};c.j=4;c.g=d.g;c.a=function(a){return r(a)};c.c=function(a,b){return z(a,b)};c.d=b;c.e=a;c.b=d.b;return c}(),Se=function(){var a=null,b=function(){function a(c,g,h,l){var n=null;3<arguments.length&&(n=x(Array.prototype.slice.call(arguments,3),0));return b.call(this,c,
g,h,n)}function b(a,c,d,l){for(;;)if(a=Fb(a,c,d),k(l))c=s(l),d=s(w(l)),l=w(w(l));else return a}a.j=3;a.g=function(a){var c=s(a);a=w(a);var h=s(a);a=w(a);var l=s(a);a=v(a);return b(c,h,l,a)};a.b=b;return a}(),a=function(a,d,e,g){switch(arguments.length){case 3:return Fb(a,d,e);default:return b.b(a,d,e,x(arguments,3))}throw Error("Invalid arity: "+arguments.length);};a.j=3;a.g=b.g;a.d=function(a,b,e){return Fb(a,b,e)};a.b=b.b;return a}();
function Te(a,b,c){var d=r(c);if(0===b)return a.q?a.q():a.call(null);c=La(d);var e=Ma(d);if(1===b)return a.a?a.a(c):a.a?a.a(c):a.call(null,c);var d=La(e),g=Ma(e);if(2===b)return a.c?a.c(c,d):a.c?a.c(c,d):a.call(null,c,d);var e=La(g),h=Ma(g);if(3===b)return a.d?a.d(c,d,e):a.d?a.d(c,d,e):a.call(null,c,d,e);var g=La(h),l=Ma(h);if(4===b)return a.e?a.e(c,d,e,g):a.e?a.e(c,d,e,g):a.call(null,c,d,e,g);h=La(l);l=Ma(l);if(5===b)return a.k?a.k(c,d,e,g,h):a.k?a.k(c,d,e,g,h):a.call(null,c,d,e,g,h);a=La(l);var n=
Ma(l);if(6===b)return a.n?a.n(c,d,e,g,h,a):a.n?a.n(c,d,e,g,h,a):a.call(null,c,d,e,g,h,a);var l=La(n),t=Ma(n);if(7===b)return a.r?a.r(c,d,e,g,h,a,l):a.r?a.r(c,d,e,g,h,a,l):a.call(null,c,d,e,g,h,a,l);var n=La(t),u=Ma(t);if(8===b)return a.ga?a.ga(c,d,e,g,h,a,l,n):a.ga?a.ga(c,d,e,g,h,a,l,n):a.call(null,c,d,e,g,h,a,l,n);var t=La(u),y=Ma(u);if(9===b)return a.T?a.T(c,d,e,g,h,a,l,n,t):a.T?a.T(c,d,e,g,h,a,l,n,t):a.call(null,c,d,e,g,h,a,l,n,t);var u=La(y),F=Ma(y);if(10===b)return a.S?a.S(c,d,e,g,h,a,l,n,t,
u):a.S?a.S(c,d,e,g,h,a,l,n,t,u):a.call(null,c,d,e,g,h,a,l,n,t,u);var y=La(F),Y=Ma(F);if(11===b)return a.jb?a.jb(c,d,e,g,h,a,l,n,t,u,y):a.jb?a.jb(c,d,e,g,h,a,l,n,t,u,y):a.call(null,c,d,e,g,h,a,l,n,t,u,y);var F=La(Y),ia=Ma(Y);if(12===b)return a.kb?a.kb(c,d,e,g,h,a,l,n,t,u,y,F):a.kb?a.kb(c,d,e,g,h,a,l,n,t,u,y,F):a.call(null,c,d,e,g,h,a,l,n,t,u,y,F);var Y=La(ia),oa=Ma(ia);if(13===b)return a.lb?a.lb(c,d,e,g,h,a,l,n,t,u,y,F,Y):a.lb?a.lb(c,d,e,g,h,a,l,n,t,u,y,F,Y):a.call(null,c,d,e,g,h,a,l,n,t,u,y,F,Y);
var ia=La(oa),Ba=Ma(oa);if(14===b)return a.mb?a.mb(c,d,e,g,h,a,l,n,t,u,y,F,Y,ia):a.mb?a.mb(c,d,e,g,h,a,l,n,t,u,y,F,Y,ia):a.call(null,c,d,e,g,h,a,l,n,t,u,y,F,Y,ia);var oa=La(Ba),xa=Ma(Ba);if(15===b)return a.nb?a.nb(c,d,e,g,h,a,l,n,t,u,y,F,Y,ia,oa):a.nb?a.nb(c,d,e,g,h,a,l,n,t,u,y,F,Y,ia,oa):a.call(null,c,d,e,g,h,a,l,n,t,u,y,F,Y,ia,oa);var Ba=La(xa),Oa=Ma(xa);if(16===b)return a.ob?a.ob(c,d,e,g,h,a,l,n,t,u,y,F,Y,ia,oa,Ba):a.ob?a.ob(c,d,e,g,h,a,l,n,t,u,y,F,Y,ia,oa,Ba):a.call(null,c,d,e,g,h,a,l,n,t,u,y,
F,Y,ia,oa,Ba);var xa=La(Oa),Ka=Ma(Oa);if(17===b)return a.pb?a.pb(c,d,e,g,h,a,l,n,t,u,y,F,Y,ia,oa,Ba,xa):a.pb?a.pb(c,d,e,g,h,a,l,n,t,u,y,F,Y,ia,oa,Ba,xa):a.call(null,c,d,e,g,h,a,l,n,t,u,y,F,Y,ia,oa,Ba,xa);var Oa=La(Ka),Za=Ma(Ka);if(18===b)return a.qb?a.qb(c,d,e,g,h,a,l,n,t,u,y,F,Y,ia,oa,Ba,xa,Oa):a.qb?a.qb(c,d,e,g,h,a,l,n,t,u,y,F,Y,ia,oa,Ba,xa,Oa):a.call(null,c,d,e,g,h,a,l,n,t,u,y,F,Y,ia,oa,Ba,xa,Oa);Ka=La(Za);Za=Ma(Za);if(19===b)return a.rb?a.rb(c,d,e,g,h,a,l,n,t,u,y,F,Y,ia,oa,Ba,xa,Oa,Ka):a.rb?a.rb(c,
d,e,g,h,a,l,n,t,u,y,F,Y,ia,oa,Ba,xa,Oa,Ka):a.call(null,c,d,e,g,h,a,l,n,t,u,y,F,Y,ia,oa,Ba,xa,Oa,Ka);var Qa=La(Za);Ma(Za);if(20===b)return a.sb?a.sb(c,d,e,g,h,a,l,n,t,u,y,F,Y,ia,oa,Ba,xa,Oa,Ka,Qa):a.sb?a.sb(c,d,e,g,h,a,l,n,t,u,y,F,Y,ia,oa,Ba,xa,Oa,Ka,Qa):a.call(null,c,d,e,g,h,a,l,n,t,u,y,F,Y,ia,oa,Ba,xa,Oa,Ka,Qa);throw Error("Only up to 20 arguments supported on functions");}
var Pc=function(){function a(a,b,c,d,e){b=Re.e(b,c,d,e);c=a.j;return a.g?(d=Ne(b,c+1),d<=c?Te(a,d,b):a.g(b)):a.apply(a,Me(b))}function b(a,b,c,d){b=Re.d(b,c,d);c=a.j;return a.g?(d=Ne(b,c+1),d<=c?Te(a,d,b):a.g(b)):a.apply(a,Me(b))}function c(a,b,c){b=Re.c(b,c);c=a.j;if(a.g){var d=Ne(b,c+1);return d<=c?Te(a,d,b):a.g(b)}return a.apply(a,Me(b))}function d(a,b){var c=a.j;if(a.g){var d=Ne(b,c+1);return d<=c?Te(a,d,b):a.g(b)}return a.apply(a,Me(b))}var e=null,g=function(){function a(c,d,e,g,h,Y){var ia=
null;5<arguments.length&&(ia=x(Array.prototype.slice.call(arguments,5),0));return b.call(this,c,d,e,g,h,ia)}function b(a,c,d,e,g,h){c=z(c,z(d,z(e,z(g,Pe(h)))));d=a.j;return a.g?(e=Ne(c,d+1),e<=d?Te(a,e,c):a.g(c)):a.apply(a,Me(c))}a.j=5;a.g=function(a){var c=s(a);a=w(a);var d=s(a);a=w(a);var e=s(a);a=w(a);var g=s(a);a=w(a);var h=s(a);a=v(a);return b(c,d,e,g,h,a)};a.b=b;return a}(),e=function(e,l,n,t,u,y){switch(arguments.length){case 2:return d.call(this,e,l);case 3:return c.call(this,e,l,n);case 4:return b.call(this,
e,l,n,t);case 5:return a.call(this,e,l,n,t,u);default:return g.b(e,l,n,t,u,x(arguments,5))}throw Error("Invalid arity: "+arguments.length);};e.j=5;e.g=g.g;e.c=d;e.d=c;e.e=b;e.k=a;e.b=g.b;return e}(),Ue=function(){function a(a,b){return!mc.c(a,b)}var b=null,c=function(){function a(c,d,l){var n=null;2<arguments.length&&(n=x(Array.prototype.slice.call(arguments,2),0));return b.call(this,c,d,n)}function b(a,c,d){return ua(Pc.e(mc,a,c,d))}a.j=2;a.g=function(a){var c=s(a);a=w(a);var d=s(a);a=v(a);return b(c,
d,a)};a.b=b;return a}(),b=function(b,e,g){switch(arguments.length){case 1:return!1;case 2:return a.call(this,b,e);default:return c.b(b,e,x(arguments,2))}throw Error("Invalid arity: "+arguments.length);};b.j=2;b.g=c.g;b.a=function(){return!1};b.c=a;b.b=c.b;return b}();function Ve(a,b){for(;;){if(null==r(b))return!0;if(k(a.a?a.a(s(b)):a.call(null,s(b)))){var c=a,d=w(b);a=c;b=d}else return m?!1:null}}
function We(a){for(var b=Xe;;)if(r(a)){var c=b.a?b.a(s(a)):b.call(null,s(a));if(k(c))return c;a=w(a)}else return null}function Xe(a){return a}
var Ye=function(){function a(a,b,c){return function(){var d=null,n=function(){function d(a,b,c,e){var g=null;3<arguments.length&&(g=x(Array.prototype.slice.call(arguments,3),0));return l.call(this,a,b,c,g)}function l(d,n,t,u){return a.a?a.a(b.a?b.a(Pc.k(c,d,n,t,u)):b.call(null,Pc.k(c,d,n,t,u))):a.call(null,b.a?b.a(Pc.k(c,d,n,t,u)):b.call(null,Pc.k(c,d,n,t,u)))}d.j=3;d.g=function(a){var b=s(a);a=w(a);var c=s(a);a=w(a);var d=s(a);a=v(a);return l(b,c,d,a)};d.b=l;return d}(),d=function(d,l,y,F){switch(arguments.length){case 0:return a.a?
a.a(b.a?b.a(c.q?c.q():c.call(null)):b.call(null,c.q?c.q():c.call(null))):a.call(null,b.a?b.a(c.q?c.q():c.call(null)):b.call(null,c.q?c.q():c.call(null)));case 1:return a.a?a.a(b.a?b.a(c.a?c.a(d):c.call(null,d)):b.call(null,c.a?c.a(d):c.call(null,d))):a.call(null,b.a?b.a(c.a?c.a(d):c.call(null,d)):b.call(null,c.a?c.a(d):c.call(null,d)));case 2:return a.a?a.a(b.a?b.a(c.c?c.c(d,l):c.call(null,d,l)):b.call(null,c.c?c.c(d,l):c.call(null,d,l))):a.call(null,b.a?b.a(c.c?c.c(d,l):c.call(null,d,l)):b.call(null,
c.c?c.c(d,l):c.call(null,d,l)));case 3:return a.a?a.a(b.a?b.a(c.d?c.d(d,l,y):c.call(null,d,l,y)):b.call(null,c.d?c.d(d,l,y):c.call(null,d,l,y))):a.call(null,b.a?b.a(c.d?c.d(d,l,y):c.call(null,d,l,y)):b.call(null,c.d?c.d(d,l,y):c.call(null,d,l,y)));default:return n.b(d,l,y,x(arguments,3))}throw Error("Invalid arity: "+arguments.length);};d.j=3;d.g=n.g;return d}()}function b(a,b){return function(){var c=null,d=function(){function c(a,b,e,g){var h=null;3<arguments.length&&(h=x(Array.prototype.slice.call(arguments,
3),0));return d.call(this,a,b,e,h)}function d(c,h,l,n){return a.a?a.a(Pc.k(b,c,h,l,n)):a.call(null,Pc.k(b,c,h,l,n))}c.j=3;c.g=function(a){var b=s(a);a=w(a);var c=s(a);a=w(a);var e=s(a);a=v(a);return d(b,c,e,a)};c.b=d;return c}(),c=function(c,h,u,y){switch(arguments.length){case 0:return a.a?a.a(b.q?b.q():b.call(null)):a.call(null,b.q?b.q():b.call(null));case 1:return a.a?a.a(b.a?b.a(c):b.call(null,c)):a.call(null,b.a?b.a(c):b.call(null,c));case 2:return a.a?a.a(b.c?b.c(c,h):b.call(null,c,h)):a.call(null,
b.c?b.c(c,h):b.call(null,c,h));case 3:return a.a?a.a(b.d?b.d(c,h,u):b.call(null,c,h,u)):a.call(null,b.d?b.d(c,h,u):b.call(null,c,h,u));default:return d.b(c,h,u,x(arguments,3))}throw Error("Invalid arity: "+arguments.length);};c.j=3;c.g=d.g;return c}()}var c=null,d=function(){function a(c,d,e,t){var u=null;3<arguments.length&&(u=x(Array.prototype.slice.call(arguments,3),0));return b.call(this,c,d,e,u)}function b(a,c,d,e){var g=xe(Re.e(a,c,d,e));return function(){function a(c){var d=null;0<arguments.length&&
(d=x(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){a=Pc.c(s(g),a);for(var c=w(g);;)if(c)a=s(c).call(null,a),c=w(c);else return a}a.j=0;a.g=function(a){a=r(a);return b(a)};a.b=b;return a}()}a.j=3;a.g=function(a){var c=s(a);a=w(a);var d=s(a);a=w(a);var e=s(a);a=v(a);return b(c,d,e,a)};a.b=b;return a}(),c=function(c,g,h,l){switch(arguments.length){case 0:return Xe;case 1:return c;case 2:return b.call(this,c,g);case 3:return a.call(this,c,g,h);default:return d.b(c,g,
h,x(arguments,3))}throw Error("Invalid arity: "+arguments.length);};c.j=3;c.g=d.g;c.q=function(){return Xe};c.a=function(a){return a};c.c=b;c.d=a;c.b=d.b;return c}(),Ze=function(){function a(a,b,c,d){return function(){function e(a){var b=null;0<arguments.length&&(b=x(Array.prototype.slice.call(arguments,0),0));return u.call(this,b)}function u(e){return Pc.k(a,b,c,d,e)}e.j=0;e.g=function(a){a=r(a);return u(a)};e.b=u;return e}()}function b(a,b,c){return function(){function d(a){var b=null;0<arguments.length&&
(b=x(Array.prototype.slice.call(arguments,0),0));return e.call(this,b)}function e(d){return Pc.e(a,b,c,d)}d.j=0;d.g=function(a){a=r(a);return e(a)};d.b=e;return d}()}function c(a,b){return function(){function c(a){var b=null;0<arguments.length&&(b=x(Array.prototype.slice.call(arguments,0),0));return d.call(this,b)}function d(c){return Pc.d(a,b,c)}c.j=0;c.g=function(a){a=r(a);return d(a)};c.b=d;return c}()}var d=null,e=function(){function a(c,d,e,g,y){var F=null;4<arguments.length&&(F=x(Array.prototype.slice.call(arguments,
4),0));return b.call(this,c,d,e,g,F)}function b(a,c,d,e,g){return function(){function b(a){var c=null;0<arguments.length&&(c=x(Array.prototype.slice.call(arguments,0),0));return h.call(this,c)}function h(b){return Pc.k(a,c,d,e,Qe.c(g,b))}b.j=0;b.g=function(a){a=r(a);return h(a)};b.b=h;return b}()}a.j=4;a.g=function(a){var c=s(a);a=w(a);var d=s(a);a=w(a);var e=s(a);a=w(a);var g=s(a);a=v(a);return b(c,d,e,g,a)};a.b=b;return a}(),d=function(d,h,l,n,t){switch(arguments.length){case 1:return d;case 2:return c.call(this,
d,h);case 3:return b.call(this,d,h,l);case 4:return a.call(this,d,h,l,n);default:return e.b(d,h,l,n,x(arguments,4))}throw Error("Invalid arity: "+arguments.length);};d.j=4;d.g=e.g;d.a=function(a){return a};d.c=c;d.d=b;d.e=a;d.b=e.b;return d}(),af=function $e(b,c){return new Ee(null,function(){var d=r(c);if(d){if(Wc(d)){for(var e=Ib(d),g=A(e),h=Ie(g),l=0;;)if(l<g){var n=b.a?b.a(q.c(e,l)):b.call(null,q.c(e,l));null!=n&&h.add(n);l+=1}else break;return Le(h.R(),$e(b,Jb(d)))}e=b.a?b.a(s(d)):b.call(null,
s(d));return null==e?$e(b,v(d)):z(e,$e(b,v(d)))}return null},null,null)},bf=function(){function a(a,b,c,e){return new Ee(null,function(){var t=r(b),u=r(c),y=r(e);return t&&u&&y?z(a.d?a.d(s(t),s(u),s(y)):a.call(null,s(t),s(u),s(y)),d.e(a,v(t),v(u),v(y))):null},null,null)}function b(a,b,c){return new Ee(null,function(){var e=r(b),t=r(c);return e&&t?z(a.c?a.c(s(e),s(t)):a.call(null,s(e),s(t)),d.d(a,v(e),v(t))):null},null,null)}function c(a,b){return new Ee(null,function(){var c=r(b);if(c){if(Wc(c)){for(var e=
Ib(c),t=A(e),u=Ie(t),y=0;;)if(y<t){var F=a.a?a.a(q.c(e,y)):a.call(null,q.c(e,y));u.add(F);y+=1}else break;return Le(u.R(),d.c(a,Jb(c)))}return z(a.a?a.a(s(c)):a.call(null,s(c)),d.c(a,v(c)))}return null},null,null)}var d=null,e=function(){function a(c,d,e,g,y){var F=null;4<arguments.length&&(F=x(Array.prototype.slice.call(arguments,4),0));return b.call(this,c,d,e,g,F)}function b(a,c,e,g,h){return d.c(function(b){return Pc.c(a,b)},function Y(a){return new Ee(null,function(){var b=d.c(r,a);return Ve(Xe,
b)?z(d.c(s,b),Y(d.c(v,b))):null},null,null)}(Hc.b(h,g,x([e,c],0))))}a.j=4;a.g=function(a){var c=s(a);a=w(a);var d=s(a);a=w(a);var e=s(a);a=w(a);var g=s(a);a=v(a);return b(c,d,e,g,a)};a.b=b;return a}(),d=function(d,h,l,n,t){switch(arguments.length){case 2:return c.call(this,d,h);case 3:return b.call(this,d,h,l);case 4:return a.call(this,d,h,l,n);default:return e.b(d,h,l,n,x(arguments,4))}throw Error("Invalid arity: "+arguments.length);};d.j=4;d.g=e.g;d.c=c;d.d=b;d.e=a;d.b=e.b;return d}(),df=function cf(b,
c){return new Ee(null,function(){if(0<b){var d=r(c);return d?z(s(d),cf(b-1,v(d))):null}return null},null,null)};function ef(a,b){return new Ee(null,function(){var c;a:{c=a;for(var d=b;;)if(d=r(d),0<c&&d)c-=1,d=v(d);else{c=d;break a}c=void 0}return c},null,null)}function ff(a,b){return new Ee(null,function(){var c;a:{c=a;for(var d=b;;){var d=r(d),e;e=(e=d)?c.a?c.a(s(d)):c.call(null,s(d)):e;if(k(e))d=v(d);else{c=d;break a}}c=void 0}return c},null,null)}
var gf=function(){function a(a,b){return df(a,c.a(b))}function b(a){return new Ee(null,function(){return z(a,c.a(a))},null,null)}var c=null,c=function(c,e){switch(arguments.length){case 1:return b.call(this,c);case 2:return a.call(this,c,e)}throw Error("Invalid arity: "+arguments.length);};c.a=b;c.c=a;return c}(),hf=function(){function a(a,c){return new Ee(null,function(){var g=r(a),h=r(c);return g&&h?z(s(g),z(s(h),b.c(v(g),v(h)))):null},null,null)}var b=null,c=function(){function a(b,d,l){var n=
null;2<arguments.length&&(n=x(Array.prototype.slice.call(arguments,2),0));return c.call(this,b,d,n)}function c(a,d,e){return new Ee(null,function(){var c=bf.c(r,Hc.b(e,d,x([a],0)));return Ve(Xe,c)?Qe.c(bf.c(s,c),Pc.c(b,bf.c(v,c))):null},null,null)}a.j=2;a.g=function(a){var b=s(a);a=w(a);var d=s(a);a=v(a);return c(b,d,a)};a.b=c;return a}(),b=function(b,e,g){switch(arguments.length){case 2:return a.call(this,b,e);default:return c.b(b,e,x(arguments,2))}throw Error("Invalid arity: "+arguments.length);
};b.j=2;b.g=c.g;b.c=a;b.b=c.b;return b}();function jf(a){return function c(a,e){return new Ee(null,function(){var g=r(a);return g?z(s(g),c(v(g),e)):r(e)?c(s(e),v(e)):null},null,null)}(null,a)}
var kf=function(){function a(a,b){return jf(bf.c(a,b))}var b=null,c=function(){function a(c,d,l){var n=null;2<arguments.length&&(n=x(Array.prototype.slice.call(arguments,2),0));return b.call(this,c,d,n)}function b(a,c,d){return jf(Pc.e(bf,a,c,d))}a.j=2;a.g=function(a){var c=s(a);a=w(a);var d=s(a);a=v(a);return b(c,d,a)};a.b=b;return a}(),b=function(b,e,g){switch(arguments.length){case 2:return a.call(this,b,e);default:return c.b(b,e,x(arguments,2))}throw Error("Invalid arity: "+arguments.length);
};b.j=2;b.g=c.g;b.c=a;b.b=c.b;return b}(),mf=function lf(b,c){return new Ee(null,function(){var d=r(c);if(d){if(Wc(d)){for(var e=Ib(d),g=A(e),h=Ie(g),l=0;;)if(l<g){if(k(b.a?b.a(q.c(e,l)):b.call(null,q.c(e,l)))){var n=q.c(e,l);h.add(n)}l+=1}else break;return Le(h.R(),lf(b,Jb(d)))}e=s(d);d=v(d);return k(b.a?b.a(e):b.call(null,e))?z(e,lf(b,d)):lf(b,d)}return null},null,null)};function nf(a,b){var c;null!=a?a&&(a.p&4||a.lc)?(c=dd.d(Db,Cb(a),b),c=Eb(c)):c=dd.d(Ha,a,b):c=dd.d(Hc,uc,b);return c}
var of=function(){function a(a,b,c,l){return new Ee(null,function(){var n=r(l);if(n){var t=df(a,n);return a===A(t)?z(t,d.e(a,b,c,ef(b,n))):Ha(uc,df(a,Qe.c(t,c)))}return null},null,null)}function b(a,b,c){return new Ee(null,function(){var l=r(c);if(l){var n=df(a,l);return a===A(n)?z(n,d.d(a,b,ef(b,l))):null}return null},null,null)}function c(a,b){return d.d(a,a,b)}var d=null,d=function(d,g,h,l){switch(arguments.length){case 2:return c.call(this,d,g);case 3:return b.call(this,d,g,h);case 4:return a.call(this,
d,g,h,l)}throw Error("Invalid arity: "+arguments.length);};d.c=c;d.d=b;d.e=a;return d}();function pf(a,b){this.w=a;this.f=b}function qf(a){return new pf(a,[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null])}function rf(a){return new pf(a.w,Aa(a.f))}function sf(a){a=a.h;return 32>a?0:a-1>>>5<<5}function tf(a,b,c){for(;;){if(0===b)return c;var d=qf(a);d.f[0]=c;c=d;b-=5}}
var vf=function uf(b,c,d,e){var g=rf(d),h=b.h-1>>>c&31;5===c?g.f[h]=e:(d=d.f[h],b=null!=d?uf(b,c-5,d,e):tf(null,c-5,e),g.f[h]=b);return g};function wf(a,b){throw Error([p("No item "),p(a),p(" in vector of length "),p(b)].join(""));}function xf(a,b){if(0<=b&&b<a.h){if(b>=sf(a))return a.W;for(var c=a.root,d=a.shift;;)if(0<d)var e=d-5,c=c.f[b>>>d&31],d=e;else return c.f}else return wf(b,a.h)}
var zf=function yf(b,c,d,e,g){var h=rf(d);if(0===c)h.f[e&31]=g;else{var l=e>>>c&31;b=yf(b,c-5,d.f[l],e,g);h.f[l]=b}return h},Bf=function Af(b,c,d){var e=b.h-2>>>c&31;if(5<c){b=Af(b,c-5,d.f[e]);if(null==b&&0===e)return null;d=rf(d);d.f[e]=b;return d}return 0===e?null:m?(d=rf(d),d.f[e]=null,d):null};function Cf(a,b,c,d,e,g){this.i=a;this.h=b;this.shift=c;this.root=d;this.W=e;this.m=g;this.p=8196;this.l=167668511}f=Cf.prototype;
f.Ja=function(){return new Df(this.h,this.shift,Ef.a?Ef.a(this.root):Ef.call(null,this.root),Ff.a?Ff.a(this.W):Ff.call(null,this.W))};f.v=function(){var a=this.m;return null!=a?a:this.m=a=Bc(this)};f.A=function(a,b){return q.d(this,b,null)};f.B=function(a,b,c){return q.d(this,b,c)};
f.qa=function(a,b,c){if(0<=b&&b<this.h)return sf(this)<=b?(a=Aa(this.W),a[b&31]=c,new Cf(this.i,this.h,this.shift,this.root,a,null)):new Cf(this.i,this.h,this.shift,zf(this,this.shift,this.root,b,c),this.W,null);if(b===this.h)return Ha(this,c);if(m)throw Error([p("Index "),p(b),p(" out of bounds  [0,"),p(this.h),p("]")].join(""));return null};
f.call=function(){var a=null;return a=function(a,c,d){switch(arguments.length){case 2:return this.s(null,c);case 3:return this.$(null,c,d)}throw Error("Invalid arity: "+arguments.length);}}();f.apply=function(a,b){return this.call.apply(this,[this].concat(Aa(b)))};f.a=function(a){return this.s(null,a)};f.c=function(a,b){return this.$(null,a,b)};
f.D=function(a,b){if(32>this.h-sf(this)){for(var c=this.W.length,d=Array(c+1),e=0;;)if(e<c)d[e]=this.W[e],e+=1;else break;d[c]=b;return new Cf(this.i,this.h+1,this.shift,this.root,d,null)}c=(d=this.h>>>5>1<<this.shift)?this.shift+5:this.shift;d?(d=qf(null),d.f[0]=this.root,e=tf(null,this.shift,new pf(null,this.W)),d.f[1]=e):d=vf(this,this.shift,this.root,new pf(null,this.W));return new Cf(this.i,this.h+1,c,d,[b],null)};f.Ma=function(){return 0<this.h?new Cc(this,this.h-1,null):null};
f.La=function(){return q.c(this,0)};f.ab=function(){return q.c(this,1)};f.toString=function(){return Mb(this)};f.N=function(a,b){return xc.c(this,b)};f.O=function(a,b,c){return xc.d(this,b,c)};f.F=function(){return 0===this.h?null:32>this.h?x.a(this.W):m?Gf.d?Gf.d(this,0,0):Gf.call(null,this,0,0):null};f.J=function(){return this.h};f.ra=function(){return 0<this.h?q.c(this,this.h-1):null};
f.sa=function(){if(0===this.h)throw Error("Can't pop empty vector");if(1===this.h)return jb(D,this.i);if(1<this.h-sf(this))return new Cf(this.i,this.h-1,this.shift,this.root,this.W.slice(0,-1),null);if(m){var a=xf(this,this.h-2),b=Bf(this,this.shift,this.root),b=null==b?Hf:b,c=this.h-1;return 5<this.shift&&null==b.f[1]?new Cf(this.i,c,this.shift-5,b.f[0],a,null):new Cf(this.i,c,this.shift,b,a,null)}return null};f.Da=function(a,b,c){return Ta(this,b,c)};f.u=function(a,b){return Dc(this,b)};
f.G=function(a,b){return new Cf(b,this.h,this.shift,this.root,this.W,this.m)};f.C=function(){return this.i};f.s=function(a,b){return xf(this,b)[b&31]};f.$=function(a,b,c){return 0<=b&&b<this.h?q.c(this,b):c};f.I=function(){return Gc(D,this.i)};var Hf=new pf(null,[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]),D=new Cf(null,0,5,Hf,[],0);function If(a){return Eb(dd.d(Db,Cb(D),a))}
function Jf(a,b,c,d,e,g){this.Q=a;this.ea=b;this.o=c;this.off=d;this.i=e;this.m=g;this.l=32243948;this.p=1536}f=Jf.prototype;f.v=function(){var a=this.m;return null!=a?a:this.m=a=Bc(this)};f.ba=function(){if(this.off+1<this.ea.length){var a=Gf.e?Gf.e(this.Q,this.ea,this.o,this.off+1):Gf.call(null,this.Q,this.ea,this.o,this.off+1);return null==a?null:a}return Kb(this)};f.D=function(a,b){return z(b,this)};f.toString=function(){return Mb(this)};
f.N=function(a,b){return xc.c(Kf.d?Kf.d(this.Q,this.o+this.off,A(this.Q)):Kf.call(null,this.Q,this.o+this.off,A(this.Q)),b)};f.O=function(a,b,c){return xc.d(Kf.d?Kf.d(this.Q,this.o+this.off,A(this.Q)):Kf.call(null,this.Q,this.o+this.off,A(this.Q)),b,c)};f.F=function(){return this};f.P=function(){return this.ea[this.off]};f.V=function(){if(this.off+1<this.ea.length){var a=Gf.e?Gf.e(this.Q,this.ea,this.o,this.off+1):Gf.call(null,this.Q,this.ea,this.o,this.off+1);return null==a?uc:a}return Jb(this)};
f.gb=function(){var a=this.ea.length,a=this.o+a<Ea(this.Q)?Gf.d?Gf.d(this.Q,this.o+a,0):Gf.call(null,this.Q,this.o+a,0):null;return null==a?null:a};f.u=function(a,b){return Dc(this,b)};f.G=function(a,b){return Gf.k?Gf.k(this.Q,this.ea,this.o,this.off,b):Gf.call(null,this.Q,this.ea,this.o,this.off,b)};f.I=function(){return Gc(D,this.i)};f.hb=function(){return Je.c(this.ea,this.off)};
f.ib=function(){var a=this.ea.length,a=this.o+a<Ea(this.Q)?Gf.d?Gf.d(this.Q,this.o+a,0):Gf.call(null,this.Q,this.o+a,0):null;return null==a?uc:a};
var Gf=function(){function a(a,b,c,d,n){return new Jf(a,b,c,d,n,null)}function b(a,b,c,d){return new Jf(a,b,c,d,null,null)}function c(a,b,c){return new Jf(a,xf(a,b),b,c,null,null)}var d=null,d=function(d,g,h,l,n){switch(arguments.length){case 3:return c.call(this,d,g,h);case 4:return b.call(this,d,g,h,l);case 5:return a.call(this,d,g,h,l,n)}throw Error("Invalid arity: "+arguments.length);};d.d=c;d.e=b;d.k=a;return d}();
function Lf(a,b,c,d,e){this.i=a;this.da=b;this.start=c;this.end=d;this.m=e;this.l=32400159;this.p=8192}f=Lf.prototype;f.v=function(){var a=this.m;return null!=a?a:this.m=a=Bc(this)};f.A=function(a,b){return q.d(this,b,null)};f.B=function(a,b,c){return q.d(this,b,c)};f.qa=function(a,b,c){var d=this,e=d.start+b;return Mf.k?Mf.k(d.i,Lc.d(d.da,e,c),d.start,function(){var a=d.end,b=e+1;return a>b?a:b}(),null):Mf.call(null,d.i,Lc.d(d.da,e,c),d.start,function(){var a=d.end,b=e+1;return a>b?a:b}(),null)};
f.call=function(){var a=null;return a=function(a,c,d){switch(arguments.length){case 2:return this.s(null,c);case 3:return this.$(null,c,d)}throw Error("Invalid arity: "+arguments.length);}}();f.apply=function(a,b){return this.call.apply(this,[this].concat(Aa(b)))};f.a=function(a){return this.s(null,a)};f.c=function(a,b){return this.$(null,a,b)};
f.D=function(a,b){return Mf.k?Mf.k(this.i,eb(this.da,this.end,b),this.start,this.end+1,null):Mf.call(null,this.i,eb(this.da,this.end,b),this.start,this.end+1,null)};f.toString=function(){return Mb(this)};f.N=function(a,b){return xc.c(this,b)};f.O=function(a,b,c){return xc.d(this,b,c)};f.F=function(){var a=this;return function c(d){return d===a.end?null:z(q.c(a.da,d),new Ee(null,function(){return c(d+1)},null,null))}(a.start)};f.J=function(){return this.end-this.start};
f.ra=function(){return q.c(this.da,this.end-1)};f.sa=function(){if(this.start===this.end)throw Error("Can't pop empty vector");return Mf.k?Mf.k(this.i,this.da,this.start,this.end-1,null):Mf.call(null,this.i,this.da,this.start,this.end-1,null)};f.Da=function(a,b,c){return Ta(this,b,c)};f.u=function(a,b){return Dc(this,b)};f.G=function(a,b){return Mf.k?Mf.k(b,this.da,this.start,this.end,this.m):Mf.call(null,b,this.da,this.start,this.end,this.m)};f.C=function(){return this.i};
f.s=function(a,b){return 0>b||this.end<=this.start+b?wf(b,this.end-this.start):q.c(this.da,this.start+b)};f.$=function(a,b,c){return 0>b||this.end<=this.start+b?c:q.d(this.da,this.start+b,c)};f.I=function(){return Gc(D,this.i)};function Mf(a,b,c,d,e){for(;;)if(b instanceof Lf)c=b.start+c,d=b.start+d,b=b.da;else{var g=A(b);if(0>c||0>d||c>g||d>g)throw Error("Index out of bounds");return new Lf(a,b,c,d,e)}}
var Kf=function(){function a(a,b,c){return Mf(null,a,b,c,null)}function b(a,b){return c.d(a,b,A(a))}var c=null,c=function(c,e,g){switch(arguments.length){case 2:return b.call(this,c,e);case 3:return a.call(this,c,e,g)}throw Error("Invalid arity: "+arguments.length);};c.c=b;c.d=a;return c}();function Ef(a){return new pf({},Aa(a.f))}
function Ff(a){var b=[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];Yc(a,0,b,0,a.length);return b}var Of=function Nf(b,c,d,e){d=b.root.w===d.w?d:new pf(b.root.w,Aa(d.f));var g=b.h-1>>>c&31;if(5===c)b=e;else{var h=d.f[g];b=null!=h?Nf(b,c-5,h,e):tf(b.root.w,c-5,e)}d.f[g]=b;return d};function Df(a,b,c,d){this.h=a;this.shift=b;this.root=c;this.W=d;this.l=275;this.p=88}f=Df.prototype;
f.call=function(){var a=null;return a=function(a,c,d){switch(arguments.length){case 2:return this.A(null,c);case 3:return this.B(null,c,d)}throw Error("Invalid arity: "+arguments.length);}}();f.apply=function(a,b){return this.call.apply(this,[this].concat(Aa(b)))};f.a=function(a){return this.A(null,a)};f.c=function(a,b){return this.B(null,a,b)};f.A=function(a,b){return q.d(this,b,null)};f.B=function(a,b,c){return q.d(this,b,c)};
f.s=function(a,b){if(this.root.w)return xf(this,b)[b&31];throw Error("nth after persistent!");};f.$=function(a,b,c){return 0<=b&&b<this.h?q.c(this,b):c};f.J=function(){if(this.root.w)return this.h;throw Error("count after persistent!");};
f.Mb=function(a,b,c){var d=this;if(d.root.w){if(0<=b&&b<d.h)return sf(this)<=b?d.W[b&31]=c:(a=function g(a,l){var n=d.root.w===l.w?l:new pf(d.root.w,Aa(l.f));if(0===a)n.f[b&31]=c;else{var t=b>>>a&31,u=g(a-5,n.f[t]);n.f[t]=u}return n}.call(null,d.shift,d.root),d.root=a),this;if(b===d.h)return Db(this,c);if(m)throw Error([p("Index "),p(b),p(" out of bounds for TransientVector of length"),p(d.h)].join(""));return null}throw Error("assoc! after persistent!");};f.Oa=function(a,b,c){return Gb(this,b,c)};
f.Pa=function(a,b){if(this.root.w){if(32>this.h-sf(this))this.W[this.h&31]=b;else{var c=new pf(this.root.w,this.W),d=[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];d[0]=b;this.W=d;if(this.h>>>5>1<<this.shift){var d=[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],e=this.shift+
5;d[0]=this.root;d[1]=tf(this.root.w,this.shift,c);this.root=new pf(this.root.w,d);this.shift=e}else this.root=Of(this,this.shift,this.root,c)}this.h+=1;return this}throw Error("conj! after persistent!");};f.Qa=function(){if(this.root.w){this.root.w=null;var a=this.h-sf(this),b=Array(a);Yc(this.W,0,b,0,a);return new Cf(null,this.h,this.shift,this.root,b,null)}throw Error("persistent! called twice");};function Pf(a,b,c,d){this.i=a;this.aa=b;this.na=c;this.m=d;this.p=0;this.l=31850572}f=Pf.prototype;
f.v=function(){var a=this.m;return null!=a?a:this.m=a=Bc(this)};f.D=function(a,b){return z(b,this)};f.toString=function(){return Mb(this)};f.F=function(){return this};f.P=function(){return s(this.aa)};f.V=function(){var a=w(this.aa);return a?new Pf(this.i,a,this.na,null):null==this.na?Fa(this):new Pf(this.i,this.na,null,null)};f.u=function(a,b){return Dc(this,b)};f.G=function(a,b){return new Pf(b,this.aa,this.na,this.m)};f.C=function(){return this.i};f.I=function(){return Gc(uc,this.i)};
function Qf(a,b,c,d,e){this.i=a;this.count=b;this.aa=c;this.na=d;this.m=e;this.l=31858766;this.p=8192}f=Qf.prototype;f.v=function(){var a=this.m;return null!=a?a:this.m=a=Bc(this)};f.D=function(a,b){var c;k(this.aa)?(c=this.na,c=new Qf(this.i,this.count+1,this.aa,Hc.c(k(c)?c:D,b),null)):c=new Qf(this.i,this.count+1,Hc.c(this.aa,b),D,null);return c};f.toString=function(){return Mb(this)};f.F=function(){var a=r(this.na),b=this.aa;return k(k(b)?b:a)?new Pf(null,this.aa,r(a),null):null};f.J=function(){return this.count};
f.ra=function(){return s(this.aa)};f.sa=function(){if(k(this.aa)){var a=w(this.aa);return a?new Qf(this.i,this.count-1,a,this.na,null):new Qf(this.i,this.count-1,r(this.na),D,null)}return this};f.P=function(){return s(this.aa)};f.V=function(){return v(r(this))};f.u=function(a,b){return Dc(this,b)};f.G=function(a,b){return new Qf(b,this.count,this.aa,this.na,this.m)};f.C=function(){return this.i};f.I=function(){return Rf};var Rf=new Qf(null,0,null,D,0);function Sf(){this.p=0;this.l=2097152}
Sf.prototype.u=function(){return!1};var Tf=new Sf;function Uf(a,b){return ad(Uc(b)?A(a)===A(b)?Ve(Xe,bf.c(function(a){return mc.c(Jc.d(b,s(a),Tf),s(w(a)))},a)):null:null)}
function Vf(a,b){var c=a.f;if(b instanceof C)a:{for(var d=c.length,e=b.ya,g=0;;){if(d<=g){c=-1;break a}var h=c[g];if(h instanceof C&&e===h.ya){c=g;break a}if(m)g+=2;else{c=null;break a}}c=void 0}else if("string"==typeof b||"number"===typeof b)a:{d=c.length;for(e=0;;){if(d<=e){c=-1;break a}if(b===c[e]){c=e;break a}if(m)e+=2;else{c=null;break a}}c=void 0}else if(b instanceof pc)a:{d=c.length;e=b.Ba;for(g=0;;){if(d<=g){c=-1;break a}h=c[g];if(h instanceof pc&&e===h.Ba){c=g;break a}if(m)g+=2;else{c=null;
break a}}c=void 0}else if(null==b)a:{d=c.length;for(e=0;;){if(d<=e){c=-1;break a}if(null==c[e]){c=e;break a}if(m)e+=2;else{c=null;break a}}c=void 0}else if(m)a:{d=c.length;for(e=0;;){if(d<=e){c=-1;break a}if(mc.c(b,c[e])){c=e;break a}if(m)e+=2;else{c=null;break a}}c=void 0}else c=null;return c}function Wf(a,b,c){this.f=a;this.o=b;this.fa=c;this.p=0;this.l=32374990}f=Wf.prototype;f.v=function(){return Bc(this)};f.ba=function(){return this.o<this.f.length-2?new Wf(this.f,this.o+2,this.fa):null};
f.D=function(a,b){return z(b,this)};f.toString=function(){return Mb(this)};f.N=function(a,b){return Fc.c(b,this)};f.O=function(a,b,c){return Fc.d(b,c,this)};f.F=function(){return this};f.J=function(){return(this.f.length-this.o)/2};f.P=function(){return new Cf(null,2,5,Hf,[this.f[this.o],this.f[this.o+1]],null)};f.V=function(){return this.o<this.f.length-2?new Wf(this.f,this.o+2,this.fa):uc};f.u=function(a,b){return Dc(this,b)};f.G=function(a,b){return new Wf(this.f,this.o,b)};f.C=function(){return this.fa};
f.I=function(){return Gc(uc,this.fa)};function na(a,b,c,d){this.i=a;this.h=b;this.f=c;this.m=d;this.p=8196;this.l=16123663}f=na.prototype;f.Ja=function(){return new Xf({},this.f.length,Aa(this.f))};f.v=function(){var a=this.m;return null!=a?a:this.m=a=re(this)};f.A=function(a,b){return Ra.d(this,b,null)};f.B=function(a,b,c){a=Vf(this,b);return-1===a?c:this.f[a+1]};
f.qa=function(a,b,c){a=Vf(this,b);if(-1===a){if(this.h<Yf){a=this.f;for(var d=a.length,e=Array(d+2),g=0;;)if(g<d)e[g]=a[g],g+=1;else break;e[d]=b;e[d+1]=c;return new na(this.i,this.h+1,e,null)}return jb(Ta(nf(Zf,this),b,c),this.i)}return c===this.f[a+1]?this:m?(b=Aa(this.f),b[a+1]=c,new na(this.i,this.h,b,null)):null};f.Ia=function(a,b){return-1!==Vf(this,b)};
f.call=function(){var a=null;return a=function(a,c,d){switch(arguments.length){case 2:return this.A(null,c);case 3:return this.B(null,c,d)}throw Error("Invalid arity: "+arguments.length);}}();f.apply=function(a,b){return this.call.apply(this,[this].concat(Aa(b)))};f.a=function(a){return this.A(null,a)};f.c=function(a,b){return this.B(null,a,b)};f.D=function(a,b){return Vc(b)?Ta(this,q.c(b,0),q.c(b,1)):dd.d(Ha,this,b)};f.toString=function(){return Mb(this)};
f.F=function(){return 0<=this.f.length-2?new Wf(this.f,0,null):null};f.J=function(){return this.h};f.u=function(a,b){return Uf(this,b)};f.G=function(a,b){return new na(b,this.h,this.f,this.m)};f.C=function(){return this.i};f.I=function(){return jb(E,this.i)};
f.Ka=function(a,b){if(0<=Vf(this,b)){var c=this.f.length,d=c-2;if(0===d)return Fa(this);for(var d=Array(d),e=0,g=0;;){if(e>=c)return new na(this.i,this.h-1,d,null);if(mc.c(b,this.f[e]))e+=2;else if(m)d[g]=this.f[e],d[g+1]=this.f[e+1],g+=2,e+=2;else return null}}else return this};var E=new na(null,0,[],null),Yf=8;function $f(a){for(var b=a.length,c=0,d=Cb(E);;)if(c<b)var e=c+2,d=Fb(d,a[c],a[c+1]),c=e;else return Eb(d)}function Xf(a,b,c){this.Ga=a;this.ua=b;this.f=c;this.p=56;this.l=258}f=Xf.prototype;
f.Oa=function(a,b,c){if(k(this.Ga)){a=Vf(this,b);if(-1===a)return this.ua+2<=2*Yf?(this.ua+=2,this.f.push(b),this.f.push(c),this):Se.d(ag.c?ag.c(this.ua,this.f):ag.call(null,this.ua,this.f),b,c);c!==this.f[a+1]&&(this.f[a+1]=c);return this}throw Error("assoc! after persistent!");};
f.Pa=function(a,b){if(k(this.Ga)){if(b?b.l&2048||b.Xb||(b.l?0:va(Wa,b)):va(Wa,b))return Fb(this,se.a?se.a(b):se.call(null,b),te.a?te.a(b):te.call(null,b));for(var c=r(b),d=this;;){var e=s(c);if(k(e))c=w(c),d=Fb(d,se.a?se.a(e):se.call(null,e),te.a?te.a(e):te.call(null,e));else return d}}else throw Error("conj! after persistent!");};f.Qa=function(){if(k(this.Ga))return this.Ga=!1,new na(null,rd((this.ua-this.ua%2)/2),this.f,null);throw Error("persistent! called twice");};
f.A=function(a,b){return Ra.d(this,b,null)};f.B=function(a,b,c){if(k(this.Ga))return a=Vf(this,b),-1===a?c:this.f[a+1];throw Error("lookup after persistent!");};f.J=function(){if(k(this.Ga))return rd((this.ua-this.ua%2)/2);throw Error("count after persistent!");};function ag(a,b){for(var c=Cb(Zf),d=0;;)if(d<a)c=Se.d(c,b[d],b[d+1]),d+=2;else return c}function bg(){this.val=!1}function cg(a,b){return a===b?!0:a===b||a instanceof C&&b instanceof C&&a.ya===b.ya?!0:m?mc.c(a,b):null}
var dg=function(){function a(a,b,c,h,l){a=Aa(a);a[b]=c;a[h]=l;return a}function b(a,b,c){a=Aa(a);a[b]=c;return a}var c=null,c=function(c,e,g,h,l){switch(arguments.length){case 3:return b.call(this,c,e,g);case 5:return a.call(this,c,e,g,h,l)}throw Error("Invalid arity: "+arguments.length);};c.d=b;c.k=a;return c}();function eg(a,b){var c=Array(a.length-2);Yc(a,0,c,0,2*b);Yc(a,2*(b+1),c,2*b,c.length-2*b);return c}
var fg=function(){function a(a,b,c,h,l,n){a=a.Ha(b);a.f[c]=h;a.f[l]=n;return a}function b(a,b,c,h){a=a.Ha(b);a.f[c]=h;return a}var c=null,c=function(c,e,g,h,l,n){switch(arguments.length){case 4:return b.call(this,c,e,g,h);case 6:return a.call(this,c,e,g,h,l,n)}throw Error("Invalid arity: "+arguments.length);};c.e=b;c.n=a;return c}();function gg(a,b,c){this.w=a;this.H=b;this.f=c}f=gg.prototype;
f.ia=function(a,b,c,d,e,g){var h=1<<(c>>>b&31),l=oe(this.H&h-1);if(0===(this.H&h)){var n=oe(this.H);if(2*n<this.f.length){a=this.Ha(a);b=a.f;g.val=!0;a:for(c=2*(n-l),g=2*l+(c-1),n=2*(l+1)+(c-1);;){if(0===c)break a;b[n]=b[g];n-=1;c-=1;g-=1}b[2*l]=d;b[2*l+1]=e;a.H|=h;return a}if(16<=n){l=[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];l[c>>>b&31]=hg.ia(a,b+5,c,d,e,g);for(e=d=0;;)if(32>d)0!==
(this.H>>>d&1)&&(l[d]=null!=this.f[e]?hg.ia(a,b+5,rc(this.f[e]),this.f[e],this.f[e+1],g):this.f[e+1],e+=2),d+=1;else break;return new ig(a,n+1,l)}return m?(b=Array(2*(n+4)),Yc(this.f,0,b,0,2*l),b[2*l]=d,b[2*l+1]=e,Yc(this.f,2*l,b,2*(l+1),2*(n-l)),g.val=!0,a=this.Ha(a),a.f=b,a.H|=h,a):null}n=this.f[2*l];h=this.f[2*l+1];return null==n?(n=h.ia(a,b+5,c,d,e,g),n===h?this:fg.e(this,a,2*l+1,n)):cg(d,n)?e===h?this:fg.e(this,a,2*l+1,e):m?(g.val=!0,fg.n(this,a,2*l,null,2*l+1,jg.r?jg.r(a,b+5,n,h,c,d,e):jg.call(null,
a,b+5,n,h,c,d,e))):null};f.Ra=function(){return kg.a?kg.a(this.f):kg.call(null,this.f)};f.Ha=function(a){if(a===this.w)return this;var b=oe(this.H),c=Array(0>b?4:2*(b+1));Yc(this.f,0,c,0,2*b);return new gg(a,this.H,c)};
f.Sa=function(a,b,c){var d=1<<(b>>>a&31);if(0===(this.H&d))return this;var e=oe(this.H&d-1),g=this.f[2*e],h=this.f[2*e+1];return null==g?(a=h.Sa(a+5,b,c),a===h?this:null!=a?new gg(null,this.H,dg.d(this.f,2*e+1,a)):this.H===d?null:m?new gg(null,this.H^d,eg(this.f,e)):null):cg(c,g)?new gg(null,this.H^d,eg(this.f,e)):m?this:null};
f.ha=function(a,b,c,d,e){var g=1<<(b>>>a&31),h=oe(this.H&g-1);if(0===(this.H&g)){var l=oe(this.H);if(16<=l){h=[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];h[b>>>a&31]=hg.ha(a+5,b,c,d,e);for(d=c=0;;)if(32>c)0!==(this.H>>>c&1)&&(h[c]=null!=this.f[d]?hg.ha(a+5,rc(this.f[d]),this.f[d],this.f[d+1],e):this.f[d+1],d+=2),c+=1;else break;return new ig(null,l+1,h)}a=Array(2*(l+1));Yc(this.f,
0,a,0,2*h);a[2*h]=c;a[2*h+1]=d;Yc(this.f,2*h,a,2*(h+1),2*(l-h));e.val=!0;return new gg(null,this.H|g,a)}l=this.f[2*h];g=this.f[2*h+1];return null==l?(l=g.ha(a+5,b,c,d,e),l===g?this:new gg(null,this.H,dg.d(this.f,2*h+1,l))):cg(c,l)?d===g?this:new gg(null,this.H,dg.d(this.f,2*h+1,d)):m?(e.val=!0,new gg(null,this.H,dg.k(this.f,2*h,null,2*h+1,jg.n?jg.n(a+5,l,g,b,c,d):jg.call(null,a+5,l,g,b,c,d)))):null};
f.za=function(a,b,c,d){var e=1<<(b>>>a&31);if(0===(this.H&e))return d;var g=oe(this.H&e-1),e=this.f[2*g],g=this.f[2*g+1];return null==e?g.za(a+5,b,c,d):cg(c,e)?g:m?d:null};var hg=new gg(null,0,[]);function ig(a,b,c){this.w=a;this.h=b;this.f=c}f=ig.prototype;f.ia=function(a,b,c,d,e,g){var h=c>>>b&31,l=this.f[h];if(null==l)return a=fg.e(this,a,h,hg.ia(a,b+5,c,d,e,g)),a.h+=1,a;b=l.ia(a,b+5,c,d,e,g);return b===l?this:fg.e(this,a,h,b)};f.Ra=function(){return lg.a?lg.a(this.f):lg.call(null,this.f)};
f.Ha=function(a){return a===this.w?this:new ig(a,this.h,Aa(this.f))};f.Sa=function(a,b,c){var d=b>>>a&31,e=this.f[d];if(null!=e){a=e.Sa(a+5,b,c);if(a===e)d=this;else if(null==a)if(8>=this.h)a:{e=this.f;a=2*(this.h-1);b=Array(a);c=0;for(var g=1,h=0;;)if(c<a)c!==d&&null!=e[c]&&(b[g]=e[c],g+=2,h|=1<<c),c+=1;else{d=new gg(null,h,b);break a}d=void 0}else d=new ig(null,this.h-1,dg.d(this.f,d,a));else d=m?new ig(null,this.h,dg.d(this.f,d,a)):null;return d}return this};
f.ha=function(a,b,c,d,e){var g=b>>>a&31,h=this.f[g];if(null==h)return new ig(null,this.h+1,dg.d(this.f,g,hg.ha(a+5,b,c,d,e)));a=h.ha(a+5,b,c,d,e);return a===h?this:new ig(null,this.h,dg.d(this.f,g,a))};f.za=function(a,b,c,d){var e=this.f[b>>>a&31];return null!=e?e.za(a+5,b,c,d):d};function mg(a,b,c){b*=2;for(var d=0;;)if(d<b){if(cg(c,a[d]))return d;d+=2}else return-1}function ng(a,b,c,d){this.w=a;this.ta=b;this.h=c;this.f=d}f=ng.prototype;
f.ia=function(a,b,c,d,e,g){if(c===this.ta){b=mg(this.f,this.h,d);if(-1===b){if(this.f.length>2*this.h)return a=fg.n(this,a,2*this.h,d,2*this.h+1,e),g.val=!0,a.h+=1,a;c=this.f.length;b=Array(c+2);Yc(this.f,0,b,0,c);b[c]=d;b[c+1]=e;g.val=!0;g=this.h+1;a===this.w?(this.f=b,this.h=g,a=this):a=new ng(this.w,this.ta,g,b);return a}return this.f[b+1]===e?this:fg.e(this,a,b+1,e)}return(new gg(a,1<<(this.ta>>>b&31),[null,this,null,null])).ia(a,b,c,d,e,g)};
f.Ra=function(){return kg.a?kg.a(this.f):kg.call(null,this.f)};f.Ha=function(a){if(a===this.w)return this;var b=Array(2*(this.h+1));Yc(this.f,0,b,0,2*this.h);return new ng(a,this.ta,this.h,b)};f.Sa=function(a,b,c){a=mg(this.f,this.h,c);return-1===a?this:1===this.h?null:m?new ng(null,this.ta,this.h-1,eg(this.f,rd((a-a%2)/2))):null};
f.ha=function(a,b,c,d,e){return b===this.ta?(a=mg(this.f,this.h,c),-1===a?(a=2*this.h,b=Array(a+2),Yc(this.f,0,b,0,a),b[a]=c,b[a+1]=d,e.val=!0,new ng(null,this.ta,this.h+1,b)):mc.c(this.f[a],d)?this:new ng(null,this.ta,this.h,dg.d(this.f,a+1,d))):(new gg(null,1<<(this.ta>>>a&31),[null,this])).ha(a,b,c,d,e)};f.za=function(a,b,c,d){a=mg(this.f,this.h,c);return 0>a?d:cg(c,this.f[a])?this.f[a+1]:m?d:null};
var jg=function(){function a(a,b,c,h,l,n,t){var u=rc(c);if(u===l)return new ng(null,u,2,[c,h,n,t]);var y=new bg;return hg.ia(a,b,u,c,h,y).ia(a,b,l,n,t,y)}function b(a,b,c,h,l,n){var t=rc(b);if(t===h)return new ng(null,t,2,[b,c,l,n]);var u=new bg;return hg.ha(a,t,b,c,u).ha(a,h,l,n,u)}var c=null,c=function(c,e,g,h,l,n,t){switch(arguments.length){case 6:return b.call(this,c,e,g,h,l,n);case 7:return a.call(this,c,e,g,h,l,n,t)}throw Error("Invalid arity: "+arguments.length);};c.n=b;c.r=a;return c}();
function og(a,b,c,d,e){this.i=a;this.ja=b;this.o=c;this.L=d;this.m=e;this.p=0;this.l=32374860}f=og.prototype;f.v=function(){var a=this.m;return null!=a?a:this.m=a=Bc(this)};f.D=function(a,b){return z(b,this)};f.toString=function(){return Mb(this)};f.N=function(a,b){return Fc.c(b,this)};f.O=function(a,b,c){return Fc.d(b,c,this)};f.F=function(){return this};f.P=function(){return null==this.L?new Cf(null,2,5,Hf,[this.ja[this.o],this.ja[this.o+1]],null):s(this.L)};
f.V=function(){return null==this.L?kg.d?kg.d(this.ja,this.o+2,null):kg.call(null,this.ja,this.o+2,null):kg.d?kg.d(this.ja,this.o,w(this.L)):kg.call(null,this.ja,this.o,w(this.L))};f.u=function(a,b){return Dc(this,b)};f.G=function(a,b){return new og(b,this.ja,this.o,this.L,this.m)};f.C=function(){return this.i};f.I=function(){return Gc(uc,this.i)};
var kg=function(){function a(a,b,c){if(null==c)for(c=a.length;;)if(b<c){if(null!=a[b])return new og(null,a,b,null,null);var h=a[b+1];if(k(h)&&(h=h.Ra(),k(h)))return new og(null,a,b+2,h,null);b+=2}else return null;else return new og(null,a,b,c,null)}function b(a){return c.d(a,0,null)}var c=null,c=function(c,e,g){switch(arguments.length){case 1:return b.call(this,c);case 3:return a.call(this,c,e,g)}throw Error("Invalid arity: "+arguments.length);};c.a=b;c.d=a;return c}();
function pg(a,b,c,d,e){this.i=a;this.ja=b;this.o=c;this.L=d;this.m=e;this.p=0;this.l=32374860}f=pg.prototype;f.v=function(){var a=this.m;return null!=a?a:this.m=a=Bc(this)};f.D=function(a,b){return z(b,this)};f.toString=function(){return Mb(this)};f.N=function(a,b){return Fc.c(b,this)};f.O=function(a,b,c){return Fc.d(b,c,this)};f.F=function(){return this};f.P=function(){return s(this.L)};f.V=function(){return lg.e?lg.e(null,this.ja,this.o,w(this.L)):lg.call(null,null,this.ja,this.o,w(this.L))};
f.u=function(a,b){return Dc(this,b)};f.G=function(a,b){return new pg(b,this.ja,this.o,this.L,this.m)};f.C=function(){return this.i};f.I=function(){return Gc(uc,this.i)};
var lg=function(){function a(a,b,c,h){if(null==h)for(h=b.length;;)if(c<h){var l=b[c];if(k(l)&&(l=l.Ra(),k(l)))return new pg(a,b,c+1,l,null);c+=1}else return null;else return new pg(a,b,c,h,null)}function b(a){return c.e(null,a,0,null)}var c=null,c=function(c,e,g,h){switch(arguments.length){case 1:return b.call(this,c);case 4:return a.call(this,c,e,g,h)}throw Error("Invalid arity: "+arguments.length);};c.a=b;c.e=a;return c}();
function qg(a,b,c,d,e,g){this.i=a;this.h=b;this.root=c;this.X=d;this.ca=e;this.m=g;this.p=8196;this.l=16123663}f=qg.prototype;f.Ja=function(){return new rg({},this.root,this.h,this.X,this.ca)};f.v=function(){var a=this.m;return null!=a?a:this.m=a=re(this)};f.A=function(a,b){return Ra.d(this,b,null)};f.B=function(a,b,c){return null==b?this.X?this.ca:c:null==this.root?c:m?this.root.za(0,rc(b),b,c):null};
f.qa=function(a,b,c){if(null==b)return this.X&&c===this.ca?this:new qg(this.i,this.X?this.h:this.h+1,this.root,!0,c,null);a=new bg;b=(null==this.root?hg:this.root).ha(0,rc(b),b,c,a);return b===this.root?this:new qg(this.i,a.val?this.h+1:this.h,b,this.X,this.ca,null)};f.Ia=function(a,b){return null==b?this.X:null==this.root?!1:m?this.root.za(0,rc(b),b,Zc)!==Zc:null};
f.call=function(){var a=null;return a=function(a,c,d){switch(arguments.length){case 2:return this.A(null,c);case 3:return this.B(null,c,d)}throw Error("Invalid arity: "+arguments.length);}}();f.apply=function(a,b){return this.call.apply(this,[this].concat(Aa(b)))};f.a=function(a){return this.A(null,a)};f.c=function(a,b){return this.B(null,a,b)};f.D=function(a,b){return Vc(b)?Ta(this,q.c(b,0),q.c(b,1)):dd.d(Ha,this,b)};f.toString=function(){return Mb(this)};
f.F=function(){if(0<this.h){var a=null!=this.root?this.root.Ra():null;return this.X?z(new Cf(null,2,5,Hf,[null,this.ca],null),a):a}return null};f.J=function(){return this.h};f.u=function(a,b){return Uf(this,b)};f.G=function(a,b){return new qg(b,this.h,this.root,this.X,this.ca,this.m)};f.C=function(){return this.i};f.I=function(){return jb(Zf,this.i)};
f.Ka=function(a,b){if(null==b)return this.X?new qg(this.i,this.h-1,this.root,!1,null,null):this;if(null==this.root)return this;if(m){var c=this.root.Sa(0,rc(b),b);return c===this.root?this:new qg(this.i,this.h-1,c,this.X,this.ca,null)}return null};var Zf=new qg(null,0,null,!1,null,0);function Kc(a,b){for(var c=a.length,d=0,e=Cb(Zf);;)if(d<c)var g=d+1,e=e.Oa(null,a[d],b[d]),d=g;else return Eb(e)}function rg(a,b,c,d,e){this.w=a;this.root=b;this.count=c;this.X=d;this.ca=e;this.p=56;this.l=258}f=rg.prototype;
f.Oa=function(a,b,c){return sg(this,b,c)};f.Pa=function(a,b){var c;a:{if(this.w){if(b?b.l&2048||b.Xb||(b.l?0:va(Wa,b)):va(Wa,b)){c=sg(this,se.a?se.a(b):se.call(null,b),te.a?te.a(b):te.call(null,b));break a}c=r(b);for(var d=this;;){var e=s(c);if(k(e))c=w(c),d=sg(d,se.a?se.a(e):se.call(null,e),te.a?te.a(e):te.call(null,e));else{c=d;break a}}}else throw Error("conj! after persistent");c=void 0}return c};
f.Qa=function(){var a;if(this.w)this.w=null,a=new qg(null,this.count,this.root,this.X,this.ca,null);else throw Error("persistent! called twice");return a};f.A=function(a,b){return null==b?this.X?this.ca:null:null==this.root?null:this.root.za(0,rc(b),b)};f.B=function(a,b,c){return null==b?this.X?this.ca:c:null==this.root?c:this.root.za(0,rc(b),b,c)};f.J=function(){if(this.w)return this.count;throw Error("count after persistent!");};
function sg(a,b,c){if(a.w){if(null==b)a.ca!==c&&(a.ca=c),a.X||(a.count+=1,a.X=!0);else{var d=new bg;b=(null==a.root?hg:a.root).ia(a.w,0,rc(b),b,c,d);b!==a.root&&(a.root=b);d.val&&(a.count+=1)}return a}throw Error("assoc! after persistent!");}function tg(a,b,c){for(var d=b;;)if(null!=a)b=c?a.left:a.right,d=Hc.c(d,a),a=b;else return d}function ug(a,b,c,d,e){this.i=a;this.stack=b;this.Xa=c;this.h=d;this.m=e;this.p=0;this.l=32374862}f=ug.prototype;
f.v=function(){var a=this.m;return null!=a?a:this.m=a=Bc(this)};f.D=function(a,b){return z(b,this)};f.toString=function(){return Mb(this)};f.N=function(a,b){return Fc.c(b,this)};f.O=function(a,b,c){return Fc.d(b,c,this)};f.F=function(){return this};f.J=function(){return 0>this.h?A(w(this))+1:this.h};f.P=function(){return null==this.stack?null:bb(this.stack)};f.V=function(){var a=s(this.stack),a=tg(this.Xa?a.right:a.left,w(this.stack),this.Xa);return null!=a?new ug(null,a,this.Xa,this.h-1,null):uc};
f.u=function(a,b){return Dc(this,b)};f.G=function(a,b){return new ug(b,this.stack,this.Xa,this.h,this.m)};f.C=function(){return this.i};f.I=function(){return Gc(uc,this.i)};function vg(a,b,c,d){return c instanceof wg?c.left instanceof wg?new wg(c.key,c.val,c.left.pa(),new xg(a,b,c.right,d,null),null):c.right instanceof wg?new wg(c.right.key,c.right.val,new xg(c.key,c.val,c.left,c.right.left,null),new xg(a,b,c.right.right,d,null),null):m?new xg(a,b,c,d,null):null:new xg(a,b,c,d,null)}
function yg(a,b,c,d){return d instanceof wg?d.right instanceof wg?new wg(d.key,d.val,new xg(a,b,c,d.left,null),d.right.pa(),null):d.left instanceof wg?new wg(d.left.key,d.left.val,new xg(a,b,c,d.left.left,null),new xg(d.key,d.val,d.left.right,d.right,null),null):m?new xg(a,b,c,d,null):null:new xg(a,b,c,d,null)}
function zg(a,b,c,d){if(c instanceof wg)return new wg(a,b,c.pa(),d,null);if(d instanceof xg)return yg(a,b,c,d.Va());if(d instanceof wg&&d.left instanceof xg)return new wg(d.left.key,d.left.val,new xg(a,b,c,d.left.left,null),yg(d.key,d.val,d.left.right,d.right.Va()),null);if(m)throw Error("red-black tree invariant violation");return null}function xg(a,b,c,d,e){this.key=a;this.val=b;this.left=c;this.right=d;this.m=e;this.p=0;this.l=32402207}f=xg.prototype;
f.v=function(){var a=this.m;return null!=a?a:this.m=a=Bc(this)};f.A=function(a,b){return q.d(this,b,null)};f.B=function(a,b,c){return q.d(this,b,c)};f.qa=function(a,b,c){return Lc.d(new Cf(null,2,5,Hf,[this.key,this.val],null),b,c)};f.call=function(){var a=null;return a=function(a,c,d){switch(arguments.length){case 2:return this.A(null,c);case 3:return this.B(null,c,d)}throw Error("Invalid arity: "+arguments.length);}}();f.apply=function(a,b){return this.call.apply(this,[this].concat(Aa(b)))};
f.a=function(a){return this.A(null,a)};f.c=function(a,b){return this.B(null,a,b)};f.D=function(a,b){return new Cf(null,3,5,Hf,[this.key,this.val,b],null)};f.La=function(){return this.key};f.ab=function(){return this.val};f.Cb=function(a){return a.Eb(this)};f.Va=function(){return new wg(this.key,this.val,this.left,this.right,null)};f.replace=function(a,b,c,d){return new xg(a,b,c,d,null)};f.Bb=function(a){return a.Db(this)};f.Db=function(a){return new xg(a.key,a.val,this,a.right,null)};
f.Eb=function(a){return new xg(a.key,a.val,a.left,this,null)};f.pa=function(){return this};f.N=function(a,b){return xc.c(this,b)};f.O=function(a,b,c){return xc.d(this,b,c)};f.F=function(){return Ha(Ha(uc,this.val),this.key)};f.J=function(){return 2};f.ra=function(){return this.val};f.sa=function(){return new Cf(null,1,5,Hf,[this.key],null)};f.Da=function(a,b,c){return(new Cf(null,2,5,Hf,[this.key,this.val],null)).Da(null,b,c)};f.u=function(a,b){return Dc(this,b)};
f.G=function(a,b){return Gc(new Cf(null,2,5,Hf,[this.key,this.val],null),b)};f.C=function(){return null};f.s=function(a,b){return 0===b?this.key:1===b?this.val:null};f.$=function(a,b,c){return 0===b?this.key:1===b?this.val:m?c:null};f.I=function(){return D};function wg(a,b,c,d,e){this.key=a;this.val=b;this.left=c;this.right=d;this.m=e;this.p=0;this.l=32402207}f=wg.prototype;f.v=function(){var a=this.m;return null!=a?a:this.m=a=Bc(this)};f.A=function(a,b){return q.d(this,b,null)};
f.B=function(a,b,c){return q.d(this,b,c)};f.qa=function(a,b,c){return Lc.d(new Cf(null,2,5,Hf,[this.key,this.val],null),b,c)};f.call=function(){var a=null;return a=function(a,c,d){switch(arguments.length){case 2:return this.A(null,c);case 3:return this.B(null,c,d)}throw Error("Invalid arity: "+arguments.length);}}();f.apply=function(a,b){return this.call.apply(this,[this].concat(Aa(b)))};f.a=function(a){return this.A(null,a)};f.c=function(a,b){return this.B(null,a,b)};
f.D=function(a,b){return new Cf(null,3,5,Hf,[this.key,this.val,b],null)};f.La=function(){return this.key};f.ab=function(){return this.val};f.Cb=function(a){return new wg(this.key,this.val,this.left,a,null)};f.Va=function(){throw Error("red-black tree invariant violation");};f.replace=function(a,b,c,d){return new wg(a,b,c,d,null)};f.Bb=function(a){return new wg(this.key,this.val,a,this.right,null)};
f.Db=function(a){return this.left instanceof wg?new wg(this.key,this.val,this.left.pa(),new xg(a.key,a.val,this.right,a.right,null),null):this.right instanceof wg?new wg(this.right.key,this.right.val,new xg(this.key,this.val,this.left,this.right.left,null),new xg(a.key,a.val,this.right.right,a.right,null),null):m?new xg(a.key,a.val,this,a.right,null):null};
f.Eb=function(a){return this.right instanceof wg?new wg(this.key,this.val,new xg(a.key,a.val,a.left,this.left,null),this.right.pa(),null):this.left instanceof wg?new wg(this.left.key,this.left.val,new xg(a.key,a.val,a.left,this.left.left,null),new xg(this.key,this.val,this.left.right,this.right,null),null):m?new xg(a.key,a.val,a.left,this,null):null};f.pa=function(){return new xg(this.key,this.val,this.left,this.right,null)};f.N=function(a,b){return xc.c(this,b)};
f.O=function(a,b,c){return xc.d(this,b,c)};f.F=function(){return Ha(Ha(uc,this.val),this.key)};f.J=function(){return 2};f.ra=function(){return this.val};f.sa=function(){return new Cf(null,1,5,Hf,[this.key],null)};f.Da=function(a,b,c){return(new Cf(null,2,5,Hf,[this.key,this.val],null)).Da(null,b,c)};f.u=function(a,b){return Dc(this,b)};f.G=function(a,b){return Gc(new Cf(null,2,5,Hf,[this.key,this.val],null),b)};f.C=function(){return null};f.s=function(a,b){return 0===b?this.key:1===b?this.val:null};
f.$=function(a,b,c){return 0===b?this.key:1===b?this.val:m?c:null};f.I=function(){return D};
var Bg=function Ag(b,c,d,e,g){if(null==c)return new wg(d,e,null,null,null);var h=b.c?b.c(d,c.key):b.call(null,d,c.key);return 0===h?(g[0]=c,null):0>h?(b=Ag(b,c.left,d,e,g),null!=b?c.Bb(b):null):m?(b=Ag(b,c.right,d,e,g),null!=b?c.Cb(b):null):null},Dg=function Cg(b,c){if(null==b)return c;if(null==c)return b;if(b instanceof wg){if(c instanceof wg){var d=Cg(b.right,c.left);return d instanceof wg?new wg(d.key,d.val,new wg(b.key,b.val,b.left,d.left,null),new wg(c.key,c.val,d.right,c.right,null),null):new wg(b.key,
b.val,b.left,new wg(c.key,c.val,d,c.right,null),null)}return new wg(b.key,b.val,b.left,Cg(b.right,c),null)}return c instanceof wg?new wg(c.key,c.val,Cg(b,c.left),c.right,null):m?(d=Cg(b.right,c.left),d instanceof wg?new wg(d.key,d.val,new xg(b.key,b.val,b.left,d.left,null),new xg(c.key,c.val,d.right,c.right,null),null):zg(b.key,b.val,b.left,new xg(c.key,c.val,d,c.right,null))):null},Fg=function Eg(b,c,d,e){if(null!=c){var g=b.c?b.c(d,c.key):b.call(null,d,c.key);if(0===g)return e[0]=c,Dg(c.left,c.right);
if(0>g)return b=Eg(b,c.left,d,e),null!=b||null!=e[0]?c.left instanceof xg?zg(c.key,c.val,b,c.right):new wg(c.key,c.val,b,c.right,null):null;if(m){b=Eg(b,c.right,d,e);if(null!=b||null!=e[0])if(c.right instanceof xg)if(e=c.key,d=c.val,c=c.left,b instanceof wg)c=new wg(e,d,c,b.pa(),null);else if(c instanceof xg)c=vg(e,d,c.Va(),b);else if(c instanceof wg&&c.right instanceof xg)c=new wg(c.right.key,c.right.val,vg(c.key,c.val,c.left.Va(),c.right.left),new xg(e,d,c.right.right,b,null),null);else{if(m)throw Error("red-black tree invariant violation");
c=null}else c=new wg(c.key,c.val,c.left,b,null);else c=null;return c}}return null},Hg=function Gg(b,c,d,e){var g=c.key,h=b.c?b.c(d,g):b.call(null,d,g);return 0===h?c.replace(g,e,c.left,c.right):0>h?c.replace(g,c.val,Gg(b,c.left,d,e),c.right):m?c.replace(g,c.val,c.left,Gg(b,c.right,d,e)):null};function Ig(a,b,c,d,e){this.Z=a;this.xa=b;this.h=c;this.i=d;this.m=e;this.l=418776847;this.p=8192}f=Ig.prototype;f.v=function(){var a=this.m;return null!=a?a:this.m=a=re(this)};
f.A=function(a,b){return Ra.d(this,b,null)};f.B=function(a,b,c){a=Jg(this,b);return null!=a?a.val:c};f.qa=function(a,b,c){a=[null];var d=Bg(this.Z,this.xa,b,c,a);return null==d?(a=B.c(a,0),mc.c(c,a.val)?this:new Ig(this.Z,Hg(this.Z,this.xa,b,c),this.h,this.i,null)):new Ig(this.Z,d.pa(),this.h+1,this.i,null)};f.Ia=function(a,b){return null!=Jg(this,b)};
f.call=function(){var a=null;return a=function(a,c,d){switch(arguments.length){case 2:return this.A(null,c);case 3:return this.B(null,c,d)}throw Error("Invalid arity: "+arguments.length);}}();f.apply=function(a,b){return this.call.apply(this,[this].concat(Aa(b)))};f.a=function(a){return this.A(null,a)};f.c=function(a,b){return this.B(null,a,b)};f.D=function(a,b){return Vc(b)?Ta(this,q.c(b,0),q.c(b,1)):dd.d(Ha,this,b)};
f.Ma=function(){return 0<this.h?new ug(null,tg(this.xa,null,!1),!1,this.h,null):null};f.toString=function(){return Mb(this)};function Jg(a,b){for(var c=a.xa;;)if(null!=c){var d=a.Z.c?a.Z.c(b,c.key):a.Z.call(null,b,c.key);if(0===d)return c;if(0>d)c=c.left;else if(m)c=c.right;else return null}else return null}f.vb=function(a,b){return 0<this.h?new ug(null,tg(this.xa,null,b),b,this.h,null):null};
f.wb=function(a,b,c){if(0<this.h){a=null;for(var d=this.xa;;)if(null!=d){var e=this.Z.c?this.Z.c(b,d.key):this.Z.call(null,b,d.key);if(0===e)return new ug(null,Hc.c(a,d),c,-1,null);if(k(c))0>e?(a=Hc.c(a,d),d=d.left):d=d.right;else if(m)0<e?(a=Hc.c(a,d),d=d.right):d=d.left;else return null}else return null==a?null:new ug(null,a,c,-1,null)}else return null};f.ub=function(a,b){return se.a?se.a(b):se.call(null,b)};f.tb=function(){return this.Z};
f.F=function(){return 0<this.h?new ug(null,tg(this.xa,null,!0),!0,this.h,null):null};f.J=function(){return this.h};f.u=function(a,b){return Uf(this,b)};f.G=function(a,b){return new Ig(this.Z,this.xa,this.h,b,this.m)};f.C=function(){return this.i};f.I=function(){return Gc(Kg,this.i)};f.Ka=function(a,b){var c=[null],d=Fg(this.Z,this.xa,b,c);return null==d?null==B.c(c,0)?this:new Ig(this.Z,null,0,this.i,null):new Ig(this.Z,d.pa(),this.h-1,this.i,null)};
var Kg=new Ig(nc,null,0,null,0),Lg=function(){function a(a){var d=null;0<arguments.length&&(d=x(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){a=r(a);for(var b=Cb(Zf);;)if(a){var e=w(w(a)),b=Se.d(b,s(a),s(w(a)));a=e}else return Eb(b)}a.j=0;a.g=function(a){a=r(a);return b(a)};a.b=b;return a}(),Mg=function(){function a(a){var d=null;0<arguments.length&&(d=x(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){a=r(a);for(var b=Kg;;)if(a){var e=
w(w(a)),b=Lc.d(b,s(a),s(w(a)));a=e}else return b}a.j=0;a.g=function(a){a=r(a);return b(a)};a.b=b;return a}();function Ng(a,b){this.Aa=a;this.fa=b;this.p=0;this.l=32374988}f=Ng.prototype;f.v=function(){return Bc(this)};f.ba=function(){var a=this.Aa,a=(a?a.l&128||a.Kb||(a.l?0:va(Na,a)):va(Na,a))?this.Aa.ba(null):w(this.Aa);return null==a?null:new Ng(a,this.fa)};f.D=function(a,b){return z(b,this)};f.toString=function(){return Mb(this)};f.N=function(a,b){return Fc.c(b,this)};
f.O=function(a,b,c){return Fc.d(b,c,this)};f.F=function(){return this};f.P=function(){return this.Aa.P(null).La(null)};f.V=function(){var a=this.Aa,a=(a?a.l&128||a.Kb||(a.l?0:va(Na,a)):va(Na,a))?this.Aa.ba(null):w(this.Aa);return null!=a?new Ng(a,this.fa):uc};f.u=function(a,b){return Dc(this,b)};f.G=function(a,b){return new Ng(this.Aa,b)};f.C=function(){return this.fa};f.I=function(){return Gc(uc,this.fa)};function se(a){return Xa(a)}function te(a){return Ya(a)}
var Og=function(){function a(a){var d=null;0<arguments.length&&(d=x(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){return k(We(a))?dd.c(function(a,b){return Hc.c(k(a)?a:E,b)},a):null}a.j=0;a.g=function(a){a=r(a);return b(a)};a.b=b;return a}();function Pg(a,b,c){this.i=a;this.Ea=b;this.m=c;this.p=8196;this.l=15077647}f=Pg.prototype;f.Ja=function(){return new Qg(Cb(this.Ea))};
f.v=function(){var a=this.m;if(null!=a)return a;a:{for(var a=0,b=r(this);;)if(b)var c=s(b),a=(a+rc(c))%4503599627370496,b=w(b);else break a;a=void 0}return this.m=a};f.A=function(a,b){return Ra.d(this,b,null)};f.B=function(a,b,c){return Sa(this.Ea,b)?b:c};f.call=function(){var a=null;return a=function(a,c,d){switch(arguments.length){case 2:return this.A(null,c);case 3:return this.B(null,c,d)}throw Error("Invalid arity: "+arguments.length);}}();f.apply=function(a,b){return this.call.apply(this,[this].concat(Aa(b)))};
f.a=function(a){return this.A(null,a)};f.c=function(a,b){return this.B(null,a,b)};f.D=function(a,b){return new Pg(this.i,Lc.d(this.Ea,b,null),null)};f.toString=function(){return Mb(this)};f.F=function(){var a=r(this.Ea);return a?new Ng(a,null):null};f.Lb=function(a,b){return new Pg(this.i,Va(this.Ea,b),null)};f.J=function(){return Ea(this.Ea)};f.u=function(a,b){var c=this;return(null==b?!1:b?b.l&4096||b.rc?!0:b.l?!1:va($a,b):va($a,b))&&A(c)===A(b)&&Ve(function(a){return bd(c,a)},b)};
f.G=function(a,b){return new Pg(b,this.Ea,this.m)};f.C=function(){return this.i};f.I=function(){return Gc(Rg,this.i)};var Rg=new Pg(null,E,0);function Sg(a){var b=a.length;if(b<=Yf)for(var c=0,d=Cb(E);;)if(c<b)var e=c+1,d=Fb(d,a[c],null),c=e;else return new Pg(null,Eb(d),null);else for(c=0,d=Cb(Rg);;)if(c<b)e=c+1,d=Db(d,a[c]),c=e;else return Eb(d)}function Qg(a){this.wa=a;this.l=259;this.p=136}f=Qg.prototype;
f.call=function(){var a=null;return a=function(a,c,d){switch(arguments.length){case 2:return Ra.d(this.wa,c,Zc)===Zc?null:c;case 3:return Ra.d(this.wa,c,Zc)===Zc?d:c}throw Error("Invalid arity: "+arguments.length);}}();f.apply=function(a,b){return this.call.apply(this,[this].concat(Aa(b)))};f.a=function(a){return Ra.d(this.wa,a,Zc)===Zc?null:a};f.c=function(a,b){return Ra.d(this.wa,a,Zc)===Zc?b:a};f.A=function(a,b){return Ra.d(this,b,null)};f.B=function(a,b,c){return Ra.d(this.wa,b,Zc)===Zc?c:b};
f.J=function(){return A(this.wa)};f.Pa=function(a,b){this.wa=Se.d(this.wa,b,null);return this};f.Qa=function(){return new Pg(null,Eb(this.wa),null)};function Ce(a){if(a&&(a.p&4096||a.Zb))return a.name;if("string"===typeof a)return a;throw Error([p("Doesn't support name: "),p(a)].join(""));}var Ug=function Tg(b,c){return new Ee(null,function(){var d=r(c);return d?k(b.a?b.a(s(d)):b.call(null,s(d)))?z(s(d),Tg(b,v(d))):null:null},null,null)};
function Vg(a,b,c){return function(d){var e=wb(a);return b.c?b.c(e.c?e.c(vb(a,d),c):e.call(null,vb(a,d),c),0):b.call(null,e.c?e.c(vb(a,d),c):e.call(null,vb(a,d),c),0)}}
var Wg=function(){function a(a,b,c,h,l){var n=ub(a,c,!0);if(k(n)){var t=B.d(n,0,null);return Ug(Vg(a,h,l),k(Vg(a,b,c).call(null,t))?n:w(n))}return null}function b(a,b,c){var h=Vg(a,b,c);return k(Sg([gd,hd]).call(null,b))?(a=ub(a,c,!0),k(a)?(b=B.d(a,0,null),k(h.a?h.a(b):h.call(null,b))?a:w(a)):null):Ug(h,tb(a,!0))}var c=null,c=function(c,e,g,h,l){switch(arguments.length){case 3:return b.call(this,c,e,g);case 5:return a.call(this,c,e,g,h,l)}throw Error("Invalid arity: "+arguments.length);};c.d=b;c.k=
a;return c}(),Xg=function(){function a(a,b,c,h,l){var n=ub(a,l,!1);if(k(n)){var t=B.d(n,0,null);return Ug(Vg(a,b,c),k(Vg(a,h,l).call(null,t))?n:w(n))}return null}function b(a,b,c){var h=Vg(a,b,c);return k(Sg([ed,fd]).call(null,b))?(a=ub(a,c,!1),k(a)?(b=B.d(a,0,null),k(h.a?h.a(b):h.call(null,b))?a:w(a)):null):Ug(h,tb(a,!1))}var c=null,c=function(c,e,g,h,l){switch(arguments.length){case 3:return b.call(this,c,e,g);case 5:return a.call(this,c,e,g,h,l)}throw Error("Invalid arity: "+arguments.length);
};c.d=b;c.k=a;return c}();function Yg(a,b,c,d,e){this.i=a;this.start=b;this.end=c;this.step=d;this.m=e;this.l=32375006;this.p=8192}f=Yg.prototype;f.v=function(){var a=this.m;return null!=a?a:this.m=a=Bc(this)};f.ba=function(){return 0<this.step?this.start+this.step<this.end?new Yg(this.i,this.start+this.step,this.end,this.step,null):null:this.start+this.step>this.end?new Yg(this.i,this.start+this.step,this.end,this.step,null):null};f.D=function(a,b){return z(b,this)};f.toString=function(){return Mb(this)};
f.N=function(a,b){return xc.c(this,b)};f.O=function(a,b,c){return xc.d(this,b,c)};f.F=function(){return 0<this.step?this.start<this.end?this:null:this.start>this.end?this:null};f.J=function(){return ua(pb(this))?0:Math.ceil((this.end-this.start)/this.step)};f.P=function(){return null==pb(this)?null:this.start};f.V=function(){return null!=pb(this)?new Yg(this.i,this.start+this.step,this.end,this.step,null):uc};f.u=function(a,b){return Dc(this,b)};
f.G=function(a,b){return new Yg(b,this.start,this.end,this.step,this.m)};f.C=function(){return this.i};f.s=function(a,b){if(b<Ea(this))return this.start+b*this.step;if(this.start>this.end&&0===this.step)return this.start;throw Error("Index out of bounds");};f.$=function(a,b,c){return b<Ea(this)?this.start+b*this.step:this.start>this.end&&0===this.step?this.start:c};f.I=function(){return Gc(uc,this.i)};
var Zg=function(){function a(a,b,c){return new Yg(null,a,b,c,null)}function b(a,b){return e.d(a,b,1)}function c(a){return e.d(0,a,1)}function d(){return e.d(0,Number.MAX_VALUE,1)}var e=null,e=function(e,h,l){switch(arguments.length){case 0:return d.call(this);case 1:return c.call(this,e);case 2:return b.call(this,e,h);case 3:return a.call(this,e,h,l)}throw Error("Invalid arity: "+arguments.length);};e.q=d;e.a=c;e.c=b;e.d=a;return e}();
function $g(a){var b=ah.exec(a);return mc.c(s(b),a)?1===A(b)?s(b):If(b):null}function bh(a,b){var c=a.exec(b);return null==c?null:1===A(c)?s(c):If(c)}function ch(a){var b=bh(/^(?:\(\?([idmsux]*)\))?(.*)/,a);B.d(b,0,null);a=B.d(b,1,null);b=B.d(b,2,null);return RegExp(b,a)}
function dh(a,b,c,d,e,g,h){var l=la;try{la=null==la?null:la-1;if(null!=la&&0>la)return xb(a,"#");xb(a,c);r(h)&&(b.d?b.d(s(h),a,g):b.call(null,s(h),a,g));for(var n=w(h),t=ta.a(g);n&&(null==t||0!==t);){xb(a,d);b.d?b.d(s(n),a,g):b.call(null,s(n),a,g);var u=w(n);c=t-1;n=u;t=c}k(ta.a(g))&&(xb(a,d),b.d?b.d("...",a,g):b.call(null,"...",a,g));return xb(a,e)}finally{la=l}}
var eh=function(){function a(a,d){var e=null;1<arguments.length&&(e=x(Array.prototype.slice.call(arguments,1),0));return b.call(this,a,e)}function b(a,b){for(var e=r(b),g=null,h=0,l=0;;)if(l<h){var n=g.s(null,l);xb(a,n);l+=1}else if(e=r(e))g=e,Wc(g)?(e=Ib(g),h=Jb(g),g=e,n=A(e),e=h,h=n):(n=s(g),xb(a,n),e=w(g),g=null,h=0),l=0;else return null}a.j=1;a.g=function(a){var d=s(a);a=v(a);return b(d,a)};a.b=b;return a}(),fh={'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t"};
function gh(a){return[p('"'),p(a.replace(RegExp('[\\\\"\b\f\n\r\t]',"g"),function(a){return fh[a]})),p('"')].join("")}
var jh=function hh(b,c,d){if(null==b)return xb(c,"nil");if(void 0===b)return xb(c,"#\x3cundefined\x3e");if(m){k(function(){var c=Jc.c(d,ra);return k(c)?(c=b?b.l&131072||b.Yb?!0:b.l?!1:va(gb,b):va(gb,b))?Qc(b):c:c}())&&(xb(c,"^"),hh(Qc(b),c,d),xb(c," "));if(null==b)return xb(c,"nil");if(b.Qb)return b.ac(c);if(b&&(b.l&2147483648||b.K))return b.t(null,c,d);if(wa(b)===Boolean||"number"===typeof b)return xb(c,""+p(b));if(null!=b&&b.constructor===Object)return xb(c,"#js "),ih.e?ih.e(bf.c(function(c){return new Cf(null,
2,5,Hf,[De.a(c),b[c]],null)},Xc(b)),hh,c,d):ih.call(null,bf.c(function(c){return new Cf(null,2,5,Hf,[De.a(c),b[c]],null)},Xc(b)),hh,c,d);if(b instanceof Array)return dh(c,hh,"#js ["," ","]",d,b);if("string"==typeof b)return k(qa.a(d))?xb(c,gh(b)):xb(c,b);if(Nc(b))return eh.b(c,x(["#\x3c",""+p(b),"\x3e"],0));if(b instanceof Date){var e=function(b,c){for(var d=""+p(b);;)if(A(d)<c)d=[p("0"),p(d)].join("");else return d};return eh.b(c,x(['#inst "',""+p(b.getUTCFullYear()),"-",e(b.getUTCMonth()+1,2),"-",
e(b.getUTCDate(),2),"T",e(b.getUTCHours(),2),":",e(b.getUTCMinutes(),2),":",e(b.getUTCSeconds(),2),".",e(b.getUTCMilliseconds(),3),"-",'00:00"'],0))}return b instanceof RegExp?eh.b(c,x(['#"',b.source,'"'],0)):(b?b.l&2147483648||b.K||(b.l?0:va(yb,b)):va(yb,b))?zb(b,c,d):m?eh.b(c,x(["#\x3c",""+p(b),"\x3e"],0)):null}return null};
function kh(a,b){var c;if(null==a||ua(r(a)))c="";else{c=p;var d=new ha;a:{var e=new Lb(d);jh(s(a),e,b);for(var g=r(w(a)),h=null,l=0,n=0;;)if(n<l){var t=h.s(null,n);xb(e," ");jh(t,e,b);n+=1}else if(g=r(g))h=g,Wc(h)?(g=Ib(h),l=Jb(h),h=g,t=A(g),g=l,l=t):(t=s(h),xb(e," "),jh(t,e,b),g=w(h),h=null,l=0),n=0;else break a}c=""+c(d)}return c}
var lh=function(){function a(a){var d=null;0<arguments.length&&(d=x(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){return kh(a,ma())}a.j=0;a.g=function(a){a=r(a);return b(a)};a.b=b;return a}(),mh=function(){function a(a){var d=null;0<arguments.length&&(d=x(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){var b=Lc.d(ma(),qa,!1);a=kh(a,b);ka.a?ka.a(a):ka.call(null,a);return null}a.j=0;a.g=function(a){a=r(a);return b(a)};a.b=b;return a}();
function ih(a,b,c,d){return dh(c,function(a,c,d){b.d?b.d(Xa(a),c,d):b.call(null,Xa(a),c,d);xb(c," ");return b.d?b.d(Ya(a),c,d):b.call(null,Ya(a),c,d)},"{",", ","}",d,r(a))}Ng.prototype.K=!0;Ng.prototype.t=function(a,b,c){return dh(b,jh,"("," ",")",c,this)};tc.prototype.K=!0;tc.prototype.t=function(a,b,c){return dh(b,jh,"("," ",")",c,this)};Lf.prototype.K=!0;Lf.prototype.t=function(a,b,c){return dh(b,jh,"["," ","]",c,this)};Ke.prototype.K=!0;
Ke.prototype.t=function(a,b,c){return dh(b,jh,"("," ",")",c,this)};Ig.prototype.K=!0;Ig.prototype.t=function(a,b,c){return ih(this,jh,b,c)};na.prototype.K=!0;na.prototype.t=function(a,b,c){return ih(this,jh,b,c)};Qf.prototype.K=!0;Qf.prototype.t=function(a,b,c){return dh(b,jh,"#queue ["," ","]",c,r(this))};Ee.prototype.K=!0;Ee.prototype.t=function(a,b,c){return dh(b,jh,"("," ",")",c,this)};Cc.prototype.K=!0;Cc.prototype.t=function(a,b,c){return dh(b,jh,"("," ",")",c,this)};og.prototype.K=!0;
og.prototype.t=function(a,b,c){return dh(b,jh,"("," ",")",c,this)};wg.prototype.K=!0;wg.prototype.t=function(a,b,c){return dh(b,jh,"["," ","]",c,this)};Jf.prototype.K=!0;Jf.prototype.t=function(a,b,c){return dh(b,jh,"("," ",")",c,this)};qg.prototype.K=!0;qg.prototype.t=function(a,b,c){return ih(this,jh,b,c)};Pg.prototype.K=!0;Pg.prototype.t=function(a,b,c){return dh(b,jh,"#{"," ","}",c,this)};Cf.prototype.K=!0;Cf.prototype.t=function(a,b,c){return dh(b,jh,"["," ","]",c,this)};ue.prototype.K=!0;
ue.prototype.t=function(a,b,c){return dh(b,jh,"("," ",")",c,this)};Wf.prototype.K=!0;Wf.prototype.t=function(a,b,c){return dh(b,jh,"("," ",")",c,this)};ve.prototype.K=!0;ve.prototype.t=function(a,b){return xb(b,"()")};xg.prototype.K=!0;xg.prototype.t=function(a,b,c){return dh(b,jh,"["," ","]",c,this)};ze.prototype.K=!0;ze.prototype.t=function(a,b,c){return dh(b,jh,"("," ",")",c,this)};Yg.prototype.K=!0;Yg.prototype.t=function(a,b,c){return dh(b,jh,"("," ",")",c,this)};pg.prototype.K=!0;
pg.prototype.t=function(a,b,c){return dh(b,jh,"("," ",")",c,this)};ug.prototype.K=!0;ug.prototype.t=function(a,b,c){return dh(b,jh,"("," ",")",c,this)};Cf.prototype.Za=!0;Cf.prototype.$a=function(a,b){return cd.c(this,b)};Lf.prototype.Za=!0;Lf.prototype.$a=function(a,b){return cd.c(this,b)};C.prototype.Za=!0;C.prototype.$a=function(a,b){return lc(this,b)};pc.prototype.Za=!0;pc.prototype.$a=function(a,b){return lc(this,b)};
function nh(a,b,c,d){this.state=a;this.i=b;this.hc=c;this.oa=d;this.l=2153938944;this.p=2}f=nh.prototype;f.v=function(){return this[ca]||(this[ca]=++da)};f.yb=function(a,b,c){a=r(this.oa);for(var d=null,e=0,g=0;;)if(g<e){var h=d.s(null,g),l=B.d(h,0,null),h=B.d(h,1,null);h.e?h.e(l,this,b,c):h.call(null,l,this,b,c);g+=1}else if(a=r(a))Wc(a)?(d=Ib(a),a=Jb(a),l=d,e=A(d),d=l):(d=s(a),l=B.d(d,0,null),h=B.d(d,1,null),h.e?h.e(l,this,b,c):h.call(null,l,this,b,c),a=w(a),d=null,e=0),g=0;else return null};
f.xb=function(a,b,c){return this.oa=Lc.d(this.oa,b,c)};f.t=function(a,b,c){xb(b,"#\x3cAtom: ");jh(this.state,b,c);return xb(b,"\x3e")};f.C=function(){return this.i};f.Gb=function(){return this.state};f.u=function(a,b){return this===b};
var ph=function(){function a(a){return new nh(a,null,null,null)}var b=null,c=function(){function a(c,d){var l=null;1<arguments.length&&(l=x(Array.prototype.slice.call(arguments,1),0));return b.call(this,c,l)}function b(a,c){var d=$c(c)?Pc.c(Lg,c):c,e=Jc.c(d,oh),d=Jc.c(d,ra);return new nh(a,d,e,null)}a.j=1;a.g=function(a){var c=s(a);a=v(a);return b(c,a)};a.b=b;return a}(),b=function(b,e){switch(arguments.length){case 1:return a.call(this,b);default:return c.b(b,x(arguments,1))}throw Error("Invalid arity: "+
arguments.length);};b.j=1;b.g=c.g;b.a=a;b.b=c.b;return b}();function qh(a,b){var c=a.hc;if(null!=c&&!k(c.a?c.a(b):c.call(null,b)))throw Error([p("Assert failed: "),p("Validator rejected reference state"),p("\n"),p(lh.b(x([ye(new pc(null,"validate","validate",1233162959,null),new pc(null,"new-value","new-value",972165309,null))],0)))].join(""));c=a.state;a.state=b;null!=a.oa&&Ab(a,c,b);return b}
var rh=function(){function a(a,b,c,d,e){return qh(a,b.e?b.e(a.state,c,d,e):b.call(null,a.state,c,d,e))}function b(a,b,c,d){return qh(a,b.d?b.d(a.state,c,d):b.call(null,a.state,c,d))}function c(a,b,c){return qh(a,b.c?b.c(a.state,c):b.call(null,a.state,c))}function d(a,b){return qh(a,b.a?b.a(a.state):b.call(null,a.state))}var e=null,g=function(){function a(c,d,e,g,h,Y){var ia=null;5<arguments.length&&(ia=x(Array.prototype.slice.call(arguments,5),0));return b.call(this,c,d,e,g,h,ia)}function b(a,c,d,
e,g,h){return qh(a,Pc.b(c,a.state,d,e,g,x([h],0)))}a.j=5;a.g=function(a){var c=s(a);a=w(a);var d=s(a);a=w(a);var e=s(a);a=w(a);var g=s(a);a=w(a);var h=s(a);a=v(a);return b(c,d,e,g,h,a)};a.b=b;return a}(),e=function(e,l,n,t,u,y){switch(arguments.length){case 2:return d.call(this,e,l);case 3:return c.call(this,e,l,n);case 4:return b.call(this,e,l,n,t);case 5:return a.call(this,e,l,n,t,u);default:return g.b(e,l,n,t,u,x(arguments,5))}throw Error("Invalid arity: "+arguments.length);};e.j=5;e.g=g.g;e.c=
d;e.d=c;e.e=b;e.k=a;e.b=g.b;return e}();function sh(){var a=th();return fb(a)}function uh(a,b,c){return Bb(a,b,c)}var vh=null,wh=function(){function a(a){null==vh&&(vh=ph.a(0));return sc.a([p(a),p(rh.c(vh,wc))].join(""))}function b(){return c.a("G__")}var c=null,c=function(c){switch(arguments.length){case 0:return b.call(this);case 1:return a.call(this,c)}throw Error("Invalid arity: "+arguments.length);};c.q=b;c.a=a;return c}(),xh={};
function yh(a){if(a?a.Vb:a)return a.Vb(a);var b;b=yh[ba(null==a?null:a)];if(!b&&(b=yh._,!b))throw ya("IEncodeJS.-clj-\x3ejs",a);return b.call(null,a)}function zh(a){return(a?k(k(null)?null:a.Ub)||(a.Pb?0:va(xh,a)):va(xh,a))?yh(a):"string"===typeof a||"number"===typeof a||a instanceof C||a instanceof pc?Ah.a?Ah.a(a):Ah.call(null,a):lh.b(x([a],0))}
var Ah=function Bh(b){if(null==b)return null;if(b?k(k(null)?null:b.Ub)||(b.Pb?0:va(xh,b)):va(xh,b))return yh(b);if(b instanceof C)return Ce(b);if(b instanceof pc)return""+p(b);if(Uc(b)){var c={};b=r(b);for(var d=null,e=0,g=0;;)if(g<e){var h=d.s(null,g),l=B.d(h,0,null),h=B.d(h,1,null);c[zh(l)]=Bh(h);g+=1}else if(b=r(b))Wc(b)?(e=Ib(b),b=Jb(b),d=e,e=A(e)):(e=s(b),d=B.d(e,0,null),e=B.d(e,1,null),c[zh(d)]=Bh(e),b=w(b),d=null,e=0),g=0;else break;return c}if(null==b?0:b?b.l&8||b.kc||(b.l?0:va(Ga,b)):va(Ga,
b)){c=[];b=r(bf.c(Bh,b));d=null;for(g=e=0;;)if(g<e)l=d.s(null,g),c.push(l),g+=1;else if(b=r(b))d=b,Wc(d)?(b=Ib(d),g=Jb(d),d=b,e=A(b),b=g):(b=s(d),c.push(b),b=w(d),d=null,e=0),g=0;else break;return c}return m?b:null},Ch=null;function th(){null==Ch&&(Ch=ph.a(new na(null,3,[Dh,E,Eh,E,Fh,E],null)));return Ch}
var Gh=function(){function a(a,b,g){var h=mc.c(b,g);if(!h&&!(h=bd(Fh.a(a).call(null,b),g))&&(h=Vc(g))&&(h=Vc(b)))if(h=A(g)===A(b))for(var h=!0,l=0;;)if(h&&l!==A(g))h=c.d(a,b.a?b.a(l):b.call(null,l),g.a?g.a(l):g.call(null,l)),l+=1;else return h;else return h;else return h}function b(a,b){return c.d(sh(),a,b)}var c=null,c=function(c,e,g){switch(arguments.length){case 2:return b.call(this,c,e);case 3:return a.call(this,c,e,g)}throw Error("Invalid arity: "+arguments.length);};c.c=b;c.d=a;return c}(),
Hh=function(){function a(a,b){var c=Jc.c(Dh.a(a),b);return r(c)?c:null}function b(a){return c.c(sh(),a)}var c=null,c=function(c,e){switch(arguments.length){case 1:return b.call(this,c);case 2:return a.call(this,c,e)}throw Error("Invalid arity: "+arguments.length);};c.a=b;c.c=a;return c}();function Ih(a,b,c,d){rh.c(a,function(){return fb(b)});rh.c(c,function(){return fb(d)})}
var Kh=function Jh(b,c,d){var e=fb(d).call(null,b),e=k(k(e)?e.a?e.a(c):e.call(null,c):e)?!0:null;if(k(e))return e;e=function(){for(var e=Hh.a(c);;)if(0<A(e))Jh(b,s(e),d),e=v(e);else return null}();if(k(e))return e;e=function(){for(var e=Hh.a(b);;)if(0<A(e))Jh(s(e),c,d),e=v(e);else return null}();return k(e)?e:!1};function Lh(a,b,c){c=Kh(a,b,c);return k(c)?c:Gh.c(a,b)}
var Nh=function Mh(b,c,d,e,g,h,l){var n=dd.d(function(e,h){var l=B.d(h,0,null);B.d(h,1,null);if(Gh.d(fb(d),c,l)){var n;n=(n=null==e)?n:Lh(l,s(e),g);n=k(n)?h:e;if(!k(Lh(s(n),l,g)))throw Error([p("Multiple methods in multimethod '"),p(b),p("' match dispatch value: "),p(c),p(" -\x3e "),p(l),p(" and "),p(s(n)),p(", and neither is preferred")].join(""));return n}return e},null,fb(e));if(k(n)){if(mc.c(fb(l),fb(d)))return rh.e(h,Lc,c,s(w(n))),s(w(n));Ih(h,e,l,d);return Mh(b,c,d,e,g,h,l)}return null};
function Oh(a,b){if(a?a.Jb:a)return a.Jb(0,b);var c;c=Oh[ba(null==a?null:a)];if(!c&&(c=Oh._,!c))throw ya("IMultiFn.-get-method",a);return c.call(null,a,b)}function Ph(a,b){if(a?a.Ib:a)return a.Ib(0,b);var c;c=Ph[ba(null==a?null:a)];if(!c&&(c=Ph._,!c))throw ya("IMultiFn.-dispatch",a);return c.call(null,a,b)}function Qh(a,b,c,d,e,g,h,l){this.name=a;this.cc=b;this.bc=c;this.bb=d;this.Ta=e;this.fc=g;this.cb=h;this.Ya=l;this.l=4194304;this.p=256}f=Qh.prototype;
f.v=function(){return this[ca]||(this[ca]=++da)};function Rh(a,b,c){rh.e(a.Ta,Lc,b,c);Ih(a.cb,a.Ta,a.Ya,a.bb)}f.Jb=function(a,b){mc.c(fb(this.Ya),fb(this.bb))||Ih(this.cb,this.Ta,this.Ya,this.bb);var c=fb(this.cb).call(null,b);if(k(c))return c;c=Nh(this.name,b,this.bb,this.Ta,this.fc,this.cb,this.Ya);return k(c)?c:fb(this.Ta).call(null,this.bc)};
f.Ib=function(a,b){var c=this.name,d=Pc.c(this.cc,b),e=Oh(this,d);if(!k(e))throw Error([p("No method in multimethod '"),p(c),p("' for dispatch value: "),p(d)].join(""));return Pc.c(e,b)};f.call=function(){function a(a,b){var e=null;1<arguments.length&&(e=x(Array.prototype.slice.call(arguments,1),0));return Ph(this,e)}function b(a,b){return Ph(this,b)}a.j=1;a.g=function(a){s(a);a=v(a);return b(0,a)};a.b=b;return a}();f.apply=function(a,b){return Ph(this,b)};
function Sh(a){this.Ab=a;this.p=0;this.l=2153775104}Sh.prototype.v=function(){return fa(lh.b(x([this],0)))};Sh.prototype.t=function(a,b){return xb(b,[p('#uuid "'),p(this.Ab),p('"')].join(""))};Sh.prototype.u=function(a,b){return b instanceof Sh&&this.Ab===b.Ab};var sa=new C(null,"dup","dup"),G=new C(null,"href","href"),Eh=new C(null,"descendants","descendants"),Th=new C(null,"html","html"),oc=new C(null,"default","default"),Uh=new C(null,"text","text"),Vh=new C(null,"dependencies","dependencies"),Wh=new C(null,"history","history"),Xh=new C(null,"background","background"),Yh=new C(null,"alt","alt"),Zh=new C(null,"focus-select","focus-select"),$h=new C(null,"scroll-to","scroll-to"),ai=new C("tailrecursion.javelin","none","tailrecursion.javelin/none"),bi=new C(null,
"callback","callback"),H=new C(null,"class","class"),ci=new C(null,"percent","percent"),di=new C(null,"fade-toggle","fade-toggle"),Dh=new C(null,"parents","parents"),pa=new C(null,"flush-on-newline","flush-on-newline"),ei=new C(null,"hierarchy","hierarchy"),fi=new C(null,"style","style"),gi=new C(null,"data-background","data-background"),hi=new C(null,"src","src"),ii=new C(null,"focus","focus"),ji=new C(null,"data-markdown","data-markdown"),ki=new C(null,"data-transition","data-transition"),I=new C(null,
"title","title"),li=new C(null,"do-toggle","do-toggle"),Fh=new C(null,"ancestors","ancestors"),mi=new C(null,"success","success"),ni=new C(null,"toggle","toggle"),oi=new C(null,"css","css"),pi=new C(null,"transition","transition"),qi=new C(null,"url","url"),ri=new C(null,"markdown","markdown"),ta=new C(null,"print-length","print-length"),si=new C(null,"type","type"),m=new C(null,"else","else"),qa=new C(null,"readably","readably"),ti=new C(null,"dataType","dataType"),oh=new C(null,"validator","validator"),
ra=new C(null,"meta","meta"),ui=new C("tailrecursion.javelin","cell","tailrecursion.javelin/cell"),vi=new C("tailrecursion.priority-map","not-found","tailrecursion.priority-map/not-found"),wi=new C(null,"theme","theme"),xi=new C(null,"scrollTop","scrollTop"),yi=new C(null,"id","id"),zi=new C(null,"async","async"),Ai=new C(null,"value","value"),Bi=new C(null,"select","select"),Ci=new C(null,"attr","attr"),Di=new C(null,"slide-toggle","slide-toggle"),Ei=new C(null,"rel","rel"),Fi=new C("tailrecursion.hoplon",
"default","tailrecursion.hoplon/default");var Gi=function(){function a(a,d){var e=null;1<arguments.length&&(e=x(Array.prototype.slice.call(arguments,1),0));return b.call(this,0,e)}function b(a,b){throw Error(Pc.c(p,b));}a.j=1;a.g=function(a){s(a);a=v(a);return b(0,a)};a.b=b;return a}();ch("([-+]?)(?:(0)|([1-9][0-9]*)|0[xX]([0-9A-Fa-f]+)|0([0-7]+)|([1-9][0-9]?)[rR]([0-9A-Za-z]+)|0[0-9]+)(N)?");ch("([-+]?[0-9]+)/([0-9]+)");ch("([-+]?[0-9]+(\\.[0-9]*)?([eE][-+]?[0-9]+)?)(M)?");ch("[:]?([^0-9/].*/)?([^0-9/][^/]*)");ch("[0-9A-Fa-f]{2}");ch("[0-9A-Fa-f]{4}");
function Hi(a){if(mc.c(3,A(a)))return a;if(3<A(a))return qe.d(a,0,3);if(m)for(a=new ha(a);;)if(3>a.Fa.length)a=a.append("0");else return a.toString();else return null}var Ii=function(){var a=new Cf(null,13,5,Hf,[null,31,28,31,30,31,30,31,31,30,31,30,31],null),b=new Cf(null,13,5,Hf,[null,31,29,31,30,31,30,31,31,30,31,30,31],null);return function(c,d){return Jc.c(k(d)?b:a,c)}}(),ah=/(\d\d\d\d)(?:-(\d\d)(?:-(\d\d)(?:[T](\d\d)(?::(\d\d)(?::(\d\d)(?:[.](\d+))?)?)?)?)?)?(?:[Z]|([-+])(\d\d):(\d\d))?/;
function Ji(a){a=parseInt(a);return ua(isNaN(a))?a:null}function Ki(a,b,c,d){a<=b&&b<=c||Gi.b(null,x([[p(d),p(" Failed:  "),p(a),p("\x3c\x3d"),p(b),p("\x3c\x3d"),p(c)].join("")],0));return b}
function Li(a){var b=$g(a);B.d(b,0,null);var c=B.d(b,1,null),d=B.d(b,2,null),e=B.d(b,3,null),g=B.d(b,4,null),h=B.d(b,5,null),l=B.d(b,6,null),n=B.d(b,7,null),t=B.d(b,8,null),u=B.d(b,9,null),y=B.d(b,10,null);if(ua(b))return Gi.b(null,x([[p("Unrecognized date/time syntax: "),p(a)].join("")],0));a=Ji(c);var b=function(){var a=Ji(d);return k(a)?a:1}(),c=function(){var a=Ji(e);return k(a)?a:1}(),F=function(){var a=Ji(g);return k(a)?a:0}(),Y=function(){var a=Ji(h);return k(a)?a:0}(),ia=function(){var a=
Ji(l);return k(a)?a:0}(),oa=function(){var a=Ji(Hi(n));return k(a)?a:0}(),t=(mc.c(t,"-")?-1:1)*(60*function(){var a=Ji(u);return k(a)?a:0}()+function(){var a=Ji(y);return k(a)?a:0}());return new Cf(null,8,5,Hf,[a,Ki(1,b,12,"timestamp month field must be in range 1..12"),Ki(1,c,Ii.c?Ii.c(b,0===(a%4+4)%4&&(0!==(a%100+100)%100||0===(a%400+400)%400)):Ii.call(null,b,0===(a%4+4)%4&&(0!==(a%100+100)%100||0===(a%400+400)%400)),"timestamp day field must be in range 1..last day in month"),Ki(0,F,23,"timestamp hour field must be in range 0..23"),
Ki(0,Y,59,"timestamp minute field must be in range 0..59"),Ki(0,ia,mc.c(Y,59)?60:59,"timestamp second field must be in range 0..60"),Ki(0,oa,999,"timestamp millisecond field must be in range 0..999"),t],null)}
var Mi=ph.a(new na(null,4,["inst",function(a){var b;if("string"===typeof a)if(b=Li(a),k(b)){a=B.d(b,0,null);var c=B.d(b,1,null),d=B.d(b,2,null),e=B.d(b,3,null),g=B.d(b,4,null),h=B.d(b,5,null),l=B.d(b,6,null);b=B.d(b,7,null);b=new Date(Date.UTC(a,c-1,d,e,g,h,l)-6E4*b)}else b=Gi.b(null,x([[p("Unrecognized date/time syntax: "),p(a)].join("")],0));else b=Gi.b(null,x(["Instance literal expects a string for its timestamp."],0));return b},"uuid",function(a){return"string"===typeof a?new Sh(a):Gi.b(null,
x(["UUID literal expects a string as its representation."],0))},"queue",function(a){return Vc(a)?nf(Rf,a):Gi.b(null,x(["Queue literal expects a vector for its elements."],0))},"js",function(a){if(Vc(a)){var b=[];a=r(a);for(var c=null,d=0,e=0;;)if(e<d){var g=c.s(null,e);b.push(g);e+=1}else if(a=r(a))c=a,Wc(c)?(a=Ib(c),e=Jb(c),c=a,d=A(a),a=e):(a=s(c),b.push(a),a=w(c),c=null,d=0),e=0;else break;return b}if(Uc(a)){b={};a=r(a);c=null;for(e=d=0;;)if(e<d){var h=c.s(null,e),g=B.d(h,0,null),h=B.d(h,1,null);
b[Ce(g)]=h;e+=1}else if(a=r(a))Wc(a)?(d=Ib(a),a=Jb(a),c=d,d=A(d)):(d=s(a),c=B.d(d,0,null),d=B.d(d,1,null),b[Ce(c)]=d,a=w(a),c=null,d=0),e=0;else break;return b}return m?Gi.b(null,x([[p("JS literal expects a vector or map containing "),p("only string or unqualified keyword keys")].join("")],0)):null}],null));ph.a(null);function Ni(a,b,c,d){this.M=a;this.U=b;this.i=c;this.m=d;this.p=0;this.l=2565220111}f=Ni.prototype;f.v=function(){var a=this.m;return null!=a?a:this.m=a=re(this)};f.A=function(a,b){return Jc.c(this.U,b)};f.B=function(a,b,c){return Jc.d(this.U,b,c)};
f.qa=function(a,b,c){a=Jc.d(this.U,b,null);if(k(a)){if(mc.c(a,c))return this;var d=Jc.c(this.M,a);return mc.c(A(d),1)?new Ni(Lc.d(Mc.c(this.M,a),c,Hc.c(Jc.d(this.M,c,Rg),b)),Lc.d(this.U,b,c),this.i,null):new Ni(Lc.b(this.M,a,Rc.c(Jc.c(this.M,a),b),x([c,Hc.c(Jc.d(this.M,c,Rg),b)],0)),Lc.d(this.U,b,c),this.i,null)}return new Ni(Lc.d(this.M,c,Hc.c(Jc.d(this.M,c,Rg),b)),Lc.d(this.U,b,c),this.i,null)};f.Ia=function(a,b){return bd(this.U,b)};
f.call=function(){var a=null;return a=function(a,c,d){switch(arguments.length){case 2:return this.A(null,c);case 3:return this.B(null,c,d)}throw Error("Invalid arity: "+arguments.length);}}();f.apply=function(a,b){return this.call.apply(this,[this].concat(Aa(b)))};f.a=function(a){return this.A(null,a)};f.c=function(a,b){return this.B(null,a,b)};f.t=function(a,b,c){return dh(b,function(a){return dh(b,jh,""," ","",c,a)},"#tailrecursion.priority-map {",", ","}",c,this)};
f.D=function(a,b){return Vc(b)?Ta(this,q.c(b,0),q.c(b,1)):dd.d(Ha,this,b)};
f.Ma=function(){var a=this;return r(function(){return function c(a){return new Ee(null,function(){for(var e=a;;){var g=r(e);if(g){var h=g,l=s(h),n=B.d(l,0,null),t=B.d(l,1,null);if(g=r(function(a,c,d,e,g,h){return function xa(l){return new Ee(null,function(a,c,d){return function(){for(;;){var a=r(l);if(a){if(Wc(a)){var c=Ib(a),e=A(c),g=Ie(e);a:{for(var h=0;;)if(h<e){var n=q.c(c,h);g.add(new Cf(null,2,5,Hf,[n,d],null));h+=1}else{c=!0;break a}c=void 0}return c?Le(g.R(),xa(Jb(a))):Le(g.R(),null)}g=s(a);
return z(new Cf(null,2,5,Hf,[g,d],null),xa(v(a)))}return null}}}(a,c,d,e,g,h),null,null)}}(e,l,n,t,h,g)(t)))return Qe.c(g,c(v(e)));e=v(e)}else return null}},null,null)}(sb(a.M))}())};f.vb=function(a,b){return(k(b)?r:we).call(null,this)};
f.wb=function(a,b,c){var d=k(c)?Wg.d(this.M,hd,b):Xg.d(this.M,fd,b);return r(function(){return function g(a){return new Ee(null,function(){for(var b=a;;){var c=r(b);if(c){var d=c,u=s(d),y=B.d(u,0,null),F=B.d(u,1,null);if(c=r(function(a,b,c,d,g,h){return function Za(l){return new Ee(null,function(a,b,c){return function(){for(;;){var a=r(l);if(a){if(Wc(a)){var b=Ib(a),d=A(b),g=Ie(d);a:{for(var h=0;;)if(h<d){var n=q.c(b,h);g.add(new Cf(null,2,5,Hf,[n,c],null));h+=1}else{b=!0;break a}b=void 0}return b?
Le(g.R(),Za(Jb(a))):Le(g.R(),null)}g=s(a);return z(new Cf(null,2,5,Hf,[g,c],null),Za(v(a)))}return null}}}(a,b,c,d,g,h),null,null)}}(b,u,y,F,d,c)(F)))return Qe.c(c,g(v(b)));b=v(b)}else return null}},null,null)}(d)}())};f.ub=function(a,b){return Ya(b)};f.tb=function(){return nc};
f.F=function(){var a=this;return r(function(){return function c(a){return new Ee(null,function(){for(var e=a;;){var g=r(e);if(g){var h=g,l=s(h),n=B.d(l,0,null),t=B.d(l,1,null);if(g=r(function(a,c,d,e,g,h){return function xa(l){return new Ee(null,function(a,c,d){return function(){for(;;){var a=r(l);if(a){if(Wc(a)){var c=Ib(a),e=A(c),g=Ie(e);a:{for(var h=0;;)if(h<e){var n=q.c(c,h);g.add(new Cf(null,2,5,Hf,[n,d],null));h+=1}else{c=!0;break a}c=void 0}return c?Le(g.R(),xa(Jb(a))):Le(g.R(),null)}g=s(a);
return z(new Cf(null,2,5,Hf,[g,d],null),xa(v(a)))}return null}}}(a,c,d,e,g,h),null,null)}}(e,l,n,t,h,g)(t)))return Qe.c(g,c(v(e)));e=v(e)}else return null}},null,null)}(a.M)}())};f.J=function(){return A(this.U)};f.ra=function(){if(0===A(this.U))return null;var a=s(this.M);return new Cf(null,2,5,Hf,[s(Ya(a)),Xa(a)],null)};
f.sa=function(){if(0===A(this.U))throw Error("Can't pop empty priority map");var a=s(this.M),b=Ya(a),c=s(b),a=Xa(a);return mc.c(A(b),1)?new Ni(Mc.c(this.M,a),Mc.c(this.U,c),this.i,null):new Ni(Lc.d(this.M,a,Rc.c(b,c)),Mc.c(this.U,c),this.i,null)};f.u=function(a,b){return mb(this.U,b)};f.G=function(a,b){return new Ni(this.M,this.U,b,this.m)};f.C=function(){return this.i};f.I=function(){return Gc(Oi,this.i)};
f.Ka=function(a,b){var c=this.U.c?this.U.c(b,vi):this.U.call(null,b,vi);if(mc.c(c,vi))return this;var d=this.M.a?this.M.a(c):this.M.call(null,c);return mc.c(A(d),1)?new Ni(Mc.c(this.M,c),Mc.c(this.U,b),this.i,null):new Ni(Lc.d(this.M,c,Rc.c(d,b)),Mc.c(this.U,b),this.i,null)};var Oi=new Ni(Mg(),E,E,null),Pi=""+p("tailrecursion.priority-map");Jc.c(fb(Mi),Pi);rh.e(Mi,Lc,Pi,function(a){return Uc(a)?nf(Oi,a):Gi.b(null,x(["Priority map literal expects a map for its elements."],0))});
var Qi=function(){function a(a){var d=null;0<arguments.length&&(d=x(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){a=r(a);for(var b=Oi;;)if(a){var e=w(w(a)),b=Lc.d(b,s(a),s(w(a)));a=e}else return b}a.j=0;a.g=function(a){a=r(a);return b(a)};a.b=b;return a}();function Ri(a,b){var c=Xe;return function e(b){var h=null==b?null:bb(b);return k(h)?new Ee(null,function(){return z(h,e(nf(null==b?null:cb(b),k(c.a?c.a(h):c.call(null,h))?a.a?a.a(h):a.call(null,h):null)))},null,null):null}(Hc.c(Rf,b))}var Si=ph.a(0);function Ti(){return rh.c(Si,wc)}function Ui(a){return k(Vi.a?Vi.a(a):Vi.call(null,a))?fb(a):a}
function Wi(a){for(var b=Qi.b(x([a,a.ma],0));;)if(r(b)){a=se(null==b?null:bb(b));var c=a.Rb.call(null),d=Ue.c(c,a.prev),e=function(){return function(a,b){return Lc.d(a,b,b.ma)}}(b,a,c,d),b=null==b?null:cb(b),g=a.ka;d&&(a.prev=c);b=d?dd.d(e,b,g):b}else return null}
function Xi(a){var b=a.Wa;a.Wa=D;a.oa=E;for(var b=r(mf(Vi,b)),c=null,d=0,e=0;;)if(e<d){var g=c.s(null,e);g.ka=Rc.c(g.ka,a);e+=1}else if(b=r(b))c=b,Wc(c)?(b=Ib(c),d=Jb(c),c=b,g=A(b),b=d,d=g):(g=s(c),g.ka=Rc.c(g.ka,a),b=w(c),c=null,d=0),e=0;else break}
var Yi=function(){function a(a,d){var e=null;1<arguments.length&&(e=x(Array.prototype.slice.call(arguments,1),0));return b.call(this,a,e)}function b(a,b){var e=B.d(b,0,null),g=B.d(b,1,null);Xi(a);a.Wa=k(e)?Hc.c(If(g),e):If(g);for(var g=r(mf(Vi,a.Wa)),h=null,l=0,n=0;;)if(n<l){var t=h.s(null,n);t.ka=Hc.c(t.ka,a);if(t.ma>a.ma)for(var t=r(Ri(function(){return function(a){return a.ka}}(g,h,l,n,t),t)),u=null,y=0,F=0;;)if(F<y)u.s(null,F).ma=Ti(),F+=1;else if(t=r(t))u=t,Wc(u)?(t=Ib(u),F=Jb(u),u=t,y=A(t),
t=F):(s(u).ma=Ti(),t=w(u),u=null,y=0),F=0;else break;n+=1}else if(u=r(g)){t=u;if(Wc(t))g=Ib(t),n=Jb(t),h=g,l=A(g),g=n;else{y=s(t);y.ka=Hc.c(y.ka,a);if(y.ma>a.ma)for(g=r(Ri(function(){return function(a){return a.ka}}(g,h,l,n,y,t,u),y)),h=null,n=l=0;;)if(n<l)h.s(null,n).ma=Ti(),n+=1;else if(g=r(g))h=g,Wc(h)?(g=Ib(h),n=Jb(h),h=g,l=A(g),g=n):(s(h).ma=Ti(),g=w(h),h=null,l=0),n=0;else break;g=w(t);h=null;l=0}n=0}else break;g=function(b){return function(){for(var d=a.state,e=b(a.Wa),g=r(Mc.c(a.oa,ui)),h=
null,l=0,n=0;;)if(n<l){var t=h.s(null,n),u=B.d(t,0,null),t=B.d(t,1,null);t.e?t.e(u,a,d,e):t.call(null,u,a,d,e);n+=1}else if(g=r(g))Wc(g)?(l=Ib(g),g=Jb(g),h=l,l=A(l)):(l=s(g),h=B.d(l,0,null),l=B.d(l,1,null),l.e?l.e(h,a,d,e):l.call(null,h,a,d,e),g=w(g),h=null,l=0),n=0;else break;return a.state=e}}(function(a){return Pc.c(Ui(null==a?null:bb(a)),bf.c(Ui,null==a?null:cb(a)))});Bb(a,ui,k(e)?function(){throw Error("formula cell can't be updated via swap! or reset!");}:function(a,b){return Wi(b)});a.dc=k(e)?
!1:!0;a.Rb=k(e)?g:function(){return fb(a)};Wi(a);return a}a.j=1;a.g=function(a){var d=s(a);a=v(a);return b(d,a)};a.b=b;return a}();function Zi(a,b,c,d,e,g,h,l,n){this.i=a;this.state=b;this.ma=c;this.prev=d;this.Wa=e;this.ka=g;this.Rb=h;this.oa=l;this.dc=n;this.p=2;this.l=2147647488}f=Zi.prototype;
f.yb=function(a,b,c){a=r(this.oa);for(var d=null,e=0,g=0;;)if(g<e){var h=d.s(null,g),l=B.d(h,0,null),h=B.d(h,1,null);h.e?h.e(l,this,b,c):h.call(null,l,this,b,c);g+=1}else if(a=r(a))Wc(a)?(d=Ib(a),a=Jb(a),l=d,e=A(d),d=l):(d=s(a),l=B.d(d,0,null),h=B.d(d,1,null),h.e?h.e(l,this,b,c):h.call(null,l,this,b,c),a=w(a),d=null,e=0),g=0;else return null};f.xb=function(a,b,c){return this.oa=Lc.d(this.oa,b,c)};f.Gb=function(){return this.state};f.C=function(){return this.i};
f.t=function(a,b){return eh.b(b,x(["#\x3cCell: ",lh.b(x([this.state],0)),"\x3e"],0))};function $i(a){return function(){function b(a){var b=null;0<arguments.length&&(b=x(Array.prototype.slice.call(arguments,0),0));return c.call(this,b)}function c(b){return Yi.b(aj.a?aj.a(ai):aj.call(null,ai),x([a,b],0))}b.j=0;b.g=function(a){a=r(a);return c(a)};b.b=c;return b}()}function aj(a){return Yi(new Zi(E,a,Ti(),a,D,Rg,null,E,null))}function Vi(a){return mc.c(wa(a),Zi)?a:null}
function bj(a,b){var c=$i(r).call(null,b),d=function(){return function(a,b){try{return B.c(a,b)}catch(c){if(c instanceof Error)return null;if(m)throw c;return null}}}(c);return bf.c(function(b){return $i(Ye.c(a,d)).call(null,c,b)},Zg.c(0,A(fb(c))))};var cj=ua(window.Node),dj=ua(cj)?function(a){return a instanceof Node}:function(a){try{return a.nodeType}catch(b){if(b instanceof Error)return null;if(m)throw b;return null}},ej=ua(cj)?Vc:function(a){try{return Vc(a)}catch(b){if(b instanceof Error)return null;if(m)throw b;return null}},fj=ua(cj)?$c:function(a){try{return $c(a)}catch(b){if(b instanceof Error)return null;if(m)throw b;return null}},ka=function(a){var b=console;return k(k(b)?console.log:b)?console.log(a):null},gj=function(){function a(a,
b,c){try{return B.d(a,b,c)}catch(h){if(h instanceof Error)return c;if(m)throw h;return null}}function b(a,b){return c.d(a,b,null)}var c=null,c=function(c,e,g){switch(arguments.length){case 2:return b.call(this,c,e);case 3:return a.call(this,c,e,g)}throw Error("Invalid arity: "+arguments.length);};c.c=b;c.d=a;return c}(),hj=function(){function a(a,b){return window.setTimeout(a,b)}function b(a){return c.c(a,0)}var c=null,c=function(c,e){switch(arguments.length){case 1:return b.call(this,c);case 2:return a.call(this,
c,e)}throw Error("Invalid arity: "+arguments.length);};c.a=b;c.c=a;return c}(),jj=function ij(b){return kf.c(function(b){var d;d=fj.a?fj.a(b):fj.call(null,b);d=k(d)?d:ej.a?ej.a(b):ej.call(null,b);return k(d)?ij(b):new Cf(null,1,5,Hf,[b],null)},b)};function kj(a,b){return hj.a(function d(){return k(document.documentElement.contains(a))?b.q?b.q():b.call(null):hj.c(d,20)})}
function lj(a){var b=B.d(a,0,null),c=pe(a),d=Ye.c(Ae,s),e=function(a){return function(b){return bf.c(If,Ug(a,of.c(2,b)))}}(d),d=function(a){return function(b){return kf.c(Xe,ff(a,of.e(2,2,D,b)))}}(d,e);return Uc(b)?new Cf(null,2,5,Hf,[b,c],null):b instanceof C?new Cf(null,2,5,Hf,[nf(E,e(a)),d(a)],null):m?new Cf(null,2,5,Hf,[E,a],null):null}
function mj(a,b){function c(a,b){var c;c=Ce(b);var d;a:{for(d=c;;){var e=w(d);if(null!=e)d=e;else{d=s(d);break a}}d=void 0}c=mc.c("\x3d",d)?c.slice(0,-1):c;d=c.substr(0,3);return De.c(Be(b),mc.c(a,d)?c.substr(3):c)}for(var d=Ze.c(c,"do-"),e=Ze.c(c,"on-"),g=ph.a(E),h=ph.a(E),l=r(b),n=null,t=0,u=0;;)if(u<t){var y=n.s(null,u),F=B.d(y,0,null),y=B.d(y,1,null);k(Vi(y))?rh.e(g,Lc,d.a?d.a(F):d.call(null,F),y):Nc(y)?rh.e(h,Lc,e.a?e.a(F):e.call(null,F),y):m&&(nj.d?nj.d(a,d.a?d.a(F):d.call(null,F),y):nj.call(null,
a,d.a?d.a(F):d.call(null,F),y));u+=1}else if(l=r(l))Wc(l)?(t=Ib(l),l=Jb(l),n=t,t=A(t)):(t=s(l),n=B.d(t,0,null),t=B.d(t,1,null),k(Vi(t))?rh.e(g,Lc,d.a?d.a(n):d.call(null,n),t):Nc(t)?rh.e(h,Lc,e.a?e.a(n):e.call(null,n),t):m&&(nj.d?nj.d(a,d.a?d.a(n):d.call(null,n),t):nj.call(null,a,d.a?d.a(n):d.call(null,n),t)),l=w(l),n=null,t=0),u=0;else break;r(fb(g))&&setTimeout(function(){for(var b=r(fb(g)),c=null,d=0,e=0;;)if(e<d){var h=c.s(null,e),l=B.d(h,0,null),n=B.d(h,1,null);nj.d?nj.d(a,l,fb(n)):nj.call(null,
a,l,fb(n));uh(n,wh.q(),function(b,c,d,e,g,h){return function(b,c,d,e){return nj.d?nj.d(a,h,e):nj.call(null,a,h,e)}}(b,c,d,e,h,l,n));e+=1}else{var t=r(b);if(t){h=t;if(Wc(h))b=Ib(h),e=Jb(h),c=b,d=A(b),b=e;else{var u=s(h),l=B.d(u,0,null),n=B.d(u,1,null);nj.d?nj.d(a,l,fb(n)):nj.call(null,a,l,fb(n));uh(n,wh.q(),function(b,c,d,e,g,h){return function(b,c,d,e){return nj.d?nj.d(a,h,e):nj.call(null,a,h,e)}}(b,c,d,e,u,l,n,h,t));b=w(h);c=null;d=0}e=0}else return null}},0);r(fb(h))&&setTimeout(function(){for(var b=
r(fb(h)),c=null,d=0,e=0;;)if(e<d){var g=c.s(null,e),l=B.d(g,0,null),g=B.d(g,1,null);oj.d?oj.d(a,l,g):oj.call(null,a,l,g);e+=1}else if(b=r(b))Wc(b)?(c=Ib(b),b=Jb(b),l=c,d=A(c),c=l):(c=s(b),l=B.d(c,0,null),g=B.d(c,1,null),oj.d?oj.d(a,l,g):oj.call(null,a,l,g),b=w(b),c=null,d=0),e=0;else return null},0);return a}var pj=ua(cj)?function(a,b){return a.appendChild(b)}:function(a,b){try{return a.appendChild(b)}catch(c){if(c instanceof Error)return null;if(m)throw c;return null}};
function qj(a,b){function c(b){var c=jQuery(a);c.empty();c.append(b);return c}var d=B.d(b,0,null);pe(b);if(k(Vi(d)))c(fb(d)),uh(d,wh.q(),function(a,b,d,e){return c(e)});else for(var d=r(af(function(a){return"string"===typeof a?rj.a?rj.a(a):rj.call(null,a):k(dj.a?dj.a(a):dj.call(null,a))?a:null},jj(b))),e=null,g=0,h=0;;)if(h<g){var l=e.s(null,h);pj.c?pj.c(a,l):pj.call(null,a,l);h+=1}else if(d=r(d))e=d,Wc(e)?(d=Ib(e),h=Jb(e),e=d,g=A(d),d=h):(d=s(e),pj.c?pj.c(a,d):pj.call(null,a,d),d=w(e),e=null,g=0),
h=0;else break}f=Element.prototype;f.call=function(){function a(a,d){var e=null;1<arguments.length&&(e=x(Array.prototype.slice.call(arguments,1),0));return b.call(this,0,e)}function b(a,b){var e=lj(b),g=B.d(e,0,null),e=B.d(e,1,null);k(this.zb)?this.zb(g,e):(mj(this,g),qj(this,e));return this}a.j=1;a.g=function(a){s(a);a=v(a);return b(0,a)};a.b=b;return a}();f.apply=function(a,b){return this.call.apply(this,[this].concat(Aa(b)))};
f.c=function(){function a(a){var d=null;0<arguments.length&&(d=x(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){var b=lj(a);a=B.d(b,0,null);b=B.d(b,1,null);k(this.zb)?this.zb(a,b):(mj(this,a),qj(this,b));return this}a.j=0;a.g=function(a){a=r(a);return b(a)};a.b=b;return a}();f.K=!0;f.t=function(a,b){return eh.b(b,x(["#\x3cElement: ",this.tagName,"\x3e"],0))};
function sj(a){return function(){function b(a){var b=null;0<arguments.length&&(b=x(Array.prototype.slice.call(arguments,0),0));return c.call(this,b)}function c(b){var c=document.getElementsByTagName(a)[0],g=document.createElement(a);k(c)&&c.parentNode.replaceChild(g,c);return Pc.c(g,b)}b.j=0;b.g=function(a){a=r(a);return c(a)};b.b=c;return b}()}
function tj(a){return function(){function b(a){var b=null;0<arguments.length&&(b=x(Array.prototype.slice.call(arguments,0),0));return c.call(this,b)}function c(b){return Pc.c(document.createElement(a),b)}b.j=0;b.g=function(a){a=r(a);return c(a)};b.b=c;return b}()}
var J=sj("body"),K=sj("head"),uj=sj("html"),L=tj("a"),M=tj("b"),N=tj("code"),vj=tj("div"),wj=tj("em"),xj=tj("h1"),yj=tj("h2"),O=tj("h3"),P=tj("img"),Q=tj("li"),zj=tj("link"),Aj=tj("ol"),R=tj("p"),Bj=tj("pre"),Cj=tj("script"),Dj=tj("section"),Ej=tj("span"),Fj=tj("table"),S=tj("td"),T=tj("th"),U=tj("tr"),V=tj("ul");function rj(a){return document.createTextNode(a)}var Gj=ph.a(!1),Hj=ph.a(D);function Ij(a){k(fb(Gj))?a.q?a.q():a.call(null):rh.d(Hj,Hc,a)}
function Jj(){return setTimeout(function(){jQuery("body").on("submit",function(a){return a.preventDefault()});qh(Gj,!0);for(var a=r(fb(Hj)),b=null,c=0,d=0;;)if(d<c){var e=b.s(null,d);e.q?e.q():e.call(null);d+=1}else if(a=r(a))b=a,Wc(b)?(a=Ib(b),c=Jb(b),b=a,e=A(a),a=c,c=e):(e=s(b),e.q?e.q():e.call(null),a=w(b),b=null,c=0),d=0;else return null},0)}
var Kj=function(){function a(a,b){return a.val(""+p(b))}function b(a){return a.val()}var c=null,c=function(c,e){switch(arguments.length){case 1:return b.call(this,c);case 2:return a.call(this,c,e)}throw Error("Invalid arity: "+arguments.length);};c.a=b;c.c=a;return c}(),Lj=function(){function a(a,b){return a.prop("checked",ad(b))}function b(a){return a.is(":checked")}var c=null,c=function(c,e){switch(arguments.length){case 1:return b.call(this,c);case 2:return a.call(this,c,e)}throw Error("Invalid arity: "+
arguments.length);};c.a=b;c.c=a;return c}(),nj=function(){var a=ph.a(E),b=ph.a(E),c=ph.a(E),d=ph.a(E),e=Jc.d(new na(null,1,[oc,Fi],null),ei,th());return new Qh("do!",function(a,b){return b},Fi,e,a,b,c,d)}();Rh(nj,Fi,function(a,b,c){return nj.d?nj.d(a,Ci,new $f([b,c])):nj.call(null,a,Ci,new $f([b,c]))});
Rh(nj,Ai,function(){function a(a,d,e){var g=null;2<arguments.length&&(g=x(Array.prototype.slice.call(arguments,2),0));return b.call(this,a,0,g)}function b(a,b,e){a=jQuery(a);return Pc.d(mc.c("checkbox",a.attr("type"))?Lj:Kj,a,e)}a.j=2;a.g=function(a){var d=s(a);a=w(a);s(a);a=v(a);return b(d,0,a)};a.b=b;return a}());
Rh(nj,Ci,function(a,b,c){a=jQuery(a);c=r(c);b=null;for(var d=0,e=0;;)if(e<d){var g=b.s(null,e),h=B.d(g,0,null),g=B.d(g,1,null),h=Ce(h);mc.c(!1,g)?a.removeAttr(h):a.attr(h,mc.c(!0,g)?h:g);e+=1}else if(c=r(c))Wc(c)?(h=Ib(c),c=Jb(c),b=h,d=h=A(h)):(b=s(c),h=B.d(b,0,null),g=B.d(b,1,null),b=Ce(h),mc.c(!1,g)?a.removeAttr(b):a.attr(b,mc.c(!0,g)?b:g),c=w(c),b=null,d=0),e=0;else return null});
Rh(nj,H,function(a,b,c){a=jQuery(a);b=function(){return function(a){var b;a:{var c=gf.a(!0);b=Cb(E);a=r(a);for(c=r(c);;)if(a&&c)b=Se.d(b,s(a),s(c)),a=w(a),c=w(c);else{b=Eb(b);break a}b=void 0}return b}}(a);c=Uc(c)?c:b("string"===typeof c?c.split(/\s+/):r(c));c=r(c);for(var d=null,e=0,g=0;;)if(g<e){var h=d.s(null,g);b=B.d(h,0,null);h=B.d(h,1,null);a.toggleClass(Ce(b),ad(h));g+=1}else if(c=r(c))Wc(c)?(d=Ib(c),c=Jb(c),b=d,e=A(d),d=b):(d=s(c),b=B.d(d,0,null),h=B.d(d,1,null),a.toggleClass(Ce(b),ad(h)),
c=w(c),d=null,e=0),g=0;else return null});Rh(nj,oi,function(a,b,c){a=jQuery(a);c=r(c);for(var d=null,e=0,g=0;;)if(g<e){var h=d.s(null,g);b=B.d(h,0,null);h=B.d(h,1,null);a.css(Ce(b),""+p(h));g+=1}else if(c=r(c))Wc(c)?(d=Ib(c),c=Jb(c),b=d,e=A(d),d=b):(d=s(c),b=B.d(d,0,null),h=B.d(d,1,null),a.css(Ce(b),""+p(h)),c=w(c),d=null,e=0),g=0;else return null});Rh(nj,ni,function(a,b,c){return jQuery(a).toggle(ad(c))});Rh(nj,Di,function(a,b,c){return k(c)?jQuery(a).hide().slideDown("fast"):jQuery(a).slideUp("fast")});
Rh(nj,di,function(a,b,c){return k(c)?jQuery(a).hide().fadeIn("fast"):jQuery(a).fadeOut("fast")});Rh(nj,ii,function(a,b,c){return setTimeout(function(){return k(c)?jQuery(a).focus():jQuery(a).focusout()},0)});Rh(nj,Bi,function(a){return jQuery(a).select()});Rh(nj,Zh,function(a,b,c){return k(c)?(nj.d?nj.d(a,ii,c):nj.call(null,a,ii,c),nj.d?nj.d(a,Bi,c):nj.call(null,a,Bi,c)):null});Rh(nj,Uh,function(a,b,c){return jQuery(a).text(""+p(c))});Rh(nj,Th,function(a,b,c){return jQuery(a).html(c)});
Rh(nj,$h,function(a,b,c){return k(c)?(b=jQuery("body"),a=jQuery(a),b.animate(Ah(new na(null,1,[xi,a.offset().top],null)))):null});var oj=function(){var a=ph.a(E),b=ph.a(E),c=ph.a(E),d=ph.a(E),e=Jc.d(new na(null,1,[oc,Fi],null),ei,th());return new Qh("on!",function(a,b){return b},Fi,e,a,b,c,d)}();Rh(oj,Fi,function(a,b,c){return kj(a,function(){return jQuery(a).on(Ce(b),c)})});
function Mj(a,b){var c=aj(0),d=$i(function(){return function(a,b){return b.a?b.a(a):b.call(null,a)}}(c)).call(null,a,r),e=$i(function(){return function(a,b){return a.a?a.a(b):a.call(null,b)}}(c,d)).call(null,A,d),g=function(a,b,c){return function(d){return $i(function(){return function(a,b){return b<a}}(a,b,c)).call(null,c,d)}}(c,d,e),h=function(a,b,c,d){return function(e){return $i(function(){return function(a,b,c){return a.c?a.c(c,b):a.call(null,c,b)}}(a,b,c,d)).call(null,gj,e,b)}}(c,d,e,g),l=Ej.q?
Ej.q():Ej.call(null);kj(l,function(){var a=l.parentNode;a.removeChild(l);return $i(function(a,b,c,d,e,g,h,l,n,Oa){if(k(h<e)){h=r(l.c?l.c(h,e):l.call(null,h,e));l=null;for(var Ka=0,Za=0;;)if(k(Za<Ka)){var Qa=l.s(null,Za),Qa=(c.a?c.a(d.a?d.a(Qa):d.call(null,Qa)):c.call(null,d.a?d.a(Qa):d.call(null,Qa))).call(null,li,g.a?g.a(Qa):g.call(null,Qa));ua(Oa)?b.appendChild(Qa):b.insertBefore(Qa,b.firstChild);Za+=1}else if(h=r(h))Wc(h)?(Ka=Ib(h),h=Jb(h),l=Ka,Ka=A(Ka)):(l=s(h),l=(c.a?c.a(d.a?d.a(l):d.call(null,
l)):c.call(null,d.a?d.a(l):d.call(null,l))).call(null,li,g.a?g.a(l):g.call(null,l)),ua(Oa)?b.appendChild(l):b.insertBefore(l,b.firstChild),h=w(h),l=null,Ka=0),Za=0;else break;return n.c?n.c(a,e):n.call(null,a,e)}return null}).call(null,aj(c),a,b,h,e,g,c,Zg,qh,null)});return l};function Nj(a){return mc.c(A(a),1)&&!mc.c(s(a).nodeType,1)};var Oj=function(){function a(a){var d=null;0<arguments.length&&(d=x(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){var b=lj(a);a=B.d(b,0,null);b=B.d(b,1,null);return Dj.c?Dj.c(Og.b(x([a,new na(null,1,[ji,""],null)],0)),Cj.d?Cj.d(si,"text/template",b):Cj.call(null,si,"text/template",b)):Dj.call(null,Og.b(x([a,new na(null,1,[ji,""],null)],0)),Cj.d?Cj.d(si,"text/template",b):Cj.call(null,si,"text/template",b))}a.j=0;a.g=function(a){a=r(a);return b(a)};a.b=b;return a}(),
Pj=function(){function a(a){var d=null;0<arguments.length&&(d=x(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){a=lj(a);B.d(a,0,null);a=B.d(a,1,null);return k(Nj.a?Nj.a(a):Nj.call(null,a))?mj(xj.a?xj.a(s(a)):xj.call(null,s(a)),new na(null,1,[H,"slide-title intro"],null)):a}a.j=0;a.g=function(a){a=r(a);return b(a)};a.b=b;return a}(),Qj=function(){function a(a){var d=null;0<arguments.length&&(d=x(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){a=
lj(a);B.d(a,0,null);a=B.d(a,1,null);return k(Nj.a?Nj.a(a):Nj.call(null,a))?mj(yj.a?yj.a(s(a)):yj.call(null,s(a)),new na(null,1,[H,"slide-title chapter"],null)):a}a.j=0;a.g=function(a){a=r(a);return b(a)};a.b=b;return a}(),Rj=function(){function a(a){var d=null;0<arguments.length&&(d=x(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){a=lj(a);B.d(a,0,null);a=B.d(a,1,null);return k(Nj.a?Nj.a(a):Nj.call(null,a))?mj(O.a?O.a(s(a)):O.call(null,s(a)),new na(null,1,[H,"slide-title slide"],
null)):a}a.j=0;a.g=function(a){a=r(a);return b(a)};a.b=b;return a}(),W=function(){function a(a){var d=null;0<arguments.length&&(d=x(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){var b=lj(a);a=B.d(b,0,null);var e=$c(a)?Pc.c(Lg,a):a,g=Jc.c(e,pi),h=Jc.c(e,Xh),l=Jc.c(e,I);a=Jc.c(e,ri);b=B.d(b,1,null);e=Mc.b(e,ri,x([I,Xh,pi],0));h=k(h)?Lc.d(e,gi,h):e;g=k(g)?Lc.d(h,ki,g):h;l=k(l)?Qe.c(new Cf(null,1,5,Hf,[Rj.b(x([l],0))],null),b):b;return k(a)?Oj.b(x([g,l],0)):Dj.c?Dj.c(g,
l):Dj.call(null,g,l)}a.j=0;a.g=function(a){a=r(a);return b(a)};a.b=b;return a}(),X=function(){function a(a){var d=null;0<arguments.length&&(d=x(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){a=lj(a);var b=B.d(a,0,null),b=$c(b)?Pc.c(Lg,b):b,b=Jc.c(b,I);a=B.d(a,1,null);return null==b||ua(r(b))?W.b(x([E,a],0)):W.b(x([E,Qe.c(new Cf(null,1,5,Hf,[W.b(x([Qj.b(x([b],0))],0))],null),a)],0))}a.j=0;a.g=function(a){a=r(a);return b(a)};a.b=b;return a}(),Sj=function(){function a(a){var d=
null;0<arguments.length&&(d=x(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){a=lj(a);var b=B.d(a,0,null),b=$c(b)?Pc.c(Lg,b):b,b=Jc.c(b,I);a=B.d(a,1,null);return null==b||ua(r(b))?W.b(x([E,a],0)):W.b(x([E,Qe.c(new Cf(null,1,5,Hf,[Pj.b(x([b],0))],null),a)],0))}a.j=0;a.g=function(a){a=r(a);return b(a)};a.b=b;return a}(),Tj=function(){function a(a){var d=null;0<arguments.length&&(d=x(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){a=lj(a);
var b=B.d(a,0,null),b=$c(b)?Pc.c(Lg,b):b,e=Jc.d(b,wi,"default");a=B.d(a,1,null);Ij(function(){return Reveal.vc(Ah(new na(null,2,[Wh,!0,Vh,new Cf(null,4,5,Hf,[new na(null,1,[hi,"reveal.js/plugin/markdown/marked.js"],null),new na(null,1,[hi,"reveal.js/plugin/markdown/markdown.js"],null),new na(null,3,[hi,"reveal.js/plugin/highlight/highlight.js",zi,!0,bi,function(){return hljs.uc()}],null),new na(null,2,[hi,"reveal.js/plugin/notes/notes.js",zi,!0],null)],null)],null)))});return vj.k?vj.k(Og.b(x([Mc.c(b,
wi),new na(null,1,[H,"reveal"],null)],0)),zj.e?zj.e(Ei,"stylesheet",G,"reveal.js/css/reveal.css"):zj.call(null,Ei,"stylesheet",G,"reveal.js/css/reveal.css"),zj.n?zj.n(Ei,"stylesheet",G,k(bh(/\.css$/,e))?e:[p("reveal.js/css/theme/"),p(e),p(".css")].join(""),yi,"theme"):zj.call(null,Ei,"stylesheet",G,k(bh(/\.css$/,e))?e:[p("reveal.js/css/theme/"),p(e),p(".css")].join(""),yi,"theme"),zj.e?zj.e(Ei,"stylesheet",G,"reveal.js/plugin/highlight/github.min.css"):zj.call(null,Ei,"stylesheet",G,"reveal.js/plugin/highlight/github.min.css"),
vj.d?vj.d(H,"slides",a):vj.call(null,H,"slides",a)):vj.call(null,Og.b(x([Mc.c(b,wi),new na(null,1,[H,"reveal"],null)],0)),zj.e?zj.e(Ei,"stylesheet",G,"reveal.js/css/reveal.css"):zj.call(null,Ei,"stylesheet",G,"reveal.js/css/reveal.css"),zj.n?zj.n(Ei,"stylesheet",G,k(bh(/\.css$/,e))?e:[p("reveal.js/css/theme/"),p(e),p(".css")].join(""),yi,"theme"):zj.call(null,Ei,"stylesheet",G,k(bh(/\.css$/,e))?e:[p("reveal.js/css/theme/"),p(e),p(".css")].join(""),yi,"theme"),zj.e?zj.e(Ei,"stylesheet",G,"reveal.js/plugin/highlight/github.min.css"):
zj.call(null,Ei,"stylesheet",G,"reveal.js/plugin/highlight/github.min.css"),vj.d?vj.d(H,"slides",a):vj.call(null,H,"slides",a))}a.j=0;a.g=function(a){a=r(a);return b(a)};a.b=b;return a}(),Uj=vj,Uj=function(){function a(a){var d=null;0<arguments.length&&(d=x(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){var b=lj(a);a=B.d(b,0,null);b=B.d(b,1,null);return vj.c?vj.c(Lc.d(a,fi,"text-align: left"),b):vj.call(null,Lc.d(a,fi,"text-align: left"),b)}a.j=0;a.g=function(a){a=
r(a);return b(a)};a.b=b;return a}(),Vj=function(){function a(a){var d=null;0<arguments.length&&(d=x(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){return V.a?V.a(Mj(a,function(a){a=bj(Xe,$i(function(a){return new Cf(null,1,5,Hf,[a],null)}).call(null,a));a=B.d(a,0,null);return Q.a?Q.a(fb(a)):Q.call(null,fb(a))})):V.call(null,Mj(a,function(a){a=bj(Xe,$i(function(a){return new Cf(null,1,5,Hf,[a],null)}).call(null,a));a=B.d(a,0,null);return Q.a?Q.a(fb(a)):Q.call(null,
fb(a))}))}a.j=0;a.g=function(a){a=r(a);return b(a)};a.b=b;return a}(),Z=function(){function a(a){var d=null;0<arguments.length&&(d=x(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){var b=lj(a);a=B.d(b,0,null);b=B.d(b,1,null);return Bj.a?Bj.a(N.c?N.c(a,b):N.call(null,a,b)):Bj.call(null,N.c?N.c(a,b):N.call(null,a,b))}a.j=0;a.g=function(a){a=r(a);return b(a)};a.b=b;return a}(),Wj=function(){function a(a){var d=null;0<arguments.length&&(d=x(Array.prototype.slice.call(arguments,
0),0));return b.call(this,d)}function b(a){var b=lj(a);a=B.d(b,0,null);var e=$c(a)?Pc.c(Lg,a):a;a=Jc.c(e,ci);b=B.d(b,1,null);e=Mc.c(e,ci);a=k(a)?Lc.d(e,fi,[p("float: left; width: "),p(a),p("%;")].join("")):Lc.d(e,fi,""+p("float: left;"));return vj.c?vj.c(a,b):vj.call(null,a,b)}a.j=0;a.g=function(a){a=r(a);return b(a)};a.b=b;return a}();ea("tailrecursion.hoplon.app_pages._training_DOT_html.hoploninit",function(){uj.c?uj.c(K.c?K.c(E,D):K.call(null,E,D),J.c?J.c(E,function(){var a=R.a?R.a("Durham, NC"):R.call(null,"Durham, NC"),b=R.a?R.a("March 18, 2014"):R.call(null,"March 18, 2014"),a=Sj.b(x([I,"ClojureBridge Teacher Training",a,b],0)),b=Vj.b(x(["What is the goal of the curriculum?","Who is the curriculum aimed at?","What is in the curriculum?","What is the Global Growth app?","What do I need to do before April 4?"],0)),b=W.b(x([I,
"Agenda",b],0)),c=R.a?R.a("To leave students with enough knowledge that they could go on to learn Clojure on their own."):R.call(null,"To leave students with enough knowledge that they could go on to learn Clojure on their own."),c=W.b(x([I,"Goal",c],0)),d=Vj.b(x(["Smart","Motivated","No development experience"],0)),d=W.b(x([I,"Audience assumptions",d],0)),e=Q.a?Q.a("Numbers, strings, booleans"):Q.call(null,"Numbers, strings, booleans"),g=Q.a?Q.a("Vectors and maps"):Q.call(null,"Vectors and maps"),
h=Q.a?Q.a("Functions"):Q.call(null,"Functions"),l=N.a?N.a("if"):N.call(null,"if"),l=Q.c?Q.c(l," and boolean logic"):Q.call(null,l," and boolean logic"),n=Q.a?Q.a("Setting up a Clojure project"):Q.call(null,"Setting up a Clojure project"),t=Q.a?Q.a("Web development basics with Ring"):Q.call(null,"Web development basics with Ring"),u=Q.a?Q.a("Deploying to Heroku"):Q.call(null,"Deploying to Heroku"),e=V.r?V.r(e,g,h,l,n,t,u):V.call(null,e,g,h,l,n,t,u),e=W.b(x([I,"Curriculum contents",e],0)),g=M.a?M.a("YUP"):
M.call(null,"YUP"),g=R.a?R.a(g):R.call(null,g),g=W.b(x([I,"Is this ambitious?",g],0)),h=Uj.b(x(["A web application that uses the World Bank API to show lists of countries by economic/development factor."],0)),l=Uj.b(x(["This application will be 80% baked, with 20% for students to fill in."],0)),h=W.b(x([I,"The Global Growth app",h,l],0)),l=yj.a?yj.a("Global Growth demo"):yj.call(null,"Global Growth demo"),l=W.b(x([l],0)),n=Q.a?Q.a("Read the curriculum"):Q.call(null,"Read the curriculum"),t=Q.a?Q.a("Set up Light Table and get familiar with it"):
Q.call(null,"Set up Light Table and get familiar with it"),u=Q.a?Q.a("Try downloading and filling in the Global Growth app"):Q.call(null,"Try downloading and filling in the Global Growth app"),y=Q.a?Q.a("Try deploying the app to Heroku"):Q.call(null,"Try deploying the app to Heroku"),n=V.e?V.e(n,t,u,y):V.call(null,n,t,u,y),n=W.b(x([I,"How to prepare",n],0));return Tj.b(x([wi,"mozilla-theme.css",a,b,c,d,e,g,h,l,n],0))}()):J.call(null,E,function(){var a=R.a?R.a("Durham, NC"):R.call(null,"Durham, NC"),
b=R.a?R.a("March 18, 2014"):R.call(null,"March 18, 2014"),a=Sj.b(x([I,"ClojureBridge Teacher Training",a,b],0)),b=Vj.b(x(["What is the goal of the curriculum?","Who is the curriculum aimed at?","What is in the curriculum?","What is the Global Growth app?","What do I need to do before April 4?"],0)),b=W.b(x([I,"Agenda",b],0)),c=R.a?R.a("To leave students with enough knowledge that they could go on to learn Clojure on their own."):R.call(null,"To leave students with enough knowledge that they could go on to learn Clojure on their own."),
c=W.b(x([I,"Goal",c],0)),d=Vj.b(x(["Smart","Motivated","No development experience"],0)),d=W.b(x([I,"Audience assumptions",d],0)),e=Q.a?Q.a("Numbers, strings, booleans"):Q.call(null,"Numbers, strings, booleans"),g=Q.a?Q.a("Vectors and maps"):Q.call(null,"Vectors and maps"),h=Q.a?Q.a("Functions"):Q.call(null,"Functions"),l=N.a?N.a("if"):N.call(null,"if"),l=Q.c?Q.c(l," and boolean logic"):Q.call(null,l," and boolean logic"),n=Q.a?Q.a("Setting up a Clojure project"):Q.call(null,"Setting up a Clojure project"),
t=Q.a?Q.a("Web development basics with Ring"):Q.call(null,"Web development basics with Ring"),u=Q.a?Q.a("Deploying to Heroku"):Q.call(null,"Deploying to Heroku"),e=V.r?V.r(e,g,h,l,n,t,u):V.call(null,e,g,h,l,n,t,u),e=W.b(x([I,"Curriculum contents",e],0)),g=M.a?M.a("YUP"):M.call(null,"YUP"),g=R.a?R.a(g):R.call(null,g),g=W.b(x([I,"Is this ambitious?",g],0)),h=Uj.b(x(["A web application that uses the World Bank API to show lists of countries by economic/development factor."],0)),l=Uj.b(x(["This application will be 80% baked, with 20% for students to fill in."],
0)),h=W.b(x([I,"The Global Growth app",h,l],0)),l=yj.a?yj.a("Global Growth demo"):yj.call(null,"Global Growth demo"),l=W.b(x([l],0)),n=Q.a?Q.a("Read the curriculum"):Q.call(null,"Read the curriculum"),t=Q.a?Q.a("Set up Light Table and get familiar with it"):Q.call(null,"Set up Light Table and get familiar with it"),u=Q.a?Q.a("Try downloading and filling in the Global Growth app"):Q.call(null,"Try downloading and filling in the Global Growth app"),y=Q.a?Q.a("Try deploying the app to Heroku"):Q.call(null,
"Try deploying the app to Heroku"),n=V.e?V.e(n,t,u,y):V.call(null,n,t,u,y),n=W.b(x([I,"How to prepare",n],0));return Tj.b(x([wi,"mozilla-theme.css",a,b,c,d,e,g,h,l,n],0))}())):uj.call(null,K.c?K.c(E,D):K.call(null,E,D),J.c?J.c(E,function(){var a=R.a?R.a("Durham, NC"):R.call(null,"Durham, NC"),b=R.a?R.a("March 18, 2014"):R.call(null,"March 18, 2014"),a=Sj.b(x([I,"ClojureBridge Teacher Training",a,b],0)),b=Vj.b(x(["What is the goal of the curriculum?","Who is the curriculum aimed at?","What is in the curriculum?",
"What is the Global Growth app?","What do I need to do before April 4?"],0)),b=W.b(x([I,"Agenda",b],0)),c=R.a?R.a("To leave students with enough knowledge that they could go on to learn Clojure on their own."):R.call(null,"To leave students with enough knowledge that they could go on to learn Clojure on their own."),c=W.b(x([I,"Goal",c],0)),d=Vj.b(x(["Smart","Motivated","No development experience"],0)),d=W.b(x([I,"Audience assumptions",d],0)),e=Q.a?Q.a("Numbers, strings, booleans"):Q.call(null,"Numbers, strings, booleans"),
g=Q.a?Q.a("Vectors and maps"):Q.call(null,"Vectors and maps"),h=Q.a?Q.a("Functions"):Q.call(null,"Functions"),l=N.a?N.a("if"):N.call(null,"if"),l=Q.c?Q.c(l," and boolean logic"):Q.call(null,l," and boolean logic"),n=Q.a?Q.a("Setting up a Clojure project"):Q.call(null,"Setting up a Clojure project"),t=Q.a?Q.a("Web development basics with Ring"):Q.call(null,"Web development basics with Ring"),u=Q.a?Q.a("Deploying to Heroku"):Q.call(null,"Deploying to Heroku"),e=V.r?V.r(e,g,h,l,n,t,u):V.call(null,e,
g,h,l,n,t,u),e=W.b(x([I,"Curriculum contents",e],0)),g=M.a?M.a("YUP"):M.call(null,"YUP"),g=R.a?R.a(g):R.call(null,g),g=W.b(x([I,"Is this ambitious?",g],0)),h=Uj.b(x(["A web application that uses the World Bank API to show lists of countries by economic/development factor."],0)),l=Uj.b(x(["This application will be 80% baked, with 20% for students to fill in."],0)),h=W.b(x([I,"The Global Growth app",h,l],0)),l=yj.a?yj.a("Global Growth demo"):yj.call(null,"Global Growth demo"),l=W.b(x([l],0)),n=Q.a?
Q.a("Read the curriculum"):Q.call(null,"Read the curriculum"),t=Q.a?Q.a("Set up Light Table and get familiar with it"):Q.call(null,"Set up Light Table and get familiar with it"),u=Q.a?Q.a("Try downloading and filling in the Global Growth app"):Q.call(null,"Try downloading and filling in the Global Growth app"),y=Q.a?Q.a("Try deploying the app to Heroku"):Q.call(null,"Try deploying the app to Heroku"),n=V.e?V.e(n,t,u,y):V.call(null,n,t,u,y),n=W.b(x([I,"How to prepare",n],0));return Tj.b(x([wi,"mozilla-theme.css",
a,b,c,d,e,g,h,l,n],0))}()):J.call(null,E,function(){var a=R.a?R.a("Durham, NC"):R.call(null,"Durham, NC"),b=R.a?R.a("March 18, 2014"):R.call(null,"March 18, 2014"),a=Sj.b(x([I,"ClojureBridge Teacher Training",a,b],0)),b=Vj.b(x(["What is the goal of the curriculum?","Who is the curriculum aimed at?","What is in the curriculum?","What is the Global Growth app?","What do I need to do before April 4?"],0)),b=W.b(x([I,"Agenda",b],0)),c=R.a?R.a("To leave students with enough knowledge that they could go on to learn Clojure on their own."):
R.call(null,"To leave students with enough knowledge that they could go on to learn Clojure on their own."),c=W.b(x([I,"Goal",c],0)),d=Vj.b(x(["Smart","Motivated","No development experience"],0)),d=W.b(x([I,"Audience assumptions",d],0)),e=Q.a?Q.a("Numbers, strings, booleans"):Q.call(null,"Numbers, strings, booleans"),g=Q.a?Q.a("Vectors and maps"):Q.call(null,"Vectors and maps"),h=Q.a?Q.a("Functions"):Q.call(null,"Functions"),l=N.a?N.a("if"):N.call(null,"if"),l=Q.c?Q.c(l," and boolean logic"):Q.call(null,
l," and boolean logic"),n=Q.a?Q.a("Setting up a Clojure project"):Q.call(null,"Setting up a Clojure project"),t=Q.a?Q.a("Web development basics with Ring"):Q.call(null,"Web development basics with Ring"),u=Q.a?Q.a("Deploying to Heroku"):Q.call(null,"Deploying to Heroku"),e=V.r?V.r(e,g,h,l,n,t,u):V.call(null,e,g,h,l,n,t,u),e=W.b(x([I,"Curriculum contents",e],0)),g=M.a?M.a("YUP"):M.call(null,"YUP"),g=R.a?R.a(g):R.call(null,g),g=W.b(x([I,"Is this ambitious?",g],0)),h=Uj.b(x(["A web application that uses the World Bank API to show lists of countries by economic/development factor."],
0)),l=Uj.b(x(["This application will be 80% baked, with 20% for students to fill in."],0)),h=W.b(x([I,"The Global Growth app",h,l],0)),l=yj.a?yj.a("Global Growth demo"):yj.call(null,"Global Growth demo"),l=W.b(x([l],0)),n=Q.a?Q.a("Read the curriculum"):Q.call(null,"Read the curriculum"),t=Q.a?Q.a("Set up Light Table and get familiar with it"):Q.call(null,"Set up Light Table and get familiar with it"),u=Q.a?Q.a("Try downloading and filling in the Global Growth app"):Q.call(null,"Try downloading and filling in the Global Growth app"),
y=Q.a?Q.a("Try deploying the app to Heroku"):Q.call(null,"Try deploying the app to Heroku"),n=V.e?V.e(n,t,u,y):V.call(null,n,t,u,y),n=W.b(x([I,"How to prepare",n],0));return Tj.b(x([wi,"mozilla-theme.css",a,b,c,d,e,g,h,l,n],0))}()));return Jj()});function Xj(a){var b=a.href;if(k(b)){var c=[p("___tailrecursion_hoplon_reload___\x3d"),p((new Date).getTime())].join("");a=a.ownerNode;if(0>b.indexOf("?"))b=[p(b),p("?"),p(c)].join("");else if(0>b.indexOf("___tailrecursion_hoplon_reload___\x3d"))b=[p(b),p("\x26"),p(c)].join("");else if(m){var d=ch([p("___tailrecursion_hoplon_reload___\x3d"),p("\\d+")].join(""));if("string"===typeof d)b=b.replace(RegExp(String(d).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08"),"g"),c);else if(k(d.hasOwnProperty("source")))b=
b.replace(RegExp(d.source,"g"),c);else{if(m)throw[p("Invalid match arg: "),p(d)].join("");b=null}}else b=null;return a.href=b}return null}
function Yj(a,b){var c=ph.a(null),d=new na(null,3,[qi,a,si,"HEAD",ti,"text"],null),e=function(){return function(a){return mc.c("true",a.getResponseHeader("X-Dev-Mode"))}}(c,d),g=function(){return function(a,b){return jQuery.ajax(Ah(Lc.d(a,mi,b)))}}(c,d,e),h=function(){return function(a){return Date.parse(a.getResponseHeader("Last-Modified"))}}(c,d,e,g);(function(){function a(b){var c=null;0<arguments.length&&(c=x(Array.prototype.slice.call(arguments,0),0));return n.call(this,c)}function n(n){B.d(n,
0,null);B.d(n,1,null);n=B.d(n,2,null);k(n)&&qh(c,h(n));return ua(n)||e(n)?setTimeout(function(){return g(d,a)},b):null}a.j=0;a.g=function(a){a=r(a);return n(a)};a.b=n;return a})().call(null);return c}function Zj(a,b,c){return uh(Yj(a,k(b)?b:100),null,function(a,b,g,h){return k(k(g)?Ue.c(g,h):g)?c.q?c.q():c.call(null):null})}
var ak=function(){function a(a){var d=null;0<arguments.length&&(d=x(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){a=B.d(a,0,null);return Zj("main.js",a,function(){return window.location.reload()})}a.j=0;a.g=function(a){a=r(a);return b(a)};a.b=b;return a}(),bk=function(){function a(a){var d=null;0<arguments.length&&(d=x(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){var b=B.d(a,0,null);return function g(){var a=document.styleSheets,
c=Zg.c(0,a.length),n=af(function(){return function(a){return a.href}}(a,c),function(){return function(a,b){return function vc(c){return new Ee(null,function(a){return function(){for(;;){var b=r(c);if(b){if(Wc(b)){var d=Ib(b),g=A(d),h=Ie(g);a:{for(var l=0;;)if(l<g){var n=q.c(d,l);h.add(a[n]);l+=1}else{d=!0;break a}d=void 0}return d?Le(h.R(),vc(Jb(b))):Le(h.R(),null)}h=s(b);return z(a[h],vc(v(b)))}return null}}}(a,b),null,null)}}(a,c)(c)}());if(ua(r(n)))return setTimeout(g,k(b)?b:100);for(var n=r(Zg.c(0,
a.length)),t=null,u=0,y=0;;)if(y<u){var F=t.s(null,y),Y=a[F];if(k(Y)){var ia=Y,oa=ia.href;if(k(oa)){var Ba=oa;Zj(Ba,b,function(b,c,d,g,l,n,t,u,y){return function(){return Xj(a[y])}}(n,t,u,y,Ba,oa,ia,Y,F))}}y+=1}else if(ia=r(n)){Y=ia;if(Wc(Y))n=Ib(Y),y=Jb(Y),t=n,u=A(n),n=y;else{F=s(Y);oa=a[F];if(k(oa)){var Ba=oa,xa=Ba.href;if(k(xa)){var Oa=xa;Zj(Oa,b,function(b,c,d,g,l,n,t,u,y){return function(){return Xj(a[y])}}(n,t,u,y,Oa,xa,Ba,oa,F,Y,ia))}}n=w(Y);t=null;u=0}y=0}else return null}.call(null)}a.j=
0;a.g=function(a){a=r(a);return b(a)};a.b=b;return a}(),ck=function(){function a(a){var d=null;0<arguments.length&&(d=x(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){a=B.d(a,0,null);ak.b(x([a],0));return bk.b(x([a],0))}a.j=0;a.g=function(a){a=r(a);return b(a)};a.b=b;return a}();ea("tailrecursion.hoplon.app_pages._index_DOT_html.hoploninit",function(){mc.c(window.location.search,"?dev")&&(mh.b(x(["Autoreloading"],0)),ck());uj.c?uj.c(K.c?K.c(E,D):K.call(null,E,D),J.c?J.c(E,function(){var a=R.a?R.a("San Francisco, CA"):R.call(null,"San Francisco, CA"),b=R.a?R.a("May 3, 2014"):R.call(null,"May 3, 2014"),a=Sj.b(x([I,"ClojureBridge",a,b],0)),b=L.d?L.d(G,"module1.html","Introduction to Clojure"):L.call(null,G,"module1.html","Introduction to Clojure"),b=Q.a?Q.a(b):Q.call(null,b),
c=L.d?L.d(G,"module2.html","Data Structures"):L.call(null,G,"module2.html","Data Structures"),c=Q.a?Q.a(c):Q.call(null,c),d=L.d?L.d(G,"module3.html","Functions"):L.call(null,G,"module3.html","Functions"),d=Q.a?Q.a(d):Q.call(null,d),e=L.d?L.d(G,"module4.html","More Simple Values"):L.call(null,G,"module4.html","More Simple Values"),e=Q.a?Q.a(e):Q.call(null,e),g=L.d?L.d(G,"module5.html","More Functions"):L.call(null,G,"module5.html","More Functions"),g=Q.a?Q.a(g):Q.call(null,g),h=L.d?L.d(G,"module6.html",
"More Data Structures"):L.call(null,G,"module6.html","More Data Structures"),h=Q.a?Q.a(h):Q.call(null,h),l=L.d?L.d(G,"module7.html","Flow Control and Logic"):L.call(null,G,"module7.html","Flow Control and Logic"),l=Q.a?Q.a(l):Q.call(null,l),n=L.d?L.d(G,"module8.html","Making a Program"):L.call(null,G,"module8.html","Making a Program"),n=Q.a?Q.a(n):Q.call(null,n),t=L.d?L.d(G,"module9.html","Making a Web Application"):L.call(null,G,"module9.html","Making a Web Application"),t=Q.a?Q.a(t):Q.call(null,
t),b=V.T?V.T(b,c,d,e,g,h,l,n,t):V.call(null,b,c,d,e,g,h,l,n,t),b=W.b(x([I,"Table of Contents",b],0));return Tj.b(x([wi,"mozilla-theme.css",a,b],0))}()):J.call(null,E,function(){var a=R.a?R.a("San Francisco, CA"):R.call(null,"San Francisco, CA"),b=R.a?R.a("May 3, 2014"):R.call(null,"May 3, 2014"),a=Sj.b(x([I,"ClojureBridge",a,b],0)),b=L.d?L.d(G,"module1.html","Introduction to Clojure"):L.call(null,G,"module1.html","Introduction to Clojure"),b=Q.a?Q.a(b):Q.call(null,b),c=L.d?L.d(G,"module2.html","Data Structures"):
L.call(null,G,"module2.html","Data Structures"),c=Q.a?Q.a(c):Q.call(null,c),d=L.d?L.d(G,"module3.html","Functions"):L.call(null,G,"module3.html","Functions"),d=Q.a?Q.a(d):Q.call(null,d),e=L.d?L.d(G,"module4.html","More Simple Values"):L.call(null,G,"module4.html","More Simple Values"),e=Q.a?Q.a(e):Q.call(null,e),g=L.d?L.d(G,"module5.html","More Functions"):L.call(null,G,"module5.html","More Functions"),g=Q.a?Q.a(g):Q.call(null,g),h=L.d?L.d(G,"module6.html","More Data Structures"):L.call(null,G,"module6.html",
"More Data Structures"),h=Q.a?Q.a(h):Q.call(null,h),l=L.d?L.d(G,"module7.html","Flow Control and Logic"):L.call(null,G,"module7.html","Flow Control and Logic"),l=Q.a?Q.a(l):Q.call(null,l),n=L.d?L.d(G,"module8.html","Making a Program"):L.call(null,G,"module8.html","Making a Program"),n=Q.a?Q.a(n):Q.call(null,n),t=L.d?L.d(G,"module9.html","Making a Web Application"):L.call(null,G,"module9.html","Making a Web Application"),t=Q.a?Q.a(t):Q.call(null,t),b=V.T?V.T(b,c,d,e,g,h,l,n,t):V.call(null,b,c,d,e,
g,h,l,n,t),b=W.b(x([I,"Table of Contents",b],0));return Tj.b(x([wi,"mozilla-theme.css",a,b],0))}())):uj.call(null,K.c?K.c(E,D):K.call(null,E,D),J.c?J.c(E,function(){var a=R.a?R.a("San Francisco, CA"):R.call(null,"San Francisco, CA"),b=R.a?R.a("May 3, 2014"):R.call(null,"May 3, 2014"),a=Sj.b(x([I,"ClojureBridge",a,b],0)),b=L.d?L.d(G,"module1.html","Introduction to Clojure"):L.call(null,G,"module1.html","Introduction to Clojure"),b=Q.a?Q.a(b):Q.call(null,b),c=L.d?L.d(G,"module2.html","Data Structures"):
L.call(null,G,"module2.html","Data Structures"),c=Q.a?Q.a(c):Q.call(null,c),d=L.d?L.d(G,"module3.html","Functions"):L.call(null,G,"module3.html","Functions"),d=Q.a?Q.a(d):Q.call(null,d),e=L.d?L.d(G,"module4.html","More Simple Values"):L.call(null,G,"module4.html","More Simple Values"),e=Q.a?Q.a(e):Q.call(null,e),g=L.d?L.d(G,"module5.html","More Functions"):L.call(null,G,"module5.html","More Functions"),g=Q.a?Q.a(g):Q.call(null,g),h=L.d?L.d(G,"module6.html","More Data Structures"):L.call(null,G,"module6.html",
"More Data Structures"),h=Q.a?Q.a(h):Q.call(null,h),l=L.d?L.d(G,"module7.html","Flow Control and Logic"):L.call(null,G,"module7.html","Flow Control and Logic"),l=Q.a?Q.a(l):Q.call(null,l),n=L.d?L.d(G,"module8.html","Making a Program"):L.call(null,G,"module8.html","Making a Program"),n=Q.a?Q.a(n):Q.call(null,n),t=L.d?L.d(G,"module9.html","Making a Web Application"):L.call(null,G,"module9.html","Making a Web Application"),t=Q.a?Q.a(t):Q.call(null,t),b=V.T?V.T(b,c,d,e,g,h,l,n,t):V.call(null,b,c,d,e,
g,h,l,n,t),b=W.b(x([I,"Table of Contents",b],0));return Tj.b(x([wi,"mozilla-theme.css",a,b],0))}()):J.call(null,E,function(){var a=R.a?R.a("San Francisco, CA"):R.call(null,"San Francisco, CA"),b=R.a?R.a("May 3, 2014"):R.call(null,"May 3, 2014"),a=Sj.b(x([I,"ClojureBridge",a,b],0)),b=L.d?L.d(G,"module1.html","Introduction to Clojure"):L.call(null,G,"module1.html","Introduction to Clojure"),b=Q.a?Q.a(b):Q.call(null,b),c=L.d?L.d(G,"module2.html","Data Structures"):L.call(null,G,"module2.html","Data Structures"),
c=Q.a?Q.a(c):Q.call(null,c),d=L.d?L.d(G,"module3.html","Functions"):L.call(null,G,"module3.html","Functions"),d=Q.a?Q.a(d):Q.call(null,d),e=L.d?L.d(G,"module4.html","More Simple Values"):L.call(null,G,"module4.html","More Simple Values"),e=Q.a?Q.a(e):Q.call(null,e),g=L.d?L.d(G,"module5.html","More Functions"):L.call(null,G,"module5.html","More Functions"),g=Q.a?Q.a(g):Q.call(null,g),h=L.d?L.d(G,"module6.html","More Data Structures"):L.call(null,G,"module6.html","More Data Structures"),h=Q.a?Q.a(h):
Q.call(null,h),l=L.d?L.d(G,"module7.html","Flow Control and Logic"):L.call(null,G,"module7.html","Flow Control and Logic"),l=Q.a?Q.a(l):Q.call(null,l),n=L.d?L.d(G,"module8.html","Making a Program"):L.call(null,G,"module8.html","Making a Program"),n=Q.a?Q.a(n):Q.call(null,n),t=L.d?L.d(G,"module9.html","Making a Web Application"):L.call(null,G,"module9.html","Making a Web Application"),t=Q.a?Q.a(t):Q.call(null,t),b=V.T?V.T(b,c,d,e,g,h,l,n,t):V.call(null,b,c,d,e,g,h,l,n,t),b=W.b(x([I,"Table of Contents",
b],0));return Tj.b(x([wi,"mozilla-theme.css",a,b],0))}()));return Jj()});var dk;
ea("tailrecursion.hoplon.app_pages._module9_DOT_html.hoploninit",function(){mc.c(window.location.search,"?dev")&&(mh.b(x(["Autoreloading"],0)),ck());dk=function(){function a(a){var d=null;0<arguments.length&&(d=x(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){var b=lj(a);a=B.d(b,0,null);b=B.d(b,1,null);return Z.b(x([Lc.d(a,H,"clojure"),b],0))}a.j=0;a.g=function(a){a=r(a);return b(a)};a.b=b;return a}();uj.c?uj.c(K.c?K.c(E,D):K.call(null,E,D),J.c?J.c(E,function(){var a=Sj.b(x([I,
"Module 9"],0)),b=P.c?P.c(hi,"img/web1.png"):P.call(null,hi,"img/web1.png"),b=W.b(x([I,"How does the web work?",b],0)),c=P.c?P.c(hi,"img/web2.png"):P.call(null,hi,"img/web2.png"),c=W.b(x([I,"Requesting index.html",c],0)),d=P.c?P.c(hi,"img/web3.png"):P.call(null,hi,"img/web3.png"),d=W.b(x([I,"Web server \x3d a function",d],0)),e=dk.b(x(['(defn app\n  [request]\n  {:status 200\n   :body "Hello world!"})'],0)),e=W.b(x([I,"A simple Clojure web application",e],0)),g=R.a?R.a("Go to clojurebridge.org in your web browser and view the source."):
R.call(null,"Go to clojurebridge.org in your web browser and view the source."),g=W.b(x([I,"What is HTML?",g],0)),b=X.b(x([I,"Web Applications",b,c,d,e,g],0)),c=M.a?M.a("Ring:"):M.call(null,"Ring:"),c=Q.c?Q.c(c," handles taking in web requests and returning responses"):Q.call(null,c," handles taking in web requests and returning responses"),d=M.a?M.a("Compojure:"):M.call(null,"Compojure:"),d=Q.c?Q.c(d," reads URLs and decides how to handle them"):Q.call(null,d," reads URLs and decides how to handle them"),
e=M.a?M.a("Hiccup:"):M.call(null,"Hiccup:"),e=Q.c?Q.c(e," takes Clojure data and turns it into HTML"):Q.call(null,e," takes Clojure data and turns it into HTML"),c=V.d?V.d(c,d,e):V.call(null,c,d,e),c=W.b(x([I,"Libraries we are going to use",c],0)),d=dk.b(x(["(ns global-growth.web\n  (:require [global-growth.core :as api]\n            [compojure.core :refer [defroutes GET]]\n            [compojure.handler :refer [site]]\n            [hiccup.core :as hiccup]\n            [hiccup.page :as page]\n            [hiccup.form :as form]))"],
0)),d=W.b(x([I,"global-growth.web",d],0)),e=R.a?R.a("Uncomment everything under the MODULE 5 line in core.clj and everything in web.clj."):R.call(null,"Uncomment everything under the MODULE 5 line in core.clj and everything in web.clj."),e=W.b(x([I,"Getting set up for this module",e],0)),g=dk.b(x(['(defroutes main-routes\n  (GET "/" [] (main-page))\n  (GET "/indicators" [indicator1 indicator2 year]\n       (view-indicators indicator1 indicator2 year)))'],0)),g=W.b(x([I,"Routing requests",g],0)),h=
dk.b(x(['(hiccup/html [:header\n              [:h1 "Hello world!"]\n              [:h2 "I am an awesome subheader"]])\n;;\x3d\x3e "\x3cheader\x3e\x3ch1\x3eHello world!\x3c/h1\x3e\n;;    \x3ch2\x3eI am an awesome subheader\x3c/h2\x3e\x3c/header\x3e"'],0)),h=W.b(x([I,"Generating HTML",h],0)),l=N.a?N.a("main-page"):N.call(null,"main-page"),l=R.d?R.d("Take a look at ",l,"."):R.call(null,"Take a look at ",l,"."),n=dk.b(x(['(form/form-to {:role "form"} [:get "/indicators"]\n              [:div.row\n               [:div.form-group.col-md-5\n                (form/label "indicator1" "Indicator 1:  ")\n                (form/drop-down {:class "form-control"}\n                                "indicator1"\n                                (api/get-indicators))]]\n              ;; ...\n              (form/submit-button "Submit"))'],
0)),l=W.b(x([I,"HTML forms",l,n],0)),n=N.a?N.a("project.clj"):N.call(null,"project.clj"),n=R.d?R.d("Open ",n,"."):R.call(null,"Open ",n,"."),t=R.a?R.a("Make sure the following is in the project:"):R.call(null,"Make sure the following is in the project:"),u=dk.b(x([":ring {:handler global-growth.web/handler}"],0)),n=W.b(x([I,"Running a web application",n,t,u],0)),t=Z.b(x([H,"no-highlight","\x3e lein ring server\n\n2014-04-02 21:30:06.303:INFO:oejs.Server:jetty-7.6.8.v20121106\n2014-04-02 21:30:06.378:INFO:oejs.AbstractConnector:Started SelectChannelConnector@0.0.0.0:3000\nStarted server on port 3000"],
0)),u=R.a?R.a("Go to http://localhost:3000/."):R.call(null,"Go to http://localhost:3000/."),t=W.b(x([I,"Starting the web server",t,u],0)),c=X.b(x([I,"Clojure web applications",c,d,e,g,h,l,n,t],0));return Tj.b(x([wi,"mozilla-theme.css",a,b,c],0))}()):J.call(null,E,function(){var a=Sj.b(x([I,"Module 9"],0)),b=P.c?P.c(hi,"img/web1.png"):P.call(null,hi,"img/web1.png"),b=W.b(x([I,"How does the web work?",b],0)),c=P.c?P.c(hi,"img/web2.png"):P.call(null,hi,"img/web2.png"),c=W.b(x([I,"Requesting index.html",
c],0)),d=P.c?P.c(hi,"img/web3.png"):P.call(null,hi,"img/web3.png"),d=W.b(x([I,"Web server \x3d a function",d],0)),e=dk.b(x(['(defn app\n  [request]\n  {:status 200\n   :body "Hello world!"})'],0)),e=W.b(x([I,"A simple Clojure web application",e],0)),g=R.a?R.a("Go to clojurebridge.org in your web browser and view the source."):R.call(null,"Go to clojurebridge.org in your web browser and view the source."),g=W.b(x([I,"What is HTML?",g],0)),b=X.b(x([I,"Web Applications",b,c,d,e,g],0)),c=M.a?M.a("Ring:"):
M.call(null,"Ring:"),c=Q.c?Q.c(c," handles taking in web requests and returning responses"):Q.call(null,c," handles taking in web requests and returning responses"),d=M.a?M.a("Compojure:"):M.call(null,"Compojure:"),d=Q.c?Q.c(d," reads URLs and decides how to handle them"):Q.call(null,d," reads URLs and decides how to handle them"),e=M.a?M.a("Hiccup:"):M.call(null,"Hiccup:"),e=Q.c?Q.c(e," takes Clojure data and turns it into HTML"):Q.call(null,e," takes Clojure data and turns it into HTML"),c=V.d?
V.d(c,d,e):V.call(null,c,d,e),c=W.b(x([I,"Libraries we are going to use",c],0)),d=dk.b(x(["(ns global-growth.web\n  (:require [global-growth.core :as api]\n            [compojure.core :refer [defroutes GET]]\n            [compojure.handler :refer [site]]\n            [hiccup.core :as hiccup]\n            [hiccup.page :as page]\n            [hiccup.form :as form]))"],0)),d=W.b(x([I,"global-growth.web",d],0)),e=R.a?R.a("Uncomment everything under the MODULE 5 line in core.clj and everything in web.clj."):
R.call(null,"Uncomment everything under the MODULE 5 line in core.clj and everything in web.clj."),e=W.b(x([I,"Getting set up for this module",e],0)),g=dk.b(x(['(defroutes main-routes\n  (GET "/" [] (main-page))\n  (GET "/indicators" [indicator1 indicator2 year]\n       (view-indicators indicator1 indicator2 year)))'],0)),g=W.b(x([I,"Routing requests",g],0)),h=dk.b(x(['(hiccup/html [:header\n              [:h1 "Hello world!"]\n              [:h2 "I am an awesome subheader"]])\n;;\x3d\x3e "\x3cheader\x3e\x3ch1\x3eHello world!\x3c/h1\x3e\n;;    \x3ch2\x3eI am an awesome subheader\x3c/h2\x3e\x3c/header\x3e"'],
0)),h=W.b(x([I,"Generating HTML",h],0)),l=N.a?N.a("main-page"):N.call(null,"main-page"),l=R.d?R.d("Take a look at ",l,"."):R.call(null,"Take a look at ",l,"."),n=dk.b(x(['(form/form-to {:role "form"} [:get "/indicators"]\n              [:div.row\n               [:div.form-group.col-md-5\n                (form/label "indicator1" "Indicator 1:  ")\n                (form/drop-down {:class "form-control"}\n                                "indicator1"\n                                (api/get-indicators))]]\n              ;; ...\n              (form/submit-button "Submit"))'],
0)),l=W.b(x([I,"HTML forms",l,n],0)),n=N.a?N.a("project.clj"):N.call(null,"project.clj"),n=R.d?R.d("Open ",n,"."):R.call(null,"Open ",n,"."),t=R.a?R.a("Make sure the following is in the project:"):R.call(null,"Make sure the following is in the project:"),u=dk.b(x([":ring {:handler global-growth.web/handler}"],0)),n=W.b(x([I,"Running a web application",n,t,u],0)),t=Z.b(x([H,"no-highlight","\x3e lein ring server\n\n2014-04-02 21:30:06.303:INFO:oejs.Server:jetty-7.6.8.v20121106\n2014-04-02 21:30:06.378:INFO:oejs.AbstractConnector:Started SelectChannelConnector@0.0.0.0:3000\nStarted server on port 3000"],
0)),u=R.a?R.a("Go to http://localhost:3000/."):R.call(null,"Go to http://localhost:3000/."),t=W.b(x([I,"Starting the web server",t,u],0)),c=X.b(x([I,"Clojure web applications",c,d,e,g,h,l,n,t],0));return Tj.b(x([wi,"mozilla-theme.css",a,b,c],0))}())):uj.call(null,K.c?K.c(E,D):K.call(null,E,D),J.c?J.c(E,function(){var a=Sj.b(x([I,"Module 9"],0)),b=P.c?P.c(hi,"img/web1.png"):P.call(null,hi,"img/web1.png"),b=W.b(x([I,"How does the web work?",b],0)),c=P.c?P.c(hi,"img/web2.png"):P.call(null,hi,"img/web2.png"),
c=W.b(x([I,"Requesting index.html",c],0)),d=P.c?P.c(hi,"img/web3.png"):P.call(null,hi,"img/web3.png"),d=W.b(x([I,"Web server \x3d a function",d],0)),e=dk.b(x(['(defn app\n  [request]\n  {:status 200\n   :body "Hello world!"})'],0)),e=W.b(x([I,"A simple Clojure web application",e],0)),g=R.a?R.a("Go to clojurebridge.org in your web browser and view the source."):R.call(null,"Go to clojurebridge.org in your web browser and view the source."),g=W.b(x([I,"What is HTML?",g],0)),b=X.b(x([I,"Web Applications",
b,c,d,e,g],0)),c=M.a?M.a("Ring:"):M.call(null,"Ring:"),c=Q.c?Q.c(c," handles taking in web requests and returning responses"):Q.call(null,c," handles taking in web requests and returning responses"),d=M.a?M.a("Compojure:"):M.call(null,"Compojure:"),d=Q.c?Q.c(d," reads URLs and decides how to handle them"):Q.call(null,d," reads URLs and decides how to handle them"),e=M.a?M.a("Hiccup:"):M.call(null,"Hiccup:"),e=Q.c?Q.c(e," takes Clojure data and turns it into HTML"):Q.call(null,e," takes Clojure data and turns it into HTML"),
c=V.d?V.d(c,d,e):V.call(null,c,d,e),c=W.b(x([I,"Libraries we are going to use",c],0)),d=dk.b(x(["(ns global-growth.web\n  (:require [global-growth.core :as api]\n            [compojure.core :refer [defroutes GET]]\n            [compojure.handler :refer [site]]\n            [hiccup.core :as hiccup]\n            [hiccup.page :as page]\n            [hiccup.form :as form]))"],0)),d=W.b(x([I,"global-growth.web",d],0)),e=R.a?R.a("Uncomment everything under the MODULE 5 line in core.clj and everything in web.clj."):
R.call(null,"Uncomment everything under the MODULE 5 line in core.clj and everything in web.clj."),e=W.b(x([I,"Getting set up for this module",e],0)),g=dk.b(x(['(defroutes main-routes\n  (GET "/" [] (main-page))\n  (GET "/indicators" [indicator1 indicator2 year]\n       (view-indicators indicator1 indicator2 year)))'],0)),g=W.b(x([I,"Routing requests",g],0)),h=dk.b(x(['(hiccup/html [:header\n              [:h1 "Hello world!"]\n              [:h2 "I am an awesome subheader"]])\n;;\x3d\x3e "\x3cheader\x3e\x3ch1\x3eHello world!\x3c/h1\x3e\n;;    \x3ch2\x3eI am an awesome subheader\x3c/h2\x3e\x3c/header\x3e"'],
0)),h=W.b(x([I,"Generating HTML",h],0)),l=N.a?N.a("main-page"):N.call(null,"main-page"),l=R.d?R.d("Take a look at ",l,"."):R.call(null,"Take a look at ",l,"."),n=dk.b(x(['(form/form-to {:role "form"} [:get "/indicators"]\n              [:div.row\n               [:div.form-group.col-md-5\n                (form/label "indicator1" "Indicator 1:  ")\n                (form/drop-down {:class "form-control"}\n                                "indicator1"\n                                (api/get-indicators))]]\n              ;; ...\n              (form/submit-button "Submit"))'],
0)),l=W.b(x([I,"HTML forms",l,n],0)),n=N.a?N.a("project.clj"):N.call(null,"project.clj"),n=R.d?R.d("Open ",n,"."):R.call(null,"Open ",n,"."),t=R.a?R.a("Make sure the following is in the project:"):R.call(null,"Make sure the following is in the project:"),u=dk.b(x([":ring {:handler global-growth.web/handler}"],0)),n=W.b(x([I,"Running a web application",n,t,u],0)),t=Z.b(x([H,"no-highlight","\x3e lein ring server\n\n2014-04-02 21:30:06.303:INFO:oejs.Server:jetty-7.6.8.v20121106\n2014-04-02 21:30:06.378:INFO:oejs.AbstractConnector:Started SelectChannelConnector@0.0.0.0:3000\nStarted server on port 3000"],
0)),u=R.a?R.a("Go to http://localhost:3000/."):R.call(null,"Go to http://localhost:3000/."),t=W.b(x([I,"Starting the web server",t,u],0)),c=X.b(x([I,"Clojure web applications",c,d,e,g,h,l,n,t],0));return Tj.b(x([wi,"mozilla-theme.css",a,b,c],0))}()):J.call(null,E,function(){var a=Sj.b(x([I,"Module 9"],0)),b=P.c?P.c(hi,"img/web1.png"):P.call(null,hi,"img/web1.png"),b=W.b(x([I,"How does the web work?",b],0)),c=P.c?P.c(hi,"img/web2.png"):P.call(null,hi,"img/web2.png"),c=W.b(x([I,"Requesting index.html",
c],0)),d=P.c?P.c(hi,"img/web3.png"):P.call(null,hi,"img/web3.png"),d=W.b(x([I,"Web server \x3d a function",d],0)),e=dk.b(x(['(defn app\n  [request]\n  {:status 200\n   :body "Hello world!"})'],0)),e=W.b(x([I,"A simple Clojure web application",e],0)),g=R.a?R.a("Go to clojurebridge.org in your web browser and view the source."):R.call(null,"Go to clojurebridge.org in your web browser and view the source."),g=W.b(x([I,"What is HTML?",g],0)),b=X.b(x([I,"Web Applications",b,c,d,e,g],0)),c=M.a?M.a("Ring:"):
M.call(null,"Ring:"),c=Q.c?Q.c(c," handles taking in web requests and returning responses"):Q.call(null,c," handles taking in web requests and returning responses"),d=M.a?M.a("Compojure:"):M.call(null,"Compojure:"),d=Q.c?Q.c(d," reads URLs and decides how to handle them"):Q.call(null,d," reads URLs and decides how to handle them"),e=M.a?M.a("Hiccup:"):M.call(null,"Hiccup:"),e=Q.c?Q.c(e," takes Clojure data and turns it into HTML"):Q.call(null,e," takes Clojure data and turns it into HTML"),c=V.d?
V.d(c,d,e):V.call(null,c,d,e),c=W.b(x([I,"Libraries we are going to use",c],0)),d=dk.b(x(["(ns global-growth.web\n  (:require [global-growth.core :as api]\n            [compojure.core :refer [defroutes GET]]\n            [compojure.handler :refer [site]]\n            [hiccup.core :as hiccup]\n            [hiccup.page :as page]\n            [hiccup.form :as form]))"],0)),d=W.b(x([I,"global-growth.web",d],0)),e=R.a?R.a("Uncomment everything under the MODULE 5 line in core.clj and everything in web.clj."):
R.call(null,"Uncomment everything under the MODULE 5 line in core.clj and everything in web.clj."),e=W.b(x([I,"Getting set up for this module",e],0)),g=dk.b(x(['(defroutes main-routes\n  (GET "/" [] (main-page))\n  (GET "/indicators" [indicator1 indicator2 year]\n       (view-indicators indicator1 indicator2 year)))'],0)),g=W.b(x([I,"Routing requests",g],0)),h=dk.b(x(['(hiccup/html [:header\n              [:h1 "Hello world!"]\n              [:h2 "I am an awesome subheader"]])\n;;\x3d\x3e "\x3cheader\x3e\x3ch1\x3eHello world!\x3c/h1\x3e\n;;    \x3ch2\x3eI am an awesome subheader\x3c/h2\x3e\x3c/header\x3e"'],
0)),h=W.b(x([I,"Generating HTML",h],0)),l=N.a?N.a("main-page"):N.call(null,"main-page"),l=R.d?R.d("Take a look at ",l,"."):R.call(null,"Take a look at ",l,"."),n=dk.b(x(['(form/form-to {:role "form"} [:get "/indicators"]\n              [:div.row\n               [:div.form-group.col-md-5\n                (form/label "indicator1" "Indicator 1:  ")\n                (form/drop-down {:class "form-control"}\n                                "indicator1"\n                                (api/get-indicators))]]\n              ;; ...\n              (form/submit-button "Submit"))'],
0)),l=W.b(x([I,"HTML forms",l,n],0)),n=N.a?N.a("project.clj"):N.call(null,"project.clj"),n=R.d?R.d("Open ",n,"."):R.call(null,"Open ",n,"."),t=R.a?R.a("Make sure the following is in the project:"):R.call(null,"Make sure the following is in the project:"),u=dk.b(x([":ring {:handler global-growth.web/handler}"],0)),n=W.b(x([I,"Running a web application",n,t,u],0)),t=Z.b(x([H,"no-highlight","\x3e lein ring server\n\n2014-04-02 21:30:06.303:INFO:oejs.Server:jetty-7.6.8.v20121106\n2014-04-02 21:30:06.378:INFO:oejs.AbstractConnector:Started SelectChannelConnector@0.0.0.0:3000\nStarted server on port 3000"],
0)),u=R.a?R.a("Go to http://localhost:3000/."):R.call(null,"Go to http://localhost:3000/."),t=W.b(x([I,"Starting the web server",t,u],0)),c=X.b(x([I,"Clojure web applications",c,d,e,g,h,l,n,t],0));return Tj.b(x([wi,"mozilla-theme.css",a,b,c],0))}()));return Jj()});var ek;
ea("tailrecursion.hoplon.app_pages._module8_DOT_html.hoploninit",function(){mc.c(window.location.search,"?dev")&&(mh.b(x(["Autoreloading"],0)),ck());ek=function(){function a(a){var d=null;0<arguments.length&&(d=x(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){var b=lj(a);a=B.d(b,0,null);b=B.d(b,1,null);return Z.b(x([Lc.d(a,H,"clojure"),b],0))}a.j=0;a.g=function(a){a=r(a);return b(a)};a.b=b;return a}();uj.c?uj.c(K.c?K.c(E,D):K.call(null,E,D),J.c?J.c(E,function(){var a=Sj.b(x([I,
"Module 8"],0)),b=R.a?R.a("Type the following in your terminal:"):R.call(null,"Type the following in your terminal:"),c=Z.b(x([H,"bash","lein new clojurebridge global-growth "],0)),d=W.b(x([I,"Creating a project",b,c],0)),e=Vj.b(x(["manages Clojure projects","tool you run in your terminal","silly name"],0)),g=W.b(x([I,"Leiningen",e],0)),h=M.a?M.a("project.clj"):M.call(null,"project.clj"),l=M.a?M.a("src/global_growth/core.clj"):M.call(null,"src/global_growth/core.clj"),n=Vj.b(x([".gitignore","doc/intro.md",
h,"resources/","README.md",l,"test/global_growth/core_test.clj"],0)),t=W.b(x([I,"Project structure",n],0)),u=Vj.b(x(["configuration file for Leiningen","lists dependencies","contains information about program author, description and more"],0)),y=W.b(x([I,"project.clj",u],0)),F=R.a?R.a("This is where we will be writing much of our code."):R.call(null,"This is where we will be writing much of our code."),Y=R.c?R.c("Clojure programs can be made up of multiple files, but we are ","going to use just this one for now."):
R.call(null,"Clojure programs can be made up of multiple files, but we are ","going to use just this one for now."),ia=W.b(x([I,"src/global_growth/core.clj",F,Y],0)),oa=R.a?R.a("Go to the command line and enter:"):R.call(null,"Go to the command line and enter:"),Ba=Z.b(x([H,"bash","cd global_growth\nlein run"],0)),xa=W.b(x([I,"Try it out",oa,Ba],0)),Oa=X.b(x([I,"Projects",d,g,t,y,ia,xa],0)),Ka=N.a?N.a("src/global_growth/core.clj"):N.call(null,"src/global_growth/core.clj"),Za=R.d?R.d("Open ",Ka,"."):
R.call(null,"Open ",Ka,"."),Qa=N.a?N.a("-main"):N.call(null,"-main"),vc=R.d?R.d("What is in the ",Qa," function?"):R.call(null,"What is in the ",Qa," function?"),id=W.b(x([I,"What happens when I run my program?",Za,vc],0)),jd=Vj.b(x(["Just an ordinary function with an odd name","The function called first when you run your program","Can call other functions"],0)),kd=W.b(x([I,"The -main function",jd],0)),ld=ek.b(x(['(defn quotify\n  [quote author]\n  (str quote "\\n\\n-- " author))\n\n(defn -main\n  [\x26 args]\n  (println\n   (quotify (str "A man who carries a cat by the tail learns "\n                 "something he can learn in no other way.")\n            "Mark Twain")))'],
0)),md=W.b(x([I,"Using other functions from -main",ld],0)),nd=R.a?R.a("Namespaces let you organize your code into logical sections."):R.call(null,"Namespaces let you organize your code into logical sections."),od=ek.b(x([";; in src/global_growth/core.clj\n(ns global-growth.core)"],0)),pd=W.b(x([I,"Namespaces and organization",nd,od],0)),qd=R.a?R.a("Dependencies are code libraries others have written you can reuse in your project."):R.call(null,"Dependencies are code libraries others have written you can reuse in your project."),
Nb=N.a?N.a("project.clj"):N.call(null,"project.clj"),Ob=N.a?N.a(":dependencies"):N.call(null,":dependencies"),sd=R.k?R.k("Open ",Nb," and look for the ",Ob," key."):R.call(null,"Open ",Nb," and look for the ",Ob," key."),td=ek.b(x([':dependencies [[org.clojure/clojure "1.5.1"]\n               [clj-http "0.9.0"]\n               [cheshire "5.3.1"]]'],0)),ud=W.b(x([I,"Dependencies",qd,sd,td],0)),vd=ek.b(x([";; in src/global_growth/core.clj\n(ns global-growth.core\n  (:require [clj-http.client :as client]\n            [cheshire.core :as json]))"],
0)),wd=W.b(x([I,"Requiring dependencies",vd],0)),xd=X.b(x([I,"Modifying a project",id,kd,md,pd,ud,wd],0)),yd=Vj.b(x(["collection of world development indicators data","provided as JSON documents"],0)),zd=W.b(x([I,"The World Bank API",yd],0)),Pb=Q.a?Q.a("Application Programming Interface"):Q.call(null,"Application Programming Interface"),Qb=Q.a?Q.a("web pages for computers"):Q.call(null,"web pages for computers"),Rb=Q.a?Q.a("one popular format: JSON"):Q.call(null,"one popular format: JSON"),Ad=V.d?
V.d(Pb,Qb,Rb):V.call(null,Pb,Qb,Rb),Bd=W.b(x([I,"What is an API?",Ad],0)),Cd=R.a?R.a("http://api.worldbank.org/countries/all/indicators/EN.POP.DNST?format\x3djson\x26date\x3d2010"):R.call(null,"http://api.worldbank.org/countries/all/indicators/EN.POP.DNST?format\x3djson\x26date\x3d2010"),Dd=W.b(x([I,"API in action",Cd],0)),Ed=Z.b(x([H,"json",'[\n  {\n    "page": 1,\n    "pages": 6,\n    "per_page": "50",\n    "total": 252\n  },\n  [\n    {\n      "indicator": {\n        "id": "EN.POP.DNST",\n        "value": "Population density (people per sq. km of land area)"\n      },\n      "country": {\n        "id": "1A",\n        "value": "Arab World"\n      },\n      "value": "25.5287276250072",\n      "decimal": "0",\n      "date": "2010"\n    },\n    {\n      "indicator": {\n        "id": "EN.POP.DNST",\n        "value": "Population density (people per sq. km of land area)"\n      },\n      "country": {\n        "id": "S3",\n        "value": "Caribbean small states"\n      },\n      "value": "17.0236186241818",\n      "decimal": "0",\n      "date": "2010"\n    }\n  ]\n]'],
0)),Fd=W.b(x([I,"Sample API response",Ed],0)),Gd=ek.b(x(['(client/get "http://api.worldbank.org/countries/all/indicators/EN.POP.DNST?format\x3djson\x26date\x3d2010")\n\n;; elided and formatted\n;;\x3d\x3e {:orig-content-encoding nil,\n;;    :request-time 109, :status 200,\n;;    :headers {"content-length" "10340",\n;;              "content-type" "application/json;charset\x3dutf-8"},\n;;    :body "[{\\"page\\":1,\\"pages\\":6}]"}'],0)),Hd=W.b(x([I,"Accessing APIs with Clojure",Gd],0)),Id=ek.b(x(['(json/parse-string "[{\\"page\\":1,\\"pages\\":6}]" true)\n;;\x3d\x3e ({:page 1, :pages 6})'],
0)),Jd=W.b(x([I,"Converting JSON",Id],0)),Sb=N.a?N.a("get-population-density"):N.call(null,"get-population-density"),Kd=R.d?R.d("Write a function called ",Sb," that takes no arguments, and returns Clojure data from the World Bank API on population density."):R.call(null,"Write a function called ",Sb," that takes no arguments, and returns Clojure data from the World Bank API on population density."),Tb=N.a?N.a(":body"):N.call(null,":body"),Ld=R.d?R.d("You will need to make the web request, pull the ",
Tb," value out of the response, and then parse the JSON."):R.call(null,"You will need to make the web request, pull the ",Tb," value out of the response, and then parse the JSON."),Md=ek.b(x(['(get-population-density)\n;;\x3d\x3e ({:page 1, :pages 6, :per_page "50", :total 252}\n;;    [{:indicator {:id "EN.POP.DNST", :value "Population density (people per sq. km of land area)"},\n;;    :country {:id "1A", :value "Arab World"}, :value "25.5287276250072", :decimal "0", :date "2010"},\n;;    ...])'],
0)),Nd=W.b(x([I,"Exercise: Get the results from API call",Kd,Ld,Md],0)),Od=ek.b(x(['(defn get-api\n  "Returns map representing API response."\n  [path params]\n  (let [url (str "http://api.worldbank.org" path)\n        query-params (merge params {:format "json" :per_page 10000})\n        response (json/parse-string\n                  (:body\n                   (client/get url {:query-params query-params})) true)\n        metadata (first response)\n        results (second response)]\n    {:metadata metadata\n     :results results}))'],
0)),Pd=W.b(x([I,"Getting more information from the API",Od],0)),Qd=ek.b(x(['(get-api "/countries/all/indicators/EN.POP.DNST" {:date 2010})\n;;\x3d\x3e {:metadata {:page 1, :pages 1, :per_page "10000", :total 252},\n;;    :results [{:indicator {:id "EN.POP.DNST",\n;;    :value "Population density (people per sq. km of land area)"},\n;;    :country {:id "1A", :value "Arab World"}, :value "25.5287276250072",\n;;    :decimal "0", :date "2010"} ...]}'],0)),Rd=W.b(x([I,"get-api",Qd],0)),Ub=N.a?N.a("get-country-and-value"):
N.call(null,"get-country-and-value"),Vb=N.a?N.a("get-api"):N.call(null,"get-api"),Wb=N.a?N.a("get-country-and-value"):N.call(null,"get-country-and-value"),Sd=R.T?R.T("Write a function ",Ub," that can take ","the return value of ",Vb," and get the country names ","and values out of that value. ",Wb," should return a vector of vectors."):R.call(null,"Write a function ",Ub," that can take ","the return value of ",Vb," and get the country names ","and values out of that value. ",Wb," should return a vector of vectors."),
Td=ek.b(x(['(get-country-and-value\n  (get-api "/countries/all/indicators/EN.POP.DNST" {:date 2010}))\n;;\x3d\x3e [["Arab World" "25.5287276250072"]\n;;    ["Caribbean small states" "17.0236186241818"]\n;;    ...]'],0)),Ud=W.b(x([I,"Exercise: extracting the data we want",Sd,Td],0)),Xb=N.a?N.a("remove-aggregrate-countries"):N.call(null,"remove-aggregrate-countries"),Yb=N.a?N.a("countries"):N.call(null,"countries"),Zb=N.a?N.a("get-indicator-values"):N.call(null,"get-indicator-values"),Vd=R.r?R.r("Uncomment the definitions for ",
Xb,", ",Yb,", and ",Zb,"."):R.call(null,"Uncomment the definitions for ",Xb,", ",Yb,", and ",Zb,"."),Wd=W.b(x([I,"Removing unwanted data",Vd],0)),Xd=ek.b(x(['(defn get-indicator-values\n  "Returns indicator values for a specified year for all countries."\n  [indicator-code year]\n  (let [response (get-api (str "/countries/all/indicators/"\n                               indicator-code)\n                          {:date (str year)})\n        values (get-country-and-value response)]\n    (for [[country value] values\n          :when (and (not (nil? value))\n                     (contains? @countries country))]\n      [country (read-string value)])))'],
0)),Yd=W.b(x([I,"get-indicator-values",Xd],0)),Zd=ek.b(x(['(get-indicator-values "EN.POP.DNST" 2010)'],0)),$d=R.a?R.a("What do you get?"):R.call(null,"What do you get?"),ae=W.b(x([I,"Get a list of countries and population density",Zd,$d],0)),be=X.b(x([I,"Your first real program",zd,Bd,Dd,Fd,Hd,Jd,Nd,Pd,Rd,Ud,Wd,Yd,ae],0)),$b=Q.a?Q.a("Let's make our program print out a list of all countries and their population density."):Q.call(null,"Let's make our program print out a list of all countries and their population density."),
ac=N.a?N.a("-main"):N.call(null,"-main"),bc=Q.d?Q.d("Make sure ",ac," is the last function in your file."):Q.call(null,"Make sure ",ac," is the last function in your file."),ce=V.c?V.c($b,bc):V.call(null,$b,bc),de=W.b(x([I,"Updating -main",ce],0)),cc=N.a?N.a("doseq"):N.call(null,"doseq"),ee=R.d?R.d("In order to print out all the countries and population densities, you will need a new statement, ",cc,"."):R.call(null,"In order to print out all the countries and population densities, you will need a new statement, ",
cc,"."),dc=N.a?N.a("doseq"):N.call(null,"doseq"),ec=N.a?N.a("for"):N.call(null,"for"),fe=R.e?R.e(dc," works like ",ec," but executes its body and returns nothing."):R.call(null,dc," works like ",ec," but executes its body and returns nothing."),ge=ek.b(x(['(doseq [name ["Akeelah" "Bhamini" "Cierra"]]\n  (println name))'],0)),he=W.b(x([I,"doseq",ee,fe,ge],0)),fc=N.a?N.a("doseq"):N.call(null,"doseq"),gc=N.a?N.a("println"):N.call(null,"println"),hc=N.a?N.a("-main"):N.call(null,"-main"),ie=R.r?R.r("Using ",
fc," and ",gc,", write a ",hc," function that prints out all the countries and their population densities from the World Bank API."):R.call(null,"Using ",fc," and ",gc,", write a ",hc," function that prints out all the countries and their population densities from the World Bank API."),ic=N.a?N.a('(get-indicator-values "EN.POP.DNST" 2010)'):N.call(null,'(get-indicator-values "EN.POP.DNST" 2010)'),je=R.d?R.d("Use ",ic," to get the values you need."):R.call(null,"Use ",ic," to get the values you need."),
ke=W.b(x([I,"Exercise: Finish -main",ie,je],0)),jc=N.a?N.a("-main"):N.call(null,"-main"),kc=N.a?N.a("sort-by"):N.call(null,"sort-by"),le=R.k?R.k("Change your ",jc," function to only print out the top 10 countries and their population densities. You will need the ",kc," function to make this work."):R.call(null,"Change your ",jc," function to only print out the top 10 countries and their population densities. You will need the ",kc," function to make this work."),me=W.b(x([I,"Bonus exercise: Only show the top 10 countries",
le],0)),ne=X.b(x([I,"Revisiting -main",de,he,ke,me],0));return Tj.b(x([wi,"mozilla-theme.css",a,Oa,xd,be,ne],0))}()):J.call(null,E,function(){var a=Sj.b(x([I,"Module 8"],0)),b=R.a?R.a("Type the following in your terminal:"):R.call(null,"Type the following in your terminal:"),c=Z.b(x([H,"bash","lein new clojurebridge global-growth "],0)),d=W.b(x([I,"Creating a project",b,c],0)),e=Vj.b(x(["manages Clojure projects","tool you run in your terminal","silly name"],0)),g=W.b(x([I,"Leiningen",e],0)),h=M.a?
M.a("project.clj"):M.call(null,"project.clj"),l=M.a?M.a("src/global_growth/core.clj"):M.call(null,"src/global_growth/core.clj"),n=Vj.b(x([".gitignore","doc/intro.md",h,"resources/","README.md",l,"test/global_growth/core_test.clj"],0)),t=W.b(x([I,"Project structure",n],0)),u=Vj.b(x(["configuration file for Leiningen","lists dependencies","contains information about program author, description and more"],0)),y=W.b(x([I,"project.clj",u],0)),F=R.a?R.a("This is where we will be writing much of our code."):
R.call(null,"This is where we will be writing much of our code."),Y=R.c?R.c("Clojure programs can be made up of multiple files, but we are ","going to use just this one for now."):R.call(null,"Clojure programs can be made up of multiple files, but we are ","going to use just this one for now."),ia=W.b(x([I,"src/global_growth/core.clj",F,Y],0)),oa=R.a?R.a("Go to the command line and enter:"):R.call(null,"Go to the command line and enter:"),Ba=Z.b(x([H,"bash","cd global_growth\nlein run"],0)),xa=W.b(x([I,
"Try it out",oa,Ba],0)),Oa=X.b(x([I,"Projects",d,g,t,y,ia,xa],0)),Ka=N.a?N.a("src/global_growth/core.clj"):N.call(null,"src/global_growth/core.clj"),Za=R.d?R.d("Open ",Ka,"."):R.call(null,"Open ",Ka,"."),Qa=N.a?N.a("-main"):N.call(null,"-main"),vc=R.d?R.d("What is in the ",Qa," function?"):R.call(null,"What is in the ",Qa," function?"),id=W.b(x([I,"What happens when I run my program?",Za,vc],0)),jd=Vj.b(x(["Just an ordinary function with an odd name","The function called first when you run your program",
"Can call other functions"],0)),kd=W.b(x([I,"The -main function",jd],0)),ld=ek.b(x(['(defn quotify\n  [quote author]\n  (str quote "\\n\\n-- " author))\n\n(defn -main\n  [\x26 args]\n  (println\n   (quotify (str "A man who carries a cat by the tail learns "\n                 "something he can learn in no other way.")\n            "Mark Twain")))'],0)),md=W.b(x([I,"Using other functions from -main",ld],0)),nd=R.a?R.a("Namespaces let you organize your code into logical sections."):R.call(null,"Namespaces let you organize your code into logical sections."),
od=ek.b(x([";; in src/global_growth/core.clj\n(ns global-growth.core)"],0)),pd=W.b(x([I,"Namespaces and organization",nd,od],0)),qd=R.a?R.a("Dependencies are code libraries others have written you can reuse in your project."):R.call(null,"Dependencies are code libraries others have written you can reuse in your project."),Nb=N.a?N.a("project.clj"):N.call(null,"project.clj"),Ob=N.a?N.a(":dependencies"):N.call(null,":dependencies"),sd=R.k?R.k("Open ",Nb," and look for the ",Ob," key."):R.call(null,
"Open ",Nb," and look for the ",Ob," key."),td=ek.b(x([':dependencies [[org.clojure/clojure "1.5.1"]\n               [clj-http "0.9.0"]\n               [cheshire "5.3.1"]]'],0)),ud=W.b(x([I,"Dependencies",qd,sd,td],0)),vd=ek.b(x([";; in src/global_growth/core.clj\n(ns global-growth.core\n  (:require [clj-http.client :as client]\n            [cheshire.core :as json]))"],0)),wd=W.b(x([I,"Requiring dependencies",vd],0)),xd=X.b(x([I,"Modifying a project",id,kd,md,pd,ud,wd],0)),yd=Vj.b(x(["collection of world development indicators data",
"provided as JSON documents"],0)),zd=W.b(x([I,"The World Bank API",yd],0)),Pb=Q.a?Q.a("Application Programming Interface"):Q.call(null,"Application Programming Interface"),Qb=Q.a?Q.a("web pages for computers"):Q.call(null,"web pages for computers"),Rb=Q.a?Q.a("one popular format: JSON"):Q.call(null,"one popular format: JSON"),Ad=V.d?V.d(Pb,Qb,Rb):V.call(null,Pb,Qb,Rb),Bd=W.b(x([I,"What is an API?",Ad],0)),Cd=R.a?R.a("http://api.worldbank.org/countries/all/indicators/EN.POP.DNST?format\x3djson\x26date\x3d2010"):
R.call(null,"http://api.worldbank.org/countries/all/indicators/EN.POP.DNST?format\x3djson\x26date\x3d2010"),Dd=W.b(x([I,"API in action",Cd],0)),Ed=Z.b(x([H,"json",'[\n  {\n    "page": 1,\n    "pages": 6,\n    "per_page": "50",\n    "total": 252\n  },\n  [\n    {\n      "indicator": {\n        "id": "EN.POP.DNST",\n        "value": "Population density (people per sq. km of land area)"\n      },\n      "country": {\n        "id": "1A",\n        "value": "Arab World"\n      },\n      "value": "25.5287276250072",\n      "decimal": "0",\n      "date": "2010"\n    },\n    {\n      "indicator": {\n        "id": "EN.POP.DNST",\n        "value": "Population density (people per sq. km of land area)"\n      },\n      "country": {\n        "id": "S3",\n        "value": "Caribbean small states"\n      },\n      "value": "17.0236186241818",\n      "decimal": "0",\n      "date": "2010"\n    }\n  ]\n]'],
0)),Fd=W.b(x([I,"Sample API response",Ed],0)),Gd=ek.b(x(['(client/get "http://api.worldbank.org/countries/all/indicators/EN.POP.DNST?format\x3djson\x26date\x3d2010")\n\n;; elided and formatted\n;;\x3d\x3e {:orig-content-encoding nil,\n;;    :request-time 109, :status 200,\n;;    :headers {"content-length" "10340",\n;;              "content-type" "application/json;charset\x3dutf-8"},\n;;    :body "[{\\"page\\":1,\\"pages\\":6}]"}'],0)),Hd=W.b(x([I,"Accessing APIs with Clojure",Gd],0)),Id=ek.b(x(['(json/parse-string "[{\\"page\\":1,\\"pages\\":6}]" true)\n;;\x3d\x3e ({:page 1, :pages 6})'],
0)),Jd=W.b(x([I,"Converting JSON",Id],0)),Sb=N.a?N.a("get-population-density"):N.call(null,"get-population-density"),Kd=R.d?R.d("Write a function called ",Sb," that takes no arguments, and returns Clojure data from the World Bank API on population density."):R.call(null,"Write a function called ",Sb," that takes no arguments, and returns Clojure data from the World Bank API on population density."),Tb=N.a?N.a(":body"):N.call(null,":body"),Ld=R.d?R.d("You will need to make the web request, pull the ",
Tb," value out of the response, and then parse the JSON."):R.call(null,"You will need to make the web request, pull the ",Tb," value out of the response, and then parse the JSON."),Md=ek.b(x(['(get-population-density)\n;;\x3d\x3e ({:page 1, :pages 6, :per_page "50", :total 252}\n;;    [{:indicator {:id "EN.POP.DNST", :value "Population density (people per sq. km of land area)"},\n;;    :country {:id "1A", :value "Arab World"}, :value "25.5287276250072", :decimal "0", :date "2010"},\n;;    ...])'],
0)),Nd=W.b(x([I,"Exercise: Get the results from API call",Kd,Ld,Md],0)),Od=ek.b(x(['(defn get-api\n  "Returns map representing API response."\n  [path params]\n  (let [url (str "http://api.worldbank.org" path)\n        query-params (merge params {:format "json" :per_page 10000})\n        response (json/parse-string\n                  (:body\n                   (client/get url {:query-params query-params})) true)\n        metadata (first response)\n        results (second response)]\n    {:metadata metadata\n     :results results}))'],
0)),Pd=W.b(x([I,"Getting more information from the API",Od],0)),Qd=ek.b(x(['(get-api "/countries/all/indicators/EN.POP.DNST" {:date 2010})\n;;\x3d\x3e {:metadata {:page 1, :pages 1, :per_page "10000", :total 252},\n;;    :results [{:indicator {:id "EN.POP.DNST",\n;;    :value "Population density (people per sq. km of land area)"},\n;;    :country {:id "1A", :value "Arab World"}, :value "25.5287276250072",\n;;    :decimal "0", :date "2010"} ...]}'],0)),Rd=W.b(x([I,"get-api",Qd],0)),Ub=N.a?N.a("get-country-and-value"):
N.call(null,"get-country-and-value"),Vb=N.a?N.a("get-api"):N.call(null,"get-api"),Wb=N.a?N.a("get-country-and-value"):N.call(null,"get-country-and-value"),Sd=R.T?R.T("Write a function ",Ub," that can take ","the return value of ",Vb," and get the country names ","and values out of that value. ",Wb," should return a vector of vectors."):R.call(null,"Write a function ",Ub," that can take ","the return value of ",Vb," and get the country names ","and values out of that value. ",Wb," should return a vector of vectors."),
Td=ek.b(x(['(get-country-and-value\n  (get-api "/countries/all/indicators/EN.POP.DNST" {:date 2010}))\n;;\x3d\x3e [["Arab World" "25.5287276250072"]\n;;    ["Caribbean small states" "17.0236186241818"]\n;;    ...]'],0)),Ud=W.b(x([I,"Exercise: extracting the data we want",Sd,Td],0)),Xb=N.a?N.a("remove-aggregrate-countries"):N.call(null,"remove-aggregrate-countries"),Yb=N.a?N.a("countries"):N.call(null,"countries"),Zb=N.a?N.a("get-indicator-values"):N.call(null,"get-indicator-values"),Vd=R.r?R.r("Uncomment the definitions for ",
Xb,", ",Yb,", and ",Zb,"."):R.call(null,"Uncomment the definitions for ",Xb,", ",Yb,", and ",Zb,"."),Wd=W.b(x([I,"Removing unwanted data",Vd],0)),Xd=ek.b(x(['(defn get-indicator-values\n  "Returns indicator values for a specified year for all countries."\n  [indicator-code year]\n  (let [response (get-api (str "/countries/all/indicators/"\n                               indicator-code)\n                          {:date (str year)})\n        values (get-country-and-value response)]\n    (for [[country value] values\n          :when (and (not (nil? value))\n                     (contains? @countries country))]\n      [country (read-string value)])))'],
0)),Yd=W.b(x([I,"get-indicator-values",Xd],0)),Zd=ek.b(x(['(get-indicator-values "EN.POP.DNST" 2010)'],0)),$d=R.a?R.a("What do you get?"):R.call(null,"What do you get?"),ae=W.b(x([I,"Get a list of countries and population density",Zd,$d],0)),be=X.b(x([I,"Your first real program",zd,Bd,Dd,Fd,Hd,Jd,Nd,Pd,Rd,Ud,Wd,Yd,ae],0)),$b=Q.a?Q.a("Let's make our program print out a list of all countries and their population density."):Q.call(null,"Let's make our program print out a list of all countries and their population density."),
ac=N.a?N.a("-main"):N.call(null,"-main"),bc=Q.d?Q.d("Make sure ",ac," is the last function in your file."):Q.call(null,"Make sure ",ac," is the last function in your file."),ce=V.c?V.c($b,bc):V.call(null,$b,bc),de=W.b(x([I,"Updating -main",ce],0)),cc=N.a?N.a("doseq"):N.call(null,"doseq"),ee=R.d?R.d("In order to print out all the countries and population densities, you will need a new statement, ",cc,"."):R.call(null,"In order to print out all the countries and population densities, you will need a new statement, ",
cc,"."),dc=N.a?N.a("doseq"):N.call(null,"doseq"),ec=N.a?N.a("for"):N.call(null,"for"),fe=R.e?R.e(dc," works like ",ec," but executes its body and returns nothing."):R.call(null,dc," works like ",ec," but executes its body and returns nothing."),ge=ek.b(x(['(doseq [name ["Akeelah" "Bhamini" "Cierra"]]\n  (println name))'],0)),he=W.b(x([I,"doseq",ee,fe,ge],0)),fc=N.a?N.a("doseq"):N.call(null,"doseq"),gc=N.a?N.a("println"):N.call(null,"println"),hc=N.a?N.a("-main"):N.call(null,"-main"),ie=R.r?R.r("Using ",
fc," and ",gc,", write a ",hc," function that prints out all the countries and their population densities from the World Bank API."):R.call(null,"Using ",fc," and ",gc,", write a ",hc," function that prints out all the countries and their population densities from the World Bank API."),ic=N.a?N.a('(get-indicator-values "EN.POP.DNST" 2010)'):N.call(null,'(get-indicator-values "EN.POP.DNST" 2010)'),je=R.d?R.d("Use ",ic," to get the values you need."):R.call(null,"Use ",ic," to get the values you need."),
ke=W.b(x([I,"Exercise: Finish -main",ie,je],0)),jc=N.a?N.a("-main"):N.call(null,"-main"),kc=N.a?N.a("sort-by"):N.call(null,"sort-by"),le=R.k?R.k("Change your ",jc," function to only print out the top 10 countries and their population densities. You will need the ",kc," function to make this work."):R.call(null,"Change your ",jc," function to only print out the top 10 countries and their population densities. You will need the ",kc," function to make this work."),me=W.b(x([I,"Bonus exercise: Only show the top 10 countries",
le],0)),ne=X.b(x([I,"Revisiting -main",de,he,ke,me],0));return Tj.b(x([wi,"mozilla-theme.css",a,Oa,xd,be,ne],0))}())):uj.call(null,K.c?K.c(E,D):K.call(null,E,D),J.c?J.c(E,function(){var a=Sj.b(x([I,"Module 8"],0)),b=R.a?R.a("Type the following in your terminal:"):R.call(null,"Type the following in your terminal:"),c=Z.b(x([H,"bash","lein new clojurebridge global-growth "],0)),d=W.b(x([I,"Creating a project",b,c],0)),e=Vj.b(x(["manages Clojure projects","tool you run in your terminal","silly name"],
0)),g=W.b(x([I,"Leiningen",e],0)),h=M.a?M.a("project.clj"):M.call(null,"project.clj"),l=M.a?M.a("src/global_growth/core.clj"):M.call(null,"src/global_growth/core.clj"),n=Vj.b(x([".gitignore","doc/intro.md",h,"resources/","README.md",l,"test/global_growth/core_test.clj"],0)),t=W.b(x([I,"Project structure",n],0)),u=Vj.b(x(["configuration file for Leiningen","lists dependencies","contains information about program author, description and more"],0)),y=W.b(x([I,"project.clj",u],0)),F=R.a?R.a("This is where we will be writing much of our code."):
R.call(null,"This is where we will be writing much of our code."),Y=R.c?R.c("Clojure programs can be made up of multiple files, but we are ","going to use just this one for now."):R.call(null,"Clojure programs can be made up of multiple files, but we are ","going to use just this one for now."),ia=W.b(x([I,"src/global_growth/core.clj",F,Y],0)),oa=R.a?R.a("Go to the command line and enter:"):R.call(null,"Go to the command line and enter:"),Ba=Z.b(x([H,"bash","cd global_growth\nlein run"],0)),xa=W.b(x([I,
"Try it out",oa,Ba],0)),Oa=X.b(x([I,"Projects",d,g,t,y,ia,xa],0)),Ka=N.a?N.a("src/global_growth/core.clj"):N.call(null,"src/global_growth/core.clj"),Za=R.d?R.d("Open ",Ka,"."):R.call(null,"Open ",Ka,"."),Qa=N.a?N.a("-main"):N.call(null,"-main"),vc=R.d?R.d("What is in the ",Qa," function?"):R.call(null,"What is in the ",Qa," function?"),id=W.b(x([I,"What happens when I run my program?",Za,vc],0)),jd=Vj.b(x(["Just an ordinary function with an odd name","The function called first when you run your program",
"Can call other functions"],0)),kd=W.b(x([I,"The -main function",jd],0)),ld=ek.b(x(['(defn quotify\n  [quote author]\n  (str quote "\\n\\n-- " author))\n\n(defn -main\n  [\x26 args]\n  (println\n   (quotify (str "A man who carries a cat by the tail learns "\n                 "something he can learn in no other way.")\n            "Mark Twain")))'],0)),md=W.b(x([I,"Using other functions from -main",ld],0)),nd=R.a?R.a("Namespaces let you organize your code into logical sections."):R.call(null,"Namespaces let you organize your code into logical sections."),
od=ek.b(x([";; in src/global_growth/core.clj\n(ns global-growth.core)"],0)),pd=W.b(x([I,"Namespaces and organization",nd,od],0)),qd=R.a?R.a("Dependencies are code libraries others have written you can reuse in your project."):R.call(null,"Dependencies are code libraries others have written you can reuse in your project."),Nb=N.a?N.a("project.clj"):N.call(null,"project.clj"),Ob=N.a?N.a(":dependencies"):N.call(null,":dependencies"),sd=R.k?R.k("Open ",Nb," and look for the ",Ob," key."):R.call(null,
"Open ",Nb," and look for the ",Ob," key."),td=ek.b(x([':dependencies [[org.clojure/clojure "1.5.1"]\n               [clj-http "0.9.0"]\n               [cheshire "5.3.1"]]'],0)),ud=W.b(x([I,"Dependencies",qd,sd,td],0)),vd=ek.b(x([";; in src/global_growth/core.clj\n(ns global-growth.core\n  (:require [clj-http.client :as client]\n            [cheshire.core :as json]))"],0)),wd=W.b(x([I,"Requiring dependencies",vd],0)),xd=X.b(x([I,"Modifying a project",id,kd,md,pd,ud,wd],0)),yd=Vj.b(x(["collection of world development indicators data",
"provided as JSON documents"],0)),zd=W.b(x([I,"The World Bank API",yd],0)),Pb=Q.a?Q.a("Application Programming Interface"):Q.call(null,"Application Programming Interface"),Qb=Q.a?Q.a("web pages for computers"):Q.call(null,"web pages for computers"),Rb=Q.a?Q.a("one popular format: JSON"):Q.call(null,"one popular format: JSON"),Ad=V.d?V.d(Pb,Qb,Rb):V.call(null,Pb,Qb,Rb),Bd=W.b(x([I,"What is an API?",Ad],0)),Cd=R.a?R.a("http://api.worldbank.org/countries/all/indicators/EN.POP.DNST?format\x3djson\x26date\x3d2010"):
R.call(null,"http://api.worldbank.org/countries/all/indicators/EN.POP.DNST?format\x3djson\x26date\x3d2010"),Dd=W.b(x([I,"API in action",Cd],0)),Ed=Z.b(x([H,"json",'[\n  {\n    "page": 1,\n    "pages": 6,\n    "per_page": "50",\n    "total": 252\n  },\n  [\n    {\n      "indicator": {\n        "id": "EN.POP.DNST",\n        "value": "Population density (people per sq. km of land area)"\n      },\n      "country": {\n        "id": "1A",\n        "value": "Arab World"\n      },\n      "value": "25.5287276250072",\n      "decimal": "0",\n      "date": "2010"\n    },\n    {\n      "indicator": {\n        "id": "EN.POP.DNST",\n        "value": "Population density (people per sq. km of land area)"\n      },\n      "country": {\n        "id": "S3",\n        "value": "Caribbean small states"\n      },\n      "value": "17.0236186241818",\n      "decimal": "0",\n      "date": "2010"\n    }\n  ]\n]'],
0)),Fd=W.b(x([I,"Sample API response",Ed],0)),Gd=ek.b(x(['(client/get "http://api.worldbank.org/countries/all/indicators/EN.POP.DNST?format\x3djson\x26date\x3d2010")\n\n;; elided and formatted\n;;\x3d\x3e {:orig-content-encoding nil,\n;;    :request-time 109, :status 200,\n;;    :headers {"content-length" "10340",\n;;              "content-type" "application/json;charset\x3dutf-8"},\n;;    :body "[{\\"page\\":1,\\"pages\\":6}]"}'],0)),Hd=W.b(x([I,"Accessing APIs with Clojure",Gd],0)),Id=ek.b(x(['(json/parse-string "[{\\"page\\":1,\\"pages\\":6}]" true)\n;;\x3d\x3e ({:page 1, :pages 6})'],
0)),Jd=W.b(x([I,"Converting JSON",Id],0)),Sb=N.a?N.a("get-population-density"):N.call(null,"get-population-density"),Kd=R.d?R.d("Write a function called ",Sb," that takes no arguments, and returns Clojure data from the World Bank API on population density."):R.call(null,"Write a function called ",Sb," that takes no arguments, and returns Clojure data from the World Bank API on population density."),Tb=N.a?N.a(":body"):N.call(null,":body"),Ld=R.d?R.d("You will need to make the web request, pull the ",
Tb," value out of the response, and then parse the JSON."):R.call(null,"You will need to make the web request, pull the ",Tb," value out of the response, and then parse the JSON."),Md=ek.b(x(['(get-population-density)\n;;\x3d\x3e ({:page 1, :pages 6, :per_page "50", :total 252}\n;;    [{:indicator {:id "EN.POP.DNST", :value "Population density (people per sq. km of land area)"},\n;;    :country {:id "1A", :value "Arab World"}, :value "25.5287276250072", :decimal "0", :date "2010"},\n;;    ...])'],
0)),Nd=W.b(x([I,"Exercise: Get the results from API call",Kd,Ld,Md],0)),Od=ek.b(x(['(defn get-api\n  "Returns map representing API response."\n  [path params]\n  (let [url (str "http://api.worldbank.org" path)\n        query-params (merge params {:format "json" :per_page 10000})\n        response (json/parse-string\n                  (:body\n                   (client/get url {:query-params query-params})) true)\n        metadata (first response)\n        results (second response)]\n    {:metadata metadata\n     :results results}))'],
0)),Pd=W.b(x([I,"Getting more information from the API",Od],0)),Qd=ek.b(x(['(get-api "/countries/all/indicators/EN.POP.DNST" {:date 2010})\n;;\x3d\x3e {:metadata {:page 1, :pages 1, :per_page "10000", :total 252},\n;;    :results [{:indicator {:id "EN.POP.DNST",\n;;    :value "Population density (people per sq. km of land area)"},\n;;    :country {:id "1A", :value "Arab World"}, :value "25.5287276250072",\n;;    :decimal "0", :date "2010"} ...]}'],0)),Rd=W.b(x([I,"get-api",Qd],0)),Ub=N.a?N.a("get-country-and-value"):
N.call(null,"get-country-and-value"),Vb=N.a?N.a("get-api"):N.call(null,"get-api"),Wb=N.a?N.a("get-country-and-value"):N.call(null,"get-country-and-value"),Sd=R.T?R.T("Write a function ",Ub," that can take ","the return value of ",Vb," and get the country names ","and values out of that value. ",Wb," should return a vector of vectors."):R.call(null,"Write a function ",Ub," that can take ","the return value of ",Vb," and get the country names ","and values out of that value. ",Wb," should return a vector of vectors."),
Td=ek.b(x(['(get-country-and-value\n  (get-api "/countries/all/indicators/EN.POP.DNST" {:date 2010}))\n;;\x3d\x3e [["Arab World" "25.5287276250072"]\n;;    ["Caribbean small states" "17.0236186241818"]\n;;    ...]'],0)),Ud=W.b(x([I,"Exercise: extracting the data we want",Sd,Td],0)),Xb=N.a?N.a("remove-aggregrate-countries"):N.call(null,"remove-aggregrate-countries"),Yb=N.a?N.a("countries"):N.call(null,"countries"),Zb=N.a?N.a("get-indicator-values"):N.call(null,"get-indicator-values"),Vd=R.r?R.r("Uncomment the definitions for ",
Xb,", ",Yb,", and ",Zb,"."):R.call(null,"Uncomment the definitions for ",Xb,", ",Yb,", and ",Zb,"."),Wd=W.b(x([I,"Removing unwanted data",Vd],0)),Xd=ek.b(x(['(defn get-indicator-values\n  "Returns indicator values for a specified year for all countries."\n  [indicator-code year]\n  (let [response (get-api (str "/countries/all/indicators/"\n                               indicator-code)\n                          {:date (str year)})\n        values (get-country-and-value response)]\n    (for [[country value] values\n          :when (and (not (nil? value))\n                     (contains? @countries country))]\n      [country (read-string value)])))'],
0)),Yd=W.b(x([I,"get-indicator-values",Xd],0)),Zd=ek.b(x(['(get-indicator-values "EN.POP.DNST" 2010)'],0)),$d=R.a?R.a("What do you get?"):R.call(null,"What do you get?"),ae=W.b(x([I,"Get a list of countries and population density",Zd,$d],0)),be=X.b(x([I,"Your first real program",zd,Bd,Dd,Fd,Hd,Jd,Nd,Pd,Rd,Ud,Wd,Yd,ae],0)),$b=Q.a?Q.a("Let's make our program print out a list of all countries and their population density."):Q.call(null,"Let's make our program print out a list of all countries and their population density."),
ac=N.a?N.a("-main"):N.call(null,"-main"),bc=Q.d?Q.d("Make sure ",ac," is the last function in your file."):Q.call(null,"Make sure ",ac," is the last function in your file."),ce=V.c?V.c($b,bc):V.call(null,$b,bc),de=W.b(x([I,"Updating -main",ce],0)),cc=N.a?N.a("doseq"):N.call(null,"doseq"),ee=R.d?R.d("In order to print out all the countries and population densities, you will need a new statement, ",cc,"."):R.call(null,"In order to print out all the countries and population densities, you will need a new statement, ",
cc,"."),dc=N.a?N.a("doseq"):N.call(null,"doseq"),ec=N.a?N.a("for"):N.call(null,"for"),fe=R.e?R.e(dc," works like ",ec," but executes its body and returns nothing."):R.call(null,dc," works like ",ec," but executes its body and returns nothing."),ge=ek.b(x(['(doseq [name ["Akeelah" "Bhamini" "Cierra"]]\n  (println name))'],0)),he=W.b(x([I,"doseq",ee,fe,ge],0)),fc=N.a?N.a("doseq"):N.call(null,"doseq"),gc=N.a?N.a("println"):N.call(null,"println"),hc=N.a?N.a("-main"):N.call(null,"-main"),ie=R.r?R.r("Using ",
fc," and ",gc,", write a ",hc," function that prints out all the countries and their population densities from the World Bank API."):R.call(null,"Using ",fc," and ",gc,", write a ",hc," function that prints out all the countries and their population densities from the World Bank API."),ic=N.a?N.a('(get-indicator-values "EN.POP.DNST" 2010)'):N.call(null,'(get-indicator-values "EN.POP.DNST" 2010)'),je=R.d?R.d("Use ",ic," to get the values you need."):R.call(null,"Use ",ic," to get the values you need."),
ke=W.b(x([I,"Exercise: Finish -main",ie,je],0)),jc=N.a?N.a("-main"):N.call(null,"-main"),kc=N.a?N.a("sort-by"):N.call(null,"sort-by"),le=R.k?R.k("Change your ",jc," function to only print out the top 10 countries and their population densities. You will need the ",kc," function to make this work."):R.call(null,"Change your ",jc," function to only print out the top 10 countries and their population densities. You will need the ",kc," function to make this work."),me=W.b(x([I,"Bonus exercise: Only show the top 10 countries",
le],0)),ne=X.b(x([I,"Revisiting -main",de,he,ke,me],0));return Tj.b(x([wi,"mozilla-theme.css",a,Oa,xd,be,ne],0))}()):J.call(null,E,function(){var a=Sj.b(x([I,"Module 8"],0)),b=R.a?R.a("Type the following in your terminal:"):R.call(null,"Type the following in your terminal:"),c=Z.b(x([H,"bash","lein new clojurebridge global-growth "],0)),d=W.b(x([I,"Creating a project",b,c],0)),e=Vj.b(x(["manages Clojure projects","tool you run in your terminal","silly name"],0)),g=W.b(x([I,"Leiningen",e],0)),h=M.a?
M.a("project.clj"):M.call(null,"project.clj"),l=M.a?M.a("src/global_growth/core.clj"):M.call(null,"src/global_growth/core.clj"),n=Vj.b(x([".gitignore","doc/intro.md",h,"resources/","README.md",l,"test/global_growth/core_test.clj"],0)),t=W.b(x([I,"Project structure",n],0)),u=Vj.b(x(["configuration file for Leiningen","lists dependencies","contains information about program author, description and more"],0)),y=W.b(x([I,"project.clj",u],0)),F=R.a?R.a("This is where we will be writing much of our code."):
R.call(null,"This is where we will be writing much of our code."),Y=R.c?R.c("Clojure programs can be made up of multiple files, but we are ","going to use just this one for now."):R.call(null,"Clojure programs can be made up of multiple files, but we are ","going to use just this one for now."),ia=W.b(x([I,"src/global_growth/core.clj",F,Y],0)),oa=R.a?R.a("Go to the command line and enter:"):R.call(null,"Go to the command line and enter:"),Ba=Z.b(x([H,"bash","cd global_growth\nlein run"],0)),xa=W.b(x([I,
"Try it out",oa,Ba],0)),Oa=X.b(x([I,"Projects",d,g,t,y,ia,xa],0)),Ka=N.a?N.a("src/global_growth/core.clj"):N.call(null,"src/global_growth/core.clj"),Za=R.d?R.d("Open ",Ka,"."):R.call(null,"Open ",Ka,"."),Qa=N.a?N.a("-main"):N.call(null,"-main"),vc=R.d?R.d("What is in the ",Qa," function?"):R.call(null,"What is in the ",Qa," function?"),id=W.b(x([I,"What happens when I run my program?",Za,vc],0)),jd=Vj.b(x(["Just an ordinary function with an odd name","The function called first when you run your program",
"Can call other functions"],0)),kd=W.b(x([I,"The -main function",jd],0)),ld=ek.b(x(['(defn quotify\n  [quote author]\n  (str quote "\\n\\n-- " author))\n\n(defn -main\n  [\x26 args]\n  (println\n   (quotify (str "A man who carries a cat by the tail learns "\n                 "something he can learn in no other way.")\n            "Mark Twain")))'],0)),md=W.b(x([I,"Using other functions from -main",ld],0)),nd=R.a?R.a("Namespaces let you organize your code into logical sections."):R.call(null,"Namespaces let you organize your code into logical sections."),
od=ek.b(x([";; in src/global_growth/core.clj\n(ns global-growth.core)"],0)),pd=W.b(x([I,"Namespaces and organization",nd,od],0)),qd=R.a?R.a("Dependencies are code libraries others have written you can reuse in your project."):R.call(null,"Dependencies are code libraries others have written you can reuse in your project."),Nb=N.a?N.a("project.clj"):N.call(null,"project.clj"),Ob=N.a?N.a(":dependencies"):N.call(null,":dependencies"),sd=R.k?R.k("Open ",Nb," and look for the ",Ob," key."):R.call(null,
"Open ",Nb," and look for the ",Ob," key."),td=ek.b(x([':dependencies [[org.clojure/clojure "1.5.1"]\n               [clj-http "0.9.0"]\n               [cheshire "5.3.1"]]'],0)),ud=W.b(x([I,"Dependencies",qd,sd,td],0)),vd=ek.b(x([";; in src/global_growth/core.clj\n(ns global-growth.core\n  (:require [clj-http.client :as client]\n            [cheshire.core :as json]))"],0)),wd=W.b(x([I,"Requiring dependencies",vd],0)),xd=X.b(x([I,"Modifying a project",id,kd,md,pd,ud,wd],0)),yd=Vj.b(x(["collection of world development indicators data",
"provided as JSON documents"],0)),zd=W.b(x([I,"The World Bank API",yd],0)),Pb=Q.a?Q.a("Application Programming Interface"):Q.call(null,"Application Programming Interface"),Qb=Q.a?Q.a("web pages for computers"):Q.call(null,"web pages for computers"),Rb=Q.a?Q.a("one popular format: JSON"):Q.call(null,"one popular format: JSON"),Ad=V.d?V.d(Pb,Qb,Rb):V.call(null,Pb,Qb,Rb),Bd=W.b(x([I,"What is an API?",Ad],0)),Cd=R.a?R.a("http://api.worldbank.org/countries/all/indicators/EN.POP.DNST?format\x3djson\x26date\x3d2010"):
R.call(null,"http://api.worldbank.org/countries/all/indicators/EN.POP.DNST?format\x3djson\x26date\x3d2010"),Dd=W.b(x([I,"API in action",Cd],0)),Ed=Z.b(x([H,"json",'[\n  {\n    "page": 1,\n    "pages": 6,\n    "per_page": "50",\n    "total": 252\n  },\n  [\n    {\n      "indicator": {\n        "id": "EN.POP.DNST",\n        "value": "Population density (people per sq. km of land area)"\n      },\n      "country": {\n        "id": "1A",\n        "value": "Arab World"\n      },\n      "value": "25.5287276250072",\n      "decimal": "0",\n      "date": "2010"\n    },\n    {\n      "indicator": {\n        "id": "EN.POP.DNST",\n        "value": "Population density (people per sq. km of land area)"\n      },\n      "country": {\n        "id": "S3",\n        "value": "Caribbean small states"\n      },\n      "value": "17.0236186241818",\n      "decimal": "0",\n      "date": "2010"\n    }\n  ]\n]'],
0)),Fd=W.b(x([I,"Sample API response",Ed],0)),Gd=ek.b(x(['(client/get "http://api.worldbank.org/countries/all/indicators/EN.POP.DNST?format\x3djson\x26date\x3d2010")\n\n;; elided and formatted\n;;\x3d\x3e {:orig-content-encoding nil,\n;;    :request-time 109, :status 200,\n;;    :headers {"content-length" "10340",\n;;              "content-type" "application/json;charset\x3dutf-8"},\n;;    :body "[{\\"page\\":1,\\"pages\\":6}]"}'],0)),Hd=W.b(x([I,"Accessing APIs with Clojure",Gd],0)),Id=ek.b(x(['(json/parse-string "[{\\"page\\":1,\\"pages\\":6}]" true)\n;;\x3d\x3e ({:page 1, :pages 6})'],
0)),Jd=W.b(x([I,"Converting JSON",Id],0)),Sb=N.a?N.a("get-population-density"):N.call(null,"get-population-density"),Kd=R.d?R.d("Write a function called ",Sb," that takes no arguments, and returns Clojure data from the World Bank API on population density."):R.call(null,"Write a function called ",Sb," that takes no arguments, and returns Clojure data from the World Bank API on population density."),Tb=N.a?N.a(":body"):N.call(null,":body"),Ld=R.d?R.d("You will need to make the web request, pull the ",
Tb," value out of the response, and then parse the JSON."):R.call(null,"You will need to make the web request, pull the ",Tb," value out of the response, and then parse the JSON."),Md=ek.b(x(['(get-population-density)\n;;\x3d\x3e ({:page 1, :pages 6, :per_page "50", :total 252}\n;;    [{:indicator {:id "EN.POP.DNST", :value "Population density (people per sq. km of land area)"},\n;;    :country {:id "1A", :value "Arab World"}, :value "25.5287276250072", :decimal "0", :date "2010"},\n;;    ...])'],
0)),Nd=W.b(x([I,"Exercise: Get the results from API call",Kd,Ld,Md],0)),Od=ek.b(x(['(defn get-api\n  "Returns map representing API response."\n  [path params]\n  (let [url (str "http://api.worldbank.org" path)\n        query-params (merge params {:format "json" :per_page 10000})\n        response (json/parse-string\n                  (:body\n                   (client/get url {:query-params query-params})) true)\n        metadata (first response)\n        results (second response)]\n    {:metadata metadata\n     :results results}))'],
0)),Pd=W.b(x([I,"Getting more information from the API",Od],0)),Qd=ek.b(x(['(get-api "/countries/all/indicators/EN.POP.DNST" {:date 2010})\n;;\x3d\x3e {:metadata {:page 1, :pages 1, :per_page "10000", :total 252},\n;;    :results [{:indicator {:id "EN.POP.DNST",\n;;    :value "Population density (people per sq. km of land area)"},\n;;    :country {:id "1A", :value "Arab World"}, :value "25.5287276250072",\n;;    :decimal "0", :date "2010"} ...]}'],0)),Rd=W.b(x([I,"get-api",Qd],0)),Ub=N.a?N.a("get-country-and-value"):
N.call(null,"get-country-and-value"),Vb=N.a?N.a("get-api"):N.call(null,"get-api"),Wb=N.a?N.a("get-country-and-value"):N.call(null,"get-country-and-value"),Sd=R.T?R.T("Write a function ",Ub," that can take ","the return value of ",Vb," and get the country names ","and values out of that value. ",Wb," should return a vector of vectors."):R.call(null,"Write a function ",Ub," that can take ","the return value of ",Vb," and get the country names ","and values out of that value. ",Wb," should return a vector of vectors."),
Td=ek.b(x(['(get-country-and-value\n  (get-api "/countries/all/indicators/EN.POP.DNST" {:date 2010}))\n;;\x3d\x3e [["Arab World" "25.5287276250072"]\n;;    ["Caribbean small states" "17.0236186241818"]\n;;    ...]'],0)),Ud=W.b(x([I,"Exercise: extracting the data we want",Sd,Td],0)),Xb=N.a?N.a("remove-aggregrate-countries"):N.call(null,"remove-aggregrate-countries"),Yb=N.a?N.a("countries"):N.call(null,"countries"),Zb=N.a?N.a("get-indicator-values"):N.call(null,"get-indicator-values"),Vd=R.r?R.r("Uncomment the definitions for ",
Xb,", ",Yb,", and ",Zb,"."):R.call(null,"Uncomment the definitions for ",Xb,", ",Yb,", and ",Zb,"."),Wd=W.b(x([I,"Removing unwanted data",Vd],0)),Xd=ek.b(x(['(defn get-indicator-values\n  "Returns indicator values for a specified year for all countries."\n  [indicator-code year]\n  (let [response (get-api (str "/countries/all/indicators/"\n                               indicator-code)\n                          {:date (str year)})\n        values (get-country-and-value response)]\n    (for [[country value] values\n          :when (and (not (nil? value))\n                     (contains? @countries country))]\n      [country (read-string value)])))'],
0)),Yd=W.b(x([I,"get-indicator-values",Xd],0)),Zd=ek.b(x(['(get-indicator-values "EN.POP.DNST" 2010)'],0)),$d=R.a?R.a("What do you get?"):R.call(null,"What do you get?"),ae=W.b(x([I,"Get a list of countries and population density",Zd,$d],0)),be=X.b(x([I,"Your first real program",zd,Bd,Dd,Fd,Hd,Jd,Nd,Pd,Rd,Ud,Wd,Yd,ae],0)),$b=Q.a?Q.a("Let's make our program print out a list of all countries and their population density."):Q.call(null,"Let's make our program print out a list of all countries and their population density."),
ac=N.a?N.a("-main"):N.call(null,"-main"),bc=Q.d?Q.d("Make sure ",ac," is the last function in your file."):Q.call(null,"Make sure ",ac," is the last function in your file."),ce=V.c?V.c($b,bc):V.call(null,$b,bc),de=W.b(x([I,"Updating -main",ce],0)),cc=N.a?N.a("doseq"):N.call(null,"doseq"),ee=R.d?R.d("In order to print out all the countries and population densities, you will need a new statement, ",cc,"."):R.call(null,"In order to print out all the countries and population densities, you will need a new statement, ",
cc,"."),dc=N.a?N.a("doseq"):N.call(null,"doseq"),ec=N.a?N.a("for"):N.call(null,"for"),fe=R.e?R.e(dc," works like ",ec," but executes its body and returns nothing."):R.call(null,dc," works like ",ec," but executes its body and returns nothing."),ge=ek.b(x(['(doseq [name ["Akeelah" "Bhamini" "Cierra"]]\n  (println name))'],0)),he=W.b(x([I,"doseq",ee,fe,ge],0)),fc=N.a?N.a("doseq"):N.call(null,"doseq"),gc=N.a?N.a("println"):N.call(null,"println"),hc=N.a?N.a("-main"):N.call(null,"-main"),ie=R.r?R.r("Using ",
fc," and ",gc,", write a ",hc," function that prints out all the countries and their population densities from the World Bank API."):R.call(null,"Using ",fc," and ",gc,", write a ",hc," function that prints out all the countries and their population densities from the World Bank API."),ic=N.a?N.a('(get-indicator-values "EN.POP.DNST" 2010)'):N.call(null,'(get-indicator-values "EN.POP.DNST" 2010)'),je=R.d?R.d("Use ",ic," to get the values you need."):R.call(null,"Use ",ic," to get the values you need."),
ke=W.b(x([I,"Exercise: Finish -main",ie,je],0)),jc=N.a?N.a("-main"):N.call(null,"-main"),kc=N.a?N.a("sort-by"):N.call(null,"sort-by"),le=R.k?R.k("Change your ",jc," function to only print out the top 10 countries and their population densities. You will need the ",kc," function to make this work."):R.call(null,"Change your ",jc," function to only print out the top 10 countries and their population densities. You will need the ",kc," function to make this work."),me=W.b(x([I,"Bonus exercise: Only show the top 10 countries",
le],0)),ne=X.b(x([I,"Revisiting -main",de,he,ke,me],0));return Tj.b(x([wi,"mozilla-theme.css",a,Oa,xd,be,ne],0))}()));return Jj()});var fk;
ea("tailrecursion.hoplon.app_pages._module7_DOT_html.hoploninit",function(){mc.c(window.location.search,"?dev")&&(mh.b(x(["Autoreloading"],0)),ck());fk=function(){function a(a){var d=null;0<arguments.length&&(d=x(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){var b=lj(a);a=B.d(b,0,null);b=B.d(b,1,null);return Z.b(x([Lc.d(a,H,"clojure"),b],0))}a.j=0;a.g=function(a){a=r(a);return b(a)};a.b=b;return a}();uj.c?uj.c(K.c?K.c(E,D):K.call(null,E,D),J.c?J.c(E,function(){var a=Sj.b(x([I,
"Module 7"],0)),b=R.a?R.a("If the user's input is valid, then save their data; otherwise, show an error message."):R.call(null,"If the user's input is valid, then save their data; otherwise, show an error message."),c=fk.b(x(['(if (valid? data)\n  (save! data)\n  (error "Your data was invalid"))'],0)),b=W.b(x([I,"Example: validating data",b,c],0)),c=N.a?N.a("if"):N.call(null,"if"),c=O.a?O.a(c):O.call(null,c),d=fk.b(x(["(if conditional-expression\n  expression-to-evaluate-when-true\n  expression-to-evaluate-when-false)"],
0)),c=W.b(x([I,c,d],0)),d=N.a?N.a("if"):N.call(null,"if"),d=O.c?O.c(d," examples"):O.call(null,d," examples"),e=fk.b(x(['(if (\x3e 3 1)\n  "3 is greater than 1"\n  "3 is not greater than 1")\n;;\x3d\x3e "3 is greater than 1"\n\n(if (\x3e 1 3)\n  "1 is greater than 3"\n  "1 is not greater than 3")\n;;\x3d\x3e "1 is not greater than 3"'],0)),d=W.b(x([I,d,e],0)),e=N.a?N.a("false"):N.call(null,"false"),g=N.a?N.a("nil"):N.call(null,"nil"),e=R.k?R.k("Everything except",e," or ",g,"."):R.call(null,"Everything except",
e," or ",g,"."),e=W.b(x([I,"What is truth?",e],0)),g=fk.b(x(['(if "anything other than nil or false is considered true"\n  "A string is considered true"\n  "A string is not considered true")\n;;\x3d\x3e "A string is considered true"\n\n(if nil\n  "nil is considered true"\n  "nil is not considered true")\n;;\x3d\x3e "nil is not considered true"\n\n(if (get {:a 1} :b)\n  "expressions which evaluate to nil are considered true"\n  "expressions which evaluate to nil are not considered true")\n;;\x3d\x3e "expressions which evaluate to nil are not considered true"'],
0)),g=W.b(x([I,"Truth examples",g],0)),h=N.a?N.a("format-name"):N.call(null,"format-name"),l=N.a?N.a(":first"):N.call(null,":first"),n=N.a?N.a(":last"):N.call(null,":last"),t=N.a?N.a(":middle"):N.call(null,":middle"),h=R.S?R.S("Write a function ",h," that takes a map ","representing a user, with keys ",l,", ",n,", and possibly ",t,". It should return their name as a string, like so:"):R.call(null,"Write a function ",h," that takes a map ","representing a user, with keys ",l,", ",n,", and possibly ",
t,". It should return their name as a string, like so:"),l=fk.b(x(['(format-name {:first "Margaret" :last "Atwood"})\n;;\x3d\x3e "Margaret Atwood"\n\n(format-name {:first "Ursula" :last "Le Guin" :middle "K."})\n;;\x3d\x3e "Ursula K. Le Guin"'],0)),h=W.b(x([I,"Exercise: more name formatting",h,l],0)),l=N.a?N.a("format-name"):N.call(null,"format-name"),n=N.a?N.a("order"):N.call(null,"order"),t=N.a?N.a("order"):N.call(null,"order"),u=N.a?N.a(":last"):N.call(null,":last"),l=R.S?R.S("Change ",l," to take a second argument, ",
n,". If ",t," equals ",u,', then the format should be "Last, First Middle"; otherwise, ','it should be "First Middle Last."'):R.call(null,"Change ",l," to take a second argument, ",n,". If ",t," equals ",u,', then the format should be "Last, First Middle"; otherwise, ','it should be "First Middle Last."'),l=W.b(x([I,"BONUS: Flexible name formatting",l],0)),b=X.b(x([I,"Flow control",b,c,d,e,g,h,l],0)),c=N.a?N.a("and"):N.call(null,"and"),d=N.a?N.a("or"):N.call(null,"or"),e=N.a?N.a("not"):N.call(null,
"not"),c=O.k?O.k(c,", ",d,", and ",e):O.call(null,c,", ",d,", and ",e),d=T.a?T.a("x"):T.call(null,"x"),e=T.a?T.a("y"):T.call(null,"y"),g=T.a?T.a("(and x y)"):T.call(null,"(and x y)"),h=T.a?T.a("(or x y)"):T.call(null,"(or x y)"),l=T.a?T.a("(not x)"):T.call(null,"(not x)"),n=T.a?T.a("(not y)"):T.call(null,"(not y)"),d=U.n?U.n(d,e,g,h,l,n):U.call(null,d,e,g,h,l,n),e=S.a?S.a("false"):S.call(null,"false"),g=S.a?S.a("false"):S.call(null,"false"),h=S.a?S.a("false"):S.call(null,"false"),l=S.a?S.a("false"):
S.call(null,"false"),n=S.a?S.a("true"):S.call(null,"true"),t=S.a?S.a("true"):S.call(null,"true"),e=U.n?U.n(e,g,h,l,n,t):U.call(null,e,g,h,l,n,t),g=S.a?S.a("true"):S.call(null,"true"),h=S.a?S.a("false"):S.call(null,"false"),l=S.a?S.a("false"):S.call(null,"false"),n=S.a?S.a("true"):S.call(null,"true"),t=S.a?S.a("false"):S.call(null,"false"),u=S.a?S.a("true"):S.call(null,"true"),g=U.n?U.n(g,h,l,n,t,u):U.call(null,g,h,l,n,t,u),h=S.a?S.a("true"):S.call(null,"true"),l=S.a?S.a("true"):S.call(null,"true"),
n=S.a?S.a("true"):S.call(null,"true"),t=S.a?S.a("true"):S.call(null,"true"),u=S.a?S.a("false"):S.call(null,"false"),y=S.a?S.a("false"):S.call(null,"false"),h=U.n?U.n(h,l,n,t,u,y):U.call(null,h,l,n,t,u,y),l=S.a?S.a("false"):S.call(null,"false"),n=S.a?S.a("true"):S.call(null,"true"),t=S.a?S.a("false"):S.call(null,"false"),u=S.a?S.a("true"):S.call(null,"true"),y=S.a?S.a("true"):S.call(null,"true"),F=S.a?S.a("false"):S.call(null,"false"),l=U.n?U.n(l,n,t,u,y,F):U.call(null,l,n,t,u,y,F),d=Fj.k?Fj.k(d,e,
g,h,l):Fj.call(null,d,e,g,h,l),c=W.b(x([I,c,d],0)),c=X.b(x([I,"Boolean logic",c],0)),d=N.a?N.a("let"):N.call(null,"let"),d=O.a?O.a(d):O.call(null,d),e=fk.b(x(['(defn spread\n  "Given a collection of numbers, return the difference between the largest and smallest number."\n  [numbers]\n  (let [largest (reduce max numbers)\n        smallest (reduce min numbers)]\n    (- largest smallest)))\n\n(spread [10 7 3 -3 8]) ;\x3d\x3e 13'],0)),d=W.b(x([I,d,e],0)),e=N.a?N.a("average"):N.call(null,"average"),g=
N.a?N.a("let"):N.call(null,"let"),e=R.n?R.n("Go back to the ",e," function you created before and ","use ",g," to make it easier to read."):R.call(null,"Go back to the ",e," function you created before and ","use ",g," to make it easier to read."),e=W.b(x([I,"Exercise: Rewrite average",e],0)),g=N.a?N.a('"th"'):N.call(null,'"th"'),g=R.d?R.d("Given a number (positive integer), return the string representing the ordinal number. For many numbers, this is done by adding ",g," to the end."):R.call(null,
"Given a number (positive integer), return the string representing the ordinal number. For many numbers, this is done by adding ",g," to the end."),h=N.a?N.a('"st"'):N.call(null,'"st"'),l=N.a?N.a('"2nd"'):N.call(null,'"2nd"'),n=N.a?N.a('"rd"'):N.call(null,'"rd"'),h=R.r?R.r("Part one: return the ordinal number string, but for numbers ending in 1, 2, or 3, add ",h,", ",l,", and ",n," respectively. Ex:"):R.call(null,"Part one: return the ordinal number string, but for numbers ending in 1, 2, or 3, add ",
h,", ",l,", and ",n," respectively. Ex:"),l=fk.b(x(['(ordinal 1)  ;\x3d\x3e "1st"\n(ordinal 2)  ;\x3d\x3e "2nd"\n(ordinal 3)  ;\x3d\x3e "3rd"\n(ordinal 4)  ;\x3d\x3e "4th"\n(ordinal 5)  ;\x3d\x3e "5th"\n(ordinal 21) ;\x3d\x3e "21st"\n(ordinal 22) ;\x3d\x3e "22nd"'],0)),n=N.a?N.a("rem"):N.call(null,"rem"),t=N.a?N.a("if"):N.call(null,"if"),n=R.k?R.k("You will need the ",n," function, which takes 2 integers and returns the remainder from dividing the first by the second.  You will also find that nesting ",
t," forms (putting one inside another) to be useful."):R.call(null,"You will need the ",n," function, which takes 2 integers and returns the remainder from dividing the first by the second.  You will also find that nesting ",t," forms (putting one inside another) to be useful."),g=W.b(x([I,"Bonus: Ordinal numbers",g,h,l,n],0)),h=N.a?N.a('"th"'):N.call(null,'"th"'),h=R.d?R.d("Part two: our exceptions for numbers ending in 1, 2, or 3 are superceded when the last 2 digits are 11, 12, or 13, in which case just add ",
h,". Ex:"):R.call(null,"Part two: our exceptions for numbers ending in 1, 2, or 3 are superceded when the last 2 digits are 11, 12, or 13, in which case just add ",h,". Ex:"),l=fk.b(x(['(ordinal 10) ;\x3d\x3e "10th"\n(ordinal 11) ;\x3d\x3e "11th"\n(ordinal 12) ;\x3d\x3e "12th"\n(ordinal 13) ;\x3d\x3e "13th"\n(ordinal 14) ;\x3d\x3e "14th"'],0)),n=N.a?N.a("cond"):N.call(null,"cond"),n=R.d?R.d("Part three: rewrite the nested if statements using the ",n," function."):R.call(null,"Part three: rewrite the nested if statements using the ",
n," function."),h=W.b(x([I,"Bonus: Ordinal numbers",h,l,n],0)),d=X.b(x([I,"Let",d,e,g,h],0));return Tj.b(x([wi,"mozilla-theme.css",a,b,c,d],0))}()):J.call(null,E,function(){var a=Sj.b(x([I,"Module 7"],0)),b=R.a?R.a("If the user's input is valid, then save their data; otherwise, show an error message."):R.call(null,"If the user's input is valid, then save their data; otherwise, show an error message."),c=fk.b(x(['(if (valid? data)\n  (save! data)\n  (error "Your data was invalid"))'],0)),b=W.b(x([I,
"Example: validating data",b,c],0)),c=N.a?N.a("if"):N.call(null,"if"),c=O.a?O.a(c):O.call(null,c),d=fk.b(x(["(if conditional-expression\n  expression-to-evaluate-when-true\n  expression-to-evaluate-when-false)"],0)),c=W.b(x([I,c,d],0)),d=N.a?N.a("if"):N.call(null,"if"),d=O.c?O.c(d," examples"):O.call(null,d," examples"),e=fk.b(x(['(if (\x3e 3 1)\n  "3 is greater than 1"\n  "3 is not greater than 1")\n;;\x3d\x3e "3 is greater than 1"\n\n(if (\x3e 1 3)\n  "1 is greater than 3"\n  "1 is not greater than 3")\n;;\x3d\x3e "1 is not greater than 3"'],
0)),d=W.b(x([I,d,e],0)),e=N.a?N.a("false"):N.call(null,"false"),g=N.a?N.a("nil"):N.call(null,"nil"),e=R.k?R.k("Everything except",e," or ",g,"."):R.call(null,"Everything except",e," or ",g,"."),e=W.b(x([I,"What is truth?",e],0)),g=fk.b(x(['(if "anything other than nil or false is considered true"\n  "A string is considered true"\n  "A string is not considered true")\n;;\x3d\x3e "A string is considered true"\n\n(if nil\n  "nil is considered true"\n  "nil is not considered true")\n;;\x3d\x3e "nil is not considered true"\n\n(if (get {:a 1} :b)\n  "expressions which evaluate to nil are considered true"\n  "expressions which evaluate to nil are not considered true")\n;;\x3d\x3e "expressions which evaluate to nil are not considered true"'],
0)),g=W.b(x([I,"Truth examples",g],0)),h=N.a?N.a("format-name"):N.call(null,"format-name"),l=N.a?N.a(":first"):N.call(null,":first"),n=N.a?N.a(":last"):N.call(null,":last"),t=N.a?N.a(":middle"):N.call(null,":middle"),h=R.S?R.S("Write a function ",h," that takes a map ","representing a user, with keys ",l,", ",n,", and possibly ",t,". It should return their name as a string, like so:"):R.call(null,"Write a function ",h," that takes a map ","representing a user, with keys ",l,", ",n,", and possibly ",
t,". It should return their name as a string, like so:"),l=fk.b(x(['(format-name {:first "Margaret" :last "Atwood"})\n;;\x3d\x3e "Margaret Atwood"\n\n(format-name {:first "Ursula" :last "Le Guin" :middle "K."})\n;;\x3d\x3e "Ursula K. Le Guin"'],0)),h=W.b(x([I,"Exercise: more name formatting",h,l],0)),l=N.a?N.a("format-name"):N.call(null,"format-name"),n=N.a?N.a("order"):N.call(null,"order"),t=N.a?N.a("order"):N.call(null,"order"),u=N.a?N.a(":last"):N.call(null,":last"),l=R.S?R.S("Change ",l," to take a second argument, ",
n,". If ",t," equals ",u,', then the format should be "Last, First Middle"; otherwise, ','it should be "First Middle Last."'):R.call(null,"Change ",l," to take a second argument, ",n,". If ",t," equals ",u,', then the format should be "Last, First Middle"; otherwise, ','it should be "First Middle Last."'),l=W.b(x([I,"BONUS: Flexible name formatting",l],0)),b=X.b(x([I,"Flow control",b,c,d,e,g,h,l],0)),c=N.a?N.a("and"):N.call(null,"and"),d=N.a?N.a("or"):N.call(null,"or"),e=N.a?N.a("not"):N.call(null,
"not"),c=O.k?O.k(c,", ",d,", and ",e):O.call(null,c,", ",d,", and ",e),d=T.a?T.a("x"):T.call(null,"x"),e=T.a?T.a("y"):T.call(null,"y"),g=T.a?T.a("(and x y)"):T.call(null,"(and x y)"),h=T.a?T.a("(or x y)"):T.call(null,"(or x y)"),l=T.a?T.a("(not x)"):T.call(null,"(not x)"),n=T.a?T.a("(not y)"):T.call(null,"(not y)"),d=U.n?U.n(d,e,g,h,l,n):U.call(null,d,e,g,h,l,n),e=S.a?S.a("false"):S.call(null,"false"),g=S.a?S.a("false"):S.call(null,"false"),h=S.a?S.a("false"):S.call(null,"false"),l=S.a?S.a("false"):
S.call(null,"false"),n=S.a?S.a("true"):S.call(null,"true"),t=S.a?S.a("true"):S.call(null,"true"),e=U.n?U.n(e,g,h,l,n,t):U.call(null,e,g,h,l,n,t),g=S.a?S.a("true"):S.call(null,"true"),h=S.a?S.a("false"):S.call(null,"false"),l=S.a?S.a("false"):S.call(null,"false"),n=S.a?S.a("true"):S.call(null,"true"),t=S.a?S.a("false"):S.call(null,"false"),u=S.a?S.a("true"):S.call(null,"true"),g=U.n?U.n(g,h,l,n,t,u):U.call(null,g,h,l,n,t,u),h=S.a?S.a("true"):S.call(null,"true"),l=S.a?S.a("true"):S.call(null,"true"),
n=S.a?S.a("true"):S.call(null,"true"),t=S.a?S.a("true"):S.call(null,"true"),u=S.a?S.a("false"):S.call(null,"false"),y=S.a?S.a("false"):S.call(null,"false"),h=U.n?U.n(h,l,n,t,u,y):U.call(null,h,l,n,t,u,y),l=S.a?S.a("false"):S.call(null,"false"),n=S.a?S.a("true"):S.call(null,"true"),t=S.a?S.a("false"):S.call(null,"false"),u=S.a?S.a("true"):S.call(null,"true"),y=S.a?S.a("true"):S.call(null,"true"),F=S.a?S.a("false"):S.call(null,"false"),l=U.n?U.n(l,n,t,u,y,F):U.call(null,l,n,t,u,y,F),d=Fj.k?Fj.k(d,e,
g,h,l):Fj.call(null,d,e,g,h,l),c=W.b(x([I,c,d],0)),c=X.b(x([I,"Boolean logic",c],0)),d=N.a?N.a("let"):N.call(null,"let"),d=O.a?O.a(d):O.call(null,d),e=fk.b(x(['(defn spread\n  "Given a collection of numbers, return the difference between the largest and smallest number."\n  [numbers]\n  (let [largest (reduce max numbers)\n        smallest (reduce min numbers)]\n    (- largest smallest)))\n\n(spread [10 7 3 -3 8]) ;\x3d\x3e 13'],0)),d=W.b(x([I,d,e],0)),e=N.a?N.a("average"):N.call(null,"average"),g=
N.a?N.a("let"):N.call(null,"let"),e=R.n?R.n("Go back to the ",e," function you created before and ","use ",g," to make it easier to read."):R.call(null,"Go back to the ",e," function you created before and ","use ",g," to make it easier to read."),e=W.b(x([I,"Exercise: Rewrite average",e],0)),g=N.a?N.a('"th"'):N.call(null,'"th"'),g=R.d?R.d("Given a number (positive integer), return the string representing the ordinal number. For many numbers, this is done by adding ",g," to the end."):R.call(null,
"Given a number (positive integer), return the string representing the ordinal number. For many numbers, this is done by adding ",g," to the end."),h=N.a?N.a('"st"'):N.call(null,'"st"'),l=N.a?N.a('"2nd"'):N.call(null,'"2nd"'),n=N.a?N.a('"rd"'):N.call(null,'"rd"'),h=R.r?R.r("Part one: return the ordinal number string, but for numbers ending in 1, 2, or 3, add ",h,", ",l,", and ",n," respectively. Ex:"):R.call(null,"Part one: return the ordinal number string, but for numbers ending in 1, 2, or 3, add ",
h,", ",l,", and ",n," respectively. Ex:"),l=fk.b(x(['(ordinal 1)  ;\x3d\x3e "1st"\n(ordinal 2)  ;\x3d\x3e "2nd"\n(ordinal 3)  ;\x3d\x3e "3rd"\n(ordinal 4)  ;\x3d\x3e "4th"\n(ordinal 5)  ;\x3d\x3e "5th"\n(ordinal 21) ;\x3d\x3e "21st"\n(ordinal 22) ;\x3d\x3e "22nd"'],0)),n=N.a?N.a("rem"):N.call(null,"rem"),t=N.a?N.a("if"):N.call(null,"if"),n=R.k?R.k("You will need the ",n," function, which takes 2 integers and returns the remainder from dividing the first by the second.  You will also find that nesting ",
t," forms (putting one inside another) to be useful."):R.call(null,"You will need the ",n," function, which takes 2 integers and returns the remainder from dividing the first by the second.  You will also find that nesting ",t," forms (putting one inside another) to be useful."),g=W.b(x([I,"Bonus: Ordinal numbers",g,h,l,n],0)),h=N.a?N.a('"th"'):N.call(null,'"th"'),h=R.d?R.d("Part two: our exceptions for numbers ending in 1, 2, or 3 are superceded when the last 2 digits are 11, 12, or 13, in which case just add ",
h,". Ex:"):R.call(null,"Part two: our exceptions for numbers ending in 1, 2, or 3 are superceded when the last 2 digits are 11, 12, or 13, in which case just add ",h,". Ex:"),l=fk.b(x(['(ordinal 10) ;\x3d\x3e "10th"\n(ordinal 11) ;\x3d\x3e "11th"\n(ordinal 12) ;\x3d\x3e "12th"\n(ordinal 13) ;\x3d\x3e "13th"\n(ordinal 14) ;\x3d\x3e "14th"'],0)),n=N.a?N.a("cond"):N.call(null,"cond"),n=R.d?R.d("Part three: rewrite the nested if statements using the ",n," function."):R.call(null,"Part three: rewrite the nested if statements using the ",
n," function."),h=W.b(x([I,"Bonus: Ordinal numbers",h,l,n],0)),d=X.b(x([I,"Let",d,e,g,h],0));return Tj.b(x([wi,"mozilla-theme.css",a,b,c,d],0))}())):uj.call(null,K.c?K.c(E,D):K.call(null,E,D),J.c?J.c(E,function(){var a=Sj.b(x([I,"Module 7"],0)),b=R.a?R.a("If the user's input is valid, then save their data; otherwise, show an error message."):R.call(null,"If the user's input is valid, then save their data; otherwise, show an error message."),c=fk.b(x(['(if (valid? data)\n  (save! data)\n  (error "Your data was invalid"))'],
0)),b=W.b(x([I,"Example: validating data",b,c],0)),c=N.a?N.a("if"):N.call(null,"if"),c=O.a?O.a(c):O.call(null,c),d=fk.b(x(["(if conditional-expression\n  expression-to-evaluate-when-true\n  expression-to-evaluate-when-false)"],0)),c=W.b(x([I,c,d],0)),d=N.a?N.a("if"):N.call(null,"if"),d=O.c?O.c(d," examples"):O.call(null,d," examples"),e=fk.b(x(['(if (\x3e 3 1)\n  "3 is greater than 1"\n  "3 is not greater than 1")\n;;\x3d\x3e "3 is greater than 1"\n\n(if (\x3e 1 3)\n  "1 is greater than 3"\n  "1 is not greater than 3")\n;;\x3d\x3e "1 is not greater than 3"'],
0)),d=W.b(x([I,d,e],0)),e=N.a?N.a("false"):N.call(null,"false"),g=N.a?N.a("nil"):N.call(null,"nil"),e=R.k?R.k("Everything except",e," or ",g,"."):R.call(null,"Everything except",e," or ",g,"."),e=W.b(x([I,"What is truth?",e],0)),g=fk.b(x(['(if "anything other than nil or false is considered true"\n  "A string is considered true"\n  "A string is not considered true")\n;;\x3d\x3e "A string is considered true"\n\n(if nil\n  "nil is considered true"\n  "nil is not considered true")\n;;\x3d\x3e "nil is not considered true"\n\n(if (get {:a 1} :b)\n  "expressions which evaluate to nil are considered true"\n  "expressions which evaluate to nil are not considered true")\n;;\x3d\x3e "expressions which evaluate to nil are not considered true"'],
0)),g=W.b(x([I,"Truth examples",g],0)),h=N.a?N.a("format-name"):N.call(null,"format-name"),l=N.a?N.a(":first"):N.call(null,":first"),n=N.a?N.a(":last"):N.call(null,":last"),t=N.a?N.a(":middle"):N.call(null,":middle"),h=R.S?R.S("Write a function ",h," that takes a map ","representing a user, with keys ",l,", ",n,", and possibly ",t,". It should return their name as a string, like so:"):R.call(null,"Write a function ",h," that takes a map ","representing a user, with keys ",l,", ",n,", and possibly ",
t,". It should return their name as a string, like so:"),l=fk.b(x(['(format-name {:first "Margaret" :last "Atwood"})\n;;\x3d\x3e "Margaret Atwood"\n\n(format-name {:first "Ursula" :last "Le Guin" :middle "K."})\n;;\x3d\x3e "Ursula K. Le Guin"'],0)),h=W.b(x([I,"Exercise: more name formatting",h,l],0)),l=N.a?N.a("format-name"):N.call(null,"format-name"),n=N.a?N.a("order"):N.call(null,"order"),t=N.a?N.a("order"):N.call(null,"order"),u=N.a?N.a(":last"):N.call(null,":last"),l=R.S?R.S("Change ",l," to take a second argument, ",
n,". If ",t," equals ",u,', then the format should be "Last, First Middle"; otherwise, ','it should be "First Middle Last."'):R.call(null,"Change ",l," to take a second argument, ",n,". If ",t," equals ",u,', then the format should be "Last, First Middle"; otherwise, ','it should be "First Middle Last."'),l=W.b(x([I,"BONUS: Flexible name formatting",l],0)),b=X.b(x([I,"Flow control",b,c,d,e,g,h,l],0)),c=N.a?N.a("and"):N.call(null,"and"),d=N.a?N.a("or"):N.call(null,"or"),e=N.a?N.a("not"):N.call(null,
"not"),c=O.k?O.k(c,", ",d,", and ",e):O.call(null,c,", ",d,", and ",e),d=T.a?T.a("x"):T.call(null,"x"),e=T.a?T.a("y"):T.call(null,"y"),g=T.a?T.a("(and x y)"):T.call(null,"(and x y)"),h=T.a?T.a("(or x y)"):T.call(null,"(or x y)"),l=T.a?T.a("(not x)"):T.call(null,"(not x)"),n=T.a?T.a("(not y)"):T.call(null,"(not y)"),d=U.n?U.n(d,e,g,h,l,n):U.call(null,d,e,g,h,l,n),e=S.a?S.a("false"):S.call(null,"false"),g=S.a?S.a("false"):S.call(null,"false"),h=S.a?S.a("false"):S.call(null,"false"),l=S.a?S.a("false"):
S.call(null,"false"),n=S.a?S.a("true"):S.call(null,"true"),t=S.a?S.a("true"):S.call(null,"true"),e=U.n?U.n(e,g,h,l,n,t):U.call(null,e,g,h,l,n,t),g=S.a?S.a("true"):S.call(null,"true"),h=S.a?S.a("false"):S.call(null,"false"),l=S.a?S.a("false"):S.call(null,"false"),n=S.a?S.a("true"):S.call(null,"true"),t=S.a?S.a("false"):S.call(null,"false"),u=S.a?S.a("true"):S.call(null,"true"),g=U.n?U.n(g,h,l,n,t,u):U.call(null,g,h,l,n,t,u),h=S.a?S.a("true"):S.call(null,"true"),l=S.a?S.a("true"):S.call(null,"true"),
n=S.a?S.a("true"):S.call(null,"true"),t=S.a?S.a("true"):S.call(null,"true"),u=S.a?S.a("false"):S.call(null,"false"),y=S.a?S.a("false"):S.call(null,"false"),h=U.n?U.n(h,l,n,t,u,y):U.call(null,h,l,n,t,u,y),l=S.a?S.a("false"):S.call(null,"false"),n=S.a?S.a("true"):S.call(null,"true"),t=S.a?S.a("false"):S.call(null,"false"),u=S.a?S.a("true"):S.call(null,"true"),y=S.a?S.a("true"):S.call(null,"true"),F=S.a?S.a("false"):S.call(null,"false"),l=U.n?U.n(l,n,t,u,y,F):U.call(null,l,n,t,u,y,F),d=Fj.k?Fj.k(d,e,
g,h,l):Fj.call(null,d,e,g,h,l),c=W.b(x([I,c,d],0)),c=X.b(x([I,"Boolean logic",c],0)),d=N.a?N.a("let"):N.call(null,"let"),d=O.a?O.a(d):O.call(null,d),e=fk.b(x(['(defn spread\n  "Given a collection of numbers, return the difference between the largest and smallest number."\n  [numbers]\n  (let [largest (reduce max numbers)\n        smallest (reduce min numbers)]\n    (- largest smallest)))\n\n(spread [10 7 3 -3 8]) ;\x3d\x3e 13'],0)),d=W.b(x([I,d,e],0)),e=N.a?N.a("average"):N.call(null,"average"),g=
N.a?N.a("let"):N.call(null,"let"),e=R.n?R.n("Go back to the ",e," function you created before and ","use ",g," to make it easier to read."):R.call(null,"Go back to the ",e," function you created before and ","use ",g," to make it easier to read."),e=W.b(x([I,"Exercise: Rewrite average",e],0)),g=N.a?N.a('"th"'):N.call(null,'"th"'),g=R.d?R.d("Given a number (positive integer), return the string representing the ordinal number. For many numbers, this is done by adding ",g," to the end."):R.call(null,
"Given a number (positive integer), return the string representing the ordinal number. For many numbers, this is done by adding ",g," to the end."),h=N.a?N.a('"st"'):N.call(null,'"st"'),l=N.a?N.a('"2nd"'):N.call(null,'"2nd"'),n=N.a?N.a('"rd"'):N.call(null,'"rd"'),h=R.r?R.r("Part one: return the ordinal number string, but for numbers ending in 1, 2, or 3, add ",h,", ",l,", and ",n," respectively. Ex:"):R.call(null,"Part one: return the ordinal number string, but for numbers ending in 1, 2, or 3, add ",
h,", ",l,", and ",n," respectively. Ex:"),l=fk.b(x(['(ordinal 1)  ;\x3d\x3e "1st"\n(ordinal 2)  ;\x3d\x3e "2nd"\n(ordinal 3)  ;\x3d\x3e "3rd"\n(ordinal 4)  ;\x3d\x3e "4th"\n(ordinal 5)  ;\x3d\x3e "5th"\n(ordinal 21) ;\x3d\x3e "21st"\n(ordinal 22) ;\x3d\x3e "22nd"'],0)),n=N.a?N.a("rem"):N.call(null,"rem"),t=N.a?N.a("if"):N.call(null,"if"),n=R.k?R.k("You will need the ",n," function, which takes 2 integers and returns the remainder from dividing the first by the second.  You will also find that nesting ",
t," forms (putting one inside another) to be useful."):R.call(null,"You will need the ",n," function, which takes 2 integers and returns the remainder from dividing the first by the second.  You will also find that nesting ",t," forms (putting one inside another) to be useful."),g=W.b(x([I,"Bonus: Ordinal numbers",g,h,l,n],0)),h=N.a?N.a('"th"'):N.call(null,'"th"'),h=R.d?R.d("Part two: our exceptions for numbers ending in 1, 2, or 3 are superceded when the last 2 digits are 11, 12, or 13, in which case just add ",
h,". Ex:"):R.call(null,"Part two: our exceptions for numbers ending in 1, 2, or 3 are superceded when the last 2 digits are 11, 12, or 13, in which case just add ",h,". Ex:"),l=fk.b(x(['(ordinal 10) ;\x3d\x3e "10th"\n(ordinal 11) ;\x3d\x3e "11th"\n(ordinal 12) ;\x3d\x3e "12th"\n(ordinal 13) ;\x3d\x3e "13th"\n(ordinal 14) ;\x3d\x3e "14th"'],0)),n=N.a?N.a("cond"):N.call(null,"cond"),n=R.d?R.d("Part three: rewrite the nested if statements using the ",n," function."):R.call(null,"Part three: rewrite the nested if statements using the ",
n," function."),h=W.b(x([I,"Bonus: Ordinal numbers",h,l,n],0)),d=X.b(x([I,"Let",d,e,g,h],0));return Tj.b(x([wi,"mozilla-theme.css",a,b,c,d],0))}()):J.call(null,E,function(){var a=Sj.b(x([I,"Module 7"],0)),b=R.a?R.a("If the user's input is valid, then save their data; otherwise, show an error message."):R.call(null,"If the user's input is valid, then save their data; otherwise, show an error message."),c=fk.b(x(['(if (valid? data)\n  (save! data)\n  (error "Your data was invalid"))'],0)),b=W.b(x([I,
"Example: validating data",b,c],0)),c=N.a?N.a("if"):N.call(null,"if"),c=O.a?O.a(c):O.call(null,c),d=fk.b(x(["(if conditional-expression\n  expression-to-evaluate-when-true\n  expression-to-evaluate-when-false)"],0)),c=W.b(x([I,c,d],0)),d=N.a?N.a("if"):N.call(null,"if"),d=O.c?O.c(d," examples"):O.call(null,d," examples"),e=fk.b(x(['(if (\x3e 3 1)\n  "3 is greater than 1"\n  "3 is not greater than 1")\n;;\x3d\x3e "3 is greater than 1"\n\n(if (\x3e 1 3)\n  "1 is greater than 3"\n  "1 is not greater than 3")\n;;\x3d\x3e "1 is not greater than 3"'],
0)),d=W.b(x([I,d,e],0)),e=N.a?N.a("false"):N.call(null,"false"),g=N.a?N.a("nil"):N.call(null,"nil"),e=R.k?R.k("Everything except",e," or ",g,"."):R.call(null,"Everything except",e," or ",g,"."),e=W.b(x([I,"What is truth?",e],0)),g=fk.b(x(['(if "anything other than nil or false is considered true"\n  "A string is considered true"\n  "A string is not considered true")\n;;\x3d\x3e "A string is considered true"\n\n(if nil\n  "nil is considered true"\n  "nil is not considered true")\n;;\x3d\x3e "nil is not considered true"\n\n(if (get {:a 1} :b)\n  "expressions which evaluate to nil are considered true"\n  "expressions which evaluate to nil are not considered true")\n;;\x3d\x3e "expressions which evaluate to nil are not considered true"'],
0)),g=W.b(x([I,"Truth examples",g],0)),h=N.a?N.a("format-name"):N.call(null,"format-name"),l=N.a?N.a(":first"):N.call(null,":first"),n=N.a?N.a(":last"):N.call(null,":last"),t=N.a?N.a(":middle"):N.call(null,":middle"),h=R.S?R.S("Write a function ",h," that takes a map ","representing a user, with keys ",l,", ",n,", and possibly ",t,". It should return their name as a string, like so:"):R.call(null,"Write a function ",h," that takes a map ","representing a user, with keys ",l,", ",n,", and possibly ",
t,". It should return their name as a string, like so:"),l=fk.b(x(['(format-name {:first "Margaret" :last "Atwood"})\n;;\x3d\x3e "Margaret Atwood"\n\n(format-name {:first "Ursula" :last "Le Guin" :middle "K."})\n;;\x3d\x3e "Ursula K. Le Guin"'],0)),h=W.b(x([I,"Exercise: more name formatting",h,l],0)),l=N.a?N.a("format-name"):N.call(null,"format-name"),n=N.a?N.a("order"):N.call(null,"order"),t=N.a?N.a("order"):N.call(null,"order"),u=N.a?N.a(":last"):N.call(null,":last"),l=R.S?R.S("Change ",l," to take a second argument, ",
n,". If ",t," equals ",u,', then the format should be "Last, First Middle"; otherwise, ','it should be "First Middle Last."'):R.call(null,"Change ",l," to take a second argument, ",n,". If ",t," equals ",u,', then the format should be "Last, First Middle"; otherwise, ','it should be "First Middle Last."'),l=W.b(x([I,"BONUS: Flexible name formatting",l],0)),b=X.b(x([I,"Flow control",b,c,d,e,g,h,l],0)),c=N.a?N.a("and"):N.call(null,"and"),d=N.a?N.a("or"):N.call(null,"or"),e=N.a?N.a("not"):N.call(null,
"not"),c=O.k?O.k(c,", ",d,", and ",e):O.call(null,c,", ",d,", and ",e),d=T.a?T.a("x"):T.call(null,"x"),e=T.a?T.a("y"):T.call(null,"y"),g=T.a?T.a("(and x y)"):T.call(null,"(and x y)"),h=T.a?T.a("(or x y)"):T.call(null,"(or x y)"),l=T.a?T.a("(not x)"):T.call(null,"(not x)"),n=T.a?T.a("(not y)"):T.call(null,"(not y)"),d=U.n?U.n(d,e,g,h,l,n):U.call(null,d,e,g,h,l,n),e=S.a?S.a("false"):S.call(null,"false"),g=S.a?S.a("false"):S.call(null,"false"),h=S.a?S.a("false"):S.call(null,"false"),l=S.a?S.a("false"):
S.call(null,"false"),n=S.a?S.a("true"):S.call(null,"true"),t=S.a?S.a("true"):S.call(null,"true"),e=U.n?U.n(e,g,h,l,n,t):U.call(null,e,g,h,l,n,t),g=S.a?S.a("true"):S.call(null,"true"),h=S.a?S.a("false"):S.call(null,"false"),l=S.a?S.a("false"):S.call(null,"false"),n=S.a?S.a("true"):S.call(null,"true"),t=S.a?S.a("false"):S.call(null,"false"),u=S.a?S.a("true"):S.call(null,"true"),g=U.n?U.n(g,h,l,n,t,u):U.call(null,g,h,l,n,t,u),h=S.a?S.a("true"):S.call(null,"true"),l=S.a?S.a("true"):S.call(null,"true"),
n=S.a?S.a("true"):S.call(null,"true"),t=S.a?S.a("true"):S.call(null,"true"),u=S.a?S.a("false"):S.call(null,"false"),y=S.a?S.a("false"):S.call(null,"false"),h=U.n?U.n(h,l,n,t,u,y):U.call(null,h,l,n,t,u,y),l=S.a?S.a("false"):S.call(null,"false"),n=S.a?S.a("true"):S.call(null,"true"),t=S.a?S.a("false"):S.call(null,"false"),u=S.a?S.a("true"):S.call(null,"true"),y=S.a?S.a("true"):S.call(null,"true"),F=S.a?S.a("false"):S.call(null,"false"),l=U.n?U.n(l,n,t,u,y,F):U.call(null,l,n,t,u,y,F),d=Fj.k?Fj.k(d,e,
g,h,l):Fj.call(null,d,e,g,h,l),c=W.b(x([I,c,d],0)),c=X.b(x([I,"Boolean logic",c],0)),d=N.a?N.a("let"):N.call(null,"let"),d=O.a?O.a(d):O.call(null,d),e=fk.b(x(['(defn spread\n  "Given a collection of numbers, return the difference between the largest and smallest number."\n  [numbers]\n  (let [largest (reduce max numbers)\n        smallest (reduce min numbers)]\n    (- largest smallest)))\n\n(spread [10 7 3 -3 8]) ;\x3d\x3e 13'],0)),d=W.b(x([I,d,e],0)),e=N.a?N.a("average"):N.call(null,"average"),g=
N.a?N.a("let"):N.call(null,"let"),e=R.n?R.n("Go back to the ",e," function you created before and ","use ",g," to make it easier to read."):R.call(null,"Go back to the ",e," function you created before and ","use ",g," to make it easier to read."),e=W.b(x([I,"Exercise: Rewrite average",e],0)),g=N.a?N.a('"th"'):N.call(null,'"th"'),g=R.d?R.d("Given a number (positive integer), return the string representing the ordinal number. For many numbers, this is done by adding ",g," to the end."):R.call(null,
"Given a number (positive integer), return the string representing the ordinal number. For many numbers, this is done by adding ",g," to the end."),h=N.a?N.a('"st"'):N.call(null,'"st"'),l=N.a?N.a('"2nd"'):N.call(null,'"2nd"'),n=N.a?N.a('"rd"'):N.call(null,'"rd"'),h=R.r?R.r("Part one: return the ordinal number string, but for numbers ending in 1, 2, or 3, add ",h,", ",l,", and ",n," respectively. Ex:"):R.call(null,"Part one: return the ordinal number string, but for numbers ending in 1, 2, or 3, add ",
h,", ",l,", and ",n," respectively. Ex:"),l=fk.b(x(['(ordinal 1)  ;\x3d\x3e "1st"\n(ordinal 2)  ;\x3d\x3e "2nd"\n(ordinal 3)  ;\x3d\x3e "3rd"\n(ordinal 4)  ;\x3d\x3e "4th"\n(ordinal 5)  ;\x3d\x3e "5th"\n(ordinal 21) ;\x3d\x3e "21st"\n(ordinal 22) ;\x3d\x3e "22nd"'],0)),n=N.a?N.a("rem"):N.call(null,"rem"),t=N.a?N.a("if"):N.call(null,"if"),n=R.k?R.k("You will need the ",n," function, which takes 2 integers and returns the remainder from dividing the first by the second.  You will also find that nesting ",
t," forms (putting one inside another) to be useful."):R.call(null,"You will need the ",n," function, which takes 2 integers and returns the remainder from dividing the first by the second.  You will also find that nesting ",t," forms (putting one inside another) to be useful."),g=W.b(x([I,"Bonus: Ordinal numbers",g,h,l,n],0)),h=N.a?N.a('"th"'):N.call(null,'"th"'),h=R.d?R.d("Part two: our exceptions for numbers ending in 1, 2, or 3 are superceded when the last 2 digits are 11, 12, or 13, in which case just add ",
h,". Ex:"):R.call(null,"Part two: our exceptions for numbers ending in 1, 2, or 3 are superceded when the last 2 digits are 11, 12, or 13, in which case just add ",h,". Ex:"),l=fk.b(x(['(ordinal 10) ;\x3d\x3e "10th"\n(ordinal 11) ;\x3d\x3e "11th"\n(ordinal 12) ;\x3d\x3e "12th"\n(ordinal 13) ;\x3d\x3e "13th"\n(ordinal 14) ;\x3d\x3e "14th"'],0)),n=N.a?N.a("cond"):N.call(null,"cond"),n=R.d?R.d("Part three: rewrite the nested if statements using the ",n," function."):R.call(null,"Part three: rewrite the nested if statements using the ",
n," function."),h=W.b(x([I,"Bonus: Ordinal numbers",h,l,n],0)),d=X.b(x([I,"Let",d,e,g,h],0));return Tj.b(x([wi,"mozilla-theme.css",a,b,c,d],0))}()));return Jj()});var gk;
ea("tailrecursion.hoplon.app_pages._module6_DOT_html.hoploninit",function(){mc.c(window.location.search,"?dev")&&(mh.b(x(["Autoreloading"],0)),ck());gk=function(){function a(a){var d=null;0<arguments.length&&(d=x(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){var b=lj(a);a=B.d(b,0,null);b=B.d(b,1,null);return Z.b(x([Lc.d(a,H,"clojure"),b],0))}a.j=0;a.g=function(a){a=r(a);return b(a)};a.b=b;return a}();uj.c?uj.c(K.c?K.c(E,D):K.call(null,E,D),J.c?J.c(E,function(){var a=Sj.b(x([I,
"Module 6"],0)),b=P.e?P.e(hi,"img/map.png",Yh,"map"):P.call(null,hi,"img/map.png",Yh,"map"),b=W.b(x([I,"Maps",b],0)),c=gk.b(x(['{:first "Sally", :last "Brown", :occupation "programmer"}\n{:a 1, :b "two"}\n{}'],0)),c=W.b(x([I,"Maps",c],0)),d=gk.b(x(['(map? {:first "Sally" :last "Brown"})\n;;\x3d\x3e true\n\n(get {:first "Sally" :last "Brown"} :first)\n;;\x3d\x3e "Sally"\n\n(get {:first "Sally"} :last :MISS)\n;;\x3d\x3e :MISS'],0)),d=W.b(x([I,"Map functions",d],0)),e=gk.b(x(['(assoc {:first "Sally"} :last "Brown")\n;;\x3d\x3e {:first "Sally", :last "Brown"}\n\n(dissoc {:first "Sally" :last "Brown"} :last)\n;;\x3d\x3e {:first "Sally"}\n\n(merge {:first "Sally"} {:last "Brown"})\n;;\x3d\x3e {:first "Sally", :last "Brown"}\n\n(count {:first "Sally" :last "Brown"})\n;;\x3d\x3e 2'],
0)),e=W.b(x([I,"More map functions",e],0)),g=gk.b(x(['(keys {:first "Sally" :last "Brown"})\n;;\x3d\x3e (:first :last)\n\n(vals {:first "Sally" :last "Brown"})\n;;\x3d\x3e ("Sally" "Brown")\n\n(into {} [[1 2] [3 4]])\n;;\x3d\x3e {1 2, 3 4}'],0)),g=W.b(x([I,"Even more map functions",g],0)),h=gk.b(x(['(:first {:first "Sally" :last "Brown"})\n;;\x3d\x3e "Sally"\n\n(:last {:first "Sally"})\n;;\x3d\x3e nil\n\n(:last {:first "Sally"} :MISS)\n;;\x3d\x3e :MISS'],0)),h=W.b(x([I,"Maps and keywords",h],0)),
l=N.a?N.a("assoc"):N.call(null,"assoc"),n=N.a?N.a("merge"):N.call(null,"merge"),l=R.n?R.n("Make a map representing yourself. Make sure it contains your first"," name and last name. Then, add your hometown to the map using ",l," or ",n,"."):R.call(null,"Make a map representing yourself. Make sure it contains your first"," name and last name. Then, add your hometown to the map using ",l," or ",n,"."),l=W.b(x([I,"Exercise: Modeling yourself",l],0)),n=gk.b(x(['[{:name "Mercury"}\n {:name "Venus"}\n {:name "Earth" :moons ["The Moon"]}\n {:name "Mars" :moons ["Phobos" "Deimos"]}\n {:name "Jupiter"\n  :moons ["Ganymede" "Callisto" "Io" "Europa"]}]'],
0)),n=W.b(x([I,"Collections of collections",n],0)),t=N.a?N.a("get-names"):N.call(null,"get-names"),t=Uj.b(x(["Create a function called ",t," that takes a ","vector of maps of people and returns a vector of their names."],0)),u=gk.b(x(['(get-names [{:first "Margaret" :last "Atwood"}\n            {:first "Doris" :last "Lessing"}\n            {:first "Ursula" :last "Le Guin"}\n            {:first "Alice" :last "Munro"}])\n\n;;\x3d\x3e ["Margaret Atwood" "Doris Lessing"\n;;    "Ursula Le Guin" "Alice Munro"]'],
0)),t=W.b(x([I,"Exercise: Get the names of people",t,u],0)),u=Q.a?Q.a("Take the map from the last exercise -- the one about you."):Q.call(null,"Take the map from the last exercise -- the one about you."),y=Q.c?Q.c("Find two or three classmates. Ask their name and hometown. "," Make a vector of maps with their information."):Q.call(null,"Find two or three classmates. Ask their name and hometown. "," Make a vector of maps with their information."),F=N.a?N.a("conj"):N.call(null,"conj"),F=Q.d?Q.d("Then, add your information to their information using ",
F,"."):Q.call(null,"Then, add your information to their information using ",F,"."),u=Aj.d?Aj.d(u,y,F):Aj.call(null,u,y,F),u=W.b(x([I,"Exercise: Modeling your classmates",u],0)),b=X.b(x([I,"More Data Structures",b,c,d,e,g,h,l,n,t,u],0));return Tj.b(x([wi,"mozilla-theme.css",a,b],0))}()):J.call(null,E,function(){var a=Sj.b(x([I,"Module 6"],0)),b=P.e?P.e(hi,"img/map.png",Yh,"map"):P.call(null,hi,"img/map.png",Yh,"map"),b=W.b(x([I,"Maps",b],0)),c=gk.b(x(['{:first "Sally", :last "Brown", :occupation "programmer"}\n{:a 1, :b "two"}\n{}'],
0)),c=W.b(x([I,"Maps",c],0)),d=gk.b(x(['(map? {:first "Sally" :last "Brown"})\n;;\x3d\x3e true\n\n(get {:first "Sally" :last "Brown"} :first)\n;;\x3d\x3e "Sally"\n\n(get {:first "Sally"} :last :MISS)\n;;\x3d\x3e :MISS'],0)),d=W.b(x([I,"Map functions",d],0)),e=gk.b(x(['(assoc {:first "Sally"} :last "Brown")\n;;\x3d\x3e {:first "Sally", :last "Brown"}\n\n(dissoc {:first "Sally" :last "Brown"} :last)\n;;\x3d\x3e {:first "Sally"}\n\n(merge {:first "Sally"} {:last "Brown"})\n;;\x3d\x3e {:first "Sally", :last "Brown"}\n\n(count {:first "Sally" :last "Brown"})\n;;\x3d\x3e 2'],
0)),e=W.b(x([I,"More map functions",e],0)),g=gk.b(x(['(keys {:first "Sally" :last "Brown"})\n;;\x3d\x3e (:first :last)\n\n(vals {:first "Sally" :last "Brown"})\n;;\x3d\x3e ("Sally" "Brown")\n\n(into {} [[1 2] [3 4]])\n;;\x3d\x3e {1 2, 3 4}'],0)),g=W.b(x([I,"Even more map functions",g],0)),h=gk.b(x(['(:first {:first "Sally" :last "Brown"})\n;;\x3d\x3e "Sally"\n\n(:last {:first "Sally"})\n;;\x3d\x3e nil\n\n(:last {:first "Sally"} :MISS)\n;;\x3d\x3e :MISS'],0)),h=W.b(x([I,"Maps and keywords",h],0)),
l=N.a?N.a("assoc"):N.call(null,"assoc"),n=N.a?N.a("merge"):N.call(null,"merge"),l=R.n?R.n("Make a map representing yourself. Make sure it contains your first"," name and last name. Then, add your hometown to the map using ",l," or ",n,"."):R.call(null,"Make a map representing yourself. Make sure it contains your first"," name and last name. Then, add your hometown to the map using ",l," or ",n,"."),l=W.b(x([I,"Exercise: Modeling yourself",l],0)),n=gk.b(x(['[{:name "Mercury"}\n {:name "Venus"}\n {:name "Earth" :moons ["The Moon"]}\n {:name "Mars" :moons ["Phobos" "Deimos"]}\n {:name "Jupiter"\n  :moons ["Ganymede" "Callisto" "Io" "Europa"]}]'],
0)),n=W.b(x([I,"Collections of collections",n],0)),t=N.a?N.a("get-names"):N.call(null,"get-names"),t=Uj.b(x(["Create a function called ",t," that takes a ","vector of maps of people and returns a vector of their names."],0)),u=gk.b(x(['(get-names [{:first "Margaret" :last "Atwood"}\n            {:first "Doris" :last "Lessing"}\n            {:first "Ursula" :last "Le Guin"}\n            {:first "Alice" :last "Munro"}])\n\n;;\x3d\x3e ["Margaret Atwood" "Doris Lessing"\n;;    "Ursula Le Guin" "Alice Munro"]'],
0)),t=W.b(x([I,"Exercise: Get the names of people",t,u],0)),u=Q.a?Q.a("Take the map from the last exercise -- the one about you."):Q.call(null,"Take the map from the last exercise -- the one about you."),y=Q.c?Q.c("Find two or three classmates. Ask their name and hometown. "," Make a vector of maps with their information."):Q.call(null,"Find two or three classmates. Ask their name and hometown. "," Make a vector of maps with their information."),F=N.a?N.a("conj"):N.call(null,"conj"),F=Q.d?Q.d("Then, add your information to their information using ",
F,"."):Q.call(null,"Then, add your information to their information using ",F,"."),u=Aj.d?Aj.d(u,y,F):Aj.call(null,u,y,F),u=W.b(x([I,"Exercise: Modeling your classmates",u],0)),b=X.b(x([I,"More Data Structures",b,c,d,e,g,h,l,n,t,u],0));return Tj.b(x([wi,"mozilla-theme.css",a,b],0))}())):uj.call(null,K.c?K.c(E,D):K.call(null,E,D),J.c?J.c(E,function(){var a=Sj.b(x([I,"Module 6"],0)),b=P.e?P.e(hi,"img/map.png",Yh,"map"):P.call(null,hi,"img/map.png",Yh,"map"),b=W.b(x([I,"Maps",b],0)),c=gk.b(x(['{:first "Sally", :last "Brown", :occupation "programmer"}\n{:a 1, :b "two"}\n{}'],
0)),c=W.b(x([I,"Maps",c],0)),d=gk.b(x(['(map? {:first "Sally" :last "Brown"})\n;;\x3d\x3e true\n\n(get {:first "Sally" :last "Brown"} :first)\n;;\x3d\x3e "Sally"\n\n(get {:first "Sally"} :last :MISS)\n;;\x3d\x3e :MISS'],0)),d=W.b(x([I,"Map functions",d],0)),e=gk.b(x(['(assoc {:first "Sally"} :last "Brown")\n;;\x3d\x3e {:first "Sally", :last "Brown"}\n\n(dissoc {:first "Sally" :last "Brown"} :last)\n;;\x3d\x3e {:first "Sally"}\n\n(merge {:first "Sally"} {:last "Brown"})\n;;\x3d\x3e {:first "Sally", :last "Brown"}\n\n(count {:first "Sally" :last "Brown"})\n;;\x3d\x3e 2'],
0)),e=W.b(x([I,"More map functions",e],0)),g=gk.b(x(['(keys {:first "Sally" :last "Brown"})\n;;\x3d\x3e (:first :last)\n\n(vals {:first "Sally" :last "Brown"})\n;;\x3d\x3e ("Sally" "Brown")\n\n(into {} [[1 2] [3 4]])\n;;\x3d\x3e {1 2, 3 4}'],0)),g=W.b(x([I,"Even more map functions",g],0)),h=gk.b(x(['(:first {:first "Sally" :last "Brown"})\n;;\x3d\x3e "Sally"\n\n(:last {:first "Sally"})\n;;\x3d\x3e nil\n\n(:last {:first "Sally"} :MISS)\n;;\x3d\x3e :MISS'],0)),h=W.b(x([I,"Maps and keywords",h],0)),
l=N.a?N.a("assoc"):N.call(null,"assoc"),n=N.a?N.a("merge"):N.call(null,"merge"),l=R.n?R.n("Make a map representing yourself. Make sure it contains your first"," name and last name. Then, add your hometown to the map using ",l," or ",n,"."):R.call(null,"Make a map representing yourself. Make sure it contains your first"," name and last name. Then, add your hometown to the map using ",l," or ",n,"."),l=W.b(x([I,"Exercise: Modeling yourself",l],0)),n=gk.b(x(['[{:name "Mercury"}\n {:name "Venus"}\n {:name "Earth" :moons ["The Moon"]}\n {:name "Mars" :moons ["Phobos" "Deimos"]}\n {:name "Jupiter"\n  :moons ["Ganymede" "Callisto" "Io" "Europa"]}]'],
0)),n=W.b(x([I,"Collections of collections",n],0)),t=N.a?N.a("get-names"):N.call(null,"get-names"),t=Uj.b(x(["Create a function called ",t," that takes a ","vector of maps of people and returns a vector of their names."],0)),u=gk.b(x(['(get-names [{:first "Margaret" :last "Atwood"}\n            {:first "Doris" :last "Lessing"}\n            {:first "Ursula" :last "Le Guin"}\n            {:first "Alice" :last "Munro"}])\n\n;;\x3d\x3e ["Margaret Atwood" "Doris Lessing"\n;;    "Ursula Le Guin" "Alice Munro"]'],
0)),t=W.b(x([I,"Exercise: Get the names of people",t,u],0)),u=Q.a?Q.a("Take the map from the last exercise -- the one about you."):Q.call(null,"Take the map from the last exercise -- the one about you."),y=Q.c?Q.c("Find two or three classmates. Ask their name and hometown. "," Make a vector of maps with their information."):Q.call(null,"Find two or three classmates. Ask their name and hometown. "," Make a vector of maps with their information."),F=N.a?N.a("conj"):N.call(null,"conj"),F=Q.d?Q.d("Then, add your information to their information using ",
F,"."):Q.call(null,"Then, add your information to their information using ",F,"."),u=Aj.d?Aj.d(u,y,F):Aj.call(null,u,y,F),u=W.b(x([I,"Exercise: Modeling your classmates",u],0)),b=X.b(x([I,"More Data Structures",b,c,d,e,g,h,l,n,t,u],0));return Tj.b(x([wi,"mozilla-theme.css",a,b],0))}()):J.call(null,E,function(){var a=Sj.b(x([I,"Module 6"],0)),b=P.e?P.e(hi,"img/map.png",Yh,"map"):P.call(null,hi,"img/map.png",Yh,"map"),b=W.b(x([I,"Maps",b],0)),c=gk.b(x(['{:first "Sally", :last "Brown", :occupation "programmer"}\n{:a 1, :b "two"}\n{}'],
0)),c=W.b(x([I,"Maps",c],0)),d=gk.b(x(['(map? {:first "Sally" :last "Brown"})\n;;\x3d\x3e true\n\n(get {:first "Sally" :last "Brown"} :first)\n;;\x3d\x3e "Sally"\n\n(get {:first "Sally"} :last :MISS)\n;;\x3d\x3e :MISS'],0)),d=W.b(x([I,"Map functions",d],0)),e=gk.b(x(['(assoc {:first "Sally"} :last "Brown")\n;;\x3d\x3e {:first "Sally", :last "Brown"}\n\n(dissoc {:first "Sally" :last "Brown"} :last)\n;;\x3d\x3e {:first "Sally"}\n\n(merge {:first "Sally"} {:last "Brown"})\n;;\x3d\x3e {:first "Sally", :last "Brown"}\n\n(count {:first "Sally" :last "Brown"})\n;;\x3d\x3e 2'],
0)),e=W.b(x([I,"More map functions",e],0)),g=gk.b(x(['(keys {:first "Sally" :last "Brown"})\n;;\x3d\x3e (:first :last)\n\n(vals {:first "Sally" :last "Brown"})\n;;\x3d\x3e ("Sally" "Brown")\n\n(into {} [[1 2] [3 4]])\n;;\x3d\x3e {1 2, 3 4}'],0)),g=W.b(x([I,"Even more map functions",g],0)),h=gk.b(x(['(:first {:first "Sally" :last "Brown"})\n;;\x3d\x3e "Sally"\n\n(:last {:first "Sally"})\n;;\x3d\x3e nil\n\n(:last {:first "Sally"} :MISS)\n;;\x3d\x3e :MISS'],0)),h=W.b(x([I,"Maps and keywords",h],0)),
l=N.a?N.a("assoc"):N.call(null,"assoc"),n=N.a?N.a("merge"):N.call(null,"merge"),l=R.n?R.n("Make a map representing yourself. Make sure it contains your first"," name and last name. Then, add your hometown to the map using ",l," or ",n,"."):R.call(null,"Make a map representing yourself. Make sure it contains your first"," name and last name. Then, add your hometown to the map using ",l," or ",n,"."),l=W.b(x([I,"Exercise: Modeling yourself",l],0)),n=gk.b(x(['[{:name "Mercury"}\n {:name "Venus"}\n {:name "Earth" :moons ["The Moon"]}\n {:name "Mars" :moons ["Phobos" "Deimos"]}\n {:name "Jupiter"\n  :moons ["Ganymede" "Callisto" "Io" "Europa"]}]'],
0)),n=W.b(x([I,"Collections of collections",n],0)),t=N.a?N.a("get-names"):N.call(null,"get-names"),t=Uj.b(x(["Create a function called ",t," that takes a ","vector of maps of people and returns a vector of their names."],0)),u=gk.b(x(['(get-names [{:first "Margaret" :last "Atwood"}\n            {:first "Doris" :last "Lessing"}\n            {:first "Ursula" :last "Le Guin"}\n            {:first "Alice" :last "Munro"}])\n\n;;\x3d\x3e ["Margaret Atwood" "Doris Lessing"\n;;    "Ursula Le Guin" "Alice Munro"]'],
0)),t=W.b(x([I,"Exercise: Get the names of people",t,u],0)),u=Q.a?Q.a("Take the map from the last exercise -- the one about you."):Q.call(null,"Take the map from the last exercise -- the one about you."),y=Q.c?Q.c("Find two or three classmates. Ask their name and hometown. "," Make a vector of maps with their information."):Q.call(null,"Find two or three classmates. Ask their name and hometown. "," Make a vector of maps with their information."),F=N.a?N.a("conj"):N.call(null,"conj"),F=Q.d?Q.d("Then, add your information to their information using ",
F,"."):Q.call(null,"Then, add your information to their information using ",F,"."),u=Aj.d?Aj.d(u,y,F):Aj.call(null,u,y,F),u=W.b(x([I,"Exercise: Modeling your classmates",u],0)),b=X.b(x([I,"More Data Structures",b,c,d,e,g,h,l,n,t,u],0));return Tj.b(x([wi,"mozilla-theme.css",a,b],0))}()));return Jj()});var hk;
ea("tailrecursion.hoplon.app_pages._module5_DOT_html.hoploninit",function(){mc.c(window.location.search,"?dev")&&(mh.b(x(["Autoreloading"],0)),ck());hk=function(){function a(a){var d=null;0<arguments.length&&(d=x(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){var b=lj(a);a=B.d(b,0,null);b=B.d(b,1,null);return Z.b(x([Lc.d(a,H,"clojure"),b],0))}a.j=0;a.g=function(a){a=r(a);return b(a)};a.b=b;return a}();uj.c?uj.c(K.c?K.c(E,D):K.call(null,E,D),J.c?J.c(E,function(){var a=Sj.b(x([I,
"Module 5"],0)),b=hk.b(x(["(\x3d 1 2)    ;\x3d\x3e false\n(\x3e 4 3)    ;\x3d\x3e true\n(\x3e\x3d 4 5)   ;\x3d\x3e false\n(\x3c -1 1)   ;\x3d\x3e true\n(\x3c\x3d -1 -2) ;\x3d\x3e false"],0)),b=W.b(x([I,"Comparison functions",b],0)),c=hk.b(x(["(defn vegetarian?\n  [person]\n  (\x3d :vegetarian (get person :dietary-restrictions)))"],0)),c=W.b(x([I,"Using comparison functions",c],0)),d=hk.b(x(['(str "Chocolate" ", " "strawberry" ", and " "vanilla")\n;;\x3d\x3e "Chocolate, strawberry, and vanilla"'],
0)),d=W.b(x([I,"String functions",d],0)),e=N.a?N.a("str"):N.call(null,"str"),g=N.a?N.a("reduce"):N.call(null,"reduce"),e=O.e?O.e("Using ",e," with ",g):O.call(null,"Using ",e," with ",g),g=hk.b(x(['(defn join-with-space\n  [string1 string2]\n  (str string1 " " string2))\n\n(reduce join-with-space\n        ["i" "like" "peanut" "butter" "and" "jelly"])\n;;\x3d\x3e "i like peanut butter and jelly"'],0)),e=W.b(x([I,e,g],0)),g=N.a?N.a("str"):N.call(null,"str"),h=N.a?N.a("reduce"):N.call(null,"reduce"),
g=O.e?O.e("Using ",g," with ",h):O.call(null,"Using ",g," with ",h),h=hk.b(x(['(reduce join-with-space\n        ["i" "like" "peanut" "butter" "and" "jelly"])\n;;\x3d\x3e "i like peanut butter and jelly"\n\n(join-with-space "i" "like")\n(join-with-space "i like" "peanut")\n(join-with-space "i like peanut" "butter")\n(join-with-space "i like peanut butter" "and")\n(join-with-space "i like peanut butter and" "jelly")'],0)),g=W.b(x([I,g,h],0)),h=hk.b(x(['(map (fn [x] (* 3 x)) [1 2 3]) ;\x3d\x3e [3 6 9]\n\n(reduce (fn [x y] (+ x y)) [1 2 3]) ;\x3d\x3e 6\n\n(reduce\n  (fn [s1 s2] (str s1 " " s2))\n  ["i" "like" "peanut" "butter" "and" "jelly"])\n  ;\x3d\x3e "i like peanut butter and jelly"'],
0)),h=W.b(x([I,"Anonymous functions",h],0)),b=X.b(x([I,"Function library",b,c,d,e,g,h],0));return Tj.b(x([wi,"mozilla-theme.css",a,b],0))}()):J.call(null,E,function(){var a=Sj.b(x([I,"Module 5"],0)),b=hk.b(x(["(\x3d 1 2)    ;\x3d\x3e false\n(\x3e 4 3)    ;\x3d\x3e true\n(\x3e\x3d 4 5)   ;\x3d\x3e false\n(\x3c -1 1)   ;\x3d\x3e true\n(\x3c\x3d -1 -2) ;\x3d\x3e false"],0)),b=W.b(x([I,"Comparison functions",b],0)),c=hk.b(x(["(defn vegetarian?\n  [person]\n  (\x3d :vegetarian (get person :dietary-restrictions)))"],
0)),c=W.b(x([I,"Using comparison functions",c],0)),d=hk.b(x(['(str "Chocolate" ", " "strawberry" ", and " "vanilla")\n;;\x3d\x3e "Chocolate, strawberry, and vanilla"'],0)),d=W.b(x([I,"String functions",d],0)),e=N.a?N.a("str"):N.call(null,"str"),g=N.a?N.a("reduce"):N.call(null,"reduce"),e=O.e?O.e("Using ",e," with ",g):O.call(null,"Using ",e," with ",g),g=hk.b(x(['(defn join-with-space\n  [string1 string2]\n  (str string1 " " string2))\n\n(reduce join-with-space\n        ["i" "like" "peanut" "butter" "and" "jelly"])\n;;\x3d\x3e "i like peanut butter and jelly"'],
0)),e=W.b(x([I,e,g],0)),g=N.a?N.a("str"):N.call(null,"str"),h=N.a?N.a("reduce"):N.call(null,"reduce"),g=O.e?O.e("Using ",g," with ",h):O.call(null,"Using ",g," with ",h),h=hk.b(x(['(reduce join-with-space\n        ["i" "like" "peanut" "butter" "and" "jelly"])\n;;\x3d\x3e "i like peanut butter and jelly"\n\n(join-with-space "i" "like")\n(join-with-space "i like" "peanut")\n(join-with-space "i like peanut" "butter")\n(join-with-space "i like peanut butter" "and")\n(join-with-space "i like peanut butter and" "jelly")'],
0)),g=W.b(x([I,g,h],0)),h=hk.b(x(['(map (fn [x] (* 3 x)) [1 2 3]) ;\x3d\x3e [3 6 9]\n\n(reduce (fn [x y] (+ x y)) [1 2 3]) ;\x3d\x3e 6\n\n(reduce\n  (fn [s1 s2] (str s1 " " s2))\n  ["i" "like" "peanut" "butter" "and" "jelly"])\n  ;\x3d\x3e "i like peanut butter and jelly"'],0)),h=W.b(x([I,"Anonymous functions",h],0)),b=X.b(x([I,"Function library",b,c,d,e,g,h],0));return Tj.b(x([wi,"mozilla-theme.css",a,b],0))}())):uj.call(null,K.c?K.c(E,D):K.call(null,E,D),J.c?J.c(E,function(){var a=Sj.b(x([I,"Module 5"],
0)),b=hk.b(x(["(\x3d 1 2)    ;\x3d\x3e false\n(\x3e 4 3)    ;\x3d\x3e true\n(\x3e\x3d 4 5)   ;\x3d\x3e false\n(\x3c -1 1)   ;\x3d\x3e true\n(\x3c\x3d -1 -2) ;\x3d\x3e false"],0)),b=W.b(x([I,"Comparison functions",b],0)),c=hk.b(x(["(defn vegetarian?\n  [person]\n  (\x3d :vegetarian (get person :dietary-restrictions)))"],0)),c=W.b(x([I,"Using comparison functions",c],0)),d=hk.b(x(['(str "Chocolate" ", " "strawberry" ", and " "vanilla")\n;;\x3d\x3e "Chocolate, strawberry, and vanilla"'],0)),d=W.b(x([I,
"String functions",d],0)),e=N.a?N.a("str"):N.call(null,"str"),g=N.a?N.a("reduce"):N.call(null,"reduce"),e=O.e?O.e("Using ",e," with ",g):O.call(null,"Using ",e," with ",g),g=hk.b(x(['(defn join-with-space\n  [string1 string2]\n  (str string1 " " string2))\n\n(reduce join-with-space\n        ["i" "like" "peanut" "butter" "and" "jelly"])\n;;\x3d\x3e "i like peanut butter and jelly"'],0)),e=W.b(x([I,e,g],0)),g=N.a?N.a("str"):N.call(null,"str"),h=N.a?N.a("reduce"):N.call(null,"reduce"),g=O.e?O.e("Using ",
g," with ",h):O.call(null,"Using ",g," with ",h),h=hk.b(x(['(reduce join-with-space\n        ["i" "like" "peanut" "butter" "and" "jelly"])\n;;\x3d\x3e "i like peanut butter and jelly"\n\n(join-with-space "i" "like")\n(join-with-space "i like" "peanut")\n(join-with-space "i like peanut" "butter")\n(join-with-space "i like peanut butter" "and")\n(join-with-space "i like peanut butter and" "jelly")'],0)),g=W.b(x([I,g,h],0)),h=hk.b(x(['(map (fn [x] (* 3 x)) [1 2 3]) ;\x3d\x3e [3 6 9]\n\n(reduce (fn [x y] (+ x y)) [1 2 3]) ;\x3d\x3e 6\n\n(reduce\n  (fn [s1 s2] (str s1 " " s2))\n  ["i" "like" "peanut" "butter" "and" "jelly"])\n  ;\x3d\x3e "i like peanut butter and jelly"'],
0)),h=W.b(x([I,"Anonymous functions",h],0)),b=X.b(x([I,"Function library",b,c,d,e,g,h],0));return Tj.b(x([wi,"mozilla-theme.css",a,b],0))}()):J.call(null,E,function(){var a=Sj.b(x([I,"Module 5"],0)),b=hk.b(x(["(\x3d 1 2)    ;\x3d\x3e false\n(\x3e 4 3)    ;\x3d\x3e true\n(\x3e\x3d 4 5)   ;\x3d\x3e false\n(\x3c -1 1)   ;\x3d\x3e true\n(\x3c\x3d -1 -2) ;\x3d\x3e false"],0)),b=W.b(x([I,"Comparison functions",b],0)),c=hk.b(x(["(defn vegetarian?\n  [person]\n  (\x3d :vegetarian (get person :dietary-restrictions)))"],
0)),c=W.b(x([I,"Using comparison functions",c],0)),d=hk.b(x(['(str "Chocolate" ", " "strawberry" ", and " "vanilla")\n;;\x3d\x3e "Chocolate, strawberry, and vanilla"'],0)),d=W.b(x([I,"String functions",d],0)),e=N.a?N.a("str"):N.call(null,"str"),g=N.a?N.a("reduce"):N.call(null,"reduce"),e=O.e?O.e("Using ",e," with ",g):O.call(null,"Using ",e," with ",g),g=hk.b(x(['(defn join-with-space\n  [string1 string2]\n  (str string1 " " string2))\n\n(reduce join-with-space\n        ["i" "like" "peanut" "butter" "and" "jelly"])\n;;\x3d\x3e "i like peanut butter and jelly"'],
0)),e=W.b(x([I,e,g],0)),g=N.a?N.a("str"):N.call(null,"str"),h=N.a?N.a("reduce"):N.call(null,"reduce"),g=O.e?O.e("Using ",g," with ",h):O.call(null,"Using ",g," with ",h),h=hk.b(x(['(reduce join-with-space\n        ["i" "like" "peanut" "butter" "and" "jelly"])\n;;\x3d\x3e "i like peanut butter and jelly"\n\n(join-with-space "i" "like")\n(join-with-space "i like" "peanut")\n(join-with-space "i like peanut" "butter")\n(join-with-space "i like peanut butter" "and")\n(join-with-space "i like peanut butter and" "jelly")'],
0)),g=W.b(x([I,g,h],0)),h=hk.b(x(['(map (fn [x] (* 3 x)) [1 2 3]) ;\x3d\x3e [3 6 9]\n\n(reduce (fn [x y] (+ x y)) [1 2 3]) ;\x3d\x3e 6\n\n(reduce\n  (fn [s1 s2] (str s1 " " s2))\n  ["i" "like" "peanut" "butter" "and" "jelly"])\n  ;\x3d\x3e "i like peanut butter and jelly"'],0)),h=W.b(x([I,"Anonymous functions",h],0)),b=X.b(x([I,"Function library",b,c,d,e,g,h],0));return Tj.b(x([wi,"mozilla-theme.css",a,b],0))}()));return Jj()});ea("tailrecursion.hoplon.app_pages._module4_DOT_html.hoploninit",function(){mc.c(window.location.search,"?dev")&&(mh.b(x(["Autoreloading"],0)),ck());uj.c?uj.c(K.c?K.c(E,D):K.call(null,E,D),J.c?J.c(E,function(){var a=Sj.b(x([I,"Module 4"],0)),b=Z.b(x([H,"language-clojure",'"Hello world"\n"This is a longer string that I wrote for purposes of an example."\n"Aubrey said, \\"I think we should go to the Orange Julius.\\""'],0)),b=W.b(x([I,"Strings",b],0)),c=R.a?R.a("Answers to questions"):R.call(null,"Answers to questions"),
d=Z.b(x([H,"language-clojure","true\nfalse\nnil"],0)),c=W.b(x([I,"Booleans and nil",c,d],0)),d=R.a?R.a("Keywords don't have a real world analog like numbers or strings"):R.call(null,"Keywords don't have a real world analog like numbers or strings"),e=R.a?R.a("Think of keywords as a special kind of string, one used for labels."):R.call(null,"Think of keywords as a special kind of string, one used for labels."),g=Z.b(x([H,"language-clojure",":name\n:input"],0)),d=W.b(x([I,"Keywords",d,e,g],0)),e=N.a?
N.a("my-hometown"):N.call(null,"my-hometown"),e=R.d?R.d("Write the name of your hometown as a string and then assign that string to the symbol ",e,"."):R.call(null,"Write the name of your hometown as a string and then assign that string to the symbol ",e,"."),e=W.b(x([I,"Exercise: Store the name of your hometown",e],0)),g=N.a?N.a("str"):N.call(null,"str"),g=R.e?R.e("The ",g," function can take any number of arguments, and it ","concatenates them together to make a string."):R.call(null,"The ",g," function can take any number of arguments, and it ",
"concatenates them together to make a string."),h=N.a?N.a("format-name"):N.call(null,"format-name"),l=N.a?N.a("first-name"):N.call(null,"first-name"),n=N.a?N.a("last-name"):N.call(null,"last-name"),h=R.ga?R.ga("Write a function called ",h," that takes two arguments, ",l," and ",n,". This function should output the name ","like so: Last, First."):R.call(null,"Write a function called ",h," that takes two arguments, ",l," and ",n,". This function should output the name ","like so: Last, First."),g=W.b(x([I,
"Exercise: make a function to format names",g,h],0)),b=X.b(x([I,"Strings, Keywords, and Booleans",b,c,d,e,g],0));return Tj.b(x([wi,"mozilla-theme.css",a,b],0))}()):J.call(null,E,function(){var a=Sj.b(x([I,"Module 4"],0)),b=Z.b(x([H,"language-clojure",'"Hello world"\n"This is a longer string that I wrote for purposes of an example."\n"Aubrey said, \\"I think we should go to the Orange Julius.\\""'],0)),b=W.b(x([I,"Strings",b],0)),c=R.a?R.a("Answers to questions"):R.call(null,"Answers to questions"),
d=Z.b(x([H,"language-clojure","true\nfalse\nnil"],0)),c=W.b(x([I,"Booleans and nil",c,d],0)),d=R.a?R.a("Keywords don't have a real world analog like numbers or strings"):R.call(null,"Keywords don't have a real world analog like numbers or strings"),e=R.a?R.a("Think of keywords as a special kind of string, one used for labels."):R.call(null,"Think of keywords as a special kind of string, one used for labels."),g=Z.b(x([H,"language-clojure",":name\n:input"],0)),d=W.b(x([I,"Keywords",d,e,g],0)),e=N.a?
N.a("my-hometown"):N.call(null,"my-hometown"),e=R.d?R.d("Write the name of your hometown as a string and then assign that string to the symbol ",e,"."):R.call(null,"Write the name of your hometown as a string and then assign that string to the symbol ",e,"."),e=W.b(x([I,"Exercise: Store the name of your hometown",e],0)),g=N.a?N.a("str"):N.call(null,"str"),g=R.e?R.e("The ",g," function can take any number of arguments, and it ","concatenates them together to make a string."):R.call(null,"The ",g," function can take any number of arguments, and it ",
"concatenates them together to make a string."),h=N.a?N.a("format-name"):N.call(null,"format-name"),l=N.a?N.a("first-name"):N.call(null,"first-name"),n=N.a?N.a("last-name"):N.call(null,"last-name"),h=R.ga?R.ga("Write a function called ",h," that takes two arguments, ",l," and ",n,". This function should output the name ","like so: Last, First."):R.call(null,"Write a function called ",h," that takes two arguments, ",l," and ",n,". This function should output the name ","like so: Last, First."),g=W.b(x([I,
"Exercise: make a function to format names",g,h],0)),b=X.b(x([I,"Strings, Keywords, and Booleans",b,c,d,e,g],0));return Tj.b(x([wi,"mozilla-theme.css",a,b],0))}())):uj.call(null,K.c?K.c(E,D):K.call(null,E,D),J.c?J.c(E,function(){var a=Sj.b(x([I,"Module 4"],0)),b=Z.b(x([H,"language-clojure",'"Hello world"\n"This is a longer string that I wrote for purposes of an example."\n"Aubrey said, \\"I think we should go to the Orange Julius.\\""'],0)),b=W.b(x([I,"Strings",b],0)),c=R.a?R.a("Answers to questions"):
R.call(null,"Answers to questions"),d=Z.b(x([H,"language-clojure","true\nfalse\nnil"],0)),c=W.b(x([I,"Booleans and nil",c,d],0)),d=R.a?R.a("Keywords don't have a real world analog like numbers or strings"):R.call(null,"Keywords don't have a real world analog like numbers or strings"),e=R.a?R.a("Think of keywords as a special kind of string, one used for labels."):R.call(null,"Think of keywords as a special kind of string, one used for labels."),g=Z.b(x([H,"language-clojure",":name\n:input"],0)),d=
W.b(x([I,"Keywords",d,e,g],0)),e=N.a?N.a("my-hometown"):N.call(null,"my-hometown"),e=R.d?R.d("Write the name of your hometown as a string and then assign that string to the symbol ",e,"."):R.call(null,"Write the name of your hometown as a string and then assign that string to the symbol ",e,"."),e=W.b(x([I,"Exercise: Store the name of your hometown",e],0)),g=N.a?N.a("str"):N.call(null,"str"),g=R.e?R.e("The ",g," function can take any number of arguments, and it ","concatenates them together to make a string."):
R.call(null,"The ",g," function can take any number of arguments, and it ","concatenates them together to make a string."),h=N.a?N.a("format-name"):N.call(null,"format-name"),l=N.a?N.a("first-name"):N.call(null,"first-name"),n=N.a?N.a("last-name"):N.call(null,"last-name"),h=R.ga?R.ga("Write a function called ",h," that takes two arguments, ",l," and ",n,". This function should output the name ","like so: Last, First."):R.call(null,"Write a function called ",h," that takes two arguments, ",l," and ",
n,". This function should output the name ","like so: Last, First."),g=W.b(x([I,"Exercise: make a function to format names",g,h],0)),b=X.b(x([I,"Strings, Keywords, and Booleans",b,c,d,e,g],0));return Tj.b(x([wi,"mozilla-theme.css",a,b],0))}()):J.call(null,E,function(){var a=Sj.b(x([I,"Module 4"],0)),b=Z.b(x([H,"language-clojure",'"Hello world"\n"This is a longer string that I wrote for purposes of an example."\n"Aubrey said, \\"I think we should go to the Orange Julius.\\""'],0)),b=W.b(x([I,"Strings",
b],0)),c=R.a?R.a("Answers to questions"):R.call(null,"Answers to questions"),d=Z.b(x([H,"language-clojure","true\nfalse\nnil"],0)),c=W.b(x([I,"Booleans and nil",c,d],0)),d=R.a?R.a("Keywords don't have a real world analog like numbers or strings"):R.call(null,"Keywords don't have a real world analog like numbers or strings"),e=R.a?R.a("Think of keywords as a special kind of string, one used for labels."):R.call(null,"Think of keywords as a special kind of string, one used for labels."),g=Z.b(x([H,
"language-clojure",":name\n:input"],0)),d=W.b(x([I,"Keywords",d,e,g],0)),e=N.a?N.a("my-hometown"):N.call(null,"my-hometown"),e=R.d?R.d("Write the name of your hometown as a string and then assign that string to the symbol ",e,"."):R.call(null,"Write the name of your hometown as a string and then assign that string to the symbol ",e,"."),e=W.b(x([I,"Exercise: Store the name of your hometown",e],0)),g=N.a?N.a("str"):N.call(null,"str"),g=R.e?R.e("The ",g," function can take any number of arguments, and it ",
"concatenates them together to make a string."):R.call(null,"The ",g," function can take any number of arguments, and it ","concatenates them together to make a string."),h=N.a?N.a("format-name"):N.call(null,"format-name"),l=N.a?N.a("first-name"):N.call(null,"first-name"),n=N.a?N.a("last-name"):N.call(null,"last-name"),h=R.ga?R.ga("Write a function called ",h," that takes two arguments, ",l," and ",n,". This function should output the name ","like so: Last, First."):R.call(null,"Write a function called ",
h," that takes two arguments, ",l," and ",n,". This function should output the name ","like so: Last, First."),g=W.b(x([I,"Exercise: make a function to format names",g,h],0)),b=X.b(x([I,"Strings, Keywords, and Booleans",b,c,d,e,g],0));return Tj.b(x([wi,"mozilla-theme.css",a,b],0))}()));return Jj()});var ik,jk;
ea("tailrecursion.hoplon.app_pages._module3_DOT_html.hoploninit",function(){mc.c(window.location.search,"?dev")&&(mh.b(x(["Autoreloading"],0)),ck());ik=function(){function a(a){var d=null;0<arguments.length&&(d=x(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){a=bf.c(N,a);return ef(1,hf.c(gf.a(", "),a))}a.j=0;a.g=function(a){a=r(a);return b(a)};a.b=b;return a}();jk=function(){function a(a){var d=null;0<arguments.length&&(d=x(Array.prototype.slice.call(arguments,0),
0));return b.call(this,d)}function b(a){var b=lj(a);a=B.d(b,0,null);b=B.d(b,1,null);return Z.b(x([Lc.d(a,H,"clojure"),b],0))}a.j=0;a.g=function(a){a=r(a);return b(a)};a.b=b;return a}();uj.c?uj.c(K.c?K.c(E,D):K.call(null,E,D),J.c?J.c(E,function(){var a=Sj.b(x([I,"Module 3"],0)),b=ik.b(x(["count","conj","first"],0)),b=Q.a?Q.a(b):Q.call(null,b),c=ik.b(x(["+","-","*","/"],0)),c=Q.a?Q.a(c):Q.call(null,c),d=Q.a?Q.a("A piece of code that takes values and returns a value"):Q.call(null,"A piece of code that takes values and returns a value"),
b=V.d?V.d(b,c,d):V.call(null,b,c,d),b=W.b(x([I,"What are functions?",b],0)),c=jk.b(x(['(defn total-bill\n  "Given the subtotal of a bill, return the total after tax."\n  [subtotal]\n  (* 1.085 subtotal)) \n\n(total-bill 8.90) ;\x3d\x3e 9.6565\n(total-bill 50)   ;\x3d\x3e 54.25\n(total-bill 50/7) ;\x3d\x3e 7.75'],0)),c=W.b(x([I,"An example function",c],0)),d=jk.b(x(['(defn ; specifies that we are defining a function\n  total-bill ; the name of this function\n  \n  ;; documentation, optional\n  "Given the subtotal of a bill, return the total..."\n  \n  [x] ; list of arguments\n\n  ;; body of function\n  (* 1.085 subtotal))'],
0)),d=W.b(x([I,"An example function",d],0)),e=jk.b(x(["(defn total-with-tip\n  [subtotal tip-pct] ;; takes 2 arguments\n  (* 1.085 subtotal (+ 1 tip-pct)))\n\n(total-with-tip 50 0.18) ;\x3d\x3e 64.015"],0)),e=W.b(x([I,"A function with multiple arguments.",e],0)),g=N.a?N.a("total-with-tip"):N.call(null,"total-with-tip"),h=N.a?N.a("share-per-person"):N.call(null,"share-per-person"),g=R.k?R.k("Modify our ",g," function, and call the new function ",h,", that additionally takes in as an argument the number of people in the group for a bill."):
R.call(null,"Modify our ",g," function, and call the new function ",h,", that additionally takes in as an argument the number of people in the group for a bill."),h=R.a?R.a("Have the function return the average bill amount per person."):R.call(null,"Have the function return the average bill amount per person."),g=W.b(x([I,"Find per-person share of bill among a group",g,h],0)),h=Q.a?Q.a("Functions are named like any other value"):Q.call(null,"Functions are named like any other value"),l=N.a?N.a("?"):
N.call(null,"?"),l=R.c?R.c("Predicate functions usually end in ",l):R.call(null,"Predicate functions usually end in ",l),n=N.a?N.a("zero?"):N.call(null,"zero?"),n=Q.a?Q.a(n):Q.call(null,n),t=N.a?N.a("vector?"):N.call(null,"vector?"),t=Q.a?Q.a(t):Q.call(null,t),u=N.a?N.a("empty?"):N.call(null,"empty?"),u=Q.a?Q.a(u):Q.call(null,u),n=V.d?V.d(n,t,u):V.call(null,n,t,u),l=Q.c?Q.c(l,n):Q.call(null,l,n),h=V.c?V.c(h,l):V.call(null,h,l),h=W.b(x([I,"Naming functions",h],0)),b=X.b(x([I,"Functions",b,c,d,e,g,
h],0)),c=N.a?N.a("map"):N.call(null,"map"),c=O.a?O.a(c):O.call(null,c),d=jk.b(x(["(def dine-in-orders [12.40 18.95 23.81 19.95 12.40])\n(def take-out-orders[6.00 6.00 7.95 6.25])\n\n(map total-bill dine-in-orders)  ;\x3d\x3e [13.454 20.56075 25.833849999999998 21.64575 13.454]\n(map total-bill take-out-orders) ;\x3d\x3e [6.51 6.51 8.62575 6.78125]"],0)),c=W.b(x([I,c,d],0)),d=N.a?N.a("reduce"):N.call(null,"reduce"),d=O.a?O.a(d):O.call(null,d),e=jk.b(x(["(defn add\n  [x y]\n  (+ x y))\n\n(reduce add [1 2 3]) ;\x3d\x3e 6"],
0)),d=W.b(x([I,d,e],0)),e=N.a?N.a("reduce"):N.call(null,"reduce"),e=O.c?O.c(e," in action"):O.call(null,e," in action"),g=jk.b(x(["(def take-out-totals [6.51 6.51 8.62575 6.78125])\n\n(reduce add take-out-totals) ;\x3d\x3e 28.427"],0)),e=W.b(x([I,e,g],0)),g=N.a?N.a("reduce"):N.call(null,"reduce"),g=O.c?O.c(g," in action"):O.call(null,g," in action"),h=jk.b(x(["(def take-out-totals [6.51 6.51 8.62575 6.78125]) \n(reduce add take-out-totals) ;\x3d\x3e 28.427\n\n(add 6.51 6.51)\n(add 13.02 8.62575)\n(add 21.64575 6.78125)"],
0)),g=W.b(x([I,g,h],0)),h=N.a?N.a("average"):N.call(null,"average"),h=R.e?R.e("Create a function called ",h," that takes a vector of ","bill amounts and returns the average of those amounts."):R.call(null,"Create a function called ",h," that takes a vector of ","bill amounts and returns the average of those amounts."),l=N.a?N.a("reduce"):N.call(null,"reduce"),n=N.a?N.a("count"):N.call(null,"count"),l=R.k?R.k("Hint: you will need to use ",l," and ",n,"."):R.call(null,"Hint: you will need to use ",
l," and ",n,"."),h=W.b(x([I,"Exercise: Find the average",h,l],0)),c=X.b(x([I,"Functions that take other functions",c,d,e,g,h],0));return Tj.b(x([wi,"mozilla-theme.css",a,b,c],0))}()):J.call(null,E,function(){var a=Sj.b(x([I,"Module 3"],0)),b=ik.b(x(["count","conj","first"],0)),b=Q.a?Q.a(b):Q.call(null,b),c=ik.b(x(["+","-","*","/"],0)),c=Q.a?Q.a(c):Q.call(null,c),d=Q.a?Q.a("A piece of code that takes values and returns a value"):Q.call(null,"A piece of code that takes values and returns a value"),
b=V.d?V.d(b,c,d):V.call(null,b,c,d),b=W.b(x([I,"What are functions?",b],0)),c=jk.b(x(['(defn total-bill\n  "Given the subtotal of a bill, return the total after tax."\n  [subtotal]\n  (* 1.085 subtotal)) \n\n(total-bill 8.90) ;\x3d\x3e 9.6565\n(total-bill 50)   ;\x3d\x3e 54.25\n(total-bill 50/7) ;\x3d\x3e 7.75'],0)),c=W.b(x([I,"An example function",c],0)),d=jk.b(x(['(defn ; specifies that we are defining a function\n  total-bill ; the name of this function\n  \n  ;; documentation, optional\n  "Given the subtotal of a bill, return the total..."\n  \n  [x] ; list of arguments\n\n  ;; body of function\n  (* 1.085 subtotal))'],
0)),d=W.b(x([I,"An example function",d],0)),e=jk.b(x(["(defn total-with-tip\n  [subtotal tip-pct] ;; takes 2 arguments\n  (* 1.085 subtotal (+ 1 tip-pct)))\n\n(total-with-tip 50 0.18) ;\x3d\x3e 64.015"],0)),e=W.b(x([I,"A function with multiple arguments.",e],0)),g=N.a?N.a("total-with-tip"):N.call(null,"total-with-tip"),h=N.a?N.a("share-per-person"):N.call(null,"share-per-person"),g=R.k?R.k("Modify our ",g," function, and call the new function ",h,", that additionally takes in as an argument the number of people in the group for a bill."):
R.call(null,"Modify our ",g," function, and call the new function ",h,", that additionally takes in as an argument the number of people in the group for a bill."),h=R.a?R.a("Have the function return the average bill amount per person."):R.call(null,"Have the function return the average bill amount per person."),g=W.b(x([I,"Find per-person share of bill among a group",g,h],0)),h=Q.a?Q.a("Functions are named like any other value"):Q.call(null,"Functions are named like any other value"),l=N.a?N.a("?"):
N.call(null,"?"),l=R.c?R.c("Predicate functions usually end in ",l):R.call(null,"Predicate functions usually end in ",l),n=N.a?N.a("zero?"):N.call(null,"zero?"),n=Q.a?Q.a(n):Q.call(null,n),t=N.a?N.a("vector?"):N.call(null,"vector?"),t=Q.a?Q.a(t):Q.call(null,t),u=N.a?N.a("empty?"):N.call(null,"empty?"),u=Q.a?Q.a(u):Q.call(null,u),n=V.d?V.d(n,t,u):V.call(null,n,t,u),l=Q.c?Q.c(l,n):Q.call(null,l,n),h=V.c?V.c(h,l):V.call(null,h,l),h=W.b(x([I,"Naming functions",h],0)),b=X.b(x([I,"Functions",b,c,d,e,g,
h],0)),c=N.a?N.a("map"):N.call(null,"map"),c=O.a?O.a(c):O.call(null,c),d=jk.b(x(["(def dine-in-orders [12.40 18.95 23.81 19.95 12.40])\n(def take-out-orders[6.00 6.00 7.95 6.25])\n\n(map total-bill dine-in-orders)  ;\x3d\x3e [13.454 20.56075 25.833849999999998 21.64575 13.454]\n(map total-bill take-out-orders) ;\x3d\x3e [6.51 6.51 8.62575 6.78125]"],0)),c=W.b(x([I,c,d],0)),d=N.a?N.a("reduce"):N.call(null,"reduce"),d=O.a?O.a(d):O.call(null,d),e=jk.b(x(["(defn add\n  [x y]\n  (+ x y))\n\n(reduce add [1 2 3]) ;\x3d\x3e 6"],
0)),d=W.b(x([I,d,e],0)),e=N.a?N.a("reduce"):N.call(null,"reduce"),e=O.c?O.c(e," in action"):O.call(null,e," in action"),g=jk.b(x(["(def take-out-totals [6.51 6.51 8.62575 6.78125])\n\n(reduce add take-out-totals) ;\x3d\x3e 28.427"],0)),e=W.b(x([I,e,g],0)),g=N.a?N.a("reduce"):N.call(null,"reduce"),g=O.c?O.c(g," in action"):O.call(null,g," in action"),h=jk.b(x(["(def take-out-totals [6.51 6.51 8.62575 6.78125]) \n(reduce add take-out-totals) ;\x3d\x3e 28.427\n\n(add 6.51 6.51)\n(add 13.02 8.62575)\n(add 21.64575 6.78125)"],
0)),g=W.b(x([I,g,h],0)),h=N.a?N.a("average"):N.call(null,"average"),h=R.e?R.e("Create a function called ",h," that takes a vector of ","bill amounts and returns the average of those amounts."):R.call(null,"Create a function called ",h," that takes a vector of ","bill amounts and returns the average of those amounts."),l=N.a?N.a("reduce"):N.call(null,"reduce"),n=N.a?N.a("count"):N.call(null,"count"),l=R.k?R.k("Hint: you will need to use ",l," and ",n,"."):R.call(null,"Hint: you will need to use ",
l," and ",n,"."),h=W.b(x([I,"Exercise: Find the average",h,l],0)),c=X.b(x([I,"Functions that take other functions",c,d,e,g,h],0));return Tj.b(x([wi,"mozilla-theme.css",a,b,c],0))}())):uj.call(null,K.c?K.c(E,D):K.call(null,E,D),J.c?J.c(E,function(){var a=Sj.b(x([I,"Module 3"],0)),b=ik.b(x(["count","conj","first"],0)),b=Q.a?Q.a(b):Q.call(null,b),c=ik.b(x(["+","-","*","/"],0)),c=Q.a?Q.a(c):Q.call(null,c),d=Q.a?Q.a("A piece of code that takes values and returns a value"):Q.call(null,"A piece of code that takes values and returns a value"),
b=V.d?V.d(b,c,d):V.call(null,b,c,d),b=W.b(x([I,"What are functions?",b],0)),c=jk.b(x(['(defn total-bill\n  "Given the subtotal of a bill, return the total after tax."\n  [subtotal]\n  (* 1.085 subtotal)) \n\n(total-bill 8.90) ;\x3d\x3e 9.6565\n(total-bill 50)   ;\x3d\x3e 54.25\n(total-bill 50/7) ;\x3d\x3e 7.75'],0)),c=W.b(x([I,"An example function",c],0)),d=jk.b(x(['(defn ; specifies that we are defining a function\n  total-bill ; the name of this function\n  \n  ;; documentation, optional\n  "Given the subtotal of a bill, return the total..."\n  \n  [x] ; list of arguments\n\n  ;; body of function\n  (* 1.085 subtotal))'],
0)),d=W.b(x([I,"An example function",d],0)),e=jk.b(x(["(defn total-with-tip\n  [subtotal tip-pct] ;; takes 2 arguments\n  (* 1.085 subtotal (+ 1 tip-pct)))\n\n(total-with-tip 50 0.18) ;\x3d\x3e 64.015"],0)),e=W.b(x([I,"A function with multiple arguments.",e],0)),g=N.a?N.a("total-with-tip"):N.call(null,"total-with-tip"),h=N.a?N.a("share-per-person"):N.call(null,"share-per-person"),g=R.k?R.k("Modify our ",g," function, and call the new function ",h,", that additionally takes in as an argument the number of people in the group for a bill."):
R.call(null,"Modify our ",g," function, and call the new function ",h,", that additionally takes in as an argument the number of people in the group for a bill."),h=R.a?R.a("Have the function return the average bill amount per person."):R.call(null,"Have the function return the average bill amount per person."),g=W.b(x([I,"Find per-person share of bill among a group",g,h],0)),h=Q.a?Q.a("Functions are named like any other value"):Q.call(null,"Functions are named like any other value"),l=N.a?N.a("?"):
N.call(null,"?"),l=R.c?R.c("Predicate functions usually end in ",l):R.call(null,"Predicate functions usually end in ",l),n=N.a?N.a("zero?"):N.call(null,"zero?"),n=Q.a?Q.a(n):Q.call(null,n),t=N.a?N.a("vector?"):N.call(null,"vector?"),t=Q.a?Q.a(t):Q.call(null,t),u=N.a?N.a("empty?"):N.call(null,"empty?"),u=Q.a?Q.a(u):Q.call(null,u),n=V.d?V.d(n,t,u):V.call(null,n,t,u),l=Q.c?Q.c(l,n):Q.call(null,l,n),h=V.c?V.c(h,l):V.call(null,h,l),h=W.b(x([I,"Naming functions",h],0)),b=X.b(x([I,"Functions",b,c,d,e,g,
h],0)),c=N.a?N.a("map"):N.call(null,"map"),c=O.a?O.a(c):O.call(null,c),d=jk.b(x(["(def dine-in-orders [12.40 18.95 23.81 19.95 12.40])\n(def take-out-orders[6.00 6.00 7.95 6.25])\n\n(map total-bill dine-in-orders)  ;\x3d\x3e [13.454 20.56075 25.833849999999998 21.64575 13.454]\n(map total-bill take-out-orders) ;\x3d\x3e [6.51 6.51 8.62575 6.78125]"],0)),c=W.b(x([I,c,d],0)),d=N.a?N.a("reduce"):N.call(null,"reduce"),d=O.a?O.a(d):O.call(null,d),e=jk.b(x(["(defn add\n  [x y]\n  (+ x y))\n\n(reduce add [1 2 3]) ;\x3d\x3e 6"],
0)),d=W.b(x([I,d,e],0)),e=N.a?N.a("reduce"):N.call(null,"reduce"),e=O.c?O.c(e," in action"):O.call(null,e," in action"),g=jk.b(x(["(def take-out-totals [6.51 6.51 8.62575 6.78125])\n\n(reduce add take-out-totals) ;\x3d\x3e 28.427"],0)),e=W.b(x([I,e,g],0)),g=N.a?N.a("reduce"):N.call(null,"reduce"),g=O.c?O.c(g," in action"):O.call(null,g," in action"),h=jk.b(x(["(def take-out-totals [6.51 6.51 8.62575 6.78125]) \n(reduce add take-out-totals) ;\x3d\x3e 28.427\n\n(add 6.51 6.51)\n(add 13.02 8.62575)\n(add 21.64575 6.78125)"],
0)),g=W.b(x([I,g,h],0)),h=N.a?N.a("average"):N.call(null,"average"),h=R.e?R.e("Create a function called ",h," that takes a vector of ","bill amounts and returns the average of those amounts."):R.call(null,"Create a function called ",h," that takes a vector of ","bill amounts and returns the average of those amounts."),l=N.a?N.a("reduce"):N.call(null,"reduce"),n=N.a?N.a("count"):N.call(null,"count"),l=R.k?R.k("Hint: you will need to use ",l," and ",n,"."):R.call(null,"Hint: you will need to use ",
l," and ",n,"."),h=W.b(x([I,"Exercise: Find the average",h,l],0)),c=X.b(x([I,"Functions that take other functions",c,d,e,g,h],0));return Tj.b(x([wi,"mozilla-theme.css",a,b,c],0))}()):J.call(null,E,function(){var a=Sj.b(x([I,"Module 3"],0)),b=ik.b(x(["count","conj","first"],0)),b=Q.a?Q.a(b):Q.call(null,b),c=ik.b(x(["+","-","*","/"],0)),c=Q.a?Q.a(c):Q.call(null,c),d=Q.a?Q.a("A piece of code that takes values and returns a value"):Q.call(null,"A piece of code that takes values and returns a value"),
b=V.d?V.d(b,c,d):V.call(null,b,c,d),b=W.b(x([I,"What are functions?",b],0)),c=jk.b(x(['(defn total-bill\n  "Given the subtotal of a bill, return the total after tax."\n  [subtotal]\n  (* 1.085 subtotal)) \n\n(total-bill 8.90) ;\x3d\x3e 9.6565\n(total-bill 50)   ;\x3d\x3e 54.25\n(total-bill 50/7) ;\x3d\x3e 7.75'],0)),c=W.b(x([I,"An example function",c],0)),d=jk.b(x(['(defn ; specifies that we are defining a function\n  total-bill ; the name of this function\n  \n  ;; documentation, optional\n  "Given the subtotal of a bill, return the total..."\n  \n  [x] ; list of arguments\n\n  ;; body of function\n  (* 1.085 subtotal))'],
0)),d=W.b(x([I,"An example function",d],0)),e=jk.b(x(["(defn total-with-tip\n  [subtotal tip-pct] ;; takes 2 arguments\n  (* 1.085 subtotal (+ 1 tip-pct)))\n\n(total-with-tip 50 0.18) ;\x3d\x3e 64.015"],0)),e=W.b(x([I,"A function with multiple arguments.",e],0)),g=N.a?N.a("total-with-tip"):N.call(null,"total-with-tip"),h=N.a?N.a("share-per-person"):N.call(null,"share-per-person"),g=R.k?R.k("Modify our ",g," function, and call the new function ",h,", that additionally takes in as an argument the number of people in the group for a bill."):
R.call(null,"Modify our ",g," function, and call the new function ",h,", that additionally takes in as an argument the number of people in the group for a bill."),h=R.a?R.a("Have the function return the average bill amount per person."):R.call(null,"Have the function return the average bill amount per person."),g=W.b(x([I,"Find per-person share of bill among a group",g,h],0)),h=Q.a?Q.a("Functions are named like any other value"):Q.call(null,"Functions are named like any other value"),l=N.a?N.a("?"):
N.call(null,"?"),l=R.c?R.c("Predicate functions usually end in ",l):R.call(null,"Predicate functions usually end in ",l),n=N.a?N.a("zero?"):N.call(null,"zero?"),n=Q.a?Q.a(n):Q.call(null,n),t=N.a?N.a("vector?"):N.call(null,"vector?"),t=Q.a?Q.a(t):Q.call(null,t),u=N.a?N.a("empty?"):N.call(null,"empty?"),u=Q.a?Q.a(u):Q.call(null,u),n=V.d?V.d(n,t,u):V.call(null,n,t,u),l=Q.c?Q.c(l,n):Q.call(null,l,n),h=V.c?V.c(h,l):V.call(null,h,l),h=W.b(x([I,"Naming functions",h],0)),b=X.b(x([I,"Functions",b,c,d,e,g,
h],0)),c=N.a?N.a("map"):N.call(null,"map"),c=O.a?O.a(c):O.call(null,c),d=jk.b(x(["(def dine-in-orders [12.40 18.95 23.81 19.95 12.40])\n(def take-out-orders[6.00 6.00 7.95 6.25])\n\n(map total-bill dine-in-orders)  ;\x3d\x3e [13.454 20.56075 25.833849999999998 21.64575 13.454]\n(map total-bill take-out-orders) ;\x3d\x3e [6.51 6.51 8.62575 6.78125]"],0)),c=W.b(x([I,c,d],0)),d=N.a?N.a("reduce"):N.call(null,"reduce"),d=O.a?O.a(d):O.call(null,d),e=jk.b(x(["(defn add\n  [x y]\n  (+ x y))\n\n(reduce add [1 2 3]) ;\x3d\x3e 6"],
0)),d=W.b(x([I,d,e],0)),e=N.a?N.a("reduce"):N.call(null,"reduce"),e=O.c?O.c(e," in action"):O.call(null,e," in action"),g=jk.b(x(["(def take-out-totals [6.51 6.51 8.62575 6.78125])\n\n(reduce add take-out-totals) ;\x3d\x3e 28.427"],0)),e=W.b(x([I,e,g],0)),g=N.a?N.a("reduce"):N.call(null,"reduce"),g=O.c?O.c(g," in action"):O.call(null,g," in action"),h=jk.b(x(["(def take-out-totals [6.51 6.51 8.62575 6.78125]) \n(reduce add take-out-totals) ;\x3d\x3e 28.427\n\n(add 6.51 6.51)\n(add 13.02 8.62575)\n(add 21.64575 6.78125)"],
0)),g=W.b(x([I,g,h],0)),h=N.a?N.a("average"):N.call(null,"average"),h=R.e?R.e("Create a function called ",h," that takes a vector of ","bill amounts and returns the average of those amounts."):R.call(null,"Create a function called ",h," that takes a vector of ","bill amounts and returns the average of those amounts."),l=N.a?N.a("reduce"):N.call(null,"reduce"),n=N.a?N.a("count"):N.call(null,"count"),l=R.k?R.k("Hint: you will need to use ",l," and ",n,"."):R.call(null,"Hint: you will need to use ",
l," and ",n,"."),h=W.b(x([I,"Exercise: Find the average",h,l],0)),c=X.b(x([I,"Functions that take other functions",c,d,e,g,h],0));return Tj.b(x([wi,"mozilla-theme.css",a,b,c],0))}()));return Jj()});var kk;
ea("tailrecursion.hoplon.app_pages._module2_DOT_html.hoploninit",function(){mc.c(window.location.search,"?dev")&&(mh.b(x(["Autoreloading"],0)),ck());kk=function(){function a(a){var d=null;0<arguments.length&&(d=x(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){var b=lj(a);a=B.d(b,0,null);b=B.d(b,1,null);return Z.b(x([Lc.d(a,H,"clojure"),b],0))}a.j=0;a.g=function(a){a=r(a);return b(a)};a.b=b;return a}();uj.c?uj.c(K.c?K.c(E,D):K.call(null,E,D),J.c?J.c(E,function(){var a=Sj.b(x([I,
"Module 2"],0)),b=Q.a?Q.a("Vectors"):Q.call(null,"Vectors"),c=Q.a?Q.a("Maps"):Q.call(null,"Maps"),d=Q.a?Q.a("Lists"):Q.call(null,"Lists"),e=Q.a?Q.a("Sets"):Q.call(null,"Sets"),b=V.e?V.e(b,c,d,e):V.call(null,b,c,d,e),c=R.a?R.a("We will only look at vectors for now."):R.call(null,"We will only look at vectors for now."),b=W.b(x([I,"Data structures",b,c],0)),c=P.e?P.e(hi,"img/vector.png",Yh,"vector"):P.call(null,hi,"img/vector.png",Yh,"vector"),c=W.b(x([I,"Vectors",c],0)),d=kk.b(x(["[1 2 3 4 5]\n[56.9 60.2 61.8 63.1 64.3 66.4 66.5 68.1 70.2 69.2 63.1 57.1]\n[]"],
0)),d=W.b(x([I,"Vectors",d],0)),e=kk.b(x(["(vector? [5 10 15])\n;;\x3d\x3e true\n\n(vector 5 10 15)\n;;\x3d\x3e [5 10 15]\n\n(conj [5 10] 15)\n;;\x3d\x3e [5 10 15]"],0)),e=W.b(x([I,"Vector functions",e],0)),g=kk.b(x(["(count [5 10 15])\n;;\x3d\x3e 3\n\n(nth [5 10 15] 1)\n;;\x3d\x3e 10\n\n(first [5 10 15])\n;;\x3d\x3e 5"],0)),g=W.b(x([I,"Vector functions",g],0)),h=N.a?N.a("nth"):N.call(null,"nth"),h=R.d?R.d("Make a vector of the average high temperatues in each month of the year in the town where you live. Then use the ",
h," function to get the average high temperature for the current month from the vector."):R.call(null,"Make a vector of the average high temperatues in each month of the year in the town where you live. Then use the ",h," function to get the average high temperature for the current month from the vector."),h=W.b(x([I,"Exercise: Make a vector",h],0)),b=X.b(x([I,"Data Structures",b,c,d,e,g,h],0));return Tj.b(x([wi,"mozilla-theme.css",a,b],0))}()):J.call(null,E,function(){var a=Sj.b(x([I,"Module 2"],
0)),b=Q.a?Q.a("Vectors"):Q.call(null,"Vectors"),c=Q.a?Q.a("Maps"):Q.call(null,"Maps"),d=Q.a?Q.a("Lists"):Q.call(null,"Lists"),e=Q.a?Q.a("Sets"):Q.call(null,"Sets"),b=V.e?V.e(b,c,d,e):V.call(null,b,c,d,e),c=R.a?R.a("We will only look at vectors for now."):R.call(null,"We will only look at vectors for now."),b=W.b(x([I,"Data structures",b,c],0)),c=P.e?P.e(hi,"img/vector.png",Yh,"vector"):P.call(null,hi,"img/vector.png",Yh,"vector"),c=W.b(x([I,"Vectors",c],0)),d=kk.b(x(["[1 2 3 4 5]\n[56.9 60.2 61.8 63.1 64.3 66.4 66.5 68.1 70.2 69.2 63.1 57.1]\n[]"],
0)),d=W.b(x([I,"Vectors",d],0)),e=kk.b(x(["(vector? [5 10 15])\n;;\x3d\x3e true\n\n(vector 5 10 15)\n;;\x3d\x3e [5 10 15]\n\n(conj [5 10] 15)\n;;\x3d\x3e [5 10 15]"],0)),e=W.b(x([I,"Vector functions",e],0)),g=kk.b(x(["(count [5 10 15])\n;;\x3d\x3e 3\n\n(nth [5 10 15] 1)\n;;\x3d\x3e 10\n\n(first [5 10 15])\n;;\x3d\x3e 5"],0)),g=W.b(x([I,"Vector functions",g],0)),h=N.a?N.a("nth"):N.call(null,"nth"),h=R.d?R.d("Make a vector of the average high temperatues in each month of the year in the town where you live. Then use the ",
h," function to get the average high temperature for the current month from the vector."):R.call(null,"Make a vector of the average high temperatues in each month of the year in the town where you live. Then use the ",h," function to get the average high temperature for the current month from the vector."),h=W.b(x([I,"Exercise: Make a vector",h],0)),b=X.b(x([I,"Data Structures",b,c,d,e,g,h],0));return Tj.b(x([wi,"mozilla-theme.css",a,b],0))}())):uj.call(null,K.c?K.c(E,D):K.call(null,E,D),J.c?J.c(E,
function(){var a=Sj.b(x([I,"Module 2"],0)),b=Q.a?Q.a("Vectors"):Q.call(null,"Vectors"),c=Q.a?Q.a("Maps"):Q.call(null,"Maps"),d=Q.a?Q.a("Lists"):Q.call(null,"Lists"),e=Q.a?Q.a("Sets"):Q.call(null,"Sets"),b=V.e?V.e(b,c,d,e):V.call(null,b,c,d,e),c=R.a?R.a("We will only look at vectors for now."):R.call(null,"We will only look at vectors for now."),b=W.b(x([I,"Data structures",b,c],0)),c=P.e?P.e(hi,"img/vector.png",Yh,"vector"):P.call(null,hi,"img/vector.png",Yh,"vector"),c=W.b(x([I,"Vectors",c],0)),
d=kk.b(x(["[1 2 3 4 5]\n[56.9 60.2 61.8 63.1 64.3 66.4 66.5 68.1 70.2 69.2 63.1 57.1]\n[]"],0)),d=W.b(x([I,"Vectors",d],0)),e=kk.b(x(["(vector? [5 10 15])\n;;\x3d\x3e true\n\n(vector 5 10 15)\n;;\x3d\x3e [5 10 15]\n\n(conj [5 10] 15)\n;;\x3d\x3e [5 10 15]"],0)),e=W.b(x([I,"Vector functions",e],0)),g=kk.b(x(["(count [5 10 15])\n;;\x3d\x3e 3\n\n(nth [5 10 15] 1)\n;;\x3d\x3e 10\n\n(first [5 10 15])\n;;\x3d\x3e 5"],0)),g=W.b(x([I,"Vector functions",g],0)),h=N.a?N.a("nth"):N.call(null,"nth"),h=R.d?R.d("Make a vector of the average high temperatues in each month of the year in the town where you live. Then use the ",
h," function to get the average high temperature for the current month from the vector."):R.call(null,"Make a vector of the average high temperatues in each month of the year in the town where you live. Then use the ",h," function to get the average high temperature for the current month from the vector."),h=W.b(x([I,"Exercise: Make a vector",h],0)),b=X.b(x([I,"Data Structures",b,c,d,e,g,h],0));return Tj.b(x([wi,"mozilla-theme.css",a,b],0))}()):J.call(null,E,function(){var a=Sj.b(x([I,"Module 2"],
0)),b=Q.a?Q.a("Vectors"):Q.call(null,"Vectors"),c=Q.a?Q.a("Maps"):Q.call(null,"Maps"),d=Q.a?Q.a("Lists"):Q.call(null,"Lists"),e=Q.a?Q.a("Sets"):Q.call(null,"Sets"),b=V.e?V.e(b,c,d,e):V.call(null,b,c,d,e),c=R.a?R.a("We will only look at vectors for now."):R.call(null,"We will only look at vectors for now."),b=W.b(x([I,"Data structures",b,c],0)),c=P.e?P.e(hi,"img/vector.png",Yh,"vector"):P.call(null,hi,"img/vector.png",Yh,"vector"),c=W.b(x([I,"Vectors",c],0)),d=kk.b(x(["[1 2 3 4 5]\n[56.9 60.2 61.8 63.1 64.3 66.4 66.5 68.1 70.2 69.2 63.1 57.1]\n[]"],
0)),d=W.b(x([I,"Vectors",d],0)),e=kk.b(x(["(vector? [5 10 15])\n;;\x3d\x3e true\n\n(vector 5 10 15)\n;;\x3d\x3e [5 10 15]\n\n(conj [5 10] 15)\n;;\x3d\x3e [5 10 15]"],0)),e=W.b(x([I,"Vector functions",e],0)),g=kk.b(x(["(count [5 10 15])\n;;\x3d\x3e 3\n\n(nth [5 10 15] 1)\n;;\x3d\x3e 10\n\n(first [5 10 15])\n;;\x3d\x3e 5"],0)),g=W.b(x([I,"Vector functions",g],0)),h=N.a?N.a("nth"):N.call(null,"nth"),h=R.d?R.d("Make a vector of the average high temperatues in each month of the year in the town where you live. Then use the ",
h," function to get the average high temperature for the current month from the vector."):R.call(null,"Make a vector of the average high temperatues in each month of the year in the town where you live. Then use the ",h," function to get the average high temperature for the current month from the vector."),h=W.b(x([I,"Exercise: Make a vector",h],0)),b=X.b(x([I,"Data Structures",b,c,d,e,g,h],0));return Tj.b(x([wi,"mozilla-theme.css",a,b],0))}()));return Jj()});ea("tailrecursion.hoplon.app_pages._module1_DOT_html.hoploninit",function(){mc.c(window.location.search,"?dev")&&(mh.b(x(["Autoreloading"],0)),ck());uj.c?uj.c(K.c?K.c(E,D):K.call(null,E,D),J.c?J.c(E,function(){var a=Sj.b(x([I,"Module 1"],0)),b=R.a?R.a("Clojure is simple and powerful."):R.call(null,"Clojure is simple and powerful."),c=R.a?R.a("Clojure is all-purpose."):R.call(null,"Clojure is all-purpose."),d=wj.a?wj.a("fun"):wj.call(null,"fun"),d=R.d?R.d("Clojure is ",d,"."):R.call(null,"Clojure is ",
d,"."),b=W.b(x([I,"Why Clojure?",b,c,d],0)),c=Q.a?Q.a("data processing"):Q.call(null,"data processing"),d=Q.a?Q.a("concurrent applications"):Q.call(null,"concurrent applications"),e=Q.a?Q.a("web applications"):Q.call(null,"web applications"),g=Q.a?Q.a("everything!"):Q.call(null,"everything!"),c=V.e?V.e(c,d,e,g):V.call(null,c,d,e,g),c=W.b(x([I,"What is Clojure good at?",c],0)),d=Z.b(x(['(+ 3 4)\n(max 8 17 2)\n(eat "sandwich")'],0)),d=W.b(x([I,"What does Clojure look like?",d],0)),e=M.a?M.a("R"):M.call(null,
"R"),e=Q.c?Q.c(e,"ead"):Q.call(null,e,"ead"),g=M.a?M.a("E"):M.call(null,"E"),g=Q.c?Q.c(g,"val"):Q.call(null,g,"val"),h=M.a?M.a("P"):M.call(null,"P"),h=Q.c?Q.c(h,"rint"):Q.call(null,h,"rint"),l=M.a?M.a("L"):M.call(null,"L"),l=Q.c?Q.c(l,"oop"):Q.call(null,l,"oop"),e=V.e?V.e(e,g,h,l):V.call(null,e,g,h,l),e=Wj.b(x([ci,40,e],0)),g=P.c?P.c(hi,"img/instarepl.png"):P.call(null,hi,"img/instarepl.png"),g=Wj.b(x([g],0)),e=vj.c?vj.c(e,g):vj.call(null,e,g),e=W.b(x([I,"What is a REPL?",e],0)),b=X.b(x([I,"Introduction to Programming with Clojure",
b,c,d,e],0)),c=Vj.b(x(["numbers","strings","booleans","keywords"],0)),c=W.b(x([I,"Value types",c],0)),d=Z.b(x([";; integers\n12\n-42\n\n;; floats\n10.5\n0.00000072725\n\n;; ratios\n1/2\n-7/3"],0)),d=W.b(x([I,"Numbers",d],0)),e=Z.b(x(["(+ 1 1)  ;\x3d\x3e 1 + 1 \x3d 2\n(- 12 4) ;\x3d\x3e 12 - 4 \x3d 8\n(* 13 2) ;\x3d\x3e 13 * 2 \x3d 26\n(/ 27 9) ;\x3d\x3e 27 / 9 \x3d 3"],0)),e=W.b(x([I,"Arithmetic",e],0)),g=N.a?N.a("1 + 2 * 3 / 4 - 5"):N.call(null,"1 + 2 * 3 / 4 - 5"),g=Uj.b(x(["Infix: ",g],0)),h=N.a?
N.a("(- (+ 1 (/ (* 2 3) 4)) 5)"):N.call(null,"(- (+ 1 (/ (* 2 3) 4)) 5)"),h=Uj.b(x(["Prefix: ",h],0)),g=R.c?R.c(g,h):R.call(null,g,h),h=N.a?N.a("1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9"):N.call(null,"1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9"),h=Uj.b(x(["Infix: ",h],0)),l=N.a?N.a("(+ 1 2 3 4 5 6 7 8 9)"):N.call(null,"(+ 1 2 3 4 5 6 7 8 9)"),l=Uj.b(x(["Prefix: ",l],0)),h=R.c?R.c(h,l):R.call(null,h,l),g=W.b(x([I,"Infix vs. prefix notation",g,h],0)),h=Z.b(x(["(+ 4/3 7/8)    ;\x3d\x3e 53/24\n(- 9 4.2 1/2)  ;\x3d\x3e 4.3\n(* 8 1/4)      ;\x3d\x3e 2\n(/ 27/2 1.5)   ;\x3d\x3e 3.0"],
0)),h=W.b(x([I,"Arithmetic with all number types",h],0)),l=R.a?R.a("String examples"):R.call(null,"String examples"),n=Z.b(x(['"Salut tout le monde"\n"Prost!"'],0)),t=R.a?R.a("Keyword examples"):R.call(null,"Keyword examples"),u=Z.b(x([H,"language-clojure",":surname\n:birth-date\n:r2"],0)),y=R.a?R.a("Boolean examples"):R.call(null,"Boolean examples"),F=Z.b(x([H,"language-clojure","true\nfalse"],0)),l=W.b(x([I,"Sneak Peek at Strings, Booleans, and Keywords",l,n,t,u,y,F],0)),c=X.b(x([I,"Simple values",
c,d,e,g,h,l],0)),d=Z.b(x(["(def mangoes 3)\n(def oranges 5)\n(+ mangoes oranges)"],0)),d=W.b(x([I,"def",d],0)),e=Q.a?Q.a("Take your height in feet and inches and convert it to inches using arithmetic in Clojure."):Q.call(null,"Take your height in feet and inches and convert it to inches using arithmetic in Clojure."),g=Q.a?Q.a("Then convert that to centimeters. There are 2.54 centimeters in an inch."):Q.call(null,"Then convert that to centimeters. There are 2.54 centimeters in an inch."),h=Q.a?Q.a("Lastly, ask two people near you for their height in centimeters. Find the average of your heights."):
Q.call(null,"Lastly, ask two people near you for their height in centimeters. Find the average of your heights."),l=R.a?R.a("Bonus: convert that average back to feet and inches."):R.call(null,"Bonus: convert that average back to feet and inches."),n=R.a?R.a("This will be two separate numbers of whole feet and decimal inches."):R.call(null,"This will be two separate numbers of whole feet and decimal inches."),t=N.a?N.a("(quot x y)"):N.call(null,"(quot x y)"),t=R.c?R.c(t," will give you the whole part of the quotient when dividing two numbers."):
R.call(null,t," will give you the whole part of the quotient when dividing two numbers."),u=N.a?N.a("(mod x y)"):N.call(null,"(mod x y)"),u=R.c?R.c(u," will give you the remainder when dividing two numbers."):R.call(null,u," will give you the remainder when dividing two numbers."),l=Q.e?Q.e(l,n,t,u):Q.call(null,l,n,t,u),e=V.e?V.e(e,g,h,l):V.call(null,e,g,h,l),e=W.b(x([I,"Exercise: Basic arithmetic",e],0)),d=X.b(x([I,"Assigning names to values",d,e],0));return Tj.b(x([wi,"mozilla-theme.css",a,b,c,
d],0))}()):J.call(null,E,function(){var a=Sj.b(x([I,"Module 1"],0)),b=R.a?R.a("Clojure is simple and powerful."):R.call(null,"Clojure is simple and powerful."),c=R.a?R.a("Clojure is all-purpose."):R.call(null,"Clojure is all-purpose."),d=wj.a?wj.a("fun"):wj.call(null,"fun"),d=R.d?R.d("Clojure is ",d,"."):R.call(null,"Clojure is ",d,"."),b=W.b(x([I,"Why Clojure?",b,c,d],0)),c=Q.a?Q.a("data processing"):Q.call(null,"data processing"),d=Q.a?Q.a("concurrent applications"):Q.call(null,"concurrent applications"),
e=Q.a?Q.a("web applications"):Q.call(null,"web applications"),g=Q.a?Q.a("everything!"):Q.call(null,"everything!"),c=V.e?V.e(c,d,e,g):V.call(null,c,d,e,g),c=W.b(x([I,"What is Clojure good at?",c],0)),d=Z.b(x(['(+ 3 4)\n(max 8 17 2)\n(eat "sandwich")'],0)),d=W.b(x([I,"What does Clojure look like?",d],0)),e=M.a?M.a("R"):M.call(null,"R"),e=Q.c?Q.c(e,"ead"):Q.call(null,e,"ead"),g=M.a?M.a("E"):M.call(null,"E"),g=Q.c?Q.c(g,"val"):Q.call(null,g,"val"),h=M.a?M.a("P"):M.call(null,"P"),h=Q.c?Q.c(h,"rint"):Q.call(null,
h,"rint"),l=M.a?M.a("L"):M.call(null,"L"),l=Q.c?Q.c(l,"oop"):Q.call(null,l,"oop"),e=V.e?V.e(e,g,h,l):V.call(null,e,g,h,l),e=Wj.b(x([ci,40,e],0)),g=P.c?P.c(hi,"img/instarepl.png"):P.call(null,hi,"img/instarepl.png"),g=Wj.b(x([g],0)),e=vj.c?vj.c(e,g):vj.call(null,e,g),e=W.b(x([I,"What is a REPL?",e],0)),b=X.b(x([I,"Introduction to Programming with Clojure",b,c,d,e],0)),c=Vj.b(x(["numbers","strings","booleans","keywords"],0)),c=W.b(x([I,"Value types",c],0)),d=Z.b(x([";; integers\n12\n-42\n\n;; floats\n10.5\n0.00000072725\n\n;; ratios\n1/2\n-7/3"],
0)),d=W.b(x([I,"Numbers",d],0)),e=Z.b(x(["(+ 1 1)  ;\x3d\x3e 1 + 1 \x3d 2\n(- 12 4) ;\x3d\x3e 12 - 4 \x3d 8\n(* 13 2) ;\x3d\x3e 13 * 2 \x3d 26\n(/ 27 9) ;\x3d\x3e 27 / 9 \x3d 3"],0)),e=W.b(x([I,"Arithmetic",e],0)),g=N.a?N.a("1 + 2 * 3 / 4 - 5"):N.call(null,"1 + 2 * 3 / 4 - 5"),g=Uj.b(x(["Infix: ",g],0)),h=N.a?N.a("(- (+ 1 (/ (* 2 3) 4)) 5)"):N.call(null,"(- (+ 1 (/ (* 2 3) 4)) 5)"),h=Uj.b(x(["Prefix: ",h],0)),g=R.c?R.c(g,h):R.call(null,g,h),h=N.a?N.a("1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9"):N.call(null,
"1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9"),h=Uj.b(x(["Infix: ",h],0)),l=N.a?N.a("(+ 1 2 3 4 5 6 7 8 9)"):N.call(null,"(+ 1 2 3 4 5 6 7 8 9)"),l=Uj.b(x(["Prefix: ",l],0)),h=R.c?R.c(h,l):R.call(null,h,l),g=W.b(x([I,"Infix vs. prefix notation",g,h],0)),h=Z.b(x(["(+ 4/3 7/8)    ;\x3d\x3e 53/24\n(- 9 4.2 1/2)  ;\x3d\x3e 4.3\n(* 8 1/4)      ;\x3d\x3e 2\n(/ 27/2 1.5)   ;\x3d\x3e 3.0"],0)),h=W.b(x([I,"Arithmetic with all number types",h],0)),l=R.a?R.a("String examples"):R.call(null,"String examples"),n=Z.b(x(['"Salut tout le monde"\n"Prost!"'],
0)),t=R.a?R.a("Keyword examples"):R.call(null,"Keyword examples"),u=Z.b(x([H,"language-clojure",":surname\n:birth-date\n:r2"],0)),y=R.a?R.a("Boolean examples"):R.call(null,"Boolean examples"),F=Z.b(x([H,"language-clojure","true\nfalse"],0)),l=W.b(x([I,"Sneak Peek at Strings, Booleans, and Keywords",l,n,t,u,y,F],0)),c=X.b(x([I,"Simple values",c,d,e,g,h,l],0)),d=Z.b(x(["(def mangoes 3)\n(def oranges 5)\n(+ mangoes oranges)"],0)),d=W.b(x([I,"def",d],0)),e=Q.a?Q.a("Take your height in feet and inches and convert it to inches using arithmetic in Clojure."):
Q.call(null,"Take your height in feet and inches and convert it to inches using arithmetic in Clojure."),g=Q.a?Q.a("Then convert that to centimeters. There are 2.54 centimeters in an inch."):Q.call(null,"Then convert that to centimeters. There are 2.54 centimeters in an inch."),h=Q.a?Q.a("Lastly, ask two people near you for their height in centimeters. Find the average of your heights."):Q.call(null,"Lastly, ask two people near you for their height in centimeters. Find the average of your heights."),
l=R.a?R.a("Bonus: convert that average back to feet and inches."):R.call(null,"Bonus: convert that average back to feet and inches."),n=R.a?R.a("This will be two separate numbers of whole feet and decimal inches."):R.call(null,"This will be two separate numbers of whole feet and decimal inches."),t=N.a?N.a("(quot x y)"):N.call(null,"(quot x y)"),t=R.c?R.c(t," will give you the whole part of the quotient when dividing two numbers."):R.call(null,t," will give you the whole part of the quotient when dividing two numbers."),
u=N.a?N.a("(mod x y)"):N.call(null,"(mod x y)"),u=R.c?R.c(u," will give you the remainder when dividing two numbers."):R.call(null,u," will give you the remainder when dividing two numbers."),l=Q.e?Q.e(l,n,t,u):Q.call(null,l,n,t,u),e=V.e?V.e(e,g,h,l):V.call(null,e,g,h,l),e=W.b(x([I,"Exercise: Basic arithmetic",e],0)),d=X.b(x([I,"Assigning names to values",d,e],0));return Tj.b(x([wi,"mozilla-theme.css",a,b,c,d],0))}())):uj.call(null,K.c?K.c(E,D):K.call(null,E,D),J.c?J.c(E,function(){var a=Sj.b(x([I,
"Module 1"],0)),b=R.a?R.a("Clojure is simple and powerful."):R.call(null,"Clojure is simple and powerful."),c=R.a?R.a("Clojure is all-purpose."):R.call(null,"Clojure is all-purpose."),d=wj.a?wj.a("fun"):wj.call(null,"fun"),d=R.d?R.d("Clojure is ",d,"."):R.call(null,"Clojure is ",d,"."),b=W.b(x([I,"Why Clojure?",b,c,d],0)),c=Q.a?Q.a("data processing"):Q.call(null,"data processing"),d=Q.a?Q.a("concurrent applications"):Q.call(null,"concurrent applications"),e=Q.a?Q.a("web applications"):Q.call(null,
"web applications"),g=Q.a?Q.a("everything!"):Q.call(null,"everything!"),c=V.e?V.e(c,d,e,g):V.call(null,c,d,e,g),c=W.b(x([I,"What is Clojure good at?",c],0)),d=Z.b(x(['(+ 3 4)\n(max 8 17 2)\n(eat "sandwich")'],0)),d=W.b(x([I,"What does Clojure look like?",d],0)),e=M.a?M.a("R"):M.call(null,"R"),e=Q.c?Q.c(e,"ead"):Q.call(null,e,"ead"),g=M.a?M.a("E"):M.call(null,"E"),g=Q.c?Q.c(g,"val"):Q.call(null,g,"val"),h=M.a?M.a("P"):M.call(null,"P"),h=Q.c?Q.c(h,"rint"):Q.call(null,h,"rint"),l=M.a?M.a("L"):M.call(null,
"L"),l=Q.c?Q.c(l,"oop"):Q.call(null,l,"oop"),e=V.e?V.e(e,g,h,l):V.call(null,e,g,h,l),e=Wj.b(x([ci,40,e],0)),g=P.c?P.c(hi,"img/instarepl.png"):P.call(null,hi,"img/instarepl.png"),g=Wj.b(x([g],0)),e=vj.c?vj.c(e,g):vj.call(null,e,g),e=W.b(x([I,"What is a REPL?",e],0)),b=X.b(x([I,"Introduction to Programming with Clojure",b,c,d,e],0)),c=Vj.b(x(["numbers","strings","booleans","keywords"],0)),c=W.b(x([I,"Value types",c],0)),d=Z.b(x([";; integers\n12\n-42\n\n;; floats\n10.5\n0.00000072725\n\n;; ratios\n1/2\n-7/3"],
0)),d=W.b(x([I,"Numbers",d],0)),e=Z.b(x(["(+ 1 1)  ;\x3d\x3e 1 + 1 \x3d 2\n(- 12 4) ;\x3d\x3e 12 - 4 \x3d 8\n(* 13 2) ;\x3d\x3e 13 * 2 \x3d 26\n(/ 27 9) ;\x3d\x3e 27 / 9 \x3d 3"],0)),e=W.b(x([I,"Arithmetic",e],0)),g=N.a?N.a("1 + 2 * 3 / 4 - 5"):N.call(null,"1 + 2 * 3 / 4 - 5"),g=Uj.b(x(["Infix: ",g],0)),h=N.a?N.a("(- (+ 1 (/ (* 2 3) 4)) 5)"):N.call(null,"(- (+ 1 (/ (* 2 3) 4)) 5)"),h=Uj.b(x(["Prefix: ",h],0)),g=R.c?R.c(g,h):R.call(null,g,h),h=N.a?N.a("1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9"):N.call(null,
"1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9"),h=Uj.b(x(["Infix: ",h],0)),l=N.a?N.a("(+ 1 2 3 4 5 6 7 8 9)"):N.call(null,"(+ 1 2 3 4 5 6 7 8 9)"),l=Uj.b(x(["Prefix: ",l],0)),h=R.c?R.c(h,l):R.call(null,h,l),g=W.b(x([I,"Infix vs. prefix notation",g,h],0)),h=Z.b(x(["(+ 4/3 7/8)    ;\x3d\x3e 53/24\n(- 9 4.2 1/2)  ;\x3d\x3e 4.3\n(* 8 1/4)      ;\x3d\x3e 2\n(/ 27/2 1.5)   ;\x3d\x3e 3.0"],0)),h=W.b(x([I,"Arithmetic with all number types",h],0)),l=R.a?R.a("String examples"):R.call(null,"String examples"),n=Z.b(x(['"Salut tout le monde"\n"Prost!"'],
0)),t=R.a?R.a("Keyword examples"):R.call(null,"Keyword examples"),u=Z.b(x([H,"language-clojure",":surname\n:birth-date\n:r2"],0)),y=R.a?R.a("Boolean examples"):R.call(null,"Boolean examples"),F=Z.b(x([H,"language-clojure","true\nfalse"],0)),l=W.b(x([I,"Sneak Peek at Strings, Booleans, and Keywords",l,n,t,u,y,F],0)),c=X.b(x([I,"Simple values",c,d,e,g,h,l],0)),d=Z.b(x(["(def mangoes 3)\n(def oranges 5)\n(+ mangoes oranges)"],0)),d=W.b(x([I,"def",d],0)),e=Q.a?Q.a("Take your height in feet and inches and convert it to inches using arithmetic in Clojure."):
Q.call(null,"Take your height in feet and inches and convert it to inches using arithmetic in Clojure."),g=Q.a?Q.a("Then convert that to centimeters. There are 2.54 centimeters in an inch."):Q.call(null,"Then convert that to centimeters. There are 2.54 centimeters in an inch."),h=Q.a?Q.a("Lastly, ask two people near you for their height in centimeters. Find the average of your heights."):Q.call(null,"Lastly, ask two people near you for their height in centimeters. Find the average of your heights."),
l=R.a?R.a("Bonus: convert that average back to feet and inches."):R.call(null,"Bonus: convert that average back to feet and inches."),n=R.a?R.a("This will be two separate numbers of whole feet and decimal inches."):R.call(null,"This will be two separate numbers of whole feet and decimal inches."),t=N.a?N.a("(quot x y)"):N.call(null,"(quot x y)"),t=R.c?R.c(t," will give you the whole part of the quotient when dividing two numbers."):R.call(null,t," will give you the whole part of the quotient when dividing two numbers."),
u=N.a?N.a("(mod x y)"):N.call(null,"(mod x y)"),u=R.c?R.c(u," will give you the remainder when dividing two numbers."):R.call(null,u," will give you the remainder when dividing two numbers."),l=Q.e?Q.e(l,n,t,u):Q.call(null,l,n,t,u),e=V.e?V.e(e,g,h,l):V.call(null,e,g,h,l),e=W.b(x([I,"Exercise: Basic arithmetic",e],0)),d=X.b(x([I,"Assigning names to values",d,e],0));return Tj.b(x([wi,"mozilla-theme.css",a,b,c,d],0))}()):J.call(null,E,function(){var a=Sj.b(x([I,"Module 1"],0)),b=R.a?R.a("Clojure is simple and powerful."):
R.call(null,"Clojure is simple and powerful."),c=R.a?R.a("Clojure is all-purpose."):R.call(null,"Clojure is all-purpose."),d=wj.a?wj.a("fun"):wj.call(null,"fun"),d=R.d?R.d("Clojure is ",d,"."):R.call(null,"Clojure is ",d,"."),b=W.b(x([I,"Why Clojure?",b,c,d],0)),c=Q.a?Q.a("data processing"):Q.call(null,"data processing"),d=Q.a?Q.a("concurrent applications"):Q.call(null,"concurrent applications"),e=Q.a?Q.a("web applications"):Q.call(null,"web applications"),g=Q.a?Q.a("everything!"):Q.call(null,"everything!"),
c=V.e?V.e(c,d,e,g):V.call(null,c,d,e,g),c=W.b(x([I,"What is Clojure good at?",c],0)),d=Z.b(x(['(+ 3 4)\n(max 8 17 2)\n(eat "sandwich")'],0)),d=W.b(x([I,"What does Clojure look like?",d],0)),e=M.a?M.a("R"):M.call(null,"R"),e=Q.c?Q.c(e,"ead"):Q.call(null,e,"ead"),g=M.a?M.a("E"):M.call(null,"E"),g=Q.c?Q.c(g,"val"):Q.call(null,g,"val"),h=M.a?M.a("P"):M.call(null,"P"),h=Q.c?Q.c(h,"rint"):Q.call(null,h,"rint"),l=M.a?M.a("L"):M.call(null,"L"),l=Q.c?Q.c(l,"oop"):Q.call(null,l,"oop"),e=V.e?V.e(e,g,h,l):V.call(null,
e,g,h,l),e=Wj.b(x([ci,40,e],0)),g=P.c?P.c(hi,"img/instarepl.png"):P.call(null,hi,"img/instarepl.png"),g=Wj.b(x([g],0)),e=vj.c?vj.c(e,g):vj.call(null,e,g),e=W.b(x([I,"What is a REPL?",e],0)),b=X.b(x([I,"Introduction to Programming with Clojure",b,c,d,e],0)),c=Vj.b(x(["numbers","strings","booleans","keywords"],0)),c=W.b(x([I,"Value types",c],0)),d=Z.b(x([";; integers\n12\n-42\n\n;; floats\n10.5\n0.00000072725\n\n;; ratios\n1/2\n-7/3"],0)),d=W.b(x([I,"Numbers",d],0)),e=Z.b(x(["(+ 1 1)  ;\x3d\x3e 1 + 1 \x3d 2\n(- 12 4) ;\x3d\x3e 12 - 4 \x3d 8\n(* 13 2) ;\x3d\x3e 13 * 2 \x3d 26\n(/ 27 9) ;\x3d\x3e 27 / 9 \x3d 3"],
0)),e=W.b(x([I,"Arithmetic",e],0)),g=N.a?N.a("1 + 2 * 3 / 4 - 5"):N.call(null,"1 + 2 * 3 / 4 - 5"),g=Uj.b(x(["Infix: ",g],0)),h=N.a?N.a("(- (+ 1 (/ (* 2 3) 4)) 5)"):N.call(null,"(- (+ 1 (/ (* 2 3) 4)) 5)"),h=Uj.b(x(["Prefix: ",h],0)),g=R.c?R.c(g,h):R.call(null,g,h),h=N.a?N.a("1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9"):N.call(null,"1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9"),h=Uj.b(x(["Infix: ",h],0)),l=N.a?N.a("(+ 1 2 3 4 5 6 7 8 9)"):N.call(null,"(+ 1 2 3 4 5 6 7 8 9)"),l=Uj.b(x(["Prefix: ",l],0)),h=R.c?R.c(h,
l):R.call(null,h,l),g=W.b(x([I,"Infix vs. prefix notation",g,h],0)),h=Z.b(x(["(+ 4/3 7/8)    ;\x3d\x3e 53/24\n(- 9 4.2 1/2)  ;\x3d\x3e 4.3\n(* 8 1/4)      ;\x3d\x3e 2\n(/ 27/2 1.5)   ;\x3d\x3e 3.0"],0)),h=W.b(x([I,"Arithmetic with all number types",h],0)),l=R.a?R.a("String examples"):R.call(null,"String examples"),n=Z.b(x(['"Salut tout le monde"\n"Prost!"'],0)),t=R.a?R.a("Keyword examples"):R.call(null,"Keyword examples"),u=Z.b(x([H,"language-clojure",":surname\n:birth-date\n:r2"],0)),y=R.a?R.a("Boolean examples"):
R.call(null,"Boolean examples"),F=Z.b(x([H,"language-clojure","true\nfalse"],0)),l=W.b(x([I,"Sneak Peek at Strings, Booleans, and Keywords",l,n,t,u,y,F],0)),c=X.b(x([I,"Simple values",c,d,e,g,h,l],0)),d=Z.b(x(["(def mangoes 3)\n(def oranges 5)\n(+ mangoes oranges)"],0)),d=W.b(x([I,"def",d],0)),e=Q.a?Q.a("Take your height in feet and inches and convert it to inches using arithmetic in Clojure."):Q.call(null,"Take your height in feet and inches and convert it to inches using arithmetic in Clojure."),
g=Q.a?Q.a("Then convert that to centimeters. There are 2.54 centimeters in an inch."):Q.call(null,"Then convert that to centimeters. There are 2.54 centimeters in an inch."),h=Q.a?Q.a("Lastly, ask two people near you for their height in centimeters. Find the average of your heights."):Q.call(null,"Lastly, ask two people near you for their height in centimeters. Find the average of your heights."),l=R.a?R.a("Bonus: convert that average back to feet and inches."):R.call(null,"Bonus: convert that average back to feet and inches."),
n=R.a?R.a("This will be two separate numbers of whole feet and decimal inches."):R.call(null,"This will be two separate numbers of whole feet and decimal inches."),t=N.a?N.a("(quot x y)"):N.call(null,"(quot x y)"),t=R.c?R.c(t," will give you the whole part of the quotient when dividing two numbers."):R.call(null,t," will give you the whole part of the quotient when dividing two numbers."),u=N.a?N.a("(mod x y)"):N.call(null,"(mod x y)"),u=R.c?R.c(u," will give you the remainder when dividing two numbers."):
R.call(null,u," will give you the remainder when dividing two numbers."),l=Q.e?Q.e(l,n,t,u):Q.call(null,l,n,t,u),e=V.e?V.e(e,g,h,l):V.call(null,e,g,h,l),e=W.b(x([I,"Exercise: Basic arithmetic",e],0)),d=X.b(x([I,"Assigning names to values",d,e],0));return Tj.b(x([wi,"mozilla-theme.css",a,b,c,d],0))}()));return Jj()});