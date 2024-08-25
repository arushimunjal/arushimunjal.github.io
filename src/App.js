import React from 'react';
import Navbar from './Navbar';
import Header from './Header';
import About from './About';
import SpotifyEmbed from './SpotifyEmbed';
import Footer from './Footer';
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