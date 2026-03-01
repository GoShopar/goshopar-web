import React, { useState } from 'react';
import '../css/OrdersManagement.css';
import Header from '../components/Header';

const OrdersManagement = () => {
  const [activeTab, setActiveTab] = useState('pending');

  const ordersData = {
    pending: [
      { id: '#23456', date: '2023-12-4', customer: 'Dave James', total: '$450', products: '02', status: 'Pending' },
      { id: '#23456', date: '2023-12-4', customer: 'Dave James', total: '$450', products: '02', status: 'Pending' },
      { id: '#23456', date: '2023-12-4', customer: 'Dave James', total: '$450', products: '02', status: 'Pending' },
      { id: '#23456', date: '2023-12-4', customer: 'Dave James', total: '$450', products: '02', status: 'Pending' },
      { id: '#23456', date: '2023-12-4', customer: 'Dave James', total: '$450', products: '02', status: 'Pending' },
      { id: '#23456', date: '2023-12-4', customer: 'Dave James', total: '$450', products: '02', status: 'Pending' },
      { id: '#23456', date: '2023-12-4', customer: 'Dave James', total: '$450', products: '02', status: 'Pending' },
      { id: '#23456', date: '2023-12-4', customer: 'Dave James', total: '$450', products: '02', status: 'Pending' },
      { id: '#23456', date: '2023-12-4', customer: 'Dave James', total: '$450', products: '02', status: 'Pending' }
    ],
    shipped: [],
    delivered: [],
    cancelled: []
  };

  const currentOrders = ordersData[activeTab];

  return (
    <div className="orders-management-page">
      <Header />
      <div className="orders-navigation">
        <button className="nav-arrow-btn">←</button>
        <button className="nav-arrow-btn">→</button>
      </div>

      <h1 className="orders-title">Orders & Checkout Management</h1>

      <div className="orders-tabs">
        <button 
          className={`tab-button ${activeTab === 'pending' ? 'active' : ''}`}
          onClick={() => setActiveTab('pending')}
        >
          Pending
        </button>
        <button 
          className={`tab-button ${activeTab === 'shipped' ? 'active' : ''}`}
          onClick={() => setActiveTab('shipped')}
        >
          Shipped
        </button>
        <button 
          className={`tab-button ${activeTab === 'delivered' ? 'active' : ''}`}
          onClick={() => setActiveTab('delivered')}
        >
          Delivered
        </button>
        <button 
          className={`tab-button ${activeTab === 'cancelled' ? 'active' : ''}`}
          onClick={() => setActiveTab('cancelled')}
        >
          Cancelled
        </button>
      </div>

      <div className="orders-table-container">
        <table className="orders-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Date</th>
              <th>Customer</th>
              <th>Total</th>
              <th>Products</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {currentOrders.length > 0 ? (
              currentOrders.map((order, index) => (
                <tr key={index}>
                  <td>{order.id}</td>
                  <td>{order.date}</td>
                  <td>{order.customer}</td>
                  <td>{order.total}</td>
                  <td>{order.products}</td>
                  <td>
                    <span className={`status-badge ${order.status.toLowerCase()}`}>
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="no-orders">No orders found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrdersManagement;
