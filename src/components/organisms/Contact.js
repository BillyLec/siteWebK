import React from "react";

import hex4 from "../../assets/images/Polygon_6.png";

class Contact extends React.Component {
  render() {
    return (
      <div className="contact">
        <p className="titreSection">Nous contacter</p>

        {/* Skeleton by Alexa                    */}
        <div>
          <img className="hexVert" alt="Demi polygone bleu-vert" src={hex4} />
          <div className="boxcontact">
            <div className="contactItem">
              {/* <img className="contactItemIcon"></img> */}
              <p className="contactItemText">contact@kaino.fr</p>
            </div>

            <div className="contactItem">
              {/* <img className="contactItemIcon"></img> */}
              <p className="contactItemText">+33 000 000 000 </p>
            </div>

            <div className="contactItem">
              {/* <img className="contactItemIcon"></img> */}
              <p className="contactItemText"></p>
            </div>
          </div>
          {/* Skeleton by Alexa                    */}
        </div>
      </div>
    );
  }
}

export default Contact;
