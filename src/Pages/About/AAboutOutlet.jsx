import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function AAboutOutlet() {
    const [currentIndex , setCurrentIndex] = useState(1)
    const menuItems = [
        {
            link: ".",
            name: "About Gabriel"
        },
        {
            link: "education",
            name: "Education"
        },
        {
            link: "business&investment",
            name: "Business and Investment"
        },  
        {
            link: "philantropy",
            name: "Philantropy"
        }
    ]

    return (
        <div className="about-me__page">
            <h1>GABRIEL EGWU</h1>
            <div className="about-outlet top-outlet">
                {menuItems.map((item, index)=>{
                    return <Link onClick={()=>setCurrentIndex(index+1)} className={currentIndex === index+1 ? "select-active" : null} key={item.link} to={item.link}>{item.name}</Link>
                })}
            </div>
            <Outlet />
        </div>
    )
}