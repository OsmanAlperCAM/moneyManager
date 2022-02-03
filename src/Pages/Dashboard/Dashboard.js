import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import {FAB, List, Portal, Provider} from 'react-native-paper';
import DashboardCard from '../../Components/Cards/DashboardCard';
import Routes from '../../Navigation/Routes';
import theme from '../../styles/theme';
import styles from './Dashboard.style';

const deneme = [
  {ad: 'test1', soyad: 'soyadtest1'},
  {ad: 'test2', soyad: 'soyadtest2'},
  {ad: 'test3', soyad: 'soyadtest3'},
];

const Dashboard = props => {
  const navigation = useNavigation();

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
          expense={1650}
          income={1650}
          cashFlow={0}
        />
        <FlatList
          data={deneme}
          renderItem={({item}) => {
            return (
              <List.Accordion title={item.ad} id="1">
                <List.Item title={item.soyad} />
              </List.Accordion>
            );
          }}
        />
      </View>
    </Provider>
  );
};
export default Dashboard;
