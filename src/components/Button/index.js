/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from 'react-native-reanimated';

const Button = (props) => {
  const {title, containerStyle, titleStyle} = props;
  const width = useSharedValue(50);

  const style = useAnimatedStyle(() => {
    return {
      width: withTiming(width.value, {
        duration: 100,
        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
      }),
    };
  });

  return (
    <View style={[containerStyle]}>
      <Animated.View style={[style, styles.overlay]} />
      <TouchableOpacity
        onPress={() => (width.value = Math.random() * 300)}
      >
        <Text style={[titleStyle]}>{title || ''}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: 'red'
  }
});

export default Button;
