import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import cd from "../assets/imgs/homepage/cd.svg";
import '../App.css';

function Homepage () {
    return (
        <motion.div
            className="container text-center  bg-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
        <div className="homePage">
            <div className="heroContainer">
                <div className="heroText">
                    <h3>hi there! i'm</h3>
                    <h1>Arushi Munjal</h1>
                    <h4>
                        a <strong>developer</strong> who loves building friendly products for <strong>all</strong>
                    </h4>
                    <div className="buttonContainer">
                        <Link className="homeButtons" to="/about">
                            about me <p> &#8594; </p>
                        </Link>
                        <Link className="homeButtons" to="/projects">
                            what i do <p> &#8594; </p>
                        </Link>
                    </div>
                </div>
                <div className="recordContainer">
                    <div className="recordCircle">
                        <a href='https://open.spotify.com/track/3TY7q9rofAemFWnloXVP3T?si=0c2101ee435d4bae'>
                            <img alt="Vinyl Record Player" src={cd}></img>
                        </a>
                    </div>                
                </div>
            </div>
            <div className="musicContainer">
                <div className="latestInfo">
                    <h2> currently: </h2>
                    <h3>incoming junior @ UC San Diego studying computer science</h3>
                    <h2> next up: </h2>
                    <h3>software engineering intern @ arthrex</h3>
                    <h2> previously: </h2>
                    <h3>data science intern @ nanomood</h3>
                    <h2> listening to: </h2>
                    <h3>a blend of r&b, folk sufi & indie pop</h3>
                </div>
                <div className="spotifyContainer">
                    <h2> the latest hits: </h2>
                    <iframe
                        style={{ borderRadius: '12px' }}
                        title="Spotify Playlist"
                        src="https://open.spotify.com/playlist/0yNDHoNJ4RQ9StLBdlPFQP?si=c6a7e1804dc54238"
                        width="100%"
                        height="352"
                        frameBorder="0"
                        allowFullScreen
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
        </div>
        </motion.div>
    );
};

export default Homepage;