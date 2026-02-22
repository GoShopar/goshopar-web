import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const HomepageSalesTrend = () => {
  const [timeframe, setTimeframe] = useState('This Month');

  // Dummy data simulating the wave on the UI
  const data = [
    { name: 'Mon', value: 80 }, { name: 'Tue', value: 20 },
    { name: 'Wed', value: 60 }, { name: 'Thu', value: 50 },
    { name: 'Fri', value: 90 }, { name: 'Sat', value: 60 },
    { name: 'Sun', value: 75 },
  ];

  return (
    <div style={styles.container}>
      <h3 style={styles.title}>Sales Trend</h3>
      
      <div style={styles.headerRow}>
        <div>
          <p style={styles.subtitle}>Profit</p>
          <h2 style={styles.amount}>$2,500</h2>
        </div>
      </div>
      
      <div style={styles.filterRow}>
        <select style={styles.dropdown} value={timeframe} onChange={(e) => setTimeframe(e.target.value)}>
          <option value="Today">Today</option>
          <option value="This Month">This Month</option>
          <option value="This Year">This Year</option>
        </select>
        <span style={styles.percentage}>+15%</span>
      </div>

      <div style={styles.chartContainer}>
        <ResponsiveContainer width="100%" height={200}>
          <AreaChart data={data} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#61797D" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#61797D" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#6B7280'}} dy={10} />
            <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#6B7280'}} />
            <Tooltip />
            <Area type="monotone" dataKey="value" stroke="#61797D" strokeWidth={2} fillOpacity={1} fill="url(#colorValue)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div style={styles.inventorySection}>
        <h3 style={styles.inventoryTitle}>Inventory</h3>
        <p style={styles.inventoryText}>
          Track of all the products your selling, what's available, what's low in stock, 
          and what's sold out. It helps sellers organize, update, and manage their items easily.
        </p>
        <button style={styles.button}>View Now</button>
      </div>
    </div>
  );
};

const styles = {
  container: { padding: '0 20px 100px 20px' },
  title: { fontSize: '18px', fontWeight: '700', marginBottom: '16px' },
  headerRow: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' },
  subtitle: { margin: 0, fontSize: '14px', color: '#666' },
  amount: { margin: '4px 0 12px 0', fontSize: '28px', fontWeight: '700' },
  filterRow: { display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px' },
  dropdown: {
    border: 'none',
    backgroundColor: 'transparent',
    fontSize: '14px',
    fontWeight: '500',
    color: '#333',
    outline: 'none',
    cursor: 'pointer',
  },
  percentage: { color: '#22C55E', fontSize: '14px', fontWeight: '500' },
  chartContainer: { width: '100%', height: '200px', marginBottom: '32px' },
  inventorySection: { marginTop: '24px' },
  inventoryTitle: { fontSize: '16px', fontWeight: '700', marginBottom: '8px' },
  inventoryText: { fontSize: '12px', color: '#666', lineHeight: '1.5', marginBottom: '16px' },
  button: {
    width: '100%',
    padding: '14px',
    backgroundColor: '#61797D', // Primary Color
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer',
    boxShadow: '0 4px 12px rgba(97, 121, 125, 0.3)',
  }
};

export default HomepageSalesTrend;