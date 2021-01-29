import React, { useEffect } from 'react';
import {
  StyleSheet,
  Dimensions,
  Text,
  View,
} from 'react-native';
import Orientation from 'react-native-orientation-locker';
import DeviceInfo from 'react-native-device-info';
import Animated, {
  useSharedValue,
  withSpring,
  useAnimatedStyle,
  useAnimatedGestureHandler,
  useAnimatedRef,
  measure,
  useAnimatedProps,
  interpolate,
  Easing,
  withTiming,
} from 'react-native-reanimated';
import Svg, { Path, Circle } from 'react-native-svg';
import { PanGestureHandler, TapGestureHandler } from 'react-native-gesture-handler';

import { Icon } from './src/components';

const SCREEN = Dimensions.get('window');

const AnimatedPath = Animated.createAnimatedComponent(Path);
const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const App = (props) => {
  const widthButton = props.width || 50;
  const heightButton = props.height || 50;
  const radius = props.radius || 50;
  const paddingLeft = props.paddingLeft || 120;
  const paddingTop = props.paddingTop || 60;
  const contentStyle = props.contentStyle || {};
  const buttonref = useAnimatedRef();
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

  const width = useSharedValue(0);
  const height = useSharedValue(0);
  const d1 = useSharedValue({x: 0, y: 0});
  const d2 = useSharedValue({x: 0, y: 0});
  const d3 = useSharedValue({x: 0, y: 0});
  const d4 = useSharedValue({x: 0, y: 0});
  const d5 = useSharedValue({x: 0, y: 0});
  const d6 = useSharedValue({x: 0, y: 0});
  const d7 = useSharedValue({x: 0, y: 0});
  const d8 = useSharedValue({x: 0, y: 0});
  const xr = useSharedValue(0);
  const yr = useSharedValue(0);

  const animatedProps = useAnimatedProps(() => {
    const getPosition = (x, y) => {
      if (width.value === 0) {
        return {
          x: 0,
          y: 0,
        }
      }
      const D = Math.sqrt((y - yr.value)**2 + (x-xr.value)**2);
      const d = D * width.value / SCREEN.width;
      const _d1 = xr.value - d * (xr.value - x) / D;
      const _d2 = yr.value - d * (yr.value - y) / D;
      return {
        x: _d1,
        y: _d2,
      }
    }
    d1.value = getPosition(0, 0);
    d2.value = getPosition(0, SCREEN.height/2.5);
    d3.value = getPosition(SCREEN.width/3, 90);
    d4.value = getPosition(2*SCREEN.width/3, 150);
    d5.value = getPosition(SCREEN.width, 60);
    d6.value = getPosition(0, -SCREEN.height/2.5-100);
    d7.value = getPosition(2*SCREEN.width/3, 0);
    d8.value = getPosition(SCREEN.width/3, 0);
    const path = `
      m${d1.value.x},${d1.value.y}
      l${d2.value.x},${d2.value.y}
      c${d3.value.x},${d3.value.y} ${d4.value.x},${d4.value.y} ${d5.value.x},${d5.value.y}
      l${d6.value.x},${d6.value.y}
      l${d7.value.x},${d7.value.y}
      l${d8.value.x},${d8.value.y}
      z`;
    return {
      d: path,
    };
  });

  const animatedStyle = useAnimatedStyle(() => ({
    width: width.value,
    height: height.value,
  }));

  const animatedContentStyle = useAnimatedStyle(() => {
    const left = width.value > 0 ? paddingLeft : 0;
    const top = height.value > 0 ? paddingTop : 0;
    return {
      width: width.value > SCREEN.width - left ? SCREEN.width - left : 0,
      height: height.value > 0 ? 2 * SCREEN.height / 3 : 0,
      position: 'absolute',
      alignItems: 'flex-start',
      top,
      left,
    }
  });

  const animatedCircleProps = useAnimatedProps(() => {
    return {
      r: radius * width.value / SCREEN.width,
      cx: xr.value,
      cy: yr.value,
    };
  });

  const onGestureEvent = useAnimatedGestureHandler({
    onFinish: () => {
      const measured = measure(buttonref);
      console.log('tap tap', measured);
      width.value = width.value > 0 ? 0 : withTiming(SCREEN.width, {
        duration: 500,
        easing: Easing.out(Easing.exp),
      });
      height.value = height.value > 0 ? 0 : withTiming(2 * SCREEN.height / 3, {
        duration: 500,
        easing: Easing.out(Easing.exp),
      });
      xr.value = measured.pageX + widthButton / 2;
      yr.value = measured.pageY + heightButton / 2;
    },
  });

  return (
    <Animated.View style={styles.container}>
      <Animated.View style={[styles.review, animatedStyle]}>
        <Svg width={SCREEN.width} height={SCREEN.height} viewBox={`0 0 ${SCREEN.width} ${SCREEN.height}`}>
          <AnimatedPath animatedProps={animatedProps} fill="blue" />
          <AnimatedCircle animatedProps={animatedCircleProps} fill="pink" />
          <TapGestureHandler
            onGestureEvent={onGestureEvent}
          >
            <Animated.View ref={buttonref} style={{marginLeft: 100, width: widthButton, height: heightButton}}>
              <Icon name="youtube" size={widthButton} color="red" />
            </Animated.View>
          </TapGestureHandler>
        </Svg>
      </Animated.View>
      <Animated.View style={[animatedContentStyle, contentStyle]}>
        <Text>hehe</Text>
        <Text>hehe</Text>
        <Text>hehe</Text>
        <Text>hehe</Text>
        <Text>hehe</Text>
        <Text>hehe</Text>
      </Animated.View>
    </Animated.View>
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
