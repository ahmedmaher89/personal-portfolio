import { useState , useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/Get in touch-bro (1).svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

// Email.js 
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_02o249q",
        "template_bhcpyry",
        form.current,
        "6he172vfg-0p_fTcm"
      )
      .then(
        (result) => {
          alert("Thank you, the message has been sent");
        },
        (error) => {
          console.log(error.text);
        }
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
                <form ref={form}
                  onSubmit={sendEmail}
                  method="POST">
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" name="name" placeholder="First Name" />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" name="last name" placeholder="Last Name" />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" name="email" placeholder="Email Address"  />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="tel"  placeholder="Phone No." />
                    </Col>
                    <Col size={12} className="px-1 textplace">
                      <textarea rows="6" name="message" placeholder="Message" ></textarea>
                      <button type="submit"><span>Send</span></button>
                    </Col>
                    {
                       
                      <Col>
                        <p className={''}>{''}</p>
                      </Col>
                    }
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
