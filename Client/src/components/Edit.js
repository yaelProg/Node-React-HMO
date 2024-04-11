import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useSelector } from 'react-redux';
import { setMember } from '../store/members/MemberSlice';
import UseHttp from '../crud/UseHttp';
import CoronaDetails from './CoronaDetails';
import VaccineDetails from './VaccineDetails';
import MemberDetails from './MemberDetails';

// Edit component for modifying member information.
const Edit = ({ saveAction, member, open, setOpen }) => {

  const { Create, Update, Delete } = UseHttp()

  const handleClose = () => {
    setOpen(false);
  };

  const [newMember, setNewMember] = React.useState(member)

  // Fetch corona and vaccine information from Redux store
  const coronaArray = useSelector((myStore) => myStore.CoronaSlice.coronaArray);
  const vaccineArray = useSelector((myStore) => myStore.VaccineSlice.vaccineArray);

  // Find corona details for the current member
  const memberCorona = coronaArray.find(corona => corona.member_id === member._id);
  const [newCorona, setNewCorona] = React.useState(memberCorona ? memberCorona : { "member_id": `${member._id}`, "positive_result_date": "", "recovery_date": "" })

  // Filter vaccine details for the current member
  const memberVaccines = vaccineArray?.filter(vaccine => vaccine.member_id === member._id)
  const [newVaccines, setNewVaccines] = React.useState(memberVaccines ? memberVaccines : []);

  // React.useEffect(() => {
  //   setNewVaccines(memberVaccines)
  // }, [vaccineArray])

  // React.useEffect(() => {
  //   setNewCorona(coronaArray)
  // }, [coronaArray])

  // React.useEffect(() => {
  //   setNewMember(member)
  // }, [member])

  // Save changes to member information.
  const handleSave = () => {
    save();
    setMember();
    handleClose();
  }

  // Perform save operation based on the specified action.
  const save = async () => {
    switch (saveAction) {
      case 'update':
        {
          await Update(`members`, newMember)
          if (!newCorona._id)
            await Create(`coronas`, newCorona)
          else {
            await Update(`coronas`, newCorona)
          }
          if (memberVaccines.length) {
            for (const element of memberVaccines) {
              await Delete(`vaccines/${element._id}`);
            }
          }
          if (newVaccines.length) {
            for (const element of newVaccines) {
              await Create(`vaccines`, element)
            }
          }
          break;
        }

      case 'create': {
        const id = await Create(`members`, newMember)
        if (id != null) {
          setNewCorona({ ...newCorona, "member": id })
          await Create(`coronas`, { ...newCorona, "member_id": id })
          if (newVaccines.length) {
            for (const element of newVaccines) {
              await Create(`vaccines`, { ...element, "member_id": id })
            }
          }
        }
        break;
      }
      default:
        break;
    }

  }

  return (
    <React.Fragment>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit Member</DialogTitle>
        <DialogContent>
          <MemberDetails newMember={newMember} setNewMember={setNewMember} />
          <CoronaDetails newCorona={newCorona} setNewCorona={setNewCorona} />
          <VaccineDetails member={member} memberVaccine={newVaccines} setMemberVaccine={setNewVaccines} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            disabled={!newMember.id}
            onClick={handleSave}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default Edit;

