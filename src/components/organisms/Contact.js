import React from "react";

import hex4 from "../../assets/images/Polygon_6.png";
import logo_mail from "../../assets/images/mail.png";
import logo_linkedin from "../../assets/images/linkedin.png";
import logo_phone from "../../assets/images/phone.png";
import logo_instagram from "../../assets/images/instagram.png";
import logo_twitter from "../../assets/images/twitter.png";
import logo_facebook from "../../assets/images/facebook.png";

class Contact extends React.Component {
  render() {
    return (
      <div className="grandePartie">
          <div className="boxTitrePartie">
              <p className="titrePartie">Nous contacter</p>
          </div>

          <div>
            {/* <img className="hexVert" alt="Demi polygone bleu-vert" src={hex4}/> */}
            <div className="boxcontact">
              <div className="contactItem">
                <img className="contactItemIcon" alt="logo enveloppe" src={logo_mail}/>
                <p className="contactItemText">contact@kaino.fr</p>
              </div>

              <div className="contactItem">
                <img className="contactItemIcon" alt="logo telephone" src={logo_phone}/>
                <p className="contactItemText">+33 000 000 000 </p>
              </div>

              <div className="contactItem">
                <img className="contactItemIcon" alt="logo LinkedIn" src={logo_linkedin}/>
                <p className="contactItemText">url linkedin</p>
              </div>

              <div className="contactItem">
                <img className="contactItemIcon" alt="logo Facebook" src={logo_facebook}/>
                <p className="contactItemText">url facebook</p>
              </div>

              <div className="contactItem">
                <img className="contactItemIcon" alt="logo Instagram" src={logo_instagram}/>
                <p className="contactItemText">url instagram</p>
              </div>

              <div className="contactItem">
                <img className="contactItemIcon" alt="logo twitter" src={logo_twitter}/>
                <p className="contactItemText">url twitter</p>
              </div>

            </div>
          </div>
        </div>
    );
  }
}

export default Contact;
