import React from "react";
import "./FoodItem.css";
import { assets } from "../../assets/assets"; // adjust path if needed

const FoodItem = ({ id, description, price, image, name }) => (
  <div className="food-item">
    <img className="food-item-image" src={image} alt={name} />
    <div className="food-item-info">
      <div className="food-item-name-rating">
        <span>{name}</span>
        <img src={assets.rating_starts} alt="rating" />
      </div>
      <p>{description}</p>
      <span>${price}</span>
    </div>
  </div>
);

export default FoodItem;
