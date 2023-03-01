import {View, StyleSheet} from 'react-native';
import React from 'react';
import About from '../components/restrauntDetails/About';
import {Divider} from 'react-native-elements';
import MenuItems from '../components/restrauntDetails/MenuItems';
import ViewCart from '../components/restrauntDetails/ViewCart';
type DetailsProps = {
  route: any;
  navigation: any;
};

const RestaurantDetails: React.FC<DetailsProps> = ({route, navigation}) => {
  return (
    <View style={styles.textBlack}>
      <About route={route} />
      <Divider width={1.8} style={styles.divider} />
      <MenuItems restaurantName={route.params.name} navigation={navigation} />
      <ViewCart navigation={navigation} />
    </View>
  );
};
const styles = StyleSheet.create({
  divider: {
    marginVertical: 20,
  },
  textBlack: {
    backgroundColor: '#ffffff',
    color: '#000000',
  },
});
export default RestaurantDetails;
