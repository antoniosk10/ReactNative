import React from 'react';
import PageList from './src/components/PageList';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import store from './src/redux/store/store';
import {createStackNavigator} from '@react-navigation/stack';
import PageAuth from './src/components/PageAuth';
import Preload from './src/components/Preload';

const Stack = createStackNavigator();
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={'Preload'}
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Preload" component={Preload} />
          <Stack.Screen name="Auth" component={PageAuth} />
          <Stack.Screen name="List" component={PageList} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
