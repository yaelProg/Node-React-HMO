import { createSlice } from "@reduxjs/toolkit";

const initValue ={
        vaccineArray: [],
        refetch: ()=>{}
}
const VaccineSlice = createSlice({
    name:"vaccineArray",
    initialState: initValue,
    reducers:
    {
        setVaccine: (state, actions)=>{
            state.vaccineArray=actions.payload.data
            state.refetch = actions.payload.refetch
        },

    }
})
export default VaccineSlice.reducer
export const {setVaccine}= VaccineSlice.actions 
