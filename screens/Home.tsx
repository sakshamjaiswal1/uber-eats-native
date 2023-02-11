import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import HeaderTabs from '../components/home/HeaderTabs';
import SearchBar from '../components/home/SearchBar';

const Home = () => {
  const [city, setCity] = useState<string>('New York');
  console.log(city);
  return (
    <SafeAreaView>
      <View style={style.headerContainer}>
        <HeaderTabs />
        <SearchBar setCity={setCity} />
      </View>
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
