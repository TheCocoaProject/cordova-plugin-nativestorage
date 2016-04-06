# cordova-plugin-nativestorage

Via this plugin the developer can store ints, doubles, strings and booleans native on Android and iOS in a persistence way.

ALL VERSIONS ARE COMPATIBLE SO UPDATING THE PLUGIN WILL NOT BRICK YOUR APPLICATION, INSTEAD IT WILL GIVE YOU ALL THE LATEST FEATURES!

## Why?
This plugin is created because of the non-persistent property of localstorage in the WebView of Android and iOS.
In iOS the location of stored data for localstorage can be removed by the OS when running out of memory.

Some complaints:

<http://gonehybrid.com/dont-assume-localstorage-will-always-work-in-your-hybrid-app/>
<http://stackoverflow.com/questions/7750857/how-permanent-is-local-storage-on-android-and-ios>
<http://stackoverflow.com/questions/25627991/ios-7-webview-and-localstorage-persistence-update>
<http://stackoverflow.com/questions/28082624/localstorage-persistence-in-ios-android-webview>
<https://forum.ionicframework.com/t/localstorage-is-it-cleared-after-app-restarts-periodically-in-ios/21819>
<https://bugs.chromium.org/p/chromium/issues/detail?id=481380>

## Installation
The plugin can be installed via the Cordova command line interface:
* Navigate to the root folder for your phonegap project.
* Run the command:
```sh
cordova plugin add cordova-plugin-nativestorage
```
or through this git repo
```sh
cordova plugin add https://github.com/GillesC/cordova-plugin-nativestorage.git
```

## Usage
This plugin stores values in an asynchronous way, so the value must be set before asking the value back with that same specified reference.
The parameter of the success-callback function will be the saved or retreived value, the error-callback will specify the occurred error.

### Newly added (v1.0.7)
A global `remove` method is now provided so developers can now remove a variable for a reference.
```javascript
NativeStorage.remove("reference_to_value", <success-callback>, <error-callback>);
```

The `<success-callback>` will be called when the deletion was succesfull, otherwise the `<error-callback>` will provide you with an error message.

### Newly added (v1.0.4)
Now developers can use a simple `set` method for saving all the supported types.
An overall `get` method is'nt (yet) supported.

```javascript
NativeStorage.set("reference_to_value",<value>, <success-callback>, <error-callback>);

NativeStorage.get<type>("reference_to_value",<success-callback>, <error-callback>);
```
The developers can also opt to call a `put` method specified by the type, like shown below.

### Booleans
```javascript
NativeStorage.putBoolean("reference_to_value",<bool-value>, <success-callback>, <error-callback>);

NativeStorage.getBoolean("reference_to_value",<success-callback>, <error-callback>);
```

### Integers
```javascript
NativeStorage.putInt("reference_to_value",<int-value>, <success-callback>, <error-callback>);

NativeStorage.getInt("reference_to_value", <success-callback>, <error-callback>);
```

### Doubles
```javascript
NativeStorage.putDouble("reference_to_value",<double-value>, <success-callback>, <error-callback>);

NativeStorage.getDouble("reference_to_value",<success-callback>, <error-callback>);
```

### Strings
```javascript
NativeStorage.putString("reference_to_value",<string>, <success-callback>, <error-callback>);

NativeStorage.getString("reference_to_value",<success-callback>, <error-callback>);
```

###Example
This example will set en retreive a boolean value with the reference `"ref_bool"`.
```javascript
NativeStorage.putBoolean("ref_bool",true,
  function(result){
  console.log("Put! "+result);
  NativeStorage.getBoolean("ref_bool", 
    function(result){
      console.log("Got: "+result);
    },
    // error callback from get method
    function(e){
      console.log(e);
    });
  },
  // error callback from put method
  function(e){
    console.log(e);
  });
```
## How?
The values are native stored by using native functionalities provided by Android en iOS.
* Android
  - SharedPreferences
* iOS
  - NSUserDefaults

## Defaults
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
  
## History

* v1.0.4	Addition of global `set` method (which supports booleans, ints, doubles and strings)
* v1.0.7	Addition of a `remove` method

## Problems
If you encounter any problems, please remove the current plugin and re-add it.
This will install the latest version. 

## Full example

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
				NativeStorage.remove("ref_string", function(){console.log("Removed with success!")}, function(e){console.log(e);})
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