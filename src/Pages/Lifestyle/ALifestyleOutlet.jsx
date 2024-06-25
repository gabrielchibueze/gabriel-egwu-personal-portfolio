import { useState } from "react";
import { Link, Outlet } from 'react-router-dom'

export default function ALifestyleOutlet() {
    const [currentIndex, setCurrentIndex] = useState(1)
    const menuItems = [
        {
            link: ".",
            name: "Art and Lifestyle"
        },
        {
            link: "business&finance",
            name: "Business and Finance"
        },
        {
            link: "music&fashion",
            name: "Music and Fashion"
        },
        {
            link: "technology",
            name: "Technology"
        },
        {
            link: "travel&books",
            name: "Travel and Books"
        }
    ]


    return (
        <div>
            <div className="lifestyle-outlet top-outlet">
                {menuItems.map((item, index) => {
                    return <Link onClick={() => setCurrentIndex(index + 1)} className={currentIndex === index + 1 ? "select-active" : null} key={item.link} to={item.link}>{item.name}</Link>

                })}
            </div>
            <Outlet />
        </div>
    )
}