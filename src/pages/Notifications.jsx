import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiShoppingBag, FiShield, FiBox, FiCreditCard } from 'react-icons/fi';

const Notifications = () => {
  const navigate = useNavigate();

  const newNotifications = [
    { id: 1, type: 'order', title: 'New Order Received', desc: 'Order #2347UYR8 for Handbag leather has been placed.', time: 'JUST NOW', icon: <FiShoppingBag />, color: '#DCFCE7', iconColor: '#16A34A' },
    { id: 2, type: 'escrow', title: 'Payment in Escrow', desc: 'NG5,980 for Order #675HHGF8 is now secured in escrow. Prepare for shipping.', time: '12 mins ago', icon: <FiShield />, color: '#DBEAFE', iconColor: '#2563EB' },
  ];

  const earlierNotifications = [
    { id: 3, type: 'stock', title: 'Low Stock Alert', desc: 'Only 2 units left for Leather Handbag (large). Consider restocking soon.', time: '2 hours ago', icon: <FiBox />, color: '#FFEDD5', iconColor: '#EA580C' },
    { id: 4, type: 'withdrawal', title: 'Withdrawal Successful', desc: 'Your Withdraw of NG30,786.00 has been processed to your bank.', time: '2 hours ago', icon: <FiCreditCard />, color: '#DCFCE7', iconColor: '#16A34A' },
    { id: 5, type: 'stock', title: 'Low Stock Alert', desc: 'Only 2 units left for Leather Handbag (large). Consider restocking soon.', time: '2 hours ago', icon: <FiBox />, color: '#FFEDD5', iconColor: '#EA580C' },
  ];

  const NotificationCard = ({ item }) => (
    <div style={styles.card}>
      <div style={{ ...styles.iconWrapper, backgroundColor: item.color, color: item.iconColor }}>
        {item.icon}
      </div>
      <div style={styles.textWrapper}>
        <h4 style={styles.cardTitle}>{item.title}</h4>
        <p style={styles.cardDesc}>{item.desc}</p>
        <span style={styles.cardTime}>{item.time}</span>
      </div>
    </div>
  );

  return (
    <div style={styles.page}>
      <div style={styles.header}>
        <button onClick={() => navigate(-1)} style={styles.backButton}>
          <FiArrowLeft size={24} />
        </button>
        <h2 style={styles.headerTitle}>Notification</h2>
      </div>

      <div style={styles.content}>
        <h3 style={styles.sectionTitle}>NEW</h3>
        {newNotifications.map(item => <NotificationCard key={item.id} item={item} />)}

        <h3 style={styles.sectionTitle}>EARLIER</h3>
        {earlierNotifications.map(item => <NotificationCard key={item.id} item={item} />)}
      </div>
    </div>
  );
};

const styles = {
  page: {
    backgroundColor: '#FAFAFA',
    minHeight: '100vh',
    fontFamily: '"DM Sans", sans-serif',
    maxWidth: '768px',
    margin: '0 auto',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#FAFAFA',
    position: 'sticky',
    top: 0,
    zIndex: 10,
  },
  backButton: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: 0,
    marginRight: '20px',
    display: 'flex',
  },
  headerTitle: {
    margin: 0,
    fontSize: '20px',
    fontWeight: '700',
  },
  content: {
    padding: '0 20px 20px 20px',
  },
  sectionTitle: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#666',
    margin: '24px 0 12px 0',
    letterSpacing: '0.5px',
  },
  card: {
    display: 'flex',
    backgroundColor: '#fff',
    padding: '16px',
    borderRadius: '12px',
    marginBottom: '12px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
  },
  iconWrapper: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '16px',
    flexShrink: 0,
    fontSize: '18px',
  },
  textWrapper: {
    display: 'flex',
    flexDirection: 'column',
  },
  cardTitle: {
    margin: '0 0 4px 0',
    fontSize: '15px',
    fontWeight: '600',
    color: '#111',
  },
  cardDesc: {
    margin: '0 0 8px 0',
    fontSize: '13px',
    color: '#666',
    lineHeight: '1.4',
  },
  cardTime: {
    fontSize: '10px',
    color: '#999',
    textTransform: 'uppercase',
    fontWeight: '600',
  }
};

export default Notifications;