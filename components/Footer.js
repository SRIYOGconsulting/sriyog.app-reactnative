import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.bottomNav}>
      <TouchableOpacity style={styles.navItem}>
        <Image source={require('../assets/icons/homeblack.png')} style={styles.navIcon} />
        <Text style={styles.navText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
        <Image source={require('../assets/icons/professions.png')} style={styles.navIcon} />
        <Text style={styles.navText}>Professions</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.navItem, styles.activeNavItem]}>
        <View style={styles.bookNowButton}>
          <Image source={require('../assets/icons/plus.png')} style={styles.plusIcon} />
        </View>
        <Text style={[styles.navText, styles.activeNavText]}>Book Now</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
        <Image source={require('../assets/icons/searchblack.png')} style={styles.navIcon} />
        <Text style={styles.navText}>Search</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
        <Image source={require('../assets/icons/support.png')} style={styles.navIcon} />
        <Text style={styles.navText}>Support</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomNav: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingTop: 15,
    marginBottom: -15,
    paddingHorizontal: 5,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 8,
  },
  activeNavItem: {
    transform: [{ translateY: -10 }],
  },
  navIcon: {
    width: 24,
    height: 24,
    marginBottom: 4,
    resizeMode: 'contain',
  },
  navText: {
    fontSize: 12,
    color: '#666',
  },
  activeNavText: {
    color: '#801414',
  },
  bookNowButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 4,
  },
  plusIcon: {
    width: 40,
    height: 40,
    resizeMode: 'cover',
  },
});

export default Footer;