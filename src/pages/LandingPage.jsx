import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BarChart2, CheckCircle, ChevronDown } from 'lucide-react';

const FAQS = [
  {
    q: 'What is GoShopar?',
    a: 'GoShopar is an all-in-one e-commerce platform built for African entrepreneurs. It lets you create a branded online store, collect payments securely, and connect with trusted local delivery partners — all in one place.',
  },
  {
    q: 'Is GoShopar a marketplace?',
    a: 'No. GoShopar gives you your own branded store. You own your customers, control your pricing, and build your brand — we just give you the tools to do it well.',
  },
  {
    q: 'When will GoShopar launch?',
    a: 'We are currently in early access. Join the waitlist to be among the first to get notified when we launch in your region and receive exclusive founder benefits.',
  },
  {
    q: 'Who is GoShopar for?',
    a: 'GoShopar is for anyone selling online in Africa — fashion brands, skincare businesses, gadget stores, food vendors, and more. If you sell a product, GoShopar is built for you.',
  },
  {
    q: 'Why GoShopar?',
    a: 'GoShopar is built specifically for Africa\'s reality — local payment methods, local delivery partners, and tools designed for how African businesses actually operate and grow.',
  },
];
import LandingHeader from '../components/LandingHeader';
import LandingFooter from '../components/LandingFooter';
import { FaApple } from 'react-icons/fa';

