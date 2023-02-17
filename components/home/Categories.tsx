import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {items} from './categoryData';
const Categories = () => {
  return (
    <View style={styles.categoryCon}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items.map((item, index) => (
          <View key={index} style={styles.scrollCon}>
            <Image source={item.image} style={styles.scrollImage} />
            <Text style={styles.categoryText}>{item.text}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  categoryCon: {
    marginTop: 5,
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingLeft: 20,
  },
  scrollCon: {
    alignItems: 'center',
    marginRight: 30,
  },
  scrollImage: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  categoryText: {
    fontSize: 13,
    fontWeight: '900',
  },
});
