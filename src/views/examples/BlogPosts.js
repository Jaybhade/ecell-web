import React from "react";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardTitle,
  Container,
  Row,
  Col,
  Collapse
} from "reactstrap";

// core components
import DangerNavbar from "components/Navbars/DangerNavbar.js";
import FooterAboutUs from "components/Footers/FooterAboutUs.js";
import ReactMd from 'react-md-file';

function BlogPosts() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("blog-posts");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("blog-posts");
    };
  });
  const [collapses, setCollapses] = React.useState([]);
  const changeCollapse = collapse => {
    if (collapses.includes(collapse)) {
      setCollapses(collapses.filter(prop => prop !== collapse));
    } else {
      setCollapses([...collapses, collapse]);
    }
  };
  return (
    <>
    <DangerNavbar />
      <div className="wrapper">
        <div className="main">
          <div className="section section-white">
            <Container>
              <Row>
                <Col className="ml-auto mr-auto text-center title" md="6">
                  <h2>Major Events</h2>
                  <h3 className="title-uppercase">
                    <small>Past Events</small>
                  </h3>
                </Col>
              </Row>
              <div className="article">
                <Row>
                  <Col className="ml-auto mr-auto" md="8">
                    <Card className="card-blog card-plain text-center">
                      <div className="card-image">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img img-raised"
                            src={require("assets/img/Events/RajShamani.jpg")}
                          />
                        </a>
                      </div>
                      <CardBody>
                        <div className="card-category">
                          <Badge className="main-tag" color="primary">
                            Featured
                          </Badge>
                        </div>
                        <a href="javascrip: void(0);">
                          <CardTitle tag="h3">
                          Freshman Orientation 2019
                          </CardTitle>
                        </a>
                        <div className="card-description">
                          <p>
                          A freshman orientation programme was organized by the e – cell of IET- DAVV 
                          on 3rd September 2019. The main highlight of the programme was Mr. Raj Shamani , 
                          one of the best influencers of India . He had adopted the profession of speaking 
                          six years back and is professional speaker since then. He is one of the youngest 
                          Indians to deliver a speech in UN.
                          </p>
                        </div>
                        <Collapse isOpen={collapses.includes(1)}>
              <CardBody>
              Raj Shamani started off his session by removing all the formalities and converting his speech into an interactive session. He shared his experience of being not very good at anything in his starting age but the eventually he figured out a way to turn his life around. He then discussed his first business of dishwashing soaps, later on he discussed his journey from not being able to speak fluently in English to becoming one of the keynote speakers of India. 
              </CardBody>
            </Collapse>
                      </CardBody>
                      <Button className="btn-round" color="danger" size="sm"
                      onClick={e => {
                        e.preventDefault();
                        changeCollapse(1);
                      }}>
                        Read more
                      </Button>
                    </Card>
                  </Col>
                </Row>
              </div>
              <hr />
              <br />
              <br />
              <div className="article">
                <Row>
                  <Col className="ml-auto mr-auto" md="8">
                    <Card className="card-blog card-plain text-center">
                      <div className="card-image">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img img-raised"
                            src={require("assets/img/Events/SunnyVaghela.jpg")}
                          />
                        </a>
                      </div>
                      <CardBody>
                        <div className="card-category">
                          <Badge className="main-tag" color="info">
                            Cyber Security
                          </Badge>
                        </div>
                        <a href="javascrip: void(0);">
                          <CardTitle tag="h3">
                            You Should Get Excited About Virtual Reality.
                          </CardTitle>
                          <h6 className="title-uppercase">October 20, 2016</h6>
                        </a>
                        <div className="card-description">
                          <p>
                          A session was held on ethical hacking, Web app security and cyber forensics, by Sunny Vaghela - Founder and CEO at Tech defence labs. He is also a Ted speaker and in the list of Forbes 30 under 30. This Rajiv Gandhi young achievers awardee held an amazing session which focused on Cyber security.
                          Students were overwhelmed as Vaghela developed a great interest for ethical hacking in them. All in all it was a great and informative session.
                          </p>
                        </div>
                      </CardBody>
                      <Button className="btn-round" color="danger" size="sm">
                        Read more
                      </Button>
                    </Card>
                  </Col>
                </Row>
              </div>
              <hr />
              <br />
              <br />
               <div className="article">
                <Row>
                  <Col className="ml-auto mr-auto" md="8">
                    <Card className="card-blog card-plain text-center">
                      <div className="card-image">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img img-raised"
                            src={require("assets/img/Events/sidhartrajhans.jpg")}
                          />
                        </a>
                      </div>
                      <CardBody>
                        <div className="card-category">
                          <Badge className="main-tag" color="info">
                            Entrepreneurship
                          </Badge>
                        </div>
                        <a href="javascrip: void(0);">
                          <CardTitle tag="h3">
                            Freshmen entrepreneurship orientation program 
                          </CardTitle>
                          <h6 className="title-uppercase">October 1, 2018</h6>
                        </a>
                        <div className="card-description">
                          <p>
                            A one-day workshop on “Freshman Orientation program” was organized by Entrepreneurship Cell, IET-DAVV on 01-10-2018. On this occasion, a young entrepreneur, Mr. Sidharth Rajhans, Founder Director, Spacify Inc. delivered an expert lecture on ‘Entrepreneurship: from Ideation to Execution’. He addressed students about various aspects of start-ups, entrepreneurship and government schemes.

                            The students also gained useful information on new technologies, market requirements and entrepreneurship challenges. Faculties, and more than 300 students participated in the workshop. A brief presentation by IET students on 7 different innovative start-ups originated at IET-DAVV were also presented.  The program was presided over by Prof, Sanjeev Tokekar, Director IET, co-coordinated by Prof Shashi Prakash and organised by Dr. Suverna Torgal.
                          </p>
                        </div>
                      </CardBody>
                      <Button className="btn-round" color="danger" size="sm">
                        Read more
                      </Button>
                    </Card>
                  </Col>
                </Row>
              </div>
              <hr />
              <br />
              <br />

              <div className="article">
                <Row>
                  <Col className="ml-auto mr-auto" md="8">
                    <Card className="card-blog card-plain text-center">
                      <div className="card-image">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img img-raised"
                            src={require("assets/img/Events/govindnprakhar.jpg")}
                          />
                        </a>
                      </div>
                      <CardBody>
                        <div className="card-category">
                          <Badge className="main-tag" color="info">
                            Entrepreneurship
                          </Badge>
                        </div>
                        <a href="javascrip: void(0);">
                          <CardTitle tag="h3">
                            A session on the life of an entrepreneur
                          </CardTitle>
                          <h6 className="title-uppercase">October 23, 2018</h6>
                        </a>
                        <div className="card-description">
                          <p>
                           A one-day session was organised by the E-Cell to give a broader knowledge on choosing and pursuing entrepreneurship as the career for the students. On this occasion the Co- founders of “Little Help”, Mr. Govind Choudhary and Mr. Prakhar Londhe, were invited as the speakers to share their life journeys and life lessons to the students. 

                           They explained the students about the importance of small things. Even the biggest companies like Google, Apple etc also started from a minimal level and they were nothing similar then as to what they are today. At each step, their main goal was to make sure that they reach to majority of users and secondly, how they can make this world a better place to live by taking small and continuous steps.  
                          </p>
                        </div>
                      </CardBody>
                      <Button className="btn-round" color="danger" size="sm">
                        Read more
                      </Button>
                    </Card>
                  </Col>
                </Row>
              </div>
              <hr />
              <br />
              <br />

              <div className="article">
                <Row>
                  <Col className="ml-auto mr-auto" md="8">
                    <Card className="card-blog card-plain text-center">
                      <div className="card-image">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img img-raised"
                            src={require("assets/img/Events/sourabhyadav.jpg")}
                          />
                        </a>
                      </div>
                      <CardBody>
                        <div className="card-category">
                          <Badge className="main-tag" color="info">
                            Featured
                          </Badge>
                        </div>
                        <a href="javascrip: void(0);">
                          <CardTitle tag="h3">
                          Is College the right time to start-up 
                          </CardTitle>
                          <h6 className="title-uppercase">October 27, 2018</h6>
                        </a>
                        <div className="card-description">
                          <p>
                          A 2-hour session was conducted by E - cell to motivate the college students to start their entrepreneurial journey in the college itself. On this occasion “Sourabh Yadav” the cofounder of “Basics Eduventures” addressed the students. He himself had started his journey while he was in college thus, he explained all the advantages of starting one’s entrepreneurial journey while studying in college itself. 

                          He started by explaining how he came up with the idea and then how he made his team. Also, he explained his idea to his close friends. He then explained the benefits to the students which they will get only in the college and would not be possible if they start their journey afterwards. 
                          </p>
                        </div>
                      </CardBody>
                      <Button className="btn-round" color="danger" size="sm">
                        Read more
                      </Button>
                    </Card>
                  </Col>
                </Row>
              </div>
              <hr />
              <br />
              <br />

              <div className="article">
                <Row>
                  <Col className="ml-auto mr-auto" md="8">
                    <Card className="card-blog card-plain text-center">
                      <div className="card-image">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img img-raised"
                            src={require("assets/img/Events/sparshsadafal.jpg")}
                          />
                        </a>
                      </div>
                      <CardBody>
                        <div className="card-category">
                          <Badge className="main-tag" color="info">
                            Business
                          </Badge>
                        </div>
                        <a href="javascrip: void(0);">
                          <CardTitle tag="h3">
                          A session on Business Model 
                          </CardTitle>
                          <h6 className="title-uppercase">November 15, 2018</h6>
                        </a>
                        <div className="card-description">
                          <p>
                          A session on business model was organised by the E-cell. In this event Mr. Sparsh Sadafal, addressed the students. He started from the basics of business model, its meaning, a brief history and its importance. Later he explained the different business models of leading start-ups like Uber, Ola, Zomato etc, and they are earning a profit in spite of a lot of investment, their target audiences and the loyalty of the customers etc. 

                          Students were introduced to many new terms like ROI, Targeted audience and market.In the second half of the session he took the ideas of the students and helped them to build a strong business model for their idea. He took the ideas from different students about their start-ups and solved the problems in their business model. It was a really different experience for the students and it will be a very important lesson for the entrepreneurs. 
                          </p>
                        </div>
                      </CardBody>
                      <Button className="btn-round" color="danger" size="sm">
                        Read more
                      </Button>
                    </Card>
                  </Col>
                </Row>
              </div>
              <hr />
              <br />
              <br />

              <div className="article">
                <Row>
                  <Col className="ml-auto mr-auto" md="8">
                    <Card className="card-blog card-plain text-center">
                      <div className="card-image">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img img-raised"
                            src={require("assets/img/Events/vikassharma.jpg")}
                          />
                        </a>
                      </div>
                      <CardBody>
                        <div className="card-category">
                          <Badge className="main-tag" color="info">
                            Pitching
                          </Badge>
                        </div>
                        <a href="javascrip: void(0);">
                          <CardTitle tag="h3">
                          A pitching workshop 
                          </CardTitle>
                          <h6 className="title-uppercase">November 29, 2018</h6>
                        </a>
                        <div className="card-description">
                          <p>
                          On this occasion Mr. Vikas Sharma, was invited to deliver an expert lecture on pitching. The motive of this workshop to educated the students about the concept of pitching, its process, its importance and how to get funded.
                          
                           He explained the students about the types of funding available in the market for the entrepreneurs, the benefits of being a bootstrapped company. He taught them the process of pitching the way, the language the points which one need to keep in mind while pitching to the investors. 
                          </p>
                        </div>
                      </CardBody>
                      <Button className="btn-round" color="danger" size="sm">
                        Read more
                      </Button>
                    </Card>
                  </Col>
                </Row>
              </div>
              <hr />
              <br />
              <br />

              <div className="article">
                <Row>
                  <Col className="ml-auto mr-auto" md="8">
                    <Card className="card-blog card-plain text-center">
                      <div className="card-image">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img img-raised"
                            src={require("assets/img/sections/hol.jpg")}
                          />
                        </a>
                      </div>
                      <CardBody>
                        <div className="card-category">
                          <Badge className="main-tag" color="info">
                            Entrepreneurship
                          </Badge>
                        </div>
                        <a href="javascrip: void(0);">
                          <CardTitle tag="h3">
                          Motivational Talk Session 
                          </CardTitle>
                          <h6 className="title-uppercase">September 30, 2019</h6>
                        </a>
                        <div className="card-description">
                          <p>
                          A motivational talk session was organized by E-Cell of IET DAVV on 30th September,2019 . The main highlight of the session was about the title “Basics of Starting Business becoming entrepreneur” and was addressed by Mr. Punit Khandelwal, currently working as consultant with EY (Ernst & Young) which is a multinational professional services firm headquartered in London, England, United Kingdom. 

                          He covered various ways to start a business, having a mission, funding stipulation and a rough plan for execution. He explained that how a start-up must be registered in India and It should also be a Private Limited company or a Private liability partnership. He also unleashed MP inculcation & Startup Policy’16 and talked about the Department of MSME, and self- employment schemes such as MMSY, MYUY, PMEGP etc.
                          </p>
                        </div>
                      </CardBody>
                      <Button className="btn-round" color="danger" size="sm">
                        Read more
                      </Button>
                    </Card>
                  </Col>
                </Row>
              </div>
              <ReactMd markdown="# hello world" />
              <hr />
              <br />
              <br />
              {/* <div className="article">
                <Col className="ml-auto mr-auto" md="8">
                  <Card className="card-blog card-plain text-center">
                    <div className="card-image">
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <img
                          alt="..."
                          className="img img-raised"
                          src={require("assets/img/sections/leonard-cotte.jpg")}
                        />
                        <p className="image-thumb">Photo by Cam Adams</p>
                      </a>
                    </div>
                    <CardBody>
                      <div className="card-category">
                        <Badge className="main-tag" color="warning">
                          Trending
                        </Badge>
                      </div>
                      <a href="javascrip: void(0);">
                        <CardTitle tag="h3">
                          Make Somebody Nervous Before You Die
                        </CardTitle>
                        <h6 className="title-uppercase">October 20, 2016</h6>
                      </a>
                      <div className="card-description">
                        <p>
                          You won’t find many concepts that are very useful or
                          important if you insist on having a worldview that’s
                          void of controversy, invulnerable to criticism, and
                          incapable of making others feel confused...
                        </p>
                      </div>
                    </CardBody>
                    <Button className="btn-round" color="danger" size="sm">
                      Read more
                    </Button>
                  </Card>
                </Col>
              </div> */}
                {/* <hr />
                <Row>
                  <Col md="12">
                    <div className="pull-left">
                      <Button
                        className="btn-link btn-move-left"
                        color="default"
                        size="sm"
                      >
                        <i className="fa fa-angle-left mr-1" />
                        Older Posts
                      </Button>
                    </div>
                    <div className="pull-right">
                      <Button
                        className="btn-link btn-move-right"
                        color="default"
                        size="sm"
                      >
                        Newer Posts <i className="fa fa-angle-right" />
                      </Button>
                    </div>
                  </Col>
                </Row> */}
            </Container>
          </div>
        </div>
      </div>
      <FooterAboutUs />
    </>
  );
}

export default BlogPosts;