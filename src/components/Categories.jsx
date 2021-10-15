import React from 'react'
import styled from 'styled-components'
import { categories } from '../data'
import CategoryItem from './CategoryItem'
import { mobile } from '../responsive'

const Container = styled.div`
  display: flex;
  padding: 2rem;
  justify-content: space-between;
  flex-wrap: wrap;
  ${mobile({ padding: '0rem' })}
`

const Categories = () => {
  return (
    <Container>
      {categories.map((category) => (
        <CategoryItem category={category} key={category.id} />
      ))}
    </Container>
  )
}

export default Categories
