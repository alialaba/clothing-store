import React from "react"

import {FaPlus, FaMinus} from "react-icons/fa";
import img1 from "../assets/sm-img.png";
import img2 from "../assets/sm1-img.png"
import { Button } from "../components/Button";
import { useCartStore } from "../store/cart";

export const ShoppingCart =()=>{
    const {cartItems, updateCartItem} = useCartStore()

    const handleUpdateCartItem = (id, quantity) => {
        updateCartItem(id, {quantity})
    }

    return(
        <section>
    <div className="shopping-cart container"> 
        <h2 className="shopping-cart__title">My shopping cart</h2>
        <p className="shopping-cart__text">You have 2 items in your cart</p>
<div class="table-container">
        <table>
            <thead>
                <tr>
                    <th><input type="checkbox" /></th>
                    <th>Items</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                {cartItems?.map((cartItem) => (
                    <tr>
                    <td data-label="Select"><input type="checkbox" /></td>
                    <td data-label="Items">
                        {/* <div> */}
                            <img  src={`https://api.timbu.cloud/images/${cartItem?.photos[0].url}`} alt={cartItem?.name}/>
                        {/* </div> */}
                    </td>
                    <td data-label="Description">
                        <div><h4>{cartItem?.name}</h4></div>
                        <div><span>Black</span>, <span>Medium</span></div>

                    </td>
                    <td data-label="Price">{cartItem?.current_price?.[0]?.USD?.[1]}</td>
                    <td data-label="Quantity">
                    <div className="shopping-cart__counter">
                        <FaPlus onClick={() => handleUpdateCartItem(cartItem?.id,cartItem?.quantity +1 )} />
                         <span>{cartItem?.quantity}</span>
                        <FaMinus  onClick={() => handleUpdateCartItem(cartItem?.id,cartItem?.quantity -1 )} className={`${cartItem?.quantity <=1} ? "disable" : ""`} />

                     </div>
                    </td>
                    <td data-label="Total">{cartItem?.current_price?.[0]?.USD?.[1] * cartItem?.quantity}</td>
                </tr>
                ))}
                
                <tr>
                    <td data-label="Select"><input type="checkbox" /></td>
                    <td data-label="Items">
                    <img src={img1} alt="img"/>
                    </td>
                    <td data-label="Description">
                    <div><h4>Jean Jacket </h4></div>
                    <div><span>Blue</span>, <span>Medium</span></div>
                         </td>
                    <td data-label="Price">$15.00</td>
                    <td data-label="Quantity">
                    <div className="shopping-cart__counter">
                        <FaPlus/>
                         <span>1</span>
                        <FaMinus/>

                     </div>
                    </td>
                    <td data-label="Total">$15.00</td>
                </tr>
               
            </tbody>
            <tfoot>
                <tr>
                    <td colspan="5" data-label="Subtotal">Subtotal</td>
                    <td data-label="Subtotal Amount">$35.00</td>
                    
                </tr>
                <tr>
                    <td colspan="5" data-label="Discount">Discount</td>
                    <td data-label="Discount Amount">-$5.00</td>
                </tr>
                <tr>
                    <td colspan="5" data-label="Grand Total">Grand Total</td>
                    <td data-label="Grand Total Amount">$30.00</td>
                </tr>
            </tfoot>
        </table>
    </div>
    <div class="checkout-container">
        {/* <button class="checkout-btn">Checkout</button> */}
        <Button text="Proceed to Checkout" className="btn-bg"/>
        <Button text="Countinue shopping" className="btn-br"/>
    </div>
    </div>
    </section>
)
}