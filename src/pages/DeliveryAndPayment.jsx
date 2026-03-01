import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DeliveryAndPayment = () => {
  const navigate = useNavigate();
  const [payOnDelivery, setPayOnDelivery] = useState(true);
  const [shipPartners, setShipPartners] = useState(false);

  return (
    <div style={styles.container}>
      <div style={styles.progressBar}>
        <div style={{...styles.progressSegment, backgroundColor: '#E0E0E0'}} />
        <div style={{...styles.progressSegment, backgroundColor: '#000'}} />
        <div style={styles.progressSegment} />
        <div style={styles.progressSegment} />
      </div>

      <h1 style={styles.title}>How do you want to get paid?</h1>

      <div style={styles.optionBox}>
        <span style={styles.optionText}>Offer pay on Delivery</span>
        <div style={payOnDelivery ? styles.toggleActive : styles.toggleInactive} onClick={() => setPayOnDelivery(!payOnDelivery)}>
          <div style={payOnDelivery ? styles.toggleKnobActive : styles.toggleKnobInactive} />
        </div>
      </div>

      <div style={styles.optionBox}>
        <span style={styles.optionText}>Ship with GoShopar partners</span>
        <div style={shipPartners ? styles.toggleActive : styles.toggleInactive} onClick={() => setShipPartners(!shipPartners)}>
          <div style={shipPartners ? styles.toggleKnobActive : styles.toggleKnobInactive} />
        </div>
      </div>

      <button style={styles.continueBtn} onClick={() => navigate('/upload-logo')}>Continue</button>
    </div>
  );
};

const styles = {
  container: { backgroundColor: '#FAFAFA', minHeight: '100vh', padding: '20px', fontFamily: '"DM Sans", sans-serif', maxWidth: '600px', margin: '0 auto', display: 'flex', flexDirection: 'column' },
  progressBar: { display: 'flex', gap: '8px', marginBottom: '30px' },
  progressSegment: { flex: 1, height: '4px', backgroundColor: '#E0E0E0', borderRadius: '2px' },
  title: { fontSize: '28px', margin: '0 0 30px 0', fontWeight: 'bold' },
  optionBox: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px', backgroundColor: '#FFF', border: '2px solid #000', borderRadius: '8px', marginBottom: '15px' },
  optionText: { fontSize: '16px', fontWeight: 'bold' },
  toggleInactive: { width: '44px', height: '24px', backgroundColor: '#E0E0E0', borderRadius: '12px', position: 'relative', cursor: 'pointer', transition: '0.3s' },
  toggleActive: { width: '44px', height: '24px', backgroundColor: '#000', borderRadius: '12px', position: 'relative', cursor: 'pointer', transition: '0.3s' },
  toggleKnobInactive: { width: '20px', height: '20px', backgroundColor: '#FFF', borderRadius: '50%', position: 'absolute', top: '2px', left: '2px', transition: '0.3s' },
  toggleKnobActive: { width: '20px', height: '20px', backgroundColor: '#FFF', borderRadius: '50%', position: 'absolute', top: '2px', left: '22px', transition: '0.3s' },
  continueBtn: { backgroundColor: '#2C3E40', color: '#FFF', border: 'none', padding: '16px', borderRadius: '8px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer', marginTop: 'auto', fontFamily: '"DM Sans", sans-serif' }
};

export default DeliveryAndPayment;