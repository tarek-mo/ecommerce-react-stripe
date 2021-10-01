import { useState } from "react";
import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";
import Confirmation from "./Confirmation";
import {
  Paper,
  Stepper,
  StepLabel,
  Step,
  Typography,
  CircularProgress,
  Divider,
  Button,
  Box,
} from "@mui/material";

const steps = ["Shipping Address", "Paypment Details"];
const Checkout = () => {
  const [activeStep, setActiveStep] = useState(0);
  const paperStyles = {
    mt: "5%",
    mx: "auto",
    maxWidth: "600px",
    px: 2,
    py: 3,
  };
  return (
    <>
      <Paper component="main" sx={paperStyles}>
        <Typography variant="h4" align="center">
          Checkout
        </Typography>
        <Stepper activeStep={activeStep} sx={{ my: 3 }}>
          {steps.map((step) => (
            <Step key={step}>
              <StepLabel>{step}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {activeStep === 0 && <AddressForm />}
        {activeStep === 1 && <PaymentForm />}
        {activeStep === steps.length && <Confirmation />}
      </Paper>
    </>
  );
};

export default Checkout;
