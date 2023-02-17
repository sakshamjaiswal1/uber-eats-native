import {createStore} from 'redux';

import reducer from './reducers/index';

export default function configureStore(initialState?: any) {
  const store = createStore(reducer, initialState);
  return store;
}
// <View
// style={{
//   marginTop: 5,
//   backgroundColor: "#fff",
//   paddingVertical: 10,
//   paddingLeft: 20,
// }}
// >
// <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//   {items.map((item, index) => (
//     <View key={index} style={{ alignItems: "center", marginRight: 30 }}>
//       <Image
//         source={item.image}
//         style={{
//           width: 50,
//           height: 40,
//           resizeMode: "contain",
//         }}
//       />
//       <Text style={{ fontSize: 13, fontWeight: "900" }}>{item.text}</Text>
//     </View>
//   ))}
// </ScrollView>
// </View>
