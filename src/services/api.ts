import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Produto } from '../types/Produto'

export const api = createApi({
  reducerPath: 'api', // mesmo usado no store
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
  endpoints: (builder) => ({
    getProdutos: builder.query<Produto[], void>({
      query: () => 'produtos'
    })
  })
})

export const { useGetProdutosQuery } = api
