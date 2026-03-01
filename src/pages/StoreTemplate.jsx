import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

const StoreTemplate = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <FiArrowLeft size={24} onClick={() => navigate(-1)} style={styles.backIcon} />
        <h1 style={styles.headerTitle}>Store Templates</h1>
      </div>

      <div style={styles.progressBar}>
        <div style={{...styles.progressSegment, backgroundColor: '#E0E0E0'}} />
        <div style={{...styles.progressSegment, backgroundColor: '#E0E0E0'}} />
        <div style={{...styles.progressSegment, backgroundColor: '#E0E0E0'}} />
        <div style={{...styles.progressSegment, backgroundColor: '#000'}} />
      </div>

      <h1 style={styles.title}>Choose the type of templates for your shop</h1>

      {/* Template 1 */}
      <div style={styles.templateBox}>
        <img src="/images/template1.png" alt="Template 1" style={styles.templateImg} />
        <div style={styles.btnRow}>
          <button style={styles.blackBtn} onClick={() => navigate('/store-is-ready')}>Use this Template</button>
          <button style={styles.primaryBtn}>Preview</button>
        </div>
      </div>

      {/* Template 2 */}
      <div style={styles.templateBox}>
        <img src="/images/template2.png" alt="Template 2" style={styles.templateImg} />
        <div style={styles.btnRow}>
          <button style={styles.blackBtn} onClick={() => navigate('/store-is-ready')}>Use this Template</button>
          <button style={styles.primaryBtn}>Preview</button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: { backgroundColor: '#FAFAFA', minHeight: '100vh', padding: '20px', fontFamily: '"DM Sans", sans-serif', maxWidth: '600px', margin: '0 auto' },
  header: { display: 'flex', alignItems: 'center', marginBottom: '20px' },
  backIcon: { cursor: 'pointer', marginRight: '15px' },
  headerTitle: { fontSize: '20px', margin: 0, fontWeight: 'bold' },
  progressBar: { display: 'flex', gap: '8px', marginBottom: '30px' },
  progressSegment: { flex: 1, height: '4px', backgroundColor: '#E0E0E0', borderRadius: '2px' },
  title: { fontSize: '26px', margin: '0 0 30px 0', lineHeight: '1.2', fontWeight: 'bold' },
  templateBox: { marginBottom: '40px' },
  templateImg: { width: '100%', height: '200px', objectFit: 'cover', borderRadius: '12px', marginBottom: '15px', boxShadow: '0 4px 10px rgba(0,0,0,0.05)' },
  btnRow: { display: 'flex', gap: '10px' },
  blackBtn: { flex: 1, backgroundColor: '#2C3E40', color: '#FFF', border: 'none', padding: '14px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', fontSize: '14px', fontFamily: '"DM Sans", sans-serif' },
  primaryBtn: { flex: 1, backgroundColor: '#61797D', color: '#000', border: 'none', padding: '14px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', fontSize: '14px', fontFamily: '"DM Sans", sans-serif' }
};

export default StoreTemplate;