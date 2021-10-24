import { Badge } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { mobile } from "../responsive";

import { Link } from "react-router-dom";

const Container = styled.div`
  min-height: 7vh;
  padding: 0rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ padding: "0 0.5rem" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Language = styled.span`
  font-size: 1.4rem;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;
const SearchContainer = styled.div`
  border: 0.1rem solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 2.5rem;
  padding: 0.5rem;
  ${mobile({ marginLeft: "0rem" })}
`;
const Input = styled.input`
  border: none;
  ${mobile({ width: "80%" })}
`;

const Center = styled.div`
  flex: 1;
`;
const Logo = styled.h1`
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  ${mobile({ fontSize: "2rem" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  ${mobile({ flex: "2" })}
`;
const MenuItem = styled.div`
  font-size: 1.4rem;
  cursor: pointer;
`;

// const Left = styled.div``

const NavBar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  return (
    <Container>
      <Left>
        <Language>EN</Language>
        <SearchContainer>
          <Input placeholder="Search" /> <Search style={{ color: grey }} />
        </SearchContainer>
      </Left>
      <Center>
        <Logo>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            GUCCI
          </Link>
        </Logo>
      </Center>
      <Right>
        <Link to="/register" style={{ textDecoration: "none", color: "black" }}>
          <MenuItem>REGISTER</MenuItem>
        </Link>
        <Link to="/login" style={{ textDecoration: "none", color: "black" }}>
          <MenuItem>SIGN IN</MenuItem>
        </Link>
        <Link
          to="/cart"
          style={{
            textDecoration: "none",
            color: "black",
          }}
        >
          <MenuItem>
            <Badge
              badgeContent={quantity}
              color="primary"
              style={{
                transform: "scale(1.4)",
              }}
            >
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Link>
      </Right>
    </Container>
  );
};

export default NavBar;
