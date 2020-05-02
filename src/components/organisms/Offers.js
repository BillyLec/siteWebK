import React from "react";

import kkk from "../../assets/images/Fond_kkk.png";

class Offers extends React.Component {
  render() {
    return (
      <div className="grandePartie">
            <div className="boxTitrePartie">
                <p className="titrePartie">Nos offres</p>
            </div>

          {/* <img className="kkk_size" alt="Lettres K violettes sur fond bleu ciel" src={kkk}/> */}

            <div className="contenuHorizontal">
              <div className="card smallCard"></div>
              <div className="card largeCard"></div>
              <div className="card mediumCard"></div>
              
            </div>  
        </div>
    );
  }
}

export default Offers;
