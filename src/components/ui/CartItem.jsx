import React from 'react';
import '../../styles/Cart.css'

const CartItem = ({ item, changeQuantity, removeItem }) => {
    return (
        <div className="cart__item">
            <img src={item.url} alt="" />
            <div className="cart__item--body">
                <div className="cart__item--description">
                    <h3>{item.title}</h3>
                    <p>750ml Bottle</p>
                    <button className="remove" onClick={() => removeItem(item)}>Remove</button>
                </div>
                <div className="cart__quantity">
                    <input className='cart__input' type="number" min={0} max={99} value={item.quantity} onChange={(event) => changeQuantity(item, event.target.value)} />
                </div>
                <div className="cart__total">
                    ${item.salePrice.toFixed(2)}
                </div>
            </div>
        </div>
    );
}

export default CartItem;
