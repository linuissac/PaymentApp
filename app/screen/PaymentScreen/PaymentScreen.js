/**
 * Created by Linu Sherin Issac
 * on August 17, 2022
 * Payment Screen - Payment Screen 
 */
import React, {Component, memo} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Linking,
  Platform,
  Switch,
} from 'react-native';
import Images from '../../config/images';
import Constants from '../../config/constants';
import NavigationHeader from '../../components/navigationHeader';

import styles from './styles';

class PaymentScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEnabled: true,
      preferedPaymentArray: [
        {
          cardName: 1228,
          image: Images.visaCard,
          selected: false,
        },
        {
          cardName: 'Apple Pay',
          image: Images.applePay,
          selected: true,
        },
      ],
      cardArray: [
        {
          cardName: 1228,
          image: Images.visaCard,
          selected: false,
        },
        {
          cardName: 7323,
          image: Images.masterCard,
          selected: true,
        },
      ],
      paymentOptionsArray: [
        {
          paymentType: 'Wallets',
          image: Images.wallet,
        },
        {
          paymentType: 'Netbanking',
          image: Images.bank,
        },
        {
          paymentType: 'Cash On Delivery',
          image: Images.bankNote,
        },
      ],
      selectedCard: 0,
      preferedPaymentItem: 0,
    };
  }

  componentDidMount() {}

  didTapOnBackButton = () => {
    this.props.navigation.goBack();
  };

  _didTapOnSwitch = () => {
    this.setState({isEnabled: !this.state.isEnabled});
  };

  _didTapOnOptions = item => {
    console.log('ITEM', item);
  };

  _didSelectedCard = index => {
    this.setState({selectedCard: index});
  };
  _didSelectPayment = (index) => {
    this.setState({preferedPaymentItem: index});
  };

  _renderPaymentArray = ({item,index}) => {
    const {preferedPaymentItem} = this.state;
    return (
      <View style={styles.cardSubContainer}>
        <View style={styles.paymentContainer}>
          <View style={styles.paymentWrapper}>
            <Image source={item.image} style={styles.yalaCardStyle} />
            <Text style={styles.paymentText}>{ index===0? '.... .... .... ' +  item.cardName : item.cardName}</Text>
          </View>
          <View style={styles.imageContainer}>
            <TouchableOpacity onPress={() => this._didSelectPayment(index)}>
              <Image
                source={
                  preferedPaymentItem === index
                    ? Images.radioCheck
                    : Images.radioButton
                }
              />
            </TouchableOpacity>
          </View>
        </View>
        {index===0 &&(
        <View style={styles.borderLineStyle} />
        )}
      </View>
    );
  };

  _renderCardArray = ({item, index}) => {
    const {selectedCard} = this.state;
    return (
      <View style={styles.cardSubContainer}>
        <View style={styles.paymentContainer}>
          <View style={styles.paymentWrapper}>
            <Image source={item.image} style={styles.yalaCardStyle} />
            <Text style={styles.paymentText}>{'.... .... .... ' + item.cardName}</Text>
          </View>
          <View style={styles.imageContainer}>
            <TouchableOpacity onPress={() => this._didSelectedCard(index)}>
              <Image
                source={
                  selectedCard === index
                    ? Images.radioCheck
                    : Images.radioButton
                }
              />
            </TouchableOpacity>
          </View>
        </View>
      
        <View style={styles.borderLineStyle} />
       
      </View>
    );
  };

  _renderPaymentOptions = ({item,index}) => {
    return (
      <View style={{  marginHorizontal:10}}>
        <TouchableOpacity onPress={()=>alert(item.paymentType)}>
      <View
        style={styles.payWrapper}>
        <View style={styles.payInnerWrapper}>
          <View style={styles.cardBorder}>
          <Image source={item.image} style={{width:25,height:25}} />

          </View>
          <Text style={styles.cardOptions}>{item.paymentType}</Text>
        </View>
        <View style={{alignItems: 'flex-end'}}>
          <Image
            source={Images.backArrow}
            style={{transform: [{rotate: '180deg'}]}}
          />
        </View>
      </View>
      </TouchableOpacity>

      {index!==2 &&(
        <View style={styles.borderLineStyle} />
        )}
      </View>
    );
  };

  render() {

    const {isEnabled, preferedPaymentArray, cardArray, paymentOptionsArray} =
      this.state;
    return (
      <SafeAreaView style={styles.mainContainer}>
        <NavigationHeader
          didTapOnLeftButton={this._didTapOnBackButton}
          title={'Payment'}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{marginTop: 10}}>
            <View style={styles.deliveryContainer}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginHorizontal: 20,
                }}>
                <View>
                  <View style={styles.deliveryRowContainer}>
                    <Text style={styles.deliverTextStyle}>Deliver to Home</Text>
                    <View style={styles.pointStyle} />
                    <Text style={{color:Constants.APP_TEXT_BLACK_COLOR}}> 20 Mins</Text>
                  </View>
                  <Text style={styles.subDeliveryText}>
                    8-23/123 Jumeriah Village, Street 73
                  </Text>
                </View>
                <View>
                  <TouchableOpacity>
                    <Text style={styles.changeButtonStyle}>Change</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View
                style={styles.orderContainer}>
                <Text style={styles.orderText}>Order Total</Text>
                <Text style={styles.orderText}>AED 18</Text>
              </View>
            </View>
            <View
              style={styles.subContainer}>
              <View
                style={styles.imageWrapper}>
                <Image
                  source={Images.yalaWallet}
                  style={styles.yalaCardStyle}
                />
                <View style={{marginHorizontal: 20}}>
                  <Text style={styles.yalaText}>Yalah Wallet Balance</Text>
                  <Text style={styles.yalaText1}>AED 425</Text>
                </View>
                <Switch
                  trackColor={{
                    false:Constants.APP_BLACK_COLOR, 
                    true:Constants.APP_DARK_GREY,
                  }}
                  thumbColor={Constants.APP_WHITE_COLOR}
                  ios_backgroundColor={Constants.APP_DARK_GREY}
                  onValueChange={this._didTapOnSwitch}
                  value={isEnabled}
                />
              </View>
            </View>
            <View style={styles.container}>
              <View style={styles.cardContainer}>
                <Text style={styles.cardTitle}>{'PREFERRED PAYMENT'}</Text>
              </View>
              <FlatList
                data={preferedPaymentArray}
                renderItem={({item,index}) => this._renderPaymentArray({item,index})}
                extraData={this.state}
              />
            </View>

            <View style={styles.container}>
              <View style={styles.cardContainer}>
                <Text style={styles.cardTitle}>{'CREDIT/DEBIT CARD'}</Text>
              </View>
              <FlatList
                data={cardArray}
                renderItem={({item, index}) =>
                  this._renderCardArray({item, index})
                }
                extraData={this.state}
              />
              <TouchableOpacity
                style={styles.addButtonContainer}
                onPress={()=>alert("Add Card")}
                >
                <Image
                  style={{width: 20, height: 20}}
                  source={Images.addButton}
                />
                <Text
                  style={styles.addButtonText}>
                  Add Card
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.container}>
              <View style={styles.cardContainer}>
                <Text style={styles.cardTitle}>{'OTHER PAYMENT METHOD'}</Text>
              </View>
              <FlatList
                data={paymentOptionsArray}
                renderItem={({item,index}) => this._renderPaymentOptions({item,index})}
                extraData={this.state}
              />
            </View>

            <Text style={styles.bottomText}>
              Pay using <Text style={styles.walletText}>Apple Pay{`${isEnabled ? ' &  Yalah Wallet' : ''}`}</Text>
            </Text>
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => alert('Payment Success')}>
              <Text style={styles.buttonText}>Pay AED 18</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default PaymentScreen;
