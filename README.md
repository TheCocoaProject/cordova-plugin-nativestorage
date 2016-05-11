---
title: Cordova plugin NativeStorage
description: Persistent storage of variables and objects.
---
# Cordova plugin NativeStorage

[![Build Status](https://travis-ci.org/GillesC/cordova-plugin-nativestorage.svg?branch=master)](https://travis-ci.org/GillesC/cordova-plugin-nativestorage) [![npm version](https://badge.fury.io/js/cordova-plugin-nativestorage.svg)](https://badge.fury.io/js/cordova-plugin-nativestorage)

[![NPM](https://nodei.co/npm/cordova-plugin-nativestorage.png?downloads=true&downloadRank=true)](https://nodei.co/npm/cordova-plugin-nativestorage/)


Via this plugin the developer can store integers, doubles, strings, booleans and objects, native on Android and iOS, in a persistence way.

***
***NEW API!!*** 
Simple `setItem` and `getItem` are provided to store variables natively

Old API isn't broken, documentation about this API can be found at the [wiki](https://github.com/GillesC/cordova-plugin-nativestorage/wiki/How-to-use)

***

The plugin was created and developed by [Gilles Callebaut](https://be.linkedin.com/in/gilles-callebaut-46a751104), in the scope of an [IWT/VlAIO](http://www.vlaio.be/english) Tetra project [CrossMoS](https://www.msec.be/crossmos/) which assesses Mobile Cross-Platform Tools. This wouldn't be possible without the contributions of [Alok Rajiv](https://github.com/alokrajiv), our Cordova and JavaScript guru.

Please consider reading our [wiki](https://github.com/GillesC/cordova-plugin-nativestorage/wiki) for more documentation about this plugin.

## Contents
- [Installation](#installation)
- [Supported Platforms](#supported_platforms)
- [Usage](#usage)
	* [Storing values](#storing_values)
	* [Retrieving values](#retrieving_values)
	* [Removing values](#removing_values)
	* [Example per type](#example_per_type)
	* [Full example](#full_example)
	* [Demo Example](#demo_example)
- [Default values](#defaults)
- [Problems](#problems)
- [Applications using this plugin](#applications)


## Why?
This plugin is created because of the non-persistent property of localstorage in the WebView of Android and iOS.
In iOS stored data from localstorage can be removed by the OS, when running out of memory.

Some complaints:

<http://gonehybrid.com/dont-assume-localstorage-will-always-work-in-your-hybrid-app/>
<http://stackoverflow.com/questions/7750857/how-permanent-is-local-storage-on-android-and-ios>
<http://stackoverflow.com/questions/25627991/ios-7-webview-and-localstorage-persistence-update>
<http://stackoverflow.com/questions/28082624/localstorage-persistence-in-ios-android-webview>
<https://forum.ionicframework.com/t/localstorage-is-it-cleared-after-app-restarts-periodically-in-ios/21819>
<https://bugs.chromium.org/p/chromium/issues/detail?id=481380>

##<a name="installation"></a>Installation
The plugin can be installed via the Cordova command line interface:
* Navigate to the root folder for your phonegap project.
* Run the command:
```sh
cordova plugin add cordova-plugin-nativestorage
```
or through this git repo if you want to be running the development version:
```sh
cordova plugin add https://github.com/GillesC/cordova-plugin-nativestorage.git
```

##<a name="supported_platforms"></a>Supported platforms
- Android
- iOS
- Browser (for testing purposes)

##<a name="usage"></a>Usage
The parameter of the success-callback function will be the saved or retreived value, the error-callback will specify the occurred error.

###<a name="supported_types"></a>Supported types
- Booleans
- Strings
- Doubles
- Integers
- Objects

###<a name="storing_values"></a>Storing values
The developr can opt to store values through the `set` or the `put<type>` method.
```javascript
NativeStorage.set("reference_to_value",<value>, <success-callback>, <error-callback>);
NativeStorage.put<type>("reference_to_value",<value>, <success-callback>, <error-callback>);
NativeStorage.get<type>("reference_to_value",<success-callback>, <error-callback>);
NativeStorage.remove("reference_to_value",<success-callback>, <error-callback>);
```
###<a name="retrieving_values"></a>Retrieving values
```javascript
NativeStorage.get<type>("reference_to_value",<success-callback>, <error-callback>);
```

###<a name="removing_values"></a>Removing values
```javascript
NativeStorage.remove("reference_to_value",<success-callback>, <error-callback>);
```
###<a name="example_per_type"></a>Example per type
#### Booleans
```javascript
NativeStorage.putBoolean("reference_to_value",<bool-value>, <success-callback>, <error-callback>);

NativeStorage.getBoolean("reference_to_value",<success-callback>, <error-callback>);
```

#### Integers
```javascript
NativeStorage.putInt("reference_to_value",<int-value>, <success-callback>, <error-callback>);

NativeStorage.getInt("reference_to_value", <success-callback>, <error-callback>);
```

#### Doubles
```javascript
NativeStorage.putDouble("reference_to_value",<double-value>, <success-callback>, <error-callback>);

NativeStorage.getDouble("reference_to_value",<success-callback>, <error-callback>);
```

#### Strings
```javascript
NativeStorage.putString("reference_to_value",<string>, <success-callback>, <error-callback>);

NativeStorage.getString("reference_to_value",<success-callback>, <error-callback>);
```

#### Objects
```javascript
NativeStorage.putObject("reference_to_value",<object>, <success-callback>, <error-callback>);

NativeStorage.getObject("reference_to_value",<success-callback>, <error-callback>);
```

###<a name="full_example"></a>Full Example
```javascript
var app = {
	initialize: function() {
		this.bindEvents();
	},
	bindEvents: function() {
		document.addEventListener('deviceready', this.onDeviceReady, false);
	},
	onDeviceReady: function() {
		app.receivedEvent('deviceready');
	},
	receivedEvent: function(id) {
		NativeStorage.set("ref_bool",true, function(result){
			console.log("Put! "+result);

			NativeStorage.getBoolean("ref_bool", function(result){
				console.log("Got: "+result);
			},
			function(e){
				console.log(e);
			});
		},
		function(e){
			console.log(e);
		});



		NativeStorage.set("ref_int",22, function(result){
			console.log("Put! "+result);

			NativeStorage.getInt("ref_int", function(result){
				console.log("Got: "+result);
			},
			function(e){
				console.log(e);
			});
		},
		function(e){
			console.log(e);
		});



		NativeStorage.set("ref_float",3.14, function(result){
			console.log("Put! "+result);

			NativeStorage.getDouble("ref_float", function(result){
				console.log("Got: "+result);
			},
			function(e){
				console.log(e);
			});
		},
		function(e){
			console.log(e);
		});



		NativeStorage.set("ref_string","hahaha", function(result){
			console.log("Put! "+result);

			NativeStorage.getString("ref_string", function(result){
				console.log("Got: "+result);
				console.log("Now removing it");
				NativeStorage.remove("ref_string", function(){console.log("Removed with success!");}, function(e){console.log(e);})
			},
			function(e){
				console.log(e);
			});
		},
		function(e){
			console.log(e);
		});
	}
};
app.initialize();
```
###<a name="demo_example"></a>Demo Example
A demo application can be found at `cordova-plugin-nativestorage/examples/demo`. This application will save a String when the SAVE (`btn_load`) is pushed. This String is the value which has been typed in the input field (`data_input`). When the LOAD button is pressed, the value is shown by means of an alert message. 

#### Installation
* Cloning the repo to a local dir
```sh
git clone https://github.com/GillesC/cordova-plugin-nativestorage.git
```
* Navigating to the demo dir
```sh
cd cordova-plugin-nativestorage/examples/demo/
```
* Adding platforms you require
```sh
cordova platform add ios
cordova platform add android
cordova platform add browser
```
* Adding the plugin
```sh
cordova plugin add cordova-plugin-nativestorage
```
* Run or emulate the demo application
```sh
cordova emulate ios
cordova run android
cordova run browser
```

##<a name="defaults"></a>Defaults
If the requested value for a giving response is not found a default value will be returned.
* Android
  - Boolean: `false`
  - Integer: `-1`
  - Double: `-1.0`
  - String: `"null"`
* iOS
  - Boolean: `false`
  - Integer: `0`
  - Double: `0.0`
  - String: `nil`

##<a name="problems"></a>Problems
If you encounter any problems, please remove the current plugin and re-add it.
This will install the latest version. 

- Be certain to only retrieve a saved value when the put/set succes-callback method was invoked.

##<a name="applications"></a>Applications using this plugin
Currently there are no registered applications which use this plugin. If you're utilizing this plugin and wish to add your application to this readme, please contact [me](mailto:callebaut.gilles@gmail.com).


