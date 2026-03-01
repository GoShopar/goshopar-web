import React from 'react';
import { useNavigate } from 'react-router-dom';

const SubscriptionPlans = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Subscription Plans</h1>
        <button style={styles.skipBtn} onClick={() => navigate('/payment-method')}>SKIP</button>
      </div>

      <div style={styles.card}>
        <div style={styles.cardContent}>
          <h2 style={styles.planName}>Starter</h2>
          <p style={styles.price}>$0 / month</p>
          <p style={styles.description}>deal for small vendors just getting started. Manage a few products and enjoy basic tools to begin selling confidently.</p>
          <button style={styles.statusBtnLight}>Subscribed</button>
        </div>
        <img src="/images/subscription1.png" alt="Starter Plan" style={styles.cardImage} />
      </div>

      <div style={styles.card}>
        <div style={styles.cardContent}>
          <h2 style={styles.planName}>Pro</h2>
          <p style={styles.price}>$29 / month</p>
          <p style={styles.description}>Designed for growing businesses. Get access to advanced features, more product uploads, and marketing tools to boost sales.</p>
          <button style={styles.actionBtnLight} onClick={() => navigate('/payment-method')}>Upgrade</button>
        </div>
        <img src="/images/subscription2.png" alt="Pro Plan" style={styles.cardImage} />
      </div>

      <div style={styles.card}>
        <div style={styles.cardContent}>
          <h2 style={styles.planName}>Growth</h2>
          <p style={styles.price}>$99 / month</p>
          <p style={styles.description}>Perfect for established vendors. Unlock unlimited features, detailed analytics, and full control to scale your business faster.</p>
          <button style={styles.actionBtnLight} onClick={() => navigate('/payment-method')}>Upgrade</button>
        </div>
        <img src="/images/subscription1.png" alt="Growth Plan" style={styles.cardImage} />
      </div>
    </div>
  );
};

const styles = {
  container: { backgroundColor: '#FAFAFA', minHeight: '100vh', padding: '20px', fontFamily: '"DM Sans", sans-serif', maxWidth: '600px', margin: '0 auto' },
  header: { display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', marginBottom: '30px' },
  title: { fontSize: '24px', margin: 0, fontWeight: 'bold' },
  skipBtn: { position: 'absolute', right: 0, background: 'none', border: 'none', fontWeight: 'bold', cursor: 'pointer', fontSize: '14px', fontFamily: '"DM Sans", sans-serif' },
  card: { display: 'flex', backgroundColor: '#FFF', borderRadius: '16px', padding: '20px', marginBottom: '20px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', gap: '15px' },
  cardContent: { flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' },
  planName: { fontSize: '20px', fontWeight: 'bold', margin: '0 0 5px 0' },
  price: { fontSize: '16px', color: '#61797D', margin: '0 0 10px 0' },
  description: { fontSize: '12px', color: '#666', marginBottom: '15px', lineHeight: '1.4' },
  statusBtnLight: { backgroundColor: '#F0F0F0', border: 'none', padding: '8px 16px', borderRadius: '8px', fontWeight: 'bold', color: '#333', fontFamily: '"DM Sans", sans-serif' },
  actionBtnLight: { backgroundColor: '#F0F0F0', border: 'none', padding: '8px 16px', borderRadius: '8px', fontWeight: 'bold', color: '#333', cursor: 'pointer', fontFamily: '"DM Sans", sans-serif' },
  cardImage: { width: '100px', height: '100px', borderRadius: '12px', objectFit: 'cover' }
};

export default SubscriptionPlans;