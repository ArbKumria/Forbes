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
                    <p className="text-about" id="body2">
                        Just like the everyday investor has Forbes, memecoins on Solana have <span className="bold">Fowbes</span>.
                    </p>
                    </div>
                    <p className="text-about" id="body">Looking for your next 10x, but don't know where to start? We got you. Stay tuned for our digital memecoin newsletter <span className="small-logo-sentence">(Coming Phase 4)</span> that gets distributed <span className="bold">weekly</span> to $FOWBES holders. Holders who launch memecoins will also have the chance each month to be featured in one of our issues.</p>
                </div>
            </div>   
    );
};

export default AboutText;
