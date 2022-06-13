import React from "react";
import { ArrowLeftIcon } from "@heroicons/react/solid";
import Router, { useRouter } from "next/router";

const play = () => {
  return (
    <div className="flex w-[100vw] h-[100vh] relative">
      <button
        className="flex flex-row items-center justify-center px-2 py-3 z-[3] absolute top-3 left-3 "
        onClick={() => {
          Router.push("/");
        }}
      >
        <ArrowLeftIcon className="h-5 mr-2"></ArrowLeftIcon>
        <span className="text-sm">Kembali ke Beranda</span>
      </button>

      <div className="absolute top-0 left-0 bottom-0 right-0 w-[100%] h-[100%]">
        <video
          className="w-[100%] h-[100%]"
          controls
          autoPlay
          progress
          muted={false}
        >
          <source
            src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            type="video/mp4"
          ></source>
        </video>
      </div>
    </div>
  );
};

export default play;
