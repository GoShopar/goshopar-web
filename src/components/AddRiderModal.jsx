import React, { useState } from "react";
import "../css/AddRiderModal.css";

const AddRiderModal = ({ isOpen, onClose }) => {
  const [riderData, setRiderData] = useState({
    photo: null,
    name: "",
    phone: "",
    email: "",
    vehicleType: ""
  });
  const [dragActive, setDragActive] = useState(false);

  if (!isOpen) return null;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRiderData({ ...riderData, [name]: value });
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setRiderData({ ...riderData, photo: file });
    }
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setRiderData({ ...riderData, photo: e.dataTransfer.files[0] });
    }
  };

  const handleSubmit = () => {
    // Handle form submission
    console.log(riderData);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="modal-header">
          <div className="modal-header-text">
            <h2 className="modal-title">Add New Rider</h2>
            <p className="modal-subtitle">
              Enter the details below to add a new local rider to your team.
            </p>
          </div>
          <button className="close-btn" onClick={onClose}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6L18 18" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Form */}
        <form className="modal-form">
          {/* Photo Upload */}
          <div className="form-group">
            <label className="form-label">Rider Photo (optional)</label>
            <div 
              className={`photo-upload-area ${dragActive ? "drag-active" : ""}`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              <div className="upload-icon">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <path d="M20 13.3334V26.6667M13.3333 20H26.6667" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="20" cy="20" r="19" stroke="#E5E7EB" strokeWidth="2"/>
                </svg>
              </div>
              <p className="upload-text">
                <span className="upload-link">Click to upload</span> or drag and drop
              </p>
              <p className="upload-info">SVG, PNG, JPG or GIF (MAX. 800×400px</p>
              <input
                type="file"
                accept="image/*"
                onChange={handlePhotoUpload}
                className="file-input-hidden"
              />
            </div>
          </div>

          {/* Rider Name */}
          <div className="form-group">
            <label className="form-label">Rider Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter rider full name"
              value={riderData.name}
              onChange={handleInputChange}
              className="form-input"
            />
          </div>

          {/* Phone and Email */}
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Phone Number</label>
              <input
                type="tel"
                name="phone"
                placeholder="Enter phone number"
                value={riderData.phone}
                onChange={handleInputChange}
                className="form-input"
              />
              <span className="error-text">phone number required</span>
            </div>
            <div className="form-group">
              <label className="form-label">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter email address"
                value={riderData.email}
                onChange={handleInputChange}
                className="form-input"
              />
            </div>
          </div>

          {/* Vehicle Type */}
          <div className="form-group">
            <label className="form-label">Vehicle Type</label>
            <select
              name="vehicleType"
              value={riderData.vehicleType}
              onChange={handleInputChange}
              className="form-select"
            >
              <option value="">Select a vehicle type</option>
              <option value="car">Car</option>
              <option value="motorcycle">Motorcycle</option>
              <option value="bicycle">Bicycle</option>
              <option value="van">Van</option>
            </select>
          </div>
        </form>

        {/* Footer Buttons */}
        <div className="modal-footer">
          <button className="cancel-button" onClick={onClose}>
            Cancel
          </button>
          <button className="submit-button" onClick={handleSubmit}>
            Add Rider
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddRiderModal;
