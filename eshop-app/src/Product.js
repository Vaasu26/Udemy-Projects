import React, {useContext} from 'react'
import './product.css'
import { useStateValue } from './StateProvider'

const Product = (props) => {
    const [state, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type : "ADD_TO_BASKET",
            item : {
                id : props.id,
                image : props.image,
                price : props.price,
                rating : props.rating,
                title : props.title
            }
        })
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
        <button onClick={addToBasket}>Add to Basket</button>
    </div>
  )
}

export default Product