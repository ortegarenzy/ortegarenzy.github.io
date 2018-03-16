
/*
 * This file is part of Movie App
 * Copyright (c) 2018
 * All rights reserved.
 */

"use strict";

var AppWebDiscoverMoviesWidget = function() {
	CaveUILayerWidget.call(this);
	this.scroller = null;
	this.grid = null;
};

AppWebDiscoverMoviesWidget.prototype = (function(o) { function F() {}; F.prototype = o; return(new F()); }) (CaveUILayerWidget.prototype);
AppWebDiscoverMoviesWidget.prototype.constructor = AppWebDiscoverMoviesWidget;

AppWebDiscoverMoviesWidget.prototype._t = {
	"AppWebDiscoverMoviesWidget" : true,
	"CaveUIDisplayAwareWidget" : true,
	"CaveUITitledWidget" : true,
	"CaveUILayerWidget" : true,
	"CaveUIContainerWidget" : true,
	"CaveUIParentAwareWidget" : true,
	"CaveUIWidgetWithLayout" : true,
	"CaveUIWidget" : true,
	"CaveUIHeightAwareWidget" : true
};

AppWebDiscoverMoviesWidget.IS_INSTANCE = function(o) {
	return(o != null && o._t != null && o._t["AppWebDiscoverMoviesWidget"] === true);
};

AppWebDiscoverMoviesWidget.NEW = function() {
	var v = new AppWebDiscoverMoviesWidget();
	return(v.CTOR());
};

AppWebDiscoverMoviesWidget.prototype.CTOR = function() {
	if(CaveUILayerWidget.prototype.CTOR.call(this) == null) {
		return(null);
	}
	return(this);
};

AppWebDiscoverMoviesWidget.NEWWithGuiApplicationContext = function(context) {
	var v = new AppWebDiscoverMoviesWidget();
	return(v.CTORWithGuiApplicationContext(context));
};

AppWebDiscoverMoviesWidget.prototype.CTORWithGuiApplicationContext = function(context) {
	this.grid = null;
	this.scroller = null;
	if(CaveUILayerWidget.prototype.CTORWithGuiApplicationContext.call(this, context) == null) {
		return(null);
	}
	var thisWidget = this;
	this.scroller = CaveUIVerticalScrollerWidget.NEWWithGuiApplicationContext(context);
	this.grid = CaveUIGridWidget.NEWWithGuiApplicationContext(context);
	this.grid.setWidgetSpacing(context.getStylePixels("movie", "spacing"));
	this.grid.setWidgetMargin(context.getStylePixels("movie", "margin"));
	this.grid.setWidgetCellSize(context.getHeightValue("60mm"));
	this.scroller.addWidget(this.grid);
	this.addWidget(this.scroller);
	return(this);
};

AppWebDiscoverMoviesWidget.prototype.getWidgetTitle = function() {
	return("Discover Movies");
};

AppWebDiscoverMoviesWidget.prototype.initializeWidget = function() {
	CaveUILayerWidget.prototype.initializeWidget.call(this);
	this.grid.setMaximumCols(5);
};

AppWebDiscoverMoviesWidget.prototype.onWidgetDisplayed = function() {
	ApiAPIClient.getInstance().discoverMovies(function(response){
		var results = response.getDynamicVector("results");
		if(!(results != null)) {
			return;
		}
		var array = results.toVector();
		if(array != null) {
			var n = 0;
			var m = array.length;
			for(n = 0 ; n < m ; n++) {
				var tresult = array[n];
				var result = null;
				if((CapeDynamicMap.IS_INSTANCE && CapeDynamicMap.IS_INSTANCE(tresult))) {
					result = tresult;
				}
				if(result != null) {
					this.grid.addWidget(AppUIMovieItemWidget.NEWWithGuiApplicationContext(this.context).setWidgetData(result));
				}
			}
		}
	}.bind(this));
};

var AppWebMainContainerWidget = function() {
	CaveUINavigationWidget.call(this);
};

AppWebMainContainerWidget.prototype = (function(o) { function F() {}; F.prototype = o; return(new F()); }) (CaveUINavigationWidget.prototype);
AppWebMainContainerWidget.prototype.constructor = AppWebMainContainerWidget;

AppWebMainContainerWidget.prototype._t = {
	"AppWebMainContainerWidget" : true,
	"CaveUINavigationWidget" : true,
	"CaveUILayerWidget" : true,
	"CaveUIContainerWidget" : true,
	"CaveUIParentAwareWidget" : true,
	"CaveUIWidgetWithLayout" : true,
	"CaveUIWidget" : true,
	"CaveUIHeightAwareWidget" : true,
	"CaveUITitleContainerWidget" : true,
	"CaveKeyListener" : true
};

AppWebMainContainerWidget.IS_INSTANCE = function(o) {
	return(o != null && o._t != null && o._t["AppWebMainContainerWidget"] === true);
};

AppWebMainContainerWidget.NEW = function() {
	var v = new AppWebMainContainerWidget();
	return(v.CTOR());
};

