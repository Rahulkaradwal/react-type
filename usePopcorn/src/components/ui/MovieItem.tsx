import { FC, ReactElement } from "react";
import { IMovie } from "../Types";

interface MovieItemProps {
  movie: IMovie;
  setSelectMovie?: React.Dispatch<React.SetStateAction<IMovie | null>>;
}

export const MovieItem: FC<MovieItemProps> = ({
  movie,
  setSelectMovie,
}): ReactElement => {
  const handleClick = () => {
    if (!setSelectMovie) return;
    setSelectMovie(movie);
  };
  return (
    <div
      onClick={handleClick}
      className="flex  text-slate-50 items-center gap-4 border-b-[0.5px] border-b-orange-100  m-4 "
    >
      <div className="h-14">
        <img className="w-full h-full object-contain" src={movie.Poster} />
      </div>
      <div>
        <p className="font-bold">{movie.Title}</p>
        <p>{movie.Year}</p>
      </div>
    </div>
  );
};
