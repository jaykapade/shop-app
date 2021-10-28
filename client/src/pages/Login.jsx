import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import styled from "styled-components";
import { login } from "../redux/apiCalls";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.4),
      rgba(255, 255, 255, 0.4)
    ),
    url("https://images.pexels.com/photos/974911/pexels-photo-974911.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  padding: 2rem 0 0 0;
  width: 30%;
  background-color: white;
  border-radius: 2rem;
  ${mobile({ width: "80%" })}
`;
const Title = styled.h1`
  font-size: 3rem;
  font-weight: 400;
  text-align: center;
  margin-bottom: 1rem;
  color: teal;
`;
const Form = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 2rem;
  flex-direction: column;
  align-items: center;
`;
const Input = styled.input`
  flex: 1;
  width: 80%;
  margin: 1rem;
  padding: 1rem;
`;

const Button = styled.button`
  width: 100%;
  bottom: 0;
  border-radius: 0 0 2rem 2rem;
  border: none;
  padding: 1.5rem 2rem;
  cursor: pointer;
  color: white;
  background-color: teal;
  margin-top: 2rem;
  &:disabled {
    cursor: not-allowed;
  }
`;
const Link = styled.a`
  display: block;
  text-align: center;
  margin-bottom: 0.5rem;
  font-size: 1.4rem;
  font-weight: 400;
  text-decoration: underline;
  cursor: pointer;
`;

const Error = styled.div`
  text-align: center;
  padding-top: 2rem;
  color: red;
`;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input
            placeholder="Email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form>
        <Link>FORGOT PASSWORD?</Link>
        <Link>CREATE NEW ACCOUNT</Link>
        {error && <Error>SOMETHING WENT WRONG!!!</Error>}
        <Button onClick={handleClick} disabled={isFetching}>
          {isFetching ? "LOGGING IN..." : "LOGIN"}
        </Button>
      </Wrapper>
    </Container>
  );
};

export default Login;