AppWebMainContainerWidget.prototype.CTOR = function() {
	if(CaveUINavigationWidget.prototype.CTOR.call(this) == null) {
		return(null);
	}
	return(this);
};

AppWebMainContainerWidget.NEWWithGuiApplicationContext = function(context) {
	var v = new AppWebMainContainerWidget();
	return(v.CTORWithGuiApplicationContext(context));
};

AppWebMainContainerWidget.prototype.CTORWithGuiApplicationContext = function(context) {
	if(CaveUINavigationWidget.prototype.CTORWithGuiApplicationContext.call(this, context) == null) {
		return(null);
	}
	var thisWidget = this;
	this.setWidgetEnableSidebar(false);
	this.setWidgetEnableActionBar(false);
	return(this);
};

AppWebMainContainerWidget.prototype.createMainWidget = function() {
	return(AppWebSearchWidget.NEWWithGuiApplicationContext(this.context));
};

var AppWebSearchResultsWidget = function() {
	CaveUILayerWidget.call(this);
	this.widgetData = null;
	this.scroller = null;
	this.grid = null;
};

AppWebSearchResultsWidget.prototype = (function(o) { function F() {}; F.prototype = o; return(new F()); }) (CaveUILayerWidget.prototype);
AppWebSearchResultsWidget.prototype.constructor = AppWebSearchResultsWidget;

AppWebSearchResultsWidget.prototype._t = {
	"AppWebSearchResultsWidget" : true,
	"CaveUIDisplayAwareWidget" : true,
	"CaveUILayerWidget" : true,
	"CaveUIContainerWidget" : true,
	"CaveUIParentAwareWidget" : true,
	"CaveUIWidgetWithLayout" : true,
	"CaveUIWidget" : true,
	"CaveUIHeightAwareWidget" : true
};

AppWebSearchResultsWidget.IS_INSTANCE = function(o) {
	return(o != null && o._t != null && o._t["AppWebSearchResultsWidget"] === true);
};

AppWebSearchResultsWidget.NEW = function() {
	var v = new AppWebSearchResultsWidget();
	return(v.CTOR());
};

AppWebSearchResultsWidget.prototype.CTOR = function() {
	if(CaveUILayerWidget.prototype.CTOR.call(this) == null) {
		return(null);
	}
	return(this);
};

AppWebSearchResultsWidget.NEWWithGuiApplicationContext = function(context) {
	var v = new AppWebSearchResultsWidget();
	return(v.CTORWithGuiApplicationContext(context));
};

AppWebSearchResultsWidget.prototype.CTORWithGuiApplicationContext = function(context) {
	this.grid = null;
	this.scroller = null;
	this.widgetData = null;
	if(CaveUILayerWidget.prototype.CTORWithGuiApplicationContext.call(this, context) == null) {
		return(null);
	}
	var thisWidget = this;
	this.scroller = CaveUIVerticalScrollerWidget.NEWWithGuiApplicationContext(context);
	this.grid = CaveUIGridWidget.NEWWithGuiApplicationContext(context);
	this.grid.setWidgetSpacing(context.getStylePixels("movie", "spacing"));
	this.grid.setWidgetMargin(context.getStylePixels("movie", "margin"));
	this.grid.setWidgetCellSize(context.getHeightValue("60mm"));
	this.scroller.addWidget(this.grid);
	this.addWidget(this.scroller);
	return(this);
};

AppWebSearchResultsWidget.prototype.initializeWidget = function() {
	CaveUILayerWidget.prototype.initializeWidget.call(this);
	this.grid.setMaximumCols(5);
};

AppWebSearchResultsWidget.prototype.onWidgetDisplayed = function() {
	if(!(this.widgetData != null)) {
		return;
	}
	var results = this.widgetData.getDynamicVector("results");
	if(!(results != null)) {
		return;
	}
	var array = results.toVector();
	if(array != null) {
		var n = 0;
		var m = array.length;
		for(n = 0 ; n < m ; n++) {
			var tresult = array[n];
			var result = null;
			if((CapeDynamicMap.IS_INSTANCE && CapeDynamicMap.IS_INSTANCE(tresult))) {
				result = tresult;
			}
			if(result != null) {
				this.grid.addWidget(AppUIMovieItemWidget.NEWWithGuiApplicationContext(this.context).setWidgetData(result));
			}
		}
	}
};

AppWebSearchResultsWidget.prototype.getWidgetData = function() {
	return(this.widgetData);
};

AppWebSearchResultsWidget.prototype.setWidgetData = function(v) {
	this.widgetData = v;
	return(this);
};

var AppWebSearchWidget = function() {
	CaveUILayerWidget.call(this);
};

AppWebSearchWidget.prototype = (function(o) { function F() {}; F.prototype = o; return(new F()); }) (CaveUILayerWidget.prototype);
AppWebSearchWidget.prototype.constructor = AppWebSearchWidget;

