import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';

if (!__DEV__) {
  global.console = {
    info: () => { },
    log: () => { },
    assert: () => { },
    warn: () => { },
    debug: () => { },
    error: () => { },
    time: () => { },
    timeEnd: () => { },
  };
}

const App = require('./App').default;

console.disableYellowBox = true;

AppRegistry.registerComponent('draw', () => App);
