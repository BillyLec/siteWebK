import React from "react";

import pictoForce from "../../assets/images/force.png";
import pictoEscape from "../../assets/images/fuire.png";
import pictoFlag from "../../assets/images/drapeauEtBonhomme.png";

class Concept extends React.Component {
  render() {
    return (
      <div className="grandePartie">
        {/* <img className="hex3" alt="Demi hexagone jaune" src={hex3} /> */}

        <h1 className="section-title">Concept 3 en 1</h1>
        <div className="contenuHorizontal">
          <div class="card">
            <img
              className="pictoSize"
              alt="pictogramme force"
              src={pictoForce}
            />
            <p>FORMATION</p>
            <p>Une formation efficace, sur mesure et évolutive.</p>
          </div>

          <div class="card">
            <img
              className="pictoSize"
              alt="pictogramme force"
              src={pictoEscape}
            />
            <p>ESCAPE GAME</p>
            <p>
              Une formation ludique mais sérieuse, approuvée par la recherche.
            </p>
          </div>

          <div class="card">
            <img
              className="pictoSize"
              alt="pictogramme force"
              src={pictoFlag}
            />
            <p>TEAM BUILDING</p>
            <p>Une approche collective qui favorise le travail en équipe.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Concept;
