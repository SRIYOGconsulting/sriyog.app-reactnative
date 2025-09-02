import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  SafeAreaView,
  StatusBar,
} from 'react-native';

const PhoneEntryScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('9852024365');

  const handleSubmit = () => {
    console.log('Phone number submitted:', phoneNumber);
    // Handle submit logic here
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f5f5f5" />
      
      <View style={styles.content}>
        {/* Title */}
        <Text style={styles.title}>Enter Your Phone Number</Text>
        
        {/* Phone Input Container */}
        <View style={styles.inputContainer}>
          {/* Nepal Flag */}
          <Image
            source={require('./assets/icons/nepalflag.png')}
            style={styles.flagImage}
            resizeMode="contain"
          />
          
          {/* Dropdown Arrow */}
          <Image
            source={require('./assets/icons/arrow.png')}
            style={styles.dropdownArrow}
            resizeMode="contain"
          />
          
          {/* Separator Line */}
          <View style={styles.separator} />
          
          {/* Phone Number Input */}
          <TextInput
            style={styles.phoneInput}
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            placeholder="Enter phone number"
            keyboardType="phone-pad"
            maxLength={10}
          />
        </View>
        
        {/* Submit Button */}
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>SUBMIT</Text>
        </TouchableOpacity>
      </View>
      
      {/* Footer - moved outside content container */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>SMS Service Powered By</Text>
        
        {/* Aakash SMS Logo */}
        <Image
          source={require('./assets/icons/aakashsmslogo.png')}
          style={styles.aakashLogo}
          resizeMode="contain"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffffff',
  },
  content: {
    flex: 1,
    paddingHorizontal: 30,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#801414',
    marginBottom: 100, 
    textAlign: 'center',
    marginTop: -120,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#666666',
    paddingHorizontal: 10,
    paddingVertical: 2,
    marginBottom: 100, 
    width: '90%',
    maxWidth: 300,
  },
  flagImage: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  dropdownArrow: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  separator: {
    width: 1,
    height: 20,
    backgroundColor: '#666666',
    marginRight: 12,
  },
  phoneInput: {
    flex: 1,
    fontSize: 10,
    color: '#333333',
    letterSpacing: 4,
    fontWeight: '500',
  },
  submitButton: {
    backgroundColor: '#801414',
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 8,
    minWidth: 150,
  },
  submitButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  footer: {
    alignItems: 'center',
    paddingBottom: 40,
    paddingHorizontal: 30,
  },
  footerText: {
    fontSize: 14,
    color: '#333',
    marginBottom: 10,
  },
  aakashLogo: {
    width: 200,
    height: 40,
  },
});

export default PhoneEntryScreen;