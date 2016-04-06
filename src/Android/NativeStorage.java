import android.util.Log;

import org.apache.cordova.CordovaWebView;
import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CordovaInterface;

import android.content.Context;

import org.json.JSONArray;
import org.json.JSONException;

import android.content.SharedPreferences.Editor;
import android.content.SharedPreferences;

public class NativeStorage extends CordovaPlugin{
    public static final String TAG = "Native Storage";
    private SharedPreferences sharedPref;
    private SharedPreferences.Editor editor;

    public NativeStorage() {}


    public void initialize(CordovaInterface cordova, CordovaWebView webView) {
        super.initialize(cordova,webView);
        Log.v(TAG, "Init NativeStorage");
        sharedPref = cordova.getActivity().getPreferences(Context.MODE_PRIVATE);
        editor = sharedPref.edit();
    }

    public boolean execute(final String action, final JSONArray args, final CallbackContext callbackContext) throws JSONException{
        if(("remove").equals(action)){
            cordova.getThreadPool().execute(new Runnable() {
                public void run() {
                    try {
                        String ref = args.getString(0);
                        editor.remove(ref);
                        editor.apply();
                        callbackContext.success();
                    } catch (Exception e) {
                        Log.e(TAG, "Removing failed :", e);
                        callbackContext.error(e.getMessage());
                    }
                }
            });
            return true;
        }

        if(("putBoolean").equals(action)){
            cordova.getThreadPool().execute(new Runnable() {
                public void run() {
                    try {
                        /* getting arguments */
                        String ref = args.getString(0);
                        Boolean bool = args.getBoolean(1);
                        editor.putBoolean(ref, bool);
                        editor.apply();
                        callbackContext.success(String.valueOf(bool));
                    } catch (Exception e) {
                        Log.e(TAG, "PutBoolean failed :", e);
                        callbackContext.error(e.getMessage());
                    }
                }
            });
            return true;
        }

        if(("getBoolean").equals(action)){
            cordova.getThreadPool().execute(new Runnable() {
                public void run() {
                    try {
                        /* getting arguments */
                        String ref = args.getString(0);
                        //System.out.println("Receveived reference: " + ref);
                        Boolean bool = sharedPref.getBoolean(ref, false);
                        callbackContext.success(String.valueOf(bool));
                    } catch (Exception e) {
                        Log.e(TAG, "PutBoolean failed :", e);
                        callbackContext.error(e.getMessage());
                    }
                }
            });
            return true;
        }

        if(("putInt").equals(action)){
            cordova.getThreadPool().execute(new Runnable() {
                public void run() {
                    try {
                        /* getting arguments */
                        String ref = args.getString(0);
                        int anInt = args.getInt(1);
                        editor.putInt(ref, anInt);
                        editor.apply();
                        callbackContext.success(anInt);
                    } catch (Exception e) {
                        Log.e(TAG, "PutInt failed :", e);
                        callbackContext.error(e.getMessage());
                    }
                }
            });
            return true;
        }

        if(("getInt").equals(action)){
            cordova.getThreadPool().execute(new Runnable() {
                public void run() {
                    try {
                        /* getting arguments */
                        String ref = args.getString(0);
                        //System.out.println("Receveived reference: "+ref);
                        int anInt = sharedPref.getInt(ref, -1);
                        callbackContext.success(anInt);
                    } catch (Exception e) {
                        Log.e(TAG, "GetInt failed :", e);
                        callbackContext.error(e.getMessage());
                    }
                }
            });
            return true;
        }

        if(("putDouble").equals(action)){
            cordova.getThreadPool().execute(new Runnable() {
                public void run() {
                    try {
                        /* getting arguments */
                        String ref = args.getString(0);
                        float f = (float) args.getDouble(1);
                        //Log.v(TAG,"Float value: "+f);
                        editor.putFloat(ref, f);
                        editor.apply();
                        callbackContext.success(Float.toString(f));
                    } catch (Exception e) {
                        Log.e(TAG, "PutFloat failed :", e);
                        callbackContext.error(e.getMessage());
                    }
                }
            });
            return true;
        }

        if(("getDouble").equals(action)){
            cordova.getThreadPool().execute(new Runnable() {
                public void run() {
                    try {
                        /* getting arguments */
                        String ref = args.getString(0);
                        //System.out.println("Receveived reference: " + ref);
                        float f = sharedPref.getFloat(ref, (float) -1.0);
                        callbackContext.success(Float.toString(f));
                    } catch (Exception e) {
                        Log.e(TAG, "GetFloat failed :", e);
                        callbackContext.error(e.getMessage());
                    }
                }
            });
            return true;
        }

        if(("putString").equals(action)){
            cordova.getThreadPool().execute(new Runnable() {
                public void run() {
                    try {
                        /* getting arguments */
                        String ref = args.getString(0);
                        String aString = args.getString(1);
                        editor.putString(ref, aString);
                        editor.apply();
                        callbackContext.success(aString);
                    } catch (Exception e) {
                        Log.e(TAG, "PutString failed :", e);
                        callbackContext.error(e.getMessage());
                    }
                }
            });
            return true;
        }

        if(("getString").equals(action)){
            cordova.getThreadPool().execute(new Runnable() {
                public void run() {
                    try {
                        /* getting arguments */
                        String ref = args.getString(0);
                        //System.out.println("Receveived reference: " + ref);
                        String s = sharedPref.getString(ref, "null");
                        callbackContext.success(s);
                    } catch (Exception e) {
                        Log.e(TAG, "GetString failed :", e);
                        callbackContext.error(e.getMessage());
                    }
                }
            });
            return true;
        }

        return false;



    }
}