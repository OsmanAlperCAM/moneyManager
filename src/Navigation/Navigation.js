import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import auth from '@react-native-firebase/auth';
import Dashboard from '../Pages/Dashboard';
import Routes from './Routes';
import Expense from '../Pages/Add/Expense';
import Income from '../Pages/Add/Income';
import Auth from '../Pages/Auth';

const Stack = createNativeStackNavigator();
const Navigation = () => {
  const [hasSession, setHasSession] = useState(null);

  useEffect(() => {
    const subscribe = auth().onAuthStateChanged(setHasSession);
    return subscribe;
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!!hasSession ? (
          <>
            <Stack.Screen name={Routes.DASHBOARD} component={Dashboard} />
            <Stack.Screen name={Routes.EXPENSE} component={Expense} />
            <Stack.Screen name={Routes.INCOME} component={Income} />
          </>
        ) : (
          <Stack.Screen name={Routes.AUTH} component={Auth} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;
