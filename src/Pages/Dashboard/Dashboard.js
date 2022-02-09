import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import {FAB, List, Portal, Provider} from 'react-native-paper';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import DashboardCard from '../../Components/Cards/DashboardCard';
import Routes from '../../Navigation/Routes';
import styles from './Dashboard.style';
import theme from '../../styles/theme';
import ParseFirebaseData from '../../utils/ParseFirebaseData';
import ListTile from '../../Components/ListTile';

const Dashboard = props => {
  const navigation = useNavigation();
  const [userData, setUserData] = useState({});

  const [fabOpen, setFabOpen] = useState(false);

  const fabOpenChange = () => {
    setFabOpen(!fabOpen);
  };

  const handleGoExpense = () => {
    navigation.navigate(Routes.EXPENSE, {
      expenseValue: userData.expense,
      balance: userData.balance,
    });
  };
  const handleGoIncome = () => {
    navigation.navigate(Routes.INCOME, {
      incomeValue: userData.income,
      balance: userData.balance,
    });
  };

  useEffect(() => {
    database()
      .ref(`/Users/${auth().currentUser.uid}`)
      .on('value', snapshot => {
        setUserData(snapshot.val());
      });
  }, []);

  const renderList = ({item}) => {
    return (
      <List.Accordion title={item.id} titleStyle={{color: theme.primary.color}}>
        {ParseFirebaseData(item)
          .slice(1)
          .map(element => {
            return (
              <ListTile
                key={Math.random()}
                title={element.category.label}
                icon={element.category.icon}
                amount={element.amount}
                note={element.note}
                date={element.date}
                isExpense={element.isExpense}
              />
            );
          })}
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
          expense={userData.expense}
          income={userData.income}
          balance={userData.balance}
        />
        <FlatList
          data={ParseFirebaseData(userData.Transactions)}
          renderItem={renderList}
        />
      </View>
    </Provider>
  );
};
export default Dashboard;
