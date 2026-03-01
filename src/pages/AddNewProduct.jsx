import React, { useState } from 'react';
import '../css/AddNewProduct.css';

const AddNewProduct = () => {
  const [productData, setProductData] = useState({
    productName: '',
    category: '',
    price: '',
    skuBarcode: '',
    stockLevel: '',
    stockAlert: false,
    dimensions: '',
    weight: '',
    description: ''
  });

  const [uploadedImages, setUploadedImages] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleStockAlertToggle = () => {
    setProductData(prev => ({
      ...prev,
      stockAlert: !prev.stockAlert
    }));
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    // Handle image upload logic
    console.log('Images uploaded:', files);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    console.log('Images dropped:', files);
  };

  const handleAIGenerator = () => {
    console.log('AI Product Description & Ad Copy Generator clicked');
  };

  const handleCancel = () => {
    console.log('Cancel clicked');
  };

  const handleSaveProduct = () => {
    console.log('Save Product clicked', productData);
  };

  const handleGoBack = () => {
    console.log('Go back');
  };

  const handleGoForward = () => {
    console.log('Go forward');
  };

  return (
    <div className="add-new-product">
      {/* Navigation Header */}
      <div className="navigation-header">
        <div className="nav-arrows">
          <button className="nav-arrow" onClick={handleGoBack}>←</button>
          <button className="nav-arrow" onClick={handleGoForward}>→</button>
        </div>
      </div>

      <h1 className="page-title">Add New Product</h1>

      {/* Product Images Section */}
      <section className="product-section">
        <h2 className="section-title">Product Images</h2>
        <div 
          className="image-upload-area"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <div className="upload-content">
            <p className="upload-text">Drag and drop images here, or click to browse</p>
            <p className="upload-subtext">Upload up to 5 images to showcase your product</p>
            <input 
              type="file" 
              id="image-upload" 
              multiple 
              accept="image/*"
              onChange={handleImageUpload}
              style={{ display: 'none' }}
            />
            <label htmlFor="image-upload" className="upload-images-btn">
              Upload Images
            </label>
          </div>
        </div>
      </section>

      {/* Product Details Section */}
      <section className="product-section">
        <h2 className="section-title">Product Details</h2>
        <div className="form-grid">
          <div className="form-group">
            <label>Product Name</label>
            <input 
              type="text" 
              name="productName"
              placeholder="Enter product name"
              value={productData.productName}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Category</label>
            <select 
              name="category"
              value={productData.category}
              onChange={handleInputChange}
            >
              <option value="">Select category</option>
              <option value="electronics">Electronics</option>
              <option value="clothing">Clothing</option>
              <option value="food">Food</option>
              <option value="books">Books</option>
            </select>
          </div>
          <div className="form-group">
            <label>Price</label>
            <input 
              type="text" 
              name="price"
              placeholder="Enter price"
              value={productData.price}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>SKU/Barcode</label>
            <input 
              type="text" 
              name="skuBarcode"
              placeholder="Enter SKU or barcode"
              value={productData.skuBarcode}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </section>

      {/* Inventory & Shipping Section */}
      <section className="product-section">
        <h2 className="section-title">Inventory & Shipping</h2>
        <div className="form-group single-field">
          <label>Stock Level</label>
          <input 
            type="text" 
            name="stockLevel"
            placeholder="Enter stock level"
            value={productData.stockLevel}
            onChange={handleInputChange}
          />
        </div>
        
        <div className="stock-alert-row">
          <label>Stock Alert</label>
          <label className="toggle-switch">
            <input 
              type="checkbox" 
              checked={productData.stockAlert} 
              onChange={handleStockAlertToggle}
            />
            <span className="toggle-slider"></span>
          </label>
        </div>

        <div className="form-grid shipping-grid">
          <div className="form-group">
            <label>Dimensions (L x W x H)</label>
            <input 
              type="text" 
              name="dimensions"
              placeholder="Enter dimensions"
              value={productData.dimensions}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Weight</label>
            <input 
              type="text" 
              name="weight"
              placeholder="Enter weight"
              value={productData.weight}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </section>

      {/* Description & Marketing Section */}
      <section className="product-section">
        <h2 className="section-title">Description & Marketing</h2>
        <div className="form-group full-width">
          <label>Product Description</label>
          <textarea 
            name="description"
            placeholder="Enter product description"
            rows="8"
            value={productData.description}
            onChange={handleInputChange}
          />
        </div>
        <button className="ai-generator-btn" onClick={handleAIGenerator}>
          AI Product Description & Ad Copy Generator
        </button>
      </section>

      {/* Action Buttons */}
      <div className="action-buttons">
        <button className="cancel-btn" onClick={handleCancel}>Cancel</button>
        <button className="save-product-btn" onClick={handleSaveProduct}>Save Product</button>
      </div>
    </div>
  );
};

export default AddNewProduct;
