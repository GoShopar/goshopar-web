import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, X, Search } from 'lucide-react';
import '../css/LandingHeader.css';

const LandingHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const searchRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (scrolled) searchRef.current?.focus();
  }, [scrolled]);

  return (
    <>
      <header className={`landing-header${scrolled ? ' scrolled' : ''}`}>
        <div className="landing-header-container">

          {/* Hamburger — first child so it sits left of logo on mobile */}
          {!scrolled && (
            <button
              className={`landing-menu-toggle ${menuOpen ? 'is-open' : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={20} /> : <Menu size={22} />}
            </button>
          )}

          {/* Logo */}
          <Link to="/landing" className="landing-logo">
            <div className="landing-logo-icon">
              <ShoppingCart size={32} strokeWidth={1.8} />
            </div>
            <div className="landing-logo-text">
              <span className="landing-logo-name">GoShopar</span>
              <span className="landing-logo-tagline">...a better way to sell</span>
            </div>
          </Link>

          {/* Centre: nav links at top, search bar on scroll */}
          {scrolled ? (
            <div className="landing-search-bar">
              <input
                ref={searchRef}
                type="text"
                placeholder="Search"
                className="landing-search-input"
              />
              <Search size={17} className="landing-search-icon" />
            </div>
          ) : (
            <nav className={`landing-nav ${menuOpen ? 'open' : ''}`}>
              <a href="#how-it-works" onClick={() => setMenuOpen(false)}>How it works</a>
              <a href="#highlights" onClick={() => setMenuOpen(false)}>Highlights</a>
              <a href="#about" onClick={() => setMenuOpen(false)}>About Us</a>
              <a href="#faqs" onClick={() => setMenuOpen(false)}>FAQs</a>
              <a href="#contact" onClick={() => setMenuOpen(false)}>Contact Us</a>
              <Link
                to="/signup"
                className="landing-nav-cta"
                onClick={() => setMenuOpen(false)}
              >
                Join the wait list
              </Link>
            </nav>
          )}

          {/* Right — Get started only */}
          <div className="landing-header-right">
            <Link to="/login" className="landing-get-started-btn">Get started</Link>
          </div>

        </div>
      </header>
      <div className="landing-header-divider" />
    </>
  );
};

export default LandingHeader;
