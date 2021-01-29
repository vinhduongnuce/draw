import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Dimensions,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { RectButton, DrawerLayout } from 'react-native-gesture-handler';
import Drawer from './src/components/Drawer'


const SCREEN = Dimensions.get('window');

const Page = () => {
  const [fromLeft, setFromLeft] = useState(false);
  return (
    <Drawer
      type={0}
      overlayColor={'#00000000'}
      fromLeft={fromLeft}
      content={() => {
        return (
          <View style={styles.drawerContainer}>
            <Text style={styles.drawerText}>I am in the drawer!</Text>
            <Text style={styles.drawerText}>I am in the drawer!</Text>
            <Text style={styles.drawerText}>I am in the drawer!</Text>
            <Text style={styles.drawerText}>I am in the drawer!</Text>
            <Text style={styles.drawerText}>I am in the drawer!</Text>
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
    </Drawer>
  )
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

export default Page;