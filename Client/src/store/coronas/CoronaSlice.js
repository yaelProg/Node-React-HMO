import { createSlice } from "@reduxjs/toolkit";

const initValue ={
        coronaArray: [],
        refetch: ()=>{}
}
const CoronaSlice = createSlice({
    name:"coronaArray",
    initialState: initValue,
    reducers:
    {
        setCorona: (state, actions)=>{
            state.coronaArray=actions.payload.data
            state.refetch = actions.payload.refetch
        },

    }
})
export default CoronaSlice.reducer
export const {setCorona}= CoronaSlice.actions 
