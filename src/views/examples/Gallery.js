import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import DangerNavbar from "components/Navbars/DangerNavbar.js";
import FooterAboutUs from "components/Footers/FooterAboutUs.js";

function Gallery() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("discover");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("discover");
    };
  });
  (function(d, s, id){var js; if (d.getElementById(id)) {return;} js = d.createElement(s); js.id = id; js.src = "https://embedsocial.com/embedscript/ei.js"; d.getElementsByTagName("head")[0].appendChild(js);}(document, "script", "EmbedSocialScript"));
  return (
    <>
      <DangerNavbar />
      <div className="wrapper">
        <div className="wrapper">
          <div className="main">
            <div className="section">
              <Container>
                <Row>
                  <Col className="ml-auto mr-auto text-center" md="6" xs="12">
                    <h2 className="discover-title">
                      Gallery
                    </h2>
                </Col>
                </Row>
                <div class='embedsocial-album' data-ref="ab3865cc1d8fd5eabbf2f54d6ac3c7cc0d893ec9"></div>
              </Container>
            </div>
          </div>
        </div>
      </div>
      <FooterAboutUs />
    </>
  );
}

export default Gallery;
