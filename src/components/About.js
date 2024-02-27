import React from 'react';
import image from '../images/bnb_logo.png';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Footer from './Footer';

export default function About() {
  return (
    <div>
      <section className="container my-5">
        <h2 className="text-center mb-4">About Us</h2>
        <div className="row">
          <div className="col-md-6">
            <p className="text-justify">
              Welcome to Bear and Bull, a leading stock trading platform that strives to redefine the way people engage with the financial markets.
            </p>
            <p className="text-justify">
              Our journey began with a vision to create a platform that caters to both seasoned investors and those just stepping into the world of stock trading. We believe that financial empowerment is for everyone, and through innovation and education, we aim to make stock trading accessible to all.
            </p>
            <p className="text-justify">
              What sets us apart is our commitment to providing real-time market data, intuitive tools, and comprehensive educational resources. Whether you're a day trader looking for the latest market trends or a long-term investor planning for the future, Bear and Bull has the features you need to succeed.
            </p>
          </div>
          <div className="col-md-6">
            <img src={image} alt="About_Us_Image" className="img-fluid rounded about-us-image" />
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-12">
            <h4>Our Values</h4>
            <ul className="text-justify">
              <li><strong>Transparency:</strong> We believe in openness and transparency in all our interactions.</li>
              <li><strong>Innovation:</strong> We continuously strive to bring cutting-edge technology to our platform for an enhanced user experience.</li>
              <li><strong>Education:</strong> We are committed to providing educational resources to help our users make informed decisions.</li>
              <li><strong>Customer Focus:</strong> Our users are at the center of everything we do, and we prioritize their needs and satisfaction.</li>
            </ul>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-12">
            <h4>Join us on the journey</h4>
            <p className="text-justify">
              Whether you are a seasoned trader or just starting, we invite you to join us on this exciting journey. Explore the world of financial markets, stay informed, and trade with confidence at Bear and Bull.
            </p>
            <p className="text-justify">
              Ready to get started? <Link to="/login">Sign up now</Link> and experience a new level of stock trading.
            </p>
          </div>
        </div>
      </section>

      <Footer></Footer>

    </div>
  )
}
