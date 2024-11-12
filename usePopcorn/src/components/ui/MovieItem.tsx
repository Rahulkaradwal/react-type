import { FC, ReactElement } from "react";
import { IMovie } from "../Types";

interface MovieItemProps {
  movie: IMovie;
}

export const MovieItem: FC<MovieItemProps> = ({ movie }): ReactElement => {
  return (
    <div className="flex text-slate-50 items-center gap-4 border-b-[0.1px] border-b-orange-100  m-4 ">
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
