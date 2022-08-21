/**
 * Created by Linu Sherin Issac
 * on August 08, 2022
 * PreLoaderScreen - UI starts from this screen (Initial data loading token updating, netinfo updating etc.)
 */

import {View, Animated, StatusBar} from 'react-native';
import Images from '../config/images';
import React, {Component} from 'react';
import NetInfo from '@react-native-community/netinfo';
import EmptyDataPlaceholder from '../components/emptyDataPlaceholder';
import PaymentScreen from "../screen/PaymentScreen"

class PreLoaderScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNetworkAvailableChecked: false,
     
    };
  }

  componentDidMount() {
    this.unsubscribe = NetInfo.addEventListener(state => {
      this._handleConnectivityChange(state);
    });
  }

  _checkAppIntroStatus() {
    this.props.navigation.navigate('PaymentScreen');
  }

  _handleConnectivityChange = state => {
    let networkStatus = state.isConnected;
    if (networkStatus) {
      this._checkAppIntroStatus();
    }
  };

  render() {
    const {isNetworkAvailable} = this.props;

    return (
      <View style={{flex: 1}}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent={true}
        />

        {/* {!isNetworkAvailable && (
          <View style={{flex: 1}}>
            <EmptyDataPlaceholder
              titleText={'No internet connection'}
              descriptionText={
                'Please restore your internet connection and try again.'
              }
              placeHolderImage={Images.NetworkError}
              buttonText={'Try again'}
              didTapOnButton={() => {
                setTimeout(() => {
                  this._handleConnectivityChange({isConnected: false});
                }, 1000);
              }}
            />
          </View>
        )} */}
      </View>
    );
  }
}


export default PreLoaderScreen;
