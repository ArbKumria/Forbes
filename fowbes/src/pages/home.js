import React, { useRef, useState } from "react";
//how to center text on page using css
import "./scroll.css";
import HomeText from "../components/navbar/homeText";
import Popup from "../components/navbar/popup";


const Home = () => {

    return (
        <div>
            <div className="container">
                <Popup />
            </div>
            <HomeText />
        </div>
    );

};

export default Home;