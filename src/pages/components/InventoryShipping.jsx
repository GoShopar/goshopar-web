import React from "react";

const InventoryShipping = ({ productDetails, handleInputChange, stockAlert, setStockAlert }) => {
  return (
    <section className="form-section section-constrained">
      <h2 className="section-title">Inventory & Shipping</h2>
      <div className="inventory-fields-wrapper">
        <div className="form-field">
          <label className="field-label">Stock Level</label>
          <input
            type="text"
            name="stock"
            placeholder="Enter stock level"
            value={productDetails.stock}
            onChange={handleInputChange}
            className="field-input"
          />
        </div>
      </div>
      
      <div className="stock-alert-row">
        <label className="field-label">Stock Alert</label>
        <label className="toggle-switch">
          <input
            type="checkbox"
            checked={stockAlert}
            onChange={() => setStockAlert(!stockAlert)}
          />
          <span className="toggle-slider"></span>
        </label>
      </div>

      <div className="inventory-fields-wrapper dimensions-weight">
        <div className="form-field">
          <label className="field-label">Dimensions (L x W x H)</label>
          <input
            type="text"
            name="dimensions"
            placeholder="Enter dimensions"
            value={productDetails.dimensions}
            onChange={handleInputChange}
            className="field-input"
          />
        </div>
        <div className="form-field">
          <label className="field-label">Weight</label>
          <input
            type="text"
            name="weight"
            placeholder="Enter weight"
            value={productDetails.weight}
            onChange={handleInputChange}
            className="field-input"
          />
        </div>
      </div>
    </section>
  );
};

export default InventoryShipping;
