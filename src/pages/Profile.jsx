import React, { useState } from 'react';
import '../css/Profile.css';

const Profile = () => {
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);
  const [profileData, setProfileData] = useState({
    fullName: 'Chukwadi Adebayo',
    business: 'Adebayos Craft',
    phone: '+23487655432',
    email: 'chukwadiadebayo23@gmail.com',
    bankName: 'United Bank of Africa',
    accountNumber: '**********098554',
    accountHolder: 'Chukwadi Adebayo'
  });

  const handleUploadPhoto = () => {
    // Handle photo upload logic
    console.log('Upload photo clicked');
  };

  const handleEditPersonalInfo = () => {
    // Handle edit personal info logic
    console.log('Edit personal info clicked');
  };

  const handleEditPayment = () => {
    // Handle edit payment info logic
    console.log('Edit payment info clicked');
  };

  const handleChangePassword = () => {
    // Handle change password logic
    console.log('Change password clicked');
  };

  const handleTwoFactorToggle = () => {
    setTwoFactorEnabled(!twoFactorEnabled);
  };

  return (
    <div className="profile-page">
      <h1 className="profile-page-title">Profile</h1>

      {/* Profile Header Section */}
      <div className="profile-header-card">
        <div className="profile-avatar-section">
          <div className="profile-avatar">
            <img src="https://via.placeholder.com/100" alt="Profile" />
          </div>
          <div className="profile-basic-info">
            <h2>{profileData.fullName}</h2>
            <p>{profileData.email}</p>
          </div>
        </div>
        <button className="upload-photo-btn" onClick={handleUploadPhoto}>
          Upload Photo
        </button>
      </div>

      {/* Personal Information Section */}
      <div className="profile-section">
        <div className="section-header">
          <h3>Personal Information</h3>
          <button className="edit-btn" onClick={handleEditPersonalInfo}>
            <span className="edit-icon">✏️</span> Edit
          </button>
        </div>
        <div className="info-grid">
          <div className="info-item">
            <label>Full Name</label>
            <p>{profileData.fullName}</p>
          </div>
          <div className="info-item">
            <label>Bussiness</label>
            <p>{profileData.business}</p>
          </div>
          <div className="info-item">
            <label>Phone Number</label>
            <p>{profileData.phone}</p>
          </div>
          <div className="info-item">
            <label>Email Address</label>
            <p>{profileData.email}</p>
          </div>
        </div>
      </div>

      {/* Payment Reception Account Section */}
      <div className="profile-section">
        <div className="section-header">
          <h3>Payment Reception Account</h3>
          <button className="edit-btn" onClick={handleEditPayment}>
            <span className="edit-icon">✏️</span> Edit
          </button>
        </div>
        <div className="info-grid">
          <div className="info-item">
            <label>Bank Name</label>
            <p>{profileData.bankName}</p>
          </div>
          <div className="info-item">
            <label>Account Number</label>
            <p>{profileData.accountNumber}</p>
          </div>
          <div className="info-item full-width">
            <label>Account Holder Name</label>
            <p>{profileData.accountHolder}</p>
          </div>
        </div>
        <div className="security-notice">
          <p>For Security , changing your bank account details will require password re-authentication and may place a temporary 24 hours hold on payout</p>
        </div>
      </div>

      {/* Login & Security Section */}
      <div className="profile-section">
        <h3>Login & Security</h3>
        
        <div className="security-item">
          <div className="security-info">
            <h4>Change Password</h4>
            <p>Update your password regularly to keep your account secure.</p>
          </div>
          <button className="change-btn" onClick={handleChangePassword}>
            Change
          </button>
        </div>

        <div className="security-item">
          <div className="security-info">
            <h4>Two-Factor Authetication</h4>
            <p>Add new extra layer of security to your account</p>
          </div>
          <label className="toggle-switch">
            <input 
              type="checkbox" 
              checked={twoFactorEnabled} 
              onChange={handleTwoFactorToggle}
            />
            <span className="toggle-slider"></span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Profile;
