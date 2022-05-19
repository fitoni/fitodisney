/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import {
  HomeIcon,
  SearchIcon,
  PlusIcon,
  StarIcon,
} from "@heroicons/react/solid";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Link from "next/link";

const Header = () => {
  const { data: session } = useSession();
  const router = useRouter();

  return (
    <header className="flex items-center sticky top-0 z-[1000] h-[72px] px-10 md:px-12 bg-[#040714]">
      {/* logo */}
      <Image
        className="cursor-pointer"
        src="/images/logo.svg"
        alt=""
        width={80}
        height={80}
        onClick={() => router.push("/")}
      ></Image>

      {/* menu links */}
      {session && (
        <div className="hidden ml-10 md:flex items-center space-x-6">
          <Link href="/">
            <a className=" header-link group">
              <HomeIcon className="h-4"></HomeIcon>
              <span className="span">beranda</span>
            </a>
          </Link>
          <a className="header-link group">
            <SearchIcon className="h-4" />
            <span className="span">cari</span>
          </a>
          <a className="header-link group">
            <PlusIcon className="h-4" />
            <span className="span">daftar tonton</span>
          </a>
          <a className="header-link group">
            <StarIcon className="h-4" />
            <span className="span">Originals</span>
          </a>
          <a className="header-link group">
            <Image
              src="/images/movie-icon.svg"
              width={20}
              height={20}
              alt=""
              className="h-5"
            />
            <span className="span">Film</span>
          </a>
          <a className="header-link group">
            <Image
              src="/images/series-icon.svg"
              width={20}
              height={20}
              alt=""
              className="h-5"
            />
            <span className="span">Serial TV</span>
          </a>
        </div>
      )}

      {/* login button */}
      {!session ? (
        <button
          className="ml-auto uppercase border rounded px-4 py-1 font-medium tracking-wide hover:bg-white hover:text-black transition duration-500"
          onClick={signIn}
        >
          login
        </button>
      ) : (
        <img
          src={session.user.image}
          alt=""
          referrerPolicy="no-referrer"
          className="ml-auto h-10 w-10 rounded-full object-cover cursor-pointer"
          onClick={signOut}
        ></img>
      )}
    </header>
  );
};

export default Header;
