export interface ITopRatedMovies<T> {
  page: number;
  total_results: number;
  total_pages: number;
  results: T;
}

export interface ITopRatedResults {
  popularity: number;
  vote_count: number;
  video: boolean;
  poster_path: string;
  id: number;
  adult: false;
  backdrop_path: string;
  original_language: string;
  original_title: string;
  genre_ids: number[];
  vote_average: number;
  overview: string;
  release_date: string;
  title: string;
}

export interface IGenreIds {
  id: number;
  name: string;
}

export interface IMapGenreIds {
  [id: number]: string | null;
}

export interface VerticalItemProps {
  isMargin: boolean;
}

export interface IMatchParams {
  id: string;
}

export interface ICardProps {
  card_info: ITopRatedResults;
  index: number;
  card_path: string;
}

export interface IStyleProps {
  padding?: string;
  margin?: string;
  width?: string;
  height?: string;
  fontSize?: string;
}
