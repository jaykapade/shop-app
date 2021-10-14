import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  height: 30vh;
`
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 2rem;
`
const Logo = styled.h1`
  letter-spacing: 0.3rem;
`
const Description = styled.p`
  margin: 3rem 0rem;
  font-weight: 500;
`
const SocialContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2rem;
`
const SocialIcon = styled.div`
  width: 4rem;
  height: 4rem;
  color: white;
  background-color: ${(props) => props.color};
  border-radius: 50%;
  margin: 0 2rem 0 0;

  display: flex;
  align-items: center;
  justify-content: center;
`

const Right = styled.div`
  flex: 1;
  padding: 2rem;
`
const ContactItem = styled.div`
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
`

const Payment = styled.img`
  width: 50%;
`

const Center = styled.div`
  flex: 1;
  padding: 2rem;
`
const Title = styled.h1`
  margin-bottom: 3rem;
  font-weight: 400;
`

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 2rem;
`

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>GUCCI</Logo>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ex
          porro saepe praesentium consequuntur dolorum quae labore quo culpa
          quisquam!
        </Description>
        <SocialContainer>
          <SocialIcon color="#4867AA">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="#DE0F69">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="#1DA1F2">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="#E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>

      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Men's Fashion</ListItem>
          <ListItem>Women's Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room
            style={{ fontSize: 25, marginRight: '1rem', color: '#35da35' }}
          />
          11025 San Miguel Way Montclair, California(CA), 91763
        </ContactItem>
        <ContactItem>
          <Phone
            style={{ fontSize: 25, marginRight: '1rem', color: '#166ae9' }}
          />
          (717) 866-6735
        </ContactItem>
        <ContactItem>
          <MailOutline
            style={{ fontSize: 25, marginRight: '1rem', color: '#f53434' }}
          />
          contact@gucci.shop
        </ContactItem>
        <Payment src="https://www.transparentpng.com/thumb/payment-method/KWM0Hm-payment-method-bitcoin-photo.png" />
      </Right>
    </Container>
  )
}

export default Footer
