import { Dispatch, FC, ReactElement, SetStateAction } from "react";
import { IMovie } from "../../Types";

interface MovieDetailProps {
  movie: IMovie;
  setWatchedMovie: Dispatch<SetStateAction<IMovie[]>>;
  setSelectMovie?: React.Dispatch<React.SetStateAction<IMovie | null>>;
}

export const MovieDetail: FC<MovieDetailProps> = ({
  setSelectMovie,
  setWatchedMovie,
  movie,
}): ReactElement => {
  const handleAddToList = (): void => {
    setWatchedMovie((s) => [...s, movie]);
  };

  return (
    <div className="h-fit relative ">
      <div className="flex  items-center justify-evenly bg-gray-700 -mx-4 p-4">
        <img className="h-40" src={movie.Poster} alt={movie.Title} />
        <div className="flex flex-col gap-6">
          <h2>{movie.Title}</h2>
          <p>16 Jul 2010 - 148 min</p>
          <p>{movie.Rating} IMDB Rating</p>
        </div>
        <button
          onClick={() => setSelectMovie && setSelectMovie(null)}
          className="absolute top-2 right-2"
        >
          X
        </button>
      </div>
      <div className="p-6 mt-4">{movie.Description}</div>
      <button
        className="text-xl ml-20 mb-3 rounded-full bg-gray-700 p-1 px-4  text-slate-50"
        onClick={handleAddToList}
      >
        Add to WatchList
      </button>
    </div>
  );
};
