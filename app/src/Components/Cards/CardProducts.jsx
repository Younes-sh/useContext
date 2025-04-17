import { useContext } from 'react';
import "./CardProducts.css";
import {AppContext} from "../../App";

export default function CardProducts({
  id,
  name,
  price,
  image
}) {

  const {addToCard, setAddToCard,addProduct, setAddProduct} = useContext(AppContext);
  const addToCardBtn = () => {
    setAddToCard(addToCard + 1)
  }
  return (
    <div className="product-card">
    <div className="product-image-container">
      <img 
        src={image} 
        alt={name}
        className="product-image"
      />
    </div>
    <div className="product-info">
      <h3 className="product-name">{name}</h3>
      <p className="product-price">${price}</p>
      <button onClick={addToCardBtn}>Add to card</button>
    </div>
  </div>
  )
}
