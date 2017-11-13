// import library
import React from 'react';
import { Text, View } from 'react-native';

// create Component
const Header = (props) => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#f8f8f8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    elevation: 5
  },
  textStyle: {
    fontSize: 20
  }
};

// make ocmponent available from other parts
export default Header;
