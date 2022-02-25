import React from "react";
import Input from "./input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faSms,
  faCloudDownload,
  faMapMarker,
  faMapLocation,
  faUsd,
  faListSquares,
  faHeading,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";

export default function Formulaire() {
  const monBoutton = () => {
    console.log(true);
    return <input type="file" className="block mx-auto my-auto" />;
  };

  return (
    <div className="grid grid-cols-6 h-full col-span-2 box border-solid shadow-xl rounded-md bg-blue-500">
      <div className="col-span-2 bg-green-400 w-full box border-solid shadow-xl rounded-sm rounded-r-none ">
        <div className="m-2">
          <div className="grid grid-cols-12">
            <div class=" col-span-1 font-semibold whitespace-nowrap dark:text-white">
              <FontAwesomeIcon icon={faArrowLeft} className="text-lg" />
            </div>
            <div className="col-span-11 text-center text-xl font-bold">
              PUBIER VOTRE ANNONCE
            </div>
          </div>

          <div className="mx-auto my-96">
            {" "}
            <img
              src="https://www.emploi.cg/sites/emploi.cg/files/styles/medium/public/logo/logo_cowema_circle_fvb.png?itok=gFZ07srp"
              alt=""
              className="mx-auto"
            />
          </div>
          <div>
            <span className="font-light">
              Nous prenons un plasir à vous servir
            </span>
          </div>
        </div>
      </div>

      <div className="col-span-4 bg-white box border-solid shadow-xl rounded-sm rounded-l-none ">
        <div className="m-2">
          <div className="text-center text-xl font-extrabold mb-4 ">
            Veillez remplir ce formuaire s'il vous plait.
          </div>
          {/* Mes inputs */}
          <div className="mx-14 mt-8">
            <div className="grid grid-cols-2 gap-4">
              <div className=" col-span-1 ">
                <label htmlFor="titre" className=" text-xl">
                  Titre de l'annonce
                </label>
                <Input type="text" placeholder="Le titre de votre annonce" />
              </div>
              <div className=" col-span-1 ">
                <label htmlFor="prix" className="text-xl">
                  Prix de l'annonce
                </label>
                <Input type="number" placeholder="Le prix de votre annonce" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className=" col-span-1 ">
                <label htmlFor="titre" className=" text-xl">
                  Votre emplacement
                </label>
                <select
                  name="emplacement"
                  id="emplacement"
                  className="flex w-full text-sm pl-2 border-black border rounded-md mx-auto py-3 mb-2 hover:border-green-500 hover:border-l hover:border-r hover:border-b active:bg-green-100 focus:outline-none focus:ring focus:ring-green-300 focus:border-green-300pb-4 mt-2 font-bold
                    "
                >
                  <option value="Dolisie">Dolisie</option>
                  <option value="Oyo">Oyo</option>
                  <option value="Brazzaville">Brazzaville</option>
                  <option value="Mindouli">Mindouli</option>
                  <option value="Pointe Noire">Pointe Noire</option>
                  <option value="Ouesso">Ouesso</option>
                  <option value="Nkayi">Nkayi</option>
                </select>
              </div>
              <div className=" col-span-1 ">
                <label htmlFor="prix" className="text-xl">
                  Reference sur votre emplacement
                </label>
                <Input placeholder="Ex: En face de la station Puma de Ndzoko" />
              </div>
            </div>
            <div>
              <label htmlFor="categorie" className=" text-xl">
                La categorie du produit
              </label>
              <select
                name="categorie"
                id="emplacement"
                className="flex w-full text-sm pl-2 border-black border rounded-md mx-auto py-3 mb-2 hover:border-green-500 hover:border-l hover:border-r hover:border-b active:bg-green-100 focus:outline-none focus:ring focus:ring-green-300 focus:border-green-300pb-4 mt-2 font-bold
                    "
              >
                <option value="Dolisie">Telephone</option>
                <option value="Oyo">Ordinateur</option>
                <option value="Brazzaville">Montre</option>
                <option value="Mindouli">Electromenager</option>
                <option value="Pointe Noire">Habit Noire</option>
                <option value="Ouesso">Ouesso</option>
                <option value="Nkayi">Nkayi</option>
              </select>
            </div>
            <div>
              <label htmlFor="idDescription" className="text-xl">
                Description
              </label>
              <textarea
                name="description"
                id="idDescription"
                placeholder="Ex: Je vends un telephone de marque LG avec une memoire vive de 4Go de 32Go de memoire morte"
                className="w-full text-sm pl-2 border-black border rounded-md mx-auto py-3 mb-2 hover:border-green-500 hover:border-l hover:border-r hover:border-b active:bg-green-100 focus:outline-none focus:ring focus:ring-green-300 focus:border-green-300 font-bold pb-4 mt-2 "
              ></textarea>
            </div>
            <div>
              <label htmlFor="photo" className="text-xl">
                Ajouter des photos pour plus de visibilté
              </label>
              <div className="grid grid-cols-2 h-72 border-2 gap-1 mt-4 ">
                <div className="col-span-1 w-full h-full bg-black">01</div>
                <div className="col-span-1">
                  <div className="grid grid-cols-2 h-full gap-1">
                    <div className="col-span-1 bg-orange-700">02</div>
                    <div className="col-span-1 bg-green-300">03</div>
                    <div className="col-span-1 bg-slate-400">04</div>
                    <div className="col-span-1 bg-blue-700">05</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
