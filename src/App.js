import React, { Component } from 'react';
// import TweenMax, { TimelineMax } from 'gsap';
import './App.css';
import Nav from './components/Navbar';
import MyPhoto from './components/MyPhoto';
import Footer from "./components/Footer"
import MainContent from "./components/MainContent";
import Card from "./components/PortfolioWork";
import Header from "./components/Header/header";

class App extends Component {
  state = {

  };

  render() {
    return (
      <div className="mainDivAppJS">
        <Header />
      <MainContent />
        <Nav />
        <MyPhoto />
    
        <Card
          name="RoadtripperZzz (Project1)"
          usage="A roadtrip application using mostly HTML, CSS, JS, & API's."
          imgURL="roadtrip.png"
          href="https://volksrat71.github.io/project-1/project-1/index.html"/>

        <Card
          name="Julia's Child (Project 2)"
          usage="A recipe application using HTML, CSS, JS, Express, Node, Sequelize & API's."
          imgURL="JCshot.png"
          href="https://frozen-plateau-58578.herokuapp.com/" />

        <Card
          name="Clicky-Game(Handmaid's Style)"
          usage="A game application using React."
          imgURL="clicky.png"
          href="https://samanthalossett.netlify.com/" />

        {/* <Card 
      name="To-Do App" 
      usage= "A to-do list using React." 
      imgURL="JCshot.png"
      ahref="https://frozen-plateau-58578.herokuapp.com/"/> */}

        <Card
          name="Giftastic (Handmaid's Style)"
          usage="A GIF generator using the Giffy API"
          imgURL="gif.png"
          href="https://samanthalossett.github.io/Giftastic/"  />
        <Footer />
      </div>
    )
  }

  //keep at bottom//
}

export default App;
