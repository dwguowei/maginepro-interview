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
  Title: string, Year: string, Genre: string, Actors: string, Country: string,
  Language: string, Plot: string, Poster: string, Released: string, Runtime: string,
  Season: string, Episode: string, Director: string
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
