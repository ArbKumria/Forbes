import React from "react";

const AboutText = () => {
    return (
        <div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100vh",
                    backgroundColor: "#0F0E1A", // Assuming original background is dark
                }}
            >
                <div>
                    <img className="logo2" src="/images/F2.png" alt="" style={{ marginRight: "250px", marginTop: "50px", marginLeft: "50px",  }} />
                </div>
                <div>
                    <h1 className="text-about" id="heading" style={{ color: "#FFF", marginBottom: "25px", marginRight: "20px" }}>
                        WHY $FOWBES?
                    </h1>
                    <p className="-translate-y-1" id="body" style={{ color: "#FFF", fontSize: "18px", lineHeight: "1.6" }}>
                        Just like the everyday investor has Forbes, memecoins on Solana have Fowbes.
                    </p>
                </div>
                
            </div>
        </div>
    );
};

export default AboutText;
