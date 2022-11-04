import React from 'react';
import '../styles/Services.css'
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import StoreMallDirectoryIcon from '@mui/icons-material/StoreMallDirectory';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import ServiceCard from './ui/ServiceCard';

const Services = () => {
    return (
        <section id="services">
            <div className="row">
                <div className="container">
                    <div className="service__container">
                        <h2 className="service__title">
                            Our Services
                        </h2>
                        <div className="services__list">
                            <ServiceCard icon={<DeliveryDiningIcon fontSize='large' />} title="Delivery" para="Don't want to step out of your place? Order online & get alcohol delivered at your address."/>
                            <ServiceCard icon={<StoreMallDirectoryIcon fontSize='large' />} title="In-Store Pickup" para="Don't want to step out of your place? Order online & get alcohol delivered at your address."/>
                            <ServiceCard icon={<DirectionsCarIcon fontSize='large' />} title="Curbside Pickup" para="The staff will deliver you the order outside the store."/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Services;
