import React from 'react';
import {View, Text} from 'react-native';
import DashboardCard from '../../Components/Cards/DashboardCard';
import styles from './Dashboard.style';

const Dashboard = props => {
  return (
    <View style={styles.container}>
      <DashboardCard />
      <Text>Dashboard</Text>
    </View>
  );
};
export default Dashboard;
