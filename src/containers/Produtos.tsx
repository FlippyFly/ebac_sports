import { useDispatch, useSelector } from 'react-redux'
import ProdutoComponent from '../components/Produto'
import { Produto as ProdutoType } from '../App'
import { useGetProdutosQuery } from '../services/api'
import { favoritar } from '../store/reducer/favoritos'
import { adicionar } from '../store/reducer/carrinho'
import { RootState } from '../store/store'
import * as S from './styles'

const ProdutosComponent = () => {
  const { data: produtos, isLoading } = useGetProdutosQuery()
  const dispatch = useDispatch()

  const favoritos = useSelector((state: RootState) => state.favoritos.itens)

  const produtoEstaNosFavoritos = (produto: ProdutoType) =>
    favoritos.some((item) => item.id === produto.id)

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  return (
    <S.Produtos>
      {produtos?.map((item) => (
        <ProdutoComponent
          key={item.id}
          produto={item}
          estaNosFavoritos={produtoEstaNosFavoritos(item)}
          aoFavoritar={() => dispatch(favoritar(item))}
          aoComprar={() => dispatch(adicionar(item))}
        />
      ))}
    </S.Produtos>
  )
}

export default ProdutosComponent
