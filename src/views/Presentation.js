import React, {useState} from "react";

// reactstrap components

// core components
import ColorNavbar from "components/Navbars/ColorNavbar.js";
import SectionIcons from "./presentation-sections/SectionIcons.js";
import SectionTestimonials from "./presentation-sections/SectionTestimonials.js";
import SectionContactUs from "./presentation-sections/SectionContactUs.js";
import SectionHeader from "./sections-sections/SectionHeader.js";

import FooterAboutUs from "components/Footers/FooterAboutUs.js";
import Timeline from "components/Timeline/Timeline.js";
import GifLoader from 'react-gif-loader';
import loader from "../assets/img/loader.gif";
import useMediaQuery from '@material-ui/core/useMediaQuery';

function Presentation(props) {
  document.documentElement.classList.remove("nav-open");
  // function that is being called on scroll of the page
  const checkScroll = () => {
    // it takes all the elements that have the .add-animation class on them
    const componentPosition = document.getElementsByClassName("add-animation");
    const scrollPosition = window.pageYOffset;
    for (var i = 0; i < componentPosition.length; i++) {
      var rec =
        componentPosition[i].getBoundingClientRect().top + window.scrollY + 100;
      // when the element with the .add-animation is in the scroll view,
      // the .animated class gets added to it, so it creates a nice fade in animation
      if (scrollPosition + window.innerHeight >= rec) {
        componentPosition[i].classList.add("animated");
        // when the element with the .add-animation is not in the scroll view,
        // the .animated class gets removed from it, so it creates a nice fade out animation
      } else if (scrollPosition + window.innerHeight * 0.8 < rec) {
        componentPosition[i].classList.remove("animated");
      }
    }
  };

  const [load, setLoad] = useState(0);
  const matches = useMediaQuery('(min-width:600px)');

  React.useEffect(() => {
    
    document.body.classList.add("presentation-page");
    window.addEventListener("scroll", checkScroll);
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("presentation-page");
      window.removeEventListener("scroll", checkScroll);
    };
  });

//   if (load === 0)
//   {
//     return <GifLoader
//     loading={true}
//     imageSrc={loader}
//     imageStyle={{ position: 'absolute', left: '30%', top: '25%'}}
//     overlayBackground="rgb(230,232,234)"
// />;
//   }
setTimeout(function() 
{ 
    document.getElementById("load").style.display = "none"; 
}, 
3000);
  return (
    <>
    <div id="load">
    <GifLoader
    loading={true}
    imageSrc={loader}
    imageStyle={{ marginTop:"10%",marginLeft: (matches)?"0px":"-30%"}}
    overlayBackground="rgb(230,232,234)"
    />
    </div>
      <ColorNavbar />
      <SectionHeader />
      
      <SectionIcons />
      <Timeline />
      <SectionTestimonials />
      <SectionContactUs />
      <FooterAboutUs/>
    </>
  );
}

export default Presentation;
