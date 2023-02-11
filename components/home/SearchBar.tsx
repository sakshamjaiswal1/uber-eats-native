import {View, StyleSheet} from 'react-native';
import React from 'react';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

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
});

export default SearchBar;
