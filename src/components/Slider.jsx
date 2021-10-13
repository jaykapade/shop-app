import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import styled from 'styled-components'
import React, { useState } from 'react'
import { sliderItems } from '../data'

const Container = styled.div`
  display: flex;
  position: relative;
  height: 90vh;
  overflow: hidden;
`
const Arrow = styled.div`
  width: 5rem;
  height: 5rem;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props) => props.direction === 'left' && '1rem'};
  right: ${(props) => props.direction === 'right' && '1rem'};
  cursor: pointer;
  z-index: 2;
`
const Wrapper = styled.div`
  display: flex;
  height: 100%;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
  transition: all 1.5s ease;
`
const Slide = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100vw;
  background-color: ${(props) => props.bg};
`
const ImgContainer = styled.div`
  flex: 1;
  height: 100%;
`
const Image = styled.img`
  height: 100%;
  width: 50vw;
  object-fit: cover;
`
const InfoContainer = styled.div`
  flex: 10;
  padding: 5rem;
`
const Title = styled.h1`
  font-size: 7.8rem;
`
const Description = styled.p`
  margin: 4rem 0rem;
  font-size: 2rem;
  font-weight: 500;
  letter-spacing: 0.3rem;
`
const Button = styled.button`
  padding: 1rem;
  font-size: 2rem;
  background-color: transparent;
  cursor: pointer;
`

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0)

  const handleClick = (direction) => {
    if ((direction = 'left')) {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
    }
  }

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick('left')}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Description>{item.desc}</Description>
              <Button>SHOP NOW</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick('right')}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  )
}

export default Slider
