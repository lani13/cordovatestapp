/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2015 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['jquery.sap.global','sap/ui/core/Control','sap/ui/core/delegate/ItemNavigation','sap/ui/unified/library'],function(q,C,I,l){"use strict";var Y=C.extend("sap.ui.unified.calendar.YearPicker",{metadata:{library:"sap.ui.unified",properties:{year:{type:"int",group:"Misc",defaultValue:2000}},events:{select:{}}}});(function(){Y.prototype.init=function(){this._iColumns=4;};Y.prototype.onAfterRendering=function(){var t=this;_(t);};Y.prototype.setYear=function(y){this.setProperty("year",y,true);y=this.getProperty("year");if(y<1||y>9999){throw new Error("Property year must be between 0 and 9999; "+this);}if(this.getDomRef()){var t=this;var F=y-10;g(t,F,10);}};Y.prototype.nextPage=function(){var t=this;f(t,true,this._oItemNavigation.getFocusedIndex());return this;};Y.prototype.previousPage=function(){var t=this;f(t,false,this._oItemNavigation.getFocusedIndex());return this;};Y.prototype.onsapselect=function(E){var t=this;var i=this._oItemNavigation.getFocusedIndex();e(t,i);this.fireSelect();};function _(t){var y=t.getYear();var r=t.getDomRef();var D=t.$().find(".sapUiCalYear");var i=10;if(y>9990){i=i+y-9990;}else if(y<=10){i=i-11+y;}if(!t._oItemNavigation){t._oItemNavigation=new I();t._oItemNavigation.attachEvent(I.Events.AfterFocus,a,t);t._oItemNavigation.attachEvent(I.Events.FocusAgain,b,t);t._oItemNavigation.attachEvent(I.Events.BorderReached,d,t);t.addDelegate(t._oItemNavigation);t._oItemNavigation.setHomeEndColumnMode(true,true);t._oItemNavigation.setDisabledModifiers({sapnext:["alt"],sapprevious:["alt"],saphome:["alt"],sapend:["alt"]});}t._oItemNavigation.setRootDomRef(r);t._oItemNavigation.setItemDomRefs(D);t._oItemNavigation.setCycling(false);t._oItemNavigation.setColumns(t._iColumns,true);t._oItemNavigation.setFocusedIndex(i);t._oItemNavigation.setPageSize(D.length);}function a(o){var i=o.getParameter("index");var E=o.getParameter("event");if(!E){return;}if(E.type=="mousedown"){var t=this;c(t,E,i);}}function b(o){var i=o.getParameter("index");var E=o.getParameter("event");if(!E){return;}if(E.type=="mousedown"){var t=this;c(t,E,i);}}function c(t,E,i){e(t,i);t.fireSelect();E.preventDefault();E.setMark("cancelAutoClose");}function d(o){var E=o.getParameter("event");if(E.type){var t=this;switch(E.type){case"sapnext":case"sapnextmodifiers":if(E.keyCode==q.sap.KeyCodes.ARROW_DOWN){f(t,true,this._oItemNavigation.getFocusedIndex()-16);}else{f(t,true,0);}break;case"sapprevious":case"sappreviousmodifiers":if(E.keyCode==q.sap.KeyCodes.ARROW_UP){f(t,false,16+this._oItemNavigation.getFocusedIndex());}else{f(t,false,19);}break;case"sappagedown":f(t,true,this._oItemNavigation.getFocusedIndex());break;case"sappageup":f(t,false,this._oItemNavigation.getFocusedIndex());break;default:break;}}}function e(t,h){var D=t._oItemNavigation.getItemDomRefs();var y=q(D[h]).text();var $;var s=t.getId()+"-y"+y;for(var i=0;i<D.length;i++){$=q(D[i]);if($.attr("id")==s){$.addClass("sapUiCalYearSel");}else{$.removeClass("sapUiCalYearSel");}}t.setProperty("year",parseInt(y,10),true);}function f(t,F,s){var D=t._oItemNavigation.getItemDomRefs();var i=parseInt(q(D[0]).text(),10);if(F){i=i+20;}else{i=i-20;}g(t,i,s);}function g(t,F,s){var h=t.getYear().toString();if(F>=9980){s=s+F-9980;F=9980;}else if(F<1){s=s+F-1;F=1;}var D=t._oItemNavigation.getItemDomRefs();var y=F;for(var i=0;i<D.length;i++){var $=q(D[i]);$.attr("id",t.getId()+"-y"+y);$.text(y);if($.hasClass("sapUiCalYearSel")&&$.text()!=h){$.removeClass("sapUiCalYearSel");}else if(!$.hasClass("sapUiCalYearSel")&&$.text()==h){$.addClass("sapUiCalYearSel");}y++;}t._oItemNavigation.focusItem(s);}}());return Y;},true);
