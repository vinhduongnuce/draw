import React, { Component } from 'react';
import { StyleSheet, Text, View, I18nManager, Animated } from 'react-native';

import { FlatList, RectButton } from 'react-native-gesture-handler';

//  To toggle LTR/RTL uncomment the next line
// I18nManager.allowRTL(true);

import { Swipeable } from './src/components';

export default class Example extends Component {
  renderItem = ({item, index}) => {
    return (
      <Swipeable
        renderRight={()=> (
          <View>
            <RectButton>
              <Text style={styles.actionText}>Text</Text>
            </RectButton>
          </View>
        )}
        renderLeft = {() => (
          <View style={{ transform: [{ translateX: 0 }] }}>
            <RectButton>
              <Text style={styles.actionText}>Haha</Text>
            </RectButton>
          </View>
        )}
      >
        <RectButton style={styles.rectButton} onPress={() => alert(item.from)}>
          <Text style={styles.fromText}>{item.from}</Text>
          <Text numberOfLines={2} style={styles.messageText}>
            {item.message}
          </Text>
          <Text style={styles.dateText}>
            {item.when} {'❭'}
          </Text>
        </RectButton>
      </Swipeable>
    )
  }
  render() {
    return (
      <FlatList
        data={DATA}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        renderItem={this.renderItem}
        keyExtractor={(item, index) => `message ${index}`}
      />
    );
  }
}

const styles = StyleSheet.create({
  rectButton: {
    flex: 1,
    height: 80,
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  separator: {
    backgroundColor: 'rgb(200, 199, 204)',
    height: StyleSheet.hairlineWidth,
  },
  fromText: {
    fontWeight: 'bold',
    backgroundColor: 'transparent',
  },
  messageText: {
    color: '#999',
    backgroundColor: 'transparent',
  },
  dateText: {
    backgroundColor: 'transparent',
    position: 'absolute',
    right: 20,
    top: 10,
    color: '#999',
    fontWeight: 'bold',
  },
});

const DATA = [
  {
    from: "D'Artagnan",
    when: '3:11 PM',
    message:
      'Unus pro omnibus, omnes pro uno. Nunc scelerisque, massa non lacinia porta, quam odio dapibus enim, nec tincidunt dolor leo non neque',
  },
  {
    from: 'Aramis',
    when: '11:46 AM',
    message:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus hendrerit ligula dignissim maximus aliquet. Integer tincidunt, tortor at finibus molestie, ex tellus laoreet libero, lobortis consectetur nisl diam viverra justo.',
  },
  {
    from: 'Athos',
    when: '6:06 AM',
    message:
      'Sed non arcu ullamcorper, eleifend velit eu, tristique metus. Duis id sapien eu orci varius malesuada et ac ipsum. Ut a magna vel urna tristique sagittis et dapibus augue. Vivamus non mauris a turpis auctor sagittis vitae vel ex. Curabitur accumsan quis mauris quis venenatis.',
  },
  {
    from: 'Porthos',
    when: 'Yesterday',
    message:
      'Vivamus id condimentum lorem. Duis semper euismod luctus. Morbi maximus urna ut mi tempus fermentum. Nam eget dui sed ligula rutrum venenatis.',
  },
  {
    from: 'Domestos',
    when: '2 days ago',
    message:
      'Aliquam imperdiet dolor eget aliquet feugiat. Fusce tincidunt mi diam. Pellentesque cursus semper sem. Aliquam ut ullamcorper massa, sed tincidunt eros.',
  },
  {
    from: 'Cardinal Richelieu',
    when: '2 days ago',
    message:
      'Pellentesque id quam ac tortor pellentesque tempor tristique ut nunc. Pellentesque posuere ut massa eget imperdiet. Ut at nisi magna. Ut volutpat tellus ut est viverra, eu egestas ex tincidunt. Cras tellus tellus, fringilla eget massa in, ultricies maximus eros.',
  },
];
