import React, { useState } from "react";
import "../css/ProductManagement.css";

const ProductManagement = () => {
  const [products] = useState([
    {
      id: 1,
      name: "Handcrafted Beaded Necklace",
      image: "https://via.placeholder.com/48",
      stock: 15,
      price: 45,
      status: "Active"
    },
    {
      id: 2,
      name: "Kente Cloth Scarf",
      image: "https://via.placeholder.com/48",
      stock: 22,
      price: 20,
      status: "Active"
    },
    {
      id: 3,
      name: "Wooden Carved Mask",
      image: "https://via.placeholder.com/48",
      stock: 8,
      price: 75,
      status: "Draft"
    },
    {
      id: 4,
      name: "Leather Sandals",
      image: "https://via.placeholder.com/48",
      stock: 30,
      price: 35,
      status: "Active"
    },
    {
      id: 5,
      name: "Basket Weaving",
      image: "https://via.placeholder.com/48",
      stock: 12,
      price: 50,
      status: "Active"
    }
  ]);

  return (
    <div className="product-management-page">
      {/* Header */}
      <div className="page-header-management">
        <div className="nav-arrows">
          <button className="nav-arrow">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M12.5 5L7.5 10L12.5 15" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className="nav-arrow">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7.5 5L12.5 10L7.5 15" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        <div className="header-content">
          <h1 className="page-title-management">Product Management</h1>
          <button className="add-product-btn">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 3.33334V12.6667M3.33334 8H12.6667" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Add Product
          </button>
        </div>
        <button className="download-btn">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M17.5 12.5V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V12.5M5.83333 8.33334L10 12.5M10 12.5L14.1667 8.33334M10 12.5V2.5" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* Product Table */}
      <div className="products-table-container">
        <table className="products-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Stock</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>
                  <div className="product-cell">
                    <div className="product-image">
                      <img src={product.image} alt={product.name} />
                    </div>
                    <span className="product-name">{product.name}</span>
                  </div>
                </td>
                <td>
                  <span className="stock-text">{product.stock} in stock</span>
                </td>
                <td>
                  <span className="price-badge">${product.price}</span>
                </td>
                <td>
                  <span className={`status-badge ${product.status.toLowerCase()}`}>
                    {product.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductManagement;
