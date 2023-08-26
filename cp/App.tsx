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


function App(): JSX.Element {
  return (
    // <LoginPage />
    <HomePage></HomePage>
  );
}

export default App;
