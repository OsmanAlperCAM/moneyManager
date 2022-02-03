import React from 'react';
import {View, Text} from 'react-native';
import {Card} from 'react-native-paper';
import ColumnCard from './ColumnCard';
import styles from './DashboardCard.style';

const DashboardCard = ({
  title,
  content,
  expense = 0,
  income = 0,
  cashFlow = 0,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.content}>{content}$</Text>
      </View>
      <View style={styles.bottomContainer}>
        <ColumnCard title={'Expense'} value={`${expense}$`} />
        <ColumnCard title="Income" value={`${income}$`} />
        <ColumnCard title="Cash Flow" value={`${cashFlow}$`} />
      </View>
    </View>
  );
};
export default DashboardCard;
