import React, { useState, useRef } from 'react';

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
                <dialog open>
                    {/* Your modal content */}
                    <h2>Popup Content</h2>
                    <p>This is the modal content.</p>
                    {isButtonVisible && (
                        <button
                            className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-large rounded-lg text-sm px-5 py-1 text-center me-2 mb-1"
                            onClick={handleButtonClick}
                        >
                            Click me
                        </button>
                    )}
                </dialog>
                
                
            )}
        </>
    );
}

export default Popup;