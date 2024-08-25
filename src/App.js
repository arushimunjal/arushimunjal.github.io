import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoutes from "./components/AnimatedRoutes";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import useLocalStorage from 'use-local-storage';
import './App.css';

export const App = () => {
    const [isDarkMode, setDarkMode] = useLocalStorage("isDark", false);

    const toggleDarkMode = () => {
        setDarkMode(!isDarkMode);
    }

    return (
        <div className="App" data-theme={isDarkMode ? "dark" : "light"}>
            <Router>
                <Navbar 
                    isDarkMode={isDarkMode}
                    setDarkMode={toggleDarkMode}
                />
                <AnimatedRoutes />
                <Footer />
            </Router>
        </div>
    );
}

export default App;