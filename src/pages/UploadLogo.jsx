import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiImage } from 'react-icons/fi';

const UploadLogo = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <div style={styles.progressBar}>
        <div style={{...styles.progressSegment, backgroundColor: '#E0E0E0'}} />
        <div style={{...styles.progressSegment, backgroundColor: '#E0E0E0'}} />
        <div style={{...styles.progressSegment, backgroundColor: '#000'}} />
        <div style={styles.progressSegment} />
      </div>

      <h1 style={styles.title}>Almost there lets brand your shop,</h1>
      <p style={styles.subtitle}>Upload Logo Media</p>

      <div style={styles.uploadContainer}>
        <div style={styles.circle}>
          <FiImage size={40} color="#999" />
        </div>
      </div>

      <button style={styles.continueBtn} onClick={() => navigate('/store-template')}>Continue</button>
    </div>
  );
};

const styles = {
  container: { backgroundColor: '#FAFAFA', minHeight: '100vh', padding: '20px', fontFamily: '"DM Sans", sans-serif', maxWidth: '600px', margin: '0 auto', display: 'flex', flexDirection: 'column' },
  progressBar: { display: 'flex', gap: '8px', marginBottom: '30px' },
  progressSegment: { flex: 1, height: '4px', backgroundColor: '#E0E0E0', borderRadius: '2px' },
  title: { fontSize: '28px', margin: '0 0 10px 0', fontWeight: 'bold' },
  subtitle: { fontSize: '16px', color: '#666', marginBottom: '40px', fontWeight: 'bold' },
  uploadContainer: { display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 1 },
  circle: { width: '150px', height: '150px', borderRadius: '50%', backgroundColor: '#EAEAEA', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', boxShadow: '0 4px 10px rgba(0,0,0,0.05)' },
  continueBtn: { backgroundColor: '#2C3E40', color: '#FFF', border: 'none', padding: '16px', borderRadius: '8px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer', marginTop: 'auto', fontFamily: '"DM Sans", sans-serif' }
};

export default UploadLogo;