import React from 'react';
import Navbar from '../components/Navbar';
import HomepageStats from '../components/HomepageStats';
import HomepageTopSellingProducts from '../components/HomepageTopSellingProducts';
import HomepageSalesTrend from '../components/HomepageSalesTrend';

const Homepage = () => {
  return (
    <div style={styles.page}>
      <Navbar />
      <div style={styles.content}>
        <HomepageStats />
        <HomepageTopSellingProducts />
        <HomepageSalesTrend />
      </div>
    </div>
  );
};

const styles = {
  page: {
    backgroundColor: '#FAFAFA',
    minHeight: '100vh',
    fontFamily: '"DM Sans", sans-serif',
    maxWidth: '768px', // Keeps it centered and mobile-proportioned on large screens
    margin: '0 auto',
    boxShadow: '0 0 20px rgba(0,0,0,0.05)',
  },
  content: {
    paddingTop: '10px',
  }
};

export default Homepage;