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

import * as Yup from "yup";
import checkout from "layouts/pages/users/new-user/schemas/form";

const {
  formField: { firstName, lastName, email, password, repeatPassword, address1, city, zip, twitter },
} = checkout;

const validations = [
  Yup.object().shape({
    [firstName.name]: Yup.string().required(firstName.errorMsg),
    [lastName.name]: Yup.string().required(lastName.errorMsg),
    [email.name]: Yup.string().required(email.errorMsg).email(email.invalidMsg),
    [password.name]: Yup.string().required(password.errorMsg).min(6, password.invalidMsg),
    [password.name]: Yup.string().required(password.errorMsg).min(6, password.invalidMsg),
    [repeatPassword.name]: Yup.string()
      .required(repeatPassword.errorMsg)
      .oneOf([Yup.ref("password"), null], repeatPassword.invalidMsg),
  }),
  Yup.object().shape({
    [address1.name]: Yup.string().required(address1.errorMsg),
    [city.name]: Yup.string().required(city.errorMsg),
    [zip.name]: Yup.string().required(zip.errorMsg).min(6, zip.invalidMsg),
  }),
  Yup.object().shape({
    [twitter.name]: Yup.string().required(twitter.errorMsg),
  }),
];

export default validations;
