import React from "react";
import Container from "react-bootstrap/Container";

class Content extends React.Component {
  render() {
    return (
      <Container>
          <div class="album py-5 bg-light">
          <div class="container">
            <h3>Our Achievements</h3><br></br>
            <div class="row">
              <div class="col-md-4">
                <div class="card mb-4 shadow-sm contents">
                  <div class="card-body">
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                        <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                      </div>
                      <small class="text-muted" id="muted-text">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card mb-4 shadow-sm content">
                  <div class="card-body">
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                        <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                      </div>
                      <small class="text-muted" id="muted-text">12 hrs ago</small>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card mb-4 shadow-sm contents">
                  <div class="card-body">
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                        <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                      </div>
                      <small class="text-muted" id="muted-text">9 days ago</small>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </div>
            <hr className="content-separator"></hr>
          </div>
          <div class="container sp-container">
            <div className="sponsors-text">Our Sponsors</div>
            <ul className="sponsors">
              <li className="sp-links"><a href="https://www.facebook.com" target="_blank"><img
                      src="https://res.cloudinary.com/lordefid/image/upload/c_scale,h_30/v1589732622/Group_157_rzbgqx.png"
                      alt="facebook-logo"
                      /></a></li>

              <li className="sp-links"><a href="https://andela.com" target="_blank"><img
                      src="https://res.cloudinary.com/lordefid/image/upload/c_scale,h_30/v1589732608/Andella_gmanxz.png"
                      alt="andela-logo"
                    /></a></li>
              <li className="sp-links"><a href="https://www.firstbanknigeria.com" target="_blank"><img
                        src="https://res.cloudinary.com/lordefid/image/upload/c_scale,h_30/v1589732623/FirstBank_Logo_coyuui.jpg"
                        alt="firstbank-logo"
                      /></a></li>
              <li className="sp-links"><a href="https://www.paypal.com" target="_blank"><img
                        src="https://res.cloudinary.com/lordefid/image/upload/c_scale,h_30/v1589732624/paypal-logo-vector-download-400x400_yy1m3o.jpg"
                        alt="paypal-logo"
                      /></a></li>
            </ul>
          </div>
        </Container>
      
    );
  }
}

export default Content;
