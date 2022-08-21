/**
 * Created by Linu Sherin Issac
 * on August 087, 2022
 * Common - Common functions in the App.
 */

import {Alert} from 'react-native';
import Constants from './constants';



// Method to show single alert message with 'OK' callback
export function showSingleAlert(alertMessage, okText, callbackFunction) {
  setTimeout(function () {
    Alert.alert(Constants.APP_NAME, alertMessage, [
      {
        text: okText ? okText : 'Ok',
        onPress: () => {
          callbackFunction ? callbackFunction() : null;
        },
      },
    ]);
  }, 100);
}

// Method to show alert with callback
export function showAlertWithCallback(
  titleMessage,
  okText,
  cancelText,
  okCallbackFunction,
  cancelCallbackFunction,
) {
  setTimeout(function () {
    Alert.alert(
      Constants.APP_NAME,
      titleMessage,
      [
        {
          text: cancelText,
          style: 'cancel',
          onPress: () => {
            cancelCallbackFunction ? cancelCallbackFunction() : null;
          },
        },
        {
          text: okText,
          onPress: () => {
            okCallbackFunction ? okCallbackFunction() : null;
          },
        },
      ],
      {cancelable: true},
    );
  }, 100);
}

