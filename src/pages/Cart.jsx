import React, { useEffect } from 'react';
import CartItem from '../components/ui/CartItem';
import '../styles/Cart.css'
import empty from '../assets/empty_cart.svg'
import { Link } from 'react-router-dom';
const Cart = ({ cart, changeQuantity, removeItem }) => {
    const total = () => {
        let sum = 0
        cart.forEach(alc => {
            sum += alc.salePrice * alc.quantity
        });
        return sum
    }

    return (
        <section id="cart">
            <div className="row">
                <div className="container">

                    {
                        cart.length > 0 ?
                            (
                                <>
                                    <h1 className="title">Cart</h1>
                                    <div className="cart__wrapper">
                                        <div className="cart__left">
                                            <div className="cart__items">
                                                {
                                                    cart.map(item => {
                                                        return <CartItem key={item.id} item={item} changeQuantity={changeQuantity} removeItem={removeItem} />
                                                    })
                                                }
                                            </div>
                                        </div>
                                        <div className="cart__right">
                                            <div className="cart__summary--top">
                                                <h2>Order Summary</h2>
                                                <div className="cart__item--row">
                                                    <div className='cart__summary-item'>Subtotal ({cart?.length} items):</div> <div className="cart_summary--value">${total().toFixed(2)}</div>
                                                </div>
                                                <div className="cart__item--row">
                                                    <div className='cart__summary-item'>Tax</div> <div className="cart_summary--value">${(total() * 0.06).toFixed(2)}</div>
                                                </div>
                                            </div>

                                            <div className="cart__summary--bottom">
                                                <div className="cart__item--row">
                                                    <div className='cart__summary-item'>Total:</div> <div className="cart_summary--value">${(total() + total() * 0.06).toFixed(2)}</div>
                                                </div>
                                                <button className="btn checkout__btn">
                                                    Reserve Your Order
                                                </button>
                                            </div>
                                        </div>
                                    </div></>) :
                            (
                                <div className="empty__container">
                                    <img className='empty__logo padding-10' src={empty} alt="" />
                                    <h2 className='padding-10'>Your cart is empty!</h2>
                                    <Link to='/spirits'>
                                        <button className="btn padding-10">Browse Store</button>
                                    </Link>
                                </div>
                            )
                    }
                </div>
            </div>
        </section>
    );
}

export default Cart;
