import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faChevronLeft,
  faChevronRight,
  faX,
  faClockFour,
  faTruckFast,
  faIndustry, 
  faCreditCardAlt,
  faHeart
} from "@fortawesome/free-solid-svg-icons";
import { Carousel } from "react-carousel-minimal";

const Myhome = () => {
  const data = [
    {
      image:
        "https://img.freepik.com/photos-gratuite/prise-vue-studio-femme-afro-americaine-positive-pointe-du-doigt-pour-copier-espace-au-dessus-excitee-par-bonnes-informations-sourit-agreablement-porte-veste-jaune-se-tient-dans-trou-papier-dechire_273609-33954.jpg?size=626&ext=jpg&ga=GA1.1.1389423758.1646387486",
    },
    {
      image:
        "https://cdn.stocksnap.io/img-thumbs/280h/iphone-device_WR9GMT3HBF.jpg",
    },
    {
      image:
        "https://img.freepik.com/photos-gratuite/boites-colis-papier-logo-panier-achat-dans-chariot-clavier-ordinateur-portable_9635-3215.jpg?size=626&ext=jpg&ga=GA1.2.1389423758.1646387486",
    },
    {
      image:
        "https://img.freepik.com/photos-gratuite/beaucoup-vetements-differents-suspendus-dans-armoire_181624-10996.jpg?size=626&ext=jpg&ga=GA1.1.1389423758.1646387486",
    },
    {
      image:
        "https://cache.magicmaman.com/data/photo/w1000_ci/5y/petite-fille-qui-sourit2.jpg ",
    },
    {
      image:
        "https://img.freepik.com/photos-gratuite/jeune-fille-tient-produit-nettoyage-gants-chiffons-dans-bassin-mur-blanc_1150-21780.jpg?size=626&ext=jpg&ga=GA1.1.1389423758.1646387486",
    },
    {
      image:
        "https://img.freepik.com/photos-gratuite/grande-vente-conseil-vente-prix-reduit-dans-centre-commercial-departement-vetements-espace-copie_116547-15811.jpg?size=626&ext=jpg&ga=GA1.1.1389423758.1646387486",
    },
    {
      image:
        "https://img.freepik.com/photos-gratuite/excite-femme-africaine-tenant-sacs-provisions-telephone-mobile_171337-14029.jpg?size=626&ext=jpg&ga=GA1.1.1389423758.1646387486https://images.ctfassets.net/bth3mlrehms2/6Ypj2Qd3m3jQk6ygmpsNAM/61d2f8cb9f939beed918971b9bc59bcd/Scotland.jpg?w=750&h=422&fl=progressive&q=50&fm=jpg",
    },
    {
      image:
        "https://img.freepik.com/photos-gratuite/ventes-au-detail-cyber-monday_23-2148688493.jpg?size=626&ext=jpg&ga=GA1.1.1389423758.1646387486",
    },
  ];
  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };

  return (
    <div className="pb-8">
      <div className="w-full top-0">
        <input type="checkbox" className="hidden" id="banneralert" />
        <label
          className="close cursor-pointer flex items-center justify-between w-full p-2 bg-orange-400 shadow text-white h-20 text-center pl-[48px]"
          title="Fermer"
          for="banneralert"
        >
          ANNONCE FOR COWEMA
          <FontAwesomeIcon
            icon={faX}
            className="fill-current text-white"
            id="titre"
          />
        </label>
      </div>
      {/* Le menu de notre site */}
      <header className="text-gray-600 body-font box border-solid shadow-xl ">
        <div className="container mx-auto flex flex-wrap py-2 px-12 flex-col md:flex-row items-center gap-10 ">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-10 h-10 text-white p-2 bg-green-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="text-xl">Cowema</span>
          </a>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center">
            <div className="relative">
              <div className="flex flex-wrap w-[500px]">
                <input
                  type="search"
                  id="website-admin"
                  className="w-full rounded-none rounded-l-md bg-gray-50 border border-green-600 text-gray-900 block flex-1 min-w-0 text-sm p-2.5 focus:outline-none focus:border-green-500 focus:ring-none focus:ring-green-500 hover:border-green-700 "
                  placeholder="Rechercher un article spécifique"
                />

                <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-green-500/50 rounded-r-md border border-r-0 border-green-500 cursor-pointer hover:bg-green-500">
                  <FontAwesomeIcon
                    icon={faSearch}
                    id="titre"
                    classNameName="text-gray-200"
                  />
                </span>
              </div>
            </div>
          </nav>
          <div className="col-span-1 text-green-600 ">Connexion</div>
          <div className="col-span-1 text-green-600">Inscription</div>
          <button className="col-span-2 py-3 inline-flex items-center bg-green-500 border-0 px-3 focus:outline-none hover:bg-green-600 rounded text-base mt-4 md:mt-0 text-white">
            Poster une annonce
          </button>
        </div>
      </header>
      {/* Fin menu de notre site */}
      <div className="bg-green-100 border-2 border-green-100">
        <div className="grid grid-cols-8 mx-[48px] gap-4 my-4">
          <div className="col-span-5 box border-solid shadow-xl rounded-xl ">
            <Carousel
              data={data}
              time={2000}
              width="100%"
              height="400px"
              captionStyle={captionStyle}
              radius="6px"
              slideNumber={false}
              slideNumberStyle={slideNumberStyle}
              captionPosition="bottom"
              automatic={true}
              dots={false}
              pauseIconColor="white"
              pauseIconSize="40px"
              slideBackgroundColor="darkgrey"
              slideImageFit="cover"
              thumbnails={false}
              style={{
                textAlign: "center",
              }}
            />
          </div>
          <div className="col-span-3">
            <div className="grid grid-cols-2 h-full gap-4">
              <div className="col-span-1">
                <img
                  src="https://thynxlabs.com/wp-content/uploads/2020/02/e-commerce.gif"
                  alt=""
                  className="lg:h-48 md:h-36 w-full object-cover object-center h-full box border-solid shadow-xl rounded-md"
                />
              </div>
              <div className="col-span-1">
                <img
                  src="https://img.freepik.com/photos-gratuite/pile-t-shirt-polo_74190-2482.jpg?size=626&ext=jpg&ga=GA1.2.1389423758.1646387486"
                  alt=""
                  className="lg:h-48 md:h-36 w-full object-cover object-center box border-solid shadow-xl rounded-md"
                />
              </div>
              <div className="col-span-1">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSL3TdknWFJiCkB0vef9GA9yaoN4u5qdI3cw&usqp=CAU"
                  alt=""
                  className="lg:h-48 md:h-36 w-full object-cover object-center box border-solid shadow-xl rounded-md"
                />
              </div>
              <div className="col-span-1 ">
                <img
                  src="https://img.freepik.com/photos-gratuite/portrait-sourire-belle-fille-elle-beau-petit-ami-rire-heureux-couple-gai-dans-lunettes-soleil_158538-4998.jpg?size=626&ext=jpg&ga=GA1.1.1389423758.1646387486"
                  alt=""
                  className="lg:h-48 md:h-36 w-full object-cover object-center box border-solid shadow-xl rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-between mx-[48px] my-4">
          <div className="col-span1">
            <div className="grid grid-cols-3 gap-1">
              <div className="col-span-1 my-auto mx-auto text-6xl ">
                <FontAwesomeIcon
                  icon={faTruckFast}
                  id="titre"
                  classNameName="text-gray-200"
                />
              </div>
              <div className="col-span-2">
                <div className="text-xl font-bold">Free shipping</div>
                <div className="text-sm">Free shipping in all Congo</div>
                <div className="text-sm">order or order above $100</div>
              </div>
            </div>
          </div>
          <div className="col-span1">
            <div className="grid grid-cols-3 gap-1">
              <div className="col-span-1 my-auto mx-auto text-6xl">
                <FontAwesomeIcon
                  icon={faClockFour}
                  id="titre"
                  classNameName="text-gray-200 h-full w-full"
                />
              </div>
              <div className="col-span-2">
                <div className="text-xl font-bold">24/7 Services</div>
                <div className="text-sm">Contact us 24 hours a day,</div>
                <div className="text-sm">7days a week</div>
              </div>
            </div>
          </div>
          <div className="col-span1">
            <div className="grid grid-cols-3 gap-1">
              <div className="col-span-1 my-auto mx-auto text-6xl">
                <FontAwesomeIcon
                  icon={faIndustry}
                  id="titre"
                  classNameName="text-gray-200 h-full w-full"
                />
              </div>
              <div className="col-span-2">
                <div className="text-xl font-bold">30 days return</div>
                <div className="text-sm">Simply return it within 30 days</div>
                <div className="text-sm">for an exchange</div>
              </div>
            </div>
          </div>
          <div className="col-span1">
            <div className="grid grid-cols-3 gap-1">
              <div className="col-span-1 my-auto mx-auto text-6xl">
                <FontAwesomeIcon
                  icon={faCreditCardAlt}
                  id="titre"
                  classNameName="text-gray-200 h-full w-full"
                />
              </div>
              <div className="col-span-2">
                <div className="text-xl font-bold">100% payement secure</div>
                <div className="text-sm">We ensure secure payment with a</div>
                <div className="text-sm">trusted agreement</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* My body */}
      <div>
        <div className="mx-[48px] my-6 flex justify-between">
          <div>Tops catégories</div>
          <div className="flex gap-1">
            <div className="border-2 rounded-md border-green-300 px-1 text-green-300">
              <FontAwesomeIcon icon={faChevronLeft} id="titre" />
            </div>
            <div className="border-2 rounded-md border-green-300 px-1 text-white bg-green-300">
              <FontAwesomeIcon icon={faChevronRight} id="titre" />
            </div>
          </div>
        </div>
        <div class="flex justify-around my-4">
          <div>
            <div class="border w-24 h-24 fill-[#1877f2] hover:fill-white border-blue-200 rounded-full flex items-center justify-center shadow-x bg-green-200">
            Categories
            </div>
            <div className="mt-4">All categories</div>
          </div>
          
          <div>
            <div class="relative w-24 h-24">
              <img
                className="rounded-full border w-24 h-24 border-gray-100 shadow-sm"
                src="https://img.freepik.com/photos-gratuite/femme-appareils-menagers-blanc_1398-574.jpg?size=338&ext=jpg&ga=GA1.2.1389423758.1646387486"
                alt=""
              />
              {/* <div class="absolute top-0 right-0 h-6 w-6 my-1 border-4 border-white rounded-full bg-gray-300 z-2"></div> */}
            </div>
            <div className="mt-4">Electromenager</div>
          </div>
          <div className="text-center">
            <div class="relative w-24 h-24">
              <img
                className="rounded-full border w-24 h-24 border-gray-100 shadow-sm"
                src="https://img.freepik.com/photos-gratuite/portrait-studio-mode-fille-jolie-blonde-inhabituelle-perruque-courte-haut-blanc-jupe-sexy-posant-interieur-fond-jaune-emotions-positives-ensoleillees-lunettes-soleil-elegantes_273443-1140.jpg?size=626&ext=jpg&ga=GA1.2.1389423758.1646387486"
                alt=""
              />
              {/* <div class="absolute top-0 right-0 h-6 w-6 my-1 border-4 border-white rounded-full bg-gray-300 z-2"></div> */}
            </div>
            <div className="mt-4">Vetement</div>
          </div>
          <div>
            <div class="relative w-24 h-24">
              <img
                className="rounded-full border h-24 w-24 border-gray-100 shadow-sm"
                src="https://img.freepik.com/photos-gratuite/blocs-icones-medias-sociaux-ordinateur-portable-fond-bleu_23-2147841214.jpg?size=626&ext=jpg&ga=GA1.1.1389423758.1646387486"
                alt=""
              />
              {/* <div class="absolute top-0 right-0 h-6 w-6 my-1 border-4 border-white rounded-full bg-gray-300 z-2"></div> */}
            </div>
            <div className="mt-4">Electronique</div>
          </div>
          <div className="text-center">
            <div class="relative w-24 h-24">
              <img
                className="rounded-full border h-24 w-24 border-gray-100 shadow-sm"
                src="https://img.freepik.com/photos-gratuite/belle-fille-du-maquillage-colore_144627-8208.jpg?size=626&ext=jpg&ga=GA1.2.1389423758.1646387486"
                alt=""
              />
              {/* <div class="absolute top-0 right-0 h-6 w-6 my-1 border-4 border-white rounded-full bg-gray-300 z-2"></div> */}
            </div>
            <div className="mt-4">Beauté</div>
          </div>
          <div>
            <div class="relative w-24 h-24">
              <img
                className="rounded-full border h-24 w-24 border-gray-100 shadow-sm"
                src="https://img.freepik.com/photos-gratuite/modele-maison-villa-cle-dessin-retro-bureau-concept-vente-immobilier_1387-310.jpg?size=626&ext=jpg&ga=GA1.2.1389423758.1646387486"
                alt=""
              />
              {/* <div class="absolute top-0 right-0 h-6 w-6 my-1 border-4 border-white rounded-full bg-gray-300 z-2"></div> */}
            </div>
            <div className="mt-4">Immobilier</div>
          </div>
        </div>

        {/* Ma carte */}
        <div className="grid grid-cols-6 mx-[48px] mt-8 gap-4">
          <div className="col-span-4">
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-1">
                <a
                  class="relative block border rounded-md box border-solid shadow-xl"
                  href="!#"
                >
                  <button
                    class="absolute p-2 h-8 w-8 text-white bg-black rounded-full right-4 top-4"
                    type="button"
                  >
                    <FontAwesomeIcon
                      icon={faHeart}
                      id="titre"
                      className="h-4 w-4 mb-1"
                    />
                  </button>

                  <img
                    class="object-contain w-full h-56 lg:h-72"
                    src="https://www.presse-citron.net/app/uploads/2019/09/iphone-11-apple.jpg"
                    alt="Build Your Own Drone"
                    loading="lazy"
                  />

                  <div class="p-6">
                    <h5 class="mt-4 text-lg font-bold text-center">
                      IPHONE 12 MINI
                    </h5>
                  </div>
                </a>
              </div>
              <div className="col-span-1">
                <a
                  class="relative block border rounded-md box border-solid shadow-xl"
                  href="!#"
                >
                  <button
                    class="absolute p-2 h-8 w-8 text-white bg-black rounded-full right-4 top-4"
                    type="button"
                  >
                    <FontAwesomeIcon
                      icon={faHeart}
                      id="titre"
                      className="h-4 w-4 mb-1"
                    />
                  </button>

                  <img
                    class="object-contain w-full h-56 lg:h-72"
                    src="https://img.freepik.com/photos-gratuite/pile-t-shirt-polo_74190-2482.jpg?size=626&ext=jpg&ga=GA1.2.1389423758.1646387486"
                    alt="Build Your Own Drone"
                    loading="lazy"
                  />

                  <div class="p-6">
                    <h5 class="mt-4 text-lg font-bold text-center">
                      LACOSTE
                    </h5>
                  </div>
                </a>
              </div>
              <div className="col-span-1">
                <a
                  class="relative block border rounded-md box border-solid shadow-xl"
                  href="!#"
                >
                  <button
                    class="absolute p-2 h-8 w-8 text-white bg-black rounded-full right-4 top-4"
                    type="button"
                  >
                    <FontAwesomeIcon
                      icon={faHeart}
                      id="titre"
                      className="h-4 w-4 mb-1"
                    />
                  </button>

                  <img
                    class="object-contain w-full h-56 lg:h-72"
                    src="https://img.freepik.com/photos-gratuite/savoureuse-pizza-ingredients-isoles-blanc_185193-20017.jpg?size=626&ext=jpg&ga=GA1.2.1389423758.1646387486"
                    alt="Build Your Own Drone"
                    loading="lazy"
                  />

                  <div class="p-6">
                    <h5 class="mt-4 text-lg font-bold text-center">
                      MANGER ET BOUGER
                    </h5>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="col-span-2 border-2 border-green-300 rounded-md p-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            et ipsum consequuntur accusantium, minus cupiditate quo ullam.
            Similique tempore aliquam iure, vero soluta accusantium
            exercitationem aspernatur ex ducimus nulla dolor.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Myhome;
