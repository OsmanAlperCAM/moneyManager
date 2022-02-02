import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Dashboard from '../Pages/Dashboard';
import Routes from './Routes';

const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={Routes.DASHBOARD} component={Dashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;
