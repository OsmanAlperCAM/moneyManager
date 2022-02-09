import React from 'react';
import {View, Text} from 'react-native';
import {List} from 'react-native-paper';
import styles from './ListTile.style';

const ListTile = ({title, icon, amount, note, date, isExpense = false}) => {
  const color = isExpense ? '#ff0000' : '#367501';
  const variant = isExpense ? 'expense' : 'income';
  return (
    <List.Item
      title={title}
      titleStyle={{color: color, fontWeight: 'bold'}}
      left={props => (
        <List.Icon
          {...props}
          style={{marginHorizontal: 0}}
          color={color}
          icon={icon}
        />
      )}
      right={props => (
        <View style={styles[variant].amountContainer}>
          <Text style={styles[variant].amount}>{amount}$</Text>
          <Text style={styles[variant].amount}>
            {date.split('T')[1].split('.')[0]}
          </Text>
        </View>
      )}
      description={note}
      descriptionStyle={{color: color}}
    />
  );
};
export default ListTile;
