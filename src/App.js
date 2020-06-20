import React, { Component } from "react";
import NavBar from "./components/navbar";
import Products from "./components/products";
import Posts from "./components/posts";
import Home from "./components/home";
import Dashboard from "./components/admin/dashboard";
import ProductDetails from "./components/productDetails";
import NotFound from "./components/notFound";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="content">
          <Switch>
            {/* switch order with: most specific one --> generate one*/}
            <Route
              path="/Routing-Example-React/products/:id"
              component={ProductDetails}
            />
            <Route
              path="/Routing-Example-React/products"
              render={(props) => <Products someProp="someProp" {...props} />}
            />
            <Route
              path="/Routing-Example-React/posts/:year?/:month?"
              component={Posts}
            />
            <Redirect
              from="/Routing-Example-React/postings"
              to="/Routing-Example-React/posts"
            />
            <Route path="/Routing-Example-React/admin" component={Dashboard} />
            <Route
              path="/Routing-Example-React/not-found"
              component={NotFound}
            />
            <Route path="/Routing-Example-React/" exact component={Home} />
            <Redirect to="/Routing-Example-React/not-found" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
