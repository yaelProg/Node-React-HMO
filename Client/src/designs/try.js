import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Delete from "../crud/Delete";
import Edit from "../crud/Edit";
import View from "../crud/View";
import VisibilityIcon from '@mui/icons-material/Visibility';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

const MemberDesign = ({ member, refetch }) => {
 
  const [openDialog, setOpenDialog] = React.useState(false)
  const [confirmDelete, setConfirmDelete] = React.useState(false);

  const handleDeleteClick = () => {
    setConfirmDelete(true);
  };

  const handleDeleteConfirm = () => {
    setConfirmDelete(false);
    Delete(`members/${member._id}`);
  };

  const handleDeleteCancel = () => {
    setConfirmDelete(false);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', marginBottom: '10px' }}>
      <div>
        <p>Name: {member.first_name} {member.last_name}</p>
        <p>ID: {member.id}</p>
      </div>

      <div>
        <Fab color="primary" aria-label="edit" onClick={() => setOpenDialog(true)} style={{ marginRight: '10px' }}>
          <EditIcon />
          {openDialog && <Edit saveAction={"update"} member={member} />}
        </Fab>

        <Fab color="primary" aria-label="view" onClick={() => setOpenDialog(true)} style={{ marginRight: '10px' }}>
          <VisibilityIcon />
          {openDialog && <View member={member} />}
        </Fab>

        <Fab color="secondary" aria-label="delete" onClick={handleDeleteClick}>
          <DeleteIcon />
        </Fab>
      </div>

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
