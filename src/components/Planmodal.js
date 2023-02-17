import { Button, Modal, TextField, Typography } from "@mui/material";
import { alignProperty } from "@mui/material/styles/cssUtils";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { json } from "react-router";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  //   bgcolor: "background.paper",
  boxShadow: 50,
  p: 4,

  textAlign: "center",
  backgroundColor: "#e1f5fe",
};

function Planmodal({ open, setOpen, plans }) {
  const handleClose = () => setOpen(false);
  const [input, setInput] = useState({
    name: "",
    price: "",
    doctorName: "",
    slots: "",
  });

  console.log(input);
  let handleiputchange = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };
  let modalinput = JSON.parse(localStorage.getItem("modalinput")) || [];

  let handleSubmit = () => {
    modalinput.push(input);
    localStorage.setItem("modalinput", JSON.stringify(modalinput));
    handleClose();
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h5" color="black">
            ADD PLANS AND PRICE
          </Typography>
          <TextField
            onChange={handleiputchange}
            value={input.name}
            name="name"
            placeholder={" TEST NAME"}
            sx={{ m: 2 }}
          ></TextField>
          <TextField
            onChange={handleiputchange}
            value={input.price}
            name="price"
            type={"number"}
            placeholder={"PRICE"}
            sx={{ m: 2 }}
          ></TextField>
          <TextField
            onChange={handleiputchange}
            value={input.doctorName}
            name="doctorName"
            placeholder={"DOCTOR NAME"}
            sx={{ m: 2 }}
          ></TextField>
          <TextField
            onChange={handleiputchange}
            value={input.slots}
            name="slots"
            type={"number"}
            placeholder={"SLOT"}
            sx={{ m: 2 }}
          ></TextField>
          <br />
          <Button variant="contained" onClick={handleSubmit}>
            {" "}
            Submit
          </Button>
        </Box>
      </Modal>
    </div>
  );
}

export default Planmodal;
