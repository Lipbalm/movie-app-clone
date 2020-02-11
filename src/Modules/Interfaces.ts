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

export interface IImageCompnentProps {
  info: ITopRatedResults;
  index: number;
  path: string;
}

export interface IWidgetProps {
  head_text: string;
  info_list: ITopRatedResults[];
  head_link_path: string;
  item_path: string;
}

export interface IThemeWidgetProps extends IWidgetProps {
  big_item_info: ITopRatedResults;
  desc_tesx: string;
}

export interface IVideoProps {
  episode_number: number;
  title: string;
  air_date: string;
  overview: string;
  image_path: string;
  episode_id: number;
}

export interface IListProps<T> {
  items: Array<T>;
}
