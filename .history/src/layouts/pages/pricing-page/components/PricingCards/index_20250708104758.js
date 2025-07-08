import React, { useState } from "react";
import "./PricingTable.css"; // Make sure to create and import the CSS file

const plansData = {
  monthly: [
    {
      title: "Silver Plan",
      price: "5000",
      color: "silver",
      features: [
        false,
        true,
        true,
        true,
        true,
        true,
        false,
        false,
      ],
    },
    {
      title: "Ultra Gold",
      price: "5000",
      color: "gold",
      features: [true, true, true, true, true, true, true, true],
    },
    {
      title: "Free Trial 30 Days",
      price: "Free",
      color: "free",
      features: [false, false, false, true, true, false, false, false],
    },
  ],
  quarterly: [
    {
      title: "Silver Plan",
      price: "15000",
      color: "silver",
      features: [false, true, true, true, true, true, false, false],
    },
    {
      title: "Ultra Gold",
      price: "15000",
      color: "gold",
      features: [true, true, true, true, true, true, true, true],
    },
  ],
  halfyearly: [
    {
      title: "Silver Plan",
      price: "20000",
      color: "silver",
      features: [false, true, true, true, true, true, false, false],
    },
    {
      title: "Ultra Gold",
      price: "25000",
      color: "gold",
      features: [true, true, true, true, true, true, true, true],
    },
  ],
  annually: [
    {
      title: "Silver Plan",
      price: "40000",
      color: "silver",
      features: [false, true, true, true, true, true, true, false],
    },
    {
      title: "Ultra Gold",
      price: "50000",
      color: "gold",
      features: [true, true, true, true, true, true, true, true],
    },
  ],
};

const featureList = [
  "Workflow",
  "Multiple Plan Creation",
  "Loan and Recovery",
  "Integrated Dashboard",
  "Whatsapp & Email Integration",
  "Multiple Hierarchy Creation",
  "Re-run",
  "Employee Target Set Up",
];

export default function PricingTable() {
  const [activeTab, setActiveTab] = useState("monthly");

  return (
    <div className="pricing_table">
      <h2>Choose Your Subscription Plan</h2>

      <div className="tabs">
        {["annually", "halfyearly", "quarterly", "monthly"].map((tab) => (
          <button
            key={tab}
            className={activeTab === tab ? "active" : ""}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      <div className="cards">
        {plansData[activeTab].map((plan, idx) => (
          <div className={`card ${plan.color}`} key={idx}>
            <h3>{plan.title}</h3>
            <h2>₹{plan.price}</h2>
            <ul>
              {plan.features.map((hasFeature, i) => (
                <li key={i} className={hasFeature ? "tick" : "cross"}>
                  {hasFeature ? "✓" : "✗"} {featureList[i]}
                </li>
              ))}
            </ul>
            <button className="get-started-btn">Get Started</button>
          </div>
        ))}
      </div>

      <div className="footer">
        <input type="text" placeholder="Selected Plan" value="Silver Plan" />
        <input type="text" placeholder="Amount" value="40000" />
        <button className="back-btn">Back</button>
        <button className="signup-btn">📝 Sign Up</button>
      </div>
    </div>
  );
}
