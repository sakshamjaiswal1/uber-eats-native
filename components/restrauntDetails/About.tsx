import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const About = ({route}: {route: any}) => {
  const {name, image, price, reviews, rating, categories} = route.params;

  return (
    <View>
      <Text>About</Text>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({});
