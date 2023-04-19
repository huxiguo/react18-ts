import { configureStore } from '@reduxjs/toolkit'
import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux'

import counterReducer from './modules/counter'
import recommendReducer from '@/view/discover/c-views/recommend/store'
const store = configureStore({
	reducer: {
		counter: counterReducer,
		recommend: recommendReducer
	}
})

type IRootState = ReturnType<typeof store.getState>
type DispatchType = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector
export const useAppDispatch: () => DispatchType = useDispatch

export default store
