import React from 'react'
import "./navbar.css"
const Navbar = () => {
    return (
        <div className="navbar">
            <span className="logo">
                kcc Portal
            </span>
            <ul className="list">
                <li className="listItem">
                    <img src="" alt="" className="avatar" />
                </li>
                <li className="listItem">Chandan</li>
                <li className="listItem">Logout</li>
            </ul>
        </div>
    )
}

export default Navbar
