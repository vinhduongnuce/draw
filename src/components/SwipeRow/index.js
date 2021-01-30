import React, { Component } from 'react';
import { Animated, StyleSheet, } from 'react-native';

import { Swipeable } from 'react-native-gesture-handler';

export default class SwipeRow extends Component {
  updateRef = ref => {
    this._swipeableRow = ref;
  };
  close = () => {
    this._swipeableRow.close();
  };
  render() {
    const { children } = this.props;
    return (
      <Swipeable
        ref={this.updateRef}
        friction={2}
        leftThreshold={30}
        rightThreshold={40}
        renderLeftActions={this.props.renderLeft}
        renderRightActions={this.props.renderRight}>
        {children}
      </Swipeable>
    );
  }
}

const styles = StyleSheet.create({
  leftAction: {
    flex: 1,
    backgroundColor: '#497AFC',
    justifyContent: 'center',
  },
  actionText: {
    color: 'white',
    fontSize: 16,
    backgroundColor: 'transparent',
    padding: 10,
  },
  rightAction: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});



// renderItem = ({item, index}) => {
//   return (
//     <AppleStyleSwipeableRow
//       renderRight={()=> (
//         <View style={{ transform: [{ translateX: 0 }] }}>
//           <RectButton>
//             <Text style={styles.actionText}>Text</Text>
//           </RectButton>
//         </View>
//       )}
//       renderLeft = {() => (
//         <View style={{ transform: [{ translateX: 0 }] }}>
//           <RectButton>
//             <Text style={styles.actionText}>Haha</Text>
//           </RectButton>
//         </View>
//       )}
//     >
//       <RectButton style={styles.rectButton} onPress={() => alert(item.from)}>
//         <Text style={styles.fromText}>{item.from}</Text>
//         <Text numberOfLines={2} style={styles.messageText}>
//           {item.message}
//         </Text>
//         <Text style={styles.dateText}>
//           {item.when} {'❭'}
//         </Text>
//       </RectButton>
//     </AppleStyleSwipeableRow>
//   )
// }
// render() {
//   return (
//     <FlatList
//       data={DATA}
//       ItemSeparatorComponent={() => <View style={styles.separator} />}
//       renderItem={this.renderItem}
//       keyExtractor={(item, index) => `message ${index}`}
//     />
//   );
// }
