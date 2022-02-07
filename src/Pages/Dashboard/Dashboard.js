import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import {FAB, List, Portal, Provider} from 'react-native-paper';
import DashboardCard from '../../Components/Cards/DashboardCard';
import Routes from '../../Navigation/Routes';
import styles from './Dashboard.style';

const Dashboard = props => {
  const navigation = useNavigation();
  const list = useSelector(state => state.dailyProcess);
  const expense = useSelector(state => state.expense);
  const balance = useSelector(state => state.balance);

  const [fabOpen, setFabOpen] = useState(false);

  const fabOpenChange = () => {
    setFabOpen(!fabOpen);
  };

  const handleGoExpense = () => {
    navigation.navigate(Routes.EXPENSE);
  };
  const handleGoIncome = () => {
    navigation.navigate(Routes.INCOME);
  };

  const renderList = ({item}) => {
    console.log('item', item);
    return (
      <List.Accordion title={list[item].date.split('T')[0]} id="1">
        <List.Item title={list[item].amount} />
      </List.Accordion>
    );
  };
  return (
    <Provider>
      <View style={styles.container}>
        <Portal>
          <FAB.Group
            fabStyle={fabOpen ? styles.fab.add : styles.fab.default}
            open={fabOpen}
            icon={fabOpen ? 'pencil-plus' : 'plus'}
            actions={[
              {
                icon: 'pencil-minus',
                style: {
                  backgroundColor: 'red',
                },
                small: false,
                onPress: handleGoExpense,
              },
            ]}
            onStateChange={fabOpenChange}
            onPress={fabOpen ? handleGoIncome : null}
          />
        </Portal>
        <DashboardCard
          title="Wallet"
          content="10000"
          expense={expense}
          income={1650}
          cashFlow={balance}
        />
        <FlatList data={Object.keys(list)} renderItem={renderList} />
      </View>
    </Provider>
  );
};
export default Dashboard;
