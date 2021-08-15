import React from "react";
import { Link } from "react-router-dom";
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
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

function WhiteNavbar() {
  const [bodyClick, setBodyClick] = React.useState(false);
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    // initialise
    headroom.init();
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
      <Navbar className="fixed-top" expand="lg" id="navbar-main" color="danger">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand id="navbar-brand" to="/presentation" tag={Link}>
              E-Cell
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
                  href="https://www.creative-tim.com/product/paper-kit-pro-react?ref=pkpr-danger-navbar"
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

export default WhiteNavbar;
