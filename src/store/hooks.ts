import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootReducer, store } from './store'

export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()

export const useAppSelector: TypedUseSelectorHook<RootReducer> = useSelector
