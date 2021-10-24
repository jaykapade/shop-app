import { Add, Remove } from "@material-ui/icons";
import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Newsletter from "../components/Newsletter";
import { mobile } from "../responsive";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 2rem;
  ${mobile({ padding: "0.5rem" })}
`;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
  ${mobile({ marginBottom: "1rem" })}
`;
const Top = styled.div`
  display: flex;

  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  ${mobile({ padding: "0rem" })}
`;
const TopButton = styled.button`
  padding: 1rem;
  height: 100%;
  cursor: pointer;
  /* border: ${(props) => props.type === "filled" && "none"}; */
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};

  ${mobile({ padding: "0.5rem" })}
`;
const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0 1rem;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;
const Info = styled.div`
  flex: 3;
`;
const Product = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem 0rem;
`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
`;
const Image = styled.img`
  width: 20rem;
  height: 20rem;
  object-fit: cover;
  ${mobile({ width: "10rem", height: "10rem" })}
`;
const Details = styled.div`
  padding: 3rem 2rem;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  ${mobile({ padding: "0rem 2rem", fontSize: "1.4rem" })}
`;
const ProductName = styled.span``;
const ProductId = styled.span``;
const Color = styled.span`
  display: flex;
  align-items: center;
`;
const ProductColor = styled.div`
  width: 2rem;
  height: 2rem;
  background-color: ${(props) => props.color};
  border-radius: 50%;
  margin: 0 1rem;
  border: 1px solid black;
  ${mobile({ width: "1rem", height: "1rem", margin: "0 0.5rem" })}
`;
const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const ProductAmount = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
`;
const Amount = styled.div`
  font-size: 2.4rem;
  width: 3.6rem;
  height: 3.6rem;
  border: 0.1rem solid teal;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0.5rem;
  ${mobile({
    width: "2rem",
    height: "2rem",
    borderRadius: "0.4rem",
    fontSize: "1.6rem",
  })}
`;

const ProductPrice = styled.div`
  font-size: 3rem;
  font-weight: 200;
  ${mobile({ fontSize: "2.4rem" })}
`;
const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 0.1rem;
`;
const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const SummaryTitle = styled.h1`
  font-weight: 400;
  ${mobile({ fontSize: "3rem" })}
`;
const SummaryItem = styled.div`
  /* margin: 3rem 0rem; */
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && 600};
  font-size: ${(props) => props.type === "total" && "2.4rem"};
  ${mobile({ margin: "1.5rem" })}
`;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
const Button = styled.button`
  padding: 1.6rem;
  background-color: black;
  color: white;
  font-weight: 500;
  width: 100%;

  /* position: absolute; */
  /* bottom: 0%;
  
  left: 10%;
  bottom: 5%; */

  ${mobile({ position: "static", width: "100%" })}
`;

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  console.log(cart);
  return (
    <Container>
      <NavBar />
      <Announcement />
      <Wrapper>
        <Title>Your Cart</Title>
        <Top>
          <TopButton type>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag ({cart.products.length})</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            {cart.products &&
              cart.products.map((product) => (
                <>
                  <Product>
                    <ProductDetail>
                      <Image src={product.img} />
                      <Details>
                        <ProductName>
                          <b>Name: </b> {product.title}
                        </ProductName>
                        <ProductId>
                          <b>ID: </b> {product._id}
                        </ProductId>
                        <Color>
                          <h4>Color:</h4>
                          <ProductColor color={product.color} />
                        </Color>
                        <ProductSize>
                          <b>Size: </b> {product.size.toUpperCase()}
                        </ProductSize>
                      </Details>
                    </ProductDetail>
                    <PriceDetail>
                      <ProductAmount>
                        <Add />
                        <Amount>{product.quantity}</Amount>
                        <Remove />
                      </ProductAmount>
                      <ProductPrice>
                        ${product.price * product.quantity}
                      </ProductPrice>
                    </PriceDetail>
                  </Product>
                  <Hr />
                </>
              ))}
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemText>${cart.total}</SummaryItemText>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Charges</SummaryItemText>
              <SummaryItemText>$5.60</SummaryItemText>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemText>-$5.60</SummaryItemText>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>${cart.total}</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Cart;
