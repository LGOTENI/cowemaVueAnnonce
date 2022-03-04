import React from "react";
import { Carousel } from "react-carousel-minimal";
import Slider from "react-slick";



const Home = () => {
  const data = [
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg",
      caption: "San Francisco",
    },
    {
      image:
        "https://cdn.britannica.com/s:800x450,c:crop/35/204435-138-2F2B745A/Time-lapse-hyper-lapse-Isle-Skye-Scotland.jpg",
      caption: "Scotland",
    },
    {
      image:
        "https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg",
      caption: "Darjeeling",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Palace_of_Fine_Arts_%2816794p%29.jpg/1200px-Palace_of_Fine_Arts_%2816794p%29.jpg",
      caption: "San Francisco",
    },
    {
      image:
        "https://i.natgeofe.com/n/f7732389-a045-402c-bf39-cb4eda39e786/scotland_travel_4x3.jpg",
      caption: "Scotland",
    },
    {
      image:
        "https://www.tusktravel.com/blog/wp-content/uploads/2020/07/Best-Time-to-Visit-Darjeeling-for-Honeymoon.jpg",
      caption: "Darjeeling",
    },
    {
      image:
        "https://www.omm.com/~/media/images/site/locations/san_francisco_780x520px.ashx",
      caption: "San Francisco",
    },
    {
      image:
        "https://images.ctfassets.net/bth3mlrehms2/6Ypj2Qd3m3jQk6ygmpsNAM/61d2f8cb9f939beed918971b9bc59bcd/Scotland.jpg?w=750&h=422&fl=progressive&q=50&fm=jpg",
      caption: "Scotland",
    },
    {
      image:
        "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/summer-7.jpg",
      caption: "Darjeeling",
      name: "Vrai ou vrai"
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
   const settings = {
     dots: true,
     infinite: true,
     speed: 500,
     slidesToShow: 1,
     slidesToScroll: 1,
   };

  return (
    <div className="">
      <div>
        <div className="mx-8 my-8">
          <div className="md:grid md:grid-cols-5 gap-4">
            <div className=" md:col-span-3">
              <Carousel
                data={data}
                time={3000}
                width="100%"
                height="400px"
                captionStyle={captionStyle}
                radius="10px"
                slideNumber={false}
                slideNumberStyle={slideNumberStyle}
                captionPosition="bottom"
                automatic={true}
                dots={true}
                pauseIconColor="white"
                pauseIconSize="40px"
                slideBackgroundColor="darkgrey"
                slideImageFit="cover"
                thumbnails={true}
                style={{
                  textAlign: "center",
                }}
              />
            </div>
            <div className="md:col-span-2 bg-red-300">Salut l</div>
          </div>
        </div>
      </div>
      <div>
        <Slider {...settings}>
          <div>
            <div className="relative mx-32 h-96 text-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg"
                alt=""
                className="w-full relative"
              />
              <div className="absolute text-red-700">Je taime</div>
            </div>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
      <section class="text-gray-700 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-4">
      <div class="p-4 md:w-1/3">
        <div class="h-full border-2 border-gray-200 rounded-lg overflow-hidden">
          <div class="lg:h-48 bg-gray-400 md:h-36 w-full object-cover object-center"></div>
          <div class="p-6">
            <h2 class="bg-gray-400 animate-pulse h-4 w-1/4 mb-2"></h2>
            <h1 class="w-1/2 mb-4 h-6 animate-pulse bg-gray-500"></h1>
            <p class="leading-relaxed mb-3 w-full h-3 animate-pulse bg-gray-400"></p>
            <p class="leading-relaxed mb-3 w-2/3 h-3 animate-pulse bg-gray-400"></p>
            <p class="leading-relaxed mb-3 w-1/2 h-3 animate-pulse bg-gray-400"></p>
            <div class="flex items-center flex-wrap ">
              <a class="bg-indigo-300 h-4 animate-pulse mt-2 w-32 inline-flex items-center md:mb-2 lg:mb-0">
                
              </a>
              <span class="bg-indigo-300 w-16 mt-2 h-4 animate-pulse mr-3 px-2 inline-flex items-center ml-auto leading-none text-sm pr-5 py-1">
                
              </span>
              
            </div>
          </div>
        </div>
      </div>
      
      <div class="p-4 md:w-1/3">
        <div class="h-full border-2 border-gray-200 rounded-lg overflow-hidden">
          <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1049&q=80" alt="blog"/>
          <div class="p-6">
            <h2 class="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">CATEGORY</h2>
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">The Catalyzer</h1>
            <p class="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
            <div class="flex items-center flex-wrap ">
              <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
              <span class="text-gray-600 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-300">
                <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>1.2K
              </span>
              <span class="text-gray-600 inline-flex items-center leading-none text-sm">
                <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>6
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="p-4 md:w-1/3">
        <div class="h-full border-2 border-gray-200 rounded-lg overflow-hidden">
          <div class="lg:h-48 bg-gray-400 md:h-36 w-full object-cover object-center"></div>
          <div class="p-6">
            <h2 class="bg-gray-400 animate-pulse h-4 w-1/4 mb-2"></h2>
            <h1 class="w-1/2 mb-4 h-6 animate-pulse bg-gray-500"></h1>
            <p class="leading-relaxed mb-3 w-full h-3 animate-pulse bg-gray-400"></p>
            <p class="leading-relaxed mb-3 w-2/3 h-3 animate-pulse bg-gray-400"></p>
            <p class="leading-relaxed mb-3 w-1/2 h-3 animate-pulse bg-gray-400"></p>
            <div class="flex items-center flex-wrap ">
              <a class="bg-indigo-300 h-4 animate-pulse mt-2 w-32 inline-flex items-center md:mb-2 lg:mb-0">
                
              </a>
              <span class="bg-indigo-300 w-16 mt-2 h-4 animate-pulse mr-3 px-2 inline-flex items-center ml-auto leading-none text-sm pr-5 py-1">
                
              </span>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


<section class="text-gray-700 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div>Loading</div>
    <div class="flex flex-wrap -m-4">
      <div class="p-4 md:w-1/3">
        <div class="h-full border-2 border-gray-200 rounded-lg overflow-hidden">
          <div class="lg:h-48 bg-gray-400 md:h-36 w-full object-cover object-center"></div>
          <div class="p-6">
            <h2 class="bg-gray-400 animate-pulse h-4 w-1/4 mb-2"></h2>
            <h1 class="w-1/2 mb-4 h-6 animate-pulse bg-gray-500"></h1>
            <p class="leading-relaxed mb-3 w-full h-3 animate-pulse bg-gray-400"></p>
            <p class="leading-relaxed mb-3 w-2/3 h-3 animate-pulse bg-gray-400"></p>
            <p class="leading-relaxed mb-3 w-1/2 h-3 animate-pulse bg-gray-400"></p>
            <div class="flex items-center flex-wrap ">
              <a class="bg-indigo-300 h-4 animate-pulse mt-2 w-32 inline-flex items-center md:mb-2 lg:mb-0">
                
              </a>
              <span class="bg-indigo-300 w-16 mt-2 h-4 animate-pulse mr-3 px-2 inline-flex items-center ml-auto leading-none text-sm pr-5 py-1">
                
              </span>
              
            </div>
          </div>
        </div>
      </div>
      <div class="p-4 md:w-1/3">
        <div class="h-full border-2 border-gray-200 rounded-lg overflow-hidden">
          <div class="lg:h-48 bg-gray-400 md:h-36 w-full object-cover object-center"></div>
          <div class="p-6">
            <h2 class="bg-gray-400 animate-pulse h-4 w-1/4 mb-2"></h2>
            <h1 class="w-1/2 mb-4 h-6 animate-pulse bg-gray-500"></h1>
            <p class="leading-relaxed mb-3 w-full h-3 animate-pulse bg-gray-400"></p>
            <p class="leading-relaxed mb-3 w-2/3 h-3 animate-pulse bg-gray-400"></p>
            <p class="leading-relaxed mb-3 w-1/2 h-3 animate-pulse bg-gray-400"></p>
            <div class="flex items-center flex-wrap ">
              <a class="bg-indigo-300 h-4 animate-pulse mt-2 w-32 inline-flex items-center md:mb-2 lg:mb-0">
                
              </a>
              <span class="bg-indigo-300 w-16 mt-2 h-4 animate-pulse mr-3 px-2 inline-flex items-center ml-auto leading-none text-sm pr-5 py-1">
                
              </span>
              
            </div>
          </div>
        </div>
      </div>
      <div class="p-4 md:w-1/3">
        <div class="h-full border-2 border-gray-200 rounded-lg overflow-hidden">
          <div class="lg:h-48 bg-gray-400 md:h-36 w-full object-cover object-center"></div>
          <div class="p-6">
            <h2 class="bg-gray-400 animate-pulse h-4 w-1/4 mb-2"></h2>
            <h1 class="w-1/2 mb-4 h-6 animate-pulse bg-gray-500"></h1>
            <p class="leading-relaxed mb-3 w-full h-3 animate-pulse bg-gray-400"></p>
            <p class="leading-relaxed mb-3 w-2/3 h-3 animate-pulse bg-gray-400"></p>
            <p class="leading-relaxed mb-3 w-1/2 h-3 animate-pulse bg-gray-400"></p>
            <div class="flex items-center flex-wrap ">
              <a class="bg-indigo-300 h-4 animate-pulse mt-2 w-32 inline-flex items-center md:mb-2 lg:mb-0">
                
              </a>
              <span class="bg-indigo-300 w-16 mt-2 h-4 animate-pulse mr-3 px-2 inline-flex items-center ml-auto leading-none text-sm pr-5 py-1">
                
              </span>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<hr/>

<section class="text-gray-700 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div>After Loading</div>
    <div class="flex flex-wrap -m-4">
      <div class="p-4 md:w-1/3">
        <div class="h-full border-2 border-gray-200 rounded-lg overflow-hidden">
          <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1049&q=80" alt="blog"/>
          <div class="p-6">
            <h2 class="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">CATEGORY</h2>
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">The Catalyzer</h1>
            <p class="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
            <div class="flex items-center flex-wrap ">
              <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
              <span class="text-gray-600 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-300">
                <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>1.2K
              </span>
              <span class="text-gray-600 inline-flex items-center leading-none text-sm">
                <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>6
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="p-4 md:w-1/3">
        <div class="h-full border-2 border-gray-200 rounded-lg overflow-hidden">
          <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="blog"/>
          <div class="p-6">
            <h2 class="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">CATEGORY</h2>
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">The 400 Blows</h1>
            <p class="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
            <div class="flex items-center flex-wrap">
              <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
              <span class="text-gray-600 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-300">
                <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>1.2K
              </span>
              <span class="text-gray-600 inline-flex items-center leading-none text-sm">
                <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>6
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="p-4 md:w-1/3">
        <div class="h-full border-2 border-gray-200 rounded-lg overflow-hidden">
          <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="https://images.unsplash.com/photo-1593642703055-4b72c180d9b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="blog"/>
          <div class="p-6">
            <h2 class="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">CATEGORY</h2>
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Shooting Stars</h1>
            <p class="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
            <div class="flex items-center flex-wrap ">
              <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
              <span class="text-gray-600 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-300">
                <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>1.2K
              </span>
              <span class="text-gray-600 inline-flex items-center leading-none text-sm">
                <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>6
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section>
  <div class="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:px-8">
    <div
      class="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:items-start"
    >
    <div class="lg:sticky lg:top-4">
      <details
        open
        class="overflow-hidden border border-gray-200 rounded"
      >
        <summary class="flex items-center justify-between px-5 py-3 bg-gray-100 lg:hidden">
          <span class="text-sm font-medium">
            Toggle Filters
          </span>

          <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </summary>

        <form
          action=""
          class="border-t border-gray-200 lg:border-t-0"
        >
          <fieldset>
            <legend class="block w-full px-5 py-3 text-xs font-medium bg-gray-50">
              Type
            </legend>

            <div class="px-5 py-6 space-y-2">
              <div class="flex items-center">
                <input
                  id="toy"
                  type="checkbox"
                  name="type[toy]"
                  class="w-5 h-5 border-gray-300 rounded"
                />

                <label
                  for="toy"
                  class="ml-3 text-sm font-medium"
                >
                  Toy
                </label>
              </div>

              <div class="flex items-center">
                <input
                  id="game"
                  type="checkbox"
                  name="type[game]"
                  class="w-5 h-5 border-gray-300 rounded"
                />

                <label
                  for="game"
                  class="ml-3 text-sm font-medium"
                >
                  Game
                </label>
              </div>

              <div class="flex items-center">
                <input
                  id="outdoor"
                  type="checkbox"
                  name="type[outdoor]"
                  class="w-5 h-5 border-gray-300 rounded"
                />

                <label
                  for="outdoor"
                  class="ml-3 text-sm font-medium"
                >
                  Outdoor
                </label>
              </div>

              <div class="pt-2">
                <button
                  type="button"
                  class="text-xs text-gray-500 underline"
                >
                  Reset Type
                </button>
              </div>
            </div>
          </fieldset>

          <div>
            <fieldset>
              <legend class="block w-full px-5 py-3 text-xs font-medium bg-gray-50">
                Age
              </legend>

              <div class="px-5 py-6 space-y-2">
                <div class="flex items-center">
                  <input
                    id="3+"
                    type="checkbox"
                    name="age[3+]"
                    class="w-5 h-5 border-gray-300 rounded"
                  />

                  <label
                    for="3+"
                    class="ml-3 text-sm font-medium"
                  >
                    3+
                  </label>
                </div>

                <div class="flex items-center">
                  <input
                    id="8+"
                    type="checkbox"
                    name="age[8+]"
                    class="w-5 h-5 border-gray-300 rounded"
                  />

                  <label
                    for="8+"
                    class="ml-3 text-sm font-medium"
                  >
                    8+
                  </label>
                </div>

                <div class="flex items-center">
                  <input
                    id="12+"
                    type="checkbox"
                    name="age[12+]"
                    class="w-5 h-5 border-gray-300 rounded"
                  />

                  <label
                    for="12+"
                    class="ml-3 text-sm font-medium"
                  >
                    12+
                  </label>
                </div>

                <div class="flex items-center">
                  <input
                    id="16+"
                    type="checkbox"
                    name="age[16+]"
                    class="w-5 h-5 border-gray-300 rounded"
                  />

                  <label
                    for="16+"
                    class="ml-3 text-sm font-medium"
                  >
                    16+
                  </label>
                </div>

                <div class="pt-2">
                  <button
                    type="button"
                    class="text-xs text-gray-500 underline"
                  >
                    Reset Age
                  </button>
                </div>
              </div>
            </fieldset>
          </div>

          <div class="flex justify-between px-5 py-3 border-t border-gray-200">
            <button
              name="reset"
              type="button"
              class="text-xs font-medium text-gray-600 underline rounded"
            >
              Reset All
            </button>

            <button
              name="commit"
              type="button"
              class="px-5 py-3 text-xs font-medium text-white bg-green-600 rounded"
            >
              Apply Filters
            </button>
          </div>
        </form>
      </details>
    </div>

      <div class="lg:col-span-3">
        <div class="flex items-center justify-between">
          <p class="text-sm text-gray-500">
            <span class="hidden sm:inline">
              Showing
            </span>
            6 of 24 Products
          </p>

          <div class="ml-4">
            <label
              for="SortBy"
              class="sr-only"
            >
              Sort
            </label>

            <select
              id="SortBy"
              name="sort_by"
              class="text-sm border-gray-100 rounded"
            >
              <option readonly>Sort</option>
              <option value="title-asc">Title, A-Z</option>
              <option value="title-desc">Title, Z-A</option>
              <option value="price-asc">Price, Low-High</option>
              <option value="price-desc">Price, High-Low</option>
            </select>
          </div>
        </div>

        <div class="grid grid-cols-1 gap-px mt-4 bg-gray-200 border border-gray-200 sm:grid-cols-2 lg:grid-cols-3">
          <a
            href="/product/build-your-own-drone"
            class="relative block bg-white"
          >
            <button
              type="button"
              name="wishlist"
              class="absolute p-2 text-white bg-black rounded-full right-4 top-4"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
            </button>

            <img
              loading="lazy"
              alt="Build Your Own Drone"
              class="object-contain w-full h-56 lg:h-72"
              src="https://www.hyperui.dev/photos/toy-1.jpeg"
            />

            <div class="p-6">
              <span class="inline-block px-3 py-1 text-xs font-medium bg-yellow-400">
                New
              </span>

              <h5 class="mt-4 text-lg font-bold">
                Build Your Own Drone
              </h5>

              <p class="mt-2 text-sm font-medium text-gray-600">
                $14.99
              </p>

              <button
                name="add"
                type="button"
                class="flex items-center justify-center w-full px-8 py-4 mt-4 bg-yellow-500 rounded-sm"
              >
                <span class="text-sm font-medium">
                  Add to Cart
                </span>

                <svg class="w-5 h-5 ml-1.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </button>
            </div>
          </a>

          <a
            href="/product/build-your-own-drone"
            class="relative block bg-white"
          >
            <button
              type="button"
              name="wishlist"
              class="absolute p-2 text-white bg-black rounded-full right-4 top-4"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
            </button>

            <img
              loading="lazy"
              alt="Build Your Own Drone"
              class="object-contain w-full h-56 lg:h-72"
              src="https://www.hyperui.dev/photos/toy-1.jpeg"
            />

            <div class="p-6">
              <span class="inline-block px-3 py-1 text-xs font-medium bg-yellow-400">
                New
              </span>

              <h5 class="mt-4 text-lg font-bold">
                Build Your Own Drone
              </h5>

              <p class="mt-2 text-sm font-medium text-gray-600">
                $14.99
              </p>

              <button
                name="add"
                type="button"
                class="flex items-center justify-center w-full px-8 py-4 mt-4 bg-yellow-500 rounded-sm"
              >
                <span class="text-sm font-medium">
                  Add to Cart
                </span>

                <svg class="w-5 h-5 ml-1.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </button>
            </div>
          </a>

          <a
            href="/product/build-your-own-drone"
            class="relative block bg-white"
          >
            <button
              type="button"
              name="wishlist"
              class="absolute p-2 text-white bg-black rounded-full right-4 top-4"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
            </button>

            <img
              loading="lazy"
              alt="Build Your Own Drone"
              class="object-contain w-full h-56 lg:h-72"
              src="https://www.hyperui.dev/photos/toy-1.jpeg"
            />

            <div class="p-6">
              <span class="inline-block px-3 py-1 text-xs font-medium bg-yellow-400">
                New
              </span>

              <h5 class="mt-4 text-lg font-bold">
                Build Your Own Drone
              </h5>

              <p class="mt-2 text-sm font-medium text-gray-600">
                $14.99
              </p>

              <button
                name="add"
                type="button"
                class="flex items-center justify-center w-full px-8 py-4 mt-4 bg-yellow-500 rounded-sm"
              >
                <span class="text-sm font-medium">
                  Add to Cart
                </span>

                <svg class="w-5 h-5 ml-1.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </button>
            </div>
          </a>

          <a
            href="/product/build-your-own-drone"
            class="relative block bg-white"
          >
            <button
              type="button"
              name="wishlist"
              class="absolute p-2 text-white bg-black rounded-full right-4 top-4"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
            </button>

            <img
              loading="lazy"
              alt="Build Your Own Drone"
              class="object-contain w-full h-56 lg:h-72"
              src="https://www.hyperui.dev/photos/toy-1.jpeg"
            />

            <div class="p-6">
              <span class="inline-block px-3 py-1 text-xs font-medium bg-yellow-400">
                New
              </span>

              <h5 class="mt-4 text-lg font-bold">
                Build Your Own Drone
              </h5>

              <p class="mt-2 text-sm font-medium text-gray-600">
                $14.99
              </p>

              <button
                name="add"
                type="button"
                class="flex items-center justify-center w-full px-8 py-4 mt-4 bg-yellow-500 rounded-sm"
              >
                <span class="text-sm font-medium">
                  Add to Cart
                </span>

                <svg class="w-5 h-5 ml-1.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </button>
            </div>
          </a>

          <a
            href="/product/build-your-own-drone"
            class="relative block bg-white"
          >
            <button
              type="button"
              name="wishlist"
              class="absolute p-2 text-white bg-black rounded-full right-4 top-4"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
            </button>

            <img
              loading="lazy"
              alt="Build Your Own Drone"
              class="object-contain w-full h-56 lg:h-72"
              src="https://www.hyperui.dev/photos/toy-1.jpeg"
            />

            <div class="p-6">
              <span class="inline-block px-3 py-1 text-xs font-medium bg-yellow-400">
                New
              </span>

              <h5 class="mt-4 text-lg font-bold">
                Build Your Own Drone
              </h5>

              <p class="mt-2 text-sm font-medium text-gray-600">
                $14.99
              </p>

              <button
                name="add"
                type="button"
                class="flex items-center justify-center w-full px-8 py-4 mt-4 bg-yellow-500 rounded-sm"
              >
                <span class="text-sm font-medium">
                  Add to Cart
                </span>

                <svg class="w-5 h-5 ml-1.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </button>
            </div>
          </a>

          <a
            href="/product/build-your-own-drone"
            class="relative block bg-white"
          >
            <button
              type="button"
              name="wishlist"
              class="absolute p-2 text-white bg-black rounded-full right-4 top-4"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
            </button>

            <img
              loading="lazy"
              alt="Build Your Own Drone"
              class="object-contain w-full h-56 lg:h-72"
              src="https://www.hyperui.dev/photos/toy-1.jpeg"
            />

            <div class="p-6">
              <span class="inline-block px-3 py-1 text-xs font-medium bg-yellow-400">
                New
              </span>

              <h5 class="mt-4 text-lg font-bold">
                Build Your Own Drone
              </h5>

              <p class="mt-2 text-sm font-medium text-gray-600">
                $14.99
              </p>

              <button
                name="add"
                type="button"
                class="flex items-center justify-center w-full px-8 py-4 mt-4 bg-yellow-500 rounded-sm"
              >
                <span class="text-sm font-medium">
                  Add to Cart
                </span>

                <svg class="w-5 h-5 ml-1.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </button>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

{/* <script>
  window.addEventListener('resize', () => {
    const desktopScreen = window.innerWidth < 768

    document.querySelector('details').open = !desktopScreen
  })
</script> */}
  
    </div>
  );
};

export default Home;
