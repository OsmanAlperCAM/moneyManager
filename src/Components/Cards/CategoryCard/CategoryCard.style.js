import {StyleSheet, Dimensions} from 'react-native';

const deviceSize = Dimensions.get('window');

const baseStyles = StyleSheet.create({
  container: {
    padding: 8,
    margin: 8,
    flex: 1,
    width: deviceSize.width / 5,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default {
  expense: StyleSheet.create({
    ...baseStyles,
    container: {
      ...baseStyles.container,
      shadowColor: '#cc0000',
    },
    label: {
      ...baseStyles.label,
      color: '#cc0000',
    },
  }),
  income: StyleSheet.create({
    ...baseStyles,
    container: {
      ...baseStyles.container,
      shadowColor: 'green',
    },
    label: {
      ...baseStyles.label,
      color: 'green',
    },
  }),
};
