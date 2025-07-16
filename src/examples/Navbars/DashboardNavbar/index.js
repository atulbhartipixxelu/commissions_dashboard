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

import { useState, useEffect } from "react";

// react-router components
import { useLocation, Link } from "react-router-dom";

// prop-types for typechecking
import PropTypes from "prop-types";

// @mui/material components
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Icon from "@mui/material/Icon";

// Custom components
import MDBox from "components/MDBox";
import MDInput from "components/MDInput";
import MDBadge from "components/MDBadge";

// Example components
import Breadcrumbs from "examples/Breadcrumbs";
import NotificationItem from "examples/Items/NotificationItem";

// Context
import {
  useMaterialUIController,
  setTransparentNavbar,
  setMiniSidenav,
  setOpenConfigurator,
} from "context";

function DashboardNavbar({ absolute = false, light = false, isMini = false }) {
  const [navbarType, setNavbarType] = useState();
  const [controller, dispatch] = useMaterialUIController();
  const {
    miniSidenav,
    transparentNavbar,
    fixedNavbar,
    openConfigurator,
  } = controller;
  const [openMenu, setOpenMenu] = useState(false);
  const route = useLocation().pathname.split("/").slice(1);

  useEffect(() => {
    if (fixedNavbar) {
      setNavbarType("sticky");
    } else {
      setNavbarType("static");
    }

    function handleTransparentNavbar() {
      setTransparentNavbar(
        dispatch,
        (fixedNavbar && window.scrollY === 0) || !fixedNavbar
      );
    }

    window.addEventListener("scroll", handleTransparentNavbar);
    handleTransparentNavbar();

    return () => window.removeEventListener("scroll", handleTransparentNavbar);
  }, [dispatch, fixedNavbar]);

  const handleMiniSidenav = () => setMiniSidenav(dispatch, !miniSidenav);
  const handleConfiguratorOpen = () =>
    setOpenConfigurator(dispatch, !openConfigurator);
  const handleOpenMenu = (event) => setOpenMenu(event.currentTarget);
  const handleCloseMenu = () => setOpenMenu(false);

  const renderMenu = () => (
    <Menu
      anchorEl={openMenu}
      anchorReference={null}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      open={Boolean(openMenu)}
      onClose={handleCloseMenu}
      className="navbar-menu"
    >
      <NotificationItem icon={<Icon>email</Icon>} title="Check new messages" />
      <NotificationItem
        icon={<Icon>podcasts</Icon>}
        title="Manage Podcast sessions"
      />
      <NotificationItem
        icon={<Icon>shopping_cart</Icon>}
        title="Payment successfully completed"
      />
    </Menu>
  );

  return (
    <AppBar
      position={absolute ? "absolute" : navbarType}
      color="inherit"
      className={`navbar ${transparentNavbar ? "navbar--transparent" : ""} ${
        absolute ? "navbar--absolute" : ""
      } ${light ? "navbar--light" : ""}`}
    >
      <Toolbar className="navbar__container">
        <MDBox className={`navbar__row ${isMini ? "navbar__row--mini" : ""}`}>
          <IconButton
            className="navbar__icon-btn navbar__desktop-menu-btn"
            onClick={handleMiniSidenav}
            size="small"
            disableRipple
          >
            <Icon fontSize="medium">
              {miniSidenav ? "menu_open" : "menu"}
            </Icon>
          </IconButton>
          <Breadcrumbs
            icon="home"
            title={route[route.length - 1]}
            route={route}
            light={light}
          />
        </MDBox>

        {isMini ? null : (
          <MDBox className='{`navbar__row ${isMini ? "navbar__row--mini" : ""}`}'>
            <MDBox className="navbar__search">
              <MDInput label="Search here" />
            </MDBox>

            <MDBox className='{`navbar__icons ${light ? "navbar__icons--light" : ""}`}'>
              <Link to="/authentication/sign-in/basic">
                <IconButton className="navbar__icon-btn" size="small" disableRipple>
                  <Icon>account_circle</Icon>
                </IconButton>
              </Link>

              <IconButton
                className="navbar__icon-btn navbar__mobile-menu-btn"
                size="small"
                disableRipple
                onClick={handleMiniSidenav}
              >
                <Icon fontSize="medium">
                  {miniSidenav ? "menu_open" : "menu"}
                </Icon>
              </IconButton>

              <IconButton
                className="navbar__icon-btn"
                size="small"
                disableRipple
                onClick={handleConfiguratorOpen}
              >
                <Icon>settings</Icon>
              </IconButton>

              <IconButton
                className="navbar__icon-btn"
                size="small"
                disableRipple
                aria-controls="notification-menu"
                aria-haspopup="true"
                onClick={handleOpenMenu}
              >
                <MDBadge badgeContent={9} color="error" size="xs" circular>
                  <Icon>notifications</Icon>
                </MDBadge>
              </IconButton>

              {renderMenu()}
            </MDBox>
          </MDBox>
        )}
      </Toolbar>
    </AppBar>
  );
}

DashboardNavbar.propTypes = {
  absolute: PropTypes.bool,
  light: PropTypes.bool,
  isMini: PropTypes.bool,
};

export default DashboardNavbar;
