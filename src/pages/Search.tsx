import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {AxiosResponse} from "axios";
import { Helmet } from 'react-helmet';

import Label from "../components/form/Label";
import Input from "../components/form/Input";
import Button from "../components/form/Button";
import VideoCard, {Video} from "../components/card/Video";
import {searchVideos, readSearchResponse, SearchResponse, ErrorResponse} from "../services/api/OmdbConnection";
import {useQuery} from "react-query";
import {device} from "../styles/breakpoints";

const SearchBarContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  padding: 10px;

  @media ${device.md} {
    flex-direction: row;
    align-items: center;
    max-width: 900px;
    margin: 0 auto;
  }
`;

const SearchResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const CategoryTitle = styled.div`
  font-size: larger;
  font-weight: 700;
  margin-top: 40px;
  margin-bottom: 10px;
`;

const VideoContainer = styled.div`
  display: flex;
  gap: 10px;
  overflow-x: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`;

function Search () {

  const [title, setTitle] = useState("");
  const [movies, setMovies] = useState<Video[]>();
  const [series, setSeries] = useState<Video[]>([]);

  const {
    isLoading: isMovieLoading, isFetching: isMovieFetching, refetch: movieRefetch,
    error: movieError, data: movieData
  } = useQuery(
    ["searchMovie"],
    () => searchVideos(title, "movie").then((result: AxiosResponse<SearchResponse | ErrorResponse>) => result.data),
    {refetchOnWindowFocus: false, enabled: false /* disable this query from automatically running */}
  );

  const {
    isLoading: isSeriesLoading, isFetching: isSeriesFetching, refetch: seriesRefetch,
    error: seriesError, data: seriesData
  } = useQuery(
    ["searchSeries"],
    () => searchVideos(title, "series").then((result: AxiosResponse<SearchResponse | ErrorResponse>) => result.data),
    {refetchOnWindowFocus: false, enabled: false /* disable this query from automatically running */}
  );

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    movieRefetch();
    seriesRefetch();
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    if(event.currentTarget.name === "title") {
      setTitle(event.currentTarget.value)
    }
  }

  useEffect(() => {
    if (title) {
      movieRefetch();
      seriesRefetch();
    }
  },[movieRefetch, seriesRefetch])

  useEffect(() => {

    const videos = readSearchResponse(movieData);
    if (typeof videos !== "string") {
      setMovies(videos)
    }
  }, [movieData])

  useEffect(() => {
    const videos = readSearchResponse(seriesData);
    if (typeof videos !== "string") {
      setSeries(videos)
    }
  }, [seriesData])

  return (
    <>
      <Helmet>
        <title>FilmDB - Search</title>
        <meta name="description" content="Find movies at your finger tips" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="FilmDB - Search" />
        <meta name="twitter:description" content="Find movies at your finger tips" />
        <meta name="twitter:image" content="https://dwguowei.github.io/maginepro-interview/logo.png"/>
        <meta property="og:title" content="FilmDB - Search" />
        <meta property="og:description" content="Find movies at your finger tips" />
        <meta property="og:image" content="https://dwguowei.github.io/maginepro-interview/logo.png"/>
        <meta property="og:url" content="https://dwguowei.github.io/maginepro-interview/" />
        <meta property="og:site_name" content="FilmDB" />
        <meta property="og:locale" content="en_US" />
      </Helmet>
      <SearchBarContainer onSubmit={(e) => handleSubmit(e)}>
        <Label whiteSpace="nowrap" >Search Videos:</Label>
        <Input
          name="title" type="text" placeholder="Please enter a movie title"
          value={title} onChange={(e) => handleInputChange(e)}
          disabled={isMovieFetching || isSeriesFetching}
        />
        <Button type="submit" disabled={!title || title.length < 3 || isMovieFetching || isSeriesFetching}>Search</Button>
      </SearchBarContainer>
      <SearchResultContainer>
        <CategoryTitle>Movies</CategoryTitle>
        <VideoContainer>
          {isMovieLoading || (movies?.length === 0 && isMovieFetching)
            ? <div>Searching for movies</div>
            : movies && movies.length > 0
              ? movies.map((video) => {
                return <VideoCard key={video.imdbID}  imdbID={video.imdbID} poster={video.poster} title={video.title} />
              })
              : <div>No Movies Found</div>
          }
        </VideoContainer>

        <CategoryTitle>Series</CategoryTitle>
        <VideoContainer>
          {isSeriesLoading || (series?.length === 0 && isSeriesFetching)
            ? <div>Searching for series</div>
            : series && series.length > 0
              ? series.map((video) => {
                return <VideoCard key={video.imdbID}  imdbID={video.imdbID} poster={video.poster} title={video.title} />
              })
              : <div>No Series Found</div>
          }
        </VideoContainer>

      </SearchResultContainer>
    </>
  )
}

export default Search;
