import React from 'react';
import "./checkout.css";
import CheckoutProduct from './CheckoutProduct'
import Subtotal from "./Subtotal"
import { useStateValue } from './StateProvider';

const Checkout = () => {
    const[{basket}, dispatch] = useStateValue();
  return (
    <div className='checkout'>
        <div className="checkout-left">
            <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" className="checkout-ad" />
            <div>
                <h2 className="checkout-title">Your Shopping Basket</h2>
            </div>
            {basket.map(bask => {
                return (
                    <CheckoutProduct 
                        image = {bask.image}
                        id = {bask.id}
                        title = {bask.title}
                        price = {bask.price}
                        rating = {bask.rating}
                    />
                )
            })}
        </div>
        <div className="checkout-right">
            <Subtotal />
        </div>
    </div>
  )
}

export default Checkout