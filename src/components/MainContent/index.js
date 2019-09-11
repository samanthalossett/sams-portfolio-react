import React from "react";
import "./style.css";
import Jumbotron from 'react-bootstrap/Jumbotron';


function MainContent() {

    const date = new Date();
    const hours = date.getHours();
    let timeOfDay
    const styles = {
        color: "orange"
    }
    if (hours < 12) {
        timeOfDay = "Morning"
        styles.color = "orange"
    } else if (hours > 12 && hours < 17) {
        timeOfDay = "Afternoon"
        styles.color = "blue"
    } else {
        timeOfDay = "Evening"
        styles.color = "pink"
    }

    return (
         <div className="page-featured-image">
            <Jumbotron className="JumbotronMain" fluid style={{ textAlign: 'center'}}>
                <div className="mainContentDiv">Good<div style={styles}>{timeOfDay},</div>and thanks for viewing my portfolio!</div>
            </Jumbotron>
            </div>
   
    )}

export default MainContent;


