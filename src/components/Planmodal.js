import { Button, Modal, TextField, Typography } from "@mui/material";
import { alignProperty } from "@mui/material/styles/cssUtils";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  //   bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 44,
  p: 4,
  backgroundColor: "white",
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

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h5">ADD PLANS AND PRICE</Typography>
          <TextField
            onChange={handleiputchange}
            value={input.name}
            name="name"
            placeholder={" TEST NAME"}
          ></TextField>
          <TextField
            onChange={handleiputchange}
            value={input.price}
            name="price"
            type={"number"}
            placeholder={"PRICE"}
          ></TextField>
          <TextField
            onChange={handleiputchange}
            value={input.doctorName}
            name="doctorName"
            placeholder={"DOCTOR NAME"}
          ></TextField>
          <TextField
            onChange={handleiputchange}
            value={input.slots}
            name="slots"
            type={"number"}
            placeholder={"SLOT"}
          ></TextField>
          <br />
          <Button
            variant="contained"
            onClick={() => {
              plans.push(input);
              setOpen(false);
              admindata();
            }}
          >
            {" "}
            Submit
          </Button>
        </Box>
      </Modal>
    </div>
  );
}

export default Planmodal;
