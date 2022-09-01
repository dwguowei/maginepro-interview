import axios, {AxiosResponse} from 'axios';
import {Video} from "@/components/card/Video";

const instance = axios.create({
  baseURL: 'https://www.omdbapi.com/',
  responseType: "json",
});

const omdbApiKey = process.env.REACT_APP_OMDB_API_KEY;

type VideoType = "movie" | "series" | "episode";

type Search = {imdbID: string, Title: string, Poster: string};
export type Response = {Response: string, Search: Search[]};

export const searchVideos = (title: string, type: VideoType): Promise<AxiosResponse<Response>> => {

  const params = {
    apikey: omdbApiKey,
    s: title,
    type,
  }

  return instance.get("",{ params });
}

export const readResponse = (response: Response): Video[] => {
  if(response.Response === "True") {
    const data = response.Search.map(video => {return {imdbID: video.imdbID, title: video.Title, poster: video.Poster}});
    return data;
  }

  return []
}
