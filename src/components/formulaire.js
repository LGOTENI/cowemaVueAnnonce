import React, { useState } from "react";
import Input from "./Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faMapLocation,
  faSms,
  faCloudDownload,
  faUsd,
  faHeading,
} from "@fortawesome/free-solid-svg-icons";

export default function Formulaire() {
  const [verification, setVerification] = useState(false);
  const [image, setImage] = useState("");
  const [firstButton, setFirstButton] = useState(false);
  const [secondButton, setSecondButton] = useState(false);
  const [thirdButton, setThirdButton] = useState(false);

  const monImage = (e) => {
    if (e.target.value) {
      setVerification(true);
      setImage(e.target.value);
    }
  };

  return (
    <div className="box border-solid shadow-xl rounded-xl bg-blue-500 mt-4 mb-4">
      <div className=" bg-white box border-solid shadow-xl rounded-md py-4 ">
        <div className="">
            <h1 className="mx-4 text-center font-semibold animate-bounce">
              Veillez remplir le formulaire s'il vout plait.
            </h1>
          {/* Mes inputs */}
          <div className="mx-4">
            <div className=" mt-6 mb-1">
              <div
                className={`${
                  verification ? "h-64" : "border-4 border-dashed h-64"
                }`}
              >
                {verification ? (
                  <img
                    src="https://cache.magicmaman.com/data/photo/w1000_ci/5y/petite-fille-qui-sourit2.jpg "
                    alt=""
                    className="cw-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                ) : (
                  <input type="file" onChange={(e) => monImage(e)} />
                )}
              </div>
            </div>
            <div className="grid grid-cols-4 border-4 border-dashed h-40 border-t-0">
              <div className="col-span-1 border-r-4 border-dashed">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMNENSPGmMWl5K75XM5-7JfgF0H5fNXq8nQw&usqp=CAU"
                  alt=""
                  className="cw-full h-full object-center object-cover lg:w-full lg:h-full"
                />
              </div>
              <div className="col-span-1 border-r-4 border-dashed">
                <img
                  src="https://us.123rf.com/450wm/karelnoppe/karelnoppe1705/karelnoppe170500034/79224056-gros-plan-d-un-visage-de-studio-de-jeune-fille-africaine-charmante-avec-une-coiffure-tress%C3%A9e-.jpg"
                  alt=""
                  className="cw-full h-full object-center object-cover lg:w-full lg:h-full"
                />
              </div>
              <div className="col-span-1 border-r-4 border-dashed">
                <img
                  src="https://i.pinimg.com/236x/e2/21/b6/e221b6befff1547108677eb1d049a431.jpg"
                  alt=""
                  className="cw-full h-full object-center object-cover lg:w-full lg:h-full"
                />
              </div>
              <div className="col-span-1">
                <img
                  src="https://assets.laboutiqueofficielle.com/w_210,q_auto,f_auto/w_30,g_north_east,x_5,y_5,o_100,l_image:upload:v1627646526:Desc:Watermark:3adidas_orginal/media/products/2021/01/18/adidas_247735_FZ2247_20210122T133427_01.jpg"
                  alt=""
                  className="cw-full h-full object-center object-cover lg:w-full lg:h-full"
                />
              </div>
            </div>
            <div className="mt-8">
              <label
                htmlFor="idTitre"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Le titre de l'annonce *
              </label>
              <div className="relative mt-1">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <FontAwesomeIcon icon={faHeading} id="titre" />
                </div>
                <Input type="text" id="idTitre" />
              </div>
            </div>
            <div className="mt-6">
              <label
                htmlFor="categorie"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Selectionner la catégorie *
              </label>
              <select
                id="categorie"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:border-2 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option>Telephone</option>
                <option>Habit</option>
                <option>Ordinateur</option>
                <option>Chaussure</option>
              </select>
            </div>
            <div className="mt-6">
              <label
                htmlFor="ville"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Selectionner la ville *
              </label>
              <select
                id="ville"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:border-2 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option>Brazzaville</option>
                <option>Oyo</option>
                <option>Pointe noire</option>
                <option>Nkayi</option>
              </select>
            </div>
            <div className="mt-6">
              <label
                htmlFor="reference"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                La reference (facultatif)
              </label>
              <div className="relative mt-1">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <FontAwesomeIcon icon={faMapLocation} />
                </div>
                <Input
                  placeholder="Ex: A coté du marché total"
                  id="reference"
                  name="reference"
                />
              </div>
            </div>
            <div className="mt-6">
              <label
                htmlFor="idPrix"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Le prix *
              </label>
              <div className="relative mt-1">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <FontAwesomeIcon icon={faUsd} />
                </div>
                <Input id="idPrix" type="number" />
              </div>
            </div>
            <div className="mt-6">
              <label
                htmlFor="idDescription"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                La description du poduit
              </label>
              <textarea
                name="description"
                id="idDescription"
                cols="30"
                rows="10"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Ex: Mon telephone est de marque nokia avec 4Go de Ram et 32Go de memoir morte"
              ></textarea>
            </div>
            <div className="mt-6">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Comment peut-on vous contactez?
              </label>
              <div className="grid grid-cols-3 ">
                <button
                  onClick={() => setFirstButton(!firstButton)}
                  type="button"
                  className={`${
                    firstButton
                      ? "ring-4 text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-blue-300 font-medium rounded-sm text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-gray-600 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-800"
                      : "text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-blue-300 font-medium rounded-sm text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-gray-600 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-800"
                  }`}
                >
                  Whatsapp
                </button>
                <button
                  onClick={() => setSecondButton(!secondButton)}
                  type="button"
                  className={`${
                    secondButton
                      ? "ring-4 text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-blue-300 font-medium rounded-sm text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-gray-600 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-800"
                      : "text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-blue-300 font-medium rounded-sm text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-gray-600 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-800"
                  }`}
                >
                  <FontAwesomeIcon icon={faPhone} className="mr-2" />
                  Telephone
                </button>
                <button
                  onClick={() => setThirdButton(!thirdButton)}
                  type="button"
                  className={`${
                    thirdButton
                      ? "ring-4 text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-blue-300 font-medium rounded-sm text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-gray-600 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-800"
                      : "text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-blue-300 font-medium rounded-sm text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-gray-600 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-800"
                  }`}
                >
                  <FontAwesomeIcon icon={faSms} className="mr-2" />
                  SMS
                </button>
              </div>
            </div>
            <div className="mt-6">
              <div className="flex flex-wrap justify-between">
                <button
                  type="button"
                  className="text-white bg-blue-400 hover:bg-blue-500 font-medium rounded-sm text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 mr-2 mb-2"
                >
                  Retour
                </button>
                <button
                  type="button"
                  className="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 font-medium rounded-sm text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 mr-2 mb-2"
                >
                  <FontAwesomeIcon icon={faCloudDownload} className="mr-2" />
                  Envoyer mon annonce
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
