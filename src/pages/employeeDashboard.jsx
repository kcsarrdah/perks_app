import React from 'react'

const EmployeeProfile = () => {
  return (

    //Main div
    <div>

      {/* below header */}
      <div id="below header" className="container flex p-8">

        {/* profile */}
        <div class="max-w-md h-auto w-auto p-8 sm:flex sm:space-x-6 bg-gray-200 text-gray-800">
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
        <div class="card bg-gray-300 py-8">
          <div class="card-header h-1/2 w-auto">
            <div class="font-semibold text-gray-900">Point balance</div>
          </div>
          <div class="card-body">Balance</div>
        </div>



        <div class="list py-4">
          <a href="#" class="list-item">My Perks</a>
          <a href="#" class="list-item">Purchase History</a>
        </div>


      </div>

      <section class="py-6 bg-gray-100 text-gray-800">
        <a href="#">
          <div class="flex flex-col items-start p-4 mx-auto sm:p-10">
            <div class="flex flex-row flex-wrap mt-8">
              <div class="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 bg-gray-800 text-gray-100">
                <img alt="" class="self-center w-24 h-24 -mt-12 bg-center bg-cover rounded-full" src="https://source.unsplash.com/100x100/?portrait" />
                <div class="flex-1 my-4">
                  <p class="text-xl font-semibold leading-snug">Perk Name</p>
                  <p>Description</p>
                </div>
                <div class="flex items-center justify-end p-3 space-x-3 border-t-2">
                  <p>Points</p>
                </div>
              </div>
            </div>
          </div>
        </a>
        <a href="#">
          <div class="flex flex-col items-start p-4 mx-auto sm:p-10">
            <div class="flex flex-row flex-wrap mt-8">
              <div class="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 bg-gray-800 text-gray-100">
                <img alt="" class="self-center w-24 h-24 -mt-12 bg-center bg-cover rounded-full" src="https://source.unsplash.com/100x100/?portrait" />
                <div class="flex-1 my-4">
                  <p class="text-xl font-semibold leading-snug">Perk Name</p>
                  <p>Description</p>
                </div>
                <div class="flex items-center justify-end p-3 space-x-3 border-t-2">
                  <p>Points</p>
                </div>
              </div>
            </div>
          </div>
        </a>
        <a href="#">
          <div class="flex flex-col items-start p-4 mx-auto sm:p-10">
            <div class="flex flex-row flex-wrap mt-8">
              <div class="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 bg-gray-800 text-gray-100">
                <img alt="" class="self-center w-24 h-24 -mt-12 bg-center bg-cover rounded-full" src="https://source.unsplash.com/100x100/?portrait" />
                <div class="flex-1 my-4">
                  <p class="text-xl font-semibold leading-snug">Perk Name</p>
                  <p>Description</p>
                </div>
                <div class="flex items-center justify-end p-3 space-x-3 border-t-2">
                  <p>Points</p>
                </div>
              </div>
            </div>
          </div>
        </a>
        <a href="#">
          <div class="flex flex-col items-start p-4 mx-auto sm:p-10">
            <div class="flex flex-row flex-wrap mt-8">
              <div class="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 bg-gray-800 text-gray-100">
                <img alt="" class="self-center w-24 h-24 -mt-12 bg-center bg-cover rounded-full" src="https://source.unsplash.com/100x100/?portrait" />
                <div class="flex-1 my-4">
                  <p class="text-xl font-semibold leading-snug">Perk Name</p>
                  <p>Description</p>
                </div>
                <div class="flex items-center justify-end p-3 space-x-3 border-t-2">
                  <p>Points</p>
                </div>
              </div>
            </div>
          </div>
        </a>

      </section>

      <a href="/myPerks"><button>Claimed Perks</button></a>
    </div>
  );
}

export default EmployeeProfile;

