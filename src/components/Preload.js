import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {getItemStorage} from './../api/AsyncStorage';
import LottieView from 'lottie-react-native';

const token = getItemStorage('token');

const Preload = () => {
  const navigation = useNavigation();

  function openPage() {
    token.then(data =>
      data ? navigation.navigate('List') : navigation.navigate('Auth'),
    );
  }

  return (
    <LottieView
      source={require('./../assets/animation/sample.json')}
      autoPlay
      onAnimationFinish={openPage}
      loop={false}
    />
  );
};

export default Preload;
