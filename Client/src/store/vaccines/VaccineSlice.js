// Redux slice for managing vaccine array state and associated actions.
import { createSlice } from "@reduxjs/toolkit";

// Initial state for vaccine array and refetch function
const initValue = {
    vaccineArray: [],
    refetch: () => { }
}
// Create a slice for managing vaccine array state
const VaccineSlice = createSlice({
    name: "vaccineArray",
    initialState: initValue,
    reducers:
    {
        setVaccine: (state, actions) => {
            state.vaccineArray = actions.payload.data
            state.refetch = actions.payload.refetch
        },

    }
})
// Export the reducer and actions
export default VaccineSlice.reducer
export const { setVaccine } = VaccineSlice.actions 
