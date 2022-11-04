import React, { useEffect } from 'react';
import '../../styles/Alcohol.css'

const Alcohol = ({ alcohol, addToCart }) => {

    return (
        <div className="alc__container">
            <img src={alcohol.url} alt="" className="alc__img" />
            <div className="alc__container--description">
                <h3 className="alc__title">
                    {alcohol.title}
                </h3>
                {
                    alcohol.size === 1.75 ? <p className="alc__size"> {alcohol.size}L Bottle</p> : <p className="alc__size"> {alcohol.size}ml Bottle</p>
                }

                <p className="alc__price">${alcohol.salePrice}</p>
            </div>
            <button className="btn alc__button" onClick={() => addToCart(alcohol)}>Add to Cart</button>
        </div>
    );
}

export default Alcohol;
