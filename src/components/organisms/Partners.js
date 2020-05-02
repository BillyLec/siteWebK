import React from "react";

import logo_insa from "../../assets/images/logo_insa.png";
import logo_ttt from "../../assets/images/logo_ttt.png";
import logo_laas from "../../assets/images/logo_laas.png";

class Partners extends React.Component {
  render() {
    return (
      <div className="grandePartie">
        <div className="boxTitrePartie">
          <p className="section-title">Ils nous font confiance</p>
        </div>

        <div className="contenuHorizontal">
          <img className="cardlogo" alt="Logo de l'INSA" src={logo_insa} />
          <img className="cardlogo" alt="Logo du Laas-CNRS" src={logo_laas} />
          <img
            className="cardlogo ttt"
            alt="Logo de Toulouse Tech Transfert"
            src={logo_ttt}
          />
        </div>
      </div>
    );
  }
}

export default Partners;
