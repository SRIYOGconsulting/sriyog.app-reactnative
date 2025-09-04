import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
  StatusBar,
  Dimensions,
} from 'react-native';

const { width, height } = Dimensions.get('window');

const VerificationSubmissionSuccessScreen = () => {
  const handleHomePress = () => {
    // Navigate to home screen
    console.log('Navigate to home');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      
      {/* Header */}
      <View style={styles.header}>
        <Image 
          source={require('./assets/logo/sriyogbiglogo.png')} 
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.headerDivider}>|</Text>
        <Text style={styles.headerText}>Help Requested</Text>
        <Image 
            source={require('./assets/icons/location.png')} 
            style={styles.locationIcon}
          />
        <TouchableOpacity style={styles.menuButton}>
          <Image 
            source={require('./assets/icons/drawer.png')} 
            style={styles.menuIcon}
          />
        </TouchableOpacity>
      </View>
      
      <View style={styles.content}>
        {/* Title */}
        <Text style={styles.title}>Submission Successful</Text>
        
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
          Your phone number has been {'\n'} submitted successfully.
        </Text>

        {/* Success Message */}
        <View style={styles.messageContainer}>
          <Text style={styles.messageB}>
            Our team member will {'\n'} contact you shortly.
          </Text>
        </View>
        
        
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
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#fff',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  logo: {
    width: 170,
    height: 30,
  },
  headerDivider: {
    color: '#ddd',
    marginHorizontal: 4,
    fontSize: 16,
  },
  headerText: {
    fontSize: 10,
    color: '#666',
    flex: 1,
  },
  locationIcon: {
    width: 24,
    height: 24,
  },
  menuButton: {
    padding: 5,
  },
  menuIcon: {
    width: 15,
    height: 15,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#801414', 
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
  messageContainer: {
   marginTop: -30, 
  },
  messageB: {
    fontSize: 20,
    fontWeight: 'semi-bold',
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

export default VerificationSubmissionSuccessScreen;