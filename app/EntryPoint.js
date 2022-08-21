/**
 * Created by Linu Sherin Issac
 * on August 17, 2022
 * Entrypoint - Everthing starts from the entrypoint.
 */

import Navigator from './navigation';
import React, {Component} from 'react';

import {ActivityIndicator, Text, TextInput} from 'react-native';

export default class EntryPoint extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.disableYellowBox = true;
  }

  render() {
    return <Navigator />;
  }
}
