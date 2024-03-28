import React from "react";
import MemberDesign from "../designs/MemberDesign";
import Edit from "../components/Edit";
import { useSelector } from "react-redux";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { Button, AppBar, Toolbar, Typography } from '@mui/material';

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
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6">MEMBERS</Typography>
                </Toolbar>
            </AppBar>

            <div style={{ paddingBottom: "60px" }}> 
                {memberArray.length ? memberArray.map(member => <MemberDesign member={member} />) : <p>No members</p>}

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

                <Edit saveAction="create" member={emptyMember} open={openDialog} setOpen={setOpenDialog}/>
            </div>
        </div>
    );
};

export default Members;
