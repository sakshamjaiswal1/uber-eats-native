/* eslint-disable react-native/no-inline-styles */
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {IfoodItem} from '../utils/types/main';
import {collection, getDocs, orderBy, query} from 'firebase/firestore/lite';
import {db} from '../firebase';
import LottieView from 'lottie-react-native';
import MenuItems from '../components/restrauntDetails/MenuItems';

const OrderCompleted = () => {
  const [lastOrder, setLastOrder] = useState<IfoodItem[]>([
    {
      title: 'Bologna',
      description: 'With butter lettuce, tomato and sauce bechamel',
      price: '$13.50',
      image:
        'https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg',
    },
  ]);
  const {items, restaurantName} = useSelector(
    (state: any) => state.cartReducer.selectedItems,
  );

  const total = items
    ?.map((item: IfoodItem) => Number(item.price.replace('$', '')))
    .reduce((prev: any, curr: any) => prev + curr, 0);

  const totalUSD = `$ ${total}`;
  const getOrderFromFireBase = async () => {
    let foodItem: any[] = [];
    try {
      const docref = collection(db, 'cities');
      const mainQuery = query(docref, orderBy('createdAt', 'desc'));
      const data = await getDocs(mainQuery);
      data.forEach((doc: any) => {
        foodItem.push(doc.data());
      });
      setLastOrder(foodItem[0]?.items);
    } catch (err: any) {
      console.log(err);
    }
  };

  useEffect(() => {
    getOrderFromFireBase();
  }, []);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#ffffff'}}>
      <View
        style={[
          {
            margin: 15,
            alignItems: 'center',
            height: '100%',
          },
        ]}>
        <LottieView
          style={{height: 100, alignSelf: 'center', marginBottom: 30}}
          source={require('../assets/animations/check-mark.json')}
          autoPlay
          speed={0.5}
          loop={false}
        />
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            marginBottom: 30,
            color: '#000000',
          }}>
          Your order at {restaurantName} has been placed for {totalUSD}
        </Text>
        <ScrollView>
          <MenuItems
            restaurantName={restaurantName}
            hideCheckBox={true}
            marginLeft={10}
            lastOrder={lastOrder}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default OrderCompleted;
