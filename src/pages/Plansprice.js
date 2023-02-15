import {
  Avatar,
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
import React, { useEffect, useState } from "react";
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
  Image: "",
};

function PlansPrice() {
  const [open, setOpen] = useState(false);

  // useEffect(() => {
  //   localStorage.setItem("admindata", JSON.stringify(plans));
  // }, []);
  return (
    <Box marginTop={20}>
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
              <CardContent>
                <Avatar
                  alt="manoj"
                  sx={{ width: 100, height: 100, margin: "auto" }}
                  src="https://cdn.pixabay.com/photo/2017/01/31/22/32/doctor-2027768_960_720.png"
                />
                <Typography variant="h5" fontWeight="bold" color="red">
                  Plan Name :{plan.name}
                </Typography>
                <Typography variant="h5" color="#783046" fontWeight="bold">
                  Plan Price :{plan.price}
                </Typography>
                <Typography variant="h5" color="blue" fontWeight="bold">
                  Doctor Name :{plan.doctorName}
                </Typography>
                <Typography
                  variant="h5"
                  alignItems="center"
                  fontWeight="bold"
                  color="green"
                >
                  Slots Available:{plan.slots}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      {open && <Planmodal open={open} setOpen={setOpen} plans={plans} />}
    </Box>
  );
}

export default PlansPrice;
