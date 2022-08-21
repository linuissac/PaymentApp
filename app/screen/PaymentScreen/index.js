/**
 * Created by Linu Sherin Issac
 * on August 17, 2022
 * PaymentScreenContainer - PaymentScreenContainer
 */

 import {connect} from 'react-redux';
 import React, {Component} from 'react';
 import PaymentScreen from './PaymentScreen';
 
 class PaymentScreenContainer extends Component {
   constructor(props) {
     super(props);
   }
 
   render() {
     return <PaymentScreen {...this.props} />;
   }
 }
 
 export default PaymentScreenContainer;
 