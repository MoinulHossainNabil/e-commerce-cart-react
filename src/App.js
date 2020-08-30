import React, { Component } from "react";
import Cookies from "universal-cookie";
import { BrowserRouter as Router, HashRouter, Route, Switch } from "react-router-dom";

import "./App.css";
import data from "./components/ProductJson.json";

import Cart from "./components/Cart";
import Items from "./components/Items";
import Navbar from "./components/Navbar";
import ItemDetails from "./components/ItemDetails";
import ItemsByCategory from "./components/ItemsByCategory";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      orders: [],
      category: ["jeans", "shirts", "jackets"],
    };
    this.expireDate = new Date(
      new Date().setFullYear(new Date().getFullYear() + 1)
    );
  }

  componentDidMount() {
    this.setState({
      data: data,
    });
    let cookie = new Cookies();
    let currentOrder = cookie.get("product");
    if (!currentOrder) {
      this.setCookie("product", [], this.expireDate);
    } else {
      this.setState({
        orders: currentOrder,
      });
    }
  }

  setCookie = (cookieName, state, expiryDate) => {
    let cookie = new Cookies();
    cookie.set(cookieName, state, { path: "/", expires: expiryDate });
  };

  calculateTotalCost = (state) => {
    let cost = 0;
    this.state.orders.forEach((order) => {
      let quantity = order.quantity;
      let price = order.price;
      cost += quantity * price;
    });
    return Math.round(cost * 100) / 100;
  };

  addToCart = (orderedItem, event) => {
    let order = this.state.orders.filter((item) => item.id === orderedItem.id);
    if (order.length === 0) {
      orderedItem["quantity"] = 1;
      let items = this.state.orders;
      items.push(orderedItem);
      this.setState({
        orders: items,
      });
      this.setCookie("product", items, this.expireDate);
    } else {
      const newOrders = this.state.orders.map((order) => {
        if (order.id === orderedItem.id) {
          order.quantity += 1;
        }
        return order;
      });
      this.setState({
        orders: newOrders,
      });
      this.setCookie("product", this.state.orders, this.expireDate);
    }
  };

  decreaseItemeQuantity = (decreasedItem, event) => {
    let updatedOrder = [this.state.orders];
    let isQuantityZero = false;
    let newOrders = this.state.orders.map((order, index) => {
      if (order.id === decreasedItem.id) {
        if (order.quantity > 1) {
          order.quantity -= 1;
        } else {
          updatedOrder = this.state.orders.filter(
            (order) => order.id !== decreasedItem.id
          );
          isQuantityZero = true;
        }
      }
      return order;
    });
    if (isQuantityZero) {
      this.setState({
        orders: updatedOrder,
      });
      this.setCookie("product", updatedOrder, this.expireDate);
    } else {
      this.setState({
        order: newOrders,
      });
      this.setCookie("product", newOrders);
    }
  };

  deleteFromCart = (deletedItem, event) => {
    let updatedOrder = this.state.orders.filter(
      (order) => order.id !== deletedItem.id
    );
    this.setState({
      orders: updatedOrder,
    });
    this.setCookie("product", updatedOrder, this.expireDate);
  };

  render() {
    return (
      <HashRouter>
        <div className="App">
          <Navbar
            itemList={this.state.data}
            category={this.state.category}
            filterByCategory={this.filterByCategory}
            orders={this.state.orders}
          />
          <Switch>
            <Route
              path="/"
              exact
              render={(props) => (
                <Items
                  {...props}
                  itemList={this.state.data}
                  addToCart={this.addToCart}
                />
              )}
            />
            <Route
              path="/item/category/:category"
              exact
              render={(props) => (
                <ItemsByCategory
                  {...props}
                  itemList={this.state.data}
                  addToCart={this.addToCart}
                />
              )}
            />
            <Route
              path="/item/name/:name/:id"
              exact
              render={(props) => (
                <ItemDetails
                  {...props}
                  itemList={this.state.data}
                  addToCart={this.addToCart}
                />
              )}
            />
            <Route
              path="/cart"
              render={(props) => (
                <Cart
                  {...props}
                  orders={this.state.orders}
                  addToCart={this.addToCart}
                  decrement={this.decreaseItemeQuantity}
                  deleteItem={this.deleteFromCart}
                  cost={this.calculateTotalCost}
                />
              )}
            />
            <Route
              path="*"
              exact
              render={(props) => (
                <Items
                  {...props}
                  itemList={this.state.data}
                  addToCart={this.addToCart}
                />
              )}
            />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default App;
