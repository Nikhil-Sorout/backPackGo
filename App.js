import { StatusBar } from 'expo-status-bar';
import { Easing, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUpScreen from './src/screens/SignUpScreen';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import SearchScreen from './src/screens/SearchScreen';

export default function App() {
  const Stack = createNativeStackNavigator();
  const config = {
    animation: 'timing',
    config: {
      duration: 10000,
      easing: Easing.back(),
      useNativeDriver: true
    }
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"HomeScreen"} screenOptions={{ presentation: 'modal', animation: 'slide_from_right' }}>
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{ headerShown: false }} />
        <Stack.Screen name='LoginScreen' component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name='HomeScreen' component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name='SearchScreen' component={SearchScreen} options={{
          headerShown: false, presentation: 'modal', animation: 'slide_from_bottom', gestureDirection: 'vertical', transitionSpec: {
            open: config,
            close: config
          },
          gestureEnabled: true
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


