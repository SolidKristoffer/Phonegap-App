/*!
 * jQuery UI Widget 1.8.23
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Widget
 */
(function($,u){if($.cleanData){var _=$.cleanData;$.cleanData=function(b){for(var i=0,c;(c=b[i])!=null;i++){try{$(c).triggerHandler("remove")}catch(e){}}_(b)}}else{var a=$.fn.remove;$.fn.remove=function(s,k){return this.each(function(){if(!k){if(!s||$.filter(s,[this]).length){$("*",this).add([this]).each(function(){try{$(this).triggerHandler("remove")}catch(e){}})}}return a.call($(this),s,k)})}}$.widget=function(n,b,p){var c=n.split(".")[0],f;n=n.split(".")[1];f=c+"-"+n;if(!p){p=b;b=$.Widget}$.expr[":"][f]=function(e){return!!$.data(e,n)};$[c]=$[c]||{};$[c][n]=function(o,e){if(arguments.length){this._createWidget(o,e)}};var d=new b();d.options=$.extend(true,{},d.options);$[c][n].prototype=$.extend(true,d,{namespace:c,widgetName:n,widgetEventPrefix:$[c][n].prototype.widgetEventPrefix||n,widgetBaseClass:f},p);$.widget.bridge(n,$[c][n])};$.widget.bridge=function(n,o){$.fn[n]=function(b){var i=typeof b==="string",c=Array.prototype.slice.call(arguments,1),r=this;b=!i&&c.length?$.extend.apply(null,[true,b].concat(c)):b;if(i&&b.charAt(0)==="_"){return r}if(i){this.each(function(){var d=$.data(this,n),m=d&&$.isFunction(d[b])?d[b].apply(d,c):d;if(m!==d&&m!==u){r=m;return false}})}else{this.each(function(){var d=$.data(this,n);if(d){d.option(b||{})._init()}else{$.data(this,n,new o(b,this))}})}return r}};$.Widget=function(o,e){if(arguments.length){this._createWidget(o,e)}};$.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",options:{disabled:false},_createWidget:function(o,e){$.data(e,this.widgetName,this);this.element=$(e);this.options=$.extend(true,{},this.options,this._getCreateOptions(),o);var s=this;this.element.bind("remove."+this.widgetName,function(){s.destroy()});this._create();this._trigger("create");this._init()},_getCreateOptions:function(){return $.metadata&&$.metadata.get(this.element[0])[this.widgetName]},_create:function(){},_init:function(){},destroy:function(){this.element.unbind("."+this.widgetName).removeData(this.widgetName);this.widget().unbind("."+this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass+"-disabled "+"ui-state-disabled")},widget:function(){return this.element},option:function(k,v){var o=k;if(arguments.length===0){return $.extend({},this.options)}if(typeof k==="string"){if(v===u){return this.options[k]}o={};o[k]=v}this._setOptions(o);return this},_setOptions:function(o){var s=this;$.each(o,function(k,v){s._setOption(k,v)});return this},_setOption:function(k,v){this.options[k]=v;if(k==="disabled"){this.widget()[v?"addClass":"removeClass"](this.widgetBaseClass+"-disabled"+" "+"ui-state-disabled").attr("aria-disabled",v)}return this},enable:function(){return this._setOption("disabled",false)},disable:function(){return this._setOption("disabled",true)},_trigger:function(t,e,d){var p,o,c=this.options[t];d=d||{};e=$.Event(e);e.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase();e.target=this.element[0];o=e.originalEvent;if(o){for(p in o){if(!(p in e)){e[p]=o[p]}}}this.element.trigger(e,d);return!($.isFunction(c)&&c.call(this.element[0],e,d)===false||e.isDefaultPrevented())}}})(jQuery);

