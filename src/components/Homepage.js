import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import cd from "../assets/imgs/about/arushi.png";
import '../App.css';

function Homepage() {
    return (
        <motion.div
            className="container text-center bg-black"
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
                            a <strong>junior at UC San Diego</strong> with a passion for creating impactful products that drive <strong>postive social change</strong>
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
                    <div className="headshotContainer">
                        <img className="headshotImage" src={cd} alt="Arushi Munjal Headshot" />
                    </div>
                </div>
                <div className="musicContainer">
                    <div className="latestInfo">
                        <h2> currently: </h2>
                        <h3> junior @ UCSD studying computer science and math</h3>
                        <h2> this summer: </h2>
                        <h3>software engineering intern @ arthrex</h3>
                        <h2> previously: </h2>
                        <h3>data science intern @ nanomood</h3>
                        <h2> listening to: </h2>
                        <h3>a blend of r&b, house music & folk urdu</h3>
                    </div>
                    <div className="spotifyContainer">
                        <h2> the latest hits: </h2>
                        <iframe style={{borderRadius: 12 + 'px'}} title="Spotify Playlist" src="https://open.spotify.com/embed/playlist/0yNDHoNJ4RQ9StLBdlPFQP?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Homepage;