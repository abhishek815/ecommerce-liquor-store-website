import React from 'react';
import '../styles/GetInTouch.css'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

const GetInTouch = () => {
    return (
        <section id="touch">
            <div className="row">
                <div className="container">
                    <h1 className="touch__title">
                        Get In Touch
                    </h1>
                    <div className="touch__wrapper">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.175763149589!2d-84.53277078475408!3d34.0393622258562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f56bfbbbfcdff3%3A0x8fe081cb31ebf954!2sAsap%20Liquor!5e0!3m2!1sen!2sus!4v1667012239174!5m2!1sen!2sus" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        <div className="store__info">
                            <h2 className="store__hours--title">
                                Opening Hours
                            </h2>
                            <div className="row__hours">
                                <div className="day">Monday</div>
                                <div className="time">10:00 AM - 10:00 PM</div>
                            </div>
                            <div className="row__hours">
                                <div className="day">Tuesday</div>
                                <div className="time">10:00 AM - 10:00 PM</div>
                            </div>
                            <div className="row__hours">
                                <div className="day">Wednesday</div>
                                <div className="time">10:00 AM - 10:00 PM</div>
                            </div>
                            <div className="row__hours">
                                <div className="day">Thursday</div>
                                <div className="time">10:00 AM - 10:00 PM</div>
                            </div>
                            <div className="row__hours">
                                <div className="day">Friday</div>
                                <div className="time">10:00 AM - 10:00 PM</div>
                            </div>
                            <div className="row__hours">
                                <div className="day">Saturday</div>
                                <div className="time">10:00 AM - 10:00 PM</div>
                            </div>
                            <div className="row__hours">
                                <div className="day">Sunday</div>
                                <div className="time">12:30 PM - 7:00 PM</div>
                            </div>

                            <div className="store__info--location store__info--bottom">
                                <LocationOnOutlinedIcon fontSize='medium' />
                                <a href="https://www.google.com/maps/place/Asap+Liquor/@34.0393622,-84.5327708,17z/data=!3m1!4b1!4m5!3m4!1s0x88f56bfbbbfcdff3:0x8fe081cb31ebf954!8m2!3d34.0393578!4d-84.5305821" 
                                target="_blank" rel="noopener noreferrer"
                                className='store__info-para'>3595 Canton Rd Suite 304, Marietta, GA 30066</a>

                            </div>

                            <div className="store__info--phone store__info--bottom">
                                <CallOutlinedIcon fontSize='medium' />
                                <a className='store__info--link store__info-para' href="tel:7705752070">
                                    (770) 575-2070
                                </a>
                            </div>

                            <div className="store__info--email store__info--bottom">
                                <EmailOutlinedIcon fontSize='medium' />
                                <a className='store__info-para' href="mailto:asapliquor17@gmail.com">asapliquor17@gmail.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default GetInTouch;
