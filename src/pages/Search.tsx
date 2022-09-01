import React, {useState} from "react";
import styled from "styled-components";
import {AxiosResponse} from "axios";
import Label from "../components/form/Label";
import Input from "../components/form/Input";
import Button from "../components/form/Button";
import VideoCard, {Video} from "../components/card/Video";
import {searchVideos, readSearchResponse, SearchResponse} from "../services/api/OmdbConnection";

const SearchBarContainer = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
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
  const [movies, setMovies] = useState<Video[]>([]);
  const [series, setSeries] = useState<Video[]>([]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    searchVideos(title, "movie").then((result: AxiosResponse<SearchResponse>) => {
      const videos = readSearchResponse(result.data);
      setMovies(videos)
    });

    searchVideos(title, "series").then((result: AxiosResponse<SearchResponse>) => {
      const videos = readSearchResponse(result.data);
      setSeries(videos)
    });

  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    if(event.currentTarget.name === "title") {
      setTitle(event.currentTarget.value)
    }
  }

  return (
    <>
      <SearchBarContainer onSubmit={(e) => handleSubmit(e)}>
        <Label>Search Videos:</Label>
        <Input name="title" type="text" placeholder="Please enter a movie title" value={title} onChange={(e) => handleInputChange(e)}/>
        <Button type="submit" disabled={!title || title.length < 3}>Search</Button>
      </SearchBarContainer>
      <SearchResultContainer>
        <CategoryTitle>Movies</CategoryTitle>
        <VideoContainer>
          {movies && movies.length > 0
            ? movies.map((video) => <VideoCard key={video.imdbID}  imdbID={video.imdbID} poster={video.poster} title={video.title} />)
            : <div>No Movies Found</div>
          }
        </VideoContainer>

        <CategoryTitle>Series</CategoryTitle>
        <VideoContainer>
          {series && series.length > 0
            ? series.map((video) => <VideoCard key={video.imdbID}  imdbID={video.imdbID} poster={video.poster} title={video.title} />)
            : <div>No Series Found</div>
          }
        </VideoContainer>

      </SearchResultContainer>
    </>
  )
}

export default Search;
