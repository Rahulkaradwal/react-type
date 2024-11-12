export interface IMovie {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
}

export interface IWatchedMovie extends IMovie {
  watched: boolean;
  id: number;
}
