import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  FlatList,
  StatusBar,
} from 'react-native';
import Footer from './components/Footer';

// Header Component
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
          <Text style={styles.locationText}>Category</Text>
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

// Categories data
const categoriesData = [
  {
    id: '1',
    title: 'Construction',
    icon: require('./assets/category_icons/construction.png'),
    route: 'Construction',
  },
  {
    id: '2',
    title: 'Professionals',
    icon: require('./assets/category_icons/professionals.png'),
    route: 'Professionals',
  },
  {
    id: '3',
    title: 'Repair',
    icon: require('./assets/category_icons/repair.png'),
    route: 'Repair',
  },
  {
    id: '4',
    title: 'Events',
    icon: require('./assets/category_icons/events.png'),
    route: 'Events',
  },
  {
    id: '5',
    title: 'Medical',
    icon: require('./assets/category_icons/medical.png'),
    route: 'Medical',
  },
  {
    id: '6',
    title: 'Computer / IT',
    icon: require('./assets/category_icons/computer.png'),
    route: 'ComputerIT',
  },
  {
    id: '7',
    title: 'Travel',
    icon: require('./assets/category_icons/travel.png'),
    route: 'Travel',
  },
  {
    id: '8',
    title: 'Rituals',
    icon: require('./assets/category_icons/rituals.png'),
    route: 'Rituals',
  },
  {
    id: '9',
    title: 'Cleaner',
    icon: require('./assets/category_icons/cleaner.png'),
    route: 'Cleaner',
  },
  {
    id: '10',
    title: 'Didi',
    icon: require('./assets/category_icons/didi.png'),
    route: 'Didi',
  },
  {
    id: '11',
    title: 'For Hire',
    icon: require('./assets/category_icons/forhire.png'),
    route: 'ForHire',
  },
  {
    id: '12',
    title: 'Teacher',
    icon: require('./assets/category_icons/teacher.png'),
    route: 'Teacher',
  },
  {
    id: '13',
    title: 'Delivery',
    icon: require('./assets/category_icons/delivery.png'),
    route: 'Delivery',
  },
  {
    id: '14',
    title: 'Store',
    icon: require('./assets/category_icons/store.png'),
    route: 'Store',
  },
  {
    id: '15',
    title: 'Account',
    icon: require('./assets/category_icons/account.png'),
    route: 'Account',
  },
  {
    id: '16',
    title: 'Suppliers',
    icon: require('./assets/category_icons/suppliers.png'),
    route: 'Suppliers',
  },
];

// Category Item Component
const CategoryItem = ({ item, onPress }) => {
  return (
    <TouchableOpacity style={styles.categoryItem} onPress={() => onPress(item)}>
      <View style={styles.iconContainer}>
        <Image source={item.icon} style={styles.categoryIcon} resizeMode="contain" />
      </View>
      <Text style={styles.categoryText}>{item.title}</Text>
    </TouchableOpacity>
  );
};

// Main Screen Component
const CategoryScreen = () => {
  const handleCategoryPress = (category) => {
    console.log('Category pressed:', category.title);
    // Handle navigation or category selection here
  };

  const renderCategory = ({ item }) => (
    <CategoryItem item={item} onPress={handleCategoryPress} />
  );

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#fff"
        translucent={false}
      />
      <SafeAreaView style={styles.container}>
        <Header />
        <View style={styles.content}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Select Category</Text>
            <TouchableOpacity>
              <Image
                source={require('./assets/icons/arrow.png')}
                style={styles.dropdownIcon}
                resizeMode='contain'
              />
            </TouchableOpacity>
          </View>

          {/* Horizontal line with color code 801414 */}
          <View style={styles.separatorLine} />

          <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
            <View style={styles.categoriesContainer}>
              <FlatList
                data={categoriesData}
                renderItem={renderCategory}
                keyExtractor={(item) => item.id}
                numColumns={4}
                scrollEnabled={false}
                columnWrapperStyle={styles.row}
                contentContainerStyle={styles.gridContainer}
              />
            </View>
          </ScrollView>
        </View>
        <Footer />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
  // Content Styles
  content: {
    flex: 1,
    backgroundColor: '#fff',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#4B4B4B',
  },
  dropdownIcon: {
    width: 24,
    height: 24,
  },
  // Category Dropdown Section Styles
  categoryDropdownSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#fff',
  },
  selectedCategoryText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  categoryDropdownButton: {
    padding: 5,
  },
  categoryDropdownIcon: {
    width: 20,
    height: 20,
    tintColor: '#666',
  },
  // Separator Line with color code 801414
  separatorLine: {
    height: 2,
    backgroundColor: '#801414',
    marginHorizontal: 20,
    marginBottom: 10,
  },
  scrollContainer: {
    flex: 1,
  },
  categoriesContainer: {
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  gridContainer: {
    paddingTop: 10,
  },
  row: {
    justifyContent: 'space-around',
  },
  categoryItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 5,
    marginVertical: 8,
    maxWidth: '22%',
  },
  iconContainer: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  categoryIcon: {
    width: 40,
    height: 40,
  },
  categoryText: {
    fontSize: 10,
    color: '#666',
    textAlign: 'center',
    lineHeight: 16,
  },
});

export default CategoryScreen;