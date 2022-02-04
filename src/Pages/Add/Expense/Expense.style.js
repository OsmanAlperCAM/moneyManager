import {StyleSheet, Dimensions} from 'react-native';
import theme from '../../../styles/theme';

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  datePicker: {
    width: deviceSize.width,
  },
  listContainer: {
    flex: 1,
    flexWrap: 'wrap',
  },
});
