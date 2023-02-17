import {
  Button,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Grid,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Paper,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { blue } from "@mui/material/colors";
import React, { useEffect, useState } from "react";
import "./Slots.css";

const plans = [
  "CBC TEST",
  "THYROID TEST",
  "ECG TEST",
  "CT SCAN",
  "MRI SCAN",
  "ENZYME TEST",
];

const gender = ["Male", "Female", "Other"];

const mop = ["Upi Payment", "Net Banking", "Cash"];

let ls = localStorage.getItem("patientDetails");

let patientDetails = ls ? JSON.parse(ls) : [];

function BookSlots() {
  const [patient, setPatient] = useState({
    name: "",
    bookDate: "",
    gender: "",
    plan: [],
    modeOfPayment: "",
  });

  //error useStates
  const [nameError, setNameError] = useState({ state: false, message: "" });
  const [genderError, setGenderError] = useState({ state: false, message: "" });
  const [dateError, setDateError] = useState({ state: false, message: "" });
  const [planError, setPlanError] = useState({ state: false, message: "" });
  const [mopError, setMopError] = useState({ state: false, message: "" });

  // slot booking handler
  let admin = JSON.parse(localStorage.getItem("admindata")) || [];
  let slotHandler = () => {
    patient.plan.map((plans) => {
      admin.map((slots) => {
        if (plans.includes(slots.name, 0)) {
          slots.slots = --slots.slots;
        }
      });
    });
    localStorage.setItem("admindata", JSON.stringify(admin));
  };

  //handleChange for input fields
  let handleOnChange = (event) => {
    const { name, value } = event.target;
    setPatient({ ...patient, [name]: value });
  };

  //multiselect handlechange
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPatient({
      ...patient,
      plan: typeof value === "string" ? value.split(",") : value,
    });
  };

  //Reset Handler
  const handleReset = () => {
    setPatient({
      name: "",
      bookDate: "",
      gender: "",
      plan: [],
      modeOfPayment: "",
    });
    setGenderError({ state: false, message: "" });
    setDateError({ state: false, message: "" });
    setPlanError({ state: false, message: "" });
    setMopError({ state: false, message: "" });
  };

  //Name error handler
  let handleNameError = () => {
    if (patient.name === "") {
      setNameError({ state: true, message: "please fill out this field" });
    } else {
      setNameError({ state: false, message: "" });
    }
  };

  //Gender error handler
  let handleGenderError = () => {
    if (patient.gender === "") {
      setGenderError({ state: true, message: "please select Gender" });
    } else {
      setGenderError({ state: false, message: "" });
    }
  };

  //Date error Handler
  let handleDateError = () => {
    if (patient.bookDate === "") {
      setDateError({ state: true, message: "please select Date" });
    } else {
      setDateError({ state: false, message: "" });
    }
  };

  //Plan Error Handler
  let handlePlanError = () => {
    if (patient.plan.length === 0) {
      setPlanError({ state: true, message: "please select Test" });
    } else {
      setPlanError({ state: false, message: "" });
    }
  };

  //mop error handler
  let handleMopError = () => {
    if (patient.modeOfPayment === "") {
      setMopError({ state: true, message: "please select mode of payment" });
    } else {
      setMopError({ state: false, message: "" });
    }
  };

  //Data send Function
  let sendData = () => {
    if (
      patient.name &&
      patient.bookDate &&
      patient.gender &&
      patient.plan &&
      patient.modeOfPayment
    ) {
      patientDetails.push(patient);
      localStorage.setItem("patientDetails", JSON.stringify(patientDetails));
      slotHandler();
      handleReset();
      alert("Appointment Booked");
    } else {
      handleGenderError();
      handleDateError();
      handlePlanError();
      handleMopError();
    }
  };

  return (
    <>
      <Paper
        elevation={4}
        sx={{
          width: { xs: "100%", md: "70%" },
          padding: { xs: 5, md: 10 },
          margin: { md: "7% auto" },
        }}
        className="slot"
      >
        <Typography
          variant="h3"
          color="#0277bd"
          sx={{ textShadow: "2px 2px 5px black" }}
          fontWeight={900}
          mt={3}
          mb={6}
        >
          Book Appointment
        </Typography>
        <Grid container spacing={2} justifyContent="space-around">
          <Grid item xs={8}>
            <TextField
              fullWidth
              label="Full Name"
              name="name"
              value={patient.name.toLowerCase()}
              onChange={handleOnChange}
              onKeyUp={handleNameError}
              error={nameError.state}
              helperText={nameError.message}
            />
          </Grid>
          <Grid
            item
            display={{ xs: "block", md: "flex" }}
            alignItems="center"
            justifyContent="space-around"
            xs={8}
          >
            <FormControl error={genderError.state}>
              <FormLabel>Gender</FormLabel>
              <RadioGroup
                name="gender"
                value={patient.gender}
                onChange={handleOnChange}
              >
                {gender.map((gender, index) => (
                  <FormControlLabel
                    key={index}
                    value={gender}
                    control={<Radio />}
                    label={gender}
                  />
                ))}
              </RadioGroup>
              {genderError.state && (
                <FormHelperText>{genderError.message}</FormHelperText>
              )}
            </FormControl>
            <TextField
              type="date"
              name="bookDate"
              value={patient.bookDate}
              onChange={handleOnChange}
              error={dateError.state}
              helperText={dateError.message}
            />
          </Grid>
          <Grid item xs={8}>
            <FormControl fullWidth error={planError.state}>
              <InputLabel>Select Test</InputLabel>
              <Select
                multiple
                value={patient.plan}
                onChange={handleChange}
                input={<OutlinedInput label="Select Test" />}
              >
                {admin.map((plan, index) => (
                  <MenuItem
                    disabled={admin[index].slots <= 0 ? true : false}
                    key={plan.name}
                    value={plan.name}
                  >
                    {plan.name}
                  </MenuItem>
                ))}
              </Select>
              {planError.state && (
                <FormHelperText>{planError.message}</FormHelperText>
              )}
            </FormControl>
          </Grid>
          <Grid item xs={8}>
            <FormControl fullWidth error={mopError.state}>
              <InputLabel>Payment Mode</InputLabel>
              <Select
                value={patient.modeOfPayment}
                onChange={handleOnChange}
                label="Payment Mode"
                name="modeOfPayment"
              >
                {mop.map((mop, index) => (
                  <MenuItem key={index} value={mop}>
                    {mop}
                  </MenuItem>
                ))}
              </Select>
              {mopError.state && (
                <FormHelperText>{mopError.message}</FormHelperText>
              )}
            </FormControl>
          </Grid>
          <Grid
            item
            xs={8}
            display={{ xs: "block", md: "flex" }}
            justifyContent={{ xs: "space-between", md: "space-around" }}
          >
            <Button
              variant="contained"
              size="large"
              sx={{ mb: { xs: 2, sm: 0 } }}
              onClick={sendData}
            >
              Book Appointment
            </Button>
            <Button variant="contained" size="large" onClick={handleReset}>
              Reset
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}

export default BookSlots;
