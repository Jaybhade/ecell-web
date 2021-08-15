import React from "react";

// reactstrap components
import {
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators
} from "reactstrap";

// core components

const items = [
  {
    content: (
      <Card className=" card-testimonial card-plain">
        <div className=" card-avatar">
          <img
            alt="..."
            className=" img"
            src={require("assets/img/quotes/stevejobs.jpg")}
          ></img>
        </div>
        <CardBody>
          <h5 className=" card-description">
            "Be a yardstick of quality. Some people aren’t used to an environment where excellence is expected."
          </h5>
          <CardFooter>
            <CardTitle tag="h4">Steve Jobs</CardTitle>
            {/* <h6 className=" card-category">Web Developer</h6> */}
            {/* <div className=" card-stars">
              <i aria-hidden={true} className=" fa fa-star mr-1"></i>
              <i aria-hidden={true} className=" fa fa-star mr-1"></i>
              <i aria-hidden={true} className=" fa fa-star mr-1"></i>
              <i aria-hidden={true} className=" fa fa-star mr-1"></i>
              <i aria-hidden={true} className=" fa fa-star"></i>
            </div> */}
          </CardFooter>
        </CardBody>
      </Card>
    ),
    src: "0",
    altText: "",
    caption: ""
  },
  {
    content: (
      <Card className=" card-testimonial card-plain">
        <div className=" card-avatar">
          <img
            alt="..."
            className=" img"
            src={require("assets/img/quotes/elonmusk.jpg")}
          ></img>
        </div>
        <CardBody>
          <h5 className=" card-description">
            “Good ideas are always crazy until they’re not.”
          </h5>
          <CardFooter>
            <CardTitle tag="h4">Elon Musk</CardTitle>
            {/* <h6 className=" card-category">Web Developer</h6>
            <div className=" card-stars">
              <i aria-hidden={true} className=" fa fa-star mr-1"></i>
              <i aria-hidden={true} className=" fa fa-star mr-1"></i>
              <i aria-hidden={true} className=" fa fa-star mr-1"></i>
              <i aria-hidden={true} className=" fa fa-star mr-1"></i>
              <i aria-hidden={true} className=" fa fa-star"></i>
            </div> */}
          </CardFooter>
        </CardBody>
      </Card>
    ),
    src: "1",
    altText: "",
    caption: ""
  },
  {
    content: (
      <Card className=" card-testimonial card-plain">
        <div className=" card-avatar">
          <img
            alt="..."
            className=" img"
            src={require("assets/img/quotes/billgates.jpg")}
          ></img>
        </div>
        <CardBody>
          <h5 className=" card-description">
            “Your most unhappy customers are your greatest source of learning.”
          </h5>
          <CardFooter>
            <CardTitle tag="h4">Bill Gates</CardTitle>
            {/* <h6 className=" card-category">Web Developer</h6> */}
            {/* <div className=" card-stars">
              <i aria-hidden={true} className=" fa fa-star mr-1"></i>
              <i aria-hidden={true} className=" fa fa-star mr-1"></i>
              <i aria-hidden={true} className=" fa fa-star mr-1"></i>
              <i aria-hidden={true} className=" fa fa-star mr-1"></i>
              <i aria-hidden={true} className=" fa fa-star"></i>
            </div> */}
          </CardFooter>
        </CardBody>
      </Card>
    ),
    src: "0",
    altText: "",
    caption: ""
  },
  {
    content: (
      <Card className=" card-testimonial card-plain">
        <div className=" card-avatar">
          <img
            alt="..."
            className=" img"
            src={require("assets/img/quotes/henryford.jpg")}
          ></img>
        </div>
        <CardBody>
          <h5 className=" card-description">
            “It has been my observation that most people get ahead during the time that others waste.”
          </h5>
          <CardFooter>
            <CardTitle tag="h4">Henry Ford</CardTitle>
            {/* <h6 className=" card-category">Web Developer</h6>
            <div className=" card-stars">
              <i aria-hidden={true} className=" fa fa-star mr-1"></i>
              <i aria-hidden={true} className=" fa fa-star mr-1"></i>
              <i aria-hidden={true} className=" fa fa-star mr-1"></i>
              <i aria-hidden={true} className=" fa fa-star mr-1"></i>
              <i aria-hidden={true} className=" fa fa-star"></i>
            </div> */}
          </CardFooter>
        </CardBody>
      </Card>
    ),
    src: "2",
    altText: "",
    caption: ""
  },
  {
    content: (
      <Card className=" card-testimonial card-plain">
        <div className=" card-avatar">
          <img
            alt="..."
            className=" img"
            src={require("assets/img/quotes/jeffbezos.jpg")}
          ></img>
        </div>
        <CardBody>
          <h5 className=" card-description">
             “You don't choose your passions, your passions choose you.”
          </h5>
          <CardFooter>
            <CardTitle tag="h4">Jeff Bezos</CardTitle>
            {/* <h6 className=" card-category">Web Developer</h6> */}
            {/* <div className=" card-stars">
              <i aria-hidden={true} className=" fa fa-star mr-1"></i>
              <i aria-hidden={true} className=" fa fa-star mr-1"></i>
              <i aria-hidden={true} className=" fa fa-star mr-1"></i>
              <i aria-hidden={true} className=" fa fa-star mr-1"></i>
              <i aria-hidden={true} className=" fa fa-star"></i>
            </div> */}
          </CardFooter>
        </CardBody>
      </Card>
    ),
    src: "0",
    altText: "",
    caption: ""
  },
  {
    content: (
      <Card className=" card-testimonial card-plain">
        <div className=" card-avatar">
          <img
            alt="..."
            className=" img"
            src={require("assets/img/quotes/markzuckerberg.jpg")}
          ></img>
        </div>
        <CardBody>
          <h5 className=" card-description">
             “Move fast and break things. Unless you are breaking stuff, you are not moving fast enough.”
          </h5>
          <CardFooter>
            <CardTitle tag="h4">Mark Zuckerberg</CardTitle>
            {/* <h6 className=" card-category">Web Developer</h6> */}
            {/* <div className=" card-stars">
              <i aria-hidden={true} className=" fa fa-star mr-1"></i>
              <i aria-hidden={true} className=" fa fa-star mr-1"></i>
              <i aria-hidden={true} className=" fa fa-star mr-1"></i>
              <i aria-hidden={true} className=" fa fa-star mr-1"></i>
              <i aria-hidden={true} className=" fa fa-star"></i>
            </div> */}
          </CardFooter>
        </CardBody>
      </Card>
    ),
    src: "0",
    altText: "",
    caption: ""
  },
  {
    content: (
      <Card className=" card-testimonial card-plain">
        <div className=" card-avatar">
          <img
            alt="..."
            className=" img"
            src={require("assets/img/quotes/adamdangelo.jpg")}
          ></img>
        </div>
        <CardBody>
          <h5 className=" card-description">
             “Focus on the long term, and always do what's right to grow the company and not make short term decisions.
             And outlast everyone one.”
          </h5>
          <CardFooter>
            <CardTitle tag="h4">Adam D' Angelo</CardTitle>
            {/* <h6 className=" card-category">Web Developer</h6> */}
            {/* <div className=" card-stars">
              <i aria-hidden={true} className=" fa fa-star mr-1"></i>
              <i aria-hidden={true} className=" fa fa-star mr-1"></i>
              <i aria-hidden={true} className=" fa fa-star mr-1"></i>
              <i aria-hidden={true} className=" fa fa-star mr-1"></i>
              <i aria-hidden={true} className=" fa fa-star"></i>
            </div> */}
          </CardFooter>
        </CardBody>
      </Card>
    ),
    src: "0",
    altText: "",
    caption: ""
  },
  {
    content: (
      <Card className=" card-testimonial card-plain">
        <div className=" card-avatar">
          <img
            alt="..."
            className=" img"
            src={require("assets/img/quotes/sergeybrin.jpg")}
          ></img>
        </div>
        <CardBody>
          <h5 className=" card-description">
             “Solving big problems is easier than solving little problems.”
          </h5>
          <CardFooter>
            <CardTitle tag="h4">Sergey Brin</CardTitle>
            {/* <h6 className=" card-category">Web Developer</h6> */}
            {/* <div className=" card-stars">
              <i aria-hidden={true} className=" fa fa-star mr-1"></i>
              <i aria-hidden={true} className=" fa fa-star mr-1"></i>
              <i aria-hidden={true} className=" fa fa-star mr-1"></i>
              <i aria-hidden={true} className=" fa fa-star mr-1"></i>
              <i aria-hidden={true} className=" fa fa-star"></i>
            </div> */}
          </CardFooter>
        </CardBody>
      </Card>
    ),
    src: "0",
    altText: "",
    caption: ""
  },
  {
    content: (
      <Card className=" card-testimonial card-plain">
        <div className=" card-avatar">
          <img
            alt="..."
            className=" img"
            src={require("assets/img/quotes/ratantata.jpg")}
          ></img>
        </div>
        <CardBody>
          <h5 className=" card-description">
             “I don't believe in taking right decisions, I take decisions and then make them right.”
          </h5>
          <CardFooter>
            <CardTitle tag="h4">Ratan Tata</CardTitle>
            {/* <h6 className=" card-category">Web Developer</h6> */}
            {/* <div className=" card-stars">
              <i aria-hidden={true} className=" fa fa-star mr-1"></i>
              <i aria-hidden={true} className=" fa fa-star mr-1"></i>
              <i aria-hidden={true} className=" fa fa-star mr-1"></i>
              <i aria-hidden={true} className=" fa fa-star mr-1"></i>
              <i aria-hidden={true} className=" fa fa-star"></i>
            </div> */}
          </CardFooter>
        </CardBody>
      </Card>
    ),
    src: "0",
    altText: "",
    caption: ""
  },
  {
    content: (
      <Card className=" card-testimonial card-plain">
        <div className=" card-avatar">
          <img
            alt="..."
            className=" img"
            src={require("assets/img/quotes/riteshagarwal.jpg")}
          ></img>
        </div>
        <CardBody>
          <h5 className=" card-description">
             “Start small, nail it and then make it big.”
          </h5>
          <CardFooter>
            <CardTitle tag="h4">Ritesh Agarwal</CardTitle>
            {/* <h6 className=" card-category">Web Developer</h6> */}
            {/* <div className=" card-stars">
              <i aria-hidden={true} className=" fa fa-star mr-1"></i>
              <i aria-hidden={true} className=" fa fa-star mr-1"></i>
              <i aria-hidden={true} className=" fa fa-star mr-1"></i>
              <i aria-hidden={true} className=" fa fa-star mr-1"></i>
              <i aria-hidden={true} className=" fa fa-star"></i>
            </div> */}
          </CardFooter>
        </CardBody>
      </Card>
    ),
    src: "0",
    altText: "",
    caption: ""
  },
];

function SectionTestimonials() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  const onExiting = () => {
    setAnimating(true);
  };
  const onExited = () => {
    setAnimating(false);
  };
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = newIndex => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  return (
    <>
      <div className="section section-testimonials">
        <Container fluid>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="8">
              <h2 className="title">Words from entrepreneurs</h2>
              {/* <h5 className="description">
                The UI Kits, Templates and Dashboards that we've created are
                used by <b>790,000+ web developers</b> in over{" "}
                <b>1,400,00 Web Projects</b>. This is what some of them think:
              </h5> */}
            </Col>
          </Row>
          <Row>
            <Col className="ml-auto" md="2">
              <div className="testimonials-people">
                <img
                  alt="..."
                  className="left-first-person add-animation"
                  src={require("assets/img/quotes/stevejobs.jpg")}
                />
                <img
                  alt="..."
                  className="left-second-person add-animation"
                  src={require("assets/img/quotes/elonmusk.jpg")}
                />
                <img
                  alt="..."
                  className="left-third-person add-animation"
                  src={require("assets/img/quotes/billgates.jpg")}
                />
                <img
                  alt="..."
                  className="left-fourth-person add-animation"
                  src={require("assets/img/quotes/henryford.jpg")}
                />
                {/* <img
                  alt="..."
                  className="left-fifth-person add-animation"
                   src={require("assets/img/quotes/jeffbezos.jpg")}
                /> */}
                <img
                  alt="..."
                  className="left-sixth-person add-animation"
                  src={require("assets/img/quotes/jeffbezos.jpg")}
                />
              </div>
            </Col>
            <Col md="6">
              <div className="page-carousel">
                <Carousel
                  activeIndex={activeIndex}
                  next={next}
                  previous={previous}
                >
                  <CarouselIndicators
                    items={items}
                    activeIndex={activeIndex}
                    onClickHandler={goToIndex}
                  />
                  {items.map((item, key) => {
                    return (
                      <CarouselItem
                        onExiting={onExiting}
                        onExited={onExited}
                        key={key}
                      >
                        {item.content}
                      </CarouselItem>
                    );
                  })}
                  <a
                    className="left carousel-control carousel-control-prev"
                    data-slide="prev"
                    href="#pablo"
                    onClick={e => {
                      e.preventDefault();
                      previous();
                    }}
                    role="button"
                  >
                    <span className="fa fa-angle-left" />
                    <span className="sr-only">Previous</span>
                  </a>
                  <a
                    className="right carousel-control carousel-control-next"
                    data-slide="next"
                    href="#pablo"
                    onClick={e => {
                      e.preventDefault();
                      next();
                    }}
                    role="button"
                  >
                    <span className="fa fa-angle-right" />
                    <span className="sr-only">Next</span>
                  </a>
                </Carousel>
              </div>
            </Col>
            <Col className="mr-auto" md="2">
              <div className="testimonials-people">
                <img
                  alt="..."
                  className="right-first-person add-animation"
                  src={require("assets/img/quotes/markzuckerberg.jpg")}
                />
                <img
                  alt="..."
                  className="right-second-person add-animation"
                  src={require("assets/img/quotes/adamdangelo.jpg")}
                />
                <img
                  alt="..."
                  className="right-third-person add-animation"
                  src={require("assets/img/quotes/sergeybrin.jpg")}
                />
                {/* <img
                  alt="..."
                  className="right-fourth-person add-animation"
                  src={require("assets/img/quotes/ratantata.jpg")}
                /> */}
                <img
                  alt="..."
                  className="right-fifth-person add-animation"
                  src={require("assets/img/quotes/riteshagarwal.jpg")}
                />
                <img
                  alt="..."
                  className="right-sixth-person add-animation"
                  src={require("assets/img/quotes/ratantata.jpg")}
                />
              </div>
            </Col>
          </Row>
        </Container>
        {/* <div className="our-clients">
          <Container>
            <Row className="justify-content-center">
              <Col md="2" xs="5">
                <img alt="..." src={require("assets/img/demo/vodafone.jpg")} />
              </Col>
              <Col md="2" xs="5">
                <img alt="..." src={require("assets/img/demo/microsoft.jpg")} />
              </Col>
              <Col md="2" xs="5">
                <img alt="..." src={require("assets/img/demo/harvard.jpg")} />
              </Col>
              <Col md="2" xs="5">
                <img alt="..." src={require("assets/img/demo/stanford.jpg")} />
              </Col>
            </Row>
          </Container>
        </div> */}
      </div>
    </>
  );
}

export default SectionTestimonials;
