import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunk from 'redux-thunk'
import { ReducerOneApi } from './Reducer'

const RootReducer = combineReducers({ReducerOneApi})

export const store = createStore(RootReducer,applyMiddleware(thunk))



export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch