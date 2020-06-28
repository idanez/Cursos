// ToastModule.java

/*
  Pagina do tutorial para habilitar execução de codigo nativo junto com react-native:
  https://reactnative.dev/docs/native-modules-android
 */

package com.exercicios_new;

import android.widget.Toast;

//import com.facebook.react.bridge.NativeModule;
import androidx.annotation.NonNull;

import com.facebook.react.bridge.ReactApplicationContext;
//import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.util.Map;
import java.util.HashMap;

public class ToastModule extends ReactContextBaseJavaModule {
  //private static ReactApplicationContext reactContext;

  private static final String DURATION_SHORT_KEY = "SHORT";
  private static final String DURATION_LONG_KEY = "LONG";

  ToastModule(ReactApplicationContext context) {
    super(context);
    //reactContext = context;
  }

  @NonNull
  @Override
  public String getName() {
    //This is the name that will be represented in JavaScript
    return "ToastExample";
  }

  /*
    To expose a method to JavaScript a Java method must be annotated using @ReactMethod.
    The return type of bridge methods is always void.
    React Native bridge is asynchronous, so the only way to pass a result to JavaScript
    is by using callbacks or emitting events (see below).
   */
  @ReactMethod
  public void show(String message, int duration) {
    Toast.makeText(getReactApplicationContext(), message, duration).show();
  }

  /*
    Argument Types:
    ------------------
    The following argument types are supported for methods annotated with @ReactMethod
    and they directly map to their JavaScript equivalents:

    Boolean -> Bool
    Integer -> Number
    Double -> Number
    Float -> Number
    String -> String
    Callback -> function
    ReadableMap -> Object (https://github.com/facebook/react-native/blob/master/ReactAndroid/src/main/java/com/facebook/react/bridge/ReadableMap.java)
    ReadableArray -> Array (https://github.com/facebook/react-native/blob/master/ReactAndroid/src/main/java/com/facebook/react/bridge/ReadableArray.java)
  * */

  /*
    An optional method called getConstants returns the constant values exposed to JavaScript.
    Its implementation is not required but is very useful to key pre-defined values
    that need to be communicated from JavaScript to Java in sync.
   */
  @Override
  public Map<String, Object> getConstants() {
    final Map<String, Object> constants = new HashMap<>();
    constants.put(DURATION_SHORT_KEY, Toast.LENGTH_SHORT);
    constants.put(DURATION_LONG_KEY, Toast.LENGTH_LONG);
    return constants;
  }

}