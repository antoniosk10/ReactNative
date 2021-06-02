import React from 'react';
import PageList from './src/components/PageList';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import store from './src/redux/store/store';
import {createStackNavigator} from '@react-navigation/stack';
import PageAuth from './src/components/PageAuth';

const Stack = createStackNavigator();
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={'Auth'}
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Auth" component={PageAuth} />
          <Stack.Screen name="List" component={PageList} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
