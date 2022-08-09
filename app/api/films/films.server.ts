import apiEndpoints from "~/api/apiEndpoints.server";
import { Film } from "~/api/films/films.server.types";

const getFilms = async (): Promise<Film[]> => {
  const res = await fetch(apiEndpoints.getFilms);
  return res.json();
};

export default {
  getFilms,
};
