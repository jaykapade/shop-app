import React from 'react'
import styled from 'styled-components'
import NavBar from '../components/NavBar'
import Announcement from '../components/Announcement'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import { Add, Remove } from '@material-ui/icons'

const Container = styled.div``

const Wrapper = styled.div`
  display: flex;
`
const ImgContainer = styled.div`
  flex: 1;
`
const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`
const InfoContainer = styled.div`
  flex: 1;
  padding: 0 5rem;
`
const Title = styled.h1`
  font-weight: 300;
  font-size: 4rem;
`
const Desc = styled.p`
  margin: 2rem 0;
  font-weight: 300;
  font-size: 2rem;
`
const Price = styled.span`
  font-weight: 200;
  font-size: 4rem;
`
const FilterContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  margin: 3rem 0;
`
const Filter = styled.div`
  display: flex;
  align-items: center;
`
const FilterTitle = styled.span`
  font-size: 2rem;
  font-weight: 300;
`
const FilterColor = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0 0.5rem;
  cursor: pointer;
`
const FilterSize = styled.select`
  margin-left: 1rem;
  padding: 0.5rem;
`
const Option = styled.option``

const AddContainer = styled.div`
  display: flex;
  width: 50%;
  align-items: center;
  justify-content: space-between;
`
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`
const Amount = styled.span`
  width: 3rem;
  height: 3rem;
  border-radius: 1rem;
  border: 0.1rem teal solid;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 1rem;
`
const Button = styled.button`
  padding: 1.5rem;
  border: 0.1rem solid teal;
  background: white;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background: teal;
    color: white;
  }
`

const Product = () => {
  return (
    <Container>
      <Announcement />
      <NavBar />
      <Wrapper>
        <ImgContainer>
          <Image src="https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-824,/pub/media/catalog/product/d/s/dsjs04lm3007-be_1_af65209d.jpg?rnd=20200526195200" />
        </ImgContainer>
        <InfoContainer>
          <Title>Denim Jumpsuit</Title>
          <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit maxime ratione nisi doloremque praesentium et natus,
            facere, fugit aliquid cupiditate cumque, quo magnam laudantium
            soluta. Eius sit est sunt a!
          </Desc>
          <Price>$20</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color </FilterTitle>
              <FilterColor color="yellow" />
              <FilterColor color="orange" />
              <FilterColor color="limegreen" />
              <FilterColor color="blue" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <Option>XS</Option>
                <Option>S</Option>
                <Option>M</Option>
                <Option>L</Option>
                <Option>XL</Option>
                <Option>XXL</Option>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  )
}

export default Product
