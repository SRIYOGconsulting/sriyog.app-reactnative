import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
} from 'react-native';

const OnboardingScreenH = () => {
  const handleHome = () => {
    // Handle home button press
    console.log('Home pressed');
  };

  const handleStartExploring = () => {
    // Handle start exploring button press
    console.log('Start Exploring pressed');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Profile Image */}
        <View style={styles.profileContainer}>
          <Image
            source={require('./assets/person_images/1.png')} // Replace with your image path
            style={styles.profileImage}
            resizeMode="cover"
          />
        </View>

        {/* Definition Text */}
        <Text style={styles.definitionText}>
        The latest practice of using digital technology to solve social problems like unemployment through digital connectivity is SRIYOG, which has been operating in a start-up model.
        </Text>

        {/* Name Section */}
        <View style={styles.nameSection}>
          <Text style={styles.honorableText}>Founder</Text>
          <Text style={styles.nameText}>PRACAS Upreti</Text>
        </View>

        {/* Navigation Buttons */}
        <View style={styles.navigationContainer}>
          <TouchableOpacity style={styles.homeButton} onPress={handleHome}>
            <Image
              source={require('./assets/icons/home.png')} 
              style={styles.homeIcon}
              resizeMode="contain"
            />
            <Text style={styles.homeButtonText}>Home</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.startExploringButton} onPress={handleStartExploring}>
            <Text style={styles.startExploringButtonText}>Start Exploring</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    paddingTop: 60,
    paddingBottom: 40,
  },
  profileContainer: {
    marginTop: 20,
    marginBottom: 30,
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: '#E0E0E0',
  },
  definitionText: {
    fontSize: 18,
    lineHeight: 28,
    textAlign: 'center',
    color: '#333333',
    marginHorizontal: 10,
    marginBottom: 60,
    fontWeight: '400',
  },
  nameSection: {
    alignItems: 'center',
    marginTop: - 40,
    marginBottom: 30,
  },
  honorableText: {
    fontSize: 24,
    color: '#801414',
    fontWeight: '500',
    marginBottom: 5,
  },
  nameText: {
    fontSize: 32,
    color: '#666666',
    fontWeight: '600',
  },
  navigationContainer: {
    alignItems: 'center',
    width: '100%',
  },
  homeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#801414',
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 20,
    minWidth: 120,
  },
  homeIcon: {
    width: 20,
    height: 20,
    tintColor: '#801414',
    marginRight: 15,
  },
  homeButtonText: {
    fontSize: 20,
    color: '#801414',
    fontWeight: '500',
  },
  startExploringButton: {
    backgroundColor: 'transparent',
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  startExploringButtonText: {
    fontSize: 18,
    color: '#666666',
    fontWeight: '400',
  },
});

export default OnboardingScreenH;