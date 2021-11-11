// App.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FeedScreen from 'components/views/FeedScreen';
import SettingsScreen from './src/components/views/SettingsScreen';
const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MAIN">
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
  );
}
export default App;
