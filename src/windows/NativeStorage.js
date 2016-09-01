/**
 * Created by Christian on 30.08.2016.
 * christian@helbighof.de
 */

var package = Windows.ApplicationModel.Package.current;
var service = package.id.name

var NativeStorageProxy = {
    getItem: function (win, fail, args) {
        try {
            var key = args[0];
            var vault = new Windows.Security.Credentials.PasswordVault();
            var passwordCredential = vault.retrieve(service, key);
            win(passwordCredential.password);
        } catch (e) {
            fail('failed to get Item from NativeStorage - ' + e.message);
        }
    },
    setItem: function (win, fail, args) {
        try {
            var key = args[0];
            var value = args[1];
            var vault = new Windows.Security.Credentials.PasswordVault();
            vault.add(new Windows.Security.Credentials.PasswordCredential(service, key, value));
            win(key);
        } catch (e) {
            fail('failed to set Item in NativeStorage - ' + e.message);
        }
    },
    clear: function (win, fail, args) {
        try {
            var service = packageId.name;
            var vault = new Windows.Security.Credentials.PasswordVault();
            var iVectorView = passwordVault.retrieveAll();
        } catch (e) {
            fail('Failed to clear Storage variable - ' + e.message);
        }
    },
    putString: function (win, fail, args) {
        try {
            var key = args[0];
            var value = args[1];
            var vault = new Windows.Security.Credentials.PasswordVault();
            vault.add(new Windows.Security.Credentials.PasswordCredential(service, key, value));
            win(key);
        } catch (e) {
            fail('failed to put String in NativeStorage - ' + e.message);
        }
    },
    getString: function (win, fail, args) {
        try {
            var key = args[0];
            var vault = new Windows.Security.Credentials.PasswordVault();
            var passwordCredential = vault.retrieve(service, key);
            win(passwordCredential.password);
        } catch (e) {
            fail('failed to get String from NativeStorage - ' + e.message);
        }
    },
    putBoolean: function (win, fail, args) {
        try {
            var key = args[0];
            var value = args[1];
            var vault = new Windows.Security.Credentials.PasswordVault();
            vault.add(new Windows.Security.Credentials.PasswordCredential(service, key, value));
            win(value);
        } catch (e) {
            fail('failed to put Boolean in NativeStorage - ' + e.message);
        }
    },
    getBoolean: function (win, fail, args) {
        try {
            var key = args[0];
            var vault = new Windows.Security.Credentials.PasswordVault();
            var passwordCredential = vault.retrieve(service, key);
            win(passwordCredential.password);
        } catch (e) {
            fail('failed to get Boolen from NativeStorage - ' + e.message);
        }
    },
    putInt: function (win, fail, args) {
        try {
            var key = args[0];
            var value = args[1];
            var vault = new Windows.Security.Credentials.PasswordVault();
            vault.add(new Windows.Security.Credentials.PasswordCredential(service, key, value));
            win(value);
        } catch (e) {
            fail('failed to set Int in NativeStorage - ' + e.message);
        }
    },
    getInt: function (win, fail, args) {
        try {
            var key = args[0];
            var vault = new Windows.Security.Credentials.PasswordVault();
            var passwordCredential = vault.retrieve(service, key);
            win(passwordCredential.password);
        } catch (e) {
            fail('failed to get Int from NativeStorage - ' + e.message);
        }
    },
    putDouble: function (win, fail, args) {
        try {
            var key = args[0];
            var value = args[1];
            var vault = new Windows.Security.Credentials.PasswordVault();
            vault.add(new Windows.Security.Credentials.PasswordCredential(service, key, value));
            win(value);
        } catch (e) {
            fail('failed to set Double in NativeStorage - ' + e.message);
        }
    },
    getDouble: function (win, fail, args) {
        try {
            var key = args[0];
            var vault = new Windows.Security.Credentials.PasswordVault();
            var passwordCredential = vault.retrieve(service, key);
            win(passwordCredential.password);
        } catch (e) {
            fail('failed to get Double from NativeStorage - ' + e.message);
        }
    },
    remove: function (win, fail, args) {
        try {
            var key = args[0];
            var vault = new Windows.Security.Credentials.PasswordVault();
            var passwordCredential = vault.retrieve(service, key);
            if (passwordCredential) {
                vault.remove(passwordCredential);
            }
            win(key);
        } catch (e) {
            fail('failed to remove from NativeStorage - ' + e.message);
        }
    },
};

require("cordova/exec/proxy").add("NativeStorage", NativeStorageProxy);