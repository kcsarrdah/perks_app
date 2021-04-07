import React, { useState } from 'react';
import Header from '../components/header/commonHeader';



function MyPerks(props) {
    const [perks, setPerks] = useState([
        { date: "date", perkName: "perk1", descriptionLine1: "descriptionlinea", descriptionLine2: "descriptionline", descriptionLine3: "descriptionline", tncUrl: "#" },
        { date: "date", perkName: "perk2", descriptionLine1: "descriptionlineb", descriptionLine2: "descriptionline", descriptionLine3: "descriptionline", tncUrl: "#" },
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

                            <div x-data="dialog()">
                                <button class="btn btn-light" x-spread="trigger">TnC</button>
                                <div class="dialog" x-spread="dialog" x-cloak>
                                    <div class="dialog-content">
                                        <div class="dialog-header">TnC
                                        </div>
                                        <div class="dialog-body">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eius fugiat illum repudiandae commodi inventore magnam unde vero cupiditate molestiae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eius fugiat illum repudiandae commodi inventore magnam unde vero cupiditate molestiae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eius fugiat illum repudiandae commodi inventore magnam unde vero cupiditate molestiae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eius fugiat illum repudiandae commodi inventore magnam unde vero cupiditate molestiae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eius fugiat illum repudiandae commodi inventore magnam unde vero cupiditate molestiae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eius fugiat illum repudiandae commodi inventore magnam unde vero cupiditate molestiae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eius fugiat illum repudiandae commodi inventore magnam unde vero cupiditate molestiae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eius fugiat illum repudiandae commodi inventore magnam unde vero cupiditate molestiae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eius fugiat illum repudiandae commodi inventore magnam unde vero cupiditate molestiae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eius fugiat illum repudiandae commodi inventore magnam unde vero cupiditate molestiae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eius fugiat illum repudiandae commodi inventore magnam unde vero cupiditate molestiae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eius fugiat illum repudiandae commodi inventore magnam unde vero cupiditate molestiae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eius fugiat illum repudiandae commodi inventore magnam unde vero cupiditate molestiae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eius fugiat illum repudiandae commodi inventore magnam unde vero cupiditate molestiae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eius fugiat illum repudiandae commodi inventore magnam unde vero cupiditate molestiae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eius fugiat illum repudiandae commodi inventore magnam unde vero cupiditate molestiae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eius fugiat illum repudiandae
                                        </div>
                                    </div>
                                </div>
                            </div>



                            <div x-data="drawer()">
                                <button class="btn btn-light" x-spread="trigger">FAQs</button>
                                <div class="dialog dialog-right" x-spread="drawer" x-cloak>
                                    <div class="drawer-content">
                                        <div class="dialog-header">FAQS
                                        </div>
                                        <div class="dialog-body">Description
                                        <br/>
                                        <br/>

                                        <div class="divide-y divide-gray-200">

                                            <div x-data="collapse()">
                                                <div x-spread="trigger" class="p-3 flex justify-between items-center" role="button" aria-controls="basicAccordion1" aria-expanded="false">
                                                    Question?<svg class="{ 'rotate-180': open }" class="transition transform h-4 w-4 flex-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                                                </div>
                                                <div x-spread="collapse" x-cloak class="px-3 pb-3" id="basicAccordion1">Answer</div>
                                            </div>

                                            <div x-data="collapse()">
                                                <div x-spread="trigger" class="p-3 flex justify-between items-center" role="button" aria-controls="basicAccordion2" aria-expanded="false">
                                                Question?
                                                    <svg class="{ 'rotate-180': open }" class="transition transform h-4 w-4 flex-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                                                </div>
                                                <div x-spread="collapse" x-cloak class="px-3 pb-3" id="basicAccordion2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                                            </div>

                                            <div x-data="collapse()">
                                                <div x-spread="trigger" class="p-3 flex justify-between items-center" role="button" aria-controls="basicAccordion3" aria-expanded="false">
                                                Question?
                                                    <svg class="{ 'rotate-180': open }" class="transition transform h-4 w-4 flex-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                                                </div>
                                                <div x-spread="collapse" x-cloak class="px-3 pb-3" id="basicAccordion3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                                            </div>

                                        </div>
                                        </div>
                                        

                                        <div class="dialog-footer">
                                        </div>
                                    </div>
                                </div>
                            </div>



                        </div>
                    </div >

                </section >
            </section >
        </div >
    );
}

export default MyPerks;