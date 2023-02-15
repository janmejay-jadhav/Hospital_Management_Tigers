import { Button, Grid, Paper, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

import { eye } from "react-icons-kit/icomoon/eye";
import { eyeBlocked } from "react-icons-kit/icomoon/eyeBlocked";
import Icon from "react-icons-kit";
import { Link, useNavigate } from "react-router-dom";

let ls = localStorage.getItem("Users");
let table = ls ? JSON.parse(ls) : [];

function Register() {

  let nav=useNavigate();
  const [types, setTypes] = useState("password");
  const [types1, setTypes1] = useState("password");
  const [icon, setIcon] = useState(eyeBlocked);
  const [icon1, setIcon1] = useState(eyeBlocked);

  const HandleToggle = () => {
    if (types === "password") {
      setIcon(eye);
      setTypes("text");
    } else {
      setIcon(eyeBlocked);
      setTypes("password");
    }
  };
  const HandleToggle1 = () => {
    if (types1 === "password") {
      setIcon1(eye);
      setTypes1("text");
    } else {
      setIcon1(eyeBlocked);
      setTypes1("password");
    }
  };

  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const [cont, setCont] = useState({
    fname: "",
    lname: "",
    email: "",
    address: "",
    contact: "",
    password: "",
    ReConfirm: "",
  });

  let AddUser = () => {
      table.push(cont);
      localStorage.setItem("Users", JSON.stringify(table));
  };

  const validatePassword = (password, confirmPassword) => {
    if (password.length < 8) {
      setError("Password must be at least 8 characters long");
      return false;
    } else if (!/\d/.test(password)) {
      setError("Password must contain at least one number");
      return false;
    } else if (!/[A-Z]/.test(password)) {
      setError("Password must contain at least one uppercase letter");
      return false;
    } else if (password !== confirmPassword) {
      setError("Passwords do not match");
      return false;
    }
    setError("");
    return true;
  };

  let handleError = () => {
    if (validatePassword(cont.password, cont.ReConfirm)) {
      //submit data
    }
  };

  const EmailValidation = () => {
    const regXp = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    if (regXp.test(cont.email)) {
      setMessage("*Email is Invalid");
    } else if (cont.email === "") {
      setMessage("*Please Enter Valid Email");
    } else if (!regXp.test(cont.email)) {
      setMessage("*Email is not Valid");
    } else {
      setMessage("");
    }
  };

  let HandleChange = (e) => {
    let name = e.target.name;
    let values = e.target.value;
    setCont({ ...cont, [name]: values });
  };
  return (
    <Paper
      elevation={5}
      sx={{
        justifyContent: "center",
        width: { xs: "100%", md: "50%" },
        paddingBottom: "50px",
        marginLeft: { md: "25%" },
        marginTop: "50px",
      }}>
      <Typography variant="h4" sx={{ fontWeight: "bolder", pt: "20px" }}>
        Sign Up
      </Typography>
      <br />
      <Grid container direction={"column"} spacing={2}>
        <Grid item>
          <TextField
            variant="outlined"
            label="First Name"
            sx={{ width: "60%" }}
            value={cont.fname}
            name="fname"
            onChange={HandleChange}
            autoComplete="off"
          />
        </Grid>
        <Grid item>
          <TextField
            variant="outlined"
            label="Last Name"
            sx={{ width: "60%" }}
            value={cont.lname}
            name="lname"
            onChange={HandleChange}
            autoComplete="off"
          />
        </Grid>
        <Grid item>
          <TextField
            variant="outlined"
            label="Email"
            sx={{ width: "60%" }}
            value={cont.email}
            name="email"
            onChange={HandleChange}
            autoComplete="off"
            onKeyUp={EmailValidation}
            helperText={<span style={{ color: "red" }}>{message}</span>}
          />
        </Grid>
        <Grid item>
          <TextField
            variant="outlined"
            label="Address"
            multiline
            maxRows={3}
            sx={{ width: "60%" }}
            value={cont.address}
            name="address"
            onChange={HandleChange}
            autoComplete="off"
          />
        </Grid>
        <Grid item>
          <TextField
            variant="outlined"
            label="Contact"
            sx={{ width: "60%" }}
            value={cont.contact}
            name="contact"
            onChange={HandleChange}
            autoComplete="off"
          />
        </Grid>
        <Grid item display={"flex"} justifyContent="center" ml={5}>
          <TextField
            variant="outlined"
            label="Password"
            type={types}
            sx={{ width: "60%" }}
            value={cont.password}
            name="password"
            onChange={HandleChange}
            autoComplete="off"
            helperText={<span style={{ color: "red" }}>{error}</span>}
            onKeyDown={handleError}
          />
          <Button onClick={HandleToggle}>
            <Icon icon={icon} size={25}></Icon>
          </Button>
        </Grid>
        <Grid item display={"flex"} justifyContent="center" ml={5}>
          <TextField
            variant="outlined"
            label="Confirm Password"
            type={types1}
            sx={{ width: "60%" }}
            value={cont.ReConfirm}
            name="ReConfirm"
            onChange={HandleChange}
            autoComplete="off"
            helperText={<span style={{ color: "red" }}>{error}</span>}
            onKeyUp={handleError}
          />
          <Button onClick={HandleToggle1}>
            <Icon icon={icon1} size={25}></Icon>
          </Button>
        </Grid>
        <Grid item display={"flex"} justifyContent="space-evenly">
          <Button onClick={() => {AddUser();nav("/")}} variant="contained">
            Register
          </Button>
          <Button variant="contained" color="error">
            Cancel
          </Button>
          
        </Grid>
        <br />
        <Typography>
        Already Have An Account? <Link to={"/"}>Login</Link>
        </Typography>
      </Grid>
    </Paper>
  );
}

export default Register;