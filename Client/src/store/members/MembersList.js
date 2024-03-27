import React, { useEffect } from "react";
import { setMember } from "../MemberSlice";
import { useDispatch, useSelector } from "react-redux";
import Members from "../../pages/Members";
// import { useDeleteMemberMutation, useGetMembersQuery } from "./MembersApiSlice";

export const MembersList = () => {
    const dispatch = useDispatch();

    // const { data: members, isLoading, isSuccess, iserror, error } = useGetMembersQuery('',
    // {
    //     refetchOnMountOrAgChange: true,
    //     refetchOnFocus: true
    // })
    const members = []
    // const [deleteFunc] = useDeleteMemberMutation()

    const handleDeleteClick = (member) => {
        // deleteFunc({ id: member._id })
    }

    // const memberArray = useSelector((myStore) => myStore.MemberSlice.memberArray)

    useEffect(() => {
        dispatch(setMember(members))
    }, [members])

    const emptyMember = { _id: "", title: "", tags: "" };

    const [openDialog, setOpenDialog] = React.useState(false)

    return (
        <div>
            <Members />
            {/* <AddTaskIcon aria-label="add" onClick={() => setOpenDialog(true)}> */}
            {/* </AddTaskIcon > */}
            {/* {openDialog && <Edit saveAction={"post"} member={emptyMember} />} */}
        </div>
    )
};

