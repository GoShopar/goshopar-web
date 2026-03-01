import React from "react";

const ProductImages = ({ images, dragActive, handleDrag, handleDrop, handleImageUpload }) => {
  return (
    <section className="form-section">
      <h2 className="section-title">Product Images</h2>
      
      {images.length > 0 && (
        <div className="uploaded-images-container">
          {images.map((img, i) => (
            <div key={i} className="image-preview">
              <img
                src={URL.createObjectURL(img)}
                alt={`preview-${i}`}
              />
            </div>
          ))}
        </div>
      )}
      
      <div 
        className={`image-upload-area ${dragActive ? "drag-active" : ""}`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <div className="upload-placeholder">
          <p className="upload-text">
            <span className="bold-text">Drag and drop images here, or click to browse</span>
          </p>
          <p className="upload-subtext">Upload up to 5 images to showcase your product</p>
          <label htmlFor="file-upload" className="upload-button">
            Upload Images
          </label>
        </div>
        <input
          type="file"
          multiple
          accept="image/*"
          onChange={handleImageUpload}
          className="file-input"
          id="file-upload"
        />
      </div>
    </section>
  );
};

export default ProductImages;
