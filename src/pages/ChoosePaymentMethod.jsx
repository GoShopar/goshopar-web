import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

const ChoosePaymentMethod = () => {
  const navigate = useNavigate();
  const [selectedMethod, setSelectedMethod] = useState('Paystack');
  const [autoRenew, setAutoRenew] = useState(true);

  const methods = ['Paystack', 'Flutterwave', 'Card', 'Bank'];

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <FiArrowLeft size={24} onClick={() => navigate(-1)} style={styles.backIcon} />
        <h1 style={styles.title}>Payment Method</h1>
      </div>

      <h2 style={styles.sectionTitle}>Choose Payment Method</h2>
      
      <div style={styles.radioGroup}>
        {methods.map((method) => (
          <div key={method} style={styles.radioOption} onClick={() => setSelectedMethod(method)}>
            <span style={styles.radioText}>{method}</span>
            <div style={selectedMethod === method ? styles.radioInnerActive : styles.radioInnerInactive}>
              {selectedMethod === method && <div style={styles.radioDot} />}
            </div>
          </div>
        ))}
      </div>

      <h2 style={styles.sectionTitle}>Auto-renew subscription</h2>
      <div style={styles.toggleRow}>
        <span style={styles.toggleText}>Auto-renew subscription</span>
        <div style={autoRenew ? styles.toggleActive : styles.toggleInactive} onClick={() => setAutoRenew(!autoRenew)}>
          <div style={autoRenew ? styles.toggleKnobActive : styles.toggleKnobInactive} />
        </div>
      </div>

      <button style={styles.saveBtn} onClick={() => navigate('/setup-store')}>Save</button>
    </div>
  );
};

const styles = {
  container: { backgroundColor: '#FAFAFA', minHeight: '100vh', padding: '20px', fontFamily: '"DM Sans", sans-serif', maxWidth: '600px', margin: '0 auto', display: 'flex', flexDirection: 'column' },
  header: { display: 'flex', alignItems: 'center', marginBottom: '30px' },
  backIcon: { cursor: 'pointer', marginRight: '15px' },
  title: { fontSize: '24px', margin: 0, fontWeight: 'bold' },
  sectionTitle: { fontSize: '18px', fontWeight: 'bold', margin: '20px 0 15px 0' },
  radioGroup: { display: 'flex', flexDirection: 'column', gap: '10px' },
  radioOption: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px', backgroundColor: '#FFF', borderRadius: '8px', border: '1px solid #EAEAEA', cursor: 'pointer', boxShadow: '0 2px 5px rgba(0,0,0,0.02)' },
  radioText: { fontSize: '16px' },
  radioInnerInactive: { width: '20px', height: '20px', borderRadius: '50%', border: '2px solid #CCC' },
  radioInnerActive: { width: '20px', height: '20px', borderRadius: '50%', border: '2px solid #000', display: 'flex', justifyContent: 'center', alignItems: 'center' },
  radioDot: { width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#000' },
  toggleRow: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' },
  toggleText: { fontSize: '16px' },
  toggleInactive: { width: '44px', height: '24px', backgroundColor: '#E0E0E0', borderRadius: '12px', position: 'relative', cursor: 'pointer', transition: '0.3s' },
  toggleActive: { width: '44px', height: '24px', backgroundColor: '#000', borderRadius: '12px', position: 'relative', cursor: 'pointer', transition: '0.3s' },
  toggleKnobInactive: { width: '20px', height: '20px', backgroundColor: '#FFF', borderRadius: '50%', position: 'absolute', top: '2px', left: '2px', transition: '0.3s' },
  toggleKnobActive: { width: '20px', height: '20px', backgroundColor: '#FFF', borderRadius: '50%', position: 'absolute', top: '2px', left: '22px', transition: '0.3s' },
  saveBtn: { backgroundColor: '#2C3E40', color: '#FFF', border: 'none', padding: '16px', borderRadius: '8px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer', marginTop: 'auto', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', fontFamily: '"DM Sans", sans-serif' }
};

export default ChoosePaymentMethod;