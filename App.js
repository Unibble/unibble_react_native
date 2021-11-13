// App.js
import React, { Component, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FeedScreen from 'components/views/FeedScreen';
import SettingsScreen from 'components/views/SettingsScreen';
import { NativeBaseProvider } from 'native-base';
import SplashScreen from 'react-native-splash-screen';
const Stack = createStackNavigator();

function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: 'transparent',
            },
            headerTitleStyle: {
              textAlign: 'left',
              fontWeight: 'bold',
            },
          }}
        >
          <Stack.Screen
            name="MAIN"
            component={FeedScreen}
            options={{ title: '피드', headerShown: false }}
          />
          <Stack.Screen
            name="DETAIL"
            component={SettingsScreen}
            options={{ title: '설정' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
export default App;
