import axios from "axios"
import { Dispatch } from "redux"
import { Failed, Requested, Success } from "./ActionCreator"

export const WetherApiOne = ()=>{
        return (dispatch:Dispatch)=>{
            dispatch(Requested())
            axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>{
                dispatch(Success(res))
                //console.log("Call",res)
            }).catch((massage)=>{
                dispatch(Failed(massage))
               // console.log("massage",massage)
            })
        }
}