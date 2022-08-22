/**
  Created by Linu Sherin Issac
 * on August 17, 2022
 * NavigationHeader - Navigation header component.
 */

  import Images from '../config/images';
  import React, {Component} from 'react';
  import Constants from '../config/constants';
  import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
  
  class NavigationHeader extends Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
  
    render() {
      const {
        title,
        didTapOnLeftButton,
        extraStyle,
      } = this.props;
      return (
        <View>
          <View
            style={[
              styles.container,
              {
                backgroundColor: Constants.APP_WHITE_COLOR,
              },
              extraStyle,
            ]}>
            <TouchableOpacity
              onPress={didTapOnLeftButton && didTapOnLeftButton}
              hitSlop={{top: 20, bottom: 20, left: 50, right: 50}}>
              <Image
                source={Images.backArrow}
                resizeMode={'contain'}
                style={{
                  width:28,
                  height:24,
                  tintColor: Constants.APP_BLACK_COLOR,
                  marginLeft:24
                }}
              />
            </TouchableOpacity>
            <Text style={styles.titleText}>{title}</Text>
            <View style={{width: 20}} />
          </View>
        </View>
      );
    }
  }
  const styles = StyleSheet.create({
    container: {
      height: 65,
      flexDirection: 'row',
      backgroundColor: Constants.APP_WHITE_COLOR,
      alignItems: 'center',
    },
  
    titleText: {
      fontSize: 24,
      flex: 1,
      fontWeight:'700',
      textAlign: 'center',
      color: Constants.APP_BLACK_COLOR,
      fontFamily:Constants.Fonts.BOLD
    },
  });
  
  export default NavigationHeader;
  