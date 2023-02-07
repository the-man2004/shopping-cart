import React from "react";
import "../styles/header.css";

const Header = () => {
    return (
        <div className="header-container">
            <p id="header-title">FakeShop</p>
            <p id="home-link"><a href="/">Home</a></p>
            <p id="shop-link"><a href="/shop">Shop</a></p>
            <p id="about-link"><a href="/about">About</a></p>
            <div id="cart-link">
                <a href="/cart"><img id="cart" src="/images/grocery-store.png" alt="cart" /></a>
            </div>
        </div>
    )
}

export default Header;