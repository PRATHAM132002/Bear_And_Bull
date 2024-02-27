import React from 'react';
import Image_1 from '../images/Featured_Image_1.png';
import Image_2 from '../images/Featured_Image_2.png';
import Image_3 from '../images/Featured_Image_3.png';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Footer from './Footer';


export default function Home() {
  return (
    <div>
      <header className="bg-dark text-white text-center py-5">
        <h1 className="display-4 animated fadeIn">Welcome to Bear and Bull</h1>
        <p className="lead animated fadeIn">Experience the thrill of stock trading with our advanced platform. Make informed decisions, track market trends, and execute trades with ease.</p>
      </header>

      <section className="container my-5">
        <h2 className="text-center mb-4">Key Features</h2>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card hover-card">
              <img src={Image_1} className="card-img-top" alt="Feature_Image" />
              <div className="card-body">
                <h3 className="card-title text-center">Real-time Market Data</h3>
                <p className="card-text text-center">Stay updated with real-time data to make quick and informed decisions.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card hover-card">
              <img src={Image_2} className="card-img-top" alt="Feature_Image" />
              <div className="card-body">
                <h3 className="card-title text-center">Intuitive Interface</h3>
                <p className="card-text text-center">An easy-to-use and intuitive interface for seamless trading experiences.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card hover-card">
              <img src={Image_3} className="card-img-top" alt="Feature_Image" />
              <div className="card-body">
                <h3 className="card-title text-center">Portfolio Management</h3>
                <p className="card-text text-center">Efficiently manage your portfolio and track your investments in one place.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-light-gray py-5">
        <div className="container text-center">
          <h2 className="mb-4">Ready to Get Started?</h2>
          <p className="lead">Sign up now and start your journey into the world of smart stock trading.</p>
          <Link to="/login" className="btn btn-primary btn-lg">Sign Up Now</Link>
        </div>
      </section>

      <section className="container my-5">
        <h2 className="text-center mb-4">Contact Us</h2>
        <div className="row">
          <div className="col-md-6 mx-auto">
            <form>
              <div className="form-group">
                <label for="name">Your Name</label>
                <input type="text" className="form-control" id="name" placeholder="Enter your name" />
              </div>
              <div className="form-group">
                <label for="email">Your Email</label>
                <input type="email" className="form-control" id="email" placeholder="Enter your email" />
              </div>
              <div className="form-group">
                <label for="message">Message</label>
                <textarea className="form-control" id="message" rows="4" placeholder="Enter your message"></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </section>

      <Footer></Footer>




    </div>
  )
}
