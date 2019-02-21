import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>
      <header id="home">
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
          <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
            <li><a className="smoothscroll" href="#resume">Resume</a></li>
            <li><a className="smoothscroll" href="#portfolio">Work</a></li>
            <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
          </ul> {/* end #nav */}
        </nav> {/* end #nav-wrap */}
        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">I am {resumeData.name}.</h1>
            <h3>I'm an entry-level <span>{resumeData.role1} </span> and <span>{resumeData.role2}</span> and love all things related to <span>Web Design</span>.</h3>
           {/*<h3>Let's <a className="smoothscroll" href="#about">start scrolling </a>
              and learn more <a className="smoothscroll" href="#about">about me</a>.
            </h3>*/}
            <hr />
            <ul className="social">
              <li><a href="https://www.linkedin.com/in/nimaya-kodikara/" target="_blank"><i className="fa fa-linkedin" /></a></li>
              <li><a href="mailto: nimaya.kodikara@gmail.com"><i className="fa fa-envelope" /></a></li>
              <li><a href="https://github.com/nimayak" target="_blank"><i className="fa fa-github" /></a></li>
            </ul>
          </div>
        </div>
        <p className="scrolldown">
          <a className="smoothscroll" href="#about"><i className="icon-down-circle" /></a>
        </p>
      </header> {/* Header End */}
      </React.Fragment>
    );
  }
}
