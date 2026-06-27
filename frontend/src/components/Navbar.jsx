import {
    HiMenu,
    HiBell,
    HiSearch
} from "react-icons/hi";
import React from "react";
function Navbar() {

    return (

        <div className="navbar">

            <div className="navbar-left">

                <div className="menu-btn">
                    <HiMenu />
                </div>

                <div className="search-container">

                    <HiSearch className="search-icon" />

                    <input
                        type="text"
                        placeholder="Search startups, agents, reports..."
                        className="search-input"
                    />

                </div>

            </div>

            <div className="navbar-right">

                <div className="notification-btn">
                    <HiBell />
                    <span className="notification-dot"></span>
                </div>

                <button className="upgrade-btn">
                    Upgrade Pro
                </button>

                <button className="logout-nav-btn">
                    Logout
                </button>

            </div>

        </div>
    );
}

export default Navbar;