import { createSlice } from "@reduxjs/toolkit";

const initValue ={
        memberArray: [],
        refetch: ()=>{}
}
const MemberSlice = createSlice({
    name:"memberArray",
    initialState: initValue,
    reducers:
    {
        setMember: (state, actions)=>{
            state.memberArray=actions.payload.data
            state.refetch = actions.payload.refetch
        },

    }
})
export default MemberSlice.reducer
export const {setMember}= MemberSlice.actions 
