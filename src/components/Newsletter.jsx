import { Send } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'

const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
const Title = styled.h1`
  font-size: 7rem;
  margin-bottom: 2rem;
  ${mobile({ fontSize: '4rem' })}
`
const Description = styled.div`
  font-size: 2.4rem;
  font-weight: 500;
  margin-bottom: 2rem;
  ${mobile({ fontSize: '1.6rem' })}
`
const InputContainer = styled.div`
  width: 50%;
  height: 4rem;
  background-color: white;
  display: flex;
  align-items: center;
`
const Input = styled.input`
  border: none;
  flex: 8;
  padding: 1rem 0rem 1rem 2.8rem;
  ${mobile({ padding: '1rem 0rem 1rem 0.5rem' })}
`
const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
  height: 100%;
  width: 100%;
  ${mobile({ padding: '1rem' })}
`

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>
        Subscribe for Exciting Offers on latest Products
      </Description>
      <InputContainer>
        <Input placeholder="Your Email" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  )
}

export default Newsletter
