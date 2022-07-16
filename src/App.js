
import NavBar from "react-bootstrap/Navbar"
import NavbarBrand from "react-bootstrap/esm/NavbarBrand";
import {LinkContainer} from "react-router-bootstrap";
import {Routes,Route} from "react-router-dom"

import './App.css';
import { HomeScreen } from "./pages/HomeScreen";
import { ProductScreen } from "./pages/ProductScreen";
import { useContext } from "react";
import { Store } from "./Store";
import { Badge } from "react-bootstrap";
import { CartScreen } from "./pages/CartScreen";

function App() {
  const {state:{cart}}=useContext(Store)
  return (
    <div className="d-flex flex-column site-container">
      <header>
        <NavBar bg="dark" variant="dark">
          <LinkContainer to="/">
            <NavbarBrand>
              amazona 
              Cart {cart.cartItems.length>0 && <Badge bg="danger" pill>{cart.cartItems.reduce((a,c)=>a+c.quantity,0)}</Badge> }
            </NavbarBrand>
          </LinkContainer>
        </NavBar>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomeScreen/>}/>
          <Route path="/products/:id" element={<ProductScreen/>}/>
          <Route path="/cart" element={<CartScreen/>}/>
        </Routes>
      </main>
      <footer className="text-center">
        All rights reserved
      </footer>
    </div>
  );
}

export default App;
