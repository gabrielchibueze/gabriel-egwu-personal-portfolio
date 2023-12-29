import React from "react";
import { Link, Outlet} from 'react-router-dom'

export default function AProjectOutlet() {
    return (
        <div>
            <div className="project-outlet top-outlet">
                <Link to="webdevelopment">My Web Development Projects</Link>
                <Link to="engineering">My Engineering Projects</Link>
                <Link to="futureprojects">Upcoming Projects</Link>
            </div>
            <Outlet />
        </div>
    )
}