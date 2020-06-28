/*
To access your new functionality from JavaScript, 
it is common to wrap the native module in a JavaScript 
module. 
This is not necessary but saves the consumers 
of your library the need to pull it off of 
NativeModules each time. 
This JavaScript file also becomes a good location 
for you to add any JavaScript side functionality.
*/

/**
 * This exposes the native ToastExample module as a JS module. This has a
 * function 'show' which takes the following parameters:
 *
 * 1. String message: A string with the text to toast
 * 2. int duration: The duration of the toast. May be ToastExample.SHORT or
 *    ToastExample.LONG
 */
import { NativeModules } from 'react-native';
module.exports = NativeModules.ToastExample;