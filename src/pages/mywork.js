import React, {Component} from "react";
// import "./style.css";


class Projects extends Component{
    render(){
        return(
<div className="projects">
    <div>
        <h1>Julia's Child</h1>
        <button className="button1" value="Julia" onClick={this.props.keepTrackOfWhichOne}>check this out</button>
      </div>
      <div className="projects">
        <h1>Camping</h1>
        <button className="button1" value="camping" onClick={this.props.keepTrackOfWhichOne}>check this out</button>
      </div>
      <div className="projects">
        <h1>Giffy</h1>
        <button className="button1" value="giffy" onClick={this.props.keepTrackOfWhichOne}>check this out</button>
      </div>
      <div className="projects">
        <h1>Clicky Game</h1>
        <button className="button1" value="clicky" onClick={this.props.keepTrackOfWhichOne}>check this out</button>
      </div>
      {
        this.props.project
        && <div className="">the info for the {this.props.project} ie images and a story</div>
      }
      </div>
        )
    }
}
export default Projects;