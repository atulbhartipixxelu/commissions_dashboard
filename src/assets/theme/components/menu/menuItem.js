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

// Material Dashboard 3 PRO React base styles
import colors from "assets/theme/base/colors";
import borders from "assets/theme/base/borders";
import typography from "assets/theme/base/typography";

// Material Dashboard 3 PRO React helper functions
import pxToRem from "assets/theme/functions/pxToRem";

const { light, text, dark } = colors;
const { borderRadius } = borders;
const { size } = typography;

const menuItem = {
  styleOverrides: {
    root: {
      minWidth: pxToRem(160),
      minHeight: "unset",
      padding: `${pxToRem(4.8)} ${pxToRem(16)}`,
      borderRadius: borderRadius.md,
      fontSize: size.sm,
      color: text.main,
      transition: "background-color 300ms ease, color 300ms ease",

      "&:hover, &:focus, &.Mui-selected, &.Mui-selected:hover, &.Mui-selected:focus": {
        backgroundColor: light.main,
        color: dark.main,
      },
    },
  },
};

export default menuItem;
