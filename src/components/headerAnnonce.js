import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faCloudDownload } from "@fortawesome/free-solid-svg-icons";

const HeaderAnnonce = () => {
  return (
    <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-800 w-auto ">
      <div class="container flex flex-wrap justify-between items-center mx-auto">
        <a href="#!" class="flex" title="res">
          <span class="self-center font-semibold whitespace-nowrap dark:text-white text-3xl">
            <FontAwesomeIcon icon={faArrowLeft} />
          </span>
        </a>
        <div className="flex text-2xl font-black">Publier votre annonce</div>
      </div>
    </nav>
  );
};
export default HeaderAnnonce;
