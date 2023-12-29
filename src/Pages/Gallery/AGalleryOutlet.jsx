import React from "react";
import { Link, Outlet} from 'react-router-dom'
import './gallery.css'

export default function AGalleryOutlet() {
    return (
        <div>
            <div className="gallery-outlet top-outlet">
                <Link to="." end>Gabriel Photo Gallery</Link>
                <Link to="vidoes">Videos</Link>
            </div>
            <Outlet />
        </div>
    )
}