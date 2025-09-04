import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView, StatusBar } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.headerLeft}>
        <Image 
          source={require('./assets/logo/sriyogbiglogo.png')} 
          style={styles.logo}
          resizeMode="contain"
        />
        <View style={styles.locationContainer}>
          <Text style={styles.dividerLine}>|</Text>
          <Text style={styles.locationText}>Shivram Kamat</Text>
          <Image 
            source={require('./assets/icons/location.png')} 
            style={styles.locationIcon}
          />
        </View>
      </View>
      <TouchableOpacity style={styles.menuButton}>
        <Image 
          source={require('./assets/icons/drawer.png')} 
          style={styles.menuIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <Header />
      
      {/* Top Section with Flags/Icons */}
      <View style={styles.topSection}>
        <Image 
          source={require('./assets/icons/nepalflag.png')} 
          style={styles.nepalFlag}
          resizeMode="contain"
        />
        <Image 
          source={require('./assets/icons/pure.png')} 
          style={styles.pureIcon}
          resizeMode="contain"
        />
      </View>

      {/* Profile Section */}
      <View style={styles.profileSection}>
        <View style={styles.profileImageContainer}>
          <Image 
            source={require('./assets/person_images/singleprofessionperson/1.png')} 
            style={styles.profileImage}
          />
          <Image 
            source={require('./assets/icons/verified.png')} 
            style={styles.verifiedIcon}
          />
        </View>

        <Text style={styles.name}>Shivram Kamat</Text>
        <Text style={styles.phone}>9819036381</Text>
        <Text style={styles.service}>Septic Tank Cleaner</Text>
        <Text style={styles.location}>Biratnagar</Text>
        <Text style={styles.location}>Pokhariya</Text>
      </View>

      {/* Bottom Action Section */}
      <View style={styles.bottomSection}>
        <TouchableOpacity style={styles.arrowButton}>
          <Image 
            source={require('./assets/icons/arrow_up.png')} 
            style={styles.arrowIcon}
          />
        </TouchableOpacity>

        <View style={styles.callButtonContainer}>
          <TouchableOpacity style={styles.callButton}>
            <Image 
              source={require('./assets/icons/whatsapp_red.png')} 
              style={styles.whatsappIcon}
            />
            <Text style={styles.callButtonText}>Call Now</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.arrowButton}>
          <Image 
            source={require('./assets/icons/arrow_down.png')} 
            style={styles.arrowIcon}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  
  // Header Styles
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

  // Top Section Styles
  topSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingVertical: 20,
    backgroundColor: '#fff',
  },
  nepalFlag: {
    width: 40,
    height: 40,
  },
  pureIcon: {
    width: 80,
    height: 50,
  },

  // Profile Section Styles
  profileSection: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  profileImageContainer: {
    position: 'relative',
    marginBottom: 20,
  },
  profileImage: {
    width: 180,
    height: 180,
    borderRadius: 90,
  },
  verifiedIcon: {
    width: 40,
    height: 40,
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#801414',
    marginBottom: 10,
    textAlign: 'center',
  },
  phone: {
    fontSize: 24,
    color: '#333',
    marginBottom: 10,
    fontWeight: '500',
  },
  service: {
    fontSize: 22,
    color: '#333',
    marginBottom: 10,
    fontWeight: '500',
  },
  location: {
    fontSize: 20,
    color: '#333',
    marginBottom: 8,
    textAlign: 'center',
  },

  // Bottom Section Styles
  bottomSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 30,
    backgroundColor: '#fff',
    
  },
  arrowButton: {
    padding: 20,
    flex: 0.2,
    alignItems: 'center',
  },
  arrowIcon: {
    width: 25,
    height: 25,
  },
  callButtonContainer: {
    flex: 0.6,
    alignItems: 'center',
    marginHorizontal: 70,
  },
  callButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#801414',
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 12,
    minWidth: 140,
  },
  whatsappIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  callButtonText: {
    fontSize: 18,
    color: '#801414',
    fontWeight: '600',
  },
});

export default ProfileScreen;