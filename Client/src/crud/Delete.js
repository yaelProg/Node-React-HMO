import axios from 'axios';

const Delete = async (path) => {
    try {
        const [response, refetch] = await axios.delete(`http://localhost:2024/api/${path}`)
    }
    catch (error) {
        console.error(error);
    }
};

export default Delete;