import React from "react";
import "./scroll.css";

const About = () => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "centre",
                alignItems: "centre",
                height: "100vh",
            }}
        >
            <div>
                <img className="logo2" src="/images/F2.png" alt="" />
            </div>
            <div>
                <h1 className="text-about" id="heading">
                    WHY $FOWBES?
                </h1>
                <body className="text-about" id="body">
                    Just like the everyday investor has Forbes, memecoins on Solana have Fowbes.
                </body>
            </div>
        </div>
    );
};

export default About;