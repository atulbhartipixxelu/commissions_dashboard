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

import { useRef, useState, useMemo, useEffect } from "react";

// react-chartjs-2 components
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

// @mui material components
import Card from "@mui/material/Card";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Icon from "@mui/material/Icon";

// Material Dashboard 3 PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Chart configurations
import configs from "./configs";

// Material Dashboard 3 PRO React base styles
import typography from "assets/theme/base/typography";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const ProductivityChart = () => {
  const { size } = typography;
  const chartRef = useRef(null);
  const [openMenu, setOpenMenu] = useState(null);
  const [chart, setChart] = useState([]);

  const handleOpenMenu = (event) => setOpenMenu(event.currentTarget);
  const handleCloseMenu = () => setOpenMenu(null);

  useEffect(() => {
    setChart(configs());
  }, []);

  const renderMenu = () => (
    <Menu
      anchorEl={openMenu}
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={Boolean(openMenu)}
      onClose={handleCloseMenu}
      keepMounted
    >
      <MenuItem onClick={handleCloseMenu}>Action</MenuItem>
      <MenuItem onClick={handleCloseMenu}>Anoter action</MenuItem>
      <MenuItem onClick={handleCloseMenu}>Something else here</MenuItem>
    </Menu>
  );

  const { data, options } = useMemo(() => chart, [chart]);

  return (
    <Card sx={{ overflow: "hidden" }}>
      <MDBox bgColor="dark" variant="gradient">
        <MDBox p={2}>
          <MDBox display="flex" justifyContent="space-between">
            <MDBox>
              <MDTypography variant="h6" fontWeight="medium" color="white">
                Productivity
              </MDTypography>
              <MDBox display="flex" alignItems="center">
                <MDBox fontSize={size.lg} color="success" mb={0.3} mr={0.5} lineHeight={0}>
                  <Icon sx={{ fontWeight: "bold" }}>arrow_upward</Icon>
                </MDBox>
                <MDTypography variant="button" color="white" fontWeight="medium">
                  4% more{" "}
                  <MDTypography variant="button" color="white">
                    in 2021
                  </MDTypography>
                </MDTypography>
              </MDBox>
            </MDBox>
            <MDTypography color="white" onClick={handleOpenMenu}>
              <Icon fontSize="default" sx={{ cursor: "pointer" }}>
                more_horiz
              </Icon>
            </MDTypography>
            {renderMenu()}
          </MDBox>
        </MDBox>
        <MDBox sx={{ height: "6.25rem" }}>
          <Line
            ref={chartRef}
            data={{
              labels: data?.labels || [],
              datasets: data?.datasets || [],
            }}
            options={options}
          />
        </MDBox>
      </MDBox>
    </Card>
  );
}

export default ProductivityChart;
