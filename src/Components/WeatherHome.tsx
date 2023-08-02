import {
  Button,
  Dimensions,
  FlatList,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useContext, useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../Redux/Store';
import SearchIcon from 'react-native-vector-icons/Ionicons';
import {GetcoordinateOfWether} from '../Redux/ApiMiddleware';
import {BackgroundGray, BackgroundWight, BlackText, WightText} from '../Colors';
import {GetThemeState, storeData} from './LocalStorage';
import {ThemeContext} from '../ThemeContext/ThemeContext';

const {width} = Dimensions.get('window');
const WeatherHome = ({navigation}: any) => {
  const [text, setText] = useState('');
  const InputRef = useRef<TextInput>(null);
  const dispatch = useDispatch<AppDispatch>();
  const Selectedvalue = useSelector((val: RootState) => val.WeatherCooradinateFromApi);
  const {ChangeColor, setChangeColor} =   useContext(ThemeContext);
  //const timeIdRef =  useRef().current
  //console.log('Value', Selectedvalue?.whetherdata);

  /// Context Api For Theme
  console.log('Text', text);
  const FocusInput = () => {
    InputRef.current?.focus();
  };


  useEffect(() => {
    GetThemeState(setChangeColor);
    const time = setTimeout(() => {
      dispatch(GetcoordinateOfWether(text));
    }, 1000);
    return () => clearTimeout(time);
  }, [text]);

  useEffect(() => {
    storeData(ChangeColor);
  }, [ChangeColor]);
  
const handelDropDownItem = (item:any)=>{
  console.log("Selected Item",item)
  // dispatch()

}


  return (
    <View
      style={{
        flex: 1,
        backgroundColor: ChangeColor ? BackgroundGray : BackgroundWight,
      }}>
      <StatusBar backgroundColor={'#1D5B79'} barStyle={'default'} />
      <ScrollView style={{flex: 1}}>
        <View
          style={{
            backgroundColor: ChangeColor ? BackgroundGray : BackgroundWight,
            borderRadius: 15,
            marginHorizontal: 10,
            height: 50,
            justifyContent: 'center',
            marginTop: StatusBar.currentHeight,
            shadowColor: '#1D5B79',
            borderLeftColor: 'green',
            borderLeftWidth: 1,
            borderRightColor: 'green',
            borderRightWidth: 1,
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.22,
            shadowRadius: 2.22,

            elevation: 3,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginHorizontal: 20,
            }}>
            <TextInput
              onChangeText={text => setText(text)}
              ref={InputRef}
              placeholder="Enter Location Name"
              placeholderTextColor={ChangeColor ? WightText : BlackText}
              style={{color: ChangeColor ? WightText : BlackText}}
            />
            <TouchableOpacity onPress={() => FocusInput()}>
              <SearchIcon name="search" color={'#000'} size={25} />
            </TouchableOpacity>
          </View>
          {/* Weather View container  */}
        </View>
            <View style={{backgroundColor:'lightgreen',position:'relative',marginHorizontal:20,padding:10,borderRadius:8,marginTop:2}}>
              <FlatList
                data={Selectedvalue?.weatherCooradinate.data}
                renderItem={({item}) => (
                  <TouchableOpacity onPress={()=>handelDropDownItem(item)}>

                  <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <Text style={{color: 'black'}}>{item.name}</Text>
                    <Text style={{color: 'black'}}>{item.state}</Text>
                    <Text style={{color: 'black'}}>{item.country}</Text>
                    <Text></Text>
                  </View>
                  </TouchableOpacity>
                )}
                keyExtractor={item => item.id}
              />
            </View>
        <View
          style={{
            backgroundColor: 'powderblue',
            height: 250,
            marginHorizontal: 15,
            marginTop: StatusBar.currentHeight,
            borderRadius: 15,
            shadowColor: '#1D5B79',
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.22,
            shadowRadius: 2.22,

            elevation: 3,
          }}></View>

        {/* bottom View  */}

        <View
          style={{
            flex: 1,
            height: 500,
            backgroundColor: '#fff',
            marginTop: StatusBar.currentHeight,
            marginHorizontal: 15,
            borderTopRightRadius: 15,
            borderTopLeftRadius: 15,
            shadowColor: '#1D5B79',
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.22,
            shadowRadius: 2.22,

            elevation: 5,
          }}>
          <Text>Hi</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default WeatherHome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 3,
  },
  card: {
    width: width - 30,
    height: '100%',
    marginHorizontal: 5,
    borderRadius: 5,
  },
  indicatorConatiner: {
    alignSelf: 'center',
    position: 'absolute',
    bottom: 20,
    flexDirection: 'row',
  },
  indicator: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: '#00000044',
    marginHorizontal: 15,
    overflow: 'hidden',
  },
  activeIndicator: {
    height: '100%',
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
  },
});
