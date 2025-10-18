import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "../styles/ProductList.css";


// Define a type for the product
interface Product {
    _id: number;
    name: string;
    description: string;
    price: number;
    stock: number;
    category: string;
}


function ProductList() {

    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {

        fetchProducts();
    
    }, []);

    const fetchProducts = async () => {
        const response = await axios.get('http://localhost:5000/api/products/');
        setProducts(response.data);
    }

    const deleteProduct = async (id: number) => {
        await axios.delete(`http://localhost:5000/api/products/${id}`);
        fetchProducts();
    }

    return (
        <div id='productList'>
            <h1>Products</h1>
            
            <ul>
                    {products.map(product => (
                    <li key={product._id} className='product'>
                    <div className='productInfo'>{product.name}</div> <div className='productInfo'>{product.description}</div> <div className='productInfo'>{product.price}</div> <div className='productInfo'>{product.stock}</div> <div className='productInfo'>{product.category}</div>
                </li>
               ))}
            </ul>

            <Link to="/addProduct">Add Product</Link>


        </div>
    )


}

export default ProductList;