import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function MainLayout ({children}){
    return (
        <div className="main-layout">
            <Header />
            <div className="content-outlet">
                <Outlet className="outlet"/>
            </div>
            <Footer />
        </div>
    )
}
