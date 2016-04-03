# cordova-plugin-nativestorage

Via this plugin the developer can store ints, doubles, strings and booleans native on Android and iOS in a persistence way.

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

### Booleans
```javascript
NativeStorage.putBoolean("reference_to_value",<bool-value>, <success-callback>, <error-callback>);

NativeStorage.getBoolean("reference_to_value",<bool-value>, <success-callback>, <error-callback>);
```

### Integers
```javascript
NativeStorage.putInt("reference_to_value",<int-value>, <success-callback>, <error-callback>);

NativeStorage.getInt("reference_to_value",<int-value>, <success-callback>, <error-callback>);
```

### Doubles
```javascript
NativeStorage.putDouble("reference_to_value",<double-value>, <success-callback>, <error-callback>);

NativeStorage.getDouble("reference_to_value",<double-value>, <success-callback>, <error-callback>);
```

### Strings
```javascript
NativeStorage.putString("reference_to_value",<string>, <success-callback>, <error-callback>);

NativeStorage.getString("reference_to_value",<string>, <success-callback>, <error-callback>);
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
