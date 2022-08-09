import { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import filmsServer from "~/api/films/films.server";
import { Film } from "~/api/films/films.server.types";
import Films from "~/views/Films";

export const loader: LoaderFunction = async (): Promise<Film[]> => {
  const films = await filmsServer.getFilms();
  return films;
};

export default function FilmIndex() {
  const films = useLoaderData<Film[]>();

  return <Films films={films} />;
}