const GooglePlayIcon = ({ size = 26 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M.09.26C.04.31 0 .4 0 .52v22.96c0 .12.04.21.09.26L12.05 12 .09.26z" fill="#4285F4" />
    <path d="M16.08 8.08L1.22.04C.99-.08.74-.02.56.1L12.05 12l4.03-3.92z" fill="#34A853" />
    <path d="M16.08 15.92L12.05 12 .56 23.9c.18.12.43.18.66.06l14.86-8.04z" fill="#EA4335" />
    <path d="M22.56 10.22l-2.94-1.69L16 12l3.62 3.47 2.94-1.69c.84-.48.84-2.08 0-2.56z" fill="#FBBC04" />
  </svg>
);
import '../css/LandingPage.css';

const LandingPage = () => {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="landing-page">
      <LandingHeader />

      <main className="landing-hero">
        <div className="hero-container">
          {/* Left: Text content */}
          <div className="hero-left">
            <h1 className="hero-title">
              <span className="hero-title-teal">Build your store </span>
              <span className="hero-title-dark">in<br />a few minutes</span>
            </h1>
            <p className="hero-subtitle">
              Build a gorgeous online store, collect payments confidently,
              and find reliable delivery partners, all in one place built for
              Africa's reality.
            </p>
            <div className="hero-ctas">
              <Link to="/signup" className="btn-waitlist">Join the wait list</Link>
              <a href="#how-it-works" className="btn-how-it-works">See how it works</a>
            </div>
          </div>

          {/* Right: Image with floating badges */}
          <div className="hero-right">
            <div className="hero-image-wrapper">
              <div className="hero-image-bg">
                <img
                  src="/cart.jpg"
                  alt="GoShopar ecommerce platform"
                  className="hero-image"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              </div>

              {/* Badge: Converts 17% */}
              <div className="hero-badge badge-top-left">
                <div className="badge-icon-wrap badge-icon-chart">
                  <BarChart2 size={22} color="#22c55e" />
                </div>
                <span className="badge-text">
                  Converts 17%<br />better on sales
                </span>
              </div>

              {/* Badge: AI */}
              <div className="hero-badge badge-bottom-left">
                <div className="badge-icon-wrap badge-icon-ai">
                  <span className="badge-ai-label">AI</span>
                </div>
                <span className="badge-text">
                  Get more done<br />with AI
                </span>
              </div>

              {/* Badge: Free, fast, flexible */}
              <div className="hero-badge badge-bottom-right">
                <div className="badge-icon-wrap badge-icon-check">
                  <CheckCircle size={22} color="#ffffff" fill="#22c55e" />
                </div>
                <span className="badge-text">
                  Free, fast, flexible<br />and reliable
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* ── Features Section ─────────────────────────── */}
      <section className="features-section" id="how-it-works">
        <div className="features-container">
          {[
            {
              img: '/aitool.jpg',
              alt: 'Person building an online store',
              heading: 'Build your store in minutes with AI tools',
              body: 'Create a stunning online store without a single line of code.',
            },
            {
              img: '/payment.jpg',
              alt: 'Contactless payment transaction',
              heading: 'Collect payments confidently',
              body: 'With integrated payment gateways and escrow protection that builds trust.',
            },
            {
              img: '/delivery.jpg',
              alt: 'Customer and delivery partner',
              heading: 'Find trusted delivery partners',
              body: 'Connect instantly with reliable agents — no more endless calls or lost orders.',
            },
          ].map(({ img, alt, heading, body }) => (
            <div className="feature-card" key={heading}>
              <div className="feature-card-img-wrap">
                <img src={img} alt={alt} className="feature-card-img" />
              </div>
              <div className="feature-card-body">
                <h3 className="feature-card-heading">{heading}</h3>
                <p className="feature-card-text">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA Banner ────────────────────────────────── */}
      <section className="cta-section">
        <div className="cta-card">
          <div className="cta-image-panel">
            <img
              src="/selling.jpg"
              alt="Entrepreneur using GoShopar on mobile"
              className="cta-image"
            />
          </div>
          <div className="cta-content-panel">
            <h2 className="cta-heading">
              Be first to experience the future of selling online
            </h2>
            <p className="cta-body">
              Join 1,000+ entrepreneurs waiting to sell boldly with Kaihma. Get
              early access, product updates, and exclusive founder insights.
            </p>
            <a href="/signup" className="cta-btn">Join the wait list</a>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ───────────────────────────────── */}
      <section className="faq-section" id="faqs">
        <div className="faq-container">
          <h2 className="faq-title">FAQs</h2>
          <div className="faq-list">
            {FAQS.map((item, i) => (
              <div key={i} className={`faq-item ${openFaq === i ? 'open' : ''}`}>
                <button
                  className="faq-question"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                >
                  <span>{item.q}</span>
                  <ChevronDown size={20} className="faq-chevron" />
                </button>
                {openFaq === i && (
                  <p className="faq-answer">{item.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About Section ─────────────────────────────── */}
      <div className="about-divider" />
      <section className="about-section">
        <div className="about-container">
          <h2 className="about-heading">
            GoShopar makes selling online fun, easy, and trustworthy.
          </h2>
          <p className="about-body">
            GoShopar is an all-in-one platform that helps African entrepreneurs build trusted online
            stores, collect payments, and find reliable delivery partners. GoShopar empowers anyone
            selling online, from fashion and skincare brands to gadget stores and logistics
            companies. to build your own online store, your brand, your customers, your control.
          </p>
        </div>
      </section>


      {/* ── App Download Section ───────────────────────── */}
      <section className="app-section">
        <div className="app-container">
          <h2 className="app-heading">Get the best services with our app</h2>
          <p className="app-body">
            Be among the first to get our app when it launches and enjoy exciting free tools to
            scale-up your business. Everything you need to grow your business with high conversion
            rate, all in one place.
          </p>
          <div className="app-badges">
            <a href="#" className="store-badge" aria-label="Get it on Google Play">
              <GooglePlayIcon size={26} />
              <div className="store-badge-text">
                <span className="store-badge-sub">GET IT ON</span>
                <span className="store-badge-name">Google Play</span>
              </div>
            </a>
            <a href="#" className="store-badge" aria-label="Download on the App Store">
              <FaApple size={28} />
              <div className="store-badge-text">
                <span className="store-badge-sub">Download on the</span>
                <span className="store-badge-name">App Store</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      <LandingFooter />
    </div>
  );
};

export default LandingPage;
