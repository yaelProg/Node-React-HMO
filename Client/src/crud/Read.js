import React from "react";
import useAxios from 'axios-hooks'
import { useDispatch } from 'react-redux';
import { setMember, updateMember } from "../store/MemberSlice";
import { useEffect, useState } from 'react';
import { error } from "ajv/dist/vocabularies/applicator/dependencies";
import MemberSlice from "../store/MemberSlice";

const Read = ({ page }) => {

  const [{ data, loading, error }, refetch] = useAxios(`http://localhost:2024/api/${page}`);

  const dispatch = useDispatch();

  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>Error: {error.message}</p>
  }

  switch (page) {
    case 'members':
      dispatch(setMember({ data, refetch }))
      break;
    case 'users':
      // dispatch(setMember({data, refetch}))   
      break;
    case 'posts':
      // dispatch(setMember({data, refetch}))   
      break;
    case 'photos':
      // dispatch(setMember({data, refetch}))   
      break;
    default:
      break;
  }

  return (
    <>
    </>
  )
};

export default Read;



