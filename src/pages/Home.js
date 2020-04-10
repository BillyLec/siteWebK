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
                    <div>
                        <a href="http://kaino.fr">
                            <img id="logo" src={logoblanc} className="logo" alt="Logo Kaino" width="100%" height="100%"/>
                        </a>
                        <img id="titreblanc" alt="Titre Kaino" src={titreblanc} />
                        <img id="polygone1" src={imgbg} alt="imgbg"/>

                        <p>Hello World</p>
                    </div>
                </header>

            </div>
        )
    }
}

export default Home