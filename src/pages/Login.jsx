import {
  Box,
  Button,
  Card,
  CardMedia,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

import React, { useState } from "react";
import Icon from "react-icons-kit";
import { eye } from "react-icons-kit/icomoon/eye";
import { eyeBlocked } from "react-icons-kit/icomoon/eyeBlocked";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { GradientTwoTone } from "@mui/icons-material";

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

  let local = JSON.parse(localStorage.getItem("Users"));
  const handleSubmit = () => {
    if (username === "" || password === "") {
      alert("Field should not be empty");
    } else {
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
    <Box>
      <Card
        className="paper12"
        elevation={8}
        sx={{
          justifyContent: "center",
          width: { xs: "100%", md: "50%" },
          paddingBottom: { xs: "50px" },
          marginLeft: { md: "25%" },
          paddingTop: "20px",
          marginTop: { md: "100px" },
        }}>
        <AccountCircleIcon sx={{ fontSize: "80px", color: "GrayText"}} />
        <Typography
          className="type1"
          variant="h5"
          fontWeight={"bolder"}
          sx={{
            mb: "10px",
            color: "#ff5722",
            textTransform: "uppercase",
            fontFamily: "sans-serif",
            fontSize: "30px",
            textShadow:"2px 2px 3px black"
          }}>
          Login
        </Typography>

        <Grid container direction={"column"} spacing={2} >
          <Grid item>
            <TextField
              className="text1"
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
            
              className="text1"
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
            <sup>
              Are you New Member? Click <Link to={"/register"}>Register</Link>
            </sup>
          </Typography>
        </Grid>
      </Card>
    </Box>
  );
}

export default Login;
