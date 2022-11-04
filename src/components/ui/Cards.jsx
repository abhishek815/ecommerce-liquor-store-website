import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Landing.css'

const Cards = ( {img, title} ) => {
    const [alc, setAlc] = useState();

    return (
        <Link className="feartured__card" to={`/${title.toLowerCase()}`} >
            <div className="icon__wrapper">
                <img src={img} alt="" className="featured--img" />
            </div>
            <h2>{title}</h2>
        </Link>
    );
}

export default Cards;
