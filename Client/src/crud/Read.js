import React from "react";
import useAxios from 'axios-hooks'
import { useDispatch } from 'react-redux';
import { setMember } from "../store/members/MemberSlice";
import { setCorona } from "../store/coronas/CoronaSlice";
import { setVaccine } from "../store/vaccines/VaccineSlice";

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
    case `coronas`:
      dispatch(setCorona({ data, refetch }))
      break;
    case 'vaccines':
      dispatch(setVaccine({data, refetch}))   
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



