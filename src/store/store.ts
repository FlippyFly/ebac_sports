import { configureStore } from '@reduxjs/toolkit'
import favoritosReducer from './reducer/favoritos'
import carrinhoReducer from './reducer/carrinho'

export const store = configureStore({
  reducer: {
    favoritos: favoritosReducer,
    carrinho: carrinhoReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
