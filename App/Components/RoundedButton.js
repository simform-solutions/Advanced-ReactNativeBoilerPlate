import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text } from 'react-native';
import styles from './Styles/RoundedButtonStyles';

export default class RoundedButton extends Component {
  getText() {
    const { text, children } = this.props;
    const buttonText = text || children || '';
    return buttonText.toUpperCase();
  }

  render() {
    const { onPress } = this.props;
    return (
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{this.getText()}</Text>
      </TouchableOpacity>
    );
  }
}
RoundedButton.propTypes = {
  onPress: PropTypes.func,
  text: PropTypes.string.isRequired,
  children: PropTypes.object,
};
RoundedButton.defaultProps = {
  onPress: () => {},
  children: {},
};
