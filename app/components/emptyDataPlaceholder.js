/**
  Created by Linu Sherin Issac
 * on August 08, 2022
 * EmptyDataPlaceholder -
 */

import React, {Component} from 'react';
import Constants from '../config/constants';
import {View, Image, Text, TouchableOpacity} from 'react-native';

export default class EmptyDataPlaceholder extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      titleText,
      descriptionText,
      placeHolderImage,
      imageStyle,
      buttonText,
      didTapOnButton,
    } = this.props;
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: Constants.APP_WHITE_COLOR,
        }}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: -150,
          }}>
          <Image
            resizeMode="contain"
            style={[
              {
                width: 100,
                height: 100,
              },
              imageStyle,
            ]}
            source={placeHolderImage}
          />
          <Text
            style={{
              
              fontSize: 20,
              color: 'rgb(112,112,112)',
              textAlign: 'center',
            }}>
            {titleText}
          </Text>
          <Text
            style={{
              
              fontSize: 14,
              color: 'rgb(194,194,194)',
              paddingHorizontal: 105,
              textAlign: 'center',
              marginTop: 10,
            }}>
            {descriptionText}
          </Text>

          {buttonText && buttonText.length > 0 && (
            <TouchableOpacity
              style={{
                height: 30,
                width: 125,
                borderRadius: 5,
                borderWidth: 1,
                marginTop: 25,
                borderColor: Constants.APP_THEME_COLOR,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: Constants.APP_WHITE_COLOR,
              }}
              onPress={didTapOnButton && didTapOnButton}>
              <Text
                style={{
                  fontSize: 14,
                  textAlign: 'left',
                  color: Constants.APP_THEME_COLOR,
                }}>
                {buttonText}
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  }
}
