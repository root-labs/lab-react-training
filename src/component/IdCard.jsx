import React from "react";
const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {
  return (
    <>
      <div class="p-4 mb-5 text-center bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        
        <div class="flex p-4 leading-normal ml-5">
        <img className="w-[10rem] mr-5" src={picture} alt="" srcset="" />
         <div>
         <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {" "}
            <strong class="font-semibold text-gray-900 dark:text-white">
              {" "}
              First Name:
            </strong>{" "}
            {firstName}{" "}
          </p>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {" "}
            <strong class="font-semibold text-gray-900 dark:text-white">
              {" "}
              Last Name:
            </strong>{" "}
            {lastName}{" "}
          </p>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {" "}
            <strong class="font-semibold text-gray-900 dark:text-white">
              {" "}
              Gender:
            </strong>{" "}
            {gender}{" "}
          </p>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {" "}
            <strong class="font-semibold text-gray-900 dark:text-white">
              {" "}
              Height:
            </strong>{" "}
            {height}{" "}
          </p>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {" "}
            <strong class="font-semibold text-gray-900 dark:text-white">
              {" "}
              Birth:
            </strong>{" "}
            {birth}{" "}
          </p>
         </div>
        </div>
      </div>
    </>
  );
};

export default IdCard;
