import React, {useState} from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import SearchBar from "../components/SearchBar";

const SearchScreen = ({navigation}) => {
    const [term, setTerm] = useState('');

    const handleSearch = (text) => {
        setTerm(text)
    }


    return (
        <View style={styles.container}>
            {/* <Text>Search Screen</Text> */}

            <SearchBar 
            term={term} 
            onTermChange={handleSearch}
            onTermSubmit={() => console.log('term was submitted')}
            
            />

            {/* <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      /> */}
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
    }
});

export default SearchScreen;
