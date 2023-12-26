import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaTwitter, FaLinkedinIn, FaFacebookF, FaGithub, FaEnvelope } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6"
import { CiMenuBurger } from "react-icons/ci"
import { MdCloseFullscreen } from "react-icons/md"
import Logo from '/gabriellogo.png'

export default function Header (){
    const [mobileMode, setMobileMode] = useState(false)
    const [menuClick, setMenuClick] = useState(false)
    const [projectHover, setProjectHover] = useState(false)
    const [galleryHover, setGalleryHover] = useState(false)
    const [lifestyleHover, setLifestyleHover] = useState(false)
    const [aboutHover, setAboutHover] = useState(false)
    const [miniDesktop, setMiniDesktop] = useState(false)



    useEffect(()=>{
        function adjustScreenSize (){
            if(window.outerWidth < 500){
                setMobileMode(true)
            } 
            else if (window.outerWidth >= 500 && window.outerWidth < 800) {
                setMobileMode(false)
                setMiniDesktop(true)
            } else (
                setMiniDesktop(false)
            )
        }

        window.addEventListener("resize",  adjustScreenSize)
        adjustScreenSize()
        return ()=>window.removeEventListener("resize", adjustScreenSize)
    }, [])

    const menuItems = [
        {
            link: "about",
            name: "ABOUT GABRIEL",
        },
        {
            link: "projects",
            name: "MY PROJECTS",
        },
       
        {
            link: "lifestyle",
            name: "LIFESTYLE",
        },
        {
            link: "news",
            name: "NEWS",
        },
        {
            link: "library",
            name: "LIBRARY AND PUBLICATIONS"
        },
        {
            link: "business-principle",
            name: "BUSINESS PRINCIPLE AND ETHICS",
        },
        {
            link: "videos",
            name: "VIDEOS"
        },
        {
            link: "gabriel-gallery",
            name: "GABRIEL GALLERY"
        },
        
    ]
    const menu = menuItems.map(menu =>{
        return <Link to={menu.link}>{menu.name}</Link>
    })
    return (
        <div className="header">

            

            {mobileMode ? 
                <div className='mobile-mode' onClick={()=>setMenuClick(prevValue => !prevValue)}>
                    <div className="open-close-menu-btn">
                        <Link to="/">
                            <img src={Logo} className="header-logo"/>
                        </Link>
                        {menuClick ? <MdCloseFullscreen className='menu-close' /> : <CiMenuBurger className='menu-open'/>}
                    </div>
                    {menuClick && <div className='header-menu'>
                            {menu}
                            <div className="mobile-menu-links">
                                <p>Follow me on:</p>
                                <Link to="https://linkedin.com/in/gabriel-egwu" target="_blank"> <FaLinkedinIn /> Linkedin </Link>
                                <Link to="https://twitter.com/ChibuezeEgwu" target="_blank"> <FaSquareXTwitter /> Twitter </Link>
                                <Link to="https://www.facebook.com/egwu.gabrielchibueze" target="_blank"> <FaFacebookF /> Facebook</Link>
                                <Link to="https://github.com/gabrielchibueze" target="_blank"> <FaGithub /> GitHub</Link>  
                            </div>
                        </div>}
                </div> :

            <div className='desktop-mode'>
                <Link to="/">
                    <img src={Logo} className="header-logo"/>
                </Link>

                {miniDesktop ? 
           
                    <div className='minidesktop-mode' onClick={()=>setMenuClick(prevValue => !prevValue)}>
                        <div className="open-close-menu-btn">
                            <Link to="/">
                                <img src={Logo} className="header-logo2"/>
                            </Link>
                            {menuClick ? <MdCloseFullscreen className='menu-close' /> : <CiMenuBurger className='menu-open'/>}
                        </div>
                        {menuClick && <div className='header-menu'>
                                {menu}
                                <div className="mobile-menu-links">
                                    <p>Follow me on:</p>
                                    <Link to="https://linkedin.com/in/gabriel-egwu" target="_blank"> <FaLinkedinIn /> Linkedin </Link>
                                    <Link to="https://twitter.com/ChibuezeEgwu" target="_blank"> <FaSquareXTwitter /> Twitter </Link>
                                    <Link to="https://www.facebook.com/egwu.gabrielchibueze" target="_blank"> <FaFacebookF /> Facebook</Link>
                                    <Link to="https://github.com/gabrielchibueze" target="_blank"> <FaGithub /> GitHub</Link>  
                                </div>
                            </div>}
                </div>:
                <div className="desktop-links">
                    <div className=" child" onMouseEnter={()=>setAboutHover(true)} onMouseLeave={()=>setAboutHover(false)}>
                        <Link className="desktop-main-link" >ABOUT</Link>
                        {aboutHover && 
                            <div className="children">
                                <Link to="about" className="desktop-sub-link">About Gabriel </Link>
                                <Link to="education" className="desktop-sub-link">Education </Link>
                                <Link to="business&investment" className="desktop-sub-link">Business & Investments</Link>
                                <Link to="philantropy" className="desktop-sub-link">Philantropy</Link>
                            </div>}
                    </div>

                    <div className="desktop-project-child child" onMouseEnter={()=>setProjectHover(true)} onMouseLeave={()=>setProjectHover(false)}>
                        <Link className="desktop-main-link" >PROJECTS</Link>
                        {projectHover && 
                            <div className="children">
                                <Link to="webdevelopment" className="desktop-sub-link">Web Development </Link>
                                <Link to="engineering&sustainability" className="desktop-sub-link">Engineering & Sustainability</Link>
                            </div>}
                    </div>
                    <div className=" child" onMouseEnter={()=>setLifestyleHover(true)} onMouseLeave={()=>setLifestyleHover(false)}>
                        <Link className="desktop-main-link" >LIFESTYLE</Link>
                        {lifestyleHover && 
                            <div className="children">
                                <Link to="business&technology" className="desktop-sub-link">Business & Technology </Link>
                                <Link to="technology" className="desktop-sub-link">Technology </Link>
                                <Link to="music&fashion" className="desktop-sub-link">Music & Fashion</Link>
                                <Link to="arts&lifestyle" className="desktop-sub-link">Arts & Lifestyle </Link>
                                <Link to="travel&books" className="desktop-sub-link">Travel & Books</Link>
                            </div>}
                    </div>

                    <div className="child" onMouseEnter={()=>setGalleryHover(true)} onMouseLeave={()=>setGalleryHover(false)}>
                        <Link className="desktop-main-link" >GALLERY</Link>
                        {galleryHover && 
                            <div className="children">
                                <Link to="photos" className="desktop-sub-link  photos-and-videos">Photos </Link>
                                <Link to="videos" className="desktop-sub-link  photos-and-videos">Videos</Link>
                            </div>}
                </div> 

                <h1><CiMenuBurger className='menu-close' /></h1>
            </div>  }
            </div>}
        </div>
    )
}