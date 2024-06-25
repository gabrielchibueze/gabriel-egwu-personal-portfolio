import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaLinkedinIn, FaFacebookF, FaGithub } from "react-icons/fa";
import { GoTriangleDown } from "react-icons/go"
import { FaSquareXTwitter } from "react-icons/fa6"
import { CiMenuBurger } from "react-icons/ci"
import { MdCloseFullscreen } from "react-icons/md"
import Logo from '/gabriellogo.png'

export default function Header() {
    const [mobileMode, setMobileMode] = useState(null);
    const [miniDesktop, setMiniDesktop] = useState(false)
    const [desktopView, setDesktopView] = useState(null);
    const [menuClick, setMenuClick] = useState(false)
    const [projectHover, setProjectHover] = useState(false)
    const [galleryHover, setGalleryHover] = useState(false)
    const [lifestyleHover, setLifestyleHover] = useState(false)
    const [aboutHover, setAboutHover] = useState(false)
    useEffect(() => {
        function resizeWindowFunction() {
            if (window.outerWidth < 500) {
                setMobileMode(true)
            }
            if (window.outerWidth >= 500 && window.outerWidth <= 1000) {
                setMobileMode(false)
                setMiniDesktop(true)
            }
            if (window.outerWidth > 1000) {
                setDesktopView(true)
            }
        }

        window.addEventListener("load", resizeWindowFunction);
        window.addEventListener("resize", resizeWindowFunction);
        return () => window.removeEventListener("resize", resizeWindowFunction)

        // function adjustScreenSize() {
        //     if (window.outerWidth < 500) {
        //         setMobileMode(true)
        //     }
        //     else if (window.outerWidth >= 500 && window.outerWidth < 800) {
        //         setMobileMode(false)
        //         setMiniDesktop(true)
        //     } else (
        //         setMiniDesktop(false)
        //     )
        // }

        // window.addEventListener("resize", adjustScreenSize)
        // return () => window.removeEventListener("resize", adjustScreenSize)
    }, [])

    const mobileMenuItems = [
        {
            link: "about",
            name: "ABOUT GABRIEL",
        },
        {
            link: "projects/webdevelopment",
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
            link: "library&publications",
            name: "LIBRARY AND PUBLICATIONS"
        },
        {
            link: "businessprinciple&ethics",
            name: "BUSINESS PRINCIPLE AND ETHICS",
        },
        {
            link: "gallery/videos",
            name: "VIDEOS"
        },
        {
            link: "gallery/photos",
            name: "GABRIEL GALLERY"
        },

    ]
    const mobileMenu = mobileMenuItems.map(menu => {
        return <Link key={menu.link} to={menu.link}>{menu.name}</Link>
    })

    const desktopMenuItems = [

        {
            link: "projects/futureprojects",
            name: "FUTURE PROJECTS",
        },

        {
            link: "lifestyle",
            name: "INTEREST & LIFESTYLE",
        },
        {
            link: "news",
            name: "NEWS",
        },
        {
            link: "library&publications",
            name: "LIBRARY AND PUBLICATIONS"
        },
        {
            link: "gallery/photos",
            name: "GABRIEL GALLERY"
        },
        {
            link: "gallery/videos",
            name: "GABRIEL VIDEOS"
        },
        {
            link: "businessprinciple&ethics",
            name: "BUSINESS PRINCIPLE AND ETHICS",
        },
        {
            link: "contactme",
            name: "CONTACT ME"
        },
        {
            link: "hireme",
            name: "HIRE ME"
        },

    ]
    const desktopMenu = desktopMenuItems.map(menu => {
        return <Link key={menu.link} to={menu.link}>{menu.name}</Link>
    })
    return (
        <div className="header">

            {mobileMode &&
                <div className='mobile-mode' onClick={() => setMenuClick(prevValue => !prevValue)}>
                    <div className="open-close-menu-btn">
                        <Link to="/">
                            <img src={Logo} className="header-logo" />
                        </Link>
                        {menuClick ? <MdCloseFullscreen className='menu-close' /> : <CiMenuBurger className='menu-open' />}
                    </div>
                    {menuClick && <div className='header-menu'>
                        {mobileMenu}
                        <div className="mobile-menu-links">
                            <p>Follow me on:</p>
                            <Link to="https://linkedin.com/in/gabriel-egwu" target="_blank"> <FaLinkedinIn /> Linkedin </Link>
                            <Link to="https://twitter.com/ChibuezeEgwu" target="_blank"> <FaSquareXTwitter /> Twitter </Link>
                            <Link to="https://www.facebook.com/egwu.gabrielchibueze" target="_blank"> <FaFacebookF /> Facebook</Link>
                            <Link to="https://github.com/gabrielchibueze" target="_blank"> <FaGithub /> GitHub</Link>
                        </div>
                    </div>}
                </div>
            }


            <div className='desktop-mode'>
                <Link to="/">
                    <img src={Logo} className="header-logo" />
                </Link>

                {miniDesktop &&

                    <div className='minidesktop-mode'>
                        <div className="open-close-menu-btn">
                            <Link to="/">
                                <img src={Logo} className="header-logo2" />
                            </Link>
                            {menuClick ? <MdCloseFullscreen className='menu-close' onClick={() => setMenuClick(prevValue => !prevValue)} /> : <CiMenuBurger className='menu-open' onClick={() => setMenuClick(prevValue => !prevValue)} />}
                        </div>
                        {menuClick && <div className='header-menu' onClick={() => setMenuClick(prevValue => !prevValue)}>
                            {mobileMenu}
                            <div className="mobile-menu-links">
                                <p>Follow me on:</p>
                                <Link to="https://linkedin.com/in/gabriel-egwu" target="_blank"> <FaLinkedinIn /> Linkedin </Link>
                                <Link to="https://twitter.com/ChibuezeEgwu" target="_blank"> <FaSquareXTwitter /> Twitter </Link>
                                <Link to="https://www.facebook.com/egwu.gabrielchibueze" target="_blank"> <FaFacebookF /> Facebook</Link>
                                <Link to="https://github.com/gabrielchibueze" target="_blank"> <FaGithub /> GitHub</Link>
                            </div>
                        </div>
                        }
                    </div>
                }

                {
                    desktopView &&
                    <div className="desktop-links">
                        <div className=" child" onMouseEnter={() => setAboutHover(true)} onMouseLeave={() => setAboutHover(false)}>
                            <div className="dropicon">
                                <Link className="desktop-main-link" >ABOUT</Link>
                                <p className="icon"><GoTriangleDown /></p>
                            </div>
                            {aboutHover &&
                                <div className="children">
                                    <Link to="about" className="desktop-sub-link">About Gabriel </Link>
                                    <Link to="about/education" className="desktop-sub-link">Education </Link>
                                    <Link to="about/business&investment" className="desktop-sub-link">Business & Investments</Link>
                                    <Link to="about/philantropy" className="desktop-sub-link">Philantropy</Link>
                                </div>}
                        </div>

                        <div className="desktop-project-child child" onMouseEnter={() => setProjectHover(true)} onMouseLeave={() => setProjectHover(false)}>
                            <div className="dropicon">
                                <Link className="desktop-main-link" >PROJECTS</Link>
                                <p className="icon"><GoTriangleDown /></p>
                            </div>
                            {projectHover &&
                                <div className="children">
                                    <Link to="projects/webdevelopment" className="desktop-sub-link">Web Development </Link>
                                    <Link to="projects/engineering" className="desktop-sub-link">Engineering & Sustainability</Link>
                                    <Link to="projects/futureprojects" className="desktop-sub-link">Future Projects</Link>
                                </div>}
                        </div>
                        <div className=" child" onMouseEnter={() => setLifestyleHover(true)} onMouseLeave={() => setLifestyleHover(false)}>
                            <div className="dropicon">
                                <Link className="desktop-main-link" >LIFESTYLE</Link>
                                <p className="icon"><GoTriangleDown /></p>
                            </div>
                            {lifestyleHover &&
                                <div className="children">
                                    <Link to="lifestyle" className="desktop-sub-link">Arts & Lifestyle </Link>
                                    <Link to="lifestyle/business&finance" className="desktop-sub-link">Business & Finance </Link>
                                    <Link to="lifestyle/technology" className="desktop-sub-link">Technology </Link>
                                    <Link to="lifestyle/music&fashion" className="desktop-sub-link">Music & Fashion</Link>
                                    <Link to="lifestyle/travel&books" className="desktop-sub-link">Travel & Books</Link>
                                </div>}
                        </div>

                        <div className="child" onMouseEnter={() => setGalleryHover(true)} onMouseLeave={() => setGalleryHover(false)}>
                            <div className="dropicon">
                                <Link className="desktop-main-link" >GALLERY</Link>
                                <p className="icon"><GoTriangleDown /></p>
                            </div>
                            {galleryHover &&
                                <div className="children">
                                    <Link to="gallery/photos" className="desktop-sub-link  photos-and-videos">Photos </Link>
                                    <Link to="gallery/videos" className="desktop-sub-link  photos-and-videos">Videos</Link>
                                </div>}
                        </div>
                        <div className="desktop-open-close-menu-btn" onClick={() => setMenuClick(prevValue => !prevValue)}>
                            <CiMenuBurger className='menu-open' />
                        </div>

                        {menuClick && <div className='desktop-mode-main' onClick={() => setMenuClick(prevValue => !prevValue)}>
                            <div className="desktop-open-close-menu-btn">
                                <MdCloseFullscreen className='menu-close desktop-close' />
                            </div>
                            <div className='header-menu-desktop'>
                                {desktopMenu}
                                <div className="desktop-menu-links">
                                    <p>Follow me on:</p>
                                    <div className="desktop-menu-social-links">
                                        <Link to="https://github.com/gabrielchibueze" target="_blank"> <FaGithub /> GitHub</Link>
                                        <Link to="https://www.facebook.com/egwu.gabrielchibueze" target="_blank"> <FaFacebookF /> Facebook</Link>
                                        <Link to="https://linkedin.com/in/gabriel-egwu" target="_blank"> <FaLinkedinIn /> Linkedin </Link>
                                        <Link to="https://twitter.com/ChibuezeEgwu" target="_blank"> <FaSquareXTwitter /> Twitter </Link>
                                    </div>
                                </div>
                            </div>
                        </div>}

                    </div>
                }
            </div>
        </div>
    )
}