import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'

const Container = styled.div`
  flex: 1 1 40rem;
  margin: 0.3rem;
  height: 70vh;
  position: relative;
  ${mobile({ margin: '0rem' })}
`
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
const Title = styled.h1`
  color: white;
  margin-bottom: 2rem;
`
const Button = styled.button`
  border: none;
  padding: 1rem;
  font-size: 2rem;
  color: grey;
  cursor: pointer;
`

const CategoryItem = ({ category }) => {
  return (
    <Container>
      <Image src={category.img} />
      <Info>
        <Title>{category.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  )
}

export default CategoryItem
