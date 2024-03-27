// // import { configureStore } from "@reduxjs/toolkit";
// // import apiSlice from "./apiSlice";
// // // import authSliceReducer from "../auth/authSlice"
// // const store = configureStore({
// //     reducer:{
// //         // auth: authSliceReducer,
// //         [apiSlice.reducerPath]: apiSlice.reducer
// //     },
// //     // middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(apiSlice.middleware),
// //     //לשנות לFALSE כשמעלים לאינטרנט
// //     devTools: true
// // })
// // export default store

// import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// import { setupListeners } from '@reduxjs/toolkit/query/react';
// import { api } from './apiSlice';

// const store = configureStore({
//     reducer: {
//         [api.reducerPath]: api.reducer
//     },
//     middleware: getDefaultMiddleware().concat(api.middleware)
// });

// setupListeners(store.dispatch);

// export default store;
