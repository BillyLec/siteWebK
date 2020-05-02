import React from "react";

import diamond1 from "../../assets/images/Polygon_5_violet.png";
import diamond2 from "../../assets/images/Polygon_5_orange.png";
import diamond3 from "../../assets/images/Polygon_5_vert.png";
import diamond4 from "../../assets/images/Polygon_5_jaune.png";

class Solution extends React.Component {
  render() {
    return (
      <div className="grandePartie">
          <div className="boxTitrePartie">
              <p className="titrePartie">Notre solution</p>
          </div>

          <div className="contenuVertical">
            <p className="textPresentationPartie">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque ut ante sollicitudin, pellentesque augue id, posuere
              odio. Nunc tristique et nibh et tempor. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Pellentesque ut ante sollicitudin,
              pellentesque augue id, posuere odio. Nunc tristique et nibh et
              tempor.
            </p>

            <div className="contenuHorizontal">
              <div className="hexSolution">
                <img className="diamond" alt="Hexagone violet" src={diamond1} />
              </div>

              <div className="hexSolution">
                <img className="diamond" alt="Hexagone orange" src={diamond2} />
              </div>

              <div className="hexSolution">
                <img className="diamond" alt="Hexagone bleu-vert" src={diamond3} />
              </div>

              <div className="hexSolution">
                <img className="diamond" alt="Hexagone jaune" src={diamond4} />
              </div>

            </div>
          </div>
        </div>
    );
  }
}

export default Solution;
