import React, {useEffect, useState} from 'react';
import axios from 'axios';

const useFetchData = (url) => {

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const {data: response} = await axios.get(url);
                setData(response);
            } catch (error) {
                console.error(error.message);
            }
            setLoading(false);
        }

        fetchData();
    }, []);

    return {
        data,
        loading,
    };
}

export default useFetchData;