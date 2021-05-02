import React from 'react';
import {View, Text} from 'react-native';

const MainHeader = ({whiteText, blackText, size}) => {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'row',
      }}>
      <Text
        style={{
          color: 'white',
          fontFamily: 'atomic-age',
          fontSize: size || 50,
        }}>
        {whiteText}
      </Text>
      <Text
        style={{
          color: 'black',
          fontFamily: 'atomic-age',
          fontSize: size || 50,
        }}>
        {blackText}
      </Text>
    </View>
  );
};

export default MainHeader;
