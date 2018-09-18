import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import styles from './Styles/AlertMessageStyles';

const defaultProps = {
  show: true,
  title: '',
  style: {},
};

const propTypes = {
  title: PropTypes.string,
  style: PropTypes.object,
  show: PropTypes.bool,
}
export default class AlertMessage extends Component {
  render() {
    const messageComponent = null;
    if (this.props.show) {
      const { title } = this.props;
      return (
        <View
          style={[styles.container, this.props.style]}
        >
          <View style={styles.contentContainer}>
            <Text allowFontScaling={false} style={styles.message}>{title && title.toUpperCase()}</Text>
          </View>
        </View>
      );
    }

    return messageComponent;
  }
}
AlertMessage.defaultProps = defaultProps;
AlertMessage.propTypes = propTypes;
