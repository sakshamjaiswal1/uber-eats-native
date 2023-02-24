import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Modal, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import OrderItem from './OrderItem';
import {db} from '../../firebase';
import LottieView from 'lottie-react-native';
import {IfoodItem} from '../../utils/types/main';
import {
  collection,
  getDocs,
  addDoc,
  serverTimestamp,
} from 'firebase/firestore/lite';
type ViewCartProps = {
  navigation: any;
};
const ViewCart: React.FC<ViewCartProps> = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const {items, restaurantName} = useSelector(
    (state: any) => state.cartReducer.selectedItems,
  );

  const total = items
    ?.map((item: IfoodItem) => Number(item.price.replace('$', '')))
    .reduce((prev: any, curr: any) => prev + curr, 0);

  const totalUSD = `$ ${total}`;

  const addOrderToFireBase = async () => {
    setLoading(true);
    try {
      const orders = collection(db, 'cities');
      const orderAdded = await addDoc(orders, {
        items,
        restaurantName,
        createdAt: serverTimestamp(),
      });
      console.log(orderAdded);
      setTimeout(() => {
        setLoading(false);
        navigation.navigate('OrderCompleted');
      }, 2500);
    } catch (err: any) {
      console.log(err);
    }
  };

  const checkoutModalContent = () => {
    return (
      <>
        <View style={styles.modalContainer}>
          <View style={styles.modalCheckoutContainer}>
            <Text style={styles.restaurantName}>{restaurantName}</Text>
            {items.map((item: IfoodItem, index: number) => (
              <OrderItem key={index} title={item.title} price={item.price} />
            ))}
            <View style={styles.subtotalContainer}>
              <Text style={styles.subTotalText}>Subtotal</Text>
              <Text>{totalUSD}</Text>
            </View>
            <View>
              <TouchableOpacity></TouchableOpacity>
            </View>
          </View>
        </View>
      </>
    );
  };

  return (
    <View>
      <Text>ViewCart</Text>
    </View>
  );
};

export default ViewCart;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  modalCheckoutContainer: {
    backgroundColor: 'white',
    padding: 16,
    height: 500,
    borderWidth: 1,
  },
  restaurantName: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 18,
    marginBottom: 10,
  },
  subtotalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  subTotalText: {
    textAlign: 'left',
    fontWeight: '600',
    fontSize: 15,
    marginBottom: 10,
  },
  checkoutButtonCon: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  checkoutButton: {
    marginTop: 20,
    backgroundColor: 'black',
  },
});
