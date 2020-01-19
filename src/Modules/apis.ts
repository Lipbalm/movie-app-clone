import axios, { AxiosInstance } from "axios";
import {
  ITopRatedMovies,
  ITopRatedResults,
  IGenreIds,
  IMapGenreIds
} from "./Interfaces";

const apiKey = "f14b5a458d4b24203b40ecec534dfd0d";
const baseMoviesInstance: AxiosInstance = axios.create({
  baseURL: `https://api.themoviedb.org/3/movie`
});

const imageBaseURL: string = "https://image.tmdb.org/t/p/w500/";

let genreIds: IMapGenreIds[];

const getTopRatedMovie = (language: string, page: number) =>
  baseMoviesInstance
    .get<ITopRatedMovies<ITopRatedResults[]>>(
      `/top_rated?api_key=${apiKey}&language=${language}&page=${page}`
    )
    .then(response => response.data);

const getGenreIds = (language: string) =>
  axios
    .get<IGenreIds[]>(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=${language}`
    )
    .then(response => {
      response.data.forEach(v =>
        v.name === undefined ? (genreIds[v.id] = "") : (genreIds[v.id] = v.name)
      );
      return true;
    })
    .catch(e => e);

export { getTopRatedMovie, genreIds, getGenreIds, imageBaseURL };
