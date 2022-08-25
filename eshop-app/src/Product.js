import React, {useState} from 'react'
import './product.css'
import { useStateValue } from './StateProvider'

const Product = (props) => {
    const [state, dispatch] = useStateValue();
    const[productButton, setProductButton] = useState("ADD TO BASKET");

    const addToBasket = () => {
        productButton === "ADD TO BASKET" ? setProductButton("REMOVE FROM BASKET") : setProductButton("ADD TO BASKET");
        if(productButton === "ADD TO BASKET"){
            dispatch({
                type : "ADD_TO_BASKET",
                item : {
                    id : props.id,
                    image : props.image,
                    price : props.price,
                    rating : props.rating,
                    title : props.title,
                    itemQuantity : props.quantity+1
                }
            })
            console.log(state.basket[0].itemQuantity)
        }
        else{
            dispatch({
                type : "REMOVE_FROM_BASKET",
                item : {
                    id : props.id,
                    image : props.image,
                    title : props.title,
                    price : props.price,
                    rating : props.rating,
                    itemQuantity : props.quantity
                }
            })
        }
    }

  return (
    <div className='product'>
        <div className="product-info">
            <p className="product-title">{props.title}</p>
            <p className="product-price">
                <small>$</small>
                <strong>{props.price}</strong>
            </p>
            <div className="product-rating">
                {Array(props.rating)
                        .fill()
                        .map((_, i) => (
                            <p>⭐</p>
                        ))}
            </div>
        </div>
        <img src = {props.image} alt = ""></img>
        <button onClick={addToBasket}>{productButton}</button>
    </div>
  )
}

export default Product