import React from 'react';
import LinkedIn from "../../assets/imgs/icons/linkedin_icon.png";
import Github from "../../assets/imgs/icons/github_icon.png";
import Mail from "../../assets/imgs/icons/email_icon.png";
import Spotify from "../../assets/imgs/icons/spotify_icon.png";
import '../../App.css';

function Footer () {
    const socials = [
        {
            href: "https://www.linkedin.com/in/arushi-munjal/",
            alt: "LinkedIn",
            src: LinkedIn
        },
        {
            href: "https://github.com/arushimunjal",
            alt: "Github",
            src: Github
        },
        {
            href: "mailto:amunjal@ucsd.edu",
            alt: "Mail",
            src: Mail
        },
        {
            href: "https://open.spotify.com/user/arushimunjal?si=031e5c9defa74298",
            alt: "Spotify",
            src: Spotify
        }
    ];

    return (
        <div className="footer">
            <div className="footer-heading">
                <h1> let's connect </h1>
                <div className="footer-links">
                    {socials.map((social) => {
                        return (
                            <a className="footer-link" href={social.href}> 
                                <img alt={social.alt} src={social.src}></img>
                            </a>
                        );
                    })}
        
                </div>
                <p> built in react.js and designed by arushi</p>
            </div>
            
            
        </div>
    )
};

export default Footer;