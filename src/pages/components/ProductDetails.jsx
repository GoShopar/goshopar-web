import React from "react";

const ProductDetails = ({ productDetails, handleInputChange }) => {
  return (
    <section className="form-section">
      <h2 className="section-title">Product Details</h2>
      <div className="form-grid-2">
        <div className="form-field">
          <label className="field-label">Product Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter product name"
            value={productDetails.name}
            onChange={handleInputChange}
            className="field-input"
          />
        </div>
        <div className="form-field">
          <label className="field-label">Category</label>
          <select
            name="category"
            value={productDetails.category}
            onChange={handleInputChange}
            className="field-input field-select"
          >
            <option value="">Select category</option>
            <option value="electronics">Electronics</option>
            <option value="clothing">Clothing</option>
            <option value="food">Food</option>
            <option value="books">Books</option>
          </select>
        </div>
        <div className="form-field">
          <label className="field-label">Price</label>
          <input
            type="text"
            name="price"
            placeholder="Enter price"
            value={productDetails.price}
            onChange={handleInputChange}
            className="field-input"
          />
        </div>
        <div className="form-field">
          <label className="field-label">SKU/Barcode</label>
          <input
            type="text"
            name="sku"
            placeholder="Enter SKU or barcode"
            value={productDetails.sku}
            onChange={handleInputChange}
            className="field-input"
          />
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
