import React from 'react';
import '../css/OrderInformation.css';

const OrderInformation = () => {
  const orderData = {
    orderId: '#23456',
    date: '12-10-24',
    customer: 'Dave Grove',
    total: '$340',
    status: 'Pending'
  };

  const buyerInfo = {
    name: 'Tolu Damilaye',
    email: 'toludamileye@gmail.com',
    phone: '+2348896556',
    address: 'Yaba, lagos, fava street'
  };

  const paymentStatus = {
    status: 'Paid',
    method: 'Master Card',
    amount: '$45678'
  };

  const deliveryTracking = [
    { label: 'Order Placed', date: '2023-09-15', completed: true },
    { label: 'Shipped', date: '2023-09-16', completed: true },
    { label: 'Delivered', date: '2023-09-18', completed: true }
  ];

  const escrowStatus = 'Funds held in Escrow';
  const paymentOnDelivery = 'Pending';

  return (
    <div className="order-information-page">
      <div className="order-navigation">
        <button className="order-nav-arrow">←</button>
        <button className="order-nav-arrow">→</button>
      </div>

      <h1 className="order-info-title">Order Information</h1>

      {/* Order Details */}
      <div className="info-section">
        <h2 className="section-title">Order Details</h2>
        <div className="order-details-grid">
          <div className="detail-item">
            <span className="detail-label">Order ID</span>
            <span className="detail-value">{orderData.orderId}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Date</span>
            <span className="detail-value">{orderData.date}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Customers</span>
            <span className="detail-value">{orderData.customer}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Total</span>
            <span className="detail-value">{orderData.total}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Status</span>
            <span className="detail-value">{orderData.status}</span>
          </div>
        </div>
      </div>

      {/* Buyer Information */}
      <div className="info-section">
        <h2 className="section-title">Buyer Information</h2>
        <div className="buyer-info-grid">
          <div className="buyer-detail">
            <span className="buyer-label">Name</span>
            <span className="buyer-value">{buyerInfo.name}</span>
          </div>
          <div className="buyer-detail">
            <span className="buyer-label">Email</span>
            <span className="buyer-value">{buyerInfo.email}</span>
          </div>
          <div className="buyer-detail">
            <span className="buyer-label">Phone</span>
            <span className="buyer-value">{buyerInfo.phone}</span>
          </div>
          <div className="buyer-detail">
            <span className="buyer-label">Address</span>
            <span className="buyer-value">{buyerInfo.address}</span>
          </div>
        </div>
      </div>

      {/* Payment Status */}
      <div className="info-section">
        <h2 className="section-title">Payment Status</h2>
        <div className="payment-status-grid">
          <div className="payment-detail">
            <span className="payment-label">Status</span>
            <span className="payment-value">{paymentStatus.status}</span>
          </div>
          <div className="payment-detail">
            <span className="payment-label">Method</span>
            <span className="payment-value">{paymentStatus.method}</span>
          </div>
          <div className="payment-detail">
            <span className="payment-label">Amount</span>
            <span className="payment-value">{paymentStatus.amount}</span>
          </div>
        </div>
      </div>

      {/* Delivery Tracking */}
      <div className="info-section">
        <h2 className="section-title">Delivery Tracking</h2>
        <div className="delivery-tracking">
          {deliveryTracking.map((item, index) => (
            <div key={index} className="tracking-item">
              <div className="tracking-icon">
                <div className={`icon-circle ${item.completed ? 'completed' : ''}`}>
                  {item.completed && '✓'}
                </div>
                {index < deliveryTracking.length - 1 && <div className="tracking-line"></div>}
              </div>
              <div className="tracking-content">
                <span className="tracking-label">{item.label}</span>
                <span className="tracking-date">{item.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Escrow Status */}
      <div className="info-section">
        <h2 className="section-title">Escrow Status</h2>
        <div className="escrow-status">
          <span className="escrow-label">Status</span>
          <span className="escrow-value">{escrowStatus}</span>
        </div>
      </div>

      {/* Payment on Delivery */}
      <div className="info-section">
        <h2 className="section-title">Payment on Delivery</h2>
        <div className="payment-delivery">
          <span className="payment-delivery-label">Status</span>
          <span className="payment-delivery-value">{paymentOnDelivery}</span>
        </div>
      </div>
    </div>
  );
};

export default OrderInformation;
