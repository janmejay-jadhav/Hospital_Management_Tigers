import { Box, Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

import React, { useState } from "react";
import Icon from "react-icons-kit";
import { eye } from "react-icons-kit/icomoon/eye";
import { eyeBlocked } from "react-icons-kit/icomoon/eyeBlocked";
import { Link, useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  field: {
    margintop: 20,
    marginBottom: 20,
    display: "block",
  },
});

function Login() {
  const classes = useStyles();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [types, setTypes] = useState("password");

  const [icon, setIcon] = useState(eyeBlocked);

  const HandleToggle = () => {
    if (types === "password") {
      setIcon(eye);
      setTypes("text");
    } else {
      setIcon(eyeBlocked);
      setTypes("password");
    }
  };

  let nav=useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let local = JSON.parse(localStorage.getItem("Users"));
    local.map((value, index) => {
      if (value.email === username && value.password === password) {
        alert("Login Successful!!");
        let token = value;
        localStorage.setItem("token", JSON.stringify(token));
      }
    });
    if (localStorage.getItem("token")) {
      nav("/sidebar");
    }
  };

  return (
    <Box sx={{backgroundImage:""}}>
    <Paper
      elevation={5}
      sx={{
        justifyContent: "center",
        width: { xs: "100%", md: "40rem" },
        paddingBottom: "30px",
        marginLeft: { md: "25%" },
        marginTop: "100px",
        paddingTop: "20px",
        // backgroundColor: "",
        
      }}>
      <Typography variant="h4" fontWeight={"bolder"} sx={{ mb: "40px", color:"#ff5722", fontFamily:"monospace",textTransform:"uppercase" }}>
        Login
      </Typography>

      <Grid container direction={"column"} spacing={3}>
        <Grid item >
          <TextField
            className={classes.field}
            id="username"
            label="Email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Grid>

        <Grid item  display={"flex"} justifyContent="center" ml={8}>
          <TextField
            className={classes.field}
            type={types}
            id="password"
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
           
          ></TextField>
          <Button size="small" onClick={HandleToggle}>
          <Icon icon={icon} size={20}></Icon>
        </Button>
          
        </Grid>

        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={()=>{handleSubmit()}} >
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
