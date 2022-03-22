import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';
import './Shoes.css'
const Shoes = () => {
    const [products,setProducts]=useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <div className='shoes'> 
            <div className="shoes-items">
                {
                   products.map(product=><Products 
                    key={product.id}
                    product={product}
                    ></Products>) 
                }
            </div>
            <div className="shoes-summary">
                <h2>Card Summary Info </h2>
            </div>
        </div>
    );
};

export default Shoes;