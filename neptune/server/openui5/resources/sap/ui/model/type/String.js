/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * (c) Copyright 2009-2013 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.ui.model.type.String");jQuery.sap.require("sap.ui.model.SimpleType");jQuery.sap.require("sap.ui.core.format.NumberFormat");sap.ui.model.SimpleType.extend("sap.ui.model.type.String",{constructor:function(){sap.ui.model.SimpleType.apply(this,arguments);this.sName="String";if(this.oConstraints.search&&typeof this.oConstraints.search=="string"){this.oConstraints.search=new RegExp(this.oConstraints.search)}}});
sap.ui.model.type.String.prototype.formatValue=function(v,i){if(v==undefined||v==null){return null}switch(i){case"string":return v;case"int":var r=parseInt(v,10);if(isNaN(r)){throw new sap.ui.model.FormatException(v+" is not a valid int value")}return r;case"float":var R=parseFloat(v);if(isNaN(R)){throw new sap.ui.model.FormatException(v+" is not a valid float value")}return R;case"boolean":if(v.toLowerCase()=="true"||v=="X"){return true}if(v.toLowerCase()=="false"||v==""){return false}throw new sap.ui.model.FormatException(v+" is not a valid boolean value");default:throw new sap.ui.model.FormatException("Don't know how to format String to "+i)}};
sap.ui.model.type.String.prototype.parseValue=function(v,i){var r;switch(i){case"string":return v;case"boolean":case"int":case"float":return v.toString();default:throw new sap.ui.model.ParseException("Don't know how to parse String from "+i)}};
sap.ui.model.type.String.prototype.validateValue=function(v){if(this.oConstraints){var V=[];jQuery.each(this.oConstraints,function(n,c){switch(n){case"maxLength":if(v.length>c){V.push("maxLength")}break;case"minLength":if(v.length<c){V.push("minLength")}break;case"startsWith":if(!jQuery.sap.startsWith(v,c)){V.push("startsWith")}break;case"startsWithIgnoreCase":if(!jQuery.sap.startsWithIgnoreCase(v,c)){V.push("startsWithIgnoreCase")}break;case"endsWith":if(!jQuery.sap.endsWith(v,c)){V.push("endsWith")}break;case"endsWithIgnoreCase":if(!jQuery.sap.endsWithIgnoreCase(v,c)){V.push("endsWithIgnoreCase")}break;case"contains":if(v.indexOf(c)==-1){V.push("contains")}break;case"equals":if(v!=c){V.push("equals")}break;case"search":if(v.search(c)==-1){V.push("search")}break}});if(V.length>0){throw new sap.ui.model.ValidateException("Validation of type constraints failed",V)}}};

