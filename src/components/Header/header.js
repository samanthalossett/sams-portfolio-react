import React from "react";
import "./style.css";
import Jumbotron from "react-bootstrap/Jumbotron";

function Header(){
    return(
         <Jumbotron className="JumbotronHeader" fluid style={{ textAlign: 'center', backgroundColor: 'white'}}>
              Samantha Lossett 
              <h2 className="jr">Jr. Web Developer</h2>
         </Jumbotron>
       
    )
}
export default Header;