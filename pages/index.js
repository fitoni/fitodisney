import { useSession, getSession } from "next-auth/react";
import Head from "next/head";
import Header from "../components/Header";
import Landing from "../components/landing";
import SlidingHero from "../components/SlidingHero";
import MovieProvider from "../components/MovieProvider";
import MovieSlider from "../components/MovieSlider";
import ShowSlider from "../components/ShowSlider";

export default function Index({
  popularMovies,
  topRatedMovies,
  popularShows,
  topRatedShows,
}) {
  const { data: session } = useSession();

  return (
    <div>
      <Head>
        <title>FITO+ Hotstar</title>
        <meta
          name="description"
          content="aplikasi berbasis Next.js dan TailwindCSS "
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {!session ? (
        <>
          <Header></Header>
          <Landing></Landing>
        </>
      ) : (
        <main className="relative after:absolute after:inset-0 min-h-screen after:bg-home after:bg-center after:bg-cover after:bg-no-repeat after:bg-fixed after:-z-[2]">
          <Header></Header>
          <SlidingHero></SlidingHero>
          <MovieProvider></MovieProvider>
          <MovieSlider
            title="Film yang Sedang Populer"
            data={popularMovies}
          ></MovieSlider>

          <MovieSlider
            title="Film Deretan Teratas"
            data={topRatedMovies}
          ></MovieSlider>

          <ShowSlider
            title="Serial TV yang Sedang Populer"
            data={popularShows}
          ></ShowSlider>

          <ShowSlider
            title="Serial TV Deretan Teratas"
            data={topRatedShows}
          ></ShowSlider>
        </main>
      )}
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession();

  const [
    popularMoviesResource,
    topRatedMoviesResource,
    popularShowsResource,
    topRatedShowsResource,
  ] = await Promise.all([
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=1`
    ),
    fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=1`
    ),
    fetch(
      `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=1`
    ),
    fetch(
      `https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=1`
    ),
  ]);

  const [popularMovies, topRatedMovies, popularShows, topRatedShows] =
    await Promise.all([
      popularMoviesResource.json(),
      topRatedMoviesResource.json(),
      popularShowsResource.json(),
      topRatedShowsResource.json(),
    ]);

  return {
    props: {
      session,
      popularMovies: popularMovies.results,
      topRatedMovies: topRatedMovies.results,
      popularShows: popularShows.results,
      topRatedShows: topRatedShows.results,
    },
  };
}
