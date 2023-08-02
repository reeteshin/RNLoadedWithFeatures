/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';
import App from './App';
import {name as appName} from './app.json';
import {store} from './src/Redux/Store';
import {ContextThemeFuntion} from './src/ThemeContext/ThemeContext';

const AppStore = App;

function StoreProvider() {
  return (
    <Provider store={store}>
      <ContextThemeFuntion>
        <AppStore />
      </ContextThemeFuntion>
    </Provider>
  );
}
AppRegistry.registerComponent(appName, () => StoreProvider);
