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
    marginHorizontal:5
  },
  deliveryRowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginVertical:10
  },
  deliverTextStyle:{
    fontSize:14,
    lineHeight:20,
    fontWeight:'400',
    color:Constants.APP_TEXT_COLOR
  },
  subDeliveryText:{
    fontSize:12,
    lineHeight:16,
    fontWeight:'400',
    color:Constants.APP_TEXT_COLOR
  },
  changeButtonStyle:{
    color:Constants.APP_PURPLE_COLOR,
    fontSize:14,
    fontWeight:'700',
    lineHeight:14,
    textAlign:'right'
  },
  yalaCardStyle:{
    width:60,
    height:30,
    borderRadius:3
  },
  cardStyle:{
    width:30,
    height:30,
   
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
  },
  cardSubContainer: {
    marginHorizontal: 10,
  },
  paymentContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  marginVertical:15
  },
  paymentWrapper: {flexDirection: 'row', alignItems: 'center'},
  paymentText:{marginHorizontal: 20},
  imageContainer:{alignItems: 'flex-end'},
  borderLineStyle:{
    borderStyle: 'dashed',
    borderColor: Constants.APP_POWDER_BLUE,
    borderWidth: 1,
  }
});

export default styles;
