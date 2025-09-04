import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
  Dimensions,
} from 'react-native';

const { width, height } = Dimensions.get('window');

const VerificationSuccessScreen = () => {
  const handleHomePress = () => {
    // Navigate to home screen
    console.log('Navigate to home');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Title */}
        <Text style={styles.title}>Verification Successful</Text>
        
        {/* Success Icon Container */}
        <View style={styles.iconContainer}>
          <Image
            source={require('./assets/icons/tickmark.png')}
            style={styles.successIcon}
            resizeMode="contain"
          />
        </View>
        
        {/* Success Message */}
        <Text style={styles.message}>
          Congratulations! Thank you! OTP{'\n'}verified successfully. Welcome to{'\n'}SRIYOG !
        </Text>
        
        {/* Home Button */}
        <TouchableOpacity style={styles.homeButton} onPress={handleHomePress}>
          <Image
            source={require('./assets/icons/home.png')}
            style={styles.homeIcon}
            resizeMode="contain"
          />
          <Text style={styles.homeButtonText}>Home</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#801414', // Dark red color matching the design
    textAlign: 'center',
    marginBottom: 60,
  },
  iconContainer: {
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 60,
  },
  successIcon: {
    width: 150,
    height: 150,
  },
  message: {
    fontSize: 16,
    color: '#666666',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 80,
  },
  homeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#801414',
    borderRadius: 8,
    marginTop: 50,
    paddingHorizontal: 10,
    paddingVertical: 12,
    minWidth: 120,
    justifyContent: 'center',
  },
  homeIcon: {
    width: 25,
    height: 25,
    marginRight: 8,
    tintColor: '#801414', 
  },
  homeButtonText: {
    fontSize: 20,
    color: '#801414',
    fontWeight: '500',
  },
});

export default VerificationSuccessScreen;