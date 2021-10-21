import React, { useState } from "react";
import styled from "styled-components";
import NavBar from "../components/NavBar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";

import { useLocation } from "react-router";

const Container = styled.div``;

const Title = styled.h1`
  margin: 1rem 2rem;
  ${mobile({ margin: "1rem" })}
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 1rem;
  ${mobile({ flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 2rem;
  font-weight: 2rem;
  margin: 0rem 2rem;
`;

const Select = styled.select`
  padding: 1rem 2rem;
  margin-right: 2rem;

  font-size: 1.6rem;
  ${mobile({ margin: "0.5rem", padding: "1rem", width: "80%" })};
`;
const Option = styled.option``;

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("latest");

  const handleFilters = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value.toLowerCase() });
  };

  return (
    <Container>
      <Announcement />
      <NavBar />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter By:</FilterText>
          <Select name="color" onChange={handleFilters}>
            <Option disabled>Color</Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Orange</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Black</Option>
          </Select>
          <Select name="size" onChange={handleFilters}>
            <Option disabled>Size</Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort By:</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="latest">Latest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filters={filters} sort={sort} />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
