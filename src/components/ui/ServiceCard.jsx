import React from 'react'
import '../../styles/Services.css'

const ServiceCard = ({ icon, title, para}) => {
    return (
        <div className="service">
            <div className="img__container">
                {icon}
            </div>
            <h2 className="service__description">
                {title}
            </h2>
            <p className="service__para">
                {para}
            </p>
        </div>
    );
}

export default ServiceCard;
