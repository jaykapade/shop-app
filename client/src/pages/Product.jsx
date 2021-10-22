import React, { useState, useEffect } from "react";
import styled from "styled-components";
import NavBar from "../components/NavBar";
import Announcement from "../components/Announcement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { Add, Remove } from "@material-ui/icons";
import { mobile } from "../responsive";
import { useLocation } from "react-router";

import { publicRequest } from "../requestMethods";

const Container = styled.div``;

const Wrapper = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;
const ImgContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: contain;
  ${mobile({ height: "60vh" })}
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0 5rem;
  ${mobile({ padding: "0 1.4rem" })}
`;
const Title = styled.h1`
  font-weight: 300;
  font-size: 4rem;
  ${mobile({ marginTop: "1rem" })}
`;
const Desc = styled.p`
  margin: 2rem 0;
  font-weight: 300;
  font-size: 2rem;
  ${mobile({ margin: "1rem 0rem", fontSize: "1.6rem" })}
`;
const Price = styled.span`
  font-weight: 200;
  font-size: 4rem;
`;
const FilterContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  margin: 2rem 0;
  ${mobile({ width: "100%" })}
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
  ${mobile({ margin: "1rem 0rem" })}
`;
const FilterTitle = styled.span`
  font-size: 2rem;
  font-weight: 300;
  margin-right: 1rem;
`;
const FilterColor = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin-right: 0.5rem;
  cursor: pointer;
`;
const FilterSize = styled.select`
  margin-left: 1rem;
  padding: 0.5rem;
`;
const Option = styled.option``;

const AddContainer = styled.div`
  display: flex;
  width: 50%;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%", marginBottom: "1rem" })}
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;
const Amount = styled.span`
  width: 3rem;
  height: 3rem;
  border-radius: 1rem;
  border: 0.1rem teal solid;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 1rem;
`;
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
`;

const Product = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  const [productData, setProductData] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState(1);
  const [size, setSize] = useState(1);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get(`/products/find/${id}`);
        setProductData(res.data.product);
      } catch (err) {}
    };
    getProduct();
  }, [id]);

  const handleQuantity = (type) => {
    if (type === "dec") {
      setQuantity(quantity === 1 ? quantity : quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleSubmit = () => {
    //* Update Cart
  };

  return (
    <Container>
      <Announcement />
      <NavBar />
      <Wrapper>
        <ImgContainer>
          <Image src={productData.img} />
        </ImgContainer>
        <InfoContainer>
          <Title>{productData.title}</Title>
          <Desc>{productData.desc}</Desc>
          <Price>${productData.price}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color </FilterTitle>
              {
                //* using ? to resolve error the data being undefined for map
              }
              {productData.color?.map((c) => (
                <FilterColor color={c} key={c} onClick={() => setColor(c)} />
              ))}
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize onChange={(e) => setSize(e.target.value)}>
                {productData.size?.map((s) => (
                  <Option key={s}>{s.toUpperCase()}</Option>
                ))}
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove onClick={() => handleQuantity("dec")} />
              <Amount>{quantity}</Amount>
              <Add onClick={() => handleQuantity("inc")} />
            </AmountContainer>
            <Button onClick={handleSubmit}>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
