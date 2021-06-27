import React from 'react';
import { NavLink } from 'react-router-dom';
import './Cart.css'
const Cart = () => {
    return ( 
        <div className="container-fluid mt-5">
            <NavLink to="/Booking"><button className="btn btn-outline-none"><i className="fa fa-shopping-cart cart-icon" aria-hidden="true"></i></button></NavLink>
        </div>
     );
}
 
export default Cart;


