/**
* Created by nghinv on Fri Jul 27 2018
* Copyright (c) 2018 nghinv
*/

import React, { PureComponent } from 'react';
import { ViewStyle } from 'react-native';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import iconMoonConfig from '../../../assets/fonts/selection.json';

const IconVector = createIconSetFromIcoMoon(iconMoonConfig);

class Icon extends PureComponent<Props> {
  render() {
    return (
      <IconVector
        {...this.props}
      />
    );
  }
}

Icon.defaultProps = {

};

Icon.propTypes = {

};

interface Props {
  name: string;
  size?: number;
  color?: string;
  style?: ViewStyle;
}

export default Icon;
