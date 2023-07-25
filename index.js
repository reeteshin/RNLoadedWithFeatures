/**
 * @format
 */

import {AppRegistry} from 'react-native';
import { Provider } from 'react-redux';
import App from './App';
import {name as appName} from './app.json';
import { store } from './src/Redux/Store';

const AppStore = App

function StoreProvider(){
    return <Provider store={store}>
        <AppStore/>
    </Provider>
}
AppRegistry.registerComponent(appName, () => StoreProvider);
