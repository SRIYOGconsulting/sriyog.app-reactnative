import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';

const CitySelectionScreen = () => {
  const [selectedProvince, setSelectedProvince] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  const locationData = {
    'Koshi': {
      'Morang': ['Biratnagar', 'Urlabari', 'Sundar Haraicha', 'Rangeli', 'Pathari'],
      'Sunsari': ['Dharan', 'Itahari', 'Inaruwa', 'Duhabi', 'Ramdhuni'],
      'Jhapa': ['Mechinagar', 'Damak', 'Kankai', 'Arjundhara', 'Shivasatakshi'],
      'Dhankuta': ['Dhankuta', 'Pakhribas'],
      'Bhojpur': ['Bhojpur', 'Shadananda'],
      'Sankhuwasabha': ['Khandbari', 'Chainpur'],
      'Taplejung': ['Phungling'],
      'Ilam': ['Ilam', 'Mai'],
      'Panchthar': ['Phidim'],
      'Udayapur': ['Triyuga', 'Katari'],
      'Khotang': ['Diktel Rupakot Majhuwagadhi'],
      'Okhaldhunga': ['Siddhicharan']
    },
    'Madhesh': {
      'Saptari': ['Rajbiraj', 'Kanchanrup', 'Dakneshwari', 'Bodebarsain', 'Lahan'],
      'Siraha': ['Siraha', 'Golbazar', 'Mirchaiya', 'Kalyanpur', 'Karjanha'],
      'Dhanusha': ['Janakpur', 'Chhireshwarnath', 'Ganeshman Charnath', 'Dhanushadham', 'Nagarain'],
      'Mahottari': ['Jaleshwar', 'Bardibas', 'Gaushala'],
      'Sarlahi': ['Malangwa', 'Lalbandi', 'Ishworpur'],
      'Rautahat': ['Gaur', 'Chandrapur', 'Garuda'],
      'Bara': ['Kalaiya', 'Simraungadh', 'Jeetpur Simara'],
      'Parsa': ['Birgunj', 'Pokhariya']
    },
    'Bagmati': {
      'Kathmandu': ['Kathmandu', 'Kageshwori Manohara', 'Kirtipur', 'Madhyapur Thimi', 'Budhanilkantha'],
      'Lalitpur': ['Lalitpur', 'Mahalaxmi', 'Godawari', 'Konjyosom'],
      'Bhaktapur': ['Bhaktapur', 'Suryabinayak', 'Changunarayan'],
      'Chitwan': ['Bharatpur', 'Ratnanagar'],
      'Makwanpur': ['Hetauda', 'Thaha'],
      'Nuwakot': ['Bidur'],
      'Rasuwa': ['Gosaikunda'],
      'Dhading': ['Nilkantha'],
      'Sindhupalchok': ['Chautara Sangachokgadhi', 'Melamchi'],
      'Kavrepalanchok': ['Dhulikhel', 'Banepa', 'Panauti'],
      'Sindhuli': ['Kamalamai'],
      'Ramechhap': ['Manthali'],
      'Dolakha': ['Bhimeshwor']
    },
    'Gandaki': {
      'Kaski': ['Pokhara', 'Annapurna', 'Machhapuchchhre', 'Madi'],
      'Syangja': ['Galyang', 'Chapakot', 'Waling', 'Putalibazar'],
      'Tanahun': ['Bhanu', 'Bhimad', 'Byas', 'Shuklagandaki'],
      'Lamjung': ['Besisahar'],
      'Gorkha': ['Gorkha', 'Palungtar'],
      'Manang': ['Chame'],
      'Mustang': ['Jomsom', 'Thasang'],
      'Parbat': ['Kushma'],
      'Baglung': ['Baglung Municipality'],
      'Myagdi': ['Beni']
    },
    'Lumbini': {
      'Rupandehi': ['Butwal', 'Devdaha', 'Siddharthanagar', 'Sainamaina'],
      'Kapilvastu': ['Kapilvastu', 'Banganga', 'Buddhabhumi'],
      'Nawalpur': ['Bardaghat', 'Ramgram', 'Sunwal'],
      'Palpa': ['Tansen'],
      'Arghakhanchi': ['Sandhikharka'],
      'Gulmi': ['Tamghas', 'Resunga'],
      'Dang': ['Ghorahi', 'Tulsipur'],
      'Banke': ['Nepalgunj', 'Kohalpur'],
      'Bardiya': ['Gulariya']
    },
    'Karnali': {
      'Surkhet': ['Birendranagar', 'Bheriganga', 'Gurbhakot'],
      'Dailekh': ['Narayan', 'Dullu'],
      'Jajarkot': ['Bheri', 'Chhedagad'],
      'Dolpa': ['Tripurasundari', 'Thuli Bheri'],
      'Mugu': ['Chhayanath Rara'],
      'Humla': ['Simkot'],
      'Kalikot': ['Manma', 'Raskot'],
      'Salyan': ['Sharada'],
      'Rukum West': ['Musikot']
    },
    'Sudurpashchim': {
      'Kailali': ['Dhangadhi', 'Tikapur', 'Ghodaghodi', 'Lamki Chuha'],
      'Kanchanpur': ['Bhimdatta', 'Punarbas', 'Belauri'],
      'Doti': ['Dipayal Silgadhi', 'Shikhar'],
      'Achham': ['Mangalsen', 'Sanfebagar'],
      'Bajura': ['Martadi'],
      'Bajhang': ['Jayaprithvi'],
      'Baitadi': ['Dasharathchand'],
      'Dadeldhura': ['Amargadhi'],
      'Darchula': ['Khalanga', 'Mahakali Municipality']
    }
  };


  const provinces = Object.keys(locationData);
  const districts = selectedProvince ? Object.keys(locationData[selectedProvince]) : [];
  const cities = selectedProvince && selectedDistrict ? locationData[selectedProvince][selectedDistrict] : [];

  const handleProvinceChange = (province) => {
    setSelectedProvince(province);
    setSelectedDistrict('');
    setSelectedCity('');
  };

  const handleDistrictChange = (district) => {
    setSelectedDistrict(district);
    setSelectedCity('');
  };

  const handleEnter = () => {
    if (!selectedProvince || !selectedDistrict || !selectedCity) {
      alert('Please select Province, District and City');
      return;
    }
    console.log('Selected Location:', { selectedProvince, selectedDistrict, selectedCity });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f5f5f5" />
      
      <View style={styles.content}>
        {/* Logo */}
        <View style={styles.logoContainer}>
          <Image
            source={require('./assets/logo/sriyoglogo.png')} 
            style={styles.logo}
            resizeMode="contain"
          />
        </View>

        {/* Select Your Location Text */}
        <Text style={styles.title}>Select Your Location</Text>

        {/* Province Picker */}
        <View style={styles.pickerContainer}>
          <Text style={styles.pickerText}>
            {selectedProvince || 'Select Province'}
          </Text>
          <Image
            source={require('./assets/icons/arrow.png')} 
            style={styles.dropdownArrow}
            resizeMode="contain"
          />
          <Picker
            selectedValue={selectedProvince}
            onValueChange={handleProvinceChange}
            style={styles.picker}
            mode="dropdown"
          >
            <Picker.Item label="Select Province" value="" />
            {provinces.map((province, index) => (
              <Picker.Item key={index} label={province} value={province} />
            ))}
          </Picker>
        </View>

        {/* District Picker */}
        <View style={[styles.pickerContainer, !selectedProvince && styles.disabledPicker]}>
          <Text style={[styles.pickerText, !selectedProvince && styles.disabledText]}>
            {selectedDistrict || 'Select District'}
          </Text>
          <Image
            source={require('./assets/icons/arrow.png')} 
            style={[styles.dropdownArrow, !selectedProvince && styles.disabledArrow]}
            resizeMode="contain"
          />
          <Picker
            selectedValue={selectedDistrict}
            onValueChange={handleDistrictChange}
            style={styles.picker}
            mode="dropdown"
            enabled={selectedProvince !== ''}
          >
            <Picker.Item label="Select District" value="" />
            {districts.map((district, index) => (
              <Picker.Item key={index} label={district} value={district} />
            ))}
          </Picker>
        </View>

        {/* City Picker */}
        <View style={[styles.pickerContainer, !selectedDistrict && styles.disabledPicker]}>
          <Text style={[styles.pickerText, !selectedDistrict && styles.disabledText]}>
            {selectedCity || 'Select City'}
          </Text>
          <Image
            source={require('./assets/icons/arrow.png')} 
            style={[styles.dropdownArrow, !selectedDistrict && styles.disabledArrow]}
            resizeMode="contain"
          />
          <Picker
            selectedValue={selectedCity}
            onValueChange={setSelectedCity}
            style={styles.picker}
            mode="dropdown"
            enabled={selectedDistrict !== ''}
          >
            <Picker.Item label="Select City" value="" />
            {cities.map((city, index) => (
              <Picker.Item key={index} label={city} value={city} />
            ))}
          </Picker>
        </View>

        {/* Enter Button */}
        <TouchableOpacity style={styles.enterButton} onPress={handleEnter}>
          <Text style={styles.enterButtonText}>Enter</Text>
        </TouchableOpacity>

        {/* Bottom Navigation Text */}
        <View style={styles.bottomNav}>
          <Text style={styles.bottomNavText}>
            Search &gt; Connect &gt; Work
          </Text>
        </View>
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
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 40,
  },
  logoContainer: {
    marginBottom: 20,
  },
  logo: {
    width: 120,
    height: 120,
  },
  title: {
    fontSize: 24,
    color: '#4B4B4B',
    marginBottom: 80,
    textAlign: 'center',
    fontWeight: '400',
  },
  pickerContainer: {
    width: '85%',
    maxWidth: 300,
    height: 50,
    borderWidth: 2,
    borderColor: '#4B4B4B',
    borderRadius: 10,
    marginBottom: 20,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  disabledPicker: {
    borderColor: '#ccc',
  },
  pickerText: {
    flex: 1,
    fontSize: 16,
    color: '#4B4B4B',
    fontFamily: 'Maven Pro',
  },
  disabledText: {
    color: '#ccc',
  },
  dropdownArrow: {
    width: 15,
    height: 15,
    marginLeft: 10,
    tintColor: '#4B4B4B', 
  },
  disabledArrow: {
    tintColor: '#ccc',
  },
  picker: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0,
    width: '100%',
    height: '100%',
  },
  enterButton: {
    width: '65%',
    maxWidth: 250,
    height: 45,
    borderWidth: 2,
    borderColor: '#801414',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#801414',
    marginTop: 40,
    marginBottom: 100,
  },
  enterButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: 1,
  },
  bottomNav: {
    position: 'absolute',
    bottom: 50,
  },
  bottomNavText: {
    color: '#801414',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default CitySelectionScreen;