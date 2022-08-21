/**
 * Created by Linu Sherin Issac
 * on August 08, 2022
 * Constants - Constant data of the App.
 */

import {Dimensions, Platform} from 'react-native';
const {width, height} = Dimensions.get('window');

export default Constants = {
  APP_NAME: 'PaymentApp',
  APP_BASE_HEIGHT: 896,
  APP_BASE_WIDTH: 414,

  Fonts: {
    BOLD: Platform.OS === 'ios' ? 'lato-bold' : 'lato_bold',
    LIGHT: Platform.OS === 'ios' ? 'Roboto-Light' : 'Roboto_Light',
    MEDIUM: Platform.OS === 'ios' ? 'lato-medium' : 'lato_medium',
    REGULAR: Platform.OS === 'ios' ? 'lato-regular' : 'lato_regular',
  },

  APP_THEME_COLOR: '#1A4792',
  APP_BLACK_COLOR: '#000',
  APP_WHITE_COLOR: '#fff',
  APP_GREY_COLOR: 'rgb(109,109,109)',
  APP_BLUE_COLOR: 'rgba(26,71,146,0.9)',
  APP_RED_COLOR: '#FFFF00',
  APP_LIGHT_BLUE:'rgb(246,248,255)',
  APP_TEXT_COLOR:'#0B0E14',
  APP_PURPLE_COLOR:'#533082',
  APP_POWDER_BLUE:'#DCE6FF',
  APP_DARK_BLUE_TEXT:'#526895',
  APP_DARK_GREY:'rgb(110,120,150)',

  SCREEN_WIDTH: width,
  SCREEN_HEIGHT: height,

  ACTIVE_OPACITY: 0.7,
  IS_ANDROID: Platform.OS === 'ios' ? false : true,
};
