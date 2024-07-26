import './App.css';
import React, { useRef, useState } from "react";
import Navbar from "./components/navbar";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Roadmap from "./pages/roadmap";
import BuyFOWBES from "./pages/buyfowbes";
import Socials from "./pages/socials";

function App() {
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
        <Router>
            <div className='mb-10'>
                <Navbar />
            </div>
                
                {isButtonVisible && (
                   
                    <button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-large rounded-lg text-sm px-5 py-1 text-center me-2 mb-1" onClick={handleButtonClick}>
                        Click me
                    </button>
                   
                )}
                
                <audio ref={audioRef} style={{ display: "none" }}>
                    <source src="./music/Mystery.mp3" type="audio/mp3" />
                    Your browser does not support the audio element.
                </audio>
            
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/roadmap" element={<Roadmap />} />
                <Route path="/buyfowbes" element={<BuyFOWBES />} />
                <Route path="/socials" element={<Socials />} />
            </Routes>
        </Router>
    );
}

export default App;
