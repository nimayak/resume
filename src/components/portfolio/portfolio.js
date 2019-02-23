import React, { Component } from 'react';
import { render } from 'react-dom';
import Gallery from 'react-grid-gallery';


const IMAGES =
[{
       src: "images/portfolio/band-website.png",
       thumbnail: "images/portfolio/band-website.png",
       thumbnailWidth: 320,
       thumbnailHeight: 212,
       tags: [{value: "Web Design", title: "Web Design"}, {value: "UI Design", title: "UI Design"}],
       caption: "Uni Project: Fictional Band Website. Source code: https://github.com/nimayak/band-website"
},
{
       src: "images/portfolio/HRAFF-website.png",
       thumbnail: "images/portfolio/HRAFF-website.png",
       thumbnailWidth: 320,
       thumbnailHeight: 212,
       tags: [{value: "Web Design", title: "Web Design"}, {value: "UI Design", title: "UI Design"}],
       caption: "Uni Project: HRAFF website redesign. Source code: https://github.com/nimayak/HRAFF-homepage-redesign"
},
{
       src: "images/portfolio/vintage-collectibles.png",
       thumbnail: "images/portfolio/vintage-collectibles.png",
       thumbnailWidth: 320,
       thumbnailHeight: 212,
       tags: [{value: "Web Design", title: "Web Design"}, {value: "UI Design", title: "UI Design"}],
       caption: "Uni Project: Vintage store website. Live website: https://vintagecollectibles.netlify.com/ Source code: https://github.com/nimayak/vintage-collectibles"
},
{
       src: "images/portfolio/task-app.png",
       thumbnail: "images/portfolio/task-app.png",
       thumbnailWidth: 320,
       thumbnailHeight: 212,
       tags: [{value: "Web App", title: "Web App"}, {value: "UI Design", title: "UI Design"}],
       caption: "Uni Project: A simple to-do-list app. Source code: https://github.com/nimayak/To-do-list-tasks-app"
},
{
       src: "images/portfolio/CoverRedesign1.png",
       thumbnail: "images/portfolio/CoverRedesign1.png",
       thumbnailWidth: 400,
       tags: [{value: "Graphic Design", title: "Graphic Design"}],
       caption: "Uni Project: Book Cover Redesign"
},
{
       src: "images/portfolio/CoverRedesign2.png",
       thumbnail: "images/portfolio/CoverRedesign2.png",
       tags: [{value: "Graphic Design", title: "Graphic Design"}],
       thumbnailHeight: 212,
       caption: "Uni Project: Book Cover Redesign"
},
{
       src: "images/portfolio/CoverRedesign3.png",
       thumbnail: "images/portfolio/CoverRedesign3.png",
       thumbnailHeight: 212,
       tags: [{value: "Graphic Design", title: "Graphic Design"}],
       caption: "Uni Project: Book Cover Redesign"
},
{
       src: "images/portfolio/drawing-app.png",
       thumbnail: "images/portfolio/drawing-app.png",
       thumbnailWidth: 320,
       thumbnailHeight: 212,
       tags: [{value: "Web Design", title: "Web Design"}, {value: "HTML5 Canvas", title: "HTML5 Canvas"}],
       caption: "Uni Project: Children's drawing app using HTML5 Canvas. Source code: https://github.com/nimayak/drawing-app"
},
{
       src: "images/portfolio/OldSpiceLogo.png",
       thumbnail: "images/portfolio/OldSpiceLogo.png",
       thumbnailHeight: 700,
       tags: [{value: "Graphic Design", title: "Graphic Design"}, {value: "Logo", title: "Logo"}],
       caption: "Uni Project: Old Spice Logo for Girls Redesign"
},
{
       src: "images/portfolio/weather-app.png" ,
       thumbnail: "images/portfolio/weather-app.png" ,
       thumbnailWidth: 320,
       thumbnailHeight: 212,
       tags: [{value: "Web Design", title: "Web Design"}, {value: "UI Design", title: "UI Design"}],
       caption: "React Tutorial: Simple weather app. Source code: https://github.com/nimayak/weather-app-tutorial"
},
{
       src: "images/portfolio/Cubism_Website.jpg" ,
       thumbnail: "images/portfolio/Cubism_Website.jpg" ,
       thumbnailWidth: 320,
       thumbnailHeight: 212,
       tags: [{value: "Prototype", title: "Protoype"}, {value: "UI Design", title: "UI Design"}],
       caption: "Uni Project: Homepage design based on the Cubism art movement."
},
{
       src: "images/portfolio/CAT_delivery_Website.jpg" ,
       thumbnail: "images/portfolio/CAT_delivery_Website.jpg" ,
       thumbnailHeight: 212,
       tags: [{value: "Prototype", title: "Protoype"}, {value: "UX Design", title: "UX Design"}],
       caption: "Uni Project: Web app for a delivery service. Full prototype: https://github.com/nimayak/pdf-prototypes/blob/master/CAT_delivery_website.pdf"
},
{
       src: "images/portfolio/GoGo_Travel.jpg" ,
       thumbnail: "images/portfolio/GoGo_Travel.jpg" ,
       thumbnailHeight: 212,
       tags: [{value: "Prototype", title: "Protoype"}, {value: "UI Design", title: "UI Design"}],
       caption: "Uni Project: Low fidelity prototype for a Travel company. Full prototype: https://github.com/nimayak/pdf-prototypes/blob/master/GoGo_Travel.pdf"
},
{
       src: "images/portfolio/elnapress.png" ,
       thumbnail: "images/portfolio/elnapress.png" ,
      thumbnailWidth: 320,
       thumbnailHeight: 212,
       tags: [{value: "Web Design", title: "Web design"}, {value: "UX Design", title: "UX Design"}],
       caption: "Client Project: Create a modern website to fufill the client's requirements. Live website: https://www.elnapress.com.au/"
}]

