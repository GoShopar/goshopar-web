import React from "react";

const DescriptionMarketing = ({ productDetails, handleInputChange }) => {
  return (
    <section className="form-section">
      <h2 className="section-title">Description & Marketing</h2>
      <div className="form-field full-width">
        <label className="field-label">Product Description</label>
        <textarea
          name="description"
          placeholder=""
          value={productDetails.description}
          onChange={handleInputChange}
          className="field-textarea"
        ></textarea>
      </div>
      <button type="button" className="ai-button">
        AI Product Description & Ad Copy Generator
      </button>
    </section>
  );
};

export default DescriptionMarketing;
