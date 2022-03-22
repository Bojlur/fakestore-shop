import React, { useEffect, useState } from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';
import './AllProducts.css'

const AllProducts = (props) => {

    const {setCartCount} = props;

    const [products, setProducts] = useState([]);

    useEffect( ()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    }, [products])
    // console.log(products);
    return (
        <div>
            <h2>All products</h2>
            <div className='row  container'>
            {
                products.map (pd => <SingleProduct 
                key={pd.id} product={pd} setCartCount={setCartCount}></SingleProduct>)
            }
            </div>
            
        </div>
    );
};

export default AllProducts;