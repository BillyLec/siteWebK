import React from "react";

import kaino from "../../assets/images/logos/kaino_purple.svg";

class Menu extends React.Component {
  render() {
    return (
      <div className="menu">
        <div className="imageContainer">
          <a className="homeLink" href="https://kaino.fr">
            <img className="logo-menu" alt="Logo Kaino" src={kaino} />
          </a>
        </div>
        <div className="navigationBar">
          <p className="navigationItem">Concept</p>
          <p className="navigationItem">A propos de nous</p>
          <p className="navigationItem">Blog</p>
          <p className="navigationItem">Simulation</p>
          <p className="navigationItem">Contact</p>
        </div>
      </div>
    );
  }
}

export default Menu;
