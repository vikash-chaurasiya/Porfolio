import React, { useRef } from "react";
import { Row, Col } from "reactstrap";
import { init } from "ityped";
import { Container } from "@mui/material";
import { useEffect } from "react";
import { BsWhatsapp } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";

const Hero = () => {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
        backDelay:1500,
        showCursor:true,
        strings:[
            ' Vikash Chaurasia',
            ' a FrontEnd Web Developer'
        ]
    })
  }, []);

  return (
    <>
      <section className="hero-section" id="home">
        <Container className="hero-container">
          <Row>
            <Col lg="6" md="6">
              <div className="hero-content">
                <h5 className="mb-3">Welcome to my world !</h5>
                <h1 className="hero-title mb-5">
                  I'm <span ref={textRef}></span>
                </h1>
                <p>
                  I am Vikash Chaurasia, a B.Tech graduate from Inderprastha
                  Engineering College (Ghaziabad).
                  <br /> Currently, I work as a
                  Frontend Developer at{" "}
                  <a href="www.freeskout.com" className="frskLink">
                    {" "}
                    Freeskout.
                  </a>
                  <br />
                  <br />
                  <span className="skillsHeading">SKILLS</span> - <span className="skillsChild">React.Js | React Native | Next.Js | Redux | JavaScript | ES6 | HTML | CSS</span>
                </p>
                <div className="linkHero">
                  <div>
                    <a href="https://wa.me/7379664300" target="_blank">
                      <button className=" btn  hire-btn1">
                        <span className="me-2 mb-1">
                          <BsWhatsapp />
                        </span>
                        LET'S CHAT ON WHATSAPP
                      </button>
                    </a>
                  </div>
                  <div>
                    <a href="mailto:contact@jaichaurasia90@gmail.com" target="_blank">
                      <button className="btn ms-3 githubBtn">
                        <IoIosMail size={21}/> &nbsp;
                        SEND ME A MAIL
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="hero-img">
                <img
                  src="img/header-img.svg"
                  alt="img"
                  className="w-100 "
                  id="hero-main-img"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Hero;
