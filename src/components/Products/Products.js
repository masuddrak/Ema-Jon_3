import React from 'react';
import './Products.css'
const Products = (props) => {
    console.log(props.product)
    const {name,img,seller,price,ratings}=props.product
    return (
        <div className='products'>
            <div className='products-info'>
            <img src={img} alt="" />
            <p>{name}</p>
            <p>Price:${price}</p>
            <p>Seller:{seller}</p>
            <p>Ratings:{ratings} star</p>
            </div>
            <button className='card-btn'>Add To Card</button>
        </div>
    );
};

export default Products;