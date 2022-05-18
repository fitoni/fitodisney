import React from "react";
import ShowThumbnail from "./ShowThumbnail";

const ShowSlider = ({ title, data }) => {
  return (
    <div className="relative flex flex-col space-y-2 my-10 px-8 max-w-[1440px] mx-auto">
      <h2 className="font-semibold">{title}</h2>
      <div className="flex flex-row space-x-3 p-2 -m-2 overflow-y-hidden overflow-x-scroll scrollbar-hide">
        {data.map((item, index) => {
          return <ShowThumbnail key={index} thumbnail={item}></ShowThumbnail>;
        })}
      </div>
    </div>
  );
};

export default ShowSlider;
