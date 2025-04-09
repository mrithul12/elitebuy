import React, { useContext, useEffect, useState } from "react";
import "./Shope.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { CartContext } from "../context/CartContext";


const Shope = () => {
  const [product, setProduct] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const {addToCart} = useContext(CartContext)
  const getProduct = async () => {
    try {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      setProduct(data.products);
    } catch (error) {
      console.log("fetch api not working", error);
    }
  };

  // console.log("favourites :", favorites )

  useEffect(() => {
    getProduct();
  }, []);

  const toggleFavorite = (id) => {
    // console.log(id)
    setFavorites((prev) =>
     
      prev.includes(id)  ? prev.filter((favId) => favId !== id) : [...prev, id]
     
    );
  
  };
 

  return (
    <div className="box-container">
      {product.map((item, index) => {
         const isFavorited = favorites.includes(item.id);
        //  console.log("fav",isFavorited)
        return (
          <div
            key={index}
            className="box d-flex flex-column justify-content-between position-relative"
          >
            <div className="box-image d-flex justify-content-center">
              <img src={item.images[0]} alt="product" />
            </div>
            <hr />
            <div className="box-tittle">
              <p className="m-0 fw-bolder">{item.title}</p>
            </div>
            <div className="box-rating">
              <p className="m-0 fw-bold">{item.rating}</p>
            </div>
            <div className="box-price">
              <p className="m-0">${item.price}</p>
            </div>
            <div className="box-description">
              <p className="m-0">{item.description}</p>
            </div>
            <div className="box-button d-flex justify-content-center mt-3">
              <button className="btn" onClick={()=>addToCart(item)}>Add to Cart</button>
            </div>

            <div
              className="box-fav position-absolute"
              style={{ top: 10, right: 10, cursor: "pointer" }}
              onClick={() => toggleFavorite(item.id)}
            >
              <FontAwesomeIcon
                icon={isFavorited ? solidHeart : regularHeart}
                style={{
                  color: isFavorited ? "red" : "black",
                  fontSize: "20px",
                }}
              />
            </div>
          </div>
        );
      })}
      
    </div>
  );
};

export default Shope;