AppWebSearchWidget.prototype._t = {
	"AppWebSearchWidget" : true,
	"CaveUILayerWidget" : true,
	"CaveUIContainerWidget" : true,
	"CaveUIParentAwareWidget" : true,
	"CaveUIWidgetWithLayout" : true,
	"CaveUIWidget" : true,
	"CaveUIHeightAwareWidget" : true
};

AppWebSearchWidget.IS_INSTANCE = function(o) {
	return(o != null && o._t != null && o._t["AppWebSearchWidget"] === true);
};

AppWebSearchWidget.NEW = function() {
	var v = new AppWebSearchWidget();
	return(v.CTOR());
};

AppWebSearchWidget.prototype.CTOR = function() {
	if(CaveUILayerWidget.prototype.CTOR.call(this) == null) {
		return(null);
	}
	return(this);
};

AppWebSearchWidget.NEWWithGuiApplicationContext = function(context) {
	var v = new AppWebSearchWidget();
	return(v.CTORWithGuiApplicationContext(context));
};

AppWebSearchWidget.prototype.CTORWithGuiApplicationContext = function(context) {
	if(CaveUILayerWidget.prototype.CTORWithGuiApplicationContext.call(this, context) == null) {
		return(null);
	}
	var thisWidget = this;
	var widget = CaveUIImageWidget.NEWWithGuiApplicationContext(context);
	widget.setWidgetImageScaleMethod(CaveUIImageWidget.FILL);
	widget.setWidgetImageResource("background");
	this.addWidget(widget);
	var widget2 = CaveUICanvasWidget.NEWWithGuiApplicationContext(context);
	widget2.setWidgetColor(CaveColor.forRGBADouble(0, 0, 0, 0.5));
	this.addWidget(widget2);
	var widget3 = CaveUIAlignWidget.NEWWithGuiApplicationContext(context);
	var widget4 = CaveUILayerWidget.NEWWithGuiApplicationContext(context);
	widget4.setWidgetWidthRequest(context.getHeightValue("80mm"));
	var widget5 = AppWebSearchWidget.MovieSearchInputWidget.NEWWithGuiApplicationContext(context);
	widget5.setWidgetItemClickHandler(function(data){
		this.onItemClicked(data);
	}.bind(this));
	widget4.addWidget(widget5);
	widget3.addWidgetWithWidgetAndDoubleAndDoubleAndBoolean(widget4, 0.5, 0.3, false);
	this.addWidget(widget3);
	return(this);
};

AppWebSearchWidget.prototype.onItemClicked = function(data) {
	CaveUINavigationWidget.pushToContainer(this, AppUIMovieContainerWidget.NEWWithGuiApplicationContext(this.context).setWidgetData(data));
};

AppWebSearchWidget.MovieSearchInputWidget = function() {
	AppUISearchInputWidget.call(this);
};

AppWebSearchWidget.MovieSearchInputWidget.prototype = (function(o) { function F() {}; F.prototype = o; return(new F()); }) (AppUISearchInputWidget.prototype);
AppWebSearchWidget.MovieSearchInputWidget.prototype.constructor = AppWebSearchWidget.MovieSearchInputWidget;

AppWebSearchWidget.MovieSearchInputWidget.prototype._t = {
	"AppWebSearchWidget.MovieSearchInputWidget" : true,
	"AppUISearchInputWidget" : true,
	"CaveUIVerticalBoxWidget" : true,
	"CaveUIContainerWidget" : true,
	"CaveUIParentAwareWidget" : true,
	"CaveUIWidgetWithLayout" : true,
	"CaveUIWidget" : true,
	"CaveUIHeightAwareWidget" : true
};

AppWebSearchWidget.MovieSearchInputWidget.IS_INSTANCE = function(o) {
	return(o != null && o._t != null && o._t["AppWebSearchWidget.MovieSearchInputWidget"] === true);
};

AppWebSearchWidget.MovieSearchInputWidget.NEW = function() {
	var v = new AppWebSearchWidget.MovieSearchInputWidget();
	return(v.CTOR());
};

AppWebSearchWidget.MovieSearchInputWidget.prototype.CTOR = function() {
	if(AppUISearchInputWidget.prototype.CTOR.call(this) == null) {
		return(null);
	}
	return(this);
};

AppWebSearchWidget.MovieSearchInputWidget.NEWWithGuiApplicationContext = function(context) {
	var v = new AppWebSearchWidget.MovieSearchInputWidget();
	return(v.CTORWithGuiApplicationContext(context));
};

AppWebSearchWidget.MovieSearchInputWidget.prototype.CTORWithGuiApplicationContext = function(context) {
	if(AppUISearchInputWidget.prototype.CTORWithGuiApplicationContext.call(this, context) == null) {
		return(null);
	}
	return(this);
};

AppWebSearchWidget.MovieSearchInputWidget.prototype.startSearchQuery = function(keyword, callback) {
	if(!(callback != null)) {
		return;
	}
	ApiAPIClient.getInstance().search(keyword, callback);
};
