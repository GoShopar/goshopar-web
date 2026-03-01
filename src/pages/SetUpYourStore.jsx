import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SetUpYourStore = () => {
  const navigate = useNavigate();
  const [sellerType, setSellerType] = useState('individual');

  return (
    <div style={styles.container}>
      <div style={styles.progressBar}>
        <div style={{...styles.progressSegment, backgroundColor: '#000'}} />
        <div style={styles.progressSegment} />
        <div style={styles.progressSegment} />
        <div style={styles.progressSegment} />
      </div>

      <h1 style={styles.title}>Let's build your dream store</h1>
      <p style={styles.subtitle}>Tell us a bit about your business to get started</p>

      <div style={styles.inputGroup}>
        <label style={styles.label}>Store Name</label>
        <input style={styles.input} placeholder="e.g. Winner's Boutique" />
      </div>

      <div style={styles.inputGroup}>
        <label style={styles.label}>Where are you located</label>
        <input style={styles.input} placeholder="Start typing your city..." />
      </div>

      <label style={styles.label}>Seller Type</label>
      <div style={styles.radioContainer} onClick={() => setSellerType('individual')}>
        <div style={sellerType === 'individual' ? styles.radioActive : styles.radioInactive}>
           {sellerType === 'individual' && <div style={styles.radioDot} />}
        </div>
        <span>Individual: for sole proprietors</span>
      </div>
      
      <div style={styles.radioContainer} onClick={() => setSellerType('business')}>
        <div style={sellerType === 'business' ? styles.radioActive : styles.radioInactive}>
           {sellerType === 'business' && <div style={styles.radioDot} />}
        </div>
        <span>Business: I have a registered business</span>
      </div>

      <button style={styles.continueBtn} onClick={() => navigate('/delivery-payment')}>Continue</button>
    </div>
  );
};

const styles = {
  container: { backgroundColor: '#FAFAFA', minHeight: '100vh', padding: '20px', fontFamily: '"DM Sans", sans-serif', maxWidth: '600px', margin: '0 auto', display: 'flex', flexDirection: 'column' },
  progressBar: { display: 'flex', gap: '8px', marginBottom: '30px' },
  progressSegment: { flex: 1, height: '4px', backgroundColor: '#E0E0E0', borderRadius: '2px' },
  title: { fontSize: '28px', margin: '0 0 10px 0', fontWeight: 'bold' },
  subtitle: { fontSize: '16px', color: '#666', marginBottom: '30px' },
  inputGroup: { marginBottom: '20px' },
  label: { display: 'block', fontWeight: 'bold', marginBottom: '8px' },
  input: { width: '100%', padding: '15px', borderRadius: '8px', border: '1px solid #EAEAEA', backgroundColor: '#FFF', fontSize: '16px', boxSizing: 'border-box', boxShadow: '0 2px 4px rgba(0,0,0,0.02)', outline: 'none', fontFamily: '"DM Sans", sans-serif' },
  radioContainer: { display: 'flex', alignItems: 'center', gap: '15px', padding: '15px 0', cursor: 'pointer' },
  radioInactive: { width: '20px', height: '20px', borderRadius: '50%', border: '2px solid #CCC' },
  radioActive: { width: '20px', height: '20px', borderRadius: '50%', border: '2px solid #000', display: 'flex', justifyContent: 'center', alignItems: 'center' },
  radioDot: { width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#000' },
  continueBtn: { backgroundColor: '#2C3E40', color: '#FFF', border: 'none', padding: '16px', borderRadius: '8px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer', marginTop: 'auto', fontFamily: '"DM Sans", sans-serif' }
};

export default SetUpYourStore;