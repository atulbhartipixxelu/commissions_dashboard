import { useState } from "react";
import { Link } from "react-router-dom";

import Card from "@mui/material/Card";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

import bgImage from "assets/images/bg-sign-in-cover.jpeg";

function Cover() {
  const [formData, setFormData] = useState({
    clientName: "",
    email: "",
    phone: "",
    address1: "",
    address2: "",
    city: "",
    country: "",
    state: "",
    zip: "",
  });

  const handleChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  return (
    <div
      className="sign_in_form"
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem",
      }}
    >
      <Card className="signin-card p-4" style={{ maxWidth: "800px", width: "100%" }}>
        <MDTypography variant="h4" fontWeight="bold" color="text" align="center">
          Welcome to Commissions
        </MDTypography>
        <MDTypography variant="button" color="text" align="center" mb={3}>
          Already have an Account? <Link to="/authentication/sign-in">Sign In</Link>
        </MDTypography>

        <form className="form-grid">
          <div className="form-row">
            <div className="form-col">
              <MDInput
                label="Client Name*"
                fullWidth
                value={formData.clientName}
                onChange={handleChange("clientName")}
              />
            </div>
            <div className="form-col">
              <MDInput
                label="Email"
                type="email"
                fullWidth
                value={formData.email}
                onChange={handleChange("email")}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-col">
              <MDInput
                label="Phone Number"
                fullWidth
                value={formData.phone}
                onChange={handleChange("phone")}
              />
            </div>
            <div className="form-col">
              <MDButton color="info" fullWidth>
                Use Current Location
              </MDButton>
            </div>
          </div>

          <div className="form-row">
            <div className="form-col">
              <MDInput
                label="Address 1"
                fullWidth
                value={formData.address1}
                onChange={handleChange("address1")}
              />
            </div>
            <div className="form-col">
              <MDInput
                label="Address 2"
                fullWidth
                value={formData.address2}
                onChange={handleChange("address2")}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-col">
              <MDInput
                label="City"
                fullWidth
                value={formData.city}
                onChange={handleChange("city")}
              />
            </div>
            <div className="form-col">
              <Select
                value={formData.country}
                onChange={handleChange("country")}
                displayEmpty
                fullWidth
              >
                <MenuItem value="" disabled>
                  Country
                </MenuItem>
                <MenuItem value="India">India</MenuItem>
                <MenuItem value="USA">USA</MenuItem>
              </Select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-col">
              <Select
                value={formData.state}
                onChange={handleChange("state")}
                displayEmpty
                fullWidth
              >
                <MenuItem value="" disabled>
                  State
                </MenuItem>
                <MenuItem value="Delhi">Delhi</MenuItem>
                <MenuItem value="Maharashtra">Maharashtra</MenuItem>
              </Select>
            </div>
            <div className="form-col">
              <MDInput
                label="Zip Code"
                fullWidth
                value={formData.zip}
                onChange={handleChange("zip")}
              />
            </div>
          </div>

          <div className="form-button mt-4">
            <MDButton color="info" fullWidth>
              Next
            </MDButton>
          </div>
        </form>
      </Card>
    </div>
  );
}

export default Cover;
