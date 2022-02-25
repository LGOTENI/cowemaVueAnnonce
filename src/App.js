import React from "react";
import HeaderAnnonce from "./components/headerAnnonce";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Formulaire from "./components/formulaire";

function App() {
  return (
  <div className="mx-14 mb-8 h-[1030px] ">
      <HeaderAnnonce />
      <Formulaire />
    </div>
  );
}

export default App;
