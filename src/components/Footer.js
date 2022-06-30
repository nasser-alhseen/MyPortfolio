import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineMail,
  AiFillMail, AiTwotoneMail

} from "react-icons/ai";
import { FaLinkedinIn, FaFacebook, FaWhatsapp } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Nasser Alhseen</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} NA</h3>
        </Col>
        <Col md="4" className="footer-body">
        <p className="mail">abdalnasralhseen2019@gmail.com</p>
          {/* <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/Nasser-Alhseen"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://wa.me/963992852165"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaWhatsapp />
              </a>
            </li>
            <li className="social-icons">
                <a
                  href={"https://wa.me/963992852165"}
                  target="_blank"
                  className="icon-colour  home-social-icons" >
                    <AiTwotoneMail className="mail"/>
                    

                </a>
              </li>
            
            
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/nasser-alhseen-212b86215/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
        
          </ul> */}

        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
