import {StyleSheet} from 'react-native';
import Constants from '../../config/constants';
import {normalizedHeight, normalizedWidth} from '../../config/common';

const styles = StyleSheet.create({
  mainContainer: {flex: 1, backgroundColor: Constants.APP_WHITE_COLOR},

  floatingAction: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 55,
    position: 'absolute',
    bottom: 30,
    right: 5,
    height: 55,
    backgroundColor: 'transparent',
    borderRadius: 30,
    shadowColor: 'rgba(110,110,110,0.7)',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4.65,
    elevation: 5,
  },
  deliveryContainer: {
    backgroundColor: Constants.APP_LIGHT_BLUE,
    borderColor: 'grey',
    paddingVertical: 10,
  },
  pointStyle: {
    width: 5,
    height: 5,
    borderRadius: 2.5,
    backgroundColor: Constants.APP_BLACK_COLOR,
    marginHorizontal: 5,
  },
  deliveryRowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginVertical: 10,
  },
  deliverTextStyle: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '400',
    color: Constants.APP_TEXT_COLOR,
    fontFamily: Constants.Fonts.BOLD,
  },
  subDeliveryText: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '400',
    color: Constants.APP_TEXT_COLOR,
  },
  changeButtonStyle: {
    color: Constants.APP_PURPLE_COLOR,
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 14,
    textAlign: 'right',
  },
  yalaCardStyle: {
    width: 60,
    height: 30,
    borderRadius: 3,
  },
  cardStyle: {
    width: 30,
    height: 30,
  },
  container: {
    marginHorizontal: 20,
    borderWidth: 1,
    borderColor: Constants.APP_POWDER_BLUE,
    borderRadius: 5,
    marginVertical: 20,
  },

  cardContainer: {
    backgroundColor: Constants.APP_POWDER_BLUE,
    paddingVertical: 15,
  },
  cardTitle: {
    marginHorizontal: 10,
    color: Constants.APP_DARK_BLUE_TEXT,
    fontSize: 10,
    fontFamily: Constants.Fonts.BOLD,
  },
  cardSubContainer: {
    marginHorizontal: 10,
  },
  paymentContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingVertical: 10,
    alignItems:'center'
  },
  paymentWrapper: {flexDirection: 'row', alignItems: 'center'},
  paymentText: {
    marginHorizontal: 20,
    color: Constants.APP_TEXT_BLACK_COLOR,
    fontSize: 16,
  },
  imageContainer: {alignItems: 'flex-end'},
  borderLineStyle: {
    borderStyle: 'dashed',
    borderColor: Constants.APP_POWDER_BLUE,
    borderWidth: 1,
  },
  paymentWrapper: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingVertical: 12,
  },
  payInnerWrapper: {flexDirection: 'row', alignItems: 'center'},
  cardBorder: {
    borderWidth: 1,
    borderColor: Constants.APP_POWDER_BLUE,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
    borderRadius: 2,
  },
  cardOptions: {
    marginHorizontal: 20,
    fontSize: 14,
    color: Constants.APP_TEXT_BLACK_COLOR,
    fontFamily: Constants.Fonts.MEDIUM,
  },
  buttonContainer: {
    backgroundColor: Constants.APP_PURPLE_COLOR,
    alignItems: 'center',
    paddingVertical: 20,
    marginHorizontal: 20,
    borderRadius: 10,
    marginBottom: 10,
  },
  buttonText: {
    color: Constants.APP_WHITE_COLOR,
    fontSize: 14,
    fontFamily: Constants.Fonts.BOLD,
  },
  walletText: {
    textAlign: 'center',
    paddingVertical: 10,
    fontSize: 14,
    color: Constants.APP_TEXT_BLACK_COLOR,
    fontFamily: Constants.Fonts.MEDIUM,
  },
  orderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    marginHorizontal: 20,
  },
  orderText: {
    color: Constants.APP_TEXT_BLACK_COLOR,
    fontSize: 14,
    fontFamily: Constants.Fonts.BOLD,
  },
  subContainer: {
    marginHorizontal: 20,
    borderWidth: 1,
    borderColor: Constants.APP_POWDER_BLUE,
    borderRadius: 5,
    marginTop: 20,
  },
  imageWrapper: {
    flexDirection: 'row',
    paddingVertical: 15,
    marginHorizontal: 10,
    justifyContent: 'space-between',
  },
  yalaText: {
    color: Constants.APP_TEXT_BLACK_COLOR,
    fontSize: 14,
    fontFamily: Constants.Fonts.REGULAR,
  },
  yalaText1: {
    color: Constants.APP_TEXT_BLACK_COLOR,
    fontSize: 12,
    fontFamily: Constants.Fonts.REGULAR,
  },
  addButtonText: {
    fontSize: 14,
    fontWeight: '700',
    color: Constants.APP_PURPLE_COLOR,
  },
  addButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingVertical: 10,
  },
  bottomText: {
    textAlign: 'center',
    paddingVertical: 10,
    fontSize: 14,
    color: Constants.APP_TEXT_BLACK_COLOR,
  },
  payWrapper:{
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingVertical: 12,
  
  }
});

export default styles;
