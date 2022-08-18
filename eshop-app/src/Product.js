import React from 'react'
import './product.css'

const Product = (props) => {
  return (
    <div className='product'>
        <div className="product-info">
            <p className="product-title">{props.title}</p>
            <p className="product-price">
                <small></small>
                <strong>${props.price}</strong>
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
        <button>Add to Basket</button>
    </div>
  )
}

export default Product