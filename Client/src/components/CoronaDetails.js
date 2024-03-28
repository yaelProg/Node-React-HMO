import * as React from 'react';
import TextField from '@mui/material/TextField';
import { useSelector } from 'react-redux';

const CoronaDetails = ({ member }) => {

  const coronaArray = useSelector((myStore) => myStore.CoronaSlice.coronaArray);
  console.log(coronaArray);
  const memberCorona = coronaArray?.find(corona => corona.member_id === member._id)

  const [newMember, setNewMember] = React.useState(member)

  const onChangeValue = (key, val) => {
    setNewMember({ ...newMember, [key]: val })
  }

  return (
    <React.Fragment>
      <TextField
        autoFocus
        margin="dense"
        id="positive_result_date"
        label="Positive Result Date"
        type="text"
        value={memberCorona?.positive_result_date}
        onChange={(e) => { onChangeValue("positive_result_date", e.target.value) }}
        fullWidth
        variant="standard"
      />
      <TextField
        autoFocus
        margin="dense"
        id="recovery_date"
        label="Recovery Date"
        type="text"
        value={memberCorona?.recovery_date}
        onChange={(e) => { onChangeValue("recovery_date", e.target.value) }}
        fullWidth
        variant="standard"
      />
    </React.Fragment>
  );
};

export default CoronaDetails;

