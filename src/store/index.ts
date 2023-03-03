import { useSelector,TypedUseSelectorHook } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './modules/counter'

const store = configureStore({
  reducer: {
    counter: counterReducer
  }
})

type GetState = typeof store.getState
export type rootState = ReturnType<GetState>

export const useAppSelector: TypedUseSelectorHook<rootState> = useSelector

export default store
