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
    <Box p={3}>
      <Grid container spacing={3}>
        {/* LEFT SIDE */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
            <Typography variant="h6" fontWeight="bold" color="orange">
              Complete Payment
            </Typography>

            <Box mt={2}>
              <Typography variant="body2">Selected Plan:</Typography>
              <Typography variant="body1" fontWeight="bold" color="primary">
                Standard
              </Typography>

              <Typography variant="body2" mt={1}>
                Plan Type:
              </Typography>
              <Typography variant="body1" fontWeight="bold" color="primary">
                Monthly
              </Typography>

              <Typography variant="body2" mt={1}>
                Total Payable:
              </Typography>
              <Typography variant="body1" fontWeight="bold" color="primary">
                ₹2000
              </Typography>

              <Typography variant="body2" mt={1}>
                Validity Upto:
              </Typography>
              <Typography variant="body1" fontWeight="bold" color="secondary">
                Aug-14-2025 09:47 AM
              </Typography>
            </Box>

            <Divider sx={{ my: 2 }} />

            {/* Payment Method */}
            <Typography variant="subtitle1" fontWeight="medium">
              Select Payment Method
            </Typography>
            <FormControl>
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
              <Box mt={2} display="flex" gap={1}>
                <TextField variant="outlined" placeholder="4242" sx={{ flex: 1 }} />
                <TextField variant="outlined" placeholder="MM / YY" sx={{ flex: 1 }} />
                <TextField variant="outlined" placeholder="CVC" sx={{ flex: 1 }} />
              </Box>
            )}

            {/* Buttons */}
            <Box display="flex" justifyContent="space-between" mt={3}>
              <Button variant="outlined" color="primary">
                Change Plan
              </Button>
              <Button variant="contained" color="primary">
                Pay ₹2000
              </Button>
            </Box>
          </Paper>
        </Grid>

        {/* RIGHT SIDE */}
        <Grid item xs={12} md={6}>
          <Paper elevation={2} sx={{ p: 3, borderRadius: 2 }}>
            <Typography color="error" fontWeight="bold">
              Test Card Information
            </Typography>
            <Typography variant="body2" mt={1}>
              For testing purposes, use the following card details:
            </Typography>
            <ul style={{ paddingLeft: 16 }}>
              <li>
                <strong>Card Number:</strong> 4242 4242 4242 4242
              </li>
              <li>
                <strong>MM:</strong> Any month (e.g., 12)
              </li>
              <li>
                <strong>YY:</strong> Any year greater than 25 (e.g., 30)
              </li>
              <li>
                <strong>CVV:</strong> Any three digits (e.g., 123)
              </li>
            </ul>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
