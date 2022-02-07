import React, {useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import {useDispatch} from 'react-redux';
import DatePicker from 'react-native-date-picker';
import Input from '../../../Components/Input';
import ExpenseCategory from '../../../Categories/Expense';
import theme from '../../../styles/theme';
import styles from './Expense.style';
import CategoryCard from '../../../Components/Cards/CategoryCard';

import {useNavigation} from '@react-navigation/native';

const Expense = props => {
  const [amount, setAmount] = useState(0);
  const [note, setNote] = useState('');
  const [date, setDate] = useState(new Date());

  const dispatch = useDispatch();

  const navigation = useNavigation();

  const handleSave = category => {
    navigation.goBack();
    console.log({
      [date.toISOString()]: {amount, note, date: date.toISOString()},
    });
    dispatch({
      type: 'ADD',
      payload: {
        process: {
          [date.toISOString()]: {
            amount,
            note,
            date: date.toISOString(),
            category,
            isExpense: true,
          },
        },
      },
    });
    dispatch({
      type: 'EXPENSE',
      payload: {
        amount,
      },
    });
    console.log(date);
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
