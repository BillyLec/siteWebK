import React from "react";

import logoblanc from "../../assets/images/kaino_logo_blanc.png";

class Menu extends React.Component {
  render() {
    return (
      <div className="menu">
        <div className="imageContainer">
          <a className="homeLink" href="https://kaino.fr">
            <img className="logo" alt="Logo Kaino" src={logoblanc} />
          </a>
        </div>
        <div className="navigationBar">
          <p className="navigationItem">Qui sommes-nous ?</p>
          <p className="navigationItem">Contact</p>
          <p className="navigationItem">item 1</p>
          <p className="navigationItem">item 2</p>
          <p className="navigationItem">item 3</p>
        </div>
      </div>
    );
  }
}

export default Menu;
