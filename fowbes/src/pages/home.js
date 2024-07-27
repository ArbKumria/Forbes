import React, { useRef, useState } from "react";
//how to center text on page using css
import "./scroll.css";
import HomeText from "../components/navbar/homeText";


const Home = () => {

    const audioRef = useRef(null);
    const [isButtonVisible, setButtonVisible] = useState(true);

    const handleButtonClick = () => {
        if (audioRef.current) {
            audioRef.current.play();
        }
        setButtonVisible(false);
        // Optionally, you can also navigate to another route here if needed
        
    };

    return (
        <div>
                
                {isButtonVisible && (
                   
                   <button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-large rounded-lg text-sm px-5 py-1 text-center me-2 mb-1" onClick={handleButtonClick}>
                       Click me
                   </button>
                  
               )}
               
               <audio ref={audioRef} style={{ display: "none" }}>
                   <source src="./music/Mystery.mp3" type="audio/mp3" />
                   Your browser does not support the audio element.
               </audio>
        <HomeText />
        </div>
    );

};

export default Home;