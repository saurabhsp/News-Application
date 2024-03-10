import React, { Component } from "react";
import Navbar from "./Component/Navbar";
import News from "./Component/News";
import Footer from './Component/Footer';
import "./App.css";
import LoadingBar from 'react-top-loading-bar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
  pageSize=12;
  
  state={
    progress:0,
    mode: "light", // Initial mode is light
  }

  setProgress=(progress)=>{
    this.setState({progress: progress})
  }

  toggleMode = () => {
    this.setState((prevState) => ({
      mode: prevState.mode === "light" ? "dark" : "light",
    }));
  };

  componentDidMount() {
    // Set body background color based on initial mode
    this.setBodyBackgroundColor();
  }

  componentDidUpdate() {
    // Set body background color based on mode change
    this.setBodyBackgroundColor();
  }

  setBodyBackgroundColor() {
    document.body.style.backgroundColor =
      this.state.mode === "light" ? "white" : "#060131";
    document.body.style.color = this.state.mode === "light" ? "black" : "black";
  }

  render() {
    const { mode } = this.state;

    return (
      <div>
         <LoadingBar
        color='red'
        height={4}
        progress={this.state.progress}
      />
        <Router>
          <Navbar mode={mode} toggleMode={this.toggleMode} />
          <Routes>
            <Route exact path="/business" element={<News setProgress={this.setProgress}    key="business" pageSize={this.pageSize} country="in" category="business" />} />
            <Route exact path="/entertainment" element={<News setProgress={this.setProgress}    key="entertainment" pageSize={this.pageSize} country="in" category="entertainment" />} />
            <Route exact path="/general" element={<News setProgress={this.setProgress}    key="general" pageSize={this.pageSize} country="in" category="general" />} />
            <Route exact path="/health" element={<News setProgress={this.setProgress} key="health" pageSize={this.pageSize} country="in" category="health" />} />
            <Route exact path="/science" element={<News setProgress={this.setProgress}     key="science" pageSize={this.pageSize} country="in" category="science" />} />
            <Route exact path="/sports" element={<News setProgress={this.setProgress}    key="sports" pageSize={this.pageSize} country="in" category="sports" />} />
            <Route exact path="/technology" element={<News setProgress={this.setProgress}    key="technology" pageSize={this.pageSize} country="in" category="technology" />} />
            <Route exact path="/" element={<News setProgress={this.setProgress}    key="/" pageSize={this.pageSize} category="health" />} />
          </Routes>
        </Router>

        <Footer />
      </div>
    );
  }
}
