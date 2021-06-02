import React, {useState, useEffect} from 'react';
import {StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Login from './Login';
import Registration from './Registration';
import {getItemStorage} from './../api/AsyncStorage';

const token = getItemStorage('token');

const PageAuth = ({navigation}) => {
  const [page, changePage] = useState('login');

  useEffect(() => {
    token.then(data => (data ? navigation.navigate('List') : null));
  }, [navigation]);

  return (
    <LinearGradient
      colors={['#8EC5FC', '#04659C']}
      style={styles.linearGradient}>
      {page === 'login' ? (
        <Login changePage={changePage} />
      ) : (
        <Registration changePage={changePage} />
      )}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
});

export default PageAuth;
