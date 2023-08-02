import React, {useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  StatusBar,
  Image,
  Button,
  useColorScheme,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from './src/Redux/Store';
import StackNavigation from './src/Navigation/StackNavigation';
import MyDrawer from './src/Navigation/DrawerNavigation';
import {NavigationContainer} from '@react-navigation/native';
const App = () => {

  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
// useLayoutEffect(()=>{
//   const subscription = Dimensions.addEventListener(
//     'change',
//     ({window, screen}) => {
//       console.log(window, screen);
//     },
//   );
//   return () => subscription?.remove();
// },[])
