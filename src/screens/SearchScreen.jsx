import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, ScrollView, } from 'react-native';
import SearchBar from "../components/SearchBar";
import yelp from '../api/yelp';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = ({navigation}) => {
    const [term, setTerm] = useState('');
    
    const [results, errorMessage, searchApi] = useResults();

    const filterResultsByPrice = (price) => {
        return results.filter(result => {
            return result.price === price;
        })
    }



    return (
        <>
            {/* <Text>Search Screen</Text> */}

            <SearchBar 
            term={term} 
            onTermChange={text =>  setTerm(text)}
            onTermSubmit={() => searchApi(term)}

            />

            {errorMessage ? <Text>{errorMessage}</Text> : null}

            <ScrollView>
            <ResultsList results={filterResultsByPrice("$")} title={"Cost Effective"} />

            <ResultsList results={filterResultsByPrice("$$")} title={"Bit Pricier"} />

            <ResultsList results={filterResultsByPrice("$$$")} title={"Big Spender"}/>
            </ScrollView>
            
        </>
    );
};

const styles = StyleSheet.create({
    
});

export default SearchScreen;
