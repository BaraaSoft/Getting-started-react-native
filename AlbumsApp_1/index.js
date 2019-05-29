/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 * >> create new react native project:
 * $ react-native init AppName
 * >> to run react native app:
 * $ react-native run-ios
 * 
 */

import { AppRegistry } from 'react-native';
import App from './src/components/App';
import { name as appName } from './app.json';
import MyApp from './src/components/MyApp';

AppRegistry.registerComponent(appName, () => MyApp);
