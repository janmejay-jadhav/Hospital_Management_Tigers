import { DeleteForeverOutlined } from "@mui/icons-material";
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useState } from "react";
import DeleteModal from "../components/DeleteModal";
import "./Slots.css"

function Booking() {

  const [open, setOpen] = useState(false)
  const [patient, setPatient] = useState("")

  const handleOpen=(patient)=>{
    setPatient(patient)
    setOpen(true)
  }

  let ls = localStorage.getItem("patientDetails");
  let patientDetails = ls ? JSON.parse(ls) : [];
  return (
    <>
      <TableContainer component={Paper} sx={{ mt: 7 }} className="table">
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <TableCell>NAME</TableCell>
              <TableCell>GENDER</TableCell>
              <TableCell>BOOKING DATE</TableCell>
              <TableCell>TEST/S</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {patientDetails.map((patient, index) => (
              <TableRow key={index}>
                <TableCell>{patient.name}</TableCell>
                <TableCell>{patient.gender}</TableCell>
                <TableCell>{patient.bookDate}</TableCell>
                <TableCell>
                  {patient.plan.map((val) => (
                    <p key={val}>{val}</p>
                  ))}
                </TableCell>
                <TableCell>
                  <Button startIcon={<DeleteForeverOutlined/>} variant="outlined" color="error" onClick={()=>handleOpen(patient)}>
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {open&&<DeleteModal open={open} setOpen={setOpen} patient={patient}/>}
    </>
  );
}

export default Booking;
