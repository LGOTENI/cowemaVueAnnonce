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
  } from "@fortawesome/free-solid-svg-icons";

export default function Formulaire() {
  const monBoutton = () => {
    console.log(true);
    return <input type="file" className="block mx-auto my-auto" />;
  };

  return (
    <div>
      <div className="grid grid-cols-6 h-full gap-4 mt-2">
        <div className="col-span-4 h-full border-2">
          <div className="grid grid-cols-2 h-full">
            <div className="col-span-1">
              <button
                type="button"
                className="mx-auto w-full h-full"
                onClick={monBoutton}
              >
                <img
                  src=""
                  alt=""
                  className="cw-full h-full object-center object-cover lg:w-full lg:h-full"
                />
              </button>
            </div>
            <div className="col-span-1 h-full">
              <div className="grid grid-cols-2 h-full">
                <div className="col-span-1 border-r-2 w-full h-full">01</div>
                <div className="col-span-1 w-full h-full">02</div>
                <div className="col-span-1 border-t-2 border-r-2 w-full h-full">
                  03
                </div>
                <div className="col-span-1 border-t-2 w-full h-full">04</div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2 min-h-full px-4 py-2 h-full box border-solid shadow-xl">
          <div className=" mx-auto text-center text-xl bold">
            Veillez remplir ce formulaire s'il vous plait
          </div>
          <div className="">
            <label htmlFor="titre">Titre de l'annonce *</label>
            <div className="flex rounded-md shadow-sm">
              <span
                class=" h-[46px]
              inline-flex
              items-center
              px-3
              text-sm text-gray-500
              border border-r-0 border-black
              rounded-l-md
            "
              >
                <FontAwesomeIcon icon={faHeading} className="w-3 w-max-3" />
              </span>
              <Input
                type="text"
                id="titre"
                name="titre"
                placeholder="Le titre de votre produit"
              />
            </div>
          </div>
          <div>
            <label htmlFor="categorie">Categorie *</label>

            <div className="flex rounded-md shadow-sm">
              <span
                class=" h-[46px]
              inline-flex
              items-center
              px-3
              text-sm text-gray-500
              border border-r-0 border-black
              rounded-l-md"
              >
                <FontAwesomeIcon icon={faListSquares} className="w-3 w-max-3" />
              </span>

              <select
                name="categorie"
                id="categorie"
                className="flex w-full text-sm pl-2 border-black border rounded-md rounded-l-none border-l-0 mx-auto py-3 mb-2 hover:border-green-500 hover:border-l hover:border-r hover:border-b active:bg-green-100 focus:outline-none focus:ring focus:ring-green-300 focus:border-green-300"
              >
                <option value="">Produit de beauté</option>
                <option value="dog">Phone</option>
                <option value="cat">Parcelle</option>
                <option value="hamster">Voiture</option>
                <option value="parrot">Maison</option>
                <option value="spider">Chiens</option>
                <option value="goldfish">Ordinateur</option>
              </select>
            </div>
          </div>
          <div>
            <label htmlFor="emplacement">Emplacement *</label>

            <div className="flex rounded-md shadow-sm">
              <span
                class=" h-[46px]
              inline-flex
              items-center
              px-3
              text-sm text-gray-500
              border border-r-0 border-black
              rounded-l-md"
              >
                <FontAwesomeIcon icon={faMapMarker} className="w-3 w-max-3" />
              </span>

              <select
                name="emplacement"
                id="emplacement"
                className="flex w-full text-sm pl-2 border-black border rounded-md rounded-l-none border-l-0 mx-auto py-3 mb-2 hover:border-green-500 hover:border-l hover:border-r hover:border-b active:bg-green-100 focus:outline-none focus:ring focus:ring-green-300 focus:border-green-300"
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
          </div>

          <div className="">
            <label htmlFor="reference">La reference *</label>
            <div className="flex rounded-md shadow-sm">
              <span
                class=" h-[46px]
              inline-flex
              items-center
              px-3
              text-sm text-gray-500
              border border-r-0 border-black
              rounded-l-md
              "
              >
                <FontAwesomeIcon icon={faMapLocation} className="w-3 w-max-3" />
              </span>
              <Input
                name="reference"
                id="reference"
                placeholder="Ex: Près de la station puma de Ndzoko"
              />
            </div>
          </div>
          <div>
            <label htmlFor="prix">Prix *</label>
            <div className="flex rounded-md shadow-sm">
              <span
                class=" h-[46px]
              inline-flex
              items-center
              px-3
              text-sm text-gray-500
              border border-r-0 border-black
              rounded-l-md
            "
              >
                <FontAwesomeIcon icon={faUsd} className="w-3 w-max-3" />
              </span>
              <input
                type="number"
                name="prix"
                id="prix"
                className="flex w-full text-sm pl-2 border-black border  mx-auto py-3 mb-2 hover:border-green-500 hover:border-l hover:border-r hover:border-b active:bg-green-100 focus:outline-none focus:ring focus:ring-green-300 focus:border-green-300 border-l-0 border-r-0"
              />
              <span
                class=" h-[46px]
              inline-flex
              items-center
              px-3
              text-sm text-gray-500
              border border-l-0 border-black
              rounded-r-md
            "
              >
                FCFA
              </span>
            </div>
          </div>
          <div className="">
            <label htmlFor="description">Description *</label>
            <textarea
              id="description"
              name="description"
              className="flex w-full text-sm pl-2 border-black border rounded-md mx-auto py-3 mb-2 hover:border-green-500 hover:border-l hover:border-r hover:border-b active:bg-green-100 focus:outline-none focus:ring focus:ring-green-300 focus:border-green-300"
              placeholder="Ex: Mon telephone comporte 1234444 Go de Memoire Rame et et et etc"
            ></textarea>
          </div>
          <div className="">
            <label htmlFor="">Comment me contacter?</label>
            <div className="flex flex-wrap justify-between  ">
              <button className=" text-sm bg-gray-200 px-2 rounded-md mb-2 hover:bg-green-200 hover:text-black text-black py-2">
                Whatsapp
              </button>
              <button className=" text-sm bg-gray-200 px-2 rounded-md mb-2 hover:bg-green-200 hover:text-black text-black py-2">
                <FontAwesomeIcon icon={faPhone} className="mr-2" />
                Telephone
              </button>
              <button className=" text-sm  bg-gray-200 pr-2 w-20 rounded-md mb-2 hover:bg-green-200 hover:text-black text-black py-2">
                <FontAwesomeIcon icon={faSms} className="mr-2" />
                Sms
              </button>
            </div>
          </div>
          <div className="">
            <button
              type="submit"
              className="container text-sm bg-green-500 pl-2  border-t border-l border-r rounded-md mx-auto py-3 hover:bg-green-600 hover:text-black text-white"
            >
              <FontAwesomeIcon icon={faCloudDownload} /> PUBLIER MON ANNONCE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
