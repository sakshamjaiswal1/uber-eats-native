import {View, StyleSheet, Text} from 'react-native';
import React from 'react';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
type Props = {
  setCity: React.Dispatch<React.SetStateAction<string>>;
};

const SearchBar: React.FC<Props> = ({setCity}) => {
  return (
    <View style={styles.searchContainer}>
      <GooglePlacesAutocomplete
        query={{
          key: 'AIzaSyATiAqIXBARofRD2apZcPQ1eEWZPH4fPV4',
        }}
        onPress={(data: any) => {
          console.log(data.description);
          const city = data.description.split(',')[0];
          setCity(city);
        }}
        placeholder="Search"
        styles={{
          textInput: {
            backgroundColor: '#eee',
            borderRadius: 20,
            fontWeight: '700',
            marginTop: 7,
          },
          textInputContainer: {
            backgroundColor: '#eee',
            borderRadius: 50,
            flexDirection: 'row',
            alignItems: 'center',
            marginRight: 10,
          },
        }}
        renderLeftButton={() => (
          <View style={styles.renderLeft}>
            <Ionicons name="location-sharp" size={24} />
          </View>
        )}
        renderRightButton={() => {
          return (
            <View style={styles.renderRight}>
              <AntDesign
                name="clockcircle"
                size={11}
                style={styles.antDesign}
              />
              <Text>Search</Text>
            </View>
          );
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  searchContainer: {
    marginTop: 15,
    flexDirection: 'row',
  },
  text: {
    color: '#000000',
  },
  renderLeft: {
    marginLeft: 15,
  },
  renderRight: {
    flexDirection: 'row',
    marginRight: 8,
    backgroundColor: 'white',
    padding: 9,
    borderRadius: 30,
    alignItems: 'center',
  },
  antDesign: {
    marginRight: 6,
  },
});

export default SearchBar;
