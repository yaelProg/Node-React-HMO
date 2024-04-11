import React from "react";
import useAxios from 'axios-hooks'
import { useDispatch } from 'react-redux';
import { setMember } from "../store/members/MemberSlice";
import { setCorona } from "../store/coronas/CoronaSlice";
import { setVaccine } from "../store/vaccines/VaccineSlice";

const Read = ({ page }) => {

  // Using axios-hooks for fetching data from the API
  const [{ data, loading, error }, refetch] = useAxios(`http://localhost:2024/api/${page}`);

  // Redux dispatcher for updating state
  const dispatch = useDispatch();

  if (loading) {
    return <></>
  }

  if (error) {
    return <p>Error: {error.message}</p>
  }
  // Update Redux state based on the fetched data
  switch (page) {
    case 'members':
      dispatch(setMember({ data, refetch }))
      break;
    case `coronas`:
      dispatch(setCorona({ data, refetch }))
      break;
    case 'vaccines':
      dispatch(setVaccine({ data, refetch }))
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



