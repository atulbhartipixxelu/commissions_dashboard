import { useState } from "react";
import { Link } from "react-router-dom";

import Card from "@mui/material/Card";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";


function PolarisSignup() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    country: "",
    zip: "",
  });

  const handleChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  return (
    <div className="bms-journey-wrapper">
      <Card className="signup-card">
        <div className="signup-heading">
          <h1 className="brand-name">Polaris</h1>
          <p className="welcome-text">Welcome to Polaris</p>
          <p className="sub-text">Create your account or Log in to get started</p>
        </div>

        <form className="form_signup_code">
          <div className="form-group">
            <label className="form-label">Full name*</label>
            <MDInput
              placeholder="Enter your name"
              fullWidth
              value={formData.fullName}
              onChange={handleChange("fullName")}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Email address*</label>
            <MDInput
              placeholder="Enter your email"
              type="email"
              fullWidth
              value={formData.email}
              onChange={handleChange("email")}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Phone number*</label>
            <MDInput
              placeholder="Enter your number"
              fullWidth
              value={formData.phone}
              onChange={handleChange("phone")}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Address*</label>
            <MDInput
              placeholder="Address"
              fullWidth
              value={formData.address}
              onChange={handleChange("address")}
            />
          </div>

          <div className="form-group current_location">
            <MDButton color="info" variant="outlined" fullWidth>
              Use Current Location
            </MDButton>
          </div>

          <div className="form-row">
            <div className="form-col">
              <label className="form-label">City*</label>
              <MDInput
                placeholder="City"
                fullWidth
                value={formData.city}
                onChange={handleChange("city")}
              />
            </div>
            <div className="form-col">
              <label className="form-label">State*</label>
              <MDInput
                placeholder="State"
                fullWidth
                value={formData.state}
                onChange={handleChange("state")}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-col">
              <label className="form-label">Country*</label>
              <Select
                value={formData.country}
                onChange={handleChange("country")}
                displayEmpty
                fullWidth
              >
                <MenuItem value="" disabled>
                  Select Country
                </MenuItem>
                <MenuItem value="India">India</MenuItem>
                <MenuItem value="USA">USA</MenuItem>
              </Select>
            </div>
            <div className="form-col">
              <label className="form-label">Zip Code*</label>
              <MDInput
                placeholder="Zip code"
                fullWidth
                value={formData.zip}
                onChange={handleChange("zip")}
              />
            </div>
          </div>

          <div className="form-group btn_signup_form">
            <MDButton color="info" fullWidth>
              Sign Up
            </MDButton>
          </div>

          <div className="signin-footer">
            <p>
              Already have an account?{" "}
              <Link to="/authentication/sign-in">Sign In</Link>
            </p>
          </div>
        </form>
      </Card>
    </div>
  );
}

export default PolarisSignup;
