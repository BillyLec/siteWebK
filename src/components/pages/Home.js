import React from "react";

import Header from "../organisms/Header";
import Concept from "../organisms/Concept";
import Solution from "../organisms/Solution";
import Offers from "../organisms/Offers";
import Contact from "../organisms/Contact";
import Partners from "../organisms/Partners";

class Home extends React.Component {
  componentDidMount() {
    document.titlContacte = "KAINO";
  }

  render() {
    return (
      <div className="Home">
        <Header />
        <Concept />
        <Solution />
        <Offers />
        <Contact />
        <Partners />
      </div>
    );
  }
}

export default Home;
