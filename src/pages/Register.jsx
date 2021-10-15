import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.4),
      rgba(255, 255, 255, 0.4)
    ),
    url('https://images.pexels.com/photos/833052/pexels-photo-833052.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')
      center;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Wrapper = styled.div`
  padding: 2rem 0 0 0;
  width: 40%;
  background-color: white;
  border-radius: 2rem;
`
const Title = styled.h1`
  font-size: 3rem;
  font-weight: 400;
  text-align: center;
  margin-bottom: 1rem;
  color: teal;
`
const Form = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 2rem;
`
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 1rem;
  padding: 1rem;
`
const Agreement = styled.span`
  font-size: 1.2rem;
  margin: 1rem;
  font-weight: 400;
`
const Button = styled.button`
  width: 100%;
  border-radius: 0 0 2rem 2rem;
  border: none;
  padding: 1.5rem 2rem;
  cursor: pointer;
  color: white;
  background-color: teal;
`

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="First Name" />
          <Input placeholder="Last Name" />
          <Input placeholder="Email" />
          <Input placeholder="Username" />
          <Input placeholder="Password" />
          <Input placeholder="Confirm Password" />
          <Agreement>
            By Clicking on Submit You Agree to the <b>Terms of Service</b> and{' '}
            <b>Privacy Policy</b>
          </Agreement>
        </Form>
        <Button>CREATE</Button>
      </Wrapper>
    </Container>
  )
}

export default Register
