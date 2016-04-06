var exec = require('cordova/exec');
var TAG = "NativeStorage.js";

function NativeStorage() {
    console.log(TAG + ": is created");
}

NativeStorage.prototype.set = function (reference, value, success, error) {
    if(reference === null){
        error("The reference can't be null");
    }
    if (value === null) {
        error("a Null value isn't supported");
    }
    switch (typeof value) {
        case 'undefined':
            error("an undefined type isn't supported");
            break;
        case 'boolean':
        {
            this.putBoolean(reference, value, success, error);
            break;
        }
        case 'number':
        {
            // Good now check if it's a float or an int
            if (value === +value) {
                if (value === (value | 0)) {
                    // it's an int
                    this.putInt(reference, value, success, error);
                } else if (value !== (value | 0)) {
                    this.putDouble(reference, value, success, error);
                }
            }
            else error("The value doesn't seem to be a number");
            break;
        }
        case 'string':{
            this.putString(reference,value,success,error);
            break;
        }
        default:
            error("The type isn't supported or isn't been recognized");
    }
};

/* removing */
NativeStorage.prototype.remove = function (reference, success, error) {
    //console.log(TAG+": putBoolean");
    if(reference===null){
        error("Null reference isn't supported"); return;
    }

    exec(success, error, "NativeStorage", "remove", [reference]);
};


/* boolean storage */
NativeStorage.prototype.putBoolean = function (reference, aBoolean, success, error) {
    //console.log(TAG+": putBoolean");
    if(reference===null){
        error("Null reference isn't supported"); return;
    }

    if (aBoolean === null) {
        error("a Null value isn't supported"); return;
    }

    if (typeof aBoolean === 'boolean') {
        exec(success, error, "NativeStorage", "putBoolean", [reference, aBoolean]);
    }
    else error("Only boolean types are supported");
};

NativeStorage.prototype.getBoolean = function (reference, success, error) {
    //console.log(TAG+": getBoolean");
    if(reference===null){
        error("Null reference isn't supported"); return;
    }
    exec(success, error, "NativeStorage", "getBoolean", [reference]);
};

/* int storage */
NativeStorage.prototype.putInt = function (reference, anInt, success, error) {
    //console.log(TAG+": putInt");
    if(reference===null){
        error("Null reference isn't supported"); return;
    }

    exec(success, error, "NativeStorage", "putInt", [reference, anInt]);
};

NativeStorage.prototype.getInt = function (reference, success, error) {
    if(reference===null){
        error("Null reference isn't supported"); return;
    }
    exec(success, error, "NativeStorage", "getInt", [reference]);
};


/* float storage */
NativeStorage.prototype.putDouble = function (reference, aFloat, success, error) {
    //console.log(TAG+": putFloat");
    if(reference===null){
        error("Null reference isn't supported"); return;
    }

    exec(success, error, "NativeStorage", "putDouble", [reference, aFloat]);
};

NativeStorage.prototype.getDouble = function (reference, success, error) {
    if(reference===null){
        error("Null reference isn't supported"); return;
    }
    exec(success, error, "NativeStorage", "getDouble", [reference]);
};

/* string storage */
NativeStorage.prototype.putString = function (reference, s, success, error) {
    //console.log(TAG+": putString");
    if(reference===null){
        error("Null reference isn't supported"); return;
    }

    exec(success, error, "NativeStorage", "putString", [reference, s]);
};

NativeStorage.prototype.getString = function (reference, success, error) {
    //console.log(TAG+": getString");
    if(reference===null){
        error("Null reference isn't supported"); return;
    }
    exec(success, error, "NativeStorage", "getString", [reference]);
};


var nativeStorage = new NativeStorage();
module.exports = nativeStorage;