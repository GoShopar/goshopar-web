import React, { useState } from "react";
import "../css/DeliveryLogistics.css";

const DeliveryLogistics = () => {
  const [expandedSections, setExpandedSections] = useState({
    shippingZone: false,
    deliveryPreferences: false,
    inStorePickup: false
  });

  const [processingTime, setProcessingTime] = useState('1-2 business days');
  const [deliveryTime, setDeliveryTime] = useState('3-5 business days');
  const [fulfillmentType, setFulfillmentType] = useState('automated');
  const [packagingInstructions, setPackagingInstructions] = useState('Fragile, handle with care');
  const [notifications, setNotifications] = useState({
    orderShipped: true,
    outForDelivery: true,
    delivered: false
  });
  const [deliveryExpectation, setDeliveryExpectation] = useState('e.g No deliveries on public holidays');
  
  const [enableInStorePickup, setEnableInStorePickup] = useState(false);
  const [enableLocalPickup, setEnableLocalPickup] = useState(false);
  const [locations] = useState([
    {
      id: 1,
      name: 'Lekki Phase 1 - Ajah',
      address: 'Office laro street, lekki lagos rail way',
      operatingHours: 'Mon - Sat: 9:00AM - 7:00PM',
      contact: 'Adebayo Chukwuma (08188641235)'
    }
  ]);

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const logisticsPartners = [
    {
      id: 1,
      name: "GIG Logistics",
      description: "Reliable nationwide delivery across nigeria.",
      connected: true
    },
    {
      id: 2,
      name: "DHL Express",
      description: "Fast and international and express shipping service.",
      connected: false
    },
    {
      id: 3,
      name: "DHL Express",
      description: "Fast and international and express shipping service.",
      connected: false
    },
    {
      id: 4,
      name: "DHL Express",
      description: "Fast and international and express shipping service.",
      connected: false
    }
  ];

  return (
    <div className="delivery-logistics-page">
      <div className="delivery-header">
        <h1 className="delivery-title">Delivery & Logistics</h1>
        <p className="delivery-subtitle">Configure how you will ship orders to your customers</p>
      </div>

      {/* Logistics Partners Box */}
      <div className="logistics-box">
        <div className="logistics-section">
          <h2 className="section-heading">Logistics Partners</h2>
          <p className="section-description">
            Connect with integrated partners for automated shipping rate and label printing
          </p>

          <div className="partners-grid">
            {logisticsPartners.map((partner) => (
              <div key={partner.id} className="partner-card">
                <div className="partner-info">
                  <div className="partner-logo">GIG</div>
                  <div className="partner-details">
                    <h3 className="partner-name">{partner.name}</h3>
                    <p className="partner-description">{partner.description}</p>
                  </div>
                </div>
                <div className="partner-footer">
                  <div className={`status ${partner.connected ? 'connected' : 'not-connected'}`}>
                    <span className="status-dot"></span>
                    <span className="status-text">
                      {partner.connected ? 'Connected' : 'Not Connected'}
                    </span>
                  </div>
                  <button className={`action-btn ${partner.connected ? 'manage' : 'connect'}`}>
                    {partner.connected ? 'Manage' : 'Connect'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Manual & Custom Options */}
        <div className="manual-section">
          <h2 className="section-heading">Manual & Custom options</h2>
          <p className="section-description">
            For vendors who manage their own delivery fleet or use non integrated service.
          </p>

          <div className="custom-option-card">
            <div className="custom-option-content">
              <div className="custom-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17L12 22L22 17" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="custom-option-text">
                <h3 className="custom-option-title">Add custom local riders</h3>
                <p className="custom-option-description">Manage your own delivery riders and zones.</p>
              </div>
            </div>
            <button className="setup-btn">Setup</button>
          </div>
        </div>
      </div>

      {/* Collapsible Sections */}
      <div className="collapsible-sections">
        <div className="collapsible-item" onClick={() => toggleSection('shippingZone')}>
          <h2 className="collapsible-title">Shipping Zone & Rates</h2>
          <svg 
            className={`chevron ${expandedSections.shippingZone ? 'expanded' : ''}`}
            width="20" 
            height="20" 
            viewBox="0 0 20 20" 
            fill="none"
          >
            <path d="M5 7.5L10 12.5L15 7.5" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        {expandedSections.shippingZone && (
          <div className="collapsible-content">
            {/* Content for Shipping Zone & Rates */}
          </div>
        )}

        <div className="collapsible-item" onClick={() => toggleSection('deliveryPreferences')}>
          <h2 className="collapsible-title">Delivery Preferences</h2>
          <svg 
            className={`chevron ${expandedSections.deliveryPreferences ? 'expanded' : ''}`}
            width="20" 
            height="20" 
            viewBox="0 0 20 20" 
            fill="none"
          >
            <path d="M5 7.5L10 12.5L15 7.5" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        {expandedSections.deliveryPreferences && (
          <div className="collapsible-content">
            <div className="delivery-preferences-content">
              <div className="time-fields-row">
                <div className="field-group">
                  <label className="field-label">Estimated processing Time</label>
                  <p className="field-hint">Time to prepare an order for shipping</p>
                  <select 
                    className="field-select"
                    value={processingTime}
                    onChange={(e) => setProcessingTime(e.target.value)}
                  >
                    <option value="1-2 business days">1-2 business days</option>
                    <option value="3-5 business days">3-5 business days</option>
                    <option value="5-7 business days">5-7 business days</option>
                  </select>
                </div>

                <div className="field-group">
                  <label className="field-label">Estimated Delivery Time</label>
                  <p className="field-hint">Time for the order to reach the customer</p>
                  <select 
                    className="field-select"
                    value={deliveryTime}
                    onChange={(e) => setDeliveryTime(e.target.value)}
                  >
                    <option value="3-5 business days">3-5 business days</option>
                    <option value="5-7 business days">5-7 business days</option>
                    <option value="7-10 business days">7-10 business days</option>
                  </select>
                </div>
              </div>

              <div className="field-group">
                <label className="field-label">Order Fulfillment Process</label>
                <div className="radio-options">
                  <label className="radio-option">
                    <input
                      type="radio"
                      name="fulfillment"
                      value="automated"
                      checked={fulfillmentType === 'automated'}
                      onChange={(e) => setFulfillmentType(e.target.value)}
                    />
                    <div className="radio-content">
                      <span className="radio-title">Automated Fulfillment</span>
                      <span className="radio-description">Automatically send orders to your logistics partners</span>
                    </div>
                  </label>

                  <label className="radio-option">
                    <input
                      type="radio"
                      name="fulfillment"
                      value="manual"
                      checked={fulfillmentType === 'manual'}
                      onChange={(e) => setFulfillmentType(e.target.value)}
                    />
                    <div className="radio-content">
                      <span className="radio-title">Manual Approval</span>
                      <span className="radio-description">Manually review and approve each order before fulfillment</span>
                    </div>
                  </label>
                </div>
              </div>

              <div className="field-group">
                <label className="field-label">Packaging Handling Instructions</label>
                <p className="field-hint">Special Instructions for logistics partners ( eg ..., "Fragile, handle with care").</p>
                <textarea
                  className="field-textarea"
                  value={packagingInstructions}
                  onChange={(e) => setPackagingInstructions(e.target.value)}
                  rows="3"
                />
              </div>

              <div className="field-group">
                <label className="field-label">Delivery Notifications</label>
                <div className="checkbox-options">
                  <label className="checkbox-option">
                    <input
                      type="checkbox"
                      checked={notifications.orderShipped}
                      onChange={(e) => setNotifications({...notifications, orderShipped: e.target.checked})}
                    />
                    <div className="checkbox-content">
                      <span className="checkbox-title">Order Shipped</span>
                      <span className="checkbox-description">Notify customer when their order fix on its way</span>
                    </div>
                  </label>

                  <label className="checkbox-option">
                    <input
                      type="checkbox"
                      checked={notifications.outForDelivery}
                      onChange={(e) => setNotifications({...notifications, outForDelivery: e.target.checked})}
                    />
                    <div className="checkbox-content">
                      <span className="checkbox-title">Out of Delivery</span>
                      <span className="checkbox-description">Notify customer when the package is close</span>
                    </div>
                  </label>

                  <label className="checkbox-option">
                    <input
                      type="checkbox"
                      checked={notifications.delivered}
                      onChange={(e) => setNotifications({...notifications, delivered: e.target.checked})}
                    />
                    <div className="checkbox-content">
                      <span className="checkbox-title">Out of Delivery</span>
                      <span className="checkbox-description">Notify customer when the package is close</span>
                    </div>
                  </label>
                </div>
              </div>

              <div className="field-group">
                <label className="field-label">Delivery Expectation</label>
                <p className="field-hint">Define rules for specific situations , e.g ... no weekend deliveries</p>
                <textarea
                  className="field-textarea"
                  value={deliveryExpectation}
                  onChange={(e) => setDeliveryExpectation(e.target.value)}
                  rows="2"
                />
              </div>
            </div>
          </div>
        )}

        <div className="collapsible-item" onClick={() => toggleSection('inStorePickup')}>
          <h2 className="collapsible-title">In store & Local pick up</h2>
          <svg 
            className={`chevron ${expandedSections.inStorePickup ? 'expanded' : ''}`}
            width="20" 
            height="20" 
            viewBox="0 0 20 20" 
            fill="none"
          >
            <path d="M5 7.5L10 12.5L15 7.5" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        {expandedSections.inStorePickup && (
          <div className="collapsible-content">
            <div className="pickup-content">
              <div className="pickup-toggles">
                <div className="pickup-toggle-item">
                  <div className="pickup-toggle-info">
                    <h3 className="pickup-toggle-title">Enable in store pick up</h3>
                    <p className="pickup-toggle-description">Customers can pick up deliveries from your physical store</p>
                  </div>
                  <label className="toggle-switch">
                    <input
                      type="checkbox"
                      checked={enableInStorePickup}
                      onChange={(e) => setEnableInStorePickup(e.target.checked)}
                    />
                    <span className="toggle-slider"></span>
                  </label>
                </div>

                <div className="pickup-toggle-item">
                  <div className="pickup-toggle-info">
                    <h3 className="pickup-toggle-title">Enable Local pick up</h3>
                    <p className="pickup-toggle-description">Offer pick up from other locations, like warehouse.</p>
                  </div>
                  <label className="toggle-switch">
                    <input
                      type="checkbox"
                      checked={enableLocalPickup}
                      onChange={(e) => setEnableLocalPickup(e.target.checked)}
                    />
                    <span className="toggle-slider"></span>
                  </label>
                </div>
              </div>

              <div className="pickup-locations-section">
                <div className="pickup-locations-header">
                  <h3 className="pickup-section-title">Pick up Location</h3>
                  <button className="add-location-btn">Add Location</button>
                </div>

                {locations.map((location) => (
                  <div key={location.id} className="location-card">
                    <div className="location-header">
                      <h4 className="location-name">{location.name}</h4>
                      <div className="location-actions">
                        <button className="location-edit-btn">Edit</button>
                        <button className="location-delete-btn">Delete</button>
                      </div>
                    </div>
                    <p className="location-address">{location.address}</p>
                    <div className="location-details">
                      <div className="location-detail">
                        <span className="detail-label">Operating Hours</span>
                        <span className="detail-value">{location.operatingHours}</span>
                      </div>
                      <div className="location-detail">
                        <span className="detail-label">Contact Person</span>
                        <span className="detail-value">{location.contact}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pickup-preferences-section">
                <h3 className="pickup-section-title">Pick up Preferences</h3>
                <div className="preference-item">
                  <h4 className="preference-title">Require customer contact for pickup</h4>
                  <p className="preference-description">Ask for phone number or email at checkout for pickup coordinations</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer Buttons */}
      <div className="delivery-footer-buttons">
        <button className="cancel-footer-btn">Cancel</button>
        <button className="save-footer-btn">Save Delivery Settings</button>
      </div>
    </div>
  );
};

export default DeliveryLogistics;
