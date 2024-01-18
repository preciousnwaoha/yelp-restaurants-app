import React from "react"
import { Image, Text, StyleSheet, View } from "react-native"

const ResultsDetail = ({result}) => {

    return <View style={styles.container} >
        <Image style={styles.image} source={{uri: result.image_url}} />
        <Text style={styles.name}>{result.name}</Text>

        <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
    </View>
}  

const styles = StyleSheet.create({
    container: {
        marginLeft: 15,
    },
    image: {
        width: 250,
        height: 120,
        borderRadius: 6,
        borderWidth: 1,
        backgroundColor: "grey",
        marginBottom: 5,
    },
    name: {
        fontWeight: "bold",
        fontSize: 18,
    }
})

export default ResultsDetail