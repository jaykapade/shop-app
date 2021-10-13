import React from 'react'
import { popularProducts } from '../data'
import Product from './Product'

const Container = styled.div``

const Products = () => {
  return (
    <Container>
      {popularProducts.map((product) => {
        ;<Product product={product} key={product.id} />
      })}
    </Container>
  )
}

export default Products
