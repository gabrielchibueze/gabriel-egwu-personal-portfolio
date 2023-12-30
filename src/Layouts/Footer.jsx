import React, { useState } from "react";
import { FaLinkedinIn, FaFacebookF, FaGithub, FaEnvelope } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6"
import { Link } from "react-router-dom";
// import Logo from '../../public/gabriellogo.png'

export default function Footer (){
    const [subscriber, setSubscriber] = useState({firstname: "", lastname: "", email: ""})

    const handleSubscriberForm = (e)=>{
        const { name, value } = e.target

        setSubscriber(prevValue => (
            {
            ...prevValue, [name]: value
        })
        )
        console.log(subscriber)
    }

    const handleSubscriberSubmit = (e)=>{
        e.preventDefault()
        console.log(subscriber)
    }

   

    return (
        <div className="footer">
            <div className="footer-top">
                <div className="subscription">
                    <h1>Join for daily insights</h1>
                    <form onSubmit={handleSubscriberSubmit} className="subscription-form">
                        <input type="text" name="firstname" 
                        value={subscriber.firstname} 
                        placeholder="FIRST NAME" 
                        onChange={handleSubscriberForm} 
                        className="form-input"/>

                        <input type="text" name="lastname" 
                        value={subscriber.lastname} 
                        placeholder="LAST NAME" 
                        onChange={handleSubscriberForm} 
                        className="form-input"/>

                        <input type="email" name="email" 
                        value={subscriber.email} 
                        placeholder="EMAIL" 
                        onChange={handleSubscriberForm} 
                        className="form-input"/>
                    
                    <button className="subscribe-btn">Subscribe</button>

                    </form>
                    <p>We will never share or spam your email address. By clicking "Sign Up" you agree to the Terms of Use and Privacy Policy</p>
                </div>
                    <div className="footer-main">
                        <div className="footer-first">
                        <p className="footer-headings">Gabriel Egwu</p>
                            <Link to="about">About me</Link>
                            <Link to="about/business&investment">Business & Investment</Link>
                            <Link to="projects/webdevelopment">My Projects</Link>
                            <Link to="lifestyle">Art & Lifestyle</Link>               
                        </div>
                        <div className="footer-second">
                            <p className="footer-headings">Quick Links</p>
                            <Link to="news">News</Link>
                            <Link to="contactme">Contact me</Link>
                            <Link to="hireme">Hire me</Link>
                        </div>
                        <div className="footer-menu-links">
                            <p className="footer-headings">Social Media</p>
                            <div className="footer-menu-social-links">
                                <Link to="https://github.com/gabrielchibueze" target="_blank"> <FaGithub /> GitHub</Link>  
                                <Link to="https://www.facebook.com/egwu.gabrielchibueze" target="_blank"> <FaFacebookF /> Facebook</Link>
                                <Link to="https://linkedin.com/in/gabriel-egwu" target="_blank"> <FaLinkedinIn /> Linkedin </Link>
                                <Link to="https://twitter.com/ChibuezeEgwu" target="_blank"> <FaSquareXTwitter /> Twitter </Link>
                            </div>
                        </div>
                </div>
            </div>
            <div className="footer-foot">
                <h1>New Era Web Services</h1>
                <p>Newcastle United Kingdom</p>
            </div>
        </div>
    )
}