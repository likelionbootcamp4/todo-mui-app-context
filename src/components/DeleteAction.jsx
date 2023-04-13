import { Box, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import DeleteDialog from "./DeleteDialog";

export default function DeleteAction({ todo }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box>
      <IconButton onClick={handleOpen}>
        <DeleteIcon />
      </IconButton>
      <DeleteDialog open={open} onClose={handleClose} todo={todo} />
    </Box>
  );
}
