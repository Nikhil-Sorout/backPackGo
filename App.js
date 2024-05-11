import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUpScreen from './src/screens/SignUpScreen';
import LoginScreen from './src/screens/LoginScreen';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"LoginScreen"} screenOptions={{presentation:'modal', animation: 'slide_from_right'}}>
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{headerShown: false}} />
        <Stack.Screen name='LoginScreen' component={LoginScreen} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

