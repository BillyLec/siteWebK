import React from "react";

import kkk from "../../assets/images/Fond_kkk.png";

class Offers extends React.Component {
  render() {
    return (
      <div className="offres">
        <p className="titreSection">Nos offres</p>
        <img
          className="kkk_size"
          alt="Lettres K violettes sur fond bleu ciel"
          src={kkk}
        />
        <div className="card smallCard"></div>
        <div className="card largeCard"></div>
        <div className="card mediumCard"></div>
      </div>
    );
  }
}

export default Offers;
