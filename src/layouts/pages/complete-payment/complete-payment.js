import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  TextField,
  Button,
  Paper,
  Divider,
} from "@mui/material";

export default function PaymentPage() {
  const [paymentMethod, setPaymentMethod] = useState("card");

  return (
    <div className="complete_payment_method">
      <Box p={3}>
        <Grid container spacing={3}>
          {/* LEFT SIDE */}
          <Grid item xs={12} md={6} className="complete_payment_dest">
            <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }} className="box-repair">
              <Typography variant="h6" fontWeight="bold" color="#000">
                Complete Payment
              </Typography>

              <Box mt={2} >
                <Typography className="select_plan_data" variant="body2">Selected Plan :</Typography>
                <Typography variant="body1" fontWeight="bold" className="dyanmic_plan">
                  Standard
                </Typography>

                <Typography variant="body2" mt={1} className="select_plan_data">
                  Plan Type :
                </Typography>
                <Typography variant="body1" fontWeight="bold"  className="dyanmic_plan">
                  Monthly
                </Typography>

                <Typography variant="body2" mt={1} className="select_plan_data">
                  Total Payable :
                </Typography>
                <Typography variant="body1" fontWeight="bold"  className="dyanmic_plan">
                  ₹2000
                </Typography>

                <Typography variant="body2" mt={1}  className="select_plan_data">
                  Validity Upto :
                </Typography>
                <Typography variant="body1" fontWeight="bold" color="secondary" className="dyanmic_plan">
                  Aug-14-2025 09:47 AM
                </Typography>
              </Box>


              {/* Payment Method */}
              <Typography variant="subtitle1" fontWeight="medium" className="spacing_incrise">
                Select Payment Method
              </Typography>
              <FormControl className="payment_getway_des">
                <RadioGroup
                  row
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                >
                  <FormControlLabel value="card" control={<Radio />} label="Card" />
                  <FormControlLabel value="upi" control={<Radio />} label="UPI" />
                  <FormControlLabel value="netbanking" control={<Radio />} label="Net Banking" />
                </RadioGroup>
              </FormControl>

              {/* Card Input Fields */}
              {paymentMethod === "card" && (
                <Box mt={2} display="flex" gap={1} className="inputPaymentField">
                  <TextField variant="outlined" placeholder="4242" sx={{ flex: 1 }} />
                  <TextField variant="outlined" placeholder="MM / YY" sx={{ flex: 1 }} />
                  <TextField variant="outlined" placeholder="CVC" sx={{ flex: 1 }} />
                </Box>
              )}

              {/* Buttons */}
              <Box display="flex" justifyContent="space-between" mt={3}>
                <Button variant="outlined" color="primary" className="change_plan_direct">
                  Change Plan
                </Button>
                <Button variant="contained" color="primary" className="pay_plan_direct">
                  Pay ₹2000
                </Button>
              </Box>
            </Paper>
          </Grid>

          {/* RIGHT SIDE */}
          <Grid item xs={12} md={6} className="complete_payment_dest">
            <Paper elevation={2} sx={{ p: 3, borderRadius: 2 }} className="box-repair">
              <Typography variant="subtitle1" fontWeight="medium">
                Test Card Information
              </Typography>
              <Typography variant="body2" mt={1} className="small_description">
                For testing purposes, use the following card details:
              </Typography>
              <ul style={{ paddingLeft: 16 }} className="listing_varients">
                <li>
                  <strong>Card Number :</strong> 4242 4242 4242 4242
                </li>
                <li>
                  <strong>MM :</strong> Any month (e.g., 12)
                </li>
                <li>
                  <strong>YY :</strong> Any year greater than 25 (e.g., 30)
                </li>
                <li>
                  <strong>CVV :</strong> Any three digits (e.g., 123)
                </li>
              </ul>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}


