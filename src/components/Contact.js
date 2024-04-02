import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import axios from "axios";

// export const Contact = () => {
//   const formInitialDetails = {
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//     message: ''
//   };
//   const [formDetails, setFormDetails] = useState(formInitialDetails);
//   const [buttonText, setButtonText] = useState('Send');
//   const [status, setStatus] = useState({});

//   const onFormUpdate = (category, value) => {
//     setFormDetails({
//       ...formDetails,
//       [category]: value
//     });
//   };
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log("Hi");
//     setButtonText("Sending...");
//     try {
//       // const response = await axios.post("http://localhost:8080/contact", formDetails);
//       const response = await axios.post("http://localhost:3000/PortfolioZen", formDetails);
//       setButtonText("Send");
//       console.log(response.data);
//       setFormDetails(formInitialDetails);
//       if (response.status === 200) {
//         setStatus({ success: true, message: 'Message sent successfully' });
//       } else {
//         setStatus({ success: false, message: 'Something went wrong, please try again later.' });
//       }
//     } catch (error) {
//       setStatus({ success: false, message: 'Something went wrong, please try again later. in catch' });
//     }
//   };
  
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   console.log("Hi") ;
  //   setButtonText("Sending...");
  //   try {
  //     console.log("may");
  //     console.log(formDetails);
  //     const response = await axios.post("http://localhost:8080/contact", formDetails
  //     );
  //     setButtonText("Send");
  //     // const result = await response.json();
  //     console.log(response.data);
  //     console.log(result) ;
  //     setFormDetails(formInitialDetails);
  //     if (response.ok) {
  //       setStatus({ success: true, message: 'Message sent successfully' });
  //     } else {
  //       setStatus({ success: false, message: 'Something went wrong, please try again later.' });
  //     }
  //   } 
  //   catch (error) {
  //     setStatus({ success: false, message: 'Something went wrong, please try again later. in catch' });
  //   }
  // };
  export const Contact = () => {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('ayush2609', 'ayush2609', form.current, {
          publicKey: 'uQtQVFTlTbFumTjdM',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            e.target.reset();
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Get In Touch</h2>


                {/* <form onSubmit={handleSubmit}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)}/>
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                      <button type="submit"><span>{buttonText}</span></button>
                    </Col>
                    {
                      status.message &&
                      <Col>
                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                      </Col>
                    }
                  </Row> */}
                     {/* <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
                <form onSubmit={handleSubmit}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)}/>
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                      <button type="submit"><span>{buttonText}</span></button>
                    </Col>
                   
                  </Row> */}
                  <form ref={form} onSubmit={sendEmail}>
  <Row>
    <Col size={12} sm={6} className="px-1">
      <input type="text" name="user_name" placeholder="First Name" required />
    </Col>
    <Col size={12} sm={6} className="px-1">
      <input type="text" name="user_lastname" placeholder="Last Name" required />
    </Col>
    <Col size={12} sm={6} className="px-1">
      <input type="email" name="user_email" placeholder="Email Address" required />
    </Col>
    <Col size={12} sm={6} className="px-1">
      <input type="tel" name="user_phone" placeholder="Phone No." />
    </Col>
    <Col size={12} className="px-1">
      <textarea name="message" rows="6" placeholder="Message" required></textarea>
      <button type="submit"><span> Send </span></button>
    </Col>
  </Row>


                
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};