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

function Discover() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("discover");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("discover");
    };
  });
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
                      Events
                    </h2>
                    {/* <Form className="form-inline" role="search">
                      <FormGroup>
                        <Input
                          className="border-input"
                          placeholder="Search..."
                          type="text"
                        />
                          
                      </FormGroup>
                      <Button
                        className="btn-just-icon"
                        color="default"
                        type="submit"
                      >
                        <i className="fa fa-search" />
                      </Button>
                    </Form> */}
                    <br />
                    <br />
                    <br />
                  </Col>
                </Row>
                <Row className="items-row">
                  <Col className="ml-auto" md="3" sm="4">
                    <Card className="card-plain text-center">
                      <div className="card-image">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img-rounded img-responsive"
                            src={require("assets/img/Events/Recruitment2019.jpg")}
                          />
                        </a>
                        <CardBody className="details-center">
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            <div className="author">
                              
                              <div className="text">
                                <span className="name">Recruitments 2019</span>
                                <div className="meta">5 Sept 2019</div>
                              </div>
                            </div>
                          </a>
                        </CardBody>
                      </div>
                    </Card>
                  </Col>
                  <Col md="4" sm="4">
                    <Card className="card-plain text-center">
                      <div className="card-image">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img-rounded img-responsive"
                            src={require("assets/img/Events/RajShamani.jpg")}
                          />
                        </a>
                        <CardBody className="details-center">
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            <div className="author">
                              
                              <div className="text">
                                <span className="name">Freshman Orientation</span>
                                <div className="meta">3 Sept 2019</div>
                              </div>
                            </div>
                          </a>
                        </CardBody>
                      </div>
                    </Card>
                  </Col>
                  <Col className="mr-auto" md="3" sm="4">
                    <Card className="card-plain text-center">
                      <div className="card-image">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img-rounded img-responsive"
                            src={require("assets/img/Events/Recruitment2018.jpg")}
                          />
                        </a>
                        <CardBody className="details-center">
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            <div className="author">
                              
                              <div className="text">
                                <span className="name">Recruitments</span>
                                <div className="meta">15 Mar 2019</div>
                              </div>
                            </div>
                          </a>
                        </CardBody>
                      </div>
                    </Card>
                  </Col>
                </Row>
                <Row className="items-row">
                  <Col className="ml-auto" md="4" sm="6">
                    <Card className="card-plain text-center">
                      <div className="card-image">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img-rounded img-responsive"
                            src={require("assets/img/Events/SunnyVaghela.jpg")}
                          />
                        </a>
                        <CardBody className="details-center">
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            <div className="author">
                              
                              <div className="text">
                                <span className="name">Session on Ethical Hacking, Web App Security, Cyber Forensics</span>
                                <br/>
                                <div className="meta">1 Feb 2019</div>
                              </div>
                            </div>
                          </a>
                        </CardBody>
                      </div>
                    </Card>
                  </Col>
                  <Col md="3" sm="6">
                    <Card className="card-plain text-center">
                      <div className="card-image">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img-rounded img-responsive"
                            src={require("assets/img/Events/RupendraSingh.jpg")}
                          />
                        </a>
                        <CardBody className="details-center">
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            <div className="author">
                             
                              <div className="text">
                                <span className="name">Session on "What it takes to be successful"</span>
                                <div className="meta">30 Jan 2019</div>
                              </div>
                            </div>
                          </a>
                        </CardBody>
                      </div>
                    </Card>
                  </Col>
                  <Col className="mr-auto d-sm-block" md="3">
                    <Card className="card-plain text-center">
                      <div className="card-image">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img-rounded img-responsive"
                            src={require("assets/img/Events/Awareness.jpg")}
                          />
                        </a>
                        <CardBody className="details-center">
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            <div className="author">
                              
                              <div className="text">
                                <span className="name">Entrepreneurship Awareness Camp</span>
                                <div className="meta">22-24 Jan 2019</div>
                              </div>
                            </div>
                          </a>
                        </CardBody>
                      </div>
                    </Card>
                  </Col>
                </Row>
                <Row className="items-row">
                  <Col className="ml-auto" md="2" sm="6">
                    <Card className="card-plain text-center">
                      <div className="card-image">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img-rounded img-responsive"
                            src={require("assets/img/Events/D2C.jpg")}
                          />
                        </a>
                        <CardBody className="details-center">
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            <div className="author">
                             
                              <div className="text">
                                <span className="name">Quiz</span>
                                <div className="meta">10 Jan 2019</div>
                              </div>
                            </div>
                          </a>
                        </CardBody>
                      </div>
                    </Card>
                  </Col>
                  <Col md="4" sm="6">
                    <Card className="card-plain text-center">
                      <div className="card-image">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img-rounded img-responsive"
                            src={require("assets/img/Events/CaseStudy.jpg")}
                          />
                        </a>
                        <CardBody className="details-center">
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            <div className="author">
                              
                              <div className="text">
                                <span className="name">Case Study Competition</span>
                                <div className="meta">31 Oct 2018</div>
                              </div>
                            </div>
                          </a>
                        </CardBody>
                      </div>
                    </Card>
                  </Col>
                  <Col className="mr-auto" md="4" sm="6">
                    {/* <Card className="card-plain text-center">
                      <div className="card-image">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img-rounded img-responsive"
                            src={require("assets/img/sections/anders-jilden.jpg")}
                          />
                        </a>
                        <CardBody className="details-center">
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            <div className="author">
                              <img
                                alt="..."
                                className="img-circle img-no-padding img-responsive"
                                src={require("assets/img/faces/erik-lucatero-2.jpg")}
                              />
                              <div className="text">
                                <span className="name">Tom Hanks</span>
                                <div className="meta">Drawn on 23 Jan</div>
                              </div>
                            </div>
                          </a>
                        </CardBody>
                      </div>
                    </Card> */}
                  </Col>
                </Row>
                {/* <Row>
                  <Col className="text-center ml-auto mr-auto" md="4">
                    <div className="preloader">
                      <div className="uil-reload-css mr-1" style={{}}>
                        <div />
                      </div>
                      <h5>Loading More</h5>
                    </div>
                  </Col>
                </Row> */}
              </Container>
            </div>
          </div>
        </div>
      </div>
      <FooterAboutUs />
    </>
  );
}

export default Discover;
