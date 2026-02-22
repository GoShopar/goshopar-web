import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiBell } from 'react-icons/fi';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <div style={styles.profileSection}>
        <img 
          src="/images/winner.png" 
          alt="Profile" 
          style={styles.image} 
          onError={(e) => { e.target.src = 'https://via.placeholder.com/40' }} 
        />
        <div style={styles.textContainer}>
          <h2 style={styles.storeName}>Winner's Shop</h2>
          <p style={styles.welcomeText}>Welcome to GoShopar</p>
        </div>
      </div>
      
      <button style={styles.iconButton} onClick={() => navigate('/notifications')}>
        <FiBell size={20} color="#333" />
        <span style={styles.badge}></span>
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '16px 20px',
    backgroundColor: '#FAFAFA',
    fontFamily: '"DM Sans", sans-serif',
  },
  profileSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  image: {
    width: '45px',
    height: '45px',
    borderRadius: '50%',
    objectFit: 'cover',
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  storeName: {
    margin: 0,
    fontSize: '16px',
    fontWeight: '700',
    color: '#000',
  },
  welcomeText: {
    margin: 0,
    fontSize: '12px',
    color: '#666',
  },
  iconButton: {
    backgroundColor: '#fff',
    border: 'none',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
    cursor: 'pointer',
    position: 'relative',
  },
  badge: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    width: '8px',
    height: '8px',
    backgroundColor: 'red',
    borderRadius: '50%',
  }
};

export default Navbar;