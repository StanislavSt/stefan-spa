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
                    <p>€{product.price}</p>
                    <p>
                        <button className="snipcart-add-item"
                            data-item-url="/"
                            data-item-id={product.id}
                            data-item-image={product.image}
                            data-item-name={product.title}
                            data-item-price={product.price}
                            data-item-custom1-name="Size"
                            data-item-custom1-options="Small|Medium|Large"
                            data-item-custom1-value="Medium"
                        >
                            Add to Cart
                        </button>
                    </p>
                </div>
            );
        })}
    </div>)
}