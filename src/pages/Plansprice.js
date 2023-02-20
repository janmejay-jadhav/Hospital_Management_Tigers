import { DeleteForever } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { blue } from "@mui/material/colors";
import { fontWeight } from "@mui/system";
import React, { useEffect, useState } from "react";
import Planmodal from "../components/Planmodal";
import "./About.css"

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
    doctorName: "Dr Rahul Verma",
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
  backgroundColor: "#cfd8dc",
  margin: "30px",
};

function PlansPrice() {
  const [open, setOpen] = useState(false);
  const [first, setfirst] = useState(false);

  
  if(localStorage.getItem("admindata")===null)
  {
    localStorage.setItem("admindata", JSON.stringify(plans));
  }
  
  let newtest = JSON.parse(localStorage.getItem("admindata")) || [];

  let token = JSON.parse(localStorage.getItem("token"))

  //delte test handler
  let deleteTest = (index) => {
    let confirm = window.confirm("Do You Really Want to Delete Test ?");
    if (confirm) {
      newtest.splice(index, 1);
      localStorage.setItem("admindata", JSON.stringify(newtest));
      setfirst(!first);
    }
  };
  return (
    <Box marginTop={8}>
     {token.email==="admin@gmail.com"&& <Button
        variant="contained"
        style={{ backgroundColor: "green" }}
        onClick={() => {
          setOpen(true);
        }}
      >
        {" "}
        ADD TEST
      </Button>}
      <Grid mt={4} container spacing={3} rowSpacing={5}>
        {newtest.map((plan, index) => (
          <Grid item xs={12} md={6} lg={4} key={index}>
            <Card
            className="card"
              sx={{
                minWidth: 275,
                display: {xs:"block"},
                alignItems: "center",
                boxShadow: "2px 2px 2px",
                padding: 2,
              }}
            >
            <Box display={{xs:"block",md:"flex"}} alignItems={"center"}>
              <CardContent sx={{textAlign: "left",borderRight:"2px solid green" }}>
                <Typography>Test: {plan.name}</Typography>
                <Typography>Price : {plan.price}</Typography>
                <Typography>Doctor : {plan.doctorName}</Typography>
                <Typography>Slots Available:{plan.slots}</Typography>
              </CardContent>
              <CardMedia>
                <Avatar
                  alt="manoj"
                  sx={{ width: 100, height: 100, margin: "auto" }}
                  src="https://cdn.pixabay.com/photo/2017/01/31/22/32/doctor-2027768_960_720.png"
                />
              </CardMedia>
              </Box>
              {token.email==="admin@gmail.com"&& <CardActions sx={{display:"flex", justifyContent:"center"}}>
              <Button
                variant="text"
                size="small"
                color="error"
                sx={{
                  borderRadius: "50%",
                  fontSize: 20,
                  fontWeight: "bolder",
                }}
                onClick={() => deleteTest(index)}
              >
                <DeleteForever />
              </Button>
              </CardActions>}
            </Card>
          </Grid>
        ))}

        {/* This was previous approch for mapping new test plans 
        {newtest.map((plan, index) => (
          <Grid item xs={12} md={6} lg={4} key={index}>
          <Card
            className="memo"
            sx={{
              minWidth: 275,
              display: "flex",
              alignItems: "center",
              boxShadow: "2px 2px 2px",
              padding: 2,
            }}
          >
              <CardContent sx={{ display: "block", textAlign: "left" }}>
                <Typography >
                  Plan Name :{plan.name}
                </Typography>
                <Typography >
                  Plan Price :{plan.price}
                </Typography>
                <Typography >
                  Doctor Name :{plan.doctorName}
                </Typography>
                <Typography
                 
                >
                  Slots Available:{plan.slots}
                </Typography>
              </CardContent>
              <CardMedia>
              <Avatar
              alt="manoj"
              sx={{ width: 100, height: 100, margin: "auto" }}
              src="https://cdn.pixabay.com/photo/2017/01/31/22/32/doctor-2027768_960_720.png"
            />
              </CardMedia>
            </Card>
          </Grid>
          ))}*/}
      </Grid>
      {open && <Planmodal open={open} setOpen={setOpen} plans={plans} />}
    </Box>
  );
}

export default PlansPrice;
