import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export default function Footer() {
    return (
        <div>
            <footer className="bg-dark text-white py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 mb-4">
                            <h5>Contact Us</h5>
                            <p>Email: info@bearandbull.com</p>
                            <p>Phone: +1 (555) 123-4567</p>
                        </div>
                        <div className="col-md-4 mb-4">
                            <h5>Quick Links</h5>
                            <ul className="list-unstyled">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/overview">Overview</Link></li>
                                <li><Link to="/learn">Learn</Link></li>
                                <li><Link to="/news">Live News</Link></li>
                                <li><Link to="/about">About Us</Link></li>
                            </ul>
                        </div>
                        <div className="col-md-4 mb-4">
                            <h5>Follow Us</h5>
                            <a href="/" className="text-white me-3" target="_blank">
                                <i className="fab fa-facebook-f fa-lg"></i>
                            </a>
                            <a href="/" className="text-white me-3" target="_blank">
                                <i className="fab fa-twitter fa-lg"></i>
                            </a>
                            <a href="/" className="text-white me-3" target="_blank">
                                <i className="fab fa-linkedin-in fa-lg"></i>
                            </a>
                            <a href="/" className="text-white" target="_blank">
                                <i className="fab fa-instagram fa-lg"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="container mt-4">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <p>&copy; 2024 Bear and Bull. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
