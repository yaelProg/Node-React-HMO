import react from 'react';
import axios from 'axios';

const Update = async (path, newValue) => {
    try {
        const response = await axios.put(`http://localhost:2024/api/${path}`, newValue);
    }
    catch (error) {
        console.error(error);
    }
}

export default Update;



