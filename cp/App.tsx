/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  Text,
  useColorScheme,
  View,
  StyleSheet
} from 'react-native';
import LoginPage from './src/pages/LoginPage';
import HomePage from './src/pages/HomePage';
import OutstationScan from './src/pages/OutstationScan';
import CheckboxComponent from './src/pages/OutstationScan';
import AwbPincodeVerify from './src/pages/AwbPincodeVerify';
import BookingPage from './src/pages/BookingPage';
import DropdownComponent from './src/pages/Hi';


function App(): JSX.Element {
  return (
    // <DropdownComponent></DropdownComponent>
    <BookingPage></BookingPage>
    // <AwbPincodeVerify></AwbPincodeVerify>
    // <OutstationScan></OutstationScan>
    // <LoginPage />
    // <HomePage></HomePage>
  );
}

export default App;
