import React from "react";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Label,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col
} from "reactstrap";

// core components


function SectionContactUs() {
  return (
    <>
      <div className="section section-contactus cd-section" id="contact-us">
        {/* ********* CONTACT US 1 ********* */}
        <div
          className="contactus-1 section-image"
          style={{
            backgroundImage:
              "url(" + require("assets/img/sections/soroush-karimi.jpg") + ")"
          }}
        >
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="10">
                <Card className="card-contact no-transition">
                  <CardTitle className="text-center" tag="h3">
                    Contact Us
                  </CardTitle>
                  <Row>
                    <Col className="ml-auto" md="5">
                      <CardBody>
                        <div className="info info-horizontal">
                          <div className="icon icon-info">
                            <i className="nc-icon nc-pin-3" />
                          </div>
                          <div className="description">
                            <h4 className="info-title">
                              Walk in at
                            </h4>
                            <p>
                              E-Cell Office, <br />
                              E-block, <br />
                              IET-DAVV
                            </p>
                          </div>
                        </div>
                        <div className="info info-horizontal">
                          <div className="icon icon-danger">
                            <i className="nc-icon nc-badge" />
                          </div>
                          <div className="description">
                            <h4 className="info-title">Give us a ring</h4>
                            <p>
                              Pranav Gupta<br />
                              +91 756 642 8909<br />

                            </p>
                          </div>
                        </div>
                      </CardBody>
                    </Col>
                    <Col className="mr-auto" md="5">
                      <Form id="contact-form" method="post" role="form" action="mailto:ecellietdavv@gmail.com">
                        <CardBody>
                          <Row>
                            <Col md="6">
                              <FormGroup className="label-floating">
                                <label className="control-label">
                                  First name
                                </label>
                                <Input
                                  name="name"
                                  placeholder="First Name"
                                  type="text"
                                />
                              </FormGroup>
                            </Col>
                            <Col md="6">
                              <FormGroup className="label-floating">
                                <label className="control-label">
                                  Last name
                                </label>
                                <Input
                                  name="name"
                                  placeholder="Last Name"
                                  type="text"
                                />
                              </FormGroup>
                            </Col>
                          </Row>
                          <FormGroup className="label-floating">
                            <label className="control-label">
                              Email address
                            </label>
                            <Input
                              name="email"
                              placeholder="Email"
                              type="email"
                            />
                          </FormGroup>
                          <FormGroup className="label-floating">
                            <label className="control-label">
                              Your message
                            </label>
                            <Input
                              id="message"
                              name="message"
                              placeholder="Message"
                              type="textarea"
                              rows="6"
                            />
                          </FormGroup>
                          <Row>
                            <Col md="6">
                              <Button
                                className="pull-right"
                                color="primary"
                                type="submit"
                              >
                                Send Message
                              </Button>
                            </Col>
                          </Row>
                        </CardBody>
                      </Form>
                    </Col>
                  </Row>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default SectionContactUs;
