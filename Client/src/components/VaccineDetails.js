import * as React from 'react';
import TextField from '@mui/material/TextField';
import { useSelector } from 'react-redux';
import { Button } from '@mui/material';

const VaccineDetails = ({ member }) => {

  const vaccineArray = useSelector((myStore) => myStore.VaccineSlice.vaccineArray);
  console.log(vaccineArray);

  const [memberVaccine, setMemberVaccine] = React.useState(vaccineArray?.filter(vaccine => vaccine.member_id === member._id))
  const [newMember, setNewMember] = React.useState(member)

  const onChangeValue = (key, val) => {
    setNewMember({ ...newMember, [key]: val })
  }

  const onAddVaccine = () => {
    setMemberVaccine([...memberVaccine, {
      "member_id": `${member._id}`, "vaccine_date": "", "manufacturer": ""
    }])
  }

  return (
    <React.Fragment>
      <h4>Vaccines:</h4>
      {
        memberVaccine?.map(vaccine => <>
          <TextField
            autoFocus
            margin="dense"
            id="vaccine_date"
            label="Vaccine Date"
            type="text"
            value={vaccine?.vaccine_date}
            onChange={(e) => { onChangeValue("vaccine_date", e.target.value) }}
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="manufacturer"
            label="Manufacturer"
            type="text"
            value={vaccine?.manufacturer}
            onChange={(e) => { onChangeValue("manufacturer", e.target.value) }}
            fullWidth
            variant="standard"
          />
        </>)
      }
      <Button onClick={onAddVaccine}>Add Vaccine</Button>

    </React.Fragment>
  );
};

export default VaccineDetails;

