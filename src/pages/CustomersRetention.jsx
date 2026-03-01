import React, { useState } from 'react';
import '../css/CustomersRetention.css';

const CustomersRetention = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCustomer, setSelectedCustomer] = useState({
    name: 'Amina Okora',
    email: 'Aminaokora123@gmail.com',
    lifetimeValue: 'NG80,206',
    lastActive: '2 days ago',
    customerSince: 'Jan 11, 2022',
    frequently: 'Medium',
    bought: 'Direct'
  });
  const [activeTab, setActiveTab] = useState('Overview');

  const customers = [
    { id: 1, name: 'Amina Okora', lastOrder: '2 days ago', orders: 12, ltv: 'NG80,297', tag: 'High-Value' },
    { id: 2, name: 'Amina Okora', lastOrder: '2 days ago', orders: 12, ltv: 'NG80,297', tag: 'High-Value' },
    { id: 3, name: 'Amina Okora', lastOrder: '2 days ago', orders: 12, ltv: 'NG80,297', tag: 'High-Value' },
    { id: 4, name: 'Amina Okora', lastOrder: '2 days ago', orders: 12, ltv: 'NG80,297', tag: 'High-Value' },
    { id: 5, name: 'Amina Okora', lastOrder: '2 days ago', orders: 12, ltv: 'NG80,297', tag: 'High-Value' },
    { id: 6, name: 'Amina Okora', lastOrder: '2 days ago', orders: 12, ltv: 'NG80,297', tag: 'High-Value' },
    { id: 7, name: 'Amina Okora', lastOrder: '2 days ago', orders: 12, ltv: 'NG80,297', tag: 'High-Value' },
    { id: 8, name: 'Amina Okora', lastOrder: '2 days ago', orders: 12, ltv: 'NG80,297', tag: 'High-Value' }
  ];

  return (
    <div className="customers-retention">
      <h1 className="page-title">Customers & Retention</h1>

      {/* Metrics Cards */}
      <div className="metrics-grid">
        <div className="metric-card">
          <div className="metric-label">Total Customers</div>
          <div className="metric-value">1,205</div>
          <div className="metric-change positive">+10%</div>
        </div>
        <div className="metric-card">
          <div className="metric-label">Repeat Customers Rate</div>
          <div className="metric-value">35%</div>
          <div className="metric-change positive">+10%</div>
        </div>
        <div className="metric-card">
          <div className="metric-label">Average Lifetime Value</div>
          <div className="metric-value">$145.80</div>
          <div className="metric-change positive">+10%</div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="action-buttons">
        <button className="action-btn">Create Coupon</button>
        <button className="action-btn">Start SMS Campaign</button>
        <button className="action-btn">Setup Automation</button>
      </div>

      {/* Main Content Area */}
      <div className="content-container">
        {/* Customer List Section */}
        <div className="customer-list-section">
          {/* Search and Filters */}
          <div className="search-controls">
            <div className="search-input-wrapper">
              <input
                type="text"
                placeholder="Search by name or email"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>
            <button className="filter-btn">
              <span className="icon">⚙</span> Filter
            </button>
            <button className="sort-btn">
              <span className="icon">↕</span> Sort
            </button>
          </div>

          {/* Customer Table */}
          <div className="customer-table">
            <table>
              <thead>
                <tr>
                  <th><input type="checkbox" /></th>
                  <th>Customer Name</th>
                  <th>Last Order</th>
                  <th>Order</th>
                  <th>LTV</th>
                  <th>Tags</th>
                </tr>
              </thead>
              <tbody>
                {customers.map((customer, index) => (
                  <tr 
                    key={customer.id} 
                    className={index === 0 ? 'selected' : ''}
                    onClick={() => setSelectedCustomer({
                      name: customer.name,
                      email: 'Aminaokora123@gmail.com',
                      lifetimeValue: customer.ltv,
                      lastActive: customer.lastOrder,
                      customerSince: 'Jan 11, 2022',
                      frequently: 'Medium',
                      bought: 'Direct'
                    })}
                  >
                    <td><input type="checkbox" /></td>
                    <td>{customer.name}</td>
                    <td>{customer.lastOrder}</td>
                    <td>{customer.orders}</td>
                    <td>{customer.ltv}</td>
                    <td><span className="tag high-value">{customer.tag}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Customer Detail Panel */}
        <div className="customer-detail-panel">
          {/* Customer Profile */}
          <div className="customer-profile">
            <div className="profile-avatar">
              <img src="https://via.placeholder.com/80" alt={selectedCustomer.name} />
            </div>
            <div className="profile-info">
              <h3>{selectedCustomer.name}</h3>
              <p>{selectedCustomer.email}</p>
            </div>
            <span className="tag high-value-small">High-Value</span>
          </div>

          {/* Tabs */}
          <div className="detail-tabs">
            <button 
              className={`tab ${activeTab === 'Overview' ? 'active' : ''}`}
              onClick={() => setActiveTab('Overview')}
            >
              Overview
            </button>
            <button 
              className={`tab ${activeTab === 'Order History' ? 'active' : ''}`}
              onClick={() => setActiveTab('Order History')}
            >
              Order History
            </button>
            <button 
              className={`tab ${activeTab === 'Notes' ? 'active' : ''}`}
              onClick={() => setActiveTab('Notes')}
            >
              Notes
            </button>
          </div>

          {/* Customer Snapshot */}
          <div className="customer-snapshot">
            <h4>Customers Snapshot</h4>
            <div className="snapshot-item">
              <span className="snapshot-label">Lifetime Value</span>
              <span className="snapshot-value">{selectedCustomer.lifetimeValue}</span>
            </div>
            <div className="snapshot-item">
              <span className="snapshot-label">Last Active</span>
              <span className="snapshot-value">{selectedCustomer.lastActive}</span>
            </div>
            <div className="snapshot-item">
              <span className="snapshot-label">Customer Since</span>
              <span className="snapshot-value">{selectedCustomer.customerSince}</span>
            </div>
          </div>

          {/* Behavioral Insight */}
          <div className="behavioral-insight">
            <h4>Behavioral Insight</h4>
            <div className="insight-item">
              <span className="insight-label">Frequently</span>
              <span className="insight-value">{selectedCustomer.frequently}</span>
            </div>
            <div className="insight-item">
              <span className="insight-label">Bought</span>
              <span className="insight-value">{selectedCustomer.bought}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="customer-actions">
            <button className="send-email-btn">
              <span className="icon">✉</span> Send Email
            </button>
            <button className="call-customer-btn">
              <span className="icon">📞</span> Call Customers
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomersRetention;
