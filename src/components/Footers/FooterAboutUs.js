import React from "react";
// react plugin used to create DropdownMenu for selecting items
import Select from "react-select";

// reactstrap components
import { Button, FormGroup, Container, Row, Col } from "reactstrap";

function FooterAboutUs() {
  const [languageSelect, setLanguageSelect] = React.useState({
    value: "en",
    label: "English"
  });
  const [curencySelect, setCurencySelect] = React.useState({
    value: "USD",
    label: "USD"
  });
  return (
    <>
      <footer className="footer footer-big footer-black">
        <Container>
          <Row>
            <Col  md="4" sm="6" xs="12">
              
              <h3><strong>E-Cell</strong></h3>
              <h3><strong>IET-DAVV</strong></h3>
            </Col>
            
                <Col md="4" sm="6" xs="12">
                 
                  <h4>THINK</h4>
                  <h4>FEEL</h4>
                  <h4>COLLABORATE</h4>                  
                </Col>
                <Col md="4" sm="6" xs="12">
                  <div className="social-area">
                    <Button
                      className="btn-just-icon btn-round mr-1"
                      color="facebook"
                      href="https://www.facebook.com/ecell.ietdavv/"
                      target="_blank"
                    >
                      <i className="fa fa-facebook" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-round mr-1"
                      color="linkedin"
                      href="https://www.linkedin.com/company/e-cell-iet-davv/"
                      target="_blank"
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-round mr-1"
                      color="instagram"
                      href="https://www.instagram.com/ecell.ietdavv/"
                      target="_blank"
                    >
                      <i className="fa fa-instagram" />
                    </Button>
                    
                  </div>
                  <h4>CONTACT US</h4>
                  <br></br>
                  <h5 style={{color:"white"}}>ecellietdavv@gmail.com</h5>
                </Col>
              
              {/* <hr />
              <div className="copyright">
                <div className="pull-left">
                  © {new Date().getFullYear()} Ecell, IET-DAVV
                </div> */}
                {/* <div className="links pull-right">
                  <ul>
                    <li className="mr-1">
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        Company Policy
                      </a>
                    </li>
                    |{" "}
                    <li className="mr-1">
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        Terms
                      </a>
                    </li>
                    |{" "}
                    <li>
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        Privacy
                      </a>
                    </li>
                  </ul>
                </div> */}
             
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default FooterAboutUs;
