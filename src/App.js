import React, {Component} from 'react';
// import TweenMax, { TimelineMax } from 'gsap';
import './App.css';
import Nav from './components/Navbar';
import Projects from './pages/mywork';
import MyPhoto from './components/MyPhoto';
import Footer from "./components/Footer"
import MainContent from "./components/MainContent";
class App extends Component {
  state= {
  
  };

keepTrackOfWhichOne = event =>{
console.log(event.target.value);
this.setState({project: event.target.value});
}

render(){
  return(
    <div className="mainDivAppJS">
      <Nav />
      <MyPhoto />
      <MainContent/>
      {/* <Projects 
      keepTrackOfWhichOne={this.keepTrackOfWhichOne}
      project={this.state.project}
       /> */}
       <Footer />
    </div>
  )
}



  //keep at bottom//
}
 
export default App;
