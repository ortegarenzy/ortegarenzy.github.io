
/*
 * This file is part of Movie App
 * Copyright (c) 2018
 * All rights reserved.
 */

"use strict";var ApiAPIClient = function() {CaveUIJSONAPIClientWithGui.call(this);this.apiKey = null;};ApiAPIClient.prototype = (function(o) { function F() {}; F.prototype = o; return(new F()); }) (CaveUIJSONAPIClientWithGui.prototype);var P = ApiAPIClient.prototype;P.constructor = ApiAPIClient;ApiAPIClient.TMDB_IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w780/";ApiAPIClient.TMDB_API_BASE_URL = "https://api.themoviedb.org/3";ApiAPIClient.instance = null;P._t = {"ApiAPIClient" : true,"CaveUIJSONAPIClientWithGui" : true,"CapexWebJSONAPIClient" : true};ApiAPIClient.IS_INSTANCE = function(o) {return(o != null && o._t != null && o._t["ApiAPIClient"] === true);};ApiAPIClient.create = function(context, parentWidget) {if(!(context != null && parentWidget != null)) {CapeLog.error(context, "APIClient" + ": Failed to create instance");return(null);}ApiAPIClient.instance = ApiAPIClient.NEW();CapeLog.debug(context, "[" + "APIClient" + "]: Using the configured API URL '" + ApiAPIClient.TMDB_API_BASE_URL + "'");ApiAPIClient.instance.setApiUrl(ApiAPIClient.TMDB_API_BASE_URL);ApiAPIClient.instance.setContext(context);ApiAPIClient.instance.setParentWidget(parentWidget);ApiAPIClient.instance.setApiKey("d1ad0ac183251db6a05318b144a0b2fc");CapeLog.debug(context, "APIClient" + ": New instance successfully created");return(ApiAPIClient.instance);};ApiAPIClient.NEW = function() {var v = new ApiAPIClient();return(v.CTOR());};P.CTOR = function() {if(CaveUIJSONAPIClientWithGui.prototype.CTOR.call(this) == null) {return(null);}this.apiKey = null;this.setApiUrl("/");return(this);};ApiAPIClient.getInstance = function() {return(ApiAPIClient.instance);};P.getFullURL = function(api) {var key = "api_key=" + this.apiKey;var url = this.getApiUrl();if(CapeString.isEmpty(url)) {return("/");}url = url + api;var separator = "?";if(CapeString.contains(url, "?")) {separator = "&";}return(url + separator + key);};P.getImageURL = function(image) {return(ApiAPIClient.TMDB_IMAGE_BASE_URL + image + "?api_key=" + this.apiKey);};P.discoverMovies = function(callback) {this.doGet("/discover/movie", callback, null);};P.search = function(query, callback) {this.doGet("/search/movie?query=" + query, callback, null);};P.credits = function(movieId, callback) {this.doGet("/movie/" + movieId + "/credits", callback, null);};P.getApiKey = function() {return(this.apiKey);};P.setApiKey = function(v) {this.apiKey = v;return(this);};