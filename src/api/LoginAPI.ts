import axios from 'axios';
import {Alert} from 'react-native';
import {setItemStorage} from './AsyncStorage';
import {LoginInterface} from './types';

const LoginAPI = (body: LoginInterface, callback: () => void) => {
  axios
    .post('https://reqres.in/api/login', body)
    .then(function (response) {
      setItemStorage('token', response.data.token);
      callback();
    })
    .catch(function () {
      Alert.alert('User not exists', 'Register please!');
    });
};

export default LoginAPI;
