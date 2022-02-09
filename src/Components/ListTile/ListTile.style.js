import {StyleSheet} from 'react-native';

const baseStyles = StyleSheet.create({
  amount: {
    fontWeight: 'bold',
  },
  amountContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default {
  expense: StyleSheet.create({
    ...baseStyles,
    amount: {
      ...baseStyles.amount,
      color: '#ff0000',
    },
  }),
  income: StyleSheet.create({
    ...baseStyles,
    amount: {
      ...baseStyles.amount,
      color: '#367501',
    },
  }),
};
