import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function MainLayout ({children}){
    return (
        <div className="main-layout">
            <Header />
            <div className="sidebar-outlet">
                <Sidebar />
                <Outlet className="outlet"/>
            </div>
            <Footer />
        </div>
    )
}
