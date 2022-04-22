import React, { useState } from "react";
import { Portfolio, Services, Contact } from "../../pages";
import { useTransition, animated } from "react-spring";
import { Logo, Icon } from "../../assets/vectors";
import img from "../../assets/navanimation.gif";
import { NavButton, PageCloseButton } from "../ui";

export const Hero: React.FC = () => {
  const [portfolio, showPortfolio] = useState(false);
  const [services, showServices] = useState(false);
  const [contact, showContact] = useState(false);
  const [contentLoading, setContentLoaded] = useState(false);

  const transitionPortfolio = useTransition(portfolio, null, {
    config: { duration: 450 },
    from: {
      opacity: 0,
      backgroundColor: "#0d0d0d",
      width: "100%",
      height: "100%",
      position: "absolute",
      top: 0,
    },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  const portfolioPage = transitionPortfolio.map(
    ({ item, key, props }) =>
      item && (
        <animated.div key={key} style={props}>
          <PageCloseButton
            pageActive={portfolio}
            setPageActive={showPortfolio}
          />
          <Icon className="DLDSymHeader" />
          <Portfolio />
        </animated.div>
      )
  );

  const transitionContact = useTransition(contact, null, {
    config: { duration: 450 },
    from: {
      opacity: 0,
      backgroundColor: "#0d0d0d",
      width: "100%",
      height: "100%",
      position: "absolute",
      top: 0,
    },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  const contactPage = transitionContact.map(
    ({ item, key, props }) =>
      item && (
        <animated.div key={key} style={props}>
          <PageCloseButton pageActive={contact} setPageActive={showContact} />
          <Icon className="DLDSymHeader" />
          <Contact />
        </animated.div>
      )
  );

  const servicesTransition = useTransition(services, null, {
    config: { duration: 450 },
    from: {
      opacity: 0,
      backgroundColor: "rgba(13, 13, 13, 1)",
      width: "100%",
      height: "100%",
      position: "absolute",
      top: 0,
    },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  const servicesPage = servicesTransition.map(
    ({ item, key, props }) =>
      item && (
        <animated.div key={key} style={props}>
          <PageCloseButton pageActive={services} setPageActive={showServices} />
          <Icon className="DLDSymHeader" />
          <Services />
        </animated.div>
      )
  );

  const displayUXNavTransition = () => {
    setContentLoaded(!contentLoading);
    setTimeout(() => {
      setContentLoaded(false);
    }, 1000);
  };

  return (
    <div>
      <div
        id="Hero"
        style={{
          height: "100vh",
          backgroundColor: "#000000",
        }}
      >
        <div>
          {/* Add Logo svg to the vectors folder in assets  */}
          <Logo className="logo" />
        </div>
        {/* Add your copyright information. */}
        {/* Keep the format NAME All Rights Reserved, 2021  */}
        <div id="COPYRIGHT">
          &copy; Dreamlike Digital LLC All Rights Reserved, 2021
        </div>
        {/* Add navigational items here with the following NavButton component */}
        {/* ShowPage and transition props are passed showPage and displayUXNavTransition respectively. For the glitch effect */}
        <div id="navMenu">
          <NavButton
            show={portfolio}
            title={"Work"}
            showPage={showPortfolio}
            transition={displayUXNavTransition}
          />
          {/* <NavButton
            show={services}
            title={"Services"}
            showPage={showServices}
            transition={displayUXNavTransition}
          /> */}
          <NavButton
            show={contact}
            title={"Contact"}
            showPage={showContact}
            transition={displayUXNavTransition}
          />
        </div>
        {/* You must add all pages here */}
        {portfolioPage}
        {contactPage}
        {servicesPage}
        {contentLoading && (
          <div
            style={{
              height: "100%",
              width: "100%",
              position: "absolute",
              backgroundImage: `url(${img})`,
              backgroundSize: "100%",
              backgroundPosition: "center",
              top: "0",
            }}
          ></div>
        )}
      </div>
    </div>
  );
};
