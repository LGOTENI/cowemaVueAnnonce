import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faCloudDownload } from "@fortawesome/free-solid-svg-icons";

const HeaderAnnonce = () => {
  return (
    <nav class="bg-gray-100 border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-800 w-auto ">
      <div class="container flex flex-wrap justify-between items-center mx-auto">
        <a href="#!" class="flex" title="res">
          <span class="self-center font-semibold whitespace-nowrap dark:text-white text-3xl">
            <FontAwesomeIcon icon={faArrowLeft} />
          </span>
        </a>
        <div className="flex text-2xl font-black">Publier votre annonce</div>
        <div>
          <ul class="flex flex-col mt-4 md:mt-0">
            <li>
              <a
                href="#!"
                class="block py-2 pr-4 pl-3 text-white bg-gray-700 md:bg-transparent md:text-gray-700 md:p-0 text-3xl"
                aria-current="page" 
              >
                <FontAwesomeIcon icon={faCloudDownload}/>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default HeaderAnnonce;
