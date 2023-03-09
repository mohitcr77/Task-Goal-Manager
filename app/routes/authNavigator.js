import React from 'react'
import SignInScreen from '../screens/SignInScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useContext } from 'react';
import { Emailcontext } from '../../App';

  const Stack = createNativeStackNavigator();
  const AuthNavigator = () => {
  const Email = useContext(Emailcontext);
  return (

    <Stack.Navigator>
      <Stack.Screen name="SignIn" component={SignInScreen} initialParams={Email} />
    </Stack.Navigator>
  )
}

export default AuthNavigator