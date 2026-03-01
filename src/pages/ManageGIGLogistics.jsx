import React, { useState } from 'react';
import '../css/ManageGIGLogistics.css';
import { Pencil, Trash2, KeyRound, PlusCircle, RefreshCcw } from 'lucide-react';

const ManageGIGLogistics = () => {
  const [standardDelivery, setStandardDelivery] = useState(false);
  const [expressSameDay, setExpressSameDay] = useState(true);

  const [pricingRules] = useState([
    {
      id: 1,
      ruleName: 'Lagos Metro Special',
      condition: 'Zone: Lagos Metro',
      overridePrice: 'N923,000',
      status: 'Active'
    }
  ]);

  const handleSaveSettings = (e) => {
    e.preventDefault();
    console.log('Saving delivery settings...');
  };

  const handleDisconnect = () => {
    console.log('Disconnecting GIG Logistics...');
  };

  const handleAddOverride = () => {
    console.log('Adding new override...');
  };

  const handleReauthenticate = () => {
    console.log('Re-authenticating...');
  };

  const handleRefreshConnection = () => {
    console.log('Refreshing connection...');
  };

  return (
    <div className="manage-gig-logistics">
      <div className="gig-header">
        <div className="navigation-arrows">
          <button className="nav-arrow">←</button>
          <button className="nav-arrow">→</button>
        </div>
        <div className="gig-title-section">
          <div className="gig-logo-box">GIG</div>
          <div className="gig-title-text">
            <h1>Manage GIG Logistics</h1>
            <p>Configure your integration with GIG Logistics</p>
          </div>
        </div>
      </div>

      <div className="gig-content">
        {/* Available Service Section */}
        <div className="service-section">
          <h2>Available Service</h2>
          <p className="section-description">Select the delivery option you want to offer to your customers.</p>

          <div className="service-options">
            <div className="service-option">
              <div className="service-info">
                <h3>Standard Delivery</h3>
                <p>Delivered within 3-5 business days</p>
              </div>
              <label className="toggle-switch">
                <input
                  type="checkbox"
                  checked={standardDelivery}
                  onChange={(e) => setStandardDelivery(e.target.checked)}
                />
                <span className="toggle-slider"></span>
              </label>
            </div>

            <div className="service-option">
              <div className="service-info">
                <h3>Express Same Day</h3>
                <p>Guaranteed delivery within that day</p>
              </div>
              <label className="toggle-switch">
                <input
                  type="checkbox"
                  checked={expressSameDay}
                  onChange={(e) => setExpressSameDay(e.target.checked)}
                />
                <span className="toggle-slider"></span>
              </label>
            </div>
          </div>
        </div>

        {/* Custom Pricing Rules Section */}
        <div className="pricing-rules-section">
          <div className="pricing-rules-header">
            <div>
              <h2>Custom pricing Rules</h2>
              <p className="section-description">Override default partner pricing for specific delivery zone or product categories</p>
            </div>
            <button className="add-override-btn" onClick={handleAddOverride}>
              <span className="plus-icon"><PlusCircle size={14}/></span> Add New Override
            </button>
          </div>

          <table className="pricing-rules-table">
            <thead>
              <tr>
                <th>Rule Name</th>
                <th>Condition</th>
                <th>Override Price</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {pricingRules.map((rule) => (
                <tr key={rule.id}>
                  <td>{rule.ruleName}</td>
                  <td>{rule.condition}</td>
                  <td>{rule.overridePrice}</td>
                  <td>
                    <span className="status-badge active">{rule.status}</span>
                  </td>
                  <td>
                    <div className="action-buttons">
                      <button className="edit-btn"><Pencil size={14}/></button>
                      <button className="delete-btn"><Trash2 size={14}/></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Connection Details Section */}
        <div className="connection-details-section">
          <h2>Connection Details</h2>
          <p className="section-description">Manage the technical Integration with your partner account</p>

          <div className="connection-info">
            <div className="connection-row">
              <div className="connection-label">
                <div className="icon-circle green">✓</div>
                <span>Connection Status</span>
              </div>
              <span className="connection-value success">Successfully Connected</span>
            </div>

            <div className="connection-row">
              <div className="connection-label">
                <div className="icon-circle green"><KeyRound size={14}/></div>
                <span>API Key</span>
              </div>
              <span className="connection-value">PK LIVE......................</span>
            </div>

            <div className="connection-row">
              <div className="connection-label">
                <div className="icon-circle green"><RefreshCcw size={14}/></div>
                <span>Last Synced</span>
              </div>
              <span className="connection-value">2 minutes ago</span>
            </div>
          </div>

          <div className="connection-buttons">
            <button className="reauth-btn" onClick={handleReauthenticate}>Re-authenticate</button>
            <button className="refresh-btn" onClick={handleRefreshConnection}>Refresh Connection</button>
          </div>
        </div>

        {/* Discount Integration Section */}
        <div className="disconnect-section">
          <h2>Discount Integration</h2>
          <p>Disconnecting will permanently remove GIG Logistics as a shipping option from your checkout. This action can not be undone</p>
          <button className="disconnect-btn" onClick={handleDisconnect}>Disconnect GIG Logistics</button>
        </div>

        {/* Footer Buttons */}
        <div className="footer-buttons">
          <button className="cancel-btn">Cancel</button>
          <button className="save-btn" onClick={handleSaveSettings}>Save Delivery Settings</button>
        </div>
      </div>
    </div>
  );
};

export default ManageGIGLogistics;
