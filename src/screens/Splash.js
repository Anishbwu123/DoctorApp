import React, { useEffect } from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';

// Get device width and height to make sure the image fills the screen
const { width, height } = Dimensions.get('window');

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    // Navigate to the Home screen after 3 seconds
    setTimeout(() => {
      navigation.replace('Home');  // Replace the splash screen with Home screen
    }, 3000);  // 3000ms delay
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/launch_screen.png')}  // Replace with your image path
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,  // Ensures the container takes up the full screen
  },
  image: {
    width: width,        // Use device width
    height: height,      // Use device height
    resizeMode: 'cover', // This will stretch the image to cover the entire screen
  },
});

export default SplashScreen;
