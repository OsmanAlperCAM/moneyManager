import React, {useState} from 'react';
import {View, Text} from 'react-native';
import Input from '../../../Components/Input';
import styles from './Expense.style';

const Expense = props => {
  return (
    <View style={styles.container}>
      <Input
        label="Amount"
        onChangeText={console.log}
        keyboardType="number-pad"
      />
      <Input label="Note" onChangeText={console.log} />
      <Text>Expense</Text>
    </View>
  );
};
export default Expense;
