import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useEffect } from "react";

function Usertab() {
    
   let data=JSON.parse( localStorage.getItem("Users"))

  let user = [
    {
      name: "Manoj",
      lastname: "Sahu",
      email: "manoj324@gmail.com",
      adress: "Chhattisgarh",
      contact: 9826725555,
    },
    {
      name: "Shubham",
      lastname: "Patil",
      email: "shubham984@gmail.com",
      adress: "Pune",
      contact: 9182736455,
    },
    {
      name: "Jay",
      lastname: "Patil",
      email: "jay4@gmail.com",
      adress: "Pune",
      contact: 9182736455,
    },
    {
      name: "Deepankar",
      lastname: "Tiwari",
      email: "deepankar654@gmail.com",
      adress: "Pune",
      contact: 9182736455,
    },
  ];
  let tablestyle = {
    backgroundColor: "skyblue",
  };
  let headerstyle = {
    color: "blue",
  };
//  
  return (
    <Box marginTop={10}>
      <TableContainer component={Paper} style={tablestyle} elevation={22} sx={12}>
        <Table >
          <TableHead>
            <TableRow>
              <TableCell style={{fontWeight:"bolder"  }}>FIRSTNAME</TableCell>
              <TableCell style={{fontWeight:"bolder"}}>LASTNAME</TableCell>
              <TableCell style={{fontWeight:"bolder"}}>EMAIL</TableCell>
              <TableCell style={{fontWeight:"bolder"}}>ADDRESS</TableCell>
              <TableCell style={{fontWeight:"bolder"}}>CONTACT NO</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {user.map((user, index) => (
              <TableRow key={index} id={index}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.lastname}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.adress}</TableCell>
                <TableCell>{user.contact}</TableCell>
              </TableRow>
            ))}
           {data.map((user, index) => (
              <TableRow key={index} id={index}>
                <TableCell>{user.fname}</TableCell>
                <TableCell>{user.lname}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.address}</TableCell>
                <TableCell>{user.contact}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default Usertab;
