import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import Autocomplete from "@mui/material/Autocomplete";

const options = ["Option 1", "Option 2", "Option 3"];

function Booking() {
  const [value, setValue] = React.useState(options[0]);
  const [inputValue, setInputValue] = React.useState("");

  return (
    <div>
      
        <Typography variant="h6" component="h2">
          Patients Details
        </Typography>

        <div>
          <div>
            <TextField
              label="Patients First Name"
              name="Name"
              type="text"
              placeholder="Patients First Name"
            ></TextField>
          </div>
          <div>
            <TextField
              label="Patients Last Name"
              name="Name"
              type="text"
              placeholder="Patients Last Name"
            ></TextField>
          </div>
          <div>
            <div>
              <br />
              <Autocomplete
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
                inputValue={inputValue}
                onInputChange={(event, newInputValue) => {
                  setInputValue(newInputValue);
                }}
                id="controllable-states-demo"
                options={options}
                sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField {...params} label="Controllable" />
                )}
              />
            </div>
          </div>
          <div>
            <TextField name="Name" type="datetime-local"></TextField>
          </div>
          <div>
            <Button variant="contained">Confirm</Button>
          </div>
        </div>
      
    </div>
  );
}

export default Booking;
