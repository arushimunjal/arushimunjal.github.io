import React from 'react';
import { motion } from "framer-motion";
import '../App.css';

// Import your images here
import Arushi from "../assets/imgs/about/arushi.jpg";
import Anjali from "../assets/imgs/about/anjali.jpg";
import Dunes from "../assets/imgs/about/dunes.jpg";
import Food from "../assets/imgs/about/food.jpg";
import Horse from "../assets/imgs/about/horse.jpg";
import Megha from "../assets/imgs/about/megha.jpg";
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
                            While originally from SoCal, I currently live in the Bay attending UC Berkeley studying Computer Science and Data Science.
                            <br /><br />
                            I believe in the power of utilizing <strong> creative thinking </strong> to solve everyday problems.
                            Between making latte art as a my part-time barista and storytelling my life through songwriting, expression of creativity fuels me.
                            This driving force has led me to pursue <strong>full-stack development, </strong>
                            a fulfilling avenue where I build and create intuitive interfaces that are friendly to both <strong> user </strong> and <strong> engineer. </strong>
                            <br /><br />
                            Outside student life, I enjoy de-stressing through exploring new cafes & restaurants, thrifting vintage pieces at flea markets, and cooking both family and fusion recipes with my friends.
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