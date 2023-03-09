import React from 'react'
import { useContext } from 'react';
import { StyleSheet, Text, View, Button, FlatList, Image } from 'react-native';
import { Emailcontext } from '../../App';



const DetailsScreen = ({ navigation }) => {
  const Email = useContext(Emailcontext);
  //console.log(Email.userToken.email)


  return (
    <View style={styles.layoutStyle}>
      <Image style={styles.image} source={require('../assets/profile.png')} />
      <Text style={{ fontSize: 40, margin: 20 }} >{Email.userToken.name}</Text>
      <Text style={{ fontSize: 20, margin: 20 }} >{Email.userToken.email}</Text>
      <View style={styles.buttonStyle}>
        <View style={styles.detailBtn}>
          <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
        </View>
        <View style={styles.detailBtn}>
          <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
        <View style={styles.detailBtn}>
          <Button title="Log out" onPress={() => Email.setUserToken(null)} />
        </View>
      </View>
    </View>
  )
}

export default DetailsScreen

const styles = StyleSheet.create({
  layoutStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column'
  },
  detailBtn: {
    margin: 10
  },
  buttonStyle:{
    alignItems:'center'
  },
  image: {
    height: 200,
    width: 200,
    margin: 25
},

});