import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  TouchableHighlight,
} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import RegistrationAPI from './../api/RegistrationAPI';
import {useNavigation} from '@react-navigation/native';

const Registration = ({changePage}) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();
  const navigation = useNavigation();
  const [errorPass, changeErrorPass] = useState(false);

  const onSubmit = data => {
    const body = {
      email: data.Login,
      password: data.Password,
    };

    if (data.Password !== data.PasswordConfirm) {
      changeErrorPass('Wrong confirm password!');
      return;
    }

    RegistrationAPI(body, () => navigation.navigate('List'));
  };

  return (
    <>
      <Text style={styles.title}>Registration</Text>
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
        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={value => onChange(value)}
              value={value}
              placeholder={'Password'}
              secureTextEntry={true}
            />
          )}
          name="Password"
          defaultValue=""
        />
        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={value => {
                changeErrorPass(false);
                onChange(value);
              }}
              value={value}
              placeholder={'Confirm password'}
              secureTextEntry={true}
            />
          )}
          name="PasswordConfirm"
          defaultValue=""
        />
        {errorPass ? (
          <Text style={styles.errorMessage}>{errorPass}</Text>
        ) : null}
        <TouchableOpacity style={styles.btn} onPress={handleSubmit(onSubmit)}>
          <Text style={styles.textBtn}>Sign up</Text>
        </TouchableOpacity>
        <TouchableHighlight
          style={styles.backLink}
          onPress={() => changePage('login')}>
          <Text style={styles.backLinkText}>Sign In</Text>
        </TouchableHighlight>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 10,
    paddingHorizontal: 10,
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
  backLink: {
    alignSelf: 'center',
    borderRadius: 20,
  },
  backLinkText: {
    color: '#fff',
    paddingHorizontal: 5,
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

export default Registration;
