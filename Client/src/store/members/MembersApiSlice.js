// import apiSlice from "../../app/apiSlice"

// const MembersApiSlice = apiSlice.injectEndpoints({
//     endpoints:(build) => ({
//         getMembers: build.query({
//             query:() => ({
//                 url: "/api/members"
//             }),
//             validateTages: ["Members"]
//         }),
//         addMember: build.mutation({
//            query:(member) => ({
//                 url: "/api/members",
//                 method: "POST",
//                 body: member
//            }),
//            invalidateTags: ["Members"]
//         }),
//         deleteMember: build.mutation({
//             query: ({id}) => ({
//                 url: "/api/members",
//                 method: "DELETE",
//                 body: {id: id}
//             }),
//             invalidateTags: ["Members"]
//         })
//     })
// })

// export const {useGetMembersQuery, useAddMemberMutation, useDeleteMemberMutation} = MembersApiSlice