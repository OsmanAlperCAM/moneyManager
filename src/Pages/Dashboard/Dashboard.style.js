import {StyleSheet} from 'react-native';
import theme from '../../styles/theme';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  fab: {
    default: {backgroundColor: theme.primary.color},
    add: {backgroundColor: '#76ff03'},
  },
});
