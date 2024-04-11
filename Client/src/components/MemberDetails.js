import * as React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Paper } from '@mui/material';
import { parseDateToDayjs } from '../services/DateService';

// Component for displaying and editing member details.
const MemberDetails = ({ newMember, setNewMember }) => {

  const onChangeValue = (key, val) => {
    setNewMember({ ...newMember, [key]: val })
  }



  return (
    <React.Fragment>
      <Paper style={{ padding: "1rem", marginBottom: "1rem" }}>
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
          error={!newMember.id}
          required
        />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            autoFocus
            margin="dense"
            id="birth_date"
            label="Birth Date"
            format="DD/MM/YYYY"
            type="date"
            InputLabelProps={{ shrink: true, style: { color: 'black' } }}
            value={parseDateToDayjs(newMember.birth_date)}
            onChange={(date) => { onChangeValue("birth_date", parseDateToDayjs(date)) }}
            slotProps={{ textField: { fullWidth: true, variant: "standard", error: false } }}
            disableFuture
          />
        </LocalizationProvider>
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
      </Paper>
    </React.Fragment>
  );
};

export default MemberDetails;

