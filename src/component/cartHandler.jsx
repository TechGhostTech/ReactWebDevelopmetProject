import {useEffect, useState} from 'react';
import axios from "axios";

export const UpdateCartSize = async() => {
    const response = await axios.get('http://localhost:3000/cart');
    console.log("UpdateResponse: ", response.data);
    return response.data.length;
}

export const GetCartSize = () => {
    const [cartSize, setCartSize] = useState(0);
    useEffect(() => {
        const update = async () => {
            try{
                const size = await UpdateCartSize();
                setCartSize(size);
            }
            catch (error){
                console.log(error.message);
            }
        }
        update();
    }, []);
    
    console.log("cartSize: ", cartSize);
    return {cartSize};
}

export const UpdateCart = async (requestType, id) => {
    if (requestType == "add") {
        console.log("Add to cart request");
        try {
            const response = await axios.get(`http://localhost:3000/cart?id=${id}`)
            if (response.data.length !== 0) {
                console.log("Adding existing item, incrementing count");
                axios.put(`http://localhost:3000/cart/${id}`, {
                    id: id,
                    count: response.data[0].count + 1
                })
            } else {
                console.log("Adding new item");
                axios.post('http://localhost:3000/cart', {
                    id: id,
                    count: 1
                })
                    .then(function (response) {
                        UpdateCartSize();
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }
        } catch (error) {
            console.log(error);
        }
    } else if (requestType == "remove") {
        console.log("Remove from cart request");
    }
}
