import React, { useState } from "react";
import { MdDashboard, MdNotifications, MdEmail, MdGroups, MdExpandMore } from "react-icons/md";
import { BiBook } from "react-icons/bi";
import { HiOutlineChat, HiOutlineUpload } from "react-icons/hi";

function SideBarFour() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isClassesDropdownOpen, setClassesDropdownOpen] = useState(false);

  const containerStyle = {
    display: "flex",
    height: "100vh",
    fontFamily: "'Inter', sans-serif",
  };

  const sidebarStyle = {
    background: "linear-gradient(to bottom, #334155, #1e293b)",
    color: "#f1f5f9",
    transition: "all 0.3s",
    width: isSidebarOpen ? "15rem" : "4.5rem",
    display: "flex",
    flexDirection: "column",
    borderRadius: "0.75rem",
    margin: "0.5rem",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.15)",
  };

  const sidebarHeaderStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "1rem",
    backgroundColor: "#475569",
    borderRadius: "0.5rem",
    margin: "0.5rem",
  };

  const avatarStyle = {
    width: "2.5rem",
    height: "2.5rem",
    borderRadius: "50%",
    overflow: "hidden",
  };

  const inputStyle = {
    width: "100%",
    padding: "0.5rem 2rem",
    backgroundColor: "#475569",
    borderRadius: "0.5rem",
    color: "#f1f5f9",
    border: "none",
    outline: "none",
    fontSize: "0.875rem",
    marginBottom: "1rem",
  };

  const linkStyle = {
    display: "flex",
    alignItems: "center",
    padding: "0.6rem",
    borderRadius: "0.5rem",
    cursor: "pointer",
    fontSize: "0.875rem",
    transition: "background 0.2s",
    color: "#f1f5f9",
    textDecoration: "none",
    marginBottom: "0.5rem",
  };

  const dropdownStyle = {
    marginLeft: "1rem",
    marginTop: "0.5rem",
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
  };

  const buttonStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0.6rem",
    backgroundColor: "#2563eb",
    color: "#f1f5f9",
    borderRadius: "0.5rem",
    cursor: "pointer",
    fontSize: "0.875rem",
    transition: "background 0.2s",
    border: "none",
    outline: "none",
  };

  const mainContentStyle = {
    flex: 1,
    backgroundColor: "#f8fafc",
    padding: "2rem",
    borderRadius: "0.75rem",
    margin: "0.5rem",
    color: "#334155",
  };

  return (
    <div style={containerStyle}>
      {/* Sidebar */}
      <div style={sidebarStyle}>
        {/* Header */}
        <div style={sidebarHeaderStyle}>
          {isSidebarOpen && (
            <div style={{ display: "flex", alignItems: "center" }}>
              <div style={avatarStyle}>
                <img
                  src="https://as2.ftcdn.net/v2/jpg/07/17/84/71/1000_F_717847111_5dqQRbCOnSKiALUJzWHkjozKZAEQdVsf.jpg"
                  alt="User"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div style={{ marginLeft: "1rem" }}>
                <h3 style={{ fontSize: "0.875rem", fontWeight: "600", margin: 0 }}>Hello,</h3>
                <p style={{ fontSize: "0.75rem", color: "#e2e8f0", margin: 0 }}>User 👋</p>
              </div>
            </div>
          )}
          <button
            onClick={() => setSidebarOpen(!isSidebarOpen)}
            style={{ background: "none", border: "none", color: "#e2e8f0", cursor: "pointer" }}
          >
            <MdExpandMore
              style={{
                fontSize: "1.5rem",
                transform: isSidebarOpen ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.2s",
              }}
            />
          </button>
        </div>

        {/* Search */}
        {isSidebarOpen && (
          <div style={{ padding: "1rem" }}>
            <input type="text" placeholder="Search" style={inputStyle} />
          </div>
        )}

        {/* Links */}
        <div style={{ flex: 1, padding: "1rem" }}>
          <a href="#" style={linkStyle}>
            <MdDashboard style={{ fontSize: "1.25rem", marginRight: "1rem" }} />
            {isSidebarOpen && "Dashboard"}
          </a>
          <a href="#" style={linkStyle}>
            <MdNotifications style={{ fontSize: "1.25rem", marginRight: "1rem" }} />
            {isSidebarOpen && "Notifications"}
          </a>
          <a href="#" style={linkStyle}>
            <HiOutlineChat style={{ fontSize: "1.25rem", marginRight: "1rem" }} />
            {isSidebarOpen && "Chat"}
          </a>
          <a href="#" style={linkStyle}>
            <MdEmail style={{ fontSize: "1.25rem", marginRight: "1rem" }} />
            {isSidebarOpen && "Messages"}
          </a>

          {/* Dropdown */}
          <div>
            <button
              onClick={() => setClassesDropdownOpen(!isClassesDropdownOpen)}
              style={{
                ...linkStyle,
                justifyContent: "space-between",
                background: isClassesDropdownOpen ? "#475569" : "none",
              }}
            >
              <span style={{ display: "flex", alignItems: "center" }}>
                <BiBook style={{ fontSize: "1.25rem", marginRight: "1rem" }} />
                {isSidebarOpen && "Classes"}
              </span>
              {isSidebarOpen && (
                <MdExpandMore
                  style={{
                    fontSize: "1.5rem",
                    transform: isClassesDropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.2s",
                  }}
                />
              )}
            </button>
            {isClassesDropdownOpen && isSidebarOpen && (
              <div style={dropdownStyle}>
                <a href="#" style={{ ...linkStyle, paddingLeft: "2rem" }}>
                  Maths
                </a>
                <a href="#" style={{ ...linkStyle, paddingLeft: "2rem" }}>
                  English
                </a>
                <a href="#" style={{ ...linkStyle, paddingLeft: "2rem" }}>
                  Economics
                </a>
                <a href="#" style={{ ...linkStyle, paddingLeft: "2rem" }}>
                  Accounts
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Upload Button */}
        <div style={{ padding: "1rem" }}>
          <button style={buttonStyle}>
            <HiOutlineUpload style={{ fontSize: "1rem", marginRight: "0.5rem" }} />
            {isSidebarOpen && "Upload"}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div style={mainContentStyle}>
        <h1 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "1rem" }}>Main Content</h1>
        <p style={{ fontSize: "0.875rem", color: "#475569" }}>
          This is the main content area. You can customize it as needed.
        </p>
      </div>
    </div>
  );
}

export default SideBarFour;
