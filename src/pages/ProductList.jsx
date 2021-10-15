import React from 'react'
import styled from 'styled-components'
import NavBar from '../components/NavBar'
import Announcement from '../components/Announcement'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import { mobile } from '../responsive'

const Container = styled.div``

const Title = styled.h1`
  margin: 1rem 2rem;
  ${mobile({ margin: '1rem' })}
`
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
const Filter = styled.div`
  flex: 1;
  margin: 1rem;
  ${mobile({ flexDirection: 'column' })}
`

const FilterText = styled.span`
  font-size: 2rem;
  font-weight: 2rem;
  margin: 0rem 2rem;
`

const Select = styled.select`
  padding: 1rem 2rem;
  margin-right: 2rem;
  width: 15%;
  ${mobile({ margin: '0.5rem', padding: '1rem', width: '80%' })}
`
const Option = styled.option``

const ProductList = () => {
  return (
    <Container>
      <Announcement />
      <NavBar />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter By:</FilterText>
          <Select>
            <Option disabled selected>
              Color
            </Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Orange</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Black</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort By:</FilterText>
          <Select>
            <Option selected>Latest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  )
}

export default ProductList
