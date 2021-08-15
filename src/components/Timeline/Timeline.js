import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
} from "reactstrap";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import EventIcon from "@material-ui/icons/Event";
import MicIcon from "@material-ui/icons/Mic";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import EmojiObjectsIcon from "@material-ui/icons/EmojiObjects";
import AssessmentIcon from "@material-ui/icons/Assessment";
import AmpStoriesIcon from "@material-ui/icons/AmpStories";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import ImportantDevicesIcon from "@material-ui/icons/ImportantDevices";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import AssignmentLateIcon from "@material-ui/icons/AssignmentLate";
import HourglassEmptyIcon from "@material-ui/icons/HourglassEmpty";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import MovieIcon from "@material-ui/icons/Movie";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";

import TimelineCard from "./TimelineCard";

function Timeline() {
  return (
    <>
      <div
        className="section-gray"
        // style={{backgroundImage: `url(${require('../../assets/img/sections/bg.jpg')})`,
        // backgroundRepeat: "no-repeat", backgroundSize:"100%",
        // }}
      >
        <Container fluid>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="8">
              <h2 className="title">Our Activities</h2>
              {/* <h5 className="description">
                The UI Kits, Templates and Dashboards that we've created are
                used by <b>790,000+ web developers</b> in over{" "}
                <b>1,400,00 Web Projects</b>. This is what some of them think:
              </h5> */}
            </Col>
          </Row>
          <Row>
            <VerticalTimeline>
              <TimelineCard
                date="Coming Soon"
                icon={<EventIcon />}
                iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                title="Convoke with Alumnus"
                src={require("assets/img/sections/alumnus.png")}
              />

              <TimelineCard
                date="Feb 2020"
                icon={<AssignmentTurnedInIcon />}
                iconStyle={{ background: "#f5593d", color: "#fff" }}
                title="NEC 2020 Finals"
                src={require("assets/img/sections/NEC2020.jpeg")}
              />

              <TimelineCard
                date="Dec 2019"
                icon={<WatchLaterIcon />}
                iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                title="Hour of Learning"
                src={require("assets/img/sections/gfs.jpg")}
              />

              <TimelineCard
                date="Nov 2019"
                icon={<MicIcon />}
                iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                title="Group Discussion"
                src={require("assets/img/sections/gd.jpg")}
              />

              <TimelineCard
                date="Oct 2019"
                icon={<EmojiObjectsIcon />}
                iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                title="A session on life of an entrepreneur"
                src={require("assets/img/sections/loe.jpg")}
              />

              <TimelineCard
                date="Sept 2019"
                icon={<AssessmentIcon />}
                iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
                title="Government funding schemes for entrepreneurs"
                src={require("assets/img/sections/hol.jpg")}
              />

              <TimelineCard
                date="Sept 2019"
                icon={<AmpStoriesIcon />}
                iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
                title="Freshman Orientation by Raj Shamani"
                src={require("assets/img/sections/rs.jpg")}
              />

              <TimelineCard
                date="Sept 2019"
                icon={<AssignmentTurnedInIcon />}
                iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
                title="NEC 2019 Finals"
                src={require("assets/img/sections/ESum.jpg")}
              />

              <TimelineCard
                date="Jan 2019"
                icon={<QuestionAnswerIcon />}
                iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
                title="Dare2compete quiz"
                src={require("assets/img/sections/d2c.jpg")}
              />

              <TimelineCard
                date="Jan 2019"
                icon={<MicIcon />}
                iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
                title="Debate"
                src={require("assets/img/sections/debate.jpg")}
              />

              <TimelineCard
                date="Nov 2018"
                icon={<DoubleArrowIcon />}
                iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
                title="A pitching workshop"
                src={require("assets/img/sections/pw.jpg")}
              />

              <TimelineCard
                date="Nov 2018"
                icon={<ImportantDevicesIcon />}
                iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
                title="Dare2compete Hackathon"
                src={require("assets/img/sections/d2ch.jpg")}
              />

              <TimelineCard
                date="Nov 2018"
                icon={<MonetizationOnIcon />}
                iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
                title="A session on Business Model"
                src={require("assets/img/sections/bm.jpg")}
              />

              <TimelineCard
                date="Nov 2018"
                icon={<QuestionAnswerIcon />}
                iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
                title="Quiz"
                src={require("assets/img/sections/quiz.jpg")}
              />

              <TimelineCard
                date="Oct 2018"
                icon={<AssignmentLateIcon />}
                iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
                title="Case study Competition"
                src={require("assets/img/sections/csc.jpg")}
              />

              <TimelineCard
                date="Oct 2018"
                icon={<HourglassEmptyIcon />}
                iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
                title="Is College the right time to start-up"
                src={require("assets/img/sections/crt.jpg")}
              />

              <TimelineCard
                date="Oct 2018"
                icon={<EmojiObjectsIcon />}
                iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
                title="A session on the life of an entrepreneur"
                src={require("assets/img/sections/sloe.jpg")}
              />

              <TimelineCard
                date="Oct 2018"
                icon={<MovieIcon />}
                iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
                title="Movie Screening"
                src={require("assets/img/sections/ms.jpg")}
              />

              <TimelineCard
                date="Oct 2018"
                icon={<PeopleAltIcon />}
                iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
                title="Group Discussion"
                src={require("assets/img/sections/gdp.jpg")}
              />

              <TimelineCard
                date="Oct 2018"
                icon={<AmpStoriesIcon />}
                iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
                title="Freshmen Orientation Program"
                src={require("assets/img/sections/feop.jpg")}
              />
            </VerticalTimeline>
          </Row>
        </Container>
      </div>
    </>
  );
}
export default Timeline;