export default class Portfolio extends Component {
  render() {
    return (
      <React.Fragment>
      {/* Portfolio Section
   ================================================== */}
      <section id="portfolio">

        <div className="row">

          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Work.</h1>
            <Gallery images={IMAGES}/>
            {/* portfolio-wrapper */}
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
            </div> {/* portfolio-wrapper end */}
          </div> {/* twelve columns end */}
          {/* Modal Popup
	      --------------------------------------------------------------- */}
          <div id="modal-01" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-CoverRedesign1.png" alt />
            <div className="description-box">
              <h4>Coffee Cup</h4>
              <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
              <span className="categories"><i className="fa fa-tag" />Branding, Webdesign</span>
            </div>
            <div className="link-box">
              <a href="http://www.behance.net">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-01 End */}
          <div id="modal-02" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/OldSpiceLogo.png" alt />
            <div className="description-box">
              <h4>Console</h4>
              <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
              <span className="categories"><i className="fa fa-tag" />Branding, Web Development</span>
            </div>
            <div className="link-box">
              <a href="http://www.behance.net">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-02 End */}
          <div id="modal-03" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/CoverRedesign2.png" alt />
            <div className="description-box">
              <h4>Judah</h4>
              <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
              <span className="categories"><i className="fa fa-tag" />Branding</span>
            </div>
            <div className="link-box">
              <a href="http://www.behance.net">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-03 End */}
          <div id="modal-04" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/CoverRedesign3.png" alt />
            <div className="description-box">
              <h4>Into the Light</h4>
              <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
              <span className="categories"><i className="fa fa-tag" />Photography</span>
            </div>
            <div className="link-box">
              <a href="http://www.behance.net">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-04 End */}
          <div id="modal-05" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-drawing-app.png" alt />
            <div className="description-box">
              <h4>Farmer Boy</h4>
              <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
              <span className="categories"><i className="fa fa-tag" />Branding, Webdesign</span>
            </div>
            <div className="link-box">
              <a href="http://www.behance.net">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-05 End */}
          <div id="modal-06" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/band-website.png" alt />
            <div className="description-box">
              <h4>Girl</h4>
              <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
              <span className="categories"><i className="fa fa-tag" />Photography</span>
            </div>
            <div className="link-box">
              <a href="http://www.behance.net">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-06 End */}
          <div id="modal-07" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/HRAFF-website.png" alt />
            <div className="description-box">
              <h4>Origami</h4>
              <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
              <span className="categories"><i className="fa fa-tag" />Branding, Illustration</span>
            </div>
            <div className="link-box">
              <a href="http://www.behance.net">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-07 End */}
          <div id="modal-08" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/vintage-collectibles.png" alt />
            <div className="description-box">
              <h4>Retrocam</h4>
              <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
              <span className="categories"><i className="fa fa-tag" />Webdesign, Photography</span>
            </div>
            <div className="link-box">
              <a href="http://www.behance.net">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-01 End */}
        </div> {/* row End */}
      </section> {/* Portfolio Section End*/}

      </React.Fragment>
    );
  }
}
