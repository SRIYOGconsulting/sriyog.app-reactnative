import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Image,
  SafeAreaView,
  StatusBar,
} from 'react-native';

const OTPScreen = () => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [timeLeft, setTimeLeft] = useState(60); // 1 minute = 60 seconds
  const [isExpired, setIsExpired] = useState(false);
  const inputRefs = useRef([]);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      setIsExpired(true);
    }
  }, [timeLeft]);

  const handleOtpChange = (value, index) => {
    if (value.length > 1) return; // Prevent multiple characters
    
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (e, index) => {
    // Handle backspace to move to previous input
    if (e.nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = () => {
    if (isExpired) {
      Alert.alert('Error', 'Code expired');
      return;
    }

    const otpString = otp.join('');
    if (otpString.length === 6) {
      Alert.alert('Success', `OTP Submitted: ${otpString}`);
      // Handle OTP verification logic here
    } else {
      Alert.alert('Error', 'Please enter complete 6-digit code');
    }
  };

  const handleResendCode = () => {
    setOtp(['', '', '', '', '', '']);
    setTimeLeft(60);
    setIsExpired(false);
    Alert.alert('Code Sent', 'New verification code sent to your phone');
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f5f5f5" />
      
      <View style={styles.content}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Enter OTP</Text>
        </View>
        
        <View style={styles.formContainer}>
          <Text style={styles.subtitle}>
            Enter the 6 digits code sent to your{'\n'}
            phone number 98****011 below.
          </Text>

          <View style={styles.otpContainer}>
            {otp.map((digit, index) => (
              <TextInput
                key={index}
                ref={(ref) => (inputRefs.current[index] = ref)}
                style={[
                  styles.otpInput,
                  isExpired && styles.expiredInput
                ]}
                value={digit}
                onChangeText={(value) => handleOtpChange(value, index)}
                onKeyPress={(e) => handleKeyPress(e, index)}
                keyboardType="numeric"
                maxLength={1}
                editable={!isExpired}
              />
            ))}
          </View>

          <View style={styles.timerContainer}>
            <Text style={styles.timerText}>
              {isExpired ? (
                <Text style={styles.expiredText}>Code expired</Text>
              ) : (
                <>Code expires in <Text style={styles.timerNumber}>{formatTime(timeLeft)}</Text></>
              )}
            </Text>
            
            <TouchableOpacity onPress={handleResendCode} style={styles.resendButton}>
              <Text style={styles.resendText}>
                Didn't get code? <Text style={styles.resendLink}>Resend Code</Text>
              </Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity 
            style={[styles.submitButton, isExpired && styles.disabledButton]} 
            onPress={handleSubmit}
            disabled={isExpired}
          >
            <Text style={styles.submitButtonText}>SUBMIT</Text>
          </TouchableOpacity>
        </View>
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
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  titleContainer: {
    paddingTop: 60,
    paddingBottom: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'semi-bold',
    color: '#801414',
    textAlign: 'center',
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -30, 
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 40,
    marginTop: - 100,
    lineHeight: 22,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 70,
    paddingHorizontal: 20,
  },
  otpInput: {
    width: 40,
    height: 40,
    borderWidth: 2,
    borderColor: '#801414',
    borderRadius: 8,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: '#fff',
    marginHorizontal: 5,
  },
  expiredInput: {
    borderColor: '#ccc',
    backgroundColor: '#f9f9f9',
    color: '#ccc',
  },
  timerContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  timerText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },
  timerNumber: {
    color: '#801414',
    fontWeight: 'bold',
  },
  expiredText: {
    color: '#801414',
    fontWeight: 'bold',
  },
  resendButton: {
    marginTop: 10,
  },
  resendText: {
    fontSize: 14,
    color: '#666',
  },
  resendLink: {
    color: '#801414',
    fontWeight: 'bold',
  },
  submitButton: {
    backgroundColor: '#801414',
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 8,
    minWidth: 200,
  },
  disabledButton: {
    backgroundColor: '#ccc',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  footer: {
    alignItems: 'center',
    paddingBottom: 70,
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

export default OTPScreen;