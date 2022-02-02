import React from 'react';
import {View, Text} from 'react-native';
import styles from './ColumnCard.style';

const ColumnCard = ({title, value}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};
export default ColumnCard;
