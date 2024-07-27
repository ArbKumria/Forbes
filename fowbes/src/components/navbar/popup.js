import React, { useState, useRef } from 'react';
import "./popup.css";

function Popup({ children }) {
    
    const audioRef = useRef(null);
    const [isButtonVisible, setButtonVisible] = useState(true);
    const [isOpen, setIsOpen] = useState(true);

    const handleButtonClick = () => {
        const audioElement = document.createElement('audio');
    
        // Set the audio source (replace 'your-audio-file.mp3' with your actual audio file)
        audioElement.src= './music/Mystery.mp3';
    
        // Play the audio
        audioElement.play();
        setButtonVisible(false);
        setIsOpen(false);
        // Optionally, you can also navigate to another route here if needed
    };

    return (
        <>
            {isOpen && (
                <dialog open style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    {/* Your modal content */}
                    <h2>Do you want to experience financial freedom?</h2>
                    <section style={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}>
                    {isButtonVisible && (
                        <button
                            className="button-drizzy"
                            onClick={handleButtonClick}
                        >
                            Yes
                        </button>
                    )}
                    {isButtonVisible && (
                        <button
                            className="button-drizzy"
                            onClick={handleButtonClick}
                        >
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