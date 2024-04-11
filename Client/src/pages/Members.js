import React from "react";
import MemberDesign from "../designs/MemberDesign";
import Edit from "../components/Edit";
import { useSelector } from "react-redux";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { Button, AppBar, Toolbar, Typography } from '@mui/material';

const Members = () => {
    // Redux selector to retrieve the array of members from the store
    const memberArray = useSelector((myStore) => myStore.MemberSlice.memberArray);
    // State hook to manage the visibility of the add member dialog
    const [openDialog, setOpenDialog] = React.useState(false);
    // Initial empty member object used for creating new members
    const emptyMember = { _id: "", first_name: "", last_name: "", id: "", city: "", street: "", house_number: "", birth_date: "", phone: "", cell_phone: "" };

    const handleAddMember = () => {
        setOpenDialog(true);
    };

    return (
        <div>
            {/* App bar with the title "MEMBERS" */}
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6">MEMBERS</Typography>
                </Toolbar>
            </AppBar>
            {/* Member list section */}
            <div style={{ paddingBottom: "60px" }}>
                {/* Display member designs if there are members, otherwise show a message */}
                {memberArray.length ? memberArray.map(member => <MemberDesign member={member} />) : <p>No members</p>}
                {/* Button to add a new member */}
                <Button
                    variant="contained"
                    startIcon={<PersonAddIcon />}
                    onClick={handleAddMember}
                    style={{
                        position: "fixed",
                        bottom: "10px",
                        left: "10px",
                        zIndex: 1000
                    }}
                >
                    Add Member
                </Button>
                {/* Edit component for creating a new member */}
                <Edit saveAction="create" member={emptyMember} open={openDialog} setOpen={setOpenDialog} />
            </div>
        </div>
    );
};

export default Members;
