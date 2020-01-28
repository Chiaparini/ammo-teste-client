import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;

export const fetchProducts = async (limit: number, query: string, page: number) => {
    
    const response = await axios(`${apiUrl}?limit=${limit}&page=${page}&search=${query}`);

    if (response.status !== 200) throw new Error();

    return response.data;
}