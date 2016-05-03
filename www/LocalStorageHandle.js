function LocalStorageHandle(success, error, intent, operation, [reference, variable]) {
    if (operation.startsWith('put')) {
        try {
            var varAsString = JSON.stringify(variable);
            localStorage.setItem(reference, varAsString);
            success(varAsString);
        } catch (err) {
            error(err);
        }
    }
    else if (operation.startsWith('get')) {
        try {
            var obj = JSON.parse(localStorage.getItem(reference));
            //console.log("LocalStorage Reading: "+obj);
            success(obj);
        } catch (err) {
            error(err);
        }
    }
}
module.exports = LocalStorageHandle;