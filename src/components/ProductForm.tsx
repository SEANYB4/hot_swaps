import React, { useState, useEffect, FormEvent, ChangeEvent } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

// Define a type for the product
interface Product {

    id?: number;
    name: string;
    description: string;
}

type Params = {
    id: string;
}

function ProductForm() {

    const [product, setProduct] = useState<Product>({ name: '', description: ''});

    const navigate = useNavigate();

  


    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
       
        await axios.post('http://localhost:5000/api/products', product);
        
        navigate('/');
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setProduct({ ...product, [event.target.name]: event.target.value})
    }


    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" name="name" value={product.name} onChange={handleChange}></input>
            </label>
            <label>Description:
                <input type="text" name="description" value={product.description} onChange={handleChange} />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
}

export default ProductForm;