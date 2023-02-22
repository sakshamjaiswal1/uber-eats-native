import {View, StyleSheet} from 'react-native';
import React from 'react';
import About from '../components/restrauntDetails/About';
import {Divider} from 'react-native-elements';
import MenuItems from '../components/restrauntDetails/MenuItems';
type DetailsProps = {
  route: any;
  navigation: any;
};

const RestaurantDetails: React.FC<DetailsProps> = ({route, navigation}) => {
  return (
    <View>
      <About route={route} />
      <Divider width={1.8} style={styles.divider} />
      <MenuItems restaurantName={route.params.name} navigation={navigation} />
    </View>
  );
};
const styles = StyleSheet.create({
  divider: {
    marginVertical: 20,
  },
});
export default RestaurantDetails;
