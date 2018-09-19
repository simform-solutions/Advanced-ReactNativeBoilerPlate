import React from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity } from 'react-native';
import styles from './Styles/DrawerButtonStyles';

const DrawerButton = (props) => {
  const { onPress, text } = props;
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};
DrawerButton.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func,
};
DrawerButton.defaultProps = {
  onPress: () => {},
};
export default DrawerButton;
