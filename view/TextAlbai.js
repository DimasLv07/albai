// CustomText.js
import React from 'react';
import {Text, StyleSheet} from 'react-native';

export default function TextAlbai(props) {
  return (
    <Text style={[styles.defaultStyle, props.style]}>{props.children}</Text>
  );
}

const styles = StyleSheet.create({
  // ... add your default style here
  defaultStyle: {
    fontFamily: 'NunitoSans-Regular',
    color: '#282828'
  },
});
