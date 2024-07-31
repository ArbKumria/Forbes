import React, { useState } from 'react';
import "./popup.css";

function Popup({ children }) {
    const [isButtonVisible, setButtonVisible] = useState(true);
    const [isOpen, setIsOpen] = useState(true);
    const [isShaking, setIsShaking] = useState(true);

    const handleButtonClick = () => {
        const audioElement = new Audio('./music/Mystery.mp3');
        audioElement.play();

        setButtonVisible(false);
        setIsOpen(false);
        setIsShaking(false);
    };

    return (
        <>
            {isOpen && (
                <dialog 
                    open 
                    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} 
                    className={`Popup ${isShaking ? 'shake' : ''}`}
                >
                    {/* Your modal content */}
                    <h2 className="question">Do you want to experience financial freedom?</h2>
                    <section style={{ display: 'flex', flexDirection: 'row', gap: '1rem' }} className="buttons">
                        {isButtonVisible && (
                            <button className="button-drizzy" onClick={handleButtonClick}>
                                Yes
                            </button>
                        )}
                        {isButtonVisible && (
                            <button className="button-drizzy" onClick={handleButtonClick}>
                                Not No
                            </button>
                        )}
                    </section>
                </dialog>
            )}
        </>
    );
}

export default Popup;
