import React from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import ResultsDetail from './ResultsDetail'
import { useNavigation } from "@react-navigation/native"


const ResultsList = ({title, results}) => {
  const navigation = useNavigation()

  // console.log(results[0])

  if (!results.length ) {
    return
  }


  return (
    <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>

        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={results}
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            return <TouchableOpacity
            onPress={() => {
              navigation.navigate("ResultsShow", { id: item.id})
            }}>
                  <ResultsDetail result={item} />
              </TouchableOpacity>
          }}
        />
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 15,
    marginBottom: 5,
  },

  container: {
    marginBottom: 10,
  }
  
})

export default ResultsList