import React, {useEffect} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import styles from './Auth.style';

const reference = database().ref('/users/123');

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
  useEffect(() => {
    anonymousSignIn();
  }, []);
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" />
    </View>
  );
};
export default Auth;
