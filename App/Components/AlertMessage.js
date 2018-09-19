import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import styles from './Styles/AlertMessageStyles';

const AlertMessage = (props) => {
  const { title, show, style } = props;
  if (show) {
    return (
      <View
        style={[styles.container, style]}
      >
        <View style={styles.contentContainer}>
          <Text
            allowFontScaling={false}
            style={styles.message}
          >
            {title && title.toUpperCase()}
          </Text>
        </View>
      </View>
    );
  }
  return null;
};
export default AlertMessage;
AlertMessage.defaultProps = {
  style: styles.container,
};
AlertMessage.propTypes = {
  title: PropTypes.string.isRequired,
  style: PropTypes.object,
  show: PropTypes.bool.isRequired,
};
