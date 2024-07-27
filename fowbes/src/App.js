import './App.css';
import React from "react";
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

    return (
        <Router>
            <div className='mb-10'>
                <Navbar />
            </div>
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
