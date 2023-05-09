import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Namrata Singh </span>
            from <span className="purple"> Bihar, India.</span>
            <br />
            Software Engineer who loves to transform ideas into reality by doing
            Development.
            <br />
            Motivated designer and developer with experience creating
            custom websites with Angular, ReactJs, JavaScript, HTML5, CSS3. 
            <br />
            Moving to Qualifications, My Educational Background is here:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> X -DAV Public School, Arrah, Bihar
            </li>
            <li className="about-activity">
              <ImPointRight /> XII -DAV Public School, Arrah, Bihar
            </li>
            <li className="about-activity">
              <ImPointRight /> B.Tech -Gyan Ganga Institute of Technology & Sciences, Jabalpur, M.P
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
