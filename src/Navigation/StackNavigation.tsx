import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import WeatherHome from '../Components/WeatherHome'
import { createDrawerNavigator } from '@react-navigation/drawer'
import CustomDrawer from './CustomDrawer'


const WeatherHomeDrawer = ()=>{
  const Drawer = createDrawerNavigator()
  return (
    <Drawer.Navigator screenOptions={{
      drawerPosition:"right",
                drawerActiveBackgroundColor:"red",
      drawerStyle: { width: Dimensions.get('window').width / 1.1 },
  }} drawerContent={props => <CustomDrawer {...props} />}>
        <Drawer.Screen name='Weather Drawer' component={WeatherHome} options={{headerShown:false}}/>
      </Drawer.Navigator>
  )
}

const StackNavigation = () => {
    const stack = createNativeStackNavigator()
  return (
        <stack.Navigator  initialRouteName='WeatherHome'>
            <stack.Screen name='WeatherHome' component={WeatherHomeDrawer} options={{headerShown:false}}/>
        </stack.Navigator>
  )
}
export default StackNavigation

const styles = StyleSheet.create({})