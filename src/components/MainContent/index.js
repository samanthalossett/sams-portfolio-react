import React from "react";
import "./style.css";

function MainContent() {

    const date = new Date();
    const hours = date.getHours();
    let timeOfDay
    const styles = {
        color: "orange"
    }
    if (hours < 12) {
        timeOfDay = "morning"
        styles.color = "orange"
    } else if (hours > 12 && hours < 17) {
        timeOfDay = "afternoon"
        styles.color = "blue"
    } else {
        timeOfDay = "evening"
        styles.color = "pink"
    }

    return (
        <div className="mainContentDiv">Good<div style={styles}>{timeOfDay},</div>and thanks for viewing my portfolio!
        </div>
    )
}
export default MainContent;
