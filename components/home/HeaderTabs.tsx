/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

type Props = {
  text: string;

  textColor: string;
  activeTabs: string;
  setActiveTabs: React.Dispatch<React.SetStateAction<string>>;
};

type PropsMain = {
  activeTabs: string;
  setActiveTabs: React.Dispatch<React.SetStateAction<string>>;
};
export const HeaderTabs: React.FC<PropsMain> = ({
  activeTabs,
  setActiveTabs,
}) => {
  return (
    <View style={styles.container}>
      <HeaderButton
        text="Delivery"
        textColor="white"
        activeTabs={activeTabs}
        setActiveTabs={setActiveTabs}
      />
      <HeaderButton
        text="Pickup"
        textColor="black"
        activeTabs={activeTabs}
        setActiveTabs={setActiveTabs}
      />
    </View>
  );
};
const HeaderButton: React.FC<Props> = ({
  text,
  textColor,

  activeTabs,
  setActiveTabs,
}) => {
  return (
    <TouchableOpacity
      style={[
        {
          backgroundColor: text === activeTabs ? 'black' : 'white',
        },
        styles.headerBtnTouch,
      ]}
      onPress={() => setActiveTabs(text)}>
      <Text
        style={[
          {color: text === activeTabs ? 'white' : 'black'},
          styles.headerBtnTouch,
        ]}>
        {text}
      </Text>
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
