import React, { Component } from "react";
import "./About.css";
import PageTitle from './../PageTitle/PageTitle'

class About extends Component {
  render() {
    return (
      <div className="postTitle">
        <h4>Welcome to nazmottaghian.com</h4>
        <p>
            This page is under construction! <br/>
            Be sure to check out the home page for latest blog posts and ways to get in touch!
        </p>
      </div>
    );
  }
}

export default About;
