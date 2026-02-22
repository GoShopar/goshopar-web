import React from 'react';

const HomepageTopSellingProducts = () => {
  const products = [
    { id: 1, name: "Elegant Dress", price: "$150", img: "/images/products1.png" },
    { id: 2, name: "Stylish Shoes", price: "$120", img: "/images/products2.png" },
    { id: 3, name: "Chic Handbag", price: "$80", img: "/images/products3.png" },
    { id: 4, name: "Classic Watch", price: "$200", img: "/images/products4.png" },
    { id: 5, name: "Luxury Perfume", price: "$95", img: "/images/products5.png" },
  ];

  return (
    <div style={styles.container}>
      <h3 style={styles.title}>Your top selling products</h3>
      <div style={styles.carousel}>
        {products.map((item) => (
          <div key={item.id} style={styles.card}>
            <div style={styles.imageContainer}>
              <img 
                src={item.img} 
                alt={item.name} 
                style={styles.image} 
                onError={(e) => { e.target.src = 'https://via.placeholder.com/150' }}
              />
            </div>
            <p style={styles.name}>{item.name}</p>
            <p style={styles.price}>{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '0 0 24px 20px', 
  },
  title: {
    fontSize: '18px',
    fontWeight: '700',
    marginBottom: '16px',
    color: '#000',
  },
  carousel: {
    display: 'flex',
    overflowX: 'auto',
    gap: '16px',
    paddingBottom: '10px',
    scrollbarWidth: 'none', // For Firefox
    msOverflowStyle: 'none', // For IE
  },
  card: {
    flex: '0 0 calc(45% - 8px)', 
    minWidth: '140px',
  },
  imageContainer: {
    backgroundColor: '#f0e5d8', // Fallback background
    borderRadius: '12px',
    marginBottom: '8px',
    height: '160px',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  name: {
    margin: '0 0 4px 0',
    fontSize: '14px',
    fontWeight: '500',
    color: '#333',
  },
  price: {
    margin: 0,
    fontSize: '14px',
    fontWeight: '400',
    color: '#666',
  }
};

export default HomepageTopSellingProducts;