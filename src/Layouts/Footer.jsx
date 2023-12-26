import React from "react";
import { Link } from "react-router-dom";
// import Logo from '../../public/gabriellogo.png'

export default function Footer (){
    return (
        <div className="footer">
            <div className="footer-main">
                <div className="footer-first">
                    <Link to="about">About me</Link>
                    <Link to="projects">My Projects</Link>
                    <Link to="services">Services</Link>               
                </div>
                <div className="footer-second">
                    <Link to="blog">Blog</Link>
                    <Link to="contactme">Contact me</Link>
                    <Link to="contactme">Hire me</Link>
                </div>
            </div>
            <div className="footer-third">
                <h1>New Era Web Services</h1>
                <p>Newcastle United Kingdom</p>
            </div>
        </div>
    )
}