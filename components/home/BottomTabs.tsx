import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
type IconProps = {
  icon: string;
  text: string;
};

const BottomTabs = () => {
  return (
    <View style={styles.bottomCon}>
      <Icon icon="home" text="Home" />
      <Icon icon="search" text="browse" />
      <Icon icon="shopping-bag" text="Grocery" />
      <Icon icon="receipt" text="Orders" />
      <Icon icon="user" text="Account" />
    </View>
  );
};

export default BottomTabs;

const Icon: React.FC<IconProps> = ({icon, text}) => (
  <TouchableOpacity>
    <View>
      <FontAwesome5 name={icon} size={25} style={styles.icon} />
      <Text style={styles.textBlack}>{text}</Text>
    </View>
  </TouchableOpacity>
);
const styles = StyleSheet.create({
  icon: {
    marginBottom: 3,
    alignSelf: 'center',
  },
  bottomCon: {
    flexDirection: 'row',
    margin: 10,
    marginHorizontal: 30,
    justifyContent: 'space-between',
  },
  textBlack: {
    color: '#000000',
  },
});
