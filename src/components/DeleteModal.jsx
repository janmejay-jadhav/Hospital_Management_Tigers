import {
  Button,
  ButtonGroup,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Modal,
  OutlinedInput,
  Select,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "white",
  boxShadow: 24,
  p: 5,
  borderRadius: 3,
};

function DeleteModal({ open, setOpen, patient }) {
  const [test, setTest] = useState({ plan: [] });

  //handle slots
  let admin = JSON.parse(localStorage.getItem("admindata"));
  let slotHandler = () => {
    patient.plan.map((plans,index) => {
      admin.map((slots) => {
        if (test.plan[index] === slots.name) {
          slots.slots = ++slots.slots;
        }
      });
    });
    localStorage.setItem("admindata", JSON.stringify(admin));
  };


  //multiselect handler
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setTest({
      ...test,
      plan: typeof value === "string" ? value.split(",") : value,
    });
  };

  const handleClose = () => {
    setOpen(false);
  };

  let data = JSON.parse(localStorage.getItem("patientDetails"));

  let deleteTest = () => {
    data.map((xpatient, index) => {
      if (xpatient.name === patient.name) {
        xpatient.plan.map((val, i) => {
          if (test.plan.includes(val, 0)) {
            xpatient.plan.splice(i, 1);
            slotHandler()
            return null;
          }
        });
      }
    });
    localStorage.setItem("patientDetails", JSON.stringify(data));
  };

  let deleteAll = () => {
    data.map((xpatient, i) => {
      if (xpatient.name === patient.name) {
        data.splice(i, 1);
        slotHandler()
        localStorage.setItem("patientDetails", JSON.stringify(data));
      }
    });
  };

  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Typography variant="h6" mb={3}>
            Which Test/s you want to Delete ?
          </Typography>
          <FormControl fullWidth>
            <InputLabel>Select Test</InputLabel>
            <Select
              multiple
              value={test.plan}
              onChange={handleChange}
              input={<OutlinedInput label="Select Test" />}
            >
              {patient.plan.map((plan, index) => (
                <MenuItem key={plan} value={plan}>
                  {plan}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Box
            display="flex"
            justifyContent="space-around"
            alignItems="center"
            mt={5}
          >
            <ButtonGroup>
              <Button
                variant="outlined"
                color="error"
                onClick={() => {
                  deleteTest();
                  handleClose();
                }}
              >
                Delete
              </Button>
              <Button
                color="error"
                onClick={() => {
                  deleteAll();
                  handleClose();
                }}
              >
                DeleteAll
              </Button>
            </ButtonGroup>
            <Button variant="outlined" color="primary" onClick={handleClose}>
              Cancel
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
}

export default DeleteModal;
