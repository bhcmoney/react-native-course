import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.text}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center', // flex-start, flex-end
    height: 60,
    shadowColor: '#000', //ios only
    shadowOffset: { width: 0, height: 2 }, //ios only
    shadowOpacity: 0.9, //ios only
    elevation: 2, //for android
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  }
};

export { Header };
