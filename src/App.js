import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import SpotifyEmbed from './components/SpotifyEmbed';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <main>
        <About />
        <SpotifyEmbed />
      </main>
      <Footer />
    </div>
  );
}

export default App;