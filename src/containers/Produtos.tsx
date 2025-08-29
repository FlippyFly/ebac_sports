import { Produto as ProdutoType } from '../types/Produto'
import ProdutoComponent from '../components/Produto'
import { favoritar } from '../store/reducer/favoritos'
import { adicionar } from '../store/reducer/carrinho'
import { useGetProdutosQuery } from '../services/api'
import * as S from './styles'
import { useAppDispatch, useAppSelector } from '../store/hooks'

const ProdutosComponent = () => {
  const dispatch = useAppDispatch()
  const favoritos = useAppSelector((state) => state.favoritos.itens)

  const produtoEstaNosFavoritos = (produto: ProdutoType) =>
    favoritos.some((item) => item.id === produto.id)

  const { data: produtos, isLoading, error } = useGetProdutosQuery()

  if (isLoading) return <h2>Loading...</h2>
  if (error) return <h2>Erro ao carregar produtos</h2>

  return (
    <S.Produtos>
      {produtos?.map((item: ProdutoType) => (
        <ProdutoComponent
          key={item.id}
          produto={item}
          estaNosFavoritos={produtoEstaNosFavoritos(item)}
          favoritar={() => dispatch(favoritar(item))}
          aoComprar={() => dispatch(adicionar(item))}
        />
      ))}
    </S.Produtos>
  )
}

export default ProdutosComponent
