import React, { useState, useEffect } from "react";
// import { popularProducts } from "../data";
import Product from "./Product";
import styled from "styled-components";
import { mobile } from "../responsive";

import axios from "axios";

const Container = styled.div`
  padding: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  ${mobile({ padding: "0rem" })}
`;

const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://localhost:5000/api/products?category=${cat}`
            : `http://localhost:5000/api/products`
        );

        setProducts(res.data);
        console.log(res.data[0].createdAt.split("T")[0]);
      } catch (err) {}
    };

    getProducts();
  }, [cat]);

  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [cat, filters, products]);

  useEffect(() => {
    if (sort === "latest") {
      console.log("reaching latest");
      setFilteredProducts(
        // products

        //TODO: sort is giving NaaN for createdAt date need to change it. For now the url with category is running with new as true forever
        (item) =>
          [...item].sort(
            (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
          )
      );
    } else if (sort === "asc") {
      setFilteredProducts((item) =>
        [...item].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((item) =>
        [...item].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort, products]);

  return (
    <Container>
      {cat
        ? filteredProducts.map((product) => (
            <Product product={product} key={product._id} />
          ))
        : products
            .slice(0, 8)
            .map((product) => <Product product={product} key={product._id} />)}
    </Container>
  );
};

export default Products;
