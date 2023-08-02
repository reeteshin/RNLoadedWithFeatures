import { Button, Dimensions, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { DrawerContentScrollView } from '@react-navigation/drawer'
import { ThemeContext } from '../ThemeContext/ThemeContext'

const CustomDrawer = ({navigation}) => {
  const {HandelChnageColor} =useContext(ThemeContext)
  return (
    <DrawerContentScrollView style={{flex:1,backgroundColor:'#1D5B79'}}>

    <View >
      <Text>CustomDrawer </Text>
    </View>
    <Button title='Chnage Theme' onPress={()=>HandelChnageColor()}/>
    </DrawerContentScrollView>
  )
}

export default CustomDrawer

const styles = StyleSheet.create({})