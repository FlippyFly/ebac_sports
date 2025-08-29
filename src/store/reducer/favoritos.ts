import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../types/Produto'

type FavoritosState = {
  itens: Produto[]
}

const initialState: FavoritosState = {
  itens: []
}

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    favoritar: (state, action: PayloadAction<Produto>) => {
      const prod = action.payload
      const existe = state.itens.some((p) => p.id === prod.id)
      if (existe) {
        state.itens = state.itens.filter((p) => p.id !== prod.id)
      } else {
        state.itens.push(prod)
      }
    }
  }
})

export const { favoritar } = favoritosSlice.actions
export default favoritosSlice.reducer
