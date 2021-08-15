import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardImg,
  CardTitle,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import DangerNavbar from "components/Navbars/DangerNavbar.js";
import FooterAboutUs from "components/Footers/FooterAboutUs.js";

function Faculty() {
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
            <div className="section section-dark text-center landing-section">
          <Container>
            <h2 className="title">Our Student Team</h2>
            <Row>
              <Col md="3">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/Team/SourabhSir.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Sourabh Yadav</CardTitle>
                        <h6 className="card-category text-muted">
                          President, E-Cell
                        </h6>
                      </div>
                    </a>
                    {/* <p className="card-description text-center">
                      Teamwork is so important that it is virtually impossible
                      for you to reach the heights of your capabilities or make
                      the money that you want without becoming very good at it.
                    </p> */}
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-link btn-just-icon mr-1"
                      color="facebook"
                      href="https://www.facebook.com/sourav.yadav.3386"
                      target="_blank"
                    >
                      <i className="fa fa-facebook" />
                    </Button>
                    <Button
                      className="btn-link btn-just-icon"
                      color="linkedin"
                      href="https://www.linkedin.com/in/sourabh-yadav-collegementor/"
                      target="_blank"
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                    <Button
                      className="btn-link btn-just-icon mr-1"
                      color="instagram"
                      href="https://www.instagram.com/sourabh_0912/"
                      target="_blank"
                    >
                      <i className="fa fa-instagram" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="3">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/Team/SparshSir.JPG")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Sparsh Sadafal</CardTitle>
                        <h6 className="card-category text-muted">
                          Vice-President, E-Cell
                        </h6>
                      </div>
                    </a>
                    {/* <p className="card-description text-center">
                      Teamwork is so important that it is virtually impossible
                      for you to reach the heights of your capabilities or make
                      the money that you want without becoming very good at it.
                    </p> */}
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-link btn-just-icon mr-1"
                      color="facebook"
                      href="https://www.facebook.com/sparsh.sadafal"
                      target="_blank"
                    >
                      <i className="fa fa-facebook" />
                    </Button>
                    <Button
                      className="btn-link btn-just-icon"
                      color="linkedin"
                      href="https://www.linkedin.com/in/sparshsadafal14/"
                      target="_blank"
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                    <Button
                      className="btn-link btn-just-icon mr-1"
                      color="instagram"
                      href="https://www.instagram.com/sparshsadafal/"
                      target="_blank"
                    >
                      <i className="fa fa-instagram" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="3">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/Team/AyushSir.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Ayush Bhatia</CardTitle>
                        <h6 className="card-category text-muted">
                          Technical Head, E-Cell
                        </h6>
                      </div>
                    </a>
                    {/* <p className="card-description text-center">
                      Teamwork is so important that it is virtually impossible
                      for you to reach the heights of your capabilities or make
                      the money that you want without becoming very good at it.
                    </p> */}
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-link btn-just-icon mr-1"
                      color="facebook"
                      href="https://www.facebook.com/ayush.bhatia.35977"
                      target="_blank"
                    >
                      <i className="fa fa-facebook" />
                    </Button>
                    <Button
                      className="btn-link btn-just-icon"
                      color="linkedin"
                      href="https://www.linkedin.com/in/bhatiaayush/"
                      target="_blank"
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                    <Button
                      className="btn-link btn-just-icon mr-1"
                      color="instagram"
                      href="https://www.instagram.com/batmanftw/"
                      target="_blank"
                    >
                      <i className="fa fa-instagram" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="3">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/Team/GauravSir.jpeg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Gaurav Patil</CardTitle>
                        <h6 className="card-category text-muted">
                          Finance Head, E-Cell
                        </h6>
                      </div>
                    </a>
                    {/* <p className="card-description text-center">
                      Teamwork is so important that it is virtually impossible
                      for you to reach the heights of your capabilities or make
                      the money that you want without becoming very good at it.
                    </p> */}
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-link btn-just-icon mr-1"
                      color="facebook"
                      href="https://www.facebook.com/gaurav.patil.5891"
                      target="_blank"
                    >
                      <i className="fa fa-facebook" />
                    </Button>
                    <Button
                      className="btn-link btn-just-icon"
                      color="linkedin"
                      href="https://www.linkedin.com/in/gaurav-patil-10336917a/"
                      target="_blank"
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                    <Button
                      className="btn-link btn-just-icon mr-1"
                      color="instagram"
                      href="https://www.instagram.com/patil___1111/"
                      target="_blank"
                    >
                      <i className="fa fa-instagram" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col md="3">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/Team/MansiMam.jpeg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Mansi Dalal</CardTitle>
                        <h6 className="card-category text-muted">
                          Head of Public Relations, E-Cell
                        </h6>
                      </div>
                    </a>
                    {/* <p className="card-description text-center">
                      Teamwork is so important that it is virtually impossible
                      for you to reach the heights of your capabilities or make
                      the money that you want without becoming very good at it.
                    </p> */}
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-link btn-just-icon mr-1"
                      color="facebook"
                      href="https://www.facebook.com/mansi.dalal.90"
                      target="_blank"
                    >
                      <i className="fa fa-facebook" />
                    </Button>
                    <Button
                      className="btn-link btn-just-icon"
                      color="linkedin"
                      href="https://www.linkedin.com/in/mansi-dalal-ba500718a/"
                      target="_blank"
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                    <Button
                      className="btn-link btn-just-icon mr-1"
                      color="instagram"
                      href="https://www.instagram.com/mansi_dalal21/"
                      target="_blank"
                    >
                      <i className="fa fa-instagram" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="3">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/Team/NikitaMam.jpeg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Nikita Shrivastava</CardTitle>
                        <h6 className="card-category text-muted">
                          Head of Public Relations, E-Cell
                        </h6>
                      </div>
                    </a>
                    {/* <p className="card-description text-center">
                      Teamwork is so important that it is virtually impossible
                      for you to reach the heights of your capabilities or make
                      the money that you want without becoming very good at it.
                    </p> */}
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-link btn-just-icon mr-1"
                      color="facebook"
                      href="https://www.facebook.com/impure.03"
                      target="_blank"
                    >
                      <i className="fa fa-facebook" />
                    </Button>
                    <Button
                      className="btn-link btn-just-icon"
                      color="linkedin"
                      href="https://www.linkedin.com/in/nikita-shrivastava-282415182/"
                      target="_blank"
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                    <Button
                      className="btn-link btn-just-icon mr-1"
                      color="instagram"
                      href="https://www.instagram.com/_nikita.03_/"
                      target="_blank"
                    >
                      <i className="fa fa-instagram" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="3">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/Team/RithikSir.JPG")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Rithik Pandita</CardTitle>
                        <h6 className="card-category text-muted">
                          Head of Event Management, E-Cell
                        </h6>
                      </div>
                    </a>
                    {/* <p className="card-description text-center">
                      Teamwork is so important that it is virtually impossible
                      for you to reach the heights of your capabilities or make
                      the money that you want without becoming very good at it.
                    </p> */}
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-link btn-just-icon mr-1"
                      color="facebook"
                      href="https://www.facebook.com/profile.php?id=100017529305389"
                      target="_blank"
                    >
                      <i className="fa fa-facebook" />
                    </Button>
                    <Button
                      className="btn-link btn-just-icon"
                      color="linkedin"
                      href="#pablo"
                      target="_blank"
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                    <Button
                      className="btn-link btn-just-icon mr-1"
                      color="instagram"
                      href="https://www.instagram.com/rithik_pandita/"
                      target="_blank"
                    >
                      <i className="fa fa-instagram" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="3">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/Team/AdyaMam.jpeg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Adya Trisal</CardTitle>
                        <h6 className="card-category text-muted">
                          Head of Creative Writing, E-Cell
                        </h6>
                      </div>
                    </a>
                    {/* <p className="card-description text-center">
                      Teamwork is so important that it is virtually impossible
                      for you to reach the heights of your capabilities or make
                      the money that you want without becoming very good at it.
                    </p> */}
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-link btn-just-icon mr-1"
                      color="facebook"
                      href="#pablo"
                      target="_blank"
                    >
                      <i className="fa fa-facebook" />
                    </Button>
                    <Button
                      className="btn-link btn-just-icon"
                      color="linkedin"
                      href="https://www.linkedin.com/in/adya-t-10913918a/"
                      target="_blank"
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                    <Button
                      className="btn-link btn-just-icon mr-1"
                      color="instagram"
                      href="https://www.instagram.com/adyatrisal/"
                      target="_blank"
                    >
                      <i className="fa fa-instagram" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col md="3">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/Team/AdarshSir.jpeg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Adarsh Agrawal</CardTitle>
                        <h6 className="card-category text-muted">
                          Head of Digital Marketing, E-Cell
                        </h6>
                      </div>
                    </a>
                    {/* <p className="card-description text-center">
                      Teamwork is so important that it is virtually impossible
                      for you to reach the heights of your capabilities or make
                      the money that you want without becoming very good at it.
                    </p> */}
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-link btn-just-icon mr-1"
                      color="facebook"
                      href="https://www.facebook.com/adar15"
                      target="_blank"
                    >
                      <i className="fa fa-facebook" />
                    </Button>
                    <Button
                      className="btn-link btn-just-icon"
                      color="linkedin"
                      href="https://www.linkedin.com/in/adarsh-agrawal-7448b599/"
                      target="_blank"
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                    <Button
                      className="btn-link btn-just-icon mr-1"
                      color="instagram"
                      href="https://www.instagram.com/adarsh_ag15/"
                      target="_blank"
                    >
                      <i className="fa fa-instagram" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="3">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/Team/AishwaryaMam.jpeg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Aishwarya Agrawal</CardTitle>
                        <h6 className="card-category text-muted">
                          Head of Creative Writing, E-Cell
                        </h6>
                      </div>
                    </a>
                    {/* <p className="card-description text-center">
                      Teamwork is so important that it is virtually impossible
                      for you to reach the heights of your capabilities or make
                      the money that you want without becoming very good at it.
                    </p> */}
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-link btn-just-icon mr-1"
                      color="facebook"
                      href="https://www.facebook.com/aishwarya.agrawal.336333"
                      target="_blank"
                    >
                      <i className="fa fa-facebook" />
                    </Button>
                    <Button
                      className="btn-link btn-just-icon"
                      color="linkedin"
                      href="https://www.linkedin.com/in/aishwarya-agrawal-67a355137/"
                      target="_blank"
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                    <Button
                      className="btn-link btn-just-icon mr-1"
                      color="instagram"
                      href="https://www.instagram.com/aishwarya._.21/"
                      target="_blank"
                    >
                      <i className="fa fa-instagram" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              
            </Row>
          </Container>
        </div>
          </div>
        </div>
      </div>
      <FooterAboutUs />
    </>
  );
}

export default Faculty;
