import React from 'react';
import './Products.css'
const Products = (props) => {
    const {product,addToCard}=props
    const {name,img,seller,price,ratings}=product
    return (
        <div className='products'>
            <div className='products-info'>
            <img src={img} alt="" />
            <p>{name}</p>
            <p>Price:${price}</p>
            <p>Seller:{seller}</p>
            <p>Ratings:{ratings} star</p>
            </div>
            <button className='card-btn' onClick={()=>addToCard(product)}>Add To Card</button>
        </div>
    );
};

export default Products;