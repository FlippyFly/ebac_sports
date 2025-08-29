import styled from 'styled-components'

export const Produto = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  text-align: center;
`

export const Capa = styled.div`
  img {
    max-width: 100%;
    border-radius: 8px;
  }
`

export const Titulo = styled.h3`
  margin: 8px 0;
  font-size: 18px;
`

export const Prices = styled.div`
  margin-bottom: 12px;
  font-size: 16px;
`

const BaseButton = styled.button`
  display: block;
  width: 100%;
  padding: 8px;
  margin-top: 8px;
  color: #fff;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`

export const BtnComprar = styled(BaseButton)`
  background-color: #2ecc71;
  &:hover {
    background-color: #27ae60;
  }
`

export const BtnFavorito = styled(BaseButton)`
  background-color: #e74c3c;
  &:hover {
    background-color: #c0392b;
  }
`
