import React from 'react'
import "../css/card-bottom-row.css";
import p1 from "../images/p1.jpg";
import p4 from "../images/p4.jpg";
import p3 from "../images/p3.jpg";
import c4 from "../images/c4.jpg";
import computer from "../images/computer.jpg";
import { Link } from "react-router-dom";

function CardBottomRow() {
    return (
        <>
            <div className="card-bottom-container">
                <div className="card-bottom ">
                    <div className="card-bottom-header">
                        <p>Oculus</p>
                    </div>
                    <div className="card-bottom-image">
                        <img src={p1} alt="product-image" />
                    </div>
                    <div className="shop-now">
                        <Link className="shopnow-link" to="/">Shop Now</Link>
                    </div>
                </div>
                <div className="card-bottom">
                    <div className="card-bottom-header computer-text">
                        <p>Deals & Promotion</p>
                    </div>
                    <div className="card-bottom-image">
                        <img src={p4} alt="product-image" />
                    </div>
                    <div className="shop-now">
                        <Link className="shopnow-link" to="/">Shop Now</Link>
                    </div>
                </div>
                <div className="card-bottom">
                    <div className="card-bottom-header">
                        <p>Gaming Accessories</p>
                    </div>
                    <div className="card-bottom-image">
                        <img src={p3} alt="product-image" />
                    </div>
                    <div className="shop-now">
                        <Link className="shopnow-link" to="/">Shop Now</Link>
                    </div>
                </div>
                <div className="card-bottom">
                    <div className="card-bottom-header">
                        <p>Find Tv's</p>
                    </div>
                    <div className="card-bottom-image">
                        <img src={c4} alt="product-image" />
                    </div>
                    <div className="shop-now">
                        <Link className="shopnow-link" to="/">Shop Now</Link>
                    </div>
                </div>

            </div>
        </>
    )
}

export default CardBottomRow
