/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Orientation from 'react-native-orientation-locker';
import DeviceInfo from 'react-native-device-info';

import Icon from './src/components/Icon';

const App = () => {
  useEffect(() => {
    DeviceInfo.isTablet().then((res) => {
      console.log('res', res);
      window.isTablet = res;
      if (res) {
        Orientation.lockToLandscape();
      } else {
        Orientation.lockToPortrait();
      }
    })
    
  }, [])
  return (
    <>
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Icon name='youtube' size={36} color='red'/>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
});

export default App;
