import React from 'react'
import "./checkoutProduct.css"
import { useStateValue } from './StateProvider'

const CheckoutProduct = (props) => {
    const[state, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type : "REMOVE_FROM_BASKET",
            item : {
                id : props.id,
                image : props.image,
                title : props.title,
                price : props.price,
                rating : props.rating
            }
        })
    }
  return (
    <div className='checkout-product'>
        <img src={props.image} alt="" className="checkout-product-image" />
        <div className="checkout-product-info">
            <p className="checkout-product-title">{props.title}</p>
            <p className="checkout-product-price">
                <small>$</small>
                <strong>{props.price}</strong>
            </p>
            <div className="checkout-product-rating">
            {Array(props.rating)
                        .fill()
                        .map((_, i) => (
                            <p>⭐</p>
                        ))}
            </div>
            <button className="checkout-product-button" onClick={removeFromBasket}>Remove from Basket</button>
        </div>
    </div>
  )
}

export default CheckoutProduct