import React from "react";
import { FaGoogle, FaFacebook, FaTwitter } from "react-icons/fa";

function FotterSix() {
  return (
    <footer style={{ backgroundColor: "#333", color: "#fff", padding: "30px 20px", fontSize: "14px" }}>
      {/* Main Footer Content */}
      <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", marginBottom: "20px" }}>
        {/* Column: About */}
        <div>
          <h4 style={{ marginBottom: "10px" }}>ABOUT</h4>
          <ul style={{ listStyleType: "none", padding: 0, lineHeight: "1.8" }}>
            <li>Contact Us</li>
            <li>About Us</li>
            <li>Careers</li>
            <li>Flipkart Stories</li>
            <li>Press</li>
            <li>Corporate Information</li>
          </ul>
        </div>

        {/* Column: Group Companies */}
        <div>
          <h4 style={{ marginBottom: "10px" }}>GROUP COMPANIES</h4>
          <ul style={{ listStyleType: "none", padding: 0, lineHeight: "1.8" }}>
            <li>Myntra</li>
            <li>Cleartrip</li>
            <li>Shopsy</li>
          </ul>
        </div>

        {/* Column: Help */}
        <div>
          <h4 style={{ marginBottom: "10px" }}>HELP</h4>
          <ul style={{ listStyleType: "none", padding: 0, lineHeight: "1.8" }}>
            <li>Payments</li>
            <li>Shipping</li>
            <li>Cancellation & Returns</li>
            <li>FAQ</li>
          </ul>
        </div>

        {/* Column: Consumer Policy */}
        <div>
          <h4 style={{ marginBottom: "10px" }}>CONSUMER POLICY</h4>
          <ul style={{ listStyleType: "none", padding: 0, lineHeight: "1.8" }}>
            <li>Cancellation & Returns</li>
            <li>Terms Of Use</li>
            <li>Security</li>
            <li>Privacy</li>
            <li>Sitemap</li>
            <li>Grievance Redressal</li>
            <li>EPR Compliance</li>
          </ul>
        </div>

        {/* Column: Address */}
        <div>
          <h4 style={{ marginBottom: "10px" }}>Mail Us:</h4>
          <p style={{ lineHeight: "1.6" }}>
            Flipkart Internet Private Limited, <br />
            Buildings Alyssa, Begonia & Clove Embassy Tech Village, <br />
            Outer Ring Road, Devarabeesanahalli Village, <br />
            Bengaluru, 560103, <br />
            Karnataka, India
          </p>
          <h4 style={{ marginTop: "15px" }}>Registered Office Address:</h4>
          <p style={{ lineHeight: "1.6" }}>
            Flipkart Internet Private Limited, <br />
            Buildings Alyssa, Begonia & Clove Embassy Tech Village, <br />
            Outer Ring Road, Devarabeesanahalli Village, <br />
            Bengaluru, 560103, <br />
            Karnataka, India
          </p>
        </div>
      </div>

      {/* Footer Bottom: Social Media */}
      <div style={{ textAlign: "center", borderTop: "1px solid #555", paddingTop: "15px" }}>
        <p style={{ marginBottom: "10px" }}>Follow Us:</p>
        <div style={{ fontSize: "24px", display: "flex", justifyContent: "center", gap: "15px" }}>
          <FaFacebook />
          <FaTwitter />
          <FaGoogle />
        </div>
        <p style={{ marginTop: "15px", fontSize: "12px", color: "#aaa" }}>© 2007-2025 Flipkart.com</p>
      </div>
    </footer>
  );
}

export default FotterSix;
