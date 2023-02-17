import React, {useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import Categories from '../components/home/Categories';
import HeaderTabs from '../components/home/HeaderTabs';
import SearchBar from '../components/home/SearchBar';

const Home = () => {
  const [city, setCity] = useState<string>('New York');
  const [activeTabs, setActiveTabs] = useState<string>('Delivery');

  return (
    <SafeAreaView>
      <View style={style.headerContainer}>
        <HeaderTabs activeTabs={activeTabs} setActiveTabs={setActiveTabs} />
        <SearchBar setCity={setCity} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#ffffff',
    padding: 15,
  },
});

export default Home;
