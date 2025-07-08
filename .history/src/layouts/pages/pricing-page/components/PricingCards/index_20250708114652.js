import { useState } from "react";

// MUI components
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";

// Material Dashboard components
import MDBox from "components/MDBox";
import DefaultPricingCard from "examples/Cards/PricingCards/DefaultPricingCard";
import { useMaterialUIController } from "context";

// Annual plans only
const annualPlans = [
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
];

export default function PricingCards() {
  const [controller] = useMaterialUIController();
  const { darkMode } = controller;

  const [selectedPlanIndex, setSelectedPlanIndex] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState({ name: "", price: "" });

  return (
    <MDBox position="relative" zIndex={10} mt={6} px={{ xs: 1, sm: 3 }} className="pricing_table">
      {/* Heading */}
      <MDBox textAlign="center" mb={4}>
        <h3 style={{ fontWeight: "bold" }}>Choose Your Subscription Plan</h3>
      </MDBox>

      {/* Pricing Cards */}
      <Grid container spacing={3} justifyContent="center">
        {annualPlans.map((plan, idx) => (
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
                  type: "yr",
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
