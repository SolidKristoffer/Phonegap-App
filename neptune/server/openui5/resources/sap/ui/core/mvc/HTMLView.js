/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * (c) Copyright 2009-2013 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.ui.core.mvc.HTMLView");jQuery.sap.require("sap.ui.core.library");jQuery.sap.require("sap.ui.core.mvc.View");sap.ui.core.mvc.View.extend("sap.ui.core.mvc.HTMLView",{metadata:{library:"sap.ui.core"}});jQuery.sap.require("sap.ui.core.DeclarativeSupport");jQuery.sap.require("sap.ui.core.RenderManager");(function(){sap.ui.htmlview=function(i,v){return sap.ui.view(i,v,sap.ui.core.mvc.ViewType.HTML)};sap.ui.core.mvc.HTMLView._sType=sap.ui.core.mvc.ViewType.HTML;sap.ui.core.mvc.HTMLView._mTemplates={};sap.ui.core.mvc.HTMLView._mAllowedSettings={"viewName":true,"controller":true,"viewContent":true,"controllerName":true,"resourceBundleName":true,"resourceBundleUrl":true,"resourceBundleLocale":true,"resourceBundleAlias":true};sap.ui.core.mvc.HTMLView._getTemplate=function(t){var u=this._getViewUrl(t);var h=this._mTemplates[u];if(!h){h=this._loadTemplate(t);this._mTemplates[u]=h}return h};sap.ui.core.mvc.HTMLView.prototype.getControllerName=function(){return this._controllerName};sap.ui.core.mvc.HTMLView._getViewUrl=function(t){return jQuery.sap.getModulePath(t,".view.html")};sap.ui.core.mvc.HTMLView._loadTemplate=function(t){var r=jQuery.sap.getResourceName(t,".view.html");return jQuery.sap.loadResource(r)};sap.ui.core.mvc.HTMLView.prototype.initViewSettings=function(s){if(!s){throw new Error("mSettings must be given")}if(s.viewName&&s.viewContent){throw new Error("View name and view content are given. There is no point in doing this, so please decide.")}else if(!s.viewName&&!s.viewContent){throw new Error("Neither view name nor view content is given. One of them is required.")}var h=s.viewContent||sap.ui.core.mvc.HTMLView._getTemplate(s.viewName);this._oTemplate=document.createElement("div");var h=sap.ui.core.RenderManager.prepareHTML5(h);if(typeof h==="string"){this._oTemplate.innerHTML=h}else{var n=h;var f=document.createDocumentFragment();for(var i=0;i<n.length;i++){f.appendChild(n.item(i))}this._oTemplate.appendChild(f)}var m=this._oTemplate.getElementsByTagName("template")[0];var p=this.getMetadata().getAllProperties();if(m){var a=this;var D=sap.ui.core.DeclarativeSupport;jQuery.each(m.attributes,function(I,A){var N=D.convertAttributeToSettingName(A.name,a.getId());var v=A.value;var P=p[N];if(!s[N]){if(P){s[N]=D.convertValueToType(D.getPropertyDataType(P),v)}else if(sap.ui.core.mvc.HTMLView._mAllowedSettings[N]){s[N]=v}}});this._oTemplate=m}if(this._oTemplate.content){var f=this._oTemplate.content;this._oTemplate=document.createElement("div");this._oTemplate.appendChild(f)}if(s.controllerName){this._controllerName=s.controllerName}if((s.resourceBundleName||s.resourceBundleUrl)&&(!s.models||!s.models[s.resourceBundleAlias])){var b=new sap.ui.model.resource.ResourceModel({bundleName:s.resourceBundleName,bundleUrl:s.resourceBundleUrl,bundleLocale:s.resourceBundleLocale});this.setModel(b,s.resourceBundleAlias)}};sap.ui.core.mvc.HTMLView.prototype.onControllerConnected=function(c){var s=this;sap.ui.base.ManagedObject.runWithPreprocessors(function(){sap.ui.core.DeclarativeSupport.compile(s._oTemplate,s)})};sap.ui.core.mvc.HTMLView.prototype.exit=function(){this._oTemplate=null;sap.ui.core.mvc.View.prototype.exit.call(this);if(this._connectedControls){for(var i=0;i<this._connectedControls.length;i++){this._connectedControls[i].destroy()}this._connectedControls=null}};sap.ui.core.mvc.HTMLView.prototype.connectControl=function(c){this._connectedControls=this._connectedControls||[];this._connectedControls.push(c)}}());

