// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

// const apiSlice = createApi({
//     reducerPath: "api",
//     //לשנות את הURL
//     baseQuery: fetchBaseQuery({
//         baseUrl: "http://localhost:2024",
//         credentials: 'include',
//         prepareHeaders: (headers, { getState }) => {
//             // const token = getState().auth.token
//             // if (token) {
//             //     headers.set("authorization", `Bearer ${token}`)
//             // }
//             return headers
//         }

//     }),
//     endpoints: () => ({})
// })
// export default apiSlice 
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { createSlice } from "@reduxjs/toolkit";

const initValue = {
    memberArray: [],
    refetch: () => { }
}

export const apiSlice = createSlice({
    name: "memberArray",
    initialState: initValue,
    reducers:
    {
        setMember: (state, actions) => {
            state.memberArray = actions.payload.data
            state.refetch = actions.payload.refetch
        }

    }
});

export default apiSlice.reducer
export const { setMember } = apiSlice.actions 