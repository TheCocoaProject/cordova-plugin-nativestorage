# Cordova plugin NativeStorage

[![Build Status](https://travis-ci.org/GillesC/cordova-plugin-nativestorage.svg?branch=master)](https://travis-ci.org/GillesC/cordova-plugin-nativestorage) [![npm version](https://badge.fury.io/js/cordova-plugin-nativestorage.svg)](https://badge.fury.io/js/cordova-plugin-nativestorage)

[![NPM](https://nodei.co/npm/cordova-plugin-nativestorage.png?downloads=true&downloadRank=true)](https://nodei.co/npm/cordova-plugin-nativestorage/)

Via this plugin the developer can store integers, doubles, strings, booleans and objects, native on Android and iOS, in a persistence way.

**REMARK**: All versions are backward compatible, so updating the plugin will not brick our application, instead it will give you all the latest features.

## Contents
- [Installation](#installation)
- [Supported Platforms](#supported_platforms)
- [Usage](#usage)
	* [Storing values](#storing_values)
	* [Retrieving values](#retrieving_values)
	* [Removing values](#removing_values)
	* [Example per type](#example_per_type)
	* [Full example](#full_example)
- [Changelog](#changelog)
- [How it works](#how)
- [Default values](#defaults)
- [Problems](#problems)


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
- Objects (thanks to [alokrajiv](https://github.com/alokrajiv))

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

##<a name="changelog"></a>Changelog

### Added browser capability - v1.0.10
For testing purposes the browser is also supported. If running in the browser localstorage is used.

### Added object type - v1.0.9
Storage and retrieval of objects are now possible. This is done by means of JSON functionalities.

### Added error when write to disk wasn't succesfull - v1.0.8
Plugin-users will now be certain writing was successful when the `set` method is called. With thanks to [alokrajiv](https://github.com/GillesC/cordova-plugin-nativestorage/issues/1) for pointing out that the `apply()` method used in Android doesn't ensure the value is successful stored. As of version 1.0.8. the plugin-users will be certain the value is stored when the success-callback has been invoked --which is the case for both Android and iOS.

### Gloabl remove method - v1.0.7 
A global `remove` method is now provided so developers can now remove a variable for a reference.
```javascript
NativeStorage.remove("reference_to_value", <success-callback>, <error-callback>);
```

The `<success-callback>` will be called when the deletion was succesfull, otherwise the `<error-callback>` will provide you with an error message.

### Newly Global set method - v1.0.4
Now developers can use a simple `set` method for saving all the supported types.
An overall `get` method is'nt (yet) supported.

```javascript
NativeStorage.set("reference_to_value",<value>, <success-callback>, <error-callback>);

NativeStorage.get<type>("reference_to_value",<success-callback>, <error-callback>);
```
The developers can also opt to call a `put` method specified by the type, like shown below.


##<a name="how"></a>How?
The values are native stored by using native functionalities provided by Android en iOS.
* Android
  - SharedPreferences
* iOS
  - NSUserDefaults
* Browser (only for testing)
 - JSON in combination with localStorage

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

