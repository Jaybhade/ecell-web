/*eslint-disable*/
import React from "react";
// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";
import bgvm from "../../assets/img/vision-mission.png";
// core components

function SectionIcons() {
  React.useEffect(() => {});
  return (
    <>
      <div className="section section-icons"
      >
        <Container fluid >
          <Row>
            <Col md="3">
              <div className="icons-nucleo">
                <i className="first-left-icon nc-icon nc-planet add-animation" />
                <i className="second-left-icon nc-icon nc-touch-id add-animation" />
                <i className="third-left-icon nc-icon nc-hat-3 add-animation" />
                <i className="fourth-left-icon nc-icon nc-tap-01 add-animation" />
                <i className="fifth-left-icon nc-icon nc-zoom-split add-animation" />
                <i className="sixth-left-icon nc-icon nc-atom add-animation" />
                <i className="seventh-left-icon nc-icon nc-world-2 add-animation" />
                <i className="eighth-left-icon nc-icon nc-settings add-animation" />
                <i className="ninth-left-icon nc-icon nc-bulb-63 add-animation" />
                <i className="tenth-left-icon nc-icon nc-circle-10 add-animation" />
              </div>
            </Col>
            <Col className="text-center" md="6">
              <h2 className="title revealOnScroll">About Us</h2>
              <h5 className="description" >
              It is often said that "science of today is technology of tomorrow". And in, ACIIE, 
              IET DAVV we are determined to achieve this very goal. Entrepreneurs with a technical 
              background like our students have an amazing capability to innovate both on the technical 
              and business fronts. The Entrepreneurship Cell, IET DAVV aims at fostering such capability 
              and provides all possible support to convert their dreams and aspiration into reality. We are 
              here to support the aspiring entrepreneurs of the future and also to drive-in the real sense of 
              ‘entrepreneurship’ in those, who are new to this entrancing word.
              </h5>
              <br />
              <br />
              <h2 className="title revealOnScroll">Vision</h2>
              <h5 className="description">
              A budding entrepreneur never gives up 5 landmarks – perspire, explore, create, volunteer, lead. 
              We at E-Cell make sure that we become his ladder at each of these landmarks. The Entrepreneurship Cell 
              aims to ignite creative thinking and nurture entrepreneurial instincts in students. The Cell hopes to achieve 
              this by conducting stimulating workshops, competitions and interactive sessions with eminent personalities who 
              are role models when it comes to business development. The Cell's ultimate vision is to create independent business 
              persons out of interested students so that they not only become self-employed but also become capable of providing 
              gainful, fulfilling employment to others and thereby benefit society at large.

              </h5>
              <br />
              <br />
              <h2 className="title revealOnScroll">Mission</h2>
              <h5 className="description">
              To foster and sustain the spirit of Entrepreneurship amongst students and provide them with a platform to convert 
              their ideas to businesses.
              </h5>
              {/* <Button
                className="btn-round mr-1"
                color="primary"
                href="/nucleo-icons"
                size="lg"
                target="_blank"
              >
                View Demo Icons
              </Button>
              <Button
                className="btn-round"
                color="primary"
                href="https://nucleoapp.com/?ref=1712"
                outline
                size="lg"
                target="_blank"
              >
                View All Icons
              </Button> */}
            </Col>
            <Col md="3">
              <div className="icons-nucleo">
                <i className="first-right-icon nc-icon nc-bank add-animation" />
                <i className="second-right-icon nc-icon nc-tag-content add-animation" />
                <i className="third-right-icon nc-icon nc-bell-55 add-animation" />
                <i className="fourth-right-icon nc-icon nc-tv-2 add-animation" />
                <i className="fifth-right-icon nc-icon nc-map-big add-animation" />
                <i className="sixth-right-icon nc-icon nc-badge add-animation" />
                <i className="seventh-right-icon nc-icon nc-simple-add add-animation" />
                <i className="eighth-right-icon nc-icon nc-trophy add-animation" />
                <i className="ninth-right-icon nc-icon nc-lock-circle-open add-animation" />
                <i className="tenth-right-icon nc-icon nc-key-25 add-animation" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default SectionIcons;
