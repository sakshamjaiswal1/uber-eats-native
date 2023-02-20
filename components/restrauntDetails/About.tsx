import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Image} from 'react-native-elements';
type ImagProps = {
  image: string;
};

type NameProps = {
  name: string;
};
type DescriptionProps = {
  description: string;
};
const About = ({route}: {route: any}) => {
  const {name, image, price, reviews, rating, categories} = route.params;
  const formattedCategories = categories
    .map((cat: any) => cat.title)
    .join(' • ');
  const description = `${formattedCategories} ${
    price ? ' • ' + price : ''
  }• 🎫 • ${rating} ⭐ (${reviews}+)`;
  return (
    <View>
      <RestaurantImage image={image} />
      <RestaurantName name={name} />
      <RestaurantDescription description={description} />
    </View>
  );
};

const RestaurantImage: React.FC<ImagProps> = ({image}) => (
  <Image source={{uri: image}} style={styles.restaurantImage} />
);

const RestaurantName: React.FC<NameProps> = ({name}) => (
  <Text style={styles.restaurantName}>{name}</Text>
);

const RestaurantDescription: React.FC<DescriptionProps> = ({description}) => (
  <Text style={styles.restaurantDescription}>{description}</Text>
);
export default About;

const styles = StyleSheet.create({
  restaurantImage: {
    width: '100%',
    height: 180,
  },
  restaurantName: {
    fontSize: 29,
    fontWeight: '600',
    marginTop: 10,
    marginHorizontal: 15,
  },
  restaurantDescription: {
    marginTop: 10,
    marginHorizontal: 15,
    fontWeight: '400',
    fontSize: 15.5,
  },
});
