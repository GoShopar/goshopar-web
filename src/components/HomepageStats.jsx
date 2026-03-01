import React from 'react';
import { FiTrendingUp, FiBox, FiUsers, FiEye } from 'react-icons/fi';

const HomepageStats = () => {
  const stats = [
    { id: 1, topic: "Today's Trade", value: "$12,500", percent: "+18.3%", isGain: true, icon: <FiTrendingUp /> },
    { id: 2, topic: "Total Orders", value: "350", percent: "+18.3%", isGain: true, icon: <FiBox /> },
    { id: 3, topic: "Visitors", value: "1,205", percent: "+18.3%", isGain: true, icon: <FiUsers /> },
    { id: 4, topic: "Refunds", value: "$120", percent: "-2.4%", isGain: false, icon: <FiEye /> },
  ];

  return (
    <div style={styles.grid}>
      {stats.map((stat) => (
        <div key={stat.id} style={styles.card}>
          <div style={styles.header}>
            <span style={styles.icon}>{stat.icon}</span>
            <span style={styles.topic}>{stat.topic}</span>
          </div>
          <h3 style={styles.value}>{stat.value}</h3>
          <p style={{ ...styles.percent, color: stat.isGain ? '#22C55E' : '#EF4444' }}>
            {stat.percent}
          </p>
        </div>
      ))}
    </div>
  );
};

const styles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    gap: '15px',
    padding: '0 20px',
    marginBottom: '24px',
  },
  card: {
    backgroundColor: '#fff',
    padding: '16px',
    borderRadius: '12px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginBottom: '12px',
  },
  icon: {
    color: '#666',
    fontSize: '16px',
  },
  topic: {
    fontSize: '14px',
    color: '#333',
    fontWeight: '500',
  },
  value: {
    margin: '0 0 8px 0',
    fontSize: '22px',
    fontWeight: '700',
  },
  percent: {
    margin: 0,
    fontSize: '12px',
    fontWeight: '500',
  }
};

export default HomepageStats;