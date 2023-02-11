import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

type Props = {
  text: string;
  btnColor: string;
  textColor: string;
};

export const HeaderTabs: React.FC = () => {
  return (
    <View style={styles.container}>
      <HeaderButton text="Delivery" btnColor="black" textColor="white" />
      <HeaderButton text="Pickup" btnColor="white" textColor="black" />
    </View>
  );
};
const HeaderButton: React.FC<Props> = ({text, textColor, btnColor}) => {
  return (
    <TouchableOpacity
      style={[
        {
          backgroundColor: btnColor,
        },
        styles.headerBtnTouch,
      ]}>
      <Text style={[{color: textColor}, styles.headerBtnTouch]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default HeaderTabs;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerBtnTouch: {
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 30,
  },
  headerBtn: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
// =AIzaSyBKwklB8hvRWl1pr2f-YirvbF94brtNmyI
