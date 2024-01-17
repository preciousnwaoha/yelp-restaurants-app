import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
    
    return (
        <View style={styles.backgroundStyle}>
            <AntDesign name="search1" 
            size={24} color="black" 
            style={styles.iconStyle}  />

            <TextInput
                style={styles.inputStyle}
                onChangeText={() => onTermChange()}
                value={term}
                placeholder='Search something'
                autoComplete='off'
                autoCapitalize='none'
                autoCorrect={false}
                onEndEditing={() => onTermSubmit()}
            />
            
        </View>
    );
};

const styles = StyleSheet.create({
    backgroundStyle:{
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        paddingHorizontal: 15,
        marginTop: 15,
        flexDirection: 'row',
        alignItems: 'center'
    },
    iconStyle:{
        fontSize: 35,
        alignSelf: 'center',
        marginRight: 15

    },
    inputStyle: {
        height: 40,
        borderColor: 'gray',
        flex: 1,
        fontSize: 18
    }
});

export default SearchBar;
