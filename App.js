import React, { useEffect } from 'react';
import {
  StyleSheet,
  Dimensions,
  Text,
  View,
} from 'react-native';
import Orientation from 'react-native-orientation-locker';
import DeviceInfo from 'react-native-device-info';
import { Icon } from './src/components';

const SCREEN = Dimensions.get('window');

const App = (props) => {
  useEffect(() => {
    DeviceInfo.isTablet().then((res) => {
      window.isTablet = res;
      if (res) {
        Orientation.lockToLandscape();
      } else {
        Orientation.lockToPortrait();
      }
    });
  }, []);

  return (
    <View style={[]}>
      <Text>hehe</Text>
      <Text>hehe</Text>
      <Text>hehe</Text>
      <Text>hehe</Text>
      <Text>hehe</Text>
      <Text>hehe</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    backgroundColor: 'red',
    bottom: 0,
    right: 0,
  },
  review: {
    position: 'absolute',
  },
});

export default App;
