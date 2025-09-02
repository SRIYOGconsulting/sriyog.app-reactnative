import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
} from 'react-native';

const OnboardingScreen = () => {
  const handleNext = () => {
    // Handle next button press
    console.log('Next pressed');
  };

  const handleSkip = () => {
    // Handle skip button press
    console.log('Skip pressed');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Profile Image */}
        <View style={styles.profileContainer}>
          <Image
            source={require('./assets/person_images/2.png')} // Replace with your image path
            style={styles.profileImage}
            resizeMode="cover"
          />
        </View>

        {/* Definition Text */}
        <Text style={styles.definitionText}>
          Digitalization is the use of digital technologies to change business processes and projects—such as skilling employees to use new software platforms designed to help launch products faster.
        </Text>

        {/* Name Section */}
        <View style={styles.nameSection}>
          <Text style={styles.honorableText}>Honorable</Text>
          <Text style={styles.nameText}>Bhim Parajuli</Text>
        </View>

        {/* Navigation Buttons */}
        <View style={styles.navigationContainer}>
          <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
            <Text style={styles.nextButtonText}>Next</Text>
            <Image
              source={require('./assets/icons/right-arrow.png')} 
              style={styles.arrowIcon}
              resizeMode="contain"
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
            <Text style={styles.skipButtonText}>Skip</Text>
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
  nextButton: {
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
  nextButtonText: {
    fontSize: 20,
    color: '#801414',
    fontWeight: '500',
    marginRight: 15,
  },
  arrowIcon: {
    width: 20,
    height: 20,
    tintColor: '#801414',
  },
  skipButton: {
    backgroundColor: 'transparent',
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  skipButtonText: {
    fontSize: 18,
    color: '#666666',
    fontWeight: '400',
  },
});

export default OnboardingScreen;