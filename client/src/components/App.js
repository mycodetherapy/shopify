import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import { Card } from "./Card";
import { AppContainer, AppHeader, AppRoot } from "./App.styles";
import { CircularProgress } from "@mui/material";
import { CardContainer } from "./Card.styles";

export const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3001/sync-and-get-shopify-products"
        );
        setProducts(response.data.data);
      } catch (error) {
        console.error(
          "Error when receiving data from the server:",
          error.message
        );
      }
    };

    fetchData();
  }, []);

  return (
    <AppRoot>
      <AppHeader>{"Products Shopify"}</AppHeader>
      <AppContainer container spacing={2}>
        {products.length ? null : <CircularProgress />}
        {products.map((product) => (
          <CardContainer key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <Card product={product} />
          </CardContainer>
        ))}
      </AppContainer>
    </AppRoot>
  );
};
