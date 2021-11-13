/**
 * @format
 */

import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';
import App from './App';
import Feed from './src/components/views/FeedScreen';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
