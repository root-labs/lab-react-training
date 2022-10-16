import React from "react";

const IdCard = (props) => {
  const date = props.birth;
  console.log(date)
  return (
    <>
      <div className="p-4 mb-5 text-center bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div className="flex p-4 leading-normal ml-5">
          <img
            className="w-[10rem] mr-5"
            src={props.picture}
            alt=""
          />
          <div>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              <strong className="font-semibold text-gray-900 dark:text-white">
                First Name:
              </strong>
              firstName = {props.firstName}
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {" "}
              <strong className="font-semibold text-gray-900 dark:text-white">
                {" "}
                Last Name:
              </strong>
              lastName = {props.lastName}
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              <strong className="font-semibold text-gray-900 dark:text-white">
                Gender:
              </strong>
              gender = {props.gender}
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              <strong className="font-semibold text-gray-900 dark:text-white">
                Height:
              </strong>
              height = {props.height}
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              <strong className="font-semibold text-gray-900 dark:text-white">
                Birth:
              </strong>
              birth = {date}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default IdCard;
