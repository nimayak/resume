import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src="images/profilepic.jpg" alt/>
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>I am a final-year Monash University student undergoing a Bachelor's degree of Information Technology and Science. I wish to secure a position in a creative and dynamic work environment where I can apply my skills in UX design, software and web development.
            </p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>{resumeData.name}</span><br />
                  <span>M: {resumeData.mobile}</span><br />
                  <span>E: {resumeData.email}</span><br />
                  <span>{resumeData.linkedin}</span><br />
                  <span>{resumeData.github}</span><br />
                </p>
              </div>
              <div className="columns download">
                <p>
                  <a href="/Nimaya_Kodikara_Resume.pdf"  className="button" download><i className="fa fa-download" />Download Resume</a>
                </p>
              </div>
            </div> {/* end row */}
          </div> {/* end .main-col */}
        </div>
      </section> {/* About Section End*/}
      </React.Fragment>
    );
  }
}
