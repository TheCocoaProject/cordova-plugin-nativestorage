var exec = require('cordova/exec');
var TAG = "NativeStorage.js";

function NativeStorage(){console.log(TAG+": is created");}


/* boolean storage */
NativeStorage.prototype.putBoolean = function(reference, aBoolean, success, error){
    //console.log(TAG+": putBoolean");
    exec(success, error, "NativeStorage", "putBoolean", [reference, aBoolean]);
};

NativeStorage.prototype.getBoolean = function(reference, success, error){
    //console.log(TAG+": getBoolean");
    exec(success, error, "NativeStorage", "getBoolean", [reference]);
};

/* int storage */
NativeStorage.prototype.putInt = function(reference, anInt, success, error){
    //console.log(TAG+": putInt");
    exec(success, error, "NativeStorage", "putInt", [reference, anInt]);
};

NativeStorage.prototype.getInt = function(reference, success, error){
    //console.log(TAG+": getInt");
    exec(success, error, "NativeStorage", "getInt", [reference]);
};


/* float storage */
NativeStorage.prototype.putDouble = function(reference, aFloat, success, error){
    //console.log(TAG+": putFloat");
    exec(success, error, "NativeStorage", "putFloat", [reference, aFloat]);
};

NativeStorage.prototype.getDouble = function(reference, success, error){
    //console.log(TAG+": getFloat");
    exec(success, error, "NativeStorage", "getFloat", [reference]);
};

/* string storage */
NativeStorage.prototype.putString = function(reference, s, success, error){
    //console.log(TAG+": putString");
    exec(success, error, "NativeStorage", "putString", [reference, s]);
};

NativeStorage.prototype.getString = function(reference, success, error){
    //console.log(TAG+": getString");
    exec(success, error, "NativeStorage", "getString", [reference]);
};


var nativeStorage = new NativeStorage();
module.exports = nativeStorage;