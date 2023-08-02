import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import TabsOne from '../Components/TabsOne';
import TabTwo from '../Components/TabTwo';
import MyDrawer from './DrawerNavigation';
import Delete from '../Components/Delete';

const BottomTabs = () => {
    const Tab = createBottomTabNavigator();
  return (
    // tabBar={(props)=><Delete {...props}/>}
    <Tab.Navigator >
        <Tab.Screen name='TabOne' component={TabsOne}/>
        <Tab.Screen name='TabTwo' component={TabTwo}/>
    </Tab.Navigator>
  )
}

export default BottomTabs

const styles = StyleSheet.create({})