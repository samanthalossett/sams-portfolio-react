import React from "react";
import "./style.css";

function Card(props){
    console.log(props)
    return(
        <div className="Card">
        <div >
            <img className="cardImage" src={props.imgURL} alt=""/>
            </div>
            <div className="CardText">
            <h3>{props.name}</h3>
            <p>{props.usage}</p>
            <br></br>
            <button class="button">
            <a href={props.href} alt="a link to the project">Check It Out!</a>
            </button>
            </div>
            </div>
    )
}

export default Card;