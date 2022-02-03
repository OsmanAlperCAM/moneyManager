import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Dashboard from '../Pages/Dashboard';
import Routes from './Routes';
import Expense from '../Pages/Add/Expense';
import Income from '../Pages/Add/Income';

const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={Routes.DASHBOARD} component={Dashboard} />
        <Stack.Screen name={Routes.EXPENSE} component={Expense} />
        <Stack.Screen name={Routes.INCOME} component={Income} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;
