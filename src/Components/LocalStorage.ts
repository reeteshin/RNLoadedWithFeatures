import AsyncStorage from "@react-native-async-storage/async-storage";

export const GetThemeState = (setChangeColor:Function)=>{
    AsyncStorage.getItem("ThemeState").then((res:any)=>{
      setChangeColor(JSON.parse(res))
      console.log("Get Items",res)
    }).catch(()=>{

    })
  }
  export const storeData = async (ChangeColor:boolean) => {
    try {
      const jsonValue = JSON.stringify(ChangeColor);
      const res = await AsyncStorage.setItem('ThemeState', jsonValue);
      console.log("Responce",res)
    } catch (e) {
      console.log("Async Error",e)
      // saving error
    }
  };