import React from "react";
import dataDb from "../data/berlin.json";
import IdCard from "./IdCard";

const IdCardComponent = ({
  lastName,
  firstName,
  height,
  birth,
  picture,
}) => {
  return (
    <div className="App overflow-x-auto scrollbar-hide relative shadow-md sm:rounded-lg mt-2">
      {dataDb.map((data, i) => {
        return (
          <IdCard
            lastName={data.lastName}
            firstName={data.firstName}
            height={data.height}
            birth={data.birth}
            picture={data.img}
          />
        );
      })}
    </div>
  );
};

export default IdCardComponent;
