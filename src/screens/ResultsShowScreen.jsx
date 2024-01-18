import React, { useEffect, useState } from 'react'
import {View, Text, StyleSheet, FlatList, Image} from "react-native"
import yelp from '../api/yelp'

const ResultsShowScreen = ({route}) => {
    const [result, setResult] = useState(null)
    

    const {id} = route.params

    // const usableId = JSON.stringify(id)

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    }

    useEffect(() => {
        getResult(id)
    }, [])

    // console.log(result)

    if (!result) {
        return
    }

  return (
    <View style={styles.container}> 
        <Text style={styles.name}>{result.name}</Text>

        <FlatList
            data={result.photos}
            keyExtractor={photo => photo}
            renderItem={({item}) => {
                return <Image style={styles.image} source={{uri: item}} />
            }}

        />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15
    },
    name: {
        fontWeight: "bold",
        fontSize: 18,
        marginVertical: 15,
    },
    image: {
        height: 200,
        width: "100%",
        backgroundColor: "grey",
        borderRadius: 6,
        backgroundColor: "grey",
        marginBottom: 15,
    }
})

export default ResultsShowScreen