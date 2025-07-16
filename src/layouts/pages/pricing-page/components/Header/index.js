/**
=========================================================
* Material Dashboard 3 PRO React - v2.4.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-pro-react
* Copyright 2024 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

// Material Dashboard 3 PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 3 PRO React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";

// Material Dashboard 3 PRO React page layout routes
import pageRoutes from "page.routes";

// Images


function Header({ tabValue, tabHandler, children }) {
  return (
    <>
    <div className="header_grid">
      <DefaultNavbar 
      className='group_header_display'
          routes={pageRoutes}
          action={{
            type: "external",
            route: "https://creative-tim.com/product/material-dashboard-pro-react",
            label: "buy now",
            color: "light",
          }}
          transparent
          light
      />
    </div>
    
      <Grid container className="fixed_pricing_bg">
        <Grid item xs={12}>
          <Card>
            {children}
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

// Typechecking props for the Header
Header.propTypes = {
  tabValue: PropTypes.number.isRequired,
  tabHandler: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Header;
