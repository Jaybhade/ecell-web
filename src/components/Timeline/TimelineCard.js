import React from "react";
import { CardTitle, CardFooter, CardBody, Col, Card, Row } from "reactstrap";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const TimelineCard = (props) => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      // contentStyle={{ color: '#fff' }}
      // contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
      date={props.date}
      iconStyle={props.iconStyle}
      icon={props.icon}
    >
      <Card className="card-blog">
        <Row>
          <Col md="6" sm="12">
            <div className="card-image">
              <a href="#pablo" onClick={(e) => e.preventDefault()}>
                <img alt="..." className="img" src={props.src} />
              </a>
            </div>
          </Col>
          <Col md="6" sm="12">
            <CardBody className="text-center">
              <CardTitle tag="h4">{props.title}</CardTitle>
              {/* <div className="card-description">
                    Cards are an interaction model that are spreading pretty
                    widely, in fact. What all of these have in common is that
                    they're pulling...
                  </div> */}
              <CardFooter>
                {/* <Button
                      className="btn-round"
                      color="danger"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      View Article
                    </Button> */}
              </CardFooter>
            </CardBody>
          </Col>
        </Row>
      </Card>
    </VerticalTimelineElement>
  );
};

export default TimelineCard;
