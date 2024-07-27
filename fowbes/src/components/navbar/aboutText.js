import React from "react";

const AboutText = () => {
    return (
            <div
                style={{
                    display: "flex",

                    height: "40vh",
                    backgroundColor: "#0F0E1A", // Assuming original background is dark
                }}
            >
                <div>
                    <img className="logo2" src="/images/F2.png" alt="" />
                </div>
                <div>
                    <h1 className="text-about" id="heading">
                        WHY $FOWBES?
                    </h1>
                    <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}>
                    <p className="text-about" id="body">
                        Just like the everyday investor has Forbes, memecoins on Solana have <span className="small-logo-sentence">Fowbes</span>.
                    </p>
                    </div>
                </div>
                
            </div>
    );
};

export default AboutText;
