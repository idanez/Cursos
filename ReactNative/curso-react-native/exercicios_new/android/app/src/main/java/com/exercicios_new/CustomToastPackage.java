// CustomToastPackage.java

/*
    Register the Module
    The last step within Java is to register the Module;
    this happens in the createNativeModules of your apps package.
    If a module is not registered it will not be available from JavaScript.

    The package needs to be provided in the getPackages method of the MainApplication.java file.
    This file exists under the android folder in your react-native application directory.
    The path to this file is: android/app/src/main/java/com/your-app-name/MainApplication.java.

 */
package com.exercicios_new;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class CustomToastPackage implements ReactPackage {

    @Override
    public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
        return Collections.emptyList();
    }

    @Override
    public List<NativeModule> createNativeModules(
            ReactApplicationContext reactContext) {
        List<NativeModule> modules = new ArrayList<>();

        modules.add(new ToastModule(reactContext));

        return modules;
    }

}// CustomToastPackage.java
