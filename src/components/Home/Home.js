import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Nam_pass_photo.jpeg";
import About from "../About/About";
import Projects from "../Projects/Projects";
import TypeWriter from "./TypeWriter";
import Experience from "../Experience/Experience";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={6} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Namrata Singh</strong>
              </h1>

              <p className="heading-description blockquote">
                I am a Software Developer having an Experience in Developing website
                using Different Frameworks like Angular, React, HTML, CSS, Javascript.
              </p>

              <div className="heading-type">
                <TypeWriter />
              </div>
            </Col>

            <Col md={5}>
              <img src={myImg} className="profile-pic" alt="avatar" />
            </Col>
          </Row>
        </Container>
      </Container> 
              <About/>
              <Projects/>
              <Experience/>
            
          
        
      
    </section>
  );
}

export default Home;
