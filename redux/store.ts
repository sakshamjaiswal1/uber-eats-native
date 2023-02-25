import {createStore} from 'redux';

import reducer from './reducers/index';

export default function configureStore(initialState?: any) {
  const store = createStore(reducer, initialState);
  return store;
}
// <>
// <Modal
//   animationType="slide"
//   visible={modalVisible}
//   transparent={true}
//   onRequestClose={() => setModalVisible(false)}
// >
//   {checkoutModalContent()}
// </Modal>
// {total ? (
//   <View
//     style={{
//       flex: 1,
//       alignItems: "center",
//       justifyContent: "center",
//       flexDirection: "row",
//       position: "absolute",
//       bottom: 130,
//       zIndex: 999,
//     }}
//   >
//     <View
//       style={{
//         flexDirection: "row",
//         justifyContent: "center",
//         width: "100%",
//       }}
//     >
//       <TouchableOpacity
//         style={{
//           marginTop: 20,
//           backgroundColor: "black",
//           flexDirection: "row",
//           justifyContent: "flex-end",
//           padding: 15,
//           borderRadius: 30,
//           width: 300,
//           position: "relative",
//         }}
//         onPress={() => setModalVisible(true)}
//       >
//         <Text style={{ color: "white", fontSize: 20, marginRight: 30 }}>
//           View Cart
//         </Text>
//         <Text style={{ color: "white", fontSize: 20 }}>{totalUSD}</Text>
//       </TouchableOpacity>
//     </View>
//   </View>
// ) : (
//   <></>
// )}
// {loading ? (
//   <View
//     style={{
//       backgroundColor: "black",
//       position: "absolute",
//       opacity: 0.6,
//       justifyContent: "center",
//       alignItems: "center",
//       height: "100%",
//       width: "100%",
//     }}
//   >
//     <LottieView
//       style={{ height: 200 }}
//       source={require("../../assets/animations/scanner.json")}
//       autoPlay
//       speed={3}
//     />
//   </View>
// ) : (
//   <></>
// )}
// </>
