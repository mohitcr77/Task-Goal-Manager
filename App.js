import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Appnavigator from './app/routes/appnavigator';
import LoadingScreen from './app/screens/LoadingScreen';
import { useState, useEffect,createContext } from 'react';
import AuthNavigator from './app/routes/authNavigator';
export const Emailcontext = createContext();
//useContext
const Stack = createNativeStackNavigator();

export default function App() {
  
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);
 // console.log(userToken);
  const getUserToken = async () => {
    const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
    try {
      await sleep(1000);
      const token = null;
      setUserToken(token);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getUserToken();
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <NavigationContainer>
      <Emailcontext.Provider value={{userToken,setUserToken}}>
      {userToken == null ? (

        // No token found, user isn't signed in
        <AuthNavigator/>

      ) : (
        // User is signed in
        <>
        <Appnavigator />

        
        </>
      )}
      </Emailcontext.Provider>
    </NavigationContainer>
  );
}

