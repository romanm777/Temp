;try {
/* module-key = 'com.comalatech.workflow:cw-content', location = 'templates/com/comalatech/skull/vendors/jquery.min.js' */
/*! jQuery v1.8.3 jquery.com | jquery.org/license */
(function(e,t){function _(e){var t=M[e]={};return v.each(e.split(y),function(e,n){t[n]=!0}),t}function H(e,n,r){if(r===t&&e.nodeType===1){var i="data-"+n.replace(P,"-$1").toLowerCase();r=e.getAttribute(i);if(typeof r=="string"){try{r=r==="true"?!0:r==="false"?!1:r==="null"?null:+r+""===r?+r:D.test(r)?v.parseJSON(r):r}catch(s){}v.data(e,n,r)}else r=t}return r}function B(e){var t;for(t in e){if(t==="data"&&v.isEmptyObject(e[t]))continue;if(t!=="toJSON")return!1}return!0}function et(){return!1}function tt(){return!0}function ut(e){return!e||!e.parentNode||e.parentNode.nodeType===11}function at(e,t){do e=e[t];while(e&&e.nodeType!==1);return e}function ft(e,t,n){t=t||0;if(v.isFunction(t))return v.grep(e,function(e,r){var i=!!t.call(e,r,e);return i===n});if(t.nodeType)return v.grep(e,function(e,r){return e===t===n});if(typeof t=="string"){var r=v.grep(e,function(e){return e.nodeType===1});if(it.test(t))return v.filter(t,r,!n);t=v.filter(t,r)}return v.grep(e,function(e,r){return v.inArray(e,t)>=0===n})}function lt(e){var t=ct.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}function Lt(e,t){return e.getElementsByTagName(t)[0]||e.appendChild(e.ownerDocument.createElement(t))}function At(e,t){if(t.nodeType!==1||!v.hasData(e))return;var n,r,i,s=v._data(e),o=v._data(t,s),u=s.events;if(u){delete o.handle,o.events={};for(n in u)for(r=0,i=u[n].length;r<i;r++)v.event.add(t,n,u[n][r])}o.data&&(o.data=v.extend({},o.data))}function Ot(e,t){var n;if(t.nodeType!==1)return;t.clearAttributes&&t.clearAttributes(),t.mergeAttributes&&t.mergeAttributes(e),n=t.nodeName.toLowerCase(),n==="object"?(t.parentNode&&(t.outerHTML=e.outerHTML),v.support.html5Clone&&e.innerHTML&&!v.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):n==="input"&&Et.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):n==="option"?t.selected=e.defaultSelected:n==="input"||n==="textarea"?t.defaultValue=e.defaultValue:n==="script"&&t.text!==e.text&&(t.text=e.text),t.removeAttribute(v.expando)}function Mt(e){return typeof e.getElementsByTagName!="undefined"?e.getElementsByTagName("*"):typeof e.querySelectorAll!="undefined"?e.querySelectorAll("*"):[]}function _t(e){Et.test(e.type)&&(e.defaultChecked=e.checked)}function Qt(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=Jt.length;while(i--){t=Jt[i]+n;if(t in e)return t}return r}function Gt(e,t){return e=t||e,v.css(e,"display")==="none"||!v.contains(e.ownerDocument,e)}function Yt(e,t){var n,r,i=[],s=0,o=e.length;for(;s<o;s++){n=e[s];if(!n.style)continue;i[s]=v._data(n,"olddisplay"),t?(!i[s]&&n.style.display==="none"&&(n.style.display=""),n.style.display===""&&Gt(n)&&(i[s]=v._data(n,"olddisplay",nn(n.nodeName)))):(r=Dt(n,"display"),!i[s]&&r!=="none"&&v._data(n,"olddisplay",r))}for(s=0;s<o;s++){n=e[s];if(!n.style)continue;if(!t||n.style.display==="none"||n.style.display==="")n.style.display=t?i[s]||"":"none"}return e}function Zt(e,t,n){var r=Rt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function en(e,t,n,r){var i=n===(r?"border":"content")?4:t==="width"?1:0,s=0;for(;i<4;i+=2)n==="margin"&&(s+=v.css(e,n+$t[i],!0)),r?(n==="content"&&(s-=parseFloat(Dt(e,"padding"+$t[i]))||0),n!=="margin"&&(s-=parseFloat(Dt(e,"border"+$t[i]+"Width"))||0)):(s+=parseFloat(Dt(e,"padding"+$t[i]))||0,n!=="padding"&&(s+=parseFloat(Dt(e,"border"+$t[i]+"Width"))||0));return s}function tn(e,t,n){var r=t==="width"?e.offsetWidth:e.offsetHeight,i=!0,s=v.support.boxSizing&&v.css(e,"boxSizing")==="border-box";if(r<=0||r==null){r=Dt(e,t);if(r<0||r==null)r=e.style[t];if(Ut.test(r))return r;i=s&&(v.support.boxSizingReliable||r===e.style[t]),r=parseFloat(r)||0}return r+en(e,t,n||(s?"border":"content"),i)+"px"}function nn(e){if(Wt[e])return Wt[e];var t=v("<"+e+">").appendTo(i.body),n=t.css("display");t.remove();if(n==="none"||n===""){Pt=i.body.appendChild(Pt||v.extend(i.createElement("iframe"),{frameBorder:0,width:0,height:0}));if(!Ht||!Pt.createElement)Ht=(Pt.contentWindow||Pt.contentDocument).document,Ht.write("<!doctype html><html><body>"),Ht.close();t=Ht.body.appendChild(Ht.createElement(e)),n=Dt(t,"display"),i.body.removeChild(Pt)}return Wt[e]=n,n}function fn(e,t,n,r){var i;if(v.isArray(t))v.each(t,function(t,i){n||sn.test(e)?r(e,i):fn(e+"["+(typeof i=="object"?t:"")+"]",i,n,r)});else if(!n&&v.type(t)==="object")for(i in t)fn(e+"["+i+"]",t[i],n,r);else r(e,t)}function Cn(e){return function(t,n){typeof t!="string"&&(n=t,t="*");var r,i,s,o=t.toLowerCase().split(y),u=0,a=o.length;if(v.isFunction(n))for(;u<a;u++)r=o[u],s=/^\+/.test(r),s&&(r=r.substr(1)||"*"),i=e[r]=e[r]||[],i[s?"unshift":"push"](n)}}function kn(e,n,r,i,s,o){s=s||n.dataTypes[0],o=o||{},o[s]=!0;var u,a=e[s],f=0,l=a?a.length:0,c=e===Sn;for(;f<l&&(c||!u);f++)u=a[f](n,r,i),typeof u=="string"&&(!c||o[u]?u=t:(n.dataTypes.unshift(u),u=kn(e,n,r,i,u,o)));return(c||!u)&&!o["*"]&&(u=kn(e,n,r,i,"*",o)),u}function Ln(e,n){var r,i,s=v.ajaxSettings.flatOptions||{};for(r in n)n[r]!==t&&((s[r]?e:i||(i={}))[r]=n[r]);i&&v.extend(!0,e,i)}function An(e,n,r){var i,s,o,u,a=e.contents,f=e.dataTypes,l=e.responseFields;for(s in l)s in r&&(n[l[s]]=r[s]);while(f[0]==="*")f.shift(),i===t&&(i=e.mimeType||n.getResponseHeader("content-type"));if(i)for(s in a)if(a[s]&&a[s].test(i)){f.unshift(s);break}if(f[0]in r)o=f[0];else{for(s in r){if(!f[0]||e.converters[s+" "+f[0]]){o=s;break}u||(u=s)}o=o||u}if(o)return o!==f[0]&&f.unshift(o),r[o]}function On(e,t){var n,r,i,s,o=e.dataTypes.slice(),u=o[0],a={},f=0;e.dataFilter&&(t=e.dataFilter(t,e.dataType));if(o[1])for(n in e.converters)a[n.toLowerCase()]=e.converters[n];for(;i=o[++f];)if(i!=="*"){if(u!=="*"&&u!==i){n=a[u+" "+i]||a["* "+i];if(!n)for(r in a){s=r.split(" ");if(s[1]===i){n=a[u+" "+s[0]]||a["* "+s[0]];if(n){n===!0?n=a[r]:a[r]!==!0&&(i=s[0],o.splice(f--,0,i));break}}}if(n!==!0)if(n&&e["throws"])t=n(t);else try{t=n(t)}catch(l){return{state:"parsererror",error:n?l:"No conversion from "+u+" to "+i}}}u=i}return{state:"success",data:t}}function Fn(){try{return new e.XMLHttpRequest}catch(t){}}function In(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}function $n(){return setTimeout(function(){qn=t},0),qn=v.now()}function Jn(e,t){v.each(t,function(t,n){var r=(Vn[t]||[]).concat(Vn["*"]),i=0,s=r.length;for(;i<s;i++)if(r[i].call(e,t,n))return})}function Kn(e,t,n){var r,i=0,s=0,o=Xn.length,u=v.Deferred().always(function(){delete a.elem}),a=function(){var t=qn||$n(),n=Math.max(0,f.startTime+f.duration-t),r=n/f.duration||0,i=1-r,s=0,o=f.tweens.length;for(;s<o;s++)f.tweens[s].run(i);return u.notifyWith(e,[f,i,n]),i<1&&o?n:(u.resolveWith(e,[f]),!1)},f=u.promise({elem:e,props:v.extend({},t),opts:v.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:qn||$n(),duration:n.duration,tweens:[],createTween:function(t,n,r){var i=v.Tween(e,f.opts,t,n,f.opts.specialEasing[t]||f.opts.easing);return f.tweens.push(i),i},stop:function(t){var n=0,r=t?f.tweens.length:0;for(;n<r;n++)f.tweens[n].run(1);return t?u.resolveWith(e,[f,t]):u.rejectWith(e,[f,t]),this}}),l=f.props;Qn(l,f.opts.specialEasing);for(;i<o;i++){r=Xn[i].call(f,e,l,f.opts);if(r)return r}return Jn(f,l),v.isFunction(f.opts.start)&&f.opts.start.call(e,f),v.fx.timer(v.extend(a,{anim:f,queue:f.opts.queue,elem:e})),f.progress(f.opts.progress).done(f.opts.done,f.opts.complete).fail(f.opts.fail).always(f.opts.always)}function Qn(e,t){var n,r,i,s,o;for(n in e){r=v.camelCase(n),i=t[r],s=e[n],v.isArray(s)&&(i=s[1],s=e[n]=s[0]),n!==r&&(e[r]=s,delete e[n]),o=v.cssHooks[r];if(o&&"expand"in o){s=o.expand(s),delete e[r];for(n in s)n in e||(e[n]=s[n],t[n]=i)}else t[r]=i}}function Gn(e,t,n){var r,i,s,o,u,a,f,l,c,h=this,p=e.style,d={},m=[],g=e.nodeType&&Gt(e);n.queue||(l=v._queueHooks(e,"fx"),l.unqueued==null&&(l.unqueued=0,c=l.empty.fire,l.empty.fire=function(){l.unqueued||c()}),l.unqueued++,h.always(function(){h.always(function(){l.unqueued--,v.queue(e,"fx").length||l.empty.fire()})})),e.nodeType===1&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],v.css(e,"display")==="inline"&&v.css(e,"float")==="none"&&(!v.support.inlineBlockNeedsLayout||nn(e.nodeName)==="inline"?p.display="inline-block":p.zoom=1)),n.overflow&&(p.overflow="hidden",v.support.shrinkWrapBlocks||h.done(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t){s=t[r];if(Un.exec(s)){delete t[r],a=a||s==="toggle";if(s===(g?"hide":"show"))continue;m.push(r)}}o=m.length;if(o){u=v._data(e,"fxshow")||v._data(e,"fxshow",{}),"hidden"in u&&(g=u.hidden),a&&(u.hidden=!g),g?v(e).show():h.done(function(){v(e).hide()}),h.done(function(){var t;v.removeData(e,"fxshow",!0);for(t in d)v.style(e,t,d[t])});for(r=0;r<o;r++)i=m[r],f=h.createTween(i,g?u[i]:0),d[i]=u[i]||v.style(e,i),i in u||(u[i]=f.start,g&&(f.end=f.start,f.start=i==="width"||i==="height"?1:0))}}function Yn(e,t,n,r,i){return new Yn.prototype.init(e,t,n,r,i)}function Zn(e,t){var n,r={height:e},i=0;t=t?1:0;for(;i<4;i+=2-t)n=$t[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}function tr(e){return v.isWindow(e)?e:e.nodeType===9?e.defaultView||e.parentWindow:!1}var n,r,i=e.document,s=e.location,o=e.navigator,u=e.jQuery,a=e.$,f=Array.prototype.push,l=Array.prototype.slice,c=Array.prototype.indexOf,h=Object.prototype.toString,p=Object.prototype.hasOwnProperty,d=String.prototype.trim,v=function(e,t){return new v.fn.init(e,t,n)},m=/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,g=/\S/,y=/\s+/,b=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,w=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,E=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,S=/^[\],:{}\s]*$/,x=/(?:^|:|,)(?:\s*\[)+/g,T=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,N=/"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,C=/^-ms-/,k=/-([\da-z])/gi,L=function(e,t){return(t+"").toUpperCase()},A=function(){i.addEventListener?(i.removeEventListener("DOMContentLoaded",A,!1),v.ready()):i.readyState==="complete"&&(i.detachEvent("onreadystatechange",A),v.ready())},O={};v.fn=v.prototype={constructor:v,init:function(e,n,r){var s,o,u,a;if(!e)return this;if(e.nodeType)return this.context=this[0]=e,this.length=1,this;if(typeof e=="string"){e.charAt(0)==="<"&&e.charAt(e.length-1)===">"&&e.length>=3?s=[null,e,null]:s=w.exec(e);if(s&&(s[1]||!n)){if(s[1])return n=n instanceof v?n[0]:n,a=n&&n.nodeType?n.ownerDocument||n:i,e=v.parseHTML(s[1],a,!0),E.test(s[1])&&v.isPlainObject(n)&&this.attr.call(e,n,!0),v.merge(this,e);o=i.getElementById(s[2]);if(o&&o.parentNode){if(o.id!==s[2])return r.find(e);this.length=1,this[0]=o}return this.context=i,this.selector=e,this}return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e)}return v.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),v.makeArray(e,this))},selector:"",jquery:"1.8.3",length:0,size:function(){return this.length},toArray:function(){return l.call(this)},get:function(e){return e==null?this.toArray():e<0?this[this.length+e]:this[e]},pushStack:function(e,t,n){var r=v.merge(this.constructor(),e);return r.prevObject=this,r.context=this.context,t==="find"?r.selector=this.selector+(this.selector?" ":"")+n:t&&(r.selector=this.selector+"."+t+"("+n+")"),r},each:function(e,t){return v.each(this,e,t)},ready:function(e){return v.ready.promise().done(e),this},eq:function(e){return e=+e,e===-1?this.slice(e):this.slice(e,e+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(l.apply(this,arguments),"slice",l.call(arguments).join(","))},map:function(e){return this.pushStack(v.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:[].sort,splice:[].splice},v.fn.init.prototype=v.fn,v.extend=v.fn.extend=function(){var e,n,r,i,s,o,u=arguments[0]||{},a=1,f=arguments.length,l=!1;typeof u=="boolean"&&(l=u,u=arguments[1]||{},a=2),typeof u!="object"&&!v.isFunction(u)&&(u={}),f===a&&(u=this,--a);for(;a<f;a++)if((e=arguments[a])!=null)for(n in e){r=u[n],i=e[n];if(u===i)continue;l&&i&&(v.isPlainObject(i)||(s=v.isArray(i)))?(s?(s=!1,o=r&&v.isArray(r)?r:[]):o=r&&v.isPlainObject(r)?r:{},u[n]=v.extend(l,o,i)):i!==t&&(u[n]=i)}return u},v.extend({noConflict:function(t){return e.$===v&&(e.$=a),t&&e.jQuery===v&&(e.jQuery=u),v},isReady:!1,readyWait:1,holdReady:function(e){e?v.readyWait++:v.ready(!0)},ready:function(e){if(e===!0?--v.readyWait:v.isReady)return;if(!i.body)return setTimeout(v.ready,1);v.isReady=!0;if(e!==!0&&--v.readyWait>0)return;r.resolveWith(i,[v]),v.fn.trigger&&v(i).trigger("ready").off("ready")},isFunction:function(e){return v.type(e)==="function"},isArray:Array.isArray||function(e){return v.type(e)==="array"},isWindow:function(e){return e!=null&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return e==null?String(e):O[h.call(e)]||"object"},isPlainObject:function(e){if(!e||v.type(e)!=="object"||e.nodeType||v.isWindow(e))return!1;try{if(e.constructor&&!p.call(e,"constructor")&&!p.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(n){return!1}var r;for(r in e);return r===t||p.call(e,r)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw new Error(e)},parseHTML:function(e,t,n){var r;return!e||typeof e!="string"?null:(typeof t=="boolean"&&(n=t,t=0),t=t||i,(r=E.exec(e))?[t.createElement(r[1])]:(r=v.buildFragment([e],t,n?null:[]),v.merge([],(r.cacheable?v.clone(r.fragment):r.fragment).childNodes)))},parseJSON:function(t){if(!t||typeof t!="string")return null;t=v.trim(t);if(e.JSON&&e.JSON.parse)return e.JSON.parse(t);if(S.test(t.replace(T,"@").replace(N,"]").replace(x,"")))return(new Function("return "+t))();v.error("Invalid JSON: "+t)},parseXML:function(n){var r,i;if(!n||typeof n!="string")return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(s){r=t}return(!r||!r.documentElement||r.getElementsByTagName("parsererror").length)&&v.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&g.test(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(C,"ms-").replace(k,L)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,n,r){var i,s=0,o=e.length,u=o===t||v.isFunction(e);if(r){if(u){for(i in e)if(n.apply(e[i],r)===!1)break}else for(;s<o;)if(n.apply(e[s++],r)===!1)break}else if(u){for(i in e)if(n.call(e[i],i,e[i])===!1)break}else for(;s<o;)if(n.call(e[s],s,e[s++])===!1)break;return e},trim:d&&!d.call("\ufeff\u00a0")?function(e){return e==null?"":d.call(e)}:function(e){return e==null?"":(e+"").replace(b,"")},makeArray:function(e,t){var n,r=t||[];return e!=null&&(n=v.type(e),e.length==null||n==="string"||n==="function"||n==="regexp"||v.isWindow(e)?f.call(r,e):v.merge(r,e)),r},inArray:function(e,t,n){var r;if(t){if(c)return c.call(t,e,n);r=t.length,n=n?n<0?Math.max(0,r+n):n:0;for(;n<r;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,s=0;if(typeof r=="number")for(;s<r;s++)e[i++]=n[s];else while(n[s]!==t)e[i++]=n[s++];return e.length=i,e},grep:function(e,t,n){var r,i=[],s=0,o=e.length;n=!!n;for(;s<o;s++)r=!!t(e[s],s),n!==r&&i.push(e[s]);return i},map:function(e,n,r){var i,s,o=[],u=0,a=e.length,f=e instanceof v||a!==t&&typeof a=="number"&&(a>0&&e[0]&&e[a-1]||a===0||v.isArray(e));if(f)for(;u<a;u++)i=n(e[u],u,r),i!=null&&(o[o.length]=i);else for(s in e)i=n(e[s],s,r),i!=null&&(o[o.length]=i);return o.concat.apply([],o)},guid:1,proxy:function(e,n){var r,i,s;return typeof n=="string"&&(r=e[n],n=e,e=r),v.isFunction(e)?(i=l.call(arguments,2),s=function(){return e.apply(n,i.concat(l.call(arguments)))},s.guid=e.guid=e.guid||v.guid++,s):t},access:function(e,n,r,i,s,o,u){var a,f=r==null,l=0,c=e.length;if(r&&typeof r=="object"){for(l in r)v.access(e,n,l,r[l],1,o,i);s=1}else if(i!==t){a=u===t&&v.isFunction(i),f&&(a?(a=n,n=function(e,t,n){return a.call(v(e),n)}):(n.call(e,i),n=null));if(n)for(;l<c;l++)n(e[l],r,a?i.call(e[l],l,n(e[l],r)):i,u);s=1}return s?e:f?n.call(e):c?n(e[0],r):o},now:function(){return(new Date).getTime()}}),v.ready.promise=function(t){if(!r){r=v.Deferred();if(i.readyState==="complete")setTimeout(v.ready,1);else if(i.addEventListener)i.addEventListener("DOMContentLoaded",A,!1),e.addEventListener("load",v.ready,!1);else{i.attachEvent("onreadystatechange",A),e.attachEvent("onload",v.ready);var n=!1;try{n=e.frameElement==null&&i.documentElement}catch(s){}n&&n.doScroll&&function o(){if(!v.isReady){try{n.doScroll("left")}catch(e){return setTimeout(o,50)}v.ready()}}()}}return r.promise(t)},v.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(e,t){O["[object "+t+"]"]=t.toLowerCase()}),n=v(i);var M={};v.Callbacks=function(e){e=typeof e=="string"?M[e]||_(e):v.extend({},e);var n,r,i,s,o,u,a=[],f=!e.once&&[],l=function(t){n=e.memory&&t,r=!0,u=s||0,s=0,o=a.length,i=!0;for(;a&&u<o;u++)if(a[u].apply(t[0],t[1])===!1&&e.stopOnFalse){n=!1;break}i=!1,a&&(f?f.length&&l(f.shift()):n?a=[]:c.disable())},c={add:function(){if(a){var t=a.length;(function r(t){v.each(t,function(t,n){var i=v.type(n);i==="function"?(!e.unique||!c.has(n))&&a.push(n):n&&n.length&&i!=="string"&&r(n)})})(arguments),i?o=a.length:n&&(s=t,l(n))}return this},remove:function(){return a&&v.each(arguments,function(e,t){var n;while((n=v.inArray(t,a,n))>-1)a.splice(n,1),i&&(n<=o&&o--,n<=u&&u--)}),this},has:function(e){return v.inArray(e,a)>-1},empty:function(){return a=[],this},disable:function(){return a=f=n=t,this},disabled:function(){return!a},lock:function(){return f=t,n||c.disable(),this},locked:function(){return!f},fireWith:function(e,t){return t=t||[],t=[e,t.slice?t.slice():t],a&&(!r||f)&&(i?f.push(t):l(t)),this},fire:function(){return c.fireWith(this,arguments),this},fired:function(){return!!r}};return c},v.extend({Deferred:function(e){var t=[["resolve","done",v.Callbacks("once memory"),"resolved"],["reject","fail",v.Callbacks("once memory"),"rejected"],["notify","progress",v.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return v.Deferred(function(n){v.each(t,function(t,r){var s=r[0],o=e[t];i[r[1]](v.isFunction(o)?function(){var e=o.apply(this,arguments);e&&v.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[s+"With"](this===i?n:this,[e])}:n[s])}),e=null}).promise()},promise:function(e){return e!=null?v.extend(e,r):r}},i={};return r.pipe=r.then,v.each(t,function(e,s){var o=s[2],u=s[3];r[s[1]]=o.add,u&&o.add(function(){n=u},t[e^1][2].disable,t[2][2].lock),i[s[0]]=o.fire,i[s[0]+"With"]=o.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=l.call(arguments),r=n.length,i=r!==1||e&&v.isFunction(e.promise)?r:0,s=i===1?e:v.Deferred(),o=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?l.call(arguments):r,n===u?s.notifyWith(t,n):--i||s.resolveWith(t,n)}},u,a,f;if(r>1){u=new Array(r),a=new Array(r),f=new Array(r);for(;t<r;t++)n[t]&&v.isFunction(n[t].promise)?n[t].promise().done(o(t,f,n)).fail(s.reject).progress(o(t,a,u)):--i}return i||s.resolveWith(f,n),s.promise()}}),v.support=function(){var t,n,r,s,o,u,a,f,l,c,h,p=i.createElement("div");p.setAttribute("className","t"),p.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=p.getElementsByTagName("*"),r=p.getElementsByTagName("a")[0];if(!n||!r||!n.length)return{};s=i.createElement("select"),o=s.appendChild(i.createElement("option")),u=p.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t={leadingWhitespace:p.firstChild.nodeType===3,tbody:!p.getElementsByTagName("tbody").length,htmlSerialize:!!p.getElementsByTagName("link").length,style:/top/.test(r.getAttribute("style")),hrefNormalized:r.getAttribute("href")==="/a",opacity:/^0.5/.test(r.style.opacity),cssFloat:!!r.style.cssFloat,checkOn:u.value==="on",optSelected:o.selected,getSetAttribute:p.className!=="t",enctype:!!i.createElement("form").enctype,html5Clone:i.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",boxModel:i.compatMode==="CSS1Compat",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},u.checked=!0,t.noCloneChecked=u.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!o.disabled;try{delete p.test}catch(d){t.deleteExpando=!1}!p.addEventListener&&p.attachEvent&&p.fireEvent&&(p.attachEvent("onclick",h=function(){t.noCloneEvent=!1}),p.cloneNode(!0).fireEvent("onclick"),p.detachEvent("onclick",h)),u=i.createElement("input"),u.value="t",u.setAttribute("type","radio"),t.radioValue=u.value==="t",u.setAttribute("checked","checked"),u.setAttribute("name","t"),p.appendChild(u),a=i.createDocumentFragment(),a.appendChild(p.lastChild),t.checkClone=a.cloneNode(!0).cloneNode(!0).lastChild.checked,t.appendChecked=u.checked,a.removeChild(u),a.appendChild(p);if(p.attachEvent)for(l in{submit:!0,change:!0,focusin:!0})f="on"+l,c=f in p,c||(p.setAttribute(f,"return;"),c=typeof p[f]=="function"),t[l+"Bubbles"]=c;return v(function(){var n,r,s,o,u="padding:0;margin:0;border:0;display:block;overflow:hidden;",a=i.getElementsByTagName("body")[0];if(!a)return;n=i.createElement("div"),n.style.cssText="visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px",a.insertBefore(n,a.firstChild),r=i.createElement("div"),n.appendChild(r),r.innerHTML="<table><tr><td></td><td>t</td></tr></table>",s=r.getElementsByTagName("td"),s[0].style.cssText="padding:0;margin:0;border:0;display:none",c=s[0].offsetHeight===0,s[0].style.display="",s[1].style.display="none",t.reliableHiddenOffsets=c&&s[0].offsetHeight===0,r.innerHTML="",r.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",t.boxSizing=r.offsetWidth===4,t.doesNotIncludeMarginInBodyOffset=a.offsetTop!==1,e.getComputedStyle&&(t.pixelPosition=(e.getComputedStyle(r,null)||{}).top!=="1%",t.boxSizingReliable=(e.getComputedStyle(r,null)||{width:"4px"}).width==="4px",o=i.createElement("div"),o.style.cssText=r.style.cssText=u,o.style.marginRight=o.style.width="0",r.style.width="1px",r.appendChild(o),t.reliableMarginRight=!parseFloat((e.getComputedStyle(o,null)||{}).marginRight)),typeof r.style.zoom!="undefined"&&(r.innerHTML="",r.style.cssText=u+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=r.offsetWidth===3,r.style.display="block",r.style.overflow="visible",r.innerHTML="<div></div>",r.firstChild.style.width="5px",t.shrinkWrapBlocks=r.offsetWidth!==3,n.style.zoom=1),a.removeChild(n),n=r=s=o=null}),a.removeChild(p),n=r=s=o=u=a=p=null,t}();var D=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,P=/([A-Z])/g;v.extend({cache:{},deletedIds:[],uuid:0,expando:"jQuery"+(v.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(e){return e=e.nodeType?v.cache[e[v.expando]]:e[v.expando],!!e&&!B(e)},data:function(e,n,r,i){if(!v.acceptData(e))return;var s,o,u=v.expando,a=typeof n=="string",f=e.nodeType,l=f?v.cache:e,c=f?e[u]:e[u]&&u;if((!c||!l[c]||!i&&!l[c].data)&&a&&r===t)return;c||(f?e[u]=c=v.deletedIds.pop()||v.guid++:c=u),l[c]||(l[c]={},f||(l[c].toJSON=v.noop));if(typeof n=="object"||typeof n=="function")i?l[c]=v.extend(l[c],n):l[c].data=v.extend(l[c].data,n);return s=l[c],i||(s.data||(s.data={}),s=s.data),r!==t&&(s[v.camelCase(n)]=r),a?(o=s[n],o==null&&(o=s[v.camelCase(n)])):o=s,o},removeData:function(e,t,n){if(!v.acceptData(e))return;var r,i,s,o=e.nodeType,u=o?v.cache:e,a=o?e[v.expando]:v.expando;if(!u[a])return;if(t){r=n?u[a]:u[a].data;if(r){v.isArray(t)||(t in r?t=[t]:(t=v.camelCase(t),t in r?t=[t]:t=t.split(" ")));for(i=0,s=t.length;i<s;i++)delete r[t[i]];if(!(n?B:v.isEmptyObject)(r))return}}if(!n){delete u[a].data;if(!B(u[a]))return}o?v.cleanData([e],!0):v.support.deleteExpando||u!=u.window?delete u[a]:u[a]=null},_data:function(e,t,n){return v.data(e,t,n,!0)},acceptData:function(e){var t=e.nodeName&&v.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),v.fn.extend({data:function(e,n){var r,i,s,o,u,a=this[0],f=0,l=null;if(e===t){if(this.length){l=v.data(a);if(a.nodeType===1&&!v._data(a,"parsedAttrs")){s=a.attributes;for(u=s.length;f<u;f++)o=s[f].name,o.indexOf("data-")||(o=v.camelCase(o.substring(5)),H(a,o,l[o]));v._data(a,"parsedAttrs",!0)}}return l}return typeof e=="object"?this.each(function(){v.data(this,e)}):(r=e.split(".",2),r[1]=r[1]?"."+r[1]:"",i=r[1]+"!",v.access(this,function(n){if(n===t)return l=this.triggerHandler("getData"+i,[r[0]]),l===t&&a&&(l=v.data(a,e),l=H(a,e,l)),l===t&&r[1]?this.data(r[0]):l;r[1]=n,this.each(function(){var t=v(this);t.triggerHandler("setData"+i,r),v.data(this,e,n),t.triggerHandler("changeData"+i,r)})},null,n,arguments.length>1,null,!1))},removeData:function(e){return this.each(function(){v.removeData(this,e)})}}),v.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=v._data(e,t),n&&(!r||v.isArray(n)?r=v._data(e,t,v.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=v.queue(e,t),r=n.length,i=n.shift(),s=v._queueHooks(e,t),o=function(){v.dequeue(e,t)};i==="inprogress"&&(i=n.shift(),r--),i&&(t==="fx"&&n.unshift("inprogress"),delete s.stop,i.call(e,o,s)),!r&&s&&s.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return v._data(e,n)||v._data(e,n,{empty:v.Callbacks("once memory").add(function(){v.removeData(e,t+"queue",!0),v.removeData(e,n,!0)})})}}),v.fn.extend({queue:function(e,n){var r=2;return typeof e!="string"&&(n=e,e="fx",r--),arguments.length<r?v.queue(this[0],e):n===t?this:this.each(function(){var t=v.queue(this,e,n);v._queueHooks(this,e),e==="fx"&&t[0]!=="inprogress"&&v.dequeue(this,e)})},dequeue:function(e){return this.each(function(){v.dequeue(this,e)})},delay:function(e,t){return e=v.fx?v.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,s=v.Deferred(),o=this,u=this.length,a=function(){--i||s.resolveWith(o,[o])};typeof e!="string"&&(n=e,e=t),e=e||"fx";while(u--)r=v._data(o[u],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(a));return a(),s.promise(n)}});var j,F,I,q=/[\t\r\n]/g,R=/\r/g,U=/^(?:button|input)$/i,z=/^(?:button|input|object|select|textarea)$/i,W=/^a(?:rea|)$/i,X=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,V=v.support.getSetAttribute;v.fn.extend({attr:function(e,t){return v.access(this,v.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){v.removeAttr(this,e)})},prop:function(e,t){return v.access(this,v.prop,e,t,arguments.length>1)},removeProp:function(e){return e=v.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,s,o,u;if(v.isFunction(e))return this.each(function(t){v(this).addClass(e.call(this,t,this.className))});if(e&&typeof e=="string"){t=e.split(y);for(n=0,r=this.length;n<r;n++){i=this[n];if(i.nodeType===1)if(!i.className&&t.length===1)i.className=e;else{s=" "+i.className+" ";for(o=0,u=t.length;o<u;o++)s.indexOf(" "+t[o]+" ")<0&&(s+=t[o]+" ");i.className=v.trim(s)}}}return this},removeClass:function(e){var n,r,i,s,o,u,a;if(v.isFunction(e))return this.each(function(t){v(this).removeClass(e.call(this,t,this.className))});if(e&&typeof e=="string"||e===t){n=(e||"").split(y);for(u=0,a=this.length;u<a;u++){i=this[u];if(i.nodeType===1&&i.className){r=(" "+i.className+" ").replace(q," ");for(s=0,o=n.length;s<o;s++)while(r.indexOf(" "+n[s]+" ")>=0)r=r.replace(" "+n[s]+" "," ");i.className=e?v.trim(r):""}}}return this},toggleClass:function(e,t){var n=typeof e,r=typeof t=="boolean";return v.isFunction(e)?this.each(function(n){v(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if(n==="string"){var i,s=0,o=v(this),u=t,a=e.split(y);while(i=a[s++])u=r?u:!o.hasClass(i),o[u?"addClass":"removeClass"](i)}else if(n==="undefined"||n==="boolean")this.className&&v._data(this,"__className__",this.className),this.className=this.className||e===!1?"":v._data(this,"__className__")||""})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;n<r;n++)if(this[n].nodeType===1&&(" "+this[n].className+" ").replace(q," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,s=this[0];if(!arguments.length){if(s)return n=v.valHooks[s.type]||v.valHooks[s.nodeName.toLowerCase()],n&&"get"in n&&(r=n.get(s,"value"))!==t?r:(r=s.value,typeof r=="string"?r.replace(R,""):r==null?"":r);return}return i=v.isFunction(e),this.each(function(r){var s,o=v(this);if(this.nodeType!==1)return;i?s=e.call(this,r,o.val()):s=e,s==null?s="":typeof s=="number"?s+="":v.isArray(s)&&(s=v.map(s,function(e){return e==null?"":e+""})),n=v.valHooks[this.type]||v.valHooks[this.nodeName.toLowerCase()];if(!n||!("set"in n)||n.set(this,s,"value")===t)this.value=s})}}),v.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,s=e.type==="select-one"||i<0,o=s?null:[],u=s?i+1:r.length,a=i<0?u:s?i:0;for(;a<u;a++){n=r[a];if((n.selected||a===i)&&(v.support.optDisabled?!n.disabled:n.getAttribute("disabled")===null)&&(!n.parentNode.disabled||!v.nodeName(n.parentNode,"optgroup"))){t=v(n).val();if(s)return t;o.push(t)}}return o},set:function(e,t){var n=v.makeArray(t);return v(e).find("option").each(function(){this.selected=v.inArray(v(this).val(),n)>=0}),n.length||(e.selectedIndex=-1),n}}},attrFn:{},attr:function(e,n,r,i){var s,o,u,a=e.nodeType;if(!e||a===3||a===8||a===2)return;if(i&&v.isFunction(v.fn[n]))return v(e)[n](r);if(typeof e.getAttribute=="undefined")return v.prop(e,n,r);u=a!==1||!v.isXMLDoc(e),u&&(n=n.toLowerCase(),o=v.attrHooks[n]||(X.test(n)?F:j));if(r!==t){if(r===null){v.removeAttr(e,n);return}return o&&"set"in o&&u&&(s=o.set(e,r,n))!==t?s:(e.setAttribute(n,r+""),r)}return o&&"get"in o&&u&&(s=o.get(e,n))!==null?s:(s=e.getAttribute(n),s===null?t:s)},removeAttr:function(e,t){var n,r,i,s,o=0;if(t&&e.nodeType===1){r=t.split(y);for(;o<r.length;o++)i=r[o],i&&(n=v.propFix[i]||i,s=X.test(i),s||v.attr(e,i,""),e.removeAttribute(V?i:n),s&&n in e&&(e[n]=!1))}},attrHooks:{type:{set:function(e,t){if(U.test(e.nodeName)&&e.parentNode)v.error("type property can't be changed");else if(!v.support.radioValue&&t==="radio"&&v.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}},value:{get:function(e,t){return j&&v.nodeName(e,"button")?j.get(e,t):t in e?e.value:null},set:function(e,t,n){if(j&&v.nodeName(e,"button"))return j.set(e,t,n);e.value=t}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(e,n,r){var i,s,o,u=e.nodeType;if(!e||u===3||u===8||u===2)return;return o=u!==1||!v.isXMLDoc(e),o&&(n=v.propFix[n]||n,s=v.propHooks[n]),r!==t?s&&"set"in s&&(i=s.set(e,r,n))!==t?i:e[n]=r:s&&"get"in s&&(i=s.get(e,n))!==null?i:e[n]},propHooks:{tabIndex:{get:function(e){var n=e.getAttributeNode("tabindex");return n&&n.specified?parseInt(n.value,10):z.test(e.nodeName)||W.test(e.nodeName)&&e.href?0:t}}}}),F={get:function(e,n){var r,i=v.prop(e,n);return i===!0||typeof i!="boolean"&&(r=e.getAttributeNode(n))&&r.nodeValue!==!1?n.toLowerCase():t},set:function(e,t,n){var r;return t===!1?v.removeAttr(e,n):(r=v.propFix[n]||n,r in e&&(e[r]=!0),e.setAttribute(n,n.toLowerCase())),n}},V||(I={name:!0,id:!0,coords:!0},j=v.valHooks.button={get:function(e,n){var r;return r=e.getAttributeNode(n),r&&(I[n]?r.value!=="":r.specified)?r.value:t},set:function(e,t,n){var r=e.getAttributeNode(n);return r||(r=i.createAttribute(n),e.setAttributeNode(r)),r.value=t+""}},v.each(["width","height"],function(e,t){v.attrHooks[t]=v.extend(v.attrHooks[t],{set:function(e,n){if(n==="")return e.setAttribute(t,"auto"),n}})}),v.attrHooks.contenteditable={get:j.get,set:function(e,t,n){t===""&&(t="false"),j.set(e,t,n)}}),v.support.hrefNormalized||v.each(["href","src","width","height"],function(e,n){v.attrHooks[n]=v.extend(v.attrHooks[n],{get:function(e){var r=e.getAttribute(n,2);return r===null?t:r}})}),v.support.style||(v.attrHooks.style={get:function(e){return e.style.cssText.toLowerCase()||t},set:function(e,t){return e.style.cssText=t+""}}),v.support.optSelected||(v.propHooks.selected=v.extend(v.propHooks.selected,{get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}})),v.support.enctype||(v.propFix.enctype="encoding"),v.support.checkOn||v.each(["radio","checkbox"],function(){v.valHooks[this]={get:function(e){return e.getAttribute("value")===null?"on":e.value}}}),v.each(["radio","checkbox"],function(){v.valHooks[this]=v.extend(v.valHooks[this],{set:function(e,t){if(v.isArray(t))return e.checked=v.inArray(v(e).val(),t)>=0}})});var $=/^(?:textarea|input|select)$/i,J=/^([^\.]*|)(?:\.(.+)|)$/,K=/(?:^|\s)hover(\.\S+|)\b/,Q=/^key/,G=/^(?:mouse|contextmenu)|click/,Y=/^(?:focusinfocus|focusoutblur)$/,Z=function(e){return v.event.special.hover?e:e.replace(K,"mouseenter$1 mouseleave$1")};v.event={add:function(e,n,r,i,s){var o,u,a,f,l,c,h,p,d,m,g;if(e.nodeType===3||e.nodeType===8||!n||!r||!(o=v._data(e)))return;r.handler&&(d=r,r=d.handler,s=d.selector),r.guid||(r.guid=v.guid++),a=o.events,a||(o.events=a={}),u=o.handle,u||(o.handle=u=function(e){return typeof v=="undefined"||!!e&&v.event.triggered===e.type?t:v.event.dispatch.apply(u.elem,arguments)},u.elem=e),n=v.trim(Z(n)).split(" ");for(f=0;f<n.length;f++){l=J.exec(n[f])||[],c=l[1],h=(l[2]||"").split(".").sort(),g=v.event.special[c]||{},c=(s?g.delegateType:g.bindType)||c,g=v.event.special[c]||{},p=v.extend({type:c,origType:l[1],data:i,handler:r,guid:r.guid,selector:s,needsContext:s&&v.expr.match.needsContext.test(s),namespace:h.join(".")},d),m=a[c];if(!m){m=a[c]=[],m.delegateCount=0;if(!g.setup||g.setup.call(e,i,h,u)===!1)e.addEventListener?e.addEventListener(c,u,!1):e.attachEvent&&e.attachEvent("on"+c,u)}g.add&&(g.add.call(e,p),p.handler.guid||(p.handler.guid=r.guid)),s?m.splice(m.delegateCount++,0,p):m.push(p),v.event.global[c]=!0}e=null},global:{},remove:function(e,t,n,r,i){var s,o,u,a,f,l,c,h,p,d,m,g=v.hasData(e)&&v._data(e);if(!g||!(h=g.events))return;t=v.trim(Z(t||"")).split(" ");for(s=0;s<t.length;s++){o=J.exec(t[s])||[],u=a=o[1],f=o[2];if(!u){for(u in h)v.event.remove(e,u+t[s],n,r,!0);continue}p=v.event.special[u]||{},u=(r?p.delegateType:p.bindType)||u,d=h[u]||[],l=d.length,f=f?new RegExp("(^|\\.)"+f.split(".").sort().join("\\.(?:.*\\.|)")+"(\\.|$)"):null;for(c=0;c<d.length;c++)m=d[c],(i||a===m.origType)&&(!n||n.guid===m.guid)&&(!f||f.test(m.namespace))&&(!r||r===m.selector||r==="**"&&m.selector)&&(d.splice(c--,1),m.selector&&d.delegateCount--,p.remove&&p.remove.call(e,m));d.length===0&&l!==d.length&&((!p.teardown||p.teardown.call(e,f,g.handle)===!1)&&v.removeEvent(e,u,g.handle),delete h[u])}v.isEmptyObject(h)&&(delete g.handle,v.removeData(e,"events",!0))},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(n,r,s,o){if(!s||s.nodeType!==3&&s.nodeType!==8){var u,a,f,l,c,h,p,d,m,g,y=n.type||n,b=[];if(Y.test(y+v.event.triggered))return;y.indexOf("!")>=0&&(y=y.slice(0,-1),a=!0),y.indexOf(".")>=0&&(b=y.split("."),y=b.shift(),b.sort());if((!s||v.event.customEvent[y])&&!v.event.global[y])return;n=typeof n=="object"?n[v.expando]?n:new v.Event(y,n):new v.Event(y),n.type=y,n.isTrigger=!0,n.exclusive=a,n.namespace=b.join("."),n.namespace_re=n.namespace?new RegExp("(^|\\.)"+b.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,h=y.indexOf(":")<0?"on"+y:"";if(!s){u=v.cache;for(f in u)u[f].events&&u[f].events[y]&&v.event.trigger(n,r,u[f].handle.elem,!0);return}n.result=t,n.target||(n.target=s),r=r!=null?v.makeArray(r):[],r.unshift(n),p=v.event.special[y]||{};if(p.trigger&&p.trigger.apply(s,r)===!1)return;m=[[s,p.bindType||y]];if(!o&&!p.noBubble&&!v.isWindow(s)){g=p.delegateType||y,l=Y.test(g+y)?s:s.parentNode;for(c=s;l;l=l.parentNode)m.push([l,g]),c=l;c===(s.ownerDocument||i)&&m.push([c.defaultView||c.parentWindow||e,g])}for(f=0;f<m.length&&!n.isPropagationStopped();f++)l=m[f][0],n.type=m[f][1],d=(v._data(l,"events")||{})[n.type]&&v._data(l,"handle"),d&&d.apply(l,r),d=h&&l[h],d&&v.acceptData(l)&&d.apply&&d.apply(l,r)===!1&&n.preventDefault();return n.type=y,!o&&!n.isDefaultPrevented()&&(!p._default||p._default.apply(s.ownerDocument,r)===!1)&&(y!=="click"||!v.nodeName(s,"a"))&&v.acceptData(s)&&h&&s[y]&&(y!=="focus"&&y!=="blur"||n.target.offsetWidth!==0)&&!v.isWindow(s)&&(c=s[h],c&&(s[h]=null),v.event.triggered=y,s[y](),v.event.triggered=t,c&&(s[h]=c)),n.result}return},dispatch:function(n){n=v.event.fix(n||e.event);var r,i,s,o,u,a,f,c,h,p,d=(v._data(this,"events")||{})[n.type]||[],m=d.delegateCount,g=l.call(arguments),y=!n.exclusive&&!n.namespace,b=v.event.special[n.type]||{},w=[];g[0]=n,n.delegateTarget=this;if(b.preDispatch&&b.preDispatch.call(this,n)===!1)return;if(m&&(!n.button||n.type!=="click"))for(s=n.target;s!=this;s=s.parentNode||this)if(s.disabled!==!0||n.type!=="click"){u={},f=[];for(r=0;r<m;r++)c=d[r],h=c.selector,u[h]===t&&(u[h]=c.needsContext?v(h,this).index(s)>=0:v.find(h,this,null,[s]).length),u[h]&&f.push(c);f.length&&w.push({elem:s,matches:f})}d.length>m&&w.push({elem:this,matches:d.slice(m)});for(r=0;r<w.length&&!n.isPropagationStopped();r++){a=w[r],n.currentTarget=a.elem;for(i=0;i<a.matches.length&&!n.isImmediatePropagationStopped();i++){c=a.matches[i];if(y||!n.namespace&&!c.namespace||n.namespace_re&&n.namespace_re.test(c.namespace))n.data=c.data,n.handleObj=c,o=((v.event.special[c.origType]||{}).handle||c.handler).apply(a.elem,g),o!==t&&(n.result=o,o===!1&&(n.preventDefault(),n.stopPropagation()))}}return b.postDispatch&&b.postDispatch.call(this,n),n.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return e.which==null&&(e.which=t.charCode!=null?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,s,o,u=n.button,a=n.fromElement;return e.pageX==null&&n.clientX!=null&&(r=e.target.ownerDocument||i,s=r.documentElement,o=r.body,e.pageX=n.clientX+(s&&s.scrollLeft||o&&o.scrollLeft||0)-(s&&s.clientLeft||o&&o.clientLeft||0),e.pageY=n.clientY+(s&&s.scrollTop||o&&o.scrollTop||0)-(s&&s.clientTop||o&&o.clientTop||0)),!e.relatedTarget&&a&&(e.relatedTarget=a===e.target?n.toElement:a),!e.which&&u!==t&&(e.which=u&1?1:u&2?3:u&4?2:0),e}},fix:function(e){if(e[v.expando])return e;var t,n,r=e,s=v.event.fixHooks[e.type]||{},o=s.props?this.props.concat(s.props):this.props;e=v.Event(r);for(t=o.length;t;)n=o[--t],e[n]=r[n];return e.target||(e.target=r.srcElement||i),e.target.nodeType===3&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,r):e},special:{load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(e,t,n){v.isWindow(this)&&(this.onbeforeunload=n)},teardown:function(e,t){this.onbeforeunload===t&&(this.onbeforeunload=null)}}},simulate:function(e,t,n,r){var i=v.extend(new v.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?v.event.trigger(i,null,t):v.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},v.event.handle=v.event.dispatch,v.removeEvent=i.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]=="undefined"&&(e[r]=null),e.detachEvent(r,n))},v.Event=function(e,t){if(!(this instanceof v.Event))return new v.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?tt:et):this.type=e,t&&v.extend(this,t),this.timeStamp=e&&e.timeStamp||v.now(),this[v.expando]=!0},v.Event.prototype={preventDefault:function(){this.isDefaultPrevented=tt;var e=this.originalEvent;if(!e)return;e.preventDefault?e.preventDefault():e.returnValue=!1},stopPropagation:function(){this.isPropagationStopped=tt;var e=this.originalEvent;if(!e)return;e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=tt,this.stopPropagation()},isDefaultPrevented:et,isPropagationStopped:et,isImmediatePropagationStopped:et},v.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){v.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,s=e.handleObj,o=s.selector;if(!i||i!==r&&!v.contains(r,i))e.type=s.origType,n=s.handler.apply(this,arguments),e.type=t;return n}}}),v.support.submitBubbles||(v.event.special.submit={setup:function(){if(v.nodeName(this,"form"))return!1;v.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=v.nodeName(n,"input")||v.nodeName(n,"button")?n.form:t;r&&!v._data(r,"_submit_attached")&&(v.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),v._data(r,"_submit_attached",!0))})},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&v.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){if(v.nodeName(this,"form"))return!1;v.event.remove(this,"._submit")}}),v.support.changeBubbles||(v.event.special.change={setup:function(){if($.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")v.event.add(this,"propertychange._change",function(e){e.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),v.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),v.event.simulate("change",this,e,!0)});return!1}v.event.add(this,"beforeactivate._change",function(e){var t=e.target;$.test(t.nodeName)&&!v._data(t,"_change_attached")&&(v.event.add(t,"change._change",function(e){this.parentNode&&!e.isSimulated&&!e.isTrigger&&v.event.simulate("change",this.parentNode,e,!0)}),v._data(t,"_change_attached",!0))})},handle:function(e){var t=e.target;if(this!==t||e.isSimulated||e.isTrigger||t.type!=="radio"&&t.type!=="checkbox")return e.handleObj.handler.apply(this,arguments)},teardown:function(){return v.event.remove(this,"._change"),!$.test(this.nodeName)}}),v.support.focusinBubbles||v.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){v.event.simulate(t,e.target,v.event.fix(e),!0)};v.event.special[t]={setup:function(){n++===0&&i.addEventListener(e,r,!0)},teardown:function(){--n===0&&i.removeEventListener(e,r,!0)}}}),v.fn.extend({on:function(e,n,r,i,s){var o,u;if(typeof e=="object"){typeof n!="string"&&(r=r||n,n=t);for(u in e)this.on(u,n,r,e[u],s);return this}r==null&&i==null?(i=n,r=n=t):i==null&&(typeof n=="string"?(i=r,r=t):(i=r,r=n,n=t));if(i===!1)i=et;else if(!i)return this;return s===1&&(o=i,i=function(e){return v().off(e),o.apply(this,arguments)},i.guid=o.guid||(o.guid=v.guid++)),this.each(function(){v.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,s;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,v(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if(typeof e=="object"){for(s in e)this.off(s,n,e[s]);return this}if(n===!1||typeof n=="function")r=n,n=t;return r===!1&&(r=et),this.each(function(){v.event.remove(this,e,r,n)})},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},live:function(e,t,n){return v(this.context).on(e,this.selector,t,n),this},die:function(e,t){return v(this.context).off(e,this.selector||"**",t),this},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return arguments.length===1?this.off(e,"**"):this.off(t,e||"**",n)},trigger:function(e,t){return this.each(function(){v.event.trigger(e,t,this)})},triggerHandler:function(e,t){if(this[0])return v.event.trigger(e,t,this[0],!0)},toggle:function(e){var t=arguments,n=e.guid||v.guid++,r=0,i=function(n){var i=(v._data(this,"lastToggle"+e.guid)||0)%r;return v._data(this,"lastToggle"+e.guid,i+1),n.preventDefault(),t[i].apply(this,arguments)||!1};i.guid=n;while(r<t.length)t[r++].guid=n;return this.click(i)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),v.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){v.fn[t]=function(e,n){return n==null&&(n=e,e=null),arguments.length>0?this.on(t,null,e,n):this.trigger(t)},Q.test(t)&&(v.event.fixHooks[t]=v.event.keyHooks),G.test(t)&&(v.event.fixHooks[t]=v.event.mouseHooks)}),function(e,t){function nt(e,t,n,r){n=n||[],t=t||g;var i,s,a,f,l=t.nodeType;if(!e||typeof e!="string")return n;if(l!==1&&l!==9)return[];a=o(t);if(!a&&!r)if(i=R.exec(e))if(f=i[1]){if(l===9){s=t.getElementById(f);if(!s||!s.parentNode)return n;if(s.id===f)return n.push(s),n}else if(t.ownerDocument&&(s=t.ownerDocument.getElementById(f))&&u(t,s)&&s.id===f)return n.push(s),n}else{if(i[2])return S.apply(n,x.call(t.getElementsByTagName(e),0)),n;if((f=i[3])&&Z&&t.getElementsByClassName)return S.apply(n,x.call(t.getElementsByClassName(f),0)),n}return vt(e.replace(j,"$1"),t,n,r,a)}function rt(e){return function(t){var n=t.nodeName.toLowerCase();return n==="input"&&t.type===e}}function it(e){return function(t){var n=t.nodeName.toLowerCase();return(n==="input"||n==="button")&&t.type===e}}function st(e){return N(function(t){return t=+t,N(function(n,r){var i,s=e([],n.length,t),o=s.length;while(o--)n[i=s[o]]&&(n[i]=!(r[i]=n[i]))})})}function ot(e,t,n){if(e===t)return n;var r=e.nextSibling;while(r){if(r===t)return-1;r=r.nextSibling}return 1}function ut(e,t){var n,r,s,o,u,a,f,l=L[d][e+" "];if(l)return t?0:l.slice(0);u=e,a=[],f=i.preFilter;while(u){if(!n||(r=F.exec(u)))r&&(u=u.slice(r[0].length)||u),a.push(s=[]);n=!1;if(r=I.exec(u))s.push(n=new m(r.shift())),u=u.slice(n.length),n.type=r[0].replace(j," ");for(o in i.filter)(r=J[o].exec(u))&&(!f[o]||(r=f[o](r)))&&(s.push(n=new m(r.shift())),u=u.slice(n.length),n.type=o,n.matches=r);if(!n)break}return t?u.length:u?nt.error(e):L(e,a).slice(0)}function at(e,t,r){var i=t.dir,s=r&&t.dir==="parentNode",o=w++;return t.first?function(t,n,r){while(t=t[i])if(s||t.nodeType===1)return e(t,n,r)}:function(t,r,u){if(!u){var a,f=b+" "+o+" ",l=f+n;while(t=t[i])if(s||t.nodeType===1){if((a=t[d])===l)return t.sizset;if(typeof a=="string"&&a.indexOf(f)===0){if(t.sizset)return t}else{t[d]=l;if(e(t,r,u))return t.sizset=!0,t;t.sizset=!1}}}else while(t=t[i])if(s||t.nodeType===1)if(e(t,r,u))return t}}function ft(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function lt(e,t,n,r,i){var s,o=[],u=0,a=e.length,f=t!=null;for(;u<a;u++)if(s=e[u])if(!n||n(s,r,i))o.push(s),f&&t.push(u);return o}function ct(e,t,n,r,i,s){return r&&!r[d]&&(r=ct(r)),i&&!i[d]&&(i=ct(i,s)),N(function(s,o,u,a){var f,l,c,h=[],p=[],d=o.length,v=s||dt(t||"*",u.nodeType?[u]:u,[]),m=e&&(s||!t)?lt(v,h,e,u,a):v,g=n?i||(s?e:d||r)?[]:o:m;n&&n(m,g,u,a);if(r){f=lt(g,p),r(f,[],u,a),l=f.length;while(l--)if(c=f[l])g[p[l]]=!(m[p[l]]=c)}if(s){if(i||e){if(i){f=[],l=g.length;while(l--)(c=g[l])&&f.push(m[l]=c);i(null,g=[],f,a)}l=g.length;while(l--)(c=g[l])&&(f=i?T.call(s,c):h[l])>-1&&(s[f]=!(o[f]=c))}}else g=lt(g===o?g.splice(d,g.length):g),i?i(null,o,g,a):S.apply(o,g)})}function ht(e){var t,n,r,s=e.length,o=i.relative[e[0].type],u=o||i.relative[" "],a=o?1:0,f=at(function(e){return e===t},u,!0),l=at(function(e){return T.call(t,e)>-1},u,!0),h=[function(e,n,r){return!o&&(r||n!==c)||((t=n).nodeType?f(e,n,r):l(e,n,r))}];for(;a<s;a++)if(n=i.relative[e[a].type])h=[at(ft(h),n)];else{n=i.filter[e[a].type].apply(null,e[a].matches);if(n[d]){r=++a;for(;r<s;r++)if(i.relative[e[r].type])break;return ct(a>1&&ft(h),a>1&&e.slice(0,a-1).join("").replace(j,"$1"),n,a<r&&ht(e.slice(a,r)),r<s&&ht(e=e.slice(r)),r<s&&e.join(""))}h.push(n)}return ft(h)}function pt(e,t){var r=t.length>0,s=e.length>0,o=function(u,a,f,l,h){var p,d,v,m=[],y=0,w="0",x=u&&[],T=h!=null,N=c,C=u||s&&i.find.TAG("*",h&&a.parentNode||a),k=b+=N==null?1:Math.E;T&&(c=a!==g&&a,n=o.el);for(;(p=C[w])!=null;w++){if(s&&p){for(d=0;v=e[d];d++)if(v(p,a,f)){l.push(p);break}T&&(b=k,n=++o.el)}r&&((p=!v&&p)&&y--,u&&x.push(p))}y+=w;if(r&&w!==y){for(d=0;v=t[d];d++)v(x,m,a,f);if(u){if(y>0)while(w--)!x[w]&&!m[w]&&(m[w]=E.call(l));m=lt(m)}S.apply(l,m),T&&!u&&m.length>0&&y+t.length>1&&nt.uniqueSort(l)}return T&&(b=k,c=N),x};return o.el=0,r?N(o):o}function dt(e,t,n){var r=0,i=t.length;for(;r<i;r++)nt(e,t[r],n);return n}function vt(e,t,n,r,s){var o,u,f,l,c,h=ut(e),p=h.length;if(!r&&h.length===1){u=h[0]=h[0].slice(0);if(u.length>2&&(f=u[0]).type==="ID"&&t.nodeType===9&&!s&&i.relative[u[1].type]){t=i.find.ID(f.matches[0].replace($,""),t,s)[0];if(!t)return n;e=e.slice(u.shift().length)}for(o=J.POS.test(e)?-1:u.length-1;o>=0;o--){f=u[o];if(i.relative[l=f.type])break;if(c=i.find[l])if(r=c(f.matches[0].replace($,""),z.test(u[0].type)&&t.parentNode||t,s)){u.splice(o,1),e=r.length&&u.join("");if(!e)return S.apply(n,x.call(r,0)),n;break}}}return a(e,h)(r,t,s,n,z.test(e)),n}function mt(){}var n,r,i,s,o,u,a,f,l,c,h=!0,p="undefined",d=("sizcache"+Math.random()).replace(".",""),m=String,g=e.document,y=g.documentElement,b=0,w=0,E=[].pop,S=[].push,x=[].slice,T=[].indexOf||function(e){var t=0,n=this.length;for(;t<n;t++)if(this[t]===e)return t;return-1},N=function(e,t){return e[d]=t==null||t,e},C=function(){var e={},t=[];return N(function(n,r){return t.push(n)>i.cacheLength&&delete e[t.shift()],e[n+" "]=r},e)},k=C(),L=C(),A=C(),O="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",_=M.replace("w","w#"),D="([*^$|!~]?=)",P="\\["+O+"*("+M+")"+O+"*(?:"+D+O+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+_+")|)|)"+O+"*\\]",H=":("+M+")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:"+P+")|[^:]|\\\\.)*|.*))\\)|)",B=":(even|odd|eq|gt|lt|nth|first|last)(?:\\("+O+"*((?:-\\d)?\\d*)"+O+"*\\)|)(?=[^-]|$)",j=new RegExp("^"+O+"+|((?:^|[^\\\\])(?:\\\\.)*)"+O+"+$","g"),F=new RegExp("^"+O+"*,"+O+"*"),I=new RegExp("^"+O+"*([\\x20\\t\\r\\n\\f>+~])"+O+"*"),q=new RegExp(H),R=/^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,U=/^:not/,z=/[\x20\t\r\n\f]*[+~]/,W=/:not\($/,X=/h\d/i,V=/input|select|textarea|button/i,$=/\\(?!\\)/g,J={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),NAME:new RegExp("^\\[name=['\"]?("+M+")['\"]?\\]"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+H),POS:new RegExp(B,"i"),CHILD:new RegExp("^:(only|nth|first|last)-child(?:\\("+O+"*(even|odd|(([+-]|)(\\d*)n|)"+O+"*(?:([+-]|)"+O+"*(\\d+)|))"+O+"*\\)|)","i"),needsContext:new RegExp("^"+O+"*[>+~]|"+B,"i")},K=function(e){var t=g.createElement("div");try{return e(t)}catch(n){return!1}finally{t=null}},Q=K(function(e){return e.appendChild(g.createComment("")),!e.getElementsByTagName("*").length}),G=K(function(e){return e.innerHTML="<a href='#'></a>",e.firstChild&&typeof e.firstChild.getAttribute!==p&&e.firstChild.getAttribute("href")==="#"}),Y=K(function(e){e.innerHTML="<select></select>";var t=typeof e.lastChild.getAttribute("multiple");return t!=="boolean"&&t!=="string"}),Z=K(function(e){return e.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",!e.getElementsByClassName||!e.getElementsByClassName("e").length?!1:(e.lastChild.className="e",e.getElementsByClassName("e").length===2)}),et=K(function(e){e.id=d+0,e.innerHTML="<a name='"+d+"'></a><div name='"+d+"'></div>",y.insertBefore(e,y.firstChild);var t=g.getElementsByName&&g.getElementsByName(d).length===2+g.getElementsByName(d+0).length;return r=!g.getElementById(d),y.removeChild(e),t});try{x.call(y.childNodes,0)[0].nodeType}catch(tt){x=function(e){var t,n=[];for(;t=this[e];e++)n.push(t);return n}}nt.matches=function(e,t){return nt(e,null,null,t)},nt.matchesSelector=function(e,t){return nt(t,null,null,[e]).length>0},s=nt.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(i===1||i===9||i===11){if(typeof e.textContent=="string")return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=s(e)}else if(i===3||i===4)return e.nodeValue}else for(;t=e[r];r++)n+=s(t);return n},o=nt.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?t.nodeName!=="HTML":!1},u=nt.contains=y.contains?function(e,t){var n=e.nodeType===9?e.documentElement:e,r=t&&t.parentNode;return e===r||!!(r&&r.nodeType===1&&n.contains&&n.contains(r))}:y.compareDocumentPosition?function(e,t){return t&&!!(e.compareDocumentPosition(t)&16)}:function(e,t){while(t=t.parentNode)if(t===e)return!0;return!1},nt.attr=function(e,t){var n,r=o(e);return r||(t=t.toLowerCase()),(n=i.attrHandle[t])?n(e):r||Y?e.getAttribute(t):(n=e.getAttributeNode(t),n?typeof e[t]=="boolean"?e[t]?t:null:n.specified?n.value:null:null)},i=nt.selectors={cacheLength:50,createPseudo:N,match:J,attrHandle:G?{}:{href:function(e){return e.getAttribute("href",2)},type:function(e){return e.getAttribute("type")}},find:{ID:r?function(e,t,n){if(typeof t.getElementById!==p&&!n){var r=t.getElementById(e);return r&&r.parentNode?[r]:[]}}:function(e,n,r){if(typeof n.getElementById!==p&&!r){var i=n.getElementById(e);return i?i.id===e||typeof i.getAttributeNode!==p&&i.getAttributeNode("id").value===e?[i]:t:[]}},TAG:Q?function(e,t){if(typeof t.getElementsByTagName!==p)return t.getElementsByTagName(e)}:function(e,t){var n=t.getElementsByTagName(e);if(e==="*"){var r,i=[],s=0;for(;r=n[s];s++)r.nodeType===1&&i.push(r);return i}return n},NAME:et&&function(e,t){if(typeof t.getElementsByName!==p)return t.getElementsByName(name)},CLASS:Z&&function(e,t,n){if(typeof t.getElementsByClassName!==p&&!n)return t.getElementsByClassName(e)}},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace($,""),e[3]=(e[4]||e[5]||"").replace($,""),e[2]==="~="&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),e[1]==="nth"?(e[2]||nt.error(e[0]),e[3]=+(e[3]?e[4]+(e[5]||1):2*(e[2]==="even"||e[2]==="odd")),e[4]=+(e[6]+e[7]||e[2]==="odd")):e[2]&&nt.error(e[0]),e},PSEUDO:function(e){var t,n;if(J.CHILD.test(e[0]))return null;if(e[3])e[2]=e[3];else if(t=e[4])q.test(t)&&(n=ut(t,!0))&&(n=t.indexOf(")",t.length-n)-t.length)&&(t=t.slice(0,n),e[0]=e[0].slice(0,n)),e[2]=t;return e.slice(0,3)}},filter:{ID:r?function(e){return e=e.replace($,""),function(t){return t.getAttribute("id")===e}}:function(e){return e=e.replace($,""),function(t){var n=typeof t.getAttributeNode!==p&&t.getAttributeNode("id");return n&&n.value===e}},TAG:function(e){return e==="*"?function(){return!0}:(e=e.replace($,"").toLowerCase(),function(t){return t.nodeName&&t.nodeName.toLowerCase()===e})},CLASS:function(e){var t=k[d][e+" "];return t||(t=new RegExp("(^|"+O+")"+e+"("+O+"|$)"))&&k(e,function(e){return t.test(e.className||typeof e.getAttribute!==p&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r,i){var s=nt.attr(r,e);return s==null?t==="!=":t?(s+="",t==="="?s===n:t==="!="?s!==n:t==="^="?n&&s.indexOf(n)===0:t==="*="?n&&s.indexOf(n)>-1:t==="$="?n&&s.substr(s.length-n.length)===n:t==="~="?(" "+s+" ").indexOf(n)>-1:t==="|="?s===n||s.substr(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r){return e==="nth"?function(e){var t,i,s=e.parentNode;if(n===1&&r===0)return!0;if(s){i=0;for(t=s.firstChild;t;t=t.nextSibling)if(t.nodeType===1){i++;if(e===t)break}}return i-=r,i===n||i%n===0&&i/n>=0}:function(t){var n=t;switch(e){case"only":case"first":while(n=n.previousSibling)if(n.nodeType===1)return!1;if(e==="first")return!0;n=t;case"last":while(n=n.nextSibling)if(n.nodeType===1)return!1;return!0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||nt.error("unsupported pseudo: "+e);return r[d]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?N(function(e,n){var i,s=r(e,t),o=s.length;while(o--)i=T.call(e,s[o]),e[i]=!(n[i]=s[o])}):function(e){return r(e,0,n)}):r}},pseudos:{not:N(function(e){var t=[],n=[],r=a(e.replace(j,"$1"));return r[d]?N(function(e,t,n,i){var s,o=r(e,null,i,[]),u=e.length;while(u--)if(s=o[u])e[u]=!(t[u]=s)}):function(e,i,s){return t[0]=e,r(t,null,s,n),!n.pop()}}),has:N(function(e){return function(t){return nt(e,t).length>0}}),contains:N(function(e){return function(t){return(t.textContent||t.innerText||s(t)).indexOf(e)>-1}}),enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return t==="input"&&!!e.checked||t==="option"&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},parent:function(e){return!i.pseudos.empty(e)},empty:function(e){var t;e=e.firstChild;while(e){if(e.nodeName>"@"||(t=e.nodeType)===3||t===4)return!1;e=e.nextSibling}return!0},header:function(e){return X.test(e.nodeName)},text:function(e){var t,n;return e.nodeName.toLowerCase()==="input"&&(t=e.type)==="text"&&((n=e.getAttribute("type"))==null||n.toLowerCase()===t)},radio:rt("radio"),checkbox:rt("checkbox"),file:rt("file"),password:rt("password"),image:rt("image"),submit:it("submit"),reset:it("reset"),button:function(e){var t=e.nodeName.toLowerCase();return t==="input"&&e.type==="button"||t==="button"},input:function(e){return V.test(e.nodeName)},focus:function(e){var t=e.ownerDocument;return e===t.activeElement&&(!t.hasFocus||t.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},active:function(e){return e===e.ownerDocument.activeElement},first:st(function(){return[0]}),last:st(function(e,t){return[t-1]}),eq:st(function(e,t,n){return[n<0?n+t:n]}),even:st(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:st(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:st(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:st(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}},f=y.compareDocumentPosition?function(e,t){return e===t?(l=!0,0):(!e.compareDocumentPosition||!t.compareDocumentPosition?e.compareDocumentPosition:e.compareDocumentPosition(t)&4)?-1:1}:function(e,t){if(e===t)return l=!0,0;if(e.sourceIndex&&t.sourceIndex)return e.sourceIndex-t.sourceIndex;var n,r,i=[],s=[],o=e.parentNode,u=t.parentNode,a=o;if(o===u)return ot(e,t);if(!o)return-1;if(!u)return 1;while(a)i.unshift(a),a=a.parentNode;a=u;while(a)s.unshift(a),a=a.parentNode;n=i.length,r=s.length;for(var f=0;f<n&&f<r;f++)if(i[f]!==s[f])return ot(i[f],s[f]);return f===n?ot(e,s[f],-1):ot(i[f],t,1)},[0,0].sort(f),h=!l,nt.uniqueSort=function(e){var t,n=[],r=1,i=0;l=h,e.sort(f);if(l){for(;t=e[r];r++)t===e[r-1]&&(i=n.push(r));while(i--)e.splice(n[i],1)}return e},nt.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},a=nt.compile=function(e,t){var n,r=[],i=[],s=A[d][e+" "];if(!s){t||(t=ut(e)),n=t.length;while(n--)s=ht(t[n]),s[d]?r.push(s):i.push(s);s=A(e,pt(i,r))}return s},g.querySelectorAll&&function(){var e,t=vt,n=/'|\\/g,r=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,i=[":focus"],s=[":active"],u=y.matchesSelector||y.mozMatchesSelector||y.webkitMatchesSelector||y.oMatchesSelector||y.msMatchesSelector;K(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||i.push("\\["+O+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),e.querySelectorAll(":checked").length||i.push(":checked")}),K(function(e){e.innerHTML="<p test=''></p>",e.querySelectorAll("[test^='']").length&&i.push("[*^$]="+O+"*(?:\"\"|'')"),e.innerHTML="<input type='hidden'/>",e.querySelectorAll(":enabled").length||i.push(":enabled",":disabled")}),i=new RegExp(i.join("|")),vt=function(e,r,s,o,u){if(!o&&!u&&!i.test(e)){var a,f,l=!0,c=d,h=r,p=r.nodeType===9&&e;if(r.nodeType===1&&r.nodeName.toLowerCase()!=="object"){a=ut(e),(l=r.getAttribute("id"))?c=l.replace(n,"\\$&"):r.setAttribute("id",c),c="[id='"+c+"'] ",f=a.length;while(f--)a[f]=c+a[f].join("");h=z.test(e)&&r.parentNode||r,p=a.join(",")}if(p)try{return S.apply(s,x.call(h.querySelectorAll(p),0)),s}catch(v){}finally{l||r.removeAttribute("id")}}return t(e,r,s,o,u)},u&&(K(function(t){e=u.call(t,"div");try{u.call(t,"[test!='']:sizzle"),s.push("!=",H)}catch(n){}}),s=new RegExp(s.join("|")),nt.matchesSelector=function(t,n){n=n.replace(r,"='$1']");if(!o(t)&&!s.test(n)&&!i.test(n))try{var a=u.call(t,n);if(a||e||t.document&&t.document.nodeType!==11)return a}catch(f){}return nt(n,null,null,[t]).length>0})}(),i.pseudos.nth=i.pseudos.eq,i.filters=mt.prototype=i.pseudos,i.setFilters=new mt,nt.attr=v.attr,v.find=nt,v.expr=nt.selectors,v.expr[":"]=v.expr.pseudos,v.unique=nt.uniqueSort,v.text=nt.getText,v.isXMLDoc=nt.isXML,v.contains=nt.contains}(e);var nt=/Until$/,rt=/^(?:parents|prev(?:Until|All))/,it=/^.[^:#\[\.,]*$/,st=v.expr.match.needsContext,ot={children:!0,contents:!0,next:!0,prev:!0};v.fn.extend({find:function(e){var t,n,r,i,s,o,u=this;if(typeof e!="string")return v(e).filter(function(){for(t=0,n=u.length;t<n;t++)if(v.contains(u[t],this))return!0});o=this.pushStack("","find",e);for(t=0,n=this.length;t<n;t++){r=o.length,v.find(e,this[t],o);if(t>0)for(i=r;i<o.length;i++)for(s=0;s<r;s++)if(o[s]===o[i]){o.splice(i--,1);break}}return o},has:function(e){var t,n=v(e,this),r=n.length;return this.filter(function(){for(t=0;t<r;t++)if(v.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e,!1),"not",e)},filter:function(e){return this.pushStack(ft(this,e,!0),"filter",e)},is:function(e){return!!e&&(typeof e=="string"?st.test(e)?v(e,this.context).index(this[0])>=0:v.filter(e,this).length>0:this.filter(e).length>0)},closest:function(e,t){var n,r=0,i=this.length,s=[],o=st.test(e)||typeof e!="string"?v(e,t||this.context):0;for(;r<i;r++){n=this[r];while(n&&n.ownerDocument&&n!==t&&n.nodeType!==11){if(o?o.index(n)>-1:v.find.matchesSelector(n,e)){s.push(n);break}n=n.parentNode}}return s=s.length>1?v.unique(s):s,this.pushStack(s,"closest",e)},index:function(e){return e?typeof e=="string"?v.inArray(this[0],v(e)):v.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.prevAll().length:-1},add:function(e,t){var n=typeof e=="string"?v(e,t):v.makeArray(e&&e.nodeType?[e]:e),r=v.merge(this.get(),n);return this.pushStack(ut(n[0])||ut(r[0])?r:v.unique(r))},addBack:function(e){return this.add(e==null?this.prevObject:this.prevObject.filter(e))}}),v.fn.andSelf=v.fn.addBack,v.each({parent:function(e){var t=e.parentNode;return t&&t.nodeType!==11?t:null},parents:function(e){return v.dir(e,"parentNode")},parentsUntil:function(e,t,n){return v.dir(e,"parentNode",n)},next:function(e){return at(e,"nextSibling")},prev:function(e){return at(e,"previousSibling")},nextAll:function(e){return v.dir(e,"nextSibling")},prevAll:function(e){return v.dir(e,"previousSibling")},nextUntil:function(e,t,n){return v.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return v.dir(e,"previousSibling",n)},siblings:function(e){return v.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return v.sibling(e.firstChild)},contents:function(e){return v.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:v.merge([],e.childNodes)}},function(e,t){v.fn[e]=function(n,r){var i=v.map(this,t,n);return nt.test(e)||(r=n),r&&typeof r=="string"&&(i=v.filter(r,i)),i=this.length>1&&!ot[e]?v.unique(i):i,this.length>1&&rt.test(e)&&(i=i.reverse()),this.pushStack(i,e,l.call(arguments).join(","))}}),v.extend({filter:function(e,t,n){return n&&(e=":not("+e+")"),t.length===1?v.find.matchesSelector(t[0],e)?[t[0]]:[]:v.find.matches(e,t)},dir:function(e,n,r){var i=[],s=e[n];while(s&&s.nodeType!==9&&(r===t||s.nodeType!==1||!v(s).is(r)))s.nodeType===1&&i.push(s),s=s[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)e.nodeType===1&&e!==t&&n.push(e);return n}});var ct="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",ht=/ jQuery\d+="(?:null|\d+)"/g,pt=/^\s+/,dt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,vt=/<([\w:]+)/,mt=/<tbody/i,gt=/<|&#?\w+;/,yt=/<(?:script|style|link)/i,bt=/<(?:script|object|embed|option|style)/i,wt=new RegExp("<(?:"+ct+")[\\s/>]","i"),Et=/^(?:checkbox|radio)$/,St=/checked\s*(?:[^=]|=\s*.checked.)/i,xt=/\/(java|ecma)script/i,Tt=/^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,Nt={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},Ct=lt(i),kt=Ct.appendChild(i.createElement("div"));Nt.optgroup=Nt.option,Nt.tbody=Nt.tfoot=Nt.colgroup=Nt.caption=Nt.thead,Nt.th=Nt.td,v.support.htmlSerialize||(Nt._default=[1,"X<div>","</div>"]),v.fn.extend({text:function(e){return v.access(this,function(e){return e===t?v.text(this):this.empty().append((this[0]&&this[0].ownerDocument||i).createTextNode(e))},null,e,arguments.length)},wrapAll:function(e){if(v.isFunction(e))return this.each(function(t){v(this).wrapAll(e.call(this,t))});if(this[0]){var t=v(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&e.firstChild.nodeType===1)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return v.isFunction(e)?this.each(function(t){v(this).wrapInner(e.call(this,t))}):this.each(function(){var t=v(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=v.isFunction(e);return this.each(function(n){v(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){v.nodeName(this,"body")||v(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(e){(this.nodeType===1||this.nodeType===11)&&this.appendChild(e)})},prepend:function(){return this.domManip(arguments,!0,function(e){(this.nodeType===1||this.nodeType===11)&&this.insertBefore(e,this.firstChild)})},before:function(){if(!ut(this[0]))return this.domManip(arguments,!1,function(e){this.parentNode.insertBefore(e,this)});if(arguments.length){var e=v.clean(arguments);return this.pushStack(v.merge(e,this),"before",this.selector)}},after:function(){if(!ut(this[0]))return this.domManip(arguments,!1,function(e){this.parentNode.insertBefore(e,this.nextSibling)});if(arguments.length){var e=v.clean(arguments);return this.pushStack(v.merge(this,e),"after",this.selector)}},remove:function(e,t){var n,r=0;for(;(n=this[r])!=null;r++)if(!e||v.filter(e,[n]).length)!t&&n.nodeType===1&&(v.cleanData(n.getElementsByTagName("*")),v.cleanData([n])),n.parentNode&&n.parentNode.removeChild(n);return this},empty:function(){var e,t=0;for(;(e=this[t])!=null;t++){e.nodeType===1&&v.cleanData(e.getElementsByTagName("*"));while(e.firstChild)e.removeChild(e.firstChild)}return this},clone:function(e,t){return e=e==null?!1:e,t=t==null?e:t,this.map(function(){return v.clone(this,e,t)})},html:function(e){return v.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return n.nodeType===1?n.innerHTML.replace(ht,""):t;if(typeof e=="string"&&!yt.test(e)&&(v.support.htmlSerialize||!wt.test(e))&&(v.support.leadingWhitespace||!pt.test(e))&&!Nt[(vt.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(dt,"<$1></$2>");try{for(;r<i;r++)n=this[r]||{},n.nodeType===1&&(v.cleanData(n.getElementsByTagName("*")),n.innerHTML=e);n=0}catch(s){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(e){return ut(this[0])?this.length?this.pushStack(v(v.isFunction(e)?e():e),"replaceWith",e):this:v.isFunction(e)?this.each(function(t){var n=v(this),r=n.html();n.replaceWith(e.call(this,t,r))}):(typeof e!="string"&&(e=v(e).detach()),this.each(function(){var t=this.nextSibling,n=this.parentNode;v(this).remove(),t?v(t).before(e):v(n).append(e)}))},detach:function(e){return this.remove(e,!0)},domManip:function(e,n,r){e=[].concat.apply([],e);var i,s,o,u,a=0,f=e[0],l=[],c=this.length;if(!v.support.checkClone&&c>1&&typeof f=="string"&&St.test(f))return this.each(function(){v(this).domManip(e,n,r)});if(v.isFunction(f))return this.each(function(i){var s=v(this);e[0]=f.call(this,i,n?s.html():t),s.domManip(e,n,r)});if(this[0]){i=v.buildFragment(e,this,l),o=i.fragment,s=o.firstChild,o.childNodes.length===1&&(o=s);if(s){n=n&&v.nodeName(s,"tr");for(u=i.cacheable||c-1;a<c;a++)r.call(n&&v.nodeName(this[a],"table")?Lt(this[a],"tbody"):this[a],a===u?o:v.clone(o,!0,!0))}o=s=null,l.length&&v.each(l,function(e,t){t.src?v.ajax?v.ajax({url:t.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):v.error("no ajax"):v.globalEval((t.text||t.textContent||t.innerHTML||"").replace(Tt,"")),t.parentNode&&t.parentNode.removeChild(t)})}return this}}),v.buildFragment=function(e,n,r){var s,o,u,a=e[0];return n=n||i,n=!n.nodeType&&n[0]||n,n=n.ownerDocument||n,e.length===1&&typeof a=="string"&&a.length<512&&n===i&&a.charAt(0)==="<"&&!bt.test(a)&&(v.support.checkClone||!St.test(a))&&(v.support.html5Clone||!wt.test(a))&&(o=!0,s=v.fragments[a],u=s!==t),s||(s=n.createDocumentFragment(),v.clean(e,n,s,r),o&&(v.fragments[a]=u&&s)),{fragment:s,cacheable:o}},v.fragments={},v.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){v.fn[e]=function(n){var r,i=0,s=[],o=v(n),u=o.length,a=this.length===1&&this[0].parentNode;if((a==null||a&&a.nodeType===11&&a.childNodes.length===1)&&u===1)return o[t](this[0]),this;for(;i<u;i++)r=(i>0?this.clone(!0):this).get(),v(o[i])[t](r),s=s.concat(r);return this.pushStack(s,e,o.selector)}}),v.extend({clone:function(e,t,n){var r,i,s,o;v.support.html5Clone||v.isXMLDoc(e)||!wt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(kt.innerHTML=e.outerHTML,kt.removeChild(o=kt.firstChild));if((!v.support.noCloneEvent||!v.support.noCloneChecked)&&(e.nodeType===1||e.nodeType===11)&&!v.isXMLDoc(e)){Ot(e,o),r=Mt(e),i=Mt(o);for(s=0;r[s];++s)i[s]&&Ot(r[s],i[s])}if(t){At(e,o);if(n){r=Mt(e),i=Mt(o);for(s=0;r[s];++s)At(r[s],i[s])}}return r=i=null,o},clean:function(e,t,n,r){var s,o,u,a,f,l,c,h,p,d,m,g,y=t===i&&Ct,b=[];if(!t||typeof t.createDocumentFragment=="undefined")t=i;for(s=0;(u=e[s])!=null;s++){typeof u=="number"&&(u+="");if(!u)continue;if(typeof u=="string")if(!gt.test(u))u=t.createTextNode(u);else{y=y||lt(t),c=t.createElement("div"),y.appendChild(c),u=u.replace(dt,"<$1></$2>"),a=(vt.exec(u)||["",""])[1].toLowerCase(),f=Nt[a]||Nt._default,l=f[0],c.innerHTML=f[1]+u+f[2];while(l--)c=c.lastChild;if(!v.support.tbody){h=mt.test(u),p=a==="table"&&!h?c.firstChild&&c.firstChild.childNodes:f[1]==="<table>"&&!h?c.childNodes:[];for(o=p.length-1;o>=0;--o)v.nodeName(p[o],"tbody")&&!p[o].childNodes.length&&p[o].parentNode.removeChild(p[o])}!v.support.leadingWhitespace&&pt.test(u)&&c.insertBefore(t.createTextNode(pt.exec(u)[0]),c.firstChild),u=c.childNodes,c.parentNode.removeChild(c)}u.nodeType?b.push(u):v.merge(b,u)}c&&(u=c=y=null);if(!v.support.appendChecked)for(s=0;(u=b[s])!=null;s++)v.nodeName(u,"input")?_t(u):typeof u.getElementsByTagName!="undefined"&&v.grep(u.getElementsByTagName("input"),_t);if(n){m=function(e){if(!e.type||xt.test(e.type))return r?r.push(e.parentNode?e.parentNode.removeChild(e):e):n.appendChild(e)};for(s=0;(u=b[s])!=null;s++)if(!v.nodeName(u,"script")||!m(u))n.appendChild(u),typeof u.getElementsByTagName!="undefined"&&(g=v.grep(v.merge([],u.getElementsByTagName("script")),m),b.splice.apply(b,[s+1,0].concat(g)),s+=g.length)}return b},cleanData:function(e,t){var n,r,i,s,o=0,u=v.expando,a=v.cache,f=v.support.deleteExpando,l=v.event.special;for(;(i=e[o])!=null;o++)if(t||v.acceptData(i)){r=i[u],n=r&&a[r];if(n){if(n.events)for(s in n.events)l[s]?v.event.remove(i,s):v.removeEvent(i,s,n.handle);a[r]&&(delete a[r],f?delete i[u]:i.removeAttribute?i.removeAttribute(u):i[u]=null,v.deletedIds.push(r))}}}}),function(){var e,t;v.uaMatch=function(e){e=e.toLowerCase();var t=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0"}},e=v.uaMatch(o.userAgent),t={},e.browser&&(t[e.browser]=!0,t.version=e.version),t.chrome?t.webkit=!0:t.webkit&&(t.safari=!0),v.browser=t,v.sub=function(){function e(t,n){return new e.fn.init(t,n)}v.extend(!0,e,this),e.superclass=this,e.fn=e.prototype=this(),e.fn.constructor=e,e.sub=this.sub,e.fn.init=function(r,i){return i&&i instanceof v&&!(i instanceof e)&&(i=e(i)),v.fn.init.call(this,r,i,t)},e.fn.init.prototype=e.fn;var t=e(i);return e}}();var Dt,Pt,Ht,Bt=/alpha\([^)]*\)/i,jt=/opacity=([^)]*)/,Ft=/^(top|right|bottom|left)$/,It=/^(none|table(?!-c[ea]).+)/,qt=/^margin/,Rt=new RegExp("^("+m+")(.*)$","i"),Ut=new RegExp("^("+m+")(?!px)[a-z%]+$","i"),zt=new RegExp("^([-+])=("+m+")","i"),Wt={BODY:"block"},Xt={position:"absolute",visibility:"hidden",display:"block"},Vt={letterSpacing:0,fontWeight:400},$t=["Top","Right","Bottom","Left"],Jt=["Webkit","O","Moz","ms"],Kt=v.fn.toggle;v.fn.extend({css:function(e,n){return v.access(this,function(e,n,r){return r!==t?v.style(e,n,r):v.css(e,n)},e,n,arguments.length>1)},show:function(){return Yt(this,!0)},hide:function(){return Yt(this)},toggle:function(e,t){var n=typeof e=="boolean";return v.isFunction(e)&&v.isFunction(t)?Kt.apply(this,arguments):this.each(function(){(n?e:Gt(this))?v(this).show():v(this).hide()})}}),v.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Dt(e,"opacity");return n===""?"1":n}}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":v.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(!e||e.nodeType===3||e.nodeType===8||!e.style)return;var s,o,u,a=v.camelCase(n),f=e.style;n=v.cssProps[a]||(v.cssProps[a]=Qt(f,a)),u=v.cssHooks[n]||v.cssHooks[a];if(r===t)return u&&"get"in u&&(s=u.get(e,!1,i))!==t?s:f[n];o=typeof r,o==="string"&&(s=zt.exec(r))&&(r=(s[1]+1)*s[2]+parseFloat(v.css(e,n)),o="number");if(r==null||o==="number"&&isNaN(r))return;o==="number"&&!v.cssNumber[a]&&(r+="px");if(!u||!("set"in u)||(r=u.set(e,r,i))!==t)try{f[n]=r}catch(l){}},css:function(e,n,r,i){var s,o,u,a=v.camelCase(n);return n=v.cssProps[a]||(v.cssProps[a]=Qt(e.style,a)),u=v.cssHooks[n]||v.cssHooks[a],u&&"get"in u&&(s=u.get(e,!0,i)),s===t&&(s=Dt(e,n)),s==="normal"&&n in Vt&&(s=Vt[n]),r||i!==t?(o=parseFloat(s),r||v.isNumeric(o)?o||0:s):s},swap:function(e,t,n){var r,i,s={};for(i in t)s[i]=e.style[i],e.style[i]=t[i];r=n.call(e);for(i in t)e.style[i]=s[i];return r}}),e.getComputedStyle?Dt=function(t,n){var r,i,s,o,u=e.getComputedStyle(t,null),a=t.style;return u&&(r=u.getPropertyValue(n)||u[n],r===""&&!v.contains(t.ownerDocument,t)&&(r=v.style(t,n)),Ut.test(r)&&qt.test(n)&&(i=a.width,s=a.minWidth,o=a.maxWidth,a.minWidth=a.maxWidth=a.width=r,r=u.width,a.width=i,a.minWidth=s,a.maxWidth=o)),r}:i.documentElement.currentStyle&&(Dt=function(e,t){var n,r,i=e.currentStyle&&e.currentStyle[t],s=e.style;return i==null&&s&&s[t]&&(i=s[t]),Ut.test(i)&&!Ft.test(t)&&(n=s.left,r=e.runtimeStyle&&e.runtimeStyle.left,r&&(e.runtimeStyle.left=e.currentStyle.left),s.left=t==="fontSize"?"1em":i,i=s.pixelLeft+"px",s.left=n,r&&(e.runtimeStyle.left=r)),i===""?"auto":i}),v.each(["height","width"],function(e,t){v.cssHooks[t]={get:function(e,n,r){if(n)return e.offsetWidth===0&&It.test(Dt(e,"display"))?v.swap(e,Xt,function(){return tn(e,t,r)}):tn(e,t,r)},set:function(e,n,r){return Zt(e,n,r?en(e,t,r,v.support.boxSizing&&v.css(e,"boxSizing")==="border-box"):0)}}}),v.support.opacity||(v.cssHooks.opacity={get:function(e,t){return jt.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=v.isNumeric(t)?"alpha(opacity="+t*100+")":"",s=r&&r.filter||n.filter||"";n.zoom=1;if(t>=1&&v.trim(s.replace(Bt,""))===""&&n.removeAttribute){n.removeAttribute("filter");if(r&&!r.filter)return}n.filter=Bt.test(s)?s.replace(Bt,i):s+" "+i}}),v(function(){v.support.reliableMarginRight||(v.cssHooks.marginRight={get:function(e,t){return v.swap(e,{display:"inline-block"},function(){if(t)return Dt(e,"marginRight")})}}),!v.support.pixelPosition&&v.fn.position&&v.each(["top","left"],function(e,t){v.cssHooks[t]={get:function(e,n){if(n){var r=Dt(e,t);return Ut.test(r)?v(e).position()[t]+"px":r}}}})}),v.expr&&v.expr.filters&&(v.expr.filters.hidden=function(e){return e.offsetWidth===0&&e.offsetHeight===0||!v.support.reliableHiddenOffsets&&(e.style&&e.style.display||Dt(e,"display"))==="none"},v.expr.filters.visible=function(e){return!v.expr.filters.hidden(e)}),v.each({margin:"",padding:"",border:"Width"},function(e,t){v.cssHooks[e+t]={expand:function(n){var r,i=typeof n=="string"?n.split(" "):[n],s={};for(r=0;r<4;r++)s[e+$t[r]+t]=i[r]||i[r-2]||i[0];return s}},qt.test(e)||(v.cssHooks[e+t].set=Zt)});var rn=/%20/g,sn=/\[\]$/,on=/\r?\n/g,un=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,an=/^(?:select|textarea)/i;v.fn.extend({serialize:function(){return v.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?v.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||an.test(this.nodeName)||un.test(this.type))}).map(function(e,t){var n=v(this).val();return n==null?null:v.isArray(n)?v.map(n,function(e,n){return{name:t.name,value:e.replace(on,"\r\n")}}):{name:t.name,value:n.replace(on,"\r\n")}}).get()}}),v.param=function(e,n){var r,i=[],s=function(e,t){t=v.isFunction(t)?t():t==null?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};n===t&&(n=v.ajaxSettings&&v.ajaxSettings.traditional);if(v.isArray(e)||e.jquery&&!v.isPlainObject(e))v.each(e,function(){s(this.name,this.value)});else for(r in e)fn(r,e[r],n,s);return i.join("&").replace(rn,"+")};var ln,cn,hn=/#.*$/,pn=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,dn=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,vn=/^(?:GET|HEAD)$/,mn=/^\/\//,gn=/\?/,yn=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bn=/([?&])_=[^&]*/,wn=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,En=v.fn.load,Sn={},xn={},Tn=["*/"]+["*"];try{cn=s.href}catch(Nn){cn=i.createElement("a"),cn.href="",cn=cn.href}ln=wn.exec(cn.toLowerCase())||[],v.fn.load=function(e,n,r){if(typeof e!="string"&&En)return En.apply(this,arguments);if(!this.length)return this;var i,s,o,u=this,a=e.indexOf(" ");return a>=0&&(i=e.slice(a,e.length),e=e.slice(0,a)),v.isFunction(n)?(r=n,n=t):n&&typeof n=="object"&&(s="POST"),v.ajax({url:e,type:s,dataType:"html",data:n,complete:function(e,t){r&&u.each(r,o||[e.responseText,t,e])}}).done(function(e){o=arguments,u.html(i?v("<div>").append(e.replace(yn,"")).find(i):e)}),this},v.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(e,t){v.fn[t]=function(e){return this.on(t,e)}}),v.each(["get","post"],function(e,n){v[n]=function(e,r,i,s){return v.isFunction(r)&&(s=s||i,i=r,r=t),v.ajax({type:n,url:e,data:r,success:i,dataType:s})}}),v.extend({getScript:function(e,n){return v.get(e,t,n,"script")},getJSON:function(e,t,n){return v.get(e,t,n,"json")},ajaxSetup:function(e,t){return t?Ln(e,v.ajaxSettings):(t=e,e=v.ajaxSettings),Ln(e,t),e},ajaxSettings:{url:cn,isLocal:dn.test(ln[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":Tn},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":e.String,"text html":!0,"text json":v.parseJSON,"text xml":v.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:Cn(Sn),ajaxTransport:Cn(xn),ajax:function(e,n){function T(e,n,s,a){var l,y,b,w,S,T=n;if(E===2)return;E=2,u&&clearTimeout(u),o=t,i=a||"",x.readyState=e>0?4:0,s&&(w=An(c,x,s));if(e>=200&&e<300||e===304)c.ifModified&&(S=x.getResponseHeader("Last-Modified"),S&&(v.lastModified[r]=S),S=x.getResponseHeader("Etag"),S&&(v.etag[r]=S)),e===304?(T="notmodified",l=!0):(l=On(c,w),T=l.state,y=l.data,b=l.error,l=!b);else{b=T;if(!T||e)T="error",e<0&&(e=0)}x.status=e,x.statusText=(n||T)+"",l?d.resolveWith(h,[y,T,x]):d.rejectWith(h,[x,T,b]),x.statusCode(g),g=t,f&&p.trigger("ajax"+(l?"Success":"Error"),[x,c,l?y:b]),m.fireWith(h,[x,T]),f&&(p.trigger("ajaxComplete",[x,c]),--v.active||v.event.trigger("ajaxStop"))}typeof e=="object"&&(n=e,e=t),n=n||{};var r,i,s,o,u,a,f,l,c=v.ajaxSetup({},n),h=c.context||c,p=h!==c&&(h.nodeType||h instanceof v)?v(h):v.event,d=v.Deferred(),m=v.Callbacks("once memory"),g=c.statusCode||{},b={},w={},E=0,S="canceled",x={readyState:0,setRequestHeader:function(e,t){if(!E){var n=e.toLowerCase();e=w[n]=w[n]||e,b[e]=t}return this},getAllResponseHeaders:function(){return E===2?i:null},getResponseHeader:function(e){var n;if(E===2){if(!s){s={};while(n=pn.exec(i))s[n[1].toLowerCase()]=n[2]}n=s[e.toLowerCase()]}return n===t?null:n},overrideMimeType:function(e){return E||(c.mimeType=e),this},abort:function(e){return e=e||S,o&&o.abort(e),T(0,e),this}};d.promise(x),x.success=x.done,x.error=x.fail,x.complete=m.add,x.statusCode=function(e){if(e){var t;if(E<2)for(t in e)g[t]=[g[t],e[t]];else t=e[x.status],x.always(t)}return this},c.url=((e||c.url)+"").replace(hn,"").replace(mn,ln[1]+"//"),c.dataTypes=v.trim(c.dataType||"*").toLowerCase().split(y),c.crossDomain==null&&(a=wn.exec(c.url.toLowerCase()),c.crossDomain=!(!a||a[1]===ln[1]&&a[2]===ln[2]&&(a[3]||(a[1]==="http:"?80:443))==(ln[3]||(ln[1]==="http:"?80:443)))),c.data&&c.processData&&typeof c.data!="string"&&(c.data=v.param(c.data,c.traditional)),kn(Sn,c,n,x);if(E===2)return x;f=c.global,c.type=c.type.toUpperCase(),c.hasContent=!vn.test(c.type),f&&v.active++===0&&v.event.trigger("ajaxStart");if(!c.hasContent){c.data&&(c.url+=(gn.test(c.url)?"&":"?")+c.data,delete c.data),r=c.url;if(c.cache===!1){var N=v.now(),C=c.url.replace(bn,"$1_="+N);c.url=C+(C===c.url?(gn.test(c.url)?"&":"?")+"_="+N:"")}}(c.data&&c.hasContent&&c.contentType!==!1||n.contentType)&&x.setRequestHeader("Content-Type",c.contentType),c.ifModified&&(r=r||c.url,v.lastModified[r]&&x.setRequestHeader("If-Modified-Since",v.lastModified[r]),v.etag[r]&&x.setRequestHeader("If-None-Match",v.etag[r])),x.setRequestHeader("Accept",c.dataTypes[0]&&c.accepts[c.dataTypes[0]]?c.accepts[c.dataTypes[0]]+(c.dataTypes[0]!=="*"?", "+Tn+"; q=0.01":""):c.accepts["*"]);for(l in c.headers)x.setRequestHeader(l,c.headers[l]);if(!c.beforeSend||c.beforeSend.call(h,x,c)!==!1&&E!==2){S="abort";for(l in{success:1,error:1,complete:1})x[l](c[l]);o=kn(xn,c,n,x);if(!o)T(-1,"No Transport");else{x.readyState=1,f&&p.trigger("ajaxSend",[x,c]),c.async&&c.timeout>0&&(u=setTimeout(function(){x.abort("timeout")},c.timeout));try{E=1,o.send(b,T)}catch(k){if(!(E<2))throw k;T(-1,k)}}return x}return x.abort()},active:0,lastModified:{},etag:{}});var Mn=[],_n=/\?/,Dn=/(=)\?(?=&|$)|\?\?/,Pn=v.now();v.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Mn.pop()||v.expando+"_"+Pn++;return this[e]=!0,e}}),v.ajaxPrefilter("json jsonp",function(n,r,i){var s,o,u,a=n.data,f=n.url,l=n.jsonp!==!1,c=l&&Dn.test(f),h=l&&!c&&typeof a=="string"&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Dn.test(a);if(n.dataTypes[0]==="jsonp"||c||h)return s=n.jsonpCallback=v.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,o=e[s],c?n.url=f.replace(Dn,"$1"+s):h?n.data=a.replace(Dn,"$1"+s):l&&(n.url+=(_n.test(f)?"&":"?")+n.jsonp+"="+s),n.converters["script json"]=function(){return u||v.error(s+" was not called"),u[0]},n.dataTypes[0]="json",e[s]=function(){u=arguments},i.always(function(){e[s]=o,n[s]&&(n.jsonpCallback=r.jsonpCallback,Mn.push(s)),u&&v.isFunction(o)&&o(u[0]),u=o=t}),"script"}),v.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(e){return v.globalEval(e),e}}}),v.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),v.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=i.head||i.getElementsByTagName("head")[0]||i.documentElement;return{send:function(s,o){n=i.createElement("script"),n.async="async",e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,i){if(i||!n.readyState||/loaded|complete/.test(n.readyState))n.onload=n.onreadystatechange=null,r&&n.parentNode&&r.removeChild(n),n=t,i||o(200,"success")},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(0,1)}}}});var Hn,Bn=e.ActiveXObject?function(){for(var e in Hn)Hn[e](0,1)}:!1,jn=0;v.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&Fn()||In()}:Fn,function(e){v.extend(v.support,{ajax:!!e,cors:!!e&&"withCredentials"in e})}(v.ajaxSettings.xhr()),v.support.ajax&&v.ajaxTransport(function(n){if(!n.crossDomain||v.support.cors){var r;return{send:function(i,s){var o,u,a=n.xhr();n.username?a.open(n.type,n.url,n.async,n.username,n.password):a.open(n.type,n.url,n.async);if(n.xhrFields)for(u in n.xhrFields)a[u]=n.xhrFields[u];n.mimeType&&a.overrideMimeType&&a.overrideMimeType(n.mimeType),!n.crossDomain&&!i["X-Requested-With"]&&(i["X-Requested-With"]="XMLHttpRequest");try{for(u in i)a.setRequestHeader(u,i[u])}catch(f){}a.send(n.hasContent&&n.data||null),r=function(e,i){var u,f,l,c,h;try{if(r&&(i||a.readyState===4)){r=t,o&&(a.onreadystatechange=v.noop,Bn&&delete Hn[o]);if(i)a.readyState!==4&&a.abort();else{u=a.status,l=a.getAllResponseHeaders(),c={},h=a.responseXML,h&&h.documentElement&&(c.xml=h);try{c.text=a.responseText}catch(p){}try{f=a.statusText}catch(p){f=""}!u&&n.isLocal&&!n.crossDomain?u=c.text?200:404:u===1223&&(u=204)}}}catch(d){i||s(-1,d)}c&&s(u,f,c,l)},n.async?a.readyState===4?setTimeout(r,0):(o=++jn,Bn&&(Hn||(Hn={},v(e).unload(Bn)),Hn[o]=r),a.onreadystatechange=r):r()},abort:function(){r&&r(0,1)}}}});var qn,Rn,Un=/^(?:toggle|show|hide)$/,zn=new RegExp("^(?:([-+])=|)("+m+")([a-z%]*)$","i"),Wn=/queueHooks$/,Xn=[Gn],Vn={"*":[function(e,t){var n,r,i=this.createTween(e,t),s=zn.exec(t),o=i.cur(),u=+o||0,a=1,f=20;if(s){n=+s[2],r=s[3]||(v.cssNumber[e]?"":"px");if(r!=="px"&&u){u=v.css(i.elem,e,!0)||n||1;do a=a||".5",u/=a,v.style(i.elem,e,u+r);while(a!==(a=i.cur()/o)&&a!==1&&--f)}i.unit=r,i.start=u,i.end=s[1]?u+(s[1]+1)*n:n}return i}]};v.Animation=v.extend(Kn,{tweener:function(e,t){v.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;r<i;r++)n=e[r],Vn[n]=Vn[n]||[],Vn[n].unshift(t)},prefilter:function(e,t){t?Xn.unshift(e):Xn.push(e)}}),v.Tween=Yn,Yn.prototype={constructor:Yn,init:function(e,t,n,r,i,s){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=s||(v.cssNumber[n]?"":"px")},cur:function(){var e=Yn.propHooks[this.prop];return e&&e.get?e.get(this):Yn.propHooks._default.get(this)},run:function(e){var t,n=Yn.propHooks[this.prop];return this.options.duration?this.pos=t=v.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Yn.propHooks._default.set(this),this}},Yn.prototype.init.prototype=Yn.prototype,Yn.propHooks={_default:{get:function(e){var t;return e.elem[e.prop]==null||!!e.elem.style&&e.elem.style[e.prop]!=null?(t=v.css(e.elem,e.prop,!1,""),!t||t==="auto"?0:t):e.elem[e.prop]},set:function(e){v.fx.step[e.prop]?v.fx.step[e.prop](e):e.elem.style&&(e.elem.style[v.cssProps[e.prop]]!=null||v.cssHooks[e.prop])?v.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},Yn.propHooks.scrollTop=Yn.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},v.each(["toggle","show","hide"],function(e,t){var n=v.fn[t];v.fn[t]=function(r,i,s){return r==null||typeof r=="boolean"||!e&&v.isFunction(r)&&v.isFunction(i)?n.apply(this,arguments):this.animate(Zn(t,!0),r,i,s)}}),v.fn.extend({fadeTo:function(e,t,n,r){return this.filter(Gt).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=v.isEmptyObject(e),s=v.speed(t,n,r),o=function(){var t=Kn(this,v.extend({},e),s);i&&t.stop(!0)};return i||s.queue===!1?this.each(o):this.queue(s.queue,o)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return typeof e!="string"&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=e!=null&&e+"queueHooks",s=v.timers,o=v._data(this);if(n)o[n]&&o[n].stop&&i(o[n]);else for(n in o)o[n]&&o[n].stop&&Wn.test(n)&&i(o[n]);for(n=s.length;n--;)s[n].elem===this&&(e==null||s[n].queue===e)&&(s[n].anim.stop(r),t=!1,s.splice(n,1));(t||!r)&&v.dequeue(this,e)})}}),v.each({slideDown:Zn("show"),slideUp:Zn("hide"),slideToggle:Zn("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){v.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),v.speed=function(e,t,n){var r=e&&typeof e=="object"?v.extend({},e):{complete:n||!n&&t||v.isFunction(e)&&e,duration:e,easing:n&&t||t&&!v.isFunction(t)&&t};r.duration=v.fx.off?0:typeof r.duration=="number"?r.duration:r.duration in v.fx.speeds?v.fx.speeds[r.duration]:v.fx.speeds._default;if(r.queue==null||r.queue===!0)r.queue="fx";return r.old=r.complete,r.complete=function(){v.isFunction(r.old)&&r.old.call(this),r.queue&&v.dequeue(this,r.queue)},r},v.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},v.timers=[],v.fx=Yn.prototype.init,v.fx.tick=function(){var e,n=v.timers,r=0;qn=v.now();for(;r<n.length;r++)e=n[r],!e()&&n[r]===e&&n.splice(r--,1);n.length||v.fx.stop(),qn=t},v.fx.timer=function(e){e()&&v.timers.push(e)&&!Rn&&(Rn=setInterval(v.fx.tick,v.fx.interval))},v.fx.interval=13,v.fx.stop=function(){clearInterval(Rn),Rn=null},v.fx.speeds={slow:600,fast:200,_default:400},v.fx.step={},v.expr&&v.expr.filters&&(v.expr.filters.animated=function(e){return v.grep(v.timers,function(t){return e===t.elem}).length});var er=/^(?:body|html)$/i;v.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){v.offset.setOffset(this,e,t)});var n,r,i,s,o,u,a,f={top:0,left:0},l=this[0],c=l&&l.ownerDocument;if(!c)return;return(r=c.body)===l?v.offset.bodyOffset(l):(n=c.documentElement,v.contains(n,l)?(typeof l.getBoundingClientRect!="undefined"&&(f=l.getBoundingClientRect()),i=tr(c),s=n.clientTop||r.clientTop||0,o=n.clientLeft||r.clientLeft||0,u=i.pageYOffset||n.scrollTop,a=i.pageXOffset||n.scrollLeft,{top:f.top+u-s,left:f.left+a-o}):f)},v.offset={bodyOffset:function(e){var t=e.offsetTop,n=e.offsetLeft;return v.support.doesNotIncludeMarginInBodyOffset&&(t+=parseFloat(v.css(e,"marginTop"))||0,n+=parseFloat(v.css(e,"marginLeft"))||0),{top:t,left:n}},setOffset:function(e,t,n){var r=v.css(e,"position");r==="static"&&(e.style.position="relative");var i=v(e),s=i.offset(),o=v.css(e,"top"),u=v.css(e,"left"),a=(r==="absolute"||r==="fixed")&&v.inArray("auto",[o,u])>-1,f={},l={},c,h;a?(l=i.position(),c=l.top,h=l.left):(c=parseFloat(o)||0,h=parseFloat(u)||0),v.isFunction(t)&&(t=t.call(e,n,s)),t.top!=null&&(f.top=t.top-s.top+c),t.left!=null&&(f.left=t.left-s.left+h),"using"in t?t.using.call(e,f):i.css(f)}},v.fn.extend({position:function(){if(!this[0])return;var e=this[0],t=this.offsetParent(),n=this.offset(),r=er.test(t[0].nodeName)?{top:0,left:0}:t.offset();return n.top-=parseFloat(v.css(e,"marginTop"))||0,n.left-=parseFloat(v.css(e,"marginLeft"))||0,r.top+=parseFloat(v.css(t[0],"borderTopWidth"))||0,r.left+=parseFloat(v.css(t[0],"borderLeftWidth"))||0,{top:n.top-r.top,left:n.left-r.left}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||i.body;while(e&&!er.test(e.nodeName)&&v.css(e,"position")==="static")e=e.offsetParent;return e||i.body})}}),v.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);v.fn[e]=function(i){return v.access(this,function(e,i,s){var o=tr(e);if(s===t)return o?n in o?o[n]:o.document.documentElement[i]:e[i];o?o.scrollTo(r?v(o).scrollLeft():s,r?s:v(o).scrollTop()):e[i]=s},e,i,arguments.length,null)}}),v.each({Height:"height",Width:"width"},function(e,n){v.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){v.fn[i]=function(i,s){var o=arguments.length&&(r||typeof i!="boolean"),u=r||(i===!0||s===!0?"margin":"border");return v.access(this,function(n,r,i){var s;return v.isWindow(n)?n.document.documentElement["client"+e]:n.nodeType===9?(s=n.documentElement,Math.max(n.body["scroll"+e],s["scroll"+e],n.body["offset"+e],s["offset"+e],s["client"+e])):i===t?v.css(n,r,i,u):v.style(n,r,i,u)},n,o?i:t,o,null)}})}),e.jQuery=e.$=v,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return v})})(window);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.comalatech.workflow:cw-content', location = 'templates/com/comalatech/skull/vendors/aui/5.8.4/js/aui.min.js' */
!function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);var j=new Error("Cannot find module '"+g+"'");throw j.code="MODULE_NOT_FOUND",j}var k=c[g]={"exports":{}};b[g][0].call(k.exports,function(a){var c=b[g][1][a];return e(c?c:a)},k,k.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({"1":[function(a,b,c){"use strict";c.ATTR_IGNORE="data-skate-ignore"},{}],"2":[function(a,b,c){"use strict";c["default"]={"get":function(a,b){return a.__SKATE_DATA?a.__SKATE_DATA[b]:void 0},"set":function(a,b,c){return a.__SKATE_DATA||(a.__SKATE_DATA={}),a.__SKATE_DATA[b]=c,a}}},{}],"3":[function(a,b,c){"use strict";function d(a){for(var b=a.length,c=0;b>c;c++){var d=a[c],e=d.addedNodes,f=d.removedNodes;e&&e.length&&!j(e[0].parentNode)&&g(e),f&&f.length&&h(f)}}function e(){var a=new i(d);return a.observe(document,{"childList":!0,"subtree":!0}),a}var f=a("./globals")["default"],g=a("./lifecycle").initElements,h=a("./lifecycle").removeElements,i=a("./mutation-observer")["default"],j=a("./utils").getClosestIgnoredElement;c["default"]={"register":function(a){return a&&(i.fixIe(),this.unregister()),f.observer||(f.observer=e()),this},"unregister":function(){return f.observer&&(f.observer.disconnect(),f.observer=void 0),this}}},{"./globals":4,"./lifecycle":5,"./mutation-observer":6,"./utils":9}],"4":[function(a,b,c){"use strict";window.__skate||(window.__skate={"observer":void 0,"registry":{}}),c["default"]=window.__skate},{}],"5":[function(a,b,c){"use strict";function d(a,b,c){return q.get(a,b.id+":lifecycle:"+c)}function e(a,b,c,d){q.set(a,b.id+":lifecycle:"+c,!!d)}function f(a,b,c){return d(a,b,c)?!0:(e(a,b,c,!0),!1)}function g(a){var b=a.split(" ");return{"name":b.shift(),"delegate":b.join(" ")}}function h(a,b){function c(c,d,e,f){var g;b.attributes&&b.attributes[d]&&"function"==typeof b.attributes[d][c]?g=b.attributes[d][c]:b.attributes&&"function"==typeof b.attributes[d]?g=b.attributes[d]:"function"==typeof b.attributes&&(g=b.attributes),g&&g(a,{"type":c,"name":d,"newValue":e,"oldValue":f})}var d,e=a.attributes,f=[],g=e.length,h=new r(function(a){a.forEach(function(a){var b,d=a.attributeName,f=e[d];f&&null===a.oldValue?b="created":f&&null!==a.oldValue?b="updated":f||(b="removed"),c(b,d,f?f.value||f.nodeValue:void 0,a.oldValue)})});for(h.observe(a,{"attributes":!0,"attributeOldValue":!0}),d=0;g>d;d++)f.push(e[d]);for(d=0;g>d;d++){var i=f[d];c("created",i.nodeName,i.value||i.nodeValue)}}function i(a,b){function c(b,c){return function(d){if(!c)return b(a,d,a);for(var e=d.target;e&&e!==document&&e!==a.parentNode;){if(w.call(e,c))return b(a,d,e);e=e.parentNode}}}"object"==typeof b.events&&u(b.events,function(b,d){var e=g(d),f=!!e.delegate&&("blur"===e.name||"focus"===e.name);a.addEventListener(e.name,c(b,e.delegate),f)})}function j(a,b){f(a,b,"created")||(t(a,b.prototype,!0),b.template&&b.template(a),i(a,b),h(a,b),b.created&&b.created(a))}function k(a,b){f(a,b,"attached")||(a.removeAttribute(b.unresolvedAttribute),a.setAttribute(b.resolvedAttribute,""),b.attached&&b.attached(a))}function l(a,b){b.detached&&b.detached(a),e(a,b,"attached",!1)}function m(a,b){j(a,b),k(a,b)}function n(a){for(var b=a.length,c=0;b>c;c++){var d=a[c];if(1===d.nodeType&&!d.attributes[p]){for(var e=s.getForElement(d),f=e.length,g=0;f>g;g++)m(d,e[g]);var h=d.childNodes,i=h.length;i&&n(h)}}}function o(a){for(var b=a.length,c=0;b>c;c++){var d=a[c];if(1===d.nodeType){o(d.childNodes);for(var e=s.getForElement(d),f=e.length,g=0;f>g;g++)l(d,e[g])}}}var p=a("./constants").ATTR_IGNORE,q=a("./data")["default"],r=a("./mutation-observer")["default"],s=a("./registry")["default"],t=a("./utils").inherit,u=a("./utils").objEach,v=window.HTMLElement.prototype,w=v.matches||v.msMatchesSelector||v.webkitMatchesSelector||v.mozMatchesSelector||v.oMatchesSelector;c.triggerCreated=j,c.initElements=n,c.removeElements=o},{"./constants":1,"./data":2,"./mutation-observer":6,"./registry":7,"./utils":9}],"6":[function(a,b,c){"use strict";function d(a,b){return 1!==a.nodeType?!1:a.contains?a.contains(b):k.call(a,b)}function e(a,b){return{"addedNodes":null,"attributeName":null,"attributeNamespace":null,"nextSibling":null,"oldValue":null,"previousSibling":null,"removedNodes":null,"target":a,"type":b||"childList"}}function f(a,b){var c=a.childNodes;if(c)for(var d=c.length,e=0;d>e;e++){var g=c[e];b(g),f(g,b)}}function g(a){return l&&!m?new l(a):(this.callback=a,void(this.elements=[]))}var h=a("./utils").debounce,i=a("./utils").objEach,j=window.HTMLElement.prototype,k=window.HTMLElement.prototype.contains,l=window.MutationObserver||window.WebkitMutationObserver||window.MozMutationObserver,m=!1,n=window.navigator.userAgent.indexOf("Trident")>-1;g.fixIe=function(){if(n&&!m){var a=Object.getOwnPropertyDescriptor(j,"innerHTML");Object.defineProperty(j,"innerHTML",{"get":function(){return a.get.call(this)},"set":function(b){f(this,function(a){var b=document.createEvent("MutationEvent");b.initMutationEvent("DOMNodeRemoved",!0,!1,null,null,null,null,null),a.dispatchEvent(b)}),a.set.call(this,b)}}),m=!0}},Object.defineProperty(g,"isFixingIe",{"get":function(){return m}}),g.prototype={"observe":function(a,b){function c(a){n.push(a),p()}function f(a){var b=a.target;if(b){var c=a.type,f=b.parentNode;if(i(f)){var g=m&&"DOMNodeRemoved"===c,h=j&&d(j,b);(g||!h)&&(k&&k.target===f||o.push(k=e(f)),"DOMNodeInserted"===c?(k.addedNodes||(k.addedNodes=[]),k.addedNodes.push(b)):(k.removedNodes||(k.removedNodes=[]),k.removedNodes.push(b)),j=b)}}}function g(c){return b.attributes&&(b.subtree||c===a)}function i(c){return b.childList&&(b.subtree||c===a)}var j,k,l=this,n=[],o=[],p=h(function(){for(var a=n.length,b=0;a>b;b++)f(n[b]);l.callback(o),n=[],o=[],j=void 0,k=void 0}),q={},r=[],s=h(function(){var a=r.length;l.callback(r),r.splice(0,a)}),t={"target":a,"options":b,"insertHandler":c,"removeHandler":c,"attributeHandler":function(a){var c=a.target;if(g(c)){var d=a.attrName,f=a.prevValue,h=a.newValue,i=e(c,"attributes");i.attributeName=d,b.attributeOldValue&&(i.oldValue=q[d]||f||null),r.push(i),b.attributeOldValue&&(q[d]=h),s()}}};return this.elements.push(t),b.childList&&(a.addEventListener("DOMNodeInserted",t.insertHandler),a.addEventListener("DOMNodeRemoved",t.removeHandler)),b.attributes&&a.addEventListener("DOMAttrModified",t.attributeHandler),this},"disconnect":function(){return i(this.elements,function(a){a.target.removeEventListener("DOMNodeInserted",a.insertHandler),a.target.removeEventListener("DOMNodeRemoved",a.removeHandler),a.target.removeEventListener("DOMAttrModified",a.attributeHandler)}),this.elements=[],this}},c["default"]=g},{"./utils":9}],"7":[function(a,b,c){"use strict";function d(a){var b=a.classList;if(b)return b;var c=a.attributes;return c["class"]&&c["class"].nodeValue.split(/\s+/)||[]}function e(a,b){return g(f.registry,a)&&f.registry[a].type.indexOf(b)>-1}var f=a("./globals")["default"],g=a("./utils").hasOwn;c["default"]={"clear":function(){return f.registry={},this},"getForElement":function(a){var b,c,g=a.attributes,h=g.length,i=[],j=g.is,k=j&&(j.value||j.nodeValue),l=a.tagName.toLowerCase(),m=k||l;e(m,skate.types.TAG)&&(b=f.registry[m],c=b["extends"],k?l===c&&i.push(b):c||i.push(b));for(var n=0;h>n;n++){var o=g[n].nodeName;e(o,skate.types.ATTR)&&(b=f.registry[o],c=b["extends"],c&&l!==c||i.push(b))}for(var p=d(a),q=p.length,r=0;q>r;r++){var s=p[r];e(s,skate.types.CLASS)&&(b=f.registry[s],c=b["extends"],c&&l!==c||i.push(b))}return i},"has":function(a){return g(f.registry,a)},"set":function(a,b){if(this.has(a))throw new Error('A definition of type "'+b.type+'" with the ID of "'+a+'" already exists.');return f.registry[a]=b,this},"remove":function(a){return this.has(a)&&delete f.registry[a],this}}},{"./globals":4,"./utils":9}],"8":[function(a,b,c){"use strict";function d(a){function b(){var c,d=a["extends"],e=a.id;return d?(c=document.createElement(d),c.setAttribute("is",e)):c=document.createElement(e),a.prototype=b.prototype,g(c,a),c}return b.prototype=a.prototype,b}function e(a,b){if(b=k(b||{},e.defaults),b.id=a,i.has(b.id))throw new Error('A definition of type "'+b.type+'" with the ID of "'+a+'" already exists.');return i.set(b.id,b),m(),f.register(b.remove),b.type.indexOf(e.types.TAG)>-1?d(b):void 0}var f=a("./document-observer")["default"],g=a("./lifecycle").triggerCreated,h=a("./lifecycle").initElements,i=a("./registry")["default"],j=a("./utils").debounce,k=a("./utils").inherit,l=a("./version")["default"],m=j(function(){h(document.getElementsByTagName("html"))});e.init=function(a){return a?("string"==typeof a&&(a=document.querySelectorAll(a)),h("undefined"==typeof a.length?[a]:a),a):void 0},e.types={"ANY":"act","ATTR":"a","CLASS":"c","NOATTR":"ct","NOCLASS":"at","NOTAG":"ac","TAG":"t"},e.version=l,e.defaults={"attributes":void 0,"events":void 0,"extends":"","id":"","prototype":{},"resolvedAttribute":"resolved","template":void 0,"type":e.types.ANY,"unresolvedAttribute":"unresolved"},window.skate=e,"function"==typeof define&&define("aui/internal/skate",[],function(){return e}),"object"==typeof c&&(c["default"]=e),c["default"]=e},{"./document-observer":3,"./lifecycle":5,"./registry":7,"./utils":9,"./version":10}],"9":[function(a,b,c){"use strict";function d(a,b){return Object.prototype.hasOwnProperty.call(a,b)}function e(a){var b=!1;return function(){b||(b=!0,setTimeout(function(){b=!1,a()},1))}}function f(a){for(var b=a;b&&b!==document;){if(b.hasAttribute(i))return b;b=b.parentNode}}function g(a,b,c){for(var d=Object.getOwnPropertyNames(b),e=d.length,f=0;e>f;f++){var g=d[f];if(c||void 0===a[g]){var h=Object.getOwnPropertyDescriptor(b,g),i=h.get||h.set||!h.writable||!h.enumerable||!h.configurable;i?Object.defineProperty(a,g,h):a[g]=b[g]}}return a}function h(a,b){for(var c in a)d(a,c)&&b(a[c],c)}c.hasOwn=d,c.debounce=e,c.getClosestIgnoredElement=f,c.inherit=g,c.objEach=h;var i=a("./constants").ATTR_IGNORE},{"./constants":1}],"10":[function(a,b,c){"use strict";c["default"]="0.11.1"},{}]},{},[8]),function(){"use strict";function a(a,b){return a.__SKATE_TEMPLATE_HTML_DATA?a.__SKATE_TEMPLATE_HTML_DATA[b]:void 0}function b(a,b,c){return a.__SKATE_TEMPLATE_HTML_DATA||(a.__SKATE_TEMPLATE_HTML_DATA={}),a.__SKATE_TEMPLATE_HTML_DATA[b]=c,a}function c(a){var b={"caption":"table","dd":"dl","dt":"dl","li":"ul","tbody":"table","td":"tr","thead":"table","tr":"tbody"},c=(document.createDocumentFragment(),a.match(/\s*<([^\s>]+)/)),e=document.createElement(c&&b[c[1]]||"div");return e.innerHTML=a,d(e.childNodes)}function d(a){for(var b=document.createDocumentFragment();a&&a.length;)b.appendChild(a[0]);return b}function e(a,b){for(var c=[],d=a.nextSibling;d!==b;)c.push(d),d=d.nextSibling;return c}function f(a,b){if(b){for(var c=a.querySelectorAll(b),d=c.length,e=[],f=0;d>f;f++){var g=c[f];g.parentNode===a&&e.push(g)}return e}return[].slice.call(a.childNodes)||[]}function g(b){var d=a(b,"content"),g=d.length;return{"childNodes":{"get":function(){for(var a=[],b=0;g>b;b++){var c=d[b];c.isDefault||(a=a.concat(e(c.startNode,c.endNode)))}return a}},"firstChild":{"get":function(){var a=this.childNodes;return a.length&&a[0]||null}},"innerHTML":{"get":function(){for(var a="",b=this.childNodes,c=b.length,d=0;c>d;d++){var e=b[d];a+=e.outerHTML||e.textContent}return a},"set":function(a){for(var b=c(a),j=0;g>j;j++){for(var k=d[j],l=e(k.startNode,k.endNode),m=0;m<l.length;m++){var n=l[m];n.parentNode.removeChild(n)}for(var o=f(b,k.selector),p=0;p<o.length;p++)k.container.insertBefore(o[p],k.endNode);o.length?i(k):h(k)}}},"lastChild":{"get":function(){for(var a=g-1;a>-1;a--){var b=d[a];if(!b.isDefault){var c=this.childNodes,e=c.length;return c[e-1]}}return null}},"outerHTML":{"get":function(){var a=this.tagName.toLowerCase(),b="<"+a,c=this.attributes;if(c)for(var d=c.length,e=0;d>e;e++){var f=c[e];b+=" "+f.nodeName+'="'+f.nodeValue+'"'}return b+=">",b+=this.innerHTML,b+="</"+a+">"}},"textContent":{"get":function(){for(var a="",b=this.childNodes,c=this.childNodes.length,d=0;c>d;d++)a+=b[d].textContent;return a},"set":function(a){var b;this.innerHTML="";for(var c=0;g>c;c++){var e=d[c];if(!e.selector){b=e;break}}b&&(a?(i(b),b.container.insertBefore(document.createTextNode(a),b.endNode)):h(b))}},"appendChild":{"value":function(a){if(a instanceof n){var b=a.childNodes;return[].slice.call(b).forEach(function(a){this.appendChild(a)}.bind(this)),this}for(var c=0;g>c;c++){var e=d[c],f=e.selector;if(!f||a instanceof window.HTMLElement&&p.call(a,f)){i(e),e.endNode.parentNode.insertBefore(a,e.endNode);break}}return this}},"insertAdjacentHTML":{"value":function(a,d){return"afterbegin"===a?this.insertBefore(c(d),this.childNodes[0]):"beforeend"===a?this.appendChild(c(d)):b.insertAdjacentHTML(a,d),this}},"insertBefore":{"value":function(a,b){if(!b)return this.appendChild(a);if(a instanceof n){var c=a.childNodes;if(c)for(var f=c.length,h=0;f>h;h++)this.insertBefore(c[h],b);return this}var i=!1;a:for(var j=0;g>j;j++)for(var k=d[j],l=e(k.startNode,k.endNode),m=l.length,o=0;m>o;o++){var q=l[o];if(q===b&&(i=!0),i){var r=k.selector;if(!r||p.call(a,r)){q.parentNode.insertBefore(a,q);break a}}}if(!i)throw new Error("DOMException 8: The node before which the new node is to be inserted is not a child of this node.");return a}},"removeChild":{"value":function(a){for(var b=!1,c=0;g>c;c++){var e=d[c];if(e.container===a.parentNode){e.container.removeChild(a),b=!0;break}e.startNode.nextSibling===e.endNode&&h(e)}if(!b)throw new Error("DOMException 8: The node in which you are trying to remove is not a child of this node.");return a}},"replaceChild":{"value":function(a,b){for(var c=0;g>c;c++){var e=d[c];if(e.container===b.parentNode){e.container.replaceChild(a,b);break}}return this}}}}function h(a){for(var b=a.defaultNodes,c=b.length,d=0;c>d;d++)a.container.insertBefore(b[d],a.endNode);a.isDefault=!0}function i(a){for(var b=a.defaultNodes,c=b.length,d=0;c>d;d++){var e=b[d];e.parentNode.removeChild(e)}a.isDefault=!1}function j(a,b){return{"get":function(){var c=a[b];return"function"==typeof c?c.bind(a):c},"set":function(c){a[b]=c}}}function k(a,b){var c={};for(var d in a){var e=d in b;e?Object.defineProperty(c,d,b[d]):Object.defineProperty(c,d,j(a,d))}return c}function l(a){var c=a.getElementsByTagName("content"),d=c&&c.length;if(d){for(var e=[];c.length;){var f=c[0],g=f.parentNode,h=document.createComment(""),i=document.createComment("");e.push({"container":g,"contentNode":f,"defaultNodes":[].slice.call(f.childNodes),"endNode":i,"isDefault":!0,"selector":f.getAttribute("select"),"startNode":h}),g.replaceChild(i,f),g.insertBefore(h,i)}b(a,"content",e)}}function m(){var a=[].slice.call(arguments).join("");return function(b){var c=d(b.childNodes);b.innerHTML=a,l(b),c.childNodes.length&&m.wrap(b).appendChild(c)}}var n=window.DocumentFragment,o=window.HTMLElement.prototype,p=o.matches||o.msMatchesSelector||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector;m.wrap=function(b){return a(b,"content")?k(b,g(b)):b},window.skateTemplateHtml=m,"function"==typeof define&&define("aui/internal/skate-template-html",[],function(){return m}),"object"==typeof module&&(module.exports=m)}(),function(a){(function(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r={}.hasOwnProperty,s=[].indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(b in this&&this[b]===a)return b;return-1},t=[].slice;null==this.Tether&&(this.Tether={"modules":[]}),k=function(a){var b,c,d,e,f;if(c=getComputedStyle(a).position,"fixed"===c)return a;for(d=void 0,b=a;b=b.parentNode;){try{e=getComputedStyle(b)}catch(g){}if(null==e)return b;if(/(auto|scroll)/.test(e.overflow+e["overflow-y"]+e["overflow-x"])&&("absolute"!==c||"relative"===(f=e.position)||"absolute"===f||"fixed"===f))return b}return document.body},o=function(){var a;return a=0,function(){return a++}}(),q={},i=function(a){var b,d,f,g,h;if(f=a._tetherZeroElement,null==f&&(f=a.createElement("div"),f.setAttribute("data-tether-id",o()),e(f.style,{"top":0,"left":0,"position":"absolute"}),a.body.appendChild(f),a._tetherZeroElement=f),b=f.getAttribute("data-tether-id"),null==q[b]){q[b]={},h=f.getBoundingClientRect();for(d in h)g=h[d],q[b][d]=g;c(function(){return q[b]=void 0})}return q[b]},m=null,g=function(a){var b,c,d,e,f,g,h;a===document?(c=document,a=document.documentElement):c=a.ownerDocument,d=c.documentElement,b={},h=a.getBoundingClientRect();for(e in h)g=h[e],b[e]=g;return f=i(c),b.top-=f.top,b.left-=f.left,null==b.width&&(b.width=document.body.scrollWidth-b.left-b.right),null==b.height&&(b.height=document.body.scrollHeight-b.top-b.bottom),b.top=b.top-d.clientTop,b.left=b.left-d.clientLeft,b.right=c.body.clientWidth-b.width-b.left,b.bottom=c.body.clientHeight-b.height-b.top,b},h=function(a){return a.offsetParent||document.documentElement},j=function(){var a,b,c,d,f;return a=document.createElement("div"),a.style.width="100%",a.style.height="200px",b=document.createElement("div"),e(b.style,{"position":"absolute","top":0,"left":0,"pointerEvents":"none","visibility":"hidden","width":"200px","height":"150px","overflow":"hidden"}),b.appendChild(a),document.body.appendChild(b),d=a.offsetWidth,b.style.overflow="scroll",f=a.offsetWidth,d===f&&(f=b.clientWidth),document.body.removeChild(b),c=d-f,{"width":c,"height":c}},e=function(a){var b,c,d,e,f,g,h;for(null==a&&(a={}),b=[],Array.prototype.push.apply(b,arguments),h=b.slice(1),f=0,g=h.length;g>f;f++)if(d=h[f])for(c in d)r.call(d,c)&&(e=d[c],a[c]=e);return a},n=function(a,b){var c,d,e,f,g;if(null!=a.classList){for(f=b.split(" "),g=[],d=0,e=f.length;e>d;d++)c=f[d],c.trim()&&g.push(a.classList.remove(c));return g}return a.className=a.className.replace(new RegExp("(^| )"+b.split(" ").join("|")+"( |$)","gi")," ")},b=function(a,b){var c,d,e,f,g;if(null!=a.classList){for(f=b.split(" "),g=[],d=0,e=f.length;e>d;d++)c=f[d],c.trim()&&g.push(a.classList.add(c));return g}return n(a,b),a.className+=" "+b},l=function(a,b){return null!=a.classList?a.classList.contains(b):new RegExp("(^| )"+b+"( |$)","gi").test(a.className)},p=function(a,c,d){var e,f,g,h,i,j;for(f=0,h=d.length;h>f;f++)e=d[f],s.call(c,e)<0&&l(a,e)&&n(a,e);for(j=[],g=0,i=c.length;i>g;g++)e=c[g],j.push(l(a,e)?void 0:b(a,e));return j},d=[],c=function(a){return d.push(a)},f=function(){var a,b;for(b=[];a=d.pop();)b.push(a());return b},a=function(){function a(){}return a.prototype.on=function(a,b,c,d){var e;return null==d&&(d=!1),null==this.bindings&&(this.bindings={}),null==(e=this.bindings)[a]&&(e[a]=[]),this.bindings[a].push({"handler":b,"ctx":c,"once":d})},a.prototype.once=function(a,b,c){return this.on(a,b,c,!0)},a.prototype.off=function(a,b){var c,d,e;if(null!=(null!=(d=this.bindings)?d[a]:void 0)){if(null==b)return delete this.bindings[a];for(c=0,e=[];c<this.bindings[a].length;)e.push(this.bindings[a][c].handler===b?this.bindings[a].splice(c,1):c++);return e}},a.prototype.trigger=function(){var a,b,c,d,e,f,g,h,i;if(c=arguments[0],a=2<=arguments.length?t.call(arguments,1):[],null!=(g=this.bindings)?g[c]:void 0){for(e=0,i=[];e<this.bindings[c].length;)h=this.bindings[c][e],d=h.handler,b=h.ctx,f=h.once,d.apply(null!=b?b:this,a),i.push(f?this.bindings[c].splice(e,1):e++);return i}},a}(),this.Tether.Utils={"getScrollParent":k,"getBounds":g,"getOffsetParent":h,"extend":e,"addClass":b,"removeClass":n,"hasClass":l,"updateClasses":p,"defer":c,"flush":f,"uniqueId":o,"Evented":a,"getScrollBarSize":j}}).call(this),function(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D=[].slice,E=function(a,b){return function(){return a.apply(b,arguments)}};if(null==this.Tether)throw new Error("You must include the utils.js file before tether.js");d=this.Tether,C=d.Utils,p=C.getScrollParent,q=C.getSize,n=C.getOuterSize,l=C.getBounds,m=C.getOffsetParent,j=C.extend,e=C.addClass,w=C.removeClass,z=C.updateClasses,i=C.defer,k=C.flush,o=C.getScrollBarSize,A=function(a,b,c){return null==c&&(c=1),a+c>=b&&b>=a-c},y=function(){var a,b,c,d,e;for(a=document.createElement("div"),e=["transform","webkitTransform","OTransform","MozTransform","msTransform"],c=0,d=e.length;d>c;c++)if(b=e[c],void 0!==a.style[b])return b}(),x=[],v=function(){var a,b,c;for(b=0,c=x.length;c>b;b++)a=x[b],a.position(!1);return k()},r=function(){var a;return null!=(a="undefined"!=typeof performance&&null!==performance&&"function"==typeof performance.now?performance.now():void 0)?a:+new Date},function(){var a,b,c,d,e,f,g,h,i;for(b=null,c=null,d=null,e=function(){if(null!=c&&c>16)return c=Math.min(c-16,250),void(d=setTimeout(e,250));if(!(null!=b&&r()-b<10))return null!=d&&(clearTimeout(d),d=null),b=r(),v(),c=r()-b},h=["resize","scroll","touchmove"],i=[],f=0,g=h.length;g>f;f++)a=h[f],i.push(window.addEventListener(a,e));return i}(),a={"center":"center","left":"right","right":"left"},b={"middle":"middle","top":"bottom","bottom":"top"},c={"top":0,"left":0,"middle":"50%","center":"50%","bottom":"100%","right":"100%"},h=function(c,d){var e,f;return e=c.left,f=c.top,"auto"===e&&(e=a[d.left]),"auto"===f&&(f=b[d.top]),{"left":e,"top":f}},g=function(a){var b,d;return{"left":null!=(b=c[a.left])?b:a.left,"top":null!=(d=c[a.top])?d:a.top}},f=function(){var a,b,c,d,e,f,g;for(b=1<=arguments.length?D.call(arguments,0):[],c={"top":0,"left":0},e=0,f=b.length;f>e;e++)g=b[e],d=g.top,a=g.left,"string"==typeof d&&(d=parseFloat(d,10)),"string"==typeof a&&(a=parseFloat(a,10)),c.top+=d,c.left+=a;return c},s=function(a,b){return"string"==typeof a.left&&-1!==a.left.indexOf("%")&&(a.left=parseFloat(a.left,10)/100*b.width),"string"==typeof a.top&&-1!==a.top.indexOf("%")&&(a.top=parseFloat(a.top,10)/100*b.height),a},t=u=function(a){var b,c,d;return d=a.split(" "),c=d[0],b=d[1],{"top":c,"left":b}},B=function(){function a(a){this.position=E(this.position,this);var b,c,e,f,g;for(x.push(this),this.history=[],this.setOptions(a,!1),f=d.modules,c=0,e=f.length;e>c;c++)b=f[c],null!=(g=b.initialize)&&g.call(this);this.position()}return a.modules=[],a.prototype.getClass=function(a){var b,c;return(null!=(b=this.options.classes)?b[a]:void 0)?this.options.classes[a]:(null!=(c=this.options.classes)?c[a]:void 0)!==!1?this.options.classPrefix?""+this.options.classPrefix+"-"+a:a:""},a.prototype.setOptions=function(a,b){var c,d,f,g,h,i;for(this.options=a,null==b&&(b=!0),c={"offset":"0 0","targetOffset":"0 0","targetAttachment":"auto auto","classPrefix":"tether"},this.options=j(c,this.options),h=this.options,this.element=h.element,this.target=h.target,this.targetModifier=h.targetModifier,"viewport"===this.target?(this.target=document.body,this.targetModifier="visible"):"scroll-handle"===this.target&&(this.target=document.body,this.targetModifier="scroll-handle"),i=["element","target"],f=0,g=i.length;g>f;f++){if(d=i[f],null==this[d])throw new Error("Tether Error: Both element and target must be defined");null!=this[d].jquery?this[d]=this[d][0]:"string"==typeof this[d]&&(this[d]=document.querySelector(this[d]))}if(e(this.element,this.getClass("element")),e(this.target,this.getClass("target")),!this.options.attachment)throw new Error("Tether Error: You must provide an attachment");return this.targetAttachment=t(this.options.targetAttachment),this.attachment=t(this.options.attachment),this.offset=u(this.options.offset),this.targetOffset=u(this.options.targetOffset),null!=this.scrollParent&&this.disable(),this.scrollParent="scroll-handle"===this.targetModifier?this.target:p(this.target),this.options.enabled!==!1?this.enable(b):void 0},a.prototype.getTargetBounds=function(){var a,b,c,d,e,f,g,h,i;if(null==this.targetModifier)return l(this.target);switch(this.targetModifier){case"visible":return this.target===document.body?{"top":pageYOffset,"left":pageXOffset,"height":innerHeight,"width":innerWidth}:(a=l(this.target),e={"height":a.height,"width":a.width,"top":a.top,"left":a.left},e.height=Math.min(e.height,a.height-(pageYOffset-a.top)),e.height=Math.min(e.height,a.height-(a.top+a.height-(pageYOffset+innerHeight))),e.height=Math.min(innerHeight,e.height),e.height-=2,e.width=Math.min(e.width,a.width-(pageXOffset-a.left)),e.width=Math.min(e.width,a.width-(a.left+a.width-(pageXOffset+innerWidth))),e.width=Math.min(innerWidth,e.width),e.width-=2,e.top<pageYOffset&&(e.top=pageYOffset),e.left<pageXOffset&&(e.left=pageXOffset),e);case"scroll-handle":return i=this.target,i===document.body?(i=document.documentElement,a={"left":pageXOffset,"top":pageYOffset,"height":innerHeight,"width":innerWidth}):a=l(i),h=getComputedStyle(i),c=i.scrollWidth>i.clientWidth||"scroll"===[h.overflow,h.overflowX]||this.target!==document.body,f=0,c&&(f=15),d=a.height-parseFloat(h.borderTopWidth)-parseFloat(h.borderBottomWidth)-f,e={"width":15,"height":.975*d*(d/i.scrollHeight),"left":a.left+a.width-parseFloat(h.borderLeftWidth)-15},b=0,408>d&&this.target===document.body&&(b=-11e-5*Math.pow(d,2)-.00727*d+22.58),this.target!==document.body&&(e.height=Math.max(e.height,24)),g=this.target.scrollTop/(i.scrollHeight-d),e.top=g*(d-e.height-b)+a.top+parseFloat(h.borderTopWidth),this.target===document.body&&(e.height=Math.max(e.height,24)),e}},a.prototype.clearCache=function(){return this._cache={}},a.prototype.cache=function(a,b){return null==this._cache&&(this._cache={}),null==this._cache[a]&&(this._cache[a]=b.call(this)),this._cache[a]},a.prototype.enable=function(a){return null==a&&(a=!0),e(this.target,this.getClass("enabled")),e(this.element,this.getClass("enabled")),this.enabled=!0,this.scrollParent!==document&&this.scrollParent.addEventListener("scroll",this.position),a?this.position():void 0},a.prototype.disable=function(){return w(this.target,this.getClass("enabled")),w(this.element,this.getClass("enabled")),this.enabled=!1,null!=this.scrollParent?this.scrollParent.removeEventListener("scroll",this.position):void 0},a.prototype.destroy=function(){var a,b,c,d,e;for(this.disable(),e=[],a=c=0,d=x.length;d>c;a=++c){if(b=x[a],b===this){x.splice(a,1);break}e.push(void 0)}return e},a.prototype.updateAttachClasses=function(a,b){var c,d,e,f,g,h,j,k,l,m=this;for(null==a&&(a=this.attachment),null==b&&(b=this.targetAttachment),f=["left","top","bottom","right","middle","center"],(null!=(l=this._addAttachClasses)?l.length:void 0)&&this._addAttachClasses.splice(0,this._addAttachClasses.length),c=null!=this._addAttachClasses?this._addAttachClasses:this._addAttachClasses=[],a.top&&c.push(""+this.getClass("element-attached")+"-"+a.top),a.left&&c.push(""+this.getClass("element-attached")+"-"+a.left),b.top&&c.push(""+this.getClass("target-attached")+"-"+b.top),b.left&&c.push(""+this.getClass("target-attached")+"-"+b.left),d=[],g=0,j=f.length;j>g;g++)e=f[g],d.push(""+this.getClass("element-attached")+"-"+e);for(h=0,k=f.length;k>h;h++)e=f[h],d.push(""+this.getClass("target-attached")+"-"+e);return i(function(){return null!=m._addAttachClasses?(z(m.element,m._addAttachClasses,d),z(m.target,m._addAttachClasses,d),m._addAttachClasses=void 0):void 0})},a.prototype.position=function(a){var b,c,e,i,j,n,p,q,r,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T=this;if(null==a&&(a=!0),this.enabled){for(this.clearCache(),D=h(this.targetAttachment,this.attachment),this.updateAttachClasses(this.attachment,D),b=this.cache("element-bounds",function(){return l(T.element)}),I=b.width,e=b.height,0===I&&0===e&&null!=this.lastSize?(N=this.lastSize,I=N.width,e=N.height):this.lastSize={"width":I,"height":e},G=F=this.cache("target-bounds",function(){return T.getTargetBounds()}),r=s(g(this.attachment),{"width":I,"height":e}),E=s(g(D),G),j=s(this.offset,{"width":I,"height":e}),n=s(this.targetOffset,G),r=f(r,j),E=f(E,n),i=F.left+E.left-r.left,H=F.top+E.top-r.top,O=d.modules,J=0,L=O.length;L>J;J++)if(p=O[J],y=p.position.call(this,{"left":i,"top":H,"targetAttachment":D,"targetPos":F,"attachment":this.attachment,"elementPos":b,"offset":r,"targetOffset":E,"manualOffset":j,"manualTargetOffset":n,"scrollbarSize":B}),null!=y&&"object"==typeof y){if(y===!1)return!1;H=y.top,i=y.left}if(q={"page":{"top":H,"left":i},"viewport":{"top":H-pageYOffset,"bottom":pageYOffset-H-e+innerHeight,"left":i-pageXOffset,"right":pageXOffset-i-I+innerWidth}},document.body.scrollWidth>window.innerWidth&&(B=this.cache("scrollbar-size",o),q.viewport.bottom-=B.height),document.body.scrollHeight>window.innerHeight&&(B=this.cache("scrollbar-size",o),q.viewport.right-=B.width),(""!==(P=document.body.style.position)&&"static"!==P||""!==(Q=document.body.parentElement.style.position)&&"static"!==Q)&&(q.page.bottom=document.body.scrollHeight-H-e,q.page.right=document.body.scrollWidth-i-I),(null!=(R=this.options.optimizations)?R.moveElement:void 0)!==!1&&null==this.targetModifier){for(u=this.cache("target-offsetparent",function(){return m(T.target)}),x=this.cache("target-offsetparent-bounds",function(){return l(u)}),w=getComputedStyle(u),c=getComputedStyle(this.element),v=x,t={},S=["Top","Left","Bottom","Right"],K=0,M=S.length;M>K;K++)C=S[K],t[C.toLowerCase()]=parseFloat(w["border"+C+"Width"]);x.right=document.body.scrollWidth-x.left-v.width+t.right,x.bottom=document.body.scrollHeight-x.top-v.height+t.bottom,q.page.top>=x.top+t.top&&q.page.bottom>=x.bottom&&q.page.left>=x.left+t.left&&q.page.right>=x.right&&(A=u.scrollTop,z=u.scrollLeft,q.offset={"top":q.page.top-x.top+A-t.top,"left":q.page.left-x.left+z-t.left})}return this.move(q),this.history.unshift(q),this.history.length>3&&this.history.pop(),a&&k(),!0}},a.prototype.move=function(a){var b,c,d,e,f,g,h,k,l,n,o,p,q,r,s,t,u,v=this;if(null!=this.element.parentNode){k={};for(n in a){k[n]={};for(e in a[n]){for(d=!1,t=this.history,r=0,s=t.length;s>r;r++)if(h=t[r],!A(null!=(u=h[n])?u[e]:void 0,a[n][e])){d=!0;break}d||(k[n][e]=!0)}}b={"top":"","left":"","right":"","bottom":""},l=function(a,c){var d,e,f;return(null!=(f=v.options.optimizations)?f.gpu:void 0)===!1?(a.top?b.top=""+c.top+"px":b.bottom=""+c.bottom+"px",a.left?b.left=""+c.left+"px":b.right=""+c.right+"px"):(a.top?(b.top=0,e=c.top):(b.bottom=0,e=-c.bottom),a.left?(b.left=0,d=c.left):(b.right=0,d=-c.right),b[y]="translateX("+Math.round(d)+"px) translateY("+Math.round(e)+"px)","msTransform"!==y?b[y]+=" translateZ(0)":void 0)},f=!1,(k.page.top||k.page.bottom)&&(k.page.left||k.page.right)?(b.position="absolute",l(k.page,a.page)):(k.viewport.top||k.viewport.bottom)&&(k.viewport.left||k.viewport.right)?(b.position="fixed",l(k.viewport,a.viewport)):null!=k.offset&&k.offset.top&&k.offset.left?(b.position="absolute",g=this.cache("target-offsetparent",function(){return m(v.target)}),m(this.element)!==g&&i(function(){return v.element.parentNode.removeChild(v.element),g.appendChild(v.element)}),l(k.offset,a.offset),f=!0):(b.position="absolute",l({"top":!0,"left":!0},a.page)),f||"BODY"===this.element.parentNode.tagName||(this.element.parentNode.removeChild(this.element),document.body.appendChild(this.element)),q={},p=!1;for(e in b)o=b[e],c=this.element.style[e],""===c||""===o||"top"!==e&&"left"!==e&&"bottom"!==e&&"right"!==e||(c=parseFloat(c),o=parseFloat(o)),c!==o&&(p=!0,q[e]=b[e]);return p?i(function(){return j(v.element.style,q)}):void 0}},a}(),d.position=v,this.Tether=j(B,d)}.call(this),function(){var a,b,c,d,e,f,g,h,i,j,k=[].indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(b in this&&this[b]===a)return b;return-1};j=this.Tether.Utils,g=j.getOuterSize,f=j.getBounds,h=j.getSize,d=j.extend,i=j.updateClasses,c=j.defer,b={"left":"right","right":"left","top":"bottom","bottom":"top","middle":"middle"},a=["left","top","right","bottom"],e=function(b,c){var d,e,g,h,i,j,k;if("scrollParent"===c?c=b.scrollParent:"window"===c&&(c=[pageXOffset,pageYOffset,innerWidth+pageXOffset,innerHeight+pageYOffset]),c===document&&(c=c.documentElement),null!=c.nodeType)for(e=h=f(c),i=getComputedStyle(c),c=[e.left,e.top,h.width+e.left,h.height+e.top],d=j=0,k=a.length;k>j;d=++j)g=a[d],g=g[0].toUpperCase()+g.substr(1),"Top"===g||"Left"===g?c[d]+=parseFloat(i["border"+g+"Width"]):c[d]-=parseFloat(i["border"+g+"Width"]);return c},this.Tether.modules.push({"position":function(b){var g,h,j,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,$,_,ab,bb=this;if(H=b.top,s=b.left,C=b.targetAttachment,!this.options.constraints)return!0;
for(z=function(b){var c,d,e,f;for(bb.removeClass(b),f=[],d=0,e=a.length;e>d;d++)c=a[d],f.push(bb.removeClass(""+b+"-"+c));return f},V=this.cache("element-bounds",function(){return f(bb.element)}),r=V.height,I=V.width,0===I&&0===r&&null!=this.lastSize&&(W=this.lastSize,I=W.width,r=W.height),E=this.cache("target-bounds",function(){return bb.getTargetBounds()}),D=E.height,F=E.width,B={},q={},h=[this.getClass("pinned"),this.getClass("out-of-bounds")],X=this.options.constraints,J=0,N=X.length;N>J;J++)p=X[J],p.outOfBoundsClass&&h.push(p.outOfBoundsClass),p.pinnedClass&&h.push(p.pinnedClass);for(K=0,O=h.length;O>K;K++)for(o=h[K],Y=["left","top","right","bottom"],L=0,P=Y.length;P>L;L++)A=Y[L],h.push(""+o+"-"+A);for(g=[],B=d({},C),q=d({},this.attachment),Z=this.options.constraints,M=0,Q=Z.length;Q>M;M++){if(p=Z[M],G=p.to,j=p.attachment,w=p.pin,null==j&&(j=""),k.call(j," ")>=0?($=j.split(" "),n=$[0],m=$[1]):m=n=j,l=e(this,G),("target"===n||"both"===n)&&(H<l[1]&&"top"===B.top&&(H+=D,B.top="bottom"),H+r>l[3]&&"bottom"===B.top&&(H-=D,B.top="top")),"together"===n&&(H<l[1]&&"top"===B.top&&("bottom"===q.top?(H+=D,B.top="bottom",H+=r,q.top="top"):"top"===q.top&&(H+=D,B.top="bottom",H-=r,q.top="bottom")),H+r>l[3]&&"bottom"===B.top&&("top"===q.top?(H-=D,B.top="top",H-=r,q.top="bottom"):"bottom"===q.top&&(H-=D,B.top="top",H+=r,q.top="top")),"middle"===B.top&&(H+r>l[3]&&"top"===q.top?(H-=r,q.top="bottom"):H<l[1]&&"bottom"===q.top&&(H+=r,q.top="top"))),("target"===m||"both"===m)&&(s<l[0]&&"left"===B.left&&(s+=F,B.left="right"),s+I>l[2]&&"right"===B.left&&(s-=F,B.left="left")),"together"===m&&(s<l[0]&&"left"===B.left?"right"===q.left?(s+=F,B.left="right",s+=I,q.left="left"):"left"===q.left&&(s+=F,B.left="right",s-=I,q.left="right"):s+I>l[2]&&"right"===B.left?"left"===q.left?(s-=F,B.left="left",s-=I,q.left="right"):"right"===q.left&&(s-=F,B.left="left",s+=I,q.left="left"):"center"===B.left&&(s+I>l[2]&&"left"===q.left?(s-=I,q.left="right"):s<l[0]&&"right"===q.left&&(s+=I,q.left="left"))),("element"===n||"both"===n)&&(H<l[1]&&"bottom"===q.top&&(H+=r,q.top="top"),H+r>l[3]&&"top"===q.top&&(H-=r,q.top="bottom")),("element"===m||"both"===m)&&(s<l[0]&&"right"===q.left&&(s+=I,q.left="left"),s+I>l[2]&&"left"===q.left&&(s-=I,q.left="right")),"string"==typeof w?w=function(){var a,b,c,d;for(c=w.split(","),d=[],b=0,a=c.length;a>b;b++)v=c[b],d.push(v.trim());return d}():w===!0&&(w=["top","left","right","bottom"]),w||(w=[]),x=[],t=[],H<l[1]&&(k.call(w,"top")>=0?(H=l[1],x.push("top")):t.push("top")),H+r>l[3]&&(k.call(w,"bottom")>=0?(H=l[3]-r,x.push("bottom")):t.push("bottom")),s<l[0]&&(k.call(w,"left")>=0?(s=l[0],x.push("left")):t.push("left")),s+I>l[2]&&(k.call(w,"right")>=0?(s=l[2]-I,x.push("right")):t.push("right")),x.length)for(y=null!=(_=this.options.pinnedClass)?_:this.getClass("pinned"),g.push(y),T=0,R=x.length;R>T;T++)A=x[T],g.push(""+y+"-"+A);if(t.length)for(u=null!=(ab=this.options.outOfBoundsClass)?ab:this.getClass("out-of-bounds"),g.push(u),U=0,S=t.length;S>U;U++)A=t[U],g.push(""+u+"-"+A);(k.call(x,"left")>=0||k.call(x,"right")>=0)&&(q.left=B.left=!1),(k.call(x,"top")>=0||k.call(x,"bottom")>=0)&&(q.top=B.top=!1),(B.top!==C.top||B.left!==C.left||q.top!==this.attachment.top||q.left!==this.attachment.left)&&this.updateAttachClasses(q,B)}return c(function(){return i(bb.target,g,h),i(bb.element,g,h)}),{"top":H,"left":s}}})}.call(this),function(){var a,b,c,d;d=this.Tether.Utils,b=d.getBounds,c=d.updateClasses,a=d.defer,this.Tether.modules.push({"position":function(d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D=this;if(o=d.top,j=d.left,y=this.cache("element-bounds",function(){return b(D.element)}),i=y.height,p=y.width,n=this.getTargetBounds(),h=o+i,k=j+p,e=[],o<=n.bottom&&h>=n.top)for(z=["left","right"],q=0,u=z.length;u>q;q++)l=z[q],((A=n[l])===j||A===k)&&e.push(l);if(j<=n.right&&k>=n.left)for(B=["top","bottom"],r=0,v=B.length;v>r;r++)l=B[r],((C=n[l])===o||C===h)&&e.push(l);for(g=[],f=[],m=["left","top","right","bottom"],g.push(this.getClass("abutted")),s=0,w=m.length;w>s;s++)l=m[s],g.push(""+this.getClass("abutted")+"-"+l);for(e.length&&f.push(this.getClass("abutted")),t=0,x=e.length;x>t;t++)l=e[t],f.push(""+this.getClass("abutted")+"-"+l);return a(function(){return c(D.target,f,g),c(D.element,f,g)}),!0}})}.call(this),function(){this.Tether.modules.push({"position":function(a){var b,c,d,e,f,g,h;return g=a.top,b=a.left,this.options.shift?(c=function(a){return"function"==typeof a?a.call(this,{"top":g,"left":b}):a},d=c(this.options.shift),"string"==typeof d?(d=d.split(" "),d[1]||(d[1]=d[0]),f=d[0],e=d[1],f=parseFloat(f,10),e=parseFloat(e,10)):(h=[d.top,d.left],f=h[0],e=h[1]),g+=f,b+=e,{"top":g,"left":b}):void 0}})}.call(this),a.Tether=this.Tether,"function"==typeof define&&define("aui/internal/tether",[],function(){return a.Tether})}(this),jQuery.os={};var jQueryOSplatform=navigator.platform.toLowerCase();jQuery.os.windows=-1!=jQueryOSplatform.indexOf("win"),jQuery.os.mac=-1!=jQueryOSplatform.indexOf("mac"),jQuery.os.linux=-1!=jQueryOSplatform.indexOf("linux"),jQuery.fn.moveTo=function(a){var b,c={"transition":!1,"scrollOffset":35},d=jQuery.extend(c,a),e=this,f=e.offset().top;if((jQuery(window).scrollTop()+jQuery(window).height()-this.outerHeight()<f||jQuery(window).scrollTop()+d.scrollOffset>f)&&jQuery(window).height()>d.scrollOffset){if(b=jQuery(window).scrollTop()+d.scrollOffset>f?f-(jQuery(window).height()-this.outerHeight())+d.scrollOffset:f-d.scrollOffset,!jQuery.fn.moveTo.animating&&d.transition)return jQuery(document).trigger("moveToStarted",this),jQuery.fn.moveTo.animating=!0,jQuery("html,body").animate({"scrollTop":b},1e3,function(){jQuery(document).trigger("moveToFinished",e),delete jQuery.fn.moveTo.animating}),this;var g=jQuery("html, body");return g.is(":animated")&&(g.stop(),delete jQuery.fn.moveTo.animating),jQuery(document).trigger("moveToStarted"),jQuery(window).scrollTop(b),setTimeout(function(){jQuery(document).trigger("moveToFinished",e)},100),this}return jQuery(document).trigger("moveToFinished",this),this},function(){"use strict";function a(a,b){b=b||{"bubbles":!1,"cancelable":!1,"detail":void 0};var c=document.createEvent("CustomEvent");return c.initCustomEvent(a,b.bubbles,b.cancelable,b.detail),c}if(window.CustomEvent)try{new a}catch(b){return}a.prototype=window.Event.prototype,window.CustomEvent=a}(),window.AJS=window.AJS||{},function(){"use strict";function a(a){return function(){"undefined"!=typeof console&&console[a]&&Function.prototype.apply.call(console[a],console,arguments)}}"undefined"==typeof window.console?window.console={"messages":[],"log":function(a){this.messages.push(a)},"show":function(){alert(this.messages.join("\n")),this.messages=[]}}:window.console.show=function(){},AJS.log=a("log"),AJS.warn=a("warn"),AJS.error=a("error")}(),function(a){"use strict";window.AJS=window.AJS||{},window.AJS.deprecate=a(jQuery||Zepto),"function"==typeof define&&define("aui/internal/deprecation",[],function(){return window.AJS.deprecate})}(function(a){"use strict";function b(a){return a+="",a?a.charAt(0).toUpperCase()+a.substring(1):""}function c(a,c){if("function"==typeof a)return a;var d=!1;return c=c||{},function(e){var f=n.__getDeprecatedLocation(e?e:1)||"";if(!d||-1===p.indexOf(f)){p.push(f),d=!0;var g=c.deprecationType+" "||"",h="DEPRECATED "+g+"- "+b(a)+" has been deprecated"+(c.sinceVersion?" since "+c.sinceVersion:"")+" and will be removed in "+(c.removeInVersion||"a future release")+".";c.alternativeName&&(h+=" Use "+c.alternativeName+" instead. "),c.extraInfo&&(h+=" "+c.extraInfo),f=""===f?" \n No stack trace of the deprecated usage is available in your current browser.":" \n "+f,c.extraObject?(h+="\n",n.__logger(h,c.extraObject,f)):n.__logger(h,f)}}}function d(a,b,d){d=d||{},d.deprecationType=d.deprecationType||"JS";var e=c(b||a.name||"this function",d);return function(){return e(),a.apply(this,arguments)}}function e(b,c,e){e=e||{},e.deprecationType=e.deprecationType||"JS";var f=d(b,c,e);return f.prototype=b.prototype,a.extend(f,b),f}function f(a,b,d){if(q){var e=a[b];d=d||{},d.deprecationType=d.deprecationType||"JS";var f=d.displayName||b,g=c(f,d);Object.defineProperty(a,b,{"get":function(){return g(),e},"set":function(a){return e=a,g(),a}})}}function g(a,b,c){if("function"==typeof a[b]){c=c||{},c.deprecationType=c.deprecationType||"JS";var e=c.displayName||b;a[b]=d(a[b],e,c)}else f(a,b,c)}function h(b,c,d){d=d||{};for(var e in b)o.call(b,e)&&(d.deprecationType=d.deprecationType||"JS",d.displayName=c+e,d.alternativeName=d.alternativeNamePrefix&&d.alternativeNamePrefix+e,g(b,e,a.extend({},d)))}function i(a,b){return(a.matches||a.msMatchesSelector||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector).call(a,b)}function j(a){return function(b){var c={"selector":b,"options":a||{}};s.push(c);for(var d=document.querySelectorAll(b),e=0;e<d.length;e++)m(c,d[e])}}function k(a,b){return window.MutationObserver?("string"==typeof a&&(a=[a]),void a.forEach(j(b))):void n.__logger("CSS could not be deprecated as Mutation Observer was not found.")}function l(a){return function(b){i(a,b.selector)&&m(b,a)}}function m(b,d){var e=b.options.displayName;e=e?" ("+e+")":"";var f=a.extend({"deprecationType":"CSS","extraObject":d},b.options);c("'"+b.selector+"' pattern"+e,f)()}var n={},o=Object.prototype.hasOwnProperty,p=[];n.__logger=function(){return AJS.warn.apply(void 0,arguments)},n.__getDeprecatedLocation=function(a){var b=new Error,c=b.stack||b.stacktrace,d=c&&c.replace(/^Error\n/,"")||"";return d?(d=d.split("\n"),d[a+2]):d};var q=!1;try{Object.defineProperty&&(Object.defineProperty({},"blam",{"get":function(){},"set":function(){}}),q=!0)}catch(r){}if(window.MutationObserver){var s=[],t=new MutationObserver(function(a){a.forEach(function(a){for(var b=a.addedNodes,c=0;c<b.length;c++){var d=b[c];1===d.nodeType&&s.forEach(l(d))}})}),u={"childList":!0,"subtree":!0};t.observe(document,u)}return n.fn=d,n.construct=e,n.css=k,n.prop=g,n.obj=h,n.propertyDeprecationSupported=q,n.getMessageLogger=c,n}),function(){"use strict";if(!window.jQuery&&!window.Zepto)throw new Error("either jQuery or Zepto is required for AJS to function.");window.AJS=function(){function a(a){var b={"<":"&lt;",">":"&gt;","&":"&amp;","'":"&#39;","`":"&#96;"};return"string"==typeof b[a]?b[a]:"&quot;"}var b,c,d=[],e=0,f=/[&"'<>`]/g,g={"version":"5.8.4","params":{},"$":window.jQuery||window.Zepto,"preventDefault":function(a){a.preventDefault()},"stopEvent":function(a){return a.stopPropagation(),!1},"include":function(a){if(!this.contains(d,a)){d.push(a);var b=document.createElement("script");b.src=a,this.$("body").append(b)}},"toggleClassName":function(a,b){(a=this.$(a))&&a.toggleClass(b)},"setVisible":function(a,b){if(a=this.$(a)){var c=this.$;c(a).each(function(){var a=c(this).hasClass("hidden");a&&b?c(this).removeClass("hidden"):a||b||c(this).addClass("hidden")})}},"setCurrent":function(a,b){(a=this.$(a))&&(b?a.addClass("current"):a.removeClass("current"))},"isVisible":function(a){return!this.$(a).hasClass("hidden")},"isClipped":function(a){return a=AJS.$(a),a.prop("scrollWidth")>a.prop("clientWidth")},"populateParameters":function(a){a||(a=this.params);var b=this;this.$(".parameters input").each(function(){var c=this.value,d=this.title||this.id;b.$(this).hasClass("list")?a[d]?a[d].push(c):a[d]=[c]:a[d]=c.match(/^(tru|fals)e$/i)?"true"===c.toLowerCase():c})},"toInit":function(a){var b=this;return this.$(function(){try{a.apply(this,arguments)}catch(c){b.log("Failed to run init function: "+c+"\n"+a.toString())}}),this},"indexOf":function(a,b,c){var d=a.length;c?0>c&&(c=Math.max(0,d+c)):c=0;for(var e=c;d>e;e++)if(a[e]===b)return e;return-1},"contains":function(a,b){return this.indexOf(a,b)>-1},"firebug":function(){var a=this.$(document.createElement("script"));a.attr("src","https://getfirebug.com/releases/lite/1.2/firebug-lite-compressed.js"),this.$("head").append(a),function(){window.firebug?firebug.init():setTimeout(AJS.firebug,0)}()},"clone":function(a){return AJS.$(a).clone().removeAttr("id")},"alphanum":function(a,b){a=(a+"").toLowerCase(),b=(b+"").toLowerCase();for(var c=/(\d+|\D+)/g,d=a.match(c),e=b.match(c),f=Math.max(d.length,e.length),g=0;f>g;g++){if(g===d.length)return-1;if(g===e.length)return 1;var h=parseInt(d[g],10)+"",i=parseInt(e[g],10)+"";if(h===d[g]&&i===e[g]&&h!==i)return(h-i)/Math.abs(h-i);if((h!==d[g]||i!==e[g])&&d[g]!==e[g])return d[g]<e[g]?-1:1}return 0},"onTextResize":function(a){if("function"==typeof a)if(AJS.onTextResize["on-text-resize"])AJS.onTextResize["on-text-resize"].push(function(b){a(b)});else{var b=AJS("div");b.css({"width":"1em","height":"1em","position":"absolute","top":"-9999em","left":"-9999em"}),this.$("body").append(b),b.size=b.width(),setInterval(function(){if(b.size!==b.width()){b.size=b.width();for(var a=0,c=AJS.onTextResize["on-text-resize"].length;c>a;a++)AJS.onTextResize["on-text-resize"][a](b.size)}},0),AJS.onTextResize.em=b,AJS.onTextResize["on-text-resize"]=[function(b){a(b)}]}},"unbindTextResize":function(a){for(var b=0,c=AJS.onTextResize["on-text-resize"].length;c>b;b++)if(AJS.onTextResize["on-text-resize"][b]===a)return AJS.onTextResize["on-text-resize"].splice(b,1)},"escape":function(a){return escape(a).replace(/%u\w{4}/gi,function(a){return unescape(a)})},"escapeHtml":function(b){return b.replace(f,a)},"filterBySearch":function(a,b,c){if(!b)return[];var d=(this.$,c&&c.keywordsField||"keywords"),e=c&&c.ignoreForCamelCase?"i":"",f=c&&c.matchBoundary?"\\b":"",g=c&&c.splitRegex||/\s+/,h=b.split(g),i=[];h.forEach(function(a){var b=[new RegExp(f+a,"i")];if(/^([A-Z][a-z]*) {2,}$/.test(this)){var c=this.replace(/([A-Z][a-z]*)/g,"\\b$1[^,]*");b.push(new RegExp(c,e))}i.push(b)});var j=[];return a.forEach(function(a){for(var b=0;b<i.length;b++){for(var c=!1,e=0;e<i[b].length;e++)if(i[b][e].test(a[d])){c=!0;break}if(!c)return}j.push(a)}),j},"drawLogo":function(a){var b=a.scaleFactor||1,c=a.fill||"#fff",d=a.stroke||"#000",e=400*b,f=40*b,g=a.strokeWidth||1,h=a.containerID||".aui-logo";AJS.$(".aui-logo").length||AJS.$("body").append('<div id="aui-logo" class="aui-logo"><div>');var i=Raphael(h,e+50*b,f+100*b),j=i.path("M 0,0 c 3.5433333,-4.7243333 7.0866667,-9.4486667 10.63,-14.173 -14.173,0 -28.346,0 -42.519,0 C -35.432667,-9.4486667 -38.976333,-4.7243333 -42.52,0 -28.346667,0 -14.173333,0 0,0 z m 277.031,28.346 c -14.17367,0 -28.34733,0 -42.521,0 C 245.14,14.173 255.77,0 266.4,-14.173 c -14.17267,0 -28.34533,0 -42.518,0 C 213.25167,0 202.62133,14.173 191.991,28.346 c -14.17333,0 -28.34667,0 -42.52,0 14.17333,-18.8976667 28.34667,-37.7953333 42.52,-56.693 -7.08667,-9.448667 -14.17333,-18.897333 -21.26,-28.346 -14.173,0 -28.346,0 -42.519,0 7.08667,9.448667 14.17333,18.897333 21.26,28.346 -14.17333,18.8976667 -28.34667,37.7953333 -42.52,56.693 -14.173333,0 -28.346667,0 -42.52,0 10.63,-14.173 21.26,-28.346 31.89,-42.519 -14.390333,0 -28.780667,0 -43.171,0 C 42.520733,1.330715e-4 31.889933,14.174867 21.26,28.347 c -42.520624,6.24e-4 -85.039187,-8.13e-4 -127.559,-0.001 11.220667,-14.961 22.441333,-29.922 33.662,-44.883 -6.496,-8.661 -12.992,-17.322 -19.488,-25.983 5.905333,0 11.810667,0 17.716,0 -10.63,-14.173333 -21.26,-28.346667 -31.89,-42.52 14.173333,0 28.346667,0 42.52,0 10.63,14.173333 21.26,28.346667 31.89,42.52 14.173333,0 28.3466667,0 42.52,0 -10.63,-14.173333 -21.26,-28.346667 -31.89,-42.52 14.1733333,0 28.3466667,0 42.52,0 10.63,14.173333 21.26,28.346667 31.89,42.52 14.390333,0 28.780667,0 43.171,0 -10.63,-14.173333 -21.26,-28.346667 -31.89,-42.52 42.51967,0 85.03933,0 127.559,0 10.63033,14.173333 21.26067,28.346667 31.891,42.52 14.17267,0 28.34533,0 42.518,0 -10.63,-14.173333 -21.26,-28.346667 -31.89,-42.52 14.17367,0 28.34733,0 42.521,0 14.17333,18.897667 28.34667,37.795333 42.52,56.693 -14.17333,18.8976667 -28.34667,37.7953333 -42.52,56.693 z");j.scale(b,-b,0,0),j.translate(120*b,f),j.attr("fill",c),j.attr("stroke",d),j.attr("stroke-width",g)},"debounce":function(a,b){var c,d;return function(){var e=arguments,f=this,g=function(){d=a.apply(f,e)};return clearTimeout(c),c=setTimeout(g,b),d}},"id":function(a){if(b=e++ +"",c=a?a+b:"aui-uid-"+b,document.getElementById(c)){if(c=c+"-"+(new Date).getTime(),document.getElementById(c))throw new Error("ERROR: timestamped fallback ID "+c+" exists. AJS.id stopped.");return c}return c},"_addID":function(a,b){var c=AJS.$(a),d=b||!1;c.each(function(){var a=AJS.$(this);a.attr("id")||a.attr("id",AJS.id(d))})},"enable":function(a,b){var c=AJS.$(a);return"undefined"==typeof b&&(b=!0),c.each(function(){this.disabled=!b})}};if("undefined"!=typeof AJS)for(var h in AJS)g[h]=AJS[h];var i=function(){var a=null;return arguments.length&&"string"==typeof arguments[0]&&(a=AJS.$(document.createElement(arguments[0])),2===arguments.length&&a.html(arguments[1])),a};for(var j in g)i[j]=g[j];return i}(),AJS.$(function(){var a=AJS.$("body");a.data("auiVersion")||a.attr("data-aui-version",AJS.version),AJS.populateParameters()}),AJS.$.ajaxSettings.traditional=!0,AJS.deprecate.prop(AJS,"firebug"),AJS.deprecate.prop(AJS,"stopEvent",{"alternativeName":"AJS.preventDefault()"}),AJS.deprecate.prop(AJS,"drawLogo"),AJS.deprecate.prop(AJS,"toggleClassName")}(),AJS.format=function(){var a=/'(?!')/g,b=/^\d+$/,c=/^(\d+),number$/,d=/^(\d+)\,choice\,(.+)/,e=/^(\d+)([#<])(.+)/,f=function(a,f){var g,h="";if(g=a.match(b))h=f.length>++a?f[a]:"";else if(g=a.match(c))h=f.length>++g[1]?f[g[1]]:"";else if(g=a.match(d)){var i=f.length>++g[1]?f[g[1]]:null;if(null!==i){for(var j=g[2].split("|"),k=null,l=0;l<j.length;l++){var m=j[l].match(e),n=parseInt(m[1],10);if(n>i){if(k){h=k;break}h=m[3];break}if(i==n&&"#"==m[2]){h=m[3];break}l==j.length-1&&(h=m[3]),k=m[3]}var o=[h].concat(Array.prototype.slice.call(f,1));h=AJS.format.apply(AJS,o)}}return h},g=function(a){for(var b=!1,c=-1,d=0,e=0;e<a.length;e++){var f=a.charAt(e);if("'"==f&&(b=!b),!b)if("{"===f)0===d&&(c=e),d++;else if("}"===f&&d>0&&(d--,0===d)){var g=[];return g.push(a.substring(0,e+1)),g.push(a.substring(0,c)),g.push(a.substring(c+1,e)),g}}return null},h=function(b){for(var c=arguments,d="",e=g(b);e;)b=b.substring(e[0].length),d+=e[1].replace(a,""),d+=f(e[2],c),e=g(b);return d+=b.replace(a,"")};return h.apply(AJS,arguments)},AJS.I18n={"getText":function(a){var b=Array.prototype.slice.call(arguments,1);return AJS.I18n.keys&&Object.prototype.hasOwnProperty.call(AJS.I18n.keys,a)?AJS.format.apply(null,[AJS.I18n.keys[a]].concat(b)):a}},function(a){"use strict";AJS._internal=AJS._internal||{},AJS._internal.widget=a(AJS.$)}(function(a){"use strict";return function(b,c){var d="_aui-widget-"+b;return function(b,e){var f,g;a.isPlainObject(b)?g=b:(f=b,g=e);var h,i=f&&a(f);return i&&i.data(d)?h=i.data(d):(h=new c(i,g||{}),i=h.$el,i.data(d,h)),h}}}),function(a){"use strict";AJS.Alignment=a(window.Tether),"function"==typeof define&&define("aui/internal/alignment",["aui/internal/tether"],function(){return AJS.Alignment})}(function(a){"use strict";function b(a,b,c){var d=n+b,e=o+c;a.className+=" "+d+" "+e}function c(a,b){return a.getAttribute(b)||a.getAttribute("data-aui-"+b)}function d(a,b){return a.hasAttribute(b)||a.hasAttribute("data-aui-"+b)}function e(a){var b=(c(a,j)||p).split(" ");return{"side":b[0],"snap":b[1]}}function f(a){var b=c(a,l)||window;return"string"==typeof b&&(b=document.querySelector(b)),b}function g(a,b){var c,d,e="left";return b&&b!==window&&b!==document||(b=document.documentElement),b&&b.nodeType&&1===b.nodeType&&(c=b.getBoundingClientRect(),d=a.getBoundingClientRect(),d.left>c.right/2&&(e="right")),e}function h(a,b){return q[a+" "+b]||q[p]}function i(c,i){var j=f(c),l=e(c);l.snap&&"auto"!==l.snap||(l.snap=g(i,j));var n=h(l.side,l.snap),o=d(c,k),p=new a({"enabled":!1,"element":c,"target":i,"attachment":n.el,"targetAttachment":n.target,"classPrefix":m,"constraints":[{"to":j===window?"window":j,"attachment":o===!0?"none":"together"}]});b(c,l.side,l.snap),this._auiTether=p}var j="alignment",k="alignment-static",l="alignment-container",m="aui-alignment",n="aui-alignment-side-",o="aui-alignment-snap-",p="right middle",q={"top left":{"el":"bottom left","target":"top left"},"top center":{"el":"bottom center","target":"top center"},"top right":{"el":"bottom right","target":"top right"},"right top":{"el":"top left","target":"top right"},"right middle":{"el":"middle left","target":"middle right"},"right bottom":{"el":"bottom left","target":"bottom right"},"bottom left":{"el":"top left","target":"bottom left"},"bottom center":{"el":"top center","target":"bottom center"},"bottom right":{"el":"top right","target":"bottom right"},"left top":{"el":"top right","target":"top left"},"left middle":{"el":"middle right","target":"middle left"},"left bottom":{"el":"bottom right","target":"bottom left"},"submenu left":{"el":"top left","target":"top right"},"submenu right":{"el":"top right","target":"top left"}};return i.prototype={"destroy":function(){return this._auiTether.destroy(),this},"disable":function(){return this._auiTether.disable(),this},"enable":function(){return this._auiTether.enable(),this}},i}),window.AJS=window.AJS||{},function(a){"use strict";a._internal=a._internal||{},a._internal.animation={},a._internal.animation.recomputeStyle=function(a){a=a.length?a[0]:a,window.getComputedStyle(a,null).getPropertyValue("left")}}(AJS),function(a){"use strict";AJS._internal=AJS._internal||{},AJS._internal.browser=a(AJS.$)}(function(a){"use strict";var b={},c=null,d=/Mac OS X/.test(navigator.userAgent);return b.supportsCalc=function(){if(null===c){var b=a('<div style="height: 10px; height: -webkit-calc(20px + 0); height: calc(20px);"></div>');c=20===b.appendTo(document.documentElement).height(),b.remove()}return c},b.supportsRequestAnimationFrame=function(){return!!window.requestAnimationFrame},b.supportsVoiceOver=function(){return d},b}),AJS.I18n.keys={},AJS.I18n.keys["aui.words.add"]="Add",AJS.I18n.keys["aui.words.update"]="Update",AJS.I18n.keys["aui.words.delete"]="Delete",AJS.I18n.keys["aui.words.remove"]="Remove",AJS.I18n.keys["aui.words.cancel"]="Cancel",AJS.I18n.keys["aui.words.loading"]="Loading",AJS.I18n.keys["aui.words.close"]="Close",AJS.I18n.keys["aui.enter.value"]="Enter value",AJS.I18n.keys["aui.words.more"]="More",AJS.I18n.keys["aui.words.moreitem"]="More\u2026",AJS.I18n.keys["aui.keyboard.shortcut.type.x"]="Type ''{0}''",AJS.I18n.keys["aui.keyboard.shortcut.then.x"]="then ''{0}''",AJS.I18n.keys["aui.keyboard.shortcut.or.x"]="OR ''{0}''",AJS.I18n.keys["aui.sidebar.expand.tooltip"]="Expand sidebar ( [ )",AJS.I18n.keys["aui.sidebar.collapse.tooltip"]="Collapse sidebar ( [ )",AJS.I18n.keys["aui.validation.message.maxlength"]="Must be fewer than {0} characters",AJS.I18n.keys["aui.validation.message.minlength"]="Must be greater than {0} characters",AJS.I18n.keys["aui.validation.message.matchingfield"]="{0} and {1} do not match.",AJS.I18n.keys["aui.validation.message.matchingfield-novalue"]="These fields do not match.",AJS.I18n.keys["aui.validation.message.doesnotcontain"]="Do not include the phrase {0} in this field",AJS.I18n.keys["aui.validation.message.pattern"]="This field does not match the required format",AJS.I18n.keys["aui.validation.message.required"]="This is a required field",AJS.I18n.keys["aui.validation.message.validnumber"]="Please enter a valid number",AJS.I18n.keys["aui.validation.message.min"]="Enter a value greater than {0}",AJS.I18n.keys["aui.validation.message.max"]="Enter a value less than {0}",AJS.I18n.keys["aui.validation.message.dateformat"]="Enter a valid date",AJS.I18n.keys["aui.validation.message.minchecked"]="Tick at least {0,choice,0#0 checkboxes|1#1 checkbox|1<{0,number} checkboxes}.",AJS.I18n.keys["aui.validation.message.maxchecked"]="Tick at most {0,choice,0#0 checkboxes|1#1 checkbox|1<{0,number} checkboxes}.",AJS.I18n.keys["aui.checkboxmultiselect.clear.selected"]="Clear selected items",AJS.I18n.keys["aui.select.no.suggestions"]="No suggestions",AJS.I18n.keys["aui.select.new.suggestions"]="New suggestions added. Please use the up and down arrows to select.",function(a){var b;AJS.dim=function(d,e){b||(b=a(document.body)),d===!0&&c();var f=!!AJS.dim.$dim&&"false"===AJS.dim.$dim.attr("aria-hidden");return AJS.dim.$dim&&(AJS.dim.$dim.remove(),AJS.dim.$dim=null),AJS.dim.$dim=AJS("div").addClass("aui-blanket"),AJS.dim.$dim.attr("tabindex","0"),AJS.dim.$dim.appendTo(document.body),f||(AJS._internal.animation.recomputeStyle(AJS.dim.$dim),AJS.dim.cachedOverflow=b.css("overflow"),b.css("overflow","hidden")),AJS.dim.$dim.attr("aria-hidden","false"),e&&AJS.dim.$dim.css({"zIndex":e}),AJS.dim.$dim},AJS.undim=function(){AJS.dim.$dim&&(AJS.dim.$dim.attr("aria-hidden","true"),b&&b.css("overflow",AJS.dim.cachedOverflow))};var c=AJS.deprecate.getMessageLogger("useShim",{"extraInfo":"useShim has no alternative as it is now calculated by dim()."})}(AJS.$),function(a){"use strict";AJS.layer=a(AJS.$,AJS._internal.widget),"function"==typeof define&&define("layer",[],function(){return AJS.layer})}(function(a,b){"use strict";function c(a){a.attr("aria-hidden","true")}function d(a){a.attr("aria-hidden","false")}function e(b,c,d){var e=a.Event(g+c),f=a.Event(h+c),j=new CustomEvent(i+d,{"bubbles":!0,"cancelable":!0});return b.trigger(e),b.trigger(f,[b]),b[0].dispatchEvent(j),!e.isDefaultPrevented()&&!f.isDefaultPrevented()&&!j.defaultPrevented}function f(b){this.$el=a(b||'<div class="aui-layer" aria-hidden="true"></div>'),this.$el.addClass("aui-layer")}var g="_aui-internal-layer-",h="_aui-internal-layer-global-",i="aui-layer-",j=a(document);f.prototype={"below":function(){return AJS.LayerManager.global.item(AJS.LayerManager.global.indexOf(this.$el)-1)},"above":function(){return AJS.LayerManager.global.item(AJS.LayerManager.global.indexOf(this.$el)+1)},"changeSize":function(a,b){return this.$el.css("width",a),this.$el.css("height","content"===b?"":b),this},"on":function(a,b){return this.$el.on(g+a,b),this},"off":function(a,b){return this.$el.off(g+a,b),this},"show":function(){return this.isVisible()?(d(this.$el),this):(e(this.$el,"beforeShow","show")&&AJS.LayerManager.global.push(this.$el),this)},"hide":function(){return this.isVisible()?(e(this.$el,"beforeHide","hide")&&AJS.LayerManager.global.popUntil(this.$el),this):(c(this.$el),this)},"isVisible":function(){return"false"===this.$el.attr("aria-hidden")},"remove":function(){this.hide(),this.$el.remove(),this.$el=null},"isBlanketed":function(){return"true"===this.$el.attr("data-aui-blanketed")},"isPersistent":function(){var a=this.$el.attr("modal")||this.$el.attr("data-aui-modal"),b=this.$el.attr("persistent")||this.$el.attr("data-aui-persistent");return"true"===a||"true"===b},"_hideLayer":function(a){(this.isPersistent()||this.isBlanketed())&&AJS.FocusManager.global.exit(this.$el),a&&e(this.$el,"beforeHide","hide"),this.$el.attr("aria-hidden","true"),this.$el.css("z-index",this.$el.data("_aui-layer-cached-z-index")||""),this.$el.data("_aui-layer-cached-z-index",""),this.$el.trigger(g+"hide"),this.$el.trigger(h+"hide",[this.$el])},"_showLayer":function(a){this.$el.parent().is("body")||this.$el.appendTo(document.body),this.$el.data("_aui-layer-cached-z-index",this.$el.css("z-index")),this.$el.css("z-index",a),this.$el.attr("aria-hidden","false"),(this.isPersistent()||this.isBlanketed())&&AJS.FocusManager.global.enter(this.$el),this.$el.trigger(g+"show"),this.$el.trigger(h+"show",[this.$el])}};var k=b("layer",f);return k.on=function(a,b,c){return j.on(h+a,b,c),this},k.off=function(a,b,c){return j.off(h+a,b,c),this},k}),AJS.FocusManager=function(a){function b(){this._focusTrapStack=[],a(document).on("focusout",{"focusTrapStack":this._focusTrapStack},f)}function c(a,b){b.push(a)}function d(a){a.pop()}function e(a){return a.is(".aui-dialog2")}function f(a){var b=a.data.focusTrapStack;if(a.relatedTarget&&0!==b.length){var c=b[b.length-1],d=a.target,e=a.relatedTarget,f=c.find(":aui-tabbable"),g=AJS.$(f.first()),h=AJS.$(f.last()),i=0===c.has(e).length,j=i&&e;j&&(g.is(d)?h.focus():h.is(d)&&g.focus())}}!function(){function b(b){return"visible"===a.css(b,"visibility")}function c(c,d){var e=c.nodeName.toLowerCase();if("aui-select"===e)return!0;if("area"===e){var f=c.parentNode,g=f.name,h=a("img[usemap=#"+g+"]").get();return c.href&&g&&"map"===f.nodeName.toLowerCase()?h&&b(h):!1}var i=/input|select|textarea|button|object/.test(e),j="a"===e,k=c.href||d;return(i?!c.disabled:j?k:d)&&b(c)}function d(b){var d=a.attr(b,"tabindex"),e=isNaN(d),f=e||d>=0;return f&&c(b,!e)}a.extend(a.expr[":"],{"aui-focusable":function(b){return c(b,!isNaN(a.attr(b,"tabindex")))},"aui-tabbable":d})}();var g="_aui-focus-restore";return b.defaultFocusSelector=":aui-tabbable",b.prototype.enter=function(d){if(d.data(g,a(document.activeElement)),"false"!==d.attr("data-aui-focus")){var f=d.attr("data-aui-focus-selector")||b.defaultFocusSelector,h=d.is(f)?d:d.find(f);h.first().focus()}e(d)&&c(d,this._focusTrapStack)},b.prototype.exit=function(b){e(b)&&d(this._focusTrapStack);var c=document.activeElement;(b[0]===c||b.has(c).length)&&a(c).blur();var f=b.data(g);f&&f.length&&(b.removeData(g),f.focus())},b.global=new b,b}(AJS.$),function(a){"use strict";function b(a,b){for(var c=a.length;c--;)if(b(a[c]))return c;return-1}function c(a,c){return b(a,function(a){return a[0]===c[0]})}function d(a){return b(a,function(a){return AJS.layer(a).isBlanketed()})}function e(a){var b;if(a.length){var c=a[a.length-1],d=parseInt(c.css("z-index"),10);b=(isNaN(d)?0:d)+100}else b=0;return Math.max(3e3,b)}function f(a,b){var c=d(a);b!==c&&(c>-1?AJS.dim(!1,a[c].css("z-index")-20):AJS.undim())}function g(a,b,c){if(!(0>b))for(var d=a.length-1;d>=b;d--){var e=a[d],f=AJS.layer(e);(c||!f.isPersistent())&&(f._hideLayer(!0),a.splice(d,1))}}function h(a){var b=j(a);return b.length>0?b.closest(".aui-layer"):void 0}function i(a){return j(a).length>0}function j(b){return a('[aria-controls="'+b.attr("id")+'"]')}function k(){this._stack=[]}k.prototype={"push":function(b){var d=b instanceof a?b:a(b);if(c(this._stack,d)>=0)throw new Error("The given element is already an active layer.");this.popLayersBeside(d);var f=AJS.layer(d),g=e(this._stack);return f._showLayer(g),f.isBlanketed()&&AJS.dim(!1,g-20),this._stack.push(d),this},"popLayersBeside":function(b){var c=b instanceof a?b:a(b);if(!i(c)){var e=d(this._stack);return void g(this._stack,++e,!1)}var f=h(c);if(f){var j=this.indexOf(f);g(this._stack,++j,!1)}else g(this._stack,0,!1)},"indexOf":function(b){return c(this._stack,a(b))},"item":function(a){return this._stack[a]},"hideAll":function(){return this._stack.reverse().forEach(function(a){var b=AJS.layer(a);b.isBlanketed()||b.isPersistent()||b.hide()}),this},"getNextLowerNonPersistentOrBlanketedLayer":function(b){var d=b instanceof a?b:a(b),e=c(this._stack,d);if(0>e)return null;var f;for(e--;e>=0;){f=this._stack[e];var g=AJS.layer(f);if(!g.isPersistent()||g.isBlanketed())return f;e--}return null},"getNextHigherNonPeristentAndNonBlanketedLayer":function(b){var d=b instanceof a?b:a(b),e=c(this._stack,d);if(0>e)return null;var f;for(e++;e<this._stack.length;){f=this._stack[e];var g=AJS.layer(f);if(!g.isPersistent()&&!g.isBlanketed())return f;e++}return null},"popUntil":function(b){var e=b instanceof a?b:a(b),h=c(this._stack,e);if(-1===h)return null;var i=d(this._stack);return g(this._stack,h+1,AJS.layer(e).isBlanketed()),AJS.layer(e)._hideLayer(),this._stack.splice(h,1),f(this._stack,i),e},"getTopLayer":function(){if(!this._stack.length)return null;var a=this._stack[this._stack.length-1];return a},"popTopIfNonPersistent":function(){var a=this.getTopLayer(),b=AJS.layer(a);return!a||b.isPersistent()?null:this.popUntil(a)},"popUntilTopBlanketed":function(){var a=d(this._stack);if(0>a)return null;var b=this._stack[a],e=AJS.layer(b);if(e.isPersistent()){var h=this.getNextHigherNonPeristentAndNonBlanketedLayer(b);if(h){var i=c(this._stack,h);return g(this._stack,i,!0),h}return null}return g(this._stack,a,!0),f(this._stack,a),b},"popUntilTopPersistent":function(){var a=AJS.LayerManager.global.getTopLayer();if(a){var b,e=d(this._stack),h=AJS.layer(a);if(h.isPersistent()){if(h.isBlanketed())return;if(a=AJS.LayerManager.global.getNextLowerNonPersistentOrBlanketedLayer(a),h=AJS.layer(a),!a||h.isPersistent())return;
b=c(this._stack,a),g(this._stack,b,!0),f(this._stack,e)}else b=c(this._stack,a),g(this._stack,b,!0),f(this._stack,e)}}},AJS.LayerManager=k}(AJS.$),function(){"use strict";AJS.keyCode={"ALT":18,"BACKSPACE":8,"CAPS_LOCK":20,"COMMA":188,"COMMAND":91,"COMMAND_LEFT":91,"COMMAND_RIGHT":93,"CONTROL":17,"DELETE":46,"DOWN":40,"END":35,"ENTER":13,"ESCAPE":27,"HOME":36,"INSERT":45,"LEFT":37,"MENU":93,"NUMPAD_ADD":107,"NUMPAD_DECIMAL":110,"NUMPAD_DIVIDE":111,"NUMPAD_ENTER":108,"NUMPAD_MULTIPLY":106,"NUMPAD_SUBTRACT":109,"PAGE_DOWN":34,"PAGE_UP":33,"PERIOD":190,"RIGHT":39,"SHIFT":16,"SPACE":32,"TAB":9,"UP":38,"WINDOWS":91}}(),function(a){"use strict";function b(){f.on("keydown",function(a){a.keyCode===AJS.keyCode.ESCAPE&&(AJS.LayerManager.global.popUntilTopPersistent(),a.preventDefault())})}function c(){f.on("click",".aui-blanket",function(a){AJS.LayerManager.global.popUntilTopBlanketed()&&a.preventDefault()})}function d(){f.on("click",function(b){var c=a(b.target);if(!c.closest(".aui-blanket").length){var d=c.closest("[aria-controls]"),f=c.closest(".aui-layer");if(!f.length&&!e(d))return void AJS.LayerManager.global.hideAll();if(!e(d)&&f.length){var g=AJS.LayerManager.global.getNextHigherNonPeristentAndNonBlanketedLayer(f);g&&AJS.layer(g).hide()}}})}function e(a){if(!a.length)return!1;var b=document.getElementById(a.attr("aria-controls"));return AJS.LayerManager.global.indexOf(b)>-1}var f=a(document);b(),c(),d(),AJS.LayerManager.global=new AJS.LayerManager}(AJS.$),function(a){"use strict";AJS.dialog2=a(AJS.$,AJS.layer,AJS._internal.widget)}(function(a,b,c){"use strict";function d(b){a.each(f,function(a,c){var d="data-"+a;b[0].hasAttribute(d)||b.attr(d,c)})}function e(b){this.$el=a(b?b:aui.dialog.dialog2({})),d(this.$el)}var f={"aui-focus":"false","aui-blanketed":"true"};e.prototype.on=function(a,c){return b(this.$el).on(a,c),this},e.prototype.off=function(a,c){return b(this.$el).off(a,c),this},e.prototype.show=function(){return b(this.$el).show(),this},e.prototype.hide=function(){return b(this.$el).hide(),this},e.prototype.remove=function(){return b(this.$el).remove(),this},e.prototype.isVisible=function(){return b(this.$el).isVisible()};var g=c("dialog2",e);return g.on=function(a,c){return b.on(a,".aui-dialog2",c),this},g.off=function(a,c){return b.off(a,".aui-dialog2",c),this},a(document).on("click",".aui-dialog2-header-close",function(b){b.preventDefault(),g(a(this).closest(".aui-dialog2")).hide()}),g.on("show",function(a,b){var c,d=[".aui-dialog2-content",".aui-dialog2-footer",".aui-dialog2-header"];d.some(function(a){return c=b.find(a+" :aui-tabbable"),c.length}),c&&c.first().focus()}),g.on("hide",function(a,c){var d=b(c);c.data("aui-remove-on-hide")&&d.remove()}),g}),function(){function a(a,b){b=b||"";var c=new RegExp(f(a)+"=([^|]+)"),d=b.match(c);return d&&d[1]}function b(a,b,c){var d=new RegExp("(\\s|\\|)*\\b"+f(a)+"=[^|]*[|]*");if(c=c||"",c=c.replace(d,"|"),""!==b){var e=a+"="+b;c.length+e.length<4020&&(c+="|"+e)}return c.replace(i,"|")}function c(a){return a.replace(h,"")}function d(a){var b=new RegExp("\\b"+f(a)+"=((?:[^\\\\;]+|\\\\.)*)(?:;|$)"),d=document.cookie.match(b);return d&&c(d[1])}function e(a,b,c){var d,e="",f='"'+b.replace(j,'\\"')+'"';c&&(d=new Date,d.setTime(+d+24*c*60*60*1e3),e="; expires="+d.toGMTString()),document.cookie=a+"="+f+e+";path=/"}function f(a){return a.replace(k,"\\$&")}var g="AJS.conglomerate.cookie",h=/(\\|^"|"$)/g,i=/\|\|+/g,j=/"/g,k=/[.*+?|^$()[\]{\\]/g;AJS.Cookie={"save":function(a,c,f){var h=d(g);h=b(a,c,h),e(g,h,f||365)},"read":function(b,c){var e=d(g),f=a(b,e);return null!=f?f:c},"erase":function(a){this.save(a,"")}},AJS.deprecate.prop(AJS.Cookie,"save",{"alternativeName":"AJS.cookie"})}(),AJS.bind=function(a,b,c){try{return"function"==typeof c?AJS.$(window).bind(a,b,c):AJS.$(window).bind(a,b)}catch(d){AJS.log("error while binding: "+d.message)}},AJS.unbind=function(a,b){try{return AJS.$(window).unbind(a,b)}catch(c){AJS.log("error while unbinding: "+c.message)}},AJS.trigger=function(a,b){try{return AJS.$(window).trigger(a,b)}catch(c){AJS.log("error while triggering: "+c.message)}},AJS.popup=function(a){var b={"width":800,"height":600,"closeOnOutsideClick":!1,"keypressListener":function(a){27===a.keyCode&&c.is(":visible")&&i.hide()}};"object"!=typeof a&&(a={"width":arguments[0],"height":arguments[1],"id":arguments[2]},a=AJS.$.extend({},a,arguments[3])),a=AJS.$.extend({},b,a);var c=AJS("div").addClass("aui-popup");a.id&&c.attr("id",a.id);var d=3e3;AJS.$(".aui-dialog").each(function(){var a=AJS.$(this);d=a.css("z-index")>d?a.css("z-index"):d});var e=function(b,e){return a.width=b=b||a.width,a.height=e=e||a.height,c.css({"marginTop":-Math.round(e/2)+"px","marginLeft":-Math.round(b/2)+"px","width":b,"height":e,"z-index":parseInt(d,10)+2}),arguments.callee}(a.width,a.height);AJS.$("body").append(c),c.hide(),AJS.enable(c);var f=AJS.$(".aui-blanket"),g=function(a,b){var c=AJS.$(a,b);return c.length?(c.focus(),!0):!1},h=function(b){if(0===AJS.$(".dialog-page-body",b).find(":focus").length){if(a.focusSelector)return g(a.focusSelector,b);var c=":input:visible:enabled:first";g(c,AJS.$(".dialog-page-body",b))||g(c,AJS.$(".dialog-button-panel",b))||g(c,AJS.$(".dialog-page-menu",b))}},i={"changeSize":function(b,c){(b&&b!=a.width||c&&c!=a.height)&&e(b,c),this.show()},"show":function(){var b=function(){AJS.$(document).off("keydown",a.keypressListener).on("keydown",a.keypressListener),AJS.dim(),f=AJS.$(".aui-blanket"),0!=f.size()&&a.closeOnOutsideClick&&f.click(function(){c.is(":visible")&&i.hide()}),c.show(),AJS.popup.current=this,h(c),AJS.$(document).trigger("showLayer",["popup",this])};b.call(this),this.show=b},"hide":function(){AJS.$(document).unbind("keydown",a.keypressListener),f.unbind(),this.element.hide(),0==AJS.$(".aui-dialog:visible").size()&&AJS.undim();var b=document.activeElement;this.element.has(b).length&&b.blur(),AJS.$(document).trigger("hideLayer",["popup",this]),AJS.popup.current=null,this.enable()},"element":c,"remove":function(){c.remove(),this.element=null},"disable":function(){this.disabled||(this.popupBlanket=AJS.$("<div class='dialog-blanket'> </div>").css({"height":c.height(),"width":c.width()}),c.append(this.popupBlanket),this.disabled=!0)},"enable":function(){this.disabled&&(this.disabled=!1,this.popupBlanket.remove(),this.popupBlanket=null)}};return i},function(){function a(a,b,c,d){a.buttonpanel||a.addButtonPanel(),this.page=a,this.onclick=c,this._onclick=function(b){return c.call(this,a.dialog,a,b)===!0},this.item=AJS("button",b).addClass("button-panel-button"),d&&this.item.addClass(d),"function"==typeof c&&this.item.click(this._onclick),a.buttonpanel.append(this.item),this.id=a.button.length,a.button[this.id]=this}function b(a,b,c,d,e){a.buttonpanel||a.addButtonPanel(),e||(e="#"),this.page=a,this.onclick=c,this._onclick=function(b){return c.call(this,a.dialog,a,b)===!0},this.item=AJS("a",b).attr("href",e).addClass("button-panel-link"),d&&this.item.addClass(d),"function"==typeof c&&this.item.click(this._onclick),a.buttonpanel.append(this.item),this.id=a.button.length,a.button[this.id]=this}function c(a,b){var c="left"==a?-1:1;return function(a){var d=this.page[b];if(this.id!=(1==c?d.length-1:0)){c*=a||1,d[this.id+c].item[0>c?"before":"after"](this.item),d.splice(this.id,1),d.splice(this.id+c,0,this);for(var e=0,f=d.length;f>e;e++)"panel"==b&&this.page.curtab==d[e].id&&(this.page.curtab=e),d[e].id=e}return this}}function d(a){return function(){this.page[a].splice(this.id,1);for(var b=0,c=this.page[a].length;c>b;b++)this.page[a][b].id=b;this.item.remove()}}a.prototype.moveUp=a.prototype.moveLeft=c("left","button"),a.prototype.moveDown=a.prototype.moveRight=c("right","button"),a.prototype.remove=d("button"),a.prototype.html=function(a){return this.item.html(a)},a.prototype.onclick=function(a){return"undefined"==typeof a?this.onclick:(this.item.unbind("click",this._onclick),this._onclick=function(b){return a.call(this,page.dialog,page,b)===!0},"function"==typeof a&&this.item.click(this._onclick),void 0)};var e=20,f=function(a,b,c,d,f){c instanceof AJS.$||(c=AJS.$(c)),this.dialog=a.dialog,this.page=a,this.id=a.panel.length,this.button=AJS("button").html(b).addClass("item-button"),f&&(this.button[0].id=f),this.item=AJS("li").append(this.button).addClass("page-menu-item"),this.body=AJS("div").append(c).addClass("dialog-panel-body").css("height",a.dialog.height+"px"),this.padding=e,d&&this.body.addClass(d);var g=a.panel.length,h=this;a.menu.append(this.item),a.body.append(this.body),a.panel[g]=this;var i=function(){var b;a.curtab+1&&(b=a.panel[a.curtab],b.body.hide(),b.item.removeClass("selected"),"function"==typeof b.onblur&&b.onblur()),a.curtab=h.id,h.body.show(),h.item.addClass("selected"),"function"==typeof h.onselect&&h.onselect(),"function"==typeof a.ontabchange&&a.ontabchange(h,b)};this.button.click?this.button.click(i):(AJS.log("atlassian-dialog:Panel:constructor - this.button.click false"),this.button.onclick=i),i(),0==g?a.menu.css("display","none"):a.menu.show()};f.prototype.select=function(){this.button.click()},f.prototype.moveUp=f.prototype.moveLeft=c("left","panel"),f.prototype.moveDown=f.prototype.moveRight=c("right","panel"),f.prototype.remove=d("panel"),f.prototype.html=function(a){return a?(this.body.html(a),this):this.body.html()},f.prototype.setPadding=function(a){return isNaN(+a)||(this.body.css("padding",+a),this.padding=+a,this.page.recalcSize()),this};var g=56,h=51,i=50,j=function(a,b){this.dialog=a,this.id=a.page.length,this.element=AJS("div").addClass("dialog-components"),this.body=AJS("div").addClass("dialog-page-body"),this.menu=AJS("ul").addClass("dialog-page-menu").css("height",a.height+"px"),this.body.append(this.menu),this.curtab,this.panel=[],this.button=[],b&&this.body.addClass(b),a.popup.element.append(this.element.append(this.menu).append(this.body)),a.page[a.page.length]=this};j.prototype.recalcSize=function(){for(var a=this.header?g:0,b=this.buttonpanel?h:0,c=this.panel.length;c--;){var d=this.dialog.height-a-b;this.panel[c].body.css("height",d),this.menu.css("height",d)}},j.prototype.addButtonPanel=function(){this.buttonpanel=AJS("div").addClass("dialog-button-panel"),this.element.append(this.buttonpanel)},j.prototype.addPanel=function(a,b,c,d){return new f(this,a,b,c,d),this.recalcSize(),this},j.prototype.addHeader=function(a,b){return this.header&&this.header.remove(),this.header=AJS("h2").text(a||"").addClass("dialog-title"),b&&this.header.addClass(b),this.element.prepend(this.header),this.recalcSize(),this},j.prototype.addButton=function(b,c,d){return new a(this,b,c,d),this.recalcSize(),this},j.prototype.addLink=function(a,c,d,e){return new b(this,a,c,d,e),this.recalcSize(),this},j.prototype.gotoPanel=function(a){this.panel[a.id||a].select()},j.prototype.getCurrentPanel=function(){return this.panel[this.curtab]},j.prototype.hide=function(){this.element.hide()},j.prototype.show=function(){this.element.show()},j.prototype.remove=function(){this.element.remove()},AJS.Dialog=function(a,b,c){var d={};+a||(d=Object(a),a=d.width,b=d.height,c=d.id),this.height=b||480,this.width=a||640,this.id=c,d=AJS.$.extend({},d,{"width":this.width,"height":this.height,"id":this.id}),this.popup=AJS.popup(d),this.popup.element.addClass("aui-dialog"),this.page=[],this.curpage=0,new j(this)},AJS.Dialog.prototype.addHeader=function(a,b){return this.page[this.curpage].addHeader(a,b),this},AJS.Dialog.prototype.addButton=function(a,b,c){return this.page[this.curpage].addButton(a,b,c),this},AJS.Dialog.prototype.addLink=function(a,b,c,d){return this.page[this.curpage].addLink(a,b,c,d),this},AJS.Dialog.prototype.addSubmit=function(a,b){return this.page[this.curpage].addButton(a,b,"button-panel-submit-button"),this},AJS.Dialog.prototype.addCancel=function(a,b){return this.page[this.curpage].addLink(a,b,"button-panel-cancel-link"),this},AJS.Dialog.prototype.addButtonPanel=function(){return this.page[this.curpage].addButtonPanel(),this},AJS.Dialog.prototype.addPanel=function(a,b,c,d){return this.page[this.curpage].addPanel(a,b,c,d),this},AJS.Dialog.prototype.addPage=function(a){return new j(this,a),this.page[this.curpage].hide(),this.curpage=this.page.length-1,this},AJS.Dialog.prototype.nextPage=function(){return this.page[this.curpage++].hide(),this.curpage>=this.page.length&&(this.curpage=0),this.page[this.curpage].show(),this},AJS.Dialog.prototype.prevPage=function(){return this.page[this.curpage--].hide(),this.curpage<0&&(this.curpage=this.page.length-1),this.page[this.curpage].show(),this},AJS.Dialog.prototype.gotoPage=function(a){return this.page[this.curpage].hide(),this.curpage=a,this.curpage<0?this.curpage=this.page.length-1:this.curpage>=this.page.length&&(this.curpage=0),this.page[this.curpage].show(),this},AJS.Dialog.prototype.getPanel=function(a,b){var c=null==b?this.curpage:a;return null==b&&(b=a),this.page[c].panel[b]},AJS.Dialog.prototype.getPage=function(a){return this.page[a]},AJS.Dialog.prototype.getCurrentPanel=function(){return this.page[this.curpage].getCurrentPanel()},AJS.Dialog.prototype.gotoPanel=function(a,b){if(null!=b){var c=a.id||a;this.gotoPage(c)}this.page[this.curpage].gotoPanel("undefined"==typeof b?a:b)},AJS.Dialog.prototype.show=function(){return this.popup.show(),AJS.trigger("show.dialog",{"dialog":this}),this},AJS.Dialog.prototype.hide=function(){return this.popup.hide(),AJS.trigger("hide.dialog",{"dialog":this}),this},AJS.Dialog.prototype.remove=function(){this.popup.hide(),this.popup.remove(),AJS.trigger("remove.dialog",{"dialog":this})},AJS.Dialog.prototype.disable=function(){return this.popup.disable(),this},AJS.Dialog.prototype.enable=function(){return this.popup.enable(),this},AJS.Dialog.prototype.get=function(a){var b=[],c=this,d='#([^"][^ ]*|"[^"]*")',e=":(\\d+)",f="page|panel|button|header",g="(?:("+f+")(?:"+d+"|"+e+")?|"+d+")",h=new RegExp("(?:^|,)\\s*"+g+"(?:\\s+"+g+")?\\s*(?=,|$)","ig");(a+"").replace(h,function(a,d,e,f,g,h,i,j,k){d=d&&d.toLowerCase();var l=[];if("page"==d&&c.page[f]?(l.push(c.page[f]),d=h,d=d&&d.toLowerCase(),e=i,f=j,g=k):l=c.page,e=e&&(e+"").replace(/"/g,""),i=i&&(i+"").replace(/"/g,""),g=g&&(g+"").replace(/"/g,""),k=k&&(k+"").replace(/"/g,""),d||g)for(var m=l.length;m--;){if(g||"panel"==d&&(e||!e&&null==f))for(var n=l[m].panel.length;n--;)(l[m].panel[n].button.html()==g||l[m].panel[n].button.html()==e||"panel"==d&&!e&&null==f)&&b.push(l[m].panel[n]);if(g||"button"==d&&(e||!e&&null==f))for(var n=l[m].button.length;n--;)(l[m].button[n].item.html()==g||l[m].button[n].item.html()==e||"button"==d&&!e&&null==f)&&b.push(l[m].button[n]);l[m][d]&&l[m][d][f]&&b.push(l[m][d][f]),"header"==d&&l[m].header&&b.push(l[m].header)}else b=b.concat(l)});for(var i={"length":b.length},j=b.length;j--;){i[j]=b[j];for(var k in b[j])k in i||!function(a){i[a]=function(){for(var b=this.length;b--;)"function"==typeof this[b][a]&&this[b][a].apply(this[b],arguments)}}(k)}return i},AJS.Dialog.prototype.updateHeight=function(){for(var a=0,b=AJS.$(window).height()-g-h-2*i,c=0;this.getPanel(c);c++)this.getPanel(c).body.css({"height":"auto","display":"block"}).outerHeight()>a&&(a=Math.min(b,this.getPanel(c).body.outerHeight())),c!==this.page[this.curpage].curtab&&this.getPanel(c).body.css({"display":"none"});for(c=0;this.getPanel(c);c++)this.getPanel(c).body.css({"height":a||this.height});this.page[0].menu.height(a),this.height=a+g+h+1,this.popup.changeSize(void 0,this.height)},AJS.Dialog.prototype.isMaximised=function(){return this.popup.element.outerHeight()>=AJS.$(window).height()-2*i},AJS.Dialog.prototype.getCurPanel=function(){return this.getPanel(this.page[this.curpage].curtab)},AJS.Dialog.prototype.getCurPanelButton=function(){return this.getCurPanel().button},AJS.Dialog=AJS.deprecate.construct(AJS.Dialog,"Dialog constructor",{"alternativeName":"Dialog2"}),AJS.popup=AJS.deprecate.construct(AJS.popup,"Dialog popup constructor",{"alternatveName":"Dialog2"})}(),function(a,b,c,d,e){"use strict";function f(b){return a(b).is('.checked, .aui-dropdown2-checked, [aria-checked="true"]')}function g(b){return a('[aria-controls="'+b.id+'"]')[0]}function h(a,b){var c=g(a);c&&b(c)}function i(b,c){var d=a(b);c?(d.attr("aria-expanded","true"),d.addClass("active aui-dropdown2-active")):(d.attr("aria-expanded","false"),d.removeClass("active aui-dropdown2-active"))}function j(b){function c(a){if(a.preventDefault(),b.isEnabled()){var c=document.getElementById(f);return c.toggle(),c.isSubmenu=b.hasSubmenu(),c}}function d(a){if(a.preventDefault(),b.isEnabled()&&b.hasSubmenu()){var c=document.getElementById(f);return c.show(),c.isSubmenu=b.hasSubmenu(),c}}function e(a){var d=a.keyCode===AJS.keyCode.ENTER||a.keyCode===AJS.keyCode.SPACE,e=a.keyCode===AJS.keyCode.RIGHT&&b.hasSubmenu(),f=(a.keyCode===AJS.keyCode.UP||a.keyCode===AJS.keyCode.DOWN)&&!b.hasSubmenu();if(d||e||f){var g=c(a);g&&g.focusItem(0)}}var f=b.getAttribute("aria-controls");f||(f=b.getAttribute("aria-owns"),f?(b.removeAttribute("aria-owns"),b.setAttribute("aria-controls",f)):AJS.error('Dropdown triggers need either a "aria-owns" or "aria-controls" attribute')),b.setAttribute("aria-haspopup",!0),b.setAttribute("aria-expanded",!1),b.setAttribute("href","#"),a(b).on("aui-button-invoke",c).on("click",c).on("keydown",e).on("mouseenter",d)}function k(){a(document).on("mousedown",".aui-dropdown2-trigger",function(){var a=this.hasAttribute("resolved");if(!a){c.init(this);var b=AJS.deprecate.getMessageLogger("Dropdown2 lazy initialisation",{"removeInVersion":"6.0.0","alternativeName":"initialisation on DOM insertion","sinceVersion":"5.8.0","extraInfo":"Dropdown2 triggers should have all necessary attributes on DOM insertion","deprecationType":"JS"});b()}})}function l(b,c){return a(b).find('> ul > li, > .aui-dropdown2-section > ul > li, > div > .aui-dropdown2-section > div[role="group"] > ul > li').filter(c).children('a, button, [role="checkbox"], [role="menuitemcheckbox"], [role="radio"], [role="menuitemradio"]')}function m(a){return l(a,function(){return!0})}function n(a){return l(a,function(){return-1===this.className.indexOf("hidden")})}function o(b){var c=a(b);c.attr("tabindex","-1"),(c.hasClass("aui-dropdown2-disabled")||c.parent().hasClass("aui-dropdown2-hidden"))&&c.attr("aria-disabled",!0)}function p(a){m(a).each(function(){o(this)})}function q(b){var c=a(b),d=c.find(".hidden").addClass("aui-dropdown2-hidden"),e=c.find(".disabled").addClass("aui-dropdown2-disabled"),f=c.find(".interactive").addClass("aui-dropdown2-interactive");return function(){d.removeClass("aui-dropdown2-hidden"),e.removeClass("aui-dropdown2-disabled"),f.removeClass("aui-dropdown2-interactive")}}function r(a,c){var d=a.getAttribute("data-aui-alignment");d||(d="bottom auto",c&&c.hasSubmenu&&c.hasSubmenu()&&(d="submenu auto"),a.setAttribute("data-aui-alignment",d),a.setAttribute("data-aui-alignment-static",!0)),a._auiAlignment&&a._auiAlignment.destroy(),a._auiAlignment=new b(a,c),a._auiAlignment.enable()}function s(a,b){var c=b.getAttribute("data-dropdown2-hide-location");return document.getElementById(c)||a.parentNode}function t(b){AJS.layer(b),b.addEventListener("aui-layer-show",function(){a(b).trigger("aui-dropdown2-show"),b._syncClasses=q(b),p(this),h(b,function(a){i(a,!0),b._returnTo=s(b,a)})}),b.addEventListener("aui-layer-hide",function(){a(b).trigger("aui-dropdown2-hide"),b._syncClasses&&(b._syncClasses(),delete b._syncClasses),b._auiAlignment&&(b._auiAlignment.disable(),b._auiAlignment.destroy()),b._returnTo&&(b.parentNode&&b.parentNode!==b._returnTo&&b.parentNode.removeChild(b),b._returnTo.appendChild(b)),n(b).removeClass("active aui-dropdown2-active"),h(b,function(a){v()?(a.focus(),i(a,a.hasSubmenu&&a.hasSubmenu())):i(a,!1)}),delete b.isSubmenu})}function u(){z=!0}function v(){var a=z===!0;return z=!1,a}function w(b){var c=a(b);c.on("keydown",function(a){a.keyCode===AJS.keyCode.DOWN?(b.focusNext(),a.preventDefault()):a.keyCode===AJS.keyCode.UP?(b.focusPrevious(),a.preventDefault()):a.keyCode===AJS.keyCode.LEFT?b.isSubmenu&&(u(),b.hide(),a.preventDefault()):a.keyCode===AJS.keyCode.ESCAPE?u():a.keyCode===AJS.keyCode.TAB&&(u(),b.hide())}),c.on("click",'a, button, [role="menuitem"], [role="menuitemcheckbox"], [role="checkbox"], [role="menuitemradio"], [role="radio"]',function(c){var d=a(c.target);if("true"===d.attr("aria-disabled")&&c.preventDefault(),!c.isDefaultPrevented()&&!d.is(".aui-dropdown2-interactive")){var e=b;do{var f=AJS.layer(e);e=AJS.layer(e).below(),f.$el.is(".aui-dropdown2")&&f.hide()}while(e)}}),c.on("mouseenter",'a, button, [role="menuitem"], [role="menuitemcheckbox"], [role="checkbox"], [role="menuitemradio"], [role="radio"]',function(a){var c=a.target,d=c.hasSubmenu&&c.hasSubmenu();if(!a.isDefaultPrevented()&&!d){var e=AJS.layer(b).above();e&&AJS.layer(e).hide()}})}function x(b){var c=a(b);c.addClass("aui-dropdown2"),e.supportsVoiceOver()&&c.find('> div[role="application"]').attr("role","presentation"),b.hasAttribute("data-container")&&(c.attr("data-aui-alignment-container",c.attr("data-container")),c.removeAttr("data-container")),t(b),w(b),b.hide()}var y={"disable":function(){this.setAttribute("aria-disabled","true")},"enable":function(){this.setAttribute("aria-disabled","false")},"isEnabled":function(){return"true"!==this.getAttribute("aria-disabled")},"hasSubmenu":function(){var a=(this.className||"").split(/\s+/);return-1!==a.indexOf("aui-dropdown2-sub-trigger")}};c("aui-dropdown2-trigger",{"type":c.types.CLASS,"created":j,"prototype":y}),k(),c("aui-dropdown2-sub-trigger",{"type":c.types.CLASS,"created":function(a){a.className+=" aui-dropdown2-trigger",c.init(a)}}),a(document).on("mouseenter",".aui-dropdown2-trigger-group a, .aui-dropdown2-trigger-group button",function(b){var c,d=a(b.target);d.is(".aui-dropdown2-active")||d.closest(".aui-dropdown2").size()||(c=d.closest(".aui-dropdown2-trigger-group").find(".aui-dropdown2-active").size(),c&&d.is(".aui-dropdown2-trigger")&&(d.trigger("aui-button-invoke"),b.preventDefault()))});var z=!1,A={"toggle":function(){this.isVisible()?this.hide():this.show()},"show":function(){AJS.layer(this).show();var a=this;return h(a,function(b){r(a,b)}),this},"hide":function(){return AJS.layer(this).hide(),this},"focusNext":function(){var a,b=n(this),c=document.activeElement;b.last()[0]!==c&&(a=b.toArray().indexOf(c),this.focusItem(b.get(a+1)))},"focusPrevious":function(){var a,b=n(this),c=document.activeElement;b.first()[0]!==c&&(a=b.toArray().indexOf(c),this.focusItem(b.get(a-1)))},"focusItem":function(b){var c,d=n(this);"number"==typeof b&&(b=d.get(b)),c=a(b),c.focus(),d.removeClass("active aui-dropdown2-active"),c.addClass("active aui-dropdown2-active")},"isVisible":function(){return AJS.layer(this).isVisible()}};c("aui-dropdown",{"attributes":{"label":function(a,b){a.children[0].textContent=b.newValue}},"created":function(a){var b=a.children[1],c=a.children[0];b.id=a.id+"-dropdown",c.id=a.id+"-trigger",c.setAttribute("aria-controls",b.id),c.setAttribute("aria-owns",b.id),Object.keys(A).forEach(function(c){a[c]=a[c].bind(b)}),t(b),w(b),a.hide()},"prototype":A,"template":window.skateTemplateHtml('<a class="aui-dropdown2-trigger" href="#"></a>','<div aria-hidden="true" class="aui-dropdown2 aui-style-default" role="menu">','<div role="application">','<content select="ul"></content>',"</div>","</div>"),"type":c.types.TAG}),c("aui-dropdown2",{"type":c.types.CLASS,"created":x,"prototype":A}),c("data-aui-dropdown2",{"type":c.types.ATTR,"created":x,"prototype":A}),c("aui-dropdown2-checkbox",{"type":c.types.CLASS,"created":function(b){var c=f(b);b.setAttribute("aria-checked",c),b.setAttribute("tabindex","0"),e.supportsVoiceOver()&&b.setAttribute("role","checkbox"),a(b).on("click keydown",function(a){("click"===a.type||a.keyCode===AJS.keyCode.ENTER||a.keyCode===AJS.keyCode.SPACE)&&(b.isInteractive()&&a.preventDefault(),b.isDisabled()===!1&&(b.isChecked()?b.uncheck():b.check()))})},"prototype":{"isDisabled":function(){return null!==this.getAttribute("aria-disabled")&&"true"===this.getAttribute("aria-disabled")},"isChecked":function(){return null!==this.getAttribute("aria-checked")&&"true"===this.getAttribute("aria-checked")},"isInteractive":function(){return a(this).hasClass("aui-dropdown2-interactive")},"uncheck":function(){this.setAttribute("aria-checked","false"),a(this).removeClass("checked aui-dropdown2-checked"),a(this).trigger("aui-dropdown2-item-uncheck")},"check":function(){this.setAttribute("aria-checked","true"),a(this).addClass("checked aui-dropdown2-checked"),a(this).trigger("aui-dropdown2-item-check")}}}),c("aui-dropdown2-radio",{"type":c.types.CLASS,"created":function(b){var c=f(b);b.setAttribute("aria-checked",c),b.setAttribute("tabindex","0"),e.supportsVoiceOver()&&b.setAttribute("role","radio"),a(b).on("click keydown",function(c){if("click"===c.type||c.keyCode===AJS.keyCode.ENTER||c.keyCode===AJS.keyCode.SPACE){b.isInteractive()&&c.preventDefault();var d=a(this);this.isDisabled()===!1&&this.isChecked()===!1&&(d.closest("ul").find(".aui-dropdown2-checked").not(this).each(function(){this.uncheck()}),b.check())}})},"prototype":{"isDisabled":function(){return null!==this.getAttribute("aria-disabled")&&"true"===this.getAttribute("aria-disabled")},"isChecked":function(){return null!==this.getAttribute("aria-checked")&&"true"===this.getAttribute("aria-checked")},"isInteractive":function(){return a(this).hasClass("aui-dropdown2-interactive")},"uncheck":function(){this.setAttribute("aria-checked","false"),a(this).removeClass("checked aui-dropdown2-checked"),a(this).trigger("aui-dropdown2-item-uncheck")},"check":function(){this.setAttribute("aria-checked","true"),a(this).addClass("checked aui-dropdown2-checked"),a(this).trigger("aui-dropdown2-item-check")}}})}(AJS.$,AJS.Alignment,window.skate,window.skateTemplateHtml,AJS._internal.browser),AJS.inlineHelp=function(){AJS.$(".icon-inline-help").click(function(){var a=AJS.$(this).siblings(".field-help");a.hasClass("hidden")?a.removeClass("hidden"):a.addClass("hidden")})},function(a){function b(b){var c=a(b),d=a.extend({"left":0,"top":0},c.offset());return{"left":d.left,"top":d.top,"width":c.outerWidth(),"height":c.outerHeight()}}function c(a,b,c,d){var e=AJS.$.isFunction(d.offsetX)?d.offsetX(a,b,c,d):d.offsetX,f=AJS.$.isFunction(d.offsetY)?d.offsetY(a,b,c,d):d.offsetY,g=AJS.$.isFunction(d.arrowOffsetX)?d.arrowOffsetX(a,b,c,d):d.arrowOffsetX,h=AJS.$.isFunction(d.arrowOffsetY)?d.arrowOffsetY(a,b,c,d):d.arrowOffsetY,i="body"!==d.container.toLowerCase(),j=AJS.$(d.container),k=i?AJS.$(d.container).parent():AJS.$(window),l=i?j.offset():{"left":0,"top":0},m=i?k.offset():{"left":0,"top":0},n=b.target,o=n.offset(),p=n[0].getBBox&&n[0].getBBox();return{"screenPadding":10,"arrowMargin":5,"window":{"top":m.top,"left":m.left,"scrollTop":k.scrollTop(),"scrollLeft":k.scrollLeft(),"width":k.width(),"height":k.height()},"scrollContainer":{"width":j.width(),"height":j.height()},"trigger":{"top":o.top-l.top,"left":o.left-l.left,"width":p?p.width:n.outerWidth(),"height":p?p.height:n.outerHeight()},"dialog":{"width":a.width(),"height":a.height(),"offset":{"top":f,"left":e}},"arrow":{"height":a.find(".arrow").outerHeight(),"offset":{"top":h,"left":g}}}}function d(a,b,d,e){var f=c(a,b,d,e),g=f.screenPadding,h=f.window,i=f.trigger,j=f.dialog,k=f.arrow,l=f.scrollContainer,m={"top":i.top-h.scrollTop,"left":i.left-h.scrollLeft},n=Math.floor(i.height/2),o=Math.floor(j.height/2),p=Math.floor(k.height/2),q=m.left-j.offset.left-g,r=l.width-m.left-i.width-j.offset.left-g,s=q>=j.width,t=r>=j.width,u=!t&&s?"e":"w",v=m.top+n-p,w=h.height-v-k.height;g=Math.min(g,v-f.arrowMargin),g=Math.min(g,w-f.arrowMargin);var x,y,z=m.top+n,A=Math.max(z-g,0),B=Math.max(h.height-z-g,0),C=o-j.offset.top>A,D=o+j.offset.top>B;return C?(x={"top":h.scrollTop+g,"left":"w"===u?i.left+i.width+j.offset.left:i.left-j.width-j.offset.left},y={"top":i.top+n-(x.top+p)}):D?(x={"top":h.scrollTop+h.height-j.height-g,"left":"w"===u?i.left+i.width+j.offset.left:i.left-j.width-j.offset.left},y={"top":i.top+n-(x.top+p)}):(x={"top":i.top+n-o+j.offset.top,"left":"w"===u?i.left+i.width+j.offset.left:i.left-j.width-j.offset.left},y={"top":o-p+k.offset.top}),{"gravity":u,"popupCss":x,"arrowCss":y}}function e(a,c,d,e){var f=AJS.$.isFunction(e.offsetX)?e.offsetX(a,c,d,e):e.offsetX,g=AJS.$.isFunction(e.offsetY)?e.offsetY(a,c,d,e):e.offsetY,h=AJS.$.isFunction(e.arrowOffsetX)?e.arrowOffsetX(a,c,d,e):e.arrowOffsetX,i=(AJS.$.isFunction(e.arrowOffsetY)?e.arrowOffsetY(a,c,d,e):e.arrowOffsetY,b(window)),j=b(c.target),k=b(a),l=b(a.find(".aui-inline-dialog-arrow")),m=j.left+j.width/2,n=(window.pageYOffset||document.documentElement.scrollTop)+i.height,o=10;k.top=j.top+j.height+~~g,k.left=j.left+~~f;var p=i.width-(k.left+k.width+o);l.left=m-k.left+~~h,l.top=-(l.height/2);var q=j.top>k.height,r=k.top+k.height<n,s=!r&&q||q&&"s"===e.gravity;if(s&&(k.top=j.top-k.height-l.height/2,l.top=k.height),e.isRelativeToMouse)0>p?(k.right=o,k.left="auto",l.left=d.x-(i.width-k.width)):(k.left=d.x-20,l.left=d.x-k.left);else if(0>p){k.right=o,k.left="auto";var t=i.width-k.right,u=t-k.width;l.right="auto",l.left=m-u-l.width/2}else k.width<=j.width/2&&(l.left=k.width/2,k.left=m-k.width/2);return{"gravity":s?"s":"n","displayAbove":s,"popupCss":{"left":k.left,"top":k.top,"right":k.right},"arrowCss":{"left":l.left,"top":l.top,"right":l.right}}}AJS.InlineDialog=function(b,c,d,e){if(e=e||[],e.hasOwnProperty("getArrowAttributes")&&h(),e.hasOwnProperty("getArrowPath")&&(i(),e.hasOwnProperty("gravity")&&j()),e.hasOwnProperty("onTop")&&(g(),e.onTop&&void 0===e.gravity&&(e.gravity="s")),"undefined"==typeof c&&(c=String(Math.random()).replace(".",""),a("#inline-dialog-"+c+", #arrow-"+c+", #inline-dialog-shim-"+c).length))throw"GENERATED_IDENTIFIER_NOT_UNIQUE";var k=a.extend(!1,AJS.InlineDialog.opts,e);"w"===k.gravity&&(k.offsetX=void 0===e.offsetX?10:e.offsetX,k.offsetY=void 0===e.offsetY?0:e.offsetY);var l,m,n,o,p,q=function(){return window.Raphael&&e&&(e.getArrowPath||e.getArrowAttributes)},r=!1,s=!1,t=!1,u=a('<div id="inline-dialog-'+c+'" class="aui-inline-dialog"><div class="aui-inline-dialog-contents contents"></div><div id="arrow-'+c+'" class="aui-inline-dialog-arrow arrow"></div></div>'),v=a("#arrow-"+c,u),w=u.find(".contents");q()||u.find(".aui-inline-dialog-arrow").addClass("aui-css-arrow"),k.displayShadow||w.addClass("aui-inline-dialog-no-shadow"),k.autoWidth?w.addClass("aui-inline-dialog-auto-width"):w.css("width",k.width+"px"),w.on({"mouseenter":function(){clearTimeout(m),u.unbind("mouseenter")},"mouseleave":function(){z()}});var x=function(){return l||(l={"popup":u,"hide":function(){z(0)},"id":c,"show":function(){y()},"persistent":k.persistent?!0:!1,"reset":function(){function b(b,d){if(b.css(d.popupCss),q()){"s"===d.gravity&&(d.arrowCss.top-=a.browser.msie?10:9),b.arrowCanvas||(b.arrowCanvas=Raphael("arrow-"+c,16,16));var e=k.getArrowPath,f=a.isFunction(e)?e(d):e;b.arrowCanvas.path(f).attr(k.getArrowAttributes())}else v.removeClass("aui-bottom-arrow aui-left-arrow aui-right-arrow"),"s"!==d.gravity||v.hasClass("aui-bottom-arrow")?"n"===d.gravity||("w"===d.gravity?v.addClass("aui-left-arrow"):"e"===d.gravity&&v.addClass("aui-right-arrow")):v.addClass("aui-bottom-arrow");v.css(d.arrowCss)}var d=AJS.$(window).height(),e=Math.round(.75*d);u.children(".aui-inline-dialog-contents").css("max-height",e);var g=k.calculatePositions(u,p,o,k);if(g.hasOwnProperty("displayAbove")&&(f(),g.gravity=g.displayAbove?"s":"n"),b(u,g),u.fadeIn(k.fadeTime,function(){}),a.browser.msie&&~~a.browser.version<10){var h=a("#inline-dialog-shim-"+c);h.length||a(u).prepend(a('<iframe class = "inline-dialog-shim" id="inline-dialog-shim-'+c+'" frameBorder="0" src="javascript:false;"></iframe>')),h.css({"width":w.outerWidth(),"height":w.outerHeight()})}}}),l},y=function(){u.is(":visible")||(n=setTimeout(function(){t&&s&&(k.addActiveClass&&a(b).addClass("active"),r=!0,k.persistent||G(),AJS.InlineDialog.current=x(),a(document).trigger("showLayer",["inlineDialog",x()]),x().reset())},k.showDelay))},z=function(c){"undefined"==typeof c&&k.persistent||"undefined"==typeof u.get(0)._datePickerPopup&&(s=!1,r&&k.preHideCallback.call(u[0].popup)&&(c=null==c?k.hideDelay:c,clearTimeout(m),clearTimeout(n),null!=c&&(m=setTimeout(function(){H(),k.addActiveClass&&a(b).removeClass("active"),u.fadeOut(k.fadeTime,function(){k.hideCallback.call(u[0].popup)
}),u.arrowCanvas&&(u.arrowCanvas.remove(),u.arrowCanvas=null),r=!1,s=!1,a(document).trigger("hideLayer",["inlineDialog",x()]),AJS.InlineDialog.current=null,k.cacheContent||(t=!1,B=!1)},c))))},A=function(b,e){var f=a(e);k.upfrontCallback.call({"popup":u,"hide":function(){z(0)},"id":c,"show":function(){y()}}),u.each(function(){"undefined"!=typeof this.popup&&this.popup.hide()}),k.closeOthers&&a(".aui-inline-dialog").each(function(){!this.popup.persistent&&this.popup.hide()}),p={"target":f},o=b?{"x":b.pageX,"y":b.pageY}:{"x":f.offset().left,"y":f.offset().top},r||clearTimeout(n),s=!0;var g=function(){B=!1,t=!0,k.initCallback.call({"popup":u,"hide":function(){z(0)},"id":c,"show":function(){y()}}),y()};return B||(B=!0,a.isFunction(d)?d(w,e,g):a.get(d,function(a,b,d){w.html(k.responseHandler(a,b,d)),t=!0,k.initCallback.call({"popup":u,"hide":function(){z(0)},"id":c,"show":function(){y()}}),y()})),clearTimeout(m),r||y(),!1};u[0].popup=x();var B=!1,C=!1,D=function(){C||(a(k.container).append(u),C=!0)},E=a(b);k.onHover?k.useLiveEvents?E.selector?a(document).on("mouseenter",E.selector,function(a){D(),A(a,this)}).on("mouseleave",E.selector,function(){z()}):AJS.log("Warning: inline dialog trigger elements must have a jQuery selector when the useLiveEvents option is enabled."):E.on({"mouseenter":function(a){D(),A(a,this)},"mouseleave":function(){z()}}):k.noBind||(k.useLiveEvents?E.selector?a(document).on("click",E.selector,function(a){return D(),F()?u.hide():A(a,this),!1}).on("mouseleave",E.selector,function(){z()}):AJS.log("Warning: inline dialog trigger elements must have a jQuery selector when the useLiveEvents option is enabled."):E.on("click",function(a){return D(),F()?u.hide():A(a,this),!1}).on("mouseleave",function(){z()}));var F=function(){return r&&k.closeOnTriggerClick},G=function(){K(),N()},H=function(){L(),O()},I=!1,J=c+".inline-dialog-check",K=function(){I||(a("body").bind("click."+J,function(b){var d=a(b.target);0===d.closest("#inline-dialog-"+c+" .contents").length&&z(0)}),I=!0)},L=function(){I&&a("body").unbind("click."+J),I=!1},M=function(a){27===a.keyCode&&z(0)},N=function(){a(document).on("keydown",M)},O=function(){a(document).off("keydown",M)};return u.show=function(a,c){a&&a.stopPropagation(),D(),!k.noBind||b&&b.length?A(a,b):A(a,void 0===c?a.target:c)},u.hide=function(){z(0)},u.refresh=function(){r&&x().reset()},u.getOptions=function(){return k},u},AJS.InlineDialog.opts={"onTop":!1,"responseHandler":function(a){return a},"closeOthers":!0,"isRelativeToMouse":!1,"addActiveClass":!0,"onHover":!1,"useLiveEvents":!1,"noBind":!1,"fadeTime":100,"persistent":!1,"hideDelay":1e4,"showDelay":0,"width":300,"offsetX":0,"offsetY":10,"arrowOffsetX":0,"arrowOffsetY":0,"container":"body","cacheContent":!0,"displayShadow":!0,"autoWidth":!1,"gravity":"n","closeOnTriggerClick":!1,"preHideCallback":function(){return!0},"hideCallback":function(){},"initCallback":function(){},"upfrontCallback":function(){},"calculatePositions":function(a,b,c,f){f=f||{};var g="w"===f.gravity?d:e;return g(a,b,c,f)},"getArrowPath":function(a){return"s"===a.gravity?"M0,8L8,16,16,8":"M0,8L8,0,16,8"},"getArrowAttributes":function(){return{"fill":"#fff","stroke":"#ccc"}}},AJS.InlineDialog=AJS.deprecate.construct(AJS.InlineDialog,"Inline dialog constructor",{"alternativeName":"inline dialog 2"});var f=AJS.deprecate.getMessageLogger("displayAbove","[remove version]",{"alternativeName":"gravity","extraInfo":"See https://ecosystem.atlassian.net/browse/AUI-2197."}),g=AJS.deprecate.getMessageLogger("onTop","[remove version]",{"alternativeName":"gravity","extraInfo":"See https://ecosystem.atlassian.net/browse/AUI-2197."}),h=AJS.deprecate.getMessageLogger("getArrowAttributes","[remove version]",{"extraInfo":"See https://ecosystem.atlassian.net/browse/AUI-1362."}),i=AJS.deprecate.getMessageLogger("getArrowPath","[remove version]",{"extraInfo":"See https://ecosystem.atlassian.net/browse/AUI-1362."}),j=AJS.deprecate.getMessageLogger("getArrowPath does not support gravity","[remove version]",{"extraInfo":"See https://ecosystem.atlassian.net/browse/AUI-2197."})}(AJS.$),AJS.template=function(a){"use strict";var b=/\{([^\}]+)\}/g,c=/(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g,d=function(a,b,d,e){var f=d;return b.replace(c,function(a,b,c,d,g){b=b||d,f&&(b+":html"in f?(f=f[b+":html"],e=!0):b in f&&(f=f[b]),g&&"function"==typeof f&&(f=f()))}),(null==f||f==d)&&(f=a),f=String(f),e||(f=h.escape(f)),f},e=function(a){return this.template=this.template.replace(b,function(b,c){return d(b,c,a,!0)}),this},f=function(a){return this.template=this.template.replace(b,function(b,c){return d(b,c,a)}),this},g=function(){return this.template},h=function(a){function b(){return b.template}return b.template=String(a),b.toString=b.valueOf=g,b.fill=f,b.fillHtml=e,b},i={},j=[],k=function(b){return a("script").filter(function(){return this.getAttribute("title")===b})};return h.load=function(a){return a=String(a),i.hasOwnProperty(a)||(j.length>=1e3&&delete i[j.shift()],j.push(a),i[a]=k(a)[0].text),this(i[a])},h.escape=AJS.escapeHtml,h}(AJS.$),function(a,b){"use strict";function c(b){a.messages[b]=function(a,c){c||(c=a,a="#aui-message-bar"),c.closeable=c.closeable!==!1,c.shadowed=c.shadowed!==!1;var f=h(this.template,c,b);return g(f,c.insert,a),c.closeable&&d(f),c.fadeout&&e(f,c.delay,c.duration),f}}function d(a){b(a||"div.aui-message.closeable").each(function(){var a=b(this),c=a.find(".aui-icon.icon-close"),d=c.length>0?c.first():b('<span class="aui-icon icon-close" role="button" tabindex="0"></span>');a.addClass("closeable"),a.append(d),f(a)})}function e(a,c,d){c="undefined"!=typeof c?c:j,d="undefined"!=typeof d?d:i,b(a||"div.aui-message.fadeout").each(function(){function a(){g.stop(!0,!1).delay(c).fadeOut(d,function(){g.closeMessage()})}function e(){g.stop(!0,!1).fadeTo(k,1)}function f(){return!h&&!i}var g=b(this),h=!1,i=!1;g.focusin(function(){h=!0,e()}).focusout(function(){h=!1,f()&&a()}).hover(function(){i=!0,e()},function(){i=!1,f()&&a()}),a()})}function f(a){a.on("click",".aui-icon.icon-close",function(a){b(a.target).closest(".aui-message").closeMessage()}).on("keydown",".aui-icon.icon-close",function(a){(a.which===AJS.keyCode.ENTER||a.which===AJS.keyCode.SPACE)&&(b(a.target).closest(".aui-message").closeMessage(),a.preventDefault())})}function g(a,b,c){"prepend"===b?a.prependTo(c):a.appendTo(c)}function h(a,c,d){var e=b(AJS.template(a).fill({"type":d,"closeable":c.closeable?"closeable":"","shadowed":c.shadowed?"shadowed":"","fadeout":c.fadeout?"fadeout":"","title":c.title||"","body:html":c.body||""}).toString());return c.id&&(/[#\'\"\.\s]/g.test(c.id)?AJS.log("AJS.Messages error: ID rejected, must not include spaces, hashes, dots or quotes."):e.attr("id",c.id)),e}var i=500,j=5e3,k=100,l='<div class="aui-message aui-message-{type} {type} {closeable} {shadowed} {fadeout}"><p class="title"><strong>{title}</strong></p>{body}<!-- .aui-message --></div>';a.messages={"setup":function(){c("generic"),c("error"),c("warning"),c("info"),c("success"),c("hint"),d(),e()},"makeCloseable":d,"makeFadeout":e,"template":l,"createMessage":c},b.fn.closeMessage=function(){var a=b(this);a.hasClass("aui-message")&&a.hasClass("closeable")&&(a.stop(!0),a.trigger("messageClose",[this]).remove(),b(document).trigger("aui-message-close",[this]))},b(function(){a.messages.setup()}),AJS.deprecate.prop(a.messages,"makeCloseable",{"extraInfo":'Use the "closeable" option in the constructor instead. Docs: https://docs.atlassian.com/aui/latest/docs/messages.html'}),AJS.deprecate.prop(a.messages,"createMessage",{"extraInfo":"Use the provided convenience methods instead e.g. AJS.messages.generic(). Docs: https://docs.atlassian.com/aui/latest/docs/messages.html"}),AJS.deprecate.prop(a.messages,"makeFadeout",{"extraInfo":'Use the "fadeout" option in the constructor instead. Docs: https://docs.atlassian.com/aui/latest/docs/messages.html'})}(AJS,AJS.$),function(a){"use strict";function b(){var b=a(this);AJS._addID(b),b.attr("role","tab");var c=b.attr("href");a(c).attr("aria-labelledby",b.attr("id")),b.parent().hasClass("active-tab")?b.attr("aria-selected","true"):b.attr("aria-selected","false")}function c(b,c){var d=a(b),e=d.find(".tabs-menu").first(),f=e.find("li:not(.aui-tabs-responsive-trigger-item)"),g=e.find(".aui-tabs-responsive-trigger").parent(),h=g.find("a"),j=h.attr("aria-controls"),k=a(document).find("#"+j).attr("aria-checked",!1),l=k.length>0,m=n.totalTabsWidth(f,k),o=m>d.outerWidth();if(!l&&o&&(g=n.createResponsiveDropdownTrigger(e,c),k=n.createResponsiveDropdown(d,c)),h.attr("aria-controls","aui-tabs-responsive-dropdown-"+c),h.attr("id","aui-tabs-responsive-trigger-"+c),h.attr("href","aui-tabs-responsive-trigger-"+c),k.attr("id","aui-tabs-responsive-dropdown-"+c),o){var p=n.moveVisibleTabs(f.toArray(),d,g),q=n.totalVisibleTabWidth(p),r=d.outerWidth()-q-g.outerWidth(!0),s=r>0;if(s){var t=k.find("li");n.moveInvisibleTabs(t.toArray(),r,g)}k.on("click","a",i)}l&&!o&&(k.find("li").each(function(){n.moveTabOutOfDropdown(a(this),g)}),n.removeResponsiveDropdown(k,g))}function d(b){if(!b.hasClass("aui-tabs-responsive-trigger")){var c=a(b.attr("href").match(k)[0]);c.addClass("active-pane").attr("aria-hidden","false").siblings(".tabs-pane").removeClass("active-pane").attr("aria-hidden","true");var d=b.parents(".aui-tabs").find(".aui-tabs-responsive-trigger-item a"),e=d.attr("aria-controls"),f=a(document).find("#"+e);if(f.find("li a").attr("aria-checked",!1).removeClass("checked aui-dropdown2-checked"),f.find("li").removeClass("active-tab"),b.parent("li.menu-item").addClass("active-tab").siblings(".menu-item").removeClass("active-tab"),b.hasClass("aui-tabs-responsive-item")){var g=c.parent(".aui-tabs").find("li.menu-item:not(.aui-tabs-responsive-trigger-item)");g.removeClass("active-tab"),g.find("a").removeClass("checked").removeAttr("aria-checked")}b.hasClass("aui-tabs-responsive-item")&&c.parent(".aui-tabs").find("li.menu-item.aui-tabs-responsive-trigger-item").addClass("active-tab"),b.closest(".tabs-menu").find("a").attr("aria-selected","false"),b.attr("aria-selected","true"),b.trigger("tabSelect",{"tab":b,"pane":c})}}function e(a){return void 0!==a.attr("data-aui-persist")&&"false"!==a.attr("data-aui-persist")}function f(a){var b=a.attr("id"),c=a.attr("data-aui-persist");return l+(b?b:"")+(c&&"true"!==c?"-"+c:"")}function g(a){for(var b=0,c=a.length;c>b;b++){var g=a.eq(b);if(e(g)&&window.localStorage){var h=g.attr("id");if(h){var i=window.localStorage.getItem(f(g));if(i){var j=g.find("#"+i);j.length&&d(j)}}else AJS.warn("A tab group must specify an id attribute if it specifies data-aui-persist")}}}function h(a){var b=a.closest(".aui-tabs"),c=b.attr("id");if(c){var d=a.attr("id");d&&window.localStorage.setItem(f(b),d)}else AJS.warn("A tab group must specify an id attribute if it specifies data-aui-persist")}function i(b){AJS.tabs.change(a(this),b),b&&b.preventDefault()}function j(a){a.forEach(function(a,b){c(a,b)})}var k=/#.*/,l="_internal-aui-tabs-",m='.aui-tabs.horizontal-tabs[data-aui-responsive]:not([data-aui-responsive="false"])',n={"totalTabsWidth":function(a,b){var c=this.totalVisibleTabWidth(a),d=0;return b.find("li").each(function(a,b){d+=parseInt(b.getAttribute("data-aui-tab-width"))}),c+d},"totalVisibleTabWidth":function(b){var c=0;return b.each(function(b,d){c+=a(d).outerWidth()}),c},"removeResponsiveDropdown":function(a,b){a.remove(),b.remove()},"createResponsiveDropdownTrigger":function(a,b){var c='<li class="menu-item aui-tabs-responsive-trigger-item"><a class="aui-dropdown2-trigger aui-tabs-responsive-trigger aui-dropdown2-trigger-arrowless" id="aui-tabs-responsive-trigger-'+b+'" aria-haspopup="true" aria-controls="aui-tabs-responsive-dropdown-'+b+'" href="aui-tabs-responsive-dropdown-'+b+'">...</a></li>';a.append(c);var d=a.find(".aui-tabs-responsive-trigger-item");return d},"createResponsiveDropdown":function(a,b){var c='<div class="aui-dropdown2 aui-style-default aui-tabs-responsive-dropdown" id="aui-tabs-responsive-dropdown-'+b+'"><ul></ul></div>';a.append(c);var d=a.find("#aui-tabs-responsive-dropdown-"+b);return d},"findNewVisibleTabs":function(b,c,d){function e(a,b,c){return c>=a+b}for(var f=0,g=0;e(f,d,c)&&g<b.length;g++){var h=a(b[g]),i=h.outerWidth(!0);f+=i}return b.slice(0,g-1)},"moveVisibleTabs":function(b,c,d){for(var e=d.find("a").attr("aria-controls"),f=a("#"+e),g=this.findNewVisibleTabs(b,c.outerWidth(),d.parent().outerWidth(!0)),h=g.length-1,i=b.length-1;i>=h;i--){var j=a(b[i]);this.moveTabToResponsiveDropdown(j,f,d)}return a(g)},"moveTabToResponsiveDropdown":function(a,b,c){var d=a.find("a");a.attr("data-aui-tab-width",a.outerWidth(!0)),d.addClass("aui-dropdown2-radio aui-tabs-responsive-item"),a.hasClass("active-tab")&&(d.addClass("aui-dropdown2-checked"),c.addClass("active-tab")),b.find("ul").prepend(a)},"moveInvisibleTabs":function(b,c,d){function e(a){return a>0}for(var f=0;e(c)&&f<b.length;f++){var g=a(b[f]),h=parseInt(g.attr("data-aui-tab-width"),10),i=c>h;i&&this.moveTabOutOfDropdown(g,d),c-=h}},"moveTabOutOfDropdown":function(a,b){var c=a.find("a").hasClass("aui-dropdown2-checked");c&&(a.addClass("active-tab"),b.removeClass("active-tab")),a.children("a").removeClass("aui-dropdown2-radio aui-tabs-responsive-item aui-dropdown2-checked"),b.before(a)}};AJS.tabs={"setup":function(){var c=a(".aui-tabs:not(.aui-tabs-disabled)"),d=a(m).toArray();j(d);var e=AJS.debounce(j,200);a(window).resize(function(){e(d)}),c.attr("role","application"),c.find(".tabs-pane").each(function(){var b=a(this);b.attr("role","tabpanel"),b.hasClass("active-pane")?b.attr("aria-hidden","false"):b.attr("aria-hidden","true")});for(var f=0,h=c.length;h>f;f++){var k=c.eq(f);if(!k.data("aui-tab-events-bound")){var l=k.children("ul.tabs-menu");l.attr("role","tablist"),l.children("li").attr("role","presentation"),l.find("> .menu-item a").each(b),l.delegate("a","click",i),k.data("aui-tab-events-bound",!0)}}g(c),a(".aui-tabs.vertical-tabs").find("a").each(function(){var b=a(this);b.attr("title")||AJS.isClipped(b)&&b.attr("title",b.text())})},"change":function(a){d(a);var b=a.closest(".aui-tabs");e(b)&&window.localStorage&&h(a)}},a(AJS.tabs.setup)}(AJS.$),function(){var _after=1,_afterThrow=2,_afterFinally=3,_before=4,_around=5,_intro=6,_regexEnabled=!0,_arguments="arguments",_undef="undefined",getType=function(){for(var a=Object.prototype.toString,b={},c={"1":"element","3":"textnode","9":"document","11":"fragment"},d="Arguments Array Boolean Date Document Element Error Fragment Function NodeList Null Number Object RegExp String TextNode Undefined Window".split(" "),e=d.length;e--;){var f=d[e],g=window[f];if(g)try{b[a.call(new g)]=f.toLowerCase()}catch(h){}}return function(d){return null==d&&(void 0===d?_undef:"null")||d.nodeType&&c[d.nodeType]||"number"==typeof d.length&&(d.callee&&_arguments||d.alert&&"window"||d.item&&"nodelist")||b[a.call(d)]}}(),isFunc=function(a){return"function"==getType(a)},weaveOne=function(source,method,advice){var old=source[method];if(advice.type!=_intro&&!isFunc(old)){var oldObject=old;old=function(){for(var code=arguments.length>0?_arguments+"[0]":"",i=1;i<arguments.length;i++)code+=","+_arguments+"["+i+"]";return eval("oldObject("+code+");")}}var aspect;return advice.type==_after||advice.type==_afterThrow||advice.type==_afterFinally?aspect=function(){var a,b=null;try{a=old.apply(this,arguments)}catch(c){b=c}if(advice.type==_after){if(null!=b)throw b;a=advice.value.apply(this,[a,method])}else advice.type==_afterThrow&&null!=b?a=advice.value.apply(this,[b,method]):advice.type==_afterFinally&&(a=advice.value.apply(this,[a,b,method]));return a}:advice.type==_before?aspect=function(){return advice.value.apply(this,[arguments,method]),old.apply(this,arguments)}:advice.type==_intro?aspect=function(){return advice.value.apply(this,arguments)}:advice.type==_around&&(aspect=function(){var a={"object":this,"args":Array.prototype.slice.call(arguments)};return advice.value.apply(a.object,[{"arguments":a.args,"method":method,"proceed":function(){return old.apply(a.object,a.args)}}])}),aspect.unweave=function(){source[method]=old,pointcut=source=aspect=old=null},source[method]=aspect,aspect},search=function(a,b,c){var d=[];for(var e in a){var f=null;try{f=a[e]}catch(g){}null!=f&&e.match(b.method)&&isFunc(f)&&(d[d.length]={"source":a,"method":e,"advice":c})}return d},weave=function(a,b){var c=typeof a.target.prototype!=_undef?a.target.prototype:a.target,d=[];if(b.type!=_intro&&typeof c[a.method]==_undef){var e=search(a.target,a,b);0==e.length&&(e=search(c,a,b));for(var f in e)d[d.length]=weaveOne(e[f].source,e[f].method,e[f].advice)}else d[0]=weaveOne(c,a.method,b);return _regexEnabled?d:d[0]};jQuery.aop={"after":function(a,b){return weave(a,{"type":_after,"value":b})},"afterThrow":function(a,b){return weave(a,{"type":_afterThrow,"value":b})},"afterFinally":function(a,b){return weave(a,{"type":_afterFinally,"value":b})},"before":function(a,b){return weave(a,{"type":_before,"value":b})},"around":function(a,b){return weave(a,{"type":_around,"value":b})},"introduction":function(a,b){return weave(a,{"type":_intro,"value":b})},"setup":function(a){_regexEnabled=a.regexMatch}}}(),AJS.dropDown=function(a,b){var c=null,d=[],e=!1,f=AJS.$(document),g={"item":"li:has(a)","activeClass":"active","alignment":"right","displayHandler":function(a){return a.name},"escapeHandler":function(){return this.hide("escape"),!1},"hideHandler":function(){},"moveHandler":function(){},"useDisabled":!1};if(AJS.$.extend(g,b),g.alignment={"left":"left","right":"right"}[g.alignment.toLowerCase()]||"left",a&&a.jquery)c=a;else if("string"==typeof a)c=AJS.$(a);else{if(!a||a.constructor!=Array)throw new Error("AJS.dropDown function was called with illegal parameter. Should be AJS.$ object, AJS.$ selector or array.");c=AJS("div").addClass("aui-dropdown").toggleClass("hidden",!!g.isHiddenByDefault);for(var h=0,i=a.length;i>h;h++){for(var j=AJS("ol"),k=0,l=a[h].length;l>k;k++){var m=AJS("li"),n=a[h][k];n.href?(m.append(AJS("a").html("<span>"+g.displayHandler(n)+"</span>").attr({"href":n.href}).addClass(n.className)),AJS.$.data(AJS.$("a > span",m)[0],"properties",n)):m.html(n.html).addClass(n.className),n.icon&&m.prepend(AJS("img").attr("src",n.icon)),n.insideSpanIcon&&m.children("a").prepend(AJS("span").attr("class","icon")),n.iconFontClass&&m.children("a").prepend(AJS("span").addClass("aui-icon aui-icon-small aui-iconfont-"+n.iconFontClass)),AJS.$.data(m[0],"properties",n),j.append(m)}h==i-1&&j.addClass("last"),c.append(j)}AJS.$("body").append(c)}var o=function(){q(1)},p=function(){q(-1)},q=function(a){var b=!e,c=AJS.dropDown.current.$[0],d=AJS.dropDown.current.links,f=c.focused;if(e=!0,0!==d.length){if(c.focused="number"==typeof f?f:-1,!AJS.dropDown.current)return AJS.log("move - not current, aborting"),!0;c.focused+=a,c.focused<0?c.focused=d.length-1:c.focused>=d.length&&(c.focused=0),g.moveHandler(AJS.$(d[c.focused]),0>a?"up":"down"),b&&d.length?(AJS.$(d[c.focused]).addClass(g.activeClass),e=!1):d.length||(e=!1)}},r=function(a){if(!AJS.dropDown.current)return!0;var b=a.which,c=AJS.dropDown.current.$[0],d=AJS.dropDown.current.links;switch(AJS.dropDown.current.cleanActive(),b){case 40:o();break;case 38:p();break;case 27:return g.escapeHandler.call(AJS.dropDown.current,a);case 13:return c.focused>=0?g.selectionHandler?g.selectionHandler.call(AJS.dropDown.current,a,AJS.$(d[c.focused])):"a"!=AJS.$(d[c.focused]).attr("nodeName")?AJS.$("a",d[c.focused]).trigger("focus"):AJS.$(d[c.focused]).trigger("focus"):!0;default:return d.length&&AJS.$(d[c.focused]).addClass(g.activeClass),!0}return a.stopPropagation(),a.preventDefault(),!1},s=function(a){a&&a.which&&3==a.which||a&&a.button&&2==a.button||AJS.dropDown.current&&AJS.dropDown.current.hide("click")},t=function(a){return function(){AJS.dropDown.current&&(AJS.dropDown.current.cleanFocus(),this.originalClass=this.className,AJS.$(this).addClass(g.activeClass),AJS.dropDown.current.$[0].focused=a)}},u=function(a){return a.button||a.metaKey||a.ctrlKey||a.shiftKey?!0:void(AJS.dropDown.current&&g.selectionHandler&&g.selectionHandler.call(AJS.dropDown.current,a,AJS.$(this)))},v=function(a){var b=!1;return a.data("events")&&AJS.$.each(a.data("events"),function(a,c){AJS.$.each(c,function(a,c){return u===c?(b=!0,!1):void 0})}),b};return c.each(function(){var a=this,b=AJS.$(this),c={},e={"reset":function(){c=AJS.$.extend(c,{"$":b,"links":AJS.$(g.item||"li:has(a)",a),"cleanActive":function(){a.focused+1&&c.links.length&&AJS.$(c.links[a.focused]).removeClass(g.activeClass)},"cleanFocus":function(){c.cleanActive(),a.focused=-1},"moveDown":o,"moveUp":p,"moveFocus":r,"getFocusIndex":function(){return"number"==typeof a.focused?a.focused:-1}}),c.links.each(function(a){var b=AJS.$(this);v(b)||(b.hover(t(a),c.cleanFocus),b.click(u))})},"appear":function(a){a?(b.removeClass("hidden"),b.addClass("aui-dropdown-"+g.alignment)):b.addClass("hidden")},"fade":function(a){a?b.fadeIn("fast"):b.fadeOut("fast")},"scroll":function(a){a?b.slideDown("fast"):b.slideUp("fast")}};c.reset=e.reset,c.reset(),c.addControlProcess=function(a,b){AJS.$.aop.around({"target":this,"method":a},b)},c.addCallback=function(a,b){return AJS.$.aop.after({"target":this,"method":a},b)},c.show=function(b){g.useDisabled&&this.$.closest(".aui-dd-parent").hasClass("disabled")||(this.alignment=g.alignment,s(),AJS.dropDown.current=this,this.method=b||this.method||"appear",this.timer=setTimeout(function(){f.click(s)},0),f.keydown(r),g.firstSelected&&this.links[0]&&t(0).call(this.links[0]),AJS.$(a.offsetParent).css({"zIndex":2e3}),e[this.method](!0),AJS.$(document).trigger("showLayer",["dropdown",AJS.dropDown.current]))},c.hide=function(a){return this.method=this.method||"appear",AJS.$(b.get(0).offsetParent).css({"zIndex":""}),this.cleanFocus(),e[this.method](!1),f.unbind("click",s).unbind("keydown",r),AJS.$(document).trigger("hideLayer",["dropdown",AJS.dropDown.current]),AJS.dropDown.current=null,a},c.addCallback("reset",function(){g.firstSelected&&this.links[0]&&t(0).call(this.links[0])}),AJS.dropDown.iframes||(AJS.dropDown.iframes=[]),AJS.dropDown.createShims=function(){return AJS.$("iframe").each(function(){var a=this;a.shim||(a.shim=AJS.$("<div />").addClass("shim hidden").appendTo("body"),AJS.dropDown.iframes.push(a))}),arguments.callee}(),c.addCallback("show",function(){AJS.$(AJS.dropDown.iframes).each(function(){var a=AJS.$(this);if(a.is(":visible")){var b=a.offset();b.height=a.height(),b.width=a.width(),this.shim.css({"left":b.left+"px","top":b.top+"px","height":b.height+"px","width":b.width+"px"}).removeClass("hidden")}})}),c.addCallback("hide",function(){AJS.$(AJS.dropDown.iframes).each(function(){this.shim.addClass("hidden")}),g.hideHandler()}),d.push(c)}),d},AJS.dropDown.getAdditionalPropertyValue=function(a,b){var c=a[0];c&&"string"==typeof c.tagName&&"li"==c.tagName.toLowerCase()||AJS.log("AJS.dropDown.getAdditionalPropertyValue : item passed in should be an LI element wrapped by jQuery");var d=AJS.$.data(c,"properties");return d?d[b]:null},AJS.dropDown.removeAllAdditionalProperties=function(){},AJS.dropDown.Standard=function(a){var b,c=[],d={"selector":".aui-dd-parent","dropDown":".aui-dropdown","trigger":".aui-dd-trigger"};AJS.$.extend(d,a);var e=function(a,b,c,e){AJS.$.extend(e,{"trigger":a}),b.addClass("dd-allocated"),c.addClass("hidden"),0==d.isHiddenByDefault&&e.show(),e.addCallback("show",function(){b.addClass("active")}),e.addCallback("hide",function(){b.removeClass("active")})},f=function(a,b,c,d){d!=AJS.dropDown.current&&(c.css({"top":b.outerHeight()}),d.show(),a.stopImmediatePropagation()),a.preventDefault()};if(d.useLiveEvents){var g=[],h=[];AJS.$(d.trigger).live("click",function(a){var b,c,i,j,k=AJS.$(this);if((j=AJS.$.inArray(this,g))>=0){var l=h[j];b=l.parent,c=l.dropdown,i=l.ddcontrol}else{if(b=k.closest(d.selector),c=b.find(d.dropDown),0===c.length)return;if(i=AJS.dropDown(c,d)[0],!i)return;g.push(this),l={"parent":b,"dropdown":c,"ddcontrol":i},e(k,b,c,i),h.push(l)}f(a,k,c,i)})}else b=this instanceof AJS.$?this:AJS.$(d.selector),b=b.not(".dd-allocated").filter(":has("+d.dropDown+")").filter(":has("+d.trigger+")"),b.each(function(){var a=AJS.$(this),b=AJS.$(d.dropDown,this),g=AJS.$(d.trigger,this),h=AJS.dropDown(b,d)[0];AJS.$.extend(h,{"trigger":g}),e(g,a,b,h),g.click(function(a){f(a,g,b,h)}),c.push(h)});return c},AJS.dropDown.Ajax=function(a){var b,c={"cache":!0};return AJS.$.extend(c,a||{}),b=AJS.dropDown.Standard.call(this,c),AJS.$(b).each(function(){var a=this;AJS.$.extend(a,{"getAjaxOptions":function(b){var d=function(b){c.formatResults&&(b=c.formatResults(b)),c.cache&&a.cache.set(a.getAjaxOptions(),b),a.refreshSuccess(b)};return c.ajaxOptions?AJS.$.isFunction(c.ajaxOptions)?AJS.$.extend(c.ajaxOptions.call(a),{"success":d}):AJS.$.extend(c.ajaxOptions,{"success":d}):AJS.$.extend(b,{"success":d})},"refreshSuccess":function(a){this.$.html(a)},"cache":function(){var a={};return{"get":function(b){var c=b.data||"";return a[(b.url+c).replace(/[\?\&]/gi,"")]},"set":function(b,c){var d=b.data||"";a[(b.url+d).replace(/[\?\&]/gi,"")]=c},"reset":function(){a={}}}}(),"show":function(b){return function(){c.cache&&a.cache.get(a.getAjaxOptions())?(a.refreshSuccess(a.cache.get(a.getAjaxOptions())),b.call(a)):(AJS.$(AJS.$.ajax(a.getAjaxOptions())).throbber({"target":a.$,"end":function(){a.reset()}}),b.call(a),a.iframeShim&&a.iframeShim.hide())}}(a.show),"resetCache":function(){a.cache.reset()}}),a.addCallback("refreshSuccess",function(){a.reset()})}),b},AJS.$.fn.dropDown=function(a,b){return a=(a||"Standard").replace(/^([a-z])/,function(a){return a.toUpperCase()}),AJS.dropDown[a].call(this,b)},AJS.$.fn.dropDown=AJS.deprecate.construct(AJS.$.fn.dropDown,"Dropdown constructor",{"alternativeName":"Dropdown2"}),function(a){function b(a){this.num=0,this.timer=a>0?a:!1}function c(c){if(a.isPlainObject(c.data)||a.isArray(c.data)||"string"==typeof c.data){var e=c.handler,f={"timer":700};!function(b){"string"==typeof b?f.combo=[b]:a.isArray(b)?f.combo=b:a.extend(f,b),f.combo=a.map(f.combo,function(a){return a.toLowerCase()})}(c.data),c.index=new b(f.timer),c.handler=function(b){if(this===b.target||!/textarea|select|input/i.test(b.target.nodeName)){var g="keypress"!==b.type?a.hotkeys.specialKeys[b.which]:null,h=String.fromCharCode(b.which).toLowerCase(),i="",j={};b.altKey&&"alt"!==g&&(i+="alt+"),b.ctrlKey&&"ctrl"!==g&&(i+="ctrl+"),b.metaKey&&!b.ctrlKey&&"meta"!==g&&(i+="meta+"),b.shiftKey&&"shift"!==g&&(i+="shift+"),b.metaKey&&"["===h&&(h=null),g&&(j[i+g]=!0),h&&(j[i+h]=!0),/shift+/.test(i)&&(j[i.replace("shift+","")+a.hotkeys.shiftNums[g||h]]=!0);var k=c.index,l=f.combo;if(d(l[k.val()],j)){if(k.val()===l.length-1)return k.reset(),e.apply(this,arguments);k.inc()}else k.reset(),d(l[0],j)&&k.inc()}}}}function d(a,b){for(var c=a.split(" "),d=0,e=c.length;e>d;d++)if(b[c[d]])return!0;return!1}a.hotkeys={"version":"0.8","specialKeys":{"8":"backspace","9":"tab","13":"return","16":"shift","17":"ctrl","18":"alt","19":"pause","20":"capslock","27":"esc","32":"space","33":"pageup","34":"pagedown","35":"end","36":"home","37":"left","38":"up","39":"right","40":"down","45":"insert","46":"del","91":"meta","96":"0","97":"1","98":"2","99":"3","100":"4","101":"5","102":"6","103":"7","104":"8","105":"9","106":"*","107":"+","109":"-","110":".","111":"/","112":"f1","113":"f2","114":"f3","115":"f4","116":"f5","117":"f6","118":"f7","119":"f8","120":"f9","121":"f10","122":"f11","123":"f12","144":"numlock","145":"scroll","188":",","190":".","191":"/","224":"meta","219":"[","221":"]"},"keypressKeys":["<",">","?"],"shiftNums":{"`":"~","1":"!","2":"@","3":"#","4":"$","5":"%","6":"^","7":"&","8":"*","9":"(","0":")","-":"_","=":"+",";":":","'":'"',",":"<",".":">","/":"?","\\":"|"}},a.each(a.hotkeys.keypressKeys,function(b,c){a.hotkeys.shiftNums[c]=c}),b.prototype.val=function(){return this.num},b.prototype.inc=function(){this.timer&&(clearTimeout(this.timeout),this.timeout=setTimeout(a.proxy(b.prototype.reset,this),this.timer)),this.num++},b.prototype.reset=function(){this.timer&&clearTimeout(this.timeout),this.num=0},a.each(["keydown","keyup","keypress"],function(){a.event.special[this]={"add":c}})}(jQuery),function(a,b){"use strict";var c=-1!==navigator.platform.indexOf("Mac"),d=/^(backspace|tab|r(ight|eturn)|s(hift|pace|croll)|c(trl|apslock)|alt|pa(use|ge(up|down))|e(sc|nd)|home|left|up|d(el|own)|insert|f\d\d?|numlock|meta)/i;a.whenIType=function(e){function f(a){!AJS.popup.current&&p&&p.fire(a)}function g(a){a.preventDefault()}function h(a){var c=a&&a.split?b.trim(a).split(" "):[a];c.forEach(function(a){j(a)})}function i(a){for(var b=a.length;b--;)if(a[b].length>1&&"space"!==a[b])return!0;return!1}function j(a){var c=a instanceof Array?a:k(a.toString()),d=i(c)?"keydown":"keypress";o.push(c),b(document).bind(d,c,f),b(document).bind(d+" keyup",c,g)}function k(a){for(var b=[],c="";a.length;){var e=a.match(/^(ctrl|meta|shift|alt)\+/i),f=a.match(d);e?(c+=e[0],a=a.substring(e[0].length)):f?(b.push(c+f[0]),a=a.substring(f[0].length),c=""):(b.push(c+a[0]),a=a.substring(1),c="")}return b}function l(a){for(var d=b(a),e=d.attr("title")||"",f=o.slice(),g=d.data("kbShortcutAppended")||"",h=!g,i=h?e:e.substring(0,e.length-g.length);f.length;)g=n(f.shift().slice(),g,h),h=!1;c&&(g=g.replace(/Meta/gi,"\u2318").replace(/Shift/gi,"\u21e7")),d.attr("title",i+g),d.data("kbShortcutAppended",g)}function m(a){var c=b(a),d=c.data("kbShortcutAppended");if(d){var e=c.attr("title");c.attr("title",e.replace(d,"")),c.removeData("kbShortcutAppended")}}function n(a,b,c){return c?b+=" ("+AJS.I18n.getText("aui.keyboard.shortcut.type.x",a.shift()):(b=b.replace(/\)$/,""),b+=AJS.I18n.getText("aui.keyboard.shortcut.or.x",a.shift())),a.forEach(function(a){b+=" "+AJS.I18n.getText("aui.keyboard.shortcut.then.x",a)}),b+=")"}var o=[],p=b.Callbacks();return h(e),a.whenIType.makeShortcut({"executor":p,"bindKeys":h,"addShortcutsToTitle":l,"removeShortcutsFromTitle":m,"keypressHandler":f,"defaultPreventionHandler":g})},a.whenIType.makeShortcut=function(a){function c(a){return function(c,e){e=e||{};var f=e.focusedClass||"focused",g=e.hasOwnProperty("wrapAround")?e.wrapAround:!0,h=e.hasOwnProperty("escToCancel")?e.escToCancel:!0;return d.add(function(){var d=b(c),e=d.filter("."+f),i=0===e.length?void 0:{"transition":!0};h&&b(document).one("keydown",function(a){a.keyCode===AJS.keyCode.ESCAPE&&e&&e.removeClass(f)}),e.length&&e.removeClass(f),e=a(e,d,g),e&&e.length>0&&(e.addClass(f),e.moveTo(i),e.is("a")?e.focus():e.find("a:first").focus())}),this}}var d=a.executor,e=a.bindKeys,f=a.addShortcutsToTitle,g=a.removeShortcutsFromTitle,h=a.keypressHandler,i=a.defaultPreventionHandler,j=[];return{"moveToNextItem":c(function(a,c,d){var e;return d&&0===a.length?c.eq(0):(e=b.inArray(a.get(0),c),e<c.length-1?(e+=1,c.eq(e)):d?c.eq(0):a)}),"moveToPrevItem":c(function(a,c,d){var e;return d&&0===a.length?c.filter(":last"):(e=b.inArray(a.get(0),c),e>0?(e-=1,c.eq(e)):d?c.filter(":last"):a)}),"click":function(a){return j.push(a),f(a),d.add(function(){var c=b(a);c.length>0&&c.click()}),this},"goTo":function(a){return d.add(function(){window.location.href=a}),this},"followLink":function(a){return j.push(a),f(a),d.add(function(){var c=b(a)[0];c&&{"a":!0,"link":!0}[c.nodeName.toLowerCase()]&&(window.location.href=c.href)}),this},"execute":function(a){var b=this;return d.add(function(){a.apply(b,arguments)}),this},"evaluate":function(a){a.call(this)},"moveToAndClick":function(a){return j.push(a),f(a),d.add(function(){var c=b(a);c.length>0&&(c.click(),c.moveTo())}),this},"moveToAndFocus":function(a){return j.push(a),f(a),d.add(function(b){var c=AJS.$(a);c.length>0&&(c.focus(),c.moveTo&&c.moveTo(),c.is(":input")&&b.preventDefault())}),this},"or":function(a){return e(a),this},"unbind":function(){b(document).unbind("keydown keypress",h).unbind("keydown keypress keyup",i);for(var a=0,c=j.length;c>a;a++)g(j[a]);j=[]}}},a.whenIType.fromJSON=function(a,d){var e=[];return a&&b.each(a,function(a,f){var g,h=f.op,i=f.param;if("execute"===h||"evaluate"===h)g=[new Function(i)];else if(/^\[[^\]\[]*,[^\]\[]*\]$/.test(i)){try{g=JSON.parse(i)
}catch(j){AJS.error("When using a parameter array, array must be in strict JSON format: "+i)}b.isArray(g)||AJS.error("Badly formatted shortcut parameter. String or JSON Array of parameters required: "+i)}else g=[i];b.each(f.keys,function(){var a=this;d&&c&&(a=b.map(a,function(a){return a.replace(/ctrl/i,"meta")}));var f=AJS.whenIType(a);f[h].apply(f,g),e.push(f)})}),e},b(document).bind("iframeAppended",function(a,c){b(c).load(function(){var a=b(c).contents();a.bind("keyup keydown keypress",function(a){b.browser.safari&&"keypress"===a.type||b(a.target).is(":input")||b.event.trigger(a,arguments,document,!0)})})})}(AJS,AJS.$),function(a,b,c){"use strict";function d(b){var c=this;this.element=b,this.$element=a(b),this.index=a("aui-header, .aui-header").index(b),this.secondaryNav=this.$element.find(".aui-header-secondary .aui-nav").first(),this.menuItems=[],this.availableWidth=0,this.totalWidth=0,this.moreMenu=void 0,this.previousIndex=void 0,this.applicationLogo=this.$element.find("#logo"),this.moreMenuWidth=0,this.primaryButtonsWidth=0,this.inHeader=function(){var a=c.$element.find(".aui-header-primary").first();return function(b){return a.find(b)}}()}function e(a){var b=new d(a);b.init()}function f(){a(".aui-header").each(function(){e(this)})}var g=a(window);d.prototype={"init":function(){var b=this;this.element.setAttribute("data-aui-responsive","true"),this.inHeader(".aui-button").parent().each(function(){b.primaryButtonsWidth+=a(this).outerWidth(!0)}),this.inHeader(".aui-nav > li > a:not(.aui-button)").each(function(){var c=a(this).parent(),d=c.outerWidth(!0);b.totalWidth+=d,b.menuItems.push({"itemElement":c,"itemWidth":d})}),this.previousIndex=this.menuItems.length,g.resize(function(){b.previousIndex=b.constructResponsiveDropdown()}),this.createResponsiveDropdownTrigger();var c=this.applicationLogo.find("img");0!==c.length&&(c.attr("data-aui-responsive-header-index",this.index),c.load(function(){b.previousIndex=b.constructResponsiveDropdown()})),this.previousIndex=this.constructResponsiveDropdown(),this.inHeader(".aui-nav").css("width","auto")},"calculateAvailableWidth":function(){var a=0!==this.secondaryNav.length?this.secondaryNav.offset().left:this.$element.outerWidth(),b=this.applicationLogo.offset().left+this.applicationLogo.outerWidth(!0)+this.primaryButtonsWidth;return a-b},"constructResponsiveDropdown":function(){var a,b=this.calculateAvailableWidth(this.$element,this.primaryButtonsWidth);if(!(b>this.totalWidth)){this.moreMenu.show(),a=b-this.moreMenuWidth;for(var c=0;a>=0;c++)a-=this.menuItems[c].itemWidth;return--c,this.moveToResponsiveDropdown(c),this.moveOutOfResponsiveDropdown(c),c}this.showAll()},"createResponsiveDropdownTrigger":function(){var b=document.createElement("li"),d=document.createElement("aui-dropdown");d.id="aui-responsive-header-dropdown-"+this.index,c.wrap(d).innerHTML='<ul id="aui-responsive-header-dropdown-list-'+this.index+'"></ul>',d.setAttribute("label",AJS.I18n.getText("aui.words.more")),b.appendChild(d),0===this.primaryButtonsWidth?this.inHeader(".aui-nav").append(b):this.inHeader(".aui-nav > li > .aui-button").first().parent().before(b),this.moreMenu=a(b),this.moreMenuWidth=this.moreMenu.outerWidth(!0)},"moveOutOfResponsiveDropdown":function(b){if(!(0>b||this.previousIndex<0||b===this.previousIndex)){var c,d,e=a("#aui-responsive-header-dropdown-"+this.index),f=e.parent();e.hasClass("active")&&e.trigger("aui-button-invoke");for(var g=this.inHeader(".aui-nav > li > aui-dropdown:not(#aui-responsive-header-dropdown-"+this.index+")").length;b>this.previousIndex;)c=this.menuItems[this.previousIndex],c&&c.itemElement&&(d=c.itemElement,0===g?d.prependTo(this.inHeader(".aui-nav")):d.insertBefore(f),d.children("a").removeClass("aui-dropdown2-sub-trigger active"),this.previousIndex=this.previousIndex+1,g+=1)}},"moveToResponsiveDropdown":function(b){if(!(0>b))for(var c=a("#aui-responsive-header-dropdown-list-"+this.index),d=b;d<this.menuItems.length;d++){this.menuItems[d].itemElement.appendTo(c);var e=this.menuItems[d].itemElement.children("a");e.hasClass("aui-dropdown2-trigger")&&e.addClass("aui-dropdown2-sub-trigger")}},"showAll":function(){this.moreMenu.hide(),this.moveOutOfResponsiveDropdown(this.menuItems.length,this.previousIndex)}},a(f),AJS.responsiveheader={},AJS.responsiveheader.setup=AJS.deprecate.fn(f,"AJS.responsiveheader.setup",{"removeInVersion":"6.0.0","sinceVersion":"5.8.0","extraInfo":"No need to manually initialise anymore as this is now a web component."}),b("aui-header",{"type":b.types.TAG,"created":function(b){a(b).find(".aui-banner").addClass("aui-banner-error")},"attached":function(a){e(a)},"attributes":{"link":function(a,b){a.querySelector("#logo > a").setAttribute("href",b.newValue)},"responsive":function(a,b){a.querySelector(".aui-header").setAttribute("data-aui-responsive",b.newValue)}},"template":c('<content select="aui-banner"></content>','<nav class="aui-header aui-dropdown2-trigger-group" role="navigation">','<content select=".aui-header-before"></content>','<div class="aui-header-primary">','<h1 id="logo" class="aui-header-logo">','<a href="/">','<content select=".aui-header-logo, .aui-header-logo-device, .aui-header-logo-text"></content>',"</a>","</h1>",'<content select=".aui-header-content"></content>',"</div>",'<content select=".aui-header-secondary"></content>','<content select=".aui-header-after"></content>',"</nav>")})}(AJS.$,window.skate,window.skateTemplateHtml),function(a,b){a.FancyFileInput=b(jQuery),"function"==typeof define&&define("aui/internal/fancy-file-input",[],function(){return a.FancyFileInput})}(this,function(a){"use strict";function b(c,d){var e=a(c).data("FancyFileInput");return e?e:(d=a.extend({},b.defaults,d),this.el=c,this.$el=a(c),this.$label=this.createLabel(d.buttonText),this._addLabelText(),this.$clearButton=a("<button>",{"text":this.$label.attr("data-ffi-clearButtonText")||d.clearButtonText,"class":"ffi-clear","type":"button","tabindex":"-1"}),this.multipleFileTextPattern=this.$label.attr("data-ffi-multipleFileTextPattern")||d.multipleFileTextPattern,this._eventNamespace=".ffi",this.CLASSES={"disabled":"is-disabled","focused":"is-focused","active":"is-active","valid":"is-valid","invalid":"is-invalid"},this[this.isDisabled()?"disable":"enable"](),void(this.isFocused=!1))}var c=/^.*[\\\/]/,d=/\{0\}/gi,e=function(){var a=3,b=document.createElement("div"),c=b.getElementsByTagName("i");do b.innerHTML="<!--[if gt IE "+ ++a+"]><i></i><![endif]-->";while(c[0]);return a>4?a:document.documentMode}();return a.fn.fancyFileInput=function(c){return this.each(function(){var d=new b(this,c);a(this).data("FancyFileInput",d)})},b.defaults={"buttonText":"Browse\u2026","clearButtonText":"Clear","multipleFileTextPattern":"{0} files"},b.prototype._addLabelText=function(){var b=a('label[for="'+this.el.id+'"]');b.length&&this.$el.attr("aria-label",b.text())},b.prototype.createLabel=function(b){var c=this.$el.parent(".ffi[data-ffi-button-text]");return c.length||(c=this.$el.wrap(a("<label>",{"class":"ffi","data-ffi-button-text":b})).parent()),c},b.prototype.isDisabled=function(){return this.$el.is(":disabled")},b.prototype.formatMultipleFileText=function(a){return this.multipleFileTextPattern.replace(d,a)},b.prototype.bindEvents=function(){this.$el.on("invalid"+this._eventNamespace,a.proxy(this.checkValidity,this)).on("change"+this._eventNamespace,a.proxy(this.change,this)).on("keydown"+this._eventNamespace,a.proxy(this.keydown,this)).on("mousedown"+this._eventNamespace,a.proxy(this.mousedown,this)).on("mouseup"+this._eventNamespace,a.proxy(this.mouseup,this)).on("focus"+this._eventNamespace,a.proxy(this.focus,this)).on("blur"+this._eventNamespace,a.proxy(this.blur,this)),this.$clearButton.on("click"+this._eventNamespace,a.proxy(this.clear,this))},b.prototype.unbindEvents=function(){this.$el.off(this._eventNamespace),this.$clearButton.off(this._eventNamespace)},b.prototype.fireEvent=function(a){this.$el.trigger(a+this._eventNamespace)},b.prototype.enable=function(){this.bindEvents(),this.$el.prop("disabled",!1),this.$label.removeClass(this.CLASSES.disabled)},b.prototype.disable=function(){this.unbindEvents(),this.$el.prop("disabled",!0),this.$label.addClass(this.CLASSES.disabled)},b.prototype.clear=function(){return this.$el.wrap("<form>").closest("form").get(0).reset(),this.$el.unwrap(),this.el.value="",this.change(),!1},b.prototype.focus=function(){var a=this;this.$label.addClass(this.CLASSES.focused),e&&!this.isFocused&&(this.isFocused=!0,setTimeout(function(){a.$el.blur(),a.$el.focus()},0))},b.prototype.blur=function(){e&&this.isFocused||(this.$label.removeClass(this.CLASSES.focused),this.isFocused=!1)},b.prototype.mousedown=function(){this.$label.addClass(this.CLASSES.active)},b.prototype.mouseup=function(){this.$label.removeClass(this.CLASSES.active)},b.prototype.keydown=function(a){var b=a.which,c=8,d=9,f=46;if((b===c||b===f)&&(this.clear(),a.preventDefault()),e&&b===d){var g=this;this.isFocused=!1,this.$el.prop("disabled",!0),setTimeout(function(){g.$el.prop("disabled",!1).blur()},0)}},b.prototype.checkValidity=function(){if(this.el.required){var a=this.$el.is(":invalid");this.$label.toggleClass(this.CLASSES.invalid,a).toggleClass(this.CLASSES.valid,!a)}},b.prototype.change=function(){var a,b="";this.checkValidity(),a=this.el.multiple&&this.el.files.length>1?this.formatMultipleFileText(this.el.files.length):this.el.value,a.length?(b=a.replace(c,""),this.$clearButton.appendTo(this.$label)):this.$clearButton.detach(),this.$el.focus(),this.setFieldText(b),this.fireEvent("value-changed")},b.prototype.setFieldText=function(a){var b="data-ffi-value";a.length?(this.$label.attr(b,a),this.fireEvent("value-added")):(this.$label.removeAttr(b),this.fireEvent("value-cleared"))},b});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.comalatech.workflow:cw-content', location = 'templates/com/comalatech/skull/vendors/almond.js' */
/**
 * @license almond 0.3.0 Copyright (c) 2011-2014, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/jrburke/almond for details
 */
//Going sloppy to avoid 'use strict' string cost, but strict practices should
//be followed.
/*jslint sloppy: true */
/*global setTimeout: false */

var requirejs, require, define;
(function (undef) {
    var main, req, makeMap, handlers,
        defined = {},
        waiting = {},
        config = {},
        defining = {},
        hasOwn = Object.prototype.hasOwnProperty,
        aps = [].slice,
        jsSuffixRegExp = /\.js$/;

    function hasProp(obj, prop) {
        return hasOwn.call(obj, prop);
    }

    /**
     * Given a relative module name, like ./something, normalize it to
     * a real name that can be mapped to a path.
     * @param {String} name the relative name
     * @param {String} baseName a real name that the name arg is relative
     * to.
     * @returns {String} normalized name
     */
    function normalize(name, baseName) {
        var nameParts, nameSegment, mapValue, foundMap, lastIndex,
            foundI, foundStarMap, starI, i, j, part,
            baseParts = baseName && baseName.split("/"),
            map = config.map,
            starMap = (map && map['*']) || {};

        //Adjust any relative paths.
        if (name && name.charAt(0) === ".") {
            //If have a base name, try to normalize against it,
            //otherwise, assume it is a top-level require that will
            //be relative to baseUrl in the end.
            if (baseName) {
                //Convert baseName to array, and lop off the last part,
                //so that . matches that "directory" and not name of the baseName's
                //module. For instance, baseName of "one/two/three", maps to
                //"one/two/three.js", but we want the directory, "one/two" for
                //this normalization.
                baseParts = baseParts.slice(0, baseParts.length - 1);
                name = name.split('/');
                lastIndex = name.length - 1;

                // Node .js allowance:
                if (config.nodeIdCompat && jsSuffixRegExp.test(name[lastIndex])) {
                    name[lastIndex] = name[lastIndex].replace(jsSuffixRegExp, '');
                }

                name = baseParts.concat(name);

                //start trimDots
                for (i = 0; i < name.length; i += 1) {
                    part = name[i];
                    if (part === ".") {
                        name.splice(i, 1);
                        i -= 1;
                    } else if (part === "..") {
                        if (i === 1 && (name[2] === '..' || name[0] === '..')) {
                            //End of the line. Keep at least one non-dot
                            //path segment at the front so it can be mapped
                            //correctly to disk. Otherwise, there is likely
                            //no path mapping for a path starting with '..'.
                            //This can still fail, but catches the most reasonable
                            //uses of ..
                            break;
                        } else if (i > 0) {
                            name.splice(i - 1, 2);
                            i -= 2;
                        }
                    }
                }
                //end trimDots

                name = name.join("/");
            } else if (name.indexOf('./') === 0) {
                // No baseName, so this is ID is resolved relative
                // to baseUrl, pull off the leading dot.
                name = name.substring(2);
            }
        }

        //Apply map config if available.
        if ((baseParts || starMap) && map) {
            nameParts = name.split('/');

            for (i = nameParts.length; i > 0; i -= 1) {
                nameSegment = nameParts.slice(0, i).join("/");

                if (baseParts) {
                    //Find the longest baseName segment match in the config.
                    //So, do joins on the biggest to smallest lengths of baseParts.
                    for (j = baseParts.length; j > 0; j -= 1) {
                        mapValue = map[baseParts.slice(0, j).join('/')];

                        //baseName segment has  config, find if it has one for
                        //this name.
                        if (mapValue) {
                            mapValue = mapValue[nameSegment];
                            if (mapValue) {
                                //Match, update name to the new value.
                                foundMap = mapValue;
                                foundI = i;
                                break;
                            }
                        }
                    }
                }

                if (foundMap) {
                    break;
                }

                //Check for a star map match, but just hold on to it,
                //if there is a shorter segment match later in a matching
                //config, then favor over this star map.
                if (!foundStarMap && starMap && starMap[nameSegment]) {
                    foundStarMap = starMap[nameSegment];
                    starI = i;
                }
            }

            if (!foundMap && foundStarMap) {
                foundMap = foundStarMap;
                foundI = starI;
            }

            if (foundMap) {
                nameParts.splice(0, foundI, foundMap);
                name = nameParts.join('/');
            }
        }

        return name;
    }

    function makeRequire(relName, forceSync) {
        return function () {
            //A version of a require function that passes a moduleName
            //value for items that may need to
            //look up paths relative to the moduleName
            var args = aps.call(arguments, 0);

            //If first arg is not require('string'), and there is only
            //one arg, it is the array form without a callback. Insert
            //a null so that the following concat is correct.
            if (typeof args[0] !== 'string' && args.length === 1) {
                args.push(null);
            }
            return req.apply(undef, args.concat([relName, forceSync]));
        };
    }

    function makeNormalize(relName) {
        return function (name) {
            return normalize(name, relName);
        };
    }

    function makeLoad(depName) {
        return function (value) {
            defined[depName] = value;
        };
    }

    function callDep(name) {
        if (hasProp(waiting, name)) {
            var args = waiting[name];
            delete waiting[name];
            defining[name] = true;
            main.apply(undef, args);
        }

        if (!hasProp(defined, name) && !hasProp(defining, name)) {
            throw new Error('No ' + name);
        }
        return defined[name];
    }

    //Turns a plugin!resource to [plugin, resource]
    //with the plugin being undefined if the name
    //did not have a plugin prefix.
    function splitPrefix(name) {
        var prefix,
            index = name ? name.indexOf('!') : -1;
        if (index > -1) {
            prefix = name.substring(0, index);
            name = name.substring(index + 1, name.length);
        }
        return [prefix, name];
    }

    /**
     * Makes a name map, normalizing the name, and using a plugin
     * for normalization if necessary. Grabs a ref to plugin
     * too, as an optimization.
     */
    makeMap = function (name, relName) {
        var plugin,
            parts = splitPrefix(name),
            prefix = parts[0];

        name = parts[1];

        if (prefix) {
            prefix = normalize(prefix, relName);
            plugin = callDep(prefix);
        }

        //Normalize according
        if (prefix) {
            if (plugin && plugin.normalize) {
                name = plugin.normalize(name, makeNormalize(relName));
            } else {
                name = normalize(name, relName);
            }
        } else {
            name = normalize(name, relName);
            parts = splitPrefix(name);
            prefix = parts[0];
            name = parts[1];
            if (prefix) {
                plugin = callDep(prefix);
            }
        }

        //Using ridiculous property names for space reasons
        return {
            f: prefix ? prefix + '!' + name : name, //fullName
            n: name,
            pr: prefix,
            p: plugin
        };
    };

    function makeConfig(name) {
        return function () {
            return (config && config.config && config.config[name]) || {};
        };
    }

    handlers = {
        require: function (name) {
            return makeRequire(name);
        },
        exports: function (name) {
            var e = defined[name];
            if (typeof e !== 'undefined') {
                return e;
            } else {
                return (defined[name] = {});
            }
        },
        module: function (name) {
            return {
                id: name,
                uri: '',
                exports: defined[name],
                config: makeConfig(name)
            };
        }
    };

    main = function (name, deps, callback, relName) {
        var cjsModule, depName, ret, map, i,
            args = [],
            callbackType = typeof callback,
            usingExports;

        //Use name if no relName
        relName = relName || name;

        //Call the callback to define the module, if necessary.
        if (callbackType === 'undefined' || callbackType === 'function') {
            //Pull out the defined dependencies and pass the ordered
            //values to the callback.
            //Default to [require, exports, module] if no deps
            deps = !deps.length && callback.length ? ['require', 'exports', 'module'] : deps;
            for (i = 0; i < deps.length; i += 1) {
                map = makeMap(deps[i], relName);
                depName = map.f;

                //Fast path CommonJS standard dependencies.
                if (depName === "require") {
                    args[i] = handlers.require(name);
                } else if (depName === "exports") {
                    //CommonJS module spec 1.1
                    args[i] = handlers.exports(name);
                    usingExports = true;
                } else if (depName === "module") {
                    //CommonJS module spec 1.1
                    cjsModule = args[i] = handlers.module(name);
                } else if (hasProp(defined, depName) ||
                           hasProp(waiting, depName) ||
                           hasProp(defining, depName)) {
                    args[i] = callDep(depName);
                } else if (map.p) {
                    map.p.load(map.n, makeRequire(relName, true), makeLoad(depName), {});
                    args[i] = defined[depName];
                } else {
                    throw new Error(name + ' missing ' + depName);
                }
            }

            ret = callback ? callback.apply(defined[name], args) : undefined;

            if (name) {
                //If setting exports via "module" is in play,
                //favor that over return value and exports. After that,
                //favor a non-undefined return value over exports use.
                if (cjsModule && cjsModule.exports !== undef &&
                        cjsModule.exports !== defined[name]) {
                    defined[name] = cjsModule.exports;
                } else if (ret !== undef || !usingExports) {
                    //Use the return value from the function.
                    defined[name] = ret;
                }
            }
        } else if (name) {
            //May just be an object definition for the module. Only
            //worry about defining if have a module name.
            defined[name] = callback;
        }
    };

    requirejs = require = req = function (deps, callback, relName, forceSync, alt) {
        if (typeof deps === "string") {
            if (handlers[deps]) {
                //callback in this case is really relName
                return handlers[deps](callback);
            }
            //Just return the module wanted. In this scenario, the
            //deps arg is the module name, and second arg (if passed)
            //is just the relName.
            //Normalize module name, if it contains . or ..
            return callDep(makeMap(deps, callback).f);
        } else if (!deps.splice) {
            //deps is a config object, not an array.
            config = deps;
            if (config.deps) {
                req(config.deps, config.callback);
            }
            if (!callback) {
                return;
            }

            if (callback.splice) {
                //callback is an array, which means it is a dependency list.
                //Adjust args if there are dependencies
                deps = callback;
                callback = relName;
                relName = null;
            } else {
                deps = undef;
            }
        }

        //Support require(['a'])
        callback = callback || function () {};

        //If relName is a function, it is an errback handler,
        //so remove it.
        if (typeof relName === 'function') {
            relName = forceSync;
            forceSync = alt;
        }

        //Simulate async callback;
        if (forceSync) {
            main(undef, deps, callback, relName);
        } else {
            //Using a non-zero value because of concern for what old browsers
            //do, and latest browsers "upgrade" to 4 if lower value is used:
            //http://www.whatwg.org/specs/web-apps/current-work/multipage/timers.html#dom-windowtimers-settimeout:
            //If want a value immediately, use require('id') instead -- something
            //that works in almond on the global level, but not guaranteed and
            //unlikely to work in other AMD implementations.
            setTimeout(function () {
                main(undef, deps, callback, relName);
            }, 4);
        }

        return req;
    };

    /**
     * Just drops the config on the floor, but returns req in case
     * the config return value is used.
     */
    req.config = function (cfg) {
        return req(cfg);
    };

    /**
     * Expose module registry for debugging and tooling
     */
    requirejs._defined = defined;

    define = function (name, deps, callback) {

        //This module may not have dependencies
        if (!deps.splice) {
            //deps is not an array, so probably means
            //an object literal or factory function for
            //the value. Adjust args.
            callback = deps;
            deps = [];
        }

        if (!hasProp(defined, name) && !hasProp(waiting, name)) {
            waiting[name] = [name, deps, callback];
        }
    };

    define.amd = {
        jQuery: true
    };
}());
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.comalatech.workflow:cw-content', location = 'templates/com/comalatech/skull/vendors/aui/5.8.4/js/aui-experimental.js' */
;
// tipsy, facebook style tooltips for jquery
// version 1.0.0a
// (c) 2008-2010 jason frame [jason@onehackoranother.com]
// released under the MIT license
//
// Modified by Atlassian
// https://github.com/atlassian/tipsy

(function($) {
    
    function maybeCall(thing, ctx) {
        return (typeof thing == 'function') ? (thing.call(ctx)) : thing;
    };
    
    function isElementInDOM(ele) {
      while (ele = ele.parentNode) {
        if (ele == document) return true;
      }
      return false;
    };

    var tipsyIDcounter = 0;
    function tipsyID() {
        var tipsyID = tipsyIDcounter++;
        return "tipsyuid" + tipsyID;
    };
    
    function Tipsy(element, options) {
        this.$element = $(element);
        this.options = options;
        this.enabled = true;
        this.fixTitle();
    };
    
    Tipsy.prototype = {
        show: function() {
            // if element is not in the DOM then don't show the Tipsy
            if (!isElementInDOM(this.$element[0])) {
                return;
            }

            var title = this.getTitle();
            if (title && this.enabled) {
                var $tip = this.tip();
                
                $tip.find('.tipsy-inner')[this.options.html ? 'html' : 'text'](title);
                $tip[0].className = 'tipsy'; // reset classname in case of dynamic gravity
                $tip.remove().css({top: 0, left: 0, visibility: 'hidden', display: 'block'}).prependTo(document.body);


                var that = this;
                function tipOver() {
                    that.hoverTooltip = true;
                }
                function tipOut() {
                    if (that.hoverState == 'in') return;  // If field is still focused.
                    that.hoverTooltip = false;
                    if (that.options.trigger != 'manual') {
                        var eventOut = that.options.trigger == 'hover' ? 'mouseleave.tipsy' : 'blur.tipsy';
                        that.$element.trigger(eventOut);
                    }
                }
                
                if (this.options.hoverable) {
                    $tip.hover(tipOver, tipOut);
                }

                if (this.options.className) {
                    $tip.addClass(maybeCall(this.options.className, this.$element[0]));
                }

                var pos = $.extend({}, this.$element.offset(), {
                    width: this.$element[0].offsetWidth,
                    height: this.$element[0].offsetHeight
                });
                
                var actualWidth = $tip[0].offsetWidth,
                    actualHeight = $tip[0].offsetHeight,
                    gravity = maybeCall(this.options.gravity, this.$element[0]);
                
                var tp;
                switch (gravity.charAt(0)) {
                    case 'n':
                        tp = {top: pos.top + pos.height + this.options.offset, left: pos.left + pos.width / 2 - actualWidth / 2};
                        break;
                    case 's':
                        tp = {top: pos.top - actualHeight - this.options.offset, left: pos.left + pos.width / 2 - actualWidth / 2};
                        break;
                    case 'e':
                        tp = {top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth - this.options.offset};
                        break;
                    case 'w':
                        tp = {top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width + this.options.offset};
                        break;
                }
                
                if (gravity.length == 2) {
                    if (gravity.charAt(1) == 'w') {
                        tp.left = pos.left + pos.width / 2 - 15;
                    } else {
                        tp.left = pos.left + pos.width / 2 - actualWidth + 15;
                    }
                }
                
                $tip.css(tp).addClass('tipsy-' + gravity);
                $tip.find('.tipsy-arrow')[0].className = 'tipsy-arrow tipsy-arrow-' + gravity.charAt(0);
                
                if (this.options.fade) {
                    $tip.stop().css({opacity: 0, display: 'block', visibility: 'visible'}).animate({opacity: this.options.opacity});
                } else {
                    $tip.css({visibility: 'visible', opacity: this.options.opacity});
                }

                if (this.options.aria) {
                    var $tipID = tipsyID();
                    $tip.attr("id", $tipID);
                    this.$element.attr("aria-describedby", $tipID);
                }
            }
        },
        
        hide: function() {
            if (this.options.fade) {
                this.tip().stop().fadeOut(function() { $(this).remove(); });
            } else {
                this.tip().remove();
            }
            if (this.options.aria) {
                this.$element.removeAttr("aria-describedby");
            }
        },
        
        fixTitle: function() {
            var $e = this.$element;
            if ($e.attr('title') || typeof($e.attr('original-title')) != 'string') {
                $e.attr('original-title', $e.attr('title') || '').removeAttr('title');
            }
        },
        
        getTitle: function() {
            var title, $e = this.$element, o = this.options;
            this.fixTitle();
            var title, o = this.options;
            if (typeof o.title == 'string') {
                title = $e.attr(o.title == 'title' ? 'original-title' : o.title);
            } else if (typeof o.title == 'function') {
                title = o.title.call($e[0]);
            }
            title = ('' + title).replace(/(^\s*|\s*$)/, "");
            return title || o.fallback;
        },
        
        tip: function() {
            if (!this.$tip) {
                this.$tip = $('<div class="tipsy"></div>').html('<div class="tipsy-arrow"></div><div class="tipsy-inner"></div>').attr("role","tooltip");
                this.$tip.data('tipsy-pointee', this.$element[0]);
            }
            return this.$tip;
        },
        
        validate: function() {
            if (!this.$element[0].parentNode) {
                this.hide();
                this.$element = null;
                this.options = null;
            }
        },
        
        enable: function() { this.enabled = true; },
        disable: function() { this.enabled = false; },
        toggleEnabled: function() { this.enabled = !this.enabled; }
    };
    
    $.fn.tipsy = function(options) {
        
        if (options === true) {
            return this.data('tipsy');
        } else if (typeof options == 'string') {
            var tipsy = this.data('tipsy');
            if (tipsy) tipsy[options]();
            return this;
        }
        
        options = $.extend({}, $.fn.tipsy.defaults, options);
        if (options.hoverable) {
            options.delayOut = options.delayOut || 20;
        }
        
        function get(ele) {
            var tipsy = $.data(ele, 'tipsy');
            if (!tipsy) {
                tipsy = new Tipsy(ele, $.fn.tipsy.elementOptions(ele, options));
                $.data(ele, 'tipsy', tipsy);
            }
            return tipsy;
        }
        
        function enter() {
            var tipsy = get(this);
            tipsy.hoverState = 'in';
            if (options.delayIn == 0) {
                tipsy.show();
            } else {
                tipsy.fixTitle();
                setTimeout(function() { if (tipsy.hoverState == 'in') tipsy.show(); }, options.delayIn);
            }
        };
        
        function leave() {
            var tipsy = get(this);
            tipsy.hoverState = 'out';
            if (options.delayOut == 0) {
                tipsy.hide();
            } else {
                setTimeout(function() { if (tipsy.hoverState == 'out' && !tipsy.hoverTooltip) tipsy.hide(); }, options.delayOut);
            }
        };
        
        if (!options.live) this.each(function() { get(this); });
        
        if (options.trigger != 'manual') {
            var eventIn  = options.trigger == 'hover' ? 'mouseenter.tipsy' : 'focus.tipsy',
                eventOut = options.trigger == 'hover' ? 'mouseleave.tipsy' : 'blur.tipsy';
            if (options.live) {
                $(this.context).on(eventIn, this.selector, enter).on(eventOut, this.selector, leave);
            } else {
                this.bind(eventIn, enter).bind(eventOut, leave);
            }
        }
        
        return this;
        
    };
    
    $.fn.tipsy.defaults = {
        aria: false,
        className: null,
        delayIn: 0,
        delayOut: 0,
        fade: false,
        fallback: '',
        gravity: 'n',
        html: false,
        live: false,
        hoverable: false,
        offset: 0,
        opacity: 0.8,
        title: 'title',
        trigger: 'hover'
    };
    
    $.fn.tipsy.revalidate = function() {
      $('.tipsy').each(function() {
        var pointee = $.data(this, 'tipsy-pointee');
        if (!pointee || !isElementInDOM(pointee)) {
          $(this).remove();
        }
      });
    };
    
    // Overwrite this method to provide options on a per-element basis.
    // For example, you could store the gravity in a 'tipsy-gravity' attribute:
    // return $.extend({}, options, {gravity: $(ele).attr('tipsy-gravity') || 'n' });
    // (remember - do not modify 'options' in place!)
    $.fn.tipsy.elementOptions = function(ele, options) {
        return $.metadata ? $.extend({}, options, $(ele).metadata()) : options;
    };
    
    $.fn.tipsy.autoNS = function() {
        return $(this).offset().top > ($(document).scrollTop() + $(window).height() / 2) ? 's' : 'n';
    };
    
    $.fn.tipsy.autoWE = function() {
        return $(this).offset().left > ($(document).scrollLeft() + $(window).width() / 2) ? 'e' : 'w';
    };
    
    /**
     * yields a closure of the supplied parameters, producing a function that takes
     * no arguments and is suitable for use as an autogravity function like so:
     *
     * @param margin (int) - distance from the viewable region edge that an
     *        element should be before setting its tooltip's gravity to be away
     *        from that edge.
     * @param prefer (string, e.g. 'n', 'sw', 'w') - the direction to prefer
     *        if there are no viewable region edges effecting the tooltip's
     *        gravity. It will try to vary from this minimally, for example,
     *        if 'sw' is preferred and an element is near the right viewable 
     *        region edge, but not the top edge, it will set the gravity for
     *        that element's tooltip to be 'se', preserving the southern
     *        component.
     */
     $.fn.tipsy.autoBounds = function(margin, prefer) {
		return function() {
			var dir = {ns: prefer[0], ew: (prefer.length > 1 ? prefer[1] : false)},
			    boundTop = $(document).scrollTop() + margin,
			    boundLeft = $(document).scrollLeft() + margin,
			    $this = $(this);

			if ($this.offset().top < boundTop) dir.ns = 'n';
			if ($this.offset().left < boundLeft) dir.ew = 'w';
			if ($(window).width() + $(document).scrollLeft() - $this.offset().left < margin) dir.ew = 'e';
			if ($(window).height() + $(document).scrollTop() - $this.offset().top < margin) dir.ns = 's';

			return dir.ns + (dir.ew ? dir.ew : '');
		}
	};
    
})(jQuery);

(function ($) {
    var $document = $(document),

        //convenience function because this needs to be run for all the events.
        getExpanderProperties = function(event){
            var properties = {};

            properties.$trigger = $(event.currentTarget);
            properties.$content = $document.find('#' + properties.$trigger.attr('aria-controls'));
            properties.triggerIsParent = properties.$content.parent().filter(properties.$trigger).length !== 0;
            properties.$shortContent = properties.triggerIsParent ? properties.$trigger.find('.aui-expander-short-content') : null;
            properties.height = properties.$content.css('min-height');
            properties.isCollapsible = properties.$trigger.data('collapsible') !== false;
            properties.replaceText = properties.$trigger.attr('data-replace-text'); //can't use .data here because it doesn't update after the first call
            properties.replaceSelector = properties.$trigger.data('replace-selector');

            return properties;
        },
        replaceText = function(properties) {
            if (properties.replaceText) {
                var $replaceElement = properties.replaceSelector ?
                properties.$trigger.find(properties.replaceSelector) :
                    properties.$trigger;

                properties.$trigger.attr('data-replace-text', $replaceElement.text());
                $replaceElement.text(properties.replaceText);
            }
        };
        //events that the expander listens to
        var EXPANDER_EVENTS = {
            'aui-expander-invoke': function(event) {
                var $trigger = $(event.currentTarget);
                var $content = $document.find('#' + $trigger.attr('aria-controls'));
                var isCollapsible = $trigger.data('collapsible') !== false;

                //determine if content should be expanded or collapsed
                if ($content.attr('aria-expanded') === 'true' && isCollapsible) {
                    $trigger.trigger('aui-expander-collapse');
                } else {
                    $trigger.trigger('aui-expander-expand');
                }
            },
            'aui-expander-expand': function(event) {
                var properties = getExpanderProperties(event);

                properties.$content.attr('aria-expanded', 'true');
                properties.$trigger.attr('aria-expanded', 'true');

                if (properties.$content.outerHeight() > 0) {
                    properties.$content.attr('aria-hidden', 'false');
                }

                //handle replace text
                replaceText(properties);

                //if the trigger is the parent also hide the short-content (default)
                if(properties.triggerIsParent){
                    properties.$shortContent.hide();
                }
                properties.$trigger.trigger('aui-expander-expanded');

            },
            'aui-expander-collapse': function(event){

                var properties = getExpanderProperties(event);

                //handle replace text
                replaceText(properties);

                //collapse the expander
                properties.$content.attr('aria-expanded', 'false');
                properties.$trigger.attr('aria-expanded', 'false');

                //if the trigger is the parent also hide the short-content (default)
                if(properties.triggerIsParent){
                    properties.$shortContent.show();
                }

                //handle the height option
                if (properties.$content.outerHeight() === 0) {
                    properties.$content.attr('aria-hidden', 'true');
                }

                properties.$trigger.trigger('aui-expander-collapsed');
            },

            'click.aui-expander': function(event){
                var $target = $(event.currentTarget);
                $target.trigger('aui-expander-invoke', event.currentTarget);
            }
        };

    //delegate events to the triggers on the page
    $document.on(EXPANDER_EVENTS, '.aui-expander-trigger');

})(jQuery);

//API
(function() {
    'use strict';
    function updateProgress($progressBar, $progressBarContainer, progressValue) {
        AJS._internal.animation.recomputeStyle($progressBar);
        $progressBar.css("width", progressValue * 100 + "%");
        $progressBarContainer.attr("data-value", progressValue);
    }



    AJS.progressBars = {
        update: function(element, value){
            var $progressBarContainer = AJS.$(element).first();
            var $progressBar = $progressBarContainer.children(".aui-progress-indicator-value");
            var currentProgress = $progressBar.attr("data-value") || 0;

            var afterTransitionEvent = "aui-progress-indicator-after-update";
            var beforeTransitionEvent = "aui-progress-indicator-before-update";
            var transitionEnd = "transitionend webkitTransitionEnd";

            var isIndeterminate = !$progressBarContainer.attr("data-value");

            //if the progress bar is indeterminate switch it.
            if (isIndeterminate) {
                $progressBar.css("width", 0);
            }

            if (typeof value === "number" && value<= 1 && value >= 0) {
                $progressBarContainer.trigger(beforeTransitionEvent, [currentProgress, value]);

                //detect whether transitions are supported
                var documentBody = document.body || document.documentElement;
                var style = documentBody.style;
                var transition = 'transition';

                //trigger the event after transition end if supported, otherwise just trigger it
                if (typeof style.transition === 'string' || typeof style.WebkitTransition === "string") {
                    $progressBar.one(transitionEnd, function() {
                        $progressBarContainer.trigger(afterTransitionEvent, [currentProgress, value]);
                    });
                    updateProgress($progressBar, $progressBarContainer, value);
                } else {
                    updateProgress($progressBar, $progressBarContainer, value);
                    $progressBarContainer.trigger(afterTransitionEvent, [currentProgress, value]);
                }


            }
            return $progressBarContainer;
        },
        setIndeterminate: function(element) {
            var $progressBarContainer = AJS.$(element).first();
            var $progressBar = $progressBarContainer.children(".aui-progress-indicator-value");

            $progressBarContainer.removeAttr("data-value");
            AJS._internal.animation.recomputeStyle($progressBarContainer);
            $progressBar.css("width", "100%");
        }
    };
}());

/**!
 * TableSorter 2.17.7 - Client-side table sorting with ease!
 * @requires jQuery v1.2.6+
 *
 * Copyright (c) 2007 Christian Bach
 * Examples and docs at: http://tablesorter.com
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * @type jQuery
 * @name tablesorter
 * @cat Plugins/Tablesorter
 * @author Christian Bach/christian.bach@polyester.se
 * @contributor Rob Garrison/https://github.com/Mottie/tablesorter
 */
/*jshint browser:true, jquery:true, unused:false, expr: true */
/*global console:false, alert:false */
!(function($) {
    "use strict";
    $.extend({
        /*jshint supernew:true */
        tablesorter: new function() {

            var ts = this;

            ts.version = "2.17.7";

            ts.parsers = [];
            ts.widgets = [];
            ts.defaults = {

                // *** appearance
                theme            : 'default',  // adds tablesorter-{theme} to the table for styling
                widthFixed       : false,      // adds colgroup to fix widths of columns
                showProcessing   : false,      // show an indeterminate timer icon in the header when the table is sorted or filtered.

                headerTemplate   : '{content}',// header layout template (HTML ok); {content} = innerHTML, {icon} = <i/> (class from cssIcon)
                onRenderTemplate : null,       // function(index, template){ return template; }, (template is a string)
                onRenderHeader   : null,       // function(index){}, (nothing to return)

                // *** functionality
                cancelSelection  : true,       // prevent text selection in the header
                tabIndex         : true,       // add tabindex to header for keyboard accessibility
                dateFormat       : 'mmddyyyy', // other options: "ddmmyyy" or "yyyymmdd"
                sortMultiSortKey : 'shiftKey', // key used to select additional columns
                sortResetKey     : 'ctrlKey',  // key used to remove sorting on a column
                usNumberFormat   : true,       // false for German "1.234.567,89" or French "1 234 567,89"
                delayInit        : false,      // if false, the parsed table contents will not update until the first sort
                serverSideSorting: false,      // if true, server-side sorting should be performed because client-side sorting will be disabled, but the ui and events will still be used.

                // *** sort options
                headers          : {},         // set sorter, string, empty, locked order, sortInitialOrder, filter, etc.
                ignoreCase       : true,       // ignore case while sorting
                sortForce        : null,       // column(s) first sorted; always applied
                sortList         : [],         // Initial sort order; applied initially; updated when manually sorted
                sortAppend       : null,       // column(s) sorted last; always applied
                sortStable       : false,      // when sorting two rows with exactly the same content, the original sort order is maintained

                sortInitialOrder : 'asc',      // sort direction on first click
                sortLocaleCompare: false,      // replace equivalent character (accented characters)
                sortReset        : false,      // third click on the header will reset column to default - unsorted
                sortRestart      : false,      // restart sort to "sortInitialOrder" when clicking on previously unsorted columns

                emptyTo          : 'bottom',   // sort empty cell to bottom, top, none, zero
                stringTo         : 'max',      // sort strings in numerical column as max, min, top, bottom, zero
                textExtraction   : 'basic',    // text extraction method/function - function(node, table, cellIndex){}
                textAttribute    : 'data-text',// data-attribute that contains alternate cell text (used in textExtraction function)
                textSorter       : null,       // choose overall or specific column sorter function(a, b, direction, table, columnIndex) [alt: ts.sortText]
                numberSorter     : null,       // choose overall numeric sorter function(a, b, direction, maxColumnValue)

                // *** widget options
                widgets: [],                   // method to add widgets, e.g. widgets: ['zebra']
                widgetOptions    : {
                    zebra : [ 'even', 'odd' ]    // zebra widget alternating row class names
                },
                initWidgets      : true,       // apply widgets on tablesorter initialization

                // *** callbacks
                initialized      : null,       // function(table){},

                // *** extra css class names
                tableClass       : '',
                cssAsc           : '',
                cssDesc          : '',
                cssNone          : '',
                cssHeader        : '',
                cssHeaderRow     : '',
                cssProcessing    : '', // processing icon applied to header during sort/filter

                cssChildRow      : 'tablesorter-childRow', // class name indiciating that a row is to be attached to the its parent
                cssIcon          : 'tablesorter-icon',     //  if this class exists, a <i> will be added to the header automatically
                cssInfoBlock     : 'tablesorter-infoOnly', // don't sort tbody with this class name (only one class name allowed here!)

                // *** selectors
                selectorHeaders  : '> thead th, > thead td',
                selectorSort     : 'th, td',   // jQuery selector of content within selectorHeaders that is clickable to trigger a sort
                selectorRemove   : '.remove-me',

                // *** advanced
                debug            : false,

                // *** Internal variables
                headerList: [],
                empties: {},
                strings: {},
                parsers: []

                // deprecated; but retained for backwards compatibility
                // widgetZebra: { css: ["even", "odd"] }

            };

            // internal css classes - these will ALWAYS be added to
            // the table and MUST only contain one class name - fixes #381
            ts.css = {
                table      : 'tablesorter',
                cssHasChild: 'tablesorter-hasChildRow',
                childRow   : 'tablesorter-childRow',
                header     : 'tablesorter-header',
                headerRow  : 'tablesorter-headerRow',
                headerIn   : 'tablesorter-header-inner',
                icon       : 'tablesorter-icon',
                info       : 'tablesorter-infoOnly',
                processing : 'tablesorter-processing',
                sortAsc    : 'tablesorter-headerAsc',
                sortDesc   : 'tablesorter-headerDesc',
                sortNone   : 'tablesorter-headerUnSorted'
            };

            // labels applied to sortable headers for accessibility (aria) support
            ts.language = {
                sortAsc  : 'Ascending sort applied, ',
                sortDesc : 'Descending sort applied, ',
                sortNone : 'No sort applied, ',
                nextAsc  : 'activate to apply an ascending sort',
                nextDesc : 'activate to apply a descending sort',
                nextNone : 'activate to remove the sort'
            };

            /* debuging utils */
            function log() {
                var a = arguments[0],
                    s = arguments.length > 1 ? Array.prototype.slice.call(arguments) : a;
                if (typeof console !== "undefined" && typeof console.log !== "undefined") {
                    console[ /error/i.test(a) ? 'error' : /warn/i.test(a) ? 'warn' : 'log' ](s);
                } else {
                    alert(s);
                }
            }

            function benchmark(s, d) {
                log(s + " (" + (new Date().getTime() - d.getTime()) + "ms)");
            }

            ts.log = log;
            ts.benchmark = benchmark;

            // $.isEmptyObject from jQuery v1.4
            function isEmptyObject(obj) {
                /*jshint forin: false */
                for (var name in obj) {
                    return false;
                }
                return true;
            }

            function getElementText(table, node, cellIndex) {
                if (!node) { return ""; }
                var te, c = table.config,
                    t = c.textExtraction || '',
                    text = "";
                if (t === "basic") {
                    // check data-attribute first
                    text = $(node).attr(c.textAttribute) || node.textContent || node.innerText || $(node).text() || "";
                } else {
                    if (typeof(t) === "function") {
                        text = t(node, table, cellIndex);
                    } else if (typeof (te = ts.getColumnData( table, t, cellIndex )) === 'function') {
                        text = te(node, table, cellIndex);
                    } else {
                        // previous "simple" method
                        text = node.textContent || node.innerText || $(node).text() || "";
                    }
                }
                return $.trim(text);
            }

            function detectParserForColumn(table, rows, rowIndex, cellIndex) {
                var cur,
                    i = ts.parsers.length,
                    node = false,
                    nodeValue = '',
                    keepLooking = true;
                while (nodeValue === '' && keepLooking) {
                    rowIndex++;
                    if (rows[rowIndex]) {
                        node = rows[rowIndex].cells[cellIndex];
                        nodeValue = getElementText(table, node, cellIndex);
                        if (table.config.debug) {
                            log('Checking if value was empty on row ' + rowIndex + ', column: ' + cellIndex + ': "' + nodeValue + '"');
                        }
                    } else {
                        keepLooking = false;
                    }
                }
                while (--i >= 0) {
                    cur = ts.parsers[i];
                    // ignore the default text parser because it will always be true
                    if (cur && cur.id !== 'text' && cur.is && cur.is(nodeValue, table, node)) {
                        return cur;
                    }
                }
                // nothing found, return the generic parser (text)
                return ts.getParserById('text');
            }

            function buildParserCache(table) {
                var c = table.config,
                // update table bodies in case we start with an empty table
                    tb = c.$tbodies = c.$table.children('tbody:not(.' + c.cssInfoBlock + ')'),
                    rows, list, l, i, h, ch, np, p, e, time,
                    j = 0,
                    parsersDebug = "",
                    len = tb.length;
                if ( len === 0) {
                    return c.debug ? log('Warning: *Empty table!* Not building a parser cache') : '';
                } else if (c.debug) {
                    time = new Date();
                    log('Detecting parsers for each column');
                }
                list = {
                    extractors: [],
                    parsers: []
                };
                while (j < len) {
                    rows = tb[j].rows;
                    if (rows[j]) {
                        l = c.columns; // rows[j].cells.length;
                        for (i = 0; i < l; i++) {
                            h = c.$headers.filter('[data-column="' + i + '"]:last');
                            // get column indexed table cell
                            ch = ts.getColumnData( table, c.headers, i );
                            // get column parser/extractor
                            e = ts.getParserById( ts.getData(h, ch, 'extractor') );
                            p = ts.getParserById( ts.getData(h, ch, 'sorter') );
                            np = ts.getData(h, ch, 'parser') === 'false';
                            // empty cells behaviour - keeping emptyToBottom for backwards compatibility
                            c.empties[i] = ts.getData(h, ch, 'empty') || c.emptyTo || (c.emptyToBottom ? 'bottom' : 'top' );
                            // text strings behaviour in numerical sorts
                            c.strings[i] = ts.getData(h, ch, 'string') || c.stringTo || 'max';
                            if (np) {
                                p = ts.getParserById('no-parser');
                            }
                            if (!e) {
                                // For now, maybe detect someday
                                e = false;
                            }
                            if (!p) {
                                p = detectParserForColumn(table, rows, -1, i);
                            }
                            if (c.debug) {
                                parsersDebug += "column:" + i + "; extractor:" + e.id + "; parser:" + p.id + "; string:" + c.strings[i] + '; empty: ' + c.empties[i] + "\n";
                            }
                            list.parsers[i] = p;
                            list.extractors[i] = e;
                        }
                    }
                    j += (list.parsers.length) ? len : 1;
                }
                if (c.debug) {
                    log(parsersDebug ? parsersDebug : "No parsers detected");
                    benchmark("Completed detecting parsers", time);
                }
                c.parsers = list.parsers;
                c.extractors = list.extractors;
            }

            /* utils */
            function buildCache(table) {
                var cc, t, tx, v, i, j, k, $row, rows, cols, cacheTime,
                    totalRows, rowData, colMax,
                    c = table.config,
                    $tb = c.$table.children('tbody'),
                    extractors = c.extractors,
                    parsers = c.parsers;
                c.cache = {};
                c.totalRows = 0;
                // if no parsers found, return - it's an empty table.
                if (!parsers) {
                    return c.debug ? log('Warning: *Empty table!* Not building a cache') : '';
                }
                if (c.debug) {
                    cacheTime = new Date();
                }
                // processing icon
                if (c.showProcessing) {
                    ts.isProcessing(table, true);
                }
                for (k = 0; k < $tb.length; k++) {
                    colMax = []; // column max value per tbody
                    cc = c.cache[k] = {
                        normalized: [] // array of normalized row data; last entry contains "rowData" above
                        // colMax: #   // added at the end
                    };

                    // ignore tbodies with class name from c.cssInfoBlock
                    if (!$tb.eq(k).hasClass(c.cssInfoBlock)) {
                        totalRows = ($tb[k] && $tb[k].rows.length) || 0;
                        for (i = 0; i < totalRows; ++i) {
                            rowData = {
                                // order: original row order #
                                // $row : jQuery Object[]
                                child: [] // child row text (filter widget)
                            };
                            /** Add the table data to main data array */
                            $row = $($tb[k].rows[i]);
                            rows = [ new Array(c.columns) ];
                            cols = [];
                            // if this is a child row, add it to the last row's children and continue to the next row
                            // ignore child row class, if it is the first row
                            if ($row.hasClass(c.cssChildRow) && i !== 0) {
                                t = cc.normalized.length - 1;
                                cc.normalized[t][c.columns].$row = cc.normalized[t][c.columns].$row.add($row);
                                // add "hasChild" class name to parent row
                                if (!$row.prev().hasClass(c.cssChildRow)) {
                                    $row.prev().addClass(ts.css.cssHasChild);
                                }
                                // save child row content (un-parsed!)
                                rowData.child[t] = $.trim( $row[0].textContent || $row[0].innerText || $row.text() || "" );
                                // go to the next for loop
                                continue;
                            }
                            rowData.$row = $row;
                            rowData.order = i; // add original row position to rowCache
                            for (j = 0; j < c.columns; ++j) {
                                if (typeof parsers[j] === 'undefined') {
                                    if (c.debug) {
                                        log('No parser found for cell:', $row[0].cells[j], 'does it have a header?');
                                    }
                                    continue;
                                }
                                t = getElementText(table, $row[0].cells[j], j);
                                // do extract before parsing if there is one
                                if (typeof extractors[j].id === 'undefined') {
                                    tx = t;
                                } else {
                                    tx = extractors[j].format(t, table, $row[0].cells[j], j);
                                }
                                // allow parsing if the string is empty, previously parsing would change it to zero,
                                // in case the parser needs to extract data from the table cell attributes
                                v = parsers[j].id === 'no-parser' ? '' : parsers[j].format(tx, table, $row[0].cells[j], j);
                                cols.push( c.ignoreCase && typeof v === 'string' ? v.toLowerCase() : v );
                                if ((parsers[j].type || '').toLowerCase() === "numeric") {
                                    // determine column max value (ignore sign)
                                    colMax[j] = Math.max(Math.abs(v) || 0, colMax[j] || 0);
                                }
                            }
                            // ensure rowData is always in the same location (after the last column)
                            cols[c.columns] = rowData;
                            cc.normalized.push(cols);
                        }
                        cc.colMax = colMax;
                        // total up rows, not including child rows
                        c.totalRows += cc.normalized.length;
                    }
                }
                if (c.showProcessing) {
                    ts.isProcessing(table); // remove processing icon
                }
                if (c.debug) {
                    benchmark("Building cache for " + totalRows + " rows", cacheTime);
                }
            }

            // init flag (true) used by pager plugin to prevent widget application
            function appendToTable(table, init) {
                var c = table.config,
                    wo = c.widgetOptions,
                    b = table.tBodies,
                    rows = [],
                    cc = c.cache,
                    n, totalRows, $bk, $tb,
                    i, k, appendTime;
                // empty table - fixes #206/#346
                if (isEmptyObject(cc)) {
                    // run pager appender in case the table was just emptied
                    return c.appender ? c.appender(table, rows) :
                        table.isUpdating ? c.$table.trigger("updateComplete", table) : ''; // Fixes #532
                }
                if (c.debug) {
                    appendTime = new Date();
                }
                for (k = 0; k < b.length; k++) {
                    $bk = $(b[k]);
                    if ($bk.length && !$bk.hasClass(c.cssInfoBlock)) {
                        // get tbody
                        $tb = ts.processTbody(table, $bk, true);
                        n = cc[k].normalized;
                        totalRows = n.length;
                        for (i = 0; i < totalRows; i++) {
                            rows.push(n[i][c.columns].$row);
                            // removeRows used by the pager plugin; don't render if using ajax - fixes #411
                            if (!c.appender || (c.pager && (!c.pager.removeRows || !wo.pager_removeRows) && !c.pager.ajax)) {
                                $tb.append(n[i][c.columns].$row);
                            }
                        }
                        // restore tbody
                        ts.processTbody(table, $tb, false);
                    }
                }
                if (c.appender) {
                    c.appender(table, rows);
                }
                if (c.debug) {
                    benchmark("Rebuilt table", appendTime);
                }
                // apply table widgets; but not before ajax completes
                if (!init && !c.appender) { ts.applyWidget(table); }
                if (table.isUpdating) {
                    c.$table.trigger("updateComplete", table);
                }
            }

            function formatSortingOrder(v) {
                // look for "d" in "desc" order; return true
                return (/^d/i.test(v) || v === 1);
            }

            function buildHeaders(table) {
                var ch, $t,
                    h, i, t, lock, time,
                    c = table.config;
                c.headerList = [];
                c.headerContent = [];
                if (c.debug) {
                    time = new Date();
                }
                // children tr in tfoot - see issue #196 & #547
                c.columns = ts.computeColumnIndex( c.$table.children('thead, tfoot').children('tr') );
                // add icon if cssIcon option exists
                i = c.cssIcon ? '<i class="' + ( c.cssIcon === ts.css.icon ? ts.css.icon : c.cssIcon + ' ' + ts.css.icon ) + '"></i>' : '';
                // redefine c.$headers here in case of an updateAll that replaces or adds an entire header cell - see #683
                c.$headers = $(table).find(c.selectorHeaders).each(function(index) {
                    $t = $(this);
                    // make sure to get header cell & not column indexed cell
                    ch = ts.getColumnData( table, c.headers, index, true );
                    // save original header content
                    c.headerContent[index] = $(this).html();
                    // set up header template
                    t = c.headerTemplate.replace(/\{content\}/g, $(this).html()).replace(/\{icon\}/g, i);
                    if (c.onRenderTemplate) {
                        h = c.onRenderTemplate.apply($t, [index, t]);
                        if (h && typeof h === 'string') { t = h; } // only change t if something is returned
                    }
                    $(this).html('<div class="' + ts.css.headerIn + '">' + t + '</div>'); // faster than wrapInner

                    if (c.onRenderHeader) { c.onRenderHeader.apply($t, [index]); }
                    this.column = parseInt( $(this).attr('data-column'), 10);
                    this.order = formatSortingOrder( ts.getData($t, ch, 'sortInitialOrder') || c.sortInitialOrder ) ? [1,0,2] : [0,1,2];
                    this.count = -1; // set to -1 because clicking on the header automatically adds one
                    this.lockedOrder = false;
                    lock = ts.getData($t, ch, 'lockedOrder') || false;
                    if (typeof lock !== 'undefined' && lock !== false) {
                        this.order = this.lockedOrder = formatSortingOrder(lock) ? [1,1,1] : [0,0,0];
                    }
                    $t.addClass(ts.css.header + ' ' + c.cssHeader);
                    // add cell to headerList
                    c.headerList[index] = this;
                    // add to parent in case there are multiple rows
                    $t.parent().addClass(ts.css.headerRow + ' ' + c.cssHeaderRow).attr('role', 'row');
                    // allow keyboard cursor to focus on element
                    if (c.tabIndex) { $t.attr("tabindex", 0); }
                }).attr({
                        scope: 'col',
                        role : 'columnheader'
                    });
                // enable/disable sorting
                updateHeader(table);
                if (c.debug) {
                    benchmark("Built headers:", time);
                    log(c.$headers);
                }
            }

            function commonUpdate(table, resort, callback) {
                var c = table.config;
                // remove rows/elements before update
                c.$table.find(c.selectorRemove).remove();
                // rebuild parsers
                buildParserCache(table);
                // rebuild the cache map
                buildCache(table);
                checkResort(c.$table, resort, callback);
            }

            function updateHeader(table) {
                var s, $th, col,
                    c = table.config;
                c.$headers.each(function(index, th){
                    $th = $(th);
                    col = ts.getColumnData( table, c.headers, index, true );
                    // add "sorter-false" class if "parser-false" is set
                    s = ts.getData( th, col, 'sorter' ) === 'false' || ts.getData( th, col, 'parser' ) === 'false';
                    th.sortDisabled = s;
                    $th[ s ? 'addClass' : 'removeClass' ]('sorter-false').attr('aria-disabled', '' + s);
                    // aria-controls - requires table ID
                    if (table.id) {
                        if (s) {
                            $th.removeAttr('aria-controls');
                        } else {
                            $th.attr('aria-controls', table.id);
                        }
                    }
                });
            }

            function setHeadersCss(table) {
                var f, i, j,
                    c = table.config,
                    list = c.sortList,
                    len = list.length,
                    none = ts.css.sortNone + ' ' + c.cssNone,
                    css = [ts.css.sortAsc + ' ' + c.cssAsc, ts.css.sortDesc + ' ' + c.cssDesc],
                    aria = ['ascending', 'descending'],
                // find the footer
                    $t = $(table).find('tfoot tr').children().add(c.$extraHeaders).removeClass(css.join(' '));
                // remove all header information
                c.$headers
                    .removeClass(css.join(' '))
                    .addClass(none).attr('aria-sort', 'none');
                for (i = 0; i < len; i++) {
                    // direction = 2 means reset!
                    if (list[i][1] !== 2) {
                        // multicolumn sorting updating - choose the :last in case there are nested columns
                        f = c.$headers.not('.sorter-false').filter('[data-column="' + list[i][0] + '"]' + (len === 1 ? ':last' : '') );
                        if (f.length) {
                            for (j = 0; j < f.length; j++) {
                                if (!f[j].sortDisabled) {
                                    f.eq(j).removeClass(none).addClass(css[list[i][1]]).attr('aria-sort', aria[list[i][1]]);
                                }
                            }
                            // add sorted class to footer & extra headers, if they exist
                            if ($t.length) {
                                $t.filter('[data-column="' + list[i][0] + '"]').removeClass(none).addClass(css[list[i][1]]);
                            }
                        }
                    }
                }
                // add verbose aria labels
                c.$headers.not('.sorter-false').each(function(){
                    var $this = $(this),
                        nextSort = this.order[(this.count + 1) % (c.sortReset ? 3 : 2)],
                        txt = $this.text() + ': ' +
                            ts.language[ $this.hasClass(ts.css.sortAsc) ? 'sortAsc' : $this.hasClass(ts.css.sortDesc) ? 'sortDesc' : 'sortNone' ] +
                            ts.language[ nextSort === 0 ? 'nextAsc' : nextSort === 1 ? 'nextDesc' : 'nextNone' ];
                    $this.attr('aria-label', txt );
                });
            }

            // automatically add col group, and column sizes if set
            function fixColumnWidth(table) {
                if (table.config.widthFixed && $(table).find('colgroup').length === 0) {
                    var colgroup = $('<colgroup>'),
                        overallWidth = $(table).width();
                    // only add col for visible columns - fixes #371
                    $(table.tBodies[0]).find("tr:first").children(":visible").each(function() {
                        colgroup.append($('<col>').css('width', parseInt(($(this).width()/overallWidth)*1000, 10)/10 + '%'));
                    });
                    $(table).prepend(colgroup);
                }
            }

            function updateHeaderSortCount(table, list) {
                var s, t, o, col, primary,
                    c = table.config,
                    sl = list || c.sortList;
                c.sortList = [];
                $.each(sl, function(i,v){
                    // ensure all sortList values are numeric - fixes #127
                    col = parseInt(v[0], 10);
                    // make sure header exists
                    o = c.$headers.filter('[data-column="' + col + '"]:last')[0];
                    if (o) { // prevents error if sorton array is wrong
                        // o.count = o.count + 1;
                        t = ('' + v[1]).match(/^(1|d|s|o|n)/);
                        t = t ? t[0] : '';
                        // 0/(a)sc (default), 1/(d)esc, (s)ame, (o)pposite, (n)ext
                        switch(t) {
                            case '1': case 'd': // descending
                            t = 1;
                            break;
                            case 's': // same direction (as primary column)
                                // if primary sort is set to "s", make it ascending
                                t = primary || 0;
                                break;
                            case 'o':
                                s = o.order[(primary || 0) % (c.sortReset ? 3 : 2)];
                                // opposite of primary column; but resets if primary resets
                                t = s === 0 ? 1 : s === 1 ? 0 : 2;
                                break;
                            case 'n':
                                o.count = o.count + 1;
                                t = o.order[(o.count) % (c.sortReset ? 3 : 2)];
                                break;
                            default: // ascending
                                t = 0;
                                break;
                        }
                        primary = i === 0 ? t : primary;
                        s = [ col, parseInt(t, 10) || 0 ];
                        c.sortList.push(s);
                        t = $.inArray(s[1], o.order); // fixes issue #167
                        o.count = t >= 0 ? t : s[1] % (c.sortReset ? 3 : 2);
                    }
                });
            }

            function getCachedSortType(parsers, i) {
                return (parsers && parsers[i]) ? parsers[i].type || '' : '';
            }

            function initSort(table, cell, event){
                if (table.isUpdating) {
                    // let any updates complete before initializing a sort
                    return setTimeout(function(){ initSort(table, cell, event); }, 50);
                }
                var arry, indx, col, order, s,
                    c = table.config,
                    key = !event[c.sortMultiSortKey],
                    $table = c.$table;
                // Only call sortStart if sorting is enabled
                $table.trigger("sortStart", table);
                // get current column sort order
                cell.count = event[c.sortResetKey] ? 2 : (cell.count + 1) % (c.sortReset ? 3 : 2);
                // reset all sorts on non-current column - issue #30
                if (c.sortRestart) {
                    indx = cell;
                    c.$headers.each(function() {
                        // only reset counts on columns that weren't just clicked on and if not included in a multisort
                        if (this !== indx && (key || !$(this).is('.' + ts.css.sortDesc + ',.' + ts.css.sortAsc))) {
                            this.count = -1;
                        }
                    });
                }
                // get current column index
                indx = cell.column;
                // user only wants to sort on one column
                if (key) {
                    // flush the sort list
                    c.sortList = [];
                    if (c.sortForce !== null) {
                        arry = c.sortForce;
                        for (col = 0; col < arry.length; col++) {
                            if (arry[col][0] !== indx) {
                                c.sortList.push(arry[col]);
                            }
                        }
                    }
                    // add column to sort list
                    order = cell.order[cell.count];
                    if (order < 2) {
                        c.sortList.push([indx, order]);
                        // add other columns if header spans across multiple
                        if (cell.colSpan > 1) {
                            for (col = 1; col < cell.colSpan; col++) {
                                c.sortList.push([indx + col, order]);
                            }
                        }
                    }
                    // multi column sorting
                } else {
                    // get rid of the sortAppend before adding more - fixes issue #115 & #523
                    if (c.sortAppend && c.sortList.length > 1) {
                        for (col = 0; col < c.sortAppend.length; col++) {
                            s = ts.isValueInArray(c.sortAppend[col][0], c.sortList);
                            if (s >= 0) {
                                c.sortList.splice(s,1);
                            }
                        }
                    }
                    // the user has clicked on an already sorted column
                    if (ts.isValueInArray(indx, c.sortList) >= 0) {
                        // reverse the sorting direction
                        for (col = 0; col < c.sortList.length; col++) {
                            s = c.sortList[col];
                            order = c.$headers.filter('[data-column="' + s[0] + '"]:last')[0];
                            if (s[0] === indx) {
                                // order.count seems to be incorrect when compared to cell.count
                                s[1] = order.order[cell.count];
                                if (s[1] === 2) {
                                    c.sortList.splice(col,1);
                                    order.count = -1;
                                }
                            }
                        }
                    } else {
                        // add column to sort list array
                        order = cell.order[cell.count];
                        if (order < 2) {
                            c.sortList.push([indx, order]);
                            // add other columns if header spans across multiple
                            if (cell.colSpan > 1) {
                                for (col = 1; col < cell.colSpan; col++) {
                                    c.sortList.push([indx + col, order]);
                                }
                            }
                        }
                    }
                }
                if (c.sortAppend !== null) {
                    arry = c.sortAppend;
                    for (col = 0; col < arry.length; col++) {
                        if (arry[col][0] !== indx) {
                            c.sortList.push(arry[col]);
                        }
                    }
                }
                // sortBegin event triggered immediately before the sort
                $table.trigger("sortBegin", table);
                // setTimeout needed so the processing icon shows up
                setTimeout(function(){
                    // set css for headers
                    setHeadersCss(table);
                    multisort(table);
                    appendToTable(table);
                    $table.trigger("sortEnd", table);
                }, 1);
            }

            // sort multiple columns
            function multisort(table) { /*jshint loopfunc:true */
                var i, k, num, col, sortTime, colMax,
                    cache, order, sort, x, y,
                    dir = 0,
                    c = table.config,
                    cts = c.textSorter || '',
                    sortList = c.sortList,
                    l = sortList.length,
                    bl = table.tBodies.length;
                if (c.serverSideSorting || isEmptyObject(c.cache)) { // empty table - fixes #206/#346
                    return;
                }
                if (c.debug) { sortTime = new Date(); }
                for (k = 0; k < bl; k++) {
                    colMax = c.cache[k].colMax;
                    cache = c.cache[k].normalized;

                    cache.sort(function(a, b) {
                        // cache is undefined here in IE, so don't use it!
                        for (i = 0; i < l; i++) {
                            col = sortList[i][0];
                            order = sortList[i][1];
                            // sort direction, true = asc, false = desc
                            dir = order === 0;

                            if (c.sortStable && a[col] === b[col] && l === 1) {
                                return a[c.columns].order - b[c.columns].order;
                            }

                            // fallback to natural sort since it is more robust
                            num = /n/i.test(getCachedSortType(c.parsers, col));
                            if (num && c.strings[col]) {
                                // sort strings in numerical columns
                                if (typeof (c.string[c.strings[col]]) === 'boolean') {
                                    num = (dir ? 1 : -1) * (c.string[c.strings[col]] ? -1 : 1);
                                } else {
                                    num = (c.strings[col]) ? c.string[c.strings[col]] || 0 : 0;
                                }
                                // fall back to built-in numeric sort
                                // var sort = $.tablesorter["sort" + s](table, a[c], b[c], c, colMax[c], dir);
                                sort = c.numberSorter ? c.numberSorter(a[col], b[col], dir, colMax[col], table) :
                                    ts[ 'sortNumeric' + (dir ? 'Asc' : 'Desc') ](a[col], b[col], num, colMax[col], col, table);
                            } else {
                                // set a & b depending on sort direction
                                x = dir ? a : b;
                                y = dir ? b : a;
                                // text sort function
                                if (typeof(cts) === 'function') {
                                    // custom OVERALL text sorter
                                    sort = cts(x[col], y[col], dir, col, table);
                                } else if (typeof(cts) === 'object' && cts.hasOwnProperty(col)) {
                                    // custom text sorter for a SPECIFIC COLUMN
                                    sort = cts[col](x[col], y[col], dir, col, table);
                                } else {
                                    // fall back to natural sort
                                    sort = ts[ 'sortNatural' + (dir ? 'Asc' : 'Desc') ](a[col], b[col], col, table, c);
                                }
                            }
                            if (sort) { return sort; }
                        }
                        return a[c.columns].order - b[c.columns].order;
                    });
                }
                if (c.debug) { benchmark("Sorting on " + sortList.toString() + " and dir " + order + " time", sortTime); }
            }

            function resortComplete($table, callback){
                var table = $table[0];
                if (table.isUpdating) {
                    $table.trigger('updateComplete');
                }
                if ($.isFunction(callback)) {
                    callback($table[0]);
                }
            }

            function checkResort($table, flag, callback) {
                var sl = $table[0].config.sortList;
                // don't try to resort if the table is still processing
                // this will catch spamming of the updateCell method
                if (flag !== false && !$table[0].isProcessing && sl.length) {
                    $table.trigger("sorton", [sl, function(){
                        resortComplete($table, callback);
                    }, true]);
                } else {
                    resortComplete($table, callback);
                    ts.applyWidget($table[0], false);
                }
            }

            function bindMethods(table){
                var c = table.config,
                    $table = c.$table;
                // apply easy methods that trigger bound events
                $table
                    .unbind('sortReset update updateRows updateCell updateAll addRows updateComplete sorton appendCache updateCache applyWidgetId applyWidgets refreshWidgets destroy mouseup mouseleave '.split(' ').join(c.namespace + ' '))
                    .bind("sortReset" + c.namespace, function(e, callback){
                        e.stopPropagation();
                        c.sortList = [];
                        setHeadersCss(table);
                        multisort(table);
                        appendToTable(table);
                        if ($.isFunction(callback)) {
                            callback(table);
                        }
                    })
                    .bind("updateAll" + c.namespace, function(e, resort, callback){
                        e.stopPropagation();
                        table.isUpdating = true;
                        ts.refreshWidgets(table, true, true);
                        ts.restoreHeaders(table);
                        buildHeaders(table);
                        ts.bindEvents(table, c.$headers, true);
                        bindMethods(table);
                        commonUpdate(table, resort, callback);
                    })
                    .bind("update" + c.namespace + " updateRows" + c.namespace, function(e, resort, callback) {
                        e.stopPropagation();
                        table.isUpdating = true;
                        // update sorting (if enabled/disabled)
                        updateHeader(table);
                        commonUpdate(table, resort, callback);
                    })
                    .bind("updateCell" + c.namespace, function(e, cell, resort, callback) {
                        e.stopPropagation();
                        table.isUpdating = true;
                        $table.find(c.selectorRemove).remove();
                        // get position from the dom
                        var v, t, row, icell,
                            $tb = $table.find('tbody'),
                            $cell = $(cell),
                        // update cache - format: function(s, table, cell, cellIndex)
                        // no closest in jQuery v1.2.6 - tbdy = $tb.index( $(cell).closest('tbody') ),$row = $(cell).closest('tr');
                            tbdy = $tb.index( $.fn.closest ? $cell.closest('tbody') : $cell.parents('tbody').filter(':first') ),
                            $row = $.fn.closest ? $cell.closest('tr') : $cell.parents('tr').filter(':first');
                        cell = $cell[0]; // in case cell is a jQuery object
                        // tbody may not exist if update is initialized while tbody is removed for processing
                        if ($tb.length && tbdy >= 0) {
                            row = $tb.eq(tbdy).find('tr').index( $row );
                            icell = $cell.index();
                            c.cache[tbdy].normalized[row][c.columns].$row = $row;
                            if (typeof c.extractors[icell].id === 'undefined') {
                                t = getElementText(table, cell, icell);
                            } else {
                                t = c.extractors[icell].format( getElementText(table, cell, icell), table, cell, icell );
                            }
                            v = c.parsers[icell].id === 'no-parser' ? '' :
                                c.parsers[icell].format( t, table, cell, icell );
                            c.cache[tbdy].normalized[row][icell] = c.ignoreCase && typeof v === 'string' ? v.toLowerCase() : v;
                            if ((c.parsers[icell].type || '').toLowerCase() === "numeric") {
                                // update column max value (ignore sign)
                                c.cache[tbdy].colMax[icell] = Math.max(Math.abs(v) || 0, c.cache[tbdy].colMax[icell] || 0);
                            }
                            checkResort($table, resort, callback);
                        }
                    })
                    .bind("addRows" + c.namespace, function(e, $row, resort, callback) {
                        e.stopPropagation();
                        table.isUpdating = true;
                        if (isEmptyObject(c.cache)) {
                            // empty table, do an update instead - fixes #450
                            updateHeader(table);
                            commonUpdate(table, resort, callback);
                        } else {
                            $row = $($row).attr('role', 'row'); // make sure we're using a jQuery object
                            var i, j, l, t, v, rowData, cells,
                                rows = $row.filter('tr').length,
                                tbdy = $table.find('tbody').index( $row.parents('tbody').filter(':first') );
                            // fixes adding rows to an empty table - see issue #179
                            if (!(c.parsers && c.parsers.length)) {
                                buildParserCache(table);
                            }
                            // add each row
                            for (i = 0; i < rows; i++) {
                                l = $row[i].cells.length;
                                cells = [];
                                rowData = {
                                    child: [],
                                    $row : $row.eq(i),
                                    order: c.cache[tbdy].normalized.length
                                };
                                // add each cell
                                for (j = 0; j < l; j++) {
                                    if (typeof c.extractors[j].id === 'undefined') {
                                        t = getElementText(table, $row[i].cells[j], j);
                                    } else {
                                        t = c.extractors[j].format( getElementText(table, $row[i].cells[j], j), table, $row[i].cells[j], j );
                                    }
                                    v = c.parsers[j].id === 'no-parser' ? '' :
                                        c.parsers[j].format( t, table, $row[i].cells[j], j );
                                    cells[j] = c.ignoreCase && typeof v === 'string' ? v.toLowerCase() : v;
                                    if ((c.parsers[j].type || '').toLowerCase() === "numeric") {
                                        // update column max value (ignore sign)
                                        c.cache[tbdy].colMax[j] = Math.max(Math.abs(cells[j]) || 0, c.cache[tbdy].colMax[j] || 0);
                                    }
                                }
                                // add the row data to the end
                                cells.push(rowData);
                                // update cache
                                c.cache[tbdy].normalized.push(cells);
                            }
                            // resort using current settings
                            checkResort($table, resort, callback);
                        }
                    })
                    .bind("updateComplete" + c.namespace, function(){
                        table.isUpdating = false;
                    })
                    .bind("sorton" + c.namespace, function(e, list, callback, init) {
                        var c = table.config;
                        e.stopPropagation();
                        $table.trigger("sortStart", this);
                        // update header count index
                        updateHeaderSortCount(table, list);
                        // set css for headers
                        setHeadersCss(table);
                        // fixes #346
                        if (c.delayInit && isEmptyObject(c.cache)) { buildCache(table); }
                        $table.trigger("sortBegin", this);
                        // sort the table and append it to the dom
                        multisort(table);
                        appendToTable(table, init);
                        $table.trigger("sortEnd", this);
                        ts.applyWidget(table);
                        if ($.isFunction(callback)) {
                            callback(table);
                        }
                    })
                    .bind("appendCache" + c.namespace, function(e, callback, init) {
                        e.stopPropagation();
                        appendToTable(table, init);
                        if ($.isFunction(callback)) {
                            callback(table);
                        }
                    })
                    .bind("updateCache" + c.namespace, function(e, callback){
                        // rebuild parsers
                        if (!(c.parsers && c.parsers.length)) {
                            buildParserCache(table);
                        }
                        // rebuild the cache map
                        buildCache(table);
                        if ($.isFunction(callback)) {
                            callback(table);
                        }
                    })
                    .bind("applyWidgetId" + c.namespace, function(e, id) {
                        e.stopPropagation();
                        ts.getWidgetById(id).format(table, c, c.widgetOptions);
                    })
                    .bind("applyWidgets" + c.namespace, function(e, init) {
                        e.stopPropagation();
                        // apply widgets
                        ts.applyWidget(table, init);
                    })
                    .bind("refreshWidgets" + c.namespace, function(e, all, dontapply){
                        e.stopPropagation();
                        ts.refreshWidgets(table, all, dontapply);
                    })
                    .bind("destroy" + c.namespace, function(e, c, cb){
                        e.stopPropagation();
                        ts.destroy(table, c, cb);
                    })
                    .bind("resetToLoadState" + c.namespace, function(){
                        // remove all widgets
                        ts.refreshWidgets(table, true, true);
                        // restore original settings; this clears out current settings, but does not clear
                        // values saved to storage.
                        c = $.extend(true, ts.defaults, c.originalSettings);
                        table.hasInitialized = false;
                        // setup the entire table again
                        ts.setup( table, c );
                    });
            }

            /* public methods */
            ts.construct = function(settings) {
                return this.each(function() {
                    var table = this,
                    // merge & extend config options
                        c = $.extend(true, {}, ts.defaults, settings);
                    // save initial settings
                    c.originalSettings = settings;
                    // create a table from data (build table widget)
                    if (!table.hasInitialized && ts.buildTable && this.tagName !== 'TABLE') {
                        // return the table (in case the original target is the table's container)
                        ts.buildTable(table, c);
                    } else {
                        ts.setup(table, c);
                    }
                });
            };

            ts.setup = function(table, c) {
                // if no thead or tbody, or tablesorter is already present, quit
                if (!table || !table.tHead || table.tBodies.length === 0 || table.hasInitialized === true) {
                    return c.debug ? log('ERROR: stopping initialization! No table, thead, tbody or tablesorter has already been initialized') : '';
                }

                var k = '',
                    $table = $(table),
                    m = $.metadata;
                // initialization flag
                table.hasInitialized = false;
                // table is being processed flag
                table.isProcessing = true;
                // make sure to store the config object
                table.config = c;
                // save the settings where they read
                $.data(table, "tablesorter", c);
                if (c.debug) { $.data( table, 'startoveralltimer', new Date()); }

                // removing this in version 3 (only supports jQuery 1.7+)
                c.supportsDataObject = (function(version) {
                    version[0] = parseInt(version[0], 10);
                    return (version[0] > 1) || (version[0] === 1 && parseInt(version[1], 10) >= 4);
                })($.fn.jquery.split("."));
                // digit sort text location; keeping max+/- for backwards compatibility
                c.string = { 'max': 1, 'min': -1, 'emptyMin': 1, 'emptyMax': -1, 'zero': 0, 'none': 0, 'null': 0, 'top': true, 'bottom': false };
                // add table theme class only if there isn't already one there
                if (!/tablesorter\-/.test($table.attr('class'))) {
                    k = (c.theme !== '' ? ' tablesorter-' + c.theme : '');
                }
                c.table = table;
                c.$table = $table
                    .addClass(ts.css.table + ' ' + c.tableClass + k)
                    .attr('role', 'grid');
                c.$headers = $table.find(c.selectorHeaders);

                // give the table a unique id, which will be used in namespace binding
                if (!c.namespace) {
                    c.namespace = '.tablesorter' + Math.random().toString(16).slice(2);
                } else {
                    // make sure namespace starts with a period & doesn't have weird characters
                    c.namespace = '.' + c.namespace.replace(/\W/g,'');
                }

                c.$table.children().children('tr').attr('role', 'row');
                c.$tbodies = $table.children('tbody:not(.' + c.cssInfoBlock + ')').attr({
                    'aria-live' : 'polite',
                    'aria-relevant' : 'all'
                });
                if (c.$table.find('caption').length) {
                    c.$table.attr('aria-labelledby', 'theCaption');
                }
                c.widgetInit = {}; // keep a list of initialized widgets
                // change textExtraction via data-attribute
                c.textExtraction = c.$table.attr('data-text-extraction') || c.textExtraction || 'basic';
                // build headers
                buildHeaders(table);
                // fixate columns if the users supplies the fixedWidth option
                // do this after theme has been applied
                fixColumnWidth(table);
                // try to auto detect column type, and store in tables config
                buildParserCache(table);
                // start total row count at zero
                c.totalRows = 0;
                // build the cache for the tbody cells
                // delayInit will delay building the cache until the user starts a sort
                if (!c.delayInit) { buildCache(table); }
                // bind all header events and methods
                ts.bindEvents(table, c.$headers, true);
                bindMethods(table);
                // get sort list from jQuery data or metadata
                // in jQuery < 1.4, an error occurs when calling $table.data()
                if (c.supportsDataObject && typeof $table.data().sortlist !== 'undefined') {
                    c.sortList = $table.data().sortlist;
                } else if (m && ($table.metadata() && $table.metadata().sortlist)) {
                    c.sortList = $table.metadata().sortlist;
                }
                // apply widget init code
                ts.applyWidget(table, true);
                // if user has supplied a sort list to constructor
                if (c.sortList.length > 0) {
                    $table.trigger("sorton", [c.sortList, {}, !c.initWidgets, true]);
                } else {
                    setHeadersCss(table);
                    if (c.initWidgets) {
                        // apply widget format
                        ts.applyWidget(table, false);
                    }
                }

                // show processesing icon
                if (c.showProcessing) {
                    $table
                        .unbind('sortBegin' + c.namespace + ' sortEnd' + c.namespace)
                        .bind('sortBegin' + c.namespace + ' sortEnd' + c.namespace, function(e) {
                            clearTimeout(c.processTimer);
                            ts.isProcessing(table);
                            if (e.type === 'sortBegin') {
                                c.processTimer = setTimeout(function(){
                                    ts.isProcessing(table, true);
                                }, 500);
                            }
                        });
                }

                // initialized
                table.hasInitialized = true;
                table.isProcessing = false;
                if (c.debug) {
                    ts.benchmark("Overall initialization time", $.data( table, 'startoveralltimer'));
                }
                $table.trigger('tablesorter-initialized', table);
                if (typeof c.initialized === 'function') { c.initialized(table); }
            };

            ts.getColumnData = function(table, obj, indx, getCell){
                if (typeof obj === 'undefined' || obj === null) { return; }
                table = $(table)[0];
                var result, $h, k,
                    c = table.config;
                if (obj[indx]) {
                    return getCell ? obj[indx] : obj[c.$headers.index( c.$headers.filter('[data-column="' + indx + '"]:last') )];
                }
                for (k in obj) {
                    if (typeof k === 'string') {
                        if (getCell) {
                            // get header cell
                            $h = c.$headers.eq(indx).filter(k);
                        } else {
                            // get column indexed cell
                            $h = c.$headers.filter('[data-column="' + indx + '"]:last').filter(k);
                        }
                        if ($h.length) {
                            return obj[k];
                        }
                    }
                }
                return result;
            };

            // computeTableHeaderCellIndexes from:
            // http://www.javascripttoolbox.com/lib/table/examples.php
            // http://www.javascripttoolbox.com/temp/table_cellindex.html
            ts.computeColumnIndex = function(trs) {
                var matrix = [],
                    lookup = {},
                    cols = 0, // determine the number of columns
                    i, j, k, l, $cell, cell, cells, rowIndex, cellId, rowSpan, colSpan, firstAvailCol, matrixrow;
                for (i = 0; i < trs.length; i++) {
                    cells = trs[i].cells;
                    for (j = 0; j < cells.length; j++) {
                        cell = cells[j];
                        $cell = $(cell);
                        rowIndex = cell.parentNode.rowIndex;
                        cellId = rowIndex + "-" + $cell.index();
                        rowSpan = cell.rowSpan || 1;
                        colSpan = cell.colSpan || 1;
                        if (typeof(matrix[rowIndex]) === "undefined") {
                            matrix[rowIndex] = [];
                        }
                        // Find first available column in the first row
                        for (k = 0; k < matrix[rowIndex].length + 1; k++) {
                            if (typeof(matrix[rowIndex][k]) === "undefined") {
                                firstAvailCol = k;
                                break;
                            }
                        }
                        lookup[cellId] = firstAvailCol;
                        cols = Math.max(firstAvailCol, cols);
                        // add data-column
                        $cell.attr({ 'data-column' : firstAvailCol }); // 'data-row' : rowIndex
                        for (k = rowIndex; k < rowIndex + rowSpan; k++) {
                            if (typeof(matrix[k]) === "undefined") {
                                matrix[k] = [];
                            }
                            matrixrow = matrix[k];
                            for (l = firstAvailCol; l < firstAvailCol + colSpan; l++) {
                                matrixrow[l] = "x";
                            }
                        }
                    }
                }
                // may not be accurate if # header columns !== # tbody columns
                return cols + 1; // add one because it's a zero-based index
            };

            // *** Process table ***
            // add processing indicator
            ts.isProcessing = function(table, toggle, $ths) {
                table = $(table);
                var c = table[0].config,
                // default to all headers
                    $h = $ths || table.find('.' + ts.css.header);
                if (toggle) {
                    // don't use sortList if custom $ths used
                    if (typeof $ths !== 'undefined' && c.sortList.length > 0) {
                        // get headers from the sortList
                        $h = $h.filter(function(){
                            // get data-column from attr to keep  compatibility with jQuery 1.2.6
                            return this.sortDisabled ? false : ts.isValueInArray( parseFloat($(this).attr('data-column')), c.sortList) >= 0;
                        });
                    }
                    table.add($h).addClass(ts.css.processing + ' ' + c.cssProcessing);
                } else {
                    table.add($h).removeClass(ts.css.processing + ' ' + c.cssProcessing);
                }
            };

            // detach tbody but save the position
            // don't use tbody because there are portions that look for a tbody index (updateCell)
            ts.processTbody = function(table, $tb, getIt){
                table = $(table)[0];
                var holdr;
                if (getIt) {
                    table.isProcessing = true;
                    $tb.before('<span class="tablesorter-savemyplace"/>');
                    holdr = ($.fn.detach) ? $tb.detach() : $tb.remove();
                    return holdr;
                }
                holdr = $(table).find('span.tablesorter-savemyplace');
                $tb.insertAfter( holdr );
                holdr.remove();
                table.isProcessing = false;
            };

            ts.clearTableBody = function(table) {
                $(table)[0].config.$tbodies.children().detach();
            };

            ts.bindEvents = function(table, $headers, core){
                table = $(table)[0];
                var downTime,
                    c = table.config;
                if (core !== true) {
                    c.$extraHeaders = c.$extraHeaders ? c.$extraHeaders.add($headers) : $headers;
                }
                // apply event handling to headers and/or additional headers (stickyheaders, scroller, etc)
                $headers
                    // http://stackoverflow.com/questions/5312849/jquery-find-self;
                    .find(c.selectorSort).add( $headers.filter(c.selectorSort) )
                    .unbind('mousedown mouseup sort keyup '.split(' ').join(c.namespace + ' '))
                    .bind('mousedown mouseup sort keyup '.split(' ').join(c.namespace + ' '), function(e, external) {
                        var cell, type = e.type;
                        // only recognize left clicks or enter
                        if ( ((e.which || e.button) !== 1 && !/sort|keyup/.test(type)) || (type === 'keyup' && e.which !== 13) ) {
                            return;
                        }
                        // ignore long clicks (prevents resizable widget from initializing a sort)
                        if (type === 'mouseup' && external !== true && (new Date().getTime() - downTime > 250)) { return; }
                        // set timer on mousedown
                        if (type === 'mousedown') {
                            downTime = new Date().getTime();
                            return /(input|select|button|textarea)/i.test(e.target.tagName) ? '' : !c.cancelSelection;
                        }
                        if (c.delayInit && isEmptyObject(c.cache)) { buildCache(table); }
                        // jQuery v1.2.6 doesn't have closest()
                        cell = $.fn.closest ? $(this).closest('th, td')[0] : /TH|TD/.test(this.tagName) ? this : $(this).parents('th, td')[0];
                        // reference original table headers and find the same cell
                        cell = c.$headers[ $headers.index( cell ) ];
                        if (!cell.sortDisabled) {
                            initSort(table, cell, e);
                        }
                    });
                if (c.cancelSelection) {
                    // cancel selection
                    $headers
                        .attr('unselectable', 'on')
                        .bind('selectstart', false)
                        .css({
                            'user-select': 'none',
                            'MozUserSelect': 'none' // not needed for jQuery 1.8+
                        });
                }
            };

            // restore headers
            ts.restoreHeaders = function(table){
                var c = $(table)[0].config;
                // don't use c.$headers here in case header cells were swapped
                c.$table.find(c.selectorHeaders).each(function(i){
                    // only restore header cells if it is wrapped
                    // because this is also used by the updateAll method
                    if ($(this).find('.' + ts.css.headerIn).length){
                        $(this).html( c.headerContent[i] );
                    }
                });
            };

            ts.destroy = function(table, removeClasses, callback){
                table = $(table)[0];
                if (!table.hasInitialized) { return; }
                // remove all widgets
                ts.refreshWidgets(table, true, true);
                var $t = $(table), c = table.config,
                    $h = $t.find('thead:first'),
                    $r = $h.find('tr.' + ts.css.headerRow).removeClass(ts.css.headerRow + ' ' + c.cssHeaderRow),
                    $f = $t.find('tfoot:first > tr').children('th, td');
                if (removeClasses === false && $.inArray('uitheme', c.widgets) >= 0) {
                    // reapply uitheme classes, in case we want to maintain appearance
                    $t.trigger('applyWidgetId', ['uitheme']);
                    $t.trigger('applyWidgetId', ['zebra']);
                }
                // remove widget added rows, just in case
                $h.find('tr').not($r).remove();
                // disable tablesorter
                $t
                    .removeData('tablesorter')
                    .unbind('sortReset update updateAll updateRows updateCell addRows updateComplete sorton appendCache updateCache applyWidgetId applyWidgets refreshWidgets destroy mouseup mouseleave keypress sortBegin sortEnd resetToLoadState '.split(' ').join(c.namespace + ' '));
                c.$headers.add($f)
                    .removeClass( [ts.css.header, c.cssHeader, c.cssAsc, c.cssDesc, ts.css.sortAsc, ts.css.sortDesc, ts.css.sortNone].join(' ') )
                    .removeAttr('data-column')
                    .removeAttr('aria-label')
                    .attr('aria-disabled', 'true');
                $r.find(c.selectorSort).unbind('mousedown mouseup keypress '.split(' ').join(c.namespace + ' '));
                ts.restoreHeaders(table);
                $t.toggleClass(ts.css.table + ' ' + c.tableClass + ' tablesorter-' + c.theme, removeClasses === false);
                // clear flag in case the plugin is initialized again
                table.hasInitialized = false;
                delete table.config.cache;
                if (typeof callback === 'function') {
                    callback(table);
                }
            };

            // *** sort functions ***
            // regex used in natural sort
            ts.regex = {
                chunk : /(^([+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?)?$|^0x[0-9a-f]+$|\d+)/gi, // chunk/tokenize numbers & letters
                chunks: /(^\\0|\\0$)/, // replace chunks @ ends
                hex: /^0x[0-9a-f]+$/i // hex
            };

            // Natural sort - https://github.com/overset/javascript-natural-sort (date sorting removed)
            // this function will only accept strings, or you'll see "TypeError: undefined is not a function"
            // I could add a = a.toString(); b = b.toString(); but it'll slow down the sort overall
            ts.sortNatural = function(a, b) {
                if (a === b) { return 0; }
                var xN, xD, yN, yD, xF, yF, i, mx,
                    r = ts.regex;
                // first try and sort Hex codes
                if (r.hex.test(b)) {
                    xD = parseInt(a.match(r.hex), 16);
                    yD = parseInt(b.match(r.hex), 16);
                    if ( xD < yD ) { return -1; }
                    if ( xD > yD ) { return 1; }
                }
                // chunk/tokenize
                xN = a.replace(r.chunk, '\\0$1\\0').replace(r.chunks, '').split('\\0');
                yN = b.replace(r.chunk, '\\0$1\\0').replace(r.chunks, '').split('\\0');
                mx = Math.max(xN.length, yN.length);
                // natural sorting through split numeric strings and default strings
                for (i = 0; i < mx; i++) {
                    // find floats not starting with '0', string or 0 if not defined
                    xF = isNaN(xN[i]) ? xN[i] || 0 : parseFloat(xN[i]) || 0;
                    yF = isNaN(yN[i]) ? yN[i] || 0 : parseFloat(yN[i]) || 0;
                    // handle numeric vs string comparison - number < string - (Kyle Adams)
                    if (isNaN(xF) !== isNaN(yF)) { return (isNaN(xF)) ? 1 : -1; }
                    // rely on string comparison if different types - i.e. '02' < 2 != '02' < '2'
                    if (typeof xF !== typeof yF) {
                        xF += '';
                        yF += '';
                    }
                    if (xF < yF) { return -1; }
                    if (xF > yF) { return 1; }
                }
                return 0;
            };

            ts.sortNaturalAsc = function(a, b, col, table, c) {
                if (a === b) { return 0; }
                var e = c.string[ (c.empties[col] || c.emptyTo ) ];
                if (a === '' && e !== 0) { return typeof e === 'boolean' ? (e ? -1 : 1) : -e || -1; }
                if (b === '' && e !== 0) { return typeof e === 'boolean' ? (e ? 1 : -1) : e || 1; }
                return ts.sortNatural(a, b);
            };

            ts.sortNaturalDesc = function(a, b, col, table, c) {
                if (a === b) { return 0; }
                var e = c.string[ (c.empties[col] || c.emptyTo ) ];
                if (a === '' && e !== 0) { return typeof e === 'boolean' ? (e ? -1 : 1) : e || 1; }
                if (b === '' && e !== 0) { return typeof e === 'boolean' ? (e ? 1 : -1) : -e || -1; }
                return ts.sortNatural(b, a);
            };

            // basic alphabetical sort
            ts.sortText = function(a, b) {
                return a > b ? 1 : (a < b ? -1 : 0);
            };

            // return text string value by adding up ascii value
            // so the text is somewhat sorted when using a digital sort
            // this is NOT an alphanumeric sort
            ts.getTextValue = function(a, num, mx) {
                if (mx) {
                    // make sure the text value is greater than the max numerical value (mx)
                    var i, l = a ? a.length : 0, n = mx + num;
                    for (i = 0; i < l; i++) {
                        n += a.charCodeAt(i);
                    }
                    return num * n;
                }
                return 0;
            };

            ts.sortNumericAsc = function(a, b, num, mx, col, table) {
                if (a === b) { return 0; }
                var c = table.config,
                    e = c.string[ (c.empties[col] || c.emptyTo ) ];
                if (a === '' && e !== 0) { return typeof e === 'boolean' ? (e ? -1 : 1) : -e || -1; }
                if (b === '' && e !== 0) { return typeof e === 'boolean' ? (e ? 1 : -1) : e || 1; }
                if (isNaN(a)) { a = ts.getTextValue(a, num, mx); }
                if (isNaN(b)) { b = ts.getTextValue(b, num, mx); }
                return a - b;
            };

            ts.sortNumericDesc = function(a, b, num, mx, col, table) {
                if (a === b) { return 0; }
                var c = table.config,
                    e = c.string[ (c.empties[col] || c.emptyTo ) ];
                if (a === '' && e !== 0) { return typeof e === 'boolean' ? (e ? -1 : 1) : e || 1; }
                if (b === '' && e !== 0) { return typeof e === 'boolean' ? (e ? 1 : -1) : -e || -1; }
                if (isNaN(a)) { a = ts.getTextValue(a, num, mx); }
                if (isNaN(b)) { b = ts.getTextValue(b, num, mx); }
                return b - a;
            };

            ts.sortNumeric = function(a, b) {
                return a - b;
            };

            // used when replacing accented characters during sorting
            ts.characterEquivalents = {
                "a" : "\u00e1\u00e0\u00e2\u00e3\u00e4\u0105\u00e5", // áàâãäąå
                "A" : "\u00c1\u00c0\u00c2\u00c3\u00c4\u0104\u00c5", // ÁÀÂÃÄĄÅ
                "c" : "\u00e7\u0107\u010d", // çćč
                "C" : "\u00c7\u0106\u010c", // ÇĆČ
                "e" : "\u00e9\u00e8\u00ea\u00eb\u011b\u0119", // éèêëěę
                "E" : "\u00c9\u00c8\u00ca\u00cb\u011a\u0118", // ÉÈÊËĚĘ
                "i" : "\u00ed\u00ec\u0130\u00ee\u00ef\u0131", // íìİîïı
                "I" : "\u00cd\u00cc\u0130\u00ce\u00cf", // ÍÌİÎÏ
                "o" : "\u00f3\u00f2\u00f4\u00f5\u00f6", // óòôõö
                "O" : "\u00d3\u00d2\u00d4\u00d5\u00d6", // ÓÒÔÕÖ
                "ss": "\u00df", // ß (s sharp)
                "SS": "\u1e9e", // ẞ (Capital sharp s)
                "u" : "\u00fa\u00f9\u00fb\u00fc\u016f", // úùûüů
                "U" : "\u00da\u00d9\u00db\u00dc\u016e" // ÚÙÛÜŮ
            };
            ts.replaceAccents = function(s) {
                var a, acc = '[', eq = ts.characterEquivalents;
                if (!ts.characterRegex) {
                    ts.characterRegexArray = {};
                    for (a in eq) {
                        if (typeof a === 'string') {
                            acc += eq[a];
                            ts.characterRegexArray[a] = new RegExp('[' + eq[a] + ']', 'g');
                        }
                    }
                    ts.characterRegex = new RegExp(acc + ']');
                }
                if (ts.characterRegex.test(s)) {
                    for (a in eq) {
                        if (typeof a === 'string') {
                            s = s.replace( ts.characterRegexArray[a], a );
                        }
                    }
                }
                return s;
            };

            // *** utilities ***
            ts.isValueInArray = function(column, arry) {
                var indx, len = arry.length;
                for (indx = 0; indx < len; indx++) {
                    if (arry[indx][0] === column) {
                        return indx;
                    }
                }
                return -1;
            };

            ts.addParser = function(parser) {
                var i, l = ts.parsers.length, a = true;
                for (i = 0; i < l; i++) {
                    if (ts.parsers[i].id.toLowerCase() === parser.id.toLowerCase()) {
                        a = false;
                    }
                }
                if (a) {
                    ts.parsers.push(parser);
                }
            };

            ts.getParserById = function(name) {
                /*jshint eqeqeq:false */
                if (name == 'false') { return false; }
                var i, l = ts.parsers.length;
                for (i = 0; i < l; i++) {
                    if (ts.parsers[i].id.toLowerCase() === (name.toString()).toLowerCase()) {
                        return ts.parsers[i];
                    }
                }
                return false;
            };

            ts.addWidget = function(widget) {
                ts.widgets.push(widget);
            };

            ts.hasWidget = function(table, name){
                table = $(table);
                return table.length && table[0].config && table[0].config.widgetInit[name] || false;
            };

            ts.getWidgetById = function(name) {
                var i, w, l = ts.widgets.length;
                for (i = 0; i < l; i++) {
                    w = ts.widgets[i];
                    if (w && w.hasOwnProperty('id') && w.id.toLowerCase() === name.toLowerCase()) {
                        return w;
                    }
                }
            };

            ts.applyWidget = function(table, init) {
                table = $(table)[0]; // in case this is called externally
                var c = table.config,
                    wo = c.widgetOptions,
                    widgets = [],
                    time, w, wd;
                // prevent numerous consecutive widget applications
                if (init !== false && table.hasInitialized && (table.isApplyingWidgets || table.isUpdating)) { return; }
                if (c.debug) { time = new Date(); }
                if (c.widgets.length) {
                    table.isApplyingWidgets = true;
                    // ensure unique widget ids
                    c.widgets = $.grep(c.widgets, function(v, k){
                        return $.inArray(v, c.widgets) === k;
                    });
                    // build widget array & add priority as needed
                    $.each(c.widgets || [], function(i,n){
                        wd = ts.getWidgetById(n);
                        if (wd && wd.id) {
                            // set priority to 10 if not defined
                            if (!wd.priority) { wd.priority = 10; }
                            widgets[i] = wd;
                        }
                    });
                    // sort widgets by priority
                    widgets.sort(function(a, b){
                        return a.priority < b.priority ? -1 : a.priority === b.priority ? 0 : 1;
                    });
                    // add/update selected widgets
                    $.each(widgets, function(i,w){
                        if (w) {
                            if (init || !(c.widgetInit[w.id])) {
                                // set init flag first to prevent calling init more than once (e.g. pager)
                                c.widgetInit[w.id] = true;
                                if (w.hasOwnProperty('options')) {
                                    wo = table.config.widgetOptions = $.extend( true, {}, w.options, wo );
                                }
                                if (w.hasOwnProperty('init')) {
                                    w.init(table, w, c, wo);
                                }
                            }
                            if (!init && w.hasOwnProperty('format')) {
                                w.format(table, c, wo, false);
                            }
                        }
                    });
                }
                setTimeout(function(){
                    table.isApplyingWidgets = false;
                }, 0);
                if (c.debug) {
                    w = c.widgets.length;
                    benchmark("Completed " + (init === true ? "initializing " : "applying ") + w + " widget" + (w !== 1 ? "s" : ""), time);
                }
            };

            ts.refreshWidgets = function(table, doAll, dontapply) {
                table = $(table)[0]; // see issue #243
                var i, c = table.config,
                    cw = c.widgets,
                    w = ts.widgets, l = w.length;
                // remove previous widgets
                for (i = 0; i < l; i++){
                    if ( w[i] && w[i].id && (doAll || $.inArray( w[i].id, cw ) < 0) ) {
                        if (c.debug) { log( 'Refeshing widgets: Removing "' + w[i].id + '"' ); }
                        // only remove widgets that have been initialized - fixes #442
                        if (w[i].hasOwnProperty('remove') && c.widgetInit[w[i].id]) {
                            w[i].remove(table, c, c.widgetOptions);
                            c.widgetInit[w[i].id] = false;
                        }
                    }
                }
                if (dontapply !== true) {
                    ts.applyWidget(table, doAll);
                }
            };

            // get sorter, string, empty, etc options for each column from
            // jQuery data, metadata, header option or header class name ("sorter-false")
            // priority = jQuery data > meta > headers option > header class name
            ts.getData = function(h, ch, key) {
                var val = '', $h = $(h), m, cl;
                if (!$h.length) { return ''; }
                m = $.metadata ? $h.metadata() : false;
                cl = ' ' + ($h.attr('class') || '');
                if (typeof $h.data(key) !== 'undefined' || typeof $h.data(key.toLowerCase()) !== 'undefined'){
                    // "data-lockedOrder" is assigned to "lockedorder"; but "data-locked-order" is assigned to "lockedOrder"
                    // "data-sort-initial-order" is assigned to "sortInitialOrder"
                    val += $h.data(key) || $h.data(key.toLowerCase());
                } else if (m && typeof m[key] !== 'undefined') {
                    val += m[key];
                } else if (ch && typeof ch[key] !== 'undefined') {
                    val += ch[key];
                } else if (cl !== ' ' && cl.match(' ' + key + '-')) {
                    // include sorter class name "sorter-text", etc; now works with "sorter-my-custom-parser"
                    val = cl.match( new RegExp('\\s' + key + '-([\\w-]+)') )[1] || '';
                }
                return $.trim(val);
            };

            ts.formatFloat = function(s, table) {
                if (typeof s !== 'string' || s === '') { return s; }
                // allow using formatFloat without a table; defaults to US number format
                var i,
                    t = table && table.config ? table.config.usNumberFormat !== false :
                        typeof table !== "undefined" ? table : true;
                if (t) {
                    // US Format - 1,234,567.89 -> 1234567.89
                    s = s.replace(/,/g,'');
                } else {
                    // German Format = 1.234.567,89 -> 1234567.89
                    // French Format = 1 234 567,89 -> 1234567.89
                    s = s.replace(/[\s|\.]/g,'').replace(/,/g,'.');
                }
                if(/^\s*\([.\d]+\)/.test(s)) {
                    // make (#) into a negative number -> (10) = -10
                    s = s.replace(/^\s*\(([.\d]+)\)/, '-$1');
                }
                i = parseFloat(s);
                // return the text instead of zero
                return isNaN(i) ? $.trim(s) : i;
            };

            ts.isDigit = function(s) {
                // replace all unwanted chars and match
                return isNaN(s) ? (/^[\-+(]?\d+[)]?$/).test(s.toString().replace(/[,.'"\s]/g, '')) : true;
            };

        }()
    });

    // make shortcut
    var ts = $.tablesorter;

    // extend plugin scope
    $.fn.extend({
        tablesorter: ts.construct
    });

    // add default parsers
    ts.addParser({
        id: 'no-parser',
        is: function() {
            return false;
        },
        format: function() {
            return '';
        },
        type: 'text'
    });

    ts.addParser({
        id: "text",
        is: function() {
            return true;
        },
        format: function(s, table) {
            var c = table.config;
            if (s) {
                s = $.trim( c.ignoreCase ? s.toLocaleLowerCase() : s );
                s = c.sortLocaleCompare ? ts.replaceAccents(s) : s;
            }
            return s;
        },
        type: "text"
    });

    ts.addParser({
        id: "digit",
        is: function(s) {
            return ts.isDigit(s);
        },
        format: function(s, table) {
            var n = ts.formatFloat((s || '').replace(/[^\w,. \-()]/g, ""), table);
            return s && typeof n === 'number' ? n : s ? $.trim( s && table.config.ignoreCase ? s.toLocaleLowerCase() : s ) : s;
        },
        type: "numeric"
    });

    ts.addParser({
        id: "currency",
        is: function(s) {
            return (/^\(?\d+[\u00a3$\u20ac\u00a4\u00a5\u00a2?.]|[\u00a3$\u20ac\u00a4\u00a5\u00a2?.]\d+\)?$/).test((s || '').replace(/[+\-,. ]/g,'')); // £$€¤¥¢
        },
        format: function(s, table) {
            var n = ts.formatFloat((s || '').replace(/[^\w,. \-()]/g, ""), table);
            return s && typeof n === 'number' ? n : s ? $.trim( s && table.config.ignoreCase ? s.toLocaleLowerCase() : s ) : s;
        },
        type: "numeric"
    });

    ts.addParser({
        id: "ipAddress",
        is: function(s) {
            return (/^\d{1,3}[\.]\d{1,3}[\.]\d{1,3}[\.]\d{1,3}$/).test(s);
        },
        format: function(s, table) {
            var i, a = s ? s.split(".") : '',
                r = "",
                l = a.length;
            for (i = 0; i < l; i++) {
                r += ("00" + a[i]).slice(-3);
            }
            return s ? ts.formatFloat(r, table) : s;
        },
        type: "numeric"
    });

    ts.addParser({
        id: "url",
        is: function(s) {
            return (/^(https?|ftp|file):\/\//).test(s);
        },
        format: function(s) {
            return s ? $.trim(s.replace(/(https?|ftp|file):\/\//, '')) : s;
        },
        type: "text"
    });

    ts.addParser({
        id: "isoDate",
        is: function(s) {
            return (/^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}/).test(s);
        },
        format: function(s, table) {
            return s ? ts.formatFloat((s !== "") ? (new Date(s.replace(/-/g, "/")).getTime() || s) : "", table) : s;
        },
        type: "numeric"
    });

    ts.addParser({
        id: "percent",
        is: function(s) {
            return (/(\d\s*?%|%\s*?\d)/).test(s) && s.length < 15;
        },
        format: function(s, table) {
            return s ? ts.formatFloat(s.replace(/%/g, ""), table) : s;
        },
        type: "numeric"
    });

    ts.addParser({
        id: "usLongDate",
        is: function(s) {
            // two digit years are not allowed cross-browser
            // Jan 01, 2013 12:34:56 PM or 01 Jan 2013
            return (/^[A-Z]{3,10}\.?\s+\d{1,2},?\s+(\d{4})(\s+\d{1,2}:\d{2}(:\d{2})?(\s+[AP]M)?)?$/i).test(s) || (/^\d{1,2}\s+[A-Z]{3,10}\s+\d{4}/i).test(s);
        },
        format: function(s, table) {
            return s ? ts.formatFloat( (new Date(s.replace(/(\S)([AP]M)$/i, "$1 $2")).getTime() || s), table) : s;
        },
        type: "numeric"
    });

    ts.addParser({
        id: "shortDate", // "mmddyyyy", "ddmmyyyy" or "yyyymmdd"
        is: function(s) {
            // testing for ##-##-#### or ####-##-##, so it's not perfect; time can be included
            return (/(^\d{1,2}[\/\s]\d{1,2}[\/\s]\d{4})|(^\d{4}[\/\s]\d{1,2}[\/\s]\d{1,2})/).test((s || '').replace(/\s+/g," ").replace(/[\-.,]/g, "/"));
        },
        format: function(s, table, cell, cellIndex) {
            if (s) {
                var c = table.config,
                    ci = c.$headers.filter('[data-column=' + cellIndex + ']:last'),
                    format = ci.length && ci[0].dateFormat || ts.getData( ci, ts.getColumnData( table, c.headers, cellIndex ), 'dateFormat') || c.dateFormat;
                s = s.replace(/\s+/g," ").replace(/[\-.,]/g, "/"); // escaped - because JSHint in Firefox was showing it as an error
                if (format === "mmddyyyy") {
                    s = s.replace(/(\d{1,2})[\/\s](\d{1,2})[\/\s](\d{4})/, "$3/$1/$2");
                } else if (format === "ddmmyyyy") {
                    s = s.replace(/(\d{1,2})[\/\s](\d{1,2})[\/\s](\d{4})/, "$3/$2/$1");
                } else if (format === "yyyymmdd") {
                    s = s.replace(/(\d{4})[\/\s](\d{1,2})[\/\s](\d{1,2})/, "$1/$2/$3");
                }
            }
            return s ? ts.formatFloat( (new Date(s).getTime() || s), table) : s;
        },
        type: "numeric"
    });

    ts.addParser({
        id: "time",
        is: function(s) {
            return (/^(([0-2]?\d:[0-5]\d)|([0-1]?\d:[0-5]\d\s?([AP]M)))$/i).test(s);
        },
        format: function(s, table) {
            return s ? ts.formatFloat( (new Date("2000/01/01 " + s.replace(/(\S)([AP]M)$/i, "$1 $2")).getTime() || s), table) : s;
        },
        type: "numeric"
    });

    ts.addParser({
        id: "metadata",
        is: function() {
            return false;
        },
        format: function(s, table, cell) {
            var c = table.config,
                p = (!c.parserMetadataName) ? 'sortValue' : c.parserMetadataName;
            return $(cell).metadata()[p];
        },
        type: "numeric"
    });

    // add default widgets
    ts.addWidget({
        id: "zebra",
        priority: 90,
        format: function(table, c, wo) {
            var $tb, $tv, $tr, row, even, time, k, l,
                child = new RegExp(c.cssChildRow, 'i'),
                b = c.$tbodies;
            if (c.debug) {
                time = new Date();
            }
            for (k = 0; k < b.length; k++ ) {
                // loop through the visible rows
                $tb = b.eq(k);
                l = $tb.children('tr').length;
                if (l > 1) {
                    row = 0;
                    $tv = $tb.children('tr:visible').not(c.selectorRemove);
                    // revered back to using jQuery each - strangely it's the fastest method
                    /*jshint loopfunc:true */
                    $tv.each(function(){
                        $tr = $(this);
                        // style children rows the same way the parent row was styled
                        if (!child.test(this.className)) { row++; }
                        even = (row % 2 === 0);
                        $tr.removeClass(wo.zebra[even ? 1 : 0]).addClass(wo.zebra[even ? 0 : 1]);
                    });
                }
            }
            if (c.debug) {
                ts.benchmark("Applying Zebra widget", time);
            }
        },
        remove: function(table, c, wo){
            var k, $tb,
                b = c.$tbodies,
                rmv = (wo.zebra || [ "even", "odd" ]).join(' ');
            for (k = 0; k < b.length; k++ ){
                $tb = $.tablesorter.processTbody(table, b.eq(k), true); // remove tbody
                $tb.children().removeClass(rmv);
                $.tablesorter.processTbody(table, $tb, false); // restore tbody
            }
        }
    });

})(jQuery);
/*->
 #name>Sortable Tables
 #javascript>Yes
 #css>Yes
 #description> Standards Patterns and Styling for HTML Sortable Tables
 <-*/
(function() {
    var DEFAULT_SORT_OPTIONS = {sortMultiSortKey: '', headers: {}, debug: false};

    function sortTable($table) {
        var options = DEFAULT_SORT_OPTIONS;
        $table.find("th").each(function(index, header) {

            var $header = AJS.$(header);
            options.headers[index] = {};
            if ($header.hasClass("aui-table-column-unsortable")) {
                options.headers[index].sorter = false;
            } else {
                $header.attr('tabindex', '0');
                $header.wrapInner("<span class='aui-table-header-content'/>");
                if ($header.hasClass("aui-table-column-issue-key")) {
                    options.headers[index].sorter = "issue-key";
                }
            }
        });
        $table.tablesorter(options);
    }

    AJS.tablessortable = {
        setup: function() {

            /*
             This parser is used for issue keys in the format <PROJECT_KEY>-<ISSUE_NUMBER>, where <PROJECT_KEY> is a maximum
             10 character string with characters(A-Z). Assumes that issue number is no larger than 999,999. e.g. not more
             than a million issues.
             This pads the issue key to allow for proper string sorting so that the project key is always 10 characters and the
             issue number is always 6 digits. e.g. it appends the project key '.' until it is 10 characters long and prepends 0
             so that the issue number is 6 digits long. e.g. CONF-102 == CONF......000102. This is to allow proper string sorting.
             */
            AJS.$.tablesorter.addParser({
                id: 'issue-key',
                is: function() {
                    return false;
                },

                format: function(s) {
                    var keyComponents = s.split("-");
                    var projectKey = keyComponents[0];
                    var issueNumber = keyComponents[1];

                    var PROJECT_KEY_TEMPLATE = "..........";
                    var ISSUE_NUMBER_TEMPLATE = "000000";
                    var stringRepresentation = (projectKey + PROJECT_KEY_TEMPLATE).slice(0, PROJECT_KEY_TEMPLATE.length);
                    stringRepresentation += (ISSUE_NUMBER_TEMPLATE + issueNumber).slice(-ISSUE_NUMBER_TEMPLATE.length);

                    return stringRepresentation;
                },

                type: 'text'
            });

            /*
             Text parser that uses the data-sort-value attribute for sorting if it is set and data-sort-type is not set
             or set to 'text'.
             */
            AJS.$.tablesorter.addParser({
                id: 'textSortAttributeParser',
                is: function (nodeValue, table, node) {
                    return node.hasAttribute('data-sort-value') && (!node.hasAttribute('data-sort-type') || node.getAttribute('data-sort-type') === 'text');
                },
                format: function (nodeValue, table, node, offset) {
                    return node.getAttribute('data-sort-value');
                },
                type: 'text'
            });

            /*
             Numeric parser that uses the data-sort-value attribute for sorting if it is set and data-sort-type is set
             to 'numeric'.
             */
            AJS.$.tablesorter.addParser({
                id: 'numericSortAttributeParser',
                is: function (nodeValue, table, node) {
                    return node.getAttribute('data-sort-type') === 'numeric' && node.hasAttribute('data-sort-value');
                },
                format: function (nodeValue, table, node, offset) {
                    return node.getAttribute('data-sort-value');
                },
                type: 'numeric'
            });

            AJS.$(".aui-table-sortable").each(function() {
                sortTable(AJS.$(this));
            });
        },

        setTableSortable: function($table) {
            sortTable($table);
        }
    };

    AJS.$(AJS.tablessortable.setup);
})();
(function ($) {
    'use strict';

    $.fn.tooltip = function (options) {

        // Pass string values straight to tipsy
        if (typeof options == 'string') {
            this.tipsy(options);
            return $this;
        }

        var allOptions = $.extend({}, $.fn.tooltip.defaults, options),
            $this = this.tipsy(allOptions);

        if (allOptions.hideOnClick &&
            (allOptions.trigger == 'hover' || !allOptions.trigger && this.tipsy.defaults.trigger == 'hover')) {
            var onClick = function() {
                $(this).tipsy('hide');
            };
            if (allOptions.live) {
                $(this.context).on('click.tipsy', this.selector, onClick);
            } else {
                this.bind('click.tipsy', onClick);
            }
        }
        return $this;
    };

    $.fn.tooltip.defaults = {
        opacity: 1.0,
        offset: 1,
        delayIn: 500,
        hoverable: true,
        hideOnClick: true
    };
}(AJS.$));

define('aui/form-validation/validator-register',[], function() {
    'use strict';

    var $ = AJS.$; // Can't depend on jQuery since it won't be defined in product environments (thanks to deletion of the define.amd object)

    var ATTRIBUTE_RESERVED_ARGUMENTS = ['displayfield', 'watchfield', 'when', 'novalidate', 'state'];
    var validators = [];

    function getReservedArgument (validatorArguments) {
        var reservedArgument = false;
        validatorArguments.some(function(arg) {
            var isReserved = $.inArray(arg, ATTRIBUTE_RESERVED_ARGUMENTS) !== -1;
            if (isReserved) {
                reservedArgument = arg;
            }
            return isReserved;
        });
        return reservedArgument;
    }

    /**
     * Register a validator that can be used to validate fields. The main entry point for validator plugins.
     * @param trigger - when to run the validator. Can be an array of arguments, or a selector
     * @param validatorFunction - the function that will be called on the field to determine validation. Receives
     *      field - the field that is being validated
     *      args - the arguments that have been specified in HTML markup.
     */
    function registerValidator (trigger, validatorFunction) {
        var triggerSelector;
        if (typeof trigger === 'string') {
            triggerSelector = trigger;
        } else {
            var reservedArgument = getReservedArgument(trigger);
            if (reservedArgument) {
                AJS.warn('Validators cannot be registered with the argument "' + reservedArgument + '", as it ' +
                    'is a reserved argument.');
                return false;
            }
            triggerSelector = '[data-aui-validation-' + trigger.join('],[data-aui-validation-') + ']';
        }

        var validator = {
            validatorFunction: validatorFunction,
            validatorTrigger: triggerSelector
        };

        validators.push(validator);

        return validator;
    }

    return {
        register: registerValidator,
        validators: function() {
            return validators;
        }
    };

});
;(function(init) {
    'use strict';

    define('aui/form-validation/basic-validators',['./validator-register'], function(validatorRegister) {
        return init(AJS, AJS.$, validatorRegister);
    });
})(function (AJS, $, validatorRegister) {
    'use strict';

    //Input length
    validatorRegister.register(['maxlength', 'minlength'], function(field) {
        var minlengthMessage = makeMessage('minlength', field.args);
        var maxlengthMessage = makeMessage('maxlength', field.args);

        if (field.$el.val().length < field.args('minlength')){
            field.invalidate(minlengthMessage);
        } else if (field.$el.val().length > field.args('maxlength')){
            field.invalidate(maxlengthMessage);
        } else {
            field.validate();
        }
    });

    //Field matching
    validatorRegister.register(['matchingfield'], function(field) {
        var thisFieldValue = field.$el.val();
        var $matchingField = $('#' + field.args('matchingfield'));
        var matchingFieldValue = $matchingField.val();

        var matchingFieldMessage = makeMessage('matchingfield', field.args, [thisFieldValue, matchingFieldValue]);

        var shouldHidePasswords = isPasswordField(field.$el) || isPasswordField($matchingField);
        if (shouldHidePasswords) {
            matchingFieldMessage = makeMessage('matchingfield-novalue', field.args);
        }

        if (!thisFieldValue || !matchingFieldValue){
            field.validate();
        } else if (matchingFieldValue !== thisFieldValue) {
            field.invalidate(matchingFieldMessage);
        } else {
            field.validate();
        }
    });

    function isPasswordField($field) {
        return $field.attr('type') === 'password';
    }

    //Banned words
    validatorRegister.register(['doesnotcontain'], function(field) {
        var doesNotContainMessage = makeMessage('doesnotcontain', field.args);

        if(field.$el.val().indexOf(field.args('doesnotcontain')) === -1) {
            field.validate();
        } else {
            field.invalidate(doesNotContainMessage);
        }
    });

    //Matches regex
    validatorRegister.register(['pattern'], function(field) {
        var patternMessage = makeMessage('pattern', field.args);

        if(matchesRegex(field.$el.val(), new RegExp(field.args('pattern'), 'i'))) {
            field.validate();
        } else {
            field.invalidate(patternMessage);
        }
    });

    function matchesRegex(val, regex){
        var matches = val.match(regex);
        if (!matches) {
            return false;
        }
        var isExactMatch = (val === matches[0]);
        return isExactMatch;
    }

    //Required field
    validatorRegister.register(['required'], function(field) {
        var requiredMessage = makeMessage('required', field.args);

        if (field.$el.val()) {
            field.validate();
        } else {
            field.invalidate(requiredMessage);
        }
    });

    //Field value range (between min and max)
    validatorRegister.register(['min', 'max'], function(field) {
        var validNumberMessage = makeMessage('validnumber', field.args);
        var belowMinMessage = makeMessage('min', field.args);
        var aboveMaxMessage = makeMessage('max', field.args);

        var fieldValue = parseInt(field.$el.val());
        if (isNaN(fieldValue)) {
            field.invalidate(validNumberMessage);
            return;
        }
        if (field.args('min') && (fieldValue < parseInt(field.args('min')))) {
            field.invalidate(belowMinMessage);
        } else if(field.args('max') && (fieldValue > parseInt(field.args('max')))){
            field.invalidate(aboveMaxMessage);
        } else {
            field.validate();
        }
    });

    //Date format
    validatorRegister.register(['dateformat'], function(field) {
        var dateFormatSymbolic = field.args('dateformat');
        var dateFormatMessage = makeMessage('dateformat', field.args);

        var symbolRegexMap = {
            'Y': '[0-9]{4}',
            'y': '[0-9]{2}',
            'm': '(11|12|0{0,1}[0-9])',
            'M': '[Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec]',
            'D': '[Mon|Tue|Wed|Thu|Fri|Sat|Sun]',
            'd': '([0-2]{0,1}[0-9]{1})|(30|31)'
        };

        var dateFormatSymbolArray = dateFormatSymbolic.split('');
        var dateFormatRegexString = '';

        dateFormatSymbolArray.forEach(function(dateSymbol) {
            var isRecognisedSymbol = symbolRegexMap.hasOwnProperty(dateSymbol);
            if (isRecognisedSymbol) {
                dateFormatRegexString += symbolRegexMap[dateSymbol];
            } else {
                dateFormatRegexString += dateSymbol;
            }
        });

        var dateFormatRegex = new RegExp(dateFormatRegexString+'$', 'i');
        var isValidDate = matchesRegex(field.$el.val(), dateFormatRegex);

        if (isValidDate) {
            field.validate();
        } else {
            field.invalidate(dateFormatMessage);
        }
    });

    //Checkbox count
    validatorRegister.register(['minchecked', 'maxchecked'], function(field) {
        var amountChecked = field.$el.find(':checked').length;
        var aboveMin = !field.args('minchecked') || (amountChecked >= field.args('minchecked'));
        var belowMax = !field.args('maxchecked') || (amountChecked <= field.args('maxchecked'));

        var belowMinMessage = makeMessage('minchecked', field.args);
        var aboveMaxMessage = makeMessage('maxchecked', field.args);

        if (aboveMin && belowMax) {
            field.validate();
        } else if (!aboveMin) {
            field.invalidate(belowMinMessage);
        } else if (!belowMax) {
            field.invalidate(aboveMaxMessage);
        }
    });

    /*
         Retrieves a message for a plugin validator through the data attributes or the default (which is in the i18n file)
     */
    function makeMessage(key, accessorFunction, customTokens) {
        var inFlatpackMode = AJS.I18n.keys !== undefined;
        var defaultMessage;
        if (inFlatpackMode) {
            defaultMessage = AJS.I18n.keys['aui.validation.message.' + key];
        } else {
            defaultMessage = pluginI18nMessages[key];
        }

        var messageTokens = customTokens;
        if (!customTokens) {
            messageTokens = [accessorFunction(key)];
        }

        var customMessageUnformatted = accessorFunction(key+'-msg');
        var formattingArguments;

        if (customMessageUnformatted) {
            formattingArguments = [customMessageUnformatted].concat(messageTokens);
        } else {
            formattingArguments = [defaultMessage].concat(messageTokens);
        }

        return AJS.format.apply(null, formattingArguments);
    }

    /*
     The value AJS.I18n.getText('aui.validation.message...') (defaultMessage) cannot be refactored as it
     must appear verbatim for the plugin I18n transformation to pick it up
     */
    var pluginI18nMessages = {
        minlength: AJS.I18n.getText('aui.validation.message.minlength'),
        maxlength: AJS.I18n.getText('aui.validation.message.maxlength'),
        matchingfield: AJS.I18n.getText('aui.validation.message.matchingfield'),
        'matchingfield-novalue': AJS.I18n.getText('aui.validation.message.matchingfield-novalue'),
        doesnotcontain: AJS.I18n.getText('aui.validation.message.doesnotcontain'),
        pattern: AJS.I18n.getText('aui.validation.message.pattern'),
        required: AJS.I18n.getText('aui.validation.message.required'),
        validnumber: AJS.I18n.getText('aui.validation.message.validnumber'),
        min: AJS.I18n.getText('aui.validation.message.min'),
        max: AJS.I18n.getText('aui.validation.message.max'),
        dateformat: AJS.I18n.getText('aui.validation.message.dateformat'),
        minchecked: AJS.I18n.getText('aui.validation.message.minchecked'),
        maxchecked: AJS.I18n.getText('aui.validation.message.maxchecked')
    };

});
;(function(init) {
    'use strict';

    define('aui/form-notification',[],function () {
        return init(AJS.$, window.skate);
    });
})(function ($, skate) {
    'use strict';

    var NOTIFICATION_NAMESPACE = 'aui-form-notification';

    var ATTRIBUTE_TOOLTIP_POSITION = NOTIFICATION_NAMESPACE + '-position';

    var CLASS_NOTIFICATION_INITIALISED = '_aui-form-notification-initialised';

    var CLASS_NOTIFICATION_ICON = 'aui-icon-notification';

    var CLASS_TOOLTIP = NOTIFICATION_NAMESPACE + '-tooltip';
    var CLASS_TOOLTIP_ERROR = CLASS_TOOLTIP + '-error';
    var CLASS_TOOLTIP_INFO = CLASS_TOOLTIP + '-info';

    var ATTRIBUTE_NOTIFICATION_PREFIX = 'data-aui-notification-';
    var ATTRIBUTE_NOTIFICATION_WAIT = ATTRIBUTE_NOTIFICATION_PREFIX + 'wait';
    var ATTRIBUTE_NOTIFICATION_INFO = ATTRIBUTE_NOTIFICATION_PREFIX + 'info';
    var ATTRIBUTE_NOTIFICATION_ERROR = ATTRIBUTE_NOTIFICATION_PREFIX + 'error';
    var ATTRIBUTE_NOTIFICATION_SUCCESS = ATTRIBUTE_NOTIFICATION_PREFIX + 'success';

    var NOTIFICATION_PRIORITY = [
        ATTRIBUTE_NOTIFICATION_ERROR,
        ATTRIBUTE_NOTIFICATION_SUCCESS,
        ATTRIBUTE_NOTIFICATION_WAIT,
        ATTRIBUTE_NOTIFICATION_INFO
    ];

    var notificationFields = [];

    /* --- Tipsy configuration --- */
    var TIPSY_OPACITY = 1;
    var TIPSY_OFFSET_INSIDE_FIELD = 9; //offset in px from the icon to the start of the tipsy
    var TIPSY_OFFSET_OUTSIDE_FIELD = 3;

    function initialiseNotification($field) {
        if (!isFieldInitialised($field)) {
            prepareFieldMarkup($field);
            initialiseTooltip($field);
            bindFieldEvents($field);
            synchroniseNotificationDisplay($field)
        }

        notificationFields.push($field);
    }

    function isFieldInitialised($field) {
        return $field.hasClass(CLASS_NOTIFICATION_INITIALISED);
    }

    function constructFieldIcon(){
        return $('<span class="aui-icon aui-icon-small ' + CLASS_NOTIFICATION_ICON + '"/>');
    }

    function prepareFieldMarkup($field) {
        $field.addClass(CLASS_NOTIFICATION_INITIALISED);
        appendIconToField($field);
    }

    function appendIconToField($field) {
        var $icon = constructFieldIcon();
        $field.after($icon);
    }

    function initialiseTooltip($field) {
        getTooltipAnchor($field).tipsy({
            gravity: getTipsyGravity($field),
            title: function(){
                return getNotificationMessage($field);
            },
            trigger: 'manual',
            offset: canContainIcon($field) ? TIPSY_OFFSET_INSIDE_FIELD : TIPSY_OFFSET_OUTSIDE_FIELD,
            opacity: TIPSY_OPACITY,
            className: function() {
                return 'aui-form-notification-tooltip ' + getNotificationClass($field);
            },
            html: true
        });
    }

    // A list of HTML5 input types that don't typically get augmented by the browser, so are safe to put icons inside of.
    var unadornedInputFields = ['text', 'url', 'email', 'tel', 'password'];

    function canContainIcon($field) {
        return unadornedInputFields.indexOf($field.attr('type')) !== -1;
    }

    function getNotificationMessage($field) {
        var notificationType = getFieldNotificationType($field);
        var message = notificationType ? $field.attr(notificationType) : '';
        return formatMessage(message);
    }

    function formatMessage(message) {
        if (message === '') {
            return message;
        }

        var messageArray = jsonToArray(message);

        if (messageArray.length === 1) {
            return messageArray[0];
        } else {
            return '<ul><li>'+messageArray.join('</li><li>')+'</li></ul>';
        }
    }

    function jsonToArray(jsonOrString) {
        var jsonArray;
        try {
            jsonArray = JSON.parse(jsonOrString);
        } catch (exception) {
            jsonArray = [jsonOrString];
        }
        return jsonArray;
    }

    function getNotificationClass($field) {
        var notificationType = getFieldNotificationType($field);

        if (notificationType === ATTRIBUTE_NOTIFICATION_ERROR) {
            return CLASS_TOOLTIP_ERROR;
        } else if (notificationType === ATTRIBUTE_NOTIFICATION_INFO) {
            return CLASS_TOOLTIP_INFO;
        }
    }

    function getFieldNotificationType($field) {
        var fieldNotificationType;
        NOTIFICATION_PRIORITY.some(function(prioritisedNotification) {
            if ($field.is('[' + prioritisedNotification + ']')) {
                fieldNotificationType = prioritisedNotification;
                return true;
            }
        });

        return fieldNotificationType;
    }

    function bindFieldEvents($field) {
        if (focusTogglesTooltip($field)) {
            bindFieldTabEvents($field);
        }
    }

    function focusTogglesTooltip($field) {
        return $field.is(':aui-focusable');
    }

    function fieldHasTooltip($field) {
        return getNotificationMessage($field) !== '';
    }

    function showTooltip($field) {
        getTooltipAnchor($field).tipsy('show');
        if (focusTogglesTooltip($field)) {
            bindTooltipTabEvents($field);
        }
    }

    function hideTooltip($field) {
        getTooltipAnchor($field).tipsy('hide');
    }

    function bindFocusTooltipInteractions() {
        document.addEventListener('focus', function(e) {
            notificationFields.forEach(function(field) {
                var $field = $(field);
                var $tooltip = getTooltip($field);

                if (!focusTogglesTooltip($field)) {
                    return;
                }

                var isFocusInTooltip = $tooltip && $.contains($tooltip[0], e.target);
                var isFocusTargetField = $field.is(e.target);
                var isFocusTargetChildOfField = isFocusEventTargetInElement(e, $field);

                if (isFocusTargetField || isFocusTargetChildOfField) {
                    showTooltip($field);
                } else if ($tooltip && !isFocusInTooltip) {
                    hideTooltip($field);
                }
            });
        }, true);
    }

    bindFocusTooltipInteractions();

    function isFocusEventTargetInElement(event, $element) {
        return $(event.target).closest($element).length > 0;
    }

    function bindFieldTabEvents($field) {
        $field.on('keydown', function(e) {
            if (isNormalTab(e) && fieldHasTooltip($field)) {
                var $firstTooltipLink = getFirstTooltipLink($field);
                if ($firstTooltipLink.length) {
                    $firstTooltipLink.focus();
                    e.preventDefault();
                }
            }
        });
    }

    function isNormalTab(e) {
        return e.keyCode === AJS.keyCode.TAB && !e.shiftKey && !e.altKey;
    }

    function isShiftTab(e) {
        return e.keyCode === AJS.keyCode.TAB && e.shiftKey;
    }

    function getFirstTooltipLink($field) {
        return getTooltip($field).find(':aui-tabbable').first();
    }

    function getLastTooltipLink($field) {
        return getTooltip($field).find(':aui-tabbable').last();
    }

    function getTooltip($field) {
        var $anchor = getTooltipAnchor($field);
        if ($anchor.data('tipsy')) {
            return $anchor.data('tipsy').$tip;
        }
    }

    function bindTooltipTabEvents($field) {
        var $tooltip = getTooltip($field);
        $tooltip.on('keydown', function(e) {
            var leavingTooltipForwards = elementIsActive(getLastTooltipLink($field));
            var leavingTooltipBackwards = elementIsActive(getFirstTooltipLink($field));

            if (isNormalTab(e) && leavingTooltipForwards) {
                if (leavingTooltipForwards) {
                    $field.focus();
                }
            }
            if (isShiftTab(e) && leavingTooltipBackwards) {
                if (leavingTooltipBackwards) {
                    $field.focus();
                    e.preventDefault();
                }
            }
        });
    }

    function getTipsyGravity($field) {
        var position = $field.data(ATTRIBUTE_TOOLTIP_POSITION) || 'side';
        var gravityMap = {
            side: 'w',
            top: 'se',
            bottom: 'ne'
        };
        var gravity = gravityMap[position];
        if (!gravity) {
            gravity = 'w';
            AJS.warn('Invalid notification position: "' + position + '". Valid options are "side", "bottom, "top"');
        }
        return gravity;
    }

    function getTooltipAnchor($field) {
        return getFieldIcon($field);
    }

    function getFieldIcon($field) {
        return $field.next('.' + CLASS_NOTIFICATION_ICON);
    }

    function elementIsActive($el) {
        var el = ($el instanceof $) ? $el[0]: $el;
        return el && el === document.activeElement;
    }

    function synchroniseNotificationDisplay(field) {
        var $field = $(field);

        if(!isFieldInitialised($field)) {
            return;
        }

        var notificationType = getFieldNotificationType($field);

        var showSpinner = notificationType === ATTRIBUTE_NOTIFICATION_WAIT;
        setFieldSpinner($field, showSpinner);
        var noNotificationOnField = !notificationType;
        if (noNotificationOnField) {
            hideTooltip($field);
            return;
        }

        var message = getNotificationMessage($field);

        var fieldContainsActiveElement = $.contains($field[0], document.activeElement);
        var tooltipShouldBeVisible = (fieldContainsActiveElement || elementIsActive($field) || !focusTogglesTooltip($field));
        if (tooltipShouldBeVisible && message) {
            showTooltip($field);
        } else {
            hideTooltip($field);
        }
    }

    function setFieldSpinner($field, isSpinnerVisible) {
        if (isSpinnerVisible) {
            getFieldIcon($field).addClass('aui-icon-wait');
        } else {
            getFieldIcon($field).removeClass('aui-icon-wait');
        }
    }

    document.addEventListener('mousedown', function(e) {
        var isTargetLink = $(e.target).is('a');
        if (isTargetLink) {
            return;
        }

        var isTargetTooltip = $(e.target).closest('.aui-form-notification-tooltip').length > 0;
        if (isTargetTooltip) {
            return;
        }

        var $allNotificationFields = $('[data-aui-notification-field]');
        $allNotificationFields.each(function() {
            var $notificationField = $(this);

            var targetIsThisField = $notificationField.is(e.target);
            var isFocusTargetChildOfField = isFocusEventTargetInElement(e, $notificationField);

            if (!targetIsThisField && !isFocusTargetChildOfField) {
                hideTooltip($notificationField);
            }
            if(focusTogglesTooltip($notificationField)) {
                hideTooltip($notificationField);
            }
        });
    });

    skate('data-aui-notification-field', {
        attached: function(element) {
            initialiseNotification($(element));
        },
        attributes: (function() {
            var attrs = {};
            NOTIFICATION_PRIORITY.forEach(function(type) {
                attrs[type] = synchroniseNotificationDisplay;
            });
            return attrs;
        }()),
        type: skate.types.ATTR
    });
});

;(function(init) {
    'use strict';

    define('aui/form-validation',['./form-validation/validator-register', './form-validation/basic-validators', './form-notification'], function(validatorRegister) {
        return init(AJS.$, window.skate, validatorRegister);
    });
})(function ($, skate, validatorRegister) {
    'use strict';

    //Attributes
    var ATTRIBUTE_VALIDATION_OPTION_PREFIX = 'aui-validation-';
    var ATTRIBUTE_NOTIFICATION_PREFIX = 'data-aui-notification-';

    var ATTRIBUTE_FIELD_STATE = 'aui-validation-state';
    var INVALID = 'invalid';
    var VALID = 'valid';
    var VALIDATING = 'validating';
    var UNVALIDATED = 'unvalidated';

    var ATTRIBUTE_VALIDATION_FIELD_COMPONENT = 'data-aui-validation-field';

    //Classes
    var CLASS_VALIDATION_INITIALISED = '_aui-form-validation-initialised';

    //Events
    var EVENT_FIELD_STATE_CHANGED = '_aui-internal-field-state-changed';

    function isFieldInitialised($field) {
        return $field.hasClass(CLASS_VALIDATION_INITIALISED);
    }

    function initValidation($field) {
        if (!isFieldInitialised($field)) {
            initialiseDisplayField($field);
            prepareFieldMarkup($field);
            bindFieldEvents($field);
            changeFieldState($field, UNVALIDATED);
        }
    }

    function initialiseDisplayField($field) {
        getDisplayField($field).attr('data-aui-notification-field', '');
    }

    function prepareFieldMarkup($field){
        $field.addClass(CLASS_VALIDATION_INITIALISED);
    }

    function bindFieldEvents($field) {
        bindStopTypingEvent($field);
        bindValidationEvent($field);
    }

    function bindStopTypingEvent($field){
        var keyUpTimer;

        var triggerStopTypingEvent = function(){
            $field.trigger('aui-stop-typing');
        };

        $field.on('keyup', function(){
            clearTimeout(keyUpTimer);
            keyUpTimer = setTimeout(triggerStopTypingEvent, 1500);
        });
    }

    function bindValidationEvent($field) {
        var validateWhen = getValidationOption($field, 'when');
        var watchedFieldID = getValidationOption($field, 'watchfield');

        var watchElements = watchedFieldID ? $field.add('#' + watchedFieldID) : $field;

        watchElements.on(validateWhen, makeStartValidationHandler($field));
    }

    function makeStartValidationHandler($field) {
        return function() {
            var noValidate = getValidationOption($field, 'novalidate');

            if (noValidate) {
                return;
            }

            startValidating($field);
        };
    }

    function getValidationOption($field, option) {
        var defaults = {
            'when': 'change'
        };
        var optionValue = $field.data(ATTRIBUTE_VALIDATION_OPTION_PREFIX + option);
        if (!optionValue) {
            optionValue = defaults[option];
        }

        return optionValue;
    }

    function startValidating($field) {
        clearFieldMessages($field);

        var validatorsToRun = getActivatedValidators($field);

        changeFieldState($field, VALIDATING);

        var deferreds = runValidatorsAndGetDeferred($field, validatorsToRun);
        $.when.apply($, deferreds).done(function(){
            changeFieldState($field, VALID);
        });
    }

    function clearFieldMessages($field) {
        setFieldNotification(getDisplayField($field), 'none');
    }

    function getValidators() {
        return validatorRegister.validators();
    }

    function getActivatedValidators($field) {
        var callList = [];
        getValidators().forEach(function(validator, index) {
            var validatorTrigger = validator.validatorTrigger;
            var runThisValidator = $field.is(validatorTrigger);
            if (runThisValidator) {
                callList.push(index);
            }
        });

        return callList;
    }

    function runValidatorsAndGetDeferred($field, validatorsToRun) {
        var allDeferreds = [];

        validatorsToRun.forEach(function(validatorIndex) {
            var validatorFunction = getValidators()[validatorIndex].validatorFunction;
            var deferred = new $.Deferred();
            var validatorContext = createValidatorContext($field, deferred);
            validatorFunction(validatorContext);

            allDeferreds.push(deferred);
        });

        return allDeferreds;
    }

    function createValidatorContext($field, validatorDeferred) {
        return {
            validate: function(){
                validatorDeferred.resolve();
            },
            invalidate: function(message){
                changeFieldState($field, INVALID, message);
                validatorDeferred.reject();
            },
            args: createArgumentAccessorFunction($field),
            $el: $field
        };
    }

    function createArgumentAccessorFunction($field) {
        return function(arg) {
            return $field.data(ATTRIBUTE_VALIDATION_OPTION_PREFIX + arg);
        };
    }

    function changeFieldState($field, state, message) {
        $field.attr('data-'+ATTRIBUTE_FIELD_STATE, state);

        if (state === UNVALIDATED) {
            return;
        }

        $field.trigger($.Event(EVENT_FIELD_STATE_CHANGED));

        var $displayField = getDisplayField($field);

        var stateToNotificationTypeMap = {};
        stateToNotificationTypeMap[VALIDATING] = 'wait';
        stateToNotificationTypeMap[INVALID] = 'error';
        stateToNotificationTypeMap[VALID] = 'success';

        var notificationType = stateToNotificationTypeMap[state];

        if (state === VALIDATING) {
            showSpinnerIfSlow($field);
        } else {
            setFieldNotification($displayField, notificationType, message);
        }

    }

    function showSpinnerIfSlow($field) {
        setTimeout(function() {
            var stillValidating = getFieldState($field) === VALIDATING;
            if (stillValidating) {
                setFieldNotification($field, 'wait');
            }
        }, 500);
    }

    function setFieldNotification($field, type, message) {
        var spinnerWasVisible = isSpinnerVisible($field);
        removeIconOnlyNotifications($field);
        var skipShowingSuccessNotification = (type === 'success') && !spinnerWasVisible;
        if (skipShowingSuccessNotification) {
            return;
        }

        if (type === 'none') {
            removeFieldNotification($field, 'error');
        } else {
            var previousMessage = $field.attr(ATTRIBUTE_NOTIFICATION_PREFIX + type) || '[]';
            var newMessage = message ? combineJSONMessages(message, previousMessage) : '';
            $field.attr(ATTRIBUTE_NOTIFICATION_PREFIX + type, newMessage);
        }
    }

    function removeIconOnlyNotifications($field) {
        removeFieldNotification($field, 'wait');
        removeFieldNotification($field, 'success');
    }

    function removeFieldNotification($field, type) {
        $field.removeAttr(ATTRIBUTE_NOTIFICATION_PREFIX + type);
    }

    function isSpinnerVisible($field) {
        return $field.is('[' + ATTRIBUTE_NOTIFICATION_PREFIX + 'wait]');
    }

    function combineJSONMessages(newString, previousString) {
        var previousStackedMessageList = JSON.parse(previousString);
        var newStackedMessageList = previousStackedMessageList.concat([newString]);
        var newStackedMessage = JSON.stringify(newStackedMessageList);
        return newStackedMessage;
    }

    function getDisplayField($field) {
        var displayFieldID = getValidationOption($field, 'displayfield');
        var notifyOnSelf = (displayFieldID === undefined);
        return notifyOnSelf ? $field : $('#' + displayFieldID);
    }

    function getFieldState($field) {
        return $field.attr('data-' + ATTRIBUTE_FIELD_STATE);
    }

    /**
     * Trigger validation on a field manually
     * @param $field the field that validation should be triggered for
     */
    function validateField($field) {
        $field = $($field);
        makeStartValidationHandler($field)();
    }

    /**
     * Form scrolling and submission prevent based on validation state
     * -If the form is unvalidated, validate all fields
     * -If the form is invalid, go to the first invalid element
     * -If the form is validating, wait for them to validate and then try submitting again
     * -If the form is valid, allow form submission
     */
    $(document).on('submit', function(e) {
        var form = e.target;
        var $form = $(form);

        var formState = getFormStateName($form);
        if (formState === UNVALIDATED) {
            validateUnvalidatedFields($form);
            delayFormSubmission($form, e);
        } else if (formState === VALIDATING) {
            delayFormSubmission($form, e);
        } else if (formState === INVALID) {
            e.preventDefault();
            selectFirstInvalid($form);
        } else if (formState === VALID) {
            var validSubmitEvent = $.Event('aui-valid-submit');
            $form.trigger(validSubmitEvent);
            var preventNormalSubmit = validSubmitEvent.isDefaultPrevented();
            if (preventNormalSubmit) {
                e.preventDefault(); //users can bind to aui-valid-submit for ajax forms
            }
        }
    });

    function delayFormSubmission($form, event) {
        event.preventDefault();
        var isFormValidating = getFormStateName($form) === VALIDATING;
        if (!isFormValidating) {
            $form.trigger('submit');
        } else {
            $form.one(EVENT_FIELD_STATE_CHANGED, function() {
                $form.trigger('submit');
            });
        }
    }

    function getFormStateName($form) {
        var $fieldCollection = $form.find('.' + CLASS_VALIDATION_INITIALISED);
        var fieldStates = getFieldCollectionStateNames($fieldCollection);
        var wholeFormState = mergeStates(fieldStates);
        return wholeFormState;
    }

    function getFieldCollectionStateNames($fields) {
        var states = $.map($fields, function(field) {
            return getFieldState($(field));
        });
        return states;
    }

    function mergeStates(stateNames) {
        var containsInvalidState = stateNames.indexOf(INVALID) !== -1;
        var containsUnvalidatedState = stateNames.indexOf(UNVALIDATED) !== -1;
        var containsValidatingState = stateNames.indexOf(VALIDATING) !== -1;
        var containsValidState = stateNames.indexOf(VALID) !== -1;

        if (containsInvalidState) {
            return INVALID;
        } else if (containsUnvalidatedState) {
            return UNVALIDATED;
        } else if (containsValidatingState) {
            return VALIDATING;
        } else if (containsValidState) {
            return VALID;
        }
    }

    function validateUnvalidatedFields($form) {
        var $unvalidatedElements = getFieldsInFormWithState($form, UNVALIDATED);
        $unvalidatedElements.each(function(index, el) {
            validator.validate($(el));
        });
    }

    function selectFirstInvalid($form) {
        var $firstInvalidField = getFieldsInFormWithState($form, INVALID).first();
        $firstInvalidField.focus();
    }

    function getFieldsInFormWithState($form, state) {
        var selector = '[data-'+ATTRIBUTE_FIELD_STATE+'='+state+']';
        return $form.find(selector);
    }


    var validator = {
        register: validatorRegister.register,
        validate: validateField
    };

    skate(ATTRIBUTE_VALIDATION_FIELD_COMPONENT, {
        attached: function(field) {
            var $field = $(field);
            initValidation($field);
            skate.init(field); //needed to kick off form notification skate initialisation
        },
        type: skate.types.ATTR
    });


    return validator;
});

/*
 Copyright 2012 Igor Vaynberg

 Version: 3.4.5 Timestamp: Mon Nov  4 08:22:42 PST 2013

 This software is licensed under the Apache License, Version 2.0 (the "Apache License") or the GNU
 General Public License version 2 (the "GPL License"). You may choose either license to govern your
 use of this software only upon the condition that you accept all of the terms of either the Apache
 License or the GPL License.

 You may obtain a copy of the Apache License and the GPL License at:

 http://www.apache.org/licenses/LICENSE-2.0
 http://www.gnu.org/licenses/gpl-2.0.html

 Unless required by applicable law or agreed to in writing, software distributed under the
 Apache License or the GPL Licesnse is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 CONDITIONS OF ANY KIND, either express or implied. See the Apache License and the GPL License for
 the specific language governing permissions and limitations under the Apache License and the GPL License.
 */
(function ($) {
    if(typeof $.fn.each2 == "undefined") {
        $.extend($.fn, {
            /*
             * 4-10 times faster .each replacement
             * use it carefully, as it overrides jQuery context of element on each iteration
             */
            each2 : function (c) {
                var j = $([0]), i = -1, l = this.length;
                while (
                    ++i < l
                        && (j.context = j[0] = this[i])
                        && c.call(j[0], i, j) !== false //"this"=DOM, i=index, j=jQuery object
                    );
                return this;
            }
        });
    }
})(jQuery);

(function ($, undefined) {
    "use strict";
    /*global document, window, jQuery, console */

    if (window.Select2 !== undefined) {
        return;
    }

    var KEY, AbstractSelect2, SingleSelect2, MultiSelect2, nextUid, sizer,
        lastMousePosition={x:0,y:0}, $document, scrollBarDimensions,

        KEY = {
            TAB: 9,
            ENTER: 13,
            ESC: 27,
            SPACE: 32,
            LEFT: 37,
            UP: 38,
            RIGHT: 39,
            DOWN: 40,
            SHIFT: 16,
            CTRL: 17,
            ALT: 18,
            PAGE_UP: 33,
            PAGE_DOWN: 34,
            HOME: 36,
            END: 35,
            BACKSPACE: 8,
            DELETE: 46,
            isArrow: function (k) {
                k = k.which ? k.which : k;
                switch (k) {
                    case KEY.LEFT:
                    case KEY.RIGHT:
                    case KEY.UP:
                    case KEY.DOWN:
                        return true;
                }
                return false;
            },
            isControl: function (e) {
                var k = e.which;
                switch (k) {
                    case KEY.SHIFT:
                    case KEY.CTRL:
                    case KEY.ALT:
                        return true;
                }

                if (e.metaKey) return true;

                return false;
            },
            isFunctionKey: function (k) {
                k = k.which ? k.which : k;
                return k >= 112 && k <= 123;
            }
        },
        MEASURE_SCROLLBAR_TEMPLATE = "<div class='select2-measure-scrollbar'></div>",

        DIACRITICS = {"\u24B6":"A","\uFF21":"A","\u00C0":"A","\u00C1":"A","\u00C2":"A","\u1EA6":"A","\u1EA4":"A","\u1EAA":"A","\u1EA8":"A","\u00C3":"A","\u0100":"A","\u0102":"A","\u1EB0":"A","\u1EAE":"A","\u1EB4":"A","\u1EB2":"A","\u0226":"A","\u01E0":"A","\u00C4":"A","\u01DE":"A","\u1EA2":"A","\u00C5":"A","\u01FA":"A","\u01CD":"A","\u0200":"A","\u0202":"A","\u1EA0":"A","\u1EAC":"A","\u1EB6":"A","\u1E00":"A","\u0104":"A","\u023A":"A","\u2C6F":"A","\uA732":"AA","\u00C6":"AE","\u01FC":"AE","\u01E2":"AE","\uA734":"AO","\uA736":"AU","\uA738":"AV","\uA73A":"AV","\uA73C":"AY","\u24B7":"B","\uFF22":"B","\u1E02":"B","\u1E04":"B","\u1E06":"B","\u0243":"B","\u0182":"B","\u0181":"B","\u24B8":"C","\uFF23":"C","\u0106":"C","\u0108":"C","\u010A":"C","\u010C":"C","\u00C7":"C","\u1E08":"C","\u0187":"C","\u023B":"C","\uA73E":"C","\u24B9":"D","\uFF24":"D","\u1E0A":"D","\u010E":"D","\u1E0C":"D","\u1E10":"D","\u1E12":"D","\u1E0E":"D","\u0110":"D","\u018B":"D","\u018A":"D","\u0189":"D","\uA779":"D","\u01F1":"DZ","\u01C4":"DZ","\u01F2":"Dz","\u01C5":"Dz","\u24BA":"E","\uFF25":"E","\u00C8":"E","\u00C9":"E","\u00CA":"E","\u1EC0":"E","\u1EBE":"E","\u1EC4":"E","\u1EC2":"E","\u1EBC":"E","\u0112":"E","\u1E14":"E","\u1E16":"E","\u0114":"E","\u0116":"E","\u00CB":"E","\u1EBA":"E","\u011A":"E","\u0204":"E","\u0206":"E","\u1EB8":"E","\u1EC6":"E","\u0228":"E","\u1E1C":"E","\u0118":"E","\u1E18":"E","\u1E1A":"E","\u0190":"E","\u018E":"E","\u24BB":"F","\uFF26":"F","\u1E1E":"F","\u0191":"F","\uA77B":"F","\u24BC":"G","\uFF27":"G","\u01F4":"G","\u011C":"G","\u1E20":"G","\u011E":"G","\u0120":"G","\u01E6":"G","\u0122":"G","\u01E4":"G","\u0193":"G","\uA7A0":"G","\uA77D":"G","\uA77E":"G","\u24BD":"H","\uFF28":"H","\u0124":"H","\u1E22":"H","\u1E26":"H","\u021E":"H","\u1E24":"H","\u1E28":"H","\u1E2A":"H","\u0126":"H","\u2C67":"H","\u2C75":"H","\uA78D":"H","\u24BE":"I","\uFF29":"I","\u00CC":"I","\u00CD":"I","\u00CE":"I","\u0128":"I","\u012A":"I","\u012C":"I","\u0130":"I","\u00CF":"I","\u1E2E":"I","\u1EC8":"I","\u01CF":"I","\u0208":"I","\u020A":"I","\u1ECA":"I","\u012E":"I","\u1E2C":"I","\u0197":"I","\u24BF":"J","\uFF2A":"J","\u0134":"J","\u0248":"J","\u24C0":"K","\uFF2B":"K","\u1E30":"K","\u01E8":"K","\u1E32":"K","\u0136":"K","\u1E34":"K","\u0198":"K","\u2C69":"K","\uA740":"K","\uA742":"K","\uA744":"K","\uA7A2":"K","\u24C1":"L","\uFF2C":"L","\u013F":"L","\u0139":"L","\u013D":"L","\u1E36":"L","\u1E38":"L","\u013B":"L","\u1E3C":"L","\u1E3A":"L","\u0141":"L","\u023D":"L","\u2C62":"L","\u2C60":"L","\uA748":"L","\uA746":"L","\uA780":"L","\u01C7":"LJ","\u01C8":"Lj","\u24C2":"M","\uFF2D":"M","\u1E3E":"M","\u1E40":"M","\u1E42":"M","\u2C6E":"M","\u019C":"M","\u24C3":"N","\uFF2E":"N","\u01F8":"N","\u0143":"N","\u00D1":"N","\u1E44":"N","\u0147":"N","\u1E46":"N","\u0145":"N","\u1E4A":"N","\u1E48":"N","\u0220":"N","\u019D":"N","\uA790":"N","\uA7A4":"N","\u01CA":"NJ","\u01CB":"Nj","\u24C4":"O","\uFF2F":"O","\u00D2":"O","\u00D3":"O","\u00D4":"O","\u1ED2":"O","\u1ED0":"O","\u1ED6":"O","\u1ED4":"O","\u00D5":"O","\u1E4C":"O","\u022C":"O","\u1E4E":"O","\u014C":"O","\u1E50":"O","\u1E52":"O","\u014E":"O","\u022E":"O","\u0230":"O","\u00D6":"O","\u022A":"O","\u1ECE":"O","\u0150":"O","\u01D1":"O","\u020C":"O","\u020E":"O","\u01A0":"O","\u1EDC":"O","\u1EDA":"O","\u1EE0":"O","\u1EDE":"O","\u1EE2":"O","\u1ECC":"O","\u1ED8":"O","\u01EA":"O","\u01EC":"O","\u00D8":"O","\u01FE":"O","\u0186":"O","\u019F":"O","\uA74A":"O","\uA74C":"O","\u01A2":"OI","\uA74E":"OO","\u0222":"OU","\u24C5":"P","\uFF30":"P","\u1E54":"P","\u1E56":"P","\u01A4":"P","\u2C63":"P","\uA750":"P","\uA752":"P","\uA754":"P","\u24C6":"Q","\uFF31":"Q","\uA756":"Q","\uA758":"Q","\u024A":"Q","\u24C7":"R","\uFF32":"R","\u0154":"R","\u1E58":"R","\u0158":"R","\u0210":"R","\u0212":"R","\u1E5A":"R","\u1E5C":"R","\u0156":"R","\u1E5E":"R","\u024C":"R","\u2C64":"R","\uA75A":"R","\uA7A6":"R","\uA782":"R","\u24C8":"S","\uFF33":"S","\u1E9E":"S","\u015A":"S","\u1E64":"S","\u015C":"S","\u1E60":"S","\u0160":"S","\u1E66":"S","\u1E62":"S","\u1E68":"S","\u0218":"S","\u015E":"S","\u2C7E":"S","\uA7A8":"S","\uA784":"S","\u24C9":"T","\uFF34":"T","\u1E6A":"T","\u0164":"T","\u1E6C":"T","\u021A":"T","\u0162":"T","\u1E70":"T","\u1E6E":"T","\u0166":"T","\u01AC":"T","\u01AE":"T","\u023E":"T","\uA786":"T","\uA728":"TZ","\u24CA":"U","\uFF35":"U","\u00D9":"U","\u00DA":"U","\u00DB":"U","\u0168":"U","\u1E78":"U","\u016A":"U","\u1E7A":"U","\u016C":"U","\u00DC":"U","\u01DB":"U","\u01D7":"U","\u01D5":"U","\u01D9":"U","\u1EE6":"U","\u016E":"U","\u0170":"U","\u01D3":"U","\u0214":"U","\u0216":"U","\u01AF":"U","\u1EEA":"U","\u1EE8":"U","\u1EEE":"U","\u1EEC":"U","\u1EF0":"U","\u1EE4":"U","\u1E72":"U","\u0172":"U","\u1E76":"U","\u1E74":"U","\u0244":"U","\u24CB":"V","\uFF36":"V","\u1E7C":"V","\u1E7E":"V","\u01B2":"V","\uA75E":"V","\u0245":"V","\uA760":"VY","\u24CC":"W","\uFF37":"W","\u1E80":"W","\u1E82":"W","\u0174":"W","\u1E86":"W","\u1E84":"W","\u1E88":"W","\u2C72":"W","\u24CD":"X","\uFF38":"X","\u1E8A":"X","\u1E8C":"X","\u24CE":"Y","\uFF39":"Y","\u1EF2":"Y","\u00DD":"Y","\u0176":"Y","\u1EF8":"Y","\u0232":"Y","\u1E8E":"Y","\u0178":"Y","\u1EF6":"Y","\u1EF4":"Y","\u01B3":"Y","\u024E":"Y","\u1EFE":"Y","\u24CF":"Z","\uFF3A":"Z","\u0179":"Z","\u1E90":"Z","\u017B":"Z","\u017D":"Z","\u1E92":"Z","\u1E94":"Z","\u01B5":"Z","\u0224":"Z","\u2C7F":"Z","\u2C6B":"Z","\uA762":"Z","\u24D0":"a","\uFF41":"a","\u1E9A":"a","\u00E0":"a","\u00E1":"a","\u00E2":"a","\u1EA7":"a","\u1EA5":"a","\u1EAB":"a","\u1EA9":"a","\u00E3":"a","\u0101":"a","\u0103":"a","\u1EB1":"a","\u1EAF":"a","\u1EB5":"a","\u1EB3":"a","\u0227":"a","\u01E1":"a","\u00E4":"a","\u01DF":"a","\u1EA3":"a","\u00E5":"a","\u01FB":"a","\u01CE":"a","\u0201":"a","\u0203":"a","\u1EA1":"a","\u1EAD":"a","\u1EB7":"a","\u1E01":"a","\u0105":"a","\u2C65":"a","\u0250":"a","\uA733":"aa","\u00E6":"ae","\u01FD":"ae","\u01E3":"ae","\uA735":"ao","\uA737":"au","\uA739":"av","\uA73B":"av","\uA73D":"ay","\u24D1":"b","\uFF42":"b","\u1E03":"b","\u1E05":"b","\u1E07":"b","\u0180":"b","\u0183":"b","\u0253":"b","\u24D2":"c","\uFF43":"c","\u0107":"c","\u0109":"c","\u010B":"c","\u010D":"c","\u00E7":"c","\u1E09":"c","\u0188":"c","\u023C":"c","\uA73F":"c","\u2184":"c","\u24D3":"d","\uFF44":"d","\u1E0B":"d","\u010F":"d","\u1E0D":"d","\u1E11":"d","\u1E13":"d","\u1E0F":"d","\u0111":"d","\u018C":"d","\u0256":"d","\u0257":"d","\uA77A":"d","\u01F3":"dz","\u01C6":"dz","\u24D4":"e","\uFF45":"e","\u00E8":"e","\u00E9":"e","\u00EA":"e","\u1EC1":"e","\u1EBF":"e","\u1EC5":"e","\u1EC3":"e","\u1EBD":"e","\u0113":"e","\u1E15":"e","\u1E17":"e","\u0115":"e","\u0117":"e","\u00EB":"e","\u1EBB":"e","\u011B":"e","\u0205":"e","\u0207":"e","\u1EB9":"e","\u1EC7":"e","\u0229":"e","\u1E1D":"e","\u0119":"e","\u1E19":"e","\u1E1B":"e","\u0247":"e","\u025B":"e","\u01DD":"e","\u24D5":"f","\uFF46":"f","\u1E1F":"f","\u0192":"f","\uA77C":"f","\u24D6":"g","\uFF47":"g","\u01F5":"g","\u011D":"g","\u1E21":"g","\u011F":"g","\u0121":"g","\u01E7":"g","\u0123":"g","\u01E5":"g","\u0260":"g","\uA7A1":"g","\u1D79":"g","\uA77F":"g","\u24D7":"h","\uFF48":"h","\u0125":"h","\u1E23":"h","\u1E27":"h","\u021F":"h","\u1E25":"h","\u1E29":"h","\u1E2B":"h","\u1E96":"h","\u0127":"h","\u2C68":"h","\u2C76":"h","\u0265":"h","\u0195":"hv","\u24D8":"i","\uFF49":"i","\u00EC":"i","\u00ED":"i","\u00EE":"i","\u0129":"i","\u012B":"i","\u012D":"i","\u00EF":"i","\u1E2F":"i","\u1EC9":"i","\u01D0":"i","\u0209":"i","\u020B":"i","\u1ECB":"i","\u012F":"i","\u1E2D":"i","\u0268":"i","\u0131":"i","\u24D9":"j","\uFF4A":"j","\u0135":"j","\u01F0":"j","\u0249":"j","\u24DA":"k","\uFF4B":"k","\u1E31":"k","\u01E9":"k","\u1E33":"k","\u0137":"k","\u1E35":"k","\u0199":"k","\u2C6A":"k","\uA741":"k","\uA743":"k","\uA745":"k","\uA7A3":"k","\u24DB":"l","\uFF4C":"l","\u0140":"l","\u013A":"l","\u013E":"l","\u1E37":"l","\u1E39":"l","\u013C":"l","\u1E3D":"l","\u1E3B":"l","\u017F":"l","\u0142":"l","\u019A":"l","\u026B":"l","\u2C61":"l","\uA749":"l","\uA781":"l","\uA747":"l","\u01C9":"lj","\u24DC":"m","\uFF4D":"m","\u1E3F":"m","\u1E41":"m","\u1E43":"m","\u0271":"m","\u026F":"m","\u24DD":"n","\uFF4E":"n","\u01F9":"n","\u0144":"n","\u00F1":"n","\u1E45":"n","\u0148":"n","\u1E47":"n","\u0146":"n","\u1E4B":"n","\u1E49":"n","\u019E":"n","\u0272":"n","\u0149":"n","\uA791":"n","\uA7A5":"n","\u01CC":"nj","\u24DE":"o","\uFF4F":"o","\u00F2":"o","\u00F3":"o","\u00F4":"o","\u1ED3":"o","\u1ED1":"o","\u1ED7":"o","\u1ED5":"o","\u00F5":"o","\u1E4D":"o","\u022D":"o","\u1E4F":"o","\u014D":"o","\u1E51":"o","\u1E53":"o","\u014F":"o","\u022F":"o","\u0231":"o","\u00F6":"o","\u022B":"o","\u1ECF":"o","\u0151":"o","\u01D2":"o","\u020D":"o","\u020F":"o","\u01A1":"o","\u1EDD":"o","\u1EDB":"o","\u1EE1":"o","\u1EDF":"o","\u1EE3":"o","\u1ECD":"o","\u1ED9":"o","\u01EB":"o","\u01ED":"o","\u00F8":"o","\u01FF":"o","\u0254":"o","\uA74B":"o","\uA74D":"o","\u0275":"o","\u01A3":"oi","\u0223":"ou","\uA74F":"oo","\u24DF":"p","\uFF50":"p","\u1E55":"p","\u1E57":"p","\u01A5":"p","\u1D7D":"p","\uA751":"p","\uA753":"p","\uA755":"p","\u24E0":"q","\uFF51":"q","\u024B":"q","\uA757":"q","\uA759":"q","\u24E1":"r","\uFF52":"r","\u0155":"r","\u1E59":"r","\u0159":"r","\u0211":"r","\u0213":"r","\u1E5B":"r","\u1E5D":"r","\u0157":"r","\u1E5F":"r","\u024D":"r","\u027D":"r","\uA75B":"r","\uA7A7":"r","\uA783":"r","\u24E2":"s","\uFF53":"s","\u00DF":"s","\u015B":"s","\u1E65":"s","\u015D":"s","\u1E61":"s","\u0161":"s","\u1E67":"s","\u1E63":"s","\u1E69":"s","\u0219":"s","\u015F":"s","\u023F":"s","\uA7A9":"s","\uA785":"s","\u1E9B":"s","\u24E3":"t","\uFF54":"t","\u1E6B":"t","\u1E97":"t","\u0165":"t","\u1E6D":"t","\u021B":"t","\u0163":"t","\u1E71":"t","\u1E6F":"t","\u0167":"t","\u01AD":"t","\u0288":"t","\u2C66":"t","\uA787":"t","\uA729":"tz","\u24E4":"u","\uFF55":"u","\u00F9":"u","\u00FA":"u","\u00FB":"u","\u0169":"u","\u1E79":"u","\u016B":"u","\u1E7B":"u","\u016D":"u","\u00FC":"u","\u01DC":"u","\u01D8":"u","\u01D6":"u","\u01DA":"u","\u1EE7":"u","\u016F":"u","\u0171":"u","\u01D4":"u","\u0215":"u","\u0217":"u","\u01B0":"u","\u1EEB":"u","\u1EE9":"u","\u1EEF":"u","\u1EED":"u","\u1EF1":"u","\u1EE5":"u","\u1E73":"u","\u0173":"u","\u1E77":"u","\u1E75":"u","\u0289":"u","\u24E5":"v","\uFF56":"v","\u1E7D":"v","\u1E7F":"v","\u028B":"v","\uA75F":"v","\u028C":"v","\uA761":"vy","\u24E6":"w","\uFF57":"w","\u1E81":"w","\u1E83":"w","\u0175":"w","\u1E87":"w","\u1E85":"w","\u1E98":"w","\u1E89":"w","\u2C73":"w","\u24E7":"x","\uFF58":"x","\u1E8B":"x","\u1E8D":"x","\u24E8":"y","\uFF59":"y","\u1EF3":"y","\u00FD":"y","\u0177":"y","\u1EF9":"y","\u0233":"y","\u1E8F":"y","\u00FF":"y","\u1EF7":"y","\u1E99":"y","\u1EF5":"y","\u01B4":"y","\u024F":"y","\u1EFF":"y","\u24E9":"z","\uFF5A":"z","\u017A":"z","\u1E91":"z","\u017C":"z","\u017E":"z","\u1E93":"z","\u1E95":"z","\u01B6":"z","\u0225":"z","\u0240":"z","\u2C6C":"z","\uA763":"z"};

    $document = $(document);

    nextUid=(function() { var counter=1; return function() { return counter++; }; }());


    function stripDiacritics(str) {
        var ret, i, l, c;

        if (!str || str.length < 1) return str;

        ret = "";
        for (i = 0, l = str.length; i < l; i++) {
            c = str.charAt(i);
            ret += DIACRITICS[c] || c;
        }
        return ret;
    }

    function indexOf(value, array) {
        var i = 0, l = array.length;
        for (; i < l; i = i + 1) {
            if (equal(value, array[i])) return i;
        }
        return -1;
    }

    function measureScrollbar () {
        var $template = $( MEASURE_SCROLLBAR_TEMPLATE );
        $template.appendTo('body');

        var dim = {
            width: $template.width() - $template[0].clientWidth,
            height: $template.height() - $template[0].clientHeight
        };
        $template.remove();

        return dim;
    }

    /**
     * Compares equality of a and b
     * @param a
     * @param b
     */
    function equal(a, b) {
        if (a === b) return true;
        if (a === undefined || b === undefined) return false;
        if (a === null || b === null) return false;
        // Check whether 'a' or 'b' is a string (primitive or object).
        // The concatenation of an empty string (+'') converts its argument to a string's primitive.
        if (a.constructor === String) return a+'' === b+''; // a+'' - in case 'a' is a String object
        if (b.constructor === String) return b+'' === a+''; // b+'' - in case 'b' is a String object
        return false;
    }

    /**
     * Splits the string into an array of values, trimming each value. An empty array is returned for nulls or empty
     * strings
     * @param string
     * @param separator
     */
    function splitVal(string, separator) {
        var val, i, l;
        if (string === null || string.length < 1) return [];
        val = string.split(separator);
        for (i = 0, l = val.length; i < l; i = i + 1) val[i] = $.trim(val[i]);
        return val;
    }

    function getSideBorderPadding(element) {
        return element.outerWidth(false) - element.width();
    }

    function installKeyUpChangeEvent(element) {
        var key="keyup-change-value";
        element.on("keydown", function () {
            if ($.data(element, key) === undefined) {
                $.data(element, key, element.val());
            }
        });
        element.on("keyup", function () {
            var val= $.data(element, key);
            if (val !== undefined && element.val() !== val) {
                $.removeData(element, key);
                element.trigger("keyup-change");
            }
        });
    }

    $document.on("mousemove", function (e) {
        lastMousePosition.x = e.pageX;
        lastMousePosition.y = e.pageY;
    });

    /**
     * filters mouse events so an event is fired only if the mouse moved.
     *
     * filters out mouse events that occur when mouse is stationary but
     * the elements under the pointer are scrolled.
     */
    function installFilteredMouseMove(element) {
        element.on("mousemove", function (e) {
            var lastpos = lastMousePosition;
            if (lastpos === undefined || lastpos.x !== e.pageX || lastpos.y !== e.pageY) {
                $(e.target).trigger("mousemove-filtered", e);
            }
        });
    }

    /**
     * Debounces a function. Returns a function that calls the original fn function only if no invocations have been made
     * within the last quietMillis milliseconds.
     *
     * @param quietMillis number of milliseconds to wait before invoking fn
     * @param fn function to be debounced
     * @param ctx object to be used as this reference within fn
     * @return debounced version of fn
     */
    function debounce(quietMillis, fn, ctx) {
        ctx = ctx || undefined;
        var timeout;
        return function () {
            var args = arguments;
            window.clearTimeout(timeout);
            timeout = window.setTimeout(function() {
                fn.apply(ctx, args);
            }, quietMillis);
        };
    }

    /**
     * A simple implementation of a thunk
     * @param formula function used to lazily initialize the thunk
     * @return {Function}
     */
    function thunk(formula) {
        var evaluated = false,
            value;
        return function() {
            if (evaluated === false) { value = formula(); evaluated = true; }
            return value;
        };
    };

    function installDebouncedScroll(threshold, element) {
        var notify = debounce(threshold, function (e) { element.trigger("scroll-debounced", e);});
        element.on("scroll", function (e) {
            if (indexOf(e.target, element.get()) >= 0) notify(e);
        });
    }

    function focus($el) {
        if ($el[0] === document.activeElement) return;

        /* set the focus in a 0 timeout - that way the focus is set after the processing
         of the current event has finished - which seems like the only reliable way
         to set focus */
        window.setTimeout(function() {
            var el=$el[0], pos=$el.val().length, range;

            $el.focus();

            /* make sure el received focus so we do not error out when trying to manipulate the caret.
             sometimes modals or others listeners may steal it after its set */
            if ($el.is(":visible") && el === document.activeElement) {

                /* after the focus is set move the caret to the end, necessary when we val()
                 just before setting focus */
                if(el.setSelectionRange)
                {
                    el.setSelectionRange(pos, pos);
                }
                else if (el.createTextRange) {
                    range = el.createTextRange();
                    range.collapse(false);
                    range.select();
                }
            }
        }, 0);
    }

    function getCursorInfo(el) {
        el = $(el)[0];
        var offset = 0;
        var length = 0;
        if ('selectionStart' in el) {
            offset = el.selectionStart;
            length = el.selectionEnd - offset;
        } else if ('selection' in document) {
            el.focus();
            var sel = document.selection.createRange();
            length = document.selection.createRange().text.length;
            sel.moveStart('character', -el.value.length);
            offset = sel.text.length - length;
        }
        return { offset: offset, length: length };
    }

    function killEvent(event) {
        event.preventDefault();
        event.stopPropagation();
    }
    function killEventImmediately(event) {
        event.preventDefault();
        event.stopImmediatePropagation();
    }

    function measureTextWidth(e) {
        if (!sizer){
            var style = e[0].currentStyle || window.getComputedStyle(e[0], null);
            sizer = $(document.createElement("div")).css({
                position: "absolute",
                left: "-10000px",
                top: "-10000px",
                display: "none",
                fontSize: style.fontSize,
                fontFamily: style.fontFamily,
                fontStyle: style.fontStyle,
                fontWeight: style.fontWeight,
                letterSpacing: style.letterSpacing,
                textTransform: style.textTransform,
                whiteSpace: "nowrap"
            });
            sizer.attr("class","select2-sizer");
            $("body").append(sizer);
        }
        sizer.text(e.val());
        return sizer.width();
    }

    function syncCssClasses(dest, src, adapter) {
        var classes, replacements = [], adapted;

        classes = dest.attr("class");
        if (classes) {
            classes = '' + classes; // for IE which returns object
            $(classes.split(" ")).each2(function() {
                if (this.indexOf("select2-") === 0) {
                    replacements.push(this);
                }
            });
        }
        classes = src.attr("class");
        if (classes) {
            classes = '' + classes; // for IE which returns object
            $(classes.split(" ")).each2(function() {
                if (this.indexOf("select2-") !== 0) {
                    adapted = adapter(this);
                    if (adapted) {
                        replacements.push(adapted);
                    }
                }
            });
        }
        dest.attr("class", replacements.join(" "));
    }


    function markMatch(text, term, markup, escapeMarkup) {
        var match=stripDiacritics(text.toUpperCase()).indexOf(stripDiacritics(term.toUpperCase())),
            tl=term.length;

        if (match<0) {
            markup.push(escapeMarkup(text));
            return;
        }

        markup.push(escapeMarkup(text.substring(0, match)));
        markup.push("<span class='select2-match'>");
        markup.push(escapeMarkup(text.substring(match, match + tl)));
        markup.push("</span>");
        markup.push(escapeMarkup(text.substring(match + tl, text.length)));
    }

    function defaultEscapeMarkup(markup) {
        var replace_map = {
            '\\': '&#92;',
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#39;',
            "/": '&#47;'
        };

        return String(markup).replace(/[&<>"'\/\\]/g, function (match) {
            return replace_map[match];
        });
    }

    /**
     * Produces an ajax-based query function
     *
     * @param options object containing configuration paramters
     * @param options.params parameter map for the transport ajax call, can contain such options as cache, jsonpCallback, etc. see $.ajax
     * @param options.transport function that will be used to execute the ajax request. must be compatible with parameters supported by $.ajax
     * @param options.url url for the data
     * @param options.data a function(searchTerm, pageNumber, context) that should return an object containing query string parameters for the above url.
     * @param options.dataType request data type: ajax, jsonp, other datatatypes supported by jQuery's $.ajax function or the transport function if specified
     * @param options.quietMillis (optional) milliseconds to wait before making the ajaxRequest, helps debounce the ajax function if invoked too often
     * @param options.results a function(remoteData, pageNumber) that converts data returned form the remote request to the format expected by Select2.
     *      The expected format is an object containing the following keys:
     *      results array of objects that will be used as choices
     *      more (optional) boolean indicating whether there are more results available
     *      Example: {results:[{id:1, text:'Red'},{id:2, text:'Blue'}], more:true}
     */
    function ajax(options) {
        var timeout, // current scheduled but not yet executed request
            handler = null,
            quietMillis = options.quietMillis || 100,
            ajaxUrl = options.url,
            self = this;

        return function (query) {
            window.clearTimeout(timeout);
            timeout = window.setTimeout(function () {
                var data = options.data, // ajax data function
                    url = ajaxUrl, // ajax url string or function
                    transport = options.transport || $.fn.select2.ajaxDefaults.transport,
                // deprecated - to be removed in 4.0  - use params instead
                    deprecated = {
                        type: options.type || 'GET', // set type of request (GET or POST)
                        cache: options.cache || false,
                        jsonpCallback: options.jsonpCallback||undefined,
                        dataType: options.dataType||"json"
                    },
                    params = $.extend({}, $.fn.select2.ajaxDefaults.params, deprecated);

                data = data ? data.call(self, query.term, query.page, query.context) : null;
                url = (typeof url === 'function') ? url.call(self, query.term, query.page, query.context) : url;

                if (handler) { handler.abort(); }

                if (options.params) {
                    if ($.isFunction(options.params)) {
                        $.extend(params, options.params.call(self));
                    } else {
                        $.extend(params, options.params);
                    }
                }

                $.extend(params, {
                    url: url,
                    dataType: options.dataType,
                    data: data,
                    success: function (data) {
                        // TODO - replace query.page with query so users have access to term, page, etc.
                        var results = options.results(data, query.page);
                        query.callback(results);
                    }
                });
                handler = transport.call(self, params);
            }, quietMillis);
        };
    }

    /**
     * Produces a query function that works with a local array
     *
     * @param options object containing configuration parameters. The options parameter can either be an array or an
     * object.
     *
     * If the array form is used it is assumed that it contains objects with 'id' and 'text' keys.
     *
     * If the object form is used ti is assumed that it contains 'data' and 'text' keys. The 'data' key should contain
     * an array of objects that will be used as choices. These objects must contain at least an 'id' key. The 'text'
     * key can either be a String in which case it is expected that each element in the 'data' array has a key with the
     * value of 'text' which will be used to match choices. Alternatively, text can be a function(item) that can extract
     * the text.
     */
    function local(options) {
        var data = options, // data elements
            dataText,
            tmp,
            text = function (item) { return ""+item.text; }; // function used to retrieve the text portion of a data item that is matched against the search

        if ($.isArray(data)) {
            tmp = data;
            data = { results: tmp };
        }

        if ($.isFunction(data) === false) {
            tmp = data;
            data = function() { return tmp; };
        }

        var dataItem = data();
        if (dataItem.text) {
            text = dataItem.text;
            // if text is not a function we assume it to be a key name
            if (!$.isFunction(text)) {
                dataText = dataItem.text; // we need to store this in a separate variable because in the next step data gets reset and data.text is no longer available
                text = function (item) { return item[dataText]; };
            }
        }

        return function (query) {
            var t = query.term, filtered = { results: [] }, process;
            if (t === "") {
                query.callback(data());
                return;
            }

            process = function(datum, collection) {
                var group, attr;
                datum = datum[0];
                if (datum.children) {
                    group = {};
                    for (attr in datum) {
                        if (datum.hasOwnProperty(attr)) group[attr]=datum[attr];
                    }
                    group.children=[];
                    $(datum.children).each2(function(i, childDatum) { process(childDatum, group.children); });
                    if (group.children.length || query.matcher(t, text(group), datum)) {
                        collection.push(group);
                    }
                } else {
                    if (query.matcher(t, text(datum), datum)) {
                        collection.push(datum);
                    }
                }
            };

            $(data().results).each2(function(i, datum) { process(datum, filtered.results); });
            query.callback(filtered);
        };
    }

    // TODO javadoc
    function tags(data) {
        var isFunc = $.isFunction(data);
        return function (query) {
            var t = query.term, filtered = {results: []};
            $(isFunc ? data() : data).each(function () {
                var isObject = this.text !== undefined,
                    text = isObject ? this.text : this;
                if (t === "" || query.matcher(t, text)) {
                    filtered.results.push(isObject ? this : {id: this, text: this});
                }
            });
            query.callback(filtered);
        };
    }

    /**
     * Checks if the formatter function should be used.
     *
     * Throws an error if it is not a function. Returns true if it should be used,
     * false if no formatting should be performed.
     *
     * @param formatter
     */
    function checkFormatter(formatter, formatterName) {
        if ($.isFunction(formatter)) return true;
        if (!formatter) return false;
        throw new Error(formatterName +" must be a function or a falsy value");
    }

    function evaluate(val) {
        return $.isFunction(val) ? val() : val;
    }

    function countResults(results) {
        var count = 0;
        $.each(results, function(i, item) {
            if (item.children) {
                count += countResults(item.children);
            } else {
                count++;
            }
        });
        return count;
    }

    /**
     * Default tokenizer. This function uses breaks the input on substring match of any string from the
     * opts.tokenSeparators array and uses opts.createSearchChoice to create the choice object. Both of those
     * two options have to be defined in order for the tokenizer to work.
     *
     * @param input text user has typed so far or pasted into the search field
     * @param selection currently selected choices
     * @param selectCallback function(choice) callback tho add the choice to selection
     * @param opts select2's opts
     * @return undefined/null to leave the current input unchanged, or a string to change the input to the returned value
     */
    function defaultTokenizer(input, selection, selectCallback, opts) {
        var original = input, // store the original so we can compare and know if we need to tell the search to update its text
            dupe = false, // check for whether a token we extracted represents a duplicate selected choice
            token, // token
            index, // position at which the separator was found
            i, l, // looping variables
            separator; // the matched separator

        if (!opts.createSearchChoice || !opts.tokenSeparators || opts.tokenSeparators.length < 1) return undefined;

        while (true) {
            index = -1;

            for (i = 0, l = opts.tokenSeparators.length; i < l; i++) {
                separator = opts.tokenSeparators[i];
                index = input.indexOf(separator);
                if (index >= 0) break;
            }

            if (index < 0) break; // did not find any token separator in the input string, bail

            token = input.substring(0, index);
            input = input.substring(index + separator.length);

            if (token.length > 0) {
                token = opts.createSearchChoice.call(this, token, selection);
                if (token !== undefined && token !== null && opts.id(token) !== undefined && opts.id(token) !== null) {
                    dupe = false;
                    for (i = 0, l = selection.length; i < l; i++) {
                        if (equal(opts.id(token), opts.id(selection[i]))) {
                            dupe = true; break;
                        }
                    }

                    if (!dupe) selectCallback(token);
                }
            }
        }

        if (original!==input) return input;
    }

    /**
     * Creates a new class
     *
     * @param superClass
     * @param methods
     */
    function clazz(SuperClass, methods) {
        var constructor = function () {};
        constructor.prototype = new SuperClass;
        constructor.prototype.constructor = constructor;
        constructor.prototype.parent = SuperClass.prototype;
        constructor.prototype = $.extend(constructor.prototype, methods);
        return constructor;
    }

    AbstractSelect2 = clazz(Object, {

        // abstract
        bind: function (func) {
            var self = this;
            return function () {
                func.apply(self, arguments);
            };
        },

        // abstract
        init: function (opts) {
            var results, search, resultsSelector = ".select2-results";

            // prepare options
            this.opts = opts = this.prepareOpts(opts);

            this.id=opts.id;

            // destroy if called on an existing component
            if (opts.element.data("select2") !== undefined &&
                opts.element.data("select2") !== null) {
                opts.element.data("select2").destroy();
            }

            this.container = this.createContainer();

            this.containerId="s2id_"+(opts.element.attr("id") || "autogen"+nextUid());
            this.containerSelector="#"+this.containerId.replace(/([;&,\.\+\*\~':"\!\^#$%@\[\]\(\)=>\|])/g, '\\$1');
            this.container.attr("id", this.containerId);

            // cache the body so future lookups are cheap
            this.body = thunk(function() { return opts.element.closest("body"); });

            syncCssClasses(this.container, this.opts.element, this.opts.adaptContainerCssClass);

            this.container.attr("style", opts.element.attr("style"));
            this.container.css(evaluate(opts.containerCss));
            this.container.addClass(evaluate(opts.containerCssClass));

            this.elementTabIndex = this.opts.element.attr("tabindex");

            // swap container for the element
            this.opts.element
                .data("select2", this)
                .attr("tabindex", "-1")
                .before(this.container)
                .on("click.select2", killEvent); // do not leak click events

            this.container.data("select2", this);

            this.dropdown = this.container.find(".select2-drop");

            syncCssClasses(this.dropdown, this.opts.element, this.opts.adaptDropdownCssClass);

            this.dropdown.addClass(evaluate(opts.dropdownCssClass));
            this.dropdown.data("select2", this);
            this.dropdown.on("click", killEvent);

            this.results = results = this.container.find(resultsSelector);
            this.search = search = this.container.find("input.select2-input");

            this.queryCount = 0;
            this.resultsPage = 0;
            this.context = null;

            // initialize the container
            this.initContainer();

            this.container.on("click", killEvent);

            installFilteredMouseMove(this.results);
            this.dropdown.on("mousemove-filtered touchstart touchmove touchend", resultsSelector, this.bind(this.highlightUnderEvent));

            installDebouncedScroll(80, this.results);
            this.dropdown.on("scroll-debounced", resultsSelector, this.bind(this.loadMoreIfNeeded));

            // do not propagate change event from the search field out of the component
            $(this.container).on("change", ".select2-input", function(e) {e.stopPropagation();});
            $(this.dropdown).on("change", ".select2-input", function(e) {e.stopPropagation();});

            // if jquery.mousewheel plugin is installed we can prevent out-of-bounds scrolling of results via mousewheel
            if ($.fn.mousewheel) {
                results.mousewheel(function (e, delta, deltaX, deltaY) {
                    var top = results.scrollTop();
                    if (deltaY > 0 && top - deltaY <= 0) {
                        results.scrollTop(0);
                        killEvent(e);
                    } else if (deltaY < 0 && results.get(0).scrollHeight - results.scrollTop() + deltaY <= results.height()) {
                        results.scrollTop(results.get(0).scrollHeight - results.height());
                        killEvent(e);
                    }
                });
            }

            installKeyUpChangeEvent(search);
            search.on("keyup-change input paste", this.bind(this.updateResults));
            search.on("focus", function () { search.addClass("select2-focused"); });
            search.on("blur", function () { search.removeClass("select2-focused");});

            this.dropdown.on("mouseup", resultsSelector, this.bind(function (e) {
                if ($(e.target).closest(".select2-result-selectable").length > 0) {
                    this.highlightUnderEvent(e);
                    this.selectHighlighted(e);
                }
            }));

            // trap all mouse events from leaving the dropdown. sometimes there may be a modal that is listening
            // for mouse events outside of itself so it can close itself. since the dropdown is now outside the select2's
            // dom it will trigger the popup close, which is not what we want
            this.dropdown.on("click mouseup mousedown", function (e) { e.stopPropagation(); });

            if ($.isFunction(this.opts.initSelection)) {
                // initialize selection based on the current value of the source element
                this.initSelection();

                // if the user has provided a function that can set selection based on the value of the source element
                // we monitor the change event on the element and trigger it, allowing for two way synchronization
                this.monitorSource();
            }

            if (opts.maximumInputLength !== null) {
                this.search.attr("maxlength", opts.maximumInputLength);
            }

            var disabled = opts.element.prop("disabled");
            if (disabled === undefined) disabled = false;
            this.enable(!disabled);

            var readonly = opts.element.prop("readonly");
            if (readonly === undefined) readonly = false;
            this.readonly(readonly);

            // Calculate size of scrollbar
            scrollBarDimensions = scrollBarDimensions || measureScrollbar();

            this.autofocus = opts.element.prop("autofocus");
            opts.element.prop("autofocus", false);
            if (this.autofocus) this.focus();

            this.nextSearchTerm = undefined;
        },

        // abstract
        destroy: function () {
            var element=this.opts.element, select2 = element.data("select2");

            this.close();

            if (this.propertyObserver) { delete this.propertyObserver; this.propertyObserver = null; }

            if (select2 !== undefined) {
                select2.container.remove();
                select2.dropdown.remove();
                element
                    .removeClass("select2-offscreen")
                    .removeData("select2")
                    .off(".select2")
                    .prop("autofocus", this.autofocus || false);
                if (this.elementTabIndex) {
                    element.attr({tabindex: this.elementTabIndex});
                } else {
                    element.removeAttr("tabindex");
                }
                element.show();
            }
        },

        // abstract
        optionToData: function(element) {
            if (element.is("option")) {
                return {
                    id:element.prop("value"),
                    text:element.text(),
                    element: element.get(),
                    css: element.attr("class"),
                    disabled: element.prop("disabled"),
                    locked: equal(element.attr("locked"), "locked") || equal(element.data("locked"), true)
                };
            } else if (element.is("optgroup")) {
                return {
                    text:element.attr("label"),
                    children:[],
                    element: element.get(),
                    css: element.attr("class")
                };
            }
        },

        // abstract
        prepareOpts: function (opts) {
            var element, select, idKey, ajaxUrl, self = this;

            element = opts.element;

            if (element.get(0).tagName.toLowerCase() === "select") {
                this.select = select = opts.element;
            }

            if (select) {
                // these options are not allowed when attached to a select because they are picked up off the element itself
                $.each(["id", "multiple", "ajax", "query", "createSearchChoice", "initSelection", "data", "tags"], function () {
                    if (this in opts) {
                        throw new Error("Option '" + this + "' is not allowed for Select2 when attached to a <select> element.");
                    }
                });
            }

            opts = $.extend({}, {
                populateResults: function(container, results, query) {
                    var populate, id=this.opts.id;

                    populate=function(results, container, depth) {

                        var i, l, result, selectable, disabled, compound, node, label, innerContainer, formatted;

                        results = opts.sortResults(results, container, query);

                        for (i = 0, l = results.length; i < l; i = i + 1) {

                            result=results[i];

                            disabled = (result.disabled === true);
                            selectable = (!disabled) && (id(result) !== undefined);

                            compound=result.children && result.children.length > 0;

                            node=$("<li></li>");
                            node.addClass("select2-results-dept-"+depth);
                            node.addClass("select2-result");
                            node.addClass(selectable ? "select2-result-selectable" : "select2-result-unselectable");
                            if (disabled) { node.addClass("select2-disabled"); }
                            if (compound) { node.addClass("select2-result-with-children"); }
                            node.addClass(self.opts.formatResultCssClass(result));

                            label=$(document.createElement("div"));
                            label.addClass("select2-result-label");

                            formatted=opts.formatResult(result, label, query, self.opts.escapeMarkup);
                            if (formatted!==undefined) {
                                label.html(formatted);
                            }

                            node.append(label);

                            if (compound) {

                                innerContainer=$("<ul></ul>");
                                innerContainer.addClass("select2-result-sub");
                                populate(result.children, innerContainer, depth+1);
                                node.append(innerContainer);
                            }

                            node.data("select2-data", result);
                            container.append(node);
                        }
                    };

                    populate(results, container, 0);
                }
            }, $.fn.select2.defaults, opts);

            if (typeof(opts.id) !== "function") {
                idKey = opts.id;
                opts.id = function (e) { return e[idKey]; };
            }

            if ($.isArray(opts.element.data("select2Tags"))) {
                if ("tags" in opts) {
                    throw "tags specified as both an attribute 'data-select2-tags' and in options of Select2 " + opts.element.attr("id");
                }
                opts.tags=opts.element.data("select2Tags");
            }

            if (select) {
                opts.query = this.bind(function (query) {
                    var data = { results: [], more: false },
                        term = query.term,
                        children, placeholderOption, process;

                    process=function(element, collection) {
                        var group;
                        if (element.is("option")) {
                            if (query.matcher(term, element.text(), element)) {
                                collection.push(self.optionToData(element));
                            }
                        } else if (element.is("optgroup")) {
                            group=self.optionToData(element);
                            element.children().each2(function(i, elm) { process(elm, group.children); });
                            if (group.children.length>0) {
                                collection.push(group);
                            }
                        }
                    };

                    children=element.children();

                    // ignore the placeholder option if there is one
                    if (this.getPlaceholder() !== undefined && children.length > 0) {
                        placeholderOption = this.getPlaceholderOption();
                        if (placeholderOption) {
                            children=children.not(placeholderOption);
                        }
                    }

                    children.each2(function(i, elm) { process(elm, data.results); });

                    query.callback(data);
                });
                // this is needed because inside val() we construct choices from options and there id is hardcoded
                opts.id=function(e) { return e.id; };
                opts.formatResultCssClass = function(data) { return data.css; };
            } else {
                if (!("query" in opts)) {

                    if ("ajax" in opts) {
                        ajaxUrl = opts.element.data("ajax-url");
                        if (ajaxUrl && ajaxUrl.length > 0) {
                            opts.ajax.url = ajaxUrl;
                        }
                        opts.query = ajax.call(opts.element, opts.ajax);
                    } else if ("data" in opts) {
                        opts.query = local(opts.data);
                    } else if ("tags" in opts) {
                        opts.query = tags(opts.tags);
                        if (opts.createSearchChoice === undefined) {
                            opts.createSearchChoice = function (term) { return {id: $.trim(term), text: $.trim(term)}; };
                        }
                        if (opts.initSelection === undefined) {
                            opts.initSelection = function (element, callback) {
                                var data = [];
                                $(splitVal(element.val(), opts.separator)).each(function () {
                                    var obj = { id: this, text: this },
                                        tags = opts.tags;
                                    if ($.isFunction(tags)) tags=tags();
                                    $(tags).each(function() { if (equal(this.id, obj.id)) { obj = this; return false; } });
                                    data.push(obj);
                                });

                                callback(data);
                            };
                        }
                    }
                }
            }
            if (typeof(opts.query) !== "function") {
                throw "query function not defined for Select2 " + opts.element.attr("id");
            }

            return opts;
        },

        /**
         * Monitor the original element for changes and update select2 accordingly
         */
        // abstract
        monitorSource: function () {
            var el = this.opts.element, sync, observer;

            el.on("change.select2", this.bind(function (e) {
                if (this.opts.element.data("select2-change-triggered") !== true) {
                    this.initSelection();
                }
            }));

            sync = this.bind(function () {

                // sync enabled state
                var disabled = el.prop("disabled");
                if (disabled === undefined) disabled = false;
                this.enable(!disabled);

                var readonly = el.prop("readonly");
                if (readonly === undefined) readonly = false;
                this.readonly(readonly);

                syncCssClasses(this.container, this.opts.element, this.opts.adaptContainerCssClass);
                this.container.addClass(evaluate(this.opts.containerCssClass));

                syncCssClasses(this.dropdown, this.opts.element, this.opts.adaptDropdownCssClass);
                this.dropdown.addClass(evaluate(this.opts.dropdownCssClass));

            });

            // IE8-10
            el.on("propertychange.select2", sync);

            // hold onto a reference of the callback to work around a chromium bug
            if (this.mutationCallback === undefined) {
                this.mutationCallback = function (mutations) {
                    mutations.forEach(sync);
                }
            }

            // safari, chrome, firefox, IE11
            observer = window.MutationObserver || window.WebKitMutationObserver|| window.MozMutationObserver;
            if (observer !== undefined) {
                if (this.propertyObserver) { delete this.propertyObserver; this.propertyObserver = null; }
                this.propertyObserver = new observer(this.mutationCallback);
                this.propertyObserver.observe(el.get(0), { attributes:true, subtree:false });
            }
        },

        // abstract
        triggerSelect: function(data) {
            var evt = $.Event("select2-selecting", { val: this.id(data), object: data });
            this.opts.element.trigger(evt);
            return !evt.isDefaultPrevented();
        },

        /**
         * Triggers the change event on the source element
         */
        // abstract
        triggerChange: function (details) {

            details = details || {};
            details= $.extend({}, details, { type: "change", val: this.val() });
            // prevents recursive triggering
            this.opts.element.data("select2-change-triggered", true);
            this.opts.element.trigger(details);
            this.opts.element.data("select2-change-triggered", false);

            // some validation frameworks ignore the change event and listen instead to keyup, click for selects
            // so here we trigger the click event manually
            this.opts.element.click();

            // ValidationEngine ignorea the change event and listens instead to blur
            // so here we trigger the blur event manually if so desired
            if (this.opts.blurOnChange)
                this.opts.element.blur();
        },

        //abstract
        isInterfaceEnabled: function()
        {
            return this.enabledInterface === true;
        },

        // abstract
        enableInterface: function() {
            var enabled = this._enabled && !this._readonly,
                disabled = !enabled;

            if (enabled === this.enabledInterface) return false;

            this.container.toggleClass("select2-container-disabled", disabled);
            this.close();
            this.enabledInterface = enabled;

            return true;
        },

        // abstract
        enable: function(enabled) {
            if (enabled === undefined) enabled = true;
            if (this._enabled === enabled) return;
            this._enabled = enabled;

            this.opts.element.prop("disabled", !enabled);
            this.enableInterface();
        },

        // abstract
        disable: function() {
            this.enable(false);
        },

        // abstract
        readonly: function(enabled) {
            if (enabled === undefined) enabled = false;
            if (this._readonly === enabled) return false;
            this._readonly = enabled;

            this.opts.element.prop("readonly", enabled);
            this.enableInterface();
            return true;
        },

        // abstract
        opened: function () {
            return this.container.hasClass("select2-dropdown-open");
        },

        // abstract
        positionDropdown: function() {
            var $dropdown = this.dropdown,
                offset = this.container.offset(),
                height = this.container.outerHeight(false),
                width = this.container.outerWidth(false),
                dropHeight = $dropdown.outerHeight(false),
                $window = $(window),
                windowWidth = $window.width(),
                windowHeight = $window.height(),
                viewPortRight = $window.scrollLeft() + windowWidth,
                viewportBottom = $window.scrollTop() + windowHeight,
                dropTop = offset.top + height,
                dropLeft = offset.left,
                enoughRoomBelow = dropTop + dropHeight <= viewportBottom,
                enoughRoomAbove = (offset.top - dropHeight) >= this.body().scrollTop(),
                dropWidth = $dropdown.outerWidth(false),
                enoughRoomOnRight = dropLeft + dropWidth <= viewPortRight,
                aboveNow = $dropdown.hasClass("select2-drop-above"),
                bodyOffset,
                above,
                changeDirection,
                css,
                resultsListNode;

            // always prefer the current above/below alignment, unless there is not enough room
            if (aboveNow) {
                above = true;
                if (!enoughRoomAbove && enoughRoomBelow) {
                    changeDirection = true;
                    above = false;
                }
            } else {
                above = false;
                if (!enoughRoomBelow && enoughRoomAbove) {
                    changeDirection = true;
                    above = true;
                }
            }

            //if we are changing direction we need to get positions when dropdown is hidden;
            if (changeDirection) {
                $dropdown.hide();
                offset = this.container.offset();
                height = this.container.outerHeight(false);
                width = this.container.outerWidth(false);
                dropHeight = $dropdown.outerHeight(false);
                viewPortRight = $window.scrollLeft() + windowWidth;
                viewportBottom = $window.scrollTop() + windowHeight;
                dropTop = offset.top + height;
                dropLeft = offset.left;
                dropWidth = $dropdown.outerWidth(false);
                enoughRoomOnRight = dropLeft + dropWidth <= viewPortRight;
                $dropdown.show();
            }

            if (this.opts.dropdownAutoWidth) {
                resultsListNode = $('.select2-results', $dropdown)[0];
                $dropdown.addClass('select2-drop-auto-width');
                $dropdown.css('width', '');
                // Add scrollbar width to dropdown if vertical scrollbar is present
                dropWidth = $dropdown.outerWidth(false) + (resultsListNode.scrollHeight === resultsListNode.clientHeight ? 0 : scrollBarDimensions.width);
                dropWidth > width ? width = dropWidth : dropWidth = width;
                enoughRoomOnRight = dropLeft + dropWidth <= viewPortRight;
            }
            else {
                this.container.removeClass('select2-drop-auto-width');
            }

            //console.log("below/ droptop:", dropTop, "dropHeight", dropHeight, "sum", (dropTop+dropHeight)+" viewport bottom", viewportBottom, "enough?", enoughRoomBelow);
            //console.log("above/ offset.top", offset.top, "dropHeight", dropHeight, "top", (offset.top-dropHeight), "scrollTop", this.body().scrollTop(), "enough?", enoughRoomAbove);

            // fix positioning when body has an offset and is not position: static
            if (this.body().css('position') !== 'static') {
                bodyOffset = this.body().offset();
                dropTop -= bodyOffset.top;
                dropLeft -= bodyOffset.left;
            }

            if (!enoughRoomOnRight) {
                dropLeft = offset.left + width - dropWidth;
            }

            css =  {
                left: dropLeft,
                width: width
            };

            if (above) {
                css.bottom = windowHeight - offset.top;
                css.top = 'auto';
                this.container.addClass("select2-drop-above");
                $dropdown.addClass("select2-drop-above");
            }
            else {
                css.top = dropTop;
                css.bottom = 'auto';
                this.container.removeClass("select2-drop-above");
                $dropdown.removeClass("select2-drop-above");
            }
            css = $.extend(css, evaluate(this.opts.dropdownCss));

            $dropdown.css(css);
        },

        // abstract
        shouldOpen: function() {
            var event;

            if (this.opened()) return false;

            if (this._enabled === false || this._readonly === true) return false;

            event = $.Event("select2-opening");
            this.opts.element.trigger(event);
            return !event.isDefaultPrevented();
        },

        // abstract
        clearDropdownAlignmentPreference: function() {
            // clear the classes used to figure out the preference of where the dropdown should be opened
            this.container.removeClass("select2-drop-above");
            this.dropdown.removeClass("select2-drop-above");
        },

        /**
         * Opens the dropdown
         *
         * @return {Boolean} whether or not dropdown was opened. This method will return false if, for example,
         * the dropdown is already open, or if the 'open' event listener on the element called preventDefault().
         */
        // abstract
        open: function () {

            if (!this.shouldOpen()) return false;

            this.opening();

            return true;
        },

        /**
         * Performs the opening of the dropdown
         */
        // abstract
        opening: function() {
            var cid = this.containerId,
                scroll = "scroll." + cid,
                resize = "resize."+cid,
                orient = "orientationchange."+cid,
                mask;

            this.container.addClass("select2-dropdown-open").addClass("select2-container-active");

            this.clearDropdownAlignmentPreference();

            if(this.dropdown[0] !== this.body().children().last()[0]) {
                this.dropdown.detach().appendTo(this.body());
            }

            // create the dropdown mask if doesnt already exist
            mask = $("#select2-drop-mask");
            if (mask.length == 0) {
                mask = $(document.createElement("div"));
                mask.attr("id","select2-drop-mask").attr("class","select2-drop-mask");
                mask.hide();
                mask.appendTo(this.body());
                mask.on("mousedown touchstart click", function (e) {
                    var dropdown = $("#select2-drop"), self;
                    if (dropdown.length > 0) {
                        self=dropdown.data("select2");
                        if (self.opts.selectOnBlur) {
                            self.selectHighlighted({noFocus: true});
                        }
                        self.close({focus:true});
                        e.preventDefault();
                        e.stopPropagation();
                    }
                });
            }

            // ensure the mask is always right before the dropdown
            if (this.dropdown.prev()[0] !== mask[0]) {
                this.dropdown.before(mask);
            }

            // move the global id to the correct dropdown
            $("#select2-drop").removeAttr("id");
            this.dropdown.attr("id", "select2-drop");

            // show the elements
            mask.show();

            this.positionDropdown();
            this.dropdown.show();
            this.positionDropdown();

            this.dropdown.addClass("select2-drop-active");

            // attach listeners to events that can change the position of the container and thus require
            // the position of the dropdown to be updated as well so it does not come unglued from the container
            var that = this;
            this.container.parents().add(window).each(function () {
                $(this).on(resize+" "+scroll+" "+orient, function (e) {
                    that.positionDropdown();
                });
            });


        },

        // abstract
        close: function () {
            if (!this.opened()) return;

            var cid = this.containerId,
                scroll = "scroll." + cid,
                resize = "resize."+cid,
                orient = "orientationchange."+cid;

            // unbind event listeners
            this.container.parents().add(window).each(function () { $(this).off(scroll).off(resize).off(orient); });

            this.clearDropdownAlignmentPreference();

            $("#select2-drop-mask").hide();
            this.dropdown.removeAttr("id"); // only the active dropdown has the select2-drop id
            this.dropdown.hide();
            this.container.removeClass("select2-dropdown-open").removeClass("select2-container-active");
            this.results.empty();


            this.clearSearch();
            this.search.removeClass("select2-active");
            this.opts.element.trigger($.Event("select2-close"));
        },

        /**
         * Opens control, sets input value, and updates results.
         */
        // abstract
        externalSearch: function (term) {
            this.open();
            this.search.val(term);
            this.updateResults(false);
        },

        // abstract
        clearSearch: function () {

        },

        //abstract
        getMaximumSelectionSize: function() {
            return evaluate(this.opts.maximumSelectionSize);
        },

        // abstract
        ensureHighlightVisible: function () {
            var results = this.results, children, index, child, hb, rb, y, more;

            index = this.highlight();

            if (index < 0) return;

            if (index == 0) {

                // if the first element is highlighted scroll all the way to the top,
                // that way any unselectable headers above it will also be scrolled
                // into view

                results.scrollTop(0);
                return;
            }

            children = this.findHighlightableChoices().find('.select2-result-label');

            child = $(children[index]);

            hb = child.offset().top + child.outerHeight(true);

            // if this is the last child lets also make sure select2-more-results is visible
            if (index === children.length - 1) {
                more = results.find("li.select2-more-results");
                if (more.length > 0) {
                    hb = more.offset().top + more.outerHeight(true);
                }
            }

            rb = results.offset().top + results.outerHeight(true);
            if (hb > rb) {
                results.scrollTop(results.scrollTop() + (hb - rb));
            }
            y = child.offset().top - results.offset().top;

            // make sure the top of the element is visible
            if (y < 0 && child.css('display') != 'none' ) {
                results.scrollTop(results.scrollTop() + y); // y is negative
            }
        },

        // abstract
        findHighlightableChoices: function() {
            return this.results.find(".select2-result-selectable:not(.select2-disabled, .select2-selected)");
        },

        // abstract
        moveHighlight: function (delta) {
            var choices = this.findHighlightableChoices(),
                index = this.highlight();

            while (index > -1 && index < choices.length) {
                index += delta;
                var choice = $(choices[index]);
                if (choice.hasClass("select2-result-selectable") && !choice.hasClass("select2-disabled") && !choice.hasClass("select2-selected")) {
                    this.highlight(index);
                    break;
                }
            }
        },

        // abstract
        highlight: function (index) {
            var choices = this.findHighlightableChoices(),
                choice,
                data;

            if (arguments.length === 0) {
                return indexOf(choices.filter(".select2-highlighted")[0], choices.get());
            }

            if (index >= choices.length) index = choices.length - 1;
            if (index < 0) index = 0;

            this.removeHighlight();

            choice = $(choices[index]);
            choice.addClass("select2-highlighted");

            this.ensureHighlightVisible();

            data = choice.data("select2-data");
            if (data) {
                this.opts.element.trigger({ type: "select2-highlight", val: this.id(data), choice: data });
            }
        },

        removeHighlight: function() {
            this.results.find(".select2-highlighted").removeClass("select2-highlighted");
        },

        // abstract
        countSelectableResults: function() {
            return this.findHighlightableChoices().length;
        },

        // abstract
        highlightUnderEvent: function (event) {
            var el = $(event.target).closest(".select2-result-selectable");
            if (el.length > 0 && !el.is(".select2-highlighted")) {
                var choices = this.findHighlightableChoices();
                this.highlight(choices.index(el));
            } else if (el.length == 0) {
                // if we are over an unselectable item remove all highlights
                this.removeHighlight();
            }
        },

        // abstract
        loadMoreIfNeeded: function () {
            var results = this.results,
                more = results.find("li.select2-more-results"),
                below, // pixels the element is below the scroll fold, below==0 is when the element is starting to be visible
                page = this.resultsPage + 1,
                self=this,
                term=this.search.val(),
                context=this.context;

            if (more.length === 0) return;
            below = more.offset().top - results.offset().top - results.height();

            if (below <= this.opts.loadMorePadding) {
                more.addClass("select2-active");
                this.opts.query({
                    element: this.opts.element,
                    term: term,
                    page: page,
                    context: context,
                    matcher: this.opts.matcher,
                    callback: this.bind(function (data) {

                        // ignore a response if the select2 has been closed before it was received
                        if (!self.opened()) return;


                        self.opts.populateResults.call(this, results, data.results, {term: term, page: page, context:context});
                        self.postprocessResults(data, false, false);

                        if (data.more===true) {
                            more.detach().appendTo(results).text(self.opts.formatLoadMore(page+1));
                            window.setTimeout(function() { self.loadMoreIfNeeded(); }, 10);
                        } else {
                            more.remove();
                        }
                        self.positionDropdown();
                        self.resultsPage = page;
                        self.context = data.context;
                        this.opts.element.trigger({ type: "select2-loaded", items: data });
                    })});
            }
        },

        /**
         * Default tokenizer function which does nothing
         */
        tokenize: function() {

        },

        /**
         * @param initial whether or not this is the call to this method right after the dropdown has been opened
         */
        // abstract
        updateResults: function (initial) {
            var search = this.search,
                results = this.results,
                opts = this.opts,
                data,
                self = this,
                input,
                term = search.val(),
                lastTerm = $.data(this.container, "select2-last-term"),
            // sequence number used to drop out-of-order responses
                queryNumber;

            // prevent duplicate queries against the same term
            if (initial !== true && lastTerm && equal(term, lastTerm)) return;

            $.data(this.container, "select2-last-term", term);

            // if the search is currently hidden we do not alter the results
            if (initial !== true && (this.showSearchInput === false || !this.opened())) {
                return;
            }

            function postRender() {
                search.removeClass("select2-active");
                self.positionDropdown();
            }

            function render(html) {
                results.html(html);
                postRender();
            }

            queryNumber = ++this.queryCount;

            var maxSelSize = this.getMaximumSelectionSize();
            if (maxSelSize >=1) {
                data = this.data();
                if ($.isArray(data) && data.length >= maxSelSize && checkFormatter(opts.formatSelectionTooBig, "formatSelectionTooBig")) {
                    render("<li class='select2-selection-limit'>" + opts.formatSelectionTooBig(maxSelSize) + "</li>");
                    return;
                }
            }

            if (search.val().length < opts.minimumInputLength) {
                if (checkFormatter(opts.formatInputTooShort, "formatInputTooShort")) {
                    render("<li class='select2-no-results'>" + opts.formatInputTooShort(search.val(), opts.minimumInputLength) + "</li>");
                } else {
                    render("");
                }
                if (initial && this.showSearch) this.showSearch(true);
                return;
            }

            if (opts.maximumInputLength && search.val().length > opts.maximumInputLength) {
                if (checkFormatter(opts.formatInputTooLong, "formatInputTooLong")) {
                    render("<li class='select2-no-results'>" + opts.formatInputTooLong(search.val(), opts.maximumInputLength) + "</li>");
                } else {
                    render("");
                }
                return;
            }

            if (opts.formatSearching && this.findHighlightableChoices().length === 0) {
                render("<li class='select2-searching'>" + opts.formatSearching() + "</li>");
            }

            search.addClass("select2-active");

            this.removeHighlight();

            // give the tokenizer a chance to pre-process the input
            input = this.tokenize();
            if (input != undefined && input != null) {
                search.val(input);
            }

            this.resultsPage = 1;

            opts.query({
                element: opts.element,
                term: search.val(),
                page: this.resultsPage,
                context: null,
                matcher: opts.matcher,
                callback: this.bind(function (data) {
                    var def; // default choice

                    // ignore old responses
                    if (queryNumber != this.queryCount) {
                        return;
                    }

                    // ignore a response if the select2 has been closed before it was received
                    if (!this.opened()) {
                        this.search.removeClass("select2-active");
                        return;
                    }

                    // save context, if any
                    this.context = (data.context===undefined) ? null : data.context;
                    // create a default choice and prepend it to the list
                    if (this.opts.createSearchChoice && search.val() !== "") {
                        def = this.opts.createSearchChoice.call(self, search.val(), data.results);
                        if (def !== undefined && def !== null && self.id(def) !== undefined && self.id(def) !== null) {
                            if ($(data.results).filter(
                                function () {
                                    return equal(self.id(this), self.id(def));
                                }).length === 0) {
                                data.results.unshift(def);
                            }
                        }
                    }

                    if (data.results.length === 0 && checkFormatter(opts.formatNoMatches, "formatNoMatches")) {
                        render("<li class='select2-no-results'>" + opts.formatNoMatches(search.val()) + "</li>");
                        return;
                    }

                    results.empty();
                    self.opts.populateResults.call(this, results, data.results, {term: search.val(), page: this.resultsPage, context:null});

                    if (data.more === true && checkFormatter(opts.formatLoadMore, "formatLoadMore")) {
                        results.append("<li class='select2-more-results'>" + self.opts.escapeMarkup(opts.formatLoadMore(this.resultsPage)) + "</li>");
                        window.setTimeout(function() { self.loadMoreIfNeeded(); }, 10);
                    }

                    this.postprocessResults(data, initial);

                    postRender();

                    this.opts.element.trigger({ type: "select2-loaded", items: data });
                })});
        },

        // abstract
        cancel: function () {
            this.close();
        },

        // abstract
        blur: function () {
            // if selectOnBlur == true, select the currently highlighted option
            if (this.opts.selectOnBlur)
                this.selectHighlighted({noFocus: true});

            this.close();
            this.container.removeClass("select2-container-active");
            // synonymous to .is(':focus'), which is available in jquery >= 1.6
            if (this.search[0] === document.activeElement) { this.search.blur(); }
            this.clearSearch();
            this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus");
        },

        // abstract
        focusSearch: function () {
            focus(this.search);
        },

        // abstract
        selectHighlighted: function (options) {
            var index=this.highlight(),
                highlighted=this.results.find(".select2-highlighted"),
                data = highlighted.closest('.select2-result').data("select2-data");

            if (data) {
                this.highlight(index);
                this.onSelect(data, options);
            } else if (options && options.noFocus) {
                this.close();
            }
        },

        // abstract
        getPlaceholder: function () {
            var placeholderOption;
            return this.opts.element.attr("placeholder") ||
                this.opts.element.attr("data-placeholder") || // jquery 1.4 compat
                this.opts.element.data("placeholder") ||
                this.opts.placeholder ||
                ((placeholderOption = this.getPlaceholderOption()) !== undefined ? placeholderOption.text() : undefined);
        },

        // abstract
        getPlaceholderOption: function() {
            if (this.select) {
                var firstOption = this.select.children('option').first();
                if (this.opts.placeholderOption !== undefined ) {
                    //Determine the placeholder option based on the specified placeholderOption setting
                    return (this.opts.placeholderOption === "first" && firstOption) ||
                        (typeof this.opts.placeholderOption === "function" && this.opts.placeholderOption(this.select));
                } else if (firstOption.text() === "" && firstOption.val() === "") {
                    //No explicit placeholder option specified, use the first if it's blank
                    return firstOption;
                }
            }
        },

        /**
         * Get the desired width for the container element.  This is
         * derived first from option `width` passed to select2, then
         * the inline 'style' on the original element, and finally
         * falls back to the jQuery calculated element width.
         */
        // abstract
        initContainerWidth: function () {
            function resolveContainerWidth() {
                var style, attrs, matches, i, l, attr;

                if (this.opts.width === "off") {
                    return null;
                } else if (this.opts.width === "element"){
                    return this.opts.element.outerWidth(false) === 0 ? 'auto' : this.opts.element.outerWidth(false) + 'px';
                } else if (this.opts.width === "copy" || this.opts.width === "resolve") {
                    // check if there is inline style on the element that contains width
                    style = this.opts.element.attr('style');
                    if (style !== undefined) {
                        attrs = style.split(';');
                        for (i = 0, l = attrs.length; i < l; i = i + 1) {
                            attr = attrs[i].replace(/\s/g, '');
                            matches = attr.match(/^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i);
                            if (matches !== null && matches.length >= 1)
                                return matches[1];
                        }
                    }

                    if (this.opts.width === "resolve") {
                        // next check if css('width') can resolve a width that is percent based, this is sometimes possible
                        // when attached to input type=hidden or elements hidden via css
                        style = this.opts.element.css('width');
                        if (style.indexOf("%") > 0) return style;

                        // finally, fallback on the calculated width of the element
                        return (this.opts.element.outerWidth(false) === 0 ? 'auto' : this.opts.element.outerWidth(false) + 'px');
                    }

                    return null;
                } else if ($.isFunction(this.opts.width)) {
                    return this.opts.width();
                } else {
                    return this.opts.width;
                }
            };

            var width = resolveContainerWidth.call(this);
            if (width !== null) {
                this.container.css("width", width);
            }
        }
    });

    SingleSelect2 = clazz(AbstractSelect2, {

        // single

        createContainer: function () {
            var container = $(document.createElement("div")).attr({
                "class": "select2-container"
            }).html([
                    "<a href='javascript:void(0)' onclick='return false;' class='select2-choice' tabindex='-1'>",
                    "   <span class='select2-chosen'>&nbsp;</span><abbr class='select2-search-choice-close'></abbr>",
                    "   <span class='select2-arrow'><b></b></span>",
                    "</a>",
                    "<input class='select2-focusser select2-offscreen' type='text'/>",
                    "<div class='select2-drop select2-display-none'>",
                    "   <div class='select2-search'>",
                    "       <input type='text' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false' class='select2-input'/>",
                    "   </div>",
                    "   <ul class='select2-results'>",
                    "   </ul>",
                    "</div>"].join(""));
            return container;
        },

        // single
        enableInterface: function() {
            if (this.parent.enableInterface.apply(this, arguments)) {
                this.focusser.prop("disabled", !this.isInterfaceEnabled());
            }
        },

        // single
        opening: function () {
            var el, range, len;

            if (this.opts.minimumResultsForSearch >= 0) {
                this.showSearch(true);
            }

            this.parent.opening.apply(this, arguments);

            if (this.showSearchInput !== false) {
                // IE appends focusser.val() at the end of field :/ so we manually insert it at the beginning using a range
                // all other browsers handle this just fine

                this.search.val(this.focusser.val());
            }
            this.search.focus();
            // move the cursor to the end after focussing, otherwise it will be at the beginning and
            // new text will appear *before* focusser.val()
            el = this.search.get(0);
            if (el.createTextRange) {
                range = el.createTextRange();
                range.collapse(false);
                range.select();
            } else if (el.setSelectionRange) {
                len = this.search.val().length;
                el.setSelectionRange(len, len);
            }

            // initializes search's value with nextSearchTerm (if defined by user)
            // ignore nextSearchTerm if the dropdown is opened by the user pressing a letter
            if(this.search.val() === "") {
                if(this.nextSearchTerm != undefined){
                    this.search.val(this.nextSearchTerm);
                    this.search.select();
                }
            }

            this.focusser.prop("disabled", true).val("");
            this.updateResults(true);
            this.opts.element.trigger($.Event("select2-open"));
        },

        // single
        close: function (params) {
            if (!this.opened()) return;
            this.parent.close.apply(this, arguments);

            params = params || {focus: true};
            this.focusser.removeAttr("disabled");

            if (params.focus) {
                this.focusser.focus();
            }
        },

        // single
        focus: function () {
            if (this.opened()) {
                this.close();
            } else {
                this.focusser.removeAttr("disabled");
                this.focusser.focus();
            }
        },

        // single
        isFocused: function () {
            return this.container.hasClass("select2-container-active");
        },

        // single
        cancel: function () {
            this.parent.cancel.apply(this, arguments);
            this.focusser.removeAttr("disabled");
            this.focusser.focus();
        },

        // single
        destroy: function() {
            $("label[for='" + this.focusser.attr('id') + "']")
                .attr('for', this.opts.element.attr("id"));
            this.parent.destroy.apply(this, arguments);
        },

        // single
        initContainer: function () {

            var selection,
                container = this.container,
                dropdown = this.dropdown;

            if (this.opts.minimumResultsForSearch < 0) {
                this.showSearch(false);
            } else {
                this.showSearch(true);
            }

            this.selection = selection = container.find(".select2-choice");

            this.focusser = container.find(".select2-focusser");

            // rewrite labels from original element to focusser
            this.focusser.attr("id", "s2id_autogen"+nextUid());

            $("label[for='" + this.opts.element.attr("id") + "']")
                .attr('for', this.focusser.attr('id'));

            this.focusser.attr("tabindex", this.elementTabIndex);

            this.search.on("keydown", this.bind(function (e) {
                if (!this.isInterfaceEnabled()) return;

                if (e.which === KEY.PAGE_UP || e.which === KEY.PAGE_DOWN) {
                    // prevent the page from scrolling
                    killEvent(e);
                    return;
                }

                switch (e.which) {
                    case KEY.UP:
                    case KEY.DOWN:
                        this.moveHighlight((e.which === KEY.UP) ? -1 : 1);
                        killEvent(e);
                        return;
                    case KEY.ENTER:
                        this.selectHighlighted();
                        killEvent(e);
                        return;
                    case KEY.TAB:
                        this.selectHighlighted({noFocus: true});
                        return;
                    case KEY.ESC:
                        this.cancel(e);
                        killEvent(e);
                        return;
                }
            }));

            this.search.on("blur", this.bind(function(e) {
                // a workaround for chrome to keep the search field focussed when the scroll bar is used to scroll the dropdown.
                // without this the search field loses focus which is annoying
                if (document.activeElement === this.body().get(0)) {
                    window.setTimeout(this.bind(function() {
                        this.search.focus();
                    }), 0);
                }
            }));

            this.focusser.on("keydown", this.bind(function (e) {
                if (!this.isInterfaceEnabled()) return;

                if (e.which === KEY.TAB || KEY.isControl(e) || KEY.isFunctionKey(e) || e.which === KEY.ESC) {
                    return;
                }

                if (this.opts.openOnEnter === false && e.which === KEY.ENTER) {
                    killEvent(e);
                    return;
                }

                if (e.which == KEY.DOWN || e.which == KEY.UP
                    || (e.which == KEY.ENTER && this.opts.openOnEnter)) {

                    if (e.altKey || e.ctrlKey || e.shiftKey || e.metaKey) return;

                    this.open();
                    killEvent(e);
                    return;
                }

                if (e.which == KEY.DELETE || e.which == KEY.BACKSPACE) {
                    if (this.opts.allowClear) {
                        this.clear();
                    }
                    killEvent(e);
                    return;
                }
            }));


            installKeyUpChangeEvent(this.focusser);
            this.focusser.on("keyup-change input", this.bind(function(e) {
                if (this.opts.minimumResultsForSearch >= 0) {
                    e.stopPropagation();
                    if (this.opened()) return;
                    this.open();
                }
            }));

            selection.on("mousedown", "abbr", this.bind(function (e) {
                if (!this.isInterfaceEnabled()) return;
                this.clear();
                killEventImmediately(e);
                this.close();
                this.selection.focus();
            }));

            selection.on("mousedown", this.bind(function (e) {

                if (!this.container.hasClass("select2-container-active")) {
                    this.opts.element.trigger($.Event("select2-focus"));
                }

                if (this.opened()) {
                    this.close();
                } else if (this.isInterfaceEnabled()) {
                    this.open();
                }

                killEvent(e);
            }));

            dropdown.on("mousedown", this.bind(function() { this.search.focus(); }));

            selection.on("focus", this.bind(function(e) {
                killEvent(e);
            }));

            this.focusser.on("focus", this.bind(function(){
                    if (!this.container.hasClass("select2-container-active")) {
                        this.opts.element.trigger($.Event("select2-focus"));
                    }
                    this.container.addClass("select2-container-active");
                })).on("blur", this.bind(function() {
                    if (!this.opened()) {
                        this.container.removeClass("select2-container-active");
                        this.opts.element.trigger($.Event("select2-blur"));
                    }
                }));
            this.search.on("focus", this.bind(function(){
                if (!this.container.hasClass("select2-container-active")) {
                    this.opts.element.trigger($.Event("select2-focus"));
                }
                this.container.addClass("select2-container-active");
            }));

            this.initContainerWidth();
            this.opts.element.addClass("select2-offscreen");
            this.setPlaceholder();

        },

        // single
        clear: function(triggerChange) {
            var data=this.selection.data("select2-data");
            if (data) { // guard against queued quick consecutive clicks
                var evt = $.Event("select2-clearing");
                this.opts.element.trigger(evt);
                if (evt.isDefaultPrevented()) {
                    return;
                }
                var placeholderOption = this.getPlaceholderOption();
                this.opts.element.val(placeholderOption ? placeholderOption.val() : "");
                this.selection.find(".select2-chosen").empty();
                this.selection.removeData("select2-data");
                this.setPlaceholder();

                if (triggerChange !== false){
                    this.opts.element.trigger({ type: "select2-removed", val: this.id(data), choice: data });
                    this.triggerChange({removed:data});
                }
            }
        },

        /**
         * Sets selection based on source element's value
         */
        // single
        initSelection: function () {
            var selected;
            if (this.isPlaceholderOptionSelected()) {
                this.updateSelection(null);
                this.close();
                this.setPlaceholder();
            } else {
                var self = this;
                this.opts.initSelection.call(null, this.opts.element, function(selected){
                    if (selected !== undefined && selected !== null) {
                        self.updateSelection(selected);
                        self.close();
                        self.setPlaceholder();
                    }
                });
            }
        },

        isPlaceholderOptionSelected: function() {
            var placeholderOption;
            if (!this.getPlaceholder()) return false; // no placeholder specified so no option should be considered
            return ((placeholderOption = this.getPlaceholderOption()) !== undefined && placeholderOption.prop("selected"))
                || (this.opts.element.val() === "")
                || (this.opts.element.val() === undefined)
                || (this.opts.element.val() === null);
        },

        // single
        prepareOpts: function () {
            var opts = this.parent.prepareOpts.apply(this, arguments),
                self=this;

            if (opts.element.get(0).tagName.toLowerCase() === "select") {
                // install the selection initializer
                opts.initSelection = function (element, callback) {
                    var selected = element.find("option").filter(function() { return this.selected });
                    // a single select box always has a value, no need to null check 'selected'
                    callback(self.optionToData(selected));
                };
            } else if ("data" in opts) {
                // install default initSelection when applied to hidden input and data is local
                opts.initSelection = opts.initSelection || function (element, callback) {
                    var id = element.val();
                    //search in data by id, storing the actual matching item
                    var match = null;
                    opts.query({
                        matcher: function(term, text, el){
                            var is_match = equal(id, opts.id(el));
                            if (is_match) {
                                match = el;
                            }
                            return is_match;
                        },
                        callback: !$.isFunction(callback) ? $.noop : function() {
                            callback(match);
                        }
                    });
                };
            }

            return opts;
        },

        // single
        getPlaceholder: function() {
            // if a placeholder is specified on a single select without a valid placeholder option ignore it
            if (this.select) {
                if (this.getPlaceholderOption() === undefined) {
                    return undefined;
                }
            }

            return this.parent.getPlaceholder.apply(this, arguments);
        },

        // single
        setPlaceholder: function () {
            var placeholder = this.getPlaceholder();

            if (this.isPlaceholderOptionSelected() && placeholder !== undefined) {

                // check for a placeholder option if attached to a select
                if (this.select && this.getPlaceholderOption() === undefined) return;

                this.selection.find(".select2-chosen").html(this.opts.escapeMarkup(placeholder));

                this.selection.addClass("select2-default");

                this.container.removeClass("select2-allowclear");
            }
        },

        // single
        postprocessResults: function (data, initial, noHighlightUpdate) {
            var selected = 0, self = this, showSearchInput = true;

            // find the selected element in the result list

            this.findHighlightableChoices().each2(function (i, elm) {
                if (equal(self.id(elm.data("select2-data")), self.opts.element.val())) {
                    selected = i;
                    return false;
                }
            });

            // and highlight it
            if (noHighlightUpdate !== false) {
                if (initial === true && selected >= 0) {
                    this.highlight(selected);
                } else {
                    this.highlight(0);
                }
            }

            // hide the search box if this is the first we got the results and there are enough of them for search

            if (initial === true) {
                var min = this.opts.minimumResultsForSearch;
                if (min >= 0) {
                    this.showSearch(countResults(data.results) >= min);
                }
            }
        },

        // single
        showSearch: function(showSearchInput) {
            if (this.showSearchInput === showSearchInput) return;

            this.showSearchInput = showSearchInput;

            this.dropdown.find(".select2-search").toggleClass("select2-search-hidden", !showSearchInput);
            this.dropdown.find(".select2-search").toggleClass("select2-offscreen", !showSearchInput);
            //add "select2-with-searchbox" to the container if search box is shown
            $(this.dropdown, this.container).toggleClass("select2-with-searchbox", showSearchInput);
        },

        // single
        onSelect: function (data, options) {

            if (!this.triggerSelect(data)) { return; }

            var old = this.opts.element.val(),
                oldData = this.data();

            this.opts.element.val(this.id(data));
            this.updateSelection(data);

            this.opts.element.trigger({ type: "select2-selected", val: this.id(data), choice: data });

            this.nextSearchTerm = this.opts.nextSearchTerm(data, this.search.val());
            this.close();

            if (!options || !options.noFocus)
                this.focusser.focus();

            if (!equal(old, this.id(data))) { this.triggerChange({added:data,removed:oldData}); }
        },

        // single
        updateSelection: function (data) {

            var container=this.selection.find(".select2-chosen"), formatted, cssClass;

            this.selection.data("select2-data", data);

            container.empty();
            if (data !== null) {
                formatted=this.opts.formatSelection(data, container, this.opts.escapeMarkup);
            }
            if (formatted !== undefined) {
                container.append(formatted);
            }
            cssClass=this.opts.formatSelectionCssClass(data, container);
            if (cssClass !== undefined) {
                container.addClass(cssClass);
            }

            this.selection.removeClass("select2-default");

            if (this.opts.allowClear && this.getPlaceholder() !== undefined) {
                this.container.addClass("select2-allowclear");
            }
        },

        // single
        val: function () {
            var val,
                triggerChange = false,
                data = null,
                self = this,
                oldData = this.data();

            if (arguments.length === 0) {
                return this.opts.element.val();
            }

            val = arguments[0];

            if (arguments.length > 1) {
                triggerChange = arguments[1];
            }

            if (this.select) {
                this.select
                    .val(val)
                    .find("option").filter(function() { return this.selected }).each2(function (i, elm) {
                        data = self.optionToData(elm);
                        return false;
                    });
                this.updateSelection(data);
                this.setPlaceholder();
                if (triggerChange) {
                    this.triggerChange({added: data, removed:oldData});
                }
            } else {
                // val is an id. !val is true for [undefined,null,'',0] - 0 is legal
                if (!val && val !== 0) {
                    this.clear(triggerChange);
                    return;
                }
                if (this.opts.initSelection === undefined) {
                    throw new Error("cannot call val() if initSelection() is not defined");
                }
                this.opts.element.val(val);
                this.opts.initSelection(this.opts.element, function(data){
                    self.opts.element.val(!data ? "" : self.id(data));
                    self.updateSelection(data);
                    self.setPlaceholder();
                    if (triggerChange) {
                        self.triggerChange({added: data, removed:oldData});
                    }
                });
            }
        },

        // single
        clearSearch: function () {
            this.search.val("");
            this.focusser.val("");
        },

        // single
        data: function(value) {
            var data,
                triggerChange = false;

            if (arguments.length === 0) {
                data = this.selection.data("select2-data");
                if (data == undefined) data = null;
                return data;
            } else {
                if (arguments.length > 1) {
                    triggerChange = arguments[1];
                }
                if (!value) {
                    this.clear(triggerChange);
                } else {
                    data = this.data();
                    this.opts.element.val(!value ? "" : this.id(value));
                    this.updateSelection(value);
                    if (triggerChange) {
                        this.triggerChange({added: value, removed:data});
                    }
                }
            }
        }
    });

    MultiSelect2 = clazz(AbstractSelect2, {

        // multi
        createContainer: function () {
            var container = $(document.createElement("div")).attr({
                "class": "select2-container select2-container-multi"
            }).html([
                    "<ul class='select2-choices'>",
                    "  <li class='select2-search-field'>",
                    "    <input type='text' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false' class='select2-input'>",
                    "  </li>",
                    "</ul>",
                    "<div class='select2-drop select2-drop-multi select2-display-none'>",
                    "   <ul class='select2-results'>",
                    "   </ul>",
                    "</div>"].join(""));
            return container;
        },

        // multi
        prepareOpts: function () {
            var opts = this.parent.prepareOpts.apply(this, arguments),
                self=this;

            // TODO validate placeholder is a string if specified

            if (opts.element.get(0).tagName.toLowerCase() === "select") {
                // install sthe selection initializer
                opts.initSelection = function (element, callback) {

                    var data = [];

                    element.find("option").filter(function() { return this.selected }).each2(function (i, elm) {
                        data.push(self.optionToData(elm));
                    });
                    callback(data);
                };
            } else if ("data" in opts) {
                // install default initSelection when applied to hidden input and data is local
                opts.initSelection = opts.initSelection || function (element, callback) {
                    var ids = splitVal(element.val(), opts.separator);
                    //search in data by array of ids, storing matching items in a list
                    var matches = [];
                    opts.query({
                        matcher: function(term, text, el){
                            var is_match = $.grep(ids, function(id) {
                                return equal(id, opts.id(el));
                            }).length;
                            if (is_match) {
                                matches.push(el);
                            }
                            return is_match;
                        },
                        callback: !$.isFunction(callback) ? $.noop : function() {
                            // reorder matches based on the order they appear in the ids array because right now
                            // they are in the order in which they appear in data array
                            var ordered = [];
                            for (var i = 0; i < ids.length; i++) {
                                var id = ids[i];
                                for (var j = 0; j < matches.length; j++) {
                                    var match = matches[j];
                                    if (equal(id, opts.id(match))) {
                                        ordered.push(match);
                                        matches.splice(j, 1);
                                        break;
                                    }
                                }
                            }
                            callback(ordered);
                        }
                    });
                };
            }

            return opts;
        },

        // multi
        selectChoice: function (choice) {

            var selected = this.container.find(".select2-search-choice-focus");
            if (selected.length && choice && choice[0] == selected[0]) {

            } else {
                if (selected.length) {
                    this.opts.element.trigger("choice-deselected", selected);
                }
                selected.removeClass("select2-search-choice-focus");
                if (choice && choice.length) {
                    this.close();
                    choice.addClass("select2-search-choice-focus");
                    this.opts.element.trigger("choice-selected", choice);
                }
            }
        },

        // multi
        destroy: function() {
            $("label[for='" + this.search.attr('id') + "']")
                .attr('for', this.opts.element.attr("id"));
            this.parent.destroy.apply(this, arguments);
        },

        // multi
        initContainer: function () {

            var selector = ".select2-choices", selection;

            this.searchContainer = this.container.find(".select2-search-field");
            this.selection = selection = this.container.find(selector);

            var _this = this;
            this.selection.on("click", ".select2-search-choice:not(.select2-locked)", function (e) {
                //killEvent(e);
                _this.search[0].focus();
                _this.selectChoice($(this));
            });

            // rewrite labels from original element to focusser
            this.search.attr("id", "s2id_autogen"+nextUid());
            $("label[for='" + this.opts.element.attr("id") + "']")
                .attr('for', this.search.attr('id'));

            this.search.on("input paste", this.bind(function() {
                if (!this.isInterfaceEnabled()) return;
                if (!this.opened()) {
                    this.open();
                }
            }));

            this.search.attr("tabindex", this.elementTabIndex);

            this.keydowns = 0;
            this.search.on("keydown", this.bind(function (e) {
                if (!this.isInterfaceEnabled()) return;

                ++this.keydowns;
                var selected = selection.find(".select2-search-choice-focus");
                var prev = selected.prev(".select2-search-choice:not(.select2-locked)");
                var next = selected.next(".select2-search-choice:not(.select2-locked)");
                var pos = getCursorInfo(this.search);

                if (selected.length &&
                    (e.which == KEY.LEFT || e.which == KEY.RIGHT || e.which == KEY.BACKSPACE || e.which == KEY.DELETE || e.which == KEY.ENTER)) {
                    var selectedChoice = selected;
                    if (e.which == KEY.LEFT && prev.length) {
                        selectedChoice = prev;
                    }
                    else if (e.which == KEY.RIGHT) {
                        selectedChoice = next.length ? next : null;
                    }
                    else if (e.which === KEY.BACKSPACE) {
                        this.unselect(selected.first());
                        this.search.width(10);
                        selectedChoice = prev.length ? prev : next;
                    } else if (e.which == KEY.DELETE) {
                        this.unselect(selected.first());
                        this.search.width(10);
                        selectedChoice = next.length ? next : null;
                    } else if (e.which == KEY.ENTER) {
                        selectedChoice = null;
                    }

                    this.selectChoice(selectedChoice);
                    killEvent(e);
                    if (!selectedChoice || !selectedChoice.length) {
                        this.open();
                    }
                    return;
                } else if (((e.which === KEY.BACKSPACE && this.keydowns == 1)
                    || e.which == KEY.LEFT) && (pos.offset == 0 && !pos.length)) {

                    this.selectChoice(selection.find(".select2-search-choice:not(.select2-locked)").last());
                    killEvent(e);
                    return;
                } else {
                    this.selectChoice(null);
                }

                if (this.opened()) {
                    switch (e.which) {
                        case KEY.UP:
                        case KEY.DOWN:
                            this.moveHighlight((e.which === KEY.UP) ? -1 : 1);
                            killEvent(e);
                            return;
                        case KEY.ENTER:
                            this.selectHighlighted();
                            killEvent(e);
                            return;
                        case KEY.TAB:
                            this.selectHighlighted({noFocus:true});
                            this.close();
                            return;
                        case KEY.ESC:
                            this.cancel(e);
                            killEvent(e);
                            return;
                    }
                }

                if (e.which === KEY.TAB || KEY.isControl(e) || KEY.isFunctionKey(e)
                    || e.which === KEY.BACKSPACE || e.which === KEY.ESC) {
                    return;
                }

                if (e.which === KEY.ENTER) {
                    if (this.opts.openOnEnter === false) {
                        return;
                    } else if (e.altKey || e.ctrlKey || e.shiftKey || e.metaKey) {
                        return;
                    }
                }

                this.open();

                if (e.which === KEY.PAGE_UP || e.which === KEY.PAGE_DOWN) {
                    // prevent the page from scrolling
                    killEvent(e);
                }

                if (e.which === KEY.ENTER) {
                    // prevent form from being submitted
                    killEvent(e);
                }

            }));

            this.search.on("keyup", this.bind(function (e) {
                this.keydowns = 0;
                this.resizeSearch();
            })
            );

            this.search.on("blur", this.bind(function(e) {
                this.container.removeClass("select2-container-active");
                this.search.removeClass("select2-focused");
                this.selectChoice(null);
                if (!this.opened()) this.clearSearch();
                e.stopImmediatePropagation();
                this.opts.element.trigger($.Event("select2-blur"));
            }));

            this.container.on("click", selector, this.bind(function (e) {
                if (!this.isInterfaceEnabled()) return;
                if ($(e.target).closest(".select2-search-choice").length > 0) {
                    // clicked inside a select2 search choice, do not open
                    return;
                }
                this.selectChoice(null);
                this.clearPlaceholder();
                if (!this.container.hasClass("select2-container-active")) {
                    this.opts.element.trigger($.Event("select2-focus"));
                }
                this.open();
                this.focusSearch();
                e.preventDefault();
            }));

            this.container.on("focus", selector, this.bind(function () {
                if (!this.isInterfaceEnabled()) return;
                if (!this.container.hasClass("select2-container-active")) {
                    this.opts.element.trigger($.Event("select2-focus"));
                }
                this.container.addClass("select2-container-active");
                this.dropdown.addClass("select2-drop-active");
                this.clearPlaceholder();
            }));

            this.initContainerWidth();
            this.opts.element.addClass("select2-offscreen");

            // set the placeholder if necessary
            this.clearSearch();
        },

        // multi
        enableInterface: function() {
            if (this.parent.enableInterface.apply(this, arguments)) {
                this.search.prop("disabled", !this.isInterfaceEnabled());
            }
        },

        // multi
        initSelection: function () {
            var data;
            if (this.opts.element.val() === "" && this.opts.element.text() === "") {
                this.updateSelection([]);
                this.close();
                // set the placeholder if necessary
                this.clearSearch();
            }
            if (this.select || this.opts.element.val() !== "") {
                var self = this;
                this.opts.initSelection.call(null, this.opts.element, function(data){
                    if (data !== undefined && data !== null) {
                        self.updateSelection(data);
                        self.close();
                        // set the placeholder if necessary
                        self.clearSearch();
                    }
                });
            }
        },

        // multi
        clearSearch: function () {
            var placeholder = this.getPlaceholder(),
                maxWidth = this.getMaxSearchWidth();

            if (placeholder !== undefined  && this.getVal().length === 0 && this.search.hasClass("select2-focused") === false) {
                this.search.val(placeholder).addClass("select2-default");
                // stretch the search box to full width of the container so as much of the placeholder is visible as possible
                // we could call this.resizeSearch(), but we do not because that requires a sizer and we do not want to create one so early because of a firefox bug, see #944
                this.search.width(maxWidth > 0 ? maxWidth : this.container.css("width"));
            } else {
                this.search.val("").width(10);
            }
        },

        // multi
        clearPlaceholder: function () {
            if (this.search.hasClass("select2-default")) {
                this.search.val("").removeClass("select2-default");
            }
        },

        // multi
        opening: function () {
            this.clearPlaceholder(); // should be done before super so placeholder is not used to search
            this.resizeSearch();

            this.parent.opening.apply(this, arguments);

            this.focusSearch();

            this.updateResults(true);
            this.search.focus();
            this.opts.element.trigger($.Event("select2-open"));
        },

        // multi
        close: function () {
            if (!this.opened()) return;
            this.parent.close.apply(this, arguments);
        },

        // multi
        focus: function () {
            this.close();
            this.search.focus();
        },

        // multi
        isFocused: function () {
            return this.search.hasClass("select2-focused");
        },

        // multi
        updateSelection: function (data) {
            var ids = [], filtered = [], self = this;

            // filter out duplicates
            $(data).each(function () {
                if (indexOf(self.id(this), ids) < 0) {
                    ids.push(self.id(this));
                    filtered.push(this);
                }
            });
            data = filtered;

            this.selection.find(".select2-search-choice").remove();
            $(data).each(function () {
                self.addSelectedChoice(this);
            });
            self.postprocessResults();
        },

        // multi
        tokenize: function() {
            var input = this.search.val();
            input = this.opts.tokenizer.call(this, input, this.data(), this.bind(this.onSelect), this.opts);
            if (input != null && input != undefined) {
                this.search.val(input);
                if (input.length > 0) {
                    this.open();
                }
            }

        },

        // multi
        onSelect: function (data, options) {

            if (!this.triggerSelect(data)) { return; }

            this.addSelectedChoice(data);

            this.opts.element.trigger({ type: "selected", val: this.id(data), choice: data });

            if (this.select || !this.opts.closeOnSelect) this.postprocessResults(data, false, this.opts.closeOnSelect===true);

            if (this.opts.closeOnSelect) {
                this.close();
                this.search.width(10);
            } else {
                if (this.countSelectableResults()>0) {
                    this.search.width(10);
                    this.resizeSearch();
                    if (this.getMaximumSelectionSize() > 0 && this.val().length >= this.getMaximumSelectionSize()) {
                        // if we reached max selection size repaint the results so choices
                        // are replaced with the max selection reached message
                        this.updateResults(true);
                    }
                    this.positionDropdown();
                } else {
                    // if nothing left to select close
                    this.close();
                    this.search.width(10);
                }
            }

            // since its not possible to select an element that has already been
            // added we do not need to check if this is a new element before firing change
            this.triggerChange({ added: data });

            if (!options || !options.noFocus)
                this.focusSearch();
        },

        // multi
        cancel: function () {
            this.close();
            this.focusSearch();
        },

        addSelectedChoice: function (data) {
            var enableChoice = !data.locked,
                enabledItem = $(
                    "<li class='select2-search-choice'>" +
                        "    <div></div>" +
                        "    <a href='#' onclick='return false;' class='select2-search-choice-close' tabindex='-1'></a>" +
                        "</li>"),
                disabledItem = $(
                    "<li class='select2-search-choice select2-locked'>" +
                        "<div></div>" +
                        "</li>");
            var choice = enableChoice ? enabledItem : disabledItem,
                id = this.id(data),
                val = this.getVal(),
                formatted,
                cssClass;

            formatted=this.opts.formatSelection(data, choice.find("div"), this.opts.escapeMarkup);
            if (formatted != undefined) {
                choice.find("div").replaceWith("<div>"+formatted+"</div>");
            }
            cssClass=this.opts.formatSelectionCssClass(data, choice.find("div"));
            if (cssClass != undefined) {
                choice.addClass(cssClass);
            }

            if(enableChoice){
                choice.find(".select2-search-choice-close")
                    .on("mousedown", killEvent)
                    .on("click dblclick", this.bind(function (e) {
                        if (!this.isInterfaceEnabled()) return;

                        $(e.target).closest(".select2-search-choice").fadeOut('fast', this.bind(function(){
                            this.unselect($(e.target));
                            this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus");
                            this.close();
                            this.focusSearch();
                        })).dequeue();
                        killEvent(e);
                    })).on("focus", this.bind(function () {
                        if (!this.isInterfaceEnabled()) return;
                        this.container.addClass("select2-container-active");
                        this.dropdown.addClass("select2-drop-active");
                    }));
            }

            choice.data("select2-data", data);
            choice.insertBefore(this.searchContainer);

            val.push(id);
            this.setVal(val);
        },

        // multi
        unselect: function (selected) {
            var val = this.getVal(),
                data,
                index;
            selected = selected.closest(".select2-search-choice");

            if (selected.length === 0) {
                throw "Invalid argument: " + selected + ". Must be .select2-search-choice";
            }

            data = selected.data("select2-data");

            if (!data) {
                // prevent a race condition when the 'x' is clicked really fast repeatedly the event can be queued
                // and invoked on an element already removed
                return;
            }

            while((index = indexOf(this.id(data), val)) >= 0) {
                val.splice(index, 1);
                this.setVal(val);
                if (this.select) this.postprocessResults();
            }

            var evt = $.Event("select2-removing");
            evt.val = this.id(data);
            evt.choice = data;
            this.opts.element.trigger(evt);

            if (evt.isDefaultPrevented()) {
                return;
            }

            selected.remove();

            this.opts.element.trigger({ type: "select2-removed", val: this.id(data), choice: data });
            this.triggerChange({ removed: data });
        },

        // multi
        postprocessResults: function (data, initial, noHighlightUpdate) {
            var val = this.getVal(),
                choices = this.results.find(".select2-result"),
                compound = this.results.find(".select2-result-with-children"),
                self = this;

            choices.each2(function (i, choice) {
                var id = self.id(choice.data("select2-data"));
                if (indexOf(id, val) >= 0) {
                    choice.addClass("select2-selected");
                    // mark all children of the selected parent as selected
                    choice.find(".select2-result-selectable").addClass("select2-selected");
                }
            });

            compound.each2(function(i, choice) {
                // hide an optgroup if it doesnt have any selectable children
                if (!choice.is('.select2-result-selectable')
                    && choice.find(".select2-result-selectable:not(.select2-selected)").length === 0) {
                    choice.addClass("select2-selected");
                }
            });

            if (this.highlight() == -1 && noHighlightUpdate !== false){
                self.highlight(0);
            }

            //If all results are chosen render formatNoMAtches
            if(!this.opts.createSearchChoice && !choices.filter('.select2-result:not(.select2-selected)').length > 0){
                if(!data || data && !data.more && this.results.find(".select2-no-results").length === 0) {
                    if (checkFormatter(self.opts.formatNoMatches, "formatNoMatches")) {
                        this.results.append("<li class='select2-no-results'>" + self.opts.formatNoMatches(self.search.val()) + "</li>");
                    }
                }
            }

        },

        // multi
        getMaxSearchWidth: function() {
            return this.selection.width() - getSideBorderPadding(this.search);
        },

        // multi
        resizeSearch: function () {
            var minimumWidth, left, maxWidth, containerLeft, searchWidth,
                sideBorderPadding = getSideBorderPadding(this.search);

            minimumWidth = measureTextWidth(this.search) + 10;

            left = this.search.offset().left;

            maxWidth = this.selection.width();
            containerLeft = this.selection.offset().left;

            searchWidth = maxWidth - (left - containerLeft) - sideBorderPadding;

            if (searchWidth < minimumWidth) {
                searchWidth = maxWidth - sideBorderPadding;
            }

            if (searchWidth < 40) {
                searchWidth = maxWidth - sideBorderPadding;
            }

            if (searchWidth <= 0) {
                searchWidth = minimumWidth;
            }

            this.search.width(Math.floor(searchWidth));
        },

        // multi
        getVal: function () {
            var val;
            if (this.select) {
                val = this.select.val();
                return val === null ? [] : val;
            } else {
                val = this.opts.element.val();
                return splitVal(val, this.opts.separator);
            }
        },

        // multi
        setVal: function (val) {
            var unique;
            if (this.select) {
                this.select.val(val);
            } else {
                unique = [];
                // filter out duplicates
                $(val).each(function () {
                    if (indexOf(this, unique) < 0) unique.push(this);
                });
                this.opts.element.val(unique.length === 0 ? "" : unique.join(this.opts.separator));
            }
        },

        // multi
        buildChangeDetails: function (old, current) {
            var current = current.slice(0),
                old = old.slice(0);

            // remove intersection from each array
            for (var i = 0; i < current.length; i++) {
                for (var j = 0; j < old.length; j++) {
                    if (equal(this.opts.id(current[i]), this.opts.id(old[j]))) {
                        current.splice(i, 1);
                        if(i>0){
                            i--;
                        }
                        old.splice(j, 1);
                        j--;
                    }
                }
            }

            return {added: current, removed: old};
        },


        // multi
        val: function (val, triggerChange) {
            var oldData, self=this;

            if (arguments.length === 0) {
                return this.getVal();
            }

            oldData=this.data();
            if (!oldData.length) oldData=[];

            // val is an id. !val is true for [undefined,null,'',0] - 0 is legal
            if (!val && val !== 0) {
                this.opts.element.val("");
                this.updateSelection([]);
                this.clearSearch();
                if (triggerChange) {
                    this.triggerChange({added: this.data(), removed: oldData});
                }
                return;
            }

            // val is a list of ids
            this.setVal(val);

            if (this.select) {
                this.opts.initSelection(this.select, this.bind(this.updateSelection));
                if (triggerChange) {
                    this.triggerChange(this.buildChangeDetails(oldData, this.data()));
                }
            } else {
                if (this.opts.initSelection === undefined) {
                    throw new Error("val() cannot be called if initSelection() is not defined");
                }

                this.opts.initSelection(this.opts.element, function(data){
                    var ids=$.map(data, self.id);
                    self.setVal(ids);
                    self.updateSelection(data);
                    self.clearSearch();
                    if (triggerChange) {
                        self.triggerChange(self.buildChangeDetails(oldData, self.data()));
                    }
                });
            }
            this.clearSearch();
        },

        // multi
        onSortStart: function() {
            if (this.select) {
                throw new Error("Sorting of elements is not supported when attached to <select>. Attach to <input type='hidden'/> instead.");
            }

            // collapse search field into 0 width so its container can be collapsed as well
            this.search.width(0);
            // hide the container
            this.searchContainer.hide();
        },

        // multi
        onSortEnd:function() {

            var val=[], self=this;

            // show search and move it to the end of the list
            this.searchContainer.show();
            // make sure the search container is the last item in the list
            this.searchContainer.appendTo(this.searchContainer.parent());
            // since we collapsed the width in dragStarted, we resize it here
            this.resizeSearch();

            // update selection
            this.selection.find(".select2-search-choice").each(function() {
                val.push(self.opts.id($(this).data("select2-data")));
            });
            this.setVal(val);
            this.triggerChange();
        },

        // multi
        data: function(values, triggerChange) {
            var self=this, ids, old;
            if (arguments.length === 0) {
                return this.selection
                    .find(".select2-search-choice")
                    .map(function() { return $(this).data("select2-data"); })
                    .get();
            } else {
                old = this.data();
                if (!values) { values = []; }
                ids = $.map(values, function(e) { return self.opts.id(e); });
                this.setVal(ids);
                this.updateSelection(values);
                this.clearSearch();
                if (triggerChange) {
                    this.triggerChange(this.buildChangeDetails(old, this.data()));
                }
            }
        }
    });

    $.fn.select2 = function () {

        var args = Array.prototype.slice.call(arguments, 0),
            opts,
            select2,
            method, value, multiple,
            allowedMethods = ["val", "destroy", "opened", "open", "close", "focus", "isFocused", "container", "dropdown", "onSortStart", "onSortEnd", "enable", "disable", "readonly", "positionDropdown", "data", "search"],
            valueMethods = ["opened", "isFocused", "container", "dropdown"],
            propertyMethods = ["val", "data"],
            methodsMap = { search: "externalSearch" };

        this.each(function () {
            if (args.length === 0 || typeof(args[0]) === "object") {
                opts = args.length === 0 ? {} : $.extend({}, args[0]);
                opts.element = $(this);

                if (opts.element.get(0).tagName.toLowerCase() === "select") {
                    multiple = opts.element.prop("multiple");
                } else {
                    multiple = opts.multiple || false;
                    if ("tags" in opts) {opts.multiple = multiple = true;}
                }

                select2 = multiple ? new MultiSelect2() : new SingleSelect2();
                select2.init(opts);
            } else if (typeof(args[0]) === "string") {

                if (indexOf(args[0], allowedMethods) < 0) {
                    throw "Unknown method: " + args[0];
                }

                value = undefined;
                select2 = $(this).data("select2");
                if (select2 === undefined) return;

                method=args[0];

                if (method === "container") {
                    value = select2.container;
                } else if (method === "dropdown") {
                    value = select2.dropdown;
                } else {
                    if (methodsMap[method]) method = methodsMap[method];

                    value = select2[method].apply(select2, args.slice(1));
                }
                if (indexOf(args[0], valueMethods) >= 0
                    || (indexOf(args[0], propertyMethods) && args.length == 1)) {
                    return false; // abort the iteration, ready to return first matched value
                }
            } else {
                throw "Invalid arguments to select2 plugin: " + args;
            }
        });
        return (value === undefined) ? this : value;
    };

    // plugin defaults, accessible to users
    $.fn.select2.defaults = {
        width: "copy",
        loadMorePadding: 0,
        closeOnSelect: true,
        openOnEnter: true,
        containerCss: {},
        dropdownCss: {},
        containerCssClass: "",
        dropdownCssClass: "",
        formatResult: function(result, container, query, escapeMarkup) {
            var markup=[];
            markMatch(result.text, query.term, markup, escapeMarkup);
            return markup.join("");
        },
        formatSelection: function (data, container, escapeMarkup) {
            return data ? escapeMarkup(data.text) : undefined;
        },
        sortResults: function (results, container, query) {
            return results;
        },
        formatResultCssClass: function(data) {return undefined;},
        formatSelectionCssClass: function(data, container) {return undefined;},
        formatNoMatches: function () { return "No matches found"; },
        formatInputTooShort: function (input, min) { var n = min - input.length; return "Please enter " + n + " more character" + (n == 1? "" : "s"); },
        formatInputTooLong: function (input, max) { var n = input.length - max; return "Please delete " + n + " character" + (n == 1? "" : "s"); },
        formatSelectionTooBig: function (limit) { return "You can only select " + limit + " item" + (limit == 1 ? "" : "s"); },
        formatLoadMore: function (pageNumber) { return "Loading more results..."; },
        formatSearching: function () { return "Searching..."; },
        minimumResultsForSearch: 0,
        minimumInputLength: 0,
        maximumInputLength: null,
        maximumSelectionSize: 0,
        id: function (e) { return e.id; },
        matcher: function(term, text) {
            return stripDiacritics(''+text).toUpperCase().indexOf(stripDiacritics(''+term).toUpperCase()) >= 0;
        },
        separator: ",",
        tokenSeparators: [],
        tokenizer: defaultTokenizer,
        escapeMarkup: defaultEscapeMarkup,
        blurOnChange: false,
        selectOnBlur: false,
        adaptContainerCssClass: function(c) { return c; },
        adaptDropdownCssClass: function(c) { return null; },
        nextSearchTerm: function(selectedObject, currentSearchTerm) { return undefined; }
    };

    $.fn.select2.ajaxDefaults = {
        transport: $.ajax,
        params: {
            type: "GET",
            cache: false,
            dataType: "json"
        }
    };

    // exports
    window.Select2 = {
        query: {
            ajax: ajax,
            local: local,
            tags: tags
        }, util: {
            debounce: debounce,
            markMatch: markMatch,
            escapeMarkup: defaultEscapeMarkup,
            stripDiacritics: stripDiacritics
        }, "class": {
            "abstract": AbstractSelect2,
            "single": SingleSelect2,
            "multi": MultiSelect2
        }
    };

}(jQuery));

/**
 * Wraps a vanilla Select2 with ADG _style_, as an auiSelect2 method on jQuery objects.
 *
 * @since 5.2
 */
(function($) {

    /**
     * We make a copy of the original select2 so that later we might re-specify $.fn.auiSelect2 as $.fn.select2. That
     * way, calling code will be able to call $thing.select2() as if they were calling the original library,
     * and ADG styling will just magically happen.
     */
    var originalSelect2 = $.fn.select2;

    // AUI-specific classes
    var auiContainer = "aui-select2-container";
    var auiDropdown = "aui-select2-drop aui-dropdown2 aui-style-default";
    var auiHasAvatar = "aui-has-avatar";

    $.fn.auiSelect2 = function (first) {
        var updatedArgs;

        if($.isPlainObject(first)) {
            var auiOpts = $.extend({}, first);
            var auiAvatarClass = auiOpts.hasAvatar ? " " + auiHasAvatar : "";
            //add our classes in addition to those the caller specified
            auiOpts.containerCssClass  = auiContainer + auiAvatarClass + (auiOpts.containerCssClass ? " " + auiOpts.containerCssClass : "");
            auiOpts.dropdownCssClass  = auiDropdown + auiAvatarClass + (auiOpts.dropdownCssClass  ? " " + auiOpts.dropdownCssClass : "");
            updatedArgs = Array.prototype.slice.call(arguments, 1);
            updatedArgs.unshift(auiOpts);
        } else if (!arguments.length) {
            updatedArgs = [{
                containerCssClass: auiContainer,
                dropdownCssClass: auiDropdown
            }];
        } else {
            updatedArgs = arguments;
        }

        return originalSelect2.apply(this, updatedArgs);
    };

})(AJS.$);
//fgnass.github.com/spin.js#v1.2.7
/*
    Modified by Atlassian
 */
!function(window, document, undefined) {

  /**
   * Copyright (c) 2011 Felix Gnass [fgnass at neteye dot de]
   * Licensed under the MIT license
   */

  var prefixes = ['webkit', 'Moz', 'ms', 'O'] /* Vendor prefixes */
    , animations = {} /* Animation rules keyed by their name */
    , useCssAnimations

  /**
   * Utility function to create elements. If no tag name is given,
   * a DIV is created. Optionally properties can be passed.
   */
  function createEl(tag, prop) {
    var el = document.createElement(tag || 'div')
      , n

    for(n in prop) el[n] = prop[n]
    return el
  }

  /**
   * Appends children and returns the parent.
   */
  function ins(parent /* child1, child2, ...*/) {
    for (var i=1, n=arguments.length; i<n; i++)
      parent.appendChild(arguments[i])

    return parent
  }

  /**
   * Insert a new stylesheet to hold the @keyframe or VML rules.
   */
  var sheet = function() {
    var el = createEl('style', {type : 'text/css'})
    ins(document.getElementsByTagName('head')[0], el)
    return el.sheet || el.styleSheet
  }()

  /**
   * Creates an opacity keyframe animation rule and returns its name.
   * Since most mobile Webkits have timing issues with animation-delay,
   * we create separate rules for each line/segment.
   */
  function addAnimation(alpha, trail, i, lines) {
    var name = ['opacity', trail, ~~(alpha*100), i, lines].join('-')
      , start = 0.01 + i/lines*100
      , z = Math.max(1 - (1-alpha) / trail * (100-start), alpha)
      , prefix = useCssAnimations.substring(0, useCssAnimations.indexOf('Animation')).toLowerCase()
      , pre = prefix && '-'+prefix+'-' || ''

    if (!animations[name]) {
      sheet.insertRule(
        '@' + pre + 'keyframes ' + name + '{' +
        '0%{opacity:' + z + '}' +
        start + '%{opacity:' + alpha + '}' +
        (start+0.01) + '%{opacity:1}' +
        (start+trail) % 100 + '%{opacity:' + alpha + '}' +
        '100%{opacity:' + z + '}' +
        '}', sheet.cssRules.length)

      animations[name] = 1
    }
    return name
  }

  /**
   * Tries various vendor prefixes and returns the first supported property.
   **/
  function vendor(el, prop) {
    var s = el.style
      , pp
      , i

    if(s[prop] !== undefined) return prop
    prop = prop.charAt(0).toUpperCase() + prop.slice(1)
    for(i=0; i<prefixes.length; i++) {
      pp = prefixes[i]+prop
      if(s[pp] !== undefined) return pp
    }
  }

  /**
   * Sets multiple style properties at once.
   */
  function css(el, prop) {
    for (var n in prop)
      el.style[vendor(el, n)||n] = prop[n]

    return el
  }

  /**
   * Fills in default values.
   */
  function merge(obj) {
    for (var i=1; i < arguments.length; i++) {
      var def = arguments[i]
      for (var n in def)
        if (obj[n] === undefined) obj[n] = def[n]
    }
    return obj
  }

  /**
   * Returns the absolute page-offset of the given element.
   */
  function pos(el) {
    var o = { x:el.offsetLeft, y:el.offsetTop }
    while((el = el.offsetParent))
      o.x+=el.offsetLeft, o.y+=el.offsetTop

    return o
  }

  var defaults = {
    lines: 12,            // The number of lines to draw
    length: 7,            // The length of each line
    width: 5,             // The line thickness
    radius: 10,           // The radius of the inner circle
    rotate: 0,            // Rotation offset
    corners: 1,           // Roundness (0..1)
    color: '#000',        // #rgb or #rrggbb
    speed: 1,             // Rounds per second
    trail: 100,           // Afterglow percentage
    opacity: 1/4,         // Opacity of the lines
    fps: 20,              // Frames per second when using setTimeout()
    zIndex: 2e9,          // Use a high z-index by default
    className: 'spinner', // CSS class to assign to the element
    top: 'auto',          // center vertically
    left: 'auto',         // center horizontally
    position: 'relative'  // element position
  }

  /** The constructor */
  var Spinner = function Spinner(o) {
    if (!this.spin) return new Spinner(o)
    this.opts = merge(o || {}, Spinner.defaults, defaults)
  }

  Spinner.defaults = {}

  merge(Spinner.prototype, {
    spin: function(target) {
      this.stop()
      var self = this
        , o = self.opts
        , el = self.el = css(createEl(0, {className: o.className}), {position: o.position, width: 0, zIndex: o.zIndex})
        , mid = o.radius+o.length+o.width
        , ep // element position
        , tp // target position

      if (target) {
        target.insertBefore(el, target.firstChild||null)
        tp = pos(target)
        ep = pos(el)
        css(el, {
          left: (o.left == 'auto' ? tp.x-ep.x + (target.offsetWidth >> 1) : parseInt(o.left, 10) + mid) + 'px',
          top: (o.top == 'auto' ? tp.y-ep.y + (target.offsetHeight >> 1) : parseInt(o.top, 10) + mid)  + 'px'
        })
      }

      el.setAttribute('aria-role', 'progressbar')
      self.lines(el, self.opts)

      if (!useCssAnimations) {
        // No CSS animation support, use setTimeout() instead
        var i = 0
          , fps = o.fps
          , f = fps/o.speed
          , ostep = (1-o.opacity) / (f*o.trail / 100)
          , astep = f/o.lines

        ;(function anim() {
          i++;
          for (var s=o.lines; s; s--) {
            var alpha = Math.max(1-(i+s*astep)%f * ostep, o.opacity)
            self.opacity(el, o.lines-s, alpha, o)
          }
          self.timeout = self.el && setTimeout(anim, ~~(1000/fps))
        })()
      }
      return self
    },

    stop: function() {
      var el = this.el
      if (el) {
        clearTimeout(this.timeout)
        if (el.parentNode) el.parentNode.removeChild(el)
        this.el = undefined
      }
      return this
    },

    lines: function(el, o) {
      var i = 0
        , seg

      function fill(color, shadow) {
        return css(createEl(), {
          position: 'absolute',
          width: (o.length+o.width) + 'px',
          height: o.width + 'px',
          background: color,
          boxShadow: shadow,
          transformOrigin: 'left',
          transform: 'rotate(' + ~~(360/o.lines*i+o.rotate) + 'deg) translate(' + o.radius+'px' +',0)',
          borderRadius: (o.corners * o.width>>1) + 'px'
        })
      }

      for (; i < o.lines; i++) {
        seg = css(createEl(), {
          position: 'absolute',
          top: 1+~(o.width/2) + 'px',
          transform: o.hwaccel ? 'translate3d(0,0,0)' : '',
          opacity: o.opacity,
          animation: useCssAnimations && addAnimation(o.opacity, o.trail, i, o.lines) + ' ' + 1/o.speed + 's linear infinite'
        })

        if (o.shadow) ins(seg, css(fill('#000', '0 0 4px ' + '#000'), {top: 2+'px'}))

        ins(el, ins(seg, fill(o.color, '0 0 1px rgba(0,0,0,.1)')))
      }
      return el
    },

    opacity: function(el, i, val) {
      if (i < el.childNodes.length) el.childNodes[i].style.opacity = val
    }

  })

  /////////////////////////////////////////////////////////////////////////
  // VML rendering for IE
  /////////////////////////////////////////////////////////////////////////

  /**
   * Check and init VML support
   */
  ;(function() {

    function vml(tag, attr) {
      return createEl('<' + tag + ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">', attr)
    }

    var s = css(createEl('group'), {behavior: 'url(#default#VML)'})

    if (!vendor(s, 'transform') && s.adj) {

      // VML support detected. Insert CSS rule ...
      sheet.addRule('.spin-vml', 'behavior:url(#default#VML)')

      Spinner.prototype.lines = function(el, o) {
        var r = o.length+o.width
          , s = 2*r

        function grp() {
          return css(
            vml('group', {
              coordsize: s + ' ' + s,
              coordorigin: -r + ' ' + -r
            }),
            { width: s, height: s }
          )
        }

        var margin = -(o.width+o.length)*2 + 'px'
          , g = css(grp(), {position: 'absolute', top: margin, left: margin})
          , i

        function seg(i, dx, filter) {
          ins(g,
            ins(css(grp(), {rotation: 360 / o.lines * i + 'deg', left: ~~dx}),
              ins(css(vml('roundrect', {arcsize: o.corners}), {
                  width: r,
                  height: o.width,
                  left: o.radius,
                  top: -o.width>>1,
                  filter: filter
                }),
                vml('fill', {color: o.color, opacity: o.opacity}),
                vml('stroke', {opacity: 0}) // transparent stroke to fix color bleeding upon opacity change
              )
            )
          )
        }

        if (o.shadow)
          for (i = 1; i <= o.lines; i++)
            seg(i, -2, 'progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)')

        for (i = 1; i <= o.lines; i++) seg(i)
        return ins(el, g)
      }

      Spinner.prototype.opacity = function(el, i, val, o) {
        var c = el.firstChild
        o = o.shadow && o.lines || 0
        if (c && i+o < c.childNodes.length) {
          c = c.childNodes[i+o]; c = c && c.firstChild; c = c && c.firstChild
          if (c) c.opacity = val
        }
      }
    }
    else
      useCssAnimations = vendor(s, 'animation')
  })()

  //ATLASSIAN - always expose the global for and don't check define.amd for products who deleted it.
  if (typeof define == 'function')
    define('aui/internal/spin', [],function() { return Spinner });

  window.Spinner = Spinner

}(window, document);

define('aui/internal/spinner',['aui/internal/spin'], function (Spin) {
    'use strict';

    function Spinner (element) {
        var $ = AJS.$;
        this.$element = $(element);
        var spinContainer = document.createElement('div');
        var $spinContainer = $(spinContainer);
        $spinContainer.addClass('aui-button-spinner');

        var presets = {color: this.$element.css('color'), lines: 12, length: 3, width: 2, radius: 3, trail: 60, speed: 1.5};
        $spinContainer.data().spinner = new Spin(presets).spin(spinContainer);

        this.$element.append(spinContainer);
    }

    Spinner.prototype = {
        /**
         * Remove the spinner from the original element.
         */
        remove: function () {
            var $spinContainer = this.$element.children('.aui-button-spinner').first();

            var data = $spinContainer.data();
            if (data) {
                data.spinner.stop();
                delete data.spinner;
            }

            $spinContainer.remove();
        },

        /**
         * Show the spinner.
         */
        show: function () {
            var $spinContainer = this.$element.children('.aui-button-spinner').first();

            $spinContainer.css('display', 'block');
        },

        /**
         * Hide the spinner.
         */
        hide: function () {
            var $spinContainer = this.$element.children('.aui-button-spinner').first();

            $spinContainer.css('display', 'none');
        }
    };

    return Spinner;
});

define('aui/internal/state',[], function() {
    'use strict';
    return function(element){
        return {
            /**
             * sets an internal state on a component element
             * @param element the element to which the state will be added
             * @param stateName the name of the state
             * @param stateValue the value that the state will be changed to
             */
            set: function(stateName, stateValue){
                if(element._state === undefined) {
                    element._state = {};
                }

                element._state[stateName] = stateValue;
            },

            /**
             * gets an internal state on a component element
             * @param element the element to which the state will be added
             * @param stateName the name of the state
             */
            get: function(stateName){
                if(element._state) {
                    return element._state[stateName];
                }
            }
        }
    }
});

define('aui/button',['aui/internal/spinner', 'aui/internal/state'], function (Spinner, State) {
    'use strict';

    /*
     Can't depend on jQuery or skate since they won't be defined in product environments (thanks to deletion of the define.amd object)
     */
    var $ = AJS.$;
    var skate = window.skate;

    function setSpinner (button) {
        State(button).set('spinner', new Spinner(button));
    }

    function getSpinner (button) {
        return State(button).get('spinner');
    }

    function isBusy(button) {
        var ariaBusy = button.getAttribute('aria-busy');
        return ariaBusy && ariaBusy === 'true';
    }

    function isInputNode(button) {
        return button.nodeName === 'INPUT';
    }

    skate('aui-button', {
        type: skate.types.CLASS,

        created: function(element) {
            if (!element.hasAttribute('aria-busy')) {
                element.setAttribute('aria-busy', false);
            }
        },

        prototype: {
            /**
             * Adds a spinner to the button and hides the text
             *
             * @returns {HTMLElement}
             */
            busy: function() {
                if (isInputNode(this) || isBusy(this)) {
                    AJS.warn('It is not valid to call busy() on an input button.');
                    return this;
                }

                setSpinner(this);
                this.setAttribute('aria-busy', true);

                return this;
            },

            /**
             * Removes the spinner and shows the tick on the button
             *
             * @returns {HTMLElement}
             */
            idle: function() {
                if (isInputNode(this) || !isBusy(this)) {
                    AJS.warn('It is not valid to call idle() on an input button.');
                    return this;
                }

                getSpinner(this).remove();
                this.setAttribute('aria-busy', false);

                return this;
            },

            /**
             * Removes the spinner and shows the tick on the button
             *
             * @returns {Boolean}
             */
            isBusy: function() {
                if (isInputNode(this)) {
                    AJS.warn('It is not valid to call isBusy() on an input button.');
                    return false;
                }

                return isBusy(this);
            }
        }
    });
});

;(function(init) {
    'use strict';

    var ret = init(AJS.$, window.skate);
    define('aui/trigger',[],function() {
        return ret;
    });
})(function ($, skate) {
    'use strict';


    function findControlled(trigger) {
        return document.getElementById(trigger.getAttribute('aria-controls'));
    }

    function triggerMessage(trigger, e) {
        if (trigger.isEnabled()) {
            var component = findControlled(trigger);
            if (component && component.message) {
                component.message(e);
            }
        }
    }

    skate('data-aui-trigger', {
        type: skate.types.ATTR,
        events: {
            click: function(trigger, e) {
                triggerMessage(trigger, e);
                e.preventDefault();
            },
            mouseenter: function(trigger, e) {
                triggerMessage(trigger, e);
            },
            mouseleave: function(trigger, e) {
                triggerMessage(trigger, e);
            },
            focus: function(trigger, e) {
                triggerMessage(trigger, e);
            },
            blur: function(trigger, e) {
                triggerMessage(trigger, e);
            }
        },
        prototype: {
            disable: function() {
                this.setAttribute('aria-disabled', 'true');
            },
            enable: function() {
                this.setAttribute('aria-disabled', 'false');
            },
            isEnabled: function() {
                return this.getAttribute('aria-disabled') !== 'true';
            }
        }
    });
});

(function(init) {
    'use strict';
    var ret = init();
    //Always define inline dialog 2 so sidebar doesn't need to require this module.
    define('aui/inline-dialog2',['aui/internal/skate', './internal/alignment', './trigger', '../layer'], function () {
        return ret;
    });
})(function() {
    'use strict';

    var DEFAULT_HOVEROUT_DELAY = 1000;

    var $ = window.jQuery;
    var Alignment = AJS.Alignment;
    var Layer = AJS.layer;
    var skate = window.skate;

    function getTrigger (element) {
        return document.querySelector('[aria-controls="' + element.id + '"]');
    }

    function doIfTrigger (element, callback) {
        var trigger = getTrigger(element);

        if (trigger) {
            callback(trigger);
        }
    }

    function doIfHover (element, callback) {
        var isHover = element.getAttribute('responds-to') === 'hover';

        if (isHover) {
            callback(element);
        }
    }

    function initAlignment (element, trigger) {
        if (!element._auiAlignment) {
            element._auiAlignment = new Alignment(element, trigger);
        }
    }

    function enableAlignment (element, trigger) {
        initAlignment(element, trigger);
        element._auiAlignment.enable();
    }

    function disableAlignment (element, trigger) {
        initAlignment(element, trigger);
        element._auiAlignment.disable();
    }

    function handleMessage (element, message) {
        var messageTypeMap = {
            toggle: ['click'],
            hover: ['mouseenter', 'mouseleave', 'focus', 'blur']
        };
        var respondsTo = element.getAttribute('responds-to') || element.getAttribute('data-aui-responds-to');
        var messageList = messageTypeMap[respondsTo];

        if (messageList && messageList.indexOf(message.type) > -1) {
            messageHandler[message.type](element, message);
        }
    }

    var messageHandler = {
        click: function (element) {
            if (element.isVisible()) {
                if (!Layer(element).isPersistent()) {
                    element.hide();
                }
            }
            else {
                element.show();
            }
        },

        mouseenter: function (element) {
            if (!element.isVisible()) {
                element.show();
            }

            if (element._clearMouseleaveTimeout) {
                element._clearMouseleaveTimeout();
            }
        },

        mouseleave: function (element) {
            if (Layer(element).isPersistent() || !element.isVisible()) {
                return;
            }

            if (element._clearMouseleaveTimeout) {
                element._clearMouseleaveTimeout();
            }

            var timeout = setTimeout(function () {
                if (!element.mouseInside) {
                    element.hide();
                }
            }, DEFAULT_HOVEROUT_DELAY);

            element._clearMouseleaveTimeout = function () {
                clearTimeout(timeout);
                element._clearMouseleaveTimeout = null;
            };
        },

        focus: function (element) {
            if (!element.isVisible()) {
                element.show();
            }
        },

        blur: function (element) {
            if (!Layer(element).isPersistent() && element.isVisible()) {
                element.hide();
            }
        }
    };

    return skate('aui-inline-dialog2', {
        type: skate.types.TAG,

        prototype: {
            /**
             * Shows the inline dialog.
             *
             * @returns {HTMLElement}
             */
            show: function () {
                var that = this;

                Layer(this).show();

                doIfTrigger(this, function (trigger) {
                    enableAlignment(that, trigger);
                    trigger.setAttribute('aria-expanded', 'true');
                });

                return this;
            },

            /**
             * Hides the inline dialog.
             *
             * @returns {HTMLElement}
             */
            hide: function () {
                var that = this;

                Layer(this).hide();

                doIfTrigger(this, function (trigger) {
                    disableAlignment(that, trigger);
                    trigger.setAttribute('aria-expanded', 'false');
                });

                return this;
            },

            /**
             * Returns whether or not the inline dialog is visible.
             *
             * @returns {HTMLElement}
             */
            isVisible: function () {
                return Layer(this).isVisible();
            },

            /**
             * Handles the receiving of a message from another component.
             *
             * @param {Object} message The message to act on.
             *
             * @returns {HTMLElement}
             */
            message: function (message) {
                handleMessage(this, message);
                return this;
            }
        },

        created: function (element) {
            doIfTrigger(element, function (trigger) {
                trigger.setAttribute('aria-expanded', element.isVisible());
                trigger.setAttribute('aria-haspopup', 'true');
            });

            doIfHover(element, function () {
                element.mouseInside = false;

                element.addEventListener('mouseenter', function () {
                    element.mouseInside = true;
                    element.message({
                        type: 'mouseenter'
                    });
                });

                element.addEventListener('mouseleave', function () {
                    element.mouseInside = false;
                    element.message({
                        type: 'mouseleave'
                    });
                });
            });
        },

        detached: function (element) {
            if (element._auiAlignment) {
                element._auiAlignment.destroy();
            }
        },

        template: function (element) {
            $(element)
                .addClass('aui-layer')
                .attr('aria-hidden', 'true')
                .html('<div class="aui-inline-dialog-contents">' + element.innerHTML + '</div>');
        },
    });
});

/*
 * Ideas from https://gist.github.com/its-florida/1290439 are acknowledged and used here.
 * Resulting file is heavily modified from that gist so is licensed under AUI's license.
 *
 * You can now create a spinner using any of the variants below:
 *
 * $("#el").spin(); // Produces default Spinner using the text color of #el.
 * $("#el").spin("small"); // Produces a 'small' Spinner using the text color of #el.
 * $("#el").spin("large", { ... }); // Produces a 'large' Spinner with your custom settings.
 * $("#el").spin({ ... }); // Produces a Spinner using your custom settings.
 *
 * $("#el").spin(false); // Kills the spinner.
 * $("#el").spinStop(); // Also kills the spinner.
 *
 */
(function($) {
    $.fn.spin = function(optsOrPreset, opts) {
        var preset, options;

        if (typeof optsOrPreset === 'string') {
            if (! optsOrPreset in $.fn.spin.presets) {
                throw new Error("Preset '" + optsOrPreset + "' isn't defined");
            }
            preset = $.fn.spin.presets[optsOrPreset];
            options = opts || {};
        } else {
            if (opts) {
                throw new Error('Invalid arguments. Accepted arguments:\n' +
                    '$.spin([String preset[, Object options]]),\n' +
                    '$.spin(Object options),\n' +
                    '$.spin(Boolean shouldSpin)');
            }
            preset = $.fn.spin.presets.small;
            options = $.isPlainObject(optsOrPreset) ? optsOrPreset : {};
        }

        if (window.Spinner) {
            return this.each(function() {
                var $this = $(this),
                    data = $this.data();

                if (data.spinner) {
                    data.spinner.stop();
                    delete data.spinner;
                }

                if (optsOrPreset === false) { // just stop it spinning.
                    return;
                }

                options = $.extend({ color: $this.css('color') }, preset, options);
                data.spinner = new Spinner(options).spin(this);
            });
        } else {
            throw "Spinner class not available.";
        }
    };
    $.fn.spin.presets = {
        "small": { lines: 12, length: 3, width: 2, radius: 3, trail: 60, speed: 1.5 },
        "medium": { lines: 12, length: 5, width: 3, radius: 8, trail: 60, speed: 1.5 },
        "large": { lines: 12, length: 8, width: 4, radius: 10, trail: 60, speed: 1.5 }
    };

    $.fn.spinStop = function() {
        if (window.Spinner) {
            return this.each(function() {
                var $this = $(this),
                    data = $this.data();

                if (data.spinner) {
                    data.spinner.stop();
                    delete data.spinner;
                }

            });
        } else {
            throw "Spinner class not available.";
        }
    };
})(jQuery);
/*
 * raf.js
 * https://github.com/ngryman/raf.js
 *
 * original requestAnimationFrame polyfill by Erik Möller
 * inspired from paul_irish gist and post
 *
 * Copyright (c) 2013 ngryman
 * Licensed under the MIT license.
 */

(function(window) {
	var lastTime = 0,
		vendors = ['webkit', 'moz'],
		requestAnimationFrame = window.requestAnimationFrame,
		cancelAnimationFrame = window.cancelAnimationFrame,
		i = vendors.length;

	// try to un-prefix existing raf
	while (--i >= 0 && !requestAnimationFrame) {
		requestAnimationFrame = window[vendors[i] + 'RequestAnimationFrame'];
		cancelAnimationFrame = window[vendors[i] + 'CancelAnimationFrame'];
	}

	// polyfill with setTimeout fallback
	// heavily inspired from @darius gist mod: https://gist.github.com/paulirish/1579671#comment-837945
	if (!requestAnimationFrame || !cancelAnimationFrame) {
		requestAnimationFrame = function(callback) {
			var now = Date.now(), nextTime = Math.max(lastTime + 16, now);
			return setTimeout(function() {
				callback(lastTime = nextTime);
			}, nextTime - now);
		};

		cancelAnimationFrame = clearTimeout;
	}

	// export to window
	window.requestAnimationFrame = requestAnimationFrame;
	window.cancelAnimationFrame = cancelAnimationFrame;
}(window));
/* Modernizr 2.8.1 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-touch-teststyles-prefixes
 */
;



window.Modernizr = (function( window, document, undefined ) {

    var version = '2.8.0',

    Modernizr = {},


    docElement = document.documentElement,

    mod = 'modernizr',
    modElem = document.createElement(mod),
    mStyle = modElem.style,

    inputElem  ,


    toString = {}.toString,

    prefixes = ' -webkit- -moz- -o- -ms- '.split(' '),



    tests = {},
    inputs = {},
    attrs = {},

    classes = [],

    slice = classes.slice,

    featureName, 


    injectElementWithStyles = function( rule, callback, nodes, testnames ) {

      var style, ret, node, docOverflow,
          div = document.createElement('div'),
                body = document.body,
                fakeBody = body || document.createElement('body');

      if ( parseInt(nodes, 10) ) {
                      while ( nodes-- ) {
              node = document.createElement('div');
              node.id = testnames ? testnames[nodes] : mod + (nodes + 1);
              div.appendChild(node);
          }
      }

                style = ['&#173;','<style id="s', mod, '">', rule, '</style>'].join('');
      div.id = mod;
          (body ? div : fakeBody).innerHTML += style;
      fakeBody.appendChild(div);
      if ( !body ) {
                fakeBody.style.background = '';
                fakeBody.style.overflow = 'hidden';
          docOverflow = docElement.style.overflow;
          docElement.style.overflow = 'hidden';
          docElement.appendChild(fakeBody);
      }

      ret = callback(div, rule);
        if ( !body ) {
          fakeBody.parentNode.removeChild(fakeBody);
          docElement.style.overflow = docOverflow;
      } else {
          div.parentNode.removeChild(div);
      }

      return !!ret;

    },
    _hasOwnProperty = ({}).hasOwnProperty, hasOwnProp;

    if ( !is(_hasOwnProperty, 'undefined') && !is(_hasOwnProperty.call, 'undefined') ) {
      hasOwnProp = function (object, property) {
        return _hasOwnProperty.call(object, property);
      };
    }
    else {
      hasOwnProp = function (object, property) { 
        return ((property in object) && is(object.constructor.prototype[property], 'undefined'));
      };
    }


    if (!Function.prototype.bind) {
      Function.prototype.bind = function bind(that) {

        var target = this;

        if (typeof target != "function") {
            throw new TypeError();
        }

        var args = slice.call(arguments, 1),
            bound = function () {

            if (this instanceof bound) {

              var F = function(){};
              F.prototype = target.prototype;
              var self = new F();

              var result = target.apply(
                  self,
                  args.concat(slice.call(arguments))
              );
              if (Object(result) === result) {
                  return result;
              }
              return self;

            } else {

              return target.apply(
                  that,
                  args.concat(slice.call(arguments))
              );

            }

        };

        return bound;
      };
    }

    function setCss( str ) {
        mStyle.cssText = str;
    }

    function setCssAll( str1, str2 ) {
        return setCss(prefixes.join(str1 + ';') + ( str2 || '' ));
    }

    function is( obj, type ) {
        return typeof obj === type;
    }

    function contains( str, substr ) {
        return !!~('' + str).indexOf(substr);
    }


    function testDOMProps( props, obj, elem ) {
        for ( var i in props ) {
            var item = obj[props[i]];
            if ( item !== undefined) {

                            if (elem === false) return props[i];

                            if (is(item, 'function')){
                                return item.bind(elem || obj);
                }

                            return item;
            }
        }
        return false;
    }
    tests['touch'] = function() {
        var bool;

        if(('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
          bool = true;
        } else {
          injectElementWithStyles(['@media (',prefixes.join('touch-enabled),('),mod,')','{#modernizr{top:9px;position:absolute}}'].join(''), function( node ) {
            bool = node.offsetTop === 9;
          });
        }

        return bool;
    };
    for ( var feature in tests ) {
        if ( hasOwnProp(tests, feature) ) {
                                    featureName  = feature.toLowerCase();
            Modernizr[featureName] = tests[feature]();

            classes.push((Modernizr[featureName] ? '' : 'no-') + featureName);
        }
    }



     Modernizr.addTest = function ( feature, test ) {
       if ( typeof feature == 'object' ) {
         for ( var key in feature ) {
           if ( hasOwnProp( feature, key ) ) {
             Modernizr.addTest( key, feature[ key ] );
           }
         }
       } else {

         feature = feature.toLowerCase();

         if ( Modernizr[feature] !== undefined ) {
                                              return Modernizr;
         }

         test = typeof test == 'function' ? test() : test;

         if (typeof enableClasses !== "undefined" && enableClasses) {
           docElement.className += ' ' + (test ? '' : 'no-') + feature;
         }
         Modernizr[feature] = test;

       }

       return Modernizr; 
     };


    setCss('');
    modElem = inputElem = null;


    Modernizr._version      = version;

    Modernizr._prefixes     = prefixes;

    Modernizr.testStyles    = injectElementWithStyles;
    return Modernizr;

})(this, this.document);
;
;(function(init) {
    'use strict';

    AJS.navigation = init(AJS.$, window.skate, AJS._internal.widget);
})(function ($, skate, widget) {

    'use strict';

    /**
     * Navigation (".aui-nav" elements).
     *
     * @param {(string|HtmlElement|jQuery)} selector - An expression
     *     representing a single .aui-nav element; you may also pass an expression
     *     for a descendent element, in which case the closest containing
     *     .aui-nav element is used.
     * @constructor
     */
    function Navigation (selector) {
        this.$el = $(selector).closest('.aui-nav');

        // If there are multiple objects, initialise them separately
        if (this.$el.length > 1) {
            return this.$el.map(function(idx, elm) {
                return new Navigation(elm);
            })[0];
        }

        // If already initialised, return existing object
        if (this.$el.data('aui-navigation')) {
            return this.$el.data('aui-navigation');
        }

        this.$el.data('aui-navigation', this);

        this.$treeParent = this.$el.parent('li[aria-expanded]');
        this.$subtreeToggleIcon = this.$treeParent
            .children('.aui-nav-subtree-toggle')
            .children('span.aui-icon');

        // Hide extra items under a 'More...' link
        this.hideMoreItems();

        // Add child-selected class to relevant attributes
        this.$el.children('li:has(.aui-nav-selected)').addClass('aui-nav-child-selected');

        // Auto-expand if child is selected
        var $selected = this.$el.children('.aui-nav-selected');
        $selected
            .parents('.aui-nav > [aria-expanded=false]')
            .add($selected.filter('[aria-expanded=false]'))
            .each(function() {
                var nav = navigationWidget($(this).children('.aui-nav'));
                nav.expand();
            });

        // Toggle expand on click
        this.$el.find('> li[aria-expanded] > .aui-nav-subtree-toggle').on('click', function () {
            var nav = navigationWidget($(this).siblings('.aui-nav'));
            nav.toggle();
        });

        return this;
    }

    Navigation.prototype.isNested = function () {
        return this.$treeParent.length === 1;
    };

    Navigation.prototype.isCollapsed = function () {
        return this.$treeParent.attr('aria-expanded') === 'false';
    };

    Navigation.prototype.expand = function () {
        this.$treeParent.attr('aria-expanded', 'true');
        this.$subtreeToggleIcon
            .removeClass('aui-iconfont-collapsed')
            .addClass('aui-iconfont-expanded');
        this.hideMoreItems();
        return this;
    };

    Navigation.prototype.collapse = function () {
        this.$treeParent.attr('aria-expanded', 'false');
        this.$subtreeToggleIcon
            .removeClass('aui-iconfont-expanded')
            .addClass('aui-iconfont-collapsed');
        return this;
    };

    Navigation.prototype.toggle = function () {
        if (this.isCollapsed()) {
            this.expand();
        } else {
            this.collapse();
        }
        return this;
    };

    Navigation.prototype.hideMoreItems = function() {
        if (this.$el.is('.aui-nav:not([aria-expanded=false]) [data-more]')) {
            var moreText = this.$el.attr('data-more') || AJS.I18n.getText('aui.words.moreitem');
            var limit = Math.abs(parseInt(this.$el.attr('data-more-limit'))) || 5;
            var $listElements = this.$el.children('li');

            // Only add 'More...' if there is more than one element to hide and there are no selected elements
            var lessThanTwoToHide = $listElements.length <= limit + 1;
            var selectedElementPresent = $listElements.filter('.aui-nav-selected').length;
            var alreadyInitialised = $listElements.filter('.aui-nav-more').length;
            if (lessThanTwoToHide || selectedElementPresent || alreadyInitialised) {
                return this;
            }

            $('<li>', {
                'class': 'aui-nav-more',
                'aria-hidden': 'true'
            }).append($('<a>', {
                'href': '#',
                'class': 'aui-nav-item',
                'text': moreText,
                'click': function(e) {
                    e.preventDefault();
                    $(this).parent().remove();
                }
            })).insertAfter($listElements.eq(limit - 1));
        }

        return this;
    };


    var navigationWidget = widget('navigation', Navigation);

    // Initialise nav elements
    skate('aui-nav', {
        attached: function(element) {
            navigationWidget(element);
        }
    });


    return navigationWidget;

});

(function ($) {
    'use strict';

    var SUPPORTS_TRANSITIONS = (typeof document.documentElement.style['transition'] !== "undefined") ||
            (typeof document.documentElement.style['webkitTransition'] !== "undefined");

    function sidebarOffset (sidebar) {
        return sidebar.offset().top;
    }

    function Sidebar (selector) {
        this.$el = $(selector);
        if (!this.$el.length) {
            return;
        }
        this.$body = $('body');
        this.$wrapper = this.$el.children('.aui-sidebar-wrapper');

        // Sidebar users should add class="aui-page-sidebar" to the
        // <body> in the rendered markup (to prevent any potential flicker),
        // so we add it just in case they forgot.
        this.$body.addClass('aui-page-sidebar');

        this._previousScrollTop = null;
        this._previousViewportHeight = null;
        this._previousViewportWidth = null;
        this._previousOffsetTop = null;

        this.submenus = new SubmenuManager();

        initializeHandlers(this);
        constructAllSubmenus(this);
    }

    var FORCE_COLLAPSE_WIDTH = 1240;
    var EVENT_PREFIX = '_aui-internal-sidebar-';

    Sidebar.prototype.on = function () {
        var events = arguments[0];
        var args = Array.prototype.slice.call(arguments, 1);
        var namespacedEvents = $.map(events.split(' '), function (event) {
            return EVENT_PREFIX + event;
        }).join(' ');
        this.$el.on.apply(this.$el, [namespacedEvents].concat(args));
        return this;
    };

    Sidebar.prototype.setHeight = function (scrollTop, viewportHeight, headerHeight) {
        var visibleHeaderHeight = Math.max(0, headerHeight - scrollTop);
        this.$wrapper.height(viewportHeight - visibleHeaderHeight);
        return this;
    };

    Sidebar.prototype.setPosition = function (scrollTop) {
        scrollTop = scrollTop || window.pageYOffset;
        this.$wrapper.toggleClass('aui-is-docked', scrollTop > sidebarOffset(this.$el));
        return this;
    };

    Sidebar.prototype.setCollapsedState = function (viewportWidth) {
        // Reflow behaviour is implemented as a state machine (hence all
        // state transitions are enumerated). The rest of the state machine,
        // e.g., entering the expanded narrow (fly-out) state, is implemented
        // by the toggle() method.
        var transition = {collapsed: {}, expanded: {}};
        transition.collapsed.narrow = {
            narrow: $.noop,
            wide: function (s) { s._expand(viewportWidth); }
        };
        transition.collapsed.wide = {
            narrow: $.noop,  // Becomes collapsed narrow (no visual change).
            wide: $.noop
        };
        transition.expanded.narrow = {
            narrow: $.noop,
            wide: function (s) {
                s.$body.removeClass('aui-sidebar-collapsed');
                s.$el.removeClass('aui-sidebar-fly-out');
            }
        };
        transition.expanded.wide = {
            narrow: function (s) { s.collapse(); },
            wide: $.noop
        };

        var collapseState = this.isCollapsed() ? 'collapsed' : 'expanded';
        var oldSize = this.isViewportNarrow(this._previousViewportWidth) ? 'narrow' : 'wide';
        var newSize = this.isViewportNarrow(viewportWidth) ? 'narrow' : 'wide';
        transition[collapseState][oldSize][newSize](this);
        return this;
    };

    Sidebar.prototype.collapse = function () {
        if (this.isCollapsed()) {
            return this;
        }

        this.$el.trigger($.Event(EVENT_PREFIX + 'collapse-start'));

        this.$body.addClass('aui-sidebar-collapsed');
        this.$el.attr('aria-expanded', 'false');
        this.$el.removeClass('aui-sidebar-fly-out');

        if (!this.isAnimated()) {
            this.$el.trigger($.Event(EVENT_PREFIX + 'collapse-end'));
        }
        return this;
    };

    Sidebar.prototype._expand = function (viewportWidth) {
        this.$el.trigger($.Event(EVENT_PREFIX + 'expand-start'));

        var isViewportNarrow = this.isViewportNarrow(viewportWidth);
        this.$el.attr('aria-expanded', 'true');
        this.$body.toggleClass('aui-sidebar-collapsed', isViewportNarrow);
        this.$el.toggleClass('aui-sidebar-fly-out', isViewportNarrow);

        if (!this.isAnimated()) {
            this.$el.trigger($.Event(EVENT_PREFIX + 'expand-end'));
        }
        return this;
    };

    Sidebar.prototype.expand = function () {
        if (this.isCollapsed()) {
            this._expand(this._previousViewportWidth);
        }
        return this;
    };

    Sidebar.prototype.isAnimated = function () {
        return SUPPORTS_TRANSITIONS && this.$el.hasClass('aui-is-animated');
    };

    Sidebar.prototype.isCollapsed = function () {
        return this.$el.attr('aria-expanded') === 'false';
    };

    Sidebar.prototype.isViewportNarrow = function (viewportWidth) {
        viewportWidth = viewportWidth === undefined ? this._previousViewportWidth : viewportWidth;
        return viewportWidth < FORCE_COLLAPSE_WIDTH;
    };

    Sidebar.prototype.reflow = function (scrollTop, viewportHeight, viewportWidth, scrollHeight) {
        scrollTop = scrollTop === undefined ? window.pageYOffset : scrollTop;
        viewportHeight = viewportHeight === undefined ? document.documentElement.clientHeight : viewportHeight;
        scrollHeight = scrollHeight === undefined ? document.documentElement.scrollHeight: scrollHeight;
        viewportWidth = viewportWidth === undefined ? window.innerWidth :viewportWidth;

        // Header height needs to be checked because in Stash it changes when the CSS "transform: translate3d" is changed.
        // If you called reflow() after this change then nothing happened because the scrollTop and viewportHeight hadn't changed.
        var offsetTop = sidebarOffset(this.$el);

        if (!(scrollTop === this._previousScrollTop && viewportHeight === this._previousViewportHeight && offsetTop === this._previousOffsetTop)) {
          if (!this.$body.hasClass('aui-page-sidebar-touch') && scrollTop <= scrollHeight - viewportHeight) {
            this.setHeight(scrollTop, viewportHeight, offsetTop);
            this.setPosition(scrollTop);
          }
        }

        var isResponsive = this.$el.attr('data-aui-responsive') !== 'false';
        if (isResponsive) {
            var isInitialPageLoad = this._previousViewportWidth === null;
            if (isInitialPageLoad) {
                if (!this.isCollapsed() && this.isViewportNarrow(viewportWidth)) {
                    var isAnimated = this.isAnimated();
                    if (isAnimated) {
                        this.$el.removeClass('aui-is-animated');
                    }
                    // This will trigger the "collapse" event before non-sidebar
                    // JS code has a chance to bind listeners; they'll need to
                    // check isCollapsed() if they care about the value at that
                    // time.
                    this.collapse();
                    if (isAnimated) {
                        // We must trigger a CSS reflow (by accessing
                        // offsetHeight) otherwise the transition still runs.
                        // jshint expr:true
                        this.$el[0].offsetHeight;
                        this.$el.addClass('aui-is-animated');
                    }
                }
            } else if (viewportWidth !== this._previousViewportWidth) {
                this.setCollapsedState(viewportWidth);
            }
        } else {
            var isFlyOut = !this.isCollapsed() && this.isViewportNarrow(viewportWidth);
            this.$el.toggleClass('aui-sidebar-fly-out', isFlyOut);
        }

        this._previousScrollTop = scrollTop;
        this._previousViewportHeight = viewportHeight;
        this._previousViewportWidth = viewportWidth;
        this._previousOffsetTop = offsetTop;
        return this;
    };

    Sidebar.prototype.toggle = function () {
        if (this.isCollapsed()) {
            this.expand();
            // tooltips are orphaned when sidebar is expanded, so if there are any visible on the page we remove them all.
            // Can't scope it to the Sidebar (this) because the tooltip div is a direct child of <body>
            $('.aui-sidebar-section-tooltip').remove();
        } else {
            this.collapse();
        }
        return this;
    };

    /**
     * Returns a jQuery selector string for the trigger elements when the
     * sidebar is in a collapsed state, useful for delegated event binding.
     *
     * When using this selector in event handlers, the element ("this") will
     * either be an <a> (when the trigger was a tier-one menu item) or an
     * element with class "aui-sidebar-group" (for non-tier-one items).
     *
     * For delegated event binding you should bind to $el and check the value
     * of isCollapsed(), e.g.,
     *
     *     sidebar.$el.on('click', sidebar.collapsedTriggersSelector, function (e) {
     *         if (!sidebar.isCollapsed()) {
     *             return;
     *         }
     *     });
     *
     * @returns string
     */
    Sidebar.prototype.collapsedTriggersSelector = [
        '.aui-sidebar-group:not(.aui-sidebar-group-tier-one)',
        '.aui-sidebar-group.aui-sidebar-group-tier-one > .aui-nav > li > a',
        '.aui-sidebar-footer > .aui-sidebar-settings-button'
    ].join(', ');

    Sidebar.prototype.toggleSelector = '.aui-sidebar-footer > .aui-sidebar-toggle';

    function getAllSubmenuDialogs() {
        return document.querySelectorAll('.aui-sidebar-submenu-dialog');
    }

    function SubmenuManager () {
        this.inlineDialog = null;
    }

    SubmenuManager.prototype.submenu = function ($trigger) {
        sidebarSubmenuDeprecationLogger();
        return getSubmenu($trigger);
    };

    SubmenuManager.prototype.hasSubmenu = function ($trigger) {
        sidebarSubmenuDeprecationLogger();
        return hasSubmenu($trigger);
    };

    SubmenuManager.prototype.submenuHeadingHeight = function () {
        sidebarSubmenuDeprecationLogger();
        return 34;
    };

    SubmenuManager.prototype.isShowing = function () {
        sidebarSubmenuDeprecationLogger();
        var allSubmenuDialogs = getAllSubmenuDialogs();
        var submenuDialogsShowing = Array.prototype.map.call(allSubmenuDialogs, function (inlineDialog2) {
            return inlineDialog2.isVisible();
        });

        if (!submenuDialogsShowing.length) {
            return false;
        }

        return submenuDialogsShowing.reduce(function (a, b) {
            return a || b;
        });
    };

    SubmenuManager.prototype.show = function (e, trigger) {
        sidebarSubmenuDeprecationLogger();
        var inlineDialogId = trigger.getAttribute('aria-controls');
        document.getElementById(inlineDialogId).show();
    };

    SubmenuManager.prototype.hide = function () {
        sidebarSubmenuDeprecationLogger();
        var allSubmenuDialogs = getAllSubmenuDialogs();
        Array.prototype.forEach.call(allSubmenuDialogs, function(inlineDialog2) {
            inlineDialog2.hide();
        });
    };

    SubmenuManager.prototype.inlineDialogShowHandler = function () {
        sidebarSubmenuDeprecationLogger();
    };
    SubmenuManager.prototype.inlineDialogHideHandler = function () {
        sidebarSubmenuDeprecationLogger();
    };
    SubmenuManager.prototype.moveSubmenuToInlineDialog = function () {
        sidebarSubmenuDeprecationLogger();
    };
    SubmenuManager.prototype.restoreSubmenu = function () {
        sidebarSubmenuDeprecationLogger();
    };

    function getSubmenu ($trigger) {
        return $trigger.is('a') ? $trigger.next('.aui-nav') : $trigger.children('.aui-nav, hr');
    }

    function hasSubmenu ($trigger) {
        return getSubmenu($trigger).length !== 0;
    }

    function constructSubmenu(sidebar, $trigger) {
        if ($trigger.data('_aui-sidebar-submenu-constructed')) {
            return;
        } else {
            $trigger.data('_aui-sidebar-submenu-constructed', true)
        }

        var submenuInlineDialog = document.createElement('aui-inline-dialog2');

        var uniqueId = AJS.id('sidebar-submenu');

        $trigger.attr('aria-controls', uniqueId);
        $trigger.attr('data-aui-trigger', '');
        skate.init($trigger); //Trigger doesn't listen to attribute modification

        submenuInlineDialog.setAttribute('id', uniqueId);
        submenuInlineDialog.setAttribute('alignment', 'right top');
        submenuInlineDialog.setAttribute('responds-to', 'hover');
        submenuInlineDialog.setAttribute('aria-hidden', 'true');
        
        submenuInlineDialog.classList.add('aui-sidebar-submenu-dialog');

        document.body.appendChild(submenuInlineDialog);
        skate.init(submenuInlineDialog); //Needed so that sidebar.submenus.isShowing() will work on page load

        addHandlersToSubmenuInlineDialog(sidebar, $trigger, submenuInlineDialog);

        return submenuInlineDialog;
    }

    function addHandlersToSubmenuInlineDialog(sidebar, $trigger, submenuInlineDialog) {
        submenuInlineDialog.addEventListener('aui-layer-show', function(e) {
            if (!sidebar.isCollapsed()) {
                e.preventDefault();
                return;
            }
            inlineDialogShowHandler($trigger, submenuInlineDialog);
        });

        submenuInlineDialog.addEventListener('aui-layer-hide', function() {
            inlineDialogHideHandler($trigger);
        });
    }

    function inlineDialogShowHandler($trigger, submenuInlineDialog) {
        $trigger.addClass('active');
        submenuInlineDialog.innerHTML = SUBMENU_INLINE_DIALOG_CONTENTS_HTML;
        var title = $trigger.is('a') ? $trigger.text() : $trigger.children('.aui-nav-heading').text();

        var $container = $(submenuInlineDialog).find('.aui-navgroup-inner');
        $container.children('.aui-nav-heading')
            .attr('title', title)
            .children('strong')
            .text(title);

        var $submenu = getSubmenu($trigger);
        $submenu.clone().appendTo($container);
    }

    var SUBMENU_INLINE_DIALOG_CONTENTS_HTML =
        '<div class="aui-inline-dialog-contents">' +
            '<div class="aui-sidebar-submenu" >' +
                '<div class="aui-navgroup aui-navgroup-vertical">' +
                    '<div class="aui-navgroup-inner">' +
                        '<div class="aui-nav-heading"><strong></strong></div>' +
                    '</div>' +
                '</div>' +
            '</div>' +
        '</div>';

    function inlineDialogHideHandler($trigger) {
        $trigger.removeClass('active');

    }

    function constructAllSubmenus(sidebar) {
        $(sidebar.collapsedTriggersSelector).each(function() {
            var $trigger = $(this);
            if (hasSubmenu($trigger)) {
                constructSubmenu(sidebar, $trigger);
            }
        });
    }

    var tipsyOpts = {
        trigger: 'manual',
        gravity: 'w',
        className: 'aui-sidebar-section-tooltip',
        title: function () {
            var $item = $(this);
            if ($item.is('a')) {
                return $item.attr('title') || $item.find('.aui-nav-item-label').text() || $item.data('tooltip');
            } else {
                return $item.children('.aui-nav').attr('title') || $item.children('.aui-nav-heading').text();
            }
        }
    };

    function showTipsy($trigger) {
        $trigger.tipsy(tipsyOpts).tipsy('show');
        var $tip = $trigger.data('tipsy') && $trigger.data('tipsy').$tip;
        if ($tip) { // if .aui-sidebar-group does not have a title to display
            // Remove "opacity" inline style from Tipsy to allow the our own styles and transitions to be applied
            $tip.css({'opacity': ''}).addClass('tooltip-shown');
        }
    }

    function hideTipsy($trigger) {
        var $tip = $trigger.data('tipsy') && $trigger.data('tipsy').$tip;
        if ($tip) {
            var durationStr = $tip.css('transition-duration');

            if (durationStr) {
                // can be denominated in either s or ms
                var timeoutMs = (durationStr.indexOf('ms') >= 0) ?
                    parseInt(durationStr.substring(0, durationStr.length - 2), 10) :
                    1000 * parseInt(durationStr.substring(0, durationStr.length - 1), 10);

                // use a timeout because the transitionend event is not reliable (yet),
                // more details here: https://bitbucket.atlassian.net/browse/BB-11599
                // an example of this at http://labs.silverorange.com/files/webkit-bug/
                // further caveats here: https://developer.mozilla.org/en-US/docs/Web/Events/transitionend
                // "In the case where a transition is removed before completion,
                // such as if the transition-property is removed, then the event will not fire."
                setTimeout(function () {
                    $trigger.tipsy('hide');
                }, timeoutMs);
            }

            $tip.removeClass('tooltip-shown');
        }
    }

    function initializeHandlers(sidebar) {
        var $sidebar = $('.aui-sidebar');
        if (!$sidebar.length) {
            return;
        }

        if (Modernizr.touch) {
            $('body').addClass('aui-page-sidebar-touch');
        }

        var pendingReflow = null;
        $(window).on('scroll resize', function () {
            if (pendingReflow === null) {
                pendingReflow = requestAnimationFrame(function () {
                    sidebar.reflow();
                    pendingReflow = null;
                });
            }
        });
        sidebar.reflow();

        if (sidebar.isAnimated()) {
            sidebar.$el.on('transitionend webkitTransitionEnd', function () {
                sidebar.$el.trigger($.Event(EVENT_PREFIX + (sidebar.isCollapsed() ? 'collapse-end' : 'expand-end')));
            });
        }

        sidebar.$el.on('click', '.aui-sidebar-toggle', function (e) {
            e.preventDefault();
            sidebar.toggle();
        });

        sidebar.$el.on('click', '.aui-sidebar-body', function (e) {
            if($(e.target).is('.aui-sidebar-body')) {
                e.preventDefault();
                sidebar.toggle();
            }
        });

        $('.aui-page-panel').click(function (e) {
            if (!sidebar.isCollapsed() && sidebar.isViewportNarrow()) {
                sidebar.collapse();
            }
        });

        AJS.whenIType('[').execute(function () {
            sidebar.toggle();
        });

        sidebar.$el.on('touchend', function (e) {
            if (sidebar.isCollapsed()) {
                sidebar.expand();
                e.preventDefault();
            }
        });

        sidebar.$el.on('mouseenter focus', sidebar.collapsedTriggersSelector, function (e) {
            if (!sidebar.isCollapsed()) {
                return;
            }

            var $trigger = $(this);

            if (!hasSubmenu($trigger)) {
                showTipsy($trigger);
            }
        });

        sidebar.$el.on('click blur mouseleave', sidebar.collapsedTriggersSelector, function (e) {
            if (!sidebar.isCollapsed()) {
                return;
            }
            hideTipsy($(this));
        });

        sidebar.$el.on('mouseenter focus', sidebar.toggleSelector, function () {
            var $trigger = $(this);
            if(sidebar.isCollapsed()) {
                $trigger.data('tooltip', AJS.I18n.getText('aui.sidebar.expand.tooltip'));
            } else {
                $trigger.data('tooltip', AJS.I18n.getText('aui.sidebar.collapse.tooltip'));
            }
            showTipsy($trigger);
        });

        sidebar.$el.on('click blur mouseleave', sidebar.toggleSelector, function () {
            hideTipsy($(this));
        });

        sidebar.$el.find('.aui-sidebar-body').on('mouseenter mouseover mouseleave',function(e) {
            sidebar.$el.toggleClass('aui-is-hover',
                (e.type === 'mouseover' || e.type === 'mouseenter')
                    && !$(e.target).parentsUntil(sidebar.$el).filter('.aui-page-header, .aui-navgroup').length);
        });
    }
    AJS.sidebar = AJS._internal.widget('sidebar', Sidebar);

    $(function () {
        AJS.sidebar('.aui-sidebar');
    });

    var sidebarSubmenuDeprecationLogger = AJS.deprecate.getMessageLogger('Sidebar.submenus', {
        removeInVersion: '6.0',
        sinceVersion: '5.8'
    });

}(AJS.$));

;(function(init) {
    'use strict';

    define('aui/flag',[],function() {
        return init(AJS, AJS.$, AJS.template);
    });
})(function (AJS, $, template) {
    'use strict';

    var AUTO_CLOSE_TIME = 5000;
    var ID_FLAG_CONTAINER = 'aui-flag-container';
    var defaultOptions = {
            body: '',
            close: 'manual',
            title: '',
            type: 'info'
        };

    function flag (options) {
        options = $.extend({}, defaultOptions, options);

        var $flag = renderFlagElement(options);
        extendFlagElement($flag);

        if (options.close === 'auto') {
            makeCloseable($flag);
            makeAutoClosable($flag);
        } else if (options.close === 'manual') {
            makeCloseable($flag);
        }

        pruneFlagContainer();

        return insertFlag($flag);
    }

    function extendFlagElement ($flag) {
        var flag = $flag[0];

        flag.close = function () {
            closeFlag($flag);
        };
    }

    function renderFlagElement (options) {
        var html =
            '<div class="aui-flag">' +
                '<div class="aui-message aui-message-{type} {type} {closeable} shadowed">' +
                    '<p class="title">' +
                    '<strong>{title}</strong>' +
                    '</p>' +
                    '{body}<!-- .aui-message -->' +
                '</div>' +
            '</div>';
        var rendered = template(html).fill({
                'body:html': options.body || '',
                closeable: (options.close === 'never') ? '' : 'closeable',
                title: options.title || '',
                type: options.type
            }).toString();

        return $(rendered);
    }

    function makeCloseable ($flag) {
        var $icon = $('<span class="aui-icon icon-close" role="button" tabindex="0"></span>');

        $icon.click(function () {
            closeFlag($flag);
        });

        $icon.keypress(function(e) {
            if ((e.which === AJS.keyCode.ENTER) || (e.which === AJS.keyCode.SPACE)) {
                closeFlag($flag);
                e.preventDefault();
            }
        });

        return $flag.find('.aui-message').append($icon)[0];
    }

    function makeAutoClosable ($flag) {
        $flag.find('.aui-message').addClass('aui-will-close');
        setTimeout(function () {
            $flag[0].close();
        }, AUTO_CLOSE_TIME);
    }

    function closeFlag ($flagToClose) {
        var flag = $flagToClose.get(0);

        flag.setAttribute('aria-hidden', 'true');
        flag.dispatchEvent(new CustomEvent('aui-flag-close', { bubbles: true }));

        return flag;
    }

    function pruneFlagContainer () {
        var $container = findContainer();
        var $allFlags = $container.find('.aui-flag');

        $allFlags.get().forEach(function(flag) {
            var isFlagAriaHidden = flag.getAttribute('aria-hidden') === 'true';

            if (isFlagAriaHidden) {
                $(flag).remove();
            }
        });
    }

    function findContainer () {
        return $('#' + ID_FLAG_CONTAINER);
    }

    function insertFlag ($flag) {
        var $flagContainer = findContainer();

        if (!$flagContainer.length) {
            $flagContainer = $('<div id="' + ID_FLAG_CONTAINER + '"></div>');
            $('body').prepend($flagContainer);
        }

        $flag.appendTo($flagContainer);
        AJS._internal.animation.recomputeStyle($flag);

        return $flag.attr('aria-hidden', 'false')[0];
    }

    return flag;
});

;(function(init) {
    'use strict';

    define('aui/banner',[],function() {
        return init(AJS, AJS.$, AJS.template);
    });
})(function (AJS, $, template) {
    'use strict';

    var ID_BANNER_CONTAINER = 'header';

    function banner (options) {
        var $banner = renderBannerElement(options);

        pruneBannerContainer();
        insertBanner($banner);

        return $banner[0];
    }

    function renderBannerElement(options) {
        var html =
            '<div class="aui-banner aui-banner-{type}" role="banner">' +
                '{body}' +
            '</div>';

        var $banner = $(template(html).fill({
            'type': 'error',
            'body:html': options.body || ''
        }).toString());

        return $banner;
    }

    function pruneBannerContainer() {
        var $container = findContainer();
        var $allBanners = $container.find('.aui-banner');

        $allBanners.get().forEach(function(banner) {
            var isBannerAriaHidden = banner.getAttribute('aria-hidden') === 'true';
            if (isBannerAriaHidden) {
                $(banner).remove();
            }
        });
    }

    function findContainer() {
        return $('#' + ID_BANNER_CONTAINER);
    }

    function insertBanner($banner) {
        var $bannerContainer = findContainer();
        if (!$bannerContainer.length) {
            throw new Error('You must implement the application header');
        }

        $banner.prependTo($bannerContainer);
        AJS._internal.animation.recomputeStyle($banner);
        $banner.attr('aria-hidden', 'false');
    }

    return banner;
});

//     Underscore.js 1.5.2
//     http://underscorejs.org
//     (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.

(function() {

    // Baseline setup
    // --------------

    // Establish the root object, `window` in the browser, or `exports` on the server.
    var root = this;

    // Save the previous value of the `_` variable.
    var previousUnderscore = root._;

    // Establish the object that gets returned to break out of a loop iteration.
    var breaker = {};

    // Save bytes in the minified (but not gzipped) version:
    var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;

    // Create quick reference variables for speed access to core prototypes.
    var
        push             = ArrayProto.push,
        slice            = ArrayProto.slice,
        concat           = ArrayProto.concat,
        toString         = ObjProto.toString,
        hasOwnProperty   = ObjProto.hasOwnProperty;

    // All **ECMAScript 5** native function implementations that we hope to use
    // are declared here.
    var
        nativeForEach      = ArrayProto.forEach,
        nativeMap          = ArrayProto.map,
        nativeReduce       = ArrayProto.reduce,
        nativeReduceRight  = ArrayProto.reduceRight,
        nativeFilter       = ArrayProto.filter,
        nativeEvery        = ArrayProto.every,
        nativeSome         = ArrayProto.some,
        nativeIndexOf      = ArrayProto.indexOf,
        nativeLastIndexOf  = ArrayProto.lastIndexOf,
        nativeIsArray      = Array.isArray,
        nativeKeys         = Object.keys,
        nativeBind         = FuncProto.bind;

    // Create a safe reference to the Underscore object for use below.
    var _ = function(obj) {
        if (obj instanceof _) return obj;
        if (!(this instanceof _)) return new _(obj);
        this._wrapped = obj;
    };

    // Export the Underscore object for **Node.js**, with
    // backwards-compatibility for the old `require()` API. If we're in
    // the browser, add `_` as a global object via a string identifier,
    // for Closure Compiler "advanced" mode.
    if (typeof exports !== 'undefined') {
        if (typeof module !== 'undefined' && module.exports) {
            exports = module.exports = _;
        }
        exports._ = _;
    } else {
        root._ = _;
    }

    // Current version.
    _.VERSION = '1.5.2';

    // Collection Functions
    // --------------------

    // The cornerstone, an `each` implementation, aka `forEach`.
    // Handles objects with the built-in `forEach`, arrays, and raw objects.
    // Delegates to **ECMAScript 5**'s native `forEach` if available.
    var each = _.each = _.forEach = function(obj, iterator, context) {
        if (obj == null) return;
        if (nativeForEach && obj.forEach === nativeForEach) {
            obj.forEach(iterator, context);
        } else if (obj.length === +obj.length) {
            for (var i = 0, length = obj.length; i < length; i++) {
                if (iterator.call(context, obj[i], i, obj) === breaker) return;
            }
        } else {
            var keys = _.keys(obj);
            for (var i = 0, length = keys.length; i < length; i++) {
                if (iterator.call(context, obj[keys[i]], keys[i], obj) === breaker) return;
            }
        }
    };

    // Return the results of applying the iterator to each element.
    // Delegates to **ECMAScript 5**'s native `map` if available.
    _.map = _.collect = function(obj, iterator, context) {
        var results = [];
        if (obj == null) return results;
        if (nativeMap && obj.map === nativeMap) return obj.map(iterator, context);
        each(obj, function(value, index, list) {
            results.push(iterator.call(context, value, index, list));
        });
        return results;
    };

    var reduceError = 'Reduce of empty array with no initial value';

    // **Reduce** builds up a single result from a list of values, aka `inject`,
    // or `foldl`. Delegates to **ECMAScript 5**'s native `reduce` if available.
    _.reduce = _.foldl = _.inject = function(obj, iterator, memo, context) {
        var initial = arguments.length > 2;
        if (obj == null) obj = [];
        if (nativeReduce && obj.reduce === nativeReduce) {
            if (context) iterator = _.bind(iterator, context);
            return initial ? obj.reduce(iterator, memo) : obj.reduce(iterator);
        }
        each(obj, function(value, index, list) {
            if (!initial) {
                memo = value;
                initial = true;
            } else {
                memo = iterator.call(context, memo, value, index, list);
            }
        });
        if (!initial) throw new TypeError(reduceError);
        return memo;
    };

    // The right-associative version of reduce, also known as `foldr`.
    // Delegates to **ECMAScript 5**'s native `reduceRight` if available.
    _.reduceRight = _.foldr = function(obj, iterator, memo, context) {
        var initial = arguments.length > 2;
        if (obj == null) obj = [];
        if (nativeReduceRight && obj.reduceRight === nativeReduceRight) {
            if (context) iterator = _.bind(iterator, context);
            return initial ? obj.reduceRight(iterator, memo) : obj.reduceRight(iterator);
        }
        var length = obj.length;
        if (length !== +length) {
            var keys = _.keys(obj);
            length = keys.length;
        }
        each(obj, function(value, index, list) {
            index = keys ? keys[--length] : --length;
            if (!initial) {
                memo = obj[index];
                initial = true;
            } else {
                memo = iterator.call(context, memo, obj[index], index, list);
            }
        });
        if (!initial) throw new TypeError(reduceError);
        return memo;
    };

    // Return the first value which passes a truth test. Aliased as `detect`.
    _.find = _.detect = function(obj, iterator, context) {
        var result;
        any(obj, function(value, index, list) {
            if (iterator.call(context, value, index, list)) {
                result = value;
                return true;
            }
        });
        return result;
    };

    // Return all the elements that pass a truth test.
    // Delegates to **ECMAScript 5**'s native `filter` if available.
    // Aliased as `select`.
    _.filter = _.select = function(obj, iterator, context) {
        var results = [];
        if (obj == null) return results;
        if (nativeFilter && obj.filter === nativeFilter) return obj.filter(iterator, context);
        each(obj, function(value, index, list) {
            if (iterator.call(context, value, index, list)) results.push(value);
        });
        return results;
    };

    // Return all the elements for which a truth test fails.
    _.reject = function(obj, iterator, context) {
        return _.filter(obj, function(value, index, list) {
            return !iterator.call(context, value, index, list);
        }, context);
    };

    // Determine whether all of the elements match a truth test.
    // Delegates to **ECMAScript 5**'s native `every` if available.
    // Aliased as `all`.
    _.every = _.all = function(obj, iterator, context) {
        iterator || (iterator = _.identity);
        var result = true;
        if (obj == null) return result;
        if (nativeEvery && obj.every === nativeEvery) return obj.every(iterator, context);
        each(obj, function(value, index, list) {
            if (!(result = result && iterator.call(context, value, index, list))) return breaker;
        });
        return !!result;
    };

    // Determine if at least one element in the object matches a truth test.
    // Delegates to **ECMAScript 5**'s native `some` if available.
    // Aliased as `any`.
    var any = _.some = _.any = function(obj, iterator, context) {
        iterator || (iterator = _.identity);
        var result = false;
        if (obj == null) return result;
        if (nativeSome && obj.some === nativeSome) return obj.some(iterator, context);
        each(obj, function(value, index, list) {
            if (result || (result = iterator.call(context, value, index, list))) return breaker;
        });
        return !!result;
    };

    // Determine if the array or object contains a given value (using `===`).
    // Aliased as `include`.
    _.contains = _.include = function(obj, target) {
        if (obj == null) return false;
        if (nativeIndexOf && obj.indexOf === nativeIndexOf) return obj.indexOf(target) != -1;
        return any(obj, function(value) {
            return value === target;
        });
    };

    // Invoke a method (with arguments) on every item in a collection.
    _.invoke = function(obj, method) {
        var args = slice.call(arguments, 2);
        var isFunc = _.isFunction(method);
        return _.map(obj, function(value) {
            return (isFunc ? method : value[method]).apply(value, args);
        });
    };

    // Convenience version of a common use case of `map`: fetching a property.
    _.pluck = function(obj, key) {
        return _.map(obj, function(value){ return value[key]; });
    };

    // Convenience version of a common use case of `filter`: selecting only objects
    // containing specific `key:value` pairs.
    _.where = function(obj, attrs, first) {
        if (_.isEmpty(attrs)) return first ? void 0 : [];
        return _[first ? 'find' : 'filter'](obj, function(value) {
            for (var key in attrs) {
                if (attrs[key] !== value[key]) return false;
            }
            return true;
        });
    };

    // Convenience version of a common use case of `find`: getting the first object
    // containing specific `key:value` pairs.
    _.findWhere = function(obj, attrs) {
        return _.where(obj, attrs, true);
    };

    // Return the maximum element or (element-based computation).
    // Can't optimize arrays of integers longer than 65,535 elements.
    // See [WebKit Bug 80797](https://bugs.webkit.org/show_bug.cgi?id=80797)
    _.max = function(obj, iterator, context) {
        if (!iterator && _.isArray(obj) && obj[0] === +obj[0] && obj.length < 65535) {
            return Math.max.apply(Math, obj);
        }
        if (!iterator && _.isEmpty(obj)) return -Infinity;
        var result = {computed : -Infinity, value: -Infinity};
        each(obj, function(value, index, list) {
            var computed = iterator ? iterator.call(context, value, index, list) : value;
            computed > result.computed && (result = {value : value, computed : computed});
        });
        return result.value;
    };

    // Return the minimum element (or element-based computation).
    _.min = function(obj, iterator, context) {
        if (!iterator && _.isArray(obj) && obj[0] === +obj[0] && obj.length < 65535) {
            return Math.min.apply(Math, obj);
        }
        if (!iterator && _.isEmpty(obj)) return Infinity;
        var result = {computed : Infinity, value: Infinity};
        each(obj, function(value, index, list) {
            var computed = iterator ? iterator.call(context, value, index, list) : value;
            computed < result.computed && (result = {value : value, computed : computed});
        });
        return result.value;
    };

    // Shuffle an array, using the modern version of the
    // [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisherâ€“Yates_shuffle).
    _.shuffle = function(obj) {
        var rand;
        var index = 0;
        var shuffled = [];
        each(obj, function(value) {
            rand = _.random(index++);
            shuffled[index - 1] = shuffled[rand];
            shuffled[rand] = value;
        });
        return shuffled;
    };

    // Sample **n** random values from an array.
    // If **n** is not specified, returns a single random element from the array.
    // The internal `guard` argument allows it to work with `map`.
    _.sample = function(obj, n, guard) {
        if (arguments.length < 2 || guard) {
            return obj[_.random(obj.length - 1)];
        }
        return _.shuffle(obj).slice(0, Math.max(0, n));
    };

    // An internal function to generate lookup iterators.
    var lookupIterator = function(value) {
        return _.isFunction(value) ? value : function(obj){ return obj[value]; };
    };

    // Sort the object's values by a criterion produced by an iterator.
    _.sortBy = function(obj, value, context) {
        var iterator = lookupIterator(value);
        return _.pluck(_.map(obj, function(value, index, list) {
            return {
                value: value,
                index: index,
                criteria: iterator.call(context, value, index, list)
            };
        }).sort(function(left, right) {
                var a = left.criteria;
                var b = right.criteria;
                if (a !== b) {
                    if (a > b || a === void 0) return 1;
                    if (a < b || b === void 0) return -1;
                }
                return left.index - right.index;
            }), 'value');
    };

    // An internal function used for aggregate "group by" operations.
    var group = function(behavior) {
        return function(obj, value, context) {
            var result = {};
            var iterator = value == null ? _.identity : lookupIterator(value);
            each(obj, function(value, index) {
                var key = iterator.call(context, value, index, obj);
                behavior(result, key, value);
            });
            return result;
        };
    };

    // Groups the object's values by a criterion. Pass either a string attribute
    // to group by, or a function that returns the criterion.
    _.groupBy = group(function(result, key, value) {
        (_.has(result, key) ? result[key] : (result[key] = [])).push(value);
    });

    // Indexes the object's values by a criterion, similar to `groupBy`, but for
    // when you know that your index values will be unique.
    _.indexBy = group(function(result, key, value) {
        result[key] = value;
    });

    // Counts instances of an object that group by a certain criterion. Pass
    // either a string attribute to count by, or a function that returns the
    // criterion.
    _.countBy = group(function(result, key) {
        _.has(result, key) ? result[key]++ : result[key] = 1;
    });

    // Use a comparator function to figure out the smallest index at which
    // an object should be inserted so as to maintain order. Uses binary search.
    _.sortedIndex = function(array, obj, iterator, context) {
        iterator = iterator == null ? _.identity : lookupIterator(iterator);
        var value = iterator.call(context, obj);
        var low = 0, high = array.length;
        while (low < high) {
            var mid = (low + high) >>> 1;
            iterator.call(context, array[mid]) < value ? low = mid + 1 : high = mid;
        }
        return low;
    };

    // Safely create a real, live array from anything iterable.
    _.toArray = function(obj) {
        if (!obj) return [];
        if (_.isArray(obj)) return slice.call(obj);
        if (obj.length === +obj.length) return _.map(obj, _.identity);
        return _.values(obj);
    };

    // Return the number of elements in an object.
    _.size = function(obj) {
        if (obj == null) return 0;
        return (obj.length === +obj.length) ? obj.length : _.keys(obj).length;
    };

    // Array Functions
    // ---------------

    // Get the first element of an array. Passing **n** will return the first N
    // values in the array. Aliased as `head` and `take`. The **guard** check
    // allows it to work with `_.map`.
    _.first = _.head = _.take = function(array, n, guard) {
        if (array == null) return void 0;
        return (n == null) || guard ? array[0] : slice.call(array, 0, n);
    };

    // Returns everything but the last entry of the array. Especially useful on
    // the arguments object. Passing **n** will return all the values in
    // the array, excluding the last N. The **guard** check allows it to work with
    // `_.map`.
    _.initial = function(array, n, guard) {
        return slice.call(array, 0, array.length - ((n == null) || guard ? 1 : n));
    };

    // Get the last element of an array. Passing **n** will return the last N
    // values in the array. The **guard** check allows it to work with `_.map`.
    _.last = function(array, n, guard) {
        if (array == null) return void 0;
        if ((n == null) || guard) {
            return array[array.length - 1];
        } else {
            return slice.call(array, Math.max(array.length - n, 0));
        }
    };

    // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
    // Especially useful on the arguments object. Passing an **n** will return
    // the rest N values in the array. The **guard**
    // check allows it to work with `_.map`.
    _.rest = _.tail = _.drop = function(array, n, guard) {
        return slice.call(array, (n == null) || guard ? 1 : n);
    };

    // Trim out all falsy values from an array.
    _.compact = function(array) {
        return _.filter(array, _.identity);
    };

    // Internal implementation of a recursive `flatten` function.
    var flatten = function(input, shallow, output) {
        if (shallow && _.every(input, _.isArray)) {
            return concat.apply(output, input);
        }
        each(input, function(value) {
            if (_.isArray(value) || _.isArguments(value)) {
                shallow ? push.apply(output, value) : flatten(value, shallow, output);
            } else {
                output.push(value);
            }
        });
        return output;
    };

    // Flatten out an array, either recursively (by default), or just one level.
    _.flatten = function(array, shallow) {
        return flatten(array, shallow, []);
    };

    // Return a version of the array that does not contain the specified value(s).
    _.without = function(array) {
        return _.difference(array, slice.call(arguments, 1));
    };

    // Produce a duplicate-free version of the array. If the array has already
    // been sorted, you have the option of using a faster algorithm.
    // Aliased as `unique`.
    _.uniq = _.unique = function(array, isSorted, iterator, context) {
        if (_.isFunction(isSorted)) {
            context = iterator;
            iterator = isSorted;
            isSorted = false;
        }
        var initial = iterator ? _.map(array, iterator, context) : array;
        var results = [];
        var seen = [];
        each(initial, function(value, index) {
            if (isSorted ? (!index || seen[seen.length - 1] !== value) : !_.contains(seen, value)) {
                seen.push(value);
                results.push(array[index]);
            }
        });
        return results;
    };

    // Produce an array that contains the union: each distinct element from all of
    // the passed-in arrays.
    _.union = function() {
        return _.uniq(_.flatten(arguments, true));
    };

    // Produce an array that contains every item shared between all the
    // passed-in arrays.
    _.intersection = function(array) {
        var rest = slice.call(arguments, 1);
        return _.filter(_.uniq(array), function(item) {
            return _.every(rest, function(other) {
                return _.indexOf(other, item) >= 0;
            });
        });
    };

    // Take the difference between one array and a number of other arrays.
    // Only the elements present in just the first array will remain.
    _.difference = function(array) {
        var rest = concat.apply(ArrayProto, slice.call(arguments, 1));
        return _.filter(array, function(value){ return !_.contains(rest, value); });
    };

    // Zip together multiple lists into a single array -- elements that share
    // an index go together.
    _.zip = function() {
        var length = _.max(_.pluck(arguments, "length").concat(0));
        var results = new Array(length);
        for (var i = 0; i < length; i++) {
            results[i] = _.pluck(arguments, '' + i);
        }
        return results;
    };

    // Converts lists into objects. Pass either a single array of `[key, value]`
    // pairs, or two parallel arrays of the same length -- one of keys, and one of
    // the corresponding values.
    _.object = function(list, values) {
        if (list == null) return {};
        var result = {};
        for (var i = 0, length = list.length; i < length; i++) {
            if (values) {
                result[list[i]] = values[i];
            } else {
                result[list[i][0]] = list[i][1];
            }
        }
        return result;
    };

    // If the browser doesn't supply us with indexOf (I'm looking at you, **MSIE**),
    // we need this function. Return the position of the first occurrence of an
    // item in an array, or -1 if the item is not included in the array.
    // Delegates to **ECMAScript 5**'s native `indexOf` if available.
    // If the array is large and already in sort order, pass `true`
    // for **isSorted** to use binary search.
    _.indexOf = function(array, item, isSorted) {
        if (array == null) return -1;
        var i = 0, length = array.length;
        if (isSorted) {
            if (typeof isSorted == 'number') {
                i = (isSorted < 0 ? Math.max(0, length + isSorted) : isSorted);
            } else {
                i = _.sortedIndex(array, item);
                return array[i] === item ? i : -1;
            }
        }
        if (nativeIndexOf && array.indexOf === nativeIndexOf) return array.indexOf(item, isSorted);
        for (; i < length; i++) if (array[i] === item) return i;
        return -1;
    };

    // Delegates to **ECMAScript 5**'s native `lastIndexOf` if available.
    _.lastIndexOf = function(array, item, from) {
        if (array == null) return -1;
        var hasIndex = from != null;
        if (nativeLastIndexOf && array.lastIndexOf === nativeLastIndexOf) {
            return hasIndex ? array.lastIndexOf(item, from) : array.lastIndexOf(item);
        }
        var i = (hasIndex ? from : array.length);
        while (i--) if (array[i] === item) return i;
        return -1;
    };

    // Generate an integer Array containing an arithmetic progression. A port of
    // the native Python `range()` function. See
    // [the Python documentation](http://docs.python.org/library/functions.html#range).
    _.range = function(start, stop, step) {
        if (arguments.length <= 1) {
            stop = start || 0;
            start = 0;
        }
        step = arguments[2] || 1;

        var length = Math.max(Math.ceil((stop - start) / step), 0);
        var idx = 0;
        var range = new Array(length);

        while(idx < length) {
            range[idx++] = start;
            start += step;
        }

        return range;
    };

    // Function (ahem) Functions
    // ------------------

    // Reusable constructor function for prototype setting.
    var ctor = function(){};

    // Create a function bound to a given object (assigning `this`, and arguments,
    // optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
    // available.
    _.bind = function(func, context) {
        var args, bound;
        if (nativeBind && func.bind === nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
        if (!_.isFunction(func)) throw new TypeError;
        args = slice.call(arguments, 2);
        return bound = function() {
            if (!(this instanceof bound)) return func.apply(context, args.concat(slice.call(arguments)));
            ctor.prototype = func.prototype;
            var self = new ctor;
            ctor.prototype = null;
            var result = func.apply(self, args.concat(slice.call(arguments)));
            if (Object(result) === result) return result;
            return self;
        };
    };

    // Partially apply a function by creating a version that has had some of its
    // arguments pre-filled, without changing its dynamic `this` context.
    _.partial = function(func) {
        var args = slice.call(arguments, 1);
        return function() {
            return func.apply(this, args.concat(slice.call(arguments)));
        };
    };

    // Bind all of an object's methods to that object. Useful for ensuring that
    // all callbacks defined on an object belong to it.
    _.bindAll = function(obj) {
        var funcs = slice.call(arguments, 1);
        if (funcs.length === 0) throw new Error("bindAll must be passed function names");
        each(funcs, function(f) { obj[f] = _.bind(obj[f], obj); });
        return obj;
    };

    // Memoize an expensive function by storing its results.
    _.memoize = function(func, hasher) {
        var memo = {};
        hasher || (hasher = _.identity);
        return function() {
            var key = hasher.apply(this, arguments);
            return _.has(memo, key) ? memo[key] : (memo[key] = func.apply(this, arguments));
        };
    };

    // Delays a function for the given number of milliseconds, and then calls
    // it with the arguments supplied.
    _.delay = function(func, wait) {
        var args = slice.call(arguments, 2);
        return setTimeout(function(){ return func.apply(null, args); }, wait);
    };

    // Defers a function, scheduling it to run after the current call stack has
    // cleared.
    _.defer = function(func) {
        return _.delay.apply(_, [func, 1].concat(slice.call(arguments, 1)));
    };

    // Returns a function, that, when invoked, will only be triggered at most once
    // during a given window of time. Normally, the throttled function will run
    // as much as it can, without ever going more than once per `wait` duration;
    // but if you'd like to disable the execution on the leading edge, pass
    // `{leading: false}`. To disable execution on the trailing edge, ditto.
    _.throttle = function(func, wait, options) {
        var context, args, result;
        var timeout = null;
        var previous = 0;
        options || (options = {});
        var later = function() {
            previous = options.leading === false ? 0 : new Date;
            timeout = null;
            result = func.apply(context, args);
        };
        return function() {
            var now = new Date;
            if (!previous && options.leading === false) previous = now;
            var remaining = wait - (now - previous);
            context = this;
            args = arguments;
            if (remaining <= 0) {
                clearTimeout(timeout);
                timeout = null;
                previous = now;
                result = func.apply(context, args);
            } else if (!timeout && options.trailing !== false) {
                timeout = setTimeout(later, remaining);
            }
            return result;
        };
    };

    // Returns a function, that, as long as it continues to be invoked, will not
    // be triggered. The function will be called after it stops being called for
    // N milliseconds. If `immediate` is passed, trigger the function on the
    // leading edge, instead of the trailing.
    _.debounce = function(func, wait, immediate) {
        var timeout, args, context, timestamp, result;
        return function() {
            context = this;
            args = arguments;
            timestamp = new Date();
            var later = function() {
                var last = (new Date()) - timestamp;
                if (last < wait) {
                    timeout = setTimeout(later, wait - last);
                } else {
                    timeout = null;
                    if (!immediate) result = func.apply(context, args);
                }
            };
            var callNow = immediate && !timeout;
            if (!timeout) {
                timeout = setTimeout(later, wait);
            }
            if (callNow) result = func.apply(context, args);
            return result;
        };
    };

    // Returns a function that will be executed at most one time, no matter how
    // often you call it. Useful for lazy initialization.
    _.once = function(func) {
        var ran = false, memo;
        return function() {
            if (ran) return memo;
            ran = true;
            memo = func.apply(this, arguments);
            func = null;
            return memo;
        };
    };

    // Returns the first function passed as an argument to the second,
    // allowing you to adjust arguments, run code before and after, and
    // conditionally execute the original function.
    _.wrap = function(func, wrapper) {
        return function() {
            var args = [func];
            push.apply(args, arguments);
            return wrapper.apply(this, args);
        };
    };

    // Returns a function that is the composition of a list of functions, each
    // consuming the return value of the function that follows.
    _.compose = function() {
        var funcs = arguments;
        return function() {
            var args = arguments;
            for (var i = funcs.length - 1; i >= 0; i--) {
                args = [funcs[i].apply(this, args)];
            }
            return args[0];
        };
    };

    // Returns a function that will only be executed after being called N times.
    _.after = function(times, func) {
        return function() {
            if (--times < 1) {
                return func.apply(this, arguments);
            }
        };
    };

    // Object Functions
    // ----------------

    // Retrieve the names of an object's properties.
    // Delegates to **ECMAScript 5**'s native `Object.keys`
    _.keys = nativeKeys || function(obj) {
        if (obj !== Object(obj)) throw new TypeError('Invalid object');
        var keys = [];
        for (var key in obj) if (_.has(obj, key)) keys.push(key);
        return keys;
    };

    // Retrieve the values of an object's properties.
    _.values = function(obj) {
        var keys = _.keys(obj);
        var length = keys.length;
        var values = new Array(length);
        for (var i = 0; i < length; i++) {
            values[i] = obj[keys[i]];
        }
        return values;
    };

    // Convert an object into a list of `[key, value]` pairs.
    _.pairs = function(obj) {
        var keys = _.keys(obj);
        var length = keys.length;
        var pairs = new Array(length);
        for (var i = 0; i < length; i++) {
            pairs[i] = [keys[i], obj[keys[i]]];
        }
        return pairs;
    };

    // Invert the keys and values of an object. The values must be serializable.
    _.invert = function(obj) {
        var result = {};
        var keys = _.keys(obj);
        for (var i = 0, length = keys.length; i < length; i++) {
            result[obj[keys[i]]] = keys[i];
        }
        return result;
    };

    // Return a sorted list of the function names available on the object.
    // Aliased as `methods`
    _.functions = _.methods = function(obj) {
        var names = [];
        for (var key in obj) {
            if (_.isFunction(obj[key])) names.push(key);
        }
        return names.sort();
    };

    // Extend a given object with all the properties in passed-in object(s).
    _.extend = function(obj) {
        each(slice.call(arguments, 1), function(source) {
            if (source) {
                for (var prop in source) {
                    obj[prop] = source[prop];
                }
            }
        });
        return obj;
    };

    // Return a copy of the object only containing the whitelisted properties.
    _.pick = function(obj) {
        var copy = {};
        var keys = concat.apply(ArrayProto, slice.call(arguments, 1));
        each(keys, function(key) {
            if (key in obj) copy[key] = obj[key];
        });
        return copy;
    };

    // Return a copy of the object without the blacklisted properties.
    _.omit = function(obj) {
        var copy = {};
        var keys = concat.apply(ArrayProto, slice.call(arguments, 1));
        for (var key in obj) {
            if (!_.contains(keys, key)) copy[key] = obj[key];
        }
        return copy;
    };

    // Fill in a given object with default properties.
    _.defaults = function(obj) {
        each(slice.call(arguments, 1), function(source) {
            if (source) {
                for (var prop in source) {
                    if (obj[prop] === void 0) obj[prop] = source[prop];
                }
            }
        });
        return obj;
    };

    // Create a (shallow-cloned) duplicate of an object.
    _.clone = function(obj) {
        if (!_.isObject(obj)) return obj;
        return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
    };

    // Invokes interceptor with the obj, and then returns obj.
    // The primary purpose of this method is to "tap into" a method chain, in
    // order to perform operations on intermediate results within the chain.
    _.tap = function(obj, interceptor) {
        interceptor(obj);
        return obj;
    };

    // Internal recursive comparison function for `isEqual`.
    var eq = function(a, b, aStack, bStack) {
        // Identical objects are equal. `0 === -0`, but they aren't identical.
        // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
        if (a === b) return a !== 0 || 1 / a == 1 / b;
        // A strict comparison is necessary because `null == undefined`.
        if (a == null || b == null) return a === b;
        // Unwrap any wrapped objects.
        if (a instanceof _) a = a._wrapped;
        if (b instanceof _) b = b._wrapped;
        // Compare `[[Class]]` names.
        var className = toString.call(a);
        if (className != toString.call(b)) return false;
        switch (className) {
            // Strings, numbers, dates, and booleans are compared by value.
            case '[object String]':
                // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
                // equivalent to `new String("5")`.
                return a == String(b);
            case '[object Number]':
                // `NaN`s are equivalent, but non-reflexive. An `egal` comparison is performed for
                // other numeric values.
                return a != +a ? b != +b : (a == 0 ? 1 / a == 1 / b : a == +b);
            case '[object Date]':
            case '[object Boolean]':
                // Coerce dates and booleans to numeric primitive values. Dates are compared by their
                // millisecond representations. Note that invalid dates with millisecond representations
                // of `NaN` are not equivalent.
                return +a == +b;
            // RegExps are compared by their source patterns and flags.
            case '[object RegExp]':
                return a.source == b.source &&
                    a.global == b.global &&
                    a.multiline == b.multiline &&
                    a.ignoreCase == b.ignoreCase;
        }
        if (typeof a != 'object' || typeof b != 'object') return false;
        // Assume equality for cyclic structures. The algorithm for detecting cyclic
        // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
        var length = aStack.length;
        while (length--) {
            // Linear search. Performance is inversely proportional to the number of
            // unique nested structures.
            if (aStack[length] == a) return bStack[length] == b;
        }
        // Objects with different constructors are not equivalent, but `Object`s
        // from different frames are.
        var aCtor = a.constructor, bCtor = b.constructor;
        if (aCtor !== bCtor && !(_.isFunction(aCtor) && (aCtor instanceof aCtor) &&
            _.isFunction(bCtor) && (bCtor instanceof bCtor))) {
            return false;
        }
        // Add the first object to the stack of traversed objects.
        aStack.push(a);
        bStack.push(b);
        var size = 0, result = true;
        // Recursively compare objects and arrays.
        if (className == '[object Array]') {
            // Compare array lengths to determine if a deep comparison is necessary.
            size = a.length;
            result = size == b.length;
            if (result) {
                // Deep compare the contents, ignoring non-numeric properties.
                while (size--) {
                    if (!(result = eq(a[size], b[size], aStack, bStack))) break;
                }
            }
        } else {
            // Deep compare objects.
            for (var key in a) {
                if (_.has(a, key)) {
                    // Count the expected number of properties.
                    size++;
                    // Deep compare each member.
                    if (!(result = _.has(b, key) && eq(a[key], b[key], aStack, bStack))) break;
                }
            }
            // Ensure that both objects contain the same number of properties.
            if (result) {
                for (key in b) {
                    if (_.has(b, key) && !(size--)) break;
                }
                result = !size;
            }
        }
        // Remove the first object from the stack of traversed objects.
        aStack.pop();
        bStack.pop();
        return result;
    };

    // Perform a deep comparison to check if two objects are equal.
    _.isEqual = function(a, b) {
        return eq(a, b, [], []);
    };

    // Is a given array, string, or object empty?
    // An "empty" object has no enumerable own-properties.
    _.isEmpty = function(obj) {
        if (obj == null) return true;
        if (_.isArray(obj) || _.isString(obj)) return obj.length === 0;
        for (var key in obj) if (_.has(obj, key)) return false;
        return true;
    };

    // Is a given value a DOM element?
    _.isElement = function(obj) {
        return !!(obj && obj.nodeType === 1);
    };

    // Is a given value an array?
    // Delegates to ECMA5's native Array.isArray
    _.isArray = nativeIsArray || function(obj) {
        return toString.call(obj) == '[object Array]';
    };

    // Is a given variable an object?
    _.isObject = function(obj) {
        return obj === Object(obj);
    };

    // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp.
    each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp'], function(name) {
        _['is' + name] = function(obj) {
            return toString.call(obj) == '[object ' + name + ']';
        };
    });

    // Define a fallback version of the method in browsers (ahem, IE), where
    // there isn't any inspectable "Arguments" type.
    if (!_.isArguments(arguments)) {
        _.isArguments = function(obj) {
            return !!(obj && _.has(obj, 'callee'));
        };
    }

    // Optimize `isFunction` if appropriate.
    if (typeof (/./) !== 'function') {
        _.isFunction = function(obj) {
            return typeof obj === 'function';
        };
    }

    // Is a given object a finite number?
    _.isFinite = function(obj) {
        return isFinite(obj) && !isNaN(parseFloat(obj));
    };

    // Is the given value `NaN`? (NaN is the only number which does not equal itself).
    _.isNaN = function(obj) {
        return _.isNumber(obj) && obj != +obj;
    };

    // Is a given value a boolean?
    _.isBoolean = function(obj) {
        return obj === true || obj === false || toString.call(obj) == '[object Boolean]';
    };

    // Is a given value equal to null?
    _.isNull = function(obj) {
        return obj === null;
    };

    // Is a given variable undefined?
    _.isUndefined = function(obj) {
        return obj === void 0;
    };

    // Shortcut function for checking if an object has a given property directly
    // on itself (in other words, not on a prototype).
    _.has = function(obj, key) {
        return hasOwnProperty.call(obj, key);
    };

    // Utility Functions
    // -----------------

    // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
    // previous owner. Returns a reference to the Underscore object.
    _.noConflict = function() {
        root._ = previousUnderscore;
        return this;
    };

    // Keep the identity function around for default iterators.
    _.identity = function(value) {
        return value;
    };

    // Run a function **n** times.
    _.times = function(n, iterator, context) {
        var accum = Array(Math.max(0, n));
        for (var i = 0; i < n; i++) accum[i] = iterator.call(context, i);
        return accum;
    };

    // Return a random integer between min and max (inclusive).
    _.random = function(min, max) {
        if (max == null) {
            max = min;
            min = 0;
        }
        return min + Math.floor(Math.random() * (max - min + 1));
    };

    // List of HTML entities for escaping.
    var entityMap = {
        escape: {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#x27;'
        }
    };
    entityMap.unescape = _.invert(entityMap.escape);

    // Regexes containing the keys and values listed immediately above.
    var entityRegexes = {
        escape:   new RegExp('[' + _.keys(entityMap.escape).join('') + ']', 'g'),
        unescape: new RegExp('(' + _.keys(entityMap.unescape).join('|') + ')', 'g')
    };

    // Functions for escaping and unescaping strings to/from HTML interpolation.
    _.each(['escape', 'unescape'], function(method) {
        _[method] = function(string) {
            if (string == null) return '';
            return ('' + string).replace(entityRegexes[method], function(match) {
                return entityMap[method][match];
            });
        };
    });

    // If the value of the named `property` is a function then invoke it with the
    // `object` as context; otherwise, return it.
    _.result = function(object, property) {
        if (object == null) return void 0;
        var value = object[property];
        return _.isFunction(value) ? value.call(object) : value;
    };

    // Add your own custom functions to the Underscore object.
    _.mixin = function(obj) {
        each(_.functions(obj), function(name) {
            var func = _[name] = obj[name];
            _.prototype[name] = function() {
                var args = [this._wrapped];
                push.apply(args, arguments);
                return result.call(this, func.apply(_, args));
            };
        });
    };

    // Generate a unique integer id (unique within the entire client session).
    // Useful for temporary DOM ids.
    var idCounter = 0;
    _.uniqueId = function(prefix) {
        var id = ++idCounter + '';
        return prefix ? prefix + id : id;
    };

    // By default, Underscore uses ERB-style template delimiters, change the
    // following template settings to use alternative delimiters.
    _.templateSettings = {
        evaluate    : /<%([\s\S]+?)%>/g,
        interpolate : /<%=([\s\S]+?)%>/g,
        escape      : /<%-([\s\S]+?)%>/g
    };

    // When customizing `templateSettings`, if you don't want to define an
    // interpolation, evaluation or escaping regex, we need one that is
    // guaranteed not to match.
    var noMatch = /(.)^/;

    // Certain characters need to be escaped so that they can be put into a
    // string literal.
    var escapes = {
        "'":      "'",
        '\\':     '\\',
        '\r':     'r',
        '\n':     'n',
        '\t':     't',
        '\u2028': 'u2028',
        '\u2029': 'u2029'
    };

    var escaper = /\\|'|\r|\n|\t|\u2028|\u2029/g;

    // JavaScript micro-templating, similar to John Resig's implementation.
    // Underscore templating handles arbitrary delimiters, preserves whitespace,
    // and correctly escapes quotes within interpolated code.
    _.template = function(text, data, settings) {
        var render;
        settings = _.defaults({}, settings, _.templateSettings);

        // Combine delimiters into one regular expression via alternation.
        var matcher = new RegExp([
            (settings.escape || noMatch).source,
            (settings.interpolate || noMatch).source,
            (settings.evaluate || noMatch).source
        ].join('|') + '|$', 'g');

        // Compile the template source, escaping string literals appropriately.
        var index = 0;
        var source = "__p+='";
        text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
            source += text.slice(index, offset)
                .replace(escaper, function(match) { return '\\' + escapes[match]; });

            if (escape) {
                source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
            }
            if (interpolate) {
                source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
            }
            if (evaluate) {
                source += "';\n" + evaluate + "\n__p+='";
            }
            index = offset + match.length;
            return match;
        });
        source += "';\n";

        // If a variable is not specified, place data values in local scope.
        if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';

        source = "var __t,__p='',__j=Array.prototype.join," +
            "print=function(){__p+=__j.call(arguments,'');};\n" +
            source + "return __p;\n";

        try {
            render = new Function(settings.variable || 'obj', '_', source);
        } catch (e) {
            e.source = source;
            throw e;
        }

        if (data) return render(data, _);
        var template = function(data) {
            return render.call(this, data, _);
        };

        // Provide the compiled function source as a convenience for precompilation.
        template.source = 'function(' + (settings.variable || 'obj') + '){\n' + source + '}';

        return template;
    };

    // Add a "chain" function, which will delegate to the wrapper.
    _.chain = function(obj) {
        return _(obj).chain();
    };

    // OOP
    // ---------------
    // If Underscore is called as a function, it returns a wrapped object that
    // can be used OO-style. This wrapper holds altered versions of all the
    // underscore functions. Wrapped objects may be chained.

    // Helper function to continue chaining intermediate results.
    var result = function(obj) {
        return this._chain ? _(obj).chain() : obj;
    };

    // Add all of the Underscore functions to the wrapper object.
    _.mixin(_);

    // Add all mutator Array functions to the wrapper.
    each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
        var method = ArrayProto[name];
        _.prototype[name] = function() {
            var obj = this._wrapped;
            method.apply(obj, arguments);
            if ((name == 'shift' || name == 'splice') && obj.length === 0) delete obj[0];
            return result.call(this, obj);
        };
    });

    // Add all accessor Array functions to the wrapper.
    each(['concat', 'join', 'slice'], function(name) {
        var method = ArrayProto[name];
        _.prototype[name] = function() {
            return result.call(this, method.apply(this._wrapped, arguments));
        };
    });

    _.extend(_.prototype, {

        // Start chaining a wrapped Underscore object.
        chain: function() {
            this._chain = true;
            return this;
        },

        // Extracts the result from a wrapped and chained object.
        value: function() {
            return this._wrapped;
        }

    });

}).call(this);

/**
* FOLLOWING LINES MODIFIED BY ATLASSIAN
* @see https://ecosystem.atlassian.net/browse/AUI-2989
*/
if (typeof window.define === 'function') {
   define('underscore', [], function(){
       return window._;
   })
}
/** END ATLASSIAN */
;
/*! THIS FILE HAS BEEN MODIFIED BY ATLASSIAN. Modified lines are marked below, search "ATLASSIAN" */
//     Backbone.js 1.0.0

//     (c) 2010-2013 Jeremy Ashkenas, DocumentCloud Inc.
//     Backbone may be freely distributed under the MIT license.
//     For all details and documentation:
//     http://backbonejs.org

(function(){

  // Initial Setup
  // -------------

  // Save a reference to the global object (`window` in the browser, `exports`
  // on the server).
  var root = this;

  // Save the previous value of the `Backbone` variable, so that it can be
  // restored later on, if `noConflict` is used.
  var previousBackbone = root.Backbone;

  // Create local references to array methods we'll want to use later.
  var array = [];
  var push = array.push;
  var slice = array.slice;
  var splice = array.splice;

  // The top-level namespace. All public Backbone classes and modules will
  // be attached to this. Exported for both the browser and the server.
  var Backbone;
  if (typeof exports !== 'undefined') {
    Backbone = exports;
  } else {
    Backbone = root.Backbone = {};
  }

  // Current version of the library. Keep in sync with `package.json`.
  Backbone.VERSION = '1.0.0';

  // Require Underscore, if we're on the server, and it's not already present.
  var _ = root._;
  if (!_ && (typeof require !== 'undefined')) _ = require('underscore');

  // For Backbone's purposes, jQuery, Zepto, Ender, or My Library (kidding) owns
  // the `$` variable.
  Backbone.$ = root.jQuery || root.Zepto || root.ender || root.$;

  // Runs Backbone.js in *noConflict* mode, returning the `Backbone` variable
  // to its previous owner. Returns a reference to this Backbone object.
  Backbone.noConflict = function() {
    root.Backbone = previousBackbone;
    return this;
  };

  // Turn on `emulateHTTP` to support legacy HTTP servers. Setting this option
  // will fake `"PUT"` and `"DELETE"` requests via the `_method` parameter and
  // set a `X-Http-Method-Override` header.
  Backbone.emulateHTTP = false;

  // Turn on `emulateJSON` to support legacy servers that can't deal with direct
  // `application/json` requests ... will encode the body as
  // `application/x-www-form-urlencoded` instead and will send the model in a
  // form param named `model`.
  Backbone.emulateJSON = false;

  // Backbone.Events
  // ---------------

  // A module that can be mixed in to *any object* in order to provide it with
  // custom events. You may bind with `on` or remove with `off` callback
  // functions to an event; `trigger`-ing an event fires all callbacks in
  // succession.
  //
  //     var object = {};
  //     _.extend(object, Backbone.Events);
  //     object.on('expand', function(){ alert('expanded'); });
  //     object.trigger('expand');
  //
  var Events = Backbone.Events = {

    // Bind an event to a `callback` function. Passing `"all"` will bind
    // the callback to all events fired.
    on: function(name, callback, context) {
      if (!eventsApi(this, 'on', name, [callback, context]) || !callback) return this;
      this._events || (this._events = {});
      var events = this._events[name] || (this._events[name] = []);
      events.push({callback: callback, context: context, ctx: context || this});
      return this;
    },

    // Bind an event to only be triggered a single time. After the first time
    // the callback is invoked, it will be removed.
    once: function(name, callback, context) {
      if (!eventsApi(this, 'once', name, [callback, context]) || !callback) return this;
      var self = this;
      var once = _.once(function() {
        self.off(name, once);
        callback.apply(this, arguments);
      });
      once._callback = callback;
      return this.on(name, once, context);
    },

    // Remove one or many callbacks. If `context` is null, removes all
    // callbacks with that function. If `callback` is null, removes all
    // callbacks for the event. If `name` is null, removes all bound
    // callbacks for all events.
    off: function(name, callback, context) {
      var retain, ev, events, names, i, l, j, k;
      if (!this._events || !eventsApi(this, 'off', name, [callback, context])) return this;
      if (!name && !callback && !context) {
        this._events = {};
        return this;
      }

      names = name ? [name] : _.keys(this._events);
      for (i = 0, l = names.length; i < l; i++) {
        name = names[i];
        if (events = this._events[name]) {
          this._events[name] = retain = [];
          if (callback || context) {
            for (j = 0, k = events.length; j < k; j++) {
              ev = events[j];
              if ((callback && callback !== ev.callback && callback !== ev.callback._callback) ||
                  (context && context !== ev.context)) {
                retain.push(ev);
              }
            }
          }
          if (!retain.length) delete this._events[name];
        }
      }

      return this;
    },

    // Trigger one or many events, firing all bound callbacks. Callbacks are
    // passed the same arguments as `trigger` is, apart from the event name
    // (unless you're listening on `"all"`, which will cause your callback to
    // receive the true name of the event as the first argument).
    trigger: function(name) {
      if (!this._events) return this;
      var args = slice.call(arguments, 1);
      if (!eventsApi(this, 'trigger', name, args)) return this;
      var events = this._events[name];
      var allEvents = this._events.all;
      if (events) triggerEvents(events, args);
      if (allEvents) triggerEvents(allEvents, arguments);
      return this;
    },

    // Tell this object to stop listening to either specific events ... or
    // to every object it's currently listening to.
    stopListening: function(obj, name, callback) {
      var listeners = this._listeners;
      if (!listeners) return this;
      var deleteListener = !name && !callback;
      if (typeof name === 'object') callback = this;
      if (obj) (listeners = {})[obj._listenerId] = obj;
      for (var id in listeners) {
        listeners[id].off(name, callback, this);
        if (deleteListener) delete this._listeners[id];
      }
      return this;
    }

  };

  // Regular expression used to split event strings.
  var eventSplitter = /\s+/;

  // Implement fancy features of the Events API such as multiple event
  // names `"change blur"` and jQuery-style event maps `{change: action}`
  // in terms of the existing API.
  var eventsApi = function(obj, action, name, rest) {
    if (!name) return true;

    // Handle event maps.
    if (typeof name === 'object') {
      for (var key in name) {
        obj[action].apply(obj, [key, name[key]].concat(rest));
      }
      return false;
    }

    // Handle space separated event names.
    if (eventSplitter.test(name)) {
      var names = name.split(eventSplitter);
      for (var i = 0, l = names.length; i < l; i++) {
        obj[action].apply(obj, [names[i]].concat(rest));
      }
      return false;
    }

    return true;
  };

  // A difficult-to-believe, but optimized internal dispatch function for
  // triggering events. Tries to keep the usual cases speedy (most internal
  // Backbone events have 3 arguments).
  var triggerEvents = function(events, args) {
    var ev, i = -1, l = events.length, a1 = args[0], a2 = args[1], a3 = args[2];
    switch (args.length) {
      case 0: while (++i < l) (ev = events[i]).callback.call(ev.ctx); return;
      case 1: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1); return;
      case 2: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1, a2); return;
      case 3: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1, a2, a3); return;
      default: while (++i < l) (ev = events[i]).callback.apply(ev.ctx, args);
    }
  };

  var listenMethods = {listenTo: 'on', listenToOnce: 'once'};

  // Inversion-of-control versions of `on` and `once`. Tell *this* object to
  // listen to an event in another object ... keeping track of what it's
  // listening to.
  _.each(listenMethods, function(implementation, method) {
    Events[method] = function(obj, name, callback) {
      var listeners = this._listeners || (this._listeners = {});
      var id = obj._listenerId || (obj._listenerId = _.uniqueId('l'));
      listeners[id] = obj;
      if (typeof name === 'object') callback = this;
      obj[implementation](name, callback, this);
      return this;
    };
  });

  // Aliases for backwards compatibility.
  Events.bind   = Events.on;
  Events.unbind = Events.off;

  // Allow the `Backbone` object to serve as a global event bus, for folks who
  // want global "pubsub" in a convenient place.
  _.extend(Backbone, Events);

  // Backbone.Model
  // --------------

  // Backbone **Models** are the basic data object in the framework --
  // frequently representing a row in a table in a database on your server.
  // A discrete chunk of data and a bunch of useful, related methods for
  // performing computations and transformations on that data.

  // Create a new model with the specified attributes. A client id (`cid`)
  // is automatically generated and assigned for you.
  var Model = Backbone.Model = function(attributes, options) {
    var defaults;
    var attrs = attributes || {};
    options || (options = {});
    this.cid = _.uniqueId('c');
    this.attributes = {};
    _.extend(this, _.pick(options, modelOptions));
    if (options.parse) attrs = this.parse(attrs, options) || {};
    if (defaults = _.result(this, 'defaults')) {
      attrs = _.defaults({}, attrs, defaults);
    }
    this.set(attrs, options);
    this.changed = {};
    this.initialize.apply(this, arguments);
  };

  // A list of options to be attached directly to the model, if provided.
  var modelOptions = ['url', 'urlRoot', 'collection'];

  // Attach all inheritable methods to the Model prototype.
  _.extend(Model.prototype, Events, {

    // A hash of attributes whose current and previous value differ.
    changed: null,

    // The value returned during the last failed validation.
    validationError: null,

    // The default name for the JSON `id` attribute is `"id"`. MongoDB and
    // CouchDB users may want to set this to `"_id"`.
    idAttribute: 'id',

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function(){},

    // Return a copy of the model's `attributes` object.
    toJSON: function(options) {
      return _.clone(this.attributes);
    },

    // Proxy `Backbone.sync` by default -- but override this if you need
    // custom syncing semantics for *this* particular model.
    sync: function() {
      return Backbone.sync.apply(this, arguments);
    },

    // Get the value of an attribute.
    get: function(attr) {
      return this.attributes[attr];
    },

    // Get the HTML-escaped value of an attribute.
    escape: function(attr) {
      return _.escape(this.get(attr));
    },

    // Returns `true` if the attribute contains a value that is not null
    // or undefined.
    has: function(attr) {
      return this.get(attr) != null;
    },

    // Set a hash of model attributes on the object, firing `"change"`. This is
    // the core primitive operation of a model, updating the data and notifying
    // anyone who needs to know about the change in state. The heart of the beast.
    set: function(key, val, options) {
      var attr, attrs, unset, changes, silent, changing, prev, current;
      if (key == null) return this;

      // Handle both `"key", value` and `{key: value}` -style arguments.
      if (typeof key === 'object') {
        attrs = key;
        options = val;
      } else {
        (attrs = {})[key] = val;
      }

      options || (options = {});

      // Run validation.
      if (!this._validate(attrs, options)) return false;

      // Extract attributes and options.
      unset           = options.unset;
      silent          = options.silent;
      changes         = [];
      changing        = this._changing;
      this._changing  = true;

      if (!changing) {
        this._previousAttributes = _.clone(this.attributes);
        this.changed = {};
      }
      current = this.attributes, prev = this._previousAttributes;

      // Check for changes of `id`.
      if (this.idAttribute in attrs) this.id = attrs[this.idAttribute];

      // For each `set` attribute, update or delete the current value.
      for (attr in attrs) {
        val = attrs[attr];
        if (!_.isEqual(current[attr], val)) changes.push(attr);
        if (!_.isEqual(prev[attr], val)) {
          this.changed[attr] = val;
        } else {
          delete this.changed[attr];
        }
        unset ? delete current[attr] : current[attr] = val;
      }

      // Trigger all relevant attribute changes.
      if (!silent) {
        if (changes.length) this._pending = true;
        for (var i = 0, l = changes.length; i < l; i++) {
          this.trigger('change:' + changes[i], this, current[changes[i]], options);
        }
      }

      // You might be wondering why there's a `while` loop here. Changes can
      // be recursively nested within `"change"` events.
      if (changing) return this;
      if (!silent) {
        while (this._pending) {
          this._pending = false;
          this.trigger('change', this, options);
        }
      }
      this._pending = false;
      this._changing = false;
      return this;
    },

    // Remove an attribute from the model, firing `"change"`. `unset` is a noop
    // if the attribute doesn't exist.
    unset: function(attr, options) {
      return this.set(attr, void 0, _.extend({}, options, {unset: true}));
    },

    // Clear all attributes on the model, firing `"change"`.
    clear: function(options) {
      var attrs = {};
      for (var key in this.attributes) attrs[key] = void 0;
      return this.set(attrs, _.extend({}, options, {unset: true}));
    },

    // Determine if the model has changed since the last `"change"` event.
    // If you specify an attribute name, determine if that attribute has changed.
    hasChanged: function(attr) {
      if (attr == null) return !_.isEmpty(this.changed);
      return _.has(this.changed, attr);
    },

    // Return an object containing all the attributes that have changed, or
    // false if there are no changed attributes. Useful for determining what
    // parts of a view need to be updated and/or what attributes need to be
    // persisted to the server. Unset attributes will be set to undefined.
    // You can also pass an attributes object to diff against the model,
    // determining if there *would be* a change.
    changedAttributes: function(diff) {
      if (!diff) return this.hasChanged() ? _.clone(this.changed) : false;
      var val, changed = false;
      var old = this._changing ? this._previousAttributes : this.attributes;
      for (var attr in diff) {
        if (_.isEqual(old[attr], (val = diff[attr]))) continue;
        (changed || (changed = {}))[attr] = val;
      }
      return changed;
    },

    // Get the previous value of an attribute, recorded at the time the last
    // `"change"` event was fired.
    previous: function(attr) {
      if (attr == null || !this._previousAttributes) return null;
      return this._previousAttributes[attr];
    },

    // Get all of the attributes of the model at the time of the previous
    // `"change"` event.
    previousAttributes: function() {
      return _.clone(this._previousAttributes);
    },

    // Fetch the model from the server. If the server's representation of the
    // model differs from its current attributes, they will be overridden,
    // triggering a `"change"` event.
    fetch: function(options) {
      options = options ? _.clone(options) : {};
      if (options.parse === void 0) options.parse = true;
      var model = this;
      var success = options.success;
      options.success = function(resp) {
        if (!model.set(model.parse(resp, options), options)) return false;
        if (success) success(model, resp, options);
        model.trigger('sync', model, resp, options);
      };
      wrapError(this, options);
      return this.sync('read', this, options);
    },

    // Set a hash of model attributes, and sync the model to the server.
    // If the server returns an attributes hash that differs, the model's
    // state will be `set` again.
    save: function(key, val, options) {
      var attrs, method, xhr, attributes = this.attributes;

      // Handle both `"key", value` and `{key: value}` -style arguments.
      if (key == null || typeof key === 'object') {
        attrs = key;
        options = val;
      } else {
        (attrs = {})[key] = val;
      }

      // If we're not waiting and attributes exist, save acts as `set(attr).save(null, opts)`.
      if (attrs && (!options || !options.wait) && !this.set(attrs, options)) return false;

      options = _.extend({validate: true}, options);

      // Do not persist invalid models.
      if (!this._validate(attrs, options)) return false;

      // Set temporary attributes if `{wait: true}`.
      if (attrs && options.wait) {
        this.attributes = _.extend({}, attributes, attrs);
      }

      // After a successful server-side save, the client is (optionally)
      // updated with the server-side state.
      if (options.parse === void 0) options.parse = true;
      var model = this;
      var success = options.success;
      options.success = function(resp) {
        // Ensure attributes are restored during synchronous saves.
        model.attributes = attributes;
        var serverAttrs = model.parse(resp, options);
        if (options.wait) serverAttrs = _.extend(attrs || {}, serverAttrs);
        if (_.isObject(serverAttrs) && !model.set(serverAttrs, options)) {
          return false;
        }
        if (success) success(model, resp, options);
        model.trigger('sync', model, resp, options);
      };
      wrapError(this, options);

      method = this.isNew() ? 'create' : (options.patch ? 'patch' : 'update');
      if (method === 'patch') options.attrs = attrs;
      xhr = this.sync(method, this, options);

      // Restore attributes.
      if (attrs && options.wait) this.attributes = attributes;

      return xhr;
    },

    // Destroy this model on the server if it was already persisted.
    // Optimistically removes the model from its collection, if it has one.
    // If `wait: true` is passed, waits for the server to respond before removal.
    destroy: function(options) {
      options = options ? _.clone(options) : {};
      var model = this;
      var success = options.success;

      var destroy = function() {
        model.trigger('destroy', model, model.collection, options);
      };

      options.success = function(resp) {
        if (options.wait || model.isNew()) destroy();
        if (success) success(model, resp, options);
        if (!model.isNew()) model.trigger('sync', model, resp, options);
      };

      if (this.isNew()) {
        options.success();
        return false;
      }
      wrapError(this, options);

      var xhr = this.sync('delete', this, options);
      if (!options.wait) destroy();
      return xhr;
    },

    // Default URL for the model's representation on the server -- if you're
    // using Backbone's restful methods, override this to change the endpoint
    // that will be called.
    url: function() {
      var base = _.result(this, 'urlRoot') || _.result(this.collection, 'url') || urlError();
      if (this.isNew()) return base;
      return base + (base.charAt(base.length - 1) === '/' ? '' : '/') + encodeURIComponent(this.id);
    },

    // **parse** converts a response into the hash of attributes to be `set` on
    // the model. The default implementation is just to pass the response along.
    parse: function(resp, options) {
      return resp;
    },

    // Create a new model with identical attributes to this one.
    clone: function() {
      return new this.constructor(this.attributes);
    },

    // A model is new if it has never been saved to the server, and lacks an id.
    isNew: function() {
      return this.id == null;
    },

    // Check if the model is currently in a valid state.
    isValid: function(options) {
      return this._validate({}, _.extend(options || {}, { validate: true }));
    },

    // Run validation against the next complete set of model attributes,
    // returning `true` if all is well. Otherwise, fire an `"invalid"` event.
    _validate: function(attrs, options) {
      if (!options.validate || !this.validate) return true;
      attrs = _.extend({}, this.attributes, attrs);
      var error = this.validationError = this.validate(attrs, options) || null;
      if (!error) return true;
      this.trigger('invalid', this, error, _.extend(options || {}, {validationError: error}));
      return false;
    }

  });

  // Underscore methods that we want to implement on the Model.
  var modelMethods = ['keys', 'values', 'pairs', 'invert', 'pick', 'omit'];

  // Mix in each Underscore method as a proxy to `Model#attributes`.
  _.each(modelMethods, function(method) {
    Model.prototype[method] = function() {
      var args = slice.call(arguments);
      args.unshift(this.attributes);
      return _[method].apply(_, args);
    };
  });

  // Backbone.Collection
  // -------------------

  // If models tend to represent a single row of data, a Backbone Collection is
  // more analagous to a table full of data ... or a small slice or page of that
  // table, or a collection of rows that belong together for a particular reason
  // -- all of the messages in this particular folder, all of the documents
  // belonging to this particular author, and so on. Collections maintain
  // indexes of their models, both in order, and for lookup by `id`.

  // Create a new **Collection**, perhaps to contain a specific type of `model`.
  // If a `comparator` is specified, the Collection will maintain
  // its models in sort order, as they're added and removed.
  var Collection = Backbone.Collection = function(models, options) {
    options || (options = {});
    if (options.url) this.url = options.url;
    if (options.model) this.model = options.model;
    if (options.comparator !== void 0) this.comparator = options.comparator;
    this._reset();
    this.initialize.apply(this, arguments);
    if (models) this.reset(models, _.extend({silent: true}, options));
  };

  // Default options for `Collection#set`.
  var setOptions = {add: true, remove: true, merge: true};
  var addOptions = {add: true, merge: false, remove: false};

  // Define the Collection's inheritable methods.
  _.extend(Collection.prototype, Events, {

    // The default model for a collection is just a **Backbone.Model**.
    // This should be overridden in most cases.
    model: Model,

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function(){},

    // The JSON representation of a Collection is an array of the
    // models' attributes.
    toJSON: function(options) {
      return this.map(function(model){ return model.toJSON(options); });
    },

    // Proxy `Backbone.sync` by default.
    sync: function() {
      return Backbone.sync.apply(this, arguments);
    },

    // Add a model, or list of models to the set.
    add: function(models, options) {
      return this.set(models, _.defaults(options || {}, addOptions));
    },

    // Remove a model, or a list of models from the set.
    remove: function(models, options) {
      models = _.isArray(models) ? models.slice() : [models];
      options || (options = {});
      var i, l, index, model;
      for (i = 0, l = models.length; i < l; i++) {
        model = this.get(models[i]);
        if (!model) continue;
        delete this._byId[model.id];
        delete this._byId[model.cid];
        index = this.indexOf(model);
        this.models.splice(index, 1);
        this.length--;
        if (!options.silent) {
          options.index = index;
          model.trigger('remove', model, this, options);
        }
        this._removeReference(model);
      }
      return this;
    },

    // Update a collection by `set`-ing a new list of models, adding new ones,
    // removing models that are no longer present, and merging models that
    // already exist in the collection, as necessary. Similar to **Model#set**,
    // the core operation for updating the data contained by the collection.
    set: function(models, options) {
      options = _.defaults(options || {}, setOptions);
      if (options.parse) models = this.parse(models, options);
      if (!_.isArray(models)) models = models ? [models] : [];
      var i, l, model, attrs, existing, sort;
      var at = options.at;
      var sortable = this.comparator && (at == null) && options.sort !== false;
      var sortAttr = _.isString(this.comparator) ? this.comparator : null;
      var toAdd = [], toRemove = [], modelMap = {};

      // Turn bare objects into model references, and prevent invalid models
      // from being added.
      for (i = 0, l = models.length; i < l; i++) {
        if (!(model = this._prepareModel(models[i], options))) continue;

        // If a duplicate is found, prevent it from being added and
        // optionally merge it into the existing model.
        if (existing = this.get(model)) {
          if (options.remove) modelMap[existing.cid] = true;
          if (options.merge) {
            existing.set(model.attributes, options);
            if (sortable && !sort && existing.hasChanged(sortAttr)) sort = true;
          }

        // This is a new model, push it to the `toAdd` list.
        } else if (options.add) {
          toAdd.push(model);

          // Listen to added models' events, and index models for lookup by
          // `id` and by `cid`.
          model.on('all', this._onModelEvent, this);
          this._byId[model.cid] = model;
          if (model.id != null) this._byId[model.id] = model;
        }
      }

      // Remove nonexistent models if appropriate.
      if (options.remove) {
        for (i = 0, l = this.length; i < l; ++i) {
          if (!modelMap[(model = this.models[i]).cid]) toRemove.push(model);
        }
        if (toRemove.length) this.remove(toRemove, options);
      }

      // See if sorting is needed, update `length` and splice in new models.
      if (toAdd.length) {
        if (sortable) sort = true;
        this.length += toAdd.length;
        if (at != null) {
          splice.apply(this.models, [at, 0].concat(toAdd));
        } else {
          push.apply(this.models, toAdd);
        }
      }

      // Silently sort the collection if appropriate.
      if (sort) this.sort({silent: true});

      if (options.silent) return this;

      // Trigger `add` events.
      for (i = 0, l = toAdd.length; i < l; i++) {
        (model = toAdd[i]).trigger('add', model, this, options);
      }

      // Trigger `sort` if the collection was sorted.
      if (sort) this.trigger('sort', this, options);
      return this;
    },

    // When you have more items than you want to add or remove individually,
    // you can reset the entire set with a new list of models, without firing
    // any granular `add` or `remove` events. Fires `reset` when finished.
    // Useful for bulk operations and optimizations.
    reset: function(models, options) {
      options || (options = {});
      for (var i = 0, l = this.models.length; i < l; i++) {
        this._removeReference(this.models[i]);
      }
      options.previousModels = this.models;
      this._reset();
      this.add(models, _.extend({silent: true}, options));
      if (!options.silent) this.trigger('reset', this, options);
      return this;
    },

    // Add a model to the end of the collection.
    push: function(model, options) {
      model = this._prepareModel(model, options);
      this.add(model, _.extend({at: this.length}, options));
      return model;
    },

    // Remove a model from the end of the collection.
    pop: function(options) {
      var model = this.at(this.length - 1);
      this.remove(model, options);
      return model;
    },

    // Add a model to the beginning of the collection.
    unshift: function(model, options) {
      model = this._prepareModel(model, options);
      this.add(model, _.extend({at: 0}, options));
      return model;
    },

    // Remove a model from the beginning of the collection.
    shift: function(options) {
      var model = this.at(0);
      this.remove(model, options);
      return model;
    },

    // Slice out a sub-array of models from the collection.
    slice: function(begin, end) {
      return this.models.slice(begin, end);
    },

    // Get a model from the set by id.
    get: function(obj) {
      if (obj == null) return void 0;
      return this._byId[obj.id != null ? obj.id : obj.cid || obj];
    },

    // Get the model at the given index.
    at: function(index) {
      return this.models[index];
    },

    // Return models with matching attributes. Useful for simple cases of
    // `filter`.
    where: function(attrs, first) {
      if (_.isEmpty(attrs)) return first ? void 0 : [];
      return this[first ? 'find' : 'filter'](function(model) {
        for (var key in attrs) {
          if (attrs[key] !== model.get(key)) return false;
        }
        return true;
      });
    },

    // Return the first model with matching attributes. Useful for simple cases
    // of `find`.
    findWhere: function(attrs) {
      return this.where(attrs, true);
    },

    // Force the collection to re-sort itself. You don't need to call this under
    // normal circumstances, as the set will maintain sort order as each item
    // is added.
    sort: function(options) {
      if (!this.comparator) throw new Error('Cannot sort a set without a comparator');
      options || (options = {});

      // Run sort based on type of `comparator`.
      if (_.isString(this.comparator) || this.comparator.length === 1) {
        this.models = this.sortBy(this.comparator, this);
      } else {
        this.models.sort(_.bind(this.comparator, this));
      }

      if (!options.silent) this.trigger('sort', this, options);
      return this;
    },

    // Figure out the smallest index at which a model should be inserted so as
    // to maintain order.
    sortedIndex: function(model, value, context) {
      value || (value = this.comparator);
      var iterator = _.isFunction(value) ? value : function(model) {
        return model.get(value);
      };
      return _.sortedIndex(this.models, model, iterator, context);
    },

    // Pluck an attribute from each model in the collection.
    pluck: function(attr) {
      return _.invoke(this.models, 'get', attr);
    },

    // Fetch the default set of models for this collection, resetting the
    // collection when they arrive. If `reset: true` is passed, the response
    // data will be passed through the `reset` method instead of `set`.
    fetch: function(options) {
      options = options ? _.clone(options) : {};
      if (options.parse === void 0) options.parse = true;
      var success = options.success;
      var collection = this;
      options.success = function(resp) {
        var method = options.reset ? 'reset' : 'set';
        collection[method](resp, options);
        if (success) success(collection, resp, options);
        collection.trigger('sync', collection, resp, options);
      };
      wrapError(this, options);
      return this.sync('read', this, options);
    },

    // Create a new instance of a model in this collection. Add the model to the
    // collection immediately, unless `wait: true` is passed, in which case we
    // wait for the server to agree.
    create: function(model, options) {
      options = options ? _.clone(options) : {};
      if (!(model = this._prepareModel(model, options))) return false;
      if (!options.wait) this.add(model, options);
      var collection = this;
      var success = options.success;
      // ATLASSIAN CHANGES DUE TO: https://ecosystem.atlassian.net/browse/AUI-1787
      // FOLLOWING LINE REMOVED BY ATLASSIAN
      // options.success = function(resp) {
      // FOLLOWING LINE ADDED BY ATLASSIAN
      options.success = function(model, resp, options) {
        if (options.wait) collection.add(model, options);
        if (success) success(model, resp, options);
      };
      model.save(null, options);
      return model;
    },

    // **parse** converts a response into a list of models to be added to the
    // collection. The default implementation is just to pass it through.
    parse: function(resp, options) {
      return resp;
    },

    // Create a new collection with an identical list of models as this one.
    clone: function() {
      return new this.constructor(this.models);
    },

    // Private method to reset all internal state. Called when the collection
    // is first initialized or reset.
    _reset: function() {
      this.length = 0;
      this.models = [];
      this._byId  = {};
    },

    // Prepare a hash of attributes (or other model) to be added to this
    // collection.
    _prepareModel: function(attrs, options) {
      if (attrs instanceof Model) {
        if (!attrs.collection) attrs.collection = this;
        return attrs;
      }
      options || (options = {});
      options.collection = this;
      var model = new this.model(attrs, options);
      if (!model._validate(attrs, options)) {
        this.trigger('invalid', this, attrs, options);
        return false;
      }
      return model;
    },

    // Internal method to sever a model's ties to a collection.
    _removeReference: function(model) {
      if (this === model.collection) delete model.collection;
      model.off('all', this._onModelEvent, this);
    },

    // Internal method called every time a model in the set fires an event.
    // Sets need to update their indexes when models change ids. All other
    // events simply proxy through. "add" and "remove" events that originate
    // in other collections are ignored.
    _onModelEvent: function(event, model, collection, options) {
      if ((event === 'add' || event === 'remove') && collection !== this) return;
      if (event === 'destroy') this.remove(model, options);
      if (model && event === 'change:' + model.idAttribute) {
        delete this._byId[model.previous(model.idAttribute)];
        if (model.id != null) this._byId[model.id] = model;
      }
      this.trigger.apply(this, arguments);
    }

  });

  // Underscore methods that we want to implement on the Collection.
  // 90% of the core usefulness of Backbone Collections is actually implemented
  // right here:
  var methods = ['forEach', 'each', 'map', 'collect', 'reduce', 'foldl',
    'inject', 'reduceRight', 'foldr', 'find', 'detect', 'filter', 'select',
    'reject', 'every', 'all', 'some', 'any', 'include', 'contains', 'invoke',
    'max', 'min', 'toArray', 'size', 'first', 'head', 'take', 'initial', 'rest',
    'tail', 'drop', 'last', 'without', 'indexOf', 'shuffle', 'lastIndexOf',
    'isEmpty', 'chain'];

  // Mix in each Underscore method as a proxy to `Collection#models`.
  _.each(methods, function(method) {
    Collection.prototype[method] = function() {
      var args = slice.call(arguments);
      args.unshift(this.models);
      return _[method].apply(_, args);
    };
  });

  // Underscore methods that take a property name as an argument.
  var attributeMethods = ['groupBy', 'countBy', 'sortBy'];

  // Use attributes instead of properties.
  _.each(attributeMethods, function(method) {
    Collection.prototype[method] = function(value, context) {
      var iterator = _.isFunction(value) ? value : function(model) {
        return model.get(value);
      };
      return _[method](this.models, iterator, context);
    };
  });

  // Backbone.View
  // -------------

  // Backbone Views are almost more convention than they are actual code. A View
  // is simply a JavaScript object that represents a logical chunk of UI in the
  // DOM. This might be a single item, an entire list, a sidebar or panel, or
  // even the surrounding frame which wraps your whole app. Defining a chunk of
  // UI as a **View** allows you to define your DOM events declaratively, without
  // having to worry about render order ... and makes it easy for the view to
  // react to specific changes in the state of your models.

  // Creating a Backbone.View creates its initial element outside of the DOM,
  // if an existing element is not provided...
  var View = Backbone.View = function(options) {
    this.cid = _.uniqueId('view');
    this._configure(options || {});
    this._ensureElement();
    this.initialize.apply(this, arguments);
    this.delegateEvents();
  };

  // Cached regex to split keys for `delegate`.
  var delegateEventSplitter = /^(\S+)\s*(.*)$/;

  // List of view options to be merged as properties.
  var viewOptions = ['model', 'collection', 'el', 'id', 'attributes', 'className', 'tagName', 'events'];

  // Set up all inheritable **Backbone.View** properties and methods.
  _.extend(View.prototype, Events, {

    // The default `tagName` of a View's element is `"div"`.
    tagName: 'div',

    // jQuery delegate for element lookup, scoped to DOM elements within the
    // current view. This should be prefered to global lookups where possible.
    $: function(selector) {
      return this.$el.find(selector);
    },

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function(){},

    // **render** is the core function that your view should override, in order
    // to populate its element (`this.el`), with the appropriate HTML. The
    // convention is for **render** to always return `this`.
    render: function() {
      return this;
    },

    // Remove this view by taking the element out of the DOM, and removing any
    // applicable Backbone.Events listeners.
    remove: function() {
      this.$el.remove();
      this.stopListening();
      return this;
    },

    // Change the view's element (`this.el` property), including event
    // re-delegation.
    setElement: function(element, delegate) {
      if (this.$el) this.undelegateEvents();
      this.$el = element instanceof Backbone.$ ? element : Backbone.$(element);
      this.el = this.$el[0];
      if (delegate !== false) this.delegateEvents();
      return this;
    },

    // Set callbacks, where `this.events` is a hash of
    //
    // *{"event selector": "callback"}*
    //
    //     {
    //       'mousedown .title':  'edit',
    //       'click .button':     'save'
    //       'click .open':       function(e) { ... }
    //     }
    //
    // pairs. Callbacks will be bound to the view, with `this` set properly.
    // Uses event delegation for efficiency.
    // Omitting the selector binds the event to `this.el`.
    // This only works for delegate-able events: not `focus`, `blur`, and
    // not `change`, `submit`, and `reset` in Internet Explorer.
    delegateEvents: function(events) {
      if (!(events || (events = _.result(this, 'events')))) return this;
      this.undelegateEvents();
      for (var key in events) {
        var method = events[key];
        if (!_.isFunction(method)) method = this[events[key]];
        if (!method) continue;

        var match = key.match(delegateEventSplitter);
        var eventName = match[1], selector = match[2];
        method = _.bind(method, this);
        eventName += '.delegateEvents' + this.cid;
        if (selector === '') {
          this.$el.on(eventName, method);
        } else {
          this.$el.on(eventName, selector, method);
        }
      }
      return this;
    },

    // Clears all callbacks previously bound to the view with `delegateEvents`.
    // You usually don't need to use this, but may wish to if you have multiple
    // Backbone views attached to the same DOM element.
    undelegateEvents: function() {
      this.$el.off('.delegateEvents' + this.cid);
      return this;
    },

    // Performs the initial configuration of a View with a set of options.
    // Keys with special meaning *(e.g. model, collection, id, className)* are
    // attached directly to the view.  See `viewOptions` for an exhaustive
    // list.
    _configure: function(options) {
      if (this.options) options = _.extend({}, _.result(this, 'options'), options);
      _.extend(this, _.pick(options, viewOptions));
      this.options = options;
    },

    // Ensure that the View has a DOM element to render into.
    // If `this.el` is a string, pass it through `$()`, take the first
    // matching element, and re-assign it to `el`. Otherwise, create
    // an element from the `id`, `className` and `tagName` properties.
    _ensureElement: function() {
      if (!this.el) {
        var attrs = _.extend({}, _.result(this, 'attributes'));
        if (this.id) attrs.id = _.result(this, 'id');
        if (this.className) attrs['class'] = _.result(this, 'className');
        var $el = Backbone.$('<' + _.result(this, 'tagName') + '>').attr(attrs);
        this.setElement($el, false);
      } else {
        this.setElement(_.result(this, 'el'), false);
      }
    }

  });

  // Backbone.sync
  // -------------

  // Override this function to change the manner in which Backbone persists
  // models to the server. You will be passed the type of request, and the
  // model in question. By default, makes a RESTful Ajax request
  // to the model's `url()`. Some possible customizations could be:
  //
  // * Use `setTimeout` to batch rapid-fire updates into a single request.
  // * Send up the models as XML instead of JSON.
  // * Persist models via WebSockets instead of Ajax.
  //
  // Turn on `Backbone.emulateHTTP` in order to send `PUT` and `DELETE` requests
  // as `POST`, with a `_method` parameter containing the true HTTP method,
  // as well as all requests with the body as `application/x-www-form-urlencoded`
  // instead of `application/json` with the model in a param named `model`.
  // Useful when interfacing with server-side languages like **PHP** that make
  // it difficult to read the body of `PUT` requests.
  Backbone.sync = function(method, model, options) {
    var type = methodMap[method];

    // Default options, unless specified.
    _.defaults(options || (options = {}), {
      emulateHTTP: Backbone.emulateHTTP,
      emulateJSON: Backbone.emulateJSON
    });

    // Default JSON-request options.
    var params = {type: type, dataType: 'json'};

    // Ensure that we have a URL.
    if (!options.url) {
      params.url = _.result(model, 'url') || urlError();
    }

    // Ensure that we have the appropriate request data.
    if (options.data == null && model && (method === 'create' || method === 'update' || method === 'patch')) {
      params.contentType = 'application/json';
      params.data = JSON.stringify(options.attrs || model.toJSON(options));
    }

    // For older servers, emulate JSON by encoding the request into an HTML-form.
    if (options.emulateJSON) {
      params.contentType = 'application/x-www-form-urlencoded';
      params.data = params.data ? {model: params.data} : {};
    }

    // For older servers, emulate HTTP by mimicking the HTTP method with `_method`
    // And an `X-HTTP-Method-Override` header.
    if (options.emulateHTTP && (type === 'PUT' || type === 'DELETE' || type === 'PATCH')) {
      params.type = 'POST';
      if (options.emulateJSON) params.data._method = type;
      var beforeSend = options.beforeSend;
      options.beforeSend = function(xhr) {
        xhr.setRequestHeader('X-HTTP-Method-Override', type);
        if (beforeSend) return beforeSend.apply(this, arguments);
      };
    }

    // Don't process data on a non-GET request.
    if (params.type !== 'GET' && !options.emulateJSON) {
      params.processData = false;
    }

    // If we're sending a `PATCH` request, and we're in an old Internet Explorer
    // that still has ActiveX enabled by default, override jQuery to use that
    // for XHR instead. Remove this line when jQuery supports `PATCH` on IE8.
    if (params.type === 'PATCH' && window.ActiveXObject &&
          !(window.external && window.external.msActiveXFilteringEnabled)) {
      params.xhr = function() {
        return new ActiveXObject("Microsoft.XMLHTTP");
      };
    }

    // Make the request, allowing the user to override any Ajax options.
    var xhr = options.xhr = Backbone.ajax(_.extend(params, options));
    model.trigger('request', model, xhr, options);
    return xhr;
  };

  // Map from CRUD to HTTP for our default `Backbone.sync` implementation.
  var methodMap = {
    'create': 'POST',
    'update': 'PUT',
    'patch':  'PATCH',
    'delete': 'DELETE',
    'read':   'GET'
  };

  // Set the default implementation of `Backbone.ajax` to proxy through to `$`.
  // Override this if you'd like to use a different library.
  Backbone.ajax = function() {
    return Backbone.$.ajax.apply(Backbone.$, arguments);
  };

  // Backbone.Router
  // ---------------

  // Routers map faux-URLs to actions, and fire events when routes are
  // matched. Creating a new one sets its `routes` hash, if not set statically.
  var Router = Backbone.Router = function(options) {
    options || (options = {});
    if (options.routes) this.routes = options.routes;
    this._bindRoutes();
    this.initialize.apply(this, arguments);
  };

  // Cached regular expressions for matching named param parts and splatted
  // parts of route strings.
  var optionalParam = /\((.*?)\)/g;
  var namedParam    = /(\(\?)?:\w+/g;
  var splatParam    = /\*\w+/g;
  var escapeRegExp  = /[\-{}\[\]+?.,\\\^$|#\s]/g;

  // Set up all inheritable **Backbone.Router** properties and methods.
  _.extend(Router.prototype, Events, {

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function(){},

    // Manually bind a single named route to a callback. For example:
    //
    //     this.route('search/:query/p:num', 'search', function(query, num) {
    //       ...
    //     });
    //
    route: function(route, name, callback) {
      if (!_.isRegExp(route)) route = this._routeToRegExp(route);
      if (_.isFunction(name)) {
        callback = name;
        name = '';
      }
      if (!callback) callback = this[name];
      var router = this;
      Backbone.history.route(route, function(fragment) {
        var args = router._extractParameters(route, fragment);
        callback && callback.apply(router, args);
        router.trigger.apply(router, ['route:' + name].concat(args));
        router.trigger('route', name, args);
        Backbone.history.trigger('route', router, name, args);
      });
      return this;
    },

    // Simple proxy to `Backbone.history` to save a fragment into the history.
    navigate: function(fragment, options) {
      Backbone.history.navigate(fragment, options);
      return this;
    },

    // Bind all defined routes to `Backbone.history`. We have to reverse the
    // order of the routes here to support behavior where the most general
    // routes can be defined at the bottom of the route map.
    _bindRoutes: function() {
      if (!this.routes) return;
      this.routes = _.result(this, 'routes');
      var route, routes = _.keys(this.routes);
      while ((route = routes.pop()) != null) {
        this.route(route, this.routes[route]);
      }
    },

    // Convert a route string into a regular expression, suitable for matching
    // against the current location hash.
    _routeToRegExp: function(route) {
      route = route.replace(escapeRegExp, '\\$&')
                   .replace(optionalParam, '(?:$1)?')
                   .replace(namedParam, function(match, optional){
                     return optional ? match : '([^\/]+)';
                   })
                   .replace(splatParam, '(.*?)');
      return new RegExp('^' + route + '$');
    },

    // Given a route, and a URL fragment that it matches, return the array of
    // extracted decoded parameters. Empty or unmatched parameters will be
    // treated as `null` to normalize cross-browser behavior.
    _extractParameters: function(route, fragment) {
      var params = route.exec(fragment).slice(1);
      return _.map(params, function(param) {
        return param ? decodeURIComponent(param) : null;
      });
    }

  });

  // Backbone.History
  // ----------------

  // Handles cross-browser history management, based on either
  // [pushState](http://diveintohtml5.info/history.html) and real URLs, or
  // [onhashchange](https://developer.mozilla.org/en-US/docs/DOM/window.onhashchange)
  // and URL fragments. If the browser supports neither (old IE, natch),
  // falls back to polling.
  var History = Backbone.History = function() {
    this.handlers = [];
    _.bindAll(this, 'checkUrl');

    // Ensure that `History` can be used outside of the browser.
    if (typeof window !== 'undefined') {
      this.location = window.location;
      this.history = window.history;
    }
  };

  // Cached regex for stripping a leading hash/slash and trailing space.
  var routeStripper = /^[#\/]|\s+$/g;

  // Cached regex for stripping leading and trailing slashes.
  var rootStripper = /^\/+|\/+$/g;

  // Cached regex for detecting MSIE.
  var isExplorer = /msie [\w.]+/;

  // Cached regex for removing a trailing slash.
  var trailingSlash = /\/$/;

  // Has the history handling already been started?
  History.started = false;

  // Set up all inheritable **Backbone.History** properties and methods.
  _.extend(History.prototype, Events, {

    // The default interval to poll for hash changes, if necessary, is
    // twenty times a second.
    interval: 50,

    // Gets the true hash value. Cannot use location.hash directly due to bug
    // in Firefox where location.hash will always be decoded.
    getHash: function(window) {
      var match = (window || this).location.href.match(/#(.*)$/);
      return match ? match[1] : '';
    },

    // Get the cross-browser normalized URL fragment, either from the URL,
    // the hash, or the override.
    getFragment: function(fragment, forcePushState) {
      if (fragment == null) {
        if (this._hasPushState || !this._wantsHashChange || forcePushState) {
          fragment = this.location.pathname;
          var root = this.root.replace(trailingSlash, '');
          if (!fragment.indexOf(root)) fragment = fragment.substr(root.length);
        } else {
          fragment = this.getHash();
        }
      }
      return fragment.replace(routeStripper, '');
    },

    // Start the hash change handling, returning `true` if the current URL matches
    // an existing route, and `false` otherwise.
    start: function(options) {
      if (History.started) throw new Error("Backbone.history has already been started");
      History.started = true;

      // Figure out the initial configuration. Do we need an iframe?
      // Is pushState desired ... is it available?
      this.options          = _.extend({}, {root: '/'}, this.options, options);
      this.root             = this.options.root;
      this._wantsHashChange = this.options.hashChange !== false;
      this._wantsPushState  = !!this.options.pushState;
      this._hasPushState    = !!(this.options.pushState && this.history && this.history.pushState);
      var fragment          = this.getFragment();
      var docMode           = document.documentMode;
      var oldIE             = (isExplorer.exec(navigator.userAgent.toLowerCase()) && (!docMode || docMode <= 7));

      // Normalize root to always include a leading and trailing slash.
      this.root = ('/' + this.root + '/').replace(rootStripper, '/');

      if (oldIE && this._wantsHashChange) {
        this.iframe = Backbone.$('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo('body')[0].contentWindow;
        this.navigate(fragment);
      }

      // Depending on whether we're using pushState or hashes, and whether
      // 'onhashchange' is supported, determine how we check the URL state.
      if (this._hasPushState) {
        Backbone.$(window).on('popstate', this.checkUrl);
      } else if (this._wantsHashChange && ('onhashchange' in window) && !oldIE) {
        Backbone.$(window).on('hashchange', this.checkUrl);
      } else if (this._wantsHashChange) {
        this._checkUrlInterval = setInterval(this.checkUrl, this.interval);
      }

      // Determine if we need to change the base url, for a pushState link
      // opened by a non-pushState browser.
      this.fragment = fragment;
      var loc = this.location;
      var atRoot = loc.pathname.replace(/[^\/]$/, '$&/') === this.root;

      // If we've started off with a route from a `pushState`-enabled browser,
      // but we're currently in a browser that doesn't support it...
      if (this._wantsHashChange && this._wantsPushState && !this._hasPushState && !atRoot) {
        this.fragment = this.getFragment(null, true);
        this.location.replace(this.root + this.location.search + '#' + this.fragment);
        // Return immediately as browser will do redirect to new url
        return true;

      // Or if we've started out with a hash-based route, but we're currently
      // in a browser where it could be `pushState`-based instead...
      } else if (this._wantsPushState && this._hasPushState && atRoot && loc.hash) {
        this.fragment = this.getHash().replace(routeStripper, '');
        this.history.replaceState({}, document.title, this.root + this.fragment + loc.search);
      }

      if (!this.options.silent) return this.loadUrl();
    },

    // Disable Backbone.history, perhaps temporarily. Not useful in a real app,
    // but possibly useful for unit testing Routers.
    stop: function() {
      Backbone.$(window).off('popstate', this.checkUrl).off('hashchange', this.checkUrl);
      clearInterval(this._checkUrlInterval);
      History.started = false;
    },

    // Add a route to be tested when the fragment changes. Routes added later
    // may override previous routes.
    route: function(route, callback) {
      this.handlers.unshift({route: route, callback: callback});
    },

    // Checks the current URL to see if it has changed, and if it has,
    // calls `loadUrl`, normalizing across the hidden iframe.
    checkUrl: function(e) {
      var current = this.getFragment();
      if (current === this.fragment && this.iframe) {
        current = this.getFragment(this.getHash(this.iframe));
      }
      if (current === this.fragment) return false;
      if (this.iframe) this.navigate(current);
      this.loadUrl() || this.loadUrl(this.getHash());
    },

    // Attempt to load the current URL fragment. If a route succeeds with a
    // match, returns `true`. If no defined routes matches the fragment,
    // returns `false`.
    loadUrl: function(fragmentOverride) {
      var fragment = this.fragment = this.getFragment(fragmentOverride);
      var matched = _.any(this.handlers, function(handler) {
        if (handler.route.test(fragment)) {
          handler.callback(fragment);
          return true;
        }
      });
      return matched;
    },

    // Save a fragment into the hash history, or replace the URL state if the
    // 'replace' option is passed. You are responsible for properly URL-encoding
    // the fragment in advance.
    //
    // The options object can contain `trigger: true` if you wish to have the
    // route callback be fired (not usually desirable), or `replace: true`, if
    // you wish to modify the current URL without adding an entry to the history.
    navigate: function(fragment, options) {
      if (!History.started) return false;
      if (!options || options === true) options = {trigger: options};
      fragment = this.getFragment(fragment || '');
      if (this.fragment === fragment) return;
      this.fragment = fragment;
      var url = this.root + fragment;

      // If pushState is available, we use it to set the fragment as a real URL.
      if (this._hasPushState) {
        this.history[options.replace ? 'replaceState' : 'pushState']({}, document.title, url);

      // If hash changes haven't been explicitly disabled, update the hash
      // fragment to store history.
      } else if (this._wantsHashChange) {
        this._updateHash(this.location, fragment, options.replace);
        if (this.iframe && (fragment !== this.getFragment(this.getHash(this.iframe)))) {
          // Opening and closing the iframe tricks IE7 and earlier to push a
          // history entry on hash-tag change.  When replace is true, we don't
          // want this.
          if(!options.replace) this.iframe.document.open().close();
          this._updateHash(this.iframe.location, fragment, options.replace);
        }

      // If you've told us that you explicitly don't want fallback hashchange-
      // based history, then `navigate` becomes a page refresh.
      } else {
        return this.location.assign(url);
      }
      if (options.trigger) this.loadUrl(fragment);
    },

    // Update the hash location, either replacing the current entry, or adding
    // a new one to the browser history.
    _updateHash: function(location, fragment, replace) {
      if (replace) {
        var href = location.href.replace(/(javascript:|#).*$/, '');
        location.replace(href + '#' + fragment);
      } else {
        // Some browsers require that `hash` contains a leading #.
        location.hash = '#' + fragment;
      }
    }

  });

  // Create the default Backbone.history.
  Backbone.history = new History;

  // Helpers
  // -------

  // Helper function to correctly set up the prototype chain, for subclasses.
  // Similar to `goog.inherits`, but uses a hash of prototype properties and
  // class properties to be extended.
  var extend = function(protoProps, staticProps) {
    var parent = this;
    var child;

    // The constructor function for the new subclass is either defined by you
    // (the "constructor" property in your `extend` definition), or defaulted
    // by us to simply call the parent's constructor.
    if (protoProps && _.has(protoProps, 'constructor')) {
      child = protoProps.constructor;
    } else {
      child = function(){ return parent.apply(this, arguments); };
    }

    // Add static properties to the constructor function, if supplied.
    _.extend(child, parent, staticProps);

    // Set the prototype chain to inherit from `parent`, without calling
    // `parent`'s constructor function.
    var Surrogate = function(){ this.constructor = child; };
    Surrogate.prototype = parent.prototype;
    child.prototype = new Surrogate;

    // Add prototype properties (instance properties) to the subclass,
    // if supplied.
    if (protoProps) _.extend(child.prototype, protoProps);

    // Set a convenience property in case the parent's prototype is needed
    // later.
    child.__super__ = parent.prototype;

    return child;
  };

  // Set up inheritance for the model, collection, router, view and history.
  Model.extend = Collection.extend = Router.extend = View.extend = History.extend = extend;

  // Throw an error when a URL is needed, and none is supplied.
  var urlError = function() {
    throw new Error('A "url" property or function must be specified');
  };

  // Wrap an optional error callback with a fallback error event.
  var wrapError = function (model, options) {
    var error = options.error;
    options.error = function(resp) {
      if (error) error(model, resp, options);
      model.trigger('error', model, resp, options);
    };
  };

}).call(this);
 /**
 * FOLLOWING LINES MODIFIED BY ATLASSIAN
 * @see https://ecosystem.atlassian.net/browse/AUI-2989
 */
if (typeof window.define === 'function') {
    define('backbone', ['underscore'], function(){
        return window.Backbone;
    })
}
/** END ATLASSIAN */
;
define('aui/internal/select/option',['aui/internal/skate'], function (skate) {
    'use strict';

    skate('aui-option', {
        created: function(element) {
            Object.defineProperty(element, 'value', {
                get: function () {
                    return element.getAttribute('value') || element.textContent;
                },
                set: function (value) {
                    element.setAttribute('value', value);
                }
            });
        },
        prototype: {
            serialize: function () {
                var json = {};
                if (this.hasAttribute('img-src')) {
                    json['img-src'] = this.getAttribute('img-src');
                }
                json.value = this.value;
                json.label = this.textContent;

                return json;
            }
        }
    });
});

define('aui/internal/select/suggestions-model',[],function () {
    'use strict';

    function SuggestionsModel () {
        this._suggestions = [];
        this._activeIndex = -1;
    }

    SuggestionsModel.prototype = {
        onChange: function () {},

        onHighlightChange: function () {},

        get: function (index) {
            return this._suggestions[index];
        },

        set: function (suggestions) {
            var oldSuggestions = this._suggestions;
            this._suggestions = suggestions || [];
            this.onChange(oldSuggestions);
            return this;
        },

        setHighlighted: function (toHighlight) {
            if (toHighlight) {
                for (var i = 0; i < this._suggestions.length; i++) {
                    if (this._suggestions[i].id === toHighlight.id) {
                        this.highlight(i);
                    }
                }
            }

            return this;
        },

        highlight: function (index) {
            this._activeIndex = index;
            this.onHighlightChange();
            return this;
        },

        highlightPrevious: function () {
            var current = this._activeIndex;
            var previousActiveIndex = (current === 0) ? current : (current - 1);
            this.highlight(previousActiveIndex);
            return this;
        },

        highlightNext: function () {
            var current = this._activeIndex;
            var nextActiveIndex = (current === this._suggestions.length - 1) ? current : (current + 1);
            this.highlight(nextActiveIndex);
            return this;
        },

        highlighted: function () {
            return this.get(this._activeIndex);
        },

        highlightedIndex: function () {
            return this._activeIndex;
        }
    };

    return SuggestionsModel;
});

define('aui/internal/select/suggestions-view',[
    '../alignment',
    '../../../layer'
], function (
    Alignment,
    layer
) {
    'use strict';
    var $ = jQuery;
    function generateListItemID (listId, index) {
        return listId + '-' + index;
    }

    function enableAlignment (view) {
        if (view.anchor && !view.auiAlignment) {
            view.auiAlignment = new Alignment(view.el, view.anchor);
        }

        if (view.auiAlignment) {
            view.auiAlignment.enable();
        }
    }

    function destroyAlignment (view) {
        if (view.auiAlignment) {
            view.auiAlignment.destroy();
        }
    }

    function matchWidth (view) {
        $(view.el).css('min-width', $(view.anchor).outerWidth());
    }

    function SuggestionsView (element, anchor) {
        this.el = element;
        this.anchor = anchor;
    }

    function clearActive (element) {
        $(element).find('.aui-select-active').removeClass('aui-select-active');
    }

    SuggestionsView.prototype = {
        render: function (suggestions, currentLength, listId) {
            this.currListId = listId;
            var html = '';

            // Do nothing if we have no new suggestions, otherwise append anything else we find.
            if (suggestions.length) {
                var i = currentLength;
                suggestions.forEach(function (sugg) {
                    var label = sugg.get('label') || sugg.get('value');
                    var image = sugg.get('img-src') ? '<img src="' + sugg.get('img-src')+ '"/>' : '';
                    html += '<li role="option" class="aui-select-suggestion" id="' + generateListItemID(listId, i) + '">' + image + label + '</li>';
                    i++;
                });

                // If the old suggestions were empty, a <li> of 'No suggestions' will be appended, we need to remove it
                if (currentLength) {
                    this.el.querySelector('ul').innerHTML += html;
                } else {
                    this.el.querySelector('ul').innerHTML = html;
                }
            } else if (!currentLength) {
                this.el.querySelector('ul').innerHTML = '<li role="option" class="aui-select-no-suggestions">' + AJS.I18n.getText('aui.select.no.suggestions') + '</li>';
            }

            return this;
        },
        setActive: function (active) {
            clearActive(this.el);
            $(this.el).find('#' + generateListItemID(this.currListId, active)).addClass('aui-select-active');
        },
        getActive: function () {
            return this.el.querySelector('.aui-select-active');
        },
        show: function () {
            matchWidth(this);
            enableAlignment(this);
            layer(this.el).show();
        },
        hide: function () {
            clearActive(this.el);
            layer(this.el).hide();
            destroyAlignment(this);
        },
        isVisible: function () {
            return $(this.el).is(':visible');
        }
    };

    return SuggestionsView;
});

define('aui/internal/select/template',['aui/internal/skate-template-html'], function (template) {
    'use strict';

    return template(
        '<input type="text" class="text" autocomplete="off" role="combobox" aria-autocomplete="list" aria-haspopup="true" aria-expanded="false">',
        '<select></select>',
        '<datalist>',
            '<content select="aui-option"></content>',
        '</datalist>',
        '<button class="aui-button" role="button" tabindex="-1" type="button"></button>',
        '<div class="aui-popover" role="listbox" data-aui-alignment="bottom left">',
            '<ul class="aui-optionlist" role="presentation"></ul>',
        '</div>',
        '<div class="aui-select-status assistive" aria-live="polite" role="status"></div>'
    );
});

/**
 * @fileOverview describes a ProgressiveDataSet object.
 *
 * This object serves as part of a series of components to handle the various aspects of autocomplete controls.
 */
AJS.ProgressiveDataSet = Backbone.Collection.extend(
/** @lends AJS.ProgressiveDataSet.prototype */
{
    /**
     * @class AJS.ProgressiveDataSet
     *
     * A queryable set of data that optimises the speed at which responses can be provided.
     *
     * ProgressiveDataSet should be given a matcher function so that it may filter results for queries locally.
     *
     * ProgressiveDataSet can be given a remote query endpoint to fetch data from. Should a remote endpoint
     * be provided, ProgressiveDataSet will leverage both client-side matching and query caching to reduce
     * the number of times the remote source need be queried.
     *
     * @example
     * var source = new AJS.ProgressiveDataSet([], {
     *     model: Backbone.Model.extend({ idAttribute: "username" }),
     *     queryEndpoint: "/jira/rest/latest/users",
     *     queryParamKey: "username",
     *     matcher: function(model, query) {
     *         return _.startsWith(model.get('username'), query);
     *     }
     * });
     * source.on('respond', doStuffWithMatchingResults);
     * source.query('john');
     *
     * @augments Backbone.Collection
     *
     * @property {String} value the latest query for which the ProgressiveDataSet is responding to.
     * @property {Number} activeQueryCount the number of queries being run remotely.
     *
     * @constructs
     */
    initialize: function(models, options) {
        options || (options = {});
        if (options.matcher) {
            this.matcher = options.matcher;
        }
        if (options.model) {
            this.model = options.model; // Fixed in backbone 0.9.2
        }
        this._idAttribute = (new this.model()).idAttribute;
        this._maxResults = options.maxResults || 5;
        this._queryData = options.queryData || {};
        this._queryParamKey = options.queryParamKey || "q";
        this._queryEndpoint = options.queryEndpoint || "";
        this.value = null;
        this.queryCache = {};
        this.activeQueryCount = 0;
        _.bindAll(this, 'query', 'respond');
    },

    url: function() {
        return this._queryEndpoint;
    },

    /**
     * Sets and runs a query against the ProgressiveDataSet.
     *
     * Bind to ProgressiveDataSet's 'respond' event to receive the results that match the latest query.
     *
     * @param {String} query the query to run.
     */
    query: function(query) {
        var remote, results;

        this.value = query;
        results = this.getFilteredResults(query);
        this.respond(query, results);

        if (!query || !this._queryEndpoint || this.hasQueryCache(query) || !this.shouldGetMoreResults(results)) {
            return;
        }

        remote = this.fetch(query);

        this.activeQueryCount++;
        this.trigger('activity', { activity: true });
        remote.always(_.bind(function() {
            this.activeQueryCount--;
            this.trigger('activity', { activity: !!this.activeQueryCount });
        }, this));

        remote.done(_.bind(function(resp, succ, xhr) {
            this.addQueryCache(query, resp, xhr);
        }, this));
        remote.done(_.bind(function() {
            query = this.value;
            results = this.getFilteredResults(query);
            this.respond(query, results);
        }, this));
    },

    /**
     * Gets all the data that should be sent in a remote request for data.
     * @param {String} query the value of the query to be run.
     * @return {Object} the data to to be sent to the remote when querying it.
     * @private
     */
    getQueryData: function(query) {
        var params = _.isFunction(this._queryData) ? this._queryData(query) : this._queryData;
        var data = _.extend({}, params);
        data[this._queryParamKey] = query;
        return data;
    },

    /**
     * Get data from a remote source that matches the query, and add it to this ProgressiveDataSet's set.
     *
     * @param {String} query the value of the query to be run.
     * @return {jQuery.Deferred} a deferred object representing the remote request.
     */
    fetch: function(query) {
        var data = this.getQueryData(query);
        // {add: true} for Backbone <= 0.9.2
        // {update: true, remove: false} for Backbone >= 0.9.9
        var params = { add : true, update : true, remove : false, data : data };
        var remote = Backbone.Collection.prototype.fetch.call(this, params);
        return remote;
    },

    /**
     * Triggers the 'respond' event on this ProgressiveDataSet for the given query and associated results.
     *
     * @param {String} query the query that was run
     * @param {Array} results a set of results that matched the query.
     * @return {Array} the results.
     * @private
     */
    respond: function(query, results) {
        this.trigger('respond', {
            query: query,
            results: results
        });
        return results;
    },

    /**
     * A hook-point to define a function that tests whether a model matches a query or not.
     *
     * This will be called by getFilteredResults in order to generate the list of results for a query.
     *
     * (For you java folks, it's essentially a predicate.)
     *
     * @param {Backbone.Model} item a model of the data to check for a match in.
     * @param {String} query the value to test against the item.
     * @returns {Boolean} true if the model matches the query, otherwise false.
     * @function
     */
    matcher: function(item, query) { },

    /**
     * Filters the set of data contained by the ProgressiveDataSet down to a smaller set of results.
     *
     * The set will only consist of Models that "match" the query -- i.e., only Models where
     * a call to ProgressiveDataSet#matcher returns true.
     *
     * @param query {String} the value that results should match (according to the matcher function)
     * @return {Array} A set of Backbone Models that match the query.
     */
    getFilteredResults: function(query) {
        var results = [];
        if (!query) {
            return results;
        }
        results = this.filter(function(item) {
            return !!this.matcher(item, query);
        }, this);
        if (this._maxResults) {
            results = _.first(results, this._maxResults);
        }
        return results;
    },

    /**
     * Store a response in the query cache for a given query.
     *
     * @param {String} query the value to cache a response for.
     * @param {Object} response the data of the response from the server.
     * @param {XMLHttpRequest} xhr
     * @private
     */
    addQueryCache: function(query, response, xhr) {
        var cache = this.queryCache;
        var results = this.parse(response, xhr);
        cache[query] = _.pluck(results, this._idAttribute);
    },

    /**
     * Check if there is a query cache entry for a given query.
     *
     * @param query the value to check in the cache
     * @return {Boolean} true if the cache contains a response for the query, false otherwise.
     */
    hasQueryCache: function(query) {
        return this.queryCache.hasOwnProperty(query);
    },

    /**
     * Get the query cache entry for a given query.
     *
     * @param query the value to check in the cache
     * @return {Object[]} an array of values representing the IDs of the models the response for this query contained.
     */
    findQueryCache: function(query) {
        return this.queryCache[query];
    },

    /**
     *
     * @param {Array} results the set of results we know about right now.
     * @return {Boolean} true if the ProgressiveDataSet should look for more results.
     * @private
     */
    shouldGetMoreResults: function(results) {
        return results.length < this._maxResults;
    },

    /**
     *
     * @note Changing this value will trigger ProgressiveDataSet#event:respond if there is a query.
     * @param {Number} number how many results should the ProgressiveDataSet aim to retrieve for a query.
     */
    setMaxResults: function(number) {
        this._maxResults = number;
        this.value && this.respond(this.value, this.getFilteredResults(this.value));
    }
});

if (typeof window.define === 'function') {
    define('experimental-autocomplete/progressive-data-set',[],function() {
        return window.AJS.ProgressiveDataSet;
    });
}
;
define('aui/select',[
    'aui/internal/skate',
    'backbone',
    './internal/select/option',
    './internal/select/suggestions-model',
    './internal/select/suggestions-view',
    './internal/select/template',
    './internal/state',
    './internal/spinner',
    '../experimental-autocomplete/progressive-data-set'
], function (
    skate,
    Backbone,
    Option,
    SuggestionsModel,
    SuggestionsView,
    template,
    state,
    Spinner
) {
    'use strict';

    var $ = jQuery;
    var ProgressiveDataSet = AJS.ProgressiveDataSet;
    var SuggestionModel = Backbone.Model.extend({
        idAttribute: 'label'
    });
    var DESELECTED = -1;
    var NO_HIGHLIGHT = -1;
    var DEFAULT_SS_PDS_SIZE = 20;

    function deselect(element) {
        element._select.selectedIndex = DESELECTED;
    }

    function hasResults(element) {
        return state(element).get('has-results');
    }

    function waitForAssistive (callback) {
        setTimeout(callback, 50);
    }

    function setBusyState (element) {
        element._spinner.show();
        element._button.setAttribute('aria-busy', 'true');
        element._input.setAttribute('aria-busy', 'true');
        element._dropdown.setAttribute('aria-busy', 'true');
    }

    function setIdleState (element) {
        element._spinner.hide();
        element._button.setAttribute('aria-busy', 'false');
        element._input.setAttribute('aria-busy', 'false');
        element._dropdown.setAttribute('aria-busy', 'false');
    }

    function matchPrefix (model, query) {
        var value = model.get('label').toLowerCase();
        return value.indexOf(query.toLowerCase()) === 0;
    }

    function hideDropdown (element) {
        element._suggestionsView.hide();
        element._input.setAttribute('aria-expanded', 'false');
    }

    function setInitialState (element) {
        var initialHighlightedItem = hasResults(element) ? 0 : NO_HIGHLIGHT;

        element._suggestionModel.highlight(initialHighlightedItem);

        element._input.value = element.value;
        hideDropdown(element);
    }

    function setElementImage (element, imageSource) {
        $(element._input).addClass('aui-select-has-inline-image');
        element._input.setAttribute('style', 'background-image: url(' + imageSource + ')');
    }

    function suggest (element, autoHighlight, query) {
        element._autoHighlight = autoHighlight;

        if (query === undefined) {
            query = element._input.value;
        }

        element._progressiveDataSet.query(query);
    }

    function selectHighlightedSuggestion (element) {
        setValueFromModel(element, element._suggestionModel.highlighted());
        setInputImageToHighlightedSuggestion(element);
        setInitialState(element);
    }

    function setInputImageToHighlightedSuggestion(element) {
        var imageSource = (element._suggestionModel.highlighted() && element._suggestionModel.highlighted().get('img-src'));
        if (imageSource) {
            setElementImage(element, imageSource);
        }
    }

    function setValueFromModel (element, model) {
        if (!model) {
            return;
        }

        var option = document.createElement('option');
        var select = element._select;

        option.setAttribute('selected', true);
        option.setAttribute('value', model.get('value') || model.get('label'));
        option.textContent = model.get('label');

        select.innerHTML = '';
        select.options.add(option);
        select.dispatchEvent(new CustomEvent('change', { bubbles: true }));
    }

    function convertOptionToModel (option) {
        return new SuggestionModel(option.serialize());
    }

    function convertOptionsToModels (element) {
        var models = [];

        for (var i = 0; i < element._datalist.children.length; i++) {
            var option = element._datalist.children[i];
            models.push(convertOptionToModel(option));
        }

        return models;
    }

    function clearAndSet (element, data) {
        element._suggestionModel.set();
        element._suggestionModel.set(data.results);
    }

    function getActiveId (select) {
        var active = select._dropdown.querySelector('.aui-select-active');
        return active && active.id;
    }

    function initialiseProgressiveDataSet (element) {
        element._progressiveDataSet = new ProgressiveDataSet(convertOptionsToModels(element), {
            model: SuggestionModel,
            matcher: matchPrefix,
            queryEndpoint: element._queryEndpoint,
            maxResults: DEFAULT_SS_PDS_SIZE
        });

        element._isSync = element._queryEndpoint ? false : true;

        // Progressive data set should indicate whether or not it is busy when processing any async requests.
        // Check if there's any active queries left, if so: set spinner and state to busy, else set to idle and remove
        // the spinner.
        element._progressiveDataSet.on('activity', function () {
            if (element._progressiveDataSet.activeQueryCount && !element._isSync) {
                setBusyState(element);
                state(element).set('should-flag-new-suggestions', false);
            } else {
                setIdleState(element);
                state(element).set('should-flag-new-suggestions', true);
            }
        });

        // Progressive data set doesn't do anything if the query is empty so we
        // must manually convert all data list options into models.
        //
        // Otherwise progressive data set can do everything else for us:
        // 1. Sync matching
        // 2. Async fetching and matching
        element._progressiveDataSet.on('respond', function (data) {
            var optionToHighlight;

            // This means that a query was made before the input was cleared and
            // we should cancel the response.
            if (data.query && !element._input.value) {
                return;
            }

            if (state(element).get('should-cancel-response')) {
                if (!element._progressiveDataSet.activeQueryCount) {
                    state(element).set('should-cancel-response', false);
                }

                return;
            }

            if (!data.query) {
                data.results = convertOptionsToModels(element);
                state(element).set('has-results', true);    //if there is no query we return all the results
            } else {
                state(element).set('has-results', data.results.length > 0);
            }

            if (!state(element).get('should-include-selected')) {
                // Create a list of all IDs for the results
                var resultsIds = $.map(data.results, function (result) {
                    return result.id;
                });

                var indexOfValueInResults = resultsIds.indexOf(element.value);

                if (indexOfValueInResults >= 0) {
                    data.results.splice(indexOfValueInResults, 1);
                }
            }

            clearAndSet(element, data);
            optionToHighlight = element._suggestionModel.highlighted() || data.results[0];

            if (element._autoHighlight) {
                element._suggestionModel.setHighlighted(optionToHighlight);
                waitForAssistive(function () {
                    element._input.setAttribute('aria-activedescendant', getActiveId(element));
                });
            }

            element._input.setAttribute('aria-expanded', 'true');

            // If the response is async (append operation), has elements to append and has a highlighted element, we need to update the status.
            if (!element._isSync && element._suggestionsView.getActive() && state(element).get('should-flag-new-suggestions')) {
                element.querySelector('.aui-select-status').innerHTML = AJS.I18n.getText('aui.select.new.suggestions');
            }

            element._suggestionsView.show();

            if (element._autoHighlight) {
                waitForAssistive(function () {
                    element._input.setAttribute('aria-activedescendant', getActiveId(element));
                });
            }
        });
    }

    function associateDropdownAndTrigger (element) {
        element._dropdown.id = element._listId;
        element.querySelector('button').setAttribute('aria-controls', element._listId);
    }

    function bindHighlightMouseover (element) {
        $(element._dropdown).on('mouseover', 'li', function (e) {
            if(hasResults(element)) {
                element._suggestionModel.highlight($(e.target).index());
            }
        });
    }

    function bindSelectMousedown (element) {
        $(element._dropdown).on('mousedown', 'li', function (e) {
            if(hasResults(element)) {
                element._suggestionModel.highlight($(e.target).index());
                selectHighlightedSuggestion(element);
                element._suggestionsView.hide();
                element._input.removeAttribute('aria-activedescendant');
            } else {
                return false;
            }
        });
    }

    function initialiseValue (element) {
        var option = element._datalist.querySelector('aui-option[selected]');

        if (option) {
            setValueFromModel(element, convertOptionToModel(option));
        }
    }

    function isQueryInProgress (element) {
        return element._progressiveDataSet.activeQueryCount > 0;
    }

    function focusInHandler (element) {
        //if there is a selected value the single select should do an empty
        //search and return everything
        var searchValue = element.value ? '' : element._input.value;
        state(element).set('should-include-selected', false);
        suggest(element, true, searchValue);
    }

    function focusOutHandler (element) {
        if (element._suggestionsView.isVisible()){
            if (state(element).get('should-deselect')) {
                deselect(element);
                state(element).set('should-deselect', false);
            }
        }

        if (isQueryInProgress(element)) {
            state(element).set('should-cancel-response', true);
        }

        hideDropdown(element);
    }

    return skate('aui-select', {
        type: skate.types.TAG,
        template: template,
        created: function (element) {
            element._listId = AJS.id();
            element._input = element.querySelector('input');
            element._select = element.querySelector('select');
            element._dropdown = element.querySelector('.aui-popover');
            element._datalist = element.querySelector('datalist');
            element._button = element.querySelector('button');
            element._suggestionsView = new SuggestionsView(element._dropdown, element._input);
            element._suggestionModel = new SuggestionsModel();

            element._suggestionModel.onChange = function (oldSuggestions) {
                var suggestionsToAdd = [];

                element._suggestionModel._suggestions.forEach(function (newSuggestion) {
                    var inArray = oldSuggestions.some(function (oldSuggestion) {
                        return newSuggestion.id === oldSuggestion.id;
                    });

                    if (!inArray) {
                        suggestionsToAdd.push(newSuggestion);
                    }
                });

                element._suggestionsView.render(suggestionsToAdd, oldSuggestions.length, element._listId);
            };

            element._suggestionModel.onHighlightChange = function () {
                var active = element._suggestionModel.highlightedIndex();
                element._suggestionsView.setActive(active);
                element._input.setAttribute('aria-activedescendant', getActiveId(element));
            };

            skate.init(element);
            initialiseProgressiveDataSet(element);
            associateDropdownAndTrigger(element);
            element._input.setAttribute('aria-controls', element._listId);
            element.setAttribute('tabindex', '-1');
            bindHighlightMouseover(element);
            bindSelectMousedown(element);
            initialiseValue(element);
            setInitialState(element);
            setInputImageToHighlightedSuggestion(element);
            element._spinner = new Spinner(element._button);
            setIdleState(element);
        },

        attributes: {
            id: function (element, data) {
                if (element.id) {
                    element.querySelector('input').id = data.newValue;
                    element.removeAttribute('id');
                }
            },

            name: function (element, data) {
                element.querySelector('select').setAttribute('name', data.newValue);
            },

            src: function (element, data) {
                element._queryEndpoint = data.newValue;
            }
        },

        events: {
            'blur input': function (element) {
                focusOutHandler(element);
            },

            'mousedown button': function (element) {
                if (document.activeElement === element._input && element._dropdown.getAttribute('aria-hidden') === 'false') {
                    state(element).set('prevent-open-on-button-click', true);
                }
            },

            'click input': function (element) {
                focusInHandler(element);
            },

            'click button': function (element) {
                var data = state(element);

                if (data.get('prevent-open-on-button-click')) {
                    data.set('prevent-open-on-button-click', false);
                } else {
                    element.focus();
                }
            },

            input: function (element) {
                if (!element._input.value) {
                    deselect(element);
                    hideDropdown(element);
                } else {
                    state(element).set('should-include-selected', true);
                    suggest(element, true);
                }
            },

            'keydown input': function (element, e) {
                var isVisible = element._suggestionsView.isVisible();
                var currentValue = element._input.value;
                var handled = false;

                if (e.keyCode === AJS.keyCode.ESCAPE) {
                    focusOutHandler(element);
                    return;
                }

                if (isVisible && hasResults(element)) {
                    if (e.keyCode === AJS.keyCode.ENTER) {
                        selectHighlightedSuggestion(element);
                        e.preventDefault();
                    } else if (e.keyCode === AJS.keyCode.TAB) {
                        selectHighlightedSuggestion(element);
                        handled = true;
                        element._input.setAttribute('aria-expanded', 'false');
                    } else if (e.keyCode === AJS.keyCode.UP) {
                        element._suggestionModel.highlightPrevious();
                        e.preventDefault();
                    } else if (e.keyCode === AJS.keyCode.DOWN) {
                        element._suggestionModel.highlightNext();
                        e.preventDefault();
                    }
                } else if ((e.keyCode === AJS.keyCode.UP || e.keyCode === AJS.keyCode.DOWN)) {
                    focusInHandler(element);
                    e.preventDefault();
                }

                handled = handled || e.defaultPrevented;
                setTimeout(function emulateCrossBrowserInputEvent () {
                    if (element._input.value !== currentValue && !handled) {
                        state(element).set('should-deselect', true);
                        element.dispatchEvent(new CustomEvent('input', { bubbles: true }));
                    }
                }, 0);
            }
        },

        prototype: {
            get value () {
                var selected = this._select.options[this._select.selectedIndex];
                return selected ? selected.textContent : '';
            },

            set value (value) {
                var data = this._progressiveDataSet;
                var model = data.findWhere({
                    value: value
                }) || data.findWhere({
                    label: value
                });
                setValueFromModel(this, model);
                return this;
            },

            get displayValue () {
                return this._input.value;
            },

            blur: function () {
                this._input.blur();
                focusOutHandler(this);
                return this;
            },

            focus: function () {
                this._input.focus();
                focusInHandler(this);
                return this;
            }
        }
    });
});

/**
 * Enhances a <select multiple> to be a button & dropdown combination. The button lists the selected <option>s. Clicking
 * the button reveals dropdown that has a list of checkboxes. Checking/Unchecking update the button's value and the state
 * of the corresponding <option>.
 *
 * To use simple add the attr aui-checkbox-multiselect to a <select multiple>.
 */
define('aui/checkbox-multiselect',[],function () {

    var skate = window.skate;
    var $ = window.jQuery;

    /**
     * Set of soy templates
     */
    var templates = {
        dropdown: function (items) {

            function createSection() {
                return $('<div class="aui-dropdown2-section">');
            }

            // clear items section
            var $clearItemsSection = createSection();

            $('<button />').attr({
                'type': 'button',
                'data-aui-checkbox-multiselect-clear': '',
                'class': 'aui-button aui-button-link'
            })
                .text(AJS.I18n.getText('aui.checkboxmultiselect.clear.selected'))
                .appendTo($clearItemsSection);

            // list of items
            var $section = createSection();
            var $itemList = $('<ul />').appendTo($section);

            $.each(items, function (idx, item) {

                var $li = $('<li />').attr({
                    'class': item.styleClass || ''
                }).appendTo($itemList);

                var $a =  $('<a />')
                    .text(item.label)
                    .attr('data-value', item.value)
                    .addClass('aui-dropdown2-checkbox aui-dropdown2-interactive')
                    .appendTo($li);

                if (item.icon) {
                    $('<span />')
                        .addClass('aui-icon')
                        .css("backgroundImage", 'url(' + item.icon + ')")')
                        .appendTo($a);
                }

                if (item.selected) {
                    $a.addClass('aui-dropdown2-checked')
                }
            });

            return $('<div />')
                .append($clearItemsSection)
                .append($section)
                .html();
        },
        furniture: function (name, optionsHtml) {

            var dropdownId = name + '-dropdown';

            var $select = $('<select />').attr({
                'name': name,
                'multiple': 'multiple'
            }).html(optionsHtml);

            var $dropdown = $('<div>')
                .attr({
                    'id': dropdownId,
                    'class': 'aui-checkbox-multiselect-dropdown aui-dropdown2 aui-style-default'
                });

            var $button = $('<button />')
                .attr({
                    'class': 'aui-checkbox-multiselect-btn aui-button aui-dropdown2-trigger',
                    'type': 'button',
                    'aria-owns': dropdownId,
                    'aria-haspopup': true
                });

            return $('<div />')
                .append($select)
                .append($button)
                .append($dropdown)
                .html();

        }
    };

    /**
     * Handles when user clicks an item in the dropdown list. Either selects or unselects the corresponding
     * option in the <select>.
     * @private
     */
    function handleDropdownSelection(e) {
        var $a = $(e.target);
        var value = $a.attr('data-value');
        updateOption(this, value, $a.hasClass('aui-dropdown2-checked'));
    }

    /**
     * Selects or unselects the <option> corresponding the given value.
     * @private
     * @param component - Checkbox MultiSelect web component
     * @param value - value of option to update
     * @param {Boolean} selected - select or unselect it.
     */
    function updateOption(component, value, selected) {
        var $toUpdate = component.$select.find('option').filter(function () {
            var $this = $(this);
            return $this.attr('value') === value && $this.prop('selected') != selected;
        });
        if ($toUpdate.length) {
            $toUpdate.prop('selected', selected);
            component.$select.trigger('change');
        }
    }

    /**
     * Enables 'clear all' button if there are any selected <option>s, otherwise disables it.
     * @private
     */
    function updateClearAll(component) {
        component.$dropdown.find('[data-aui-checkbox-multiselect-clear]').prop('disabled', function () {
            return getSelectedDescriptors(component).length < 1;
        })
    }

    /**
     * Gets button title used for tipsy. Is blank when dropdown is open so we don't get tipsy hanging over options.
     * @private
     * @param component
     * @returns {string}
     */
    function getButtonTitle(component) {
        return component.$dropdown.is('[aria-hidden=false]') ? '' : getSelectedLabels(component).join(', ');
    }

    /**
     * Converts a jQuery collection of <option> elements into an object that describes them.
     * @param {jQuery} $options
     * @returns {Array<Object>}
     * @private
     */
    function mapOptionDescriptors($options) {
        return $options.map(function () {
            var $option = $(this);
            return {
                value: $option.val(),
                label: $option.text(),
                icon: $option.data('icon'),
                styleClass: $option.data('styleClass'),
                title: $option.attr('title'),
                disabled: $option.attr('disabled'),
                selected: $option.attr('selected')
            };
        });
    }

    /**
     * Gets label for when nothing is selected
     * @returns {string}
     * @private
     */
    function getImplicitAllLabel (component) {
        return $(component).data('allLabel') || 'All';
    }


    /**
     * Renders dropdown with list of items representing the selected or unselect state of the <option>s in <select>
     * @private
     */
    function renderDropdown(component) {
        component.$dropdown.html(templates.dropdown(getDescriptors(component)));
        updateClearAll(component);
    }

    /**
     * Renders button with the selected <option>'s innerText in a comma seperated list. If nothing is selected 'All'
     * is displayed.
     * @private
     */
    function renderButton(component) {
        var selectedLabels = getSelectedLabels(component);
        var label = isImplicitAll(component) ? getImplicitAllLabel(component) : selectedLabels.join(', ');
        component.$btn.text(label);
    }

    /**
     * Gets descriptor for selected options, the descriptor is an object that contains meta information about
     * the option, such as value, label, icon etc.
     * @private
     * @returns Array<Object>
     */
    function getDescriptors(component) {
        return mapOptionDescriptors(component.getOptions());
    }

    /**
     * Gets descriptor for selected options, the descriptor is an object that contains meta information about
     * the option, such as value, label, icon etc.
     * @private
     * @returns Array<Object>
     */
    function getSelectedDescriptors(component) {
        return mapOptionDescriptors(component.getSelectedOptions());
    }

    /**
     * Gets the innerText of the selected options
     * @private
     * @returns Array<String>
     */
    function getSelectedLabels(component) {
        return $.map(getSelectedDescriptors(component), function (descriptor) {
            return descriptor.label;
        });
    }

    /**
     * If nothing is selected, we take this to mean that everything is selected.
     * @returns Boolean
     */
    function isImplicitAll(component) {
        return getSelectedDescriptors(component).length === 0;
    }

    skate('aui-checkbox-multiselect', {
        type: skate.types.TAG,
        template: function (component) {
            var name = component.getAttribute("name") || AJS.id('aui-checkbox-multiselect-');
            component.innerHTML = templates.furniture(name, component.innerHTML);
        },
        created: function (component) {
            component.$select = $("select", component)
                .change(function () {
                    renderButton(component);
                    updateClearAll(component);
                });

            component.$dropdown = $(".aui-checkbox-multiselect-dropdown", component)
                .on('aui-dropdown2-item-check', handleDropdownSelection.bind(component))
                .on('aui-dropdown2-item-uncheck', handleDropdownSelection.bind(component))
                .on('click', 'button[data-aui-checkbox-multiselect-clear]', component.deselectAllOptions.bind(component));

            component.$btn = $(".aui-checkbox-multiselect-btn", component)
                .tooltip({
                    title: function () {
                        return getButtonTitle(component);
                    }
                });

            renderButton(component);
            renderDropdown(component);
        },
        prototype: {

            /**
             * Gets all options regardless of selected or unselected
             * @returns {jQuery}
             */
            getOptions: function () {
                return this.$select.find('option');
            },

            /**
             * Gets all selected options
             * @returns {jQuery}
             */
            getSelectedOptions: function () {
                return this.$select.find('option:selected');
            },

            /**
             * Sets <option> elements matching given value to selected
             */
            selectOption: function (value) {
                updateOption(this, value, true);
            },

            /**
             * Sets <option> elements matching given value to unselected
             */
            unselectOption: function (value) {
                updateOption(this, value, false);
            },

            /**
             * Gets value of <select>
             * @returns Array
             */
            getValue: function () {
                return this.$select.val();
            },

            /**
             * Unchecks all items in the dropdown and in the <select>
             */
            deselectAllOptions: function () {
                this.$select.val([]).trigger('change');
                this.$dropdown.find('.aui-dropdown2-checked,.checked').removeClass('aui-dropdown2-checked checked');
            },
            /**
             * Adds an option to the <select>
             * @param descriptor
             */
            addOption: function (descriptor) {
                $("<option />").attr({
                    value: descriptor.value,
                    icon: descriptor.icon,
                    disabled: descriptor.disabled,
                    selected: descriptor.selected,
                    title: descriptor.title
                })
                    .text(descriptor.label)
                    .appendTo(this.$select);
                renderButton(this);
                renderDropdown(this);
            },
            /**
             * Removes options matching value from <select>
             * @param value
             */
            removeOption: function (value) {
                this.$select.find("[value='" + value + "']").remove();
                renderButton(this);
                renderDropdown(this);
            }
        }
    });

});
;(function(init) {
    'use strict';

    define('aui/polyfills/placeholder',[],function () {
        return init(AJS.$, window.skate);
    });
})(function ($, skate) {
    'use strict';

    if('placeholder' in document.createElement('input')) {
        return;
    }

    skate('placeholder', {
        type: skate.types.ATTR,
        attached: function(el) {
            giveInputPlaceholderPolyfill(el);
        }
    });

    function giveInputPlaceholderPolyfill(input) {
        var $input = $(input);
        applyDefaultText($input);

        $input.blur(function() {
            applyDefaultText($input);
        });

        $input.focus(function() {
            if($input.hasClass("aui-placeholder-shown")) {
                $input.val("");
                $input.removeClass("aui-placeholder-shown");
            }
        });
    }

    function applyDefaultText($input) {
        if(!$.trim($input.val()).length) {
            $input.val($input.attr("placeholder"));
            $input.addClass("aui-placeholder-shown");
        }
    }


});

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.comalatech.workflow:cw-content', location = 'templates/com/comalatech/skull/vendors/aui/5.8.4/js/aui-datepicker.js' */
;
/*!
 * jQuery UI Datepicker 1.8.24
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Datepicker
 *
 * Depends:
 *	jquery.ui.core.js
 */
(function( $, undefined ) {

$.extend($.ui, { datepicker: { version: "1.8.24" } });

var PROP_NAME = 'datepicker';
var dpuuid = new Date().getTime();
var instActive;

/* Date picker manager.
   Use the singleton instance of this class, $.datepicker, to interact with the date picker.
   Settings for (groups of) date pickers are maintained in an instance object,
   allowing multiple different settings on the same page. */

function Datepicker() {
	this.debug = false; // Change this to true to start debugging
	this._curInst = null; // The current instance in use
	this._keyEvent = false; // If the last event was a key event
	this._disabledInputs = []; // List of date picker inputs that have been disabled
	this._datepickerShowing = false; // True if the popup picker is showing , false if not
	this._inDialog = false; // True if showing within a "dialog", false if not
	this._mainDivId = 'ui-datepicker-div'; // The ID of the main datepicker division
	this._inlineClass = 'ui-datepicker-inline'; // The name of the inline marker class
	this._appendClass = 'ui-datepicker-append'; // The name of the append marker class
	this._triggerClass = 'ui-datepicker-trigger'; // The name of the trigger marker class
	this._dialogClass = 'ui-datepicker-dialog'; // The name of the dialog marker class
	this._disableClass = 'ui-datepicker-disabled'; // The name of the disabled covering marker class
	this._unselectableClass = 'ui-datepicker-unselectable'; // The name of the unselectable cell marker class
	this._currentClass = 'ui-datepicker-current-day'; // The name of the current day marker class
	this._dayOverClass = 'ui-datepicker-days-cell-over'; // The name of the day hover marker class
	this.regional = []; // Available regional settings, indexed by language code
	this.regional[''] = { // Default regional settings
		closeText: 'Done', // Display text for close link
		prevText: 'Prev', // Display text for previous month link
		nextText: 'Next', // Display text for next month link
		currentText: 'Today', // Display text for current month link
		monthNames: ['January','February','March','April','May','June',
			'July','August','September','October','November','December'], // Names of months for drop-down and formatting
		monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'], // For formatting
		dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], // For formatting
		dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'], // For formatting
		dayNamesMin: ['Su','Mo','Tu','We','Th','Fr','Sa'], // Column headings for days starting at Sunday
		weekHeader: 'Wk', // Column header for week of the year
		dateFormat: 'mm/dd/yy', // See format options on parseDate
		firstDay: 0, // The first day of the week, Sun = 0, Mon = 1, ...
		isRTL: false, // True if right-to-left language, false if left-to-right
		showMonthAfterYear: false, // True if the year select precedes month, false for month then year
		yearSuffix: '' // Additional text to append to the year in the month headers
	};
	this._defaults = { // Global defaults for all the date picker instances
		showOn: 'focus', // 'focus' for popup on focus,
			// 'button' for trigger button, or 'both' for either
		showAnim: 'fadeIn', // Name of jQuery animation for popup
		showOptions: {}, // Options for enhanced animations
		defaultDate: null, // Used when field is blank: actual date,
			// +/-number for offset from today, null for today
		appendText: '', // Display text following the input box, e.g. showing the format
		buttonText: '...', // Text for trigger button
		buttonImage: '', // URL for trigger button image
		buttonImageOnly: false, // True if the image appears alone, false if it appears on a button
		hideIfNoPrevNext: false, // True to hide next/previous month links
			// if not applicable, false to just disable them
		navigationAsDateFormat: false, // True if date formatting applied to prev/today/next links
		gotoCurrent: false, // True if today link goes back to current selection instead
		changeMonth: false, // True if month can be selected directly, false if only prev/next
		changeYear: false, // True if year can be selected directly, false if only prev/next
		yearRange: 'c-10:c+10', // Range of years to display in drop-down,
			// either relative to today's year (-nn:+nn), relative to currently displayed year
			// (c-nn:c+nn), absolute (nnnn:nnnn), or a combination of the above (nnnn:-n)
		showOtherMonths: false, // True to show dates in other months, false to leave blank
		selectOtherMonths: false, // True to allow selection of dates in other months, false for unselectable
		showWeek: false, // True to show week of the year, false to not show it
		calculateWeek: this.iso8601Week, // How to calculate the week of the year,
			// takes a Date and returns the number of the week for it
		shortYearCutoff: '+10', // Short year values < this are in the current century,
			// > this are in the previous century,
			// string value starting with '+' for current year + value
		minDate: null, // The earliest selectable date, or null for no limit
		maxDate: null, // The latest selectable date, or null for no limit
		duration: 'fast', // Duration of display/closure
		beforeShowDay: null, // Function that takes a date and returns an array with
			// [0] = true if selectable, false if not, [1] = custom CSS class name(s) or '',
			// [2] = cell title (optional), e.g. $.datepicker.noWeekends
		beforeShow: null, // Function that takes an input field and
			// returns a set of custom settings for the date picker
		onSelect: null, // Define a callback function when a date is selected
		onChangeMonthYear: null, // Define a callback function when the month or year is changed
		onClose: null, // Define a callback function when the datepicker is closed
		numberOfMonths: 1, // Number of months to show at a time
		showCurrentAtPos: 0, // The position in multipe months at which to show the current month (starting at 0)
		stepMonths: 1, // Number of months to step back/forward
		stepBigMonths: 12, // Number of months to step back/forward for the big links
		altField: '', // Selector for an alternate field to store selected dates into
		altFormat: '', // The date format to use for the alternate field
		constrainInput: true, // The input is constrained by the current date format
		showButtonPanel: false, // True to show button panel, false to not show it
		autoSize: false, // True to size the input for the date format, false to leave as is
		disabled: false // The initial disabled state
	};
	$.extend(this._defaults, this.regional['']);
	this.dpDiv = bindHover($('<div id="' + this._mainDivId + '" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'));
}

$.extend(Datepicker.prototype, {
	/* Class name added to elements to indicate already configured with a date picker. */
	markerClassName: 'hasDatepicker',
	
	//Keep track of the maximum number of rows displayed (see #7043)
	maxRows: 4,

	/* Debug logging (if enabled). */
	log: function () {
		if (this.debug)
			console.log.apply('', arguments);
	},
	
	// TODO rename to "widget" when switching to widget factory
	_widgetDatepicker: function() {
		return this.dpDiv;
	},

	/* Override the default settings for all instances of the date picker.
	   @param  settings  object - the new settings to use as defaults (anonymous object)
	   @return the manager object */
	setDefaults: function(settings) {
		extendRemove(this._defaults, settings || {});
		return this;
	},

	/* Attach the date picker to a jQuery selection.
	   @param  target    element - the target input field or division or span
	   @param  settings  object - the new settings to use for this date picker instance (anonymous) */
	_attachDatepicker: function(target, settings) {
		// check for settings on the control itself - in namespace 'date:'
		var inlineSettings = null;
		for (var attrName in this._defaults) {
			var attrValue = target.getAttribute('date:' + attrName);
			if (attrValue) {
				inlineSettings = inlineSettings || {};
				try {
					inlineSettings[attrName] = eval(attrValue);
				} catch (err) {
					inlineSettings[attrName] = attrValue;
				}
			}
		}
		var nodeName = target.nodeName.toLowerCase();
		var inline = (nodeName == 'div' || nodeName == 'span');
		if (!target.id) {
			this.uuid += 1;
			target.id = 'dp' + this.uuid;
		}
		var inst = this._newInst($(target), inline);
		inst.settings = $.extend({}, settings || {}, inlineSettings || {});
		if (nodeName == 'input') {
			this._connectDatepicker(target, inst);
		} else if (inline) {
			this._inlineDatepicker(target, inst);
		}
	},

	/* Create a new instance object. */
	_newInst: function(target, inline) {
		var id = target[0].id.replace(/([^A-Za-z0-9_-])/g, '\\\\$1'); // escape jQuery meta chars
		return {id: id, input: target, // associated target
			selectedDay: 0, selectedMonth: 0, selectedYear: 0, // current selection
			drawMonth: 0, drawYear: 0, // month being drawn
			inline: inline, // is datepicker inline or not
			dpDiv: (!inline ? this.dpDiv : // presentation div
			bindHover($('<div class="' + this._inlineClass + ' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>')))};
	},

	/* Attach the date picker to an input field. */
	_connectDatepicker: function(target, inst) {
		var input = $(target);
		inst.append = $([]);
		inst.trigger = $([]);
		if (input.hasClass(this.markerClassName))
			return;
		this._attachments(input, inst);
		input.addClass(this.markerClassName).keydown(this._doKeyDown).
			keypress(this._doKeyPress).keyup(this._doKeyUp).
			bind("setData.datepicker", function(event, key, value) {
				inst.settings[key] = value;
			}).bind("getData.datepicker", function(event, key) {
				return this._get(inst, key);
			});
		this._autoSize(inst);
		$.data(target, PROP_NAME, inst);
		//If disabled option is true, disable the datepicker once it has been attached to the input (see ticket #5665)
		if( inst.settings.disabled ) {
			this._disableDatepicker( target );
		}
	},

	/* Make attachments based on settings. */
	_attachments: function(input, inst) {
		var appendText = this._get(inst, 'appendText');
		var isRTL = this._get(inst, 'isRTL');
		if (inst.append)
			inst.append.remove();
		if (appendText) {
			inst.append = $('<span class="' + this._appendClass + '">' + appendText + '</span>');
			input[isRTL ? 'before' : 'after'](inst.append);
		}
		input.unbind('focus', this._showDatepicker);
		if (inst.trigger)
			inst.trigger.remove();
		var showOn = this._get(inst, 'showOn');
		if (showOn == 'focus' || showOn == 'both') // pop-up date picker when in the marked field
			input.focus(this._showDatepicker);
		if (showOn == 'button' || showOn == 'both') { // pop-up date picker when button clicked
			var buttonText = this._get(inst, 'buttonText');
			var buttonImage = this._get(inst, 'buttonImage');
			inst.trigger = $(this._get(inst, 'buttonImageOnly') ?
				$('<img/>').addClass(this._triggerClass).
					attr({ src: buttonImage, alt: buttonText, title: buttonText }) :
				$('<button type="button"></button>').addClass(this._triggerClass).
					html(buttonImage == '' ? buttonText : $('<img/>').attr(
					{ src:buttonImage, alt:buttonText, title:buttonText })));
			input[isRTL ? 'before' : 'after'](inst.trigger);
			inst.trigger.click(function() {
				if ($.datepicker._datepickerShowing && $.datepicker._lastInput == input[0])
					$.datepicker._hideDatepicker();
				else if ($.datepicker._datepickerShowing && $.datepicker._lastInput != input[0]) {
					$.datepicker._hideDatepicker(); 
					$.datepicker._showDatepicker(input[0]);
				} else
					$.datepicker._showDatepicker(input[0]);
				return false;
			});
		}
	},

	/* Apply the maximum length for the date format. */
	_autoSize: function(inst) {
		if (this._get(inst, 'autoSize') && !inst.inline) {
			var date = new Date(2009, 12 - 1, 20); // Ensure double digits
			var dateFormat = this._get(inst, 'dateFormat');
			if (dateFormat.match(/[DM]/)) {
				var findMax = function(names) {
					var max = 0;
					var maxI = 0;
					for (var i = 0; i < names.length; i++) {
						if (names[i].length > max) {
							max = names[i].length;
							maxI = i;
						}
					}
					return maxI;
				};
				date.setMonth(findMax(this._get(inst, (dateFormat.match(/MM/) ?
					'monthNames' : 'monthNamesShort'))));
				date.setDate(findMax(this._get(inst, (dateFormat.match(/DD/) ?
					'dayNames' : 'dayNamesShort'))) + 20 - date.getDay());
			}
			inst.input.attr('size', this._formatDate(inst, date).length);
		}
	},

	/* Attach an inline date picker to a div. */
	_inlineDatepicker: function(target, inst) {
		var divSpan = $(target);
		if (divSpan.hasClass(this.markerClassName))
			return;
		divSpan.addClass(this.markerClassName).append(inst.dpDiv).
			bind("setData.datepicker", function(event, key, value){
				inst.settings[key] = value;
			}).bind("getData.datepicker", function(event, key){
				return this._get(inst, key);
			});
		$.data(target, PROP_NAME, inst);
		this._setDate(inst, this._getDefaultDate(inst), true);
		this._updateDatepicker(inst);
		this._updateAlternate(inst);
		//If disabled option is true, disable the datepicker before showing it (see ticket #5665)
		if( inst.settings.disabled ) {
			this._disableDatepicker( target );
		}
		// Set display:block in place of inst.dpDiv.show() which won't work on disconnected elements
		// http://bugs.jqueryui.com/ticket/7552 - A Datepicker created on a detached div has zero height
		inst.dpDiv.css( "display", "block" );
	},

	/* Pop-up the date picker in a "dialog" box.
	   @param  input     element - ignored
	   @param  date      string or Date - the initial date to display
	   @param  onSelect  function - the function to call when a date is selected
	   @param  settings  object - update the dialog date picker instance's settings (anonymous object)
	   @param  pos       int[2] - coordinates for the dialog's position within the screen or
	                     event - with x/y coordinates or
	                     leave empty for default (screen centre)
	   @return the manager object */
	_dialogDatepicker: function(input, date, onSelect, settings, pos) {
		var inst = this._dialogInst; // internal instance
		if (!inst) {
			this.uuid += 1;
			var id = 'dp' + this.uuid;
			this._dialogInput = $('<input type="text" id="' + id +
				'" style="position: absolute; top: -100px; width: 0px;"/>');
			this._dialogInput.keydown(this._doKeyDown);
			$('body').append(this._dialogInput);
			inst = this._dialogInst = this._newInst(this._dialogInput, false);
			inst.settings = {};
			$.data(this._dialogInput[0], PROP_NAME, inst);
		}
		extendRemove(inst.settings, settings || {});
		date = (date && date.constructor == Date ? this._formatDate(inst, date) : date);
		this._dialogInput.val(date);

		this._pos = (pos ? (pos.length ? pos : [pos.pageX, pos.pageY]) : null);
		if (!this._pos) {
			var browserWidth = document.documentElement.clientWidth;
			var browserHeight = document.documentElement.clientHeight;
			var scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
			var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
			this._pos = // should use actual width/height below
				[(browserWidth / 2) - 100 + scrollX, (browserHeight / 2) - 150 + scrollY];
		}

		// move input on screen for focus, but hidden behind dialog
		this._dialogInput.css('left', (this._pos[0] + 20) + 'px').css('top', this._pos[1] + 'px');
		inst.settings.onSelect = onSelect;
		this._inDialog = true;
		this.dpDiv.addClass(this._dialogClass);
		this._showDatepicker(this._dialogInput[0]);
		if ($.blockUI)
			$.blockUI(this.dpDiv);
		$.data(this._dialogInput[0], PROP_NAME, inst);
		return this;
	},

	/* Detach a datepicker from its control.
	   @param  target    element - the target input field or division or span */
	_destroyDatepicker: function(target) {
		var $target = $(target);
		var inst = $.data(target, PROP_NAME);
		if (!$target.hasClass(this.markerClassName)) {
			return;
		}
		var nodeName = target.nodeName.toLowerCase();
		$.removeData(target, PROP_NAME);
		if (nodeName == 'input') {
			inst.append.remove();
			inst.trigger.remove();
			$target.removeClass(this.markerClassName).
				unbind('focus', this._showDatepicker).
				unbind('keydown', this._doKeyDown).
				unbind('keypress', this._doKeyPress).
				unbind('keyup', this._doKeyUp);
		} else if (nodeName == 'div' || nodeName == 'span')
			$target.removeClass(this.markerClassName).empty();
	},

	/* Enable the date picker to a jQuery selection.
	   @param  target    element - the target input field or division or span */
	_enableDatepicker: function(target) {
		var $target = $(target);
		var inst = $.data(target, PROP_NAME);
		if (!$target.hasClass(this.markerClassName)) {
			return;
		}
		var nodeName = target.nodeName.toLowerCase();
		if (nodeName == 'input') {
			target.disabled = false;
			inst.trigger.filter('button').
				each(function() { this.disabled = false; }).end().
				filter('img').css({opacity: '1.0', cursor: ''});
		}
		else if (nodeName == 'div' || nodeName == 'span') {
			var inline = $target.children('.' + this._inlineClass);
			inline.children().removeClass('ui-state-disabled');
			inline.find("select.ui-datepicker-month, select.ui-datepicker-year").
				removeAttr("disabled");
		}
		this._disabledInputs = $.map(this._disabledInputs,
			function(value) { return (value == target ? null : value); }); // delete entry
	},

	/* Disable the date picker to a jQuery selection.
	   @param  target    element - the target input field or division or span */
	_disableDatepicker: function(target) {
		var $target = $(target);
		var inst = $.data(target, PROP_NAME);
		if (!$target.hasClass(this.markerClassName)) {
			return;
		}
		var nodeName = target.nodeName.toLowerCase();
		if (nodeName == 'input') {
			target.disabled = true;
			inst.trigger.filter('button').
				each(function() { this.disabled = true; }).end().
				filter('img').css({opacity: '0.5', cursor: 'default'});
		}
		else if (nodeName == 'div' || nodeName == 'span') {
			var inline = $target.children('.' + this._inlineClass);
			inline.children().addClass('ui-state-disabled');
			inline.find("select.ui-datepicker-month, select.ui-datepicker-year").
				attr("disabled", "disabled");
		}
		this._disabledInputs = $.map(this._disabledInputs,
			function(value) { return (value == target ? null : value); }); // delete entry
		this._disabledInputs[this._disabledInputs.length] = target;
	},

	/* Is the first field in a jQuery collection disabled as a datepicker?
	   @param  target    element - the target input field or division or span
	   @return boolean - true if disabled, false if enabled */
	_isDisabledDatepicker: function(target) {
		if (!target) {
			return false;
		}
		for (var i = 0; i < this._disabledInputs.length; i++) {
			if (this._disabledInputs[i] == target)
				return true;
		}
		return false;
	},

	/* Retrieve the instance data for the target control.
	   @param  target  element - the target input field or division or span
	   @return  object - the associated instance data
	   @throws  error if a jQuery problem getting data */
	_getInst: function(target) {
		try {
			return $.data(target, PROP_NAME);
		}
		catch (err) {
			throw 'Missing instance data for this datepicker';
		}
	},

	/* Update or retrieve the settings for a date picker attached to an input field or division.
	   @param  target  element - the target input field or division or span
	   @param  name    object - the new settings to update or
	                   string - the name of the setting to change or retrieve,
	                   when retrieving also 'all' for all instance settings or
	                   'defaults' for all global defaults
	   @param  value   any - the new value for the setting
	                   (omit if above is an object or to retrieve a value) */
	_optionDatepicker: function(target, name, value) {
		var inst = this._getInst(target);
		if (arguments.length == 2 && typeof name == 'string') {
			return (name == 'defaults' ? $.extend({}, $.datepicker._defaults) :
				(inst ? (name == 'all' ? $.extend({}, inst.settings) :
				this._get(inst, name)) : null));
		}
		var settings = name || {};
		if (typeof name == 'string') {
			settings = {};
			settings[name] = value;
		}
		if (inst) {
			if (this._curInst == inst) {
				this._hideDatepicker();
			}
			var date = this._getDateDatepicker(target, true);
			var minDate = this._getMinMaxDate(inst, 'min');
			var maxDate = this._getMinMaxDate(inst, 'max');
			extendRemove(inst.settings, settings);
			// reformat the old minDate/maxDate values if dateFormat changes and a new minDate/maxDate isn't provided
			if (minDate !== null && settings['dateFormat'] !== undefined && settings['minDate'] === undefined)
				inst.settings.minDate = this._formatDate(inst, minDate);
			if (maxDate !== null && settings['dateFormat'] !== undefined && settings['maxDate'] === undefined)
				inst.settings.maxDate = this._formatDate(inst, maxDate);
			this._attachments($(target), inst);
			this._autoSize(inst);
			this._setDate(inst, date);
			this._updateAlternate(inst);
			this._updateDatepicker(inst);
		}
	},

	// change method deprecated
	_changeDatepicker: function(target, name, value) {
		this._optionDatepicker(target, name, value);
	},

	/* Redraw the date picker attached to an input field or division.
	   @param  target  element - the target input field or division or span */
	_refreshDatepicker: function(target) {
		var inst = this._getInst(target);
		if (inst) {
			this._updateDatepicker(inst);
		}
	},

	/* Set the dates for a jQuery selection.
	   @param  target   element - the target input field or division or span
	   @param  date     Date - the new date */
	_setDateDatepicker: function(target, date) {
		var inst = this._getInst(target);
		if (inst) {
			this._setDate(inst, date);
			this._updateDatepicker(inst);
			this._updateAlternate(inst);
		}
	},

	/* Get the date(s) for the first entry in a jQuery selection.
	   @param  target     element - the target input field or division or span
	   @param  noDefault  boolean - true if no default date is to be used
	   @return Date - the current date */
	_getDateDatepicker: function(target, noDefault) {
		var inst = this._getInst(target);
		if (inst && !inst.inline)
			this._setDateFromField(inst, noDefault);
		return (inst ? this._getDate(inst) : null);
	},

	/* Handle keystrokes. */
	_doKeyDown: function(event) {
		var inst = $.datepicker._getInst(event.target);
		var handled = true;
		var isRTL = inst.dpDiv.is('.ui-datepicker-rtl');
		inst._keyEvent = true;
		if ($.datepicker._datepickerShowing)
			switch (event.keyCode) {
				case 9: $.datepicker._hideDatepicker();
						handled = false;
						break; // hide on tab out
				case 13: var sel = $('td.' + $.datepicker._dayOverClass + ':not(.' + 
									$.datepicker._currentClass + ')', inst.dpDiv);
						if (sel[0])
							$.datepicker._selectDay(event.target, inst.selectedMonth, inst.selectedYear, sel[0]);
							var onSelect = $.datepicker._get(inst, 'onSelect');
							if (onSelect) {
								var dateStr = $.datepicker._formatDate(inst);

								// trigger custom callback
								onSelect.apply((inst.input ? inst.input[0] : null), [dateStr, inst]);
							}
						else
							$.datepicker._hideDatepicker();
						return false; // don't submit the form
						break; // select the value on enter
				case 27: $.datepicker._hideDatepicker();
						break; // hide on escape
				case 33: $.datepicker._adjustDate(event.target, (event.ctrlKey ?
							-$.datepicker._get(inst, 'stepBigMonths') :
							-$.datepicker._get(inst, 'stepMonths')), 'M');
						break; // previous month/year on page up/+ ctrl
				case 34: $.datepicker._adjustDate(event.target, (event.ctrlKey ?
							+$.datepicker._get(inst, 'stepBigMonths') :
							+$.datepicker._get(inst, 'stepMonths')), 'M');
						break; // next month/year on page down/+ ctrl
				case 35: if (event.ctrlKey || event.metaKey) $.datepicker._clearDate(event.target);
						handled = event.ctrlKey || event.metaKey;
						break; // clear on ctrl or command +end
				case 36: if (event.ctrlKey || event.metaKey) $.datepicker._gotoToday(event.target);
						handled = event.ctrlKey || event.metaKey;
						break; // current on ctrl or command +home
				case 37: if (event.ctrlKey || event.metaKey) $.datepicker._adjustDate(event.target, (isRTL ? +1 : -1), 'D');
						handled = event.ctrlKey || event.metaKey;
						// -1 day on ctrl or command +left
						if (event.originalEvent.altKey) $.datepicker._adjustDate(event.target, (event.ctrlKey ?
									-$.datepicker._get(inst, 'stepBigMonths') :
									-$.datepicker._get(inst, 'stepMonths')), 'M');
						// next month/year on alt +left on Mac
						break;
				case 38: if (event.ctrlKey || event.metaKey) $.datepicker._adjustDate(event.target, -7, 'D');
						handled = event.ctrlKey || event.metaKey;
						break; // -1 week on ctrl or command +up
				case 39: if (event.ctrlKey || event.metaKey) $.datepicker._adjustDate(event.target, (isRTL ? -1 : +1), 'D');
						handled = event.ctrlKey || event.metaKey;
						// +1 day on ctrl or command +right
						if (event.originalEvent.altKey) $.datepicker._adjustDate(event.target, (event.ctrlKey ?
									+$.datepicker._get(inst, 'stepBigMonths') :
									+$.datepicker._get(inst, 'stepMonths')), 'M');
						// next month/year on alt +right
						break;
				case 40: if (event.ctrlKey || event.metaKey) $.datepicker._adjustDate(event.target, +7, 'D');
						handled = event.ctrlKey || event.metaKey;
						break; // +1 week on ctrl or command +down
				default: handled = false;
			}
		else if (event.keyCode == 36 && event.ctrlKey) // display the date picker on ctrl+home
			$.datepicker._showDatepicker(this);
		else {
			handled = false;
		}
		if (handled) {
			event.preventDefault();
			event.stopPropagation();
		}
	},

	/* Filter entered characters - based on date format. */
	_doKeyPress: function(event) {
		var inst = $.datepicker._getInst(event.target);
		if ($.datepicker._get(inst, 'constrainInput')) {
			var chars = $.datepicker._possibleChars($.datepicker._get(inst, 'dateFormat'));
			var chr = String.fromCharCode(event.charCode == undefined ? event.keyCode : event.charCode);
			return event.ctrlKey || event.metaKey || (chr < ' ' || !chars || chars.indexOf(chr) > -1);
		}
	},

	/* Synchronise manual entry and field/alternate field. */
	_doKeyUp: function(event) {
		var inst = $.datepicker._getInst(event.target);
		if (inst.input.val() != inst.lastVal) {
			try {
				var date = $.datepicker.parseDate($.datepicker._get(inst, 'dateFormat'),
					(inst.input ? inst.input.val() : null),
					$.datepicker._getFormatConfig(inst));
				if (date) { // only if valid
					$.datepicker._setDateFromField(inst);
					$.datepicker._updateAlternate(inst);
					$.datepicker._updateDatepicker(inst);
				}
			}
			catch (err) {
				$.datepicker.log(err);
			}
		}
		return true;
	},

	/* Pop-up the date picker for a given input field.
       If false returned from beforeShow event handler do not show. 
	   @param  input  element - the input field attached to the date picker or
	                  event - if triggered by focus */
	_showDatepicker: function(input) {
		input = input.target || input;
		if (input.nodeName.toLowerCase() != 'input') // find from button/image trigger
			input = $('input', input.parentNode)[0];
		if ($.datepicker._isDisabledDatepicker(input) || $.datepicker._lastInput == input) // already here
			return;
		var inst = $.datepicker._getInst(input);
		if ($.datepicker._curInst && $.datepicker._curInst != inst) {
			$.datepicker._curInst.dpDiv.stop(true, true);
			if ( inst && $.datepicker._datepickerShowing ) {
				$.datepicker._hideDatepicker( $.datepicker._curInst.input[0] );
			}
		}
		var beforeShow = $.datepicker._get(inst, 'beforeShow');
		var beforeShowSettings = beforeShow ? beforeShow.apply(input, [input, inst]) : {};
		if(beforeShowSettings === false){
            //false
			return;
		}
		extendRemove(inst.settings, beforeShowSettings);
		inst.lastVal = null;
		$.datepicker._lastInput = input;
		$.datepicker._setDateFromField(inst);
		if ($.datepicker._inDialog) // hide cursor
			input.value = '';
		if (!$.datepicker._pos) { // position below input
			$.datepicker._pos = $.datepicker._findPos(input);
			$.datepicker._pos[1] += input.offsetHeight; // add the height
		}
		var isFixed = false;
		$(input).parents().each(function() {
			isFixed |= $(this).css('position') == 'fixed';
			return !isFixed;
		});
		if (isFixed && $.browser.opera) { // correction for Opera when fixed and scrolled
			$.datepicker._pos[0] -= document.documentElement.scrollLeft;
			$.datepicker._pos[1] -= document.documentElement.scrollTop;
		}
		var offset = {left: $.datepicker._pos[0], top: $.datepicker._pos[1]};
		$.datepicker._pos = null;
		//to avoid flashes on Firefox
		inst.dpDiv.empty();
		// determine sizing offscreen
		inst.dpDiv.css({position: 'absolute', display: 'block', top: '-1000px'});
		$.datepicker._updateDatepicker(inst);
		// fix width for dynamic number of date pickers
		// and adjust position before showing
		offset = $.datepicker._checkOffset(inst, offset, isFixed);
		inst.dpDiv.css({position: ($.datepicker._inDialog && $.blockUI ?
			'static' : (isFixed ? 'fixed' : 'absolute')), display: 'none',
			left: offset.left + 'px', top: offset.top + 'px'});
		if (!inst.inline) {
			var showAnim = $.datepicker._get(inst, 'showAnim');
			var duration = $.datepicker._get(inst, 'duration');
			var postProcess = function() {
				var cover = inst.dpDiv.find('iframe.ui-datepicker-cover'); // IE6- only
				if( !! cover.length ){
					var borders = $.datepicker._getBorders(inst.dpDiv);
					cover.css({left: -borders[0], top: -borders[1],
						width: inst.dpDiv.outerWidth(), height: inst.dpDiv.outerHeight()});
				}
			};
			inst.dpDiv.zIndex($(input).zIndex()+1);
			$.datepicker._datepickerShowing = true;
			if ($.effects && $.effects[showAnim])
				inst.dpDiv.show(showAnim, $.datepicker._get(inst, 'showOptions'), duration, postProcess);
			else
				inst.dpDiv[showAnim || 'show']((showAnim ? duration : null), postProcess);
			if (!showAnim || !duration)
				postProcess();
			if (inst.input.is(':visible') && !inst.input.is(':disabled'))
				inst.input.focus();
			$.datepicker._curInst = inst;
		}
	},

	/* Generate the date picker content. */
	_updateDatepicker: function(inst) {
		var self = this;
		self.maxRows = 4; //Reset the max number of rows being displayed (see #7043)
		var borders = $.datepicker._getBorders(inst.dpDiv);
		instActive = inst; // for delegate hover events
		inst.dpDiv.empty().append(this._generateHTML(inst));
		this._attachHandlers(inst);
		var cover = inst.dpDiv.find('iframe.ui-datepicker-cover'); // IE6- only
		if( !!cover.length ){ //avoid call to outerXXXX() when not in IE6
			cover.css({left: -borders[0], top: -borders[1], width: inst.dpDiv.outerWidth(), height: inst.dpDiv.outerHeight()})
		}
		inst.dpDiv.find('.' + this._dayOverClass + ' a').mouseover();
		var numMonths = this._getNumberOfMonths(inst);
		var cols = numMonths[1];
		var width = 17;
		inst.dpDiv.removeClass('ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4').width('');
		if (cols > 1)
			inst.dpDiv.addClass('ui-datepicker-multi-' + cols).css('width', (width * cols) + 'em');
		inst.dpDiv[(numMonths[0] != 1 || numMonths[1] != 1 ? 'add' : 'remove') +
			'Class']('ui-datepicker-multi');
		inst.dpDiv[(this._get(inst, 'isRTL') ? 'add' : 'remove') +
			'Class']('ui-datepicker-rtl');
		if (inst == $.datepicker._curInst && $.datepicker._datepickerShowing && inst.input &&
				// #6694 - don't focus the input if it's already focused
				// this breaks the change event in IE
				inst.input.is(':visible') && !inst.input.is(':disabled') && inst.input[0] != document.activeElement)
			inst.input.focus();
		// deffered render of the years select (to avoid flashes on Firefox) 
		if( inst.yearshtml ){
			var origyearshtml = inst.yearshtml;
			setTimeout(function(){
				//assure that inst.yearshtml didn't change.
				if( origyearshtml === inst.yearshtml && inst.yearshtml ){
					inst.dpDiv.find('select.ui-datepicker-year:first').replaceWith(inst.yearshtml);
				}
				origyearshtml = inst.yearshtml = null;
			}, 0);
		}
	},

	/* Retrieve the size of left and top borders for an element.
	   @param  elem  (jQuery object) the element of interest
	   @return  (number[2]) the left and top borders */
	_getBorders: function(elem) {
		var convert = function(value) {
			return {thin: 1, medium: 2, thick: 3}[value] || value;
		};
		return [parseFloat(convert(elem.css('border-left-width'))),
			parseFloat(convert(elem.css('border-top-width')))];
	},

	/* Check positioning to remain on screen. */
	_checkOffset: function(inst, offset, isFixed) {
		var dpWidth = inst.dpDiv.outerWidth();
		var dpHeight = inst.dpDiv.outerHeight();
		var inputWidth = inst.input ? inst.input.outerWidth() : 0;
		var inputHeight = inst.input ? inst.input.outerHeight() : 0;
		var viewWidth = document.documentElement.clientWidth + (isFixed ? 0 : $(document).scrollLeft());
		var viewHeight = document.documentElement.clientHeight + (isFixed ? 0 : $(document).scrollTop());

		offset.left -= (this._get(inst, 'isRTL') ? (dpWidth - inputWidth) : 0);
		offset.left -= (isFixed && offset.left == inst.input.offset().left) ? $(document).scrollLeft() : 0;
		offset.top -= (isFixed && offset.top == (inst.input.offset().top + inputHeight)) ? $(document).scrollTop() : 0;

		// now check if datepicker is showing outside window viewport - move to a better place if so.
		offset.left -= Math.min(offset.left, (offset.left + dpWidth > viewWidth && viewWidth > dpWidth) ?
			Math.abs(offset.left + dpWidth - viewWidth) : 0);
		offset.top -= Math.min(offset.top, (offset.top + dpHeight > viewHeight && viewHeight > dpHeight) ?
			Math.abs(dpHeight + inputHeight) : 0);

		return offset;
	},

	/* Find an object's position on the screen. */
	_findPos: function(obj) {
		var inst = this._getInst(obj);
		var isRTL = this._get(inst, 'isRTL');
        while (obj && (obj.type == 'hidden' || obj.nodeType != 1 || $.expr.filters.hidden(obj))) {
            obj = obj[isRTL ? 'previousSibling' : 'nextSibling'];
        }
        var position = $(obj).offset();
	    return [position.left, position.top];
	},

	/* Hide the date picker from view.
	   @param  input  element - the input field attached to the date picker */
	_hideDatepicker: function(input) {
		var inst = this._curInst;
		if (!inst || (input && inst != $.data(input, PROP_NAME)))
			return;
		if (this._datepickerShowing) {
			var showAnim = this._get(inst, 'showAnim');
			var duration = this._get(inst, 'duration');
			var postProcess = function() {
				$.datepicker._tidyDialog(inst);
			};
			if ($.effects && $.effects[showAnim])
				inst.dpDiv.hide(showAnim, $.datepicker._get(inst, 'showOptions'), duration, postProcess);
			else
				inst.dpDiv[(showAnim == 'slideDown' ? 'slideUp' :
					(showAnim == 'fadeIn' ? 'fadeOut' : 'hide'))]((showAnim ? duration : null), postProcess);
			if (!showAnim)
				postProcess();
			this._datepickerShowing = false;
			var onClose = this._get(inst, 'onClose');
			if (onClose)
				onClose.apply((inst.input ? inst.input[0] : null),
					[(inst.input ? inst.input.val() : ''), inst]);
			this._lastInput = null;
			if (this._inDialog) {
				this._dialogInput.css({ position: 'absolute', left: '0', top: '-100px' });
				if ($.blockUI) {
					$.unblockUI();
					$('body').append(this.dpDiv);
				}
			}
			this._inDialog = false;
		}
	},

	/* Tidy up after a dialog display. */
	_tidyDialog: function(inst) {
		inst.dpDiv.removeClass(this._dialogClass).unbind('.ui-datepicker-calendar');
	},

	/* Close date picker if clicked elsewhere. */
	_checkExternalClick: function(event) {
		if (!$.datepicker._curInst)
			return;

		var $target = $(event.target),
			inst = $.datepicker._getInst($target[0]);

		if ( ( ( $target[0].id != $.datepicker._mainDivId &&
				$target.parents('#' + $.datepicker._mainDivId).length == 0 &&
				!$target.hasClass($.datepicker.markerClassName) &&
				!$target.closest("." + $.datepicker._triggerClass).length &&
				$.datepicker._datepickerShowing && !($.datepicker._inDialog && $.blockUI) ) ) ||
			( $target.hasClass($.datepicker.markerClassName) && $.datepicker._curInst != inst ) )
			$.datepicker._hideDatepicker();
	},

	/* Adjust one of the date sub-fields. */
	_adjustDate: function(id, offset, period) {
		var target = $(id);
		var inst = this._getInst(target[0]);
		if (this._isDisabledDatepicker(target[0])) {
			return;
		}
		this._adjustInstDate(inst, offset +
			(period == 'M' ? this._get(inst, 'showCurrentAtPos') : 0), // undo positioning
			period);
		this._updateDatepicker(inst);
	},

	/* Action for current link. */
	_gotoToday: function(id) {
		var target = $(id);
		var inst = this._getInst(target[0]);
		if (this._get(inst, 'gotoCurrent') && inst.currentDay) {
			inst.selectedDay = inst.currentDay;
			inst.drawMonth = inst.selectedMonth = inst.currentMonth;
			inst.drawYear = inst.selectedYear = inst.currentYear;
		}
		else {
			var date = new Date();
			inst.selectedDay = date.getDate();
			inst.drawMonth = inst.selectedMonth = date.getMonth();
			inst.drawYear = inst.selectedYear = date.getFullYear();
		}
		this._notifyChange(inst);
		this._adjustDate(target);
	},

	/* Action for selecting a new month/year. */
	_selectMonthYear: function(id, select, period) {
		var target = $(id);
		var inst = this._getInst(target[0]);
		inst['selected' + (period == 'M' ? 'Month' : 'Year')] =
		inst['draw' + (period == 'M' ? 'Month' : 'Year')] =
			parseInt(select.options[select.selectedIndex].value,10);
		this._notifyChange(inst);
		this._adjustDate(target);
	},

	/* Action for selecting a day. */
	_selectDay: function(id, month, year, td) {
		var target = $(id);
		if ($(td).hasClass(this._unselectableClass) || this._isDisabledDatepicker(target[0])) {
			return;
		}
		var inst = this._getInst(target[0]);
		inst.selectedDay = inst.currentDay = $('a', td).html();
		inst.selectedMonth = inst.currentMonth = month;
		inst.selectedYear = inst.currentYear = year;
		this._selectDate(id, this._formatDate(inst,
			inst.currentDay, inst.currentMonth, inst.currentYear));
	},

	/* Erase the input field and hide the date picker. */
	_clearDate: function(id) {
		var target = $(id);
		var inst = this._getInst(target[0]);
		this._selectDate(target, '');
	},

	/* Update the input field with the selected date. */
	_selectDate: function(id, dateStr) {
		var target = $(id);
		var inst = this._getInst(target[0]);
		dateStr = (dateStr != null ? dateStr : this._formatDate(inst));
		if (inst.input)
			inst.input.val(dateStr);
		this._updateAlternate(inst);
		var onSelect = this._get(inst, 'onSelect');
		if (onSelect)
			onSelect.apply((inst.input ? inst.input[0] : null), [dateStr, inst]);  // trigger custom callback
		else if (inst.input)
			inst.input.trigger('change'); // fire the change event
		if (inst.inline)
			this._updateDatepicker(inst);
		else {
			this._hideDatepicker();
			this._lastInput = inst.input[0];
			if (typeof(inst.input[0]) != 'object')
				inst.input.focus(); // restore focus
			this._lastInput = null;
		}
	},

	/* Update any alternate field to synchronise with the main field. */
	_updateAlternate: function(inst) {
		var altField = this._get(inst, 'altField');
		if (altField) { // update alternate field too
			var altFormat = this._get(inst, 'altFormat') || this._get(inst, 'dateFormat');
			var date = this._getDate(inst);
			var dateStr = this.formatDate(altFormat, date, this._getFormatConfig(inst));
			$(altField).each(function() { $(this).val(dateStr); });
		}
	},

	/* Set as beforeShowDay function to prevent selection of weekends.
	   @param  date  Date - the date to customise
	   @return [boolean, string] - is this date selectable?, what is its CSS class? */
	noWeekends: function(date) {
		var day = date.getDay();
		return [(day > 0 && day < 6), ''];
	},

	/* Set as calculateWeek to determine the week of the year based on the ISO 8601 definition.
	   @param  date  Date - the date to get the week for
	   @return  number - the number of the week within the year that contains this date */
	iso8601Week: function(date) {
		var checkDate = new Date(date.getTime());
		// Find Thursday of this week starting on Monday
		checkDate.setDate(checkDate.getDate() + 4 - (checkDate.getDay() || 7));
		var time = checkDate.getTime();
		checkDate.setMonth(0); // Compare with Jan 1
		checkDate.setDate(1);
		return Math.floor(Math.round((time - checkDate) / 86400000) / 7) + 1;
	},

	/* Parse a string value into a date object.
	   See formatDate below for the possible formats.

	   @param  format    string - the expected format of the date
	   @param  value     string - the date in the above format
	   @param  settings  Object - attributes include:
	                     shortYearCutoff  number - the cutoff year for determining the century (optional)
	                     dayNamesShort    string[7] - abbreviated names of the days from Sunday (optional)
	                     dayNames         string[7] - names of the days from Sunday (optional)
	                     monthNamesShort  string[12] - abbreviated names of the months (optional)
	                     monthNames       string[12] - names of the months (optional)
	   @return  Date - the extracted date value or null if value is blank */
	parseDate: function (format, value, settings) {
		if (format == null || value == null)
			throw 'Invalid arguments';
		value = (typeof value == 'object' ? value.toString() : value + '');
		if (value == '')
			return null;
		var shortYearCutoff = (settings ? settings.shortYearCutoff : null) || this._defaults.shortYearCutoff;
		shortYearCutoff = (typeof shortYearCutoff != 'string' ? shortYearCutoff :
				new Date().getFullYear() % 100 + parseInt(shortYearCutoff, 10));
		var dayNamesShort = (settings ? settings.dayNamesShort : null) || this._defaults.dayNamesShort;
		var dayNames = (settings ? settings.dayNames : null) || this._defaults.dayNames;
		var monthNamesShort = (settings ? settings.monthNamesShort : null) || this._defaults.monthNamesShort;
		var monthNames = (settings ? settings.monthNames : null) || this._defaults.monthNames;
		var year = -1;
		var month = -1;
		var day = -1;
		var doy = -1;
		var literal = false;
		// Check whether a format character is doubled
		var lookAhead = function(match) {
			var matches = (iFormat + 1 < format.length && format.charAt(iFormat + 1) == match);
			if (matches)
				iFormat++;
			return matches;
		};
		// Extract a number from the string value
		var getNumber = function(match) {
			var isDoubled = lookAhead(match);
			var size = (match == '@' ? 14 : (match == '!' ? 20 :
				(match == 'y' && isDoubled ? 4 : (match == 'o' ? 3 : 2))));
			var digits = new RegExp('^\\d{1,' + size + '}');
			var num = value.substring(iValue).match(digits);
			if (!num)
				throw 'Missing number at position ' + iValue;
			iValue += num[0].length;
			return parseInt(num[0], 10);
		};
		// Extract a name from the string value and convert to an index
		var getName = function(match, shortNames, longNames) {
			var names = $.map(lookAhead(match) ? longNames : shortNames, function (v, k) {
				return [ [k, v] ];
			}).sort(function (a, b) {
				return -(a[1].length - b[1].length);
			});
			var index = -1;
			$.each(names, function (i, pair) {
				var name = pair[1];
				if (value.substr(iValue, name.length).toLowerCase() == name.toLowerCase()) {
					index = pair[0];
					iValue += name.length;
					return false;
				}
			});
			if (index != -1)
				return index + 1;
			else
				throw 'Unknown name at position ' + iValue;
		};
		// Confirm that a literal character matches the string value
		var checkLiteral = function() {
			if (value.charAt(iValue) != format.charAt(iFormat))
				throw 'Unexpected literal at position ' + iValue;
			iValue++;
		};
		var iValue = 0;
		for (var iFormat = 0; iFormat < format.length; iFormat++) {
			if (literal)
				if (format.charAt(iFormat) == "'" && !lookAhead("'"))
					literal = false;
				else
					checkLiteral();
			else
				switch (format.charAt(iFormat)) {
					case 'd':
						day = getNumber('d');
						break;
					case 'D':
						getName('D', dayNamesShort, dayNames);
						break;
					case 'o':
						doy = getNumber('o');
						break;
					case 'm':
						month = getNumber('m');
						break;
					case 'M':
						month = getName('M', monthNamesShort, monthNames);
						break;
					case 'y':
						year = getNumber('y');
						break;
					case '@':
						var date = new Date(getNumber('@'));
						year = date.getFullYear();
						month = date.getMonth() + 1;
						day = date.getDate();
						break;
					case '!':
						var date = new Date((getNumber('!') - this._ticksTo1970) / 10000);
						year = date.getFullYear();
						month = date.getMonth() + 1;
						day = date.getDate();
						break;
					case "'":
						if (lookAhead("'"))
							checkLiteral();
						else
							literal = true;
						break;
					default:
						checkLiteral();
				}
		}
		if (iValue < value.length){
			throw "Extra/unparsed characters found in date: " + value.substring(iValue);
		}
		if (year == -1)
			year = new Date().getFullYear();
		else if (year < 100)
			year += new Date().getFullYear() - new Date().getFullYear() % 100 +
				(year <= shortYearCutoff ? 0 : -100);
		if (doy > -1) {
			month = 1;
			day = doy;
			do {
				var dim = this._getDaysInMonth(year, month - 1);
				if (day <= dim)
					break;
				month++;
				day -= dim;
			} while (true);
		}
		var date = this._daylightSavingAdjust(new Date(year, month - 1, day));
		if (date.getFullYear() != year || date.getMonth() + 1 != month || date.getDate() != day)
			throw 'Invalid date'; // E.g. 31/02/00
		return date;
	},

	/* Standard date formats. */
	ATOM: 'yy-mm-dd', // RFC 3339 (ISO 8601)
	COOKIE: 'D, dd M yy',
	ISO_8601: 'yy-mm-dd',
	RFC_822: 'D, d M y',
	RFC_850: 'DD, dd-M-y',
	RFC_1036: 'D, d M y',
	RFC_1123: 'D, d M yy',
	RFC_2822: 'D, d M yy',
	RSS: 'D, d M y', // RFC 822
	TICKS: '!',
	TIMESTAMP: '@',
	W3C: 'yy-mm-dd', // ISO 8601

	_ticksTo1970: (((1970 - 1) * 365 + Math.floor(1970 / 4) - Math.floor(1970 / 100) +
		Math.floor(1970 / 400)) * 24 * 60 * 60 * 10000000),

	/* Format a date object into a string value.
	   The format can be combinations of the following:
	   d  - day of month (no leading zero)
	   dd - day of month (two digit)
	   o  - day of year (no leading zeros)
	   oo - day of year (three digit)
	   D  - day name short
	   DD - day name long
	   m  - month of year (no leading zero)
	   mm - month of year (two digit)
	   M  - month name short
	   MM - month name long
	   y  - year (two digit)
	   yy - year (four digit)
	   @ - Unix timestamp (ms since 01/01/1970)
	   ! - Windows ticks (100ns since 01/01/0001)
	   '...' - literal text
	   '' - single quote

	   @param  format    string - the desired format of the date
	   @param  date      Date - the date value to format
	   @param  settings  Object - attributes include:
	                     dayNamesShort    string[7] - abbreviated names of the days from Sunday (optional)
	                     dayNames         string[7] - names of the days from Sunday (optional)
	                     monthNamesShort  string[12] - abbreviated names of the months (optional)
	                     monthNames       string[12] - names of the months (optional)
	   @return  string - the date in the above format */
	formatDate: function (format, date, settings) {
		if (!date)
			return '';
		var dayNamesShort = (settings ? settings.dayNamesShort : null) || this._defaults.dayNamesShort;
		var dayNames = (settings ? settings.dayNames : null) || this._defaults.dayNames;
		var monthNamesShort = (settings ? settings.monthNamesShort : null) || this._defaults.monthNamesShort;
		var monthNames = (settings ? settings.monthNames : null) || this._defaults.monthNames;
		// Check whether a format character is doubled
		var lookAhead = function(match) {
			var matches = (iFormat + 1 < format.length && format.charAt(iFormat + 1) == match);
			if (matches)
				iFormat++;
			return matches;
		};
		// Format a number, with leading zero if necessary
		var formatNumber = function(match, value, len) {
			var num = '' + value;
			if (lookAhead(match))
				while (num.length < len)
					num = '0' + num;
			return num;
		};
		// Format a name, short or long as requested
		var formatName = function(match, value, shortNames, longNames) {
			return (lookAhead(match) ? longNames[value] : shortNames[value]);
		};
		var output = '';
		var literal = false;
		if (date)
			for (var iFormat = 0; iFormat < format.length; iFormat++) {
				if (literal)
					if (format.charAt(iFormat) == "'" && !lookAhead("'"))
						literal = false;
					else
						output += format.charAt(iFormat);
				else
					switch (format.charAt(iFormat)) {
						case 'd':
							output += formatNumber('d', date.getDate(), 2);
							break;
						case 'D':
							output += formatName('D', date.getDay(), dayNamesShort, dayNames);
							break;
						case 'o':
							output += formatNumber('o',
								Math.round((new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / 86400000), 3);
							break;
						case 'm':
							output += formatNumber('m', date.getMonth() + 1, 2);
							break;
						case 'M':
							output += formatName('M', date.getMonth(), monthNamesShort, monthNames);
							break;
						case 'y':
							output += (lookAhead('y') ? date.getFullYear() :
								(date.getYear() % 100 < 10 ? '0' : '') + date.getYear() % 100);
							break;
						case '@':
							output += date.getTime();
							break;
						case '!':
							output += date.getTime() * 10000 + this._ticksTo1970;
							break;
						case "'":
							if (lookAhead("'"))
								output += "'";
							else
								literal = true;
							break;
						default:
							output += format.charAt(iFormat);
					}
			}
		return output;
	},

	/* Extract all possible characters from the date format. */
	_possibleChars: function (format) {
		var chars = '';
		var literal = false;
		// Check whether a format character is doubled
		var lookAhead = function(match) {
			var matches = (iFormat + 1 < format.length && format.charAt(iFormat + 1) == match);
			if (matches)
				iFormat++;
			return matches;
		};
		for (var iFormat = 0; iFormat < format.length; iFormat++)
			if (literal)
				if (format.charAt(iFormat) == "'" && !lookAhead("'"))
					literal = false;
				else
					chars += format.charAt(iFormat);
			else
				switch (format.charAt(iFormat)) {
					case 'd': case 'm': case 'y': case '@':
						chars += '0123456789';
						break;
					case 'D': case 'M':
						return null; // Accept anything
					case "'":
						if (lookAhead("'"))
							chars += "'";
						else
							literal = true;
						break;
					default:
						chars += format.charAt(iFormat);
				}
		return chars;
	},

	/* Get a setting value, defaulting if necessary. */
	_get: function(inst, name) {
		return inst.settings[name] !== undefined ?
			inst.settings[name] : this._defaults[name];
	},

	/* Parse existing date and initialise date picker. */
	_setDateFromField: function(inst, noDefault) {
		if (inst.input.val() == inst.lastVal) {
			return;
		}
		var dateFormat = this._get(inst, 'dateFormat');
		var dates = inst.lastVal = inst.input ? inst.input.val() : null;
		var date, defaultDate;
		date = defaultDate = this._getDefaultDate(inst);
		var settings = this._getFormatConfig(inst);
		try {
			date = this.parseDate(dateFormat, dates, settings) || defaultDate;
		} catch (event) {
			this.log(event);
			dates = (noDefault ? '' : dates);
		}
		inst.selectedDay = date.getDate();
		inst.drawMonth = inst.selectedMonth = date.getMonth();
		inst.drawYear = inst.selectedYear = date.getFullYear();
		inst.currentDay = (dates ? date.getDate() : 0);
		inst.currentMonth = (dates ? date.getMonth() : 0);
		inst.currentYear = (dates ? date.getFullYear() : 0);
		this._adjustInstDate(inst);
	},

	/* Retrieve the default date shown on opening. */
	_getDefaultDate: function(inst) {
		return this._restrictMinMax(inst,
			this._determineDate(inst, this._get(inst, 'defaultDate'), new Date()));
	},

	/* A date may be specified as an exact value or a relative one. */
	_determineDate: function(inst, date, defaultDate) {
		var offsetNumeric = function(offset) {
			var date = new Date();
			date.setDate(date.getDate() + offset);
			return date;
		};
		var offsetString = function(offset) {
			try {
				return $.datepicker.parseDate($.datepicker._get(inst, 'dateFormat'),
					offset, $.datepicker._getFormatConfig(inst));
			}
			catch (e) {
				// Ignore
			}
			var date = (offset.toLowerCase().match(/^c/) ?
				$.datepicker._getDate(inst) : null) || new Date();
			var year = date.getFullYear();
			var month = date.getMonth();
			var day = date.getDate();
			var pattern = /([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g;
			var matches = pattern.exec(offset);
			while (matches) {
				switch (matches[2] || 'd') {
					case 'd' : case 'D' :
						day += parseInt(matches[1],10); break;
					case 'w' : case 'W' :
						day += parseInt(matches[1],10) * 7; break;
					case 'm' : case 'M' :
						month += parseInt(matches[1],10);
						day = Math.min(day, $.datepicker._getDaysInMonth(year, month));
						break;
					case 'y': case 'Y' :
						year += parseInt(matches[1],10);
						day = Math.min(day, $.datepicker._getDaysInMonth(year, month));
						break;
				}
				matches = pattern.exec(offset);
			}
			return new Date(year, month, day);
		};
		var newDate = (date == null || date === '' ? defaultDate : (typeof date == 'string' ? offsetString(date) :
			(typeof date == 'number' ? (isNaN(date) ? defaultDate : offsetNumeric(date)) : new Date(date.getTime()))));
		newDate = (newDate && newDate.toString() == 'Invalid Date' ? defaultDate : newDate);
		if (newDate) {
			newDate.setHours(0);
			newDate.setMinutes(0);
			newDate.setSeconds(0);
			newDate.setMilliseconds(0);
		}
		return this._daylightSavingAdjust(newDate);
	},

	/* Handle switch to/from daylight saving.
	   Hours may be non-zero on daylight saving cut-over:
	   > 12 when midnight changeover, but then cannot generate
	   midnight datetime, so jump to 1AM, otherwise reset.
	   @param  date  (Date) the date to check
	   @return  (Date) the corrected date */
	_daylightSavingAdjust: function(date) {
		if (!date) return null;
		date.setHours(date.getHours() > 12 ? date.getHours() + 2 : 0);
		return date;
	},

	/* Set the date(s) directly. */
	_setDate: function(inst, date, noChange) {
		var clear = !date;
		var origMonth = inst.selectedMonth;
		var origYear = inst.selectedYear;
		var newDate = this._restrictMinMax(inst, this._determineDate(inst, date, new Date()));
		inst.selectedDay = inst.currentDay = newDate.getDate();
		inst.drawMonth = inst.selectedMonth = inst.currentMonth = newDate.getMonth();
		inst.drawYear = inst.selectedYear = inst.currentYear = newDate.getFullYear();
		if ((origMonth != inst.selectedMonth || origYear != inst.selectedYear) && !noChange)
			this._notifyChange(inst);
		this._adjustInstDate(inst);
		if (inst.input) {
			inst.input.val(clear ? '' : this._formatDate(inst));
		}
	},

	/* Retrieve the date(s) directly. */
	_getDate: function(inst) {
		var startDate = (!inst.currentYear || (inst.input && inst.input.val() == '') ? null :
			this._daylightSavingAdjust(new Date(
			inst.currentYear, inst.currentMonth, inst.currentDay)));
			return startDate;
	},

	/* Attach the onxxx handlers.  These are declared statically so
	 * they work with static code transformers like Caja.
	 */
	_attachHandlers: function(inst) {
		var stepMonths = this._get(inst, 'stepMonths');
		var id = '#' + inst.id.replace( /\\\\/g, "\\" );
		inst.dpDiv.find('[data-handler]').map(function () {
			var handler = {
				prev: function () {
					window['DP_jQuery_' + dpuuid].datepicker._adjustDate(id, -stepMonths, 'M');
				},
				next: function () {
					window['DP_jQuery_' + dpuuid].datepicker._adjustDate(id, +stepMonths, 'M');
				},
				hide: function () {
					window['DP_jQuery_' + dpuuid].datepicker._hideDatepicker();
				},
				today: function () {
					window['DP_jQuery_' + dpuuid].datepicker._gotoToday(id);
				},
				selectDay: function () {
					window['DP_jQuery_' + dpuuid].datepicker._selectDay(id, +this.getAttribute('data-month'), +this.getAttribute('data-year'), this);
					return false;
				},
				selectMonth: function () {
					window['DP_jQuery_' + dpuuid].datepicker._selectMonthYear(id, this, 'M');
					return false;
				},
				selectYear: function () {
					window['DP_jQuery_' + dpuuid].datepicker._selectMonthYear(id, this, 'Y');
					return false;
				}
			};
			$(this).bind(this.getAttribute('data-event'), handler[this.getAttribute('data-handler')]);
		});
	},
	
	/* Generate the HTML for the current state of the date picker. */
	_generateHTML: function(inst) {
		var today = new Date();
		today = this._daylightSavingAdjust(
			new Date(today.getFullYear(), today.getMonth(), today.getDate())); // clear time
		var isRTL = this._get(inst, 'isRTL');
		var showButtonPanel = this._get(inst, 'showButtonPanel');
		var hideIfNoPrevNext = this._get(inst, 'hideIfNoPrevNext');
		var navigationAsDateFormat = this._get(inst, 'navigationAsDateFormat');
		var numMonths = this._getNumberOfMonths(inst);
		var showCurrentAtPos = this._get(inst, 'showCurrentAtPos');
		var stepMonths = this._get(inst, 'stepMonths');
		var isMultiMonth = (numMonths[0] != 1 || numMonths[1] != 1);
		var currentDate = this._daylightSavingAdjust((!inst.currentDay ? new Date(9999, 9, 9) :
			new Date(inst.currentYear, inst.currentMonth, inst.currentDay)));
		var minDate = this._getMinMaxDate(inst, 'min');
		var maxDate = this._getMinMaxDate(inst, 'max');
		var drawMonth = inst.drawMonth - showCurrentAtPos;
		var drawYear = inst.drawYear;
		if (drawMonth < 0) {
			drawMonth += 12;
			drawYear--;
		}
		if (maxDate) {
			var maxDraw = this._daylightSavingAdjust(new Date(maxDate.getFullYear(),
				maxDate.getMonth() - (numMonths[0] * numMonths[1]) + 1, maxDate.getDate()));
			maxDraw = (minDate && maxDraw < minDate ? minDate : maxDraw);
			while (this._daylightSavingAdjust(new Date(drawYear, drawMonth, 1)) > maxDraw) {
				drawMonth--;
				if (drawMonth < 0) {
					drawMonth = 11;
					drawYear--;
				}
			}
		}
		inst.drawMonth = drawMonth;
		inst.drawYear = drawYear;
		var prevText = this._get(inst, 'prevText');
		prevText = (!navigationAsDateFormat ? prevText : this.formatDate(prevText,
			this._daylightSavingAdjust(new Date(drawYear, drawMonth - stepMonths, 1)),
			this._getFormatConfig(inst)));
		var prev = (this._canAdjustMonth(inst, -1, drawYear, drawMonth) ?
			'<a class="ui-datepicker-prev ui-corner-all" data-handler="prev" data-event="click"' +
			' title="' + prevText + '"><span class="ui-icon ui-icon-circle-triangle-' + ( isRTL ? 'e' : 'w') + '">' + prevText + '</span></a>' :
			(hideIfNoPrevNext ? '' : '<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="'+ prevText +'"><span class="ui-icon ui-icon-circle-triangle-' + ( isRTL ? 'e' : 'w') + '">' + prevText + '</span></a>'));
		var nextText = this._get(inst, 'nextText');
		nextText = (!navigationAsDateFormat ? nextText : this.formatDate(nextText,
			this._daylightSavingAdjust(new Date(drawYear, drawMonth + stepMonths, 1)),
			this._getFormatConfig(inst)));
		var next = (this._canAdjustMonth(inst, +1, drawYear, drawMonth) ?
			'<a class="ui-datepicker-next ui-corner-all" data-handler="next" data-event="click"' +
			' title="' + nextText + '"><span class="ui-icon ui-icon-circle-triangle-' + ( isRTL ? 'w' : 'e') + '">' + nextText + '</span></a>' :
			(hideIfNoPrevNext ? '' : '<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="'+ nextText + '"><span class="ui-icon ui-icon-circle-triangle-' + ( isRTL ? 'w' : 'e') + '">' + nextText + '</span></a>'));
		var currentText = this._get(inst, 'currentText');
		var gotoDate = (this._get(inst, 'gotoCurrent') && inst.currentDay ? currentDate : today);
		currentText = (!navigationAsDateFormat ? currentText :
			this.formatDate(currentText, gotoDate, this._getFormatConfig(inst)));
		var controls = (!inst.inline ? '<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" data-handler="hide" data-event="click">' +
			this._get(inst, 'closeText') + '</button>' : '');
		var buttonPanel = (showButtonPanel) ? '<div class="ui-datepicker-buttonpane ui-widget-content">' + (isRTL ? controls : '') +
			(this._isInRange(inst, gotoDate) ? '<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" data-handler="today" data-event="click"' +
			'>' + currentText + '</button>' : '') + (isRTL ? '' : controls) + '</div>' : '';
		var firstDay = parseInt(this._get(inst, 'firstDay'),10);
		firstDay = (isNaN(firstDay) ? 0 : firstDay);
		var showWeek = this._get(inst, 'showWeek');
		var dayNames = this._get(inst, 'dayNames');
		var dayNamesShort = this._get(inst, 'dayNamesShort');
		var dayNamesMin = this._get(inst, 'dayNamesMin');
		var monthNames = this._get(inst, 'monthNames');
		var monthNamesShort = this._get(inst, 'monthNamesShort');
		var beforeShowDay = this._get(inst, 'beforeShowDay');
		var showOtherMonths = this._get(inst, 'showOtherMonths');
		var selectOtherMonths = this._get(inst, 'selectOtherMonths');
		var calculateWeek = this._get(inst, 'calculateWeek') || this.iso8601Week;
		var defaultDate = this._getDefaultDate(inst);
		var html = '';
		for (var row = 0; row < numMonths[0]; row++) {
			var group = '';
			this.maxRows = 4;
			for (var col = 0; col < numMonths[1]; col++) {
				var selectedDate = this._daylightSavingAdjust(new Date(drawYear, drawMonth, inst.selectedDay));
				var cornerClass = ' ui-corner-all';
				var calender = '';
				if (isMultiMonth) {
					calender += '<div class="ui-datepicker-group';
					if (numMonths[1] > 1)
						switch (col) {
							case 0: calender += ' ui-datepicker-group-first';
								cornerClass = ' ui-corner-' + (isRTL ? 'right' : 'left'); break;
							case numMonths[1]-1: calender += ' ui-datepicker-group-last';
								cornerClass = ' ui-corner-' + (isRTL ? 'left' : 'right'); break;
							default: calender += ' ui-datepicker-group-middle'; cornerClass = ''; break;
						}
					calender += '">';
				}
				calender += '<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix' + cornerClass + '">' +
					(/all|left/.test(cornerClass) && row == 0 ? (isRTL ? next : prev) : '') +
					(/all|right/.test(cornerClass) && row == 0 ? (isRTL ? prev : next) : '') +
					this._generateMonthYearHeader(inst, drawMonth, drawYear, minDate, maxDate,
					row > 0 || col > 0, monthNames, monthNamesShort) + // draw month headers
					'</div><table class="ui-datepicker-calendar"><thead>' +
					'<tr>';
				var thead = (showWeek ? '<th class="ui-datepicker-week-col">' + this._get(inst, 'weekHeader') + '</th>' : '');
				for (var dow = 0; dow < 7; dow++) { // days of the week
					var day = (dow + firstDay) % 7;
					thead += '<th' + ((dow + firstDay + 6) % 7 >= 5 ? ' class="ui-datepicker-week-end"' : '') + '>' +
						'<span title="' + dayNames[day] + '">' + dayNamesMin[day] + '</span></th>';
				}
				calender += thead + '</tr></thead><tbody>';
				var daysInMonth = this._getDaysInMonth(drawYear, drawMonth);
				if (drawYear == inst.selectedYear && drawMonth == inst.selectedMonth)
					inst.selectedDay = Math.min(inst.selectedDay, daysInMonth);
				var leadDays = (this._getFirstDayOfMonth(drawYear, drawMonth) - firstDay + 7) % 7;
				var curRows = Math.ceil((leadDays + daysInMonth) / 7); // calculate the number of rows to generate
				var numRows = (isMultiMonth ? this.maxRows > curRows ? this.maxRows : curRows : curRows); //If multiple months, use the higher number of rows (see #7043)
				this.maxRows = numRows;
				var printDate = this._daylightSavingAdjust(new Date(drawYear, drawMonth, 1 - leadDays));
				for (var dRow = 0; dRow < numRows; dRow++) { // create date picker rows
					calender += '<tr>';
					var tbody = (!showWeek ? '' : '<td class="ui-datepicker-week-col">' +
						this._get(inst, 'calculateWeek')(printDate) + '</td>');
					for (var dow = 0; dow < 7; dow++) { // create date picker days
						var daySettings = (beforeShowDay ?
							beforeShowDay.apply((inst.input ? inst.input[0] : null), [printDate]) : [true, '']);
						var otherMonth = (printDate.getMonth() != drawMonth);
						var unselectable = (otherMonth && !selectOtherMonths) || !daySettings[0] ||
							(minDate && printDate < minDate) || (maxDate && printDate > maxDate);
						tbody += '<td class="' +
							((dow + firstDay + 6) % 7 >= 5 ? ' ui-datepicker-week-end' : '') + // highlight weekends
							(otherMonth ? ' ui-datepicker-other-month' : '') + // highlight days from other months
							((printDate.getTime() == selectedDate.getTime() && drawMonth == inst.selectedMonth && inst._keyEvent) || // user pressed key
							(defaultDate.getTime() == printDate.getTime() && defaultDate.getTime() == selectedDate.getTime()) ?
							// or defaultDate is current printedDate and defaultDate is selectedDate
							' ' + this._dayOverClass : '') + // highlight selected day
							(unselectable ? ' ' + this._unselectableClass + ' ui-state-disabled': '') +  // highlight unselectable days
							(otherMonth && !showOtherMonths ? '' : ' ' + daySettings[1] + // highlight custom dates
							(printDate.getTime() == currentDate.getTime() ? ' ' + this._currentClass : '') + // highlight selected day
							(printDate.getTime() == today.getTime() ? ' ui-datepicker-today' : '')) + '"' + // highlight today (if different)
							((!otherMonth || showOtherMonths) && daySettings[2] ? ' title="' + daySettings[2] + '"' : '') + // cell title
							(unselectable ? '' : ' data-handler="selectDay" data-event="click" data-month="' + printDate.getMonth() + '" data-year="' + printDate.getFullYear() + '"') + '>' + // actions
							(otherMonth && !showOtherMonths ? '&#xa0;' : // display for other months
							(unselectable ? '<span class="ui-state-default">' + printDate.getDate() + '</span>' : '<a class="ui-state-default' +
							(printDate.getTime() == today.getTime() ? ' ui-state-highlight' : '') +
							(printDate.getTime() == currentDate.getTime() ? ' ui-state-active' : '') + // highlight selected day
							(otherMonth ? ' ui-priority-secondary' : '') + // distinguish dates from other months
							'" href="#">' + printDate.getDate() + '</a>')) + '</td>'; // display selectable date
						printDate.setDate(printDate.getDate() + 1);
						printDate = this._daylightSavingAdjust(printDate);
					}
					calender += tbody + '</tr>';
				}
				drawMonth++;
				if (drawMonth > 11) {
					drawMonth = 0;
					drawYear++;
				}
				calender += '</tbody></table>' + (isMultiMonth ? '</div>' + 
							((numMonths[0] > 0 && col == numMonths[1]-1) ? '<div class="ui-datepicker-row-break"></div>' : '') : '');
				group += calender;
			}
			html += group;
		}
		html += buttonPanel + ($.browser.msie && parseInt($.browser.version,10) < 7 && !inst.inline ?
			'<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>' : '');
		inst._keyEvent = false;
		return html;
	},

	/* Generate the month and year header. */
	_generateMonthYearHeader: function(inst, drawMonth, drawYear, minDate, maxDate,
			secondary, monthNames, monthNamesShort) {
		var changeMonth = this._get(inst, 'changeMonth');
		var changeYear = this._get(inst, 'changeYear');
		var showMonthAfterYear = this._get(inst, 'showMonthAfterYear');
		var html = '<div class="ui-datepicker-title">';
		var monthHtml = '';
		// month selection
		if (secondary || !changeMonth)
			monthHtml += '<span class="ui-datepicker-month">' + monthNames[drawMonth] + '</span>';
		else {
			var inMinYear = (minDate && minDate.getFullYear() == drawYear);
			var inMaxYear = (maxDate && maxDate.getFullYear() == drawYear);
			monthHtml += '<select class="ui-datepicker-month" data-handler="selectMonth" data-event="change">';
			for (var month = 0; month < 12; month++) {
				if ((!inMinYear || month >= minDate.getMonth()) &&
						(!inMaxYear || month <= maxDate.getMonth()))
					monthHtml += '<option value="' + month + '"' +
						(month == drawMonth ? ' selected="selected"' : '') +
						'>' + monthNamesShort[month] + '</option>';
			}
			monthHtml += '</select>';
		}
		if (!showMonthAfterYear)
			html += monthHtml + (secondary || !(changeMonth && changeYear) ? '&#xa0;' : '');
		// year selection
		if ( !inst.yearshtml ) {
			inst.yearshtml = '';
			if (secondary || !changeYear)
				html += '<span class="ui-datepicker-year">' + drawYear + '</span>';
			else {
				// determine range of years to display
				var years = this._get(inst, 'yearRange').split(':');
				var thisYear = new Date().getFullYear();
				var determineYear = function(value) {
					var year = (value.match(/c[+-].*/) ? drawYear + parseInt(value.substring(1), 10) :
						(value.match(/[+-].*/) ? thisYear + parseInt(value, 10) :
						parseInt(value, 10)));
					return (isNaN(year) ? thisYear : year);
				};
				var year = determineYear(years[0]);
				var endYear = Math.max(year, determineYear(years[1] || ''));
				year = (minDate ? Math.max(year, minDate.getFullYear()) : year);
				endYear = (maxDate ? Math.min(endYear, maxDate.getFullYear()) : endYear);
				inst.yearshtml += '<select class="ui-datepicker-year" data-handler="selectYear" data-event="change">';
				for (; year <= endYear; year++) {
					inst.yearshtml += '<option value="' + year + '"' +
						(year == drawYear ? ' selected="selected"' : '') +
						'>' + year + '</option>';
				}
				inst.yearshtml += '</select>';
				
				html += inst.yearshtml;
				inst.yearshtml = null;
			}
		}
		html += this._get(inst, 'yearSuffix');
		if (showMonthAfterYear)
			html += (secondary || !(changeMonth && changeYear) ? '&#xa0;' : '') + monthHtml;
		html += '</div>'; // Close datepicker_header
		return html;
	},

	/* Adjust one of the date sub-fields. */
	_adjustInstDate: function(inst, offset, period) {
		var year = inst.drawYear + (period == 'Y' ? offset : 0);
		var month = inst.drawMonth + (period == 'M' ? offset : 0);
		var day = Math.min(inst.selectedDay, this._getDaysInMonth(year, month)) +
			(period == 'D' ? offset : 0);
		var date = this._restrictMinMax(inst,
			this._daylightSavingAdjust(new Date(year, month, day)));
		inst.selectedDay = date.getDate();
		inst.drawMonth = inst.selectedMonth = date.getMonth();
		inst.drawYear = inst.selectedYear = date.getFullYear();
		if (period == 'M' || period == 'Y')
			this._notifyChange(inst);
	},

	/* Ensure a date is within any min/max bounds. */
	_restrictMinMax: function(inst, date) {
		var minDate = this._getMinMaxDate(inst, 'min');
		var maxDate = this._getMinMaxDate(inst, 'max');
		var newDate = (minDate && date < minDate ? minDate : date);
		newDate = (maxDate && newDate > maxDate ? maxDate : newDate);
		return newDate;
	},

	/* Notify change of month/year. */
	_notifyChange: function(inst) {
		var onChange = this._get(inst, 'onChangeMonthYear');
		if (onChange)
			onChange.apply((inst.input ? inst.input[0] : null),
				[inst.selectedYear, inst.selectedMonth + 1, inst]);
	},

	/* Determine the number of months to show. */
	_getNumberOfMonths: function(inst) {
		var numMonths = this._get(inst, 'numberOfMonths');
		return (numMonths == null ? [1, 1] : (typeof numMonths == 'number' ? [1, numMonths] : numMonths));
	},

	/* Determine the current maximum date - ensure no time components are set. */
	_getMinMaxDate: function(inst, minMax) {
		return this._determineDate(inst, this._get(inst, minMax + 'Date'), null);
	},

	/* Find the number of days in a given month. */
	_getDaysInMonth: function(year, month) {
		return 32 - this._daylightSavingAdjust(new Date(year, month, 32)).getDate();
	},

	/* Find the day of the week of the first of a month. */
	_getFirstDayOfMonth: function(year, month) {
		return new Date(year, month, 1).getDay();
	},

	/* Determines if we should allow a "next/prev" month display change. */
	_canAdjustMonth: function(inst, offset, curYear, curMonth) {
		var numMonths = this._getNumberOfMonths(inst);
		var date = this._daylightSavingAdjust(new Date(curYear,
			curMonth + (offset < 0 ? offset : numMonths[0] * numMonths[1]), 1));
		if (offset < 0)
			date.setDate(this._getDaysInMonth(date.getFullYear(), date.getMonth()));
		return this._isInRange(inst, date);
	},

	/* Is the given date in the accepted range? */
	_isInRange: function(inst, date) {
		var minDate = this._getMinMaxDate(inst, 'min');
		var maxDate = this._getMinMaxDate(inst, 'max');
		return ((!minDate || date.getTime() >= minDate.getTime()) &&
			(!maxDate || date.getTime() <= maxDate.getTime()));
	},

	/* Provide the configuration settings for formatting/parsing. */
	_getFormatConfig: function(inst) {
		var shortYearCutoff = this._get(inst, 'shortYearCutoff');
		shortYearCutoff = (typeof shortYearCutoff != 'string' ? shortYearCutoff :
			new Date().getFullYear() % 100 + parseInt(shortYearCutoff, 10));
		return {shortYearCutoff: shortYearCutoff,
			dayNamesShort: this._get(inst, 'dayNamesShort'), dayNames: this._get(inst, 'dayNames'),
			monthNamesShort: this._get(inst, 'monthNamesShort'), monthNames: this._get(inst, 'monthNames')};
	},

	/* Format the given date for display. */
	_formatDate: function(inst, day, month, year) {
		if (!day) {
			inst.currentDay = inst.selectedDay;
			inst.currentMonth = inst.selectedMonth;
			inst.currentYear = inst.selectedYear;
		}
		var date = (day ? (typeof day == 'object' ? day :
			this._daylightSavingAdjust(new Date(year, month, day))) :
			this._daylightSavingAdjust(new Date(inst.currentYear, inst.currentMonth, inst.currentDay)));
		return this.formatDate(this._get(inst, 'dateFormat'), date, this._getFormatConfig(inst));
	}
});

/*
 * Bind hover events for datepicker elements.
 * Done via delegate so the binding only occurs once in the lifetime of the parent div.
 * Global instActive, set by _updateDatepicker allows the handlers to find their way back to the active picker.
 */ 
function bindHover(dpDiv) {
	var selector = 'button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a';
	return dpDiv.bind('mouseout', function(event) {
			var elem = $( event.target ).closest( selector );
			if ( !elem.length ) {
				return;
			}
			elem.removeClass( "ui-state-hover ui-datepicker-prev-hover ui-datepicker-next-hover" );
		})
		.bind('mouseover', function(event) {
			var elem = $( event.target ).closest( selector );
			if ($.datepicker._isDisabledDatepicker( instActive.inline ? dpDiv.parent()[0] : instActive.input[0]) ||
					!elem.length ) {
				return;
			}
			elem.parents('.ui-datepicker-calendar').find('a').removeClass('ui-state-hover');
			elem.addClass('ui-state-hover');
			if (elem.hasClass('ui-datepicker-prev')) elem.addClass('ui-datepicker-prev-hover');
			if (elem.hasClass('ui-datepicker-next')) elem.addClass('ui-datepicker-next-hover');
		});
}

/* jQuery extend now ignores nulls! */
function extendRemove(target, props) {
	$.extend(target, props);
	for (var name in props)
		if (props[name] == null || props[name] == undefined)
			target[name] = props[name];
	return target;
};

/* Determine whether an object is an array. */
function isArray(a) {
	return (a && (($.browser.safari && typeof a == 'object' && a.length) ||
		(a.constructor && a.constructor.toString().match(/\Array\(\)/))));
};

/* Invoke the datepicker functionality.
   @param  options  string - a command, optionally followed by additional parameters or
                    Object - settings for attaching new datepicker functionality
   @return  jQuery object */
$.fn.datepicker = function(options){
	
	/* Verify an empty collection wasn't passed - Fixes #6976 */
	if ( !this.length ) {
		return this;
	}
	
	/* Initialise the date picker. */
	if (!$.datepicker.initialized) {
		$(document).mousedown($.datepicker._checkExternalClick).
			find('body').append($.datepicker.dpDiv);
		$.datepicker.initialized = true;
	}

	var otherArgs = Array.prototype.slice.call(arguments, 1);
	if (typeof options == 'string' && (options == 'isDisabled' || options == 'getDate' || options == 'widget'))
		return $.datepicker['_' + options + 'Datepicker'].
			apply($.datepicker, [this[0]].concat(otherArgs));
	if (options == 'option' && arguments.length == 2 && typeof arguments[1] == 'string')
		return $.datepicker['_' + options + 'Datepicker'].
			apply($.datepicker, [this[0]].concat(otherArgs));
	return this.each(function() {
		typeof options == 'string' ?
			$.datepicker['_' + options + 'Datepicker'].
				apply($.datepicker, [this].concat(otherArgs)) :
			$.datepicker._attachDatepicker(this, options);
	});
};

$.datepicker = new Datepicker(); // singleton instance
$.datepicker.initialized = false;
$.datepicker.uuid = new Date().getTime();
$.datepicker.version = "1.8.24";

// Workaround for #4055
// Add another global to avoid noConflict issues with inline event handlers
window['DP_jQuery_' + dpuuid] = $;

})(jQuery);

(function ($) {

    'use strict';

    var datePickerCounter = 0;

    AJS.DatePicker = function (field, options) {

        var datePicker, initPolyfill, $field, datePickerUUID;
        var parentPopup;

        datePicker = {};

        datePickerUUID = datePickerCounter++;

        // ---------------------------------------------------------------------
        // fix up arguments ----------------------------------------------------
        // ---------------------------------------------------------------------

        $field = $(field);
        $field.attr("data-aui-dp-uuid", datePickerUUID);
        options = $.extend(undefined, AJS.DatePicker.prototype.defaultOptions, options);

        // ---------------------------------------------------------------------
        // expose arguments with getters ---------------------------------------
        // ---------------------------------------------------------------------

        datePicker.getField = function () {
            return $field;
        };

        datePicker.getOptions = function () {
            return options;
        };

        // ---------------------------------------------------------------------
        // exposed methods -----------------------------------------------------
        // ---------------------------------------------------------------------

        initPolyfill = function () {

            var calendar, handleDatePickerFocus, handleFieldBlur, handleFieldFocus,
                    handleFieldUpdate, initCalendar, isSuppressingShow,
                    isTrackingDatePickerFocus, popup, popupContents;

            // -----------------------------------------------------------------
            // expose methods for controlling the popup ------------------------
            // -----------------------------------------------------------------

            datePicker.hide = function () {
                popup.hide();
            };

            datePicker.show = function () {
                popup.show();
            };

            datePicker.setDate = function (value) {
                if (typeof calendar !== 'undefined') {
                    calendar.datepicker("setDate", value);
                }
            };

            datePicker.getDate = function (value) {
                if (typeof calendar !== 'undefined') {
                    return calendar.datepicker("getDate");
                }
            };

            // -----------------------------------------------------------------
            // initialise the calendar -----------------------------------------
            // -----------------------------------------------------------------

            initCalendar = function (i18nConfig) {

                popupContents.off();
                if (options.hint) {
                    var $hint = $('<div/>').addClass("aui-datepicker-hint");
                    $hint.append("<span/>").text(options.hint);
                    popupContents.append($hint);
                }
                calendar = $('<div/>');
                calendar.attr("data-aui-dp-popup-uuid", datePickerUUID);
                popupContents.append(calendar);

                var config = {
                    'dateFormat': options.dateFormat,
                    'defaultDate': $field.val(),
                    'maxDate': $field.attr('max'),
                    'minDate': $field.attr('min'),
                    'nextText': '>',
                    'onSelect': function (dateText, inst) {
                        $field.val(dateText);
                        $field.change();
                        datePicker.hide();
                        isSuppressingShow = true;
                        $field.focus();
                        options.onSelect && options.onSelect.call(this, dateText);
                    },
                    onChangeMonthYear: function () {
                        // defer rehresh call until current stack has cleared (after month has rendered)
                        setTimeout(popup.refresh, 0);
                    },
                    'prevText': '<'
                };

                $.extend(config, i18nConfig);

                if (options.firstDay > -1) {
                    config.firstDay = options.firstDay;
                }

                if (typeof $field.attr('step') !== 'undefined') {
                    AJS.log('WARNING: The AJS date picker polyfill currently does not support the step attribute!');
                }

                calendar.datepicker(config);

                // bind additional field processing events
                $('body').on('keydown', handleDatePickerFocus);
                $field.on('focusout keydown', handleFieldBlur);
                $field.on('propertychange keyup input paste', handleFieldUpdate);

            };

            // -----------------------------------------------------------------
            // event handler wrappers ------------------------------------------
            // -----------------------------------------------------------------

            handleDatePickerFocus = function (event) {
                var $eventTarget = $(event.target);
                var isTargetInput = $eventTarget.closest(popupContents).length || $eventTarget.is($field);
                var isTargetPopup = $eventTarget.closest('.ui-datepicker-header').length;

                // Hide if we're clicking anywhere else but the input or popup OR if esc is pressed.
                if ((!isTargetInput && !isTargetPopup) || event.keyCode === AJS.keyCode.ESCAPE) {
                    datePicker.hide();
                    return;
                }

                if ($eventTarget[0] !== $field[0]) {
                    event.preventDefault();
                }
            };

            handleFieldBlur = function (event) {
                // Trigger blur if event is keydown and esc OR is focusout.
                if (!(isTrackingDatePickerFocus)) {
                    $('body').on('focus blur click mousedown', '*', handleDatePickerFocus);
                    isTrackingDatePickerFocus = true;
                }
            };

            handleFieldFocus = function (event) {
                if (!(isSuppressingShow)) {
                    datePicker.show();
                } else {
                    isSuppressingShow = false;
                }
            };

            handleFieldUpdate = function (event) {
                var val = $(this).val();
                // IE10/11 fire the 'input' event when internally showing and hiding
                // the placeholder of an input. This was cancelling the inital click
                // event and preventing the selection of the first date. The val check here
                // is a workaround to assure we have legitimate user input that should update
                // the calendar
                if (val) {
                    calendar.datepicker('setDate', $field.val());
                    calendar.datepicker('option', {
                        'maxDate': $field.attr('max'),
                        'minDate': $field.attr('min')
                    });
                }
            };

            // -----------------------------------------------------------------
            // undo (almost) everything ----------------------------------------
            // -----------------------------------------------------------------

            datePicker.destroyPolyfill = function () {

                // goodbye, cruel world!
                datePicker.hide();

                $field.attr('placeholder', null);

                $field.off('propertychange keyup input paste', handleFieldUpdate);
                $field.off('focus click', handleFieldFocus);
                $field.off('focusout keydown', handleFieldBlur);
                $('body').off('keydown', handleFieldBlur);

                if (AJS.DatePicker.prototype.browserSupportsDateField) {
                    $field[0].type = 'date';
                }

                if (typeof calendar !== 'undefined') {
                    calendar.datepicker('destroy');
                }

                // TODO: figure out a way to tear down the popup (if necessary)

                delete datePicker.destroyPolyfill;

                delete datePicker.show;
                delete datePicker.hide;

            };

            // -----------------------------------------------------------------
            // polyfill bootstrap ----------------------------------------------
            // -----------------------------------------------------------------

            isSuppressingShow = false; // used to stop the popover from showing when focus is restored to the field after a date has been selected
            isTrackingDatePickerFocus = false; // used to prevent multiple bindings of handleDatePickerFocus within handleFieldBlur

            if (!(options.languageCode in AJS.DatePicker.prototype.localisations)) {
                options.languageCode = '';
            }
            var i18nConfig = AJS.DatePicker.prototype.localisations[options.languageCode];

            var containerClass = "";
            var width = 240;

            if (i18nConfig.size === "large") {
                width = 325;
                containerClass = "aui-datepicker-dialog-large";
            }
            var dialogOptions = {
                'hideCallback': function () {
                    $('body').off('focus blur click mousedown', '*', handleDatePickerFocus);
                    isTrackingDatePickerFocus = false;
                    if (parentPopup && parentPopup._datePickerPopup) {
                        delete parentPopup._datePickerPopup;
                    }
                },
                'hideDelay': null,
                'noBind': true,
                'persistent': true,
                'closeOthers': false,
                'width': width
            };

            if (options.position) {
                dialogOptions.calculatePositions = function (popup, targetPosition) {
                    // create a jQuery object from the internal
                    var vanilla = $(popup[0]);
                    return options.position.call(this, vanilla, targetPosition);
                }
            }

            popup = AJS.InlineDialog($field, undefined, function (contents, trigger, showPopup) {
                if (typeof calendar === 'undefined') {
                    popupContents = contents;
                    initCalendar(i18nConfig);
                }
                parentPopup = $(trigger).closest('.aui-inline-dialog').get(0);
                if (parentPopup) {
                    parentPopup._datePickerPopup = popup; // AUI-2696 - hackish coupling to control inline-dialog close behaviour.
                }

                showPopup();
            }, dialogOptions);

            popup.addClass('aui-datepicker-dialog');
            popup.addClass(containerClass);

            // bind what we need to start off with
            $field.on('focus click', handleFieldFocus); // the click is for fucking opera... Y U NO FIRE FOCUS EVENTS PROPERLY???

            // give users a hint that this is a date field; note that placeholder isn't technically a valid attribute
            // according to the spec...
            $field.attr('placeholder', options.dateFormat);

            // override the browser's default date field implementation (if applicable)
            // since IE doesn't support date input fields, we should be fine...
            if (options.overrideBrowserDefault && AJS.DatePicker.prototype.browserSupportsDateField) {
                $field[0].type = 'text';
            }

        };

        datePicker.reset = function () {

            if (typeof datePicker.destroyPolyfill === 'function') {
                datePicker.destroyPolyfill();
            }

            if ((!(AJS.DatePicker.prototype.browserSupportsDateField)) || options.overrideBrowserDefault) {
                initPolyfill();
            }

        };

        // ---------------------------------------------------------------------
        // bootstrap -----------------------------------------------------------
        // ---------------------------------------------------------------------

        datePicker.reset();

        return datePicker;

    };

    // -------------------------------------------------------------------------
    // things that should be common --------------------------------------------
    // -------------------------------------------------------------------------

    AJS.DatePicker.prototype.browserSupportsDateField = ($('<input type="date" />')[0].type === 'date');

    AJS.DatePicker.prototype.defaultOptions = {
        overrideBrowserDefault: false,
        firstDay: -1,
        languageCode: AJS.$('html').attr('lang') || 'en-AU',
        dateFormat: $.datepicker.W3C // same as $.datepicker.ISO_8601
    };

    // adapted from the jQuery UI Datepicker widget (v1.8.16), with the following changes:
    //   - dayNamesShort -> dayNamesMin
    //   - unnecessary attributes omitted
    /*
    CODE to extract codes out:

    var langCode, langs, out;
    langs = jQuery.datepicker.regional;
    out = {};

    for (langCode in langs) {
        if (langs.hasOwnProperty(langCode)) {
            out[langCode] = {
                'dayNames': langs[langCode].dayNames,
                'dayNamesMin': langs[langCode].dayNamesShort, // this is deliberate
                'firstDay': langs[langCode].firstDay,
                'isRTL': langs[langCode].isRTL,
                'monthNames': langs[langCode].monthNames,
                'showMonthAfterYear': langs[langCode].showMonthAfterYear,
                'yearSuffix': langs[langCode].yearSuffix
            };
        }
    }

     */
    AJS.DatePicker.prototype.localisations = {
        "": {
            "dayNames": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "dayNamesMin": ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            "firstDay": 0,
            "isRTL": false,
            "monthNames": ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            "showMonthAfterYear": false,
            "yearSuffix": ""
        },
        "af": {
            "dayNames": ["Sondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrydag", "Saterdag"],
            "dayNamesMin": ["Son", "Maa", "Din", "Woe", "Don", "Vry", "Sat"],
            "firstDay": 1,
            "isRTL": false,
            "monthNames": ["Januarie", "Februarie", "Maart", "April", "Mei", "Junie", "Julie", "Augustus", "September", "Oktober", "November", "Desember"],
            "showMonthAfterYear": false,
            "yearSuffix": ""
        },
        "ar-DZ": {
            "dayNames": ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
            "dayNamesMin": ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
            "firstDay": 6,
            "isRTL": true,
            "monthNames": ["جانفي", "فيفري", "مارس", "أفريل", "ماي", "جوان", "جويلية", "أوت", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"],
            "showMonthAfterYear": false,
            "yearSuffix": ""
        },
        "ar": {
            "dayNames": ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
            "dayNamesMin": ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
            "firstDay": 6,
            "isRTL": true,
            "monthNames": ["كانون الثاني", "شباط", "آذار", "نيسان", "مايو", "حزيران", "تموز", "آب", "أيلول", "تشرين الأول", "تشرين الثاني", "كانون الأول"],
            "showMonthAfterYear": false,
            "yearSuffix": ""
        },
        "az": {
            "dayNames": ["Bazar", "Bazar ertəsi", "Çərşənbə axşamı", "Çərşənbə", "Cümə axşamı", "Cümə", "Şənbə"],
            "dayNamesMin": ["B", "Be", "Ça", "Ç", "Ca", "C", "Ş"],
            "firstDay": 1,
            "isRTL": false,
            "monthNames": ["Yanvar", "Fevral", "Mart", "Aprel", "May", "İyun", "İyul", "Avqust", "Sentyabr", "Oktyabr", "Noyabr", "Dekabr"],
            "showMonthAfterYear": false,
            "yearSuffix": ""
        },
        "bg": {
            "dayNames": ["Неделя", "Понеделник", "Вторник", "Сряда", "Четвъртък", "Петък", "Събота"],
            "dayNamesMin": ["Нед", "Пон", "Вто", "Сря", "Чет", "Пет", "Съб"],
            "firstDay": 1,
            "isRTL": false,
            "monthNames": ["Януари", "Февруари", "Март", "Април", "Май", "Юни", "Юли", "Август", "Септември", "Октомври", "Ноември", "Декември"],
            "showMonthAfterYear": false,
            "yearSuffix": ""
        },
        "bs": {
            "dayNames": ["Nedelja", "Ponedeljak", "Utorak", "Srijeda", "Četvrtak", "Petak", "Subota"],
            "dayNamesMin": ["Ned", "Pon", "Uto", "Sri", "Čet", "Pet", "Sub"],
            "firstDay": 1,
            "isRTL": false,
            "monthNames": ["Januar", "Februar", "Mart", "April", "Maj", "Juni", "Juli", "August", "Septembar", "Oktobar", "Novembar", "Decembar"],
            "showMonthAfterYear": false,
            "yearSuffix": ""
        },
        "ca": {
            "dayNames": ["Diumenge", "Dilluns", "Dimarts", "Dimecres", "Dijous", "Divendres", "Dissabte"],
            "dayNamesMin": ["Dug", "Dln", "Dmt", "Dmc", "Djs", "Dvn", "Dsb"],
            "firstDay": 1,
            "isRTL": false,
            "monthNames": ["Gener", "Febrer", "Mar&ccedil;", "Abril", "Maig", "Juny", "Juliol", "Agost", "Setembre", "Octubre", "Novembre", "Desembre"],
            "showMonthAfterYear": false,
            "yearSuffix": ""
        },
        "cs": {
            "dayNames": ["neděle", "pondělí", "úterý", "středa", "čtvrtek", "pátek", "sobota"],
            "dayNamesMin": ["ne", "po", "út", "st", "čt", "pá", "so"],
            "firstDay": 1,
            "isRTL": false,
            "monthNames": ["leden", "únor", "březen", "duben", "květen", "červen", "červenec", "srpen", "září", "říjen", "listopad", "prosinec"],
            "showMonthAfterYear": false,
            "yearSuffix": ""
        },
        "da": {
            "dayNames": ["Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag"],
            "dayNamesMin": ["Søn", "Man", "Tir", "Ons", "Tor", "Fre", "Lør"],
            "firstDay": 1,
            "isRTL": false,
            "monthNames": ["Januar", "Februar", "Marts", "April", "Maj", "Juni", "Juli", "August", "September", "Oktober", "November", "December"],
            "showMonthAfterYear": false,
            "yearSuffix": ""
        },
        "de": {
            "dayNames": ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"],
            "dayNamesMin": ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
            "firstDay": 1,
            "isRTL": false,
            "monthNames": ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
            "showMonthAfterYear": false,
            "yearSuffix": ""
        },
        "el": {
            "dayNames": ["Κυριακή", "Δευτέρα", "Τρίτη", "Τετάρτη", "Πέμπτη", "Παρασκευή", "Σάββατο"],
            "dayNamesMin": ["Κυρ", "Δευ", "Τρι", "Τετ", "Πεμ", "Παρ", "Σαβ"],
            "firstDay": 1,
            "isRTL": false,
            "monthNames": ["Ιανουάριος", "Φεβρουάριος", "Μάρτιος", "Απρίλιος", "Μάιος", "Ιούνιος", "Ιούλιος", "Αύγουστος", "Σεπτέμβριος", "Οκτώβριος", "Νοέμβριος", "Δεκέμβριος"],
            "showMonthAfterYear": false,
            "yearSuffix": ""
        },
        "en-AU": {
            "dayNames": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "dayNamesMin": ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            "firstDay": 1,
            "isRTL": false,
            "monthNames": ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            "showMonthAfterYear": false,
            "yearSuffix": ""
        },
        "en-GB": {
            "dayNames": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "dayNamesMin": ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            "firstDay": 1,
            "isRTL": false,
            "monthNames": ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            "showMonthAfterYear": false,
            "yearSuffix": ""
        },
        "en-NZ": {
            "dayNames": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "dayNamesMin": ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            "firstDay": 1,
            "isRTL": false,
            "monthNames": ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            "showMonthAfterYear": false,
            "yearSuffix": ""
        },
        "eo": {
            "dayNames": ["Dimanĉo", "Lundo", "Mardo", "Merkredo", "Ĵaŭdo", "Vendredo", "Sabato"],
            "dayNamesMin": ["Dim", "Lun", "Mar", "Mer", "Ĵaŭ", "Ven", "Sab"],
            "firstDay": 0,
            "isRTL": false,
            "monthNames": ["Januaro", "Februaro", "Marto", "Aprilo", "Majo", "Junio", "Julio", "Aŭgusto", "Septembro", "Oktobro", "Novembro", "Decembro"],
            "showMonthAfterYear": false,
            "yearSuffix": ""
        },
        "es": {
            "dayNames": ["Domingo", "Lunes", "Martes", "Mi&eacute;rcoles", "Jueves", "Viernes", "S&aacute;bado"],
            "dayNamesMin": ["Dom", "Lun", "Mar", "Mi&eacute;", "Juv", "Vie", "S&aacute;b"],
            "firstDay": 1,
            "isRTL": false,
            "monthNames": ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
            "showMonthAfterYear": false,
            "yearSuffix": ""
        },
        "et": {
            "dayNames": ["Pühapäev", "Esmaspäev", "Teisipäev", "Kolmapäev", "Neljapäev", "Reede", "Laupäev"],
            "dayNamesMin": ["Pühap", "Esmasp", "Teisip", "Kolmap", "Neljap", "Reede", "Laup"],
            "firstDay": 1,
            "isRTL": false,
            "monthNames": ["Jaanuar", "Veebruar", "Märts", "Aprill", "Mai", "Juuni", "Juuli", "August", "September", "Oktoober", "November", "Detsember"],
            "showMonthAfterYear": false,
            "yearSuffix": "",
            "size": "large"
        },
        "eu": {
            "dayNames": ["Igandea", "Astelehena", "Asteartea", "Asteazkena", "Osteguna", "Ostirala", "Larunbata"],
            "dayNamesMin": ["Iga", "Ast", "Ast", "Ast", "Ost", "Ost", "Lar"],
            "firstDay": 1,
            "isRTL": false,
            "monthNames": ["Urtarrila", "Otsaila", "Martxoa", "Apirila", "Maiatza", "Ekaina", "Uztaila", "Abuztua", "Iraila", "Urria", "Azaroa", "Abendua"],
            "showMonthAfterYear": false,
            "yearSuffix": ""
        },
        "fa": {
            "dayNames": ["يکشنبه", "دوشنبه", "سهشنبه", "چهارشنبه", "پنجشنبه", "جمعه", "شنبه"],
            "dayNamesMin": ["ي", "د", "س", "چ", "پ", "ج", "ش"],
            "firstDay": 6,
            "isRTL": true,
            "monthNames": ["فروردين", "ارديبهشت", "خرداد", "تير", "مرداد", "شهريور", "مهر", "آبان", "آذر", "دي", "بهمن", "اسفند"],
            "showMonthAfterYear": false,
            "yearSuffix": ""
        },
        "fi": {
            "dayNames": ["Sunnuntai", "Maanantai", "Tiistai", "Keskiviikko", "Torstai", "Perjantai", "Lauantai"],
            "dayNamesMin": ["Su", "Ma", "Ti", "Ke", "To", "Pe", "Su"],
            "firstDay": 1,
            "isRTL": false,
            "monthNames": ["Tammikuu", "Helmikuu", "Maaliskuu", "Huhtikuu", "Toukokuu", "Kes&auml;kuu", "Hein&auml;kuu", "Elokuu", "Syyskuu", "Lokakuu", "Marraskuu", "Joulukuu"],
            "showMonthAfterYear": false,
            "yearSuffix": ""
        },
        "fo": {
            "dayNames": ["Sunnudagur", "Mánadagur", "Týsdagur", "Mikudagur", "Hósdagur", "Fríggjadagur", "Leyardagur"],
            "dayNamesMin": ["Sun", "Mán", "Týs", "Mik", "Hós", "Frí", "Ley"],
            "firstDay": 0,
            "isRTL": false,
            "monthNames": ["Januar", "Februar", "Mars", "Apríl", "Mei", "Juni", "Juli", "August", "September", "Oktober", "November", "Desember"],
            "showMonthAfterYear": false,
            "yearSuffix": ""
        },
        "fr-CH": {
            "dayNames": ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"],
            "dayNamesMin": ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"],
            "firstDay": 1,
            "isRTL": false,
            "monthNames": ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
            "showMonthAfterYear": false,
            "yearSuffix": ""
        },
        "fr": {
            "dayNames": ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"],
            "dayNamesMin": ["Dim.", "Lun.", "Mar.", "Mer.", "Jeu.", "Ven.", "Sam."],
            "firstDay": 1,
            "isRTL": false,
            "monthNames": ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
            "showMonthAfterYear": false,
            "yearSuffix": ""
        },
        "gl": {
            "dayNames": ["Domingo", "Luns", "Martes", "M&eacute;rcores", "Xoves", "Venres", "S&aacute;bado"],
            "dayNamesMin": ["Dom", "Lun", "Mar", "M&eacute;r", "Xov", "Ven", "S&aacute;b"],
            "firstDay": 1,
            "isRTL": false,
            "monthNames": ["Xaneiro", "Febreiro", "Marzo", "Abril", "Maio", "Xuño", "Xullo", "Agosto", "Setembro", "Outubro", "Novembro", "Decembro"],
            "showMonthAfterYear": false,
            "yearSuffix": ""
        },
        "he": {
            "dayNames": ["ראשון", "שני", "שלישי", "רביעי", "חמישי", "שישי", "שבת"],
            "dayNamesMin": ["א'", "ב'", "ג'", "ד'", "ה'", "ו'", "שבת"],
            "firstDay": 0,
            "isRTL": true,
            "monthNames": ["ינואר", "פברואר", "מרץ", "אפריל", "מאי", "יוני", "יולי", "אוגוסט", "ספטמבר", "אוקטובר", "נובמבר", "דצמבר"],
            "showMonthAfterYear": false,
            "yearSuffix": ""
        },
        "hr": {
            "dayNames": ["Nedjelja", "Ponedjeljak", "Utorak", "Srijeda", "Četvrtak", "Petak", "Subota"],
            "dayNamesMin": ["Ned", "Pon", "Uto", "Sri", "Čet", "Pet", "Sub"],
            "firstDay": 1,
            "isRTL": false,
            "monthNames": ["Siječanj", "Veljača", "Ožujak", "Travanj", "Svibanj", "Lipanj", "Srpanj", "Kolovoz", "Rujan", "Listopad", "Studeni", "Prosinac"],
            "showMonthAfterYear": false,
            "yearSuffix": ""
        },
        "hu": {
            "dayNames": ["Vasárnap", "Hétfö", "Kedd", "Szerda", "Csütörtök", "Péntek", "Szombat"],
            "dayNamesMin": ["Vas", "Hét", "Ked", "Sze", "Csü", "Pén", "Szo"],
            "firstDay": 1,
            "isRTL": false,
            "monthNames": ["Január", "Február", "Március", "Április", "Május", "Június", "Július", "Augusztus", "Szeptember", "Október", "November", "December"],
            "showMonthAfterYear": true,
            "yearSuffix": ""
        },
        "hy": {
            "dayNames": ["կիրակի", "եկուշաբթի", "երեքշաբթի", "չորեքշաբթի", "հինգշաբթի", "ուրբաթ", "շաբաթ"],
            "dayNamesMin": ["կիր", "երկ", "երք", "չրք", "հնգ", "ուրբ", "շբթ"],
            "firstDay": 1,
            "isRTL": false,
            "monthNames": ["Հունվար", "Փետրվար", "Մարտ", "Ապրիլ", "Մայիս", "Հունիս", "Հուլիս", "Օգոստոս", "Սեպտեմբեր", "Հոկտեմբեր", "Նոյեմբեր", "Դեկտեմբեր"],
            "showMonthAfterYear": false,
            "yearSuffix": ""
        },
        "id": {
            "dayNames": ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"],
            "dayNamesMin": ["Min", "Sen", "Sel", "Rab", "kam", "Jum", "Sab"],
            "firstDay": 0,
            "isRTL": false,
            "monthNames": ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "Nopember", "Desember"],
            "showMonthAfterYear": false,
            "yearSuffix": ""
        },
        "is": {
            "dayNames": ["Sunnudagur", "M&aacute;nudagur", "&THORN;ri&eth;judagur", "Mi&eth;vikudagur", "Fimmtudagur", "F&ouml;studagur", "Laugardagur"],
            "dayNamesMin": ["Sun", "M&aacute;n", "&THORN;ri", "Mi&eth;", "Fim", "F&ouml;s", "Lau"],
            "firstDay": 0,
            "isRTL": false,
            "monthNames": ["Jan&uacute;ar", "Febr&uacute;ar", "Mars", "Apr&iacute;l", "Ma&iacute", "J&uacute;n&iacute;", "J&uacute;l&iacute;", "&Aacute;g&uacute;st", "September", "Okt&oacute;ber", "N&oacute;vember", "Desember"],
            "showMonthAfterYear": false,
            "yearSuffix": ""
        },
        "it": {
            "dayNames": ["Domenica", "Luned&#236", "Marted&#236", "Mercoled&#236", "Gioved&#236", "Venerd&#236", "Sabato"],
            "dayNamesMin": ["Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab"],
            "firstDay": 1,
            "isRTL": false,
            "monthNames": ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"],
            "showMonthAfterYear": false,
            "yearSuffix": ""
        },
        "ja": {
            "dayNames": ["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"],
            "dayNamesMin": ["日", "月", "火", "水", "木", "金", "土"],
            "firstDay": 0,
            "isRTL": false,
            "monthNames": ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
            "showMonthAfterYear": true,
            "yearSuffix": "年"
        },
        "ko": {
            "dayNames": ["일", "월", "화", "수", "목", "금", "토"],
            "dayNamesMin": ["일", "월", "화", "수", "목", "금", "토"],
            "firstDay": 0,
            "isRTL": false,
            "monthNames": ["1월(JAN)", "2월(FEB)", "3월(MAR)", "4월(APR)", "5월(MAY)", "6월(JUN)", "7월(JUL)", "8월(AUG)", "9월(SEP)", "10월(OCT)", "11월(NOV)", "12월(DEC)"],
            "showMonthAfterYear": false,
            "yearSuffix": "년"
        },
        "kz": {
            "dayNames": ["Жексенбі", "Дүйсенбі", "Сейсенбі", "Сәрсенбі", "Бейсенбі", "Жұма", "Сенбі"],
            "dayNamesMin": ["жкс", "дсн", "ссн", "срс", "бсн", "жма", "снб"],
            "firstDay": 1,
            "isRTL": false,
            "monthNames": ["Қаңтар", "Ақпан", "Наурыз", "Сәуір", "Мамыр", "Маусым", "Шілде", "Тамыз", "Қыркүйек", "Қазан", "Қараша", "Желтоқсан"],
            "showMonthAfterYear": false,
            "yearSuffix": ""
        },
        "lt": {
            "dayNames": ["sekmadienis", "pirmadienis", "antradienis", "trečiadienis", "ketvirtadienis", "penktadienis", "šeštadienis"],
            "dayNamesMin": ["sek", "pir", "ant", "tre", "ket", "pen", "šeš"],
            "firstDay": 1,
            "isRTL": false,
            "monthNames": ["Sausis", "Vasaris", "Kovas", "Balandis", "Gegužė", "Birželis", "Liepa", "Rugpjūtis", "Rugsėjis", "Spalis", "Lapkritis", "Gruodis"],
            "showMonthAfterYear": false,
            "yearSuffix": ""
        },
        "lv": {
            "dayNames": ["svētdiena", "pirmdiena", "otrdiena", "trešdiena", "ceturtdiena", "piektdiena", "sestdiena"],
            "dayNamesMin": ["svt", "prm", "otr", "tre", "ctr", "pkt", "sst"],
            "firstDay": 1,
            "isRTL": false,
            "monthNames": ["Janvāris", "Februāris", "Marts", "Aprīlis", "Maijs", "Jūnijs", "Jūlijs", "Augusts", "Septembris", "Oktobris", "Novembris", "Decembris"],
            "showMonthAfterYear": false,
            "yearSuffix": ""
        },
        "ml": {
            "dayNames": ["ഞായര്", "തിങ്കള്", "ചൊവ്വ", "ബുധന്", "വ്യാഴം", "വെള്ളി", "ശനി"],
            "dayNamesMin": ["ഞായ", "തിങ്ക", "ചൊവ്വ", "ബുധ", "വ്യാഴം", "വെള്ളി", "ശനി"],
            "firstDay": 1,
            "isRTL": false,
            "monthNames": ["ജനുവരി", "ഫെബ്രുവരി", "മാര്ച്ച്", "ഏപ്രില്", "മേയ്", "ജൂണ്", "ജൂലൈ", "ആഗസ്റ്റ്", "സെപ്റ്റംബര്", "ഒക്ടോബര്", "നവംബര്", "ഡിസംബര്"],
            "showMonthAfterYear": false,
            "yearSuffix": ""
        },
        "ms": {
            "dayNames": ["Ahad", "Isnin", "Selasa", "Rabu", "Khamis", "Jumaat", "Sabtu"],
            "dayNamesMin": ["Aha", "Isn", "Sel", "Rab", "kha", "Jum", "Sab"],
            "firstDay": 0,
            "isRTL": false,
            "monthNames": ["Januari", "Februari", "Mac", "April", "Mei", "Jun", "Julai", "Ogos", "September", "Oktober", "November", "Disember"],
            "showMonthAfterYear": false,
            "yearSuffix": ""
        },
        "nl": {
            "dayNames": ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"],
            "dayNamesMin": ["zon", "maa", "din", "woe", "don", "vri", "zat"],
            "firstDay": 1,
            "isRTL": false,
            "monthNames": ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"],
            "showMonthAfterYear": false,
            "yearSuffix": ""
        },
        "no": {
            "dayNames": ["søndag", "mandag", "tirsdag", "onsdag", "torsdag", "fredag", "lørdag"],
            "dayNamesMin": ["søn", "man", "tir", "ons", "tor", "fre", "lør"],
            "firstDay": 1,
            "isRTL": false,
            "monthNames": ["januar", "februar", "mars", "april", "mai", "juni", "juli", "august", "september", "oktober", "november", "desember"],
            "showMonthAfterYear": false,
            "yearSuffix": ""
        },
        "pl": {
            "dayNames": ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"],
            "dayNamesMin": ["Nie", "Pn", "Wt", "Śr", "Czw", "Pt", "So"],
            "firstDay": 1,
            "isRTL": false,
            "monthNames": ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"],
            "showMonthAfterYear": false,
            "yearSuffix": ""
        },
        "pt-BR": {
            "dayNames": ["Domingo", "Segunda-feira", "Ter&ccedil;a-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "S&aacute;bado"],
            "dayNamesMin": ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "S&aacute;b"],
            "firstDay": 0,
            "isRTL": false,
            "monthNames": ["Janeiro", "Fevereiro", "Mar&ccedil;o", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
            "showMonthAfterYear": false,
            "yearSuffix": ""
        },
        "pt": {
            "dayNames": ["Domingo", "Segunda-feira", "Ter&ccedil;a-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "S&aacute;bado"],
            "dayNamesMin": ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "S&aacute;b"],
            "firstDay": 0,
            "isRTL": false,
            "monthNames": ["Janeiro", "Fevereiro", "Mar&ccedil;o", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
            "showMonthAfterYear": false,
            "yearSuffix": ""
        },
        "rm": {
            "dayNames": ["Dumengia", "Glindesdi", "Mardi", "Mesemna", "Gievgia", "Venderdi", "Sonda"],
            "dayNamesMin": ["Dum", "Gli", "Mar", "Mes", "Gie", "Ven", "Som"],
            "firstDay": 1,
            "isRTL": false,
            "monthNames": ["Schaner", "Favrer", "Mars", "Avrigl", "Matg", "Zercladur", "Fanadur", "Avust", "Settember", "October", "November", "December"],
            "showMonthAfterYear": false,
            "yearSuffix": ""
        },
        "ro": {
            "dayNames": ["Duminică", "Luni", "Marţi", "Miercuri", "Joi", "Vineri", "Sâmbătă"],
            "dayNamesMin": ["Dum", "Lun", "Mar", "Mie", "Joi", "Vin", "Sâm"],
            "firstDay": 1,
            "isRTL": false,
            "monthNames": ["Ianuarie", "Februarie", "Martie", "Aprilie", "Mai", "Iunie", "Iulie", "August", "Septembrie", "Octombrie", "Noiembrie", "Decembrie"],
            "showMonthAfterYear": false,
            "yearSuffix": ""
        },
        "ru": {
            "dayNames": ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"],
            "dayNamesMin": ["вск", "пнд", "втр", "срд", "чтв", "птн", "сбт"],
            "firstDay": 1,
            "isRTL": false,
            "monthNames": ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
            "showMonthAfterYear": false,
            "yearSuffix": ""
        },
        "sk": {
            "dayNames": ["Nedeľa", "Pondelok", "Utorok", "Streda", "Štvrtok", "Piatok", "Sobota"],
            "dayNamesMin": ["Ned", "Pon", "Uto", "Str", "Štv", "Pia", "Sob"],
            "firstDay": 1,
            "isRTL": false,
            "monthNames": ["Január", "Február", "Marec", "Apríl", "Máj", "Jún", "Júl", "August", "September", "Október", "November", "December"],
            "showMonthAfterYear": false,
            "yearSuffix": ""
        },
        "sl": {
            "dayNames": ["Nedelja", "Ponedeljek", "Torek", "Sreda", "&#x10C;etrtek", "Petek", "Sobota"],
            "dayNamesMin": ["Ned", "Pon", "Tor", "Sre", "&#x10C;et", "Pet", "Sob"],
            "firstDay": 1,
            "isRTL": false,
            "monthNames": ["Januar", "Februar", "Marec", "April", "Maj", "Junij", "Julij", "Avgust", "September", "Oktober", "November", "December"],
            "showMonthAfterYear": false,
            "yearSuffix": ""
        },
        "sq": {
            "dayNames": ["E Diel", "E Hënë", "E Martë", "E Mërkurë", "E Enjte", "E Premte", "E Shtune"],
            "dayNamesMin": ["Di", "Hë", "Ma", "Më", "En", "Pr", "Sh"],
            "firstDay": 1,
            "isRTL": false,
            "monthNames": ["Janar", "Shkurt", "Mars", "Prill", "Maj", "Qershor", "Korrik", "Gusht", "Shtator", "Tetor", "Nëntor", "Dhjetor"],
            "showMonthAfterYear": false,
            "yearSuffix": ""
        },
        "sr-SR": {
            "dayNames": ["Nedelja", "Ponedeljak", "Utorak", "Sreda", "Četvrtak", "Petak", "Subota"],
            "dayNamesMin": ["Ned", "Pon", "Uto", "Sre", "Čet", "Pet", "Sub"],
            "firstDay": 1,
            "isRTL": false,
            "monthNames": ["Januar", "Februar", "Mart", "April", "Maj", "Jun", "Jul", "Avgust", "Septembar", "Oktobar", "Novembar", "Decembar"],
            "showMonthAfterYear": false,
            "yearSuffix": ""
        },
        "sr": {
            "dayNames": ["Недеља", "Понедељак", "Уторак", "Среда", "Четвртак", "Петак", "Субота"],
            "dayNamesMin": ["Нед", "Пон", "Уто", "Сре", "Чет", "Пет", "Суб"],
            "firstDay": 1,
            "isRTL": false,
            "monthNames": ["Јануар", "Фебруар", "Март", "Април", "Мај", "Јун", "Јул", "Август", "Септембар", "Октобар", "Новембар", "Децембар"],
            "showMonthAfterYear": false,
            "yearSuffix": ""
        },
        "sv": {
            "dayNames": ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"],
            "dayNamesMin": ["Sön", "Mån", "Tis", "Ons", "Tor", "Fre", "Lör"],
            "firstDay": 1,
            "isRTL": false,
            "monthNames": ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"],
            "showMonthAfterYear": false,
            "yearSuffix": ""
        },
        "ta": {
            "dayNames": ["ஞாயிற்றுக்கிழமை", "திங்கட்கிழமை", "செவ்வாய்க்கிழமை", "புதன்கிழமை", "வியாழக்கிழமை", "வெள்ளிக்கிழமை", "சனிக்கிழமை"],
            "dayNamesMin": ["ஞாயிறு", "திங்கள்", "செவ்வாய்", "புதன்", "வியாழன்", "வெள்ளி", "சனி"],
            "firstDay": 1,
            "isRTL": false,
            "monthNames": ["தை", "மாசி", "பங்குனி", "சித்திரை", "வைகாசி", "ஆனி", "ஆடி", "ஆவணி", "புரட்டாசி", "ஐப்பசி", "கார்த்திகை", "மார்கழி"],
            "showMonthAfterYear": false,
            "yearSuffix": ""
        },
        "th": {
            "dayNames": ["อาทิตย์", "จันทร์", "อังคาร", "พุธ", "พฤหัสบดี", "ศุกร์", "เสาร์"],
            "dayNamesMin": ["อา.", "จ.", "อ.", "พ.", "พฤ.", "ศ.", "ส."],
            "firstDay": 0,
            "isRTL": false,
            "monthNames": ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"],
            "showMonthAfterYear": false,
            "yearSuffix": ""
        },
        "tj": {
            "dayNames": ["якшанбе", "душанбе", "сешанбе", "чоршанбе", "панҷшанбе", "ҷумъа", "шанбе"],
            "dayNamesMin": ["якш", "душ", "сеш", "чор", "пан", "ҷум", "шан"],
            "firstDay": 1,
            "isRTL": false,
            "monthNames": ["Январ", "Феврал", "Март", "Апрел", "Май", "Июн", "Июл", "Август", "Сентябр", "Октябр", "Ноябр", "Декабр"],
            "showMonthAfterYear": false,
            "yearSuffix": ""
        },
        "tr": {
            "dayNames": ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"],
            "dayNamesMin": ["Pz", "Pt", "Sa", "Ça", "Pe", "Cu", "Ct"],
            "firstDay": 1,
            "isRTL": false,
            "monthNames": ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"],
            "showMonthAfterYear": false,
            "yearSuffix": ""
        },
        "uk": {
            "dayNames": ["неділя", "понеділок", "вівторок", "середа", "четвер", "п’ятниця", "субота"],
            "dayNamesMin": ["нед", "пнд", "вів", "срд", "чтв", "птн", "сбт"],
            "firstDay": 1,
            "isRTL": false,
            "monthNames": ["Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень", "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"],
            "showMonthAfterYear": false,
            "yearSuffix": ""
        },
        "vi": {
            "dayNames": ["Chủ Nhật", "Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy"],
            "dayNamesMin": ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
            "firstDay": 0,
            "isRTL": false,
            "monthNames": ["Tháng Một", "Tháng Hai", "Tháng Ba", "Tháng Tư", "Tháng Năm", "Tháng Sáu", "Tháng Bảy", "Tháng Tám", "Tháng Chín", "Tháng Mười", "Tháng Mười Một", "Tháng Mười Hai"],
            "showMonthAfterYear": false,
            "yearSuffix": ""
        },
        "zh-CN": {
            "dayNames": ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
            "dayNamesMin": ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
            "firstDay": 1,
            "isRTL": false,
            "monthNames": ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
            "showMonthAfterYear": true,
            "yearSuffix": "年"
        },
        "zh-HK": {
            "dayNames": ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
            "dayNamesMin": ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
            "firstDay": 0,
            "isRTL": false,
            "monthNames": ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
            "showMonthAfterYear": true,
            "yearSuffix": "年"
        },
        "zh-TW": {
            "dayNames": ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
            "dayNamesMin": ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
            "firstDay": 1,
            "isRTL": false,
            "monthNames": ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
            "showMonthAfterYear": true,
            "yearSuffix": "年"
        }
    };

    // -------------------------------------------------------------------------
    // finally, integrate with jQuery for convenience --------------------------
    // -------------------------------------------------------------------------

    $.fn.datePicker = function (options) {
        return (new AJS.DatePicker(this, options));
    };

}(jQuery));


} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.comalatech.workflow:cw-content', location = 'templates/com/comalatech/skull/vendors/backbone.marionette.min.js' */
// MarionetteJS (Backbone.Marionette)
// ----------------------------------
// v2.4.5
//
// Copyright (c)2016 Derick Bailey, Muted Solutions, LLC.
// Distributed under MIT license
//
// http://marionettejs.com


/*!
 * Includes BabySitter
 * https://github.com/marionettejs/backbone.babysitter/
 *
 * Includes Wreqr
 * https://github.com/marionettejs/backbone.wreqr/
 */



!function(a,b){if("undefined"!=typeof exports){var c=require("backbone"),d=require("underscore");module.exports=b(a,c,d)}else a.Marionette=a.Mn=b(a,a.Backbone,a._)}(this,function(a,b,c){"use strict";!function(a,b){var c=a.ChildViewContainer;return a.ChildViewContainer=function(a,b){var c=function(a){this._views={},this._indexByModel={},this._indexByCustom={},this._updateLength(),b.each(a,this.add,this)};b.extend(c.prototype,{add:function(a,b){var c=a.cid;return this._views[c]=a,a.model&&(this._indexByModel[a.model.cid]=c),b&&(this._indexByCustom[b]=c),this._updateLength(),this},findByModel:function(a){return this.findByModelCid(a.cid)},findByModelCid:function(a){var b=this._indexByModel[a];return this.findByCid(b)},findByCustom:function(a){var b=this._indexByCustom[a];return this.findByCid(b)},findByIndex:function(a){return b.values(this._views)[a]},findByCid:function(a){return this._views[a]},remove:function(a){var c=a.cid;return a.model&&delete this._indexByModel[a.model.cid],b.any(this._indexByCustom,function(a,b){return a===c?(delete this._indexByCustom[b],!0):void 0},this),delete this._views[c],this._updateLength(),this},call:function(a){this.apply(a,b.tail(arguments))},apply:function(a,c){b.each(this._views,function(d){b.isFunction(d[a])&&d[a].apply(d,c||[])})},_updateLength:function(){this.length=b.size(this._views)}});var d=["forEach","each","map","find","detect","filter","select","reject","every","all","some","any","include","contains","invoke","toArray","first","initial","rest","last","without","isEmpty","pluck","reduce"];return b.each(d,function(a){c.prototype[a]=function(){var c=b.values(this._views),d=[c].concat(b.toArray(arguments));return b[a].apply(b,d)}}),c}(a,b),a.ChildViewContainer.VERSION="0.1.11",a.ChildViewContainer.noConflict=function(){return a.ChildViewContainer=c,this},a.ChildViewContainer}(b,c),function(a,b){var c=a.Wreqr,d=a.Wreqr={};return a.Wreqr.VERSION="1.3.6",a.Wreqr.noConflict=function(){return a.Wreqr=c,this},d.Handlers=function(a,b){var c=function(a){this.options=a,this._wreqrHandlers={},b.isFunction(this.initialize)&&this.initialize(a)};return c.extend=a.Model.extend,b.extend(c.prototype,a.Events,{setHandlers:function(a){b.each(a,function(a,c){var d=null;b.isObject(a)&&!b.isFunction(a)&&(d=a.context,a=a.callback),this.setHandler(c,a,d)},this)},setHandler:function(a,b,c){var d={callback:b,context:c};this._wreqrHandlers[a]=d,this.trigger("handler:add",a,b,c)},hasHandler:function(a){return!!this._wreqrHandlers[a]},getHandler:function(a){var b=this._wreqrHandlers[a];if(b)return function(){return b.callback.apply(b.context,arguments)}},removeHandler:function(a){delete this._wreqrHandlers[a]},removeAllHandlers:function(){this._wreqrHandlers={}}}),c}(a,b),d.CommandStorage=function(){var c=function(a){this.options=a,this._commands={},b.isFunction(this.initialize)&&this.initialize(a)};return b.extend(c.prototype,a.Events,{getCommands:function(a){var b=this._commands[a];return b||(b={command:a,instances:[]},this._commands[a]=b),b},addCommand:function(a,b){var c=this.getCommands(a);c.instances.push(b)},clearCommands:function(a){var b=this.getCommands(a);b.instances=[]}}),c}(),d.Commands=function(a,b){return a.Handlers.extend({storageType:a.CommandStorage,constructor:function(b){this.options=b||{},this._initializeStorage(this.options),this.on("handler:add",this._executeCommands,this),a.Handlers.prototype.constructor.apply(this,arguments)},execute:function(a){a=arguments[0];var c=b.rest(arguments);this.hasHandler(a)?this.getHandler(a).apply(this,c):this.storage.addCommand(a,c)},_executeCommands:function(a,c,d){var e=this.storage.getCommands(a);b.each(e.instances,function(a){c.apply(d,a)}),this.storage.clearCommands(a)},_initializeStorage:function(a){var c,d=a.storageType||this.storageType;c=b.isFunction(d)?new d:d,this.storage=c}})}(d,b),d.RequestResponse=function(a,b){return a.Handlers.extend({request:function(a){return this.hasHandler(a)?this.getHandler(a).apply(this,b.rest(arguments)):void 0}})}(d,b),d.EventAggregator=function(a,b){var c=function(){};return c.extend=a.Model.extend,b.extend(c.prototype,a.Events),c}(a,b),d.Channel=function(c){var d=function(b){this.vent=new a.Wreqr.EventAggregator,this.reqres=new a.Wreqr.RequestResponse,this.commands=new a.Wreqr.Commands,this.channelName=b};return b.extend(d.prototype,{reset:function(){return this.vent.off(),this.vent.stopListening(),this.reqres.removeAllHandlers(),this.commands.removeAllHandlers(),this},connectEvents:function(a,b){return this._connect("vent",a,b),this},connectCommands:function(a,b){return this._connect("commands",a,b),this},connectRequests:function(a,b){return this._connect("reqres",a,b),this},_connect:function(a,c,d){if(c){d=d||this;var e="vent"===a?"on":"setHandler";b.each(c,function(c,f){this[a][e](f,b.bind(c,d))},this)}}}),d}(d),d.radio=function(a,b){var c=function(){this._channels={},this.vent={},this.commands={},this.reqres={},this._proxyMethods()};b.extend(c.prototype,{channel:function(a){if(!a)throw new Error("Channel must receive a name");return this._getChannel(a)},_getChannel:function(b){var c=this._channels[b];return c||(c=new a.Channel(b),this._channels[b]=c),c},_proxyMethods:function(){b.each(["vent","commands","reqres"],function(a){b.each(d[a],function(b){this[a][b]=e(this,a,b)},this)},this)}});var d={vent:["on","off","trigger","once","stopListening","listenTo","listenToOnce"],commands:["execute","setHandler","setHandlers","removeHandler","removeAllHandlers"],reqres:["request","setHandler","setHandlers","removeHandler","removeAllHandlers"]},e=function(a,c,d){return function(e){var f=a._getChannel(e)[c];return f[d].apply(f,b.rest(arguments))}};return new c}(d,b),a.Wreqr}(b,c);var d=a.Marionette,e=a.Mn,f=b.Marionette={};f.VERSION="2.4.5",f.noConflict=function(){return a.Marionette=d,a.Mn=e,this},b.Marionette=f,f.Deferred=b.$.Deferred,f.extend=b.Model.extend,f.isNodeAttached=function(a){return b.$.contains(document.documentElement,a)},f.mergeOptions=function(a,b){a&&c.extend(this,c.pick(a,b))},f.getOption=function(a,b){return a&&b?a.options&&void 0!==a.options[b]?a.options[b]:a[b]:void 0},f.proxyGetOption=function(a){return f.getOption(this,a)},f._getValue=function(a,b,d){return c.isFunction(a)&&(a=d?a.apply(b,d):a.call(b)),a},f.normalizeMethods=function(a){return c.reduce(a,function(a,b,d){return c.isFunction(b)||(b=this[b]),b&&(a[d]=b),a},{},this)},f.normalizeUIString=function(a,b){return a.replace(/@ui\.[a-zA-Z-_$0-9]*/g,function(a){return b[a.slice(4)]})},f.normalizeUIKeys=function(a,b){return c.reduce(a,function(a,c,d){var e=f.normalizeUIString(d,b);return a[e]=c,a},{})},f.normalizeUIValues=function(a,b,d){return c.each(a,function(e,g){c.isString(e)?a[g]=f.normalizeUIString(e,b):c.isObject(e)&&c.isArray(d)&&(c.extend(e,f.normalizeUIValues(c.pick(e,d),b)),c.each(d,function(a){var d=e[a];c.isString(d)&&(e[a]=f.normalizeUIString(d,b))}))}),a},f.actAsCollection=function(a,b){var d=["forEach","each","map","find","detect","filter","select","reject","every","all","some","any","include","contains","invoke","toArray","first","initial","rest","last","without","isEmpty","pluck"];c.each(d,function(d){a[d]=function(){var a=c.values(c.result(this,b)),e=[a].concat(c.toArray(arguments));return c[d].apply(c,e)}})};var g=f.deprecate=function(a,b){c.isObject(a)&&(a=a.prev+" is going to be removed in the future. Please use "+a.next+" instead."+(a.url?" See: "+a.url:"")),void 0!==b&&b||g._cache[a]||(g._warn("Deprecation warning: "+a),g._cache[a]=!0)};g._console="undefined"!=typeof console?console:{},g._warn=function(){var a=g._console.warn||g._console.log||function(){};return a.apply(g._console,arguments)},g._cache={},f._triggerMethod=function(){function a(a,b,c){return c.toUpperCase()}var b=/(^|:)(\w)/gi;return function(d,e,f){var g=arguments.length<3;g&&(f=e,e=f[0]);var h,i="on"+e.replace(b,a),j=d[i];return c.isFunction(j)&&(h=j.apply(d,g?c.rest(f):f)),c.isFunction(d.trigger)&&(g+f.length>1?d.trigger.apply(d,g?f:[e].concat(c.drop(f,0))):d.trigger(e)),h}}(),f.triggerMethod=function(a){return f._triggerMethod(this,arguments)},f.triggerMethodOn=function(a){var b=c.isFunction(a.triggerMethod)?a.triggerMethod:f.triggerMethod;return b.apply(a,c.rest(arguments))},f.MonitorDOMRefresh=function(a){function b(){a._isShown=!0,d()}function c(){a._isRendered=!0,d()}function d(){a._isShown&&a._isRendered&&f.isNodeAttached(a.el)&&f.triggerMethodOn(a,"dom:refresh",a)}a._isDomRefreshMonitored||(a._isDomRefreshMonitored=!0,a.on({show:b,render:c}))},function(a){function b(b,d,e,f){var g=f.split(/\s+/);c.each(g,function(c){var f=b[c];if(!f)throw new a.Error('Method "'+c+'" was configured as an event handler, but does not exist.');b.listenTo(d,e,f)})}function d(a,b,c,d){a.listenTo(b,c,d)}function e(a,b,d,e){var f=e.split(/\s+/);c.each(f,function(c){var e=a[c];a.stopListening(b,d,e)})}function f(a,b,c,d){a.stopListening(b,c,d)}function g(b,d,e,f,g){if(d&&e){if(!c.isObject(e))throw new a.Error({message:"Bindings must be an object or function.",url:"marionette.functions.html#marionettebindentityevents"});e=a._getValue(e,b),c.each(e,function(a,e){c.isFunction(a)?f(b,d,e,a):g(b,d,e,a)})}}a.bindEntityEvents=function(a,c,e){g(a,c,e,d,b)},a.unbindEntityEvents=function(a,b,c){g(a,b,c,f,e)},a.proxyBindEntityEvents=function(b,c){return a.bindEntityEvents(this,b,c)},a.proxyUnbindEntityEvents=function(b,c){return a.unbindEntityEvents(this,b,c)}}(f);var h=["description","fileName","lineNumber","name","message","number"];return f.Error=f.extend.call(Error,{urlRoot:"http://marionettejs.com/docs/v"+f.VERSION+"/",constructor:function(a,b){c.isObject(a)?(b=a,a=b.message):b||(b={});var d=Error.call(this,a);c.extend(this,c.pick(d,h),c.pick(b,h)),this.captureStackTrace(),b.url&&(this.url=this.urlRoot+b.url)},captureStackTrace:function(){Error.captureStackTrace&&Error.captureStackTrace(this,f.Error)},toString:function(){return this.name+": "+this.message+(this.url?" See: "+this.url:"")}}),f.Error.extend=f.extend,f.Callbacks=function(){this._deferred=f.Deferred(),this._callbacks=[]},c.extend(f.Callbacks.prototype,{add:function(a,b){var d=c.result(this._deferred,"promise");this._callbacks.push({cb:a,ctx:b}),d.then(function(c){b&&(c.context=b),a.call(c.context,c.options)})},run:function(a,b){this._deferred.resolve({options:a,context:b})},reset:function(){var a=this._callbacks;this._deferred=f.Deferred(),this._callbacks=[],c.each(a,function(a){this.add(a.cb,a.ctx)},this)}}),f.Controller=function(a){this.options=a||{},c.isFunction(this.initialize)&&this.initialize(this.options)},f.Controller.extend=f.extend,c.extend(f.Controller.prototype,b.Events,{destroy:function(){return f._triggerMethod(this,"before:destroy",arguments),f._triggerMethod(this,"destroy",arguments),this.stopListening(),this.off(),this},triggerMethod:f.triggerMethod,mergeOptions:f.mergeOptions,getOption:f.proxyGetOption}),f.Object=function(a){this.options=c.extend({},c.result(this,"options"),a),this.initialize.apply(this,arguments)},f.Object.extend=f.extend,c.extend(f.Object.prototype,b.Events,{initialize:function(){},destroy:function(a){return a=a||{},this.triggerMethod("before:destroy",a),this.triggerMethod("destroy",a),this.stopListening(),this},triggerMethod:f.triggerMethod,mergeOptions:f.mergeOptions,getOption:f.proxyGetOption,bindEntityEvents:f.proxyBindEntityEvents,unbindEntityEvents:f.proxyUnbindEntityEvents}),f.Region=f.Object.extend({constructor:function(a){if(this.options=a||{},this.el=this.getOption("el"),this.el=this.el instanceof b.$?this.el[0]:this.el,!this.el)throw new f.Error({name:"NoElError",message:'An "el" must be specified for a region.'});this.$el=this.getEl(this.el),f.Object.call(this,a)},show:function(a,b){if(this._ensureElement()){this._ensureViewIsIntact(a),f.MonitorDOMRefresh(a);var d=b||{},e=a!==this.currentView,g=!!d.preventDestroy,h=!!d.forceShow,i=!!this.currentView,j=e&&!g,k=e||h;if(i&&this.triggerMethod("before:swapOut",this.currentView,this,b),this.currentView&&e&&delete this.currentView._parent,j?this.empty():i&&k&&this.currentView.off("destroy",this.empty,this),k){a.once("destroy",this.empty,this),a._parent=this,this._renderView(a),i&&this.triggerMethod("before:swap",a,this,b),this.triggerMethod("before:show",a,this,b),f.triggerMethodOn(a,"before:show",a,this,b),i&&this.triggerMethod("swapOut",this.currentView,this,b);var l=f.isNodeAttached(this.el),m=[],n=c.extend({triggerBeforeAttach:this.triggerBeforeAttach,triggerAttach:this.triggerAttach},d);return l&&n.triggerBeforeAttach&&(m=this._displayedViews(a),this._triggerAttach(m,"before:")),this.attachHtml(a),this.currentView=a,l&&n.triggerAttach&&(m=this._displayedViews(a),this._triggerAttach(m)),i&&this.triggerMethod("swap",a,this,b),this.triggerMethod("show",a,this,b),f.triggerMethodOn(a,"show",a,this,b),this}return this}},triggerBeforeAttach:!0,triggerAttach:!0,_triggerAttach:function(a,b){var d=(b||"")+"attach";c.each(a,function(a){f.triggerMethodOn(a,d,a,this)},this)},_displayedViews:function(a){return c.union([a],c.result(a,"_getNestedViews")||[])},_renderView:function(a){a.supportsRenderLifecycle||f.triggerMethodOn(a,"before:render",a),a.render(),a.supportsRenderLifecycle||f.triggerMethodOn(a,"render",a)},_ensureElement:function(){if(c.isObject(this.el)||(this.$el=this.getEl(this.el),this.el=this.$el[0]),!this.$el||0===this.$el.length){if(this.getOption("allowMissingEl"))return!1;throw new f.Error('An "el" '+this.$el.selector+" must exist in DOM")}return!0},_ensureViewIsIntact:function(a){if(!a)throw new f.Error({name:"ViewNotValid",message:"The view passed is undefined and therefore invalid. You must pass a view instance to show."});if(a.isDestroyed)throw new f.Error({name:"ViewDestroyedError",message:'View (cid: "'+a.cid+'") has already been destroyed and cannot be used.'})},getEl:function(a){return b.$(a,f._getValue(this.options.parentEl,this))},attachHtml:function(a){this.$el.contents().detach(),this.el.appendChild(a.el)},empty:function(a){var b=this.currentView,c=a||{},d=!!c.preventDestroy;return b?(b.off("destroy",this.empty,this),this.triggerMethod("before:empty",b),d||this._destroyView(),this.triggerMethod("empty",b),delete this.currentView,d&&this.$el.contents().detach(),this):this},_destroyView:function(){var a=this.currentView;a.isDestroyed||(a.supportsDestroyLifecycle||f.triggerMethodOn(a,"before:destroy",a),a.destroy?a.destroy():(a.remove(),a.isDestroyed=!0),a.supportsDestroyLifecycle||f.triggerMethodOn(a,"destroy",a))},attachView:function(a){return this.currentView&&delete this.currentView._parent,a._parent=this,this.currentView=a,this},hasView:function(){return!!this.currentView},reset:function(){return this.empty(),this.$el&&(this.el=this.$el.selector),delete this.$el,this}},{buildRegion:function(a,b){if(c.isString(a))return this._buildRegionFromSelector(a,b);if(a.selector||a.el||a.regionClass)return this._buildRegionFromObject(a,b);if(c.isFunction(a))return this._buildRegionFromRegionClass(a);throw new f.Error({message:"Improper region configuration type.",url:"marionette.region.html#region-configuration-types"})},_buildRegionFromSelector:function(a,b){return new b({el:a})},_buildRegionFromObject:function(a,b){var d=a.regionClass||b,e=c.omit(a,"selector","regionClass");return a.selector&&!e.el&&(e.el=a.selector),new d(e)},_buildRegionFromRegionClass:function(a){return new a}}),f.RegionManager=f.Controller.extend({constructor:function(a){this._regions={},this.length=0,f.Controller.call(this,a),this.addRegions(this.getOption("regions"))},addRegions:function(a,b){return a=f._getValue(a,this,arguments),c.reduce(a,function(a,d,e){return c.isString(d)&&(d={selector:d}),d.selector&&(d=c.defaults({},d,b)),a[e]=this.addRegion(e,d),a},{},this)},addRegion:function(a,b){var c;return c=b instanceof f.Region?b:f.Region.buildRegion(b,f.Region),this.triggerMethod("before:add:region",a,c),c._parent=this,this._store(a,c),this.triggerMethod("add:region",a,c),c},get:function(a){return this._regions[a]},getRegions:function(){return c.clone(this._regions)},removeRegion:function(a){var b=this._regions[a];return this._remove(a,b),b},removeRegions:function(){var a=this.getRegions();return c.each(this._regions,function(a,b){this._remove(b,a)},this),a},emptyRegions:function(){var a=this.getRegions();return c.invoke(a,"empty"),a},destroy:function(){return this.removeRegions(),f.Controller.prototype.destroy.apply(this,arguments)},_store:function(a,b){this._regions[a]||this.length++,this._regions[a]=b},_remove:function(a,b){this.triggerMethod("before:remove:region",a,b),b.empty(),b.stopListening(),delete b._parent,delete this._regions[a],this.length--,this.triggerMethod("remove:region",a,b)}}),f.actAsCollection(f.RegionManager.prototype,"_regions"),f.TemplateCache=function(a){this.templateId=a},c.extend(f.TemplateCache,{templateCaches:{},get:function(a,b){var c=this.templateCaches[a];return c||(c=new f.TemplateCache(a),this.templateCaches[a]=c),c.load(b)},clear:function(){var a,b=c.toArray(arguments),d=b.length;if(d>0)for(a=0;d>a;a++)delete this.templateCaches[b[a]];else this.templateCaches={}}}),c.extend(f.TemplateCache.prototype,{load:function(a){if(this.compiledTemplate)return this.compiledTemplate;var b=this.loadTemplate(this.templateId,a);return this.compiledTemplate=this.compileTemplate(b,a),this.compiledTemplate},loadTemplate:function(a,c){var d=b.$(a);if(!d.length)throw new f.Error({name:"NoTemplateError",message:'Could not find template: "'+a+'"'});return d.html()},compileTemplate:function(a,b){return c.template(a,b)}}),f.Renderer={render:function(a,b){if(!a)throw new f.Error({name:"TemplateNotFoundError",message:"Cannot render the template since its false, null or undefined."});var d=c.isFunction(a)?a:f.TemplateCache.get(a);return d(b)}},f.View=b.View.extend({isDestroyed:!1,supportsRenderLifecycle:!0,supportsDestroyLifecycle:!0,constructor:function(a){this.render=c.bind(this.render,this),a=f._getValue(a,this),this.options=c.extend({},c.result(this,"options"),a),this._behaviors=f.Behaviors(this),b.View.call(this,this.options),f.MonitorDOMRefresh(this)},getTemplate:function(){return this.getOption("template")},serializeModel:function(a){return a.toJSON.apply(a,c.rest(arguments))},mixinTemplateHelpers:function(a){a=a||{};var b=this.getOption("templateHelpers");return b=f._getValue(b,this),c.extend(a,b)},normalizeUIKeys:function(a){var b=c.result(this,"_uiBindings");return f.normalizeUIKeys(a,b||c.result(this,"ui"))},normalizeUIValues:function(a,b){var d=c.result(this,"ui"),e=c.result(this,"_uiBindings");return f.normalizeUIValues(a,e||d,b)},configureTriggers:function(){if(this.triggers){var a=this.normalizeUIKeys(c.result(this,"triggers"));return c.reduce(a,function(a,b,c){return a[c]=this._buildViewTrigger(b),a},{},this)}},delegateEvents:function(a){return this._delegateDOMEvents(a),this.bindEntityEvents(this.model,this.getOption("modelEvents")),this.bindEntityEvents(this.collection,this.getOption("collectionEvents")),c.each(this._behaviors,function(a){a.bindEntityEvents(this.model,a.getOption("modelEvents")),a.bindEntityEvents(this.collection,a.getOption("collectionEvents"))},this),this},_delegateDOMEvents:function(a){var d=f._getValue(a||this.events,this);d=this.normalizeUIKeys(d),c.isUndefined(a)&&(this.events=d);var e={},g=c.result(this,"behaviorEvents")||{},h=this.configureTriggers(),i=c.result(this,"behaviorTriggers")||{};c.extend(e,g,d,h,i),b.View.prototype.delegateEvents.call(this,e)},undelegateEvents:function(){return b.View.prototype.undelegateEvents.apply(this,arguments),this.unbindEntityEvents(this.model,this.getOption("modelEvents")),this.unbindEntityEvents(this.collection,this.getOption("collectionEvents")),c.each(this._behaviors,function(a){a.unbindEntityEvents(this.model,a.getOption("modelEvents")),a.unbindEntityEvents(this.collection,a.getOption("collectionEvents"))},this),this},_ensureViewIsIntact:function(){if(this.isDestroyed)throw new f.Error({name:"ViewDestroyedError",message:'View (cid: "'+this.cid+'") has already been destroyed and cannot be used.'})},destroy:function(){if(this.isDestroyed)return this;var a=c.toArray(arguments);return this.triggerMethod.apply(this,["before:destroy"].concat(a)),this.isDestroyed=!0,this.triggerMethod.apply(this,["destroy"].concat(a)),this.unbindUIElements(),this.isRendered=!1,this.remove(),c.invoke(this._behaviors,"destroy",a),this},bindUIElements:function(){this._bindUIElements(),c.invoke(this._behaviors,this._bindUIElements)},_bindUIElements:function(){if(this.ui){this._uiBindings||(this._uiBindings=this.ui);var a=c.result(this,"_uiBindings");this.ui={},c.each(a,function(a,b){this.ui[b]=this.$(a)},this)}},unbindUIElements:function(){this._unbindUIElements(),c.invoke(this._behaviors,this._unbindUIElements)},_unbindUIElements:function(){this.ui&&this._uiBindings&&(c.each(this.ui,function(a,b){delete this.ui[b]},this),this.ui=this._uiBindings,delete this._uiBindings)},_buildViewTrigger:function(a){var b=c.defaults({},a,{preventDefault:!0,stopPropagation:!0}),d=c.isObject(a)?b.event:a;return function(a){a&&(a.preventDefault&&b.preventDefault&&a.preventDefault(),a.stopPropagation&&b.stopPropagation&&a.stopPropagation());var c={view:this,model:this.model,collection:this.collection};this.triggerMethod(d,c)}},setElement:function(){var a=b.View.prototype.setElement.apply(this,arguments);return c.invoke(this._behaviors,"proxyViewProperties",this),a},triggerMethod:function(){var a=f._triggerMethod(this,arguments);return this._triggerEventOnBehaviors(arguments),this._triggerEventOnParentLayout(arguments[0],c.rest(arguments)),a},_triggerEventOnBehaviors:function(a){for(var b=f._triggerMethod,c=this._behaviors,d=0,e=c&&c.length;e>d;d++)b(c[d],a)},_triggerEventOnParentLayout:function(a,b){var d=this._parentLayoutView();if(d){var e=f.getOption(d,"childViewEventPrefix"),g=e+":"+a,h=[this].concat(b);f._triggerMethod(d,g,h);var i=f.getOption(d,"childEvents");i=f._getValue(i,d);var j=d.normalizeMethods(i);j&&c.isFunction(j[a])&&j[a].apply(d,h)}},_getImmediateChildren:function(){return[]},_getNestedViews:function(){var a=this._getImmediateChildren();return a.length?c.reduce(a,function(a,b){return b._getNestedViews?a.concat(b._getNestedViews()):a},a):a},_parentLayoutView:function(){for(var a=this._parent;a;){if(a instanceof f.LayoutView)return a;a=a._parent}},normalizeMethods:f.normalizeMethods,mergeOptions:f.mergeOptions,getOption:f.proxyGetOption,bindEntityEvents:f.proxyBindEntityEvents,unbindEntityEvents:f.proxyUnbindEntityEvents}),f.ItemView=f.View.extend({constructor:function(){f.View.apply(this,arguments)},serializeData:function(){if(!this.model&&!this.collection)return{};var a=[this.model||this.collection];return arguments.length&&a.push.apply(a,arguments),this.model?this.serializeModel.apply(this,a):{items:this.serializeCollection.apply(this,a)}},serializeCollection:function(a){return a.toJSON.apply(a,c.rest(arguments))},render:function(){return this._ensureViewIsIntact(),this.triggerMethod("before:render",this),this._renderTemplate(),this.isRendered=!0,this.bindUIElements(),this.triggerMethod("render",this),this},_renderTemplate:function(){var a=this.getTemplate();if(a!==!1){if(!a)throw new f.Error({name:"UndefinedTemplateError",message:"Cannot render the template since it is null or undefined."});var b=this.mixinTemplateHelpers(this.serializeData()),c=f.Renderer.render(a,b,this);return this.attachElContent(c),this}},attachElContent:function(a){return this.$el.html(a),this}}),f.CollectionView=f.View.extend({childViewEventPrefix:"childview",sort:!0,constructor:function(a){this.once("render",this._initialEvents),this._initChildViewStorage(),f.View.apply(this,arguments),this.on({"before:show":this._onBeforeShowCalled,show:this._onShowCalled,"before:attach":this._onBeforeAttachCalled,attach:this._onAttachCalled}),this.initRenderBuffer()},initRenderBuffer:function(){this._bufferedChildren=[]},startBuffering:function(){this.initRenderBuffer(),this.isBuffering=!0},endBuffering:function(){var a,b=this._isShown&&f.isNodeAttached(this.el);this.isBuffering=!1,this._isShown&&this._triggerMethodMany(this._bufferedChildren,this,"before:show"),b&&this._triggerBeforeAttach&&(a=this._getNestedViews(),this._triggerMethodMany(a,this,"before:attach")),this.attachBuffer(this,this._createBuffer()),b&&this._triggerAttach&&(a=this._getNestedViews(),this._triggerMethodMany(a,this,"attach")),this._isShown&&this._triggerMethodMany(this._bufferedChildren,this,"show"),this.initRenderBuffer()},_triggerMethodMany:function(a,b,d){var e=c.drop(arguments,3);c.each(a,function(a){f.triggerMethodOn.apply(a,[a,d,a,b].concat(e))})},_initialEvents:function(){this.collection&&(this.listenTo(this.collection,"add",this._onCollectionAdd),this.listenTo(this.collection,"remove",this._onCollectionRemove),this.listenTo(this.collection,"reset",this.render),this.getOption("sort")&&this.listenTo(this.collection,"sort",this._sortViews))},_onCollectionAdd:function(a,b,d){var e=void 0!==d.at&&(d.index||b.indexOf(a));if((this.getOption("filter")||e===!1)&&(e=c.indexOf(this._filteredSortedModels(e),a)),this._shouldAddChild(a,e)){this.destroyEmptyView();var f=this.getChildView(a);this.addChild(a,f,e)}},_onCollectionRemove:function(a){var b=this.children.findByModel(a);this.removeChildView(b),this.checkEmpty()},_onBeforeShowCalled:function(){this._triggerBeforeAttach=this._triggerAttach=!1,this.children.each(function(a){f.triggerMethodOn(a,"before:show",a)})},_onShowCalled:function(){this.children.each(function(a){f.triggerMethodOn(a,"show",a)})},_onBeforeAttachCalled:function(){this._triggerBeforeAttach=!0},_onAttachCalled:function(){this._triggerAttach=!0},render:function(){return this._ensureViewIsIntact(),this.triggerMethod("before:render",this),this._renderChildren(),this.isRendered=!0,this.triggerMethod("render",this),this},reorder:function(){var a=this.children,b=this._filteredSortedModels(),d=c.some(b,function(b){return!a.findByModel(b)});if(d)this.render();else{var e=c.map(b,function(b,c){var d=a.findByModel(b);return d._index=c,d.el}),f=a.filter(function(a){return!c.contains(e,a.el)});this.triggerMethod("before:reorder"),this._appendReorderedChildren(e),c.each(f,this.removeChildView,this),this.checkEmpty(),this.triggerMethod("reorder")}},resortView:function(){f.getOption(this,"reorderOnSort")?this.reorder():this.render()},_sortViews:function(){var a=this._filteredSortedModels(),b=c.find(a,function(a,b){var c=this.children.findByModel(a);return!c||c._index!==b},this);b&&this.resortView()},_emptyViewIndex:-1,_appendReorderedChildren:function(a){this.$el.append(a)},_renderChildren:function(){this.destroyEmptyView(),this.destroyChildren({checkEmpty:!1}),this.isEmpty(this.collection)?this.showEmptyView():(this.triggerMethod("before:render:collection",this),this.startBuffering(),this.showCollection(),this.endBuffering(),this.triggerMethod("render:collection",this),this.children.isEmpty()&&this.getOption("filter")&&this.showEmptyView())},showCollection:function(){var a,b=this._filteredSortedModels();c.each(b,function(b,c){a=this.getChildView(b),this.addChild(b,a,c)},this)},_filteredSortedModels:function(a){var b=this.getViewComparator(),d=this.collection.models;if(a=Math.min(Math.max(a,0),d.length-1),b){var e;a&&(e=d[a],d=d.slice(0,a).concat(d.slice(a+1))),d=this._sortModelsBy(d,b),e&&d.splice(a,0,e)}return this.getOption("filter")&&(d=c.filter(d,function(a,b){return this._shouldAddChild(a,b)},this)),d},_sortModelsBy:function(a,b){return"string"==typeof b?c.sortBy(a,function(a){return a.get(b)},this):1===b.length?c.sortBy(a,b,this):a.sort(c.bind(b,this))},showEmptyView:function(){var a=this.getEmptyView();if(a&&!this._showingEmptyView){this.triggerMethod("before:render:empty"),this._showingEmptyView=!0;var c=new b.Model;this.addEmptyView(c,a),this.triggerMethod("render:empty")}},destroyEmptyView:function(){this._showingEmptyView&&(this.triggerMethod("before:remove:empty"),this.destroyChildren(),delete this._showingEmptyView,this.triggerMethod("remove:empty"))},getEmptyView:function(){return this.getOption("emptyView")},addEmptyView:function(a,b){var d,e=this._isShown&&!this.isBuffering&&f.isNodeAttached(this.el),g=this.getOption("emptyViewOptions")||this.getOption("childViewOptions");c.isFunction(g)&&(g=g.call(this,a,this._emptyViewIndex));var h=this.buildChildView(a,b,g);h._parent=this,this.proxyChildEvents(h),h.once("render",function(){this._isShown&&f.triggerMethodOn(h,"before:show",h),e&&this._triggerBeforeAttach&&(d=this._getViewAndNested(h),this._triggerMethodMany(d,this,"before:attach"))},this),this.children.add(h),this.renderChildView(h,this._emptyViewIndex),e&&this._triggerAttach&&(d=this._getViewAndNested(h),this._triggerMethodMany(d,this,"attach")),this._isShown&&f.triggerMethodOn(h,"show",h)},getChildView:function(a){var b=this.getOption("childView");if(!b)throw new f.Error({name:"NoChildViewError",message:'A "childView" must be specified'});return b},addChild:function(a,b,c){var d=this.getOption("childViewOptions");d=f._getValue(d,this,[a,c]);var e=this.buildChildView(a,b,d);return this._updateIndices(e,!0,c),this.triggerMethod("before:add:child",e),this._addChildView(e,c),this.triggerMethod("add:child",e),e._parent=this,e},_updateIndices:function(a,b,c){this.getOption("sort")&&(b&&(a._index=c),this.children.each(function(c){c._index>=a._index&&(c._index+=b?1:-1)}))},_addChildView:function(a,b){var c,d=this._isShown&&!this.isBuffering&&f.isNodeAttached(this.el);this.proxyChildEvents(a),a.once("render",function(){this._isShown&&!this.isBuffering&&f.triggerMethodOn(a,"before:show",a),d&&this._triggerBeforeAttach&&(c=this._getViewAndNested(a),this._triggerMethodMany(c,this,"before:attach"))},this),this.children.add(a),this.renderChildView(a,b),d&&this._triggerAttach&&(c=this._getViewAndNested(a),this._triggerMethodMany(c,this,"attach")),this._isShown&&!this.isBuffering&&f.triggerMethodOn(a,"show",a)},renderChildView:function(a,b){return a.supportsRenderLifecycle||f.triggerMethodOn(a,"before:render",a),a.render(),a.supportsRenderLifecycle||f.triggerMethodOn(a,"render",a),this.attachHtml(this,a,b),a},buildChildView:function(a,b,d){var e=c.extend({model:a},d),g=new b(e);return f.MonitorDOMRefresh(g),g},removeChildView:function(a){return a?(this.triggerMethod("before:remove:child",a),a.supportsDestroyLifecycle||f.triggerMethodOn(a,"before:destroy",a),a.destroy?a.destroy():a.remove(),a.supportsDestroyLifecycle||f.triggerMethodOn(a,"destroy",a),delete a._parent,this.stopListening(a),this.children.remove(a),this.triggerMethod("remove:child",a),this._updateIndices(a,!1),a):a},isEmpty:function(){return!this.collection||0===this.collection.length},checkEmpty:function(){this.isEmpty(this.collection)&&this.showEmptyView()},attachBuffer:function(a,b){a.$el.append(b)},_createBuffer:function(){var a=document.createDocumentFragment();return c.each(this._bufferedChildren,function(b){a.appendChild(b.el)}),a},attachHtml:function(a,b,c){a.isBuffering?a._bufferedChildren.splice(c,0,b):a._insertBefore(b,c)||a._insertAfter(b)},_insertBefore:function(a,b){var c,d=this.getOption("sort")&&b<this.children.length-1;return d&&(c=this.children.find(function(a){return a._index===b+1})),c?(c.$el.before(a.el),!0):!1},_insertAfter:function(a){this.$el.append(a.el)},_initChildViewStorage:function(){this.children=new b.ChildViewContainer},destroy:function(){return this.isDestroyed?this:(this.triggerMethod("before:destroy:collection"),this.destroyChildren({checkEmpty:!1}),this.triggerMethod("destroy:collection"),f.View.prototype.destroy.apply(this,arguments))},destroyChildren:function(a){var b=a||{},d=!0,e=this.children.map(c.identity);return c.isUndefined(b.checkEmpty)||(d=b.checkEmpty),this.children.each(this.removeChildView,this),d&&this.checkEmpty(),e},_shouldAddChild:function(a,b){var d=this.getOption("filter");return!c.isFunction(d)||d.call(this,a,b,this.collection)},proxyChildEvents:function(a){var b=this.getOption("childViewEventPrefix");this.listenTo(a,"all",function(){var d=c.toArray(arguments),e=d[0],f=this.normalizeMethods(c.result(this,"childEvents"));
d[0]=b+":"+e,d.splice(1,0,a),"undefined"!=typeof f&&c.isFunction(f[e])&&f[e].apply(this,d.slice(1)),this.triggerMethod.apply(this,d)})},_getImmediateChildren:function(){return c.values(this.children._views)},_getViewAndNested:function(a){return[a].concat(c.result(a,"_getNestedViews")||[])},getViewComparator:function(){return this.getOption("viewComparator")}}),f.CompositeView=f.CollectionView.extend({constructor:function(){f.CollectionView.apply(this,arguments)},_initialEvents:function(){this.collection&&(this.listenTo(this.collection,"add",this._onCollectionAdd),this.listenTo(this.collection,"remove",this._onCollectionRemove),this.listenTo(this.collection,"reset",this._renderChildren),this.getOption("sort")&&this.listenTo(this.collection,"sort",this._sortViews))},getChildView:function(a){var b=this.getOption("childView")||this.constructor;return b},serializeData:function(){var a={};return this.model&&(a=c.partial(this.serializeModel,this.model).apply(this,arguments)),a},render:function(){return this._ensureViewIsIntact(),this._isRendering=!0,this.resetChildViewContainer(),this.triggerMethod("before:render",this),this._renderTemplate(),this._renderChildren(),this._isRendering=!1,this.isRendered=!0,this.triggerMethod("render",this),this},_renderChildren:function(){(this.isRendered||this._isRendering)&&f.CollectionView.prototype._renderChildren.call(this)},_renderTemplate:function(){var a={};a=this.serializeData(),a=this.mixinTemplateHelpers(a),this.triggerMethod("before:render:template");var b=this.getTemplate(),c=f.Renderer.render(b,a,this);this.attachElContent(c),this.bindUIElements(),this.triggerMethod("render:template")},attachElContent:function(a){return this.$el.html(a),this},attachBuffer:function(a,b){var c=this.getChildViewContainer(a);c.append(b)},_insertAfter:function(a){var b=this.getChildViewContainer(this,a);b.append(a.el)},_appendReorderedChildren:function(a){var b=this.getChildViewContainer(this);b.append(a)},getChildViewContainer:function(a,b){if(a.$childViewContainer)return a.$childViewContainer;var c,d=f.getOption(a,"childViewContainer");if(d){var e=f._getValue(d,a);if(c="@"===e.charAt(0)&&a.ui?a.ui[e.substr(4)]:a.$(e),c.length<=0)throw new f.Error({name:"ChildViewContainerMissingError",message:'The specified "childViewContainer" was not found: '+a.childViewContainer})}else c=a.$el;return a.$childViewContainer=c,c},resetChildViewContainer:function(){this.$childViewContainer&&(this.$childViewContainer=void 0)}}),f.LayoutView=f.ItemView.extend({regionClass:f.Region,options:{destroyImmediate:!1},childViewEventPrefix:"childview",constructor:function(a){a=a||{},this._firstRender=!0,this._initializeRegions(a),f.ItemView.call(this,a)},render:function(){return this._ensureViewIsIntact(),this._firstRender?this._firstRender=!1:this._reInitializeRegions(),f.ItemView.prototype.render.apply(this,arguments)},destroy:function(){return this.isDestroyed?this:(this.getOption("destroyImmediate")===!0&&this.$el.remove(),this.regionManager.destroy(),f.ItemView.prototype.destroy.apply(this,arguments))},showChildView:function(a,b,d){var e=this.getRegion(a);return e.show.apply(e,c.rest(arguments))},getChildView:function(a){return this.getRegion(a).currentView},addRegion:function(a,b){var c={};return c[a]=b,this._buildRegions(c)[a]},addRegions:function(a){return this.regions=c.extend({},this.regions,a),this._buildRegions(a)},removeRegion:function(a){return delete this.regions[a],this.regionManager.removeRegion(a)},getRegion:function(a){return this.regionManager.get(a)},getRegions:function(){return this.regionManager.getRegions()},_buildRegions:function(a){var b={regionClass:this.getOption("regionClass"),parentEl:c.partial(c.result,this,"el")};return this.regionManager.addRegions(a,b)},_initializeRegions:function(a){var b;this._initRegionManager(),b=f._getValue(this.regions,this,[a])||{};var d=this.getOption.call(a,"regions");d=f._getValue(d,this,[a]),c.extend(b,d),b=this.normalizeUIValues(b,["selector","el"]),this.addRegions(b)},_reInitializeRegions:function(){this.regionManager.invoke("reset")},getRegionManager:function(){return new f.RegionManager},_initRegionManager:function(){this.regionManager=this.getRegionManager(),this.regionManager._parent=this,this.listenTo(this.regionManager,"before:add:region",function(a){this.triggerMethod("before:add:region",a)}),this.listenTo(this.regionManager,"add:region",function(a,b){this[a]=b,this.triggerMethod("add:region",a,b)}),this.listenTo(this.regionManager,"before:remove:region",function(a){this.triggerMethod("before:remove:region",a)}),this.listenTo(this.regionManager,"remove:region",function(a,b){delete this[a],this.triggerMethod("remove:region",a,b)})},_getImmediateChildren:function(){return c.chain(this.regionManager.getRegions()).pluck("currentView").compact().value()}}),f.Behavior=f.Object.extend({constructor:function(a,b){this.view=b,this.defaults=c.result(this,"defaults")||{},this.options=c.extend({},this.defaults,a),this.ui=c.extend({},c.result(b,"ui"),c.result(this,"ui")),f.Object.apply(this,arguments)},$:function(){return this.view.$.apply(this.view,arguments)},destroy:function(){return this.stopListening(),this},proxyViewProperties:function(a){this.$el=a.$el,this.el=a.el}}),f.Behaviors=function(a,b){function c(a,d){return b.isObject(a.behaviors)?(d=c.parseBehaviors(a,d||b.result(a,"behaviors")),c.wrap(a,d,b.keys(g)),d):{}}function d(a,b){this._view=a,this._behaviors=b,this._triggers={}}function e(a){return a._uiBindings||a.ui}var f=/^(\S+)\s*(.*)$/,g={behaviorTriggers:function(a,b){var c=new d(this,b);return c.buildBehaviorTriggers()},behaviorEvents:function(c,d){var g={};return b.each(d,function(c,d){var h={},i=b.clone(b.result(c,"events"))||{};i=a.normalizeUIKeys(i,e(c));var j=0;b.each(i,function(a,e){var g=e.match(f),i=g[1]+"."+[this.cid,d,j++," "].join(""),k=g[2],l=i+k,m=b.isFunction(a)?a:c[a];m&&(h[l]=b.bind(m,c))},this),g=b.extend(g,h)},this),g}};return b.extend(c,{behaviorsLookup:function(){throw new a.Error({message:"You must define where your behaviors are stored.",url:"marionette.behaviors.html#behaviorslookup"})},getBehaviorClass:function(b,d){return b.behaviorClass?b.behaviorClass:a._getValue(c.behaviorsLookup,this,[b,d])[d]},parseBehaviors:function(a,d){return b.chain(d).map(function(d,e){var f=c.getBehaviorClass(d,e),g=new f(d,a),h=c.parseBehaviors(a,b.result(g,"behaviors"));return[g].concat(h)}).flatten().value()},wrap:function(a,c,d){b.each(d,function(d){a[d]=b.partial(g[d],a[d],c)})}}),b.extend(d.prototype,{buildBehaviorTriggers:function(){return b.each(this._behaviors,this._buildTriggerHandlersForBehavior,this),this._triggers},_buildTriggerHandlersForBehavior:function(c,d){var f=b.clone(b.result(c,"triggers"))||{};f=a.normalizeUIKeys(f,e(c)),b.each(f,b.bind(this._setHandlerForBehavior,this,c,d))},_setHandlerForBehavior:function(a,b,c,d){var e=d.replace(/^\S+/,function(a){return a+".behaviortriggers"+b});this._triggers[e]=this._view._buildViewTrigger(c)}}),c}(f,c),f.AppRouter=b.Router.extend({constructor:function(a){this.options=a||{},b.Router.apply(this,arguments);var c=this.getOption("appRoutes"),d=this._getController();this.processAppRoutes(d,c),this.on("route",this._processOnRoute,this)},appRoute:function(a,b){var c=this._getController();this._addAppRoute(c,a,b)},_processOnRoute:function(a,b){if(c.isFunction(this.onRoute)){var d=c.invert(this.getOption("appRoutes"))[a];this.onRoute(a,d,b)}},processAppRoutes:function(a,b){if(b){var d=c.keys(b).reverse();c.each(d,function(c){this._addAppRoute(a,c,b[c])},this)}},_getController:function(){return this.getOption("controller")},_addAppRoute:function(a,b,d){var e=a[d];if(!e)throw new f.Error('Method "'+d+'" was not found on the controller');this.route(b,d,c.bind(e,a))},mergeOptions:f.mergeOptions,getOption:f.proxyGetOption,triggerMethod:f.triggerMethod,bindEntityEvents:f.proxyBindEntityEvents,unbindEntityEvents:f.proxyUnbindEntityEvents}),f.Application=f.Object.extend({constructor:function(a){this._initializeRegions(a),this._initCallbacks=new f.Callbacks,this.submodules={},c.extend(this,a),this._initChannel(),f.Object.apply(this,arguments)},execute:function(){this.commands.execute.apply(this.commands,arguments)},request:function(){return this.reqres.request.apply(this.reqres,arguments)},addInitializer:function(a){this._initCallbacks.add(a)},start:function(a){this.triggerMethod("before:start",a),this._initCallbacks.run(a,this),this.triggerMethod("start",a)},addRegions:function(a){return this._regionManager.addRegions(a)},emptyRegions:function(){return this._regionManager.emptyRegions()},removeRegion:function(a){return this._regionManager.removeRegion(a)},getRegion:function(a){return this._regionManager.get(a)},getRegions:function(){return this._regionManager.getRegions()},module:function(a,b){var d=f.Module.getClass(b),e=c.toArray(arguments);return e.unshift(this),d.create.apply(d,e)},getRegionManager:function(){return new f.RegionManager},_initializeRegions:function(a){var b=c.isFunction(this.regions)?this.regions(a):this.regions||{};this._initRegionManager();var d=f.getOption(a,"regions");return c.isFunction(d)&&(d=d.call(this,a)),c.extend(b,d),this.addRegions(b),this},_initRegionManager:function(){this._regionManager=this.getRegionManager(),this._regionManager._parent=this,this.listenTo(this._regionManager,"before:add:region",function(){f._triggerMethod(this,"before:add:region",arguments)}),this.listenTo(this._regionManager,"add:region",function(a,b){this[a]=b,f._triggerMethod(this,"add:region",arguments)}),this.listenTo(this._regionManager,"before:remove:region",function(){f._triggerMethod(this,"before:remove:region",arguments)}),this.listenTo(this._regionManager,"remove:region",function(a){delete this[a],f._triggerMethod(this,"remove:region",arguments)})},_initChannel:function(){this.channelName=c.result(this,"channelName")||"global",this.channel=c.result(this,"channel")||b.Wreqr.radio.channel(this.channelName),this.vent=c.result(this,"vent")||this.channel.vent,this.commands=c.result(this,"commands")||this.channel.commands,this.reqres=c.result(this,"reqres")||this.channel.reqres}}),f.Module=function(a,b,d){this.moduleName=a,this.options=c.extend({},this.options,d),this.initialize=d.initialize||this.initialize,this.submodules={},this._setupInitializersAndFinalizers(),this.app=b,c.isFunction(this.initialize)&&this.initialize(a,b,this.options)},f.Module.extend=f.extend,c.extend(f.Module.prototype,b.Events,{startWithParent:!0,initialize:function(){},addInitializer:function(a){this._initializerCallbacks.add(a)},addFinalizer:function(a){this._finalizerCallbacks.add(a)},start:function(a){this._isInitialized||(c.each(this.submodules,function(b){b.startWithParent&&b.start(a)}),this.triggerMethod("before:start",a),this._initializerCallbacks.run(a,this),this._isInitialized=!0,this.triggerMethod("start",a))},stop:function(){this._isInitialized&&(this._isInitialized=!1,this.triggerMethod("before:stop"),c.invoke(this.submodules,"stop"),this._finalizerCallbacks.run(void 0,this),this._initializerCallbacks.reset(),this._finalizerCallbacks.reset(),this.triggerMethod("stop"))},addDefinition:function(a,b){this._runModuleDefinition(a,b)},_runModuleDefinition:function(a,d){if(a){var e=c.flatten([this,this.app,b,f,b.$,c,d]);a.apply(this,e)}},_setupInitializersAndFinalizers:function(){this._initializerCallbacks=new f.Callbacks,this._finalizerCallbacks=new f.Callbacks},triggerMethod:f.triggerMethod}),c.extend(f.Module,{create:function(a,b,d){var e=a,f=c.drop(arguments,3);b=b.split(".");var g=b.length,h=[];return h[g-1]=d,c.each(b,function(b,c){var g=e;e=this._getModule(g,b,a,d),this._addModuleDefinition(g,e,h[c],f)},this),e},_getModule:function(a,b,d,e,f){var g=c.extend({},e),h=this.getClass(e),i=a[b];return i||(i=new h(b,d,g),a[b]=i,a.submodules[b]=i),i},getClass:function(a){var b=f.Module;return a?a.prototype instanceof b?a:a.moduleClass||b:b},_addModuleDefinition:function(a,b,c,d){var e=this._getDefine(c),f=this._getStartWithParent(c,b);e&&b.addDefinition(e,d),this._addStartWithParent(a,b,f)},_getStartWithParent:function(a,b){var d;return c.isFunction(a)&&a.prototype instanceof f.Module?(d=b.constructor.prototype.startWithParent,c.isUndefined(d)?!0:d):c.isObject(a)?(d=a.startWithParent,c.isUndefined(d)?!0:d):!0},_getDefine:function(a){return!c.isFunction(a)||a.prototype instanceof f.Module?c.isObject(a)?a.define:null:a},_addStartWithParent:function(a,b,c){b.startWithParent=b.startWithParent&&c,b.startWithParent&&!b.startWithParentIsConfigured&&(b.startWithParentIsConfigured=!0,a.addInitializer(function(a){b.startWithParent&&b.start(a)}))}}),f});
//# sourceMappingURL=backbone.marionette.min.js.map
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.comalatech.workflow:cw-content', location = 'templates/dist/content-workflow.js' */
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;