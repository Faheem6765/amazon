import React from 'react'
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import "../css/menu.css";

const Menu = (props) => {
    const showSidebar = () => {
        props.showEvent();
    }
    return (
        <>
            <div className="menu">
                <div className="bars" onClick={showSidebar}>
                    <MenuIcon className="menubtn" />
                    <span className="text-white all_text">All </span>
                </div>
                <div className="menu-links">
                    <Link to="/" className="link">Today's Deals</Link >
                    <Link to="/" className="link">Customer Service</Link >
                    <Link to="/" className="link">Registry</Link >
                    <Link to="/" className="link">Gift Cards</Link >
                    <Link to="/" className="link">Sell</Link>
                </div>

                <div className="right-text">
                    Amazon's response to COVID-19
                </div>
            </div>

            {/* <div className="circle">hello</div>
            <div className="rotate"></div> */}
        </>

    )
}

export default Menu