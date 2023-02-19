import React, {useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import {Divider, Text} from 'react-native-elements';
import BottomTabs from '../components/home/BottomTabs';
import Categories from '../components/home/Categories';
import HeaderTabs from '../components/home/HeaderTabs';
import RestrauntItems from '../components/home/RestrauntItems';
import SearchBar from '../components/home/SearchBar';

const Home = ({navigation}: {navigation: any}) => {
  const [city, setCity] = useState<string>('New York');
  const [activeTabs, setActiveTabs] = useState<string>('Delivery');

  return (
    <SafeAreaView style={style.safeArea}>
      <View style={style.headerContainer}>
        <HeaderTabs activeTabs={activeTabs} setActiveTabs={setActiveTabs} />
        <SearchBar setCity={setCity} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestrauntItems navigation={navigation} />
      </ScrollView>
      <Divider width={1} />
      <BottomTabs />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#ffffff',
    padding: 15,
  },
  safeArea: {
    backgroundColor: '#eee',
    flex: 1,
  },
});

export default Home;
