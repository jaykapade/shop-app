import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'

const Container = styled.div`
  height: 3vh;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  font-size: 500;
  ${mobile({ display: 'none' })}
`

const Announcement = () => {
  return (
    <Container>
      Superb Deals! Amazing Offers! Free Shipping on Orders over $100
    </Container>
  )
}

export default Announcement
