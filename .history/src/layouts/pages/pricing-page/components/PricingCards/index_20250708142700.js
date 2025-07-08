import { useState } from "react";

// MUI components
import Grid from "@mui/material/Grid";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

// Material Dashboard components
import MDBox from "components/MDBox";
import DefaultPricingCard from "examples/Cards/PricingCards/DefaultPricingCard";
import { useMaterialUIController } from "context";

// Feature sets for different plans
const featureSets = {
  monthly: [
    {
      label: "Silver Plan",
      price: 5000,
      badgeColor: "light",
      features: [
        { label: "Workflow", includes: false },
        { label: "Loan and Recovery", includes: true },
        { label: "Multiple Plan Creation", includes: true },
        { label: "Integrated Dashboard", includes: true },
        { label: "Whatsapp & Email Integration", includes: true },
        { label: "Multiple Hierarchy Creation", includes: true },
        { label: "Re-run", includes: false },
        { label: "Employee Target Set Up", includes: false },
      ],
    },
    {
      label: "Gold Plan",
      price: 8000,
      badgeColor: "info",
      features: [
        { label: "Workflow", includes: true },
        { label: "Loan and Recovery", includes: true },
        { label: "Multiple Plan Creation", includes: true },
        { label: "Integrated Dashboard", includes: true },
        { label: "Whatsapp & Email Integration", includes: true },
        { label: "Multiple Hierarchy Creation", includes: true },
        { label: "Re-run", includes: false },
        { label: "Employee Target Set Up", includes: true },
      ],
    },
    {
      label: "Free Trial",
      price: "Free",
      badgeColor: "warning",
      features: [
        { label: "Workflow", includes: true },
        { label: "Loan and Recovery", includes: false },
        { label: "Multiple Plan Creation", includes: true },
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
      label: "Silver Q",
      price: 14000,
      badgeColor: "light",
      features: [
        { label: "Quarterly Basic Support", includes: true },
        { label: "Email Reports", includes: true },
      ],
    },
    {
      label: "Gold Q",
      price: 20000,
      badgeColor: "info",
      features: [
        { label: "Priority Support", includes: true },
        { label: "Custom Integrations", includes: true },
      ],
    },
  ],
  halfyearly: [
    {
      label: "Silver H",
      price: 25000,
      badgeColor: "light",
      features: [
        { label: "Halfyear Features A", includes: true },
        { label: "Feature B", includes: false },
      ],
    },
    {
      label: "Gold H",
      price: 32000,
      badgeColor: "info",
      features: [
        { label: "Everything in Silver", includes: true },
        { label: "Extra Dashboard", includes: true },
      ],
    },
  ],
  annually: [
    {
      label: "Silver A",
      price: 45000,
      badgeColor: "light",
      features: [
        { label: "Annual Backup", includes: true },
        { label: "Limited API", includes: true },
      ],
    },
    {
      label: "Gold A",
      price: 50000,
      badgeColor: "info",
      features: [
        { label: "Unlimited Support", includes: true },
        { label: "Unlimited API", includes: true },
      ],
    },
  ],
};

export default function PricingCards() {
  const [controller] = useMaterialUIController();
  const { darkMode } = controller;

  const [selectedTab, setSelectedTab] = useState("monthly");
  const [selectedPlanIndex, setSelectedPlanIndex] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState({ name: "", price: "" });

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
    setSelectedPlan({ name: "", price: "" });
    setSelectedPlanIndex(null);
  };

  const currentPlans = featureSets[selectedTab] || [];

  return (
    <MDBox position="relative" zIndex={10} mt={6} px={{ xs: 1, sm: 3 }} className="pricing_table">
      {/* Heading */}
      <Box textAlign="center" mb={3}>
        <Typography variant="h4" fontWeight="bold">
          Choose Your Subscription Plan
        </Typography>
      </Box>

      {/* Tabs */}
      <Tabs
        value={selectedTab}
        onChange={handleTabChange}
        centered
        textColor="primary"
        indicatorColor="primary"
        sx={{ mb: 3 }}
      >
        <Tab label="Monthly" value="monthly" />
        <Tab label="Quarterly" value="quarterly" />
        <Tab label="Halfyearly" value="halfyearly" />
        <Tab label="Annually" value="annually" />
      </Tabs>

      {/* Pricing Cards */}
      <Grid container spacing={3} justifyContent="center">
        {currentPlans.map((plan, idx) => (
          <Grid item xs={12} sm={6} md={4} lg={4} key={idx}>
            <Box
              position="relative"
              onClick={() => {
                setSelectedPlanIndex(idx);
                setSelectedPlan({ name: plan.label, price: plan.price });
              }}
              sx={{ cursor: "pointer" }}
            >
              {selectedPlanIndex === idx && (
                <Chip
                  label="Selected"
                  color="success"
                  size="small"
                  sx={{
                    position: "absolute",
                    top: 12,
                    right: 12,
                    fontWeight: "bold",
                    zIndex: 2,
                  }}
                />
              )}
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
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* Selected Plan Input Fields */}
      <Grid container spacing={2} mt={4} justifyContent="center">
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            fullWidth
            variant="outlined"
            label="Selected Plan"
            value={selectedPlan.name}
            InputProps={{ readOnly: true }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            fullWidth
            variant="outlined"
            label="Amount"
            value={
              selectedPlan.price
                ? selectedPlan.price === "Free"
                  ? "Free"
                  : `₹${selectedPlan.price}`
                : ""
            }
            InputProps={{ readOnly: true }}
          />
        </Grid>
        <Grid item xs={6} sm={3} md={2}>
          <Button fullWidth variant="contained" color="info">
            Back
          </Button>
        </Grid>
        <Grid item xs={6} sm={3} md={2}>
          <Button
            fullWidth
            variant="contained"
            color="warning"
            disabled={!selectedPlan.name}
          >
            Sign Up
          </Button>
        </Grid>
      </Grid>
    </MDBox>
  );
}
