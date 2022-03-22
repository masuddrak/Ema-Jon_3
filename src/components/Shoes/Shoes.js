import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';
import './Shoes.css'
const Shoes = () => {
    const [card,setCard]=useState([]);
    const [products,setProducts]=useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[]);
    const addToCard=(products)=>{
        const newCard=[...card,products]
        setCard(newCard)
    }
    return (
        <div className='shoes'> 
            <div className="shoes-items">
                {
                   products.map(product=><Products 
                    key={product.id}
                    product={product}
                    addToCard={addToCard}
                    ></Products>) 
                }
            </div>
            <div className="shoes-summary">
                <h2>Card Summary Info </h2>
                <h3>card added items :{card.length}</h3>
            </div>
        </div>
    );
};

export default Shoes;