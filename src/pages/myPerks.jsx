import React, { useState } from 'react';
import Header from '../components/header/commonHeader';



function MyPerks(props) {
    const [perks, setPerks] = useState([
        { date: "date", perkName: "perk1", descriptionLine1: "descriptionlinea", descriptionLine2: "descriptionline", descriptionLine3: "descriptionline", tncUrl: "#" },
        { date: "date", perkName: "perk2", descriptionLine1: "descriptionlineb", descriptionLine2: "descriptionline", descriptionLine3: "descriptionline", tncUrl: "#" },
        { date: "date", perkName: "perk3", descriptionLine1: "descriptionlinec", descriptionLine2: "descriptionline", descriptionLine3: "descriptionline", tncUrl: "#" },
        { date: "date", perkName: "perk4", descriptionLine1: "descriptionlined", descriptionLine2: "descriptionline", descriptionLine3: "descriptionline", tncUrl: "#" }])
    return (
        <div>
            <Header />
            <section class="text-gray-600 body-font overflow-hidden">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-col text-center w-full mb-20">
                        <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">My Perks</h1>
                        <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">All the perks you claimed can be viewed here</p>
                    </div>

                    <div class="flex flex-wrap -m-4">

                        {perks.map((perk, index) => {
                            return (
                                <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
                                    <div class="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
                                        <h2 class="text-sm tracking-widest title-font mb-1 font-medium">{perk.date}</h2>
                                        <h1 class="text-5xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none">{perk.perkName}</h1>
                                        <p class="flex items-center text-gray-600 mb-2">
                                            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                                    <path d="M20 6L9 17l-5-5"></path>
                                                </svg>
                                            </span>{perk.descriptionLine1}
                                        </p>
                                        <p class="flex items-center text-gray-600 mb-2">
                                            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                                    <path d="M20 6L9 17l-5-5"></path>
                                                </svg>
                                            </span>{perk.descriptionLine2}
                                        </p>
                                        <p class="flex items-center text-gray-600 mb-6">
                                            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                                    <path d="M20 6L9 17l-5-5"></path>
                                                </svg>
                                            </span>{perk.descriptionLine3}
                                        </p>
                                        <button class="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">redeem
                                     <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                                            </svg>
                                        </button>
                                        <a href={perk.tncUrl}><p class="text-xs text-gray-500 mt-3">Terms and conditions</p></a>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <section class="text-gray-600 body-font">
                    <div class="container px-5 py-24 mx-auto flex items-center md:flex-row flex-col">
                        <div class="flex md:ml-auto md:mr-0 mx-auto items-center flex-shrink-0 space-x-4">
                            <button class="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
                                <span class="title-font font-medium">Terms and conditions</span>
                            </button>
                            <button class="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
                                <span class="title-font font-medium">Faq</span>
                            </button>
                        </div>
                    </div>
                </section>
            </section>
        </div>
    );
}

export default MyPerks;