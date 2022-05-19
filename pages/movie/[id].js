/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

import Header from "../../components/Header";
import { getSession, useSession } from "next-auth/react";
import SlidingHero from "./../../components/SlidingHero";

import { PlusIcon, XIcon } from "@heroicons/react/solid";
import ReactPlayer from "react-player";

const Movie = ({ result }) => {
  const { data: session } = useSession();
  const router = useRouter();
  const [showPlayer, setShowPlayer] = useState(false);

  const TMDB_HOST_URL = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    if (!session) {
      router.push("/");
    }
  }, []);

  const trailerVideoIndex = result.videos.results.findIndex(
    (item) => item.type === "Trailer"
  );

  return (
    <div>
      <Head>
        <title>{result?.title || result?.original_title}</title>
        <link rel="icon" href="/favicon.ico"></link>
      </Head>

      <Header></Header>
      {!session ? (
        <SlidingHero></SlidingHero>
      ) : (
        <section className="relative z-50">
          <div className="relative min-h-[calc(100vh-72px)]">
            <Image
              priority={true}
              src={
                result.backdrop_path
                  ? `${TMDB_HOST_URL}${result.backdrop_path}`
                  : `${TMDB_HOST_URL}${result.poster_path}`
              }
              alt=""
              layout="fill"
              objectFit="cover"
            ></Image>
          </div>

          <div className="absolute inset-y-28 md:inset-y-auto md:bottom-10 inset-x-4 md:inset-x-12 space-y-6 z-50">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              {result.title || result.original_title}
            </h1>
            <div className="flex items-center space-x-3 md:space-x-5">
              <button className="text-xs md:text-base bg-[#f9f9f9] text-black flex items-center justify-center py-2.5 px-6 rounded hover:bg-[#c6c6c6]">
                <img
                  src="/images/play-icon-black.svg"
                  alt=""
                  className="h-6 md:h-8"
                ></img>
                <span className="uppercase font-medium tracking-wide">
                  Putar
                </span>
              </button>
              <button
                className="text-xs md:text-base bg-black/30 text-[#f9f9f9] border border-[#f9f9f9] flex items-center justify-center py-2.5 px-6 rounded hover:bg-[#c6c6c6]"
                onClick={() => setShowPlayer(true)}
              >
                <img
                  src="/images/play-icon-white.svg"
                  alt=""
                  className="h-6 md:h-8"
                ></img>
                <span className="uppercase font-medium tracking-wide">
                  Trailer
                </span>
              </button>

              <div className="rounded-full border-2 border-white flex items-center justify-center w-11 h-11 cursor-pointer bg-black/60">
                <PlusIcon className="h-6"></PlusIcon>
              </div>

              <div className="rounded-full border-2 border-white flex items-center justify-center w-11 h-11 cursor-pointer bg-black/60">
                <img src="/images/group-icon.svg" alt=""></img>
              </div>
            </div>

            <p className="text-xs md:text-sm">
              {result.release_date || result.first_air_date} &#8226;{" "}
              {Math.floor(result.runtime / 60)}jam {result.runtime % 60}menit
              &#8226; {result.genres.map((item) => item.name + " ")}{" "}
            </p>

            <h4 className="text-sm md:text-lg max-w-4xl">{result.overview}</h4>
          </div>

          {/* background overlay when playing trailer */}
          {showPlayer && (
            <div className="absolute inset-0 bg-black/50 h-full w-full z-50"></div>
          )}

          {/* trailer video popup */}
          <div
            className={`absolute top-3 inset-x-[7%] md:inset-x-[13%] rounded overflow-hidden transition duration-1000 ${
              showPlayer ? "opacity-100 z-50" : "opacity-0"
            }`}
          >
            {/* popup header */}
            <div className="flex items-center justify-between bg-black text-[#f9f9f9] p-3.5">
              <span
                className={`font-semibold ${
                  trailerVideoIndex === -1 ? "text-red-400" : null
                }`}
              >
                {trailerVideoIndex >= 0
                  ? "Memainkan Trailer"
                  : "TIDAK ADA TRAILER untuk serial ini"}
              </span>
              <div
                className="cursor-pointer w-8 h-8 flex items-center justify-center rounded-lg opacity-50 hover:opacity-75 hover:bg-[#0f0f0f]"
                onClick={() => setShowPlayer(false)}
              >
                <XIcon className="h-5"></XIcon>
              </div>
            </div>

            {/* popup body */}
            {trailerVideoIndex >= 0 && (
              <div className="relative pt-[56.25%]">
                <ReactPlayer
                  url={`https://www.youtube.com/watch?v=${result?.videos?.results[trailerVideoIndex]?.key}`}
                  width="100%"
                  height="100%"
                  style={{ position: "absolute", top: 0, left: 0 }}
                  controls
                  playing={showPlayer}
                  muted={false}
                ></ReactPlayer>
              </div>
            )}
          </div>
        </section>
      )}
    </div>
  );
};

export default Movie;

export async function getServerSideProps(context) {
  const session = await getSession(context);
  const { id } = context.query;

  const uri = `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.TMDB_API_KEY}&language=en-US&append_to_response=videos`;

  const request = await fetch(uri).then((response) => response.json());

  return {
    props: {
      session,
      result: request,
    },
  };
}
