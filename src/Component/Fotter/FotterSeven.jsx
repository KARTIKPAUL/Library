import React from "react";
import { FaGoogle, FaFacebook, FaTwitter } from "react-icons/fa";

function FotterSeven() {
  return (
    <footer style={{ backgroundColor: "#002A44", color: "#fff", padding: "30px 20px", fontSize: "14px" }}>
      {/* Main Footer Content */}
      <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", marginBottom: "20px" }}>
        {/* Column: State Wise Scholarships */}
        <div>
          <h4 style={{ marginBottom: "10px" }}>STATE WISE SCHOLARSHIPS</h4>
          <ul style={{ listStyleType: "none", padding: 0, lineHeight: "1.8" }}>
            <li>Top Scholarships of Uttar Pradesh</li>
            <li>Top Scholarships of Maharashtra</li>
            <li>Top Scholarships of Bihar</li>
            <li>Top Scholarships of West Bengal</li>
            <li>Top Scholarships of Tamil Nadu</li>
            <li>Top Scholarships of Karnataka</li>
          </ul>
        </div>

        {/* Column: Current Class Scholarships */}
        <div>
          <h4 style={{ marginBottom: "10px" }}>CURRENT CLASS SCHOLARSHIPS</h4>
          <ul style={{ listStyleType: "none", padding: 0, lineHeight: "1.8" }}>
            <li>Top Scholarships for Class 1 to 10</li>
            <li>Top Scholarships for Class 11, 12</li>
            <li>Top Scholarships for Graduation</li>
            <li>Top Scholarships for Post-Graduation</li>
            <li>Top Scholarships for Diploma/Polytechnic</li>
            <li>Top Scholarships for Girls/Women</li>
          </ul>
        </div>

        {/* Column: Type Based Scholarships */}
        <div>
          <h4 style={{ marginBottom: "10px" }}>TYPE BASED SCHOLARSHIPS</h4>
          <ul style={{ listStyleType: "none", padding: 0, lineHeight: "1.8" }}>
            <li>Top Scholarships based on Merit</li>
            <li>Top Scholarships based on Means</li>
            <li>Top Scholarships for Minorities</li>
            <li>Top Scholarships for Study Abroad</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom: Social Media */}
      <div style={{ textAlign: "center", borderTop: "1px solid #004063", paddingTop: "15px" }}>
        <p style={{ marginBottom: "10px" }}>
          Buddy4Study, since 2011, is endeavoring to bridge the gap between scholarship providers and scholarship seekers.
        </p>
        <div style={{ fontSize: "24px", display: "flex", justifyContent: "center", gap: "15px" }}>
          <FaFacebook />
          <FaTwitter />
          <FaGoogle />
        </div>
        <p style={{ marginTop: "15px", fontSize: "12px", color: "#aaa" }}>
          <a href="#" style={{ color: "#aaa", textDecoration: "none" }}>Privacy Policy</a> | 
          <a href="#" style={{ color: "#aaa", textDecoration: "none", marginLeft: "10px" }}>Terms & Conditions</a>
        </p>
      </div>
    </footer>
  );
}

export default FotterSeven;
