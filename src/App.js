import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Search from "./pages/Search";

function App() {
  return (
      <Router>
        <Navbar />
          <Switch>
              <Route path="/product/:id">
                      <Product />
              </Route>

              <Route path="/about">
                      <About />
              </Route>

              <Route path="/search">
                      <Search />
              </Route>


              <Route exact path="/">
                      <Home />
              </Route>
          </Switch>
          <Footer />
      </Router>
  );
}

export default App;




