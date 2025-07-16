import { useState } from "react";

// MUI components
import Grid from "@mui/material/Grid";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";

// Material Dashboard components
import MDBox from "components/MDBox";
import { useMaterialUIController } from "context";

// Feature sets for different plans
const featureSets = {
  monthly: [
    {
      label: "Silver Plan",
      price: 5000,
      description: "Ideal For Silver Plan monthly use",
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
      description: "Ideal For Gold Plan monthly use",
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
      description: "Ideal For Free Trial 7 Days use",
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
      label: "Quarter Silver",
      price: 15000,
      description: "Ideal For Quarter Silver monthly use",
      badgeColor: "light",
      features: [
        { label: "Workflow", includes: true },
        { label: "Loan and Recovery", includes: true },
        { label: "Multiple Plan Creation", includes: false },
        { label: "Integrated Dashboard", includes: true },
        { label: "Whatsapp & Email Integration", includes: true },
        { label: "Multiple Hierarchy Creation", includes: true },
        { label: "Re-run", includes: false },
        { label: "Employee Target Set Up", includes: false },
      ],
    },
    {
      label: "Quarter Gold",
      price: 18000,
      description: "Ideal For Quarter Gold monthly use",
      badgeColor: "info",
      features: [
        { label: "Workflow", includes: true },
        { label: "Loan and Recovery", includes: true },
        { label: "Multiple Plan Creation", includes: true },
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
      label: "Halfyear Silver",
      price: 25000,
      description: "Ideal For Halfyear Silver monthly use",
      badgeColor: "light",
      features: [
        { label: "Workflow", includes: true },
        { label: "Loan and Recovery", includes: true },
        { label: "Multiple Plan Creation", includes: true },
        { label: "Integrated Dashboard", includes: true },
        { label: "Whatsapp & Email Integration", includes: true },
        { label: "Multiple Hierarchy Creation", includes: true },
        { label: "Re-run", includes: true },
        { label: "Employee Target Set Up", includes: false },
      ],
    },
    {
      label: "Halfyear Gold",
      price: 30000,
      description: "Ideal For Halfyear Gold monthly use",
      badgeColor: "info",
      features: [
        { label: "Workflow", includes: true },
        { label: "Loan and Recovery", includes: true },
        { label: "Multiple Plan Creation", includes: true },
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
      label: "Annual Silver",
      price: 45000,
      description: "Ideal For Annual Silver monthly use",
      badgeColor: "light",
      features: [
        { label: "Workflow", includes: true },
        { label: "Loan and Recovery", includes: true },
        { label: "Multiple Plan Creation", includes: true },
        { label: "Integrated Dashboard", includes: true },
        { label: "Whatsapp & Email Integration", includes: true },
        { label: "Multiple Hierarchy Creation", includes: true },
        { label: "Re-run", includes: true },
        { label: "Employee Target Set Up", includes: true },
      ],
    },
    {
      label: "Annual Gold",
      price: 55000,
      description: "Ideal For Annual Gold monthly use",
      badgeColor: "info",
      features: [
        { label: "Workflow", includes: true },
        { label: "Loan and Recovery", includes: true },
        { label: "Multiple Plan Creation", includes: true },
        { label: "Integrated Dashboard", includes: true },
        { label: "Whatsapp & Email Integration", includes: true },
        { label: "Multiple Hierarchy Creation", includes: true },
        { label: "Re-run", includes: true },
        { label: "Employee Target Set Up", includes: true },
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
    <MDBox className="pricing_table">
      <div className="pricing_header">
        <div className="our_plan_list">
          <ul>
            <li> OUR PLANS</li>
          </ul>
          <Typography variant="h4" fontWeight="bold" align="center">
            Plans for Your Need
          </Typography>
          <p>
            Select from best plan, ensuring a perfect match. Need more or less? Customize your subscription for a seamless fit!
          </p>
        </div>
      </div>

      <div className="pricing_tabs">
        <Tabs
          value={selectedTab}
          onChange={handleTabChange}
          centered
          textColor="primary"
          indicatorColor="primary"
          className="tab_box_design"
        >
          <Tab label="Monthly" value="monthly" />
          <Tab label="Quarterly" value="quarterly" />
          <Tab label="Halfyearly" value="halfyearly" />
          <Tab label="Annually" value="annually" />
        </Tabs>
      </div>

      <Grid container spacing={3} justifyContent="center" className="pricing_plan_disble">
        {currentPlans.map((plan, idx) => {
          const isSelected = selectedPlanIndex === idx;
          return (
            <Grid item xs={12} sm={6} md={4} lg={4} key={idx}>
              <Card
              className="select_color_bg"
                onClick={() => {
                  setSelectedPlanIndex(idx);
                  setSelectedPlan({ name: plan.label, price: plan.price });
                }}
                sx={{
                  background: isSelected ? "linear-gradient(180deg, #29B0EA 0%, #66D1FF 100%)!important" : "#fff",
                  color: isSelected ? "#000" : "inherit",
                  borderRadius: "16px",
                  cursor: "pointer",
                  boxShadow: isSelected ? 6 : 2,
                  transition: "0.3s ease",
                }}
              >
                <CardContent className="price_card_display">
                  <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Typography variant="h6" fontWeight="bold">
                      {plan.label}
                    </Typography>
                    {isSelected && <Chip label="Selected" color="success" size="small" className="color_change"/>}
                  </Box>

                  <Typography variant="h4" my={1}>
                    {plan.price === "Free" ? "Free" : `₹${plan.price}`}
                  </Typography>

                  <Typography variant="body2" mb={2}>
                    {plan.description}
                  </Typography>

                  <Box mt={2} className='button_price'>
                    <Button
                      variant="contained"
                      color={plan.price === "Free" ? "warning" : "info"}
                      fullWidth
                    >
                      {plan.price === "Free" ? "Start Free" : "Get Started"}
                    </Button>
                  </Box>

                  <Typography variant="subtitle2" fontWeight="bold" className="subtitle_features">
                    Features:
                  </Typography>

                  <ul style={{ paddingLeft: "1.2rem", margin: 0 }}>
                    {plan.features.map((feature, index) => (
                      <li key={index} style={{ opacity: feature.includes ? 1 : 0.5 }}>
                        {feature.label}
                      </li>
                    ))}
                  </ul>

                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>

      <div className="form_pricing_plan">
        <Grid container spacing={2} mt={4} justifyContent="center" className="form_grid_width">
          <Grid item xs={12} sm={6} md={3} >
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
          <Grid item xs={6} sm={3} md={2} className="back_btn">
            <Button fullWidth variant="contained" color="info" className="back_btn">
              Back
            </Button>
          </Grid>
          <Grid item xs={6} sm={3} md={2} className="sign_in_btn">
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
      </div>
    </MDBox>
  );
}