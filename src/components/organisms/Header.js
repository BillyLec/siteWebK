import React from "react";

import Menu from "./Menu.js";

import logoblanc from "../../assets/images/kaino_logo_blanc.png";
import imgbg from "../../assets/images/grandPolygone.png";
import titreblanc from "../../assets/images/kaino_logo_blanc_text.png";
import hex1 from "../../assets/images/Polygon_2.png";
import hex2 from "../../assets/images/Polygon_3.png";
import fleche_droite from "../../assets/images/fleche_droite.png";

class Header extends React.Component {
  render() {
    return (
      <div className="grandePartie">
        <img className="polygone1" alt="Fond violet header" src={imgbg} />

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

        <div className="bigTitre">
          <img className="img_titre" alt="Titre Kaino" src={titreblanc} />
          <div className="boxSousTitre">
            <h1>L'escape room sécurité informatique</h1>
            <div className="boxderoulant">
              <h1>Jouez et protégez</h1>
              <img
                className="flechederoulant"
                alt="fleche vers la droite"
                src={fleche_droite}
              />
              <div className="levraiboxderoulant">
                <h1>Vos donnees</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="petitBadge1">
          <div className="position123">
            <img className="hexa123" alt="Petit badge hexagone orange" src={hex1}/>
            <img className="hexa456" alt="hexa456" src={fleche_droite} />
          </div>
          {/* <img className="hex hex-1" alt="Petit badge hexagone orange" src={hex1}/> */}
          {/* <div className="fleche">
                              <img alt="Flêche en 3D orienté vers la droite" src={fleche_droite}/>
                          </div> */}

          <div>
            <img
              className="hex hex-2"
              alt="Petit badge hexagone orange"
              src={hex2}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
