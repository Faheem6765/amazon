import React from 'react'
import "../css/sub-container.css";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const SubContainer = (props) => {
    const backToMenu = () => {
        props.backToMainMenu();
    }
    return (
        <>
            <div className="sub-container" style={props.state1 === "entering" ? { animation: "moveSidebar .3s reverse forwards" } : props.state1 === "entered" ?
                { transform: "translateX(-0px)" } : { animation: "moveSidebar .3s forwards" }}>
                <div className="header">
                    <span onClick={backToMenu} style={{
                        marginLeft: "40px",
                        fontWeight: "700",
                        cursor: "pointer"
                    }}>
                        Main Menu</span>
                </div>

                <ul className="links-container">
                    <li>Amazon Music </li>
                    <li>Kindle E-readers & Books </li>
                    <li>Appstore for Android </li>
                    <li>Mobile Phones </li>
                    <li>Laptops </li>
                    <hr className="hr-line" />
                </ul>
            </div>
        </>
    )
}

export default SubContainer
