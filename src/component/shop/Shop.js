import React, { useEffect, useState } from 'react';
import './Shop.css'

const Shop = () => {
    const [products, setProducts]=useState([]);
    useEffect(()=>{
        fetch('./products.JSON')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div className="product-contaier">
            <div className="shop-design">
                <h2>Shop: {products.length} </h2>
                {
                    products.map(product=>console.log(product))
                }
            </div>
            <div className="order-summery">
        <h2>Order Summery</h2>
            </div>
        </div>
    );
};

export default Shop;