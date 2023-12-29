import React from "react";
import { Link, Outlet} from 'react-router-dom'

export default function AAboutOutlet() {
    return (
        <div>
            <div className="about-outlet top-outlet">
                <Link to=".">About Gabriel</Link>
                <Link to="education">Education</Link>
                <Link to="business&investment">Business and Investment</Link>
                <Link to="philantropy">Philantropy</Link>
            </div>
            <Outlet />
        </div>
    )
}