import { Form } from "@remix-run/react";
import { useTranslation } from "react-i18next";
import { Film } from "~/api/films/films.server.types";
import FilmCard from "~/components/FilmCard/FilmCard";
import { FilmsProps } from "./Films.types";

function Films(props: FilmsProps) {
  const { t } = useTranslation(["common", "films"]);
  const { films } = props;

  return (
    <div className="2xl-container">
      <div className="p-4">
        <h1 className="text-4xl text-center font-extrabold">
          {t("films:ghibliStudio")}
        </h1>
      </div>
      <Form className="px-10 pt-4" action="#" method="post">
        <div className="flex flex-row">
          <div className="basis-full md:basis-1/3 mr-2">
            <input
              id="searchTitle"
              placeholder={t("films:searchFilmsByTitle")}
              name="searchTitle"
              type="text"
              className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            />
          </div>
          <button
            type="submit"
            className="group relative  justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {t("common:search")}
          </button>
        </div>
      </Form>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-6 p-10">
        {films.map((film: Film) => {
          return <FilmCard film={film} />;
        })}
      </div>
    </div>
  );
}

export default Films;
