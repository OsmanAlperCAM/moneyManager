import React, {useState} from 'react';
import {View, FlatList} from 'react-native';
import {Snackbar} from 'react-native-paper';
import DatePicker from 'react-native-date-picker';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import Input from '../../../Components/Input';
import IncomeCategory from '../../../Categories/Income';
import theme from '../../../styles/theme';
import styles from './Income.style';
import CategoryCard from '../../../Components/Cards/CategoryCard';

import {useNavigation, useRoute} from '@react-navigation/native';

const Income = props => {
  const [amount, setAmount] = useState(0);
  const [note, setNote] = useState('');
  const [date, setDate] = useState(new Date());
  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const route = useRoute();
  const {incomeValue, balance} = route.params;
  const navigation = useNavigation();

  const transactionRefference = database()
    .ref(
      `/Users/${auth().currentUser.uid}/Transactions/${
        date.toISOString().split('T')[0]
      }`,
    )
    .push();

  const handleSave = async category => {
    if (amount == 0) {
      setSnackbarVisible(true);
      return;
    }
    try {
      transactionRefference.set({
        amount,
        category,
        note,
        date: date.toISOString(),
        isIncome: true,
      });
      await database()
        .ref(`/Users/${auth().currentUser.uid}`)
        .update({
          income: Number(incomeValue) + Number(amount),
          balance: Number(balance) + Number(amount),
        });
    } catch (error) {}
    navigation.goBack();
  };

  const renderCategory = ({item}) => {
    return (
      <CategoryCard
        label={item.label}
        icon={item.icon}
        variant="income"
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
        data={IncomeCategory}
        renderItem={renderCategory}
        numColumns={3}
      />
    </View>
  );
};
export default Income;
