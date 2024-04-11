import * as React from 'react';
import TextField from '@mui/material/TextField';
import { useSelector } from 'react-redux';
import { Button, FormControl, InputLabel, MenuItem, Select, Paper, IconButton } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { parseDateToDayjs } from '../services/DateService';

// Component for displaying and editing vaccine details of a member.
const VaccineDetails = ({ member, memberVaccine, setMemberVaccine }) => {

  const onChangeValue = (index, key, val) => {
    const updatedVaccineArray = [...memberVaccine];
    updatedVaccineArray[index] = { ...updatedVaccineArray[index], [key]: val };
    setMemberVaccine(updatedVaccineArray);
  };

  // Adds a new vaccine object to the member's vaccine array.
  const onAddVaccine = () => {
    setMemberVaccine([...memberVaccine, { "member_id": `${member._id}`, "vaccine_date": "", "manufacturer": "" }]);
  };

  // Deletes a vaccine object from the member's vaccine array.
  const onDeleteVaccine = (index) => {
    const updatedVaccineArray = [...memberVaccine];
    updatedVaccineArray.splice(index, 1);
    setMemberVaccine(updatedVaccineArray);
  }

  return (
    <React.Fragment>
      <Paper style={{ padding: "1rem", marginTop: "1rem" }}>
        <h4>Vaccines:</h4>
        {/* Map through the member's vaccine array to display vaccine details */}
        {memberVaccine.map((vaccine, index) => (
          <div key={index}>
            <Paper style={{ margin: "0.5rem", padding: "1rem" }}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  autoFocus
                  margin="dense"
                  id={`vaccine_date_${index}`}
                  label="Vaccine Date"
                  format="DD/MM/YYYY"
                  type="date"
                  InputLabelProps={{ shrink: true, style: { color: 'black' } }}
                  value={parseDateToDayjs(vaccine?.vaccine_date)}
                  onChange={(date) => { onChangeValue(index, "vaccine_date", parseDateToDayjs(date)) }}
                  slotProps={{ textField: { fullWidth: true, variant: "standard", error: false } }}
                />
              </LocalizationProvider>
              <FormControl fullWidth margin="dense">
                <InputLabel id={`manufacturer_${index}-label`}>Manufacturer</InputLabel>
                <Select
                  labelId={`manufacturer_${index}-label`}
                  id={`manufacturer_${index}`}
                  value={vaccine?.manufacturer}
                  onChange={(e) => onChangeValue(index, "manufacturer", e.target.value)}
                  variant="standard"
                >
                  {["Pfizer", "Moderna", "AstraZeneca", "Novavax"].map((option) => (
                    <MenuItem key={option} value={option}>{option}</MenuItem>
                  ))}
                </Select>
              </FormControl>
              {/* Button to delete vaccine */}
              <IconButton color='primary' onClick={(index) => onDeleteVaccine(index)} style={{ marginLeft: '26.5rem', marginTop: '0.5rem' }}><DeleteOutlineIcon /></IconButton>
            </Paper>
          </div>
        ))}
        {/* Button to add new vaccine */}
        <Button onClick={onAddVaccine}>Add Vaccine</Button>
      </Paper>
    </React.Fragment>
  );
};

export default VaccineDetails;