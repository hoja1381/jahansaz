import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Footer from "../components/Footer";
import { mobile } from "../responsive";
import { useState, useEffect } from "react";
import axios from "axios";

const Container = styled.div`
  direction: rtl;
`;

const Title = styled.h1`
  margin: 40px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;

const ProductList = () => {
  const [filters, setFilters] = useState({});
  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/products");
        console.log(res);
      } catch (err) {
        console.log(err);
      }
      getProducts();
    };
  });

  return (
    <Container>
      <Announcement />
      <Navbar />
      <Title>محصولات </Title>
      <FilterContainer>
        <Filter>
          <FilterText>دسته بندی محصولات : </FilterText>
          <Select name="productCode" onChange={handleFilters}>
            <Option disabled selected>
              کد
            </Option>
            <Option>107</Option>
            <Option>105</Option>
            <Option>230</Option>
            <Option>240</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products filters={filters} />
      <Footer />
    </Container>
  );
};

export default ProductList;
