import React from 'react'
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';



const DetailsScreen = ({navigation}) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <View style={styles.detailBtn}>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      </View>
      <View style={styles.detailBtn}>
      <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
    </View>
  )
}

export default DetailsScreen

const styles=StyleSheet.create({
    detailBtn: {
        margin: 10
      }
});