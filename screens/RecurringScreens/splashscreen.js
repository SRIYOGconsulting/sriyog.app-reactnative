import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  StatusBar,
} from 'react-native';


const { width, height } = Dimensions.get('window');

const SplashScreen = ({ onSplashEnd }) => {
  const [timer, setTimer] = useState(10);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer <= 1) {
          clearInterval(interval);
          if (onSplashEnd) {
            onSplashEnd();
          }
          return 0;
        }
        return prevTimer - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [onSplashEnd]);

  const formatTimer = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#f5f5f5" barStyle="dark-content" />
      
      <View style={styles.header}>
        <Text style={styles.headerText}>Splash Screen</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.logoContainer}>
          <View style={styles.logo}>
            <View style={styles.logoIcon}>
              {/* Image Logo */}
              <Image
                source={require('./assets/logo/sriyoglogo.png')}
                style={{ width: 120, height: 120 }}
                resizeMode="contain"
              />
              
              
              
            </View>
          </View>
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.titleText}>Verified Professional Marketplace</Text>
          <Text style={styles.subtitleText}>100K+ Downloads</Text>
        </View>
      </View>

      <View style={styles.timerContainer}>
        <Text style={styles.timerText}>{formatTimer(timer)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    paddingTop: 20,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  headerText: {
    fontSize: 16,
    color: '#666',
    fontWeight: '400',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  logoContainer: {
    marginBottom: 60,
  },
  logo: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#801414',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 8,
  },
  logoIcon: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    alignItems: 'center',
  },
  titleText: {
    fontSize: 18,
    fontWeight: '400',
    color: '#333',
    textAlign: 'center',
    marginBottom: 8,
    lineHeight: 24,
  },
  subtitleText: {
    fontSize: 16,
    fontWeight: '400',
    color: '#666',
    textAlign: 'center',
  },
  timerContainer: {
    paddingBottom: 80,
    alignItems: 'center',
  },
  timerText: {
    fontSize: 24,
    fontWeight: '300',
    color: '#333',
    letterSpacing: 1,
  },
});

export default SplashScreen;