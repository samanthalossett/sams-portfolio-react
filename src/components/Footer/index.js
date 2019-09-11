import React from "react";
import "./style.css";
import Card from 'react-bootstrap/Card';



function Footer(){
    return(
        <Card>
  <Card.Header>Thanks for looking!</Card.Header>
  <Card.Body>
    <blockquote className="blockquote mb-0">
      <p>
        {' '}
        “YOU DON’T HAVE TO BE GREAT TO START, BUT YOU HAVE TO START TO BE GREAT.”{' '}
      </p>
      <footer className="blockquote-footer">
      ZIG ZIGLAR 
      </footer>
    </blockquote>
  </Card.Body>
</Card>
    )
}
export default Footer;

