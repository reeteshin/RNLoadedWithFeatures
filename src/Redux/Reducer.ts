import { FAILED, REQUESTED, SUCCESS } from "./ActionType"

type initialStateType={
    loading:boolean,
    whetherdata:any,
    error:string
}

const State :initialStateType = {
    loading:false,
    whetherdata:[],
    error:""
}

export const ReducerOneApi = (state=State,action:any)=>{
        switch(action.type){
            case REQUESTED:return{
                ...state,loading: true
            }
            case SUCCESS: return {
                ...state, loading:false,
                whetherdata:action.payload,
                error:""
            }
            case FAILED: return {
                ...state, loading:false,
                whetherdata:[],
                error:action.payload
            }
            default : return state
        }
}