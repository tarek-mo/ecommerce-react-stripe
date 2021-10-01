import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import LoadingProvider from "./contexts/LoadingContext";
import CartProvider from "./contexts/CartContext";
ReactDOM.render(
  <CartProvider>
    <LoadingProvider>
      <App />
    </LoadingProvider>
  </CartProvider>,
  document.getElementById("root")
);
