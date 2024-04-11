import * as React from 'react';
import TextField from '@mui/material/TextField';
import { useSelector } from 'react-redux';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import { Paper } from '@mui/material';
import { parseDateToDayjs } from '../services/DateService';

// Component for displaying and editing corona details.
const CoronaDetails = ({ newCorona, setNewCorona }) => {

  const onChangeValue = (key, val) => {
    setNewCorona({ ...newCorona, [key]: val })
  }

  return (
    <React.Fragment>
      <Paper style={{ padding: "1rem" }}>
        <h4>Corona:</h4>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            autoFocus
            margin="dense"
            id="positive_result_date"
            label="Positive Result Date"
            format="DD/MM/YYYY"
            type="date"
            InputLabelProps={{ shrink: true, style: { color: 'black' } }}
            value={dayjs(newCorona?.positive_result_date)}
            onChange={(date) => { onChangeValue("positive_result_date", parseDateToDayjs(date)) }}
            slotProps={{ textField: { fullWidth: true, variant: "standard", error: false } }}
            disableFuture
          />
        </LocalizationProvider>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            autoFocus
            margin="dense"
            id="recovery_date"
            label="Recovery Date"
            format="DD/MM/YYYY"
            type="date"
            InputLabelProps={{ shrink: true, style: { color: 'black' } }}
            value={parseDateToDayjs(newCorona?.recovery_date)}
            onChange={(date) => { onChangeValue("recovery_date", parseDateToDayjs(date)) }}
            slotProps={{ textField: { fullWidth: true, variant: "standard", error: false } }}
            disableFuture
          />
        </LocalizationProvider>
      </Paper>
    </React.Fragment>
  );
};

export default CoronaDetails;

