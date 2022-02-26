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
  const [image, setImage] = useState();

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
          {/* Mes inputs */}
          <div className="mx-4">
            <div className=" mt-6">
              <div className="border-4 border-dashed h-64">
                <input type="file" />
              </div>
            </div>
            <div className="grid grid-cols-4 border-4 border-dashed h-40 border-t-0">
              <div className="col-span-1 border-r-4 border-dashed"></div>
              <div className="col-span-1 border-r-4 border-dashed"></div>
              <div className="col-span-1 border-r-4 border-dashed"></div>
              <div className="col-span-1"></div>
            </div>
            <div className="mt-8">
              <label
                htmlFor="titre"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Le titre de l'annonce *
              </label>
              <div class="relative mt-1">
                <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <FontAwesomeIcon icon={faHeading} id="titre"/>
                </div>
                <Input type="text" />
              </div>
            </div>
            <div className="mt-6">
              <label
            
                htmlFor="categorie"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Selectionner la catégorie *
              </label>
              <select
                id="categorie"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Selectionner la ville *
              </label>
              <select
                id="ville"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option>Brazzaville</option>
                <option>Oyo</option>
                <option>Pointe noire</option>
                <option>Nkayi</option>
              </select>
            </div>
            <div className="mt-6">
              <label
                for="reference"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                La reference (facultatif)
              </label>
              <div class="relative mt-1">
                <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <FontAwesomeIcon icon={faMapLocation} />
                </div>
                <Input placeholder="Ex: A coté du marché total" id="reference" name="reference" />
              </div>
            </div>
            <div className="mt-6">
              <label
                for="idPrix"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Le prix *
              </label>
              <div class="relative mt-1">
                <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <FontAwesomeIcon icon={faUsd} />
                </div>
                <Input id="idPrix" />
              </div>
            </div>
            <div className="mt-6">
              <label
                for="idDescription"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
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
              <label
                for="idDescription"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Comment peut-on vous contactez?
              </label>
              <div className="grid grid-cols-3 ">
                <button
                  type="button"
                  class="text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-blue-300 font-medium rounded-sm text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-gray-600 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-800"
                >
                  Whatsapp
                </button>
                <button
                  type="button"
                  class="text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-blue-300 font-medium rounded-sm text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-gray-600 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-800"
                >
                  <FontAwesomeIcon icon={faPhone} className="mr-2" />
                  Telephone
                </button>
                <button
                  type="button"
                  class="text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-blue-300 font-medium rounded-sm text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-gray-600 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-800"
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
                  class="text-white bg-blue-400 hover:bg-blue-500 font-medium rounded-sm text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 mr-2 mb-2"
                >
                  Retour
                </button>
                <button
                  type="button"
                  class="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 font-medium rounded-sm text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 mr-2 mb-2"
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
