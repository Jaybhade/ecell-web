import React from "react";
import { Link } from "react-router-dom";
// nodejs library that concatenates strings
import classnames from "classnames";
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
import ecelllogo from "../../assets/img/logo.png";
// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  Nav,
  Container,
  UncontrolledTooltip,
  NavLink
} from "reactstrap";
// core components

function ColorNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [bodyClick, setBodyClick] = React.useState(false);
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    // initialise
    headroom.init();
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 199 ||
        document.body.scrollTop > 199
      ) {
        setNavbarColor("");
        document.getElementById("logo").style.width="30px";
        
      } else if (
        document.documentElement.scrollTop < 200 ||
        document.body.scrollTop < 200
      ) {
        setNavbarColor("navbar-transparent");
        document.getElementById("logo").style.width="4vw";
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      {bodyClick ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setBodyClick(false);
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar
        className={classnames("fixed-top", navbarColor)}
        expand="lg"
        id="navbar-main"
      >
        <Container>
          <div className="navbar-translate">
            <NavbarBrand id="navbar-brand" to="/presentation" tag={Link} >
              <img src={ecelllogo} id="logo" style={{maxWidth:"80px", minWidth:"30px"}} />
            </NavbarBrand>
            <UncontrolledTooltip placement="bottom" target="navbar-brand">
              E-Cell
            </UncontrolledTooltip>
            <button
              className="navbar-toggler"
              id="navigation"
              type="button"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setBodyClick(true);
                setCollapseOpen(true);
              }}
            >
              <span className="navbar-toggler-bar bar1" />
              <span className="navbar-toggler-bar bar2" />
              <span className="navbar-toggler-bar bar3" />
            </button>
          </div>
          <Collapse navbar isOpen={collapseOpen}>
            <Nav className="ml-auto" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle className="mr-2" color="default" caret nav>
                  Events
                </DropdownToggle>
                <DropdownMenu className="dropdown-danger" right>
                  <DropdownItem to="/blog-posts" tag={Link}>
                    Experts Talk
                  </DropdownItem>
                  <DropdownItem to="/discover" tag={Link}>
                    Events
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                      <NavLink href="/gallery">
                        Gallery
                      </NavLink>
                    </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle color="default" caret nav>
                  Our Team
                </DropdownToggle>
                <DropdownMenu className="dropdown-danger" right>
                  <DropdownItem to="/faculty" tag={Link}>
                   
                    Faculty
                  </DropdownItem>
                  <DropdownItem to="/student" tag={Link}>
                   
                    Student
                  </DropdownItem>
                  
                </DropdownMenu>
              </UncontrolledDropdown>
              {/* <NavItem>
                <Button
                  className="btn-round"
                  color="danger"
                  href="https://www.creative-tim.com/product/paper-kit-pro-react?ref=pkpr-color-navbar"
                  target="_blank"
                >
                  <i className="nc-icon nc-cart-simple" /> Buy Now
                </Button>
              </NavItem> */}
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorNavbar;
