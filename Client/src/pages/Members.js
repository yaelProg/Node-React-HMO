import React from "react";
import Member_design from "../designs/MemberDesign";
import Edit from "../crud/Edit";
import { useSelector } from "react-redux";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { Button, Dialog, DialogContent, DialogActions } from '@mui/material';

const Members = () => {
    const memberArray = useSelector((myStore) => myStore.MemberSlice.memberArray);
    const [openDialog, setOpenDialog] = React.useState(false);
    const [quickView, setQuickView] = React.useState(false);
    const emptyMember = { _id: "", first_name: "", last_name: "", id: "", city: "", street: "", house_number: "", birth_date: "", phone: "", cell_phone: "" };

    const handleAddMember = () => {
        setOpenDialog(true);
    };

    return (
        <div>
            {memberArray.length ? memberArray.map(member => <Member_design member={member} />) : <p>No members</p>}

            <Button
                variant="contained"
                startIcon={<PersonAddIcon />}
                onClick={handleAddMember}
            >
                Add Member
            </Button>

                {openDialog && <Edit saveAction="create" member={emptyMember} />}
        </div>
    )
};

export default Members;
