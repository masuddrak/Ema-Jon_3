import React from 'react';

const Products = (props) => {
    console.log(props.product)
    const {name,img}=props.product
    return (
        <div>
            <img src={img} alt="" />
        </div>
    );
};

export default Products;