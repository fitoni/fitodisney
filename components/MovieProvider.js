import Image from "next/image";
import React from "react";

const MovieProvider = () => {
  return (
    <section className="flex flex-col md:flex-row justify-center items-center mt-10 gap-6 px-8 max-w-[1400px] mx-auto">
      <div className="provider group">
        <Image
          src="/images/disnep.png"
          alt=""
          layout="fill"
          objectFit="cover"
        ></Image>
        <video
          className="hidden group-hover:inline rounded-lg object-cover"
          autoPlay
          muted
          playsInline
          loop
        >
          <source src="/videos/disney.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="provider group">
        <Image
          src="/images/pixar.png"
          alt=""
          layout="fill"
          objectFit="cover"
        ></Image>
        <video
          className="hidden group-hover:inline rounded-lg object-cover"
          autoPlay
          muted
          playsInline
          loop
        >
          <source src="/videos/pixar.mp4" type="video/mp4"></source>
        </video>
      </div>

      <div className="provider group">
        <Image
          src="/images/marvel.png"
          alt=""
          layout="fill"
          objectFit="cover"
        ></Image>
        <video
          className="hidden group-hover:inline rounded-lg object-cover"
          autoPlay
          muted
          playsInline
          loop
        >
          <source src="/videos/marvel.mp4" type="video/mp4"></source>
        </video>
      </div>

      <div className="provider group">
        <Image
          src="/images/starwars.png"
          alt=""
          layout="fill"
          objectFit="cover"
        ></Image>
        <video
          className="hidden group-hover:inline rounded-lg object-cover"
          autoPlay
          muted
          playsInline
          loop
        >
          <source src="/videos/star-wars.mp4" type="video/mp4"></source>
        </video>
      </div>
    </section>
  );
};

export default MovieProvider;
