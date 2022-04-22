import React from "react";
import { Branding, WDD } from "../components/sections";

export const Services: React.FC = () => {
  return (
    <div className="serviceONEANDONLY">
      <div className="serviceContainer">
        <div className="missionWrapper">
          <h1 className="missionHeader">Headline</h1>
          <p className="serviceStrategy">Your service or product description</p>
        </div>
      </div>
      <div className="serviceContainer">
        <WDD />
      </div>
      <div className="serviceContainer">
        <Branding />
      </div>
      <div className="serviceContainer">
        <div className="threeSquaresWrapper">
          <div className="solidSquare"></div>
          <div className="solidSquare"></div>
          <div className="squareBorder"></div>
        </div>
      </div>
    </div>
  );
};
