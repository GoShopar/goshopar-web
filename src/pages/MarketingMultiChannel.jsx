import React from 'react';
import '../css/MarketingMultiChannel.css';
import Header from '../components/Header';

const MarketingMultiChannel = () => {
  const socialPlatforms = [
    {
      id: 1,
      name: 'Instagram',
      description: 'Sell directly on Instagram',
      icon: '📷',
      color: '#E4405F',
      connected: false
    },
    {
      id: 2,
      name: 'WhatsApp Business',
      description: 'Sell directly on Whatsapp',
      icon: '💬',
      color: '#25D366',
      connected: false
    },
    {
      id: 3,
      name: 'TikTok',
      description: 'Sell directly on TikTok',
      icon: '🎵',
      color: '#000000',
      connected: false
    },
    {
      id: 4,
      name: 'Facebook',
      description: 'Sell directly on Facebook',
      icon: 'f',
      color: '#1877F2',
      connected: false
    }
  ];

  return (
    <div className="marketing-multi-channel">
      <Header />
      <div className="marketing-header">
        <h1>Marketing & Multi-Channel</h1>
        <p className="marketing-subtitle">
          Promote your products and reach wider audience with our integrated marketing tools
        </p>
      </div>

      <div className="marketing-content">
        {/* Left Column */}
        <div className="marketing-left-column">
          {/* Launch Campaign Section */}
          <div className="marketing-card campaign-card">
            <div className="card-text">
              <h2>Launch a Promotional Campaign</h2>
              <p>Create targeted ads with AI assistance to boost your sales</p>
            </div>
            <div className="card-action">
              <button className="create-campaign-btn">
                <span className="btn-icon">➕</span>
                Create Campaign
              </button>
            </div>
          </div>

          {/* Engage Customers Section */}
          <div className="marketing-card engage-card">
            <div className="card-text">
              <h2>Engage Your Customers</h2>
              <p>Send targeted announcements and offers via Email or SMS</p>
            </div>
            <div className="card-action">
              <button className="new-broadcast-btn">
                <span className="btn-icon">✉</span>
                New Broadcast
              </button>
            </div>
          </div>
        </div>

        {/* Right Column - Push Catalog */}
        <div className="marketing-right-column">
          <div className="push-catalog-card">
            <h2>Push your Catalog Everwhere</h2>
            <div className="platform-list">
              {socialPlatforms.map((platform) => (
                <div key={platform.id} className="platform-item">
                  <div className="platform-info">
                    <div 
                      className="platform-icon" 
                      style={{ backgroundColor: platform.color }}
                    >
                      {platform.icon}
                    </div>
                    <div className="platform-details">
                      <h3>{platform.name}</h3>
                      <p>{platform.description}</p>
                    </div>
                  </div>
                  <button className="connect-btn">
                    Connect
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketingMultiChannel;
