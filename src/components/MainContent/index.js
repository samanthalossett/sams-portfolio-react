import React from "react";
import "./style.css";

function MainContent(){

    const date= new Date();
    const hours= date.getHours();
    let timeOfDay

    if (hours <12){
        timeOfDay= "Morning"
    }else if (hours > 12 && hours < 17){
        timeOfDay="Afternoon"
    }else {
        timeOfDay="Night"
    }

    return(
        <div className="mainContentDiv">Good {timeOfDay}, and thanks for viewing my portfolio!</div>
    )
}
export default MainContent;
