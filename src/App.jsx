import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Products, Cart, Checkout } from "./components";
import { CssBaseline } from "@mui/material";

const App = () => {
  return (
    <Router>
      <CssBaseline />
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Products />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
        <Route exact path="/checkout">
          <Checkout />
        </Route>
      </Switch>
    </Router>
  );
};
export default App;
