import React from "react";
import './Home.css';
import './style.css';

import logoblanc from '../img/kaino_logo_blanc.png';
import imgbg from '../img/grandPolygone.png';
import titreblanc from '../img/kaino_logo_blanc_text.png';
import hex1 from '../img/Polygon_2.png';
import hex2 from '../img/Polygon_3.png';
import hex3 from '../img/Polygon_4.png';
import pictoForce from '../img/force.png';
import pictoEscape from '../img/fuire.png';
import pictoFlag from '../img/drapeauEtBonhomme.png';
import diamond1 from '../img/Polygon_5_violet.png';
import diamond2 from '../img/Polygon_5_orange.png';
import diamond3 from '../img/Polygon_5_vert.png';
import diamond4 from '../img/Polygon_5_jaune.png';
import kkk from '../img/Fond_kkk.png';
import hex4 from '../img/Polygon_6.png';


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
                            <div className="navigationBar navigationBarApropos">
                                <p>Qui sommes-nous ?</p>
                            </div>
                            <div className="navigationBar navigationBarContact">
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
                            <img className="hex hex-1" alt="Petit badge hexagone orange" src={hex1}/>
                            <img className="hex hex-2" alt="Petit badge hexagone orange" src={hex2}/>
                        </div>
                    </div>

                    <div className="concept">
                        <img className="hex3" alt="Demi hexagone jaune" src={hex3}/>
                        <p className="titreSection">Concept 3 en 1</p>

                        <div className="concept3en1">
                            <div class="card">
                                <img className="pictoSize" alt="pictogramme force" src={pictoForce}/>
                                <p>FORMATION</p>
                                <p>Une formation efficace, sur mesure et évolutive.</p>
                            </div>
                            <div class="card">
                                <img className="pictoSize" alt="pictogramme force" src={pictoEscape}/>
                                <p>ESCAPE GAME</p>
                                <p>Une formation ludique mais sérieuse, approuvée par la recherche.</p>
                            </div>
                            <div class="card">
                                <img className="pictoSize" alt="pictogramme force" src={pictoFlag}/>
                                <p>TEAM BUILDING</p>
                                <p>Une approche collective qui favorise le travail en équipe.</p>
                            </div>
                        </div>
                    </div>

                    <div className="solution">
                        <p className="titreSection">Solution</p>
                        <div className="textPresentationPartie">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut ante sollicitudin, pellentesque augue id, posuere odio. Nunc tristique et nibh et tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut ante sollicitudin, pellentesque augue id, posuere odio. Nunc tristique et nibh et tempor.
                        </div>
                        <div className="hexEnLigne">
                            <img className="diamond" alt="Hexagone violet" src={diamond1}/>
                        </div>
                        <div className="hexEnLigne">
                            <img className="diamond" alt="Hexagone violet" src={diamond2}/>
                        </div>
                        <div className="hexEnLigne">
                            <img className="diamond" alt="Hexagone violet" src={diamond3}/>
                        </div>
                        <div className="hexEnLigne">
                            <img className="diamond" alt="Hexagone violet" src={diamond4}/>
                        </div>
                    </div>

                    <div className="offres">
                        <p className="titreSection">Nos offres</p>
                        <img className="kkk_size" alt="Lettres K violettes sur fond bleu ciel" src={kkk}/>
                        <div className="card smallCard">

                        </div>
                        <div className="card largeCard">

                        </div>
                        <div className="card mediumCard">

                        </div>
                    </div>

                    <div className="contact">
                        <p className="titreSection">Nous contacter</p>
                        <img className="hexVert" alt="Demi polygone bleu-vert" src={hex4}/>
                        <div className="boxcontact">

                        </div>

                    </div>

                    
            </div>
        )
    }
}

export default Home

