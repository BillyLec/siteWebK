import React from "react";
import './Home.css';
import './style.css';

import logoblanc from '../img/kaino_logo_blanc.png';
import imgbg from '../img/grandPolygone.png';
import titreblanc from '../img/kaino_logo_blanc_text.png';


class Home extends React.Component {

    

    componentDidMount() {
        document.title = "KAINO"
      }


      render() {
        return (
            <div className="Home">
                <header>

                    <div className="header">
                        <img className="polygoneHeader" alt="Fond violet header" src={imgbg}/>

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
                            <h1>L'escape room sécurité informatique</h1>
                        </div>

                    </div>
                </header>
            </div>
        )
    }
}

export default Home