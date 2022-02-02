import {StyleSheet} from 'react-native';
import theme from '../../../styles/theme';

export default StyleSheet.create({
  container: {
    padding: 8,
    margin: 8,
    borderRadius: 15,
    backgroundColor: theme.primary.color,
    elevation: 4,
  },
  innerContainer: {
    alignItems: 'center',
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  title: {
    color: theme.primary.text,
  },
  content: {
    fontWeight: 'bold',
    fontSize: 24,
    color: theme.primary.text,
  },
});
