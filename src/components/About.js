import React from 'react';
import { motion } from "framer-motion";
import '../App.css';

// Import your images here
import Arushi from "../assets/imgs/about/arushi.png";
import Anjali from "../assets/imgs/about/anjali.jpg";
import Dunes from "../assets/imgs/about/dunes.JPG";
import Food from "../assets/imgs/about/food.jpg";
import Horse from "../assets/imgs/about/horse.jpg";
import Megha from "../assets/imgs/about/megha.JPG";
import Tiya from "../assets/imgs/about/tiya.jpg";
import WIC from "../assets/imgs/about/wic.jpg";
import Yoga from "../assets/imgs/about/yoga.jpg";

function About() {
    const imagesOne = [
        { alt: "Food", src: Food },
        { alt: "Dunes", src: Dunes },
        { alt: "Anjali", src: Anjali },
        { alt: "Tiya", src: Tiya }
    ];

    const imagesTwo = [
        { alt: "Megha", src: Megha },
        { alt: "Yoga", src: Yoga },
        { alt: "Horse", src: Horse },
        { alt: "WIC", src: WIC }
    ];

    return (
        <motion.div
            className="container text-center bg-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
            <div className="aboutPage">
                <div className="aboutContainer">
                    <div className="headshotImageContainer">
                        <img alt="Arushi Munjal Headshot" className='Arushi' src={Arushi}></img>
                    </div>
                    <div className="aboutText">
                        <h2>about me</h2>
                        <p>
                            While originally from Denver, Colorado, I currently live in the Bay Area, CA attending UC San Diego studying Computer Science, Math, and Global Health.
                        </p>
                    </div>
                </div>
                <div className="imageCarouselContainer">
                    <div className="scrollParent">
                        <div className="scrollElement primary">
                            {imagesOne.map((img) => (
                                <img alt={img.alt} src={img.src} key={img.alt}></img>
                            ))}
                        </div>
                        <div className="scrollElement secondary">
                            {imagesOne.map((img) => (
                                <img alt={img.alt} src={img.src} key={img.alt}></img>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="imageCarouselContainer">
                    <div className="scrollParent">
                        <div className="scrollElement primary2">
                            {imagesTwo.map((img) => (
                                <img alt={img.alt} src={img.src} key={img.alt}></img>
                            ))}
                        </div>
                        <div className="scrollElement secondary2">
                            {imagesTwo.map((img) => (
                                <img alt={img.alt} src={img.src} key={img.alt}></img>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default About;