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
                            
                            <div className="h3test">
                                <p>test</p>
                            </div>
                        </div>

                        <div className="bigTitre">
                            <img className="img_titre" alt="Titre Kaino" src={titreblanc}/>
                        </div>

                    </div>
                </header>
            </div>
        )
    }
}

export default Home