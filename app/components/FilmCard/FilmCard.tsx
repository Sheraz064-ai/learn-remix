import { FilmCardProps } from "./FilmCard.types";

function FilmCard(props: FilmCardProps) {
  const { film } = props;
  return (
    <div className="group relative">
      <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
        <img
          src={film.image}
          alt={film.title}
          className="w-full h-full object-center object-cover lg:w-full lg:h-full"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div className="w-full">
          <h3 className="text-sm text-gray-700">
            {/* <a href="#"> */}
            <span aria-hidden="true" className="absolute inset-0" />
            {film.title}
            {/* </a> */}
          </h3>
          <p className="mt-1 text-sm text-gray-500 truncate text-ellipsis overflow-hidden">
            {film.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default FilmCard;
