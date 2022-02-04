import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './CategoryCard.style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const CategoryCard = ({onPress, icon, label, variant = 'expense'}) => {
  const iconColor = variant == 'expense' ? '#cc0000' : 'green';
  return (
    <TouchableOpacity style={styles[variant].container} onPress={onPress}>
      <Icon name={icon} size={45} color={iconColor} />
      <Text
        style={styles[variant].label}
        numberOfLines={1}
        ellipsizeMode="tail">
        {label}
      </Text>
    </TouchableOpacity>
  );
};
export default CategoryCard;
