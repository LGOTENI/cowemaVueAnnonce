import React, {useState} from "react";
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
  
  const [verification, setVerification]= useState(false)
  const [image, setImage]= useState()

  const monImage= (e) => {
    if(e.target.value){
      setVerification(true)
      setImage(e.target.value)
    }

  }

  return (
    <div className="grid grid-cols-6 col-span-2 box border-solid shadow-xl rounded-md bg-blue-500 mt-4 mb-4">
      <div className="col-span-2 bg-green-400 w-full box border-solid shadow-xl rounded-sm rounded-r-none">
        {/* <div className="m-2">
          <div className="grid grid-cols-12">
            <div class=" col-span-1 font-semibold whitespace-nowrap dark:text-white">
            </div>
            <div className="col-span-11 text-center text-xl font-bold">
            </div>
          </div>
          <div>
            <span className="font-light">
              Nous prenons un plasir à vous servir
            </span>
          </div>
        </div> */}
      </div>

      <div className="col-span-4 bg-white box border-solid shadow-xl rounded-sm rounded-l-none ">
        <div className="m-2">
          <div className="text-center text-xl font-extrabold mb-4 ">
            Veillez remplir ce formuaire s'il vous plait.
          </div>
          {/* Mes inputs */}
          <div className="mx-14 mt-8">
            <div className="mb-4">
              <div className="grid grid-cols-5 h-72 border-dashed border-4 gap-1">
                <div className="col-span-2 w-full h-full border-r-4 border-dashed text center">
                  {verification ? (
                    <img src={image} alt="" srcset="" />
                  ) : (
                    <input
                      type="file"
                      className="h-full w-full mt-32"
                      onChange={(e) => monImage(e)}
                    />
                  )}
                </div>
                <div className="col-span-3">
                  <div className="grid grid-cols-2 h-full gap-1">
                    <div className="col-span-1 border-r-4 border-dashed">
                      02
                    </div>
                    <div className="col-span-1 ">03</div>
                    <div className="col-span-1 border-r-4 border-t-4 border-dashed">
                      04
                    </div>
                    <div className="col-span-1 border-t-4 border-dashed">
                      05
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
                  className="flex w-full text-sm pl-2 border-black border rounded-md mx-auto py-[18px] mb-2 hover:border-green-500 hover:border-l hover:border-r hover:border-b active:bg-green-100 focus:outline-none focus:ring focus:ring-green-300 focus:border-green-300pb-4 mt-2 font-bold
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
                className="flex w-full text-xl pl-2 border-black border rounded-md mx-auto py-3 mb-2 hover:border-green-500 hover:border-l hover:border-r hover:border-b active:bg-green-100 focus:outline-none focus:ring focus:ring-green-300 focus:border-green-300pb-4 mt-2 font-light
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
                className="w-full text-lg pl-2 border-black border rounded-md mx-auto py-3 mb-2 hover:border-green-500 hover:border-l hover:border-r hover:border-b active:bg-green-100 focus:outline-none focus:ring focus:ring-green-300 focus:border-green-300 font-light pb-4 mt-2 "
              ></textarea>
            </div>
            <div className="mb-2">
              <div className="text-xl mb-2">Comment me contacter?</div>
              <div className="flex flex-wrap justify-between w-96   ">
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
                className="container text-sm bg-green-500 pl-2  border-t border-l border-r rounded-md mx-auto py-3 hover:bg-green-600 hover:text-black text-white w-60"
              >
                <FontAwesomeIcon icon={faCloudDownload} /> PUBLIER MON ANNONCE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
