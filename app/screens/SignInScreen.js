import React from 'react'
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useState} from 'react';



const SignInScreen = ({ navigation, route,props }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const { setUserToken } = route.params;
   // console.log(email)

  
    return (
      <View>
        <Text style={styles.textStyle}>Name</Text>
        <TextInput style={styles.input} onChangeText={setName} />
        <Text style={styles.textStyle}>Email</Text>
        <TextInput style={styles.input} onChangeText={setEmail} />
        <Text style={styles.textStyle}>Password</Text>
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          placeholder="Password"
          secureTextEntry={true}
        />

        <Button title="Sign Up" onPress={() => setUserToken({email,password,name})} />
         
      </View>
    );
}

export default SignInScreen

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  textStyle: {
    fontSize: 20,
    margin: 10
  }
});