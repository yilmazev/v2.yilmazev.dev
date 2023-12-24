import React, { useRef, useState } from 'react';
import Lottie from "lottie-react";
import emailjs from 'emailjs-com';
import checkMark from '../../assets/media/animations/checkmark.json';
import './Contact.scss';

const Contact = () => {
    const form = useRef();
    const [ isOpen, setIsOpen ] = useState(false)

    const sendEmail = (e) => {
        setIsOpen(!isOpen)
        e.preventDefault()

        emailjs.sendForm('service_efetrpd', 'template_k1x0vvv', form.current, 'RoTOwgEiVTh0ncG2f')
        .then((result) => {
            console.log(result.text)
        }, (error) => {
            console.log(error.text)
        })
    }

    return (
        <div id="contact" className="section-contact">
            <div className="contact-container">
                <div className="title-group">
                    <h1 className="big-title">Contact</h1>
                    <h3 className="normal-title">Get in Touch</h3>
                </div>
                { isOpen ?
                <div className="contact-done-container">
                    <Lottie className="contact-done-animation" animationData={ checkMark } loop={"false"} />
                    <h5 className="contact-done-text">Your message has been sent, it will be answered within the day.<br />Please don't forget to check your e-mail.</h5>
                </div>
                :
                <form ref={ form } onSubmit={ sendEmail } className="contact-form-content">
                    <div className="contact-form-group">
                        <input type="text" name="name" placeholder="Name" className="contact-form-input" />
                        <input type="email" name="email" placeholder="Email" className="contact-form-input" />
                    </div>
                    <div className="contact-form-group">
                        <textarea type="text" name="message" placeholder="Message" rows="5" className="contact-form-textarea" />
                    </div>
                    <input  type="submit" className="contact-form-button" value="Send" oncClick={ sendEmail } />
                </form> }
            </div>
        </div>
    )
}

export default Contact