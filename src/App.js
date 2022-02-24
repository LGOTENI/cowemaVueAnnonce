import React from "react";
import HeaderAnnonce from "./components/headerAnnonce";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Formulaire from "./components/formulaire";

function App() {
  return (
    <div className=" mx-32 ">
        <HeaderAnnonce />
        <Formulaire />
    </div>
  );
}

export default App;
