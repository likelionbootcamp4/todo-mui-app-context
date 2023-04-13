import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function TodoSelect({ status, onStatusSelectChange }) {
  return (
    <Box sx={{ minWidth: 120, maxWidth: 200, mb: 2 }}>
      <FormControl fullWidth>
        <InputLabel id="todo-select-label">Age</InputLabel>
        <Select
          labelId="todo-select-label"
          id="todo-select"
          value={status}
          label="Age"
          onChange={(e) => onStatusSelectChange(e.target.value)}
        >
          <MenuItem value={"all"}>all</MenuItem>
          <MenuItem value={"done"}>done</MenuItem>
          <MenuItem value={"undone"}>undone</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
