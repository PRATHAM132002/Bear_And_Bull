import React from 'react'
import logo from '../images/bnb_logo2.png'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import "../App.css"

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand" href="/">
                    <img src={logo} alt="Logo" width="150" height="30" className="d-inline-block align-text-top" />
                </a>
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/overview">Overview</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/learn">Learn</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/news">Live News</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/about">About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>



    )
}
