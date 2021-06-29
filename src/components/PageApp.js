import React from 'react';
import List from './List';
import Camera from './Camera';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';

const Tab = createBottomTabNavigator();

const PageApp = () => (
  <Tab.Navigator
    initialRouteName="My Friends"
    screenOptions={({route}) => ({
      tabBarIcon: ({focused, color, size}) => {
        const getNameIcon = () => {
          switch (route.name) {
            case 'My Friends':
              return 'users';
            case 'My Colors':
              return 'command';
            case 'Camera':
              return 'camera';
          }
        };
        return <Icon name={getNameIcon()} size={20} color={color} />;
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
      name="My Friends"
      children={() => <List typeData={'users'} />}
    />
    <Tab.Screen
      name="My Colors"
      children={() => <List typeData={'unknown'} />}
    />
    <Tab.Screen name="Camera" children={() => <Camera />} />
  </Tab.Navigator>
);

export default PageApp;
