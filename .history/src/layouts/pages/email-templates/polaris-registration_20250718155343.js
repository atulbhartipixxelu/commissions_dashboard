import React from "react";

function PolarisRegistrationEmail() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#fffaf0", fontSize: "15px", maxWidth: "600px", margin: "0 auto", padding: "0", border: "1px solid#ddd" }}>
      <div style={{ backgroundColor: "#29B0EA", color: "#fff", padding: "30px", textAlign: "left" }}>
        <h2 style={{ margin: 0 }}>POLARIS</h2>
      </div>

      <div style={{ padding: "30px" }}>
        <h2 style={{ margin: "0 0 20px 0" }}>Complete Your Registration</h2>
        <p>Dear Srini Gattu,</p>
        <p>We’re excited to have you join Polaris! To complete your registration, please take a moment to provide some basic information.</p>

        <a href="#" style={{ display: "inline-block", backgroundColor: "#29B0EA", color: "#fff", padding: "15px 30px", textDecoration: "none", borderRadius: "6px", margin: "20px 0", fontWeight: "bold" }}>Register Now</a>

        <p>⚠️ Link expires in <strong>30 Minutes!</strong></p>
        <p>This registration link will expire at <strong>10:13 AM UTC</strong></p>

        <h3 style={{ marginTop: "20px" }}>🔒 Your Information</h3>
        <p>Here’s what we’ve got from you:</p>
        <ul style={{ marginLeft: "20px",  marginTop: "10px"}}>
          <li><strong>Full Name:</strong> Srini Gattu</li>
          <li><strong>Email:</strong> srinigattu2@gmail.com</li>
          <li><strong>Phone:</strong> 88998889</li>
        </ul>

        <h3 style={{ marginTop: "20px" }}>🌟 Why register?</h3>
        <p>By completing this step, you’ll gain:</p>
        <ul style={{ marginLeft: "20px", marginTop: "10px", marginBottom: "10px" }}>
          <li>A dashboard tailored just for you</li>
          <li>Full account control, anytime</li>
          <li>VIP support with priority responses</li>
        </ul>

        <p>🧑‍💼 Didn’t request this?</p>
        <p><strong>The Polaris Team</strong></p>
        
      </div>

      <div style={{ padding: "20px 30px", display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "12px" }}>
        <div style={{ textAlign: "center" }}>
          <p>© 2025 Polaris. All rights reserved.</p>
        </div>
        {/* <div>
          <span style={{ marginRight: "10px" }}>🐦</span>
          <span style={{ marginRight: "10px" }}>📘</span>
          <span>💼</span>
        </div> */}
      </div>
    </div>
  );
}

export default PolarisRegistrationEmail;