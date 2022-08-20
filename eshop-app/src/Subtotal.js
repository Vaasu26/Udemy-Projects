import React from 'react';
import "./subtotal.css";
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider';
import { basketTotal } from './reducer';

const Subtotal = () => {
    const[{basket}, dispatch] = useStateValue();
  return (
    <div className='subtotal'>
        <CurrencyFormat 
            renderText={value => {
                return (
                    <>
                        <p>
                            Subtotal ({basket.length}) : <strong>${value}</strong>
                        </p>
                        <small className="subtotal-gift">
                            <input type = "checkbox" />This Order contains a gift
                        </small>
                    </>
                )
            }}
            decimalScale = {2}
            value = {basketTotal(basket)}
            displayType = {"text"}
            thousandSeparator = {true}
        />
        <button>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal