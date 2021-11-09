import React from "react";
import products from '../products.json';

export const Product = () => {

    return (<div >
        {products.map(product => {
            return (
                <div key={product.id} >
                    <img src={product.image} alt={`Preview of ${product.title}`} />
                    <h3>{product.title}</h3>
                    <p>{product.description}</p>
                    <p>${product.price}</p>
                    <p>
                        <button className="snipcart-add-item"
                            data-item-id={product.id}
                            data-item-image={product.image}
                            data-item-name={product.title}
                            data-item-url="/"
                            data-item-price={product.price}
                        >
                            Add to Cart
                        </button>
                    </p>
                </div>
            );
        })}
    </div>)
}