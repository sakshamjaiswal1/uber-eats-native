/* eslint-disable react-native/no-inline-styles */
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {foods} from './foodData';
import {Divider, Image} from 'react-native-elements';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {useDispatch, useSelector} from 'react-redux';
import {IfoodItem} from '../../utils/types/main';
type MenuItemsProps = {
  restaurantName: string;
  navigation: string;
  hideCheckBox?: boolean;
  marginLeft?: number;
};

type FoodInfoProps = {
  title: string;
  description: string;
  price: string;
};

type FoodImageProps = {
  image: string;
  marginLeft?: number;
};
const MenuItems: React.FC<MenuItemsProps> = ({
  restaurantName,
  hideCheckBox,
  marginLeft,
}) => {
  const dispatch = useDispatch();
  const selectItem = (item: any, checkboxValue: any) => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        ...item,
        restaurantName: restaurantName,
        checkboxValue: checkboxValue,
      },
    });
  };
  const cartItems = useSelector(
    (state: any) => state.cartReducer.selectedItems.items,
  );
  const isFoodInCart = (food: IfoodItem) =>
    Boolean(cartItems.find((items: any) => items.title === food.title));
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {foods.map((food: IfoodItem, index: number) => (
        <View key={index}>
          <View style={styles.menuItemStyle}>
            {hideCheckBox ? (
              <></>
            ) : (
              <BouncyCheckbox
                fillColor="green"
                isChecked={isFoodInCart(food)}
                style={styles.bouncyCheckbox}
                onPress={checkboxValue => selectItem(food, checkboxValue)}
              />
            )}
            <FoodInfo
              title={food.title}
              description={food.description}
              price={food.price}
            />
            <FoodImage
              image={food.image}
              marginLeft={marginLeft ? marginLeft : 0}
            />
          </View>
          <Divider width={0.5} orientation="vertical" style={styles.divider} />
        </View>
      ))}
    </ScrollView>
  );
};

export default MenuItems;

const FoodInfo: React.FC<FoodInfoProps> = ({title, description, price}) => (
  <View style={styles.titleCon}>
    <Text style={styles.titleStyle}>{title}</Text>
    <Text>{description}</Text>
    <Text>{price}</Text>
  </View>
);

const FoodImage: React.FC<FoodImageProps> = ({image, marginLeft}) => (
  <View>
    <Image
      source={{uri: image}}
      style={{width: 100, height: 100, borderRadius: 8, marginLeft: marginLeft}}
    />
  </View>
);

const styles = StyleSheet.create({
  menuItemStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
  },
  titleStyle: {
    fontSize: 19,
    fontWeight: '600',
  },
  titleCon: {
    width: 240,
    justifyContent: 'space-evenly',
  },
  foodImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  bouncyCheckbox: {
    borderColor: 'lightgray',
    borderRadius: 0,
  },
  divider: {
    marginHorizontal: 20,
  },
});
