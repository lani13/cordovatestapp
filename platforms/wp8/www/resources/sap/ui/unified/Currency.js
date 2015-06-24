/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2015 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['jquery.sap.global','sap/ui/core/Control','sap/ui/core/LocaleData','sap/ui/core/format/NumberFormat','./library'],function(q,C,L,N,l){"use strict";var a=C.extend("sap.ui.unified.Currency",{metadata:{library:"sap.ui.unified",properties:{value:{type:"float",group:"Appearance",defaultValue:0},currency:{type:"string",group:"Appearance",defaultValue:null},maxPrecision:{type:"int",group:"Appearance",defaultValue:3},useSymbol:{type:"boolean",group:"Appearance",defaultValue:true}}}});a.FIGURE_SPACE='\u2007';a.PUNCTUATION_SPACE='\u2008';a.prototype.init=function(){this._oFormat=N.getCurrencyInstance({showMeasure:false});};a.prototype.getFormattedValue=function(){if(this.getCurrency()==="*"){return"";}var p=this.getMaxPrecision()-this._oFormat.oLocaleData.getCurrencyDigits(this.getCurrency());var v=this._oFormat.format(this.getValue(),this.getCurrency());if(p==this.getMaxPrecision()&&this.getMaxPrecision()>0){v+=a.PUNCTUATION_SPACE;}if(p>0){v=q.sap.padRight(v,a.FIGURE_SPACE,v.length+p);}else if(p<0){v=v.substr(0,v.length+p);}return v;};a.prototype.getCurrencySymbol=function(){return this._oFormat.oLocaleData.getCurrencySymbol(this.getCurrency());};a.prototype.setValue=function(v){var h=this._hasValue(),H=this.$().hasClass("sapUiUfdCurrencyNoVal");if(h===H){this.invalidate();}this.setProperty("value",v);return this;};a.prototype._hasValue=function(){var v=this.getBinding("value"),h=v!==undefined,H=h?v.getValue()!==undefined:true;return H;};return a;},true);
