import {StyleSheet} from 'react-native';
import theme from '../../../../styles/theme';

export default StyleSheet.create({
  container: {
    marginVertical: 8,
    borderRadius: 10,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: theme.primary.text,
  },
  value: {
    color: theme.primary.text,
    fontWeight: 'bold',
    fontSize: 18,
  },
});
