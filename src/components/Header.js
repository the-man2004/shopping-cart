import React from "react";
import "../styles/header.css";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="header-container">
            <p id="header-title">FakeShop</p>
            <p id="home-link"><Link to="/">Home</Link></p>
            <p id="shop-link"><Link to="/shop">Shop</Link></p>
            <p id="about-link"><Link to="/about">About</Link></p>
            <div id="cart-link">
                <Link to="/cart"><img id="cart" src="/images/grocery-store.png" alt="cart" /></Link>
            </div>
        </div>
    )
}

export default Header;