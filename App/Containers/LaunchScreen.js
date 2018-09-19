import React from 'react';
import {
  ScrollView, Text, Image, View,
} from 'react-native';
import { Images } from '../Themes';

// Styles
import styles from './Styles/LaunchScreenStyles';

const LaunchScreen = () => (
  <View style={styles.mainContainer}>
    <Image source={Images.background} style={styles.backgroundImage} resizeMode="stretch" />
    <ScrollView style={styles.container}>
      <View style={styles.centered}>
        <Image source={Images.launch} style={styles.logo} />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionText}>
          Welcome to react-native ignite boiler plate!
          We have enabled eslint with airbnb style guide for you!
        </Text>
      </View>

    </ScrollView>
  </View>
);
export default LaunchScreen;
