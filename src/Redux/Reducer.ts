import { FAILED, REQUESTED, SUCCESS } from "./ActionType"

type initialStateTypeForCoodinate={
    loading:boolean,
    weatherCooradinate  :any,
    error:string
}
type initialStateTypeForWeatherData={
    loading:boolean,
    weatherdata :any,
    error:string
}

type finalState = initialStateTypeForCoodinate | initialStateTypeForWeatherData;


const State :finalState = {
    loading:false,
    weatherCooradinate:[],
    error:""
}

const WeatherInformationState: finalState = {
    loading:false,
    weatherdata:[],
    error:""
}
export const WeatherInformationFromApi = (state=WeatherInformationState,action:any)=>{
            switch(action.type){
                case REQUESTED:return{
                    ...state,loading:true
                }
                case SUCCESS :return{
                    ...state,loading:false,
                    weatherdata:action.payload,
                    error:""
                }
                case FAILED :return{
                    ...state,loading:false,
                    weatherdata:[],
                    error:action.payload
                }
                default: return state
            }
}
export const WeatherCooradinateFromApi = (state=State,action:any)=>{
        switch(action.type){
            case REQUESTED:return{
                ...state,loading: true
            }
            case SUCCESS: return {
                ...state, loading:false,
                whetherCooradinate:action.payload,
                error:""
            }
            case FAILED: return {
                ...state, loading:false,
                whetherCooradinate:[],
                error:action.payload
            }
            default : return state
        }
}