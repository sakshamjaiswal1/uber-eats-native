import {View, Text} from 'react-native';
import React from 'react';
import About from '../components/restrauntDetails/About';

type DetailsProps = {
  route: any;
  navigation: any;
};

const RestaurantDetails: React.FC<DetailsProps> = ({route, navigation}) => {
  return (
    <View>
      <About route={route} />
    </View>
  );
};

export default RestaurantDetails;
