import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Login from './Login';
import Registration from './Registration';

const PageAuth = () => {
  const [page, changePage] = useState('login');

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
