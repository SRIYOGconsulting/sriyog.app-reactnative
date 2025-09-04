import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Image,
  Alert,
  BackHandler,
  Keyboard,
  Linking,
} from 'react-native';

const VerifySubmissionScreen = () => {
  const [code, setCode] = useState(['', '', '', '']);
  const [timeLeft, setTimeLeft] = useState(59);
  const [isChecked, setIsChecked] = useState(false);
  const phoneNumber = '98****011';
  const inputRefs = useRef([]);

  // Timer countdown
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft]);

  // Handle hardware back press
  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      Keyboard.dismiss();
      inputRefs.current.forEach(ref => {
        if (ref?.blur) {
          ref.blur();
        }
      });
      setTimeout(() => {
        inputRefs.current.forEach(ref => {
          if (ref?.blur) {
            ref.blur();
          }
        });
      }, 100);
      return true;
    });

    return () => backHandler.remove();
  }, []);

  // Handle code input change
  const handleCodeChange = (text, index) => {
    if (!/^\d?$/.test(text)) return;
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    if (text && index < 3 && inputRefs.current[index + 1]?.focus) {
      inputRefs.current[index + 1].focus();
    }
    if (!text && index > 0 && inputRefs.current[index - 1]?.focus) {
      inputRefs.current[index - 1].focus();
    }
  };

  // Handle resend code
  const handleResendCode = () => {
    setTimeLeft(59);
    setCode(['', '', '', '']);
    if (inputRefs.current[0]?.focus) {
      inputRefs.current[0].focus();
    }
    Alert.alert('Code Sent', 'A new verification code has been sent to your phone.');
  };

  // Handle submit
  const handleSubmit = () => {
    const enteredCode = code.join('');
    if (enteredCode.length === 4 && isChecked) {
      Alert.alert('Submitted', `Verification code ${enteredCode} submitted successfully!`);
    } else if (!isChecked) {
      Alert.alert('Error', 'Please agree to the Privacy Policy and Terms and Conditions.');
    } else {
      Alert.alert('Incomplete', 'Please enter all 4 digits of the verification code.');
    }
  };

  // Handle checkbox toggle
  const handleCheckboxToggle = () => {
    setIsChecked(!isChecked);
  };

  // Handle link presses
  const handlePrivacyPolicyPress = () => {
    Linking.openURL('https://example.com/privacy-policy');
  };

  const handleTermsPress = () => {
    Linking.openURL('https://example.com/terms-and-conditions');
  };

  const isSubmitDisabled = timeLeft === 0 || !isChecked;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      
      {/* Updated Header */}
      <View style={styles.header}>
        <Image 
          source={require('./assets/logo/sriyogbiglogo.png')} 
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.headerDivider}>|</Text>
        <Text style={styles.headerText}>Submission OTP</Text>
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
        <Text style={styles.title}>Verify Submission</Text>
        
        {/* Instructions */}
        <Text style={styles.instructions}>
          Enter the 4 digits code sent to your{'\n'}
          phone number {phoneNumber} below.
        </Text>
        
        {/* Code input boxes */}
        <View style={styles.codeContainer}>
          {code.map((digit, index) => (
            <TextInput
              key={index}
              ref={ref => (inputRefs.current[index] = ref)}
              style={styles.codeBox}
              value={digit}
              onChangeText={(text) => handleCodeChange(text, index)}
              keyboardType="numeric"
              maxLength={1}
              textAlign="center"
              selectTextOnFocus
              autoFocus={index === 0}
              caretHidden={true}
            />
          ))}
        </View>
        
        {/* Timer and resend */}
        <View style={styles.timerContainer}>
          <Text style={styles.timerText}>
            Code expires in <Text style={styles.timerCount}>0:{timeLeft < 10 ? `0${timeLeft}` : timeLeft}s</Text>
          </Text>
          <View style={styles.resendContainer}>
            <Text style={styles.resendText}>Didn't get code? </Text>
            <TouchableOpacity onPress={handleResendCode}>
              <Text style={styles.resendLink}>Resend Code</Text>
            </TouchableOpacity>
          </View>
        </View>
        
        {/* Submit button */}
        <TouchableOpacity 
          style={[styles.submitButton, isSubmitDisabled && styles.submitButtonDisabled]} 
          onPress={handleSubmit}
          disabled={isSubmitDisabled}
        >
          <Text style={[styles.submitText, isSubmitDisabled && styles.submitTextDisabled]}>
            SUBMIT
          </Text>
        </TouchableOpacity>
        
        {/* Terms and conditions with checkbox */}
        <View style={styles.termsContainer}>
          <TouchableOpacity onPress={handleCheckboxToggle} style={styles.checkboxContainer}>
            <View style={[styles.checkbox, isChecked && styles.checkboxChecked]}>
              {isChecked && <Text style={styles.checkmark}>✓</Text>}
            </View>
            <Text style={[styles.termsText, { textAlign: 'center' }]}>
              By clicking next, you agree to our{' '}
              <Text style={styles.linkText} onPress={handlePrivacyPolicyPress}>
                Privacy Policy
              </Text>{' '}
              and our{' '}
              <Text style={styles.linkText} onPress={handleTermsPress}>
                Terms and Conditions
              </Text>
            </Text>
          </TouchableOpacity>
        </View>
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
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 120,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#801414',
    marginBottom: 40,
    textAlign: 'center',
  },
  instructions: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 40,
    lineHeight: 22,
  },
  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 40,
    marginBottom: 60,
  },
  codeBox: {
    width: 50,
    height: 50,
    borderWidth: 2,
    borderColor: '#801414',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    backgroundColor: '#F5F5F5',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#801414',
    textAlign: 'center',
  },
  timerContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  timerText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
  },
  timerCount: {
    color: '#801414',
    fontWeight: 'bold',
  },
  resendContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  resendText: {
    fontSize: 16,
    color: '#666',
  },
  resendLink: {
    fontSize: 16,
    color: '#801414',
    fontWeight: 'bold',
  },
  submitButton: {
    backgroundColor: '#801414',
    paddingVertical: 15,
    paddingHorizontal: 80,
    borderRadius: 8,
    marginBottom: 30,
  },
  submitButtonDisabled: {
    backgroundColor: '#ccc',
  },
  submitText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  submitTextDisabled: {
    color: '#999',
  },
  termsContainer: {
    alignItems: 'center',
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkbox: {
    width: 15,
    height: 15,
    borderWidth: 2,
    borderColor: '#333',
    borderRadius: 4,
    marginBottom: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxChecked: {
    backgroundColor: '#801414',
    borderColor: '#801414',
  },
  checkmark: {
    color: '#fff',
    fontSize: 8,
    fontWeight: 'bold',
  },
  termsText: {
    fontSize: 12,
    color: '#666',
    lineHeight: 18,
  },
  linkText: {
    color: '#163F87',
  },
});

export default VerifySubmissionScreen;