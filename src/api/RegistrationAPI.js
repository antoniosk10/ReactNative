import axios from 'axios';
import {Alert} from 'react-native';
import {setItemStorage} from './AsyncStorage';

const RegistrationAPI = (body, callback) => {
  axios
    .post('https://reqres.in/api/register', body)
    .then(function (response) {
      setItemStorage('token', response.data.token);
      callback();
    })
    .catch(function () {
      Alert.alert('Missing password', 'Type a password!');
    });
};

export default RegistrationAPI;
