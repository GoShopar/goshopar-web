import React, { useState } from "react";
import "../css/SetupLocalRider.css";

const SetupLocalRider = () => {
  const [activeTab, setActiveTab] = useState("riders");

  const riders = [
    {
      id: 1,
      name: "David Samuel",
      contact: "+23490331150985",
      vehicle: "Car",
      status: "Active"
    },
    {
      id: 2,
      name: "David Samuel",
      contact: "+23490331150985",
      vehicle: "Car",
      status: "Active"
    },
    {
      id: 3,
      name: "David Samuel",
      contact: "+23490331150985",
      vehicle: "Car",
      status: "Active"
    }
  ];

  return (
    <div className="setup-local-rider-page">
      {/* Header */}
      <div className="setup-header">
        <div className="setup-header-text">
          <h1 className="setup-title">Setup Customer Local Rider</h1>
          <p className="setup-subtitle">
            Manage your own delivery team , define zone, and set payout rules.
          </p>
        </div>
        <button className="add-overrides-btn">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 3.33334V12.6667M3.33334 8H12.6667" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Add New Overrides
        </button>
      </div>

      {/* Tabs */}
      <div className="tabs-container">
        <button 
          className={`tab ${activeTab === "riders" ? "active" : ""}`}
          onClick={() => setActiveTab("riders")}
        >
          Riders Profile
        </button>
        <button 
          className={`tab ${activeTab === "zone" ? "active" : ""}`}
          onClick={() => setActiveTab("zone")}
        >
          Deliver zone
        </button>
        <button 
          className={`tab ${activeTab === "schedule" ? "active" : ""}`}
          onClick={() => setActiveTab("schedule")}
        >
          Schedule
        </button>
        <button 
          className={`tab ${activeTab === "payout" ? "active" : ""}`}
          onClick={() => setActiveTab("payout")}
        >
          Payout settings
        </button>
      </div>

      {/* Riders Table */}
      {activeTab === "riders" && (
        <div className="riders-table-container">
          <table className="riders-table">
            <thead>
              <tr>
                <th>Rider Name</th>
                <th>Contact</th>
                <th>Vehicle</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {riders.map((rider) => (
                <tr key={rider.id}>
                  <td>{rider.name}</td>
                  <td>{rider.contact}</td>
                  <td>{rider.vehicle}</td>
                  <td>
                    <span className="status-badge active">{rider.status}</span>
                  </td>
                  <td>
                    <button className="edit-btn">Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {activeTab === "zone" && (
        <div className="tab-content">
          <p>Deliver zone content</p>
        </div>
      )}

      {activeTab === "schedule" && (
        <div className="tab-content">
          <p>Schedule content</p>
        </div>
      )}

      {activeTab === "payout" && (
        <div className="tab-content">
          <p>Payout settings content</p>
        </div>
      )}
    </div>
  );
};

export default SetupLocalRider;
