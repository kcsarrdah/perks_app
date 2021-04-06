import React, { useState } from "react";
import HeaderCommon from "../components/header/commonHeader";

const MyTransactions = () => {
  //MOCK DATA FOR TABLE
  const [transactions, setTransactions] = useState([
    {
      type: "Perk",
      name: "Uber",
      details: "VOUCHER",
      transactionDetails: "150",
      status: true,
      time: "time",
    },
    {
      type: "Topup",
      details: "For Month of March",
      transactionDetails: 3000,
      status: true,
      time: "time",
    },
    {
      type: "Topup",
      details: "For Month of March",
      transactionDetails: 3000,
      status: false,
      time: "time",
    },
    {
      type: "Perk",
      name: "Amazon",
      details: "VOUCHER",
      transactionDetails: "500",
      status: true,
      time: "time",
      perkImg:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    },
    {
      type: "Perk",
      name: "Amazon",
      details: "VOUCHER",
      transactionDetails: "500",
      status: false,
      time: "time",
      perkImg:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    },
  ]);

  return (
    <div>
      <HeaderCommon />
      <section class="text-gray-600 body-font">
        <div class="container px-2 pt-12 pb-2 mx-auto">
          <div class=" flex flex-col sm:flex-row sm:items-center items-start mx-auto">
            <h1 class="flex-grow sm:pr-16 text-5xl font-medium title-font text-gray-900">
              My Transactions
            </h1>

            <a href="/">
              <button class="flex-shrink-0 text-black bg-white border-gray-500 border-4 py-2 px-8 rounded text-lg mt-10 sm:mt-0">
                Back to Dashboard
              </button>
            </a>
          </div>
          <div class="h-1 bg-gray-500 rounded m-1"></div>

          <div class="relative mt-6 flex flex-col sm:flex-row sm:items-center mx-auto">
            <span class="absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                class="w-5 h-5 text-gray-400"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </span>

            <input
              type="text"
              class="py-3 w-full mr-5 pl-10 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              placeholder="Search"
            />
          </div>

          <div class="flex flex-col py-4">
            <div class="my-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  <table class="min-w-full divide-y divide-gray-200">
                    <thead class="bg-gray-200">
                      <tr>
                        <th
                          scope="col"
                          class="px-6 py-4 font-extrabold text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Perk Name/Credit
                        </th>
                        <th
                          scope="col"
                          class="px-6 py-4 font-extrabold text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          transaction Details
                        </th>
                        <th
                          scope="col"
                          class="px-6 py-4 font-extrabold text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Status
                        </th>
                        <th
                          scope="col"
                          class="px-6 py-4 font-extrabold text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Time
                        </th>
                      </tr>
                    </thead>

                    <tbody class="bg-white divide-y divide-gray-200">
                      {transactions.map((transaction) => {
                        return (
                          <tr>
                            <td class="px-6 py-5 whitespace-nowrap">
                              <div class="flex items-center">
                                <div class="flex-shrink-0 h-10 w-10">
                                  <img
                                    class="h-10 w-10 rounded-full"
                                    src={
                                      transaction.type === "Perk"
                                        ? transaction.perkImg
                                          ? transaction.perkImg
                                          : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEKWsrQjrLklNeCqRe4FXVCTLKzyQaXWqwWUDyFvq8e1YXaPFu-thyqOzkiwXLshME9H0&usqp=CAU"
                                        : "https://png.pngtree.com/png-vector/20190728/ourlarge/pngtree-note-notebook-cards-credit--blue-dotted-line-line-icon-png-image_1618206.jpg"
                                    }
                                    alt=""
                                  />
                                </div>

                                <div class="ml-4">
                                  <div class="text-sm font-medium text-gray-900">
                                    {transaction.type === "Perk"
                                      ? transaction.name
                                      : "CREDIT FROM ADMIN"}
                                  </div>

                                  <div class="text-sm text-gray-500">
                                    {transaction.details}
                                  </div>
                                </div>
                              </div>
                            </td>

                            <td class="px-6 py-5 whitespace-nowrap">
                              <div class="text-sm text-gray-900">
                                {transaction.transactionDetails}
                              </div>

                              <div class="text-sm text-gray-500">
                                {transaction.status
                                  ? transaction.type === "Perk"
                                    ? "Steps Sent on Mail"
                                    : "Added To Perkeasy Account"
                                  : ""}
                              </div>
                            </td>

                            <td class="px-6 py-5 whitespace-nowrap">
                              {transaction.status ? (
                                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                  {transaction.type === "Perk"
                                    ? "Active"
                                    : "Success"}
                                </span>
                              ) : (
                                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                                  Failed
                                </span>
                              )}
                            </td>

                            <td class="px-6 py-5 whitespace-nowrap text-sm text-gray-500">
                              {transaction.time}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyTransactions;
