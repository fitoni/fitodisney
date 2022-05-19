import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const ShowThumbnail = ({ thumbnail }) => {
  const router = useRouter();
  const TMDB_HOST_URL = "https://image.tmdb.org/t/p/original/";

  return (
    <div
      className="relative flex min-w-[170px] min-h-[270px] md:min-w-[220px] md:min-h-[320px] rounded-lg overflow-hidden shadow-xl cursor-pointer border-[3px] border-[#f9f9f9] border-opacity-10 hover:border-opacity-80 hover:shadow-2xl transform hover:scale-105 transition duration-300"
      onClick={() => router.push(`/show/${thumbnail.id}`)}
    >
      <Image
        src={`${TMDB_HOST_URL}${
          thumbnail.poster_path || thumbnail.backdrop_path
        }`}
        alt=""
        layout="fill"
        objectFit="cover"
        className="rounded-lg"
      ></Image>
    </div>
  );
};

export default ShowThumbnail;
