import React from 'react'
import "../css/sidebar.css";
import { Link } from "react-router-dom"
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ChevronRightOutlinedIcon from '@material-ui/icons/ChevronRightOutlined';
import KeyboardArrowDownOutlinedIcon from '@material-ui/icons/KeyboardArrowDownOutlined';

const Sidebar = (props) => {

    const openSubContainer = () => {
        props.showSubContainer();
    }
    return (
        <div className="sidebar" style={props.state === "entering" ? { animation: "moveSidebar .3s forwards" } : props.state === "entered" ?
            { transform: "translateX(-0px)" } : { animation: "moveSidebar .3s reverse forwards" }}>
            <div className="header">
                <Link to="/signin" onClick={props.closeNav}>
                    <AccountCircleIcon
                        style={{
                            color: 'white',
                            fontSize: 30,
                            marginLeft: '30px',
                        }} /> </Link>
                <Link to="/signin" onClick={props.closeNav}>
                    <p className="header_text">  Hello,Sign in </p></Link>

            </div>
            <div className="categories">
                <div className="cat-heading">
                    <p className="text-center">Digital Content & Devices</p>
                </div>
                <ul className="links-container" onClick={openSubContainer}>
                    <li onClick={openSubContainer}>Amazon Music <ChevronRightOutlinedIcon className="arrowIcon" /> </li>
                    <li>Kindle E-readers & Books <ChevronRightOutlinedIcon className="arrowIcon" /> </li>
                    <li>Appstore for Android <ChevronRightOutlinedIcon className="arrowIcon" /> </li>
                    <hr className="hr-line" />
                </ul>
                <div className="cat-heading">
                    <p className="text-center">Shop By Department</p>
                </div>
                <ul className="links-container">
                    <li>Electronics <ChevronRightOutlinedIcon className="arrowIcon" /> </li>
                    <li>Computers <ChevronRightOutlinedIcon className="arrowIcon" /> </li>
                    <li>Smart Home <ChevronRightOutlinedIcon className="arrowIcon" /> </li>
                    <li>Arts & Crafts <ChevronRightOutlinedIcon className="arrowIcon" /> </li>
                    <li>See All <KeyboardArrowDownOutlinedIcon /> </li>
                    <hr className="hr-line" />
                </ul>
                <div className="cat-heading">
                    <p className="text-center">Programs & Features</p>
                </div>
                <ul className="links-container">
                    <li>Gift Cards <ChevronRightOutlinedIcon className="arrowIcon" /> </li>
                    <li>Amazon Live <ChevronRightOutlinedIcon className="arrowIcon" /> </li>
                    <li>International Shopping <ChevronRightOutlinedIcon className="arrowIcon" /> </li>
                    <hr className="hr-line" />
                </ul>
            </div>
        </div>
    )
}

export default Sidebar
