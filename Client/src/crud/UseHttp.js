import axios from 'axios';
import { useSelector } from 'react-redux';

/**
 * Custom hook for performing HTTP requests using Axios.
 * Utilizes Redux state for refetching data after certain actions.
 */
function UseHttp() {
    // Redux selectors for refetching data
    const refetchMembers = useSelector(myStore => myStore.MemberSlice.refetch)
    const refetchCoronas = useSelector(myStore => myStore.CoronaSlice.refetch)
    const refetchVaccines = useSelector(myStore => myStore.VaccineSlice.refetch)

    // Function for creating new data via POST request.
    const Create = async (path, newValue) => {
        try {
            const response = await fetch(`http://localhost:2024/api/${path}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newValue)
            });
            refetchMembers();
            refetchCoronas();
            refetchVaccines();
            const data = await response.json();
            console.log(data);
            return data?.member?._id;
        }
        catch (error) {
            console.error(error);
            return null;
        }
    };

    // Function for updating existing data via PUT request.
    const Update = async (path, newValue) => {
        try {
            const response = await axios.put(`http://localhost:2024/api/${path}`, newValue);
            refetchMembers();
            refetchCoronas();
            refetchVaccines();
        }
        catch (error) {
            console.error(error);
        }
    }

    // Function for deleting data via DELETE request.
    const Delete = async (path) => {
        try {
            await axios.delete(`http://localhost:2024/api/${path}`);
            refetchMembers();
            refetchCoronas();
            refetchVaccines();
            return true; // Return true indicating successful deletion
        } catch (error) {
            console.error(error);
            return false; // Return false indicating deletion failed
        }
    };



    return { Create, Update, Delete }

}


export default UseHttp