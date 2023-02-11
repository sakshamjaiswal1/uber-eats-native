import {combineReducers} from 'redux';
import cartReducer from './cartReducers';

let reducers = combineReducers({
  cartReducer: cartReducer,
});

const rootReducer = (state: any, action: any) => {
  return reducers(state, action);
};

export default rootReducer;
// <View style={{ marginTop: 15, flexDirection: "row" }}>
// <GooglePlacesAutocomplete
//   query={{ key: "AIzaSyATiAqIXBARofRD2apZcPQ1eEWZPH4fPV4" }}
//   onPress={(data, details = null) => {
//     console.log(data.description);
//     const city = data.description.split(",")[0];
//     cityHandler(city);
//   }}
//   placeholder="Search"
//   styles={{
//     textInput: {
//       backgroundColor: "#eee",
//       borderRadius: 20,
//       fontWeight: "700",
//       marginTop: 7,
//     },
//     textInputContainer: {
//       backgroundColor: "#eee",
//       borderRadius: 50,
//       flexDirection: "row",
//       alignItems: "center",
//       marginRight: 10,
//     },
//   }}
//   renderLeftButton={() => (
//     <View style={{ marginLeft: 10 }}>
//       <Ionicons name="location-sharp" size={24} />
//     </View>
//   )}
//   renderRightButton={() => (
//     <View
//       style={{
//         flexDirection: "row",
//         marginRight: 8,
//         backgroundColor: "white",
//         padding: 9,
//         borderRadius: 30,
//         alignItems: "center",
//       }}
//     >
//       <AntDesign
//         name="clockcircle"
//         size={11}
//         style={{ marginRight: 6 }}
//       />
//       <Text>Search</Text>
//     </View>
//   )}
// />
// </View>
