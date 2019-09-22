import React from "react";
import "./style.css";
// import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Card1(props) {
    console.log(props)
    return (
     
        <div className="entirecontainer">
            <div className="container">
                <div className="mainCard" >
                    <Card style={{width: '10rem'}}>
                        <Card.Img style={{ maxHeight: '300px' }} variant="top" src={props.imgURL} />
                        <Card.Body>
                            <Card.Title>{props.name}</Card.Title>
                            <Card.Text>{props.usage}</Card.Text>
                            <Button variant="primary" href={props.href}>Check it</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
      

    )
}

export default Card1;
{/* <div className="Card"> */ }
{/* <div >
            <Image className="cardImage" src={props.imgURL} alt="" rounded/>
            </div>
            <div className="CardText">
            <h3>{props.name}</h3>
            <p>{props.usage}</p>
            <br></br>
            <button class="button">
            <a href={props.href} alt="a link to the project">Check It Out!</a>
            </button>
            </div> */}