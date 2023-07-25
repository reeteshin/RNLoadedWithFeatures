import { useEffect } from 'react'
import { StyleSheet, Text, View ,Dimensions,StatusBar} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { WetherApiOne } from './src/Redux/ApiMiddleware'
import { AppDispatch, RootState} from './src/Redux/Store'
const App = () => {
  const Selectedvalue =  useSelector((val:RootState)=>val.ReducerOneApi)
  console.log("Selectered value",Selectedvalue.whetherdata)
  const dispatch = useDispatch<AppDispatch>()
  useEffect(()=>{
    dispatch(WetherApiOne())
  },[])
  return (
    <View>
      <Text>App</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})
      // useLayoutEffect(()=>{
      //   const subscription = Dimensions.addEventListener(
      //     'change',
      //     ({window, screen}) => {
      //       console.log(window, screen);
      //     },
      //   );
      //   return () => subscription?.remove();
      // },[])