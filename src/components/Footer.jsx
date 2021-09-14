import React from 'react'
import "../css/footer.css";

function Footer() {
    return (
        <>
            <div className="footer">
                <div className="footer-links-container">
                    <div className="first-section common-class ul-container" >
                        <ul >
                            <strong className="first-strong">Get to Know Us</strong>
                            <li>Careers</li>
                            <li>Blog</li>
                            <li>About Amazon</li>
                            <li>Investor Relations</li>
                            <li>Amazone Devices</li>
                        </ul>
                    </div>
                    <div className="second-section common-class ul-container">
                        <ul >
                            <strong>Make Money with Us</strong>
                            <li>Sell Products on Amazon</li>
                            <li>Sell on Amazon Buisness</li>
                            <li>Sell apps on amazon</li>
                            <li>Become an Affiliate</li>
                            <li>Advertise your products</li>
                            <li>Self Publish with us</li>
                            <li>Host an amazon hub</li>
                            <li>See more make money with us</li>
                        </ul>
                    </div>
                    <div className="third-section common-class ul-container">
                        <ul >
                            <strong>Amazon Payment Products</strong>
                            <li>Amazon Buisness Card</li>
                            <li>Shop with Points</li>
                            <li>Reload your balance</li>
                            <li>Amazon Currency Converter</li>
                        </ul>
                    </div>
                    <div className="fourth-section common-class ul-container">
                        <ul>
                            <strong>Let Us Help You</strong>
                            <li>Amazon and COVID-19</li>
                            <li>Your Account</li>
                            <li>Your Orders</li>
                            <li>Shopping Rates & Policies</li>
                            <li>Returns & Replacements</li>
                            <li>Manage Your Content & Devices</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
