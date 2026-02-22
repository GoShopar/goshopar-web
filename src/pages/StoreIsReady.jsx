import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiCheck, FiPlus, FiTruck, FiTrendingUp, FiChevronRight, FiGrid } from 'react-icons/fi';

const StoreIsReady = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <div style={styles.successSection}>
        <div style={styles.circleCheck}>
          <FiCheck size={40} color="#FFF" />
        </div>
        <h1 style={styles.title}>Your Store is Ready!</h1>
        <p style={styles.subtitle}>Congratulations! Your business is now live on GoShopar. Let's get your first sale.</p>
      </div>

      <div style={styles.stepsSection}>
        <p style={styles.stepsTitle}>FRIENDLY NEXT STEPS</p>

        <div style={styles.stepCard}>
          <div style={styles.iconBox}>
            <FiPlus size={20} color="white" />
          </div>
          <div style={styles.stepText}>
            <h3 style={styles.stepHeading}>Add Products</h3>
            <p style={styles.stepSub}>Add your first product to your store</p>
          </div>
          <FiChevronRight size={24} color="#999" />
        </div>

        <div style={styles.stepCard}>
          <div style={styles.iconBox}>
            <FiTruck size={20} color="white" />
          </div>
          <div style={styles.stepText}>
            <h3 style={styles.stepHeading}>Fulfill Orders</h3>
            <p style={styles.stepSub}>Learn how to fulfill orders</p>
          </div>
          <FiChevronRight size={24} color="#999" />
        </div>

        <div style={styles.stepCard}>
          <div style={styles.iconBox}>
            <FiTrendingUp size={20} color="white" />
          </div>
          <div style={styles.stepText}>
            <h3 style={styles.stepHeading}>View Analytics</h3>
            <p style={styles.stepSub}>View your store performance</p>
          </div>
          <FiChevronRight size={24} color="#999" />
        </div>
      </div>

      <button style={styles.dashboardBtn} onClick={() => navigate('/home')}>
        Dashboard <FiGrid style={{marginLeft: '8px'}} />
      </button>
    </div>
  );
};

const styles = {
  container: { 
    backgroundColor: '#FAFAFA', 
    minHeight: '100vh', 
    padding: '20px', 
    fontFamily: '"DM Sans", sans-serif', 
    maxWidth: '600px', 
    margin: '0 auto', 
    display: 'flex', 
    flexDirection: 'column' 
  },
  successSection: { 
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'center', 
    textAlign: 'center', 
    marginTop: '40px', 
    marginBottom: '40px' 
  },
  circleCheck: { 
    width: '80px', 
    height: '80px', 
    borderRadius: '50%', 
    backgroundColor: '#10B981', 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginBottom: '20px', 
    boxShadow: '0 4px 10px rgba(16, 185, 129, 0.3)' 
  },
  title: { 
    fontSize: '28px', 
    margin: '0 0 10px 0', 
    fontWeight: 'bold' 
  },
  subtitle: { 
    fontSize: '16px', 
    color: '#666', 
    lineHeight: '1.5', 
    padding: '0 10px' 
  },
  stepsSection: { 
    flex: 1 
  },
  stepsTitle: { 
    fontSize: '12px', 
    fontWeight: 'bold', 
    color: '#888', 
    letterSpacing: '1px', 
    marginBottom: '15px' 
  },
  stepCard: { 
    display: 'flex', 
    alignItems: 'center', 
    backgroundColor: '#FFF', 
    padding: '15px', 
    borderRadius: '12px', 
    marginBottom: '10px', 
    boxShadow: '0 2px 6px rgba(0,0,0,0.02)', 
    cursor: 'pointer' 
  },
  iconBox: { 
    width: '40px', 
    height: '40px', 
    borderRadius: '8px', 
    backgroundColor: '#61797D', 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginRight: '15px' 
  },
  stepText: { 
    flex: 1 
  },
  stepHeading: { 
    margin: '0 0 4px 0', 
    fontSize: '16px', 
    fontWeight: 'bold' 
  },
  stepSub: { 
    margin: 0, 
    fontSize: '12px', 
    color: '#666' 
  },
  dashboardBtn: { 
    backgroundColor: '#61797D', 
    color: '#FFF', 
    border: 'none', 
    padding: '16px', 
    borderRadius: '8px', 
    fontSize: '16px', 
    fontWeight: 'bold', 
    cursor: 'pointer', 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginTop: '20px', 
    boxShadow: '0 4px 12px rgba(0,0,0,0.15)', 
    fontFamily: '"DM Sans", sans-serif' 
  }
};

export default StoreIsReady;