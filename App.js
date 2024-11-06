import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import AppNavigator from './src/AppNavigator';

const App = () => {
  return (
    <View style={styles.container}>
      <AppNavigator />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,  // This ensures the View takes up the entire screen
  },
});

export default App;
