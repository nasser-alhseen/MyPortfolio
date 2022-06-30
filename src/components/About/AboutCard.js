import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Nasser Alhseen </span>
            from <span className="purple"> Homs,Syria</span>
            <br />I am a Software Engineer Studing in Al-Baath University.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Chess
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Football
            </li>
            <li className="about-activity">
              <ImPointRight /> Gym
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Constantly striving to learn new technologies and look to ways to better myself in this rapidly changing industry. Hard working, detail oriented and able to multi-task effectively.!"{" "}
          </p>
          <footer className="blockquote-footer">Nasser</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
