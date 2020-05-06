import React from "react";

import Menu from "../molecules/Menu.js";
import TextScroller from "../molecules/TextScroller.js";

import background from "../../assets/images/hexagons/background.svg";
import hexagon from "../../assets/images/hexagons/home_purple.svg";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="background-container">
          <Menu />
          <img className="background-image" alt="Fond bl" src={background} />
        </div>

        <div className="header-hexagon-container">
          <img className="header-hexagon" alt="Hexagone" src={hexagon} />
          <div className="header-hexagon-text">
            <h2>JOUEZ !</h2>
            <h2>Et protégez...</h2>
            <TextScroller />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
