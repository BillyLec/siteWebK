import React from "react";
import './Home.css';
import './style.css';

import logoblanc from '../img/kaino_logo_blanc.png';
import imgbg from '../img/grandPolygone.png';
import titreblanc from '../img/kaino_logo_blanc_text.png';
import hex1 from '../img/Polygon_2.png';
import hex2 from '../img/Polygon_3.png';


class Home extends React.Component {

    

    componentDidMount() {
        document.title = "KAINO"
      }


      render() {
        return (
            <div className="Home">
                    <div className="entete">
                        <img className="polygone1" alt="Fond violet header" src={imgbg}/>

                        <div className="menu">
                            <a href="https://kaino.fr">
                                <img className="logo" alt="Logo Kaino" src={logoblanc}/>
                            </a>
                            <div className="navigationBarApropos">
                                <p>Qui sommes-nous ?</p>
                            </div>
                            <div className="navigationBarContact">
                                <p>Contact</p>
                            </div>
                        </div>

                        <div className="bigTitre">
                            <img className="img_titre" alt="Titre Kaino" src={titreblanc}/>
                            <div className="boxSousTitre">
                                <h1>L'escape room sécurité informatique</h1>
                                <h1>Jouez et protégez</h1>
                            </div>
                            
                        </div>

                        <div className="petitBadge1">
                            <img className="hex1" alt="Petit badge hexagone orange" src={hex1}/>
                            <img className="hex2" alt="Petit badge hexagone orange" src={hex2}/>
                        </div>
                    </div>
            </div>
        )
    }
}

export default Home

