import React from "react";
import "../styles/home.css";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <div className="img-container">
                <img id="pc-img" src="/images/pc.jpg" alt="pc" />
                <div className="home-title">
                    <p id="home-p1">COMPUTER HARDWARE STORE OF THE YEAR</p>
                    <p id="home-p2">Making pc building</p>
                    <p id="home-p3">easier for you</p>
                    <button id="shop-btn">
                        <Link id="home-shop-link" to="/shop" >Shop now</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home;