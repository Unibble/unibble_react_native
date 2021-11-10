import React from 'react';
import {
  Text as RNText,
  ColorValue,
  TextProps as RNTextProps,
  FlexStyle,
} from 'react-native';

const Text = ({ children, fontSize, fontFamily, color, style }) => (
  <RNText style={{ fontFamily: fontFamily, fontSize, color, ...style }}>
    {children}
  </RNText>
);

export default Text;
