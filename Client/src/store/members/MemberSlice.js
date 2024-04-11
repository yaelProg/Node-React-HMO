// Redux slice for managing member array state and associated actions.
import { createSlice } from "@reduxjs/toolkit";

// Initial state for member array and refetch function
const initValue = {
    memberArray: [],
    refetch: () => { }
}
// Create a slice for managing member array state
const MemberSlice = createSlice({
    name: "memberArray",
    initialState: initValue,
    reducers:
    {
        setMember: (state, actions) => {
            state.memberArray = actions.payload.data
            state.refetch = actions.payload.refetch
        },

    }
})
// Export the reducer and actions
export default MemberSlice.reducer
export const { setMember } = MemberSlice.actions 
