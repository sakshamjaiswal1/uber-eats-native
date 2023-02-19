import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {localRestaurants} from './categoryData';
type InfoProps = {
  name: string;
  rating: number;
};
type ImageProps = {
  image: string;
};
const RestrauntItems = ({navigation}: {navigation: any}) => {
  return (
    <>
      {localRestaurants?.map((restraunt, index) => (
        <TouchableOpacity
          key={index}
          activeOpacity={1}
          style={styles.dataCon}
          onPress={() =>
            navigation.navigate('RestaurantDetail', {
              name: restraunt.name,
              image: restraunt.image_url,
              price: restraunt.price,
              reviews: restraunt.reviews,
              rating: restraunt.rating,
              categories: restraunt.categories,
            })
          }>
          <View style={styles.itemCon}>
            <RestrauntImage image={restraunt.image_url} />
            <RestrauntInfo name={restraunt.name} rating={restraunt.rating} />
          </View>
        </TouchableOpacity>
      ))}
    </>
  );
};

export default RestrauntItems;

const RestrauntImage: React.FC<ImageProps> = ({image}) => (
  <>
    <Image source={{uri: image}} style={styles.restrauntImage} />
    <TouchableOpacity style={styles.imageButton}>
      <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
    </TouchableOpacity>
  </>
);
const RestrauntInfo: React.FC<InfoProps> = ({name, rating}) => (
  <View style={styles.restrauntInfoCon}>
    <View>
      <Text>{name}</Text>
      <Text>30-45 30-45 • min</Text>
    </View>
    <View style={styles.ratingCon}>
      <Text>{rating}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  restrauntInfoCon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  ratingCon: {
    backgroundColor: '#eee',
    height: 30,
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
  nameText: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  timeText: {
    fontSize: 13,
    color: 'gray',
  },
  restrauntImage: {
    width: '100%',
    height: 180,
  },
  imageButton: {
    position: 'absolute',
    right: 20,
    top: 20,
  },
  dataCon: {
    marginBottom: 30,
  },
  itemCon: {
    marginTop: 10,
    padding: 15,
    backgroundColor: 'white',
  },
});
