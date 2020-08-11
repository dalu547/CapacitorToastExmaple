package com.dalu.plugins.toast;

import com.getcapacitor.JSObject;
import com.getcapacitor.NativePlugin;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;

import android.util.Log;


@NativePlugin
public class ToastExample extends Plugin {

    @PluginMethod
    public void echo(PluginCall call) {
        String value = call.getString("value");

        JSObject ret = new JSObject();
        ret.put("value", value);
        call.success(ret);
    }

    @PluginMethod
    public void printLog(PluginCall call) {
        String value = call.getString("value");


		Log.d("Capacitor", value);

        // JSObject ret = new JSObject();
        // ret.put("value", value);
        // call.success(ret);
    }
     
}
