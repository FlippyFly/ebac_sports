import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../types/Produto'

type CarrinhoState = {
  itens: Produto[]
}

const initialState: CarrinhoState = {
  itens: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Produto>) => {
      const prod = action.payload
      const existe = state.itens.some((p) => p.id === prod.id)
      if (!existe) {
        state.itens.push(prod)
      }
    }
  }
})

export const { adicionar } = carrinhoSlice.actions
export default carrinhoSlice.reducer
