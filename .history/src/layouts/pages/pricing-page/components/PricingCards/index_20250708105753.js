import { useState } from "react";
import PropTypes from "prop-types";

// @mui components
import Grid from "@mui/material/Grid";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

// Material Dashboard components
import MDBox from "components/MDBox";

// Card Component
import DefaultPricingCard from "examples/Cards/PricingCards/DefaultPricingCard";

// Context
import { useMaterialUIController } from "context";

// Plan Features Config
const featureSets = {
  monthly: [
    {
      label: "Silver Plan",
      price: 5000,
      badgeColor: "light",
      features: [
        { label: "Workflow", includes: false },
        { label: "Multiple Plan Creation", includes: true },
        { label: "Loan and Recovery", includes: true },
        { label: "Integrated Dashboard", includes: true },
        { label: "Whatsapp & Email Integration", includes: true },
        { label: "Multiple Hierarchy Creation", includes: true },
        { label: "Re-run", includes: false },
        { label: "Employee Target Set Up", includes: false },
      ],
    },
    {
      label: "Ultra Gold",
      price: 5000,
      badgeColor: "info",
      features: [
        { label: "Workflow", includes: true },
        { label: "Multiple Plan Creation", includes: true },
        { label: "Loan and Recovery", includes: true },
        { label: "Integrated Dashboard", includes: true },
        { label: "Whatsapp & Email Integration", includes: true },
        { label: "Multiple Hierarchy Creation", includes: true },
        { label: "Re-run", includes: true },
        { label: "Employee Target Set Up", includes: true },
      ],
    },
    {
      label: "Free Trial 30 Days",
      price: "Free",
      badgeColor: "warning",
      features: [
        { label: "Workflow", includes: false },
        { label: "Multiple Plan Creation", includes: false },
        { label: "Loan and Recovery", includes: false },
        { label: "Integrated Dashboard", includes: true },
        { label: "Whatsapp & Email Integration", includes: true },
        { label: "Multiple Hierarchy Creation", includes: false },
        { label: "Re-run", includes: false },
        { label: "Employee Target Set Up", includes: false },
      ],
    },
  ],
  quarterly: [
    {
      label: "Silver Plan",
      price: 15000,
      badgeColor: "light",
      features: [
        { label: "Workflow", includes: false },
        { label: "Multiple Plan Creation", includes: true },
        { label: "Loan and Recovery", includes: true },
        { label: "Integrated Dashboard", includes: true },
        { label: "Whatsapp & Email Integration", includes: true },
        { label: "Multiple Hierarchy Creation", includes: true },
        { label: "Re-run", includes: false },
        { label: "Employee Target Set Up", includes: false },
      ],
    },
    {
      label: "Ultra Gold",
      price: 15000,
      badgeColor: "info",
      features: [
        { label: "Workflow", includes: true },
        { label: "Multiple Plan Creation", includes: true },
        { label: "Loan and Recovery", includes: true },
        { label: "Integrated Dashboard", includes: true },
        { label: "Whatsapp & Email Integration", includes: true },
        { label: "Multiple Hierarchy Creation", includes: true },
        { label: "Re-run", includes: true },
        { label: "Employee Target Set Up", includes: true },
      ],
    },
  ],
  halfyearly: [
    {
      label: "Silver Plan",
      price: 20000,
      badgeColor: "light",
      features: [
        { label: "Workflow", includes: false },
        { label: "Multiple Plan Creation", includes: true },
        { label: "Loan and Recovery", includes: true },
        { label: "Integrated Dashboard", includes: true },
        { label: "Whatsapp & Email Integration", includes: true },
        { label: "Multiple Hierarchy Creation", includes: true },
        { label: "Re-run", includes: false },
        { label: "Employee Target Set Up", includes: false },
      ],
    },
    {
      label: "Ultra Gold",
      price: 25000,
      badgeColor: "info",
      features: [
        { label: "Workflow", includes: true },
        { label: "Multiple Plan Creation", includes: true },
        { label: "Loan and Recovery", includes: true },
        { label: "Integrated Dashboard", includes: true },
        { label: "Whatsapp & Email Integration", includes: true },
        { label: "Multiple Hierarchy Creation", includes: true },
        { label: "Re-run", includes: true },
        { label: "Employee Target Set Up", includes: true },
      ],
    },
  ],
  annually: [
    {
      label: "Silver Plan",
      price: 40000,
      badgeColor: "light",
      features: [
        { label: "Workflow", includes: false },
        { label: "Multiple Plan Creation", includes: true },
        { label: "Loan and Recovery", includes: true },
        { label: "Integrated Dashboard", includes: true },
        { label: "Whatsapp & Email Integration", includes: true },
        { label: "Multiple Hierarchy Creation", includes: true },
        { label: "Re-run", includes: true },
        { label: "Employee Target Set Up", includes: false },
      ],
    },
    {
      label: "Ultra Gold",
      price: 50000,
      badgeColor: "info",
      features: [
        { label: "Workflow", includes: true },
        { label: "Multiple Plan Creation", includes: true },
        { label: "Loan and Recovery", includes: true },
        { label: "Integrated Dashboard", includes: true },
        { label: "Whatsapp & Email Integration", includes: true },
        { label: "Multiple Hierarchy Creation", includes: true },
        { label: "Re-run", includes: true },
        { label: "Employee Target Set Up", includes: true },
      ],
    },
  ],
};

function PricingCards() {
  const [controller] = useMaterialUIController();
  const { darkMode } = controller;

  const [selectedTab, setSelectedTab] = useState("monthly");

  const handleTabChange = (event, newValue) => setSelectedTab(newValue);

  const currentPlans = featureSets[selectedTab];

  return (
    <MDBox position="relative" zIndex={10} mt={6} px={{ xs: 1, sm: 3 }}>
      {/* Tabs */}
      <Tabs
        value={selectedTab}
        onChange={handleTabChange}
        centered
        textColor="primary"
        indicatorColor="primary"
      >
        <Tab label="Monthly" value="monthly" />
        <Tab label="Quarterly" value="quarterly" />
        <Tab label="Halfyearly" value="halfyearly" />
        <Tab label="Annually" value="annually" />
      </Tabs>

      {/* Pricing Cards */}
      <Grid container spacing={3} justifyContent="center" mt={2}>
        {currentPlans.map((plan, idx) => (
          <Grid item xs={12} sm={6} md={4} lg={4} key={idx}>
            <DefaultPricingCard
              color={darkMode ? "dark" : "white"}
              badge={{ color: plan.badgeColor, label: plan.label }}
              price={{
                currency: plan.price === "Free" ? "" : "₹",
                value: plan.price,
                type: "mo",
              }}
              specifications={plan.features}
              action={{
                type: "internal",
                route: "/",
                color: darkMode ? "warning" : "dark",
                label: plan.price === "Free" ? "Start Free" : "Get Started",
              }}
              shadow={darkMode}
            />
          </Grid>
        ))}
      </Grid>

      {/* Footer Input Fields */}
      <Grid container spacing={2} mt={4} justifyContent="center">
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            fullWidth
            variant="outlined"
            label="Selected Plan"
            value={currentPlans[0].label}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            fullWidth
            variant="outlined"
            label="Amount"
            value={`₹${currentPlans[0].price}`}
          />
        </Grid>
        <Grid item xs={6} sm={3} md={2}>
          <Button fullWidth variant="contained" color="info">
            Back
          </Button>
        </Grid>
        <Grid item xs={6} sm={3} md={2}>
          <Button fullWidth variant="contained" color="warning">
            Sign Up
          </Button>
        </Grid>
      </Grid>
    </MDBox>
  );
}

export default PricingCards;
