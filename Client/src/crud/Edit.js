import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import { pink } from '@mui/material/colors';
import Update from "./Update";
import Create from './Create';
import { setMember } from '../store/MemberSlice';
// import QuestionValues from 

const Edit = ({ saveAction, member }) => {

  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  const [newMember, setNewMember] = React.useState(member)

  const onChangeValue = (key, val) => {
    setNewMember({ ...newMember, [key]: val })
  }

  const handleSave = () => {
    save();
    setMember();
    handleClose();
  }

  const save = async () => {
    debugger
    switch (saveAction) {
      case 'update':
        await Update(`members`, newMember)
        break;
      case 'create':
        await Create(`members`, newMember)
        break;
      default:
        break;
    }

  }

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
            value={newMember.first_name}
            onChange={(e) => { onChangeValue("first_name", e.target.value) }}
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="last_name"
            label="Last Name"
            type="text"
            value={newMember.last_name}
            onChange={(e) => { onChangeValue("last_name", e.target.value) }}
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="id"
            label="ID"
            type="text"
            value={newMember.id}
            onChange={(e) => { onChangeValue("id", e.target.value) }}
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="city"
            label="City"
            type="text"
            value={newMember.city}
            onChange={(e) => { onChangeValue("city", e.target.value) }}
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="street"
            label="Street"
            type="text"
            value={newMember.street}
            onChange={(e) => { onChangeValue("street", e.target.value) }}
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="house_number"
            label="House Number"
            type="text"
            value={newMember.house_number}
            onChange={(e) => { onChangeValue("house_number", e.target.value) }}
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="phone"
            label="Phone"
            type="text"
            value={newMember.phone}
            onChange={(e) => { onChangeValue("phone", e.target.value) }}
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="cell_phone"
            label="Cell Phone"
            type="text"
            value={newMember.cell_phone}
            onChange={(e) => { onChangeValue("cell_phone", e.target.value) }}
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
  // handleClickOpen()
};

export default Edit;

