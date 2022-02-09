import React, {useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import {Snackbar} from 'react-native-paper';
import DatePicker from 'react-native-date-picker';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import Input from '../../../Components/Input';
import ExpenseCategory from '../../../Categories/Expense';
import theme from '../../../styles/theme';
import styles from './Expense.style';
import CategoryCard from '../../../Components/Cards/CategoryCard';

import {useNavigation, useRoute} from '@react-navigation/native';

const Expense = props => {
  const [amount, setAmount] = useState(0);
  const [note, setNote] = useState('');
  const [date, setDate] = useState(new Date());
  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const route = useRoute();
  const {expenseValue, balance} = route.params;

  let transactionRefference = database()
    .ref(
      `/Users/${auth().currentUser.uid}/Transactions/${
        date.toISOString().split('T')[0]
      }`,
    )
    .push();
  const navigation = useNavigation();

  const handleSave = async category => {
    if (amount == 0) {
      setSnackbarVisible(true);
      return;
    }
    transactionRefference.set({
      amount,
      category,
      note,
      date: date.toISOString(),
      isExpense: true,
    });
    await database()
      .ref(`/Users/${auth().currentUser.uid}`)
      .update({
        expense: Number(expenseValue) + Number(amount),
        balance: balance - amount,
      });
    navigation.goBack();
  };

  const renderCategory = ({item}) => {
    return (
      <CategoryCard
        label={item.label}
        icon={item.icon}
        variant="expense"
        onPress={() => handleSave(item)}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Snackbar
        duration={2000}
        visible={snackbarVisible}
        onDismiss={() => {
          setSnackbarVisible(false);
        }}>
        Amount value cannot be left blank
      </Snackbar>
      <Input
        label="Amount"
        onChangeText={setAmount}
        keyboardType="number-pad"
      />
      <Input label="Note" onChangeText={setNote} />
      <DatePicker
        style={styles.datePicker}
        androidVariant={'nativeAndroid'}
        textColor={theme.primary.color}
        mode="date"
        date={date}
        onDateChange={setDate}
      />
      <FlatList
        data={ExpenseCategory}
        renderItem={renderCategory}
        numColumns={3}
      />
    </View>
  );
};
export default Expense;
