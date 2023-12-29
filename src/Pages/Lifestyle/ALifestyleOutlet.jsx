import React from "react";
import { Link, Outlet} from 'react-router-dom'

export default function ALifestyleOutlet() {
    return (
        <div>
            <div className="lifestyle-outlet top-outlet">
                <Link to=".">Art and Lifestyle</Link>
                <Link to="business&finance">Business and Finance</Link>
                <Link to="music&fashion">Music and Fashion</Link>
                <Link to="technology">Technology</Link>
                <Link to="travel&books">Travel and Books</Link>
            </div>
            <Outlet />
        </div>
    )
}