import React, {useEffect} from 'react';
import {View, Image, Dimensions, BackHandler} from 'react-native';
import addBackgroundImage from '../../components/addBackgroundImage/addBackgroundImage';

import MainHeader from '../../components/Menu/components/MainHeader/MainHeader';
const Menu = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Main');
    }, 2000);
  }, []);
  const size = Dimensions.get('window').width * 0.4;
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Image
        style={{width: size, height: size, resizeMode: 'center'}}
        source={require('../../assets/crown.png')}
      />
      <MainHeader whiteText="CHECK" blackText="ERS" />

      <MainHeader whiteText="WE WANT YOU" blackText="TO WIN" size={22} />
    </View>
  );
};

export default addBackgroundImage(Menu);
