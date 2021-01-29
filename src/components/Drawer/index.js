import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Animated,
  View,
  TextInput,
} from 'react-native';

import { RectButton, DrawerLayout } from 'react-native-gesture-handler';

const TYPES = ['front', 'back', 'back', 'slide'];
const PARALLAX = [false, false, true, false];

export default class Example extends Component {
  renderDrawer = () => {
    return (
      <View style={styles.drawerContainer}>
        <Text style={styles.drawerText}>I am in the drawer!</Text>
      </View>
    );
  };

  render() {
    const drawerType = TYPES[this.props.type];
    const parallax = PARALLAX[this.props.type];
    return (
      <View style={styles.container}>
        <DrawerLayout
          ref={drawer => {
            this.drawer = drawer;
          }}
          drawerWidth={200}
          keyboardDismissMode="on-drag"
          drawerPosition={
            this.props.fromLeft
              ? DrawerLayout.positions.Left
              : DrawerLayout.positions.Right
          }
          drawerType={drawerType}
          drawerBackgroundColor="#ddd"
          overlayColor={drawerType === 'front' ? this.props.overlayColor : '#00000000'}
          renderNavigationView={
            this.props.content
          }
          contentContainerStyle={
            drawerType === 'front'
              ? {}
              : Platform.select({
                  ios: {
                    shadowColor: '#000',
                    shadowOpacity: 0.5,
                    shadowOffset: { width: 0, height: 2 },
                    shadowRadius: 60,
                  },
                  android: {
                    elevation: 100,
                    backgroundColor: '#000',
                  },
                })
          }>
          {this.props.children}
        </DrawerLayout>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  page: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    paddingTop: 40,
    backgroundColor: 'gray',
  },
  pageText: {
    fontSize: 21,
    color: 'white',
  },
  rectButton: {
    height: 60,
    padding: 10,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    backgroundColor: 'white',
  },
  rectButtonText: {
    backgroundColor: 'transparent',
  },
  drawerContainer: {
    flex: 1,
    paddingTop: 10,
  },
  pageInput: {
    height: 60,
    padding: 10,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    backgroundColor: '#eee',
  },
  drawerText: {
    margin: 10,
    fontSize: 15,
    textAlign: 'left',
  },
});

{/* <Drawer
  type={0}
  overlayColor={'#00000000'}
  fromLeft={fromLeft}
  content={() => {
    return (
      <View style={styles.drawerContainer}>
        <Text style={styles.drawerText}>I am in the drawer!</Text>
      </View>
    )
  }}
>
  <View style={styles.page}>
    <Text style={styles.pageText}>Hi 👋</Text>
    <RectButton style={styles.rectButton} onPress={() => setFromLeft(!fromLeft)}>
      <Text style={styles.rectButtonText}>
        Drawer to the {fromLeft ? 'left' : 'right'}! -> Flip
      </Text>
    </RectButton>
    <TextInput
      style={styles.pageInput}
      placeholder="Just an input field to test kb dismiss mode"
    />
  </View>
</Drawer> */}