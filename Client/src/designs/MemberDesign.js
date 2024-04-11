
import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Edit from "../components/Edit";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import UseHttp from '../crud/UseHttp';

// Component for displaying a member's details with options to edit or delete.
const MemberDesign = ({ member }) => {
  // State hooks for managing dialog visibility and delete confirmation
  const [openDialogEdit, setOpenDialogEdit] = React.useState(false)
  const [confirmDelete, setConfirmDelete] = React.useState(false);
  const { Delete } = UseHttp()

  // Handler function to open the delete confirmation dialog.
  const handleDeleteClick = () => {
    setConfirmDelete(true);
  };

  // Handler function to confirm member deletion and send a delete request.
  const handleDeleteConfirm = () => {
    setConfirmDelete(false);
    Delete(`members/${member._id}`)
  };

  // Handler function to cancel member deletion.
  const handleDeleteCancel = () => {
    setConfirmDelete(false);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', marginBottom: '10px' }}>
      <div>
        {/* Display member name and ID */}
        <p>Name: {member.first_name} {member.last_name}</p>
        <p>ID: {member.id}</p>
      </div>

      <div>
        {/* Button to open edit dialog */}
        <Fab color="primary" aria-label="edit" onClick={() => setOpenDialogEdit(true)} style={{ marginRight: '10px' }}>
          <EditIcon />
        </Fab>
        {/* Button to open delete confirmation dialog */}
        <Fab color="secondary" aria-label="delete" onClick={handleDeleteClick}>
          <DeleteIcon />
        </Fab>
      </div>
      {/* Edit dialog */}
      <Edit saveAction={"update"} member={member} open={openDialogEdit} setOpen={setOpenDialogEdit} />

      {/* Delete confirmation dialog */}
      <Dialog open={confirmDelete} onClose={handleDeleteCancel}>
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete {member.first_name} {member.last_name}?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteCancel} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDeleteConfirm} color="secondary">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}

export default MemberDesign;