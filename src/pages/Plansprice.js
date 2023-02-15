import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { fontWeight } from "@mui/system";
import React, { useState } from "react";
import Planmodal from "../components/Planmodal";

const plans = [
  {
    name: "CBC TEST",
    price: 1000,
    doctorName: "Dr Arvind Sharma",
    slots: 3,
  },
  {
    name: "THYROID TEST",
    price: 1500,
    doctorName: "Dr Anuj Mohan",
    slots: 5,
  },
  {
    name: "ECG TEST",
    price: 2250,
    doctorName: "Dr Aashutosh Sinha",
    slots: 4,
  },
  {
    name: "CT SCAN",
    price: 5500,
    doctorName: "Dr Vineet Singh",
    slots: 3,
  },
  {
    name: " MRI SCAN",
    price: 3700,
    doctorName: "Dr Ajeet Bose",
    slots: 5,
  },
  {
    name: "ENZYME TEST",
    price: 1700,
    doctorName: "Dr Vijay Patil",
    slots: 4,
  },
];
let cardstyle = {
  backgroundColor: "skyblue",
  margin: "30px",
};

function Plansprice() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button
        variant="contained"
        style={{ backgroundColor: "green" }}
        onClick={() => {
          setOpen(true);
        }}
      >
        {" "}
        ADD PLAN
      </Button>
      <Grid container spacing={8} rowSpacing={1}>
        {plans.map((plan, index) => (
          <Grid item xs={4} key={index}>
            <Card
              sx={{ minWidth: 275, boxShadow: "4px 4px 5px black" }}
              style={cardstyle}
            >
              <CardContent >
                <Typography variant="h5">Plan Name :{plan.name}</Typography>
                <Typography variant="h5">Plan Price :{plan.price}</Typography>
                <Typography variant="h5">
                  Doctor Name :{plan.doctorName}
                </Typography>
                <Typography variant="h5" alignItems="center">
                  Slots Available:{plan.slots}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      {open && <Planmodal open={open} setOpen={setOpen} plans={plans} />}
      
    </>
  );
}

export default Plansprice;
