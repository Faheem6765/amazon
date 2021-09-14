import React from 'react'
import "../css/card.css";
import c3 from "../images/c3.jpg";
import c4 from "../images/c4.jpg";
import ad from "../images/ad.jpg";
import p5 from "../images/p5.jpg";
import { Link } from "react-router-dom";

const Card = () => {
    return (
        <>
            <div className="card-container">
                <div className="card ">
                    <div className="card-header">
                        <p>AmazonBasics</p>
                    </div>
                    <div className="card-image">
                        <img src={c3} alt="product-image" />
                    </div>
                    <div className="shop-now">
                        <Link className="shopnow-link" to="/">Shop Now</Link>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header computer-text">
                        <p>Computer & Accessories</p>
                    </div>
                    <div className="card-image">
                        <img src={p5} alt="product-image" />
                    </div>
                    <div className="shop-now">
                        <Link className="shopnow-link" to="/">Shop Now</Link>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <p>AmazonBasics</p>
                    </div>
                    <div className="card-image">
                        <img src={c4} alt="product-image" />
                    </div>
                    <div className="shop-now">
                        <Link className="shopnow-link" to="/">Shop Now</Link>
                    </div>
                </div>
                <div className="signin-container">
                    <div className="signin-div">
                        <h3>Sign in for the best Experience</h3>
                        <Link to="/signin">
                            <button style={{ width: "100%" }} className="btn btn-warning btn-lg">Sign in securely</button>
                        </Link>
                    </div>
                    <div className="image-div">
                        <img src={ad} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card
