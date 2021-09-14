import React from 'react'
import { Switch, Route, NavLink, Link } from 'react-router-dom';
import "../css/header.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import logo from '../images/logo.png';
import MenuIcon from '@material-ui/icons/Menu';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';


const Header = (props) => {
    const showSidebar = () => {
        props.showEvent();
    }
    return (
        <>
            <nav className="header">
                <span className="header-bars" onClick={showSidebar}> <MenuIcon /> </span>
                <Link to="/" >
                    <div className="logo">
                        <img src={logo} className="logo" alt="Logo" />
                    </div>
                </Link>

                <span className="locIcon">
                    <LocationOnOutlinedIcon style={{ fontSize: 30 }} />
                </span>
                <div className="location">
                    <p className="deliver_to"> Deliver to <br />
                        <span className="country-name">Pakistan</span>
                    </p>
                </div>
                <div className="search">
                    <select className="country-select">
                        <option>All</option>
                        <option>Pakistan</option>
                        <option>United States</option>
                        <option>Australia</option>
                        <option>India</option>
                    </select>
                    <input type="text" className="input-search" />
                    <button className="search-btn"> <SearchOutlinedIcon
                        style={{ fontSize: 30 }} /> </button>
                </div>
                <div className="country-flag">
                    <select className="lang">
                        <option className="flags"> 🆘 </option>
                        <option className="flags"> English (UK) </option>
                        <option className="flags"> Hindi </option>
                        <option className="flags"> Spanish </option>
                    </select>
                </div>
                {/* 1st Link */}
                <Link className="link" to="/signin">
                    <div className="options hello-signin">
                        <div className="right-options">
                            <span className="First">Hello, Sign in  </span>
                            <span className="Second">Account & Lists</span>
                        </div>
                    </div>

                    {/* For Mobile Device */}
                    <div className="mobile-signin">
                        <div className="options">
                            <div className="righ-options">
                                <span className="signin">Sign in </span>
                                <span>   <PermIdentityOutlinedIcon className="signin-icon"
                                    style={{ marginLeft: "7px" }} />
                                </span>
                            </div>
                        </div>
                    </div>
                </Link>
                {/* Second Link */}
                <Link className="link">
                    <div className="options returns">
                        <div className="right-options">
                            <span className="First">Returns  </span>
                            <span className="Second">& Orders</span>
                        </div>
                    </div>
                </Link>
                {/* 3rd Link */}
                <Link className="link">
                    <div className="options">
                        <div className="cart-container">
                            <span className="">
                                <ShoppingCartOutlinedIcon />
                            </span>
                            <span className="First cart">0</span>
                        </div>
                    </div>
                </Link>

            </nav>

            {/* Search bar that will be visible in Mobile devices */}
            <div className="search-container">
                <input type="text" placeholder="Search Amazon" className="mobile-input-search" />
                <button className="mobile-search-btn" > <SearchOutlinedIcon
                    style={{ fontSize: 20 }} /> </button>
            </div>

        </>
    )
}

export default Header
