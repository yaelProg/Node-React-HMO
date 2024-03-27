import { error } from 'ajv/dist/vocabularies/applicator/dependencies';
import react from 'react';

const Create = async (path, newValue) => {
    debugger
    try {
        const response = await fetch(`http://localhost:2024/api/${path}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newValue)
        });
        const data = await response.json();
        console.log(data);
    }
    catch (error) {
        console.error(error);
    }
};

export default Create;