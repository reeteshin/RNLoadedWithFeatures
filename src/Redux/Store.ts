import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunk from 'redux-thunk'
import { WeatherCooradinateFromApi,WeatherInformationFromApi } from './Reducer'

const RootReducer = combineReducers({WeatherCooradinateFromApi,WeatherInformationFromApi})

export const store = createStore(RootReducer,applyMiddleware(thunk))



export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch