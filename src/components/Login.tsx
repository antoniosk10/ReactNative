import React, {FC} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';
import LoginAPI from '../api/LoginAPI';
import {LoginInterface, LoginAPIInterface} from '../api/types';
import {AuthStatus} from './types';

type Props = {
  changePage: (arg: AuthStatus) => void;
};

const Login: FC<Props> = ({changePage}) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();
  const navigation = useNavigation();

  const onSubmit = (data: LoginAPIInterface) => {
    const body: LoginInterface = {
      email: data.Login,
      password: data.Password,
    };
    LoginAPI(body, () => {
      navigation.navigate('List');
    });
  };

  return (
    <View>
      <Text style={styles.title}>Login</Text>
      <View>
        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              style={[styles.input, errors.Login ? styles.invalid : null]}
              onBlur={onBlur}
              onChangeText={value => onChange(value)}
              value={value}
              placeholder={'Login'}
              keyboardType={'email-address'}
              autoCapitalize={'none'}
            />
          )}
          name="Login"
          rules={{
            required: 'Empty field Login',
            pattern: {
              value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
              message: 'Entered value does not match email format',
            },
          }}
          defaultValue="eve.holt@reqres.in"
        />
        {errors.Login ? (
          <Text style={styles.errorMessage}>{errors.Login.message}</Text>
        ) : null}
        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              style={[styles.input, errors.Password ? styles.invalid : null]}
              onBlur={onBlur}
              onChangeText={value => onChange(value)}
              value={value}
              placeholder={'Password'}
              secureTextEntry={true}
            />
          )}
          name="Password"
          rules={{
            required: 'Empty field Password',
            pattern: {
              value: /^(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{2,}$/,
              message:
                'Password must contain one capital letter and one number',
            },
          }}
          defaultValue=""
        />
        {errors.Password ? (
          <Text style={styles.errorMessage}>{errors.Password.message}</Text>
        ) : null}
        <TouchableOpacity style={styles.btn} onPress={handleSubmit(onSubmit)}>
          <Text style={styles.textBtn}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.btn, styles.btnLight]}
          onPress={() => changePage('registration')}>
          <Text style={[styles.textBtn, styles.textBtnLight]}>
            Registration
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 30,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 10,
    paddingHorizontal: 10,
    color: '#000',
  },
  btn: {
    marginBottom: 10,
    backgroundColor: '#000',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  btnLight: {
    backgroundColor: '#f0f0f0',
    color: '#000',
  },
  textBtn: {
    textAlign: 'center',
    fontSize: 20,
    color: '#fff',
  },
  textBtnLight: {
    color: '#000',
  },
  title: {
    fontSize: 30,
    color: '#fff',
    paddingBottom: 20,
    textAlign: 'center',
  },
  invalid: {
    borderColor: '#b51800',
    borderWidth: 3,
  },
  errorMessage: {
    color: '#b51800',
    marginBottom: 10,
  },
});

export default Login;
