import React, {useEffect} from 'react';
import {View} from 'react-native';
import {Button} from 'react-native-paper';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import styles from './Auth.style';
import theme from '../../styles/theme';

const anonymousSignIn = async () => {
  const response = await auth().signInAnonymously();
  writeDatabase(response.user.uid);
};
const writeDatabase = async uid => {
  database().ref(`/Users/${uid}`).set({
    expense: 0,
    income: 0,
    balance: 0,
  });
};

const Auth = props => {
  return (
    <View style={styles.container}>
      <Button
        mode="contained"
        onPress={anonymousSignIn}
        color={theme.primary.color}>
        Sign In
      </Button>
    </View>
  );
};
export default Auth;
