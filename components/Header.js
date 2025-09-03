import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.headerLeft}>
        <Image 
          source={require('../assets/logo/sriyogbiglogo.png')} 
          style={styles.logo}
          resizeMode="contain"
        />
        <View style={styles.locationContainer}>
          <Text style={styles.dividerLine}>|</Text>
          <Text style={styles.locationText}>Kathmandu</Text>
          <Image 
            source={require('../assets/icons/location.png')} 
            style={styles.locationIcon}
          />
        </View>
      </View>
      <TouchableOpacity style={styles.menuButton}>
        <Image 
          source={require('../assets/icons/drawer.png')} 
          style={styles.menuIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 170,
    height: 30,
    marginRight: 15,
  },
  locationContainer: {
    marginLeft: -20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  dividerLine: {
    color: '#ddd',
    marginRight: 10,
    fontSize: 16,
  },
  locationIcon: {
    width: 24,
    height: 24,
    marginLeft: 15,
  },
  locationText: {
    fontSize: 14,
    color: '#666',
  },
  menuButton: {
    padding: 5,
  },
  menuIcon: {
    width: 15,
    height: 15,
  },
});

export default Header;