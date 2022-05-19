import React from "react";
import Head from "next/head";
import Image from "next/image";

const Landing = () => {
  return (
    <section>
      <Head>
        <title>FITO+ Hotstar | Login</title>
        <meta
          name="description"
          content="aplikasi berbasis Next.js dan TailwindCSS "
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="relative min-h-[calc(100vh-72px)] ">
        <Image
          priority={true}
          src="/images/hero-background.jpg"
          alt=""
          layout="fill"
          objectFit="cover"
        ></Image>
      </div>
      <div className="flex items-center justify-center">
        <div className="absolute flex flex-col space-y-3 top-1/4 w-full items-center justify-center max-w-screen-sm mx-auto p-8 -mt-16">
          <Image
            src="/images/cta-logo-one.svg"
            alt=""
            width="600"
            height="150"
            objectFit="contain"
          ></Image>
          <button className="bg-blue-600 uppercase text-xl tracking-wide font-extrabold py-4 px-6 rounded-md hover:bg-blue-400 hover:text-blue-800">
            beli 3 paket diatas
          </button>
          <p className="text-sm text-center">
            Dapatkan akses premium ke film Raya and the last Dragon dengan cara
            berlangganan Fito+ Hotstar sekarang juga. Terhitung sejak tanggal 1
            April 2022, biaya langganan Fito+ dan paket Disney akan bertambah
            sebesar Rp. 9,500,-
          </p>
          <Image
            src="/images/cta-logo-two.png"
            alt=""
            width={600}
            height={70}
            objectFit="contain"
          ></Image>
        </div>
      </div>
    </section>
  );
};

export default Landing;
