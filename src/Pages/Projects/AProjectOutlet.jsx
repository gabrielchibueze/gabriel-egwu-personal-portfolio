import { useState } from "react";
import { Link, Outlet } from 'react-router-dom'
import "./Aprojects.css"
export default function AProjectOutlet() {
    const [currentIndex, setCurrentIndex] = useState(1)
    const menuItems = [
        {
            link: "webdevelopment",
            name: "My Web Development Projects"
        },
        {
            link: "engineering",
            name: "My Engineering Projects"
        },
        {
            link: "futureprojects",
            name: "Upcoming Projects"
        },
    ]

    return (
        <div>
            <div className="project-outlet top-outlet">
                {menuItems.map((item, index) => {
                    return <Link onClick={() => setCurrentIndex(index + 1)} className={currentIndex === index + 1 ? "select-active" : null} key={item.link} to={item.link}>{item.name}</Link>
                })}
            </div>
            <Outlet />
        </div>
    )
}