import React from 'react'
import { useState } from 'react';
import "./checkoutProduct.css"
import { useStateValue } from './StateProvider'
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const CheckoutProduct = (props) => {
    const[state, dispatch] = useStateValue();
    const[quantity, setQuantity] = useState(1);
    var data = 
        {
            signUpPassword : state.password,
            signUpEmail : state.email,
            basket : state.basket
        }

    if(state.name.length > 0){
        localStorage.setItem(state.name, JSON.stringify(data))
    }

    const removeFromBasket = () => {
        dispatch({
            type : "REMOVE_FROM_BASKET",
            item : {
                id : props.id,
                image : props.image,
                title : props.title,
                price : props.price,
                rating : props.rating,
                itemQuantity : 0
            }
        })
    }

    const decrementQuantity = () => {
        if(quantity >1) {
            setQuantity((quantity) => quantity-1);
            updateDecreasedQuantity();
        }
    }

    const incrementQuantity = async() => {
            setQuantity(quantity => quantity+1)
        updateIncreasedQuantity()
    }

    const updateDecreasedQuantity = () => {
        dispatch({
            type : "DECREMENT_QUANTITY",
            item : {
                id : props.id,
                image : props.image,
                title : props.title,
                price : props.price,
                rating : props.rating,
                itemQuantity : quantity-1
            }
        })
    }

    const updateIncreasedQuantity = () => {
        dispatch({
            type : "INCREMENT_QUANTITY",
            item : {
                id : props.id,
                image : props.image,
                title : props.title,
                price : props.price,
                rating : props.rating,
                itemQuantity : quantity+1
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
            <div className='checkout-product-qunatity'>
                 <strong>Quantity : </strong>
                 <RemoveIcon fontSize='small'  onClick = {decrementQuantity} style = {{border : "1px solid"}}/>
                 <strong>  {state.basket[props.index].itemQuantity > 0 ? state.basket[props.index].itemQuantity : quantity}  </strong> 
                 <AddIcon fontSize='small' onClick = {incrementQuantity} style = {{border : "1px solid"}}/>  
            </div>
            <button className="checkout-product-button" onClick={removeFromBasket}>Remove from Basket</button>
        </div>
    </div>
  )
}

export default CheckoutProduct