import * as React from 'react';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import { pink } from '@mui/material/colors';
import { setMember } from '../store/MemberSlice';
// import QuestionValues from 

const View = ({ member }) => {

  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Member</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="title"
            label="First Name"
            type="text"
            value={member.first_name}
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="last_name"
            label="Last Name"
            type="text"
            value={member.last_name}
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="id"
            label="ID"
            type="text"
            value={member.id}
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="city"
            label="City"
            type="text"
            value={member.city}
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="street"
            label="Street"
            type="text"
            value={member.street}
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="house_number"
            label="House Number"
            type="text"
            value={member.house_number}
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="phone"
            label="Phone"
            type="text"
            value={member.phone}
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="cell_phone"
            label="Cell Phone"
            type="text"
            value={member.cell_phone}
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
  // handleClickOpen()
};

export default View;

