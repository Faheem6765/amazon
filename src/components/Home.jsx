import React, { useState } from 'react'
import img1 from "../images/img1.jpg";
import shopping from "../images/shopping.jpg";
import img2 from "../images/img2.jpg";
import shop2 from "../images/shop2.jpg";
import cr1 from "../images/cr1.jpg";
import c2 from "../images/c2.jpeg";
import "../css/home.css";
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";


const Home = () => {


    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    // const firebaseConfig = {
    //     apiKey: "AIzaSyA2aXXhAGuwT4Dy_ZV8AXTwpVgXmkuN8tk",
    //     authDomain: "clone-24c54.firebaseapp.com",
    //     projectId: "clone-24c54",
    //     storageBucket: "clone-24c54.appspot.com",
    //     messagingSenderId: "192877369621",
    //     appId: "1:192877369621:web:64a057c66a8f2555ffb11c",
    //     measurementId: "G-6Z4BC1D68J"
    // };

    // Initialize Firebase
    // const app = initializeApp(firebaseConfig);
    // const analytics = getAnalytics(app);

    return (
        <>
            <div className="home-image">
                <img src={cr1} alt="home-image" />
            </div>

        </>
    )
}

export default Home
