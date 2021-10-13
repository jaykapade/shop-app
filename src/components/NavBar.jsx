import { Badge } from '@material-ui/core'
import { grey } from '@material-ui/core/colors'
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  min-height: 7vh;
  padding: 0rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`
const Language = styled.span`
  font-size: 1.4rem;
  cursor: pointer;
`
const SearchContainer = styled.div`
  border: 0.1rem solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 2.5rem;
  padding: 0.5rem;
`
const Input = styled.input`
  border: none;
`

const Center = styled.div`
  flex: 1;
`
const Logo = styled.h1`
  font-weight: bold;
  text-align: center;
`
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`
const MenuItem = styled.div`
  font-size: 1.4rem;
  cursor: pointer;
`

// const Left = styled.div``

const NavBar = () => {
  return (
    <Container>
      <Left>
        <Language>EN</Language>
        <SearchContainer>
          <Input /> <Search style={{ color: grey }} />
        </SearchContainer>
      </Left>
      <Center>
        <Logo>GUCCI</Logo>
      </Center>
      <Right>
        <MenuItem>REGISTER</MenuItem>
        <MenuItem>SIGN IN</MenuItem>
        <MenuItem>
          <Badge badgeContent={0} color="primary">
            <ShoppingCartOutlined />
          </Badge>
        </MenuItem>
      </Right>
    </Container>
  )
}

export default NavBar
