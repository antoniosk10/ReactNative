import React, {useRef, useEffect} from 'react';
import {Animated, Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import {getItemStorage} from './../api/AsyncStorage';

const token = getItemStorage('token');

const Preload = () => {
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const translateYAnim = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();

  useEffect(() => {
    Animated.parallel([
      Animated.timing(translateYAnim, {
        toValue: -100,
        duration: 1500,
        delay: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 1500,
        delay: 1000,
        useNativeDriver: true,
      }),
    ]).start(() => {
      token.then(data =>
        data ? navigation.navigate('List') : navigation.navigate('Auth'),
      );
    });
  }, [translateYAnim, fadeAnim, navigation]);

  return (
    <LinearGradient colors={['#8EC5FC', '#04659C']} style={styles.container}>
      <Animated.View
        style={[
          styles.circle,
          {opacity: fadeAnim, translateY: translateYAnim},
        ]}>
        <Text style={styles.text}>My App</Text>
      </Animated.View>
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  circle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 200,
    borderRadius: 200 / 2,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
  },
});

export default Preload;
