import { Box, Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

import React, { useState } from "react";
import Icon from "react-icons-kit";
import { eye } from "react-icons-kit/icomoon/eye";
import { eyeBlocked } from "react-icons-kit/icomoon/eyeBlocked";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [types, setTypes] = useState("password");

  const [icon, setIcon] = useState(eyeBlocked);

  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const HandleToggle = () => {
    if (types === "password") {
      setIcon(eye);
      setTypes("text");
    } else {
      setIcon(eyeBlocked);
      setTypes("password");
    }
  };

  let nav = useNavigate();

  const handleSubmit = () => {
    let local = JSON.parse(localStorage.getItem("Users"));
    local.map((value, index) => {
      if (value.email === username && value.password === password) {
        alert("Login Successful!!");
        let token = value;
        localStorage.setItem("token", JSON.stringify(token));
      } else {
        alert("Email or Password is Invalid");
      }
    });
    if (localStorage.getItem("token")) {
      nav("/sidebar");
    }
  };

  const Validate = (password) => {
    if (password.length < 8) {
      setError("*Password must be at least 8 characters");
      return false;
    } else if (!/\d/.test(password)) {
      setError("*Password must contain at least one number");
      return false;
    } else if (!/[A-Z]/.test(password)) {
      setError("*Password must contain at least one uppercase letter");
      return false;
    }
    setError("");
    return true;
  };

  let handleError = () => {
    if (Validate(password)) {
      //submit data
    }
  };

  const Validate2 = () => {
    const regex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    if (username === "") {
      setMessage("*Please Enter Valid Email");
    } else if (!regex.test(username)) {
      setMessage("*Email is not Valid");
    } else if (!username.match(regex)) {
      setMessage("*Email is Invalid");
    } else {
      setMessage("");
    }
  };

  return (
    <Box className="box1">
      <Paper
        className="paper12"
        elevation={5}
        sx={{
          justifyContent: "center",
          width: { xs: "100%", md: "50%" },
          paddingBottom: { xs: "50px" },
          marginLeft: { md: "25%" },
          marginTop: "100px",
          paddingTop: "20px",
        }}>
        <AccountCircleIcon sx={{ fontSize: "50px" }} />
        <Typography
          variant="h4"
          fontWeight={"bolder"}
          sx={{
            mb: "10px",
            color: "#ff5722",
            fontFamily: "monospace",
            textTransform: "uppercase",
          }}>
          Login
        </Typography>

        <Grid container direction={"column"} spacing={2}>
          <Grid item>
            <TextField
              sx={{}}
              // className={classes.field}
              id="username"
              label="Email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onKeyUp={Validate2}
              helperText={<span style={{ color: "red" }}>{message}</span>}
            />
          </Grid>

          <Grid item display={"flex"} justifyContent="center" ml={8}>
            <TextField
              // className={classes.field}
              type={types}
              id="password"
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              helperText={<span style={{ color: "red" }}>{error}</span>}
              onKeyUp={handleError}
            />
            <Button size="small" onClick={HandleToggle}>
              <Icon icon={icon} size={20}></Icon>
            </Button>
          </Grid>

          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                handleSubmit();
              }}>
              Login
            </Button>
          </Grid>
          <br />
          <Typography>
            Are you New Member? Click <Link to={"/register"}>Register</Link>
          </Typography>
        </Grid>
      </Paper>
    </Box>
  );
}

export default Login;
