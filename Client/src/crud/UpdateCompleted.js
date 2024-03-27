import react from 'react';
import axios from 'axios';
import refetch from '../crud/Read'
import { useEffect } from 'react';

const UpdateCompleted = async (id) => {
    try {
        const response = await axios.put(`http://localhost:2024/api/members/complete/${id}`)
    }
    catch (error) {
        <p>{error.message}</p>;
    }
}
export default UpdateCompleted;