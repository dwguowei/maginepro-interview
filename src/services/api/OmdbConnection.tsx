import axios, {AxiosResponse} from 'axios';
import {Video} from "../../components/card/Video";

const instance = axios.create({
  baseURL: 'https://www.omdbapi.com/',
  responseType: "json",
});

const omdbApiKey = process.env.REACT_APP_OMDB_API_KEY;

type VideoType = "movie" | "series" | "episode";

type Search = {imdbID: string, Title: string, Poster: string};
export type SearchResponse = {Response: string, Search: Search[]};
export type GetResponse = {
  Actors: string, Awards: string, BoxOffice?: string, Country: string, DVD: string,
  Director?: string, Genre: string, Language: string, Metascore: string, Plot: string,
  Poster: string, Production: string, Rated: string, Ratings: {Source: string, Value: string}[],
  Released: string, Response: string, Runtime: string,
  Title: string, Type:string, Website: string, Writer: string,
  Year: string, imdbID: string, imdbRating: string, imdbVotes: string
  totalSeasons?: string, Season?: string, Episode?: string,
};

export const searchVideos = (title: string, type: VideoType): Promise<AxiosResponse<SearchResponse>> => {

  const params = {
    apikey: omdbApiKey,
    s: title,
    type,
  }

  return instance.get("",{ params });
}

export const getVideo = (imdbID: string): Promise<AxiosResponse<GetResponse>> => {

  const params = {
    apikey: omdbApiKey,
    i: imdbID,
    plot: 'full',
  }

  return instance.get("",{ params });
}

export const readSearchResponse = (response: SearchResponse): Video[] => {
  if(response.Response === "True") {
    const data = response.Search.map(video => {return {imdbID: video.imdbID, title: video.Title, poster: video.Poster}});
    return data;
  }

  return []
}
