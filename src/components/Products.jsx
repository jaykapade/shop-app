import React from 'react'
import { popularProducts } from '../data'
import Product from './Product'
import styled from 'styled-components'
import { mobile } from '../responsive'

const Container = styled.div`
  padding: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  ${mobile({ padding: '0rem' })}
`

const Products = () => {
  return (
    <Container>
      {popularProducts.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </Container>
  )
}

export default Products
