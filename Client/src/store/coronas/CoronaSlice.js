// Redux slice for managing corona array state and associated actions.
import { createSlice } from "@reduxjs/toolkit";

// Initial state for corona array and refetch function
const initValue = {
    coronaArray: [],
    refetch: () => { }
}

// Create a slice for managing corona array state
const CoronaSlice = createSlice({
    name: "coronaArray",
    initialState: initValue,
    reducers:
    {
        setCorona: (state, actions) => {
            state.coronaArray = actions.payload.data
            state.refetch = actions.payload.refetch
        },

    }
})
// Export the reducer and actions
export default CoronaSlice.reducer
export const { setCorona } = CoronaSlice.actions 
