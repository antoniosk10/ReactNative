import React from 'react';
import List from './src/components/List';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';

const Tab = createBottomTabNavigator();

const App = () => (
  <NavigationContainer>
    <Tab.Navigator
      initialRouteName="UserList"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          return <Icon name={'align-justify'} size={20} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#1fcbed',
        inactiveTintColor: 'gray',
        labelStyle: {
          fontSize: 16,
        },
      }}>
      <Tab.Screen
        name="UserList"
        children={() => <List typeData={'users'} />}
      />
      <Tab.Screen
        name="UnknownList"
        children={() => <List typeData={'unknown'} />}
      />
    </Tab.Navigator>
  </NavigationContainer>
);

export default App;
