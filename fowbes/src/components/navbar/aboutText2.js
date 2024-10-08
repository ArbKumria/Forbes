import REact from "react";

const AboutText2 = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', gap: '4rem'}}>
            <a href="https://youtu.be/dQw4w9WgXcQ?si=-Fs2yyaT6o9zpYLn" class="box">
            <div>
                <h2>Liquidity</h2>
                <div>
                    <p className="animate-slidein fire-text">Burnt</p>
                </div>
                <svg>
                    <filter id="fire">
                        <feTurbulence id="turbulence" baseFrequency="0.1 0.1" numOctaves="2" seed="3">
                            <animate attributeName="baseFrequency" dur="10s" repeatCount="indefinite" values="0.1 0.1;0.2 0.2"></animate>
                        </feTurbulence>
                        <feDisplacementMap in="SourceGraphic" scale="5"></feDisplacementMap>
                    </filter>
                </svg>
            </div>
            </a>
            <a href="https://youtu.be/dQw4w9WgXcQ?si=-Fs2yyaT6o9zpYLn" class="box">
            <div>
                <h2>Supply</h2>
                <p className="supply-text">1B Tokens</p>
            </div>
            </a>
            <a href="https://youtu.be/dQw4w9WgXcQ?si=-Fs2yyaT6o9zpYLn" class="box">
            <div>
                <h2>Mint Authority</h2>
                <strike style={{ color: 'red' }}><p className="mint-text">Revoked</p></strike>
            </div>
            </a>
            <a href="https://youtu.be/dQw4w9WgXcQ?si=-Fs2yyaT6o9zpYLn" class="box">
            <div>
                <h2>Tax</h2>
                <p class="fire-text">0%</p> 
            </div>
            </a>
        </div>
    );
};

export default AboutText2;