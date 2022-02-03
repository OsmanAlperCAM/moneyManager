import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {TextInput} from 'react-native-paper';
import theme from '../../styles/theme';
import styles from './Input.style';

const Input = ({label, onChangeText, ...otherProps}) => {
  return (
    <View style={styles.container}>
      <TextInput
        theme={styles.textInput}
        mode="outlined"
        label={label}
        onChangeText={onChangeText}
        selectionColor={theme.primary.color}
        activeOutlineColor={theme.primary.color}
        {...otherProps}
      />
    </View>
  );
};
export default Input;
