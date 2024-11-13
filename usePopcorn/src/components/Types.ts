export interface IMovie {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
  Description?: string;
  Rating?: string;
}

export interface IWatchedMovie extends IMovie {
  watched: boolean;
  id: number;
}
