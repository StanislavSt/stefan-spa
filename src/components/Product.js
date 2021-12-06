import React from "react";
import { useEffect, useState } from "react";

export const Product = ({ pp, id }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [products, setProducts] = useState(null);
  const [selected, setSelected] = useState("Size");

  const handleOnClick = (e) => {
    setSelected(e.target.textContent);
    setShowDropdown(false);
  };
  const secret = process.env.REACT_APP_SNIPCART_API;

  useEffect(() => {
    const getProducts = async () => {
      const request = await fetch(
        `https://app.snipcart.com/api/products/${id}`,
        {
          headers: {
            Authorization: `Basic ${btoa(secret)}`,
            Accept: "application/json",
          },
        }
      );
      const result = await request.json();
      setProducts(result);
    };
    getProducts();
  }, []);
  return (
    <div key={pp.id}>
      <div className="product-container">
        <img
          src={pp.image}
          alt={`Preview of ${pp.title}`}
          className="product-image"
        />
        <div className="product-description">
          <h3>{pp.title}</h3>
          <p>{pp.description}</p>
          <p>€{pp.price}</p>

          <div className="dropdown-container">
            <div
              className="dropdown-header"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <span>{selected}</span>
            </div>
            {showDropdown ? (
              <span className="select-box--arrow-up"></span>
            ) : (
              <span className="select-box--arrow-down"></span>
            )}

            {showDropdown ? (
              <div className="dropdown-list">
                {products
                  ? products.variants.map((x) => {
                      return (
                        <div
                          onClick={handleOnClick}
                          className={x.stock <= 0 ? "soldOut" : null}
                        >
                          {x.variation[0].option}
                        </div>
                      );
                    })
                  : null}
              </div>
            ) : null}
          </div>

          <p>
            <button
              className={
                selected == "Size"
                  ? "snipcart-add-item selectSize"
                  : "snipcart-add-item"
              }
              data-item-url="https://stefankartchev.netlify.app/products.json"
              data-item-id={pp.id}
              data-item-image={pp.image}
              data-item-name={pp.title}
              data-item-price={pp.price}
              data-item-custom1-name="Size"
              data-item-custom1-options="Small|Medium|Large"
              data-item-custom1-value={selected}
            >
              Add to Cart
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};
