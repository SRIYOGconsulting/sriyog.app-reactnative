import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
  SafeAreaView,
  StatusBar,
  FlatList,
  Dimensions,
} from 'react-native';
import Header from './components/Header';
import Footer from './components/Footer';

const { width } = Dimensions.get('window');
const CARD_WIDTH = width - 40; // Card width with margins (20px each side)
const CARD_MARGIN = 10;

const SriyogHomeScreen = () => {
  const [currentOfferIndex, setCurrentOfferIndex] = useState(0);
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const offerCarouselRef = useRef(null);
  const reviewCarouselRef = useRef(null);

  // Sample offers data
  const originalOffers = [
    {
      id: 1,
      title: 'Book a Pandit Ji',
      discount: '20% Off',
      icon: require('./assets/profession_icons/pandit.png'),
      backgroundColor: '#F5E6E6',
    },
    {
      id: 2,
      title: 'Home Cleaning',
      discount: '15% Off',
      icon: require('./assets/profession_icons/plumber.png'),
      backgroundColor: '#E6F5E6',
    },
    {
      id: 3,
      title: 'Electrician Service',
      discount: '25% Off',
      icon: require('./assets/profession_icons/electrician.png'),
      backgroundColor: '#E6E6F5',
    },
  ];

  // Repeated offers for infinite scroll effect
  const offers = [
    ...originalOffers.map(offer => ({ ...offer, id: `${offer.id}_1` })),
    ...originalOffers.map(offer => ({ ...offer, id: `${offer.id}_2` })),
    ...originalOffers.map(offer => ({ ...offer, id: `${offer.id}_3` })),
  ];

  // Sample reviews data with three unique reviews
  const originalReviews = [
    {
      id: 1,
      name: 'Aavash Tamang',
      image: require('./assets/person_images/homescreen/aavash.png'),
      text: 'Garden Sewa app helped me with my house redecorating and gardening services...',
      date: '8/3/2025',
      rating: 5,
    },
    {
      id: 2,
      name: 'Aavash Tamang',
      image: require('./assets/person_images/homescreen/aavash.png'),
      text: 'Garden Sewa app helped me with my house redecorating and gardening services...',
      date: '8/3/2025',
      rating: 5,
    },
    {
      id: 3,
      name: 'Aavash Tamang',
      image: require('./assets/person_images/homescreen/aavash.png'),
      text: 'Garden Sewa app helped me with my house redecorating and gardening services...',
      date: '8/3/2025',
      rating: 5,
    },
  ];

  // Repeated reviews for infinite scroll effect
  const reviews = [
    ...originalReviews.map(review => ({ ...review, id: `${review.id}_1` })),
    ...originalReviews.map(review => ({ ...review, id: `${review.id}_2` })),
    ...originalReviews.map(review => ({ ...review, id: `${review.id}_3` })),
  ];

  const onOfferScroll = (event) => {
    const slideSize = event.nativeEvent.layoutMeasurement.width;
    const index = event.nativeEvent.contentOffset.x / slideSize;
    const roundIndex = Math.round(index);
    const mappedIndex = roundIndex % originalOffers.length;
    setCurrentOfferIndex(mappedIndex);
  };

  const onReviewScroll = (event) => {
    const slideSize = event.nativeEvent.layoutMeasurement.width;
    const index = event.nativeEvent.contentOffset.x / slideSize;
    const roundIndex = Math.round(index);
    const mappedIndex = roundIndex % originalReviews.length;
    setCurrentReviewIndex(mappedIndex);
  };

  const renderOfferItem = ({ item }) => (
    <View style={[styles.offerCard, { backgroundColor: item.backgroundColor }]}>
      <View style={styles.offerContent}>
        <View style={styles.offerLeft}>
          <Image source={item.icon} style={styles.panditIcon} />
          <View>
            <Text style={styles.offerTitle}>{item.title}</Text>
            <Text style={styles.offerDiscount}>{item.discount}</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.bookButton}>
        <Text style={styles.bookButtonText}>Book Now</Text>
      </TouchableOpacity>
    </View>
  );

  const renderReviewItem = ({ item }) => (
    <View style={[styles.reviewCard, { backgroundColor: '#F5E6E6' }]}>
      <Image source={item.image} style={styles.reviewerImage} />
      <View style={styles.reviewContent}>
        <View style={styles.reviewHeader}>
          <Text style={styles.reviewerName}>{item.name}</Text>
          <View style={styles.starsContainer}>
            {[...Array(item.rating)].map((_, i) => (
              <Image key={i} source={require('./assets/icons/star.png')} style={styles.starIcon} />
            ))}
          </View>
        </View>
        <Text style={styles.reviewText}>{item.text}</Text>
        <View style={styles.reviewFooter}>
          <Text style={styles.reviewDate}>{item.date}</Text>
          <TouchableOpacity>
            <Text style={styles.showAllText}>Show all</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  const renderOfferCarouselIndicator = () => (
    <View style={styles.indicatorContainer}>
      {originalOffers.map((_, index) => (
        <View
          key={index}
          style={[
            styles.indicator,
            index === currentOfferIndex ? styles.activeIndicator : styles.inactiveIndicator,
          ]}
        />
      ))}
    </View>
  );

  const renderReviewCarouselIndicator = () => (
    <View style={styles.indicatorContainer}>
      {originalReviews.map((_, index) => (
        <View
          key={index}
          style={[
            styles.indicator,
            index === currentReviewIndex ? styles.activeIndicator : styles.inactiveIndicator,
          ]}
        />
      ))}
    </View>
  );

  const renderPhoneInput = () => (
    <View style={styles.phoneInputContainer}>
      <View style={styles.phoneInput}>
        <Image 
          source={require('./assets/icons/nepalflag.png')} 
          style={styles.flagIcon}
          resizeMode="contain"
        />
        <Image 
          source={require('./assets/icons/arrow.png')} 
          style={styles.dropdownIcon}
          resizeMode="contain"
        />
        <Text style={styles.divider}>|</Text>
        <TextInput
          style={styles.phoneTextInput}
          placeholder="Enter Your Phone Number"
          placeholderTextColor="#999"
          keyboardType="phone-pad"
        />
      </View>
      <TouchableOpacity style={styles.helpButton}>
        <Text style={styles.helpButtonText}>Help</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      
      {/* Header */}
      <Header />

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <Image 
            source={require('./assets/icons/search.png')} 
            style={styles.searchIcon}
          />
          <TextInput
            style={styles.searchInput}
            placeholder="Search services..."
            placeholderTextColor="#999"
          />
          <TouchableOpacity style={styles.clearButton}>
            <Image 
              source={require('./assets/icons/cross.png')} 
              style={styles.clearIcon}
            />
          </TouchableOpacity>
        </View>

        {/* Hero Image */}
        <View style={styles.heroContainer}>
          <Image 
            source={require('./assets/app_images/homescreen.png')} 
            style={styles.heroImage}
            resizeMode="cover"
          />
        </View>

        {/* Seasonal Offer Carousel */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle1}>Seasonal Offer</Text>
          <FlatList
            ref={offerCarouselRef}
            data={offers}
            renderItem={renderOfferItem}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            snapToInterval={CARD_WIDTH + CARD_MARGIN}
            snapToAlignment="start"
            decelerationRate="fast"
            onScroll={onOfferScroll}
            scrollEventThrottle={16}
            contentContainerStyle={styles.carouselContainer}
          />
          {renderOfferCarouselIndicator()}
        </View>

        {/* Top Professions */}
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Top Professions</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.professionsGrid}>
            <View style={styles.professionItem}>
              <Image 
                source={require('./assets/profession_icons/plumber.png')} 
                style={styles.professionIcon}
                resizeMode="contain"
              />
              <Text style={styles.professionText}>Plumber</Text>
            </View>
            <View style={styles.professionItem}>
              <Image 
                source={require('./assets/profession_icons/electrician.png')} 
                style={styles.professionIcon}
                resizeMode="contain"
              />
              <Text style={styles.professionText}>Electrician</Text>
            </View>
            <View style={styles.professionItem}>
              <Image 
                source={require('./assets/profession_icons/tattooist.png')} 
                style={styles.professionIcon}
                resizeMode="contain"
              />
              <Text style={styles.professionText}>Tattooist</Text>
            </View>
            <View style={styles.professionItem}>
              <Image 
                source={require('./assets/profession_icons/painter.png')} 
                style={styles.professionIcon}
                resizeMode="contain"
              />
              <Text style={styles.professionText}>Painter</Text>
            </View>
          </View>
        </View>

        {/* Top Professionals */}
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Top Professionals</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.professionalsGrid}>
            <View style={styles.professionalItem}>
              <Image 
                source={require('./assets/person_images/homescreen/1.png')} 
                style={styles.professionalImage}
              />
              <Text style={styles.professionalName}>Ghanashyam</Text>
            </View>
            <View style={styles.professionalItem}>
              <Image 
                source={require('./assets/person_images/homescreen/2.png')} 
                style={styles.professionalImage}
              />
              <Text style={styles.professionalName}>Binod</Text>
            </View>
            <View style={styles.professionalItem}>
              <Image 
                source={require('./assets/person_images/homescreen/3.png')} 
                style={styles.professionalImage}
              />
              <Text style={styles.professionalName}>Santosh</Text>
            </View>
            <View style={styles.professionalItem}>
              <Image 
                source={require('./assets/person_images/homescreen/4.png')} 
                style={styles.professionalImage}
              />
              <Text style={styles.professionalName}>Kripanand</Text>
            </View>
          </View>
        </View>

        {/* Phone Number Input */}
        <View style={styles.phoneContainer}>
          {renderPhoneInput()}
        </View>

        {/* Reviews Carousel */}
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Reviews</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            ref={reviewCarouselRef}
            data={reviews}
            renderItem={renderReviewItem}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            snapToInterval={CARD_WIDTH + CARD_MARGIN}
            snapToAlignment="start"
            decelerationRate="fast"
            onScroll={onReviewScroll}
            scrollEventThrottle={16}
            contentContainerStyle={styles.carouselContainer}
          />
          {renderReviewCarouselIndicator()}
        </View>
      </ScrollView>

      {/* Footer */}
      <Footer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    flex: 1,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 20,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#4B4B4B',
  },
  searchIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  clearButton: {
    padding: 5,
  },
  clearIcon: {
    width: 24,
    height: 24,
  },
  heroContainer: {
    marginHorizontal: 20,
    marginBottom: 20,
    borderRadius: 15,
    overflow: 'hidden',
  },
  heroImage: {
    width: '100%',
    height: 200,
  },
  sectionContainer: {
    marginBottom: 30,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  sectionTitle1: {
    marginLeft: 20,
    marginBottom: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#801414',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#801414',
  },
  seeAllText: {
    fontSize: 14,
    color: '#666',
  },
  carouselContainer: {
    paddingLeft: 20,
    paddingRight: 10,
  },
  offerCard: {
    width: CARD_WIDTH,
    height: 140,
    marginRight: CARD_MARGIN,
    borderRadius: 15,
    padding: 20,
    justifyContent: 'space-between',
  },
  offerContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  offerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  panditIcon: {
    width: 60,
    height: 100,
    marginRight: 15,
    resizeMode: "contain",
  },
  offerTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 5,
  },
  offerDiscount: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#801414',
  },
  bookButton: {
    backgroundColor: '#801414',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    alignSelf: 'flex-end',
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  bookButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
  },
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  indicator: {
    width: 40,
    height: 4,
    borderRadius: 2,
    marginHorizontal: 4,
  },
  activeIndicator: {
    backgroundColor: '#801414',
  },
  inactiveIndicator: {
    backgroundColor: '#D0D0D0',
  },
  professionsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
  },
  professionItem: {
    alignItems: 'center',
    width: 70,
  },
  professionIcon: {
    width: 50,
    height: 50,
    marginBottom: 8,
  },
  professionText: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
  professionalsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
  },
  professionalItem: {
    alignItems: 'center',
    width: 70,
  },
  professionalImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 8,
  },
  professionalName: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
  phoneContainer: {
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  phoneInputContainer: {
    position: 'relative',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    overflow: 'hidden',
  },
  phoneInput: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 2,
  },
  flagIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  dropdownIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  divider: {
    color: '#ddd',
    marginRight: 10,
    fontSize: 16,
  },
  phoneTextInput: {
    flex: 1,
    fontSize: 12,
    color: '#333',
  },
  helpButton: {
    backgroundColor: '#801414',
    paddingHorizontal: 15,
    paddingVertical: 12,
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 60,
  },
  helpButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
  },
  reviewCard: {
    width: CARD_WIDTH,
    height: 140,
    marginRight: CARD_MARGIN,
    borderRadius: 15,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  reviewerImage: {
    width: 80,
    height: 80,
    borderRadius: 30,
    marginRight: 15,
  },
  reviewContent: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  reviewHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  reviewerName: {
    fontSize: 15,
    fontWeight: '600',
    color: '#333',
    marginRight: 10,
  },
  starsContainer: {
    flexDirection: 'row',
  },
  starIcon: {
    width: 12,
    height: 12,
    margin: 2,
  },
  reviewText: {
    fontSize: 12,
    color: '#333',
    lineHeight: 20,
    marginBottom: 10,
  },
  reviewFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  reviewDate: {
    fontSize: 12,
    color: '#999',
  },
  showAllText: {
    fontSize: 12,
    color: '#666',
  },
});

export default SriyogHomeScreen;