import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text } from 'react-native';
import styles from './Styles/FullButtonStyles';

const FullButton = (props) => {
  const { text, onPress, style } = props;
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={styles.buttonText}>{text && text.toUpperCase()}</Text>
    </TouchableOpacity>
  );
};
export default FullButton;
FullButton.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func,
  style: PropTypes.object,
};
FullButton.defaultProps = {
  onPress: () => {},
  style: styles.button,
};
