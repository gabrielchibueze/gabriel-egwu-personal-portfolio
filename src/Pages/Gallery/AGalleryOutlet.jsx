// import React from "react";
import { Link, Outlet } from 'react-router-dom'
import './gallery.css'
import { useState } from 'react'

export default function AGalleryOutlet() {
    const [currentIndex, setCurrentIndex] = useState(1)
    const menuItems = [
        {
            link: "photos",
            name: "Gabriel Photo Gallery"
        },
        {
            link: "videos",
            name: "Videos"
        },

    ]

    return (
        <div>
            <div className="gallery-outlet top-outlet">
                {menuItems.map((item, index) => {
                    return <Link onClick={() => setCurrentIndex(index + 1)} className={currentIndex === index + 1 ? "select-active" : null} key={item.link} to={item.link}>{item.name}</Link>
                })}

            </div>
            <Outlet />
        </div>
    )
}