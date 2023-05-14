import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";
import axios from "axios";
import { useState , useEffect} from "react";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = (filters) => {

  const [products , setProductd] = useState([]);
  const [filteredProducts , setFilteredProductd] = useState([]);

  const getProducts = async ()=>{
    try {
      console.log("kir khar");
      const res = await axios.get("https://localhost:5000/api/products")
      console.log(res);
      console.log("kir");
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(()=> {
      getProducts();
      console.log("kir2");
  },[])

  return (
    <Container>
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
