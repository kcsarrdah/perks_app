import React from 'react'

const EmployeeProfile = () => {
  return (

    //Main div
    <div>

      {/* header */}
      <div class=" flex flex-col sm:flex-row p-4 sm:items-center items-start mx-auto">
        <h1 class="flex-grow sm:pr-16 text-5xl font-medium title-font text-gray-900">
          Perks Shop
            </h1>

        <a href="/">
          <button class="flex-shrink-0 text-black bg-white border-gray-500 border-4 py-2 px-8 rounded text-lg mt-10 sm:mt-0">
            Log out
              </button>
        </a>
      </div><div class="h-1 bg-gray-500 rounded m-1"></div>

<div className="container">
      {/* below header */}
      <div id="below header" className="flex flex-col sm:flex-row p-4 sm:items-center items-start mx-auto">

        {/* profile */}
        <div class="max-w-md h-auto w-auto p-6 sm:flex sm:space-x-6 bg-gray-200 text-gray-800">
          <div class="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
            <img src="https://source.unsplash.com/100x100/?portrait" alt="" class="object-cover object-center w-full h-full rounded" />
          </div>
          <div class="flex flex-col space-y-4">
            <div>
              <h2 class="text-2xl font-semibold">Leroy Jenkins</h2>
              <span class="text-sm text-gray-600">General manager</span>
            </div>
            <div class="space-y-1">
              <span class="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-label="Email address" class="w-4 h-4">
                  <path fill="currentColor" d="M274.6,25.623a32.006,32.006,0,0,0-37.2,0L16,183.766V496H496V183.766ZM464,402.693,339.97,322.96,464,226.492ZM256,51.662,454.429,193.4,311.434,304.615,256,268.979l-55.434,35.636L57.571,193.4ZM48,226.492,172.03,322.96,48,402.693ZM464,464H48V440.735L256,307.021,464,440.735Z"></path>
                </svg>
                <span class="text-gray-600">leroy.jenkins@company.com</span>
              </span>
              <span class="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-label="Phonenumber" class="w-4 h-4">
                  <path fill="currentColor" d="M449.366,89.648l-.685-.428L362.088,46.559,268.625,171.176l43,57.337a88.529,88.529,0,0,1-83.115,83.114l-57.336-43L46.558,362.088l42.306,85.869.356.725.429.684a25.085,25.085,0,0,0,21.393,11.857h22.344A327.836,327.836,0,0,0,461.222,133.386V111.041A25.084,25.084,0,0,0,449.366,89.648Zm-20.144,43.738c0,163.125-132.712,295.837-295.836,295.837h-18.08L87,371.76l84.18-63.135,46.867,35.149h5.333a120.535,120.535,0,0,0,120.4-120.4v-5.333l-35.149-46.866L371.759,87l57.463,28.311Z"></path>
                </svg>
                <span class="text-gray-600">+25 381 77 983</span>
              </span>
            </div>
          </div>
        </div>

        {/* points card */}
        <div class="card mx-8 px-8 text-center bg-gray-300 py-8">
          <div class="card-header h-1/2 w-auto">
            <div class="font-semibold text-gray-90 p-2">Point balance</div>
          </div>
          <div class="flex items-center justify-center p-3 space-x-3 border-t-2">Balance</div>
        </div>

        {/* option buttons */}
        <div class="list card ml-auto justify-self-end px-12 float-right text-start py-8">
          <a href="/myPerks"><button class="btn px-10 mb-4 btn-outline-secondary">My Perks</button></a>
          <a href="/myTransaction" class=""><button class="btn btn-outline-secondary">Purchase History</button></a>
        </div>


      </div>


      {/* above perks display */}
      <div id="search bar and filters tab" className="flex flex-col sm:flex-row p-4 sm:items-center items-start mx-auto">


        <div x-data="dropdown()">
          <button className="btn btn-secondary p-4" id="open-color-menu-divider" x-spread="trigger">
            Categories
          </button>
          <div class="dropdown-list" id="color-menu-divider" x-spread="dropdown" x-cloak>
            <p class="dropdown-header">Category 1</p>
            <a href="#" class="dropdown-item">Option</a>
            <div class="dropdown-divide"></div>
            <p class="dropdown-header">Category 2</p>
            <a href="#" class="dropdown-item">Option</a>
            <a href="#" class="dropdown-item">Option</a>
            <div class="dropdown-divide"></div>
            <p class="dropdown-header">Category 3</p>
            <a href="#" class="dropdown-item">Option</a>
          </div>
        </div>


        {/* search bar */}
        <input
          type="text"
          class="ml-auto justify-self-end py-3 m-4 w-1/3 pl-8 text-gray-700 bg-white border border-gray-600 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          placeholder="Search Perks"
        />

      </div>

      <div class="h-1 bg-gray-500 rounded m-1"></div>

      <section class="py-4 bg-white-100 text-gray-800">


        {/* running Out fast column */}
        {/* <section class="text-gray-600 body-font">
          <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-wrap -m-4">
              <div class="p-4 lg:w-1/3">
                <div class="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                  <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Running Out Fast</h1>
                  <p class="leading-relaxed mb-3">Everyone seems to have an eye on these</p>
                  <a class="p-2 text-indigo-500 inline-flex items-center">Perk1
                  <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                  <br />
                  <a class=" p-2 text-indigo-500 inline-flex items-center">Perk2
                  <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                  <br />
                  <a class="p-2 text-indigo-500 inline-flex items-center">Perk3
                  <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </section> */}




        <div class="flex flex-col items-start justify-center p-4 mx-auto sm:p-10">
          <div class="flex flex-row flex-wrap justify-start mt-4">


            <a id="card" href="">
              <div class="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 bg-gray-800 text-gray-100">
                <img alt="" class="self-center w-24 h-24 -mt-12 bg-center bg-cover rounded-full" src="https://source.unsplash.com/100x100/?portrait" />
                <div class="flex-1 my-4">
                  <p class="text-xl font-semibold leading-snug">Perk name</p>
                  <p>Description</p>
                </div>
                <div class="flex items-center justify-end p-3 space-x-3 border-t-2">
                  <p>Points</p>
                </div>
              </div>
            </a>
            <a id="card" href="">
              <div class="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 bg-gray-800 text-gray-100">
                <img alt="" class="self-center w-24 h-24 -mt-12 bg-center bg-cover rounded-full" src="https://source.unsplash.com/100x100/?portrait" />
                <div class="flex-1 my-4">
                  <p class="text-xl font-semibold leading-snug">Perk name</p>
                  <p>Description</p>
                </div>
                <div class="flex items-center justify-end p-3 space-x-3 border-t-2">
                  <p>Points</p>
                </div>
              </div>
            </a>
            <a id="card" href="">
              <div class="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 bg-gray-800 text-gray-100">
                <img alt="" class="self-center w-24 h-24 -mt-12 bg-center bg-cover rounded-full" src="https://source.unsplash.com/100x100/?portrait" />
                <div class="flex-1 my-4">
                  <p class="text-xl font-semibold leading-snug">Perk name</p>
                  <p>Description</p>
                </div>
                <div class="flex items-center justify-end p-3 space-x-3 border-t-2">
                  <p>Points</p>
                </div>
              </div>
            </a>
            <a id="card" href="">
              <div class="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 bg-gray-800 text-gray-100">
                <img alt="" class="self-center w-24 h-24 -mt-12 bg-center bg-cover rounded-full" src="https://source.unsplash.com/100x100/?portrait" />
                <div class="flex-1 my-4">
                  <p class="text-xl font-semibold leading-snug">Perk name</p>
                  <p>Description</p>
                </div>
                <div class="flex items-center justify-end p-3 space-x-3 border-t-2">
                  <p>Points</p>
                </div>
              </div>
            </a>
            <a id="card" href="">
              <div class="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 bg-gray-800 text-gray-100">
                <img alt="" class="self-center w-24 h-24 -mt-12 bg-center bg-cover rounded-full" src="https://source.unsplash.com/100x100/?portrait" />
                <div class="flex-1 my-4">
                  <p class="text-xl font-semibold leading-snug">Perk name</p>
                  <p>Description</p>
                </div>
                <div class="flex items-center justify-end p-3 space-x-3 border-t-2">
                  <p>Points</p>
                </div>
              </div>
            </a>



          </div>
        </div>
      </section>

    </div>
    </div>
  );
}

export default EmployeeProfile;

