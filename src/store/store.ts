import { configureStore } from '@reduxjs/toolkit'
import carrinhoReducer from './reducer/carrinho'
import favoritosReducer from './reducer/favoritos'
import { api } from '../services/api'

export const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer,
    favoritos: favoritosReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
