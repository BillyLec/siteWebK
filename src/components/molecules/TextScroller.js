import React from "react";

class TextScroller extends React.Component {
  render() {
    return (
      <div className="textSlider">
        <div className="col-xs-12 col-sm-12 col-md-7 col-lg-8 slideCol">
          <div className="scroller">
            <div className="inner">
              <p>
                Vos
                <br />
                données
              </p>
              <p>
                Votre
                <br />
                entreprise
              </p>
              <p>
                Vos
                <br />
                employés
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TextScroller;
