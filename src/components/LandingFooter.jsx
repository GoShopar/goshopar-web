import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { FaXTwitter, FaLinkedinIn, FaInstagram, FaFacebook } from 'react-icons/fa6';
import '../css/LandingFooter.css';

const LandingFooter = () => (
  <footer className="lf-footer">
    <div className="lf-main">
      <div className="lf-container">

        {/* Brand */}
        <div className="lf-brand">
          <Link to="/landing" className="lf-logo">
            <ShoppingCart size={28} strokeWidth={1.8} />
            <div className="lf-logo-text">
              <span className="lf-logo-name">GoShopar</span>
              <span className="lf-logo-tag">...a better way to sell</span>
            </div>
          </Link>
        </div>

        {/* Nav */}
        <div className="lf-col">
          <a href="#how-it-works">How it works</a>
          <a href="#highlights">Highlights</a>
          <a href="#about">About Us</a>
          <a href="#faqs">FAQs</a>
        </div>

        {/* Contact */}
        <div className="lf-col">
          <a href="mailto:hello@goshopar.com">Email Us</a>
          <a href="tel:+2340000000000">Call Us</a>
          <a href="sms:+2340000000000">Send SMS</a>
          <a href="https://wa.me/2340000000000" target="_blank" rel="noreferrer">WhatsApp</a>
        </div>

        {/* Social */}
        <div className="lf-col lf-social-col">
          <span className="lf-social-label">Follow Us:</span>
          <div className="lf-socials">
            <a href="#" aria-label="X (Twitter)"><FaXTwitter size={20} /></a>
            <a href="#" aria-label="LinkedIn"><FaLinkedinIn size={20} /></a>
            <a href="#" aria-label="Instagram"><FaInstagram size={20} /></a>
            <a href="#" aria-label="Facebook"><FaFacebook size={20} /></a>
          </div>
        </div>

      </div>
    </div>

    <div className="lf-divider" />

    <div className="lf-bottom">
      <div className="lf-bottom-inner">
        <span>&#169; 2026 GoShopar Ltd.</span>
        <div className="lf-legal">
          <a href="#">Terms of service</a>
          <a href="#">Privacy policy</a>
        </div>
      </div>
    </div>
  </footer>
);

export default LandingFooter;
