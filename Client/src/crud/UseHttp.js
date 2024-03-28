import axios from 'axios';
import { useSelector } from 'react-redux';


function UseHttp() {

    const refetcMembers = useSelector(myStore => myStore.MemberSlice.refetch)

    const Create = async (path, newValue) => {
        try {
            const response = await fetch(`http://localhost:2024/api/${path}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newValue)
            });
            refetcMembers();
            const data = await response.json();
            console.log(data);
        }
        catch (error) {
            console.error(error);
        }
    };

    const Update = async (path, newValue) => {
        try {
            const response = await axios.put(`http://localhost:2024/api/${path}`, newValue);
            refetcMembers();
        }
        catch (error) {
            console.error(error);
        }
    }


    const Delete = async (path) => {
        try {
            await axios.delete(`http://localhost:2024/api/${path}`);
            refetcMembers();
            return true; // Return true indicating successful deletion
        } catch (error) {
            console.error(error);
            return false; // Return false indicating deletion failed
        }
    };



    return { Create, Update, Delete }

}


export default UseHttp